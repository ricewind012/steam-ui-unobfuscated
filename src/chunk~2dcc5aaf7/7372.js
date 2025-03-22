var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./44164.js");
var a = require("./98592.js");
var s = require("./13144.js");
var o = s;
var l = require(/*webcrack:missing*/ "./90765.js");
class c extends a.A {
	performSearch(e) {
		return this.props.emoticonStore.SearchEmoticons(e, 10, false);
	}
	getSelection(e) {
		return e.name;
	}
	getKey(e) {
		return e.name;
	}
	renderMatch(e) {
		return n.createElement(
			"div",
			{
				className: (0, l.A)(o.EmoticonSuggestion, e.recent ? "Recent" : ""),
			},
			n.createElement(
				"div",
				{
					className: o.Emoticon,
				},
				n.createElement(i.nl, {
					emoticon: e.name,
					emoticonHoverStore: this.props.emoticonHoverStore,
				}),
				e.new && n.createElement(i.iD, null),
			),
			":",
			e.name,
			":",
		);
	}
	renderNoMatchMessage() {
		return null;
	}
	renderTooManyMatchesMessage(e) {
		return null;
	}
	renderHeader() {
		return null;
	}
	getMaxMatches() {
		return Number.MAX_VALUE;
	}
}
export const A = c;
