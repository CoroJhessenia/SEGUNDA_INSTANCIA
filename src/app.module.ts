import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerieModule } from './serie/serie.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
        type: process.env.DB_TYPE as any,
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ['**/entities/*.js'],
        synchronize: false,
    }),
    SerieModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
