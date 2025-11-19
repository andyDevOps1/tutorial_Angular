import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uso } from './uso';

describe('Uso', () => {
  let component: Uso;
  let fixture: ComponentFixture<Uso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
