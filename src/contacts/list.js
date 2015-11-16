import { inject, ObserverLocator } from "aurelia-framework";
import $ from "bootstrap";
import { Filterer } from "../filterer";
import { DataService } from "../services/data-service";

@inject(ObserverLocator, Filterer, DataService)
export class List {
	contacts = [];
	filter = null;

	constructor(observerLocator, filterer, dataService) {
		this.dataService = dataService;
		this.filterer = filterer;
		observerLocator
			.getObserver(this, 'filter')
			.subscribe(() => this.applyFilter());
	}

	activate() {
		return this.loadContacts();
	}

	loadContacts() {
		this.dataService.getContacts()
			.then(data => {
				this.allContacts = data;
				this.applyFilter();
			});
	}

	applyFilter = () => {
		this.filterer.applyFilter(this.filter, this.allContacts, this.contacts);
	}
}