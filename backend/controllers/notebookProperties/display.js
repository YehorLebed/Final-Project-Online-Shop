const { Display } = require('../../models/');

const displayControllers = {
  root: {
    async getDisplayById({ id }) {
      try {
        const display = await Display.findByPk(id);
        if (display) return display;
        throw new Error(`No display with current id: ${id}`)
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getDisplays() {
      try {
        const displays = await Display.findAll();
        return displays;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async createDisplay({ display }) {
      try {
        const exists = await Display.findOne({ where: { ...display } });
        if (!exists) {
          const newDisplay = await Display.create(display);
          return newDisplay;
        }
        throw new Error(`Display ${display} already exists`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async updateDisplay({ display }) {
      try {
        const exists = await Display.findByPk(display.id);
        if (exists) {
          await exists.update(display);
          return exists;
        }
        throw new Error(`No display with current id: ${display.id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async deleteDisplayById({ id }) {
      try {
        const exists = await Display.findByPk(id);
        if (exists) {
          const deletedId = Display.destroy({ where: { id } });
          return deletedId;
        }
        throw new Error(`No dispaly with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },

  schema: {
    type: `
      type Display {
        id: Int,
        grade: Int,
        matrix: String,
        diagonal: Float,
        resolution: String,
        createdAt: String,
        updatedAt: String
      }
    `,
    typeInput: `
      input DisplayInput {
        id: Int,
        grade: Int,
        matrix: String,
        diagonal: Float,
        resolution: String,
      }
    `,
    typeQuery: `
      getDisplayById(id: Int): Display
      getDisplays: [Display]
    `,
    typeMutation: `
      createDisplay(display: DisplayInput): Display
      updateDisplay(display: DisplayInput): Display
      deleteDisplayById(id: Int): Int
    `
  }
};

module.exports = displayControllers;