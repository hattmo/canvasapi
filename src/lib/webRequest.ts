import https from "https";

export default (hostname: string, key: string) => {
    return async (
        method: string,
        path: string,
        parameters?: object,
        headers?: object,
        body?: object,
    ) => new Promise((resolve, reject) => {
        let paramString = "";
        if (parameters !== undefined) {
            paramString = Object.keys(parameters).reduce((prev, curr) => `${prev}&${curr}=${parameters[curr]}`, "?");
        }
        const req = https.request(`${hostname}${path}${paramString}`, {
            headers: {
                "Accept": "application/json+canvas-string-ids",
                "Authorization": `Bearer ${key}`,
                "Content-type": body !== undefined ? "application/json" : undefined,
                ...headers,
            },
            method,
        }, (response) => {
            if (response.statusCode !== undefined && response.statusCode >= 200 && response.statusCode < 300) {
                let resbody;
                response.on("data", (chunk) => {
                    resbody += chunk;
                });
                response.on("end", () => {
                    resolve(JSON.parse(resbody));
                });
                response.on("error", (err) => {
                    reject(err);
                });
            } else {
                reject();
            }
        });
        req.on("error", (err) => {
            reject(err);
        })
        if (body !== undefined) {
            req.end(JSON.stringify(body));
        } else {
            req.end();
        }
    });
};
