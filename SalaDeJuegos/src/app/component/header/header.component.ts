import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from 'src/app/service/authfirebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  radio:string;
  ancho:string;
  estiloImagen:object;
  usuario=this.firebaseService.obtenerUsuarioLogueado();

  constructor(private firebaseService:AuthFirebaseService, private router:Router) {
    this.ancho="32px";
    this.radio="100%";
    this.estiloImagen={'width':this.ancho, 'border-radius':this.radio};
  }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logout();
    sessionStorage.clear();
    this.router.navigateByUrl("login");
  }

}
