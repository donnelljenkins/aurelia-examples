import { TWBootstrapViewStrategy } from "aurelia-validation";

export function configure(aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.plugin('aurelia-validation', config => {
			config.useViewStrategy(TWBootstrapViewStrategy.AppendToInput);
		});

	aurelia.start().then(a => a.setRoot());
}