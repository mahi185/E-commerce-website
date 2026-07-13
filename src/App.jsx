import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './Stores/pages/LandingPage'
import Mobilepage from './Stores/pages/Mobilepage'
import Menpage from './Stores/pages/Menpage'
import Acpage from './Stores/pages/Acpage'
import Bookpage from './Stores/pages/Bookpage'
import Womanpage from './Stores/pages/Womanpage'
import Computerpage from './Stores/pages/Computerpage'
import Fridgepage from './Stores/pages/Fridgepage'
import Furniturepage from './Stores/pages/Furniturepage'
import Kitchenpage from './Stores/pages/Kitchenpage'
import Propage from './Stores/pages/Propage'
import Speakerpage from './Stores/pages/Speakerpage'
import Tvpage from './Stores/pages/Tvpage'
import Watchpage from './Stores/pages/Watchpage'
import Mobilesingle from './Stores/singles/Mobilesingle'
import Womansinglepage from './Stores/singles/Womansinglepage'
import Watchsinglepage from './Stores/singles/Watchsinglepage'
import Booksinglepage from './Stores/singles/Booksinglepage'
import Computersinglepage from './Stores/singles/Computersinglepage'
import FridgeSinglepage from './Stores/singles/FridgeSinglepage'
import Furnituresinglepage from './Stores/singles/Furnituresinglepage'
import KitchenSinglepage from './Stores/singles/KitchenSinglepage'
import MensingePage from './Stores/singles/MensingePage'
import TvsinglePage from './Stores/singles/TvsinglePage'
import ProsinglePage from './Stores/singles/ProsinglePage'
import SpeakersinglePage from './Stores/singles/SpeakersinglePage'
import AcsinglePage from './Stores/singles/AcsinglePage'
import Usercart from './Stores/Usercart'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        
        <Route path='/mobile' element={<Mobilepage/>}></Route>
        <Route path='/men' element={<Menpage/>}></Route>
        <Route path='/ac' element={<Acpage/>}></Route>
       <Route path='/book' element={<Bookpage/>}></Route>
       <Route path='/woman' element={<Womanpage/>}></Route>
       <Route path='/computer' element={<Computerpage/>}></Route>
       <Route path='/fridge' element={<Fridgepage/>}></Route>
       <Route path='/furniture' element={<Furniturepage/>}></Route>
       <Route path='/kitchen' element={<Kitchenpage/>}></Route>
       <Route path='/promobile' element={<Propage/>}></Route>
       <Route path='/speaker' element={<Speakerpage/>}></Route>
       <Route path='/tv' element={<Tvpage/>}></Route>
       <Route path='/watch' element={<Watchpage/>}></Route>
       <Route path='/mobiles/:id' element={<Mobilesingle/>}></Route>
       <Route path='/woman/:id' element={<Womansinglepage/>}></Route>
       <Route path='/watch/:id' element={<Watchsinglepage/>} ></Route>
       <Route path='/book/:id' element={<Booksinglepage/>} ></Route>
       <Route path='/computer/:id' element={<Computersinglepage/>} ></Route>
       <Route path='/fridge/:id' element={<FridgeSinglepage/>} ></Route>
       <Route path='/furniture/:id' element={<Furnituresinglepage/>} ></Route>
       <Route path='/kitchen/:id' element={<KitchenSinglepage/>} ></Route>
       <Route path='/men/:id' element={<MensingePage/>} ></Route>
       <Route path='/tv/:id' element={<TvsinglePage/>}></Route>
       <Route path='/pro/:id' element={<ProsinglePage/>} ></Route>
       <Route path='/speaker/:id' element={<SpeakersinglePage/>}></Route>
       <Route path='/ac/:id' element={<AcsinglePage/>} ></Route>
       <Route path='/cart' element={<Usercart/>}></Route>
       

       
      </Routes>
    </div>
  )
}

export default App
