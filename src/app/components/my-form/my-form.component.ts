import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


// import class
import { Address } from './address';


// Material
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

// Regex email
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;





@Component({
	selector: 'app-my-form',
	templateUrl: './my-form.component.html',
	styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

	address: Address = new Address();
	picker: Date;


	// autocomplete
	stateCtrl: FormControl;
  	filteredStates: any;
  	states = [
	  	'Alabama',
	  	'Alaska',
	  	'Arizona',
	  	'Arkansas'
  	];


  	constructor(

  	) {
  		this.stateCtrl = new FormControl();
  		this.filteredStates = this.stateCtrl.valueChanges
  		.startWith(null)
  		.map(name => this.filterStates(name));
  	}


	ngOnInit() {
	}


	// autocomplete
	filterStates(val: string) {
		return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
		: this.states;
	}

	// input validate
	emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);


	// drop down options
	foods = [
		{value: 'steak-0', viewValue: 'Steak'},
		{value: 'pizza-1', viewValue: 'Pizza'},
		{value: 'tacos-2', viewValue: 'Tacos'}
	];




	onSubmit(){
		console.log("hit me");
	}

}