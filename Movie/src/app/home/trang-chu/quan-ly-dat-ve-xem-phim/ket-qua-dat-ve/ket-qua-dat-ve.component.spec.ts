import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaDatVeComponent } from './ket-qua-dat-ve.component';

describe('KetQuaDatVeComponent', () => {
  let component: KetQuaDatVeComponent;
  let fixture: ComponentFixture<KetQuaDatVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaDatVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaDatVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
