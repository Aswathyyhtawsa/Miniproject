import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

constructor(private fs:HeroService){
}
  fullname:string=''
  username:string=''
  email:string=''
  phone:string=''
  password:string=''

signup(){

  this.fs.signup(this.fullname,this.username,this.email,this.phone,this.password)
  this.email=''
  this.fullname=''
  this.username=''
  this.phone=''
  this.password=''
}

}
