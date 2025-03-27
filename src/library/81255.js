export function s(e, t = true) {
	return (n, r, i) => {
		const i_value = i.value;
		i.value = function (...n) {
			let i = this[`${r}_DebounceProperties`];
			if (i === undefined) {
				i = this[`${r}_DebounceProperties`] = {
					hTimer: undefined,
					nPending: 0,
				};
			}
			if (i.hTimer === undefined) {
				if (t) {
					i_value.apply(this, n);
				} else {
					i.nPending += 1;
				}
				i.hTimer = window.setInterval(() => {
					if (i.nPending > 0) {
						i_value.apply(this, n);
						i.nPending = 0;
					} else {
						window.clearInterval(i.hTimer);
						i.hTimer = undefined;
					}
				}, e);
			} else {
				i.nPending += 1;
			}
		};
	};
}
