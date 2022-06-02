import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { EditorComponent } from './components/editor/editor.component';
import { ReviewComponent } from './components/review/review.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './pipe/sanitize-html.pipe';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
@NgModule({
  declarations: [AppComponent, EditorComponent, ReviewComponent, SanitizeHtmlPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    ReactiveFormsModule,FormsModule,HttpClientModule,AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
