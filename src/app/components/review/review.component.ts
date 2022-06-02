import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditorService } from 'src/app/service/editor.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(private editorService:EditorService) { }
  content$!:Observable<any>

  ngOnInit(): void {
    this.content$=this.editorService.editorContent
  }

}
