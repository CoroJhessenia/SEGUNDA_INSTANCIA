import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'Servicio 257 en  ejecucion!';
  }
}
