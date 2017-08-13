import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../home/home.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegisterComponent } from '../register/register.component';
import { AddGymComponent } from '../addGym/addgym.component';
import { ShowGymComponent } from '../showGym/showGym.component';
import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent  },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'addGym', component: AddGymComponent },
    { path: 'showGym', component: ShowGymComponent },
    { path: 'login', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);