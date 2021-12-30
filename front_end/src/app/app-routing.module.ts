import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { SortbytitleComponent } from './sortbytitle/sortbytitle.component';
import { SortbyreleasedateComponent } from './sortbyreleasedate/sortbyreleasedate.component';
import { RelationComponent } from './relation/relation.component';


const routes: Routes = [
  {path: 'movie', component: MovieComponent},
  {path:'actor', component: ActorComponent},
  {path:'sortbytitle', component: SortbytitleComponent },
  {path:'sortbyreleasedate', component: SortbyreleasedateComponent },
  {path: 'relation', component: RelationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
