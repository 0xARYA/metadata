"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EncodedLiteralPlugin = () => ({
    name: 'EncodedLiteralPlugin',
    visitor: {
        Literal(path) {
            if (path.node.type === 'NullLiteral' ||
                path.node.type === 'RegExpLiteral' ||
                path.node.type === 'TemplateLiteral')
                return;
            // eslint-disable-next-line no-param-reassign
            if (path.node.extra && path.node.extra.raw !== path.node.value)
                delete path.node.extra.raw;
        },
    },
});
exports.default = EncodedLiteralPlugin;
