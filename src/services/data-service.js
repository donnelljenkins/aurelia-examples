export class DataService {
	getCertifications() {
		return this.load(this.certifications);
	}

	getClientSteps() {
		return this.load(this.clientSteps);
	}

	getClientTypes() {
		return this.load(this.clientTypes);
	}

	getCraftCategories() {
		return this.load(this.craftCategories);
	}

	getContacts() {
		return this.load(this.contacts);
	}

	getDropdownSamples() {
		return this.load(this.dropdownSamples);
	}

	getGridSamples() {
		return this.load(this.gridSamples);
	}

	load(data) {
		return new Promise((resolve, reject) => {
			resolve(data);
		});
	}

	certifications = [{ id: 1, name: 'NCCER'}, { id: 2, name: 'NCCER Plus'}];
	clientSteps = [{ id: 1, name: 'A'},{ id: 2, name: 'B'},{ id: 3, name: 'C'},{ id: 4, name: 'I'},{ id: 5, name: 'II'},{ id: 6, name: 'III'},{ id: 7, name: 'IV'}];
	clientTypes = [{ id: 1, name: 'Welder'},{ id: 2, name: 'Boiler Maker'},{ id: 3, name: 'Fire Watch'},{ id: 4, name: 'Hole Watch'}];
	contacts = [
	{
		"id": 0,
		"first" : "Donnell",
		"last" : "Jenkins",
		"phones" : [
			{
				"number" : "2255551234",
				"type" : "cell"
			}
		],
		"address" : {
			"street1" : "123 Main Street",
			"street2" : "",
			"city" : "Baton Rouge",
			"state" : "LA",
			"zip" : "70815"
		}
	},
	{
		"id": 1,
		"first" : "Jennifer",
		"last" : "Jenkins",
		"phones" : [
			{
				"number" : "2255555678",
				"type" : "home"
			}
		],
		"address" : {
			"street1" : "345 Second Street",
			"street2" : "",
			"city" : "Baton Rouge",
			"state" : "LA",
			"zip" : "70816"
		}
	},
	{
		"id": 2,
		"first" : "Forest",
		"last" : "Marie",
		"phones" : [
			{
				"number" : "2255554444",
				"type" : "cell"
			},
			{
				"number" : "2255556666",
				"type" : "home"
			}
		],
		"address" : {
			"street1" : "345 Scrum Avenue",
			"street2" : "PO 112",
			"city" : "New Orleans",
			"state" : "LA",
			"zip" : "77777"
		}
	},
	{
		"id": 3,
		"first" : "Shawn",
		"last" : "Choleva",
		"phones" : [
			{
				"number" : "2255551111",
				"type" : "cell"
			}
		],
		"address" : {
			"street1" : "1 SE Lane",
			"street2" : "",
			"city" : "Hammond",
			"state" : "LA",
			"zip" : "66666"
		}
	}];
	craftCategories = [{ id: 1, name: 'Craft/Other'},{ id: 2, name: 'Welding'},{ id: 3, name: 'Electrical'}];
	dropdownSamples = [{id: 1, name: "First"},{id: 2, name: "Second"},{id: 3, name: "Third"},{id: 4, name: "Fourth"},{id: 5, name: "Fifth"},{id: 6, name: "Sixth"}];
	gridSamples = [
		{id: 1, name: 'First', title: '1st', active: true},
		{id: 2, name: 'Second', title: '2nd', active: true},
		{id: 3, name: 'Third', title: '3rd', active: false},
		{id: 4, name: 'Fourth', title: '4th', active: true},
		{id: 5, name: 'Fifth', title: '5th', active: false},
		{id: 6, name: 'Sixth', title: '6th', active: true}
	];
}