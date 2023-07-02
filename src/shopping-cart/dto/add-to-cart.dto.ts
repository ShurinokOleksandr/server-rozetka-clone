import { IsNotEmpty } from "class-validator";

export class AddToCartDto {
    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly userId?: number;

    @IsNotEmpty()
    readonly partId: number;
}
