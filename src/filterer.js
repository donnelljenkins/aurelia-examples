export class Filterer {
	applyFilter(filter, allItems, filteredItems) {
		filteredItems.splice(0, filteredItems.length);
		allItems.forEach(item => {
			if(this.objectMeetsFilter(filter, item)){
				filteredItems.push(item);
			}
		});
	}

	objectMeetsFilter(filter, item) {
		if(filter) {
			let criteria = filter.toLowerCase();
			for(let property in item) {
				if(this.filterableProperty(property, item)) {
					let met = this.propertyMeetsCriteria(criteria, item[property]);
					if(met) return true;
				}
			}
			return false;
		}
		return true;
	}

	filterableProperty(property, item){
		return item.hasOwnProperty(property) 
			&& !property.startsWith('_')
			&& property != 'id';
	}

	propertyMeetsCriteria(criteria, property) {
		if(Array.isArray(property)) {
			for(let i = 0; i < property.length; i++) {
				let metCriteria = this.propertyMeetsCriteria(criteria, property[i]);
				if(metCriteria) return true;
			}
		} else if(typeof(property) === 'object'){
			return this.objectMeetsFilter(criteria, property);
		} else {			
			let propertyValueAsString = property.toString().toLowerCase();
			let metCriteria = propertyValueAsString.startsWith(criteria);		
			if(metCriteria) return true;
		}

		return false;
	}
}