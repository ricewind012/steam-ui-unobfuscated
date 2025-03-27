import n, { sf } from "./44846.js";
import i from "./63696.js";
import a from "./1521.js";
import s from "./43780.js";
export class B extends s.Al {
	m_renderingLanguage;
	constructor(e, t, r) {
		super(e, t ?? (() => new a.R8()));
		this.m_renderingLanguage = typeof r == "string" ? sf(r) : r;
	}
	UpdateOverrideLanguage(e) {
		this.m_renderingLanguage = e;
	}
	ParseBBCode(e, t, r = false) {
		let n = 0;
		const a = this.Parse(
			e,
			(E, r, ...a) => (
				<E
					{...r}
					context={t}
					language={this.m_renderingLanguage}
					key={`bbnode_${n++}`}
				>
					{...a}
				</E>
			),
			r,
		);
		if (a.length > 1) {
			return <>{...a}</>;
		} else if (a.length == 1) {
			return a[0];
		} else {
			return null;
		}
	}
}
