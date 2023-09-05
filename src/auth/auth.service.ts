import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,private jwtService: JwtService) {}

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOne({ where: { username } });


        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const passwordValid = await bcrypt.compare(password, user.password);

        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        if (user && passwordValid) {
            return {
                userId: user.id,
                username,
                email: user.email,
            };
        }
        return  null
    }

}
