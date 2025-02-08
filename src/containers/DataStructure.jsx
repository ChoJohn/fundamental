
import { Row, Column } from '../components/utils/FlexBox';
import { Header } from '../components/utils/Font';

import BFS from '../components/DataStructure/BFS';
import DFS from '../components/DataStructure/DFS';

const DataStructure = () => {
    return (
        <div className='data-structure-container'>
            <Header>Data Structure</Header>
            <Row>
                <Column grow={1}>
                    <BFS />
                </Column>
            </Row>
            <Row>
                <Column grow={1}>
                    <DFS />
                </Column>
            </Row>
        </div>
    );
};

export default DataStructure;