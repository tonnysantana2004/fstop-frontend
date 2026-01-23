import {Component} from '@angular/core';
import {DefaultLoginLayout} from "../../components/default-login-layout/default-login-layout";
import {ButtonPrimary} from "../../components/buttons/button-primary/button-primary";
import {TextField} from "../../components/form/fields/text-field/text-field";
import {Divider} from "../../components/divider/divider";
import {CheckboxField} from "../../components/form/fields/checkbox-field/checkbox-field";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [DefaultLoginLayout, ReactiveFormsModule, ButtonPrimary, TextField, Divider, CheckboxField],
    templateUrl: './login.html',
    styleUrl: './login.scss',
})
export class Login {

    loginForm = new FormGroup({
        userName : new FormControl(''),
        password: new FormControl(''),
        rememberMe: new FormControl(false)
    })

    submit() {
        console.log("aaa")
    }

    navigate() {
        console.log("bbb")
    }
}
