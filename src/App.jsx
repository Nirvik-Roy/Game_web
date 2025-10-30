import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './View/Home/Home'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
