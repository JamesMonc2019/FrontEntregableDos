import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tarjeta } from '../Interfaz/Itarjeta';
import { Observable } from 'rxjs';
import { TarjetaDtoCreate } from '../Interfaz/ITarjetaDtoCreate';

@Injectable({
  providedIn: 'root'
})
export class TarjetesService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'Tarjeta';

  public allTarjetas(): Observable<tarjeta[]>{
    return this.http.get<tarjeta[]>(this.apiURL);
  }

  public create(createDto: TarjetaDtoCreate){
    return this.http.post<tarjeta>(this.apiURL, createDto);
  }
  // public create(createDto: TarjetaDtoCreate){
  //   return this.http.post(this.apiURL, createDto);
  // }


}
