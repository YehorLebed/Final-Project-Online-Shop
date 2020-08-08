export const queryGetNotebooksWithFullInfo = `
  query getNotebooksWithFullInfo {
    getNotebooks {
      id, price, title, description,
      ram {id, grade, capacity, type}, 
      rom {id, grade, capacity, type} 
      images {id, originalname, filename}, 
      battery {id, time, grade, capacity}, 
      processor {id, title, grade, frequency}, 
      display {id, matrix, grade, diagonal, resolution}, 
    }
  }
`;

export const queryGetNotebooks = `
  query getNotebooks {
    getNotebooks {
      id, price, title, description, 
      images {id, originalname, filename}
    }
  }
`;

export const queryGetNotebookById = `
  query getNotebookById($id: Int) {
    getNotebookById(id: $id) {
      id, price, title, description,
      ram {id, grade, capacity, type}, 
      rom {id, grade, capacity, type} 
      images {id, originalname, filename}, 
      battery {id, time, grade, capacity}, 
      processor {id, title, grade, frequency}, 
      display {id, matrix, grade, diagonal, resolution}, 
    }
  }
`;

export const mutationCreateNotebook = `
  mutation createNotebook($notebook: NotebookInput) {
    createNotebook(notebook: $notebook) {
      id, price, title, description,
      ram {id, grade, capacity, type}, 
      rom {id, grade, capacity, type} 
      images {id, originalname, filename}, 
      battery {id, time, grade, capacity}, 
      processor {id, title, grade, frequency}, 
      display {id, matrix, grade, diagonal, resolution}, 
    }
  }
`;

export const mutationUpdateNotebook = `
  mutation updateNotebook($notebook: NotebookInput) {
    updateNotebook(notebook: $notebook) {
      id, price, title, description,
      ram {id, grade, capacity, type}, 
      rom {id, grade, capacity, type} 
      images {id, originalname, filename}, 
      battery {id, time, grade, capacity}, 
      processor {id, title, grade, frequency}, 
      display {id, matrix, grade, diagonal, resolution}, 
    }
  }
`;

export const mutationDeleteNotebookById = `
  mutation deleteNotebookById($id: Int) {
    deleteNotebookById(id: $id)
  }
`;