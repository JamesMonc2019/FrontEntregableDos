import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { TarjetesService } from 'src/app/Service/tarjetes.service';
import { parsearErrorsAPI } from 'src/app/Utils/show-errores/utilidades';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-captura-tarjeta',
  templateUrl: './captura-tarjeta.component.html',
  styleUrls: ['./captura-tarjeta.component.css']
})
export class CapturaTarjetaComponent implements OnInit{
  name1:any;
  errores: string[] = [];


  resulatdo!: string;



  constructor(private httpclient: HttpClient, private fb: FormBuilder, private services: TarjetesService){}

  formTarjeta!: FormGroup;
  loading = false;

  myValidatorForm = {
    nombre: ['', {validators:[Validators.required]}],
    plastico: ['', {validators:[Validators.required, Validators.minLength(16), Validators.maxLength(16)]}],
    shatarjeta: '',
    encryptedtarjeta: ''
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.formTarjeta = this.fb.group(this.myValidatorForm);
  }
  saveChanges(){
    this.services.create(this.formTarjeta.value).subscribe(result => {     
      this.resulatdo = " <b>Nombre</b> " + result.nombre + "  <b>Tarjeta</b> " + result.plastico + "  <b>Sha Tarjeta</b>  " + result.shatarjeta + "  <b>Encryptado</b> " + result.encryptedtarjeta;
      Swal.fire({ position: 'center', icon: 'success', title: 'Se agregó el registro  ' + this.resulatdo, showConfirmButton: true });
      this.formTarjeta.reset();
      
    },
      errores => {
        this.errores= parsearErrorsAPI(errores) as any }
    );
  }

  cancel(){
    this.formTarjeta.reset();
  }

  getErrorFieldName(){
    var field = this.formTarjeta.get('nombre');
    if(field?.hasError('required')){
      return 'El campo Nombre description es requerido'
    }
    return '';
  }

  getErrorFieldPlastico(){
    var field = this.formTarjeta.get('plastico');
    if(field?.hasError('required')){
      return 'El campo Plastico es requerido'
    }
    return '';
  }


  numberOnly(event:any): boolean {
    console.log(event.target.value);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      
      return false;
      
    }
    return true;
  }

}
