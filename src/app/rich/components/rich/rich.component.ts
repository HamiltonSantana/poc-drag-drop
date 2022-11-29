import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-rich',
  templateUrl: './rich.component.html',
  styleUrls: ['./rich.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  encapsulation: ViewEncapsulation.None,
})
export class RichComponent implements OnInit {
  @ViewChild('richEditorComponent') richEditor : RichTextEditorComponent | undefined

  public tools: ToolbarModule = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
};
  
  constructor() { }

  ngOnInit(): void {
    
  }

  addClozer()
  {
    let element = document.createElement('p')
    element.innerHTML ='teste';
    element.classList.add('gay');
    document.getElementById('richEditor')?.appendChild(element);
    console.log(element)
  }
}