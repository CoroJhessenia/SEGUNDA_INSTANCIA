import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('series')
export class SerieEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo: string;

    @Column()
    sinopsis: string;

    @Column()
    director: string;

    @Column()
    duracion: number;

    @Column()
    anio_estreno: number;
}
