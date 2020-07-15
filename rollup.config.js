import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
      sass({ insert: true }),
      typescript({ objectHashIgnoreUnknownHack: false }),
      postcss({
        plugins: []
      })
    ],
    external: ['react', 'react-dom', 'antd', 'prop-types', '@ant-design/icons']
}