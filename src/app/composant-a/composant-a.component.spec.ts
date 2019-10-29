import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantAComponent } from './composant-a.component';

describe('ComposantAComponent', () => {
  let component: ComposantAComponent;
  let fixture: ComponentFixture<ComposantAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposantAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
