export const queryGetRAMById = `
  query getRAMById($id: Int) {
    getRAMById(id: $id) {
      id, type, capacity, grade
    }
  }
`;

export const queryGetRAMs = `
  query getRAMs {
    getRAMs {
      id, type, capacity, grade
    }
  }
`;

export const mutationCreateRAM = `
  mutation createRAM($ram: RAMInput) {
    createRAM(ram: $ram) {
      id, type, capacity, grade
    }
  }
`;

export const mutationUpdateRAM = `
  mutation updateRAM($ram: RAMInput) {
    updateRAM(ram: $ram) {
      id, type, capacity, grade
    }
  }
`;

export const mutationDeleteRAMById = `
  mutation deleteRAMById($id: Int) {
    deleteRAMById(id: $id)
  }
`;