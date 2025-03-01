import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [


    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },{
path:'signup',
component:SignupComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
        
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'addemployee',
                component:AddemployeeComponent
            },
            {
                path:'about',
                component:AboutComponent
            }
        ]
    }
];
