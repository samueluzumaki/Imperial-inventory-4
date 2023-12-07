import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMovimientoComponent } from './tipo-movimiento.component';

describe('TipoMovimientoComponent', () => {
  let component: TipoMovimientoComponent;
  let fixture: ComponentFixture<TipoMovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoMovimientoComponent]
    });
    fixture = TestBed.createComponent(TipoMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
