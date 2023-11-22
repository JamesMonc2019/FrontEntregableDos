import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapturaTarjetaComponent } from './Tarjeta/captura-tarjeta/captura-tarjeta.component';

const routes: Routes = [
  {path: '', component: CapturaTarjetaComponent},
  {path: 'Inicio', component: CapturaTarjetaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
