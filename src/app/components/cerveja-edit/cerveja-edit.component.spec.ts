import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaEditComponent } from './cerveja-edit.component';

describe('CervejaEditComponent', () => {
  let component: CervejaEditComponent;
  let fixture: ComponentFixture<CervejaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
