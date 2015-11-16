import $ from "bootstrap";

export class Demo {
	html = '\
<template>\n \
	<require from="./cascading-drop-downs"></require>\n \
	<require from="./drop-down"></require>\n \
\n \
	<cascading-drop-downs>\n \
		<template replace-part="drop-downs">\n \
			<drop-down \n \
				title="Classifications"\n \
				items.bind="viewModel.classes"\n \
				selected.bind="viewModel.selectedClass"\n \
				handle-selected.bind="viewModel.classChanged"\n \
				visible.bind="true">\n \
			</drop-down>\n \
			<drop-down\n \
				title="Genders"\n \
				items.bind="viewModel.genders"\n \
				selected.bind="viewModel.selectedGender"\n \
				handle-selected.bind="viewModel.genderChanged"\n \
				visible.bind="!!viewModel.selectedClass">\n \
			</drop-down>\n \
			<drop-down \n \
				title="People"\n \
				items.bind="viewModel.people"\n \
				selected.bind="viewModel.selectedPerson"\n \
				visible.bind="!!viewModel.selectedGender">\n \
			</drop-down>\n \
		</template>\n \
	</cascading-drop-downs>\n \
</template>';

	javascript = "\
import { bindable } from \"aurelia-framework\";\n\
import { getClassifications, getGenders, getPeople } from \"./cascading_dropdown_db\";\n \
\n \
export class CascadingDropdownExample{\n \
	classes = [];\n \
	genders = [];\n \
	people = [];\n \
	@bindable selectedClass = null;\n \
	@bindable selectedGender = null;\n \
	@bindable selectedPerson = null;\n \
\n \
	attached(){\n \
		return this.getClasses();\n \
	}\n \
\n \
	getClasses(){\n \
		this.classes.length = 0;\n \
		return getClassifications()\n \
			.then(items => {\n \
				this.classes.push('');\n \
				items.forEach(item => this.classes.push(item));\n \
			});\n \
	}\n \
\n \
	classChanged = (newValue) => {\n \
		this.selectedClass = newValue;\n \
		this.selectedGender = null;\n \
		this.getGenders();\n \
	}\n \
\n \
	getGenders(){\n \
		this.genders.length = 0;\n \
		if(this.selectedClass){\n \
			return getGenders(this.selectedClass)\n \
				.then(items => {\n \
					this.genders.push('');\n \
					items.forEach(item => this.genders.push(item));\n \
				});\n \
		}\n \
	}\n \
\n \
	genderChanged = (newValue) => {\n \
		this.selectedGender = newValue;\n \
		this.getPeople();\n \
	}\n \
\n \
	getPeople(){\n \
		this.people.length = 0;\n \
		if(this.selectedClass &amp;&amp; this.selectedGender){\n \
			return getPeople(this.selectedClass, this.selectedGender)\n \
				.then(items => {\n \
					this.people.push('');\n \
					items.forEach(item => this.people.push(item));\n \
				});\n \
		}\n \
	}\n \
}";
}