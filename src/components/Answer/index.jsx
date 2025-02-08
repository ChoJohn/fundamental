import { useState } from "react";
import { Card } from '../Library/Card';
import { Button } from '../Library/Button';
import { Center } from '../utils/FlexBox'
import './index.css';

import { Idle } from '../Library/Idle';
import { TestRunner } from './TestRunner';


const Answer = ({ question }) => {
  const [userCode, setUserCode] = useState(question.preCode || '');
  const [testResults, setTestResults] = useState([]);

  const handleCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const handleRunTests = async () => {
    const results = await TestRunner(userCode, question.test);
    setTestResults(results);
};

  return (
    <Card>
      <Idle userCode={userCode} handleCodeChange={handleCodeChange} />

      <Center>
        <Button
          onClick={handleRunTests}
          type={'out'}
        >
            Run Test
        </Button>
      </Center>

      <div>
          <h2>Test Results:</h2>
          <ul>
              {testResults.map((result, index) => (
                  <li key={index} style={{ color: result.passed ? 'green' : 'red' }}>
                      <strong>{result.description}:</strong> {result.passed ? 'Passed' : `Failed (Expected: ${JSON.stringify(result.expected)}, Got: ${JSON.stringify(result.output)})`}
                  </li>
              ))}
          </ul>
      </div>
    </Card>
  );
};

export default Answer;
