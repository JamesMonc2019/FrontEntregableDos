import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapturaTarjetaComponent } from './Tarjeta/captura-tarjeta/captura-tarjeta.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowErroresComponent } from './Utils/show-errores/show-errores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './Shared/shared/shared.module';
import { MaskDirective } from './mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    CapturaTarjetaComponent,
    ShowErroresComponent,
    MaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
