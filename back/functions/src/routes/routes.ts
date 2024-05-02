/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AcolhimentoController } from './../core/acolhimentos/adapters/controllers/AcolhimentoController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
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
            "atualizadoEm": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"string"}]},
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
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string"},"nome":{"dataType":"string"},"demandas":{"dataType":"array","array":{"dataType":"string"}},"status":{"ref":"AcolhimentoStatus"},"dataNascimento":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"documento":{"dataType":"string"},"documentoTipo":{"ref":"AcolhimentoDocumentoTipo"},"documentoEmissor":{"dataType":"string"},"racaCor":{"ref":"AcolhimentoRacaCor"},"escolaridade":{"ref":"AcolhimentoEscolaridade"},"orientacaoSexual":{"ref":"AcolhimentoOrientacaoSexual"},"qtdfilhos":{"dataType":"double"},"email":{"dataType":"string"},"telefone":{"dataType":"string"},"cidade":{"dataType":"string"},"bairro":{"dataType":"string"},"origem":{"ref":"AcolhimentoOrigem"},"servicoReferencia":{"ref":"AcolhimentoServicoReferencia"},"criadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"atualizadoEm":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"datetime"}]},"regAtivo":{"dataType":"boolean"}},"validators":{}},
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
