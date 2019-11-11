// tslint:disable: no-unused-expression
// tslint:disable: no-console
import index from "../src/index";
import fs from "fs";
describe("Tests", () => {
    it("Should have tests", async () => {
        try {

            const session = index("lms.au.af.edu", "04NBxWuN4VTf20mmxnepYVf27rIJ0X3dMmVsJjv387RaZ6Ir6Tun0Y8YfW3FKKpA", {
                ca: fs.readFileSync("./test/dodrootca.cer"),
            });
            const res = await session.Users.ListUsersInAccount("5726");
            console.log(res);
        } catch (error) {
            console.error("Error:\n" + error);
        }
    });
});
