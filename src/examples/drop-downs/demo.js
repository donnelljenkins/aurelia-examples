import { inject } from "aurelia-framework";
import { DataService } from "../../services/data-service";

const maxEvents = 5;

@inject(DataService)
export class Demo {
	selectedItemId;
	items = [];
	events = [];

	constructor(dataservice) {
		this.dataservice = dataservice;
	}

	activate() {
		return this.loadItems();
	}

	loadItems() {
		return this.dataservice.getDropdownSamples()
			.then(data => data.forEach(item => this.items.push(item)));
	}

	semanticDropDownChanged(value, text) {
		this.events.unshift(`Semantic Drop down changed to '${value} (${text})'.`);
		if(this.events.length > maxEvents) {
			this.events.splice(maxEvents, 1);
		}
	}
}