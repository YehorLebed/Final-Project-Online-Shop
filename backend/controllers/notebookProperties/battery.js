const { Battery } = require('../../models/');

const batteryControllers = {
  root: {
    async getBatteryById({ id }) {
      try {
        const battery = await Battery.findByPk(id);
        if (battery) return battery;
        throw new Error(`No battery with current id: ${id}`)
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getBatteries() {
      try {
        const batteries = await Battery.findAll();
        return batteries;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async createBattery({ battery }) {
      try {
        const exists = await Battery.findOne({ where: { ...battery } });
        if (!exists) {
          const newBattery = await Battery.create(battery);
          return newBattery;
        }
        throw new Error(`Battery ${battery} already exists`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async updateBattery({ battery }) {
      try {
        const exists = await Battery.findByPk(battery.id);
        if (exists) {
          await exists.update(battery);
          return exists;
        }
        throw new Error(`No battery with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async deleteBatteryById({ id }) {
      try {
        const exists = await Battery.findByPk(id);
        if (exists) {
          const deletedId = Battery.destroy({ where: { id } });
          return deletedId;
        }
        throw new Error(`No battery with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },

  schema: {
    type: `
      type Battery {
        id: Int,
        time: Int,
        grade: Int,
        capacity: Int,
        createdAt: String,
        updatedAt: String
      }
    `,
    typeInput: `
      input BatteryInput {
        id: Int,
        time: Int,
        grade: Int,
        capacity: Int
      }
    `,
    typeQuery: `
      getBatteryById(id: Int): Battery
      getBatteries: [Battery]
    `,
    typeMutation: `
      createBattery(battery: BatteryInput): Battery
      updateBattery(battery: BatteryInput): Battery
      deleteBatteryById(id: Int): Int
    `
  }
};

module.exports = batteryControllers;