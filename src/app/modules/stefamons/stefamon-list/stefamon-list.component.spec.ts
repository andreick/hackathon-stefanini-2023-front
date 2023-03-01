import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StefamonListComponent } from './stefamon-list.component';

describe('StefamonListComponent', () => {
  let component: StefamonListComponent;
  let fixture: ComponentFixture<StefamonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StefamonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StefamonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
