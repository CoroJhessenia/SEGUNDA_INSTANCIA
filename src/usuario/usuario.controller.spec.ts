import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './entities/usuario.entity';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

type MockType<T> = { [P in keyof T]?: jest.Mock<{}> };

const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({}),
);

describe('UsuarioController', () => {
  let controller: UsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [
        UsuarioService,
        { provide: getRepositoryToken(UsuarioEntity), useFactory: repositoryMockFactory },
      ],
    }).compile();

    controller = module.get<UsuarioController>(UsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
