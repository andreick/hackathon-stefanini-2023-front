import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StefamonComponent } from './stefamon.component';

describe('StefamonComponent', () => {
  let component: StefamonComponent;
  let fixture: ComponentFixture<StefamonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StefamonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StefamonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
