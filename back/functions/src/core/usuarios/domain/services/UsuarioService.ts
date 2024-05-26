
import { IUsuarioService } from "../../ports/in/IUsuarioService";
import { IUsuarioRepository } from "../../ports/out/IUsuarioRepository";
import { Usuario } from "../entities/Usuario";

export class UsuarioService implements IUsuarioService {
  constructor(private repository: IUsuarioRepository) {}

  public async create(usuario: Usuario): Promise<Usuario> {
    return await this.repository.save(usuario);
  }

  public async getById(id: string): Promise<Usuario> {
    return await this.repository.findById(id);
  }

  public async update(id: string, body: Partial<Usuario>): Promise<Usuario> {
    return await this.repository.update(id, body);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
  