import React, { createContext, useState } from 'react'

export const BooksContext= createContext();

export const BooksProvider = ({ children }) => {
    const [state, setState] = useState({
      Books:[],
      Details:[],
      ReadList:[],
      SearchList:[]
    });

    const addToList=(book)=>{
    //  console.log(state.ReadList);
    //  console.log(book);
     const exists = state.ReadList.some((item) => item.title === book.title);
     
     if(!exists){
      
      setState((prevState) => ({
        ...prevState,
        ReadList: [...state.ReadList,book]
      }));
      localStorage.setItem('ReadList',JSON.stringify(state.ReadList));
      alert('item added to list')
     }else{
      alert('item already in list')
     }
    }

    const RemoveFromList=(book)=>{
      const newList = state.ReadList.filter((item) => item.title !== book.title);
      if(newList.length !== state.ReadList.length){
        setState((prevState) => ({
          ...prevState,
          ReadList: newList
      }));
        localStorage.setItem('ReadList',JSON.stringify(state.ReadList));
        alert('removed from list')
      }else{
        alert('Book not found in list');
      }
    }

    return (
      <BooksContext.Provider value={{ state, setState ,addToList,RemoveFromList}}>
        {children}
      </BooksContext.Provider>
    );
  };

export default BooksProvider;