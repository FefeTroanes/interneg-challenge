import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvPageComponent } from './pdv-page.component';

describe('PdvPageComponent', () => {
  let component: PdvPageComponent;
  let fixture: ComponentFixture<PdvPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdvPageComponent]
    });
    fixture = TestBed.createComponent(PdvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
