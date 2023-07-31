import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/authentication/login/login.component.module').then(
        (m) => m.LoginModule
      ),
  },

  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/authentication/signup/signup.component.module').then(
        (m) => m.SignUpModule
      ),
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/onboarding/onboarding.component.module').then(
        (m) => m.OnboardingModule
      ),
  },

  {
    path: 'five-step-process',
    loadChildren: () =>
      import('./pages/onboarding/five-step-process/five-step-process.component.module').then(
        (m) => m.FiveStepProcessModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
