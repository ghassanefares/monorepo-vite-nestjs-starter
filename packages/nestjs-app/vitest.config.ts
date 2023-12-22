/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        reportsDirectory: './coverage',
        provider: 'istanbul',
      },
      globals: true,
    },
  }),
)
