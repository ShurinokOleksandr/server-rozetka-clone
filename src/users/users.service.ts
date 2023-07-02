import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User) {}

    async findOne(filter: {
        where: { id?: string; username?: string; email?: string };
    }): Promise<User> {
        return this.userModel.findOne({ ...filter });
    }

    async create(
        createUserDto: CreateUserDto
    ): Promise<User | { warningMessage: string }> {
        const user = new User();

        const existingByUsername = await this.findOne({
            where: { username: createUserDto.username },
        });

        const existingByEmail = await this.findOne({
            where: { email: createUserDto.email },
        });

        if (existingByUsername) {
            return { warningMessage: "Пользователь с таким ником сущесвтует" };
        }

        if (existingByEmail) {
            return { warningMessage: "Пользователь с такой почтой сущесвтует" };
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 5);

        user.username = createUserDto.username;
        user.password = hashedPassword;
        user.email = createUserDto.email;

        return user.save();
    }
}
