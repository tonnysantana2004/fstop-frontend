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

    @Output("submit") onSubmit = new EventEmitter();
    @Output("navigate") onNavigate = new EventEmitter();

    action(action: string): void {
        switch (action) {
            case "submit":
                this.onSubmit.emit();
                break;
            case "navigate":
                this.onNavigate.emit();
        }
    }

}
