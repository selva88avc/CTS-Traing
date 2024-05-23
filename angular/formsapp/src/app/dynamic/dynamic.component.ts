import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
 myform : FormGroup;

 constructor(private fbuilder : FormBuilder)
 {
  this.myform=fbuilder.group(
    {
      mycontrols : this.fbuilder.array([])
    }
  )
 }

get farray()
{
  return this.myform.get('mycontrols') as FormArray
}

addControl()
{
  let newcontrol=this.fbuilder.control('',Validators.required)
  this.farray.push(newcontrol)
}

removeControl(ind : number)
{
  this.farray.removeAt(ind)
}

getData(i : number)
{
  console.log("index is " + i)
  console.log( this.farray.value)

  let arr=this.farray.value;

  console.log(arr[i])
// console.log( this.farray.get(i)?.value)
}
}
