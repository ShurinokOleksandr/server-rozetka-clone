import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { SequelizeConfigService } from "../../src/config/sequelizeConfig.service";
import { databaseConfig } from "../../src/config/configuration";
import { UsersModule } from "../../src/users/users.module";
import { AuthModule } from "../../src/auth/auth.module";
import { PcModule } from "../../src/pc/pc.module";
import { User } from "../../src/users/users.model";
import * as bcrypt from "bcrypt";
import * as request from 'supertest'
import { UsersService } from "src/users/users.service";
import { use } from "passport";

describe('Users controller', () => {
    let app:INestApplication;
    let usersService:UsersService
    beforeEach( async  () =>{
        const testModule: TestingModule = await Test.createTestingModule({
            imports:[
                SequelizeModule.forRootAsync({
                    imports: [ConfigModule],
                    useClass: SequelizeConfigService,
                }),
                ConfigModule.forRoot({ load: [databaseConfig] }),
                UsersModule,
                AuthModule,
                PcModule,
            ]
        }).compile()
        usersService = testModule.get<UsersService>(UsersService)
        app = testModule.createNestApplication();
        await app.init();
    })


    afterEach( async () =>{
        await User.destroy({where:{username:"Test"}})

    })

    it('should create user', async () => {
        const newUser = {
            username:'Test',
            email: 'test',
            password:'123',
        }

        const user = await usersService.create(newUser) as User

        const passwordIsValid = await bcrypt.compare(newUser.password, user.password)

        expect(user.username).toBe(newUser.username)
        expect(user.email).toBe(newUser.email)
        expect(passwordIsValid).toBe(true)
    })

});

