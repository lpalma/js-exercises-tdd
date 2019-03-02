const verifier = (password) => {
    notNull(password)
    minimumLetters(password)
    minimumUpperCaseCharacters(password)
    minimumLowerCaseCharacters(password)
    minimumNumbers(password)
}

const notNull = (password) => {
    validate(() => password == null, "Password must not be null")
}

const minimumLetters = (password) => {
    validate(() => password.length < 9, "Password must be larger than 8 characters")
}

const minimumUpperCaseCharacters = (password) => {
    validate(() => password.toLowerCase() == password, "Password must contain at least 1 uppercase character")
}

const minimumLowerCaseCharacters = (password) => {
    validate(() => password.toUpperCase() == password, "Password must contain at least 1 lowercase character")
}

const minimumNumbers = (password) => {
    validate(() => password.split("").every((char) => isNaN(char)), "Password must contain at least 1 number")
}

const validate = (failsValidation, errorMsg) => {
    if (failsValidation()) {
        throw new Error(errorMsg)
    }
}

module.exports = verifier