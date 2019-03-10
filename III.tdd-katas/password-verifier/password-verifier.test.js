const PasswordVerifier = require("./password-verifier")

const passwordVerifier = new PasswordVerifier()

test("Password should not be null", () => {
    expect(() => passwordVerifier.verify(null)).toThrow(Error("password should not be null"))
})

test("Password should be larger than 8 characters", () =>{
    expect(() => passwordVerifier.verify("abcdefgh")).toThrow(Error("password should be larger than 8 chararacters"))
})