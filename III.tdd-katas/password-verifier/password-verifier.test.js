class PasswordVerifier {
    verify(password) {
        if (password == null) {
            throw Error("password should not be null")
        }

        throw Error("password should be larger than 8 chararacters")
    }
}

const passwordVerifier = new PasswordVerifier()

test("Password should not be null", () => {
    expect(() => passwordVerifier.verify(null)).toThrow(Error("password should not be null"))
})

test("Password should be larger than 8 characters", () =>{
    expect(() => passwordVerifier.verify("abcdefgh")).toThrow(Error("password should be larger than 8 chararacters"))
})