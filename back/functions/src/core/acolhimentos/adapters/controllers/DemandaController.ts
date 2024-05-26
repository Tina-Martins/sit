
import { PaginatedQueryResponse, QueryOptions } from "../../../../utils/QueryUtils";
import { DemandaService } from "../../domain/services/DemandaService";
import { DemandaRepository } from "../../adapters/repositories/DemandaRepository";
import { Demanda } from "../../domain/entities/Demanda";
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
import { Atendimento } from "../../domain/entities/Atendimento";

@Route("demandas")
export class DemandaController extends Controller {
  private repository = new DemandaRepository();
  private service = new DemandaService(this.repository);

  @Get()
  public async listDemandas(
    @Query() queryOptions?: string
  ): Promise<PaginatedQueryResponse<Demanda>> {
    const decodedQueryOptions = JSON.parse(queryOptions || '{}') as QueryOptions;
    return this.repository.list(decodedQueryOptions);
  }

  @Get("{id}")
  public async getDemandaById(@Path() id: string): Promise<Demanda> {
    return this.service.getById(id);
  }

  @Post()
  public async createDemanda(
    @Body() requestBody: Demanda
  ): Promise<Demanda> {
    this.setStatus(200);
    return this.service.create(requestBody);
  }

  @Patch("{id}")
  public async updateDemanda(
    @Path() id: string,
    @Body() requestBody: Partial<Demanda>
  ): Promise<Demanda> {
    return this.service.update(id, requestBody);
  }

  @Delete("{id}")
  public async deleteDemanda(@Path() id: string): Promise<void> {
    return this.service.delete(id);
  }

  @Post("{demandaId}/atendimentos")
  public async createAtendimento(
    @Path() demandaId: string,
    @Body() requestBody: Atendimento
  ): Promise<Atendimento> {
    return this.service.createAtendimento(demandaId, requestBody);
  }

  @Patch("{demandaId}/atendimentos/{atendimentoId}")
  public async updateAtendimento(
    @Path() demandaId: string,
    @Path() atendimentoId: string,
    @Body() requestBody: Partial<Atendimento>
  ): Promise<Atendimento> {
    return this.service.updateAtendimento(demandaId, atendimentoId, requestBody);
  }

  @Delete("{demandaId}/atendimentos/{atendimentoId}")
  public async deleteAtendimento(
    @Path() demandaId: string,
    @Path() atendimentoId: string
  ): Promise<void> {
    return this.service.deleteAtendimento(demandaId, atendimentoId);
  }
}