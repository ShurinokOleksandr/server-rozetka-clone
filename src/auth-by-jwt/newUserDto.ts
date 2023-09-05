import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class NewUserDto {
     @IsNotEmpty()
      username: string | null;

     @IsNotEmpty()
      password: string | null;

     @IsNotEmpty()
      email: string | null;
}
