import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-base-de-dados',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './base-de-dados.component.html',
  styleUrls: ['./base-de-dados.component.scss']
})
export class BaseDeDadosComponent {

}
