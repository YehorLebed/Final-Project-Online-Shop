const { Image } = require('../models');

const imageControllers = {

  schema: {
    type: `
      type Image {
        id: Int,
        filename: String,
        originalname: String,
        createdAt: String,
        updatedAt: String
      }
    `,

    typeInput: `
      input ImageInput {
        id: Int,
        userId: Int,
        notebookId: Int,
        filename: String,
        originalname: String
      }
    `,
  }
}

module.exports = imageControllers;