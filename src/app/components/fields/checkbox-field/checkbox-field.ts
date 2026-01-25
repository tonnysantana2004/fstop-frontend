import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-checkbox-field',
    imports: [
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxField),
            multi: true
        }
    ],
    templateUrl: './checkbox-field.html',
    styleUrl: './checkbox-field.scss',
})

export class CheckboxField implements ControlValueAccessor {

    @Input() label: string = "Preencha o label";
    checked = false;
    disabled: boolean = false;

    onChange: any = (value: any) => {
    };
    onTouched: any = () => {
    };

    writeValue(value: any): void {
        this.checked = !!value;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    toogle(event: Event) {
        const input = event.target as HTMLInputElement;
        this.checked = input.checked
        this.onChange(this.checked)
        this.onTouched()
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}
