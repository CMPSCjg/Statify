import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ResultsComponent,
  LandingPageComponent,
  NotFoundPageComponent,
} from 'src/views';

const routes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
