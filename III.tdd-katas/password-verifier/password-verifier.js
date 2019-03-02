const verifier = (password) => {
    validate(() => password == null, "Password must not be null")
    validate(() => password.length < 9, "Password must be larger than 8 characters")
    validate(() => password.toLowerCase() == password, "Password must contain at least 1 uppercase character")
    validate(() => password.toUpperCase() == password, "Password must contain at least 1 lowercase character")
    validate(() => password.split("").every((char) => isNaN(char)), "Password must contain at least 1 number")
}

const validate = (failsValidation, errorMsg) => {
    if (failsValidation()) {
        throw new Error(errorMsg)
    }
}

module.exports = verifier