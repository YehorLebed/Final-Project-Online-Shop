const { Category } = require('../models');

const categoryControllers = {

  categorySchema: {
    typeQuery: `
      
    `,
    typeMutation: `
      
    `,
    typeCategoryInput: `
      type CategoryInput {
        name: String,
        image: Image,
        goods: [Good],
        parent: Category,
        subCategories: [Category]
      }
    `,
    typeCategory: `
      type Category {
        id: Int,
        name: String,
        image: Image,
        goods: [Good],
        parent: Category,
        subCategories: [Category],
      }
    `
  }
}

module.exports = categoryControllers;