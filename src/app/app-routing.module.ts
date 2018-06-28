import { ChartComponent } from './chart/chart.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { FormsComponent } from './forms/forms.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';



const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'artist',
    component: ArtistComponent,
    children: [

      {path: 'track', component: ArtistTrackListComponent},
      {path: 'album', component: ArtistAlbumListComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
