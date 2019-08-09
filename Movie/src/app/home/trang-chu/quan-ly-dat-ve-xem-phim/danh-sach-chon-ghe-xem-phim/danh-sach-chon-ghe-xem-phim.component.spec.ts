import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachChonGheXemPhimComponent } from './danh-sach-chon-ghe-xem-phim.component';

describe('DanhSachChonGheXemPhimComponent', () => {
  let component: DanhSachChonGheXemPhimComponent;
  let fixture: ComponentFixture<DanhSachChonGheXemPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChonGheXemPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChonGheXemPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
