import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import {inject} from '@angular/core';
import {DefaultLoginLayout} from "../../layouts/default-login-layout/default-login-layout";
import {TextField} from "../../components/fields/text-field/text-field";
import {CheckboxField} from "../../components/fields/checkbox-field/checkbox-field";
import {LoginService} from "./login.service";
import {ButtonPrimary} from "../../components/buttons/button-primary/button-primary";
import {Divider} from "../../components/divider/divider";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [DefaultLoginLayout, ReactiveFormsModule, TextField, CheckboxField, ButtonPrimary, Divider],
    providers: [
        LoginService,
    ],
    templateUrl: './login.html'
})
export class Login {
    formGroup!: FormGroup;
    toastr = inject(ToastrService);

    @Input() LayoutOptions = {
        title: "Entre na sua conta",
        bannerImg: "/assets/webp/login-banner.webp",
        disableSubmit: this.disableSubmit
    }

    constructor(private router: Router, private loginService: LoginService) {
    }

    ngOnInit() {
        this.formGroup = new FormGroup({
            email: new FormControl('', {
                validators: [Validators.required, Validators.minLength(3)],
            }),
            password: new FormControl('', {
                validators: Validators.required,
            }),
        })
    }

    get disableSubmit(): boolean {
        return this.formGroup ? this.formGroup.invalid : true;
    }

    submit() {
        this.loginService.loginRequestToBackend(this.formGroup.value)
    }

    navigate() {
        this.router.navigate(["/signup"]);
    }

    getFieldErrors(fieldName: string): any {

        if (!this.formGroup.get(fieldName)?.invalid) return null;
        if (!this.formGroup.get(fieldName)?.dirty) return null;
        if (!this.formGroup.get(fieldName)?.touched) return null;

        return this.formGroup.get(fieldName)?.errors
    }
}