import './index.css';
import '../../utils/DarkMode/index.css';
import { Row, Column } from '../../utils/FlexBox';
import { Card } from '../../Library/Card/index';
import { Header } from '../../utils/Font';
  
const Progress = () => {
    return (
        <Card type={'in'}>
            <Header>Progress</Header>

            <Row>
                <Column grow={1} width={'33%'}>
                    <div>Complete: 0 / 10</div>
                </Column>
                <Column grow={1} width={'33%'}>
                    <div>Total Iterations : 0</div>
                </Column>
                <Column grow={1} width={'33%'}>
                    <div>Streak: 0 Days</div>
                </Column>
            </Row>
        </Card>
    );
};
  
export default Progress;
