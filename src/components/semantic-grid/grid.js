import { bindable } from "aurelia-framework";
import utility from "./utility";

export class Grid {
	@bindable datasource;

	columns = [];
	columnCount;
	gridClass;

	addColumn(column) {
		this.columns.push(column);
		this.columnCount = utility.convertNumberOfColumnsToWord(this.columns.length);
		this.gridClass = `ui ${this.columnCount} column grid`;
	}

	columnRowTemplateFilename(column) {
		return `${utility.snakeCase(column.constructor.name)}-row-template.html`;
	}
}