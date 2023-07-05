import { Routes, Route, NavLink} from 'react-router-dom';
import { Annonces } from './Annonces';
import { Commentaires } from './Commentaires';
import { HomeContent } from '../components/HomeContent';

export const HomeEmploye = () => {
    return (
        <main className='container'>
            <nav className='flex justify-center items-center'>
                <NavLink className='mt-3 mb-3 mr-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white hover:bg-[#47c8ff]' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/annonces'>Annonces</NavLink>
                <NavLink className='mt-3 mb-3 mr-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white hover:bg-[#47c8ff]' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/commentaires'>Commentaires</NavLink>
            </nav>
            <HomeContent/>
            <Routes>
                <Route path='/annonces' element={ <Annonces/>}/>
                <Route path='/commentaires' element={<Commentaires/>}/>
            </Routes>
        </main>
    )
}