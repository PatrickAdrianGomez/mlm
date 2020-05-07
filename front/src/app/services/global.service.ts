import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public domain: string;
  public equipo: string;

  constructor() {
    this.domain = "http://localhost:3000";
    this.equipo = null;
  }
}
