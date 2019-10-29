import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleFormulaireComponent } from './exemple-formulaire.component';

describe('ExempleFormulaireComponent', () => {
  let component: ExempleFormulaireComponent;
  let fixture: ComponentFixture<ExempleFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExempleFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExempleFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
