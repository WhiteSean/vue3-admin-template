import { mergeConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import baseConig from './vite.config.base'

export default mergeConfig(
  {
    mode: 'development',
    server: {
      port: 2999,
      open: true,
      host: '0.0.0.0',
      fs: {
        strict: true,
      },
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConig
)
