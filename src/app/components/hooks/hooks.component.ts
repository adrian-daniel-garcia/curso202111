import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit {

  persons: Persona[] = [];

  constructor(
    private personssService: PersonService
  ) { }

  ngOnInit(): void {
    this.personssService.getList().subscribe(
      persons => persons = this.persons = persons
    );
  }

}
