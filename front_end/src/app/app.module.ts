import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ShowDepComponent } from './movie/show-dep/show-dep.component';
import { AddEditComponent } from './movie/add-edit/add-edit.component';
import { ActorComponent } from './actor/actor.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ShowAcrComponent } from './actor/show-acr/show-acr.component';
import { SortbytitleComponent } from './sortbytitle/sortbytitle.component';
import { SortbyreleasedateComponent } from './sortbyreleasedate/sortbyreleasedate.component';
import { VoteComponent } from './vote/vote.component';
import { RelationComponent } from './relation/relation.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ShowDepComponent,
    AddEditComponent,
    ActorComponent,
    ShowAcrComponent,
    SortbytitleComponent,
    SortbyreleasedateComponent,
    VoteComponent,
    RelationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
