import { AbstractControl, ValidationErrors } from '@Angular/forms'

export class UsernameValid{
    static CannotContainSpace(controle: AbstractControl): ValidationErrors | null {
        if ((controle.value as string).includes('1')){
            return {
                CannotContainsSpace:true
            }
        }
        return null;
    }
}