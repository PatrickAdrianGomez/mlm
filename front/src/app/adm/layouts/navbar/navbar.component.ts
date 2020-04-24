import { Component, OnInit } from '@angular/core';
import { globalConfigurations, globalVars } from 'src/app/services/globalVars';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lista = [];
  urlGlobal = globalVars.filesDomain;
  public perfil: string;
  userName: string;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.lista = globalConfigurations['userCompany'];
      this.userName = localStorage.getItem('userName');
      this.perfil = localStorage.getItem('photo');
    }, 500);

  }

  verificar() {
    console.log(globalConfigurations['userCompany']);

  }

  cerrarSesion() {
    localStorage.clear();
  }
}
