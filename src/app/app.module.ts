import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaListComponent } from './Persona/persona-list/persona-list.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Servicio/service.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PersonaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
