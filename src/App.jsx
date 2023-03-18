import { React} from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Favorites from './components/Favorites'
import Pokedex from './components/Pokedex'
import Details from './components/Details'

function App() {
  
  

  return (
    <div className="containerApp">   
        <BrowserRouter>
          <Routes>
            <Route index element={<Pokedex />}/>
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
