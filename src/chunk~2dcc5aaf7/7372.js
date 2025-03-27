import n from "./63696.js";
import i from "./44164.js";
import a from "./98592.js";
import s from "./13144.js";
import { A as A_1 } from "./90765.js";
const o = s;

export class A extends a.A {
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
		return (
			<div className={A_1(o.EmoticonSuggestion, e.recent ? "Recent" : "")}>
				<div className={o.Emoticon}>
					<i.nl
						emoticon={e.name}
						emoticonHoverStore={this.props.emoticonHoverStore}
					/>
					{e.new && <i.iD />}
				</div>
				:{e.name}:
			</div>
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
