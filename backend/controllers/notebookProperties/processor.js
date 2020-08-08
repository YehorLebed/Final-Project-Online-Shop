const { Processor } = require('../../models/');

const processorControllers = {
  root: {
    async getProcessorById({ id }) {
      try {
        const processor = await Processor.findByPk(id);
        if (processor) return processor;
        throw new Error(`No processor with current id: ${id}`)
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getProcessors() {
      try {
        const processors = await Processor.findAll();
        console.log('processors:', processors)
        return processors;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async createProcessor({ processor }) {
      try {
        const exists = await Processor.findOne({ where: { title: processor.title } });
        if (!exists) {
          const newProcessor = await Processor.create(processor);
          return newProcessor;
        }
        throw new Error(`Processor with title: ${processor.title} already exists`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async updateProcessor({ processor }) {
      try {
        const exists = await Processor.findByPk(processor.id);
        if (exists) {
          await exists.update(processor);
          return exists;
        }
        throw new Error(`No processor with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async deleteProcessorById({ id }) {
      try {
        const exists = await Processor.findByPk(id);
        if (exists) {
          const deletedId = Processor.destroy({ where: { id } });
          return deletedId;
        }
        throw new Error(`No processor with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },

  schema: {
    type: `
      type Processor {
        id: Int,
        grade: Int,
        title: String,
        frequency: Float,
        createdAt: String,
        updatedAt: String
      }
    `,
    typeInput: `
      input ProcessorInput {
        id: Int,
        grade: Int,
        title: String,
        frequency: Float
      }
    `,
    typeQuery: `
      getProcessorById(id: Int): Processor
      getProcessors: [Processor]
    `,
    typeMutation: `
      createProcessor(processor: ProcessorInput): Processor
      updateProcessor(processor: ProcessorInput): Processor
      deleteProcessorById(id: Int): Int
    `
  }
};

module.exports = processorControllers;