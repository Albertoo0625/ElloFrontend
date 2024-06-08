import React, { useEffect } from 'react';
import useBooks from './Hooks/useBooks';
import axios from './api/axios';
import BookItem from './BookItem';
import { Grid } from '@mui/material';


function Books() {
  const { state, setState } = useBooks();
  useEffect(() => {
    const fetchBooks = async () => {
      
        const query = `
        query Books {
          books {
            author
            coverPhotoURL
            readingLevel
            title
          }
        }
      `;
try{
      const results=await axios.post('/graphql',{query},{
        headers:{
            "Content-Type":"application/json"
        }
      });

        console.log(results);
        setState((prevState) => ({
          ...prevState,
          Books: results.data.data.books
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBooks();
  },[setState]);

  return (
           <Grid container spacing={3}>            
                       {state.Books.map((book,index)=>{
                       return <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ overflow: 'hidden', height: '100%' ,maxHeight:'400px'}}><BookItem book={book} key={index}/> </Grid>
                       })}        
            </Grid>
  );
}

export default Books;
