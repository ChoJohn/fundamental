import { Body } from '../components/Library/Body';
import { Row, Column } from '../components/utils/FlexBox';
import { Header } from '../components/utils/Font';
import DarkMode from '../components/Settings/DarkMode';

const Settings = () => {
    return (
        <Body type={'in'}>
            <Header>Settings</Header>
            <Row>
                <Column grow={1}>
                    <DarkMode />
                </Column>
            </Row>
        </Body>
    );
};

export default Settings;