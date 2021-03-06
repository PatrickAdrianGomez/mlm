import { Component, OnInit, Input } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { invitation } from "src/app/models/invitation";
import { job, address, field, Location, contact, profile } from 'src/app/models/schema';
import { ToastService } from 'src/app/services/toast.service';
import { person } from 'src/app/models/person';
import { isNullOrUndefined } from 'util';
import { TypeContext } from 'src/app/models/contextclases';
import { GlobalService } from 'src/app/services/global.service';
import { ChangeLiveService } from 'src/app/services/change-live.service';
import { globalConfigurations } from 'src/app/services/globalVars';

declare var $: any;

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  invitation: invitation;
  public job: job;
  public contact: contact;
  public profile: profile;
  public address: address;
  public field: field;
  public esVisible: string = 'invisible';
  public procesando: string = 'noProcesa';
  public usuarioValido: boolean = true;
  correct: boolean = false;

  ListCompany: TypeContext[] = [];
  ListRol: TypeContext[] = [];

  ListLOC: Location[] = [];
  ListLOCMain: Location[] = [];
  listDepa: Location[] = [];
  depasCI: Location[] = [];
  listCiudad: Location[] = [];
  listZona: Location[] = [];

  isSaved: boolean = false;
  equipoActual: string = '';


  constructor(private connexion: ConnexionService, private _router: Router, private route: ActivatedRoute, public toastService: ToastService, public globalEquipo: GlobalService, public inLive: ChangeLiveService) {
    this.invitation = new invitation();
    this.job = new job();
    this.contact = new contact();
    this.profile = new profile();
    this.address = new address();
    //this.field = new field();
    this.invitation.job = this.job;
    this.isSaved = false;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (localStorage.getItem('code').substring(0, 1) == '0') {
      alert('Su cuenta no está activada.\nPor favor active su cuenta antes de invitar a una persona.');
      this._router.navigate(['/profile']);
    }

    this.connexion.get_data<Location>('location').subscribe(reslo => {
      this.ListLOC = reslo;
      this.ListLOCMain = reslo.filter(LOC => LOC.typecon_id == globalConfigurations.pais);
      this.depasCI = this.ListLOC.filter(LOC => LOC.owner == globalConfigurations.ciudad);
    }, error => {
      console.log('Hubo un problema al cargar datos. ' + error);
    });

    this.connexion.get_data<TypeContext>('typecontext').subscribe(reslo => {
      this.ListCompany = reslo.filter(LOC => LOC.context_id == globalConfigurations.company);
      this.ListRol = reslo.filter(LOC => LOC.context_id == globalConfigurations.rol);
    }, error => {
      console.log('Hubo un problema al cargar datos. ' + error);
    });

    this.invitation.contact = this.contact;
    this.invitation.profile = this.profile;
    this.contact.address = this.address;
    this.address.country = '';
    this.address.city = new field();
    this.address.state = new field();
    this.address.zone = new field();
    //this.invitation.job.push(this.job);
    if (this.route.snapshot.params['_id']) {
      setTimeout(() => {
        this.connexion.get_dataId<invitation>('invitationQuick', this.route.snapshot.params['_id']).subscribe(resp => {
          this.invitation = resp;
          this.editAddress(resp.contact.address);
          this.editCompany(resp.job);
        });
      }, 500);
    }
    setTimeout(() => {
      this.updateEmp(localStorage.getItem('actual'));
    }, 1000);
  }

  editAddress(direccion: address) {
    this.listDepa = this.ListLOC.filter(LOC => LOC.owner == direccion.country);
    this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == direccion.state.id);
    this.listZona = this.ListLOC.filter(LOC => LOC.owner == direccion.city.id);
  }

  editCompany(trabajo: job) {
    this.ListCompany = this.ListCompany.filter(LOC => LOC._id == trabajo.companyName);
    this.ListRol = this.ListRol.filter(LOC => LOC._id == trabajo.typeAccount);
  }

  verificarUsuario() {
    this.esVisible = 'visible';
    this.procesando = 'procesa';
    if (this.invitation.profile.ci) {
      this.connexion.get_dataWithParamsOne<person>('personInvitation', '?ci=' + this.invitation.profile.ci + '&equipo=' + localStorage.getItem('actual')).subscribe(myUser => {
        if (myUser['id'] == 0) {
          this.usuarioValido = false;
          this.error(myUser['message'], 'Invitación a MLM')
        } else {
          this.usuarioValido = true;
          this.success(myUser['message'], 'Invitación a MLM')
        }
        this.procesando = 'noProcesa';
        this.esVisible = 'invisible';
      });
    } else {
      this.error('CI vacío', 'MLM Invitación');
    }

  }

  error(message: string, title: string) {
    this.toastService.error(message, title);
  }

  success(message: string, title: string) {
    this.toastService.success(message, title);
  }

  onRegister() {
    /*if (this.invitado) {
      for (let i = 0; i < this.invitado.associated.length; i++) {
        const element = this.invitado.associated[i];
        if ((element.companyName == this.job.companyName) && (element.typeAccount == this.job.typeAccount)) {
          this.error('Esta persona ya cuenta con una invitación.', 'MLM Invitación');
          return 0;
        }
      }
    }*/
    this.job.companyName = localStorage.getItem('actual');
    this.esVisible = 'visible';
    this.procesando = 'procesa';
    this.isSaved = true;
    this.agregarDireccion();
    this.invitation.estado = 1;
    this.invitation.job = { ciMain: localStorage.getItem('code').substr(1), companyName: this.job.companyName, typeAccount: this.job.typeAccount };
    let fechaHora = new Date();
    this.invitation.date = fechaHora;
    let pass = this.generarCodigo();
    this.invitation.codeInvitation = pass;
    this.invitation.password = pass;
    this.invitation.profile.photo = '/assets/img/noPicture.png';
    console.log('invitation', this.invitation);
    this.connexion.addObject<invitation>('invitation', this.invitation).subscribe(
      regis => {
        this.procesando = 'noProcesa';
        this.esVisible = 'invisible';
        this.correct = true;
        alert('La invitación fue realizada de manera correcta');
        this._router.navigate(['/']);
      },
      error => {
        this.isSaved = false;
        var errorMessage = <any>error;
        this.correct = false;
        switch (errorMessage.status) {
          case 400:
            this.usuarioValido = false;
            alert('El usuario ya fue invitado. \n Por favor intente nuevamente.');
            break;

          default:
            this.usuarioValido = true;
            alert('Ocurrió un error al intentar invitar el usuario. \n Por favor verifique los datos e intente nuevamente.');
            break;
        }
      }
    );
  }

  generarCodigo() {
    return 'ABC123';
  }

  agregarDireccion() {
    let local, paisMini, depaMini, cityMini, zonaMini;
    let objDepartamento: field;
    let objCiudad: field;
    let objZona: field;

    try {
      local = $('#local')[0].value;
      if (!isNullOrUndefined(local)) {
        let separador = local.split(": ", 2);
        paisMini = separador[1];
        depaMini = $('#depaMini')[0].value;
      }
      if (!isNullOrUndefined(depaMini)) {
        let separador = depaMini.split(": ", 2);
        objDepartamento = {
          id: separador[1],
          valor: $('#depaMini')[0].options[separador[0]].text
        }
      }
      cityMini = $('#cityMini')[0].value;
      if (!isNullOrUndefined(cityMini)) {
        let separador = cityMini.split(": ", 2);
        objCiudad = {
          id: separador[1],
          valor: $('#cityMini')[0].options[separador[0]].text
        }
      };

      zonaMini = $('#zonaMini')[0].value;
      if (!isNullOrUndefined(zonaMini)) {
        let separador = zonaMini.split(": ", 2);
        objZona = {
          id: separador[1],
          valor: $('#zonaMini')[0].options[separador[0]].text
        }
      }
      let objAddress: address = {
        country: paisMini,
        state: objDepartamento,
        city: objCiudad,
        zone: objZona,
        geoData: this.invitation.contact.address.geoData,
        especificLocation: this.invitation.contact.address.especificLocation
      };
      this.invitation.contact.address = objAddress;
    } catch (error) {
      console.log('Error', error);
    }
  }

  updateSelectedValue(index) {
    this.listDepa = this.ListLOC.filter(LOC => LOC.owner == index);
  }

  updateSelectDepartamento(index) {
    this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == index);
  }

  updateSelectCiudad(index) {
    this.listZona = this.ListLOC.filter(LOC => LOC.owner == index);
  }

  updateSelectEquipo(index) {
    //this.ListCompany = this.ListCompany.filter(LOC => LOC._id == index);
  }

  updateSelectRol(index) {
    //this.ListRol = this.ListRol.filter(LOC => LOC._id == index);
  }

  updateEmp(id: string) {
    this.ListCompany.forEach(comp => {
      if (id == comp._id) {
        localStorage.setItem('actual', id);
        this.equipoActual = comp.name;
      }
    });
  }

  recibeDeHijo(algo) {
    console.log('ALGO PASO AQUI', algo)
  }
}
