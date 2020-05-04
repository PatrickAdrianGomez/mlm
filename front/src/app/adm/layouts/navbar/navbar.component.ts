import { Component, OnInit } from '@angular/core';
import { globalConfigurations, globalVars } from 'src/app/services/globalVars';
import { ConnexionService } from 'src/app/services/connexion.service';
import { TypeContext } from 'src/app/models/contextclases';
import { field } from 'src/app/models/schema';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lista: field[] = [];
  urlGlobal = globalVars.filesDomain;
  public perfil: string;
  userName: string;
  equipoActual: string = '';

  ListCompany: TypeContext[] = [];
  ListRol: TypeContext[] = [];

  constructor(private connexion: ConnexionService) {
  }

  ngOnInit() {
    this.connexion.get_data<TypeContext>('typecontext').subscribe(reslo => {
      this.ListCompany = reslo.filter(LOC => LOC.context_id == '5e82fff755df33706d23801d');
      this.ListRol = reslo.filter(LOC => LOC.context_id == '5e82fffe55df33706d23801e');
    }, error => {
      console.log('Hubo un problema al cargar datos. ' + error);
    });

    setTimeout(() => {
      let anny = JSON.parse(localStorage.getItem('userCompany'));
      anny.forEach(element => {
        this.ListCompany.forEach(comp => {
          if (element.companyName == comp._id) {
            this.lista.push({ id: element.companyName, valor: comp.name });
            this.updateEmp(element.companyName);
          }
        });
      });
      console.log(this.lista);
      this.userName = localStorage.getItem('userName');
      this.perfil = localStorage.getItem('photo');
    }, 1000);

  }

  updateEmp(id: string) {
    this.ListCompany.forEach(comp => {
      if (id == comp._id) {
        localStorage.setItem('actual', id);
        this.equipoActual = comp.name;
      }
    });
  }

  cerrarSesion() {
    localStorage.clear();
  }
}
