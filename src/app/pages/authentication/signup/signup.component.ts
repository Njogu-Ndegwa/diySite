import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import {GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit{
  hide = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor( 
    // private socialAuthService: SocialAuthService,
    private router: Router
    ){}
  // password: new FormControl('', [Validators.required, Validators.min(3) ])

  // signin: FormGroup = new FormGroup({
  //   email: new FormControl('', [Validators.email, Validators.required ]),
  //   password: new FormControl('', [Validators.required, Validators.min(3) ])
  // });

  // get passwordInput() { return this.signin.get('password');}

  ngOnInit() {
    // this.socialAuthService.authState.subscribe((user: any) => {
    //   console.log(user)
    // })
  }

  // loginWithGoogle() {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //   .then(() => this.router.navigate(['']));
  // }
}
