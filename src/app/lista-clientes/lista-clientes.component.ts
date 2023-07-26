import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Cliente } from '../models';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getClientes().subscribe(
      (data: Cliente[]) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Error al obtener la lista de clientes: ', error);
      }
    )
  }
}
