import { AbstractControl } from "@angular/forms";
import { promise } from "protractor";
import { Observable } from "rxjs";

export function NameValidator(control:AbstractControl):{[key:string]:any}|null{
    const nameVal=/Test/.test(control.value);
    return nameVal?{'name':{value:control.value}}:null
}

export function AsyncValidator(control:AbstractControl):Promise<any>{
    const pomise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(control.value=='TestProject'){
                resolve({'project':true})
            }
            else{
                resolve(null);
            }
        },5000);
    })
    return pomise;
}

