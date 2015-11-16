import { inject, ObserverLocator }  from "aurelia-framework";
import { Validation } from "aurelia-validation";

@inject(Validation, ObserverLocator)
export class VisitorValidator {
	isValid: false;

	constructor(aureliaValidation, observerLocator) {
		this.aureliaValidation = aureliaValidation;
		this.observerLocator = observerLocator;
	}

	on(subject) {
		this.validation = this.aureliaValidation
			.on(subject)
			.ensure('firstName')
				.isNotEmpty()
			.ensure('lastName')
				.isNotEmpty()

			// Not required, this is added to demonstrate
			// how to show validation messages for inputs
			// with glyphicon add-ons.
			.ensure('phoneNumber')
				.isNotEmpty()

			.ensure('primaryCraft.clientTypeId')
				.isNotEmpty();

		this.observerLocator
			.getObserver(this.validation.result, 'isValid')
			.subscribe(newValue => this.isValid = newValue);
	}

	validate() {
		return this.validation.validate();
	}
}