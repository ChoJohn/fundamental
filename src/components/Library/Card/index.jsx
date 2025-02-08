import { useContext } from 'react';
import './index.css';
import '../../utils/DarkMode/index.css';
import { DataContext } from '../../../containers/Dashboard';


const CSSLogic = (type, isDarkMode) => {
    if (isDarkMode) {
        if (type === 'flat') {
            return 'card-container'
        } else if (type === 'in') {
            return 'card-container dark-mode-in'
        } else if (type === 'out') {
            return 'card-container dark-mode-out'
        }
    } else {
        if (type === 'flat') {
            return 'card-container'
        } else if (type === 'in') {
            return 'card-container light-mode-in'
        } else if (type === 'out') {
            return 'card-container light-mode-out'
        }
    }
}


export const Card = ({ children, type='flat', width, height, direction='column' }) => {
    const dataContext = useContext(DataContext);
    const css = CSSLogic(type, dataContext.state.darkMode)
    return (
        <div className={css}
            style={{ width, height }}
        >
            <div className='card'
                style={{ flexDirection: direction }}
            >
                { children }
            </div>
        </div>
    );
};