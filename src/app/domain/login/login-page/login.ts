import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import {inject} from '@angular/core';
import {DefaultLoginLayout} from "../../../layouts/default-login-layout/default-login-layout";
import {TextField} from "../../../components/fields/text-field/text-field";
import {CheckboxField} from "../../../components/fields/checkbox-field/checkbox-field";
import {LoginService} from "../login.service";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [DefaultLoginLayout, ReactiveFormsModule, TextField, CheckboxField],
    providers: [
        LoginService,
    ],
    templateUrl: './login.html'
})
export class Login {
    loginForm!: FormGroup;
    toastr = inject(ToastrService);

    @Input() LayoutOptions = {
        title: "Entre na sua conta",
        submitBtnText: "Entrar",
        navigateBtnText: "Criar uma conta",
        bannerImg: "/assets/webp/login-banner.webp",
        disableSubmit: this.loginForm?.valid
    }

    constructor(private router: Router, private loginService: LoginService) {
        this.loginForm = new FormGroup({
            userName: new FormControl('', {
                validators: [Validators.required, Validators.minLength(3)],
                // updateOn: 'blur'
            }),
            password: new FormControl('', {
                validators: Validators.required,
                // updateOn: 'blur'
            }),

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