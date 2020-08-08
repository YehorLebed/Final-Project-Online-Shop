const { RAM } = require('../../models/');

const ramControllers = {
  root: {
    async getRAMById({ id }) {
      try {
        const ram = await RAM.findByPk(id);
        if (ram) return ram;
        throw new Error(`No ram with current id: ${id}`)
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getRAMs() {
      try {
        const rams = await RAM.findAll();
        return rams;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async createRAM({ ram }) {
      try {
        const exists = await RAM.findOne({ where: { ...ram } });
        if (!exists) {
          const newRAM = await RAM.create(ram);
          return newRAM;
        }
        throw new Error(`RAM ${ram} already exists`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async updateRAM({ ram }) {
      try {
        const exists = await RAM.findByPk(ram.id);
        if (exists) {
          await exists.update(ram)
          return exists;
        }
        throw new Error(`No ram with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async deleteRAMById({ id }) {
      try {
        const exists = await RAM.findByPk(id);
        if (exists) {
          const deletedId = RAM.destroy({ where: { id } });
          return deletedId;
        }
        throw new Error(`No ram with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },

  schema: {
    type: `
      type RAM {
        id: Int,
        grade: Int,
        type: String,
        capacity: Int,
        createdAt: String,
        updatedAt: String
      }
    `,
    typeInput: `
      input RAMInput {
        id: Int,
        grade: Int,
        type: String,
        capacity: Int
      }
    `,
    typeQuery: `
      getRAMById(id: Int): RAM
      getRAMs: [RAM]
    `,
    typeMutation: `
      createRAM(ram: RAMInput): RAM
      updateRAM(ram: RAMInput): RAM
      deleteRAMById(id: Int): Int
    `
  }
};

module.exports = ramControllers;