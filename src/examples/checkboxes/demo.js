import { bindable } from "aurelia-framework";
import $ from "bootstrap";

export class Demo {
	frameworks = [
		{ id: 0, name: 'Custom CSS'  },
		{ id: 1, name: 'Bootstrap'   },
		{ id: 2, name: 'Semantic UI' }];

	constructor(){
		this.selectedFramework = this.frameworks[0];
	}

	javascript = "\
export class CheckboxExamples{\n\
	frameworks = [\n\
		{ id: 0, name: 'Custom CSS'  },\n\
		{ id: 1, name: 'Bootstrap'   },\n\
		{ id: 2, name: 'Semantic UI' }];\n\
\n\
	constructor(){\n\
		this.selectedFramework = this.frameworks[0];\n\
	}\n\
}";

	html = '\
...\n\
  <div class="radio" repeat.for="framework of frameworks">\n\
    <label>\n\
      <input type="radio" name="optradio" model.one-time="framework" checked.bind="$parent.selectedFramework">\n\
      ${framework.name}\n\
    </label>\n\
  </div>\n\
...\n\
  <h4>Selected Framework</h4>\n\
...\n\
    <tr>\n\
      <td>Name</td>\n\
        <th>${selectedFramework.name}</th>\n\
    </tr>\n\
    <tr>\n\
      <td>ID</td>\n\
      <th>${selectedFramework.id}</th>\n\
    </tr>\n\
...';
}