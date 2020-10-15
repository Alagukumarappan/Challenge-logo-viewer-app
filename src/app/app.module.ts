import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { LogoViewerComponent } from './logo-viewer/logo-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { FavouriteChallenge } from './services/favouriteChallenge.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoViewerComponent,
    DialogboxComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FieldsetModule,
    CardModule,
    ButtonModule,
    AccordionModule,
  ],
  providers: [FavouriteChallenge],
  bootstrap: [AppComponent],
  entryComponents: [DialogboxComponent]
})
export class AppModule { }
