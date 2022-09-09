"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isConcealedLiteralVariable = (path) => {
    var _a, _b;
    return !!path &&
        path.node.id.type === 'Identifier' &&
        path.node.id.name[0] === '_' &&
        ((_b = (_a = path.node) === null || _a === void 0 ? void 0 : _a.init) === null || _b === void 0 ? void 0 : _b.type) === 'ArrayExpression';
};
const isConcealedLiteralReference = (path) => !!path &&
    path.node.type === 'Identifier' &&
    !!path.parentPath &&
    path.parentPath.node.type === 'MemberExpression' &&
    path.parentPath.node.property.type === 'NumericLiteral';
const ConcealedLiteralPlugin = () => ({
    name: 'ConcealedLiteralPlugin',
    visitor: {
        VariableDeclarator(path) {
            if (!isConcealedLiteralVariable(path))
                return;
            const binding = path.scope.getBinding(path.node.id.name);
            if (!binding || !binding.constant)
                return;
            binding.referencePaths.forEach(referencePath => {
                if (!isConcealedLiteralReference(referencePath))
                    return;
                const resolvedLiteral = path.node.init.elements[referencePath.parentPath.node.property.value];
                if (!resolvedLiteral)
                    return;
                referencePath.parentPath.replaceWith(resolvedLiteral);
            });
            path.remove();
        },
    },
});
exports.default = ConcealedLiteralPlugin;
