import { bindable, inject, noView } from "aurelia-framework";
import { Grid } from "../grid";
import utility from "../utility";

@noView
@inject(Grid)
export class BooleanColumn {
	@bindable alignment = 'center aligned';
	@bindable field;
	@bindable filterable;
	@bindable heading;
	@bindable sortable;

	constructor(grid) {
		this.grid = grid;
	}

	bind() {
		this.prepare();
		this.grid.addColumn(this);
	}

	prepare() {
		this.setHeading();
		this.subscribeToFilterer();
	}

	setHeading() {
		this.heading = this.heading || utility.camelCase(this.field);
	}

	subscribeToFilterer() {
		if(this.filterable === '') {
			this.grid.filterer.subscribe(this);
		}
	}
}