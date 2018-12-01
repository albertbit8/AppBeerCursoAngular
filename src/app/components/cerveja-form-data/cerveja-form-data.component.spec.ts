import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaFormDataComponent } from './cerveja-form-data.component';

describe('CervejaFormDataComponent', () => {
  let component: CervejaFormDataComponent;
  let fixture: ComponentFixture<CervejaFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejaFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejaFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
