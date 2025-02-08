onmessage = function (e) {
  const { userCode, testCases } = e.data;
  let results = [];

  try {
      const userFunction = new Function(`return ${userCode}`)();
      results = testCases.map(test => {
          try {
              const output = userFunction(...test.input);
              console.log('output', output)
              return {
                  description: test.description,
                  passed: JSON.stringify(output) === JSON.stringify(test.expected),
                  expected: test.expected,
                  output: output
              };
          } catch (err) {
              return {
                  description: test.description,
                  passed: false,
                  error: err.message
              };
          }
      });
  } catch (error) {
      results = [{
          description: 'Code failed to execute',
          passed: false,
          error: error.message
      }];
  }

  postMessage(results);
};