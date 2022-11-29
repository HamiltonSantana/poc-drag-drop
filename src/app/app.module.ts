import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragModule } from "./drag/drag.module";
import { RichModule } from './rich/rich.module';
import { TemplateComponent } from './template/template.component';
import { AdDirective } from './template/directive/ad.directive';
import { TestComponent } from './template/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    AdDirective,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragModule,
    RichModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
