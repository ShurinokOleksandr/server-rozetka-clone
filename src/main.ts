import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(session({
        secret:'secret',
        resave:false,
        saveUninitialized:false,
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    const config = new DocumentBuilder()
        .setTitle('API Shop')
        .setDescription('My first backend ')
        .setVersion('1.0')
        .addTag('Login')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(4000);
}
bootstrap();
