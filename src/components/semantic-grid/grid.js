import { bindable } from "aurelia-framework";
import utility from "./utility";

export class Grid {
	@bindable datasource;
	columns = [];

	addColumn(column) {
		this.columns.push(column);
	}

	columnRowTemplateFilename(column) {
		return `${utility.snakeCase(column.constructor.name)}-row-template.html`;
	}
}