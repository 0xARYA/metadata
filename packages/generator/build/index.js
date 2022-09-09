"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = exports.generate = void 0;
const crc_32_1 = __importDefault(require("crc-32"));
const TEAEncrypt_1 = __importDefault(require("./utilities/TEAEncrypt"));
const generators = __importStar(require("./generators"));
const METADATA_IDENTIFIER = 'ECdITeCs';
const TEA_ENCRYPTION_MATERIAL = [1888420705, 2576816180, 2347232058, 874813317];
const generate = (generatorData) => Object.values(generators).reduce((generatedData, generator) => Object.assign(generatedData, generator.generate(generatorData)), {});
exports.generate = generate;
const encrypt = (metadataPayload) => {
    const payload = JSON.stringify(metadataPayload);
    // eslint-disable-next-line no-bitwise
    const payloadSum = (crc_32_1.default.str(payload) >>> 0).toString(16).toUpperCase();
    const encryptPayload = `${payloadSum}#${payload}`;
    const encrypted = (0, TEAEncrypt_1.default)(encryptPayload, TEA_ENCRYPTION_MATERIAL);
    return `${METADATA_IDENTIFIER}:${Buffer.from(encrypted, 'binary').toString('base64')}`;
};
exports.encrypt = encrypt;
