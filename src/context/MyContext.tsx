'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type MyContextType = {
    value: string;
    setValue: (val: string) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState('Hello from context');
    return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
    const ctx = useContext(MyContext);
    if (!ctx) throw new Error('useMyContext must be used within MyProvider');
    return ctx;
};