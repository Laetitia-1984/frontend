import { Routes, Route, NavLink } from "react-router-dom"
import { HomeEmploye } from "./HomeEmploye"

export const Commentaires = () => {
    return(
        <div>
        <p>Page des commentaires</p>
        <NavLink className='mr-2 ml-5 justify-end text-[#eb3e72] italic font-bold hover:text-[#47c8ff]' to='/homeemploye'>Retour</NavLink>
        <Routes>
            <Route path='/homeemploye' element={<HomeEmploye/>}/>
        </Routes>
        </div>
            
        )
}