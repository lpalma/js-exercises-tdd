const verifier = (password) => {
    if (password == null) {
        throw Error("Password must not be null")
    }

    const validations = [
        minimumLetters,
        minimumUpperCaseCharacters,
        minimumLowerCaseCharacters,
        minimumNumbers
    ]

    const errors = validations
        .map(validation => validation(password))
        .filter(error => error != "")
    
    if (errors.length > 2) {
        const msg = errors.join("; ")
        throw Error(msg)
    }
}

const minimumLetters = (password) => {
    return password.length < 9 ? "Password must be larger than 8 characters" : ""
}

const minimumUpperCaseCharacters = (password) => {
    return password.toLowerCase() == password ? "Password must contain at least 1 uppercase character" : ""
}

const minimumLowerCaseCharacters = (password) => {
    return password.toUpperCase() == password ? "Password must contain at least 1 lowercase character" : ""
}

const minimumNumbers = (password) => {
    return password.split("").every((char) => isNaN(char)) ? "Password must contain at least 1 number" : ""
}

module.exports = verifier