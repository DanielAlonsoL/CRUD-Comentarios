import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComentarioComponent } from './ver-comentario.component';

describe('VerComentarioComponent', () => {
  let component: VerComentarioComponent;
  let fixture: ComponentFixture<VerComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
