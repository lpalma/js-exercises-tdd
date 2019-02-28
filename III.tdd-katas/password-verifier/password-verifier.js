const verifier = (password) => {
    validate(() => password == null, "Password must not be null")
    validate(() => password.length < 9, "Password must be larger than 8 characters")
    validate(() => password.split().every((char) => char.toLowerCase() == char), "Password must contain at least 1 uppercase character")
}

const validate = (failsValidation, errorMsg) => {
    if (failsValidation()) {
        throw new Error(errorMsg)
    }
}

module.exports = verifier