import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/service/editor.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private eitorService:EditorService) { }

  ngOnInit(): void {
  }
  editor = ClassicEditor;
  config = {

     mediaEmbed: {
      previewsInData: true
  },

  };
  content:string=''
  saveContent(){
console.log(this.content);

this.eitorService.setContent(this.content)
  }

}
