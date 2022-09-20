import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() { }

  ngOnInit() {
    
  }

  atualizar(event){
    console.log('Usuario solicitou a atualização');
    
    setTimeout(() => {
      console.log('Lista atualizada com sucesso!');
      event.target.complete();
    },2000);
  }

}