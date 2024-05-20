import { Component } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { QueryOptions } from 'src/models/QueryOptions';
import { AcolhimentosService } from 'src/services/acolhimentos.service';
import { ApiService } from 'src/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visao-geral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.scss', '../tabela-base.scss']
})
export class VisaoGeralComponent {
  protected acolhimentos: Array<Acolhimento> | null = null;

  constructor(private acolhimentosService: AcolhimentosService) { }

  async ngOnInit() {
    this.acolhimentosService.getAcolhimentos().then((acolhimentos) => {
      this.acolhimentos = acolhimentos;
      console.info("Sucessfully fetched " + this.acolhimentos.length + " acolhimentos");
    });
  }
}
