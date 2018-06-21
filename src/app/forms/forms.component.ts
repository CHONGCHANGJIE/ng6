import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  fruits = [{name: 'Apple'}, {name: 'PineApple'}, {name: 'Banana'}];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  separatorKeysCodes = [ENTER, COMMA];



  options: FormGroup;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

  remove(fruit) {
    this.fruits.splice(this.fruits.indexOf(fruit), 1);
  }
  add(event: MatChipInputEvent) {
    let input = event.input;
    let value = event.value;

    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

}
