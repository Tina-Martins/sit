export class Usuario {
  private id?: string;
  private nome: string;
  private email: string;
  private escopos: string[];
  private criadoEm: Date;
  private atualizadoEm: Date;
  private regAtivo: boolean;

  constructor(nome: string, email: string, escopos: string[], criadoEm: Date, atualizadoEm: Date, regAtivo: boolean) {
    this.nome = nome;
    this.email = email;
    this.escopos = escopos;
    this.criadoEm = criadoEm;
    this.atualizadoEm = atualizadoEm;
    this.regAtivo = regAtivo;
  }
}
