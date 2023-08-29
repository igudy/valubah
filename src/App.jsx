import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Admin from './pages/Admin'

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
