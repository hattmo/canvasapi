import webRequest from "./webRequest";

interface Scope {
    resource: string;
    resource_name: string;
    controller: string;
}

export default (host: string, key: string) => {
    const request = webRequest(host, key);
    return {
        listScopes: async (accountId: string, params?: { group_by?: string }): Promise<Scope> => {
            return await request("GET", `/api/v1/accounts/${accountId}/scopes`, params) as Scope;
        },
    };
};
