import {Box, Paper,Typography,Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useBooks from "../../Hooks/useBooks";

const sx={
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding:'1rem'
}

function BookItem(props) {
  const { book} = props;
  const {state,setState,addToList}=useBooks();
  // const image=`src\\${book.coverPhotoURL}`
  const navigate=useNavigate();



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
          <img src={book.coverPhotoURL} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
          </Box>

         <Box sx={{ padding: '16px', height: '40%' }}>
         <Typography variant="h6">{book.title}</Typography>
         <Box sx={{display:'flex',flexDirection:"row" }}>
         <Typography variant="subtitle1" color="textSecondary" sx={{marginRight:'100px'}}>{book.author}</Typography>
         <Button variant="contained" color="primary" onClick={()=>{addToList(book)}} >Add To ReadList</Button>
         </Box>
         </Box>

     </Box>
    
  </Paper>
  );
}

export default BookItem;







