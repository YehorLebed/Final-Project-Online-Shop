export const queryGetProcessors = `
  query getProcessors {
    getProcessors { 
      id, title, frequency, grade 
    }
  }
`;

export const queryGetProcessorById = `
  query getProcessorById($id: Int) {
    getProcessorById(id: $id) { 
      id, title, frequency, grade 
    }
  }
`;

export const mutationCreateProcessor = `
  mutation addProcessor($processor: ProcessorInput) {
    createProcessor(processor: $processor) { 
      id, title, frequency, grade 
     }
  }
`;

export const mutationUpdateProcessor = `
  mutation updateProcessor($processor: ProcessorInput) {
    updateProcessor(processor: $processor) { 
      id, title, frequency, grade
    }
  }
`;

export const mutationDeleteProcessorById = `
  mutation deleteProcessorById($id: Int) {
    deleteProcessorById(id: $id)
  }
`;