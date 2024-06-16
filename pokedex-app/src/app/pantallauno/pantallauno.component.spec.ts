import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaunoComponent } from './pantallauno.component';

describe('PantallaunoComponent', () => {
  let component: PantallaunoComponent;
  let fixture: ComponentFixture<PantallaunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
