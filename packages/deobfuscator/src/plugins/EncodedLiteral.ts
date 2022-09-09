import {PluginObj} from '@babel/core';

const EncodedLiteralPlugin = (): PluginObj => ({
  name: 'EncodedLiteralPlugin',
  visitor: {
    Literal(path) {
      if (
        path.node.type === 'NullLiteral' ||
        path.node.type === 'RegExpLiteral' ||
        path.node.type === 'TemplateLiteral'
      )
        return;

      // eslint-disable-next-line no-param-reassign
      if (path.node.extra && path.node.extra.raw !== path.node.value) delete path.node.extra.raw;
    },
  },
});

export default EncodedLiteralPlugin;
