"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generate = () => ({
    timeToSubmit: crypto_1.default.randomInt(11000, 12500),
});
exports.generate = generate;
