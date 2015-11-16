import { bindable, inject } from "aurelia-framework";

@inject(Element)
export class DemoTabs{
	@bindable heading;
	@bindable html;
	@bindable javascript;
	@bindable panelType = 'default';

	constructor(element){
		this.element = element;
	}

	bind(bindingContext){
		this.$parent = bindingContext;
	}

	attached(){
		$('.nav-tab', this.element).tab();
	}
}