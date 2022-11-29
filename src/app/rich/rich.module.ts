import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichComponent } from './components/rich/rich.component';
import { RichTextEditorModule } from "@syncfusion/ej2-angular-richtexteditor";
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
// import { ToolBarModule } from "@syncfusion/ej2-angular-navigations";



@NgModule({
  declarations: [
    RichComponent
  ],
  imports: [
    CommonModule,
    RichTextEditorModule,
    ToolbarModule
  ],
  exports : [RichComponent]
})
export class RichModule { }
