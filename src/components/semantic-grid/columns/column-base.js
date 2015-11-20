import { bindable } from "aurelia-framework";
import utility from "../utility";

const columnBase = {
	setup: function() {
		this.templatePrefix = utility.snakeCase(this.__proto__.constructor.name);
		this.heading = this.heading || utility.camelCase(this.property);
		this.grid.addColumn(this);
	}
}

export { columnBase };