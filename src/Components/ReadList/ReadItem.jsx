import React from 'react'
import {Box, Paper,Typography,Button} from "@mui/material";
import useBooks from '../../Hooks/useBooks';
import { useNavigate } from 'react-router-dom';


const sx={
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding:'1rem'
  }

function ReadItem(props) {
   const {book}=props;
   const {RemoveFromList,setState}=useBooks();
   const navigate=useNavigate();

    const image=`src\\${book.coverPhotoURL}`
      const handleClick=(book)=>{
        localStorage.setItem('details',JSON.stringify(book));
          setState((prevState) => ({
            ...prevState,
            Details: book
          }));
        navigate('/details')
    }

    return (
        <Paper elevation={8} square={false} sx={{margin:0}} >
         <Box sx={{sx}} >
              <Box sx={{ height: '60%' }} onClick={()=>{handleClick(book)}} >
              <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
              </Box>
    
             <Box sx={{ padding: '16px', height: '40%' }}>
             <Typography variant="h6">{book.title}</Typography>
             <Box sx={{display:'flex',flexDirection:"row" }}>
             <Typography variant="subtitle1" color="textSecondary" sx={{marginRight:'100px'}}>{book.author}</Typography>
             <Button variant="contained" color="primary" onClick={()=>{RemoveFromList(book)}} >Remove FromList</Button>
             </Box>
             </Box>    
         </Box>    
      </Paper>
      );
}

export default ReadItem

