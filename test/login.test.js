import login from '../utils/login.mjs'
import assert from "assert";

it("Login API should return a valid login token", async () => {
    const loginToken = await login({username: "auc16001@byui.edu", password: "Password!64"});

    assert.equal(loginToken.length, 36);
});