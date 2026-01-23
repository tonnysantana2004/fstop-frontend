import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-checkbox-field',
  imports: [],
  templateUrl: './checkbox-field.html',
  styleUrl: './checkbox-field.scss',
})
export class CheckboxField {
    @Input() label: string = "Preencha o label do checkbox";
    @Input() inputName: string = "fill";
}
