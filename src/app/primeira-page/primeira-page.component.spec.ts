import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraPageComponent } from './primeira-page.component';

describe('PrimeiraPageComponent', () => {
  let component: PrimeiraPageComponent;
  let fixture: ComponentFixture<PrimeiraPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeiraPageComponent]
    });
    fixture = TestBed.createComponent(PrimeiraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
