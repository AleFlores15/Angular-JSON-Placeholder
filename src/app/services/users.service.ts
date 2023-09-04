import { Injectable, TypeDecorator, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //En este constructor se inyecta el servicio HttpClient para poder hacer peticiones HTTP
  // Es por la iyencion de dependencias, se pone en el constructor para pruebas
  // no se define como variable porque no se va a usar fuera del constructor
  constructor(private http: HttpClient) {}
    //
    httpClient: HttpClient = inject(HttpClient);
   
   // nunca poner any
   //Un observable es un objeto que emite eventos que pueden ser escuchados por un observador
   //El observador es asincrono, no sabe cuando va a recibir la respuesta 
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
    }
  
  
}
