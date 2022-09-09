"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const generate = () => ({
    form: {
        'ap-credential-autofill-hint': {
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
            width: 0,
            height: 0,
            totalFocusTime: 0,
            checksum: '',
            autocomplete: false,
            prefilled: true,
        },
        password: {
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
            width: 296,
            height: 31,
            totalFocusTime: 0,
            autocomplete: false,
            prefilled: true,
        },
    },
});
exports.generate = generate;
