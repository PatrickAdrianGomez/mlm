import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeLiveService {
  @Output() mySomeThing: EventEmitter<any> = new EventEmitter();

  constructor() { }

  initChangeLive

  setEquipo(equipoActual: string) {
    localStorage.setItem('actual', equipoActual);
  }

}
