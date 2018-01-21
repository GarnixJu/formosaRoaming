import { UserComponent } from './user/user.component';
import { ChartCreationComponent } from './chart-creation/chart-creation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create-chart', component: ChartCreationComponent },
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {
}
