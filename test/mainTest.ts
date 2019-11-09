// tslint:disable: no-unused-expression
import { expect } from "chai";
import index from "../src/index";
describe("Tests", () => {
    it("Should have tests", async () => {
        const api = index("lms.au.af.edu", "password");
        const scope = await api.APITokenScopes.listScopes("1234");
        scope.
    });
});
