import React, { useEffect } from 'react';
import useBooks from '../../Hooks/useBooks';
import SearchItem from './SearchItem';
import { Grid,Box } from '@mui/material';

function SearchList() {
  const { state,setState } = useBooks();
  // console.log(`states fromlist ${JSON.stringify(state)}`)
  useEffect(() => {
    const fetchBooks = async () => {   
      const searchListLocal = JSON.parse(localStorage.getItem('SearchList'));
      // console.log(`SearchList from local storage: ${JSON.stringify(searchListLocal)}`);
      if (searchListLocal) {
          setState(prevState => ({
              ...prevState,
              SearchList: searchListLocal
          }));
      }
    };

    fetchBooks();
  },[setState]);

  return (
  
    <Box xs={12} sm={6} md={4} lg={3} sx={{margin: 5, width: '100vw', height: '100vh'}}>
           <Grid container spacing={2}>            
                       {state.SearchList.map((book,index)=>{
                       return <Grid item key={index} sx={{width:'300px',height:'500px',margin:'1px',overflow:'hidden'}}><SearchItem book={book} key={index} id={index}/> </Grid>
                       })}        
            </Grid>
    </Box>
  );
}

export default SearchList;
