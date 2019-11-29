import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: "Machine à laver",
      status: 'eteins'
    },
    {
      name: "Television",
      status: 'allumé'
    },
    {
      name: "Ordinateur",
      status: 'eteins'
    }
  ];
  
  constructor(){
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }

  onAllumer(){
    console.log("On allume tout");
  }
}
