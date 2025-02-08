import React, { useEffect, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../router';
import NavBar from '../components/NavBar';
import Colours from '../Data/colours';

const initialState = {
    colours: [],
    darkMode: false
};

export const DataContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                colours: action.colourPayload,
            };
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
};

const Dashboard = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    // Mimicking a call to the backend.
    useEffect(() => {
        let newColour = Colours.darkModeColours;
        if (state.darkMode) newColour = Colours.darkModeColours;
        else newColour = Colours.colours;
        
        dispatch({
            type: 'FETCH_DATA', 
            colourPayload: newColour,
        });
    }, [Colours, state.darkMode]);

    return (
        <DataContext.Provider value={{ state: state, dispatch: dispatch }}>
            <BrowserRouter>
                <div className={state.darkMode ? 'dashboard dark-mode' : 'dashboard light-mode'}>
                    <NavBar />
                    <Router />
                </div>
            </BrowserRouter>
        </DataContext.Provider>
    );
};

export default Dashboard;
