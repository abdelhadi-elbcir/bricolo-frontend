import { BrowserRouter } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Routage from './Routes/Routage'

function App() {

  return (
    <BrowserRouter>
       <Navbar/>
       <Routage/>
    </BrowserRouter>
  )


}

export default App
