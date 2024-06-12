import React, { useEffect, useState, useRef } from 'react';
import { Container, TextField, Box, Button, Grid, List, ListItem, ListItemButton, Alert } from '@mui/material';
import axios from '../../api/axios';
import useBooks from '../../Hooks/useBooks';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const wrapperRef = useRef(null);
    const {state,setState}=useBooks();
    const navigate=useNavigate();

    useEffect(() => {
        if (searchTerm) {
            fetchSuggestions(searchTerm);
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);

    const fetchSuggestions = async (searchTerm) => {
        try {
            const query = `
            query {
              searchSuggest(term: "${searchTerm}") 
            }
          `;
               

            const response = await axios.post('/graphql', { query }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response.data.data.searchSuggest);
            setSuggestions(response.data.data.searchSuggest);
            setDropdownVisible(true);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    const handleSubmit = async (searchTerm) => {
       
        console.log(searchTerm);
        try {
            const query = `
            query {
              searchResult(term: "${searchTerm}") {
                author
                coverPhotoURL
                readingLevel
                title
              }
            }
          `;
               

            const response = await axios.post('/graphql', { query }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log(`sas ${JSON.stringify(response.data.data.searchResult)}`);

            if(response.data.data.searchResult.length>0){
                setState((prevState) => ({
                    ...prevState,
                    SearchList: response.data.data.searchResult
                  }));
    
                  localStorage.setItem('SearchList',JSON.stringify(response.data.data.searchResult))
    
                  navigate('/search')
            }else{           
               alert('no such book found');
            }
           
           
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
       
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleView=()=>{
        console.log('blessings')
        navigate('/readlist');
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setDropdownVisible(false);
    };

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Container ref={wrapperRef}>
            <Grid>
            <Box sx={{display:'flex',flexDirection:'column'}}>
                <Box component="form"  noValidate sx={{ mt: 1,display:'flex', flexDirection:'row'}} >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Search"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={searchTerm}
                        onChange={handleChange}
                    />
               
                    {isDropdownVisible && suggestions.length > 0 && (
                        <List sx={{ maxHeight: 200, overflow: 'auto', zIndex: 1, background: 'white', width: '100%' }}>
                            {suggestions.map((suggestion, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion}
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    )}

                 </Box>

                <Box sx={{width:"100vw"}}>
                   

                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleView}
                        sx={{ mt: 3, mb: 2,width: "45vw",mr:"5vw"}}
                    >
                        View ReadList
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        onClick={()=>{handleSubmit(searchTerm)}}
                        sx={{ mt: 3, mb: 2 ,width: "45vw",mr:"5vw"}}
                    >
                        Search
                    </Button>

                </Box>

                </Box>
            </Grid>
        </Container>
    )
}

export default Search;
