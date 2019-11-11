import { RequestFunction, User } from "./helpers/ObjectDef";

export default (request: RequestFunction) => {
    return {
        ListUsersInAccount: async (accountId: string, params?: {
            search_term?: string,
            enrollment_type?: string,
            sort?: "username" | "email" | "sis_id" | "last_login",
            order?: "asc" | "desc",
        }): Promise<User[]> => {
            return await request(
                "GET",
                `/api/v1/accounts/${accountId}/users`,
                params,
            ) as User[];
        },
    };
};
