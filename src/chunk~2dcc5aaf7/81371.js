var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./13869.js");
var a = require("./10606.js");
var s = require(/*webcrack:missing*/ "./46108.js");
export function J(e) {
	(0, i.pg)(n.createElement(l, null), e || window, {
		strTitle: (0, s.we)("#VideoError_PlaybackUnsupported"),
	});
}
const l = (e) =>
	n.createElement(a.KG, {
		strTitle: (0, s.we)("#VideoError_PlaybackUnsupported"),
		strDescription: (0, s.we)("#VideoError_PlaybackUnsupported_Description"),
		closeModal: e.closeModal,
	});
