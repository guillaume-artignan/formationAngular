import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleNgContentComponent } from './exemple-ng-content.component';

describe('ExempleNgContentComponent', () => {
  let component: ExempleNgContentComponent;
  let fixture: ComponentFixture<ExempleNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExempleNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExempleNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
