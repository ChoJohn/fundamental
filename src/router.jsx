import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DataContext } from './containers/Dashboard';
import Home from './containers/Home.jsx'
import BFS from './components/DataStructure/BFS';
import DFS from './components/DataStructure/DFS';
import Settings from './containers/Settings';

const Router = () => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'content dark-mode' : 'content light-mode'}>
            <Routes>
                <Route exact path='/fundamental/' element={ <Home /> } />
                <Route path='/fundamental/bfs' element={ <BFS /> } />
                <Route path='/fundamental/bfs/:id' element={ <BFS /> } />
                <Route path='/fundamental/dfs' element={ <DFS /> } />
                <Route path='/fundamental/dfs/:id' element={ <DFS /> } />
                <Route path='/fundamental/settings' element={ <Settings /> } />
            </Routes>
        </div>
    )
}

export default Router;