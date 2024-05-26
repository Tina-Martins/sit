export interface Atendimento {
  id?: string;
  data: Date | string;
  registro: string;
  criadoEm: Date | string;
  criadoPor?: string;
  atualizadoEm: Date | string;
  atualizadoPor?: string;
  excluidoEm?: Date | string;
  excluidoPor?: string;
  regAtivo: boolean;
}
