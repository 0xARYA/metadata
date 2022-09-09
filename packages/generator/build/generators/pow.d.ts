export interface PowData {
    token: {
        isCompatible: boolean;
        pageHasCaptcha: 1 | 0;
    };
}
export declare const generate: () => PowData;
