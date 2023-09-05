import { Body, Controller, Header, HttpCode, HttpStatus, Post, UseGuards, Request, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LocalAuthGuard } from "../auth/local.auth.guard";
import { AuthenticatedGuard } from "../auth/authenticated.guard";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    // @Post("/signup")
    // @HttpCode(HttpStatus.CREATED)
    // @Header("Content-type", "application/json")
    // createUser(@Body() createUserDto: CreateUserDto) {
    //     return this.usersService.create(createUserDto);
    // }


    // @HttpCode(HttpStatus.OK)
    // @Post('login')
    // signIn(@Body() signInDto: Record<string, any>) {
    //     return this.usersService.signIn(signInDto.username, signInDto.password);
    // }
    // @Post("/login")
    // @UseGuards(LocalAuthGuard)
    // @HttpCode(HttpStatus.OK)
    //  login(@Request() req){
    //     return {user:req.user,mgs:'Login'}
    // }
    @Get('login-check')
    @UseGuards(AuthenticatedGuard)
    loginCheck(@Request() req){
        return req.user
    }
}
