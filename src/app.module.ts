import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizeConfig.service';
import { databaseConfig } from './config/configuration';
import { PcModule } from './pc/pc.module';
import { CommentsModule } from './comments/comments.module';
import { AuthByJwtController } from './auth-by-jwt/auth-by-jwt.controller';
import { AuthByJwtModule } from './auth-by-jwt/auth-by-jwt.module';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useClass: SequelizeConfigService,
        }),
        ConfigModule.forRoot({ load: [databaseConfig] }),
        UsersModule,
        PcModule,
        CommentsModule,
        AuthByJwtModule,
    ],
    controllers: [AuthByJwtController],
})
export class AppModule {}
