import {Link, Route, Routes} from 'react-router-dom'
import {Container, Box} from '@material-ui/core'
import './App.scss'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Header from './organisms/header'

const ContainerStyle = {
  paddingTop: 50,
  paddingBottom: 100,
}

function App() {
  return (
    <Container maxWidth="lg" style={ContainerStyle}>
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
