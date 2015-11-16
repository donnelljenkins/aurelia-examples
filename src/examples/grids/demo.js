import { inject } from "aurelia-framework";
import { DataService } from "../../services/data-service";

@inject(DataService)
export class Demo {
	items = [];

	constructor(dataservice) {
		this.dataservice = dataservice;
	}

	activate() {
		return this.loadItems();
	}

	loadItems() {
		return this.dataservice.getGridSamples()
			.then(data => data.forEach(item => this.items.push(item)));
	}

	semanticGridButtonClick() {
		alert('Semantic grid clcked!');
	}
}