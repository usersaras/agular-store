import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSingleItemComponent } from './store-single-item.component';

describe('StoreSingleItemComponent', () => {
  let component: StoreSingleItemComponent;
  let fixture: ComponentFixture<StoreSingleItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreSingleItemComponent]
    });
    fixture = TestBed.createComponent(StoreSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
