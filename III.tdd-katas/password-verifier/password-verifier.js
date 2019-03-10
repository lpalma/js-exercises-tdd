class PasswordVerifier {
    verify(password) {
        if (password == null) {
            throw Error("password should not be null")
        }

        if (password.length < 9) {
            throw Error("password should be larger than 8 chararacters")
        }

        throw Error("password should have one uppercase letter at least")
    }
}

module.exports = PasswordVerifier