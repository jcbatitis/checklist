import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from './components/card/card.component';
import { TypesComponent } from './components/types/types.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [AppComponent, CardComponent, TypesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
