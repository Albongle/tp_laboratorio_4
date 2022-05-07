import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Usuario } from 'src/app/entidades/usuario';
import { FirebaseService } from 'src/app/service/authfirebase.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  public router:Router;
  public email:string;
  public password:string;
  public statusMsjError:boolean;
  public msjError:string;
  constructor(router:Router,private firebaseService:FirebaseService) {
    this.statusMsjError = false;
    this.router=router;
    this.email="";
    this.password= "";
    this.msjError="Error al registrarse";

   }

  ngOnInit(): void {
  }

  registrarse(){
    const usuario:Usuario = new Usuario(this.email, this.password);
    this.firebaseService.registrar(usuario).then(res=> {
      if(res==null){
        this.statusMsjError=true;
        setTimeout(() => {
          this.statusMsjError = false;
          this.router.navigateByUrl("login");
        }, 2000);

      }else{
        console.log(`usuario registrado ${res}`);
        sessionStorage.setItem("login",JSON.stringify({usuario:res.user?.email, status:"ok", date:moment()}));
        this.router.navigateByUrl("home");
      }
      
    
    });
  }

}
