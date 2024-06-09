import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BooksProvider from './BooksProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  < BrowserRouter>
  <BooksProvider>
    <Routes>
    <Route path="/*" element={<App />} />
    </Routes>
  </BooksProvider>
  </ BrowserRouter>
)
