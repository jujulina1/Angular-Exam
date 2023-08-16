import { FormGroup, ValidatorFn } from "@angular/forms";
//abstract control
export function matchPass(control1:string, control2:string): ValidatorFn{
return (control) => {
    let group = control as FormGroup;
    let cntr1 = group.get(control1)
    let cntr2 = group.get(control2)
    return cntr1?.value === cntr2?.value ? null : {matchPass: true}
}
}