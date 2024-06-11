import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Detail from './Detail'
import SearchList from './Components/Search/SearchList'
import ReadList from './Components/ReadList/ReadList'


function App() {

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Detail />} />
      <Route path="/search" element={<SearchList />} />
      <Route path="/readlist" element={<ReadList />} />
    </Route>
    </Routes>
  )
}

export default App