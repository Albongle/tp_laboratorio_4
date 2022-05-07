import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/authfirebase.service';
import * as moment from 'moment';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public usuarioLogueado:any;
  public chat: any;
  public tamanioImagen:object;
  public mensaje:string;
  public formatoMensajeEnviado:string;
  public formatoMensajeRecibido:string;
  public mostrarChat:boolean;
  constructor(private firebaseService:FirebaseService) { 
    this.tamanioImagen={'width':"20px"};
    this.chat = [];
    this.mensaje=""
    this.formatoMensajeEnviado = "mensaje bg-success p-2 fs-5 rounded-pill fw-light enviado";
    this.formatoMensajeRecibido= "mensaje bg-secondary p-2 fs-5 rounded-pill fw-light recibido" ;
    this.mostrarChat = false;
  }

  ngOnInit(): void {
    this.firebaseService.obtenerUsuarioLogueado().subscribe(u=> this.usuarioLogueado = u);
  }

  enviarMensaje(){
    
    if(this.mensaje.split(" ").length-1 != this.mensaje.length){
      const mensaje = {id:this.usuarioLogueado.uid,mensaje:this.mensaje,hora:moment().format('LTS')};
      console.log(mensaje);
      this.chat.push(mensaje);
    }
    this.mensaje="";
    setTimeout(() => {
      
      this.scrollUltimoElemento();
    }, 30);
  }

  private scrollUltimoElemento():void{
    const mensajes:any = document.querySelectorAll(".mensaje");
    let posicion = mensajes[mensajes.length-1].offsetTop;
    
    const contenedorMsj = document.querySelector("#contendor-msjs");
    if(contenedorMsj != null){
      contenedorMsj.scrollTop=posicion;
    }
    

  }

  cambiarEstadoChat(){

    this.mostrarChat = this.mostrarChat ? false : true;
   
  }

}
