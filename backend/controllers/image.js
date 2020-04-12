const { Image } = require('../models');

const imageControllers = {

  async getImages(query) {
    const images = await Image.findAll({ where: query });
    if (!images) throw new Error('No images found');
    return images
  },

  async createImage({ image }) {
    const imageExists = await Image.findOne({ where: { fileName: image.fileName } });
    if (imageExists) throw new Error('Image with current url already exists');
    return await Image.create(image);
  },
  
  imageSchema: {
    typeQuery: `
      getImages(query: String): [Image]
    `,
    typeMutation: `
      createImage(image: ImageInput): Image
    `,
    typeImageInput: `
      input ImageInput {
        filename: String,
        originalname: String,
        good: Int,
        user: Int,
      }
    `,
    typeImage: `
      type Image {
        id: Int
        filename: String
        originalname: String
      }
    `
  }
}

module.exports = imageControllers;