import {Injectable, UnauthorizedException} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User,private jwtService: JwtService) {}

    async findOne(filter: {
        where: { id?: string; username?: string; email?: string };
    }): Promise<User> {
        return this.userModel.findOne({ ...filter });
    }
    async getUser(username:string){
         return await this.userModel.findOne({
            where:{
                username,
            }
        })
    }


}
