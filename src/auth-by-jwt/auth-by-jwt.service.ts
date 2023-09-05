import {Body, Header, HttpCode, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "src/users/dto/create-user.dto";
import {JwtService} from "@nestjs/jwt";
import {UsersService} from "src/users/users.service";
import * as bcrypt from 'bcryptjs'
import {User} from "src/users/users.model";
import {NewUserDto} from "src/auth-by-jwt/newUserDto";
@Injectable()
export class AuthByJwtService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {}



    async createUser(createUserDto: CreateUserDto ) {
        const user = await this.userService.getUser(createUserDto.username)
        console.log(createUserDto,'creatUser')
        if (user) {
            return { warningMessage: "Пользователь с таким ником сущесвтует" };
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 5);

        const newUser = new User();
        newUser.username = createUserDto.username;
        newUser.password = hashedPassword;
        newUser.email = createUserDto.email;

        await newUser.save()
        return this.generateToken(createUserDto)
    }



    async signIn(signInDto) {
        const user  = await this.validateUser(signInDto)
        return this.generateToken(user)

    }

    async generateToken(signInDto:CreateUserDto){
        const user = {username:signInDto.username,password:signInDto.password,email:signInDto.email}
        return {
            token:this.jwtService.sign(user)
        }
    }

    private async  validateUser(signInDto:CreateUserDto){
        const user = await this.userService.getUser(signInDto.username)
        const passwordEquals = await bcrypt.compare(signInDto.password,user.password)

        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'Некорректный ник или пароль'});
    }


}
