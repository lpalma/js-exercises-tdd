const PasswordVerifier = require("./password-verifier")

const passwordVerifier = new PasswordVerifier()

test("Password should not be null", () => {
    expect(() => passwordVerifier.verify(null)).toThrow(Error("password should not be null"))
})

test("Password should be larger than 8 characters", () =>{
    try {
        passwordVerifier.verify("abcdefgh")
    } catch (e) {
        expect(e.message).toContain("password should be larger than 8 chararacters")
    }
})

test("Password should have at least one uppercase letter", () =>{
    try {
        passwordVerifier.verify("abcdefghi")
    } catch (e) {
        expect(e.message).toContain("password should have one uppercase letter at least")
    }
})

test("Password should have at least one lowercase letter", () =>{
    try {
        passwordVerifier.verify("ABCDEFGHI")
    } catch (e) {
        expect(e.message).toContain("password should have one lowercase letter at least")
    }
})

test("Password contain at least one number", () =>{
    try {
        passwordVerifier.verify("Abcdefghi")
    } catch (e) {
        expect(e.message).toContain("password should have one number at least")
    }
})

test("Password should be valid if passes all validations", () =>{
    expect(() => passwordVerifier.verify("Abcdefghi1")).not.toThrow(Error)
})

test("Password should be OK if it passes at least four validations", () => {
    expect(() => passwordVerifier.verify("Abcdefghi")).not.toThrow(Error)
})