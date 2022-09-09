"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const generate = (data) => ({
    referrer: data.referrer,
    userAgent: data.userAgent,
    location: data.location,
    webDriver: false,
});
exports.generate = generate;
