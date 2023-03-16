import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './utils/navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { ToolsComponent } from './pages/tools/tools.component';
import { SingleComponent } from './pages/single/single.component';
import { FooterComponent } from './utils/footer/footer.component';
import { BuyComponent } from './pages/buy/buy.component';
import { CartComponent } from './pages/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ContactComponent,
    NavbarComponent,
    LoginComponent,
    ToolsComponent,
    SingleComponent,
    FooterComponent,
    BuyComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
