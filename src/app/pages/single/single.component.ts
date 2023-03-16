import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
 constructor(private hero: HeroService,private r:Router){}
 ngOnInit():void{
  let title=localStorage.getItem('title')
  if(title==='HAMMER'){
    this.single=this.hero.giveHammerData();
    console.log(this.single);
  }else if(title==='LADDER'){
    this.single=this.hero.giveLadderData();
  }
  else if(title==='SPADE'){
    this.single=this.hero.giveSpadeData();
 }
 else if(title==='CHISEL'){
  this.single=this.hero.giveChiselData();
}
else if(title==='TROWEL'){
  this.single=this.hero.giveTrowelData();
}
else if(title==='CIRCULAR SAW'){
  this.single=this.hero.giveCircularsawData();
}
else if(title==='DRILL MACHINE'){
  this.single=this.hero.giveDrillmachineData();

}
else if(title==='WHEEL BARROW'){
  this.single=this.hero.giveWheelbarrowData();
}
else if(title==='HAND SAW'){
  this.single=this.hero.giveHandSawData();
}

 
}
 buyNow(id:string){
  localStorage.setItem('buyId',id);
  this.r.navigate(['/buy']);
 }
}
