export class App {
	router;

	configureRouter(config, router){
    	config.title = 'Don The Dev';
    	config.map([
        // Examples
        { route: ['','examples'], name: 'examples', moduleId: './examples/examples', nav: true, title:'Aurelia Examples' },
      	{ route: 'bootstrap-checkbox-examples', name: 'bootstrap-checkbox-examples', moduleId: './examples/checkboxes/demo', nav: true, title:'Aurelia Checkbox Binding' },
        { route: 'cascading-dropdown-examples', name: 'cascading-dropdown-examples', moduleId: './examples/cascading-drop-downs/demo', nav: true, title:'Aurelia Cascading Drop Down Example' },
        { route: 'drop-down-examples', name: 'drop-down-examples', moduleId: './examples/drop-downs/demo', nav: true, title:'Aurelia Drop Downs' },
        { route: 'grid-examples', name: 'grid-examples', moduleId: './examples/grids/demo', nav: true, title:'Aurelia Grids &amp; Tables' },
        { route: 'datagrid-examples', name: 'datagrid-examples', moduleId: './examples/grids/aurelia-datagrid-demo', nav: true, title:'Aurelia Data Grid Plugin' },
      	
        // Others
        { route: 'contacts', name: 'contacts', moduleId: './contacts/list', nav: true, title:'Contacts' },
        { route: 'visitors', name: 'visitors', moduleId: './visitors/create', nav: true, title:'Create Visitor' }
    	]);

    	this.router = router;
  	}
}