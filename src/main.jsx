import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BooksProvider from './BooksProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material'

const theme=createTheme({
  palette:{
    primary:{
      main: "#FABD33"
    },
    secondary:{
      main: "#335C6E"
    }
  },
  typography:{
    h1:{
      fontFamily:"sans-serif"
    },
    h2:{
       fontFamily:"sans-serif"
    },
    h6:{
        color:'#5ACCCC'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  < BrowserRouter>
  <ThemeProvider theme={theme}>
  <BooksProvider>
    <Routes>
    <Route path="/*" element={<App />} />
    </Routes>
  </BooksProvider>
  </ThemeProvider>
  </ BrowserRouter>
)
