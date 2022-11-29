import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-drag',
  templateUrl: './drop-drag.component.html',
  styleUrls: ['./drop-drag.component.css'],
})
export class DropDragComponent implements OnInit {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  answer = <string[]>[];

  constructor() {}

  ngOnInit(): void {}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.answer = [event.item.data];
    }
  }

  Predicate() {
    return this.answer.length == 0;
  }

  noReturnPredicate() {
    return false;
  }
}
