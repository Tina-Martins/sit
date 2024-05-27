import { Component } from '@angular/core';
import { Acolhimento } from 'src/models/Acolhimento';
import { QueryOptions } from 'src/models/QueryOptions';
import { AcolhimentosService } from 'src/services/acolhimentos.service';
import { ApiService } from 'src/services/api.service';
import { CommonModule } from '@angular/common';
import { DateService } from 'src/services/date.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visao-geral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.scss', '../tabela-base.scss']
})
export class VisaoGeralComponent {
  protected acolhimentos: Array<Acolhimento> | null = null;

  constructor(private acolhimentosService: AcolhimentosService, protected dateService: DateService, private router: Router) { }

  async ngOnInit() {
    this.acolhimentosService.getAcolhimentos()
      .then((acolhimentos) => {
        console.info("Sucessfully fetched " + acolhimentos.length + " acolhimentos:");
        console.info(acolhimentos);
        this.acolhimentos = acolhimentos;
      })
      .catch((error) => {
        console.error("Error fetching acolhimentos:");
        console.error(error);
        this.router.navigate(['/error']);
      });
    
    
  }
}
