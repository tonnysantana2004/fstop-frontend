import {Component, forwardRef, Input} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
    ValidationErrors
} from "@angular/forms";
import {KeyValuePipe} from "@angular/common";

@Component({
    selector: 'app-text-field',
    imports: [
        ReactiveFormsModule,
        KeyValuePipe
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextField),
            multi: true
        }
    ],
    templateUrl: './text-field.html',
    styleUrl: './text-field.scss',
})
export class TextField implements ControlValueAccessor {

    @Input() label: string = "Preencha o label";
    @Input() placeholder: string = "";
    value: string = "";
    disabled: boolean = false;

    @Input() errors: ValidationErrors | null | undefined = null;

    get errorMessages(): string[] {
        if (!this.errors) return [];

        return Object.keys(this.errors).map(key => {
            switch (key) {
                case "required":
                    return this.label + " é obrigatório."
                case 'email':
                    return 'E-mail inválido.';
                case 'minlength':
                    return 'Mínimo de caracteres não atingido.';
                default:
                    return  this.label + ' tem um valor inválido.';
            }
        })
    }

    onChange: any = (value: any) => {
    };
    onTouched: any = () => {
    };

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
