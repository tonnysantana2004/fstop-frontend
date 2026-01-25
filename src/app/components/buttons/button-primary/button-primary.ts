import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button-primary',
    imports: [
        NgClass
    ],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
    @Input() buttonText: string = "";
    @Input() actionFn: string = "";
    @Input() outline: boolean = false;
    @Input() btnDisabled : boolean = false;
}
