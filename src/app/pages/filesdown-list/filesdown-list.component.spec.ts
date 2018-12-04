import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesdownListComponent } from './filesdown-list.component';

describe('FilesdownListComponent', () => {
  let component: FilesdownListComponent;
  let fixture: ComponentFixture<FilesdownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesdownListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
