import {Box, Paper,Typography,Button} from "@mui/material";

const sx={
  width: '300px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding:'1rem'
}

function BookItem(props) {
  const { book } = props;
  const image=`src\\${book.coverPhotoURL}`

  return (
    <Paper elevation={8} square={false} sx={{margin:0}}>
     <Box sx={{sx}}>
          <Box sx={{ height: '60%' }}>
          <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>

         <Box sx={{ padding: '16px', height: '40%' }}>
         <Typography variant="h6">{book.title}</Typography>
         <Box sx={{display:'flex',flexDirection:"row" }}>
         <Typography variant="subtitle1" color="textSecondary" sx={{marginRight:'100px'}}>{book.author}</Typography>
         <Button variant="contained" color="primary"  >Add To Read</Button>
         </Box>
         </Box>

     </Box>
    
  </Paper>
  );
}

export default BookItem;







