import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniqueappComponent } from './uniqueapp/uniqueapp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ByconstructionComponent } from './byconstruction/byconstruction.component';

const routes: Routes = [
  {path: 'uniqueapp' , component: UniqueappComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'byconstuction' ,component: ByconstructionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
