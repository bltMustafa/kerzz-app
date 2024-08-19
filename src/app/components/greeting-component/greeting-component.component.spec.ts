import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GreetingComponentComponent } from './greeting-component.component';

describe('GreetingComponentComponent', () => {
  let component: GreetingComponentComponent;
  let fixture: ComponentFixture<GreetingComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GreetingComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
