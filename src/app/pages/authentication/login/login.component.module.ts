import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.component.routing';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
// import { SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    // SocialLoginModule 
  ]
})
export class LoginModule { }