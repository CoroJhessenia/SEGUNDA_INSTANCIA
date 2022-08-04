import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';


export class CreateSerieDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre no debe ser vacío' })
  @IsString({ message: 'El campo titulo debe ser una cadena' })
  @MaxLength(250, {
    message: 'El campo nombre debe ser menor a 250 caracteres',
  })
    titulo: string;
    
    @ApiProperty()
    @IsNotEmpty({ message: 'El sinopsis no debe ser vacío' })
    @IsString({ message: 'El campo sinopsis debe ser una cadena' })
    @MaxLength(5000, {
      message: 'El campo nombre debe ser menor a 5000 caracteres',
    })
    sinopsis: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El director no debe ser vacío' })
    @IsString({ message: 'El campo director debe ser una cadena' })
    @MaxLength(100, {
      message: 'El campo nombre debe ser menor a 100 caracteres',
    })
    director: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'La duracion no debe ser vacío' })
    @IsNumber({}, { message: 'El campo duracion debe ser entero' })
    duracion: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El año estreno no debe ser vacío' })
    @IsNumber({ }, { message: 'El campo año estreno debe ser entero' })
    anio_estreno: number;
}
