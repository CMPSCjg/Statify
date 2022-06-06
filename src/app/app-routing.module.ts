import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from 'src/views';
import { LandingPageComponent } from 'src/views/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
