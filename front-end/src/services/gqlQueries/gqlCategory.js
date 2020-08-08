export const queryGetCategoryById = `
  query getCategoryById($id: Int) {
    getCategoryById(id: $id) {
      id, title, 
      parent { id title }, 
      notebooks { id, title, price }, 
      subCategories { id, title }
    }
  }
`;

export const queryGetCategories = `
  query getCategories {
    getCategories {
      id, title, 
      parent { id title }, 
      notebooks { id, title, price }, 
      subCategories { id, title }
    }
  }
`;

export const mutationCreateCategory = `
  mutation createCategory($category: CategoryInput) {
    createCategory(category: $category) {
      id, title, 
    }
  }
`;

export const mutationUpdateCategory = `
  mutation updateCategory($category: CategoryInput) {
    updateCategory(category: $category) {
      id, title, 
    }
  }
`;

export const mutationDeleteCategoryById = `
  mutation getCategoryById($id: Int) {
    getCategoryById(id: $id)
  }
`