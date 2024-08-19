import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StoreDetailComponent } from './store-detail.component';

describe('StoreDetailComponent', () => {
  let component: StoreDetailComponent;
  let fixture: ComponentFixture<StoreDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
