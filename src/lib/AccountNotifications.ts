import webRequest from "./webRequest";

interface AccountNotification {
    subject: string;
    message: string;
    start_at: string;
    end_at: string;
    icon: string;
    roles: string[];
    role_ids: number[];
}

export default (host: string, key: string) => {
    const request = webRequest(host, key);
    return {
        indexOfActiveGlobalNotificationForTheUser: async (accountId: string): Promise<AccountNotification[]> => {
            return await request("GET", `/api/v1/accounts/${accountId}/account_notifications`) as AccountNotification[];
        },
        showGlobalNotification: async (accountId: string, id: string): Promise<AccountNotification> => {
            return await request("GET", `/api/v1/accounts/${accountId}/account_notifications/${id}`) as AccountNotification;
        },
        closeNotificationForUser: async (accountId: string, id: string): Promise<AccountNotification> => {
            return await request("DELETE", `/api/v1/accounts/${accountId}/account_notifications/${id}`) as AccountNotification;
        },
        
    };
};
