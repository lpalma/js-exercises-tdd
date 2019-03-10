const PasswordVerifier = require("./password-verifier")

const passwordVerifier = new PasswordVerifier()

test("Password should not be null", () => {
    expect(() => passwordVerifier.verify(null)).toThrow(Error("password should not be null"))
})

test("Password should be larger than 8 characters", () =>{
    expect(() => passwordVerifier.verify("abcdefgh")).toThrow(Error("password should be larger than 8 chararacters"))
})

test("Password should have at least one uppercase letter", () =>{
    expect(() => passwordVerifier.verify("abcdefghi")).toThrow(Error("password should have one uppercase letter at least"))
})

test("Password should have at least one lowercase letter", () =>{
    expect(() => passwordVerifier.verify("ABCDEFGHI")).toThrow(Error("password should have one lowercase letter at least"))
})