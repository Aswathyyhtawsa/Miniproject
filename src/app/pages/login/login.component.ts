import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fs:HeroService){
  }
    email:string=''
    password:string=''
  
  login(){
  
    this.fs.login(this.email,this.password)
    this.email=''
    this.password=''
  }
  

}
