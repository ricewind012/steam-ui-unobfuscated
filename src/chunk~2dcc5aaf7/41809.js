const n = {
	"./steampops_brazilian.json": [49321, 8545],
	"./steampops_bulgarian.json": [39442, 9418],
	"./steampops_czech.json": [93372, 7376],
	"./steampops_danish.json": [17040, 8054],
	"./steampops_dutch.json": [71661, 5173],
	"./steampops_english.json": [4971, 9063],
	"./steampops_finnish.json": [15940, 7316],
	"./steampops_french.json": [30705, 8495],
	"./steampops_german.json": [37003, 7569],
	"./steampops_greek.json": [60475, 1275],
	"./steampops_hungarian.json": [58510, 2862],
	"./steampops_indonesian.json": [59145, 3583],
	"./steampops_italian.json": [95603, 7151],
	"./steampops_japanese.json": [47614, 5704],
	"./steampops_koreana.json": [44952, 2984],
	"./steampops_latam.json": [13048, 2448],
	"./steampops_norwegian.json": [2955, 9711],
	"./steampops_polish.json": [8092, 9134],
	"./steampops_portuguese.json": [50628, 7770],
	"./steampops_romanian.json": [29830, 1012],
	"./steampops_russian.json": [47746, 8286],
	"./steampops_schinese.json": [85633, 4139],
	"./steampops_spanish.json": [60355, 4839],
	"./steampops_swedish.json": [66722, 3350],
	"./steampops_tchinese.json": [57554, 2952],
	"./steampops_thai.json": [39867, 6785],
	"./steampops_turkish.json": [85883, 1879],
	"./steampops_ukrainian.json": [67073, 2225],
	"./steampops_vietnamese.json": [97438, 7824],
};
function i(e) {
	if (!require.o(n, e)) {
		return Promise.resolve().then(() => {
			const t = new Error(`Cannot find module '${e}'`);
			t.code = "MODULE_NOT_FOUND";
			throw t;
		});
	}
	const n_e = n[e];
	const [i] = n_e;
	return require.e(n_e[1]).then(() => require.t(i, 19));
}
i.keys = () => Object.keys(n);
i.id = 41809;
export default i;
