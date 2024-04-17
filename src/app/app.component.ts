import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title: string = "Ejercicio 01 - Clase 01";
  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;

  Calcular(){
    this.edadUno = Number(this.edadUno);
    this.edadDos = Number(this.edadDos);
    this.suma = this.edadDos + this.edadUno;
    this.promedio = this.suma / 2;
  }
  Limpiar(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }

}
