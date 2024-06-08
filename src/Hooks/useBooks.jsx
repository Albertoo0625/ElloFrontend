import { useContext } from 'react'
import { BooksContext } from '../BooksProvider';

const useBooks = () => {
    return useContext(BooksContext);
  };

export default useBooks;