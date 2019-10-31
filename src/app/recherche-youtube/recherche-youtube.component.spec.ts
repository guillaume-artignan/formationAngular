import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheYoutubeComponent } from './recherche-youtube.component';

describe('RechercheYoutubeComponent', () => {
  let component: RechercheYoutubeComponent;
  let fixture: ComponentFixture<RechercheYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
