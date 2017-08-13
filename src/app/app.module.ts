import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './routes/app.routes';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegisterComponent } from './register/register.component';
import { AddGymComponent } from './addGym/addgym.component'; 
import { ShowGymComponent } from './showGym/showGym.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login/login.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, routing],
  declarations: [ AppComponent, HomePageComponent, CalculatorComponent, NavbarComponent, RegisterComponent, AddGymComponent, ShowGymComponent, LoginComponent],
  providers:    [ LoginService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
