import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplojsonComponent } from './ejemplojson.component';

describe('EjemplojsonComponent', () => {
  let component: EjemplojsonComponent;
  let fixture: ComponentFixture<EjemplojsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemplojsonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemplojsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
