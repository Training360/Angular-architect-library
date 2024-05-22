import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgcFormControlsComponent } from './ngc-form-controls.component';

describe('NgcFormControlsComponent', () => {
  let component: NgcFormControlsComponent;
  let fixture: ComponentFixture<NgcFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgcFormControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgcFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
