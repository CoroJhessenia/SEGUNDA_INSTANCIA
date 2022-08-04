import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { SerieEntity } from './entities/serie.entity';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(SerieEntity)
    private repository: Repository<SerieEntity>,
  ) {}

  async create(
    createSerieDto: CreateSerieDto,
    ): Promise<SerieEntity> {
    const newSerie = await this.repository.save({
      titulo: createSerieDto.titulo,
      sinopsis: createSerieDto.sinopsis,
      director: createSerieDto.director,
      duracion: createSerieDto.duracion,
      anio_estreno: createSerieDto.anio_estreno,
    });
    return newSerie;
  }

  async findAll(): Promise<SerieEntity[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<SerieEntity> {
    const existe = await this.repository.findOne({
      where: { id } 
    });
    if (!existe) throw new NotFoundException(`La serie ${id} no existe.`);
    return existe;
  }

  async update(
    id: number, 
    updateSerieDto: UpdateSerieDto,
    ): Promise<SerieEntity> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`La serie ${id} no existe.`);

    const updateSerie = Object.assign(existe, UpdateSerieDto);
    return await this.repository.save(updateSerie);
  }

  async remove(id: number): Promise<void> {
    const existe = await this.repository.findOne({ where: { id } });
    if (!existe) throw new NotFoundException(`La serie ${id} no existe.`);

    await this.repository.delete(id);
  }
}
