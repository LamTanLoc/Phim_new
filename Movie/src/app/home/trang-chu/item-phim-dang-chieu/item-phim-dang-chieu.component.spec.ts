import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimDangChieuComponent } from './item-phim-dang-chieu.component';

describe('ItemPhimDangChieuComponent', () => {
  let component: ItemPhimDangChieuComponent;
  let fixture: ComponentFixture<ItemPhimDangChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimDangChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimDangChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
