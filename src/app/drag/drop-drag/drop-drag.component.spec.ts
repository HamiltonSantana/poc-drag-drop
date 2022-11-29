import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragComponent } from './drop-drag.component';

describe('DropDragComponent', () => {
  let component: DropDragComponent;
  let fixture: ComponentFixture<DropDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
