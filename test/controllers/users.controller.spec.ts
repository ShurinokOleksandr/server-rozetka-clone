import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { SequelizeConfigService } from "../../src/config/sequelizeConfig.service";
import { databaseConfig } from "../../src/config/configuration";
import { UsersModule } from "src/users/users.module";
import { AuthModule } from "../../src/auth/auth.module";
import { PcModule } from "../../src/pc/pc.module";
import { ShoppingCartModule } from "../../src/shopping-cart/shopping-cart.module";
import { User } from "../../src/users/users.model";
import * as bcrypt from "bcrypt";
import * as request from 'supertest'
const mockedUser = {
    username:'Jhon',
    email: 'email',
    password:'123',
}

describe('Users controller', () => {
    let app:INestApplication;

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
                ShoppingCartModule,
            ]
        }).compile()

        app = testModule.createNestApplication();
        await app.init();
    })

    beforeEach(async () =>{
        const user = new User()
        const hashedPassword = await bcrypt.hash(mockedUser.password, 5);

        user.username = mockedUser.username;
        user.password = hashedPassword;
        user.email = mockedUser.email;

        return user.save();

    })

    afterEach( async () =>{
        await User.destroy({where:{username:mockedUser.username}})
        await User.destroy({where:{username:"Test"}})

    })

    it('should create user', async () => {
        const newUser = {
            username:'Test',
            email: 'test',
            password:'123',
        }
        const response = await request(app.getHttpServer())
            .post('/users/signup')
            .send(newUser)

        const passwordIsValid = await bcrypt.compare(newUser.password, response.body.password)

        expect(response.body.username).toBe(newUser.username)
        expect(response.body.email).toBe(newUser.email)
        expect(passwordIsValid).toBe(true)
    })

});

