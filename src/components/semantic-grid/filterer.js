import { inject, ObserverLocator, transient } from "aurelia-framework";

@transient()
@inject(ObserverLocator)
export class Filterer {
	filters = [];

	constructor(observerLocator) {
		this.observerLocator = observerLocator;
	}

	subscribe(column) {
		this.observerLocator
			.getObserver(column, 'filterValue')
			.subscribe(newValue => {
				this.handleFilterChange({ field: column.field, value: newValue });
			});
	}

	handleFilterChange(newFilter) {
		this.addOrUpdateFilters(newFilter);
		this.removeBlankFilters();
		this.signalFiltersChanged();
	}

	addOrUpdateFilters(newFilter) {
		let existingFilter = this.filters.find(filter => { return filter.field === newFilter.field; });
		if(existingFilter) {
			existingFilter.value = newFilter.value;
		} else {
			this.filters.push(newFilter);
		}
	}

	signalFiltersChanged() {
		if(this.filtersChanged) {
			this.filtersChanged(this.filters);
		}
	}

	removeBlankFilters() {
		this.filters = this.filters.filter(filter => { return filter.value || filter.value === false; });
	}
}