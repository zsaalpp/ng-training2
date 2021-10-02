import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { OauthComponent } from './oauth/oauth.component';
import { EmailComponent } from './email/email.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    RegistrationComponent,
    OauthComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class RegistrationModule { }
