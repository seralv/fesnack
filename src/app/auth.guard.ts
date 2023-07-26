import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): boolean {
        const token = localStorage.getItem('token');
        if (token) {
            // Si hay un token en el almacenamiento local, el usuario está autenticado
            return true;
        } else {
            // Si no hay token, redireccionar a la página de inicio de sesión
            this.router.navigate(['/login']);
            return false;
        }
    }
}
