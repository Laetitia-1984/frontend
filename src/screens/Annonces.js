import { Routes, Route, NavLink } from "react-router-dom";
import { HomeEmploye } from "./HomeEmploye";
import { useState } from 'react';
import axios from "axios";

export const Annonces = () => {
    const [form, setForm] = useState({
        numVoiture: '',
        marque: '',
        modele: '',
        annee: '',
        kilometres: '',
        prix: '',
        descriptVoiture: ''
    })

    axios.defaults.withCredentials = true;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/annonces', form)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <NavLink className='mr-2 ml-5 justify-end text-[#eb3e72] italic font-bold hover:text-[#47c8ff]' to='/homeemploye'>Retour</NavLink>
            <form onSubmit= {handleSubmit}>
                <div>
                    <label htmlFor='numVoiture'>Numéro de voiture</label>
                    <input type='text' onChange={(e) => setForm({...form, numVoiture: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='marque'>Marque</label>
                    <input type='text' onChange={(e) => setForm({...form, marque: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='modele'>Modèle</label>
                    <input type='text' onChange={(e) => setForm({...form, modele: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='annee'>Année</label>
                    <input type='text' onChange={(e) => setForm({...form, annee: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='kilometres'>Kilomètres</label>
                    <input type='text' onChange={(e) => setForm({...form, kilometres: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='prix'>Prix</label>
                    <input type='text' onChange={(e) => setForm({...form, prix: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='descriptVoiture'>Description</label>
                    <textarea onChange={(e) => setForm({...form, descriptVoiture: e.target.value})} />
                </div>
                <button className='btnSubmit rounded'>Envoyer</button>
            </form>
            <Routes>
                <Route path='/homeemploye' element={<HomeEmploye />} />
            </Routes>
        </div>
    )
}

