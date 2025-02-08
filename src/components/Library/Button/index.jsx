import { useContext } from 'react';
import { DataContext } from '../../../containers/Dashboard';
import './index.css';

const CSSLogic = (type, isDarkMode) => {
    if (isDarkMode) {
        if (type === 'flat') {
            return 'toggle'
        } else if (type === 'in') {
            return 'toggle button-font dark-mode-in'
        } else if (type === 'out') {
            return 'toggle button-font dark-mode-out'
        }
    } else {
        if (type === 'flat') {
            return 'toggle button-font'
        } else if (type === 'in') {
            return 'toggle button-font light-mode-in'
        } else if (type === 'out') {
            return 'toggle button-font light-mode-out'
        }
    }
}


export const Button = ({ children, onClick, type='out', width, height }) => {
    const dataContext = useContext(DataContext);
    const css = CSSLogic(type, dataContext.state.darkMode)
    return (
        <button
            onClick={() => onClick()}
            className={css}
            style={{ width, height }}
        >
            {
                dataContext.state.darkMode
                ? <span className='dark-mode button-font'>{ children }</span>
                : <span className='light-mode button-font'>{ children }</span>
            }
        </button>
    )
}