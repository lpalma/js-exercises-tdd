class PasswordVerifier {
    verify(password) {
        if (password == null) {
            throw Error("password should not be null")
        }

        if (password.length < 9) {
            throw Error("password should be larger than 8 chararacters")
        }

        if (password.toLowerCase() == password) {
            throw Error("password should have one uppercase letter at least")
        }

        if (password.toUpperCase() == password) {
            throw Error("password should have one lowercase letter at least")
        }

        throw Error("password should have one number at least")
    }
}

module.exports = PasswordVerifier