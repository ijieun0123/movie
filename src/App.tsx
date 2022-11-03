import {Route, Routes} from 'react-router-dom'
import {Container} from '@material-ui/core'
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
        <Route path="/movie" element={<Home />} />

        {/* 상세 페이지 */}
        <Route path="/movie/Detail/:id" element={<Detail />} />
      </Routes>
    </Container>
  )
}

export default App
