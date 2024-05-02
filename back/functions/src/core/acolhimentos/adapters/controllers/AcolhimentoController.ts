import { PaginatedQueryResponse, QueryOptions } from "../../../../utils/QueryUtils";
import { AcolhimentoService } from "../../domain/services/AcolhimentoService";
import { AcolhimentoRepository } from "../repositories/AcolhimentoRepository";
import { Acolhimento } from "../../domain/entities/Acolhimento";
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

@Route("acolhimentos")
export class AcolhimentoController extends Controller {
  private repository = new AcolhimentoRepository();
  private service = new AcolhimentoService(this.repository);

  @Get()
  public async listAcolhimentos(
    @Query() queryOptions?: string
  ): Promise<PaginatedQueryResponse<Acolhimento>> {

    const decodedQueryOptions = JSON.parse(queryOptions || '{}') as QueryOptions;
    return this.service.list(decodedQueryOptions);
  }

  @Get("{id}")
  public async getAcolhimentoById(@Path() id: string): Promise<Acolhimento> {
    return this.service.getById(id);
  }

  @Post()
  public async createAcolhimento(
    @Body() requestBody: Acolhimento
  ): Promise<Acolhimento> {
    this.setStatus(200);
    return this.service.create(requestBody);
  }

  @Patch("{id}")
  public async updateAcolhimento(
    @Path() id: string,
    @Body() requestBody: Partial<Acolhimento>
  ): Promise<Acolhimento> {
    return this.service.update(id, requestBody);
  }

  @Delete("{id}")
  public async deleteAcolhimento(@Path() id: string): Promise<void> {
    return this.service.delete(id);
  }
}
