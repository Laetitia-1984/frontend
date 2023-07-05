import { Routes, Route, NavLink } from "react-router-dom"
import { HomeEmploye } from "./HomeEmploye"
import { useState } from "react"

export const Commentaires = () => {
    const [form, setForm] = useState({
        nomClient: '',
        note: '',
        descriptCom:''
    })

    function onSubmit(e) {
        e.preventDefault()
        console.log('Commentaire envoyé')

        // a partir de maintenant on a tous dans l'objet form ( state ) 
        console.log(`le state ${form}`);
        // envoyé les datas 
        const promise = fetch("http://localhost:8080/commentaires", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(form) //Contenu de la requete c'est le formulaire
        });
        // console log juste après la commande
        console.log(promise)
        // des que le colis est arrivé on va executer une fonction de callback
        promise.then(response => response.json().then(data => console.log(data)));
    }
    return(
        <div>
        <form>
                <div>
                    <label htmlFor='numClient'>Votre nom</label>
                    <input type='text' onChange={(e) => setForm({...form, nomClient: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='note'>Note</label>
                    <input type='text' onChange={(e) => setForm({...form, note: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='description'>Commentaire</label>
                    <textarea onChange={(e) => setForm({...form, descriptCom: e.target.value})} />
                </div>
                <button className='btnSubmit rounded' onClick={onSubmit}>Envoyer</button>
            </form>
        
        <NavLink className='mr-2 ml-5 justify-end text-[#eb3e72] italic font-bold hover:text-[#47c8ff]' to='/homeemploye'>Retour</NavLink>
        <Routes>
            <Route path='/homeemploye' element={<HomeEmploye/>}/>
        </Routes>
        </div>
            
        )
}