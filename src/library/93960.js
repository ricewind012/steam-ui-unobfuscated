export function o(e, t, n) {
	return {
		get() {
			let e = n.value.bind(this);
			if (!Object.prototype.hasOwnProperty.call(this, t)) {
				Object.defineProperty(this, t, {
					value: e,
				});
			}
			return e;
		},
	};
}
