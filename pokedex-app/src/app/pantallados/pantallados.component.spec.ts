import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalladosComponent } from './pantallados.component';

describe('PantalladosComponent', () => {
  let component: PantalladosComponent;
  let fixture: ComponentFixture<PantalladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantalladosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantalladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
