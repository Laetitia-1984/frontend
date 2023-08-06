import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        
        <header className=' md:flex justify-between items-center mb-5 border 1px bg-[#d9d9d9] rounded'>
            <img className='h-48 w-50 md:h-full md:w-48 ml-20 mt-3 mb-3' src='images/Logo.png' alt='Logo du site'/>
            <nav className='flex justify-center items-center'>
                <NavLink className='mt-3 mb-3 mr-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white hover:bg-[#47c8ff]' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink>
                <NavLink className='mt-3 mb-3 mr-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white hover:bg-[#47c8ff]' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}
                to='/vidange'>Vidange</NavLink>
                <NavLink className='mt-3 mb-3 mr-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white hover:bg-[#47c8ff]' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}
                to='/reparations'>Reparations</NavLink>
                <NavLink className='mt-3 mb-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white hover:bg-[#47c8ff]' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}
                to='/occasion'>Occasions</NavLink>
                <NavLink className='mr-2 ml-5 justify-end text-[#eb3e72] italic font-bold hover:text-[#47c8ff]' to='/login'>Login</NavLink>
            </nav>
        </header>
    )
}