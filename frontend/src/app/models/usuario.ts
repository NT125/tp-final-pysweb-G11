export class Usuario {
    _id: string;
    username: string;
    password: string;
    fotoperfil: string;
    perfil: "Rol";
    estado: Boolean;
    
    Usuario(id?:string, username?:string, password?:string, perfil?:"Rol", estado?:Boolean){
     this._id = id;
     this.username = username;
     this.password = password;
     this.perfil = perfil;
     this.estado = estado;
     }
}
    
    