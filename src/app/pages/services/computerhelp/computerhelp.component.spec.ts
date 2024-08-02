import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerhelpComponent } from './computerhelp.component';

describe('ComputerhelpComponent', () => {
  let component: ComputerhelpComponent;
  let fixture: ComponentFixture<ComputerhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerhelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
