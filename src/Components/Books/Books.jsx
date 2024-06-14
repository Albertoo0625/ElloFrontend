import React, { useEffect, useState } from 'react';
import useBooks from '../../Hooks/useBooks';
import axios from '../../api/axios';
import BookItem from './BookItem';
import { Grid,Box } from '@mui/material';


function Books() {
  const { state, setState } = useBooks();
  const [loading,setLoading]=useState(true);
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

        // console.log(results);
        setState((prevState) => ({
          ...prevState,
          Books: results.data.data.books
        }));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBooks();
  },[setState]);

  return (
    <>
    { loading ? 
      <Box>
        <div className="spinner"></div>
      </Box> 
      :
      <Box xs={12} sm={6} md={4} lg={3} sx={{margin: 5, width: '100vw', height: '100vh'}}>
      <Grid container spacing={2}>            
                  {state.Books.map((book,index)=>{
                  return <Grid item key={index} sx={{width:'300px',height:'500px',margin:'1px',overflow:'hidden'}}><BookItem book={book} key={index} id={index}/> </Grid>
                  })}        
       </Grid>
     </Box>
    }
  
    </>
  );
}

export default Books;
