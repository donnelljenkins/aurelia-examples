import { bindable, containerless } from "aurelia-framework";
import $ from "bootstrap";

@containerless
export class ContactCard {
	@bindable model;

	attached() {
		$(".collapse").collapse()
	}

	bind(bindingContext, overrideContext) {
		this.model = this.model || overrideContext;
	}
}