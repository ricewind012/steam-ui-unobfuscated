export function s(e, t = true) {
	return function (n, r, i) {
		const s = i.value;
		i.value = function (...n) {
			let i = this[r + "_DebounceProperties"];
			if (i === undefined) {
				i = this[r + "_DebounceProperties"] = {
					hTimer: undefined,
					nPending: 0,
				};
			}
			if (i.hTimer === undefined) {
				if (t) {
					s.apply(this, n);
				} else {
					i.nPending += 1;
				}
				i.hTimer = window.setInterval(() => {
					if (i.nPending > 0) {
						s.apply(this, n);
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
