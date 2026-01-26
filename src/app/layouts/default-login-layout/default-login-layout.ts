import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonPrimary} from "../../components/buttons/button-primary/button-primary";
import {Divider} from "../../components/divider/divider";

@Component({
    selector: 'app-default-login-layout',
    standalone: true,
    imports: [
        ButtonPrimary,
        Divider
    ],
    templateUrl: './default-login-layout.html',
    styleUrl: './default-login-layout.scss',
})

export class DefaultLoginLayout {

    @Input() options = {
        title: "Entre na sua conta",
        bannerImg: "/assets/webp/login-banner-4.webp"
    }

    @Output() onSubmit = new EventEmitter();
    @Output() onNavigate = new EventEmitter();
}
