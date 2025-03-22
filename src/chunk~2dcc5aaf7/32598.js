var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./77347.js");
var a = require("./48289.js");
var s = require("./61175.js");
var o = require(/*webcrack:missing*/ "./41230.js");
var l = require(/*webcrack:missing*/ "./63696.js");
var c = require(/*webcrack:missing*/ "./88750.js");
var m = require("./64608.js");
var u = require("./35488.js");
var d = require(/*webcrack:missing*/ "./50376.js");
var A = require(/*webcrack:missing*/ "./98995.js");
var p = require(/*webcrack:missing*/ "./90765.js");
var g = require(/*webcrack:missing*/ "./54644.js");
var h = require(/*webcrack:missing*/ "./46108.js");
var C = require(/*webcrack:missing*/ "./52451.js");
var _ = require("./14629.js");
var f = require("./48866.js");
var b = require("./34348.js");
var y = b;
let S = class extends l.Component {
	GetTooltipText(e, t) {
		if (t) {
			return t;
		}
		switch (e.eGroup) {
			case 2:
			case 1:
				return "#FilterElement_Tooltip_" + (0, _.$P)(e.eGroup, e.option);
			case 4:
				return (0, h.we)("#FilterElement_Tooltip_StoreTag", e.name);
			case 6:
				let t;
				t = i.OQ.Get().hasSteamConnection
					? (0, h.we)("#FilterElement_Tooltip_FriendLibrary", e.name)
					: (0, h.we)("#FilterElement_Tooltip_FriendLibrary_Offline", e.name);
				if ((0, _.Qv)(e.eGroup, e.option)) {
					return l.createElement(
						l.Fragment,
						null,
						l.createElement(
							"span",
							{
								className: y.FiltertagUsername,
							},
							t,
						),
						l.createElement(
							"span",
							{
								className: y.Asterisk,
							},
							"*",
						),
					);
				} else {
					return t;
				}
		}
		return e.name;
	}
	render() {
		const e = this.props;
		let t;
		let r;
		let n = false;
		let i = e.name;
		const s = (0, _.Qv)(e.eGroup, e.option);
		if (e.eGroup === 6) {
			t =
				a.O$.IsLibraryAccessDenied(e.option) &&
				(0, h.we)("#FilterElement_Tooltip_FriendLibrary_AccessDenied");
			o = e.option;
			r = a.O$.GetFriendState(o).persona.avatar_url;
			n = true;
		}
		var o;
		return l.createElement(
			A.he,
			{
				toolTipContent: this.GetTooltipText(e, t),
				direction: "bottom",
				key: `${e.eGroup}-${e.option}`,
				className: (0, p.A)(y.FilterTag, t && y.Error),
			},
			l.createElement("div", {
				className: y.FiltertagSpacer,
			}),
			r &&
				l.createElement(
					"div",
					{
						className: y.FiltertagAvatarSpacer,
					},
					" ",
					l.createElement("img", {
						src: r,
						width: 18,
						height: 18,
					}),
					" ",
				),
			l.createElement(
				"div",
				{
					className: (0, p.A)(n && y.FiltertagUsername),
				},
				i,
			),
			s &&
				l.createElement(
					"div",
					{
						className: y.Asterisk,
					},
					"*",
				),
			this.props.onClick &&
				l.createElement(
					"div",
					{
						onClick: this.props.onClick,
					},
					l.createElement(d.sED, null),
				),
			l.createElement("div", {
				className: y.FiltertagSpacer,
			}),
		);
	}
};
export function wf(e, t, r) {
	let n = e.GetAllSelectedOptions();
	if (t) {
		n = n.filter((e) => e.eGroup == t);
	}
	if (n.length == 0) {
		return null;
	} else {
		return n.map((t) =>
			l.createElement(S, {
				key: `${t.eGroup}-${t.option}`,
				...t,
				onClick: r
					? () => {
							r(e, t.eGroup, t.option);
						}
					: undefined,
			}),
		);
	}
}
S = (0, n.Cg)([o.PA], S);
export let ye = class extends l.Component {
	m_searchInputRef = l.createRef();
	m_containerDivRef = l.createRef();
	state = {
		bTextSearchHasFocus: false,
	};
	FocusOnSearch() {
		if (
			this.m_searchInputRef.current &&
			this.m_searchInputRef.current.element
		) {
			this.m_searchInputRef.current.element.focus();
			this.m_searchInputRef.current.element.select();
		}
	}
	BIsFocused() {
		return (
			this.m_containerDivRef.current &&
			(0, g.TN)(
				this.m_containerDivRef.current,
				this.m_containerDivRef.current.ownerDocument.activeElement,
			)
		);
	}
	OpenAdvancedSearch() {
		if (!s.n6.BIsTextSearchActive()) {
			s.n6.SetSearchByTypePaneOpen(true);
		}
	}
	CloseAdvancedSearch() {
		s.n6.SetSearchByTypePaneOpen(false);
	}
	OnKeyDown(e) {
		if (e.keyCode == 27) {
			s.n6.ExitSearch();
			this.m_containerDivRef.current.focus();
		}
	}
	OnTextChanged(e) {
		s.n6.SetSearchText(e.target.value);
	}
	OnTextSearchFocused(e) {
		this.setState({
			bTextSearchHasFocus: true,
		});
	}
	OnTextSearchBlur(e) {
		this.setState({
			bTextSearchHasFocus: false,
		});
	}
	OnFilterChange(e) {
		if (s.n6.BIsSearchActive()) {
			if (e.bIsEmpty) {
				s.n6.ResetSearch();
			}
		} else {
			s.n6.StartSearchByType(e);
		}
	}
	OnClearFilterTagClick(e, t, r) {
		e.SelectOption(t, r, false);
		this.OnFilterChange(e);
	}
	render() {
		const e = s.n6.currentAppFilter.searchText || "";
		const t = !s.n6.BIsSearchByTypePaneOpen() && !s.n6.BIsSearchByTypeActive();
		const r = !s.n6.BIsTextSearchActive();
		const n = s.n6.BIsSearchActive() ? s.n6.currentAppFilter : new _.E6();
		return l.createElement(
			"div",
			{
				className: (0, p.A)(y.Container, !t && y.ContainerHide),
				onKeyDown: this.OnKeyDown,
				ref: this.m_containerDivRef,
				tabIndex: -1,
			},
			l.createElement(
				"div",
				{
					className: y.SearchInput,
				},
				t &&
					l.createElement(m.pd, {
						ref: this.m_searchInputRef,
						placeholder: (0, h.we)("#FilterEdit_SearchPrompt"),
						value: e,
						onChange: this.OnTextChanged,
						onFocus: this.OnTextSearchFocused,
						onBlur: this.OnTextSearchBlur,
						onContextMenu: c.aE,
						bShowClearAction: true,
						bAlwaysShowClearAction: this.state.bTextSearchHasFocus,
					}),
				!t &&
					l.createElement(
						"div",
						{
							className: y.SearchFilterInput,
						},
						wf(n, undefined, this.OnClearFilterTagClick) ??
							l.createElement(
								"div",
								{
									key: "prompt",
									className: y.SearchByTypePrompt,
								},
								(0, h.we)("#AdvancedSearch_PaneTitle"),
							),
						l.createElement(
							"div",
							{
								className: y.SearchFilterInputClear,
								onClick: s.n6.ExitSearch,
							},
							l.createElement(d.sED, null),
						),
					),
			),
			!this.props.bSmallMode &&
				l.createElement(
					"div",
					{
						className: (0, p.A)(
							y.AdvancedSearchContainer,
							!r && y.Disabled,
							s.n6.BIsSearchByTypePaneOpen() && y.Extended,
						),
					},
					l.createElement(
						A.he,
						{
							toolTipContent: (0, h.we)("#FilterEdit_AdvancedTooltip"),
						},
						l.createElement(
							"div",
							{
								className: (0, p.A)(
									y.AdvancedSearchButton,
									s.n6.BIsSearchByTypeActive() && y.Active,
								),
								onClick: this.OpenAdvancedSearch,
							},
							l.createElement("div", null, l.createElement(u.Filter, null)),
						),
					),
					l.createElement(
						"div",
						{
							className: (0, p.A)(
								y.AdvancedSearchPaneContainer,
								s.n6.BIsSearchByTypePaneOpen() && y.Visible,
							),
						},
						l.createElement("div", {
							className: y.AdvancedSearchDismissalOverlay,
							onClick: this.CloseAdvancedSearch,
						}),
						l.createElement(
							"div",
							{
								className: y.AdvancedSearchPane,
							},
							l.createElement(f.k, {
								appFilter: n,
								fnOnChange: () => this.OnFilterChange(n),
							}),
						),
					),
				),
		);
	}
};
(0, n.Cg)([C.oI], ye.prototype, "FocusOnSearch", null);
(0, n.Cg)([C.oI], ye.prototype, "BIsFocused", null);
(0, n.Cg)([C.oI], ye.prototype, "OpenAdvancedSearch", null);
(0, n.Cg)([C.oI], ye.prototype, "CloseAdvancedSearch", null);
(0, n.Cg)([C.oI], ye.prototype, "OnKeyDown", null);
(0, n.Cg)([C.oI], ye.prototype, "OnTextChanged", null);
(0, n.Cg)([C.oI], ye.prototype, "OnTextSearchFocused", null);
(0, n.Cg)([C.oI], ye.prototype, "OnTextSearchBlur", null);
(0, n.Cg)([C.oI], ye.prototype, "OnFilterChange", null);
(0, n.Cg)([C.oI], ye.prototype, "OnClearFilterTagClick", null);
ye = (0, n.Cg)([o.PA], ye);
