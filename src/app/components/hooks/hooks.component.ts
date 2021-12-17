import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit, OnDestroy, AfterViewInit {

  persons: Persona[] = [];

  private subscription: Subscription | undefined;

  constructor(
    private personsService: PersonService
  ) {
    console.log('HOOKS - CONSTRUCTOR');
  }

  ngOnInit(): void {

    this.subscription = this.personsService.getList().subscribe(
      persons => persons = this.persons = persons
    );
    console.log('HOOKS - ON INIT');
  }

  ngAfterViewInit() {
    // const lastElement: any = document.querySelector('.last-element');
    // lastElement.scrollIntoView();

    // console.log('HOOKS - AFTER VIEW INIT');
  }

  selectedPerson(person: Persona) {
    this.personsService.getById(String(person.id)).subscribe(
      data => console.log(data)
    );
  }

  ngOnDestroy(): void {

    this.subscription?.unsubscribe();

    console.log('HOOKS - ON DESTROY');
  }

}
