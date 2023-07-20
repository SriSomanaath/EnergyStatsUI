import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsUIComponent } from './params-ui.component';

describe('ParamsUIComponent', () => {
  let component: ParamsUIComponent;
  let fixture: ComponentFixture<ParamsUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamsUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
