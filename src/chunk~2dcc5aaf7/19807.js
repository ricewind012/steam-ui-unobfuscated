const n = {
	"./google_chrome/icon.jpg": 41396,
	"./google_chrome/library_capsule.png": 97474,
	"./google_chrome/library_hero.png": 10207,
	"./google_chrome/library_logo_transparent.png": 81137,
	"./google_chrome/store_capsule_main.png": 65214,
};

class i {
	constructor(e) {
		const t = a(e);
		return require(t);
	}

	static keys() {
		return Object.keys(n);
	}
}

function a(e) {
	if (!require.o(n, e)) {
		const t = new Error(`Cannot find module '${e}'`);
		t.code = "MODULE_NOT_FOUND";
		throw t;
	}
	return n[e];
}
i.resolve = a;
export default i;
i.id = 19807;
