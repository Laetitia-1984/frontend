function validation (login) {
    let error = {}
    const email_pattern = /[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /[A-Z][a-zA-Z0-9-_!*]{10,}$/

    if (login.email === "") {
        error.email = 'L\'email ne doit pas être vide'
    }
    else if (!email_pattern.test(login.email)) {
        error.email = 'Email inexistant'
    } else {
        error.email = ''
    }

    if (login.password === '') {
        error.password = 'Le mot de passe ne doit pas être vide'
    } 
    else if (!password_pattern.test(login.password)) {
        error.password = 'Mot de passe errone'
    }else {
        error.password = ''
    }
    return error;
}

export default validation;