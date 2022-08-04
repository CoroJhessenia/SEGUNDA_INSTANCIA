import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { SerieEntity } from './entities/serie.entity';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
//import { Public } from 'src/auth/decorators/auth-public.decorator';

@ApiTags('series')
@Controller('series')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Post()
  @ApiCreatedResponse({ type: SerieEntity })
  create(
    @Body() createSerieDto: CreateSerieDto, 
    ): Promise<SerieEntity>{
    return this.serieService.create(createSerieDto);
  }

  @Get()
  @ApiOkResponse({ type: SerieEntity, isArray: true })
  findAll(): Promise<SerieEntity[]> {
    return this.serieService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: SerieEntity })
  findOne(@Param('id') id: string): Promise<SerieEntity>{
    return this.serieService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: SerieEntity })
  update(
    @Param('id') id: string, 
    @Body() updateSerieDto: UpdateSerieDto,
    ): Promise<SerieEntity> {
    return this.serieService.update(+id, updateSerieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.serieService.remove(+id);
  }
}


