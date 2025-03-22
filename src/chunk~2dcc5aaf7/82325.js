var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./8090.js");
var a = require("./1521.js");
var s = require("./16117.js");
var o = require(/*webcrack:missing*/ "./43691.js");
export class T extends n.Component {
	parser;
	constructor(e) {
		super(e);
		this.parser = new i.B(
			T.BBCodeDictionary,
			T.ElementAccumulator,
			o.TS.LANGUAGE,
		);
	}
	static ElementAccumulator() {
		return new a.OJ(new a.R8());
	}
	static BBCodeDictionary = new Map([
		...Array.from(s.W4.entries()),
		[
			"url",
			{
				Constructor: s.Cd,
				autocloses: false,
			},
		],
	]);
	render() {
		return this.parser.ParseBBCode(this.props.text, {});
	}
}
