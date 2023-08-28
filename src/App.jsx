import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Admin from './pages/Admin'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/adminr" element={<Admin />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
