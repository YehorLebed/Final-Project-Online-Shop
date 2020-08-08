const { ROM } = require('../../models/');

const romControllers = {
  root: {
    async getROMById({ id }) {
      try {
        const rom = await ROM.findByPk(id);
        if (rom) return rom;
        throw new Error(`No rom with current id: ${id}`)
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getROMs() {
      try {
        const roms = await ROM.findAll();
        return roms;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async createROM({ rom }) {
      try {
        const exists = await ROM.findOne({ where: { ...rom } });
        if (!exists) {
          const newROM = await ROM.create(rom);
          return newROM;
        }
        throw new Error(`ROM ${rom} already exists`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async updateROM({ rom }) {
      try {
        const exists = await ROM.findByPk(rom.id);
        if (exists) {
          await exists.update(rom);
          return exists;
        }
        throw new Error(`No rom with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async deleteROMById({ id }) {
      try {
        const exists = await ROM.findByPk(id);
        if (exists) {
          const deletedId = ROM.destroy({ where: { id } });
          return deletedId;
        }
        throw new Error(`No rom with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },

  schema: {
    type: `
      type ROM {
        id: Int,
        grade: Int,
        type: String,
        capacity: Int,
        createdAt: String,
        updatedAt: String
      }
    `,
    typeInput: `
      input ROMInput {
        id: Int,
        grade: Int,
        type: String,
        capacity: Int
      }
    `,
    typeQuery: `
      getROMById(id: Int): ROM
      getROMs: [ROM]
    `,
    typeMutation: `
      createROM(rom: ROMInput): ROM
      updateROM(rom: ROMInput): ROM
      deleteROMById(id: Int): Int
    `
  }
};

module.exports = romControllers;