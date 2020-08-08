const { Category } = require('../models/');
const fs = require('fs');

const categoryControllers = {
  root: {
    async getCategoryById({ id }) {
      try {
        const category = await Category.findByPk(id);
        if (category) return category;
        throw new Error(`No category with current id: ${id}`)
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getCategories() {
      try {
        const categories = await Category.findAll();
        if (categories.length != 0) return categories;
        throw new Error(`No category found`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async createCategory({ category }) {
      try {
        const exists = await Category.findOne({ where: { title: categoryInf.title } });
        if (!exists) {
          const newCategory = await Category.create(category);
          return newCategory;
        }
        throw new Error(`Category with title: ${category.title} already exists`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async updateCategory({ category }) {
      try {
        const exists = await Category.findOne({ where: { id: categoryInf.id } });
        if (exists) {
          const updatedCategory = await Category.update(category, { where: { id: categoryInf.id } });
          return updatedCategory;
        }
        throw new Error(`Category with title: ${category.title} already exists`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async deleteCategoryById({ id }) {
      try {
        const exists = await Category.findByPk(id);
        if (exists) {
          const deletedId = await Category.destroy({ where: { id } });
          return deletedId;
        }
        throw new Error(`No category with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },

  schema: {
    type: `
      type Category {
        id: Int,
        title: String,
        parent: Category,
        notebooks: [Notebook],
        subCategories: [Category],
        createdAt: String,
        updatedAt: String
      }
    `,

    typeInput: `
      input CategoryInput {
        id: Int,
        title: String,
        parent: CategoryInput,
        notebooks: [NotebookInput],
        subCategories: [CategoryInput]
      }
    `,

    typeQuery: `
      getCategoryById(id: Int): Category
      getCategories: [Category]
    `,

    typeMutation: `
      createCategory(category: CategoryInput): Category
      updateCategory(category: CategoryInput): Category
      deleteCategoryById(id: Int): Int
    `
  }
};

module.exports = categoryControllers;