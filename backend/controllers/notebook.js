const { Notebook, Image } = require('../models/');
const { Op } = require('sequelize');
const pathRoot = require('../root');
const path = require('path');
const fs = require('fs');

function deleteImageFile({ filename, originalname }) {
  const pathToFile = path.join(pathRoot, 'public', 'images', filename);
  console.log('pathToFile: ', pathToFile);
  fs.unlink(pathToFile, err => {
    if (err) console.error(`Image ${originalname} was not deleted`);
  });
}

const notebookControllers = {
  root: {
    async getNotebookById({ id }) {
      try {
        const notebook = await Notebook.findByPk(id);
        if (notebook) return notebook;
        throw new Error(`No notebook with current id: ${id}`)
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getNotebooks() {
      try {
        const notebooks = await Notebook.findAll();
        console.log(notebooks);
        return notebooks;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async createNotebook({ notebook }) {
      console.log(notebook);
      const { images, ...notebookInf } = notebook;
      try {
        const exists = await Notebook.findOne({
          where: { title: notebookInf.title }
        });
        if (!exists) {
          const newNotebook = await Notebook.create(notebook);
          const newImages = await Image.bulkCreate(images);
          await newNotebook.setImages(newImages);
          return newNotebook;
        }
        throw new Error(`Notebook with title: ${notebook.title} already exists`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async updateNotebook({ notebook }) {
      console.log(notebook);
      const { images, ...notebookInf } = notebook;
      try {
        const exists = await Notebook.findOne({ where: { id: notebookInf.id } });
        if (!exists) throw new Error(`Update Error: no notebook found`);

        const notebookImages = await Image.findAll({ where: { notebookId: exists.id } });
        notebookImages.forEach(async (notebookImage) => {
          const { filename, originalname } = notebookImage;
          const imageExists = images.find(image => image.filename === filename && image.originalname === originalname);
          if (!imageExists) deleteImageFile({ filename, originalname });
          await notebookImage.destroy();
        });

        await exists.update(notebook);
        images.forEach(async ({ filename, originalname }) => await exists.createImage({ filename, originalname }))
        return exists;

      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async deleteNotebookById({ id }) {
      try {
        const exists = await Notebook.findByPk(id);
        if (exists) {
          const images = await Image.findAll({ where: { notebookId: id } });
          images.forEach(async (image) => {
            console.log('image: ', image)
            deleteImageFile(image);
            await image.destroy();
          });

          const deletedId = await Notebook.destroy({ where: { id } });
          return deletedId;
        }
        throw new Error(`No notebook with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },

  schema: {
    type: `
      type Notebook {
        id: Int,
        price: Float,
        title: String,
        description: String
        processor: Processor,
        display: Display,
        battery: Battery,
        images: [Image],
        ram: RAM,
        rom: ROM,
        createdAt: String,
        updatedAt: String
      }
    `,

    typeInput: `
      input NotebookInput {
        id: Int,
        price: Float,
        title: String,
        description: String
        images: [ImageInput],
        processorId: Int
        displayId: Int
        batteryId: Int
        ramId: Int
        romId: Int
      }
    `,

    typeQuery: `
      getNotebookById(id: Int): Notebook
      getNotebooks: [Notebook]
    `,

    typeMutation: `
      createNotebook(notebook: NotebookInput): Notebook
      updateNotebook(notebook: NotebookInput): Notebook
      deleteNotebookById(id: Int): Int
    `
  }
};

module.exports = notebookControllers;