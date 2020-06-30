import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { ConnexionService } from 'src/app/services/connexion.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { globalConfigurations } from 'src/app/services/globalVars';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  public user: user;
  public typeInput: string = 'password';
  public passwd1: string = '';
  public passwd2: string = '';

  constructor(private connexion: ConnexionService, private _router: Router, private _location: Location) {
    this.user = new user();
  }

  ngOnInit() {
  }

  onSignIn() {
    if (this.passwd1 === this.passwd2) {
      try {
        this.connexion.get_dataWithParams<string>('recover', '?ci=' + this.user.ci + '&password=' + this.user.password + '&newpass=' + this.passwd2).subscribe(
          (userJWT) => {
            console.log('userJWT', userJWT);
            if (!isNullOrUndefined(userJWT)) {
              localStorage.clear();
              
              this._router.navigate(['/sign/login']);
            } else {
              localStorage.clear();
            }
          },
          (error) => {
            let errorMessage = <any>error;
            if (errorMessage.error.message === 'User does not exist') {
              alert('Usuario aún no registrado. \n Por favor intente nuevamente');
              this.user.email = null;
              this.user.password = null;
            }
            if (errorMessage.error.message === 'Password did not match') {
              alert('Contraseña incorrecta. \n Por favor intente nuevamente');
              this.user.email = null;
              this.user.password = null;
            }
          }
        );
      } catch (error) {
        alert('El nombre de usuario o la contraseña son incorrectos. \n Por favor intente nuevamente');
        this.user.email = null;
        this.user.password = null;
      }
    } else {
      alert('Las nuevas contraseñas deben de coincidir');
    }
  }

  typeChange() {
    if (this.typeInput == 'password') {
      this.typeInput = 'text';
    } else {
      this.typeInput = 'password'
    }
  }

  vaTras() {
    this._location.back();
  }
}
