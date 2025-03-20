// src/services/BackendService.ts

interface TestData {
  title: string;
  content: string;
}

// Assign the object to a variable
const BackendService = {
  getTestData: async (): Promise<TestData> => {
    // Simulate an API call or fetch data from a backend
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: 'Test Title',
          content: 'This is some test content fetched from the backend.',
        });
      }, 1000); // Simulate a delay
    });
  },
};

// Export the variable as the default export
export default BackendService;