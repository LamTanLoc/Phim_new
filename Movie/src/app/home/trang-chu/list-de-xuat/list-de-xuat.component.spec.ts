import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeXuatComponent } from './list-de-xuat.component';

describe('ListDeXuatComponent', () => {
  let component: ListDeXuatComponent;
  let fixture: ComponentFixture<ListDeXuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeXuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeXuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
