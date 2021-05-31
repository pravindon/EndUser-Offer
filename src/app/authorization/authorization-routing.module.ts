import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';

const routes: Routes = [
  // { path: '', redirectTo: 'authorization', pathMatch: 'full' },
  { path: '', component: AuthorizationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }