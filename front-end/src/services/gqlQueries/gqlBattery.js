export const queryGetBatteryById = `
  query getBatteryById($batteryId: Int) {
    getBatteryById(id: $batteryId) {
      id, time, grade, capacity
    }
  }
`;

export const queryGetBatteries = `
  query getBatteries {
    getBatteries {
      id, time, grade, capacity
    }
  }
`;

export const mutationCreateBattery = `
  mutation createBattery($battery: BatteryInput) {
    createBattery(battery: $battery) {
      id, time, grade, capacity
    }
  }
`;

export const mutationUpdateBattery = `
  mutation updateBattery($battery: BatteryInput) {
    updateBattery(battery: $battery) {
      id, time, grade, capacity
    }
  }
`;

export const mutationDeleteBatteryById = `
  mutation deleteBatteryById($id: Int) {
    deleteBatteryById(id: $id)
  }
`;