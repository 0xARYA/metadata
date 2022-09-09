export interface InputData {
    form: {
        [key: string]: {
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
            width: number;
            height: number;
            totalFocusTime: number;
            checksum?: string;
            autocomplete?: boolean;
            prefilled: boolean;
        };
    };
}
export declare const generate: () => InputData;
