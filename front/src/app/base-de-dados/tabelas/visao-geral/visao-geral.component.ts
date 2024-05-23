import { Component } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { QueryOptions } from 'src/models/QueryOptions';
import { AcolhimentosService } from 'src/services/acolhimentos.service';
import { ApiService } from 'src/services/api.service';
import { CommonModule } from '@angular/common';
import { DateService } from 'src/services/date.service';

@Component({
  selector: 'app-visao-geral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.scss', '../tabela-base.scss']
})
export class VisaoGeralComponent {
  protected acolhimentos: Array<Acolhimento> | null = null;

  constructor(private acolhimentosService: AcolhimentosService, protected dateService: DateService) { }

  async ngOnInit() {
    this.acolhimentos = await this.acolhimentosService.getAcolhimentos();
    console.info("Sucessfully fetched " + this.acolhimentos.length + " acolhimentos:");
    console.info(this.acolhimentos);
  }
}
