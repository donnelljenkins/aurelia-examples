import { bindable } from "aurelia-framework";

export class DropDown {
	@bindable handleSelected = null;
	@bindable items = null;
	@bindable selected = null;
	@bindable title = '';
	@bindable visible = false;
	
	cascadingDropDowns;
	viewModel = null;

	bind(bindingContext){
		this.cascadingDropDowns = bindingContext;
	}

	attached(){
		this.viewModel = this.cascadingDropDowns.viewModel;
	}

	selectedChanged(newValue, oldValue){
		if(this.handleSelected){
			this.handleSelected(newValue, oldValue);
		}
	}
}