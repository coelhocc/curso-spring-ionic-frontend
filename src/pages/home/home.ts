import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()//Permite acessar a págin em mod String, entre aspas.
@Component({//Controlador
  selector: 'page-home',
  templateUrl: 'home.html' // Qual arquivo ele controla
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  }

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login(){
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
        
      },
      error => {});
  }

}
