export const HomeContent = () => {
    return(
        <main className='container'>
            <div className='flex justify-center'>
                <p className='textHome'>Bienvenue au garage Parrot.Vous trouverez les services nécessaires pour votre voiture. De plus, des voitures d'occasions vous sont proposées dans le menu dédié.<br/><br/>Bonne route sur le site !!!</p><br/>
            </div>
            <div className='imgHome'>
                <img className='rounded-full mr-5'src='images/Mini2010.png' alt='mini cooper'/>
                <img className='rounded-full mr-5'src='images/Altea2007.png' alt='seat altea xl'/>
                <img className='rounded-full' src='images/Focus2009.png' alt='ford focus'/>
            </div>
        </main>
    )
}