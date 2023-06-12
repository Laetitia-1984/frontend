import { Routes, Route, NavLink } from "react-router-dom"
import { HomeAdmin } from "./HomeAdmin"

export const Services = () => {
    return(
        <div>
        <p>Page des services</p>
        <NavLink className='mr-2 ml-5 justify-end text-[#eb3e72] italic font-bold hover:text-[#47c8ff]' to='/homeadmin'>Retour</NavLink>
        <Routes>
            <Route path='/homeadmin' element={<HomeAdmin/>}/>
        </Routes>
        </div>
            
        )
}