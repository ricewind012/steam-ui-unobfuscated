var n;
export function fu(e) {
	if (e.startsWith("https://")) {
		return e;
	} else {
		return `https://steamloopback.host/${e}`;
	}
}
export function s$(e) {
	if (e === undefined) {
		return 30;
	}
	switch (e) {
		case 0:
			return 8;
		case 1:
			return 4;
		case 3:
			return 16;
		case 2:
			return 2;
	}
}
export function Kh(e) {
	switch (e) {
		case 8:
			return 0;
		case 4:
			return 1;
		case 16:
			return 3;
		case 2:
			return 2;
	}
}
(function (e) {
	e[(e.Loaded = 0)] = "Loaded";
	e[(e.Loading = 1)] = "Loading";
	e[(e.Complete = 2)] = "Complete";
})((n ||= {}));
