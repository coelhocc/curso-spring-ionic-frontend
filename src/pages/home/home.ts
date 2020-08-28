import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()//Permite acessar a págin em mod String, entre aspas.
@Component({//Controlador
  selector: 'page-home',
  templateUrl: 'home.html' // Qual arquivo ele controla
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
