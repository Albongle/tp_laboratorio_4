import * as moment from 'moment';

export class Usuario {
    public email:string;
    public password:string;

    constructor(email:string, password:string){
        this.email=email || "";
        this.password=password || "";
        
    }

    public static ValidaSesion(obj:any):boolean{
        const horaActual:moment.Moment= moment();
        const horaSesion:moment.Moment= moment(obj.date);
        const diferencia = horaActual.diff(horaSesion);
        const duracion = moment.duration(diferencia);
        return duracion.minutes() < 5 ? true : false;
    }


}
