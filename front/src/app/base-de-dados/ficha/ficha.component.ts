import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit{
  private acolhimentoId: string | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.acolhimentoId = params['acolhimentoId'];
      console.log("Ficha do acolhimento " + this.acolhimentoId)
    });
  }
}
