import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Usuario } from '../entidades/usuario';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore:AngularFirestore;
  auth:AngularFireAuth;
  constructor(firestore:AngularFirestore, auth: AngularFireAuth) {
    this.firestore = firestore;
    this.auth = auth;
  }


  async login (usuario:Usuario){
    try{
      return await this.auth.signInWithEmailAndPassword(usuario.email, usuario.password);
    }
    catch(error){
      console.error(`error en login ${error}`);
      return null;
    }
  }
  async registrar (usuario:Usuario){
    try{
      return await this.auth.createUserWithEmailAndPassword(usuario.email, usuario.password);
    }
    catch(error){
      console.error(`error en registrar ${error}`);
      return null;
    }
  }
  async loginConGoogle (){
    try{
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch(error){
      console.error(`error en login con google ${error}`);
      return null;
    }
  }

  obtenerUsuarioLogueado(){
    return this.auth.authState;
  }
  logout(){
    console.log(`usuario deslogueado`);
    this.auth.signOut();
  }
}
