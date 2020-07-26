import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { globalConfigurations, globalVars } from 'src/app/services/globalVars';
import { ConnexionService } from 'src/app/services/connexion.service';
import { TypeContext } from 'src/app/models/contextclases';
import { field } from 'src/app/models/schema';
import { GlobalService } from 'src/app/services/global.service';
import { ChangeLiveService } from 'src/app/services/change-live.service';
import { Router } from '@angular/router';

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

  @Output() desdeElHijo = new EventEmitter();

  ListCompany: TypeContext[] = [];
  ListRol: TypeContext[] = [];

  constructor(private connexion: ConnexionService, public globalEquipo: GlobalService, public changeTeam: ChangeLiveService, private _router: Router) {
  }

  ngOnInit() {
    this.connexion.get_data<TypeContext>('typecontext').subscribe(reslo => {
      this.ListCompany = reslo.filter(LOC => LOC.context_id == globalConfigurations.company);
      this.ListRol = reslo.filter(LOC => LOC.context_id == globalConfigurations.rol);
    }, error => {
      console.log('Hubo un problema al cargar datos. ' + error);
    });

    setTimeout(() => {
      let anny = JSON.parse(localStorage.getItem('userCompany'));
      anny.forEach(element => {
        this.ListCompany.forEach(comp => {
          if (element.companyName == comp._id) {
            this.lista.push({ id: element.companyName, valor: comp.name });
            if (localStorage.getItem('actual')) {
              this.updateEmp(localStorage.getItem('actual'), false);
            } else {
              this.updateEmp(element.companyName, false);
            }
          }
        });
      });
      this.userName = localStorage.getItem('userName');
      this.perfil = localStorage.getItem('photo');
    }, 1000);
  }

  updateEmp(id: string, bol: boolean) {
    this.ListCompany.forEach(comp => {
      if (id == comp._id) {
        this.changeTeam.setEquipo(id);
        this.desdeElHijo.emit(id);
        this.globalEquipo.equipo = id;
        this.equipoActual = comp.name;
      }
    });
    if (bol == true) {
      //this._router.navigate(['/invitacion/']);
      window.location.reload();
      console.log('this.desdeElHijo.emit(id)');
    }
  }

  cerrarSesion() {
    localStorage.clear();
  }
}
