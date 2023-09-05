import {Body, Controller, Header, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {CreateUserDto} from "src/users/dto/create-user.dto";
 import {AuthService} from "src/auth/auth.service";
import {AuthByJwtService} from "src/auth-by-jwt/auth-by-jwt.service";

@Controller('auth-by-jwt')
export class AuthByJwtController {

    constructor(private readonly authService: AuthByJwtService) {}


    @Post("/signup")
    @HttpCode(HttpStatus.CREATED)
    @Header("Content-type", "application/json")
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.authService.createUser(createUserDto);
    }


    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: CreateUserDto) {
        return this.authService.signIn(signInDto );
    }
}
