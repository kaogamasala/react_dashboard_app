import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// Initial Display False
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };

export const ContextProvider = ({ children }) => {
    // Display Menu
    const [activeMenu, setActiveMenu] = useState(true);
    // Initial Display Icon 
    const [isClicked, setIsClicked] = useState(initialState);
    // ScreenSize
    const [screenSize, setScreenSize] = useState(undefined);
    // SettingsColor
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    // SettingsMode
    const [currentMode, setCurrentMode] = useState('Light');
    // ThemeSettings
    const [themeSettings, setThemeSettings] =useState(false);
    
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    }

    // Handle Click
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider
            value={{ 
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                themeSettings,
                setThemeSettings,
                setMode,
                setColor,
                initialState,
             }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);