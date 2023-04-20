import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  alert:boolean=false
  integreRegex = /^[1-9]\d*$/

  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/



  bookingForm = new FormGroup({

    startdate : new FormControl("", [Validators.required]),

    enddate : new FormControl("", [Validators.required]),
    guests : new FormControl("", [Validators.required, Validators.pattern(this.integreRegex)]),
    rooms : new FormControl("", [Validators.required, Validators.pattern(this.integreRegex)]),
    email : new FormControl("", [Validators.required, Validators.pattern(this.emailRegex)]),

  })


  

  getControl(name: any): AbstractControl | null {

    return this.bookingForm.get(name)

  }


  bookingFunc(){

    console.log(this.bookingForm.value)

  this.alert=true
}
closeAlert(){
  this.alert=false
}
}
