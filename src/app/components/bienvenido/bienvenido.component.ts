import { Component } from '@angular/core';
import { MiUsuario } from '../../clases/mi-usuario';
@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.scss'
})
export class BienvenidoComponent {
  usuario: MiUsuario = new MiUsuario();
}
