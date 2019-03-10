class PasswordVerifier {
    verify(password) {
        if (password == null) {
            throw Error("password should not be null")
        }

        throw Error("password should be larger than 8 chararacters")
    }
}

module.exports = PasswordVerifier