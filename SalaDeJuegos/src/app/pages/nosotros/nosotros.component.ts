import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  public router:Router;

  constructor(router:Router){

    this.router = router;

  }

  ngOnInit(): void {
    const sesion:any = sessionStorage.getItem("login");
    const obj:any = JSON.parse(sesion);

    if(obj && obj.status == "ok"){
      this.router.navigateByUrl("nosotros");
    }else{
      sessionStorage.clear();
      this.router.navigateByUrl("login");
     
    }
  }

}
