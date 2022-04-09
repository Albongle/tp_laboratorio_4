import * as moment from 'moment';
export class Usuario {
    public usuario:string;
    public password:string;
    private static listaUsuarios:Array<any> = new Array({usuario:"admin",password:"12345"},{usuario:"user",password:"12345"});

    constructor(usuario:string, password:string){
        this.usuario=usuario || "";
        this.password=password || "";
    }
    public static Loguear(usuario:Usuario) : boolean {
        
        if(usuario.usuario!="" && usuario.password!=""){
            const userAux = Usuario.listaUsuarios.find(user=> user.usuario == usuario.usuario && user.password == usuario.password );
           if(userAux){
            console.log({status:"ok", message:`Bienvenido ${usuario.usuario}`});
            return true;    
           }
        }
        console.log({error:401, message:`Accedo denegado`});
        return false;
    }
    public static ValidaSesion(obj:any):boolean{
        const horaActual:moment.Moment= moment();
        const horaSesion:moment.Moment= moment(obj.date);
        const diferencia = horaActual.diff(horaSesion);
        const duracion = moment.duration(diferencia);
        return duracion.minutes() < 5 ? true : false;
    }
    public static SetSaludo(mensaje:string):void{
        const texto:any =document.querySelector("#nav-saludo");
        texto.textContent=mensaje;
    }

}
