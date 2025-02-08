import { useContext } from 'react';
import { DataContext } from '../../../containers/Dashboard';
import './index.css';
import { Body } from '../../Library/Body';
import { Button } from '../../Library/Button';
import { SubheaderSpan } from '../../utils/Font';
import '../../utils/DarkMode/index.css';

const DarkMode = () => {
    const dataContext = useContext(DataContext);

    return (
        <Body>
            <div className='dark-mode-setting'>
                <SubheaderSpan>Dark Mode</SubheaderSpan>
                <Button onClick={() => dataContext.dispatch({type: 'TOGGLE_DARK_MODE'})} type={dataContext.state.darkMode ? 'in': 'out'}>
                    {
                        dataContext.state.darkMode
                        ? 'ON'
                        : 'OFF'
                    }
                </Button>
            </div>
        </Body>
    )
};

export default DarkMode;