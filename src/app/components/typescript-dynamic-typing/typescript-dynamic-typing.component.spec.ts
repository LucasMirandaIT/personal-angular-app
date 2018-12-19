import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptDynamicTypingComponent } from './typescript-dynamic-typing.component';

describe('TypescriptDynamicTypingComponent', () => {
  let component: TypescriptDynamicTypingComponent;
  let fixture: ComponentFixture<TypescriptDynamicTypingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptDynamicTypingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptDynamicTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
