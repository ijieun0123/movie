import {useState, useEffect} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import axios from 'axios'
import {Container} from '@material-ui/core'
import './App.scss'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Header from './organisms/header'

function App() {
  return (
    <Container maxWidth="lg">
      {/* 헤더 */}
      <Header></Header>

      <Routes>
        {/* home */}
        <Route exact path="/" element={<Home />} />

        {/* 상세 페이지 */}
        <Route exact path="/Detail/:id" element={<Detail />} />
      </Routes>
    </Container>
  )
}

export default App
