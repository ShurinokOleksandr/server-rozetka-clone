import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example:"username"})
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({example:"password"})
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({example:"email"})
    @IsNotEmpty()
    readonly email: string;
}
