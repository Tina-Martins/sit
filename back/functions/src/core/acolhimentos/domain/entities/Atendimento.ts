export interface Atendimento {
  id?: string;
  data: Date | string;
  registro: string;
  criadoEm: Date | string;
  atualizadoEm: Date | string;
  regAtivo: boolean;
}
