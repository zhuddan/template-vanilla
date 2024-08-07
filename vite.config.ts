import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')
  return {
    server: {
      port: Number(env.VITE_APP_PORT),
      host: true,
    },
  }
})
