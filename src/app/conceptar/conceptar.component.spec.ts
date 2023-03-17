import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptarComponent } from './conceptar.component';

describe('ConceptarComponent', () => {
  let component: ConceptarComponent;
  let fixture: ComponentFixture<ConceptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
