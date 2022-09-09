import * as babel from '@babel/core';
import JSBeautify from 'js-beautify';
import path from 'path';
import fileSystem from 'fs';

// @ts-ignore types are not needed
import DeadCodeEliminationPlugin from 'babel-plugin-minify-dead-code-elimination';

// @ts-ignore types are not needed.
import RemoveUnusedPlugin from 'babel-plugin-remove-unused-vars';

import EncodedLiteralPlugin from './plugins/EncodedLiteral';
import ConcealedLiteralPlugin from './plugins/ConcealedLiteral';
import ComputedPropertyPlugin from './plugins/ComputedProperty';

const targetFilePath = path.join(__dirname, '../sample/obfuscated.js');

const transformedFile = babel.transformFileSync(targetFilePath, {
  plugins: [
    EncodedLiteralPlugin,
    ConcealedLiteralPlugin,
    ComputedPropertyPlugin,
    RemoveUnusedPlugin,
    DeadCodeEliminationPlugin,
  ],
  ast: true,
  code: true,
});

const finalTransformedFile = JSBeautify.js(transformedFile?.code ?? '', {
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

fileSystem.writeFileSync(path.join(__dirname, '../sample/deobfuscated.js'), finalTransformedFile);
