import { Injectable } from '@angular/core';
import { data, hammer,ladder,spade,chisel, Trowel, Circularsaw, Drillmachine, Wheelbarrow ,Handsaw} from 'src/assets/data';



@Injectable({
  providedIn: 'root'
})
export class HeroService {
  giveHandSawData() {
    return Handsaw
  }
  giveData(){
    return data
  }
  giveHammerData(){
    return hammer
  }
  giveLadderData(){
    return ladder
  }
  giveSpadeData(){
     return spade
  }
  giveChiselData(){
    return chisel
  }
  giveTrowelData(){
    return Trowel
}
giveCircularsawData(){
  return Circularsaw
}
giveDrillmachineData(){
  return Drillmachine
}
giveWheelbarrowData(){
  return Wheelbarrow
}
giveHandsawData(){
  return Handsaw
}
}