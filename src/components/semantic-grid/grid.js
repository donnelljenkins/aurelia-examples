import { bindable, children, inject } from "aurelia-framework";
import { Filterer } from "./filterer";
import utility from "./utility";

@inject(Filterer)
export class Grid {
	@bindable datasource;
	@bindable filtersChanged;
	columns = [];

	constructor(filterer) {
		this.filterer = filterer;
	}

	filtersChangedChanged() {
		this.filterer.filtersChanged = this.filtersChanged;
	}

	addColumn(column) {
		this.columns.push(column);
	}

	columnTemplatePrefix(column) {
		return utility.snakeCase(column.constructor.name);
	}
}