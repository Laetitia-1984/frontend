import { Routes, Route, NavLink } from "react-router-dom"
import { HomeEmploye } from "./HomeEmploye"

export const Annonces = () => {
    
    return(
        <div>
        <p>Page des annonces</p>
        <NavLink className='mr-2 ml-5 justify-end text-[#eb3e72] italic font-bold hover:text-[#47c8ff]' to='/homeemploye'>Retour</NavLink>
        <form method="POST" action='/register-car'>
            <div>
                <label>Numéro de voiture</label>
                <input type='text' name='numvoiture' id='numvoiture'/>
            </div>
            <div>
                <label>Marque</label>
                <input type='text' name='marque' id='marque'/>
            </div>
            <div>
                <label>Modèle</label>
                <input type='text' name='modele' id='modele'/>
            </div>
            <div>
                <label>Année</label>
                <input type='text' name='annee' id='annee'/>
            </div>
            <div>
                <label>Kilomètres</label>
                <input type='text' name='kilometres' id='kilometres'/>
            </div>
            <div>
                <label>Prix</label>
                <input type='text' name='prix' id='prix'/>
            </div>
            <div>
                <label>Description</label>
                <textarea name='descriptvoiture' id='descriptvoiture'/>
            </div>
            <input type='submit' value='Envoyer'></input>
        </form>
        <Routes>
            <Route path='/homeemploye' element={<HomeEmploye/>}/>
        </Routes>
        </div>   
    )
}