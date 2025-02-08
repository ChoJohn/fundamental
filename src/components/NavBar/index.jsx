import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import logo from './logo.png'
import setttingsIcon from './settings.svg';
import settingsDarkIcon from './settingsDark.svg';
import './index.css';
import '../utils/DarkMode/index.css';
import { DataContext } from '../../containers/Dashboard';

const NavBar = () => {
    const path = useLocation().pathname;
    const dataContext = useContext(DataContext);
    
    // DARK MODE
    if (dataContext.state.darkMode) {
        return (
            <div className='navigation dark-mode-in'>
                <div className='app-name dark-mode'>
                    <img src={ logo } alt='logo' className='logo' />
                    Fundamentals
                </div>
                <ul className='navbar-list'>
                    <li className={ classNames(path === '/' && 'selected dark-mode-nav')}> 
                        <Link to='/'>
                            {
                                path === '/'
                                ? <>
                                    <div id='top' className='dark-mode-top'></div>
                                        {/* <img src={ overviewDarkIcon } alt='overview icon' className='icons' /> */}
                                        <span className='dark-mode'>Home</span>
                                    <div id='bottom' className='dark-mode-bottom'></div>
                                </>
                                : <span>
                                    {/* <img src={ overviewDarkIcon } alt='overview icon' className='icons' /> */}
                                    <span className='dark-mode'>Home</span>
                                </span>
                            }
                        </Link>
                    </li>
                    <li  className={ classNames(path.indexOf('/bfs') > -1 && 'selected dark-mode-nav') }>
                        <Link to='/bfs'>
                            {
                                path === '/bfs'
                                ? <>
                                    <div id='top' className='dark-mode-top'></div>
                                        {/* <img src={ reportDarkIcon } alt='report icon' className='icons' /> */}
                                        <span className='dark-mode'>BFS</span>
                                    <div id='bottom' className='dark-mode-bottom'></div>
                                </>
                                : <span>
                                    {/* <img src={ reportDarkIcon } alt='report icon' className='icons' /> */}
                                    <span className='dark-mode'>BFS</span>
                                </span>
                            }
                        </Link>
                    </li>
                    <li  className={ classNames(path.indexOf('/dfs') > -1 && 'selected dark-mode-nav') }>
                        <Link to='/dfs'>
                            {
                                path === '/dfs'
                                ? <>
                                    <div id='top' className='dark-mode-top'></div>
                                        {/* <img src={ reportDarkIcon } alt='report icon' className='icons' /> */}
                                        <span className='dark-mode'>DFS</span>
                                    <div id='bottom' className='dark-mode-bottom'></div>
                                </>
                                : <span>
                                    {/* <img src={ reportDarkIcon } alt='report icon' className='icons' /> */}
                                    <span className='dark-mode'>DFS</span>
                                </span>
                            }
                        </Link>
                    </li>
                    <li  className={ classNames(path.indexOf('/settings') > -1  && 'selected dark-mode-nav') }>
                        <Link to='settings'>
                            {
                                path === '/settings'
                                ? <>
                                    <div id='top' className='dark-mode-top'></div>
                                        <img src={ settingsDarkIcon } alt='setttings icon' className='icons' />
                                        <span className='dark-mode'>Settings</span>
                                    <div id='bottom' className='dark-mode-bottom'></div>
                                </>
                                : <span>
                                    <img src={ settingsDarkIcon } alt='setttings icon' className='icons' />
                                    <span className='dark-mode'>Settings</span>
                                </span>
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }

    // LIGHT MODE
    return (
        <div className='navigation light-mode-in' id='navigation'>
            <div className='app-name light-mode'>
                <img src={ logo } alt='logo' className='logo' />
                Fundamentals
            </div>
            <ul className='navbar-list'>
                <li className={ classNames(path === '/' && 'selected light-mode-nav')}> 
                    <Link to='/'>
                        {
                            path === '/'
                            ? <>
                                <div id='top' className='light-mode-top'></div>
                                    {/* <img src={ overviewIcon } alt='overview icon' className='icons' /> */}
                                    Home
                                <div id='bottom' className='light-mode-bottom'></div>
                            </>
                            : <span>
                                {/* <img src={ overviewIcon } alt='overview icon' className='icons' /> */}
                                Home
                            </span>
                        }
                    </Link>
                </li>
                <li  className={ classNames(path.indexOf('/bfs') > -1 && 'selected light-mode-nav') }>
                    <Link to='/bfs'>
                        {
                            path === '/bfs'
                            ? <>
                                <div id='top' className='light-mode-top'></div>
                                    {/* <img src={ reportIcon } alt='report icon' className='icons' /> */}
                                    BFS
                                <div id='bottom' className='light-mode-bottom'></div>
                            </>
                            : <span>
                                {/* <img src={ reportIcon } alt='report icon' className='icons' /> */}
                                BFS
                            </span>
                        }
                    </Link>
                </li>
                <li  className={ classNames(path.indexOf('/dfs') > -1 && 'selected light-mode-nav') }>
                    <Link to='/dfs'>
                        {
                            path === '/dfs'
                            ? <>
                                <div id='top' className='light-mode-top'></div>
                                    {/* <img src={ reportIcon } alt='report icon' className='icons' /> */}
                                    DFS
                                <div id='bottom' className='light-mode-bottom'></div>
                            </>
                            : <span>
                                {/* <img src={ reportIcon } alt='report icon' className='icons' /> */}
                                DFS
                            </span>
                        }
                    </Link>
                </li>
                <li  className={ classNames(path.indexOf('/settings') > -1  && 'selected light-mode-nav') }>
                    <Link to='settings'>
                        {
                            path === '/settings'
                            ? <>
                                <div id='top' className='light-mode-top'></div>
                                    <img src={ setttingsIcon } alt='setttings icon' className='icons' />
                                    Settings
                                <div id='bottom' className='light-mode-bottom'></div>
                            </>
                            : <span>
                                <img src={ setttingsIcon } alt='setttings icon' className='icons' />
                                Settings
                            </span>
                        }
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;