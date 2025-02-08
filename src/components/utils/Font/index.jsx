import { useContext } from 'react';
import { DataContext } from '../../../containers/Dashboard';
import './index.css';
import '../DarkMode/index.css';

export const Header = ({ children, fontSize, fontWeight }) => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'header-font dark-mode-header' : 'header-font light-mode'} 
             style={{ fontSize, fontWeight }}
        >
            { children }
        </div>
    )
};

export const Subheader = ({ children, fontSize, fontWeight }) => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'subheader-font dark-mode-header' : 'subheader-font light-mode'} 
             style={{ fontSize, fontWeight }}
        >
            { children }
        </div>
    )
};

export const SubheaderSpan = ({ children, fontSize, fontWeight }) => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'subheader-font dark-mode-header' : 'subheader-font light-mode'} 
             style={{ fontSize, fontWeight }}
        >
            { children }
        </div>
    )
};

export const Paragraph = ({ children, fontSize, fontWeight }) => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'paragraph-font dark-mode-header' : 'paragraph-font light-mode'} 
             style={{ fontSize, fontWeight }}
        >
            { children }
        </div>
    )
};


export const Example = ({ children, fontSize, fontWeight }) => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'example-font dark-mode-header' : 'example-font light-mode'} 
             style={{ fontSize, fontWeight }}
        >
            { children }
        </div>
    )
};
