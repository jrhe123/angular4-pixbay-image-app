import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResultExampleComponent } from './dialog-result-example.component';

describe('DialogResultExampleComponent', () => {
  let component: DialogResultExampleComponent;
  let fixture: ComponentFixture<DialogResultExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogResultExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogResultExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
