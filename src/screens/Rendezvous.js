export const Rendezvous = () => {
    return (
        <div className='container'>
            <p className='form'>Formulaire de contact</p>
            <form className='rounded'>
                <div className='mb-3'>
                    <label htmlFor='nom'>Votre nom</label>
                    <input type='email' name='nom' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='prenom'>Votre prénom</label>
                    <input type='text' name='prenom' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>Votre email</label>
                    <input type='text' name='email' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='numTel'>Votre téléphone</label>
                    <input type='text' name='numTel' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='message'>Votre message</label>
                    <textarea name='message' />
                </div>
                <div>
                    <button className='buttonConnect rounded'>Envoyer</button>
                </div>
            </form>
        </div>
    )

}