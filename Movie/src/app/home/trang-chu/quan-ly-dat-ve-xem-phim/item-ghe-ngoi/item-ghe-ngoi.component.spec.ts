import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGheNgoiComponent } from './item-ghe-ngoi.component';

describe('ItemGheNgoiComponent', () => {
  let component: ItemGheNgoiComponent;
  let fixture: ComponentFixture<ItemGheNgoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGheNgoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGheNgoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
