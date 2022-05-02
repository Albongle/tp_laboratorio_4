import * as moment from 'moment';

export class Usuario {
    public email:string;
    public password:string;

    constructor(email:string, password:string){
        this.email=email || "";
        this.password=password || "";
        
    }

}
