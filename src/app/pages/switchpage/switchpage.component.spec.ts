import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchpageComponent } from './switchpage.component';

describe('SwitchpageComponent', () => {
  let component: SwitchpageComponent;
  let fixture: ComponentFixture<SwitchpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
