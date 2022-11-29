import { Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DragComponent } from '../drag/drag/drag.component';
import { AdDirective } from './directive/ad.directive';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @ViewChild(AdDirective, {static: true}) adHost! : AdDirective;
  viewRef! : ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
    this.viewRef = this.adHost.viewContainerRef;
    this.loadComponent();
  }

  addNewComponent()
  {
    this.loadComponent();
  }

  loadComponent()
  {
    this.viewRef.createComponent<DragComponent>(DragComponent);
  }

  clearComponents()
  {
    this.viewRef.clear();
  }
}
