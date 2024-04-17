import { Component } from '@angular/core';
import { MiUsuario } from '../../clases/mi-usuario';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, CommonModule, BienvenidoComponent, ErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  usuario: MiUsuario = new MiUsuario();
  login: number = 0;

  constructor(private router: Router){

  }


  IniciarSesion(){
    this.login = this.usuario.Validar();
    const res = this.login == 1? "bienvenido" : "asd";
    this.router.navigate([res])
  }

}
