
import { PaginatedQueryResponse, QueryOptions } from "../../../../utils/QueryUtils";
import { EventoService } from "../../domain/services/EventoService";
import { EventoRepository } from "../repositories/EventoRepository";
import { Evento } from "../../domain/entities/Evento";
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
  Tags,
} from "tsoa";

@Route("eventos")
@Tags("Eventos")
export class EventoController extends Controller {
  private repository = new EventoRepository();
  private service = new EventoService(this.repository);

  @Get()
  public async listEventos(
    @Query() queryOptions?: string
  ): Promise<PaginatedQueryResponse<Evento>> {
    const decodedQueryOptions = JSON.parse(queryOptions || '{}') as QueryOptions;
    return this.repository.list(decodedQueryOptions);
  }

  @Get("{id}")
  public async getEventoById(@Path() id: string): Promise<Evento> {
    return this.service.getById(id);
  }

  @Post()
  public async createEvento(
    @Body() requestBody: Evento
  ): Promise<Evento> {
    this.setStatus(200);
    return this.service.create(requestBody);
  }

  @Patch("{id}")
  public async updateEvento(
    @Path() id: string,
    @Body() requestBody: Partial<Evento>
  ): Promise<Evento> {
    return this.service.update(id, requestBody);
  }

  @Delete("{id}")
  public async deleteEvento(@Path() id: string): Promise<void> {
    return this.service.delete(id);
  }
}
  