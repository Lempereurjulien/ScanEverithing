import React, { createContext, useState, useContext } from 'react';

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
    const [result, setResult] = useState(null);

    const clearResultData = () => {
        setResult({});
    }

    return (
        <ResultContext.Provider value={{ result, setResult, clearResultData }}>
            {children}
        </ResultContext.Provider>
    );
};

export const userResult = () => {
    const context = useContext(ResultContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
