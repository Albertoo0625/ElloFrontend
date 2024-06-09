import { Box, Typography } from '@mui/material'
import React from 'react'

function SearchList(props) {
  const {title,author,coverPhotoURL,readingLevel}=props;
  const image=`src\\${coverPhotoURL}`
   const Title={
    whiteSpace: nowrap,       /* Prevents text from wrapping to multiple lines */
    overflow: hidden,          /* Ensures that overflowed text is hidden */
    textOverflow: ellipsis,   /* Adds ellipsis (...) to indicate overflowed text */
    width: '20px',             /* Set the desired width */
    display: inline-block     /* Ensure it respects the width */
   }
   const ContainerDiv={
    alignSelf:center,
   }
  return (
   <Box sx={{ContainerDiv}}>
    <Typography sx={{Title}}>
    {title}
    </Typography>
    <Typography sx={{Author}}>
    {author}
    </Typography>
    <Typography sx={{ReadingLevel}}>
    {readingLevel}
    </Typography>
    <img src={image} alt="book_Image"/>
   </Box>
  )
}

export default SearchList