import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnautorizedComponent } from './unautorized.component';

describe('UnautorizedComponent', () => {
  let component: UnautorizedComponent;
  let fixture: ComponentFixture<UnautorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnautorizedComponent]
    });
    fixture = TestBed.createComponent(UnautorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
