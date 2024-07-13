function isEmail(mail){
    const expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresion.test(mail)
}

function isNotEmpty(txt){
    return txt.length > 0 ? true : false;
}


function isOk([...validators]){//Todo debe ser verdadero para decir que isOk
    console.log(validators)
    return validators.reduce((acc, curr) => acc && curr, true)
}

export {
    isEmail,
    isNotEmpty,
    isOk
}