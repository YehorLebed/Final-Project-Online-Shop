const { Image } = require('../models');

const imageControllers = {

  imageSchema: {
    typeQuery: `
      
    `,
    typeMutation: `
      
    `,
    typeImageInput: `
      type ImageInput {
        url: String,
        fileName: String,
        good: Good,
        user: User,
        category: Category
      }
    `,
    typeImage: `
      type Image {
        id: Int
        url: String,
        fileName: String
      }
    `
  }
}

module.exports = imageControllers;