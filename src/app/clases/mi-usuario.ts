export class MiUsuario {
    public usuario: string;
    public password: string;

    constructor(){
        this.password = "";        
        this.usuario = "";
    }

    Validar(){
        if(this.usuario == "Luba" && this.password == "1234")
            return 1;
        
        return -1;
    }

}
