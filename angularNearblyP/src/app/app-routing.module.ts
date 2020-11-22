import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: "", redirectTo: "search", pathMatch: 'full' },
  { path: "search", component: SearchComponent },
  { path: "results", component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
