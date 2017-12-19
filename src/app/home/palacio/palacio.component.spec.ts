import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalacioComponent } from './palacio.component';

describe('PalacioComponent', () => {
  let component: PalacioComponent;
  let fixture: ComponentFixture<PalacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
