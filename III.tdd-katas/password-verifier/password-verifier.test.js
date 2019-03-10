class PasswordVerifier {
    verify(password) {
        throw Error("password should not be null")
    }
}

test("Password should not be null", () => {
    const passwordVerifier = new PasswordVerifier()
    expect(() => passwordVerifier.verify(null)).toThrow(Error("password should not be null"))
})