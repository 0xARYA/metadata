"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComputedPropertyPlugin = (_) => ({
    name: 'ComputedPropertyPlugin',
    visitor: {
        MemberExpression: {
            exit(path) {
                if (!path.node.computed || path.node.property.type !== 'StringLiteral')
                    return;
                const propertyValue = path.node.property.value;
                if (!_.types.isValidIdentifier(propertyValue))
                    return;
                path.get('property').replaceWith(_.types.identifier(propertyValue));
                // eslint-disable-next-line no-param-reassign
                path.node.computed = false;
            },
        },
    },
});
exports.default = ComputedPropertyPlugin;
