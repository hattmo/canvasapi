// tslint:disable: no-unused-expression
import { expect } from "chai";
import index from "../src/index";
describe("Tests", () => {
    it("Should have tests", () => {
        const api = index("lms.au.af.edu", "password");
        api.APITokenScopes.listScopes()
    });
});
