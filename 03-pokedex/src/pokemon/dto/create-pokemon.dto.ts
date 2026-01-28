import { IsInt, IsPositive, IsString, Min } from "class-validator";

export class CreatePokemonDto {

    // isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // isString 
    @IsString()
    name: string;
}
