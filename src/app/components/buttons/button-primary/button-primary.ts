import { Component, Input } from '@angular/core';
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
    @Input() outline: boolean = false;
}
