import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';


@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  public router:Router;

  constructor(router:Router){

    this.router = router;

  }

  ngOnInit(): void {
    const sesion:any = sessionStorage.getItem("log");
    const obj:any = JSON.parse(sesion);

    if(obj && obj.status == "ok" && Usuario.ValidaSesion(obj)){
      this.router.navigateByUrl("juegos/preguntados");
    }else{
      sessionStorage.clear();
      this.router.navigateByUrl("login");
      Usuario.SetSaludo(`Usuario`);
    }
  }

}
