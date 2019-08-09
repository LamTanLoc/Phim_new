import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDatVeXemPhimComponent } from './quan-ly-dat-ve-xem-phim.component';

describe('QuanLyDatVeXemPhimComponent', () => {
  let component: QuanLyDatVeXemPhimComponent;
  let fixture: ComponentFixture<QuanLyDatVeXemPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyDatVeXemPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyDatVeXemPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
