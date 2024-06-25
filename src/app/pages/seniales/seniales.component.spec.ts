import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenialesComponent } from './seniales.component';

describe('SenialesComponent', () => {
  let component: SenialesComponent;
  let fixture: ComponentFixture<SenialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
