import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { OauthComponent } from './oauth/oauth.component';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '', component: RegistrationComponent,
    children: [
      { path: '', component: EmailComponent },
      { path: 'oauth', component: OauthComponent },
      { path: '**', redirectTo: '' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
