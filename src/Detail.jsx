import { Container, Typography,Box,Button } from '@mui/material';
import React, { useEffect} from 'react'
import useBooks from './Hooks/useBooks';
import { useNavigate } from "react-router-dom";

function Detail() {
  const {state,setState,addToList}=useBooks();
  const navigate=useNavigate();

  const goBack = () => navigate(-1);
  useEffect(()=>{
    console.log(state.Details)
    if(state.Details){
      console.log('no details');
      const detailsStruct=JSON.parse(localStorage.getItem('details'));
      console.log(`details struct ${JSON.stringify(detailsStruct)}`);
      setState((prevState) => ({
        ...prevState,
        Details: detailsStruct
      }));
    }
  },[])

 console.log(state.Details);

  const image=`src\\${state.Details.coverPhotoURL}`
  return (
    <Container>
      <Box>
        <Box sx={{display:'flex',flexDirection:'row', width: '100vw', height: '80vh'}}>
        <Box xs={12} sm={6} md={4} lg={3} sx={{margin: 5, width: '60vw', height: '70vh'}}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
        </Box >
        <Typography  variant="detail" sx={{width: '40vw',margin:'2rem' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi alias neque amet possimus dolores architecto expedita eveniet modi recusandae ea, asperiores natus nesciunt iure laborum nemo facilis minima dolor dolorem!
        </Typography>
        </Box>


        <Box sx={{display:'flex',flexDirection:'row',width:'100vw',margin:'2rem'}}>
        <Button variant="contained" color="primary" onClick={goBack} sx={{marginRight:'2rem'}}>
        Go Back
        </Button>
        <Button variant="contained" color="primary" onClick={()=>{addToList(state.Details)}} >
        Add To ReadList
        </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Detail