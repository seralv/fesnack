export interface Cliente {
    id: number;
    nombre: string;
    direccion: string;
    correo_electronico: string;
    telefono: string;
}

export interface Empleado {
    id: number;
    nombre: string;
    puesto: string;
    correo_electronico: string;
    telefono: string;
}

export interface Plato {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
}

export interface Pedido {
    id: number;
    fecha_hora_pedido: string;
    cliente: Cliente;
    empleado: Empleado;
}
