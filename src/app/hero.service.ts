import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { setDoc,doc } from '@firebase/firestore';
import { addDoc, Firestore } from '@angular/fire/firestore';
import { data, hammer,ladder,spade,chisel, Trowel, Circularsaw, Drillmachine, Wheelbarrow ,Handsaw} from 'src/assets/data';



@Injectable({
  providedIn: 'root'
})
export class HeroService {
constructor(private auth:Auth,private router:Router,private hero:Firestore){}

  //signup
  signup(fullname:string,username:string,email:string,phone:string,password:string){
    createUserWithEmailAndPassword(this.auth,email,password).then((res) =>{
      const uid = res.user.uid
      const email = res.user.email
      const user = {
        fullname: fullname,
        username: username,
        email: email,
        phone: phone,
        password: password
       }
       const docRef = doc(this.hero, "users", uid)
       setDoc(docRef,user).then(() => {
        console.log("Data added sucessfully");
       }).catch((err) => {
        console.log(err);
       })
       alert("signup successfully")
       this.router.navigate(['/']);
       }, err => {
        if (err.code === "auth/email-already-in-use"){
          alert("Email already in use")
        }
        this.router.navigate(['/signup']);
          

    })

  }
  //login method
  login(email:string,password:string){
    signInWithEmailAndPassword(this.auth,email,password).then((res) =>{
      alert("Login successfully")
      this.router.navigate(['/login'])
    }).catch(err =>{
      alert(err)
    })

  }


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
  };
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
insertData(docRef:any,data:any)
{

addDoc(docRef,data).then(()=>{alert("Data added successfully")}).catch((err)=>alert(err))
}
}