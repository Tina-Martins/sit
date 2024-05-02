export class Atendimento {
  private id?: string;
  private data: Date;
  private registro: string;
  private criadoEm: Date;
  private atualizadoEm: Date;
  private regAtivo: boolean;

  constructor(data: Date, registro: string, criadoEm:Date, atualizadoEm:Date, regAtivo:boolean){
    this.data = data;
    this.registro = registro;
    this.criadoEm = criadoEm;
    this.atualizadoEm = atualizadoEm;
    this.regAtivo = regAtivo;
  }
}

