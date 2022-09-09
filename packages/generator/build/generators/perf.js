"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const generate = (data) => ({
    performance: {
        timing: {
            connectStart: data.start - 1882,
            navigationStart: data.start - 1885,
            loadEventEnd: data.start - 414,
            domLoading: data.start - 864,
            secureConnectionStart: data.start - 1800,
            fetchStart: data.start - 1872,
            domContentLoadedEventStart: data.start - 548,
            responseStart: data.start - 892,
            responseEnd: data.start - 835,
            domInteractive: data.start - 548,
            domainLookupEnd: data.start - 1822,
            redirectStart: 0,
            requestStart: data.start - 1767,
            unloadEventEnd: data.start - 880,
            unloadEventStart: data.start - 884,
            domComplete: data.start - 422,
            domainLookupStart: data.start - 1882,
            loadEventStart: data.start - 422,
            domContentLoadedEventEnd: data.start - 548,
            redirectEnd: 0,
            connectEnd: data.start - 1767,
        },
    },
});
exports.generate = generate;
