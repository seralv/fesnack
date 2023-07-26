import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    this.apiService.login(this.username, this.password).subscribe(
      (data: any) => {
        // Si la autenticación es exitosa, el servidor de Django debería devolver un token JWT
        localStorage.setItem('token', data.access);
        // Redireccionar a otra página después del inicio de sesión exitoso
        this.router.navigate(['/clientes']); // Cambia '/clientes' por la ruta a la página que deseas mostrar después del inicio de sesión
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        // Puedes agregar aquí una lógica para mostrar un mensaje de error en el formulario
      }
    );
  }
}
