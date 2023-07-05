export const Footer = () => {
    return(
        <footer className='flex items-center justify-evenly mb-5 border 1px bg-[#d9d9d9] rounded'>
            <div className='font-bold italic'>
                <p className='ml-8'>Contact</p>
                <p className='ml-2'>05.61.23.45.56</p>
            </div>
            <div className='font-bold italic border-s-2 border-black px-5 ml-5'>
                <p className='ml-20'>Horaires d'ouvertures</p>
                <p>Lundi au vendredi: 08:45 - 12:00 / 14:00 - 18:00</p>
                <p>Samedi : 08:45 - 12:00</p>
                <p>Dimanche : Fermé</p>
            </div>
        </footer>
    )
}