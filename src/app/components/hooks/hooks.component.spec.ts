import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonService } from 'src/app/services/person.service';
import { PersonMockService } from 'src/app/services/person.service.mock';

import { HooksComponent } from './hooks.component';

fdescribe('HooksComponent', () => {
  let component: HooksComponent;
  let fixture: ComponentFixture<HooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HooksComponent ],
      providers: [{
        provide: PersonService,
        useValue: PersonMockService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
