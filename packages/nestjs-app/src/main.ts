import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify'

async function createApp() {
  return await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )
}

if (import.meta.env.PROD) {
  const app = await createApp()
  await app.listen(process.env.API_PORT, '0.0.0.0')
}

export const viteNodeApp = createApp()
