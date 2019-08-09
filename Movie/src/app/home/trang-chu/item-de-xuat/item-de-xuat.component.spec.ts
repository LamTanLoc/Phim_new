import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeXuatComponent } from './item-de-xuat.component';

describe('ItemDeXuatComponent', () => {
  let component: ItemDeXuatComponent;
  let fixture: ComponentFixture<ItemDeXuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDeXuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDeXuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
