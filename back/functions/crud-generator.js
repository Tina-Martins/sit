import fs from 'fs';
import path from 'path';

const createCrudFiles = (entityName) => {
  const entityNamePlural = entityName + 's';
  const entityNameCapitalized = entityName.charAt(0).toUpperCase() + entityName.slice(1);
  const entityNamePluralCapitalized = entityNameCapitalized + 's';

  const baseDir = path.join(__dirname, 'src', 'core', entityNamePlural);

  const directories = [
    path.join(baseDir, 'adapters', 'controllers'),
    path.join(baseDir, 'adapters', 'repositories'),
    path.join(baseDir, 'domain', 'services'),
    path.join(baseDir, 'ports', 'in'),
    path.join(baseDir, 'ports', 'out')
  ];

  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  const controllerContent = `
import { PaginatedQueryResponse, QueryOptions } from "../../../../utils/QueryUtils";
import { ${entityNameCapitalized}Service } from "../../domain/services/${entityNameCapitalized}Service";
import { ${entityNameCapitalized}Repository } from "../repositories/${entityNameCapitalized}Repository";
import { ${entityNameCapitalized} } from "../../domain/entities/${entityNameCapitalized}";
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

@Route("${entityNamePlural}")
export class ${entityNameCapitalized}Controller extends Controller {
  private repository = new ${entityNameCapitalized}Repository();
  private service = new ${entityNameCapitalized}Service(this.repository);

  @Get()
  public async list${entityNamePluralCapitalized}(
    @Query() queryOptions?: string
  ): Promise<PaginatedQueryResponse<${entityNameCapitalized}>> {
    const decodedQueryOptions = JSON.parse(queryOptions || '{}') as QueryOptions;
    return this.repository.list(decodedQueryOptions);
  }

  @Get("{id}")
  public async get${entityNameCapitalized}ById(@Path() id: string): Promise<${entityNameCapitalized}> {
    return this.service.getById(id);
  }

  @Post()
  public async create${entityNameCapitalized}(
    @Body() requestBody: ${entityNameCapitalized}
  ): Promise<${entityNameCapitalized}> {
    this.setStatus(200);
    return this.service.create(requestBody);
  }

  @Patch("{id}")
  public async update${entityNameCapitalized}(
    @Path() id: string,
    @Body() requestBody: Partial<${entityNameCapitalized}>
  ): Promise<${entityNameCapitalized}> {
    return this.service.update(id, requestBody);
  }

  @Delete("{id}")
  public async delete${entityNameCapitalized}(@Path() id: string): Promise<void> {
    return this.service.delete(id);
  }
}
  `;

  const repositoryContent = `
import { createModelFromDoc } from "../../../../utils/CreateModelFromDoc";
import { ${entityNamePlural}Col } from "../../../../utils/FirestoreCollections";
import { QueryOptions, executeListQuery } from "../../../../utils/QueryUtils";
import { I${entityNameCapitalized}Repository } from "../../ports/out/I${entityNameCapitalized}Repository";
import { ${entityNameCapitalized} } from "../../domain/entities/${entityNameCapitalized}";

export class ${entityNameCapitalized}Repository implements I${entityNameCapitalized}Repository {
  private collection = ${entityNamePlural}Col;

  async list(queryOptions: QueryOptions) {
    try {
      return await executeListQuery(this.collection, queryOptions);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao listar ${entityNamePlural}!");
    }
  }

  async save(${entityName}Data: ${entityNameCapitalized}): Promise<${entityNameCapitalized}> {
    try {
      const docRef = await this.collection.add({
        ...${entityName}Data,
        criadoEm: new Date().toISOString(),
        regAtivo: true,
      });

      if (!docRef.id) {
        throw new Error("Erro ao criar ${entityName}!");
      }

      return {
        ...${entityName}Data,
        id: docRef.id,
      };
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar ${entityName}!");
    }
  }

  async findById(id: string): Promise<${entityNameCapitalized}> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("${entityNameCapitalized} não encontrado!");
      }

      return createModelFromDoc<${entityNameCapitalized}>(doc);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao buscar ${entityName}!");
    }
  }

  async update(id: string, body: Partial<${entityNameCapitalized}>): Promise<${entityNameCapitalized}> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("${entityNameCapitalized} não encontrado!");
      }

      await this.collection.doc(id).update({
        ...body,
        atualizadoEm: new Date().toISOString(),
      });

      const updatedDoc = await this.collection.doc(id).get();
      return createModelFromDoc<${entityNameCapitalized}>(updatedDoc);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao atualizar ${entityName}!");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const doc = await this.collection.doc(id).get();

      if (!doc.exists) {
        throw new Error("${entityNameCapitalized} não encontrado!");
      }

      await this.collection.doc(id).update({
        regAtivo: false,
        excluidoEm: new Date().toISOString(),
      });
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao deletar ${entityName}!");
    }
  }
}
  `;

  const serviceContent = `
import { I${entityNameCapitalized}Service } from "../../ports/in/I${entityNameCapitalized}Service";
import { I${entityNameCapitalized}Repository } from "../../ports/out/I${entityNameCapitalized}Repository";
import { ${entityNameCapitalized} } from "../entities/${entityNameCapitalized}";

export class ${entityNameCapitalized}Service implements I${entityNameCapitalized}Service {
  constructor(private repository: I${entityNameCapitalized}Repository) {}

  public async create(${entityName}: ${entityNameCapitalized}): Promise<${entityNameCapitalized}> {
    return await this.repository.save(${entityName});
  }

  public async getById(id: string): Promise<${entityNameCapitalized}> {
    return await this.repository.findById(id);
  }

  public async update(id: string, body: Partial<${entityNameCapitalized}>): Promise<${entityNameCapitalized}> {
    return await this.repository.update(id, body);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
  `;

  const serviceInterfaceContent = `
import { ${entityNameCapitalized} } from '../../domain/entities/${entityNameCapitalized}';

export interface I${entityNameCapitalized}Service {
  create(${entityName}: ${entityNameCapitalized}): Promise<${entityNameCapitalized}>;

  getById(id: string): Promise<${entityNameCapitalized}>;

  update(id: string, ${entityName}: Partial<${entityNameCapitalized}>): Promise<${entityNameCapitalized}>;
  
  delete(id: string): Promise<void>;
}
  `;

  const repositoryInterfaceContent = `
import { ${entityNameCapitalized} } from "../../domain/entities/${entityNameCapitalized}";
import { PaginatedQueryResponse, QueryOptions } from "../../../../utils/QueryUtils";

export interface I${entityNameCapitalized}Repository {
  list(queryOptions: QueryOptions): Promise<PaginatedQueryResponse<${entityNameCapitalized}>>;

  findById(id: string): Promise<${entityNameCapitalized}>;

  save(${entityName}: ${entityNameCapitalized}): Promise<${entityNameCapitalized}>;

  update(id: string, body: Partial<${entityNameCapitalized}>): Promise<${entityNameCapitalized}>;

  delete(id: string): Promise<void>;
}
  `;

  const files = [
    { path: path.join(baseDir, 'adapters', 'controllers', `${entityNameCapitalized}Controller.ts`), content: controllerContent },
    { path: path.join(baseDir, 'adapters', 'repositories', `${entityNameCapitalized}Repository.ts`), content: repositoryContent },
    { path: path.join(baseDir, 'domain', 'services', `${entityNameCapitalized}Service.ts`), content: serviceContent },
    { path: path.join(baseDir, 'ports', 'in', `I${entityNameCapitalized}Service.ts`), content: serviceInterfaceContent },
    { path: path.join(baseDir, 'ports', 'out', `I${entityNameCapitalized}Repository.ts`), content: repositoryInterfaceContent }
  ];

  files.forEach(file => {
    fs.writeFileSync(file.path, file.content);
  });

  console.log(`CRUD files for ${entityName} created successfully.`);
};

const entityName = process.argv[2];

if (entityName) {
  createCrudFiles(entityName);
} else {
  console.log('Please provide an entity name.');
}
