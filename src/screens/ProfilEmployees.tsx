import { Routes, Route, NavLink } from "react-router-dom"
import { HomeAdmin } from "./HomeAdmin"
import { NewProfile } from "../components/NewProfile"

export const ProfilEmployees = () => {
    return(
        <div>
            <p>page des profils</p>
            <NavLink className='mr-2 ml-5 justify-end text-[#eb3e72] italic font-bold hover:text-[#47c8ff]' to='/homeadmin'>Retour</NavLink>
            <NewProfile/>
            <Routes>
                <Route path='/homeadmin' element={<HomeAdmin/>}/>
            </Routes>
        </div>
    )
}