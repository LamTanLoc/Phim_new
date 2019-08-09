import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonVePhimComponent } from './chon-ve-phim.component';

describe('ChonVePhimComponent', () => {
  let component: ChonVePhimComponent;
  let fixture: ComponentFixture<ChonVePhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChonVePhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonVePhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
