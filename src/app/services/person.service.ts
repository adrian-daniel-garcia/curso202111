import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { AppModule } from '../app.module';
import { Persona } from '../models/persona.model';
import { personasMock } from './persona.mock';

@Injectable(
  {
    providedIn: 'root'
    //providedIn: AppModule
  }
)
export class PersonService {

  constructor() { }

  getList(): Observable<Persona[]> {
    return of(personasMock);
  }
}
