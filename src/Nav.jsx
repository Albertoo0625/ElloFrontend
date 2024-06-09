import { Container } from '@mui/material'
import React from 'react'
import Search from './Components/Search/Search'



const sx={
bgcolor:'tomato',
height:'100vh',
width:'100vw'

}

function Nav() {
  return (
<>
    <Container sx={{sx}}>
     <Search/>
     </Container>
   </>
  )
}

export default Nav