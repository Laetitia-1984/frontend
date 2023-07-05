import { Routes, Route} from 'react-router-dom';
import { HomeAdmin } from './HomeAdmin';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validation from './ValidationLogin';

export const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password:''
    })

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    axios.defaults.withCredentials = true;
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors (validation(login));
        if (errors.email === '' && errors.password === '') {
            axios.post('http://localhost:8080/login', login)
            .then(res => {
                if(res.data.Status === 'Connexion réussie') {
                    navigate ('/homeadmin')
                } else {
                    alert (res.data.Message)
                }
            })
            .catch (err => console.log(err));
        }
    }
    
    return (
        <main className='container'>
            <section className='flex justify-evenly mt-5'>
                <img src='images/Controle.png' alt='controle de moteur' />
                <img src='images/Focus2009.png' alt='ford focus 2009' />
            </section>
            <form className='rounded' onSubmit = {handleSubmit}>
                <div className='mb-5'>
                    <label htmlFor='email'>Identifiant</label>
                    <input type='email' placeholder='Votre email' name='email' autoComplete='on' onChange={e => setLogin({...login, email: e.target.value})}/>
                    <div>{errors.email && <span className='text-[red] font-bold italic'> {errors.email}</span>}</div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type='password' placeholder='Mot de passe' name='password' onChange={e => setLogin({...login, password: e.target.value})}/>
                    <div>{errors.password && <span className='text-[red] font-bold italic'> {errors.password}</span>}</div>
                </div>
                <div>
                    <button className='buttonConnect rounded'>Connexion</button>
                </div>
            </form>
            <section className='flex justify-evenly mb-5'>
                <img src='images/Altea2007.png' alt='seat altea 2007' />
                <img src='images/Carrosserie.png' alt='carrosserie' />
            </section>
            <Routes>
                <Route path='/homeadmin' element={<HomeAdmin />} />
            </Routes>
        </main>
    );
}
