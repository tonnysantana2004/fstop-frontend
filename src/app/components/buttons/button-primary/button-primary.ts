import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-primary',
    imports: [],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
    @Input() buttonText: string = "";
    @Input() actionFn: string = "";
    @Input() outline: boolean = false;
    @Input() btnDisabled : boolean = false;
}
