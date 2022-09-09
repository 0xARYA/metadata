"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generate = () => ({
    end: crypto_1.default.randomInt(20000, 30000),
});
exports.generate = generate;
