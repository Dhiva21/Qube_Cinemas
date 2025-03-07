import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import MusicPage from './page/MusicPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicDetail from './components/MusicDetail';


function App() {

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<MusicPage/>} />
        <Route path="/collections/:id" element={<MusicDetail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
