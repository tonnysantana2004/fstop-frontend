import {Component, inject, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import {DefaultLoginLayout} from "../../../layouts/default-login-layout/default-login-layout";
import {TextField} from "../../../components/fields/text-field/text-field";
import {CheckboxField} from "../../../components/fields/checkbox-field/checkbox-field";
import {SignupService} from "../signup.service";

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [DefaultLoginLayout, ReactiveFormsModule, TextField, CheckboxField],
    providers: [
        SignupService,
    ],
    templateUrl: './signup.html',
    styleUrl: './signup.scss',
})
export class Signup {
    signupForm!: FormGroup;
    toastr = inject(ToastrService);

    constructor(private router: Router, private signupService: SignupService) {
        this.signupForm = new FormGroup({
            firstName: new FormControl('', [Validators.minLength(3), Validators.required]),
            userName: new FormControl('', [Validators.minLength(3), Validators.required]),
            password: new FormControl(''),
            // rememberMe: new FormControl(false)
        })
    }

    @Input() signupOptions = {
        bannerImg: "/assets/webp/login-banner-3.webp",
        submitBtnText: "Criar",
        navigateBtnText: "Faça seu login",
        title: "Crie a sua conta",
        disableSubmit: this.signupForm?.valid
    }

    submit() {
        this.signupService.signup(this.signupForm.value.userName, this.signupForm.value.password).subscribe({
            next: () => this.toastr?.success("Conta criada"),
            error: () => this.toastr?.error("Erro ao criar conta")
        })
    }

    navigate() {
        this.router.navigate(["/login"]);
    }
}