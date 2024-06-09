import React, { useEffect, useState } from 'react';
import { Container, TextField,Box,Button, Grid } from '@mui/material'
import axios from '../../api/axios';

function Search() {
    const [searchTerm,setSearchTerm]=useState('');
     const handleSubmit=async(e)=>{
        e.preventDefault();
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

    console.log(results.data.data.books[0]);
          }catch (error) {
            console.error("Error fetching data:", error);
          }    
}
 

const handleChange=(e)=>{
e.preventDefault();
setSearchTerm(e.target.value)
useEffect(()=>{
  
},[searchTerm]);
}
    
  return (

    <Container>
      <Grid>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
           
            id="name"
            label="Search"
            name="name"
            autoComplete="name"
            autoFocus
            value={searchTerm}
            onChange={(e)=>{handleChange(e)}}
          />
        
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Search
          </Button>
        </Box>
        </Grid>
   
    </Container>

  )
}

export default Search