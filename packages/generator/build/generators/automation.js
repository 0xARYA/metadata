"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const generate = () => ({
    automation: {
        phantom: { properties: { window: [] } },
        wd: { properties: { document: [], navigator: [], window: [] } },
    },
});
exports.generate = generate;
