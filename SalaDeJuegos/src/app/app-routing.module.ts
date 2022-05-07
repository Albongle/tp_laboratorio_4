import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { AhorcadoComponent } from './pages/juegos/ahorcado/ahorcado.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { PreguntadosComponent } from './pages/juegos/preguntados/preguntados.component';
import { LoginComponent } from './pages/login/login.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';

const routes: Routes = [

  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"registrar", component:RegistrarComponent},
  {path:"home", component:HomeComponent},
  {path:"juegos", component:JuegosComponent, children:[
    {path:"ahorcado", component:AhorcadoComponent},
    {path:"preguntados", component:PreguntadosComponent}
  ]},
  {path:"nosotros", component:NosotrosComponent},
  {path:"**", component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
