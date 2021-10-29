import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfilComponent } from './profil/profil.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
 {path:"Profil",component:ProfilComponent},
 {path:"Tournament",component:TournamentComponent},
 {path:"Leaderboard",component:LeaderboardComponent},
 {path:"Home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
