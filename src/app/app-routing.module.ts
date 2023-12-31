import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AkbulakFirstFloorComponent } from './map/akbulak/akbulak-first-floor/akbulak-first-floor.component';
import {SayakhatFourthFloorComponent} from "./map/sayakhat/sayakhat-fourth-floor/sayakhat-fourth-floor.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'akbulak', component: AkbulakFirstFloorComponent },
  {path:'sayakhat-4' , component:SayakhatFourthFloorComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
