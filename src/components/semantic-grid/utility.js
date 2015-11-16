export default class Utility {
	static addColumnToGrid(column) {
		Utility.prepareForGrid(column);
		column.grid.addColumn(column);
	}

	static prepareForGrid(column) {
		column.heading = column.heading || Utility.camelCase(column.field);
	}

	static convertNumberOfColumnsToWord(numberOfColumns) {
		switch(numberOfColumns) {
			case 1: return 'one';
			case 2: return 'two';
			case 3: return 'three';
			case 4: return 'four';
			case 5: return 'five';
			case 6: return 'six';
			case 7: return 'seven';
			case 8: return 'eight';
			case 9: return 'nine';
			case 10: return 'ten';
			default: return '';
		}
	}

	static camelCase(text) {
		return text.replace(/\w\S*/g, (txt) => { 
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}

	static snakeCase(text) {
		let firstCharacter = text.slice(0, 1);
		let snakeCaseEnd = text.slice(1).replace(/([A-Z])/g, "-$1").toLowerCase();
		return `${firstCharacter + snakeCaseEnd}`;
	}
}