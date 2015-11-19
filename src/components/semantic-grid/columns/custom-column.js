import { bindable, inject, noView } from "aurelia-framework";
import { Grid } from "../grid";
import utility from "../utility";

@noView
@inject(Grid)
export class CustomColumn {
	@bindable alignment;
	@bindable field;
	@bindable filterable;
	@bindable heading;
	@bindable sortable;
	@bindable view;

	constructor(grid) {
		this.grid = grid;
	}

	bind() {
		this.prepareForGrid();
		this.grid.addColumn(this);
	}

	prepareForGrid() {
		this.heading = this.heading || utility.camelCase(this.field);
	}
}