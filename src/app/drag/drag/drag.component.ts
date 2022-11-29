import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

interface ContentList {
  name : string;
}

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  content = [
    'Content 2',
    'Content 3',
    'Content 4',
    'Content 5',
    'Content 6',
    'Content 7',
    'Content 8',
    'Content 9',
    'Content 10',
    'Content 11',
    'Content 12',
  ];

  container : string[] = [];

  noContent = [
    'Content 2',
    'Content 3',
    'Content 4',
    'Content 5',
    'Content 6',
    'Content 7',
    'Content 8',
    'Content 9',
    'Content 10',
    'Content 11',
    'Content 12',
  ];

  noContainer : string[] = [];

  lists : Array<ContentList[]> = []

  constructor() { }

  // define evento com timpo CdkDragDrop<<tipo>>
  drop(event : CdkDragDrop<string[]>)
  {
    //função nativa para mover elemento, pega index anterior e atual e posiciona sobre a lista
    if(event.previousContainer == event.container)
      moveItemInArray(this.content, event.previousIndex, event.currentIndex)
    else{
      // transfere drag/card de uma lista/container para outra
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addList()
  {
    let list = Array<ContentList>()
    for (let index = 0; index < 10; index++) {
      list.push({name:`content ${index}`})
    }
    this.lists.push(list)
  }

  ngOnInit(): void {
  }

}
