"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const generate = () => ({
    interaction: {
        clicks: 0,
        touches: 0,
        keyPresses: 0,
        cuts: 0,
        copies: 0,
        pastes: 0,
        keyPressTimeIntervals: [],
        mouseClickPositions: [],
        keyCycles: [],
        mouseCycles: [],
        touchCycles: [],
    },
});
exports.generate = generate;
