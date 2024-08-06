import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullsetComponent } from './nullset.component';

describe('NullsetComponent', () => {
  let component: NullsetComponent;
  let fixture: ComponentFixture<NullsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NullsetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NullsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
