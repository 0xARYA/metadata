export interface InteractionData {
    interaction: {
        clicks: number;
        touches: number;
        keyPresses: number;
        cuts: number;
        copies: number;
        pastes: number;
        keyPressTimeIntervals: number[];
        mouseClickPositions: string[];
        keyCycles: number[];
        mouseCycles: number[];
        touchCycles: number[];
    };
}
export declare const generate: () => InteractionData;
