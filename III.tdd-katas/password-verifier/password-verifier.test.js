const verifier = require("./password-verifier")

test("password cannot be null", () => {
    expect(() => verifier(null)).toThrow(Error("Password must not be null"))
})

test("password should be larger than 8 characters", () => {
    try {
        verifier("abcdefgh")
    } catch(e) {
        expect(e.message).toContain("Password must be larger than 8 characters")
    }
})

test("password should contain at least one upper letter", () => {
    try {
        verifier("abcdefghi")
    } catch(e) {
        expect(e.message).toContain("Password must contain at least 1 uppercase character")
    }
})

test("password should contain at least one lowercase letter", () => {
    try {
        verifier("ABCDEFGHI")
    } catch(e) {
        expect(e.message).toContain("Password must contain at least 1 lowercase character")
    }
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
    expect(() => verifier("A1")).not.toThrow(Error)
})