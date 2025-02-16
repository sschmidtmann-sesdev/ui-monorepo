import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDescripComponent } from './feature-descrip.component';

describe('FeatureDescripComponent', () => {
  let component: FeatureDescripComponent;
  let fixture: ComponentFixture<FeatureDescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDescripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
