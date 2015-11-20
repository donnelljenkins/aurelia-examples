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
		this.cloneAllItemsIfNeeded();
		this.items.splice(0, this.items.length);
		this.allItems.forEach(item => {
			let addItem = !filters.length || this.meetsFilterCriteria(filters, item);
			if(addItem) {
				this.items.push(item);
			}
		});
	}

	cloneAllItemsIfNeeded() {
		if(!this.allItems) {
			this.allItems = this.items.slice();
		}
	}

	meetsFilterCriteria(filters, item) {
		return filters.some(filter => {
			return item[filter.property].toString().toLowerCase().startsWith(filter.value.toString().toLowerCase());
		});
	}

	sortChanged = (sort) => {
		if(sort.property) {
			this.items.sort((itemA, itemB) => {
				let result = this.compareItems(itemA, itemB, sort.property);
				return sort.direction === 'desc' ? result * -1 : result;
			});
		} else {
			this.items.sort((itemA, itemB) => {
				return this.compareItems(itemA, itemB, 'id');
			});
		}
	}

	compareItems(itemA, itemB, property) {
		if(itemA[property] < itemB[property]) {
			return -1;
		}
		
		if(itemA[property] > itemB[property]) {
			return 1;
		}

		return 0;
	}

	semanticGridButtonClick(row) {
		alert('Semantic grid clicked!');
	}
}