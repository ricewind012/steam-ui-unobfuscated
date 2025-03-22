var n = {
	"./shared_arabic.json": [77134, 4102],
	"./shared_brazilian.json": [72696, 3594],
	"./shared_bulgarian.json": [887, 2481],
	"./shared_czech.json": [6029, 1423],
	"./shared_danish.json": [7311, 8291],
	"./shared_dutch.json": [93368, 6430],
	"./shared_english.json": [89358, 2664],
	"./shared_finnish.json": [37117, 2199],
	"./shared_french.json": [77038, 8674],
	"./shared_german.json": [89056, 6888],
	"./shared_greek.json": [36290, 8872],
	"./shared_hungarian.json": [48403, 9053],
	"./shared_indonesian.json": [18178, 8522],
	"./shared_italian.json": [45582, 7696],
	"./shared_japanese.json": [83745, 1389],
	"./shared_koreana.json": [87145, 139],
	"./shared_latam.json": [29169, 5803],
	"./shared_norwegian.json": [63194, 6120],
	"./shared_polish.json": [47055, 2959],
	"./shared_portuguese.json": [8835, 823],
	"./shared_romanian.json": [78041, 2021],
	"./shared_russian.json": [75483, 6577],
	"./shared_sc_schinese.json": [70670, 8443],
	"./shared_schinese.json": [13074, 7442],
	"./shared_spanish.json": [67150, 6752],
	"./shared_swedish.json": [6359, 129],
	"./shared_tchinese.json": [25441, 5553],
	"./shared_thai.json": [91276, 4952],
	"./shared_turkish.json": [56062, 6472],
	"./shared_ukrainian.json": [16424, 9298],
	"./shared_vietnamese.json": [79889, 9869],
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
i.id = 32290;
module.exports = i;
