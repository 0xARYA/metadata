export interface CanvasData {
    canvas: {
        hash: number;
        emailHash: number | null;
        histogramBins: number[];
    };
}
export declare const generate: () => CanvasData;
