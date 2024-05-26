
import { PaginatedQueryResponse, QueryOptions } from "../../../../utils/QueryUtils";
import { UsuarioService } from "../../domain/services/UsuarioService";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { Usuario } from "../../domain/entities/Usuario";
import {
  Controller,
  Route,
  Get,
  Post,
  Body,
  Path,
  Patch,
  Delete,
  Query,
} from "tsoa";

@Route("usuarios")
export class UsuarioController extends Controller {
  private repository = new UsuarioRepository();
  private service = new UsuarioService(this.repository);

  @Get()
  public async listUsuarios(
    @Query() queryOptions?: string
  ): Promise<PaginatedQueryResponse<Usuario>> {
    const decodedQueryOptions = JSON.parse(queryOptions || '{}') as QueryOptions;
    return this.repository.list(decodedQueryOptions);
  }

  @Get("{id}")
  public async getUsuarioById(@Path() id: string): Promise<Usuario> {
    return this.service.getById(id);
  }

  @Post()
  public async createUsuario(
    @Body() requestBody: Usuario
  ): Promise<Usuario> {
    this.setStatus(200);
    return this.service.create(requestBody);
  }

  @Patch("{id}")
  public async updateUsuario(
    @Path() id: string,
    @Body() requestBody: Partial<Usuario>
  ): Promise<Usuario> {
    return this.service.update(id, requestBody);
  }

  @Delete("{id}")
  public async deleteUsuario(@Path() id: string): Promise<void> {
    return this.service.delete(id);
  }
}
  