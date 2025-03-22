var n = {
	"./steamui_arabic.json": [46564, 2889],
	"./steamui_brazilian.json": [41390, 3087],
	"./steamui_bulgarian.json": [16869, 5864],
	"./steamui_czech.json": [30199, 6890],
	"./steamui_danish.json": [3497, 9368],
	"./steamui_dutch.json": [8826, 2263],
	"./steamui_english.json": [55952, 3569],
	"./steamui_finnish.json": [60187, 106],
	"./steamui_french.json": [50344, 4321],
	"./steamui_german.json": [67830, 9887],
	"./steamui_greek.json": [38812, 7533],
	"./steamui_hungarian.json": [40569, 740],
	"./steamui_indonesian.json": [26864, 3869],
	"./steamui_italian.json": [93920, 2761],
	"./steamui_japanese.json": [57111, 2646],
	"./steamui_koreana.json": [56399, 1478],
	"./steamui_latam.json": [40103, 1822],
	"./steamui_norwegian.json": [90520, 1005],
	"./steamui_polish.json": [53873, 5592],
	"./steamui_portuguese.json": [44597, 5716],
	"./steamui_romanian.json": [78395, 8534],
	"./steamui_russian.json": [79945, 7836],
	"./steamui_sc_schinese.json": [36083, 3366],
	"./steamui_schinese.json": [63012, 901],
	"./steamui_spanish.json": [54968, 297],
	"./steamui_swedish.json": [49673, 2880],
	"./steamui_tchinese.json": [80415, 8830],
	"./steamui_thai.json": [58974, 9171],
	"./steamui_turkish.json": [5376, 4481],
	"./steamui_ukrainian.json": [72806, 1463],
	"./steamui_vietnamese.json": [92767, 2438],
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
i.id = 61800;
module.exports = i;
