import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/authfirebase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public usuarioLogueado:any;
  public chat: any;
  public tamanioImagen:object;
  public mensaje:string
  constructor(private firebaseService:FirebaseService) { 
    this.tamanioImagen={'width':"20px"};
    this.chat = [{id:"",mensaje:"", hora:Date.now}];
    this.mensaje=""
  }

  ngOnInit(): void {
    this.firebaseService.obtenerUsuarioLogueado().subscribe(u=> this.usuarioLogueado = u);
  }

  enviarMensaje(){
    console.log(this.mensaje);
    this.mensaje="";
  }

}
