import { bindable, inject, noView } from "aurelia-framework";
import { Grid } from "../grid";
import utility from "../utility";

@noView
@inject(Grid)
export class BooleanColumn {
	@bindable field;
	@bindable filterable;
	@bindable heading;
	@bindable sortable;

	constructor(grid) {
		this.grid = grid;
	}

	bind() {
		utility.addColumnToGrid(this);
	}
}