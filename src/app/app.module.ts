import {NgModule} from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SubareaComponent } from './components/subarea/subarea.component';
import { SubareaService } from './services/subareaService';
@NgModule({
  declarations: [
    AppComponent,
    SubareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SubareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
