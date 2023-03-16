import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
 constructor(private hero : HeroService, private router: Router){}
 data=this.hero.giveData();
 gotoHere(id:string){
  localStorage.setItem('title',id)
  this.router.navigate(['/single'])
 }
}
