import { computedFrom, inject } from "aurelia-framework";
import { DataService } from "../services/data-service";
import { VisitorModel } from "./visitor-model";
import { VisitorValidator } from "./visitor-validator";

@inject(DataService, VisitorValidator)
export class Create {
	visitor = new VisitorModel();

	constructor(dataService, validator) {
		this.dataService = dataService;
		this.validator = validator;
	}

	activate() {
		this.addVisitorCertification();
		this.validator.on(this.visitor);
		return this.loadDropDowns();
	}

	addVisitorCertification() {
		this.visitor.certifications.push({ certificationId : "" });
	}

	deleteVisitorCertification(index) {
		this.visitor.certifications.splice(index, 1);
	}

	loadDropDowns() {
		return new Promise((resolve, reject) => {
			let count = 0;
			this.dataService.getCertifications().then(data => {
				this.certifications = data;
				if(++count === 4) resolve();
			});

			this.dataService.getClientSteps().then(data => {
				this.clientSteps = data;
				if(++count === 4) resolve();
			});

			this.dataService.getClientTypes().then(data => {
				this.clientTypes = data;
				if(++count === 4) resolve();
			});

			this.dataService.getCraftCategories().then(data => {
				this.craftCategories = data;
				if(++count === 4) resolve();
			});
		});
	}

	addVisitor() {
		this.validator.validate().then(() => {
			this.visitorChanged = !this.visitorChanged;
			this.addedVisitor = true;
		});
	}

	visitorChanged = false;

	@computedFrom('visitorChanged')
	get visitorInformation() {
		return JSON.stringify(this.visitor, null, 4);
	}
}