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

	filtersChanged = (filters) => {
		if(!this.allItems) {
			this.allItems = this.items.slice();
		}
		this.items.splice(0, this.items.length);
		this.allItems.forEach(item => {
			let addItem = !filters.length || this.meetsFilterCriteria(filters, item);
			if(addItem) {
				this.items.push(item);
			}
		});
	}

	meetsFilterCriteria(filters, item) {
		return filters.some(filter => {
			return item[filter.field].toString().toLowerCase().startsWith(filter.value.toString().toLowerCase());
		});
	}

	semanticGridButtonClick(row) {
		alert('Semantic grid clicked!');
	}
}