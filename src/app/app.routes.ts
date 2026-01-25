import { Routes } from '@angular/router';
import {Login} from "./domain/login/login-page/login";
import {Signup} from "./domain/signup/signup-page/signup";

export const routes: Routes = [
    {
        path : "login",
        component : Login
    },
    {
        path : "signup",
        component : Signup
    }
];
