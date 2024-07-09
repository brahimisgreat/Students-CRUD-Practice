import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
