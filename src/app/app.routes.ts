import {Routes} from '@angular/router';
import {Login} from "./domain/login/login";
import {Signup} from "./domain/signup/signup";
import {Home} from "./domain/home/home";
import {authGuard} from "./auth-guard";
import {preloaderGuard} from "./shared/guard/preloader-guard";

export const routes: Routes = [
    {
        path: "login",
        canActivate: [authGuard, preloaderGuard],
        component: Login
    },
    {
        path: "signup",
        canActivate: [authGuard, preloaderGuard],
        component: Signup
    },
    {
        path : "",
        canActivate: [authGuard, preloaderGuard],
        component : Home
    }
];
