import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CirclesComponent } from './pages/circles/circles.component';
import { InvestComponent } from './pages/invest/invest.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';

export const appRoutes: Routes = [{ path: '', component: HomeComponent },
    { path: 'circles', component: CirclesComponent },
    { path: 'invest', component: InvestComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'signup', component: SignupComponent },
];
