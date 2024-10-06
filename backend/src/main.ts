import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Backend API')
    .setDescription('The Backend API description')
    .setVersion('1.0')
    .addTag('backend')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:4173',
    ],
    methods: ["GET", "POST"],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
