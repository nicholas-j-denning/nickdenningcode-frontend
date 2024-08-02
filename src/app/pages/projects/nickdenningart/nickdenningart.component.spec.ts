import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NickdenningartComponent } from './nickdenningart.component';

describe('NickdenningartComponent', () => {
  let component: NickdenningartComponent;
  let fixture: ComponentFixture<NickdenningartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NickdenningartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NickdenningartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
