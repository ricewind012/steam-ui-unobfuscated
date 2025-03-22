var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require("./48214.js");
var l = o;
var c = require(/*webcrack:missing*/ "./90765.js");
class m extends i.Component {
	m_strLastSearch;
	m_rgCurrentMatches = [];
	m_mapMatchByKey = new Map();
	containerRef = i.createRef();
	constructor(e) {
		super(e);
		this.m_hMobxSearchDisposer = (0, a.fm)(async () => {
			await this.UpdateSearchResults(this.props.strSearch);
			this.forceUpdate();
		});
		this.state = {
			selectedIndex: undefined,
		};
	}
	OnKeyDown(e) {
		if (this.BHandleKeyPress(e.keyCode)) {
			e.preventDefault();
		}
	}
	BHandleKeyPress(e) {
		switch (e) {
			case 38:
				this.SetSelectedIndexDelta(-1);
				break;
			case 40:
				this.SetSelectedIndexDelta(1);
				break;
			case 36:
				this.SetSelectedIndex(0);
				break;
			case 33:
				this.SetSelectedIndexDelta(-this.GetPageSize());
				break;
			case 35:
				this.SetSelectedIndex(-1);
				break;
			case 34:
				this.SetSelectedIndexDelta(this.GetPageSize());
				break;
			case 13:
			case 9:
				if (this.state.selectedIndex === undefined) {
					this.props.onSuggestionSelected(this.props.strSearch);
					return false;
				}
				this.ChooseSuggestion(
					this.m_rgCurrentMatches[this.state.selectedIndex],
				);
				break;
			case 27:
				this.props.onSuggestionSelected(this.props.strSearch);
				break;
			default:
				return false;
		}
		return true;
	}
	GetPageSize() {
		let e = this.containerRef.current;
		let t = e && e.firstElementChild;
		let r = this.m_rgCurrentMatches.length;
		if (r > this.getMaxMatches()) {
			r = this.getMaxMatches();
		}
		if (t && r) {
			let e = t.scrollHeight / r;
			let n = t.clientHeight / e;
			return Math.max(1, Math.floor(n));
		}
		return 5;
	}
	ChooseSuggestion(e) {
		this.props.onSuggestionSelected(
			this.props.strSearch,
			e ? this.getSelection(e) : undefined,
		);
	}
	SetSelectedIndexDelta(e) {
		if (this.state.selectedIndex !== undefined) {
			this.SetSelectedIndex(this.state.selectedIndex + e);
		} else {
			this.SetSelectedIndex(e === 1 ? 0 : e);
		}
	}
	SetSelectedIndex(e) {
		if (!this.m_rgCurrentMatches.length) {
			return;
		}
		let t = this.m_rgCurrentMatches.length;
		if (t > this.getMaxMatches()) {
			t = this.getMaxMatches();
		}
		if ((e %= t) < 0) {
			e += t;
		}
		this.setState({
			selectedIndex: e,
		});
	}
	FindKeyIndex(e) {
		if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length) {
			for (let e = 0; e < this.m_rgCurrentMatches.length; e++) {
				this.m_mapMatchByKey.set(this.getKey(this.m_rgCurrentMatches[e]), e);
			}
		}
		return this.m_mapMatchByKey.get(e);
	}
	OnClickSuggestion(e) {
		let t = this.FindKeyIndex(e);
		if (t !== undefined) {
			this.ChooseSuggestion(this.m_rgCurrentMatches[t]);
		}
	}
	OnMouseOverSuggestion(e) {
		let t = this.FindKeyIndex(e);
		if (t !== undefined) {
			this.SetSelectedIndex(t);
		}
	}
	BindSelectedElement(e) {
		if (!e) {
			return;
		}
		let t = this.containerRef.current;
		let r = e.containerRef.current;
		let n = t && t.firstElementChild;
		if (
			r &&
			n &&
			(n.scrollTop + n.clientHeight < r.offsetTop || r.offsetTop < n.scrollTop)
		) {
			r.scrollIntoView();
		}
	}
	async UpdateSearchResults(e) {
		this.m_rgCurrentMatches = await this.performSearch(e);
		this.m_strLastSearch = e;
		this.m_mapMatchByKey.clear();
		if (this.m_rgCurrentMatches.length) {
			if (this.state && this.state.selectedIndex !== undefined) {
				if (this.state.selectedIndex >= this.m_rgCurrentMatches.length) {
					this.setState({
						selectedIndex: 0,
					});
				}
			} else if (
				this.props.nMinimumSearchLengthBeforeAutoSelection === undefined ||
				e.length >= this.props.nMinimumSearchLengthBeforeAutoSelection
			) {
				this.setState({
					selectedIndex: 0,
				});
			}
		} else if (this.state && this.state.selectedIndex !== undefined) {
			this.setState({
				selectedIndex: undefined,
			});
		}
	}
	m_hMobxSearchDisposer;
	componentWillUnmount() {
		if (this.m_hMobxSearchDisposer) {
			this.m_hMobxSearchDisposer();
			this.m_hMobxSearchDisposer = undefined;
		}
	}
	async componentDidUpdate(e) {
		if (this.m_strLastSearch != this.props.strSearch) {
			await this.UpdateSearchResults(this.props.strSearch);
			this.forceUpdate();
		}
	}
	render() {
		let e = [];
		if (this.m_rgCurrentMatches.length) {
			let t = this.getMaxMatches();
			for (let r = 0; r < Math.min(t, this.m_rgCurrentMatches.length); r++) {
				let t = this.m_rgCurrentMatches[r];
				let n = this.getKey(t);
				let a = r === this.state.selectedIndex;
				e.push(
					i.createElement(
						u,
						{
							key: n,
							matchKey: n,
							fnOnClick: this.OnClickSuggestion,
							fnOnMouseOver: this.OnMouseOverSuggestion,
							bIsSelected: a,
							ref: a ? this.BindSelectedElement : undefined,
						},
						this.renderMatch(t),
					),
				);
			}
			if (this.m_rgCurrentMatches.length > t) {
				e.push(
					this.renderTooManyMatchesMessage(this.m_rgCurrentMatches.length - t),
				);
			}
		} else {
			let t = this.renderNoMatchMessage();
			if (!t) {
				return null;
			}
			e.push(t);
		}
		return i.createElement(
			"div",
			{
				className: l.mentionDialogPosition,
				ref: this.containerRef,
			},
			i.createElement(
				"div",
				{
					className: l.mentionDialog,
					tabIndex: 0,
					onKeyDown: this.OnKeyDown,
				},
				this.renderHeader(),
				e,
			),
		);
	}
}
(0, n.Cg)([s.oI], m.prototype, "OnKeyDown", null);
(0, n.Cg)([s.oI], m.prototype, "OnClickSuggestion", null);
(0, n.Cg)([s.oI], m.prototype, "OnMouseOverSuggestion", null);
(0, n.Cg)([s.oI], m.prototype, "BindSelectedElement", null);
class u extends i.PureComponent {
	containerRef = i.createRef();
	OnMouseOver(e) {
		this.props.fnOnMouseOver(this.props.matchKey);
	}
	OnClick(e) {
		this.props.fnOnClick(this.props.matchKey);
	}
	render() {
		return i.createElement(
			"div",
			{
				className: (0, c.A)(
					l.suggestOption,
					l.mentionSearchOption,
					this.props.bIsSelected ? l.selected : "",
				),
				onMouseEnter: this.OnMouseOver,
				onClick: this.OnClick,
				ref: this.containerRef,
			},
			this.props.children,
		);
	}
}
(0, n.Cg)([s.oI], u.prototype, "OnMouseOver", null);
(0, n.Cg)([s.oI], u.prototype, "OnClick", null);
export const A = m;
