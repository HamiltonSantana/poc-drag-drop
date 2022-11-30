import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { DragComponent } from 'src/app/drag/drag/drag.component';

@Component({
  selector: 'app-rich',
  templateUrl: './rich.component.html',
  styleUrls: ['./rich.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  encapsulation: ViewEncapsulation.None,
})
export class RichComponent implements OnInit {
  @ViewChild('richEditor') richEditor! : RichTextEditorComponent;

  public tools: ToolbarModule = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
};
  
  constructor(private viewRef : ViewContainerRef) { }

  ngOnInit(): void {
    
  }

  addClozer()
  {
    const drag = this.viewRef.createComponent(DragComponent)
    let element = document.createElement('button')
    element.innerHTML ='teste';
    element.classList.add('gay');
    const textarea = this.richEditor.element.querySelector('.e-content')
    textarea?.append(document.createTextNode('\u00A0'));
    textarea?.append(drag.location.nativeElement);
    textarea?.append(document.createTextNode('\u00A0'));
    console.log(element)
    const drag2 = this.viewRef.createComponent(DragComponent)
    document.getRootNode().parentElement?.append(drag2.location.nativeElement)
  }
}