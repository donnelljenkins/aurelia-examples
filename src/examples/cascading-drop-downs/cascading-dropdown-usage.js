import { bindable } from "aurelia-framework";
import { getClassifications, getGenders, getPeople } from "./cascading_dropdown_db";

export class CascadingDropdownUsage {
	classes = [];
	genders = [];
	people = [];
	@bindable selectedClass = null;
	@bindable selectedGender = null;
	@bindable selectedPerson = null;

	attached(){
		return this.getClasses();
	}

	getClasses(){
		this.classes.length = 0;
		return getClassifications()
			.then(items => {
				this.classes.push('');
				items.forEach(item => this.classes.push(item));
			});
	}

	classChanged = (newValue) => {
		this.selectedClass = newValue;
		this.selectedGender = null;
		this.getGenders();
	}

	getGenders(){
		this.genders.length = 0;
		if(this.selectedClass){
			return getGenders(this.selectedClass)
				.then(items => {
					this.genders.push('');
					items.forEach(item => this.genders.push(item));
				});
		}
	}

	genderChanged = (newValue) => {
		this.selectedGender = newValue;
		this.getPeople();
	}

	getPeople(){
		this.people.length = 0;
		if(this.selectedClass && this.selectedGender){
			return getPeople(this.selectedClass, this.selectedGender)
				.then(items => {
					this.people.push('');
					items.forEach(item => this.people.push(item));
				});
		}
	}
}