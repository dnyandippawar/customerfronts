import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseitemComponent } from './chooseitem.component';

describe('ChooseitemComponent', () => {
  let component: ChooseitemComponent;
  let fixture: ComponentFixture<ChooseitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
