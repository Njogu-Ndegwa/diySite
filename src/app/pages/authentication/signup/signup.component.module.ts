import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './signup.component';
import {SignUpRoutingModule } from './signup.component.routing';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
// import { SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    // SocialLoginModule 
  ]
})
export class SignUpModule { }