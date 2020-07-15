import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

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
      postcss({
        plugins: []
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
    external: ['react', 'react-dom', 'antd', 'prop-types', '@ant-design/icons']
}