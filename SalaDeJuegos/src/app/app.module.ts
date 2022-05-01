import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { AhorcadoComponent } from './pages/juegos/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './pages/juegos/preguntados/preguntados.component';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NosotrosComponent,
    JuegosComponent,
    ErrorComponent,
    HomeComponent,
    AhorcadoComponent,
    PreguntadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
