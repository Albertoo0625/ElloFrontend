import React, { useEffect } from 'react';
import useBooks from '../../Hooks/useBooks';
import { Grid,Box } from '@mui/material';
import ReadItem from './ReadItem';

function ReadList() {
  const { state,setState } = useBooks();
//   console.log(`states fromlist ${JSON.stringify(state)}`)
  useEffect(() => {
    const fetchBooks = async () => {   
      const ReadListLocal = JSON.parse(localStorage.getItem('ReadList'));
      if(ReadList.length<2){
        alert("List empty please add a book");
      }
    //   console.log(`SearchList from local storage: ${JSON.stringify(ReadListLocal)}`);
      if (ReadListLocal) {
          setState(prevState => ({
              ...prevState,
              ReadList: ReadListLocal
          }));
      }
    };

    fetchBooks();
  },[setState]);

  return (
  
    <Box xs={12} sm={6} md={4} lg={3} sx={{margin: 5, width: '100vw', height: '100vh'}}>
           <Grid container spacing={2}>            
                       {state.ReadList.map((book,index)=>{
                       return <Grid item key={index} sx={{width:'300px',height:'500px',margin:'1px',overflow:'hidden'}}><ReadItem book={book} key={index} id={index}/> </Grid>
                       })}        
            </Grid>
    </Box>
  );
}

export default ReadList;
