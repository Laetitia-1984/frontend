export const NewProfile = () => {
    return (
        <div>
        
            <form method='POST' /*action='/new-employe'*/>
                <div>
                    <label>Nom</label>
                    <input type="text" name="firstname" />
                </div>
                <div>
                    <label>Prénom</label>
                    <input type="text" name="lastname" />
                </div>
                <div>
                    <label>Poste</label>
                    <input type="text" name="job" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="passwordemploye" />
                </div>
                <button className='buttonConnect rounded' type="submit">Envoyer</button>
            </form>
        </div>
    )
}