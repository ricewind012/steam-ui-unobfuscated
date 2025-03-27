import n from "./63696.js";
import i from "./8090.js";
import a from "./1521.js";
import s from "./16117.js";
import o from "./43691.js";
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
