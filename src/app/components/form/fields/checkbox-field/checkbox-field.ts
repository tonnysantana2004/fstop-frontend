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
    @Input() inputName: string = "fill";


    value: string = "";
    onChange: any = () => {
    };
    onTouched: any = () => {
    };

    onInput(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.onChange(value);
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }
}
