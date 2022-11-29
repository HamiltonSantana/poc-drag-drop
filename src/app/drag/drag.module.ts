import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragComponent } from './drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropDragComponent } from './drop-drag/drop-drag.component';

@NgModule({
  declarations: [DragComponent, DropDragComponent],
  imports: [CommonModule, DragDropModule],
  exports: [DragComponent]
})
export class DragModule {}
