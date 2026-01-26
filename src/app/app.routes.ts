import {Routes} from '@angular/router';
import {Login} from "./domain/login/login-page/login";
import {Signup} from "./domain/signup/signup-page/signup";
import {authGuard} from "./auth-guard";
import {Home} from "./home/home";

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "signup",
        component: Signup
    },
    {
        path : "",
        canActivate: [authGuard],
        component : Home
    }
];
