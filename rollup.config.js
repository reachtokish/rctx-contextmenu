import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import react from 'react';
import reactDom from 'react-dom';
import lodash from 'lodash';

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
      }
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
      }
    }
  ],
  plugins: [
    external(),
    postcss({
      extensions: ['.css', '.scss'],
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: []
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'react': Object.keys(react),
        'react-dom': Object.keys(reactDom),
        'lodash': Object.keys(lodash)
      }
    })
  ]
}