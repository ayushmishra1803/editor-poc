import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class EditorService{
  constructor(){}
  editorContent:BehaviorSubject<string>=new BehaviorSubject('')
  setContent(content:string){
    this.editorContent.next(content)
  }
}
