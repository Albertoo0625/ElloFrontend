import { Box } from '@mui/material'
import React from 'react'
import Search from '../Search/Search'

const sx={
  width:'100vw',
  height:'200px',
  backgroundColor:'red'
  }
function Nav() {
  
  return (
<>
    <Box sx={{sx}}>
     <Search/>
     </Box>
   </>
  )
}

export default Nav