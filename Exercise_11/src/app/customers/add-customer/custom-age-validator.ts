// import { ValidatorFn, AbstractControl, ValidationErrors} from "@angular/forms";

// export function testAge(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {

//       const value = control.value.getFullYear();
//       const currentDate = new Date().getFullYear();
//       const isOfAge = (currentDate - value) >= 18;
      
      
//     return !isOfAge ? {isNotMature: true} : null;
//   }
// }