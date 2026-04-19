import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateBookDto {
    @IsString()
    @IsNotEmpty({message: 'O Nome do livro não pode estar vazio.'})
    nome: string | undefined;
    @Min(1, {message: 'A nota minima é um'})
    @Max(5, {message: 'A nota máxima é cinco'})
    @IsNumber()
    nota: number | undefined;
}
