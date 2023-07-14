import './App.css';
import { Navigation } from './components/Navigation';
import { Home } from './screens/Home';
import { Vidange } from './screens/Vidange';
import { Reparations } from './screens/Reparations';
import { Occasions } from './screens/Occasions';
import { Login } from './screens/Login';
import { Footer } from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import { HomeAdmin } from './screens/HomeAdmin';
import { Services } from './screens/Services';
import { ProfilEmployees } from './screens/ProfilEmployees';
import { HomeEmploye } from './screens/HomeEmploye';
import { Annonces } from './screens/Annonces';
import { Commentaires } from './screens/Commentaires';
import { Rendezvous } from './screens/Rendezvous';


function App() {
  return (
    <div className='container-fluid mt-5'>
        <Navigation/>
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/vidange' element={ <Vidange/>}/>
            <Route path='/reparations' element={ <Reparations/>}/>
            <Route path='/occasions' element={ <Occasions/>}/>
            <Route path='/login' element={ <Login/>}/>
            <Route path='/homeadmin' element={<HomeAdmin/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/profilemployees' element={<ProfilEmployees/>}/>
            <Route path='/homeemploye' element={<HomeEmploye/>}/>
            <Route path='/annonces' element={<Annonces/>}/>
            <Route path='/commentaires' element={<Commentaires/>}/>
            <Route path='/rendezvous' element={ <Rendezvous/>}/>
        </Routes>
        
        <Footer/>       
    </div>
  );
};

export default App;
