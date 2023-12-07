import React from 'react';

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
    return <ThemeContext.Provider
     value={null}>
        {children}
     </ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }