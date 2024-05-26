/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UsuarioController } from './../core/usuarios/adapters/controllers/UsuarioController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EventoController } from './../core/calendario/adapters/controllers/EventoController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DemandaController } from './../core/acolhimentos/adapters/controllers/DemandaController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AcolhimentoController } from './../core/acolhimentos/adapters/controllers/AcolhimentoController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "UsuarioEscopos": {
        "dataType": "refEnum",
        "enums": ["Adm","Coordenação","Jurídico","Psicologia","Assistência Social"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Usuario": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "nome": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "escopo": {"ref":"UsuarioEscopos","required":true},
            "ultimoLogin": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "criadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "criadoPor": {"dataType":"string"},
            "atualizadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "atualizadoPor": {"dataType":"string"},
            "excluidoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "excluidoPor": {"dataType":"string"},
            "regAtivo": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginatedQueryResponse_Usuario_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"Usuario"},"required":true},
            "lastDocRef": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Usuario_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string"},"nome":{"dataType":"string"},"email":{"dataType":"string"},"escopo":{"ref":"UsuarioEscopos"},"ultimoLogin":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"criadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"criadoPor":{"dataType":"string"},"atualizadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"atualizadoPor":{"dataType":"string"},"excluidoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"excluidoPor":{"dataType":"string"},"regAtivo":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Evento": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "titulo": {"dataType":"string","required":true},
            "descricao": {"dataType":"string"},
            "data": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}],"required":true},
            "horaInicio": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "horaFim": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "diaTodo": {"dataType":"boolean","required":true},
            "local": {"dataType":"string","required":true},
            "criadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}],"required":true},
            "atualizadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}],"required":true},
            "regAtivo": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginatedQueryResponse_Evento_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"Evento"},"required":true},
            "lastDocRef": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Evento_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string"},"titulo":{"dataType":"string"},"descricao":{"dataType":"string"},"data":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"horaInicio":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"horaFim":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"diaTodo":{"dataType":"boolean"},"local":{"dataType":"string"},"criadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"atualizadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"regAtivo":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AcolhimentoDemandas": {
        "dataType": "refEnum",
        "enums": ["Psicologia","Jurídico","Assistência Social","Abrigamento"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DemandaStatus": {
        "dataType": "refEnum",
        "enums": ["Em Aberto","Em Andamento","Encerrado","Encaminhado"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Atendimento": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "data": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}],"required":true},
            "registro": {"dataType":"string","required":true},
            "criadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}],"required":true},
            "criadoPor": {"dataType":"string"},
            "atualizadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}],"required":true},
            "atualizadoPor": {"dataType":"string"},
            "excluidoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "excluidoPor": {"dataType":"string"},
            "regAtivo": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Demanda": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "tipo": {"ref":"AcolhimentoDemandas","required":true},
            "status": {"ref":"DemandaStatus","required":true},
            "acolhimentoId": {"dataType":"string","required":true},
            "usuarioId": {"dataType":"string"},
            "usuarioNome": {"dataType":"string"},
            "criadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "atualizadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "criadoPor": {"dataType":"string"},
            "atualizadoPor": {"dataType":"string"},
            "excluidoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "excluidoPor": {"dataType":"string"},
            "regAtivo": {"dataType":"boolean"},
            "atendimentos": {"dataType":"array","array":{"dataType":"refObject","ref":"Atendimento"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginatedQueryResponse_Demanda_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"Demanda"},"required":true},
            "lastDocRef": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Demanda_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string"},"tipo":{"ref":"AcolhimentoDemandas"},"status":{"ref":"DemandaStatus"},"acolhimentoId":{"dataType":"string"},"usuarioId":{"dataType":"string"},"usuarioNome":{"dataType":"string"},"criadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"atualizadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"criadoPor":{"dataType":"string"},"atualizadoPor":{"dataType":"string"},"excluidoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"excluidoPor":{"dataType":"string"},"regAtivo":{"dataType":"boolean"},"atendimentos":{"dataType":"array","array":{"dataType":"refObject","ref":"Atendimento"}}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Atendimento_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string"},"data":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"registro":{"dataType":"string"},"criadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"criadoPor":{"dataType":"string"},"atualizadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"atualizadoPor":{"dataType":"string"},"excluidoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"excluidoPor":{"dataType":"string"},"regAtivo":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AcolhimentoStatus": {
        "dataType": "refEnum",
        "enums": ["Ativo","Encerrado","Encaminhado"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AcolhimentoDocumentoTipo": {
        "dataType": "refEnum",
        "enums": ["RG","CPF","CNH"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AcolhimentoRacaCor": {
        "dataType": "refEnum",
        "enums": ["Preta","Parda","Branca","Indígena","Amarela","Quilombola"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AcolhimentoEscolaridade": {
        "dataType": "refEnum",
        "enums": ["Não possui","Ensino Fundamental","Ensino Médio","Ensino Superior","Pós-graduação","Mestrado","Doutorado"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AcolhimentoOrientacaoSexual": {
        "dataType": "refEnum",
        "enums": ["Heterossexual","Homossexual","Bissexual","Pansexual","Assexual","Outra"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AcolhimentoOrigem": {
        "dataType": "refEnum",
        "enums": ["Demanda Espontânea","Rede de Atendimento"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AcolhimentoServicoReferencia": {
        "dataType": "refEnum",
        "enums": ["Bem Vinda","CRAS","CREAS","Centro de Saúde","Hospital","CAO VD MPMG","CERNA","Casa da Mulher Mineira","DEAM","Guarda Municipal","Polícia Militar"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Acolhimento": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "nome": {"dataType":"string","required":true},
            "demandas": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "status": {"ref":"AcolhimentoStatus","required":true},
            "dataNascimento": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "descricao": {"dataType":"string"},
            "documento": {"dataType":"string"},
            "documentoTipo": {"ref":"AcolhimentoDocumentoTipo"},
            "documentoEmissor": {"dataType":"string"},
            "racaCor": {"ref":"AcolhimentoRacaCor"},
            "escolaridade": {"ref":"AcolhimentoEscolaridade"},
            "orientacaoSexual": {"ref":"AcolhimentoOrientacaoSexual"},
            "qtdfilhos": {"dataType":"double"},
            "email": {"dataType":"string"},
            "telefone": {"dataType":"string"},
            "cidade": {"dataType":"string"},
            "bairro": {"dataType":"string"},
            "origem": {"ref":"AcolhimentoOrigem"},
            "servicoReferencia": {"ref":"AcolhimentoServicoReferencia"},
            "criadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "criadoPor": {"dataType":"string"},
            "atualizadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "atualizadoPor": {"dataType":"string"},
            "excluidoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
            "excluidoPor": {"dataType":"string"},
            "regAtivo": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginatedQueryResponse_Acolhimento_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"Acolhimento"},"required":true},
            "lastDocRef": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Acolhimento_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string"},"nome":{"dataType":"string"},"demandas":{"dataType":"array","array":{"dataType":"string"}},"status":{"ref":"AcolhimentoStatus"},"dataNascimento":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"descricao":{"dataType":"string"},"documento":{"dataType":"string"},"documentoTipo":{"ref":"AcolhimentoDocumentoTipo"},"documentoEmissor":{"dataType":"string"},"racaCor":{"ref":"AcolhimentoRacaCor"},"escolaridade":{"ref":"AcolhimentoEscolaridade"},"orientacaoSexual":{"ref":"AcolhimentoOrientacaoSexual"},"qtdfilhos":{"dataType":"double"},"email":{"dataType":"string"},"telefone":{"dataType":"string"},"cidade":{"dataType":"string"},"bairro":{"dataType":"string"},"origem":{"ref":"AcolhimentoOrigem"},"servicoReferencia":{"ref":"AcolhimentoServicoReferencia"},"criadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"criadoPor":{"dataType":"string"},"atualizadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"atualizadoPor":{"dataType":"string"},"excluidoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"excluidoPor":{"dataType":"string"},"regAtivo":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/usuarios',
            ...(fetchMiddlewares<RequestHandler>(UsuarioController)),
            ...(fetchMiddlewares<RequestHandler>(UsuarioController.prototype.listUsuarios)),

            async function UsuarioController_listUsuarios(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    queryOptions: {"in":"query","name":"queryOptions","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UsuarioController();

              await templateService.apiHandler({
                methodName: 'listUsuarios',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/usuarios/:id',
            ...(fetchMiddlewares<RequestHandler>(UsuarioController)),
            ...(fetchMiddlewares<RequestHandler>(UsuarioController.prototype.getUsuarioById)),

            async function UsuarioController_getUsuarioById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UsuarioController();

              await templateService.apiHandler({
                methodName: 'getUsuarioById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/usuarios',
            ...(fetchMiddlewares<RequestHandler>(UsuarioController)),
            ...(fetchMiddlewares<RequestHandler>(UsuarioController.prototype.createUsuario)),

            async function UsuarioController_createUsuario(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Usuario"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UsuarioController();

              await templateService.apiHandler({
                methodName: 'createUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/usuarios/:id',
            ...(fetchMiddlewares<RequestHandler>(UsuarioController)),
            ...(fetchMiddlewares<RequestHandler>(UsuarioController.prototype.updateUsuario)),

            async function UsuarioController_updateUsuario(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Partial_Usuario_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UsuarioController();

              await templateService.apiHandler({
                methodName: 'updateUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/usuarios/:id',
            ...(fetchMiddlewares<RequestHandler>(UsuarioController)),
            ...(fetchMiddlewares<RequestHandler>(UsuarioController.prototype.deleteUsuario)),

            async function UsuarioController_deleteUsuario(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UsuarioController();

              await templateService.apiHandler({
                methodName: 'deleteUsuario',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/eventos',
            ...(fetchMiddlewares<RequestHandler>(EventoController)),
            ...(fetchMiddlewares<RequestHandler>(EventoController.prototype.listEventos)),

            async function EventoController_listEventos(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    queryOptions: {"in":"query","name":"queryOptions","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new EventoController();

              await templateService.apiHandler({
                methodName: 'listEventos',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/eventos/:id',
            ...(fetchMiddlewares<RequestHandler>(EventoController)),
            ...(fetchMiddlewares<RequestHandler>(EventoController.prototype.getEventoById)),

            async function EventoController_getEventoById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new EventoController();

              await templateService.apiHandler({
                methodName: 'getEventoById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/eventos',
            ...(fetchMiddlewares<RequestHandler>(EventoController)),
            ...(fetchMiddlewares<RequestHandler>(EventoController.prototype.createEvento)),

            async function EventoController_createEvento(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Evento"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new EventoController();

              await templateService.apiHandler({
                methodName: 'createEvento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/eventos/:id',
            ...(fetchMiddlewares<RequestHandler>(EventoController)),
            ...(fetchMiddlewares<RequestHandler>(EventoController.prototype.updateEvento)),

            async function EventoController_updateEvento(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Partial_Evento_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new EventoController();

              await templateService.apiHandler({
                methodName: 'updateEvento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/eventos/:id',
            ...(fetchMiddlewares<RequestHandler>(EventoController)),
            ...(fetchMiddlewares<RequestHandler>(EventoController.prototype.deleteEvento)),

            async function EventoController_deleteEvento(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new EventoController();

              await templateService.apiHandler({
                methodName: 'deleteEvento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/demandas',
            ...(fetchMiddlewares<RequestHandler>(DemandaController)),
            ...(fetchMiddlewares<RequestHandler>(DemandaController.prototype.listDemandas)),

            async function DemandaController_listDemandas(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    queryOptions: {"in":"query","name":"queryOptions","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DemandaController();

              await templateService.apiHandler({
                methodName: 'listDemandas',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/demandas/:id',
            ...(fetchMiddlewares<RequestHandler>(DemandaController)),
            ...(fetchMiddlewares<RequestHandler>(DemandaController.prototype.getDemandaById)),

            async function DemandaController_getDemandaById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DemandaController();

              await templateService.apiHandler({
                methodName: 'getDemandaById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/demandas',
            ...(fetchMiddlewares<RequestHandler>(DemandaController)),
            ...(fetchMiddlewares<RequestHandler>(DemandaController.prototype.createDemanda)),

            async function DemandaController_createDemanda(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Demanda"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DemandaController();

              await templateService.apiHandler({
                methodName: 'createDemanda',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/demandas/:id',
            ...(fetchMiddlewares<RequestHandler>(DemandaController)),
            ...(fetchMiddlewares<RequestHandler>(DemandaController.prototype.updateDemanda)),

            async function DemandaController_updateDemanda(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Partial_Demanda_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DemandaController();

              await templateService.apiHandler({
                methodName: 'updateDemanda',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/demandas/:id',
            ...(fetchMiddlewares<RequestHandler>(DemandaController)),
            ...(fetchMiddlewares<RequestHandler>(DemandaController.prototype.deleteDemanda)),

            async function DemandaController_deleteDemanda(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DemandaController();

              await templateService.apiHandler({
                methodName: 'deleteDemanda',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/demandas/:demandaId/atendimentos',
            ...(fetchMiddlewares<RequestHandler>(DemandaController)),
            ...(fetchMiddlewares<RequestHandler>(DemandaController.prototype.createAtendimento)),

            async function DemandaController_createAtendimento(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    demandaId: {"in":"path","name":"demandaId","required":true,"dataType":"string"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Atendimento"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DemandaController();

              await templateService.apiHandler({
                methodName: 'createAtendimento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/demandas/:demandaId/atendimentos/:atendimentoId',
            ...(fetchMiddlewares<RequestHandler>(DemandaController)),
            ...(fetchMiddlewares<RequestHandler>(DemandaController.prototype.updateAtendimento)),

            async function DemandaController_updateAtendimento(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    demandaId: {"in":"path","name":"demandaId","required":true,"dataType":"string"},
                    atendimentoId: {"in":"path","name":"atendimentoId","required":true,"dataType":"string"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Partial_Atendimento_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DemandaController();

              await templateService.apiHandler({
                methodName: 'updateAtendimento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/demandas/:demandaId/atendimentos/:atendimentoId',
            ...(fetchMiddlewares<RequestHandler>(DemandaController)),
            ...(fetchMiddlewares<RequestHandler>(DemandaController.prototype.deleteAtendimento)),

            async function DemandaController_deleteAtendimento(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    demandaId: {"in":"path","name":"demandaId","required":true,"dataType":"string"},
                    atendimentoId: {"in":"path","name":"atendimentoId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DemandaController();

              await templateService.apiHandler({
                methodName: 'deleteAtendimento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/acolhimentos',
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController)),
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController.prototype.listAcolhimentos)),

            async function AcolhimentoController_listAcolhimentos(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    queryOptions: {"in":"query","name":"queryOptions","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AcolhimentoController();

              await templateService.apiHandler({
                methodName: 'listAcolhimentos',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/acolhimentos/:id',
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController)),
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController.prototype.getAcolhimentoById)),

            async function AcolhimentoController_getAcolhimentoById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AcolhimentoController();

              await templateService.apiHandler({
                methodName: 'getAcolhimentoById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/acolhimentos',
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController)),
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController.prototype.createAcolhimento)),

            async function AcolhimentoController_createAcolhimento(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Acolhimento"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AcolhimentoController();

              await templateService.apiHandler({
                methodName: 'createAcolhimento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/acolhimentos/:id',
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController)),
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController.prototype.updateAcolhimento)),

            async function AcolhimentoController_updateAcolhimento(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Partial_Acolhimento_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AcolhimentoController();

              await templateService.apiHandler({
                methodName: 'updateAcolhimento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/acolhimentos/:id',
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController)),
            ...(fetchMiddlewares<RequestHandler>(AcolhimentoController.prototype.deleteAcolhimento)),

            async function AcolhimentoController_deleteAcolhimento(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AcolhimentoController();

              await templateService.apiHandler({
                methodName: 'deleteAcolhimento',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
