import { TWBootstrapViewStrategy } from "aurelia-validation";

export function configure(aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.plugin('aurelia-validation', config => config.useViewStrategy(TWBootstrapViewStrategy.AppendToInput))
		.plugin('donnelljenkins/aurelia-datagrid', config => config.defaultCssFramework = "semantic")
		.plugin('donnelljenkins/aurelia-semantic-datatable');

	aurelia.start().then(a => a.setRoot());
}