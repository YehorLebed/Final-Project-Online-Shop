export const queryGetROMById = `
  query getROMById($id: Int) {
    getROMById(id: $id) {
      id, type, capacity, grade
    }
  }
`;

export const queryGetROMs = `
  query getROMs {
    getROMs {
      id, type, capacity, grade
    }
  }
`;

export const mutationCreateROM = `
  mutation createROM($rom: ROMInput) {
    createROM(rom: $rom) {
      id, type, capacity, grade
    }
  }
`;

export const mutationUpdateROM = `
  mutation updateROM($rom: ROMInput) {
    updateROM(rom: $rom) {
      id, type, capacity, grade
    }
  }
`;

export const mutationDeleteROMById = `
  mutation deleteROMById($id: Int) {
    deleteROMById(id: $id)
  }
`;