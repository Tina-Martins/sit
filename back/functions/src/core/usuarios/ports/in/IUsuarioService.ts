
import { Usuario } from '../../domain/entities/Usuario';

export interface IUsuarioService {
  create(usuario: Usuario): Promise<Usuario>;

  getById(id: string): Promise<Usuario>;

  update(id: string, usuario: Partial<Usuario>): Promise<Usuario>;
  
  delete(id: string): Promise<void>;
}
  