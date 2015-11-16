export class PhoneValueConverter {
	toView(value) {
		if(value){
			return value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
		}

		return value;
	}
}