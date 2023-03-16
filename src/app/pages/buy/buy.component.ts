import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Circularsaw, Drillmachine, Handsaw, spade, Wheelbarrow } from 'src/assets/data';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  buyProduct:any
  constructor(private hero:HeroService ) {}
  ngOnInit(){
    let id=localStorage.getItem('buyId');
    let trowel = this.hero.giveTrowelData()
    let hammer=this.hero.giveHammerData()
    let ladder=this.hero.giveLadderData()
    let chisel=this.hero.giveChiselData()
    trowel.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    hammer.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    ladder.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    chisel.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    Circularsaw.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    Drillmachine.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    Wheelbarrow.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    spade.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    Handsaw.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    
    
    
  }
}
