import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimSapChieuComponent } from './item-phim-sap-chieu.component';

describe('ItemPhimSapChieuComponent', () => {
  let component: ItemPhimSapChieuComponent;
  let fixture: ComponentFixture<ItemPhimSapChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimSapChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimSapChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
