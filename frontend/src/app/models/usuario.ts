import { Rol } from "./rol";

export class Usuario {
    _id: string;
    username: string;
    password: string;
    fotoperfil: string;
    perfil: Rol;
    estado: Boolean;
}
    
    