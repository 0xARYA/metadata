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
Object.defineProperty(exports, "__esModule", { value: true });
exports.lsubid = exports.version = exports.errors = exports.auth = exports.pow = exports.canvas = exports.input = exports.tts = exports.math = exports.dnt = exports.gpu = exports.capabilities = exports.browser = exports.fp2 = exports.tz = exports.end = exports.auto = exports.perf = exports.batt = exports.h = exports.script = exports.interaction = exports.start = exports.metrics = void 0;
exports.metrics = __importStar(require("./metrics"));
exports.start = __importStar(require("./start"));
exports.interaction = __importStar(require("./interaction"));
exports.script = __importStar(require("./script"));
exports.h = __importStar(require("./history"));
exports.batt = __importStar(require("./battery"));
exports.perf = __importStar(require("./perf"));
exports.auto = __importStar(require("./automation"));
exports.end = __importStar(require("./end"));
exports.tz = __importStar(require("./tz"));
exports.fp2 = __importStar(require("./FP2"));
exports.browser = __importStar(require("./browser"));
exports.capabilities = __importStar(require("./capabilities"));
exports.gpu = __importStar(require("./GPU"));
exports.dnt = __importStar(require("./DNT"));
exports.math = __importStar(require("./math"));
exports.tts = __importStar(require("./tts"));
exports.input = __importStar(require("./input"));
exports.canvas = __importStar(require("./canvas"));
exports.pow = __importStar(require("./pow"));
exports.auth = __importStar(require("./auth"));
exports.errors = __importStar(require("./errors"));
exports.version = __importStar(require("./version"));
exports.lsubid = __importStar(require("./lsubid"));
