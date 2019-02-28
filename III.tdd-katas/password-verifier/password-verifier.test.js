test("password cannot be null", () => {
    expect(() => verifier(null)).toThrowError(PasswordValidationException("Password must not be null"))
})

const verifier = (password) => {
    throw new PasswordValidationException("Password must not be null")
}

const PasswordValidationException = (message) => {
    this.message = message
}