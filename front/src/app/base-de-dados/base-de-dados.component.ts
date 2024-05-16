import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-base-de-dados',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './base-de-dados.component.html',
  styleUrls: ['./base-de-dados.component.scss']
})
export class BaseDeDadosComponent {

  constructor(private apiService: ApiService) { }


  ngOnInit(){
    this.apiService.getAcolhimentos().then((acolhimentos) => {
      console.log(acolhimentos);
    });
  }
}
