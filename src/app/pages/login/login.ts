import {Component} from '@angular/core';
import {DefaultLoginLayout} from "../../layouts/default-login-layout/default-login-layout";
import {TextField} from "../../components/fields/text-field/text-field";
import {CheckboxField} from "../../components/fields/checkbox-field/checkbox-field";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {ToastrService} from 'ngx-toastr';
import {inject} from '@angular/core';
import {validate} from "@angular/forms/signals";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [DefaultLoginLayout, ReactiveFormsModule, TextField, CheckboxField],
    providers: [
        LoginService,
    ],
    templateUrl: './login.html',
    styleUrl: './login.scss',
})
export class Login {
    loginForm!: FormGroup;
    toastr = inject(ToastrService);

    constructor(private router: Router, private loginService: LoginService) {
        this.loginForm = new FormGroup({
            userName: new FormControl('', [Validators.minLength(3),Validators.required] ),
            password: new FormControl(''),
            // rememberMe: new FormControl(false)
        })
    }

    submit() {
        this.loginService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe({
            next: () => this.toastr?.success("Login feito com sucesso"),
            error: () => this.toastr?.error("Erro inesperado")
        })
    }

    navigate() {
        this.router.navigate(["/signup"]);
    }
}