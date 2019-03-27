class PasswordVerifier {
    verify(password) {
        notNull(password)

        const validations = [
            largerThanEightCharacters,
            atLeastOneUpperCaseCharacter,
            atLeastOneLowerCaseCharacter,
            atLeastOneNumber
        ]

        const errors = validations
            .map(validation => validation(password))
            .filter(error => error != "")

        if (errors.length > 1) {
            const msg = errors.join()
            throw Error(msg)
        }
    }
}

const notNull = (password) => {
    if (password == null) {
        throw Error("password should not be null")
    }
}

const largerThanEightCharacters = (password) => {
    return password.length < 9 ? "password should be larger than 8 chararacters" : ""
}

const atLeastOneUpperCaseCharacter = (password) => {
    return password.toLowerCase() == password ? "password should have one uppercase letter at least" : "" 
}

const atLeastOneLowerCaseCharacter = (password) => {
    return password.toUpperCase() == password ? "password should have one lowercase letter at least" : ""
}

const atLeastOneNumber = (password) => {
    return password.split("").every(char => isNaN(char)) ? "password should have one number at least" : ""
}

module.exports = PasswordVerifier