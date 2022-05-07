import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Usuario } from 'src/app/entidades/usuario';
import { FirebaseService } from 'src/app/service/authfirebase.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public router:Router;
  public email:string;
  public password:string;
  public statusMsjError:boolean;
  public msjError:string;
  

  constructor(router:Router,private firebaseService:FirebaseService) 
  { 
    this.statusMsjError = false;
    this.router=router;
    this.email="";
    this.password= "";
    this.msjError="Acceso Denegado";

  }

  ngOnInit(): void {

    const sesion:any = sessionStorage.getItem("login");
    const obj:any = JSON.parse(sesion);

    if(obj && obj.status == "ok"){
      this.router.navigateByUrl("home");
    }else{
      sessionStorage.clear();
      this.router.navigateByUrl("login");
     
    }
  }

  ingresar():void{

    const usuario:Usuario = new Usuario(this.email, this.password);
    this.firebaseService.login(usuario)
    .then(res=>{
      if(res==null){
        this.msjError="Acceso Denegado";
        this.statusMsjError=true;
        setTimeout(() => {
          this.statusMsjError = false;
          this.router.navigateByUrl("login");
        }, 2000);
      }else{
        console.log(`se ingreso ${res}`);
        sessionStorage.setItem("login",JSON.stringify({usuario:res.user?.email, status:"ok", horaIngreso:moment()}));
        this.router.navigateByUrl("home");
      }

    });
  }

  
  ingresarConGoogle():void{ 

    this.firebaseService.loginConGoogle()
    .then(res=>{
      if(res==null){
        this.statusMsjError=true;
        setTimeout(() => {
          this.msjError="Acceso Denegado";
          this.statusMsjError = false;
          this.router.navigateByUrl("login");
        }, 2000);
      }else{
        console.log(`se ingreso con google ${res}`);
        sessionStorage.setItem("login",JSON.stringify({usuario:res.user?.email, status:"ok", date:moment()}));
        this.router.navigateByUrl("home");
      }

    });

  }



}
