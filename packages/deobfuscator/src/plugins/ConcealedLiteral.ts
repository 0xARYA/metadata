import babel, {NodePath, PluginObj} from '@babel/core';

const isConcealedLiteralVariable = (
  path?: NodePath<babel.types.VariableDeclarator> | null
): path is NodePath<
  babel.types.VariableDeclarator & {id: {type: 'Identifier'}; init: {type: 'ArrayExpression'}}
> =>
  !!path &&
  path.node.id.type === 'Identifier' &&
  path.node.id.name[0] === '_' &&
  path.node?.init?.type === 'ArrayExpression';

const isConcealedLiteralReference = (
  path?: NodePath<babel.types.Node> | null
): path is NodePath<babel.types.Identifier> & {
  parentPath: NodePath<babel.types.MemberExpression & {property: {type: 'NumericLiteral'}}>;
} =>
  !!path &&
  path.node.type === 'Identifier' &&
  !!path.parentPath &&
  path.parentPath.node.type === 'MemberExpression' &&
  path.parentPath.node.property.type === 'NumericLiteral';

const ConcealedLiteralPlugin = (): PluginObj => ({
  name: 'ConcealedLiteralPlugin',
  visitor: {
    VariableDeclarator(path) {
      if (!isConcealedLiteralVariable(path)) return;

      const binding = path.scope.getBinding(path.node.id.name);

      if (!binding || !binding.constant) return;

      binding.referencePaths.forEach(referencePath => {
        if (!isConcealedLiteralReference(referencePath)) return;

        const resolvedLiteral =
          path.node.init.elements[referencePath.parentPath.node.property.value];

        if (!resolvedLiteral) return;

        referencePath.parentPath.replaceWith(resolvedLiteral);
      });

      path.remove();
    },
  },
});

export default ConcealedLiteralPlugin;
