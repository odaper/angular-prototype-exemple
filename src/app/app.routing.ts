import { PagesModule } from './business/pages/pages.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', loadChildren: 'app/business/pages/pages.module#PagesModule' },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}
