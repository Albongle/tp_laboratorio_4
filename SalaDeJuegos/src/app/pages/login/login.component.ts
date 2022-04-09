import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Usuario } from 'src/app/entidades/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public router:Router;
  public usuario:string;
  public password:string;
  constructor(router:Router) 
  { 
    this.router=router;
    this.usuario="";
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
      Usuario.SetSaludo(`Usuario`);
    }
  }

  LogIn():void{

    const usuario:Usuario = new Usuario(this.usuario, this.password);

    if(Usuario.Loguear(usuario)){
      sessionStorage.setItem("log",JSON.stringify({usuario:this.usuario, status:"ok", date:moment()}));
      Usuario.SetSaludo(`Bienvenido ${this.usuario}`);
      this.router.navigateByUrl("home");
    }else{
      const msj:any = document.querySelector("#msj-error");
      msj.classList.remove("msj-block");
      setTimeout(() => {
       msj.classList.add("msj-block");
        this.router.navigateByUrl("login");
      }, 1000);
    }


  }




}
