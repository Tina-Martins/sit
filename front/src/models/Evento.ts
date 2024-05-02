export class Evento {
  private id?: string;
  private titulo: string;
  private descricao?: string;
  private data: Date;
  private horaInicio?:Date;
  private horaFim?: Date;
  private diaTodo: boolean;
  private local?: string;
  private criadoEm: Date;
  private atualizadoEm:Date;
  private regAtivo: boolean;

  constructor(titulo: string, data: Date, diaTodo: boolean, criadoEm: Date, atualizadoEm: Date, regAtivo: boolean) {
    this.titulo = titulo;
    this.data = data;
    this.diaTodo = diaTodo;
    this.criadoEm = criadoEm;
    this.atualizadoEm = atualizadoEm;
    this.regAtivo = regAtivo;
  }
}
