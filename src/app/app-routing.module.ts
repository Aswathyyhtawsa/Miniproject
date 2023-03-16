import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './pages/buy/buy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';
import { ToolsComponent } from './pages/tools/tools.component';
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
     path:'Login',component:LoginComponent
  },
  {
    path:'tools',component:ToolsComponent
 },
  {
  path:'Signup',component:SignupComponent
  },
  {
    path:'Contact',component:ContactComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'buy',component:BuyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
