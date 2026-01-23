import {Component} from '@angular/core';
import {DefaultLoginLayout} from "../../components/default-login-layout/default-login-layout";
import {Form} from "../../components/form/form";
import {ButtonPrimary} from "../../components/buttons/button-primary/button-primary";
import {TextField} from "../../components/form/fields/text-field/text-field";
import {Divider} from "../../components/divider/divider";
import {CheckboxField} from "../../components/form/fields/checkbox-field/checkbox-field";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [DefaultLoginLayout, Form, ButtonPrimary, TextField, Divider, CheckboxField],
    templateUrl: './login.html',
    styleUrl: './login.scss',
})
export class Login {

}
