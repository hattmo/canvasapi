import { RequestFunction } from "./helpers/ObjectDef";

interface DomainLookup {
    name: string;
    domain: string;
    distance: string | null;
    authentication_provider: string | null;
}

export default (request: RequestFunction) => {

    return {
        searchAccountDomains: async (
            params?: {
                name?: string,
                domain?: string,
                latitude?: number,
                longitude?: number,
            },
        ): Promise<DomainLookup> => {
            return await request(
                "GET",
                `/api/v1/accounts/search`,
                params,
            ) as DomainLookup;
        },
    };
};
