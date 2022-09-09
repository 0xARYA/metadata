export interface AuthData {
    auth: {
        form: {
            method: string;
        };
    };
}
export declare const generate: () => AuthData;
