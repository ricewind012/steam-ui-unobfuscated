// Webpack module ID: 85688 & 49455

export function AssertMsg(test: boolean, message: string, ...args: any[]) {
	if (console.assert) {
		if (args.length == 0) {
			console.assert(!!test, message);
		} else {
			console.assert(!!test, message, ...args);
		}
	} else if (!test) {
		// console.assert is not available in react builds
		console.warn(message, ...args);
	}
}

export function FailAssertion(param0, message: string, ...args: any[]) {
	AssertMsg(false, message, ...args);
}
