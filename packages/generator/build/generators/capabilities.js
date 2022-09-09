"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const generate = () => ({
    capabilities: {
        css: {
            textShadow: 1,
            WebkitTextStroke: 1,
            boxShadow: 1,
            borderRadius: 1,
            borderImage: 1,
            opacity: 1,
            transform: 1,
            transition: 1,
        },
        js: {
            audio: true,
            geolocation: true,
            localStorage: 'supported',
            touch: false,
            video: true,
            webWorker: true,
        },
        elapsed: 0,
    },
});
exports.generate = generate;
