export const queryGetDisplays = `
  query getDisplays {
    getDisplays {
      id, matrix, diagonal, resolution, grade
    }
  }
`;

export const queryGetDisplayById = `
  query getDisplayById($id: Int) {
    getDisplayById(id: $id) {
      id, matrix, diagonal, resolution, grade
    }
  }
`;

export const mutationCreateDisplay = `
  mutation createDisplay($display: DisplayInput) {
    createDisplay(display: $display) {
      id, matrix, diagonal, resolution, grade
    }
  }
`;

export const mutationUpdateDisplay = `
  mutation updateDisplay($display: DisplayInput) {
    updateDisplay(display: $display) {
      id, matrix, diagonal, resolution, grade
    }
  }
`;

export const mutationDeleteDisplayById = `
  mutation deleteDisplayById($id: Int) {
    deleteDisplayById(id: $id)
  }
`