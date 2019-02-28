const verifier = require("./password-verifier")

test("password cannot be null", () => {
    expect(() => verifier(null)).toThrow(Error("Password must not be null"))
})

test("password should be larger than 8 characters", () => {
    expect(() => verifier("abcdefgh")).toThrow(Error("Password must be larger than 8 characters"))
})