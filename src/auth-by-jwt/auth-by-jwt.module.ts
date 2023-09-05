import {forwardRef, Module} from '@nestjs/common';
import { AuthByJwtService } from './auth-by-jwt.service';
import {AuthByJwtController} from "src/auth-by-jwt/auth-by-jwt.controller";
import {JwtModule} from "@nestjs/jwt";
import {UsersModule} from "src/users/users.module";

@Module({
  providers: [AuthByJwtService],
  controllers:[AuthByJwtController],
  imports:[
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret:'secret',
      signOptions:{
        expiresIn:'24h'
      }
    })
  ],
  exports:[JwtModule,AuthByJwtService]
})
export class AuthByJwtModule {}
