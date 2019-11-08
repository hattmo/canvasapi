import webRequest from "./webRequest";

interface DomainLookup {
    name: string;
    domain: string;
    distance: string | null;
    authentication_provider: string | null;
}

export default (host: string, key: string) => {
    const request = webRequest(host, key);
    return {
        searchAccountDomains: async (params?: {
            name?: string,
            domain?: string,
            latitude?: number,
            longitude?: number,
        }): Promise<DomainLookup> => {
            return await request(`/api/v1/accounts/search`, params) as DomainLookup;
        },
    };
};
