import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Usuario } from 'src/app/entidades/usuario';
import { AuthFirebaseService } from 'src/app/service/authfirebase.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public router:Router;
  public email:string;
  public password:string;
  public msgError:boolean;

  constructor(router:Router,private firebaseService:AuthFirebaseService) 
  { 
    this.msgError = false;
    this.router=router;
    this.email="";
    this.password= "";

  }

  ngOnInit(): void {

    const sesion:any = sessionStorage.getItem("log");
    const obj:any = JSON.parse(sesion);

    if(obj && obj.status == "ok" && Usuario.ValidaSesion(obj)){
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
        this.msgError=true;
        setTimeout(() => {
          this.msgError = false;
          this.router.navigateByUrl("login");
        }, 1000);
      }else{
        console.log(`se ingreso ${res}`);
        sessionStorage.setItem("log",JSON.stringify({usuario:res.user?.email, status:"ok", date:moment()}));
        this.router.navigateByUrl("home");
      }

    });


    // const listaUsuarios:Array<any>= new Array({usuario:"admin",password:"12345"},{usuario:"user",password:"12345"});

    // const usuario:Usuario = new Usuario(this.email, this.password);

    // if(Usuario.Loguear(usuario, listaUsuarios)){
    //   sessionStorage.setItem("log",JSON.stringify({usuario:this.email, status:"ok", date:moment()}));
    //   Usuario.SetSaludo(`Bienvenido ${this.email}`);
    //   this.router.navigateByUrl("home");
    // }else{
    //   this.msgError=true;
    //   setTimeout(() => {
    //     this.msgError = false;
    //     this.router.navigateByUrl("login");
    //   }, 1000);
    // }
  }

  
  ingresarConGoogle():void{ 

    this.firebaseService.loginConGoogle()
    .then(res=>{
      if(res==null){
        this.msgError=true;
        setTimeout(() => {
          this.msgError = false;
          this.router.navigateByUrl("login");
        }, 1000);
      }else{
        console.log(`se ingreso con google ${res}`);
        sessionStorage.setItem("log",JSON.stringify({usuario:res.user?.email, status:"ok", date:moment()}));
        this.router.navigateByUrl("home");
      }

    });

  }
  registrarse(){
    const usuario:Usuario = new Usuario(this.email, this.password);
    this.firebaseService.registrar(usuario).then(res=> `usuario registrado ${res}`);
  }







}
