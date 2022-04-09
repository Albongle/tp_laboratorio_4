import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  public router:Router;

  constructor(router:Router){

    this.router = router;

  }

  ngOnInit(): void {
    const sesion:any = sessionStorage.getItem("log");
    const obj:any = JSON.parse(sesion);

    if(obj && obj.status == "ok" && Usuario.ValidaSesion(obj)){
      this.router.navigateByUrl("juegos/ahorcado");
    }else{
      sessionStorage.clear();
      this.router.navigateByUrl("login");
      Usuario.SetSaludo(`Usuario`);
    }
  }

}
