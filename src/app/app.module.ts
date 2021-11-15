import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentToolbarComponent } from './component-toolbar/component-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoasVindasComponent,
    ComponentToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
