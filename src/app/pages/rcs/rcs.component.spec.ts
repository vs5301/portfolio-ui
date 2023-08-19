import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcsComponent } from './rcs.component';

describe('RcsComponent', () => {
  let component: RcsComponent;
  let fixture: ComponentFixture<RcsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcsComponent]
    });
    fixture = TestBed.createComponent(RcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
