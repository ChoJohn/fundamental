export const TestRunner = (userCode, testCases) => {
  return new Promise((resolve) => {
      const worker = new Worker('/fundamental/worker.js');
      worker.onmessage = (event) => {
          resolve(event.data);
          worker.terminate();
      };
      
      worker.postMessage({ userCode, testCases });
  });
};
