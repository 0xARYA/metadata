export interface CanvasData {
  canvas: {
    hash: number;
    emailHash: number | null;
    histogramBins: number[];
  };
}

export const generate = (): CanvasData => ({
  canvas: {
    hash: 0,
    emailHash: null,
    histogramBins: [],
  },
});
