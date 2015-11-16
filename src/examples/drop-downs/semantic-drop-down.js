import { bindable, inject } from "aurelia-framework";
import $ from "jquery";
import { dropdown } from "semantic-ui";

@inject(Element)
export class SemanticDropDown {
	@bindable changed;
	@bindable datasource;
	@bindable placeholder;
	@bindable value;

	constructor(element) {
		this.element = element;
	}

	bind(bindingContext) {
		this.bindingContext = bindingContext;
	}

	attached() {
		$('.ui.dropdown', this.element).dropdown({
			onChange : this.onChangeEvent
		});
	}

	onChangeEvent = (value, text, $selectedItem) => {
		if(this.changed) {
			this.changed.apply(this.bindingContext, [value, text, $selectedItem]);
		}
	}
}