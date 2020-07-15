import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import commonjs from "rollup-plugin-commonjs";

import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
      sass({ insert: true }),
      typescript({ objectHashIgnoreUnknownHack: true }),
      commonjs({
        include: "node_modules/**", // Default: undefined
      }),
    ],
    external: ['react', 'react-dom', 'antd', 'prop-types']
}