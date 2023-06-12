export const Vidange = () => {
    return (
        <main>
            <div className='container flex justify-center items-center mb-5'>
                <div className='align-middle'>
                    <img className='h-20 w-80 md:w-48 'src='images/Vidange.png' alt='vidange'/>
                </div>
                    <p className='ml-5 mr-5 text-center font-bold italic'>Vous trouverez dans cette section du site, les forfaits des vidanges et révisions que nous proposons.</p>
                <div>   
                    <img className='h-20 w-80 md:w-48' src='images/Révision.png' alt='révision'/>
                </div>
            </div>
                <p className='ml-20 mb-3 italic font-bold'>Forfaits Vidanges</p>
                <div className='mb-5 grid grid-cols-3 auto-cols-max'>
                    <div className='border bg-[#d9d9d9] ml-5 mr-5 col-start-1 col-end-2'>
                        <p className='ml-5 italic underline'>Entretien vidange</p>
                        <li className='ml-3'>Vidange huile moteur</li>
                        <li className='ml-3'>Remplacement filtre à huile</li>
                        <li className='ml-3'>Mise à niveau des liquides</li>
                        <p className='text-center font-bold italic'>Prix : 79,95 euros </p>
                    </div>
                    <div className='border bg-[#d9d9d9] col-start-2 col-end-3'>
                        <p className='ml-5 italic underline'>Vidange simple</p>
                        <li className='ml-3'>Vidange huile moteur</li>
                        <li className='ml-3'>Remplacement filtre à huile</li>
                        <p className='text-center font-bold italic'>Prix : 69,95 euros </p>
                    </div>
                    <div className=''>
                        <button className='ml-5 mt-3 mb-3 mr-3 py-2 px-2 border 1px solid rounded bg-[#9747ff] text-white border'type='button'>Prendre un rendez-vous</button>
                    </div>
                </div>
                <p className='ml-20 mb-3 italic font-bold'>Forfaits Révisions</p>
                <div className='mb-5 grid grid-cols-3 auto-cols-max'>
                    <div className='border bg-[#d9d9d9] ml-5 mr-5 col-start-1 col-end-2'>
                        <p className='ml-5 italic underline'>Révision Eco</p>
                        <li className='ml-3'>Vidange huile moteur</li>
                        <li className='ml-3'>Remplacement filtre à huile</li>
                        <li className='ml-3'>Mise à niveau des liquides</li>
                        <li className='ml-3'>Pression des pneus</li>
                        <li className='ml-3'>Remplacement filtre air, habitacle et carburant</li>
                        <li className='ml-3'>Diagnostic antipollution</li>
                        <p className='text-center font-bold italic'>Prix : 110,95 euros </p>
                    </div>
                    <div className='border bg-[#d9d9d9] col-start-2 col-end-3'>
                        <p className='ml-5 italic underline'>Révision</p>
                        <li className='ml-3'>Vidange huile moteur</li>
                        <li className='ml-3'>Remplacement filtre à huile</li>
                        <li className='ml-3'>Mise à niveau des liquides</li>
                        <li className='ml-3'>Pression des pneus</li>
                        <li className='ml-3'>Remplacement filtre air, habitacle et carburant</li>
                        <p className='text-center font-bold italic'>Prix : 99,95 euros </p>
                    </div>
                </div>
        </main>
    )
}