import { Route, Routes } from 'react-router-dom'
import Cities from '../dashboard/Cities'
import Home from '../dashboard/Home'
import App from '../App';
import Create from '../components/city/Create';

function Routage() {
  return (
    <Routes>
        <Route index path='/' element={<Home/>}/>

        <Route index path='/cities' element={<Cities/>}/>
        <Route index path='/city/create' element={<Create/>}/>

        <Route index path='/categories' element={<Cities/>}/>
        <Route index path='/comments' element={<Cities/>}/>
        <Route index path='/blogs' element={<Cities/>}/>
        <Route index path='/services' element={<Cities/>}/>
        <Route index path='/contact' element={<Cities/>}/>
        

    </Routes>
  )
}

export default Routage;