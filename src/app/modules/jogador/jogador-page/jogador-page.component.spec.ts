import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorPageComponent } from './jogador-page.component';

describe('JogadorPageComponent', () => {
  let component: JogadorPageComponent;
  let fixture: ComponentFixture<JogadorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogadorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
