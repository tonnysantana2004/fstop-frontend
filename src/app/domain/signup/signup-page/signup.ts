import {Component, inject, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import {DefaultLoginLayout} from "../../../layouts/default-login-layout/default-login-layout";
import {TextField} from "../../../components/fields/text-field/text-field";
import {CheckboxField} from "../../../components/fields/checkbox-field/checkbox-field";
import {SignupService} from "../signup.service";
import {ButtonPrimary} from "../../../components/buttons/button-primary/button-primary";
import {Divider} from "../../../components/divider/divider";

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [DefaultLoginLayout, ReactiveFormsModule, TextField, CheckboxField, ButtonPrimary, Divider],
    providers: [
        SignupService,
    ],
    templateUrl: './signup.html'
})
export class Signup {
    formGroup!: FormGroup;
    toastr = inject(ToastrService);

    @Input() LayoutOptions = {
        title: "Crie sua conta",
        bannerImg: "/assets/webp/login-banner-2.webp",
        disableSubmit: this.disableSubmit
    }

    constructor(private router: Router, private signupService: SignupService) {
    }

    ngOnInit() {
        this.formGroup = new FormGroup({
            email: new FormControl('', {
                validators: [Validators.required, Validators.minLength(3)],
            }),
            firstName: new FormControl('', {
                validators: [Validators.minLength(3)],
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
        this.signupService.signupRequestToBackend(this.formGroup.value)
    }

    navigate() {
        this.router.navigate(["/login"]);
    }

    getFieldErrors(fieldName: string): any {

        if (!this.formGroup.get(fieldName)?.invalid) return null;
        if (!this.formGroup.get(fieldName)?.dirty) return null;
        if (!this.formGroup.get(fieldName)?.touched) return null;

        return this.formGroup.get(fieldName)?.errors
    }
}