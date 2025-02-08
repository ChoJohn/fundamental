import { Card } from '../Card';
import './index.css';


export const Idle = ( props ) => {
    const { userCode, handleCodeChange } = props;
  
  return (
    <Card type={ 'in' }>
        <textarea
            value={userCode}
            onChange={handleCodeChange}
            placeholder="Write your code here"
            rows="10"
            cols="50"
            className="idle-textarea"
        ></textarea>
    </Card>
  );
};