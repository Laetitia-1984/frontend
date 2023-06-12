export const Reparations = () => {
    return (
        <main>
            <div className='container flex justify-center items-center mb-5'>
                <div className='align-middle'>
                    <img className='h-20 w-80 md:w-48 'src='images/Carrosserie.png' alt='carrosserie'/>
                </div>
                    <p className='ml-5 mr-5 text-center font-bold italic'>Vous trouverez dans cette section du site, les forfaits et services de réparation pour votre véhicule.</p>
                <div>   
                    <img className='h-20 w-80 md:w-48' src='images/Moteur.png' alt='moteur'/>
                </div>
            </div>
                <p className='ml-20 mb-3 italic font-bold'>Mécanique et entretien</p>
                <div className='mb-5 grid grid-cols-3 auto-cols-max'>
                    <div className='border bg-[#d9d9d9] ml-5 mr-5 col-start-1 col-end-2'>
                        <p className='ml-5 italic underline'>Mécanique</p>
                        <li className='ml-3'>Montage batterie <span className='font-bold italic'>20,95 euros</span></li>
                        <li className='ml-3'>Montage 2 amortisseurs <span className='font-bold italic'>70,95 euros</span></li>
                        <li className='ml-3'>Montage échappement <span className='font-bold italic'>68,95 euros</span></li>
                        <li className='ml-3'>Montage embrayage <span className='font-bold italic'>119,95 euros</span></li>
                    </div>
                    <div className='border bg-[#d9d9d9] col-start-2 col-end-3'>
                        <p className='ml-5 italic underline'>Entretien</p>
                        <li className='ml-3'>Réglage phare du véhicule <span className='font-bold italic'>37,95 euros</span></li>
                        <li className='ml-3'>Changement pare-brise <span className='font-bold italic'>60,95 euros</span></li>
                        <li className='ml-3'>Entretien climatisation <span className='font-bold italic'>64,95 euros</span></li>
                    </div>
                    <div className=''>
                        <button className='ml-5 mt-3 mb-3 mr-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white border'type='button'>Prendre un rendez-vous</button>
                    </div>
                </div>
        </main>
    )
}