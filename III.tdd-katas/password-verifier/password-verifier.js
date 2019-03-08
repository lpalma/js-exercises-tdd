const verifier = (password) => {
    if (password == null) {
        throw Error("Password must not be null")
    }

    if (password.length < 9) {
        throw Error("Password must be larger than 8 characters")
    }

    if (password.toUpperCase() == password) {
        throw Error("Password must contain at least 1 lowercase character")
    }

    const validations = [
        minimumUpperCaseCharacters,
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

const minimumUpperCaseCharacters = (password) => {
    return password.toLowerCase() == password ? "Password must contain at least 1 uppercase character" : ""
}

const minimumNumbers = (password) => {
    return password.split("").every((char) => isNaN(char)) ? "Password must contain at least 1 number" : ""
}

module.exports = verifier