import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFruitComponent } from './add-edit-fruit.component';

describe('AddEditFruitComponent', () => {
  let component: AddEditFruitComponent;
  let fixture: ComponentFixture<AddEditFruitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditFruitComponent]
    });
    fixture = TestBed.createComponent(AddEditFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
