export interface GPUData {
    gpu: {
        vendor: string;
        model: string;
        extensions: string[];
    };
}
export declare const generate: () => GPUData;
