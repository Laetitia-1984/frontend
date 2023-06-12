import { Routes, Route} from 'react-router-dom';
import { HomeAdmin } from './HomeAdmin';

export const Login = () => {

    return (
        <main className='container'>
            <section className='flex justify-evenly mt-5'>
                <img src='images/Controle.png' alt='controle de moteur' />
                <img src='images/Focus2009.png' alt='ford focus 2009' />
            </section>
            <form className='rounded'>
                <div className='group'>
                    <label htmlFor='email'>Identifiant</label>
                    <input type='email' name='email' placeholder='Votre email'/>
                </div>
                <div className='group'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type='password' name='password' placeholder='Mot de passe'/>
                </div>
                <div className='group'>
                    <button type='submit' className='buttonConnect rounded'>Connexion</button>
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