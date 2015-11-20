import { bindable, inject, noView } from "aurelia-framework";
import { Grid } from "../grid";
import { columnBase } from "./column-base";

@noView
@inject(Grid)
export class CustomColumn {
	@bindable alignment;
	@bindable filterable;
	@bindable heading;
	@bindable property;
	@bindable sortable;
	@bindable view;

	constructor(grid) {
		this.grid = grid;
		Object.assign(this, columnBase);
	}

	bind() {
		this.setup();
	}
}