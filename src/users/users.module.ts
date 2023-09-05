import {forwardRef, Module} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';
import {JwtService} from "@nestjs/jwt";
import {AuthByJwtModule} from "src/auth-by-jwt/auth-by-jwt.module";

@Module({
    imports: [SequelizeModule.forFeature([User]),forwardRef(() => AuthByJwtModule),],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
