import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Empleado, Plato, Pedido } from './models'; // Importa las interfaces para los modelos

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/'; // URL de API Django

  constructor(private http: HttpClient) { }

  // Método para iniciar sesión con las credenciales del empleado
  login(username: string, password: string): Observable<any> {
    const body = { username: username, password: password };
    return this.http.post<any>(`${this.apiUrl}/login/`, body);
  }

  // Obtener la lista de clientes desde la API
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl + 'clientes/');
  }

  // Agrega más funciones para interactuar con las otras rutas de la API (empleados, platos, pedidos, etc.)
}
