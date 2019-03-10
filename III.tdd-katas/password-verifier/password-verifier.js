class PasswordVerifier {
    verify(password) {
        notNull(password)
        largerThanEightCharacters(password)
        atLeastOneUpperCaseCharacter(password)
        atLeastOneLowerCaseCharacter(password)
        atLeastOneNumber(password)
    }
}

const notNull = (password) => {
    if (password == null) {
        throw Error("password should not be null")
    }
}

const largerThanEightCharacters = (password) => {
    if (password.length < 9) {
        throw Error("password should be larger than 8 chararacters")
    }
}

const atLeastOneUpperCaseCharacter = (password) => {
    if (password.toLowerCase() == password) {
        throw Error("password should have one uppercase letter at least")
    }
}

const atLeastOneLowerCaseCharacter = (password) => {
    if (password.toUpperCase() == password) {
        throw Error("password should have one lowercase letter at least")
    }
}

const atLeastOneNumber = (password) => {
    if (password.split("").every(char => isNaN(char))) {
        throw Error("password should have one number at least")
    }
}

module.exports = PasswordVerifier