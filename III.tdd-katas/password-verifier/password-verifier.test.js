const verifier = require("./password-verifier")

test("password cannot be null", () => {
    expect(() => verifier(null)).toThrow(Error("Password must not be null"))
})

test("password should be larger than 8 characters", () => {
    expect(() => verifier("abcdefgh")).toThrow(Error("Password must be larger than 8 characters"))
})

test("password should contain at least one upper letter", () => {
    try {
        verifier("abcdefghi")
    } catch(e) {
        expect(e.message).toContain("Password must contain at least 1 uppercase character")
    }
})

test("password should contain at least one lowercase letter", () => {
    expect(() => verifier("ABCDEFGHI")).toThrow(Error("Password must contain at least 1 lowercase character"))
})

test("password should contain at least one number", () => {
    try {
        verifier("Abcdefghi")
    } catch(e) {
        expect(e.message).toContain("Password must contain at least 1 number")
    }
})

test("password should be ok if it passes all verifications", () => {
    expect(() => verifier("Abcdefgh1")).not.toThrow(Error)
})

test("password should be ok if it passes at least three verifications", () => {
    expect(() => verifier("Abcdefghi1")).not.toThrow(Error)
})