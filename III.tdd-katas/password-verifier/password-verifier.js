const verifier = (password) => {
    if (password == null) {
        throw new Error("Password must not be null")
    }
    
    if (password.length < 9) {
        throw new Error("Password must be larger than 8 characters")
    }
}

module.exports = verifier