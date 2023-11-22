import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-errores',
  templateUrl: './show-errores.component.html',
  styleUrls: ['./show-errores.component.css']
})
export class ShowErroresComponent {
  @Input() errores: string[] = [];
  @Input() tipoMensajes: boolean = true;
}
