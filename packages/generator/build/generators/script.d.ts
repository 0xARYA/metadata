export interface ScriptData {
    scripts: {
        dynamicUrls: string[];
        inlineHashes: number[];
        elapsed: number;
        dynamicUrlCount: number;
        inlineHashesCount: number;
    };
}
export declare const generate: () => ScriptData;
