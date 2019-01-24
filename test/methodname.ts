type Mapping = (value: string) => void

class Origin {
	constructor() {
		this.init();
	}

	init() {
		for (let fieldName in this) {
			console.log(fieldName);
			const method = this[fieldName];

			//method.call(this, 'a', 'b')
		}
	}
}

class A extends Origin{
	methodA() {
		console.log('Called Method A');
	}

	methodB() {
		console.log('Called Method B');
	}

	methodC() {
		console.log('Called Method C');
	}

	methodD(a: string) {
		console.log(`Called Method D = ${a}`);
	}

	methodE(a: string, b: string) {
		console.log(`Called Method E = ${a}, ${b}`);
	}
}

let a = new A();