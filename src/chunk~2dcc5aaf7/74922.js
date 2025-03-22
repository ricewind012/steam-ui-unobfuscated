var n = {
	"./reducedui_english.json": [9318, 4175],
	"./reducedui_sc_schinese.json": [14201, 3180],
};
function i(e) {
	if (!require.o(n, e)) {
		return Promise.resolve().then(() => {
			var t = new Error("Cannot find module '" + e + "'");
			t.code = "MODULE_NOT_FOUND";
			throw t;
		});
	}
	var t = n[e];
	var i = t[0];
	return require.e(t[1]).then(() => require.t(i, 19));
}
i.keys = () => Object.keys(n);
i.id = 74922;
module.exports = i;
