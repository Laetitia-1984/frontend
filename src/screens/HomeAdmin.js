import { Routes, Route, NavLink, useLocation} from 'react-router-dom';
import { Services} from './Services'
import { ProfilEmployees } from './ProfilEmployees';
import { HomeContent } from '../components/HomeContent';

export const HomeAdmin = () => {
    return (
        <main className='container'>
            <nav className='flex justify-center items-center'>
            <p>Bonjour</p>
            <NavLink className='mt-3 mb-3 mr-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white hover:bg-[#47c8ff]' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/profilEmployees'>Profil</NavLink>
            <NavLink className='mt-3 mb-3 mr-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white hover:bg-[#47c8ff]' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/services'>Services</NavLink>
            <button className='btnDeconnect rounded'>Déconnexion</button>
            </nav>
                <HomeContent/>
                <Routes>
                    <Route path='/profilemployees' element={ <ProfilEmployees/>}/>
                    <Route path='/services' element={ <Services/>}/>
                </Routes>
        </main>
    )
}