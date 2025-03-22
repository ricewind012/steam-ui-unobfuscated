var n = {
	"./friendsui_arabic.json": [52101, 8478],
	"./friendsui_brazilian.json": [68857, 7314],
	"./friendsui_bulgarian.json": [11170, 6409],
	"./friendsui_czech.json": [36268, 1511],
	"./friendsui_danish.json": [88448, 8699],
	"./friendsui_dutch.json": [93501, 9462],
	"./friendsui_english.json": [12987, 2320],
	"./friendsui_finnish.json": [64724, 8159],
	"./friendsui_french.json": [43649, 4842],
	"./friendsui_german.json": [73115, 1648],
	"./friendsui_greek.json": [67883, 2640],
	"./friendsui_hungarian.json": [7614, 1093],
	"./friendsui_indonesian.json": [94521, 786],
	"./friendsui_italian.json": [96803, 8280],
	"./friendsui_japanese.json": [74190, 1573],
	"./friendsui_koreana.json": [2952, 7155],
	"./friendsui_latam.json": [20552, 2867],
	"./friendsui_norwegian.json": [12411, 6896],
	"./friendsui_polish.json": [70124, 8263],
	"./friendsui_portuguese.json": [76852, 2783],
	"./friendsui_romanian.json": [88982, 8445],
	"./friendsui_russian.json": [45234, 7993],
	"./friendsui_sc_schinese.json": [21048, 2611],
	"./friendsui_schinese.json": [25137, 2266],
	"./friendsui_spanish.json": [50579, 2056],
	"./friendsui_swedish.json": [49394, 6345],
	"./friendsui_tchinese.json": [78498, 89],
	"./friendsui_thai.json": [45899, 4224],
	"./friendsui_turkish.json": [67115, 48],
	"./friendsui_ukrainian.json": [94801, 4026],
	"./friendsui_vietnamese.json": [70382, 6197],
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
i.id = 91525;
module.exports = i;
