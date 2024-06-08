import React, { createContext, useState } from 'react'

export const BooksContext= createContext();

export const BooksProvider = ({ children }) => {
    const [state, setState] = useState({Books:[]});
    return (
      <BooksContext.Provider value={{ state, setState }}>
        {children}
      </BooksContext.Provider>
    );
  };

export default BooksProvider;