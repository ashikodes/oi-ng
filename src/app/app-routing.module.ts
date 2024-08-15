import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LandingComponent } from './landing/landing.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'oi-auth', component: AuthFormComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({})
export class AppRoutingModule { }
