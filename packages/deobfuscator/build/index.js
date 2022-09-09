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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const babel = __importStar(require("@babel/core"));
const js_beautify_1 = __importDefault(require("js-beautify"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// @ts-ignore types are not needed
const babel_plugin_minify_dead_code_elimination_1 = __importDefault(require("babel-plugin-minify-dead-code-elimination"));
// @ts-ignore types are not needed.
const babel_plugin_remove_unused_vars_1 = __importDefault(require("babel-plugin-remove-unused-vars"));
const EncodedLiteral_1 = __importDefault(require("./plugins/EncodedLiteral"));
const ConcealedLiteral_1 = __importDefault(require("./plugins/ConcealedLiteral"));
const ComputedProperty_1 = __importDefault(require("./plugins/ComputedProperty"));
const targetFilePath = path_1.default.join(__dirname, '../sample/obfuscated.js');
const transformedFile = babel.transformFileSync(targetFilePath, {
    plugins: [
        EncodedLiteral_1.default,
        ConcealedLiteral_1.default,
        ComputedProperty_1.default,
        babel_plugin_remove_unused_vars_1.default,
        babel_plugin_minify_dead_code_elimination_1.default,
    ],
    ast: true,
    code: true,
});
const finalTransformedFile = js_beautify_1.default.js((_a = transformedFile === null || transformedFile === void 0 ? void 0 : transformedFile.code) !== null && _a !== void 0 ? _a : '', {
    brace_style: 'collapse',
    break_chained_methods: true,
    end_with_newline: true,
    indent_char: ' ',
    indent_level: 0,
    indent_size: 4,
    indent_with_tabs: false,
    jslint_happy: false,
    keep_array_indentation: false,
    max_preserve_newlines: 10,
    preserve_newlines: true,
    space_after_anon_function: true,
    space_before_conditional: true,
    space_in_empty_paren: false,
    space_in_paren: false,
    unescape_strings: false,
    wrap_line_length: 0,
});
fs_1.default.writeFileSync(path_1.default.join(__dirname, '../sample/deobfuscated.js'), finalTransformedFile);
