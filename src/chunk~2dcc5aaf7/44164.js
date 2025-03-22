var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./92251.js");
var l = require("./31760.js");
var c = require("./82594.js");
var m = require("./66408.js");
var u = require(/*webcrack:missing*/ "./88750.js");
var d = require(/*webcrack:missing*/ "./90765.js");
var A = require(/*webcrack:missing*/ "./46108.js");
var p = require(/*webcrack:missing*/ "./52451.js");
var g = require("./92757.js");
var h = require(/*webcrack:missing*/ "./72476.js");
var C = require("./64608.js");
var _ = require(/*webcrack:missing*/ "./69164.js");
var f = require(/*webcrack:missing*/ "./61657.js");
var b = require("./34992.js");
class y extends s.Component {
	constructor(e) {
		super(e);
		this.state = {
			activeIndex: e.initialActiveIndex || 0,
		};
	}
	render() {
		const { config: e } = this.props;
		const { activeIndex: t } = this.state;
		const r = e[t] && e[t].renderContent ? e[t].renderContent() : null;
		const n = e.length > 1;
		const i = n
			? ({ detail: { button: t } }) => {
					if (t === f.pR.BUMPER_LEFT) {
						this.setState({
							activeIndex: Math.max(0, this.state.activeIndex - 1),
						});
					} else if (t === f.pR.BUMPER_RIGHT) {
						this.setState({
							activeIndex: Math.min(e.length - 1, this.state.activeIndex + 1),
						});
					}
				}
			: undefined;
		return s.createElement(
			_.Z,
			{
				className: b.Picker,
				onButtonDown: i,
			},
			n && s.createElement(S, null, this.RenderTabs()),
			r,
		);
	}
	RenderTabs() {
		return this.props.config.map(({ renderTab: e }, t) => {
			const r = this.state.activeIndex === t;
			return s.createElement(
				B,
				{
					key: t,
					active: r,
					onClick: () =>
						this.setState({
							activeIndex: t,
						}),
				},
				e(r),
			);
		});
	}
}
function S(e) {
	return s.createElement(
		_.Z,
		{
			className: b.Tabs,
			"flow-children": "row",
		},
		e.children,
	);
}
function w(e) {
	return s.createElement(
		"div",
		{
			className: b.Content,
		},
		e.children,
	);
}
function B(e) {
	const { active: t, children: r, onClick: n } = e;
	return s.createElement(
		_.Z,
		{
			className: (0, d.A)(b.Tab, t && b.Active),
			focusClassName: b.Focus,
			onActivate: n,
		},
		s.createElement(
			"div",
			{
				className: (0, d.A)(b.TabContent, t && b.Active),
			},
			r,
		),
	);
}
function v(e) {
	const {
		items: t,
		renderItem: r,
		onItemSelect: n,
		keyExtractor: i,
		renderEmpty: a,
	} = e;
	let o = t.map((e, a) =>
		s.createElement(
			_.Z,
			{
				key: i(e),
				className: b.Item,
				onActivate: () => n(t[a]),
				autoFocus: a === 0,
				focusClassName: b.Focus,
			},
			r(t[a]),
		),
	);
	if (t.length === 0 && a) {
		o = a();
	}
	return s.createElement(
		_.Z,
		{
			"flow-children": "grid",
			className: b.ItemList,
		},
		o,
	);
}
function I(e) {
	const { title: t, onFilterChange: r, filter: n, onSubmit: i, ...a } = e;
	return s.createElement(
		s.Fragment,
		null,
		s.createElement(
			w,
			null,
			s.createElement(
				M,
				{
					title: t,
				},
				s.createElement(v, {
					...a,
				}),
			),
		),
		s.createElement(T, {
			value: n,
			onChange: r,
			onSubmit: i,
		}),
	);
}
function E(e) {
	const { onFilterChange: t, filter: r, sections: n, title: i } = e;
	return s.createElement(
		s.Fragment,
		null,
		s.createElement(
			w,
			null,
			i &&
				s.createElement(
					"div",
					{
						className: b.SectionedPageTitle,
					},
					i,
				),
			n.map(({ title: e, ...t }) =>
				s.createElement(
					M,
					{
						title: e,
						key: e,
					},
					s.createElement(v, {
						...t,
					}),
				),
			),
		),
		s.createElement(T, {
			value: r,
			onChange: t,
		}),
	);
}
function M(e) {
	return s.createElement(
		"div",
		{
			className: b.Section,
		},
		s.createElement(
			"div",
			{
				className: b.SectionTitle,
			},
			e.title,
		),
		s.createElement(
			"div",
			{
				className: b.SectionContent,
			},
			e.children,
		),
	);
}
function T(e) {
	const { value: t, onChange: r, onSubmit: n } = e;
	return s.createElement(
		"div",
		{
			className: b.FilterInputContainer,
		},
		s.createElement(C.pd, {
			type: "text",
			placeholder: "Search...",
			className: b.FilterInput,
			value: t,
			onChange: (e) => r(e.target.value),
			onSubmit: n,
		}),
	);
}
function R(e) {
	const { className: t, ...r } = e;
	return s.createElement("div", {
		className: (0, d.A)(t, b.AddonPickerMessage),
		...r,
	});
}
var k = require("./54268.js");
var D = k;
var N = require("./43397.js");
export class nl extends s.PureComponent {
	state = {
		showHover: false,
	};
	m_ref = s.createRef();
	OnMouseEnter(e) {
		this.setState({
			showHover: true,
		});
	}
	OnMouseLeave(e) {
		this.setState({
			showHover: false,
		});
	}
	render() {
		const { emoticon: e, large: t, emoticonHoverStore: r } = this.props;
		const n = `:${e}:`;
		const i = t && r.BLoaded(e) ? r.Get(e).url : l.p.GetEmoticonURL(e, t);
		return s.createElement(
			s.Fragment,
			null,
			s.createElement(
				m.xh,
				{
					text: n,
					style: "merge-adjacent",
				},
				s.createElement("img", {
					src: i,
					className: (0, d.A)(D.emoticon, t ? D.large : undefined),
					"data-emoticon": e,
					onMouseEnter: this.OnMouseEnter,
					onMouseLeave: this.OnMouseLeave,
					ref: this.m_ref,
				}),
			),
			this.state.showHover &&
				s.createElement(G, {
					target: this.m_ref.current,
					store: r,
					emoticon: e,
				}),
		);
	}
}
(0, n.Cg)([p.oI], nl.prototype, "OnMouseEnter", null);
(0, n.Cg)([p.oI], nl.prototype, "OnMouseLeave", null);
const G = (0, a.PA)((e) => {
	const { target: t, store: r, emoticon: n } = e;
	const i = r.Get(n);
	return s.createElement(
		O,
		{
			target: t,
			title: `:${n}:`,
			subtitle: i && i.app_name ? i.app_name : undefined,
		},
		s.createElement(nl, {
			emoticon: n,
			emoticonHoverStore: r,
			large: true,
		}),
	);
});
const O = ({ target: e, title: t, subtitle: r, children: n }) =>
	s.createElement(
		o.g,
		{
			target: e,
			style: {
				zIndex: 1700,
			},
			className: D.EmoticonHover,
		},
		n,
		s.createElement(
			"div",
			{
				className: D.Info,
			},
			s.createElement(
				"div",
				{
					className: D.Name,
				},
				t || s.createElement("span", null, "\xA0"),
			),
			s.createElement(
				"div",
				{
					className: D.AppName,
				},
				r || s.createElement("span", null, "\xA0"),
			),
		),
	);
function P(e) {
	return e.recent_emoticons;
}
function L(e) {
	return e.recent_stickers;
}
function z(e) {
	return P(e).length + L(e).length > 0;
}
export const Q4 = (0, a.PA)((e) => {
	const {
		emoticonStore: t,
		emoticonHoverStore: r,
		roomEffectSettings: n,
		strFlairGroupID: a,
		onEmoticonSelected: o,
		onRoomEffectSelected: l,
		onStickerSelected: c,
	} = e;
	(function (e) {
		const [t, r] = (0, s.useState)(e.is_initialized);
		(0, s.useEffect)(() => {
			if (!e.is_initialized) {
				e.UpdateEmoticonList();
				const t = (0, i.z7)(
					() => e.is_initialized,
					() => r(e.is_initialized),
				);
				return () => t();
			}
			return () => {};
		}, [e]);
	})(t);
	const m = [];
	if (z(t)) {
		m.push({
			renderTab: (e) =>
				s.createElement(
					"span",
					{
						title: (0, A.we)("#AddonPicker_RecentlyUsed"),
						className: (0, d.A)(D.PickerTab, D.Clock, e && D.ActiveTab),
					},
					s.createElement(ce, null),
				),
			renderContent: () =>
				s.createElement(H, {
					store: t,
					hoverStore: r,
					onEmoticonSelect: (e) => o(e.name),
					onStickerSelect: (e) => c(e.name),
					flairGroupID: a,
				}),
		});
	}
	return s.createElement(
		u.tz,
		null,
		s.createElement(y, {
			config: [
				...m,
				{
					renderTab: (e) =>
						s.createElement(
							"span",
							{
								title: (0, A.we)("#AddonPicker_Emoticons"),
								className: (0, d.A)(D.PickerTab, e && D.ActiveTab),
							},
							s.createElement(se, null),
						),
					renderContent: () =>
						s.createElement(j, {
							store: t,
							hoverStore: r,
							onItemSelect: (e) => o(e.name),
							flairGroupID: a,
						}),
				},
				{
					renderTab: (e) =>
						s.createElement(
							"span",
							{
								title: (0, A.we)("#AddonPicker_Stickers"),
								className: (0, d.A)(D.PickerTab, e && D.ActiveTab),
							},
							s.createElement(ie, null),
						),
					renderContent: () =>
						s.createElement(Q, {
							store: t,
							onItemSelect: (e) => c(e.name),
						}),
				},
				{
					renderTab: (e) =>
						s.createElement(
							"span",
							{
								title: (0, A.we)("#AddonPicker_RoomEffects"),
								className: (0, d.A)(D.PickerTab, e && D.ActiveTab),
							},
							s.createElement(le, null),
						),
					renderContent: () =>
						s.createElement(Z, {
							store: t,
							effectSettings: n,
							onItemSelect: (e) => l(e.name),
						}),
				},
			],
		}),
	);
});
export let X6 = class extends s.Component {
	m_disposeEmoticonStore;
	constructor(e) {
		super(e);
		this.state = {
			strSearchText: "",
		};
		let t = this.props.emoticonStore;
		if (!t.is_initialized) {
			t.UpdateEmoticonList();
			this.m_disposeEmoticonStore = (0, i.z7)(
				() => t.is_initialized,
				() => this.forceUpdate(),
			);
		}
	}
	componentWillUnmount() {
		if (this.m_disposeEmoticonStore) {
			this.m_disposeEmoticonStore();
		}
	}
	render() {
		const {
			emoticonStore: e,
			emoticonHoverStore: t,
			onEmoticonSelected: r,
			onStickerSelected: n,
			strFlairGroupID: i,
		} = this.props;
		const a = [];
		if (z(e)) {
			a.push({
				renderTab: (e) =>
					s.createElement(
						"span",
						{
							title: (0, A.we)("#AddonPicker_RecentlyUsed"),
							className: (0, d.A)(D.PickerTab, D.Clock, e && D.ActiveTab),
						},
						s.createElement(ce, null),
					),
				renderContent: () =>
					s.createElement(H, {
						store: e,
						hoverStore: t,
						onEmoticonSelect: (e) => r(e.name),
						onStickerSelect: (e) => n(e.name),
						flairGroupID: i,
					}),
			});
		}
		return s.createElement(
			u.tz,
			null,
			s.createElement(y, {
				config: [
					...a,
					{
						renderTab: (e) =>
							s.createElement(
								"span",
								{
									title: (0, A.we)("#AddonPicker_Emoticons"),
									className: (0, d.A)(D.PickerTab, e && D.ActiveTab),
								},
								s.createElement(se, null),
							),
						renderContent: () =>
							s.createElement(j, {
								store: e,
								hoverStore: t,
								onItemSelect: (e) => r(e.name),
								flairGroupID: i,
							}),
					},
					{
						renderTab: (e) =>
							s.createElement(
								"span",
								{
									title: (0, A.we)("#AddonPicker_Stickers"),
									className: (0, d.A)(D.PickerTab, e && D.ActiveTab),
								},
								s.createElement(ie, null),
							),
						renderContent: () =>
							s.createElement(Q, {
								store: e,
								onItemSelect: (e) => n(e.name),
							}),
					},
				],
			}),
		);
	}
};
X6 = (0, n.Cg)([a.PA], X6);
export class iY extends s.Component {
	m_disposeEmoticonStore;
	constructor(e) {
		super(e);
		this.state = {
			strSearchText: "",
		};
		let t = this.props.emoticonStore;
		if (!t.is_initialized) {
			t.UpdateEmoticonList();
			this.m_disposeEmoticonStore = (0, i.z7)(
				() => t.is_initialized,
				() => this.forceUpdate(),
			);
		}
	}
	componentWillUnmount() {
		if (this.m_disposeEmoticonStore) {
			this.m_disposeEmoticonStore();
		}
	}
	render() {
		return s.createElement(
			u.tz,
			null,
			s.createElement(y, {
				config: [
					{
						renderTab: () =>
							s.createElement(
								"span",
								{
									title: (0, A.we)("#AddonPicker_Emoticons"),
									className: D.PickerTab,
								},
								s.createElement(se, null),
							),
						renderContent: () =>
							s.createElement(Y, {
								store: this.props.emoticonStore,
								hoverStore: this.props.emoticonHoverStore,
								onItemSelect: (e) => this.props.OnSelected(e.name, false),
								flairGroupID: this.props.strFlairGroupID,
							}),
					},
				],
			}),
		);
	}
}
export class CE extends s.Component {
	m_disposeEmoticonStore;
	constructor(e) {
		super(e);
		this.state = {
			strSearchText: "",
		};
		let t = this.props.emoticonStore;
		if (!t.is_initialized) {
			t.UpdateEmoticonList();
			this.m_disposeEmoticonStore = (0, i.z7)(
				() => t.is_initialized,
				() => this.forceUpdate(),
			);
		}
	}
	componentWillUnmount() {
		if (this.m_disposeEmoticonStore) {
			this.m_disposeEmoticonStore();
		}
	}
	render() {
		return s.createElement(
			u.tz,
			null,
			s.createElement(y, {
				config: [
					{
						renderTab: () =>
							s.createElement(
								"span",
								{
									title: (0, A.we)("#AddonPicker_Emoticons"),
									className: D.PickerTab,
								},
								s.createElement(se, null),
							),
						renderContent: () =>
							s.createElement(K, {
								store: this.props.emoticonStore,
								hoverStore: this.props.emoticonHoverStore,
								onItemSelect: (e) => this.props.OnSelected(e.name, false),
								flairGroupID: this.props.strFlairGroupID,
							}),
					},
				],
			}),
		);
	}
}
class H extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const {
			store: e,
			hoverStore: t,
			onEmoticonSelect: r,
			onStickerSelect: n,
		} = this.props;
		const { filter: i } = this.state;
		const a = [];
		if (P(e)) {
			a.push({
				title: (0, A.we)("#AddonPicker_RecentEmoticons"),
				items: l.p.FilterEmoticons(P(e), i),
				onItemSelect: r,
				renderItem: (e) =>
					s.createElement(kS, {
						emoticon: e,
						emoticonHoverStore: t,
					}),
				keyExtractor: (e) => e.name,
				renderEmpty: () =>
					s.createElement(
						R,
						null,
						i
							? (0, A.we)("#AddonPicker_NoResults")
							: (0, A.we)(
									"#AddonPicker_NoRecent",
									(0, A.we)("#AddonPicker_Emoticons"),
								),
					),
			});
		}
		if (L(e).length) {
			a.push({
				title: (0, A.we)("#AddonPicker_RecentStickers"),
				items: l.p.FilterStickers(L(e), i),
				onItemSelect: n,
				renderItem: (e) =>
					s.createElement(eE, {
						sticker: e,
					}),
				keyExtractor: ({ name: e }) => e,
				renderEmpty: () =>
					s.createElement(
						R,
						null,
						i
							? (0, A.we)("#AddonPicker_NoResults")
							: (0, A.we)(
									"#AddonPicker_NoRecent",
									(0, A.we)("#AddonPicker_Stickers"),
								),
					),
			});
		}
		return s.createElement(E, {
			onFilterChange: (e) =>
				this.setState({
					filter: e,
				}),
			filter: i,
			sections: a,
		});
	}
}
class j extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const {
			store: e,
			hoverStore: t,
			onItemSelect: r,
			flairGroupID: n,
		} = this.props;
		const { filter: i } = this.state;
		const a = !i && n ? e.GetFlairListByGroupID(n) : e.emoticon_list;
		const o = l.p.FilterEmoticons(a, i).slice(0, 1000);
		return s.createElement(I, {
			title: (0, A.we)("#AddonPicker_Emoticons"),
			items: o,
			onItemSelect: r,
			renderItem: (e) =>
				s.createElement(kS, {
					emoticon: e,
					emoticonHoverStore: t,
				}),
			keyExtractor: (e) => e.name,
			onFilterChange: (e) =>
				this.setState({
					filter: e,
				}),
			filter: i,
			onSubmit: () => r(o[0]),
			renderEmpty: () =>
				i
					? s.createElement(R, null, (0, A.we)("#AddonPicker_NoResults"))
					: s.createElement(q, null),
		});
	}
}
function q() {
	return s.createElement(
		s.Fragment,
		null,
		s.createElement(
			R,
			null,
			(0, A.we)("#AddonPicker_NoneOwned", (0, A.we)("#AddonPicker_Emoticons")),
		),
		s.createElement(
			R,
			null,
			(0, A.PP)(
				"#AddonPicker_AcquireAtPointsShopOrMarket",
				s.createElement(
					N.uU,
					{
						href: `${h.TS.STORE_BASE_URL}points/shop/c/emoticons`,
					},
					(0, A.we)("#AddonPicker_AcquireAtPointsShop_Link"),
				),
				s.createElement(
					N.uU,
					{
						href: `${h.TS.COMMUNITY_BASE_URL}market`,
					},
					(0, A.we)("#AddonPicker_AcquireAtPointsShopOrMarket_Link"),
				),
			),
		),
	);
}
class Q extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const { store: e, onItemSelect: t } = this.props;
		const { filter: r } = this.state;
		const n = l.p.FilterStickers(e.GetStickerList(), r);
		return s.createElement(I, {
			title: (0, A.we)("#EmoticonPicker_StickerHeading"),
			items: n,
			onItemSelect: t,
			renderItem: (e) =>
				s.createElement(eE, {
					sticker: e,
				}),
			keyExtractor: ({ name: e }) => e,
			onFilterChange: (e) =>
				this.setState({
					filter: e,
				}),
			filter: r,
			onSubmit: () => t(n[0]),
			renderEmpty: () =>
				r
					? s.createElement(R, null, (0, A.we)("#AddonPicker_NoResults"))
					: s.createElement(
							s.Fragment,
							null,
							s.createElement(
								R,
								null,
								(0, A.we)(
									"#AddonPicker_NoneOwned",
									(0, A.we)("#AddonPicker_Stickers"),
								),
							),
							s.createElement(
								R,
								null,
								(0, A.PP)(
									"#AddonPicker_AcquireAtPointsShop",
									s.createElement(
										N.uU,
										{
											href: `${h.TS.STORE_BASE_URL}points/shop/c/stickers`,
										},
										(0, A.we)("#AddonPicker_AcquireAtPointsShop_Link"),
									),
								),
							),
						),
		});
	}
}
class Z extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const { store: e, effectSettings: t, onItemSelect: r } = this.props;
		const { filter: n } = this.state;
		const i = e.GetEffectList().filter(({ name: e }) => e.indexOf(n) > -1);
		return s.createElement(I, {
			title: (0, A.we)("#EmoticonPicker_EffectHeading"),
			items: i,
			onItemSelect: r,
			renderItem: (e) =>
				s.createElement(P6, {
					effect: e,
					roomEffectSettings: t,
				}),
			keyExtractor: ({ name: e }) => e,
			onFilterChange: (e) =>
				this.setState({
					filter: e,
				}),
			filter: n,
			onSubmit: () => r(i[0]),
			renderEmpty: () =>
				n
					? s.createElement(R, null, (0, A.we)("#AddonPicker_NoResults"))
					: s.createElement(
							s.Fragment,
							null,
							s.createElement(
								R,
								null,
								(0, A.we)(
									"#AddonPicker_NoneOwned",
									(0, A.we)("#AddonPicker_RoomEffects"),
								),
							),
							s.createElement(
								R,
								null,
								(0, A.PP)(
									"#AddonPicker_AcquireAtPointsShop",
									s.createElement(
										N.uU,
										{
											href: `${h.TS.STORE_BASE_URL}points/shop/c/chateffects`,
										},
										(0, A.we)("#AddonPicker_AcquireAtPointsShop_Link"),
									),
								),
							),
						),
		});
	}
}
let Y = class extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const {
			store: e,
			hoverStore: t,
			onItemSelect: r,
			flairGroupID: n,
		} = this.props;
		const { filter: i } = this.state;
		const a = [];
		if (P(e).length) {
			a.push({
				title: (0, A.we)("#AddonPicker_RecentEmoticons"),
				items: l.p.FilterEmoticons(P(e), i),
				onItemSelect: r,
				renderItem: (e) =>
					s.createElement(kS, {
						emoticon: e,
						emoticonHoverStore: t,
					}),
				keyExtractor: (e) => e.name,
				renderEmpty: () =>
					s.createElement(
						R,
						null,
						i
							? (0, A.we)("#AddonPicker_NoResults")
							: (0, A.we)(
									"#AddonPicker_NoRecent",
									(0, A.we)("#AddonPicker_Emoticons"),
								),
					),
			});
		}
		return s.createElement(E, {
			onFilterChange: (e) =>
				this.setState({
					filter: e,
				}),
			filter: i,
			sections: [
				...a,
				{
					title: (0, A.we)("#AddonPicker_AllEmoticons"),
					items: l.p.FilterStickers(e.emoticon_list, i).slice(0, 1000),
					onItemSelect: r,
					renderItem: (e) =>
						s.createElement(kS, {
							emoticon: e,
							emoticonHoverStore: t,
						}),
					keyExtractor: (e) => e.name,
					renderEmpty: () =>
						i
							? s.createElement(R, null, (0, A.we)("#AddonPicker_NoResults"))
							: s.createElement(q, null),
				},
			],
		});
	}
};
Y = (0, n.Cg)([a.PA], Y);
let K = class extends s.Component {
	state = {
		filter: "",
	};
	render() {
		const {
			store: e,
			hoverStore: t,
			onItemSelect: r,
			flairGroupID: n,
		} = this.props;
		const { filter: i } = this.state;
		return s.createElement(E, {
			onFilterChange: (e) =>
				this.setState({
					filter: e,
				}),
			filter: i,
			sections: [
				{
					title: (0, A.we)("#ChatEntryButton_Flair"),
					items: l.p.FilterStickers(e.GetFlairListByGroupID(n), i),
					onItemSelect: r,
					renderItem: (e) =>
						s.createElement(kS, {
							emoticon: e,
							emoticonHoverStore: t,
						}),
					keyExtractor: (e) => e.name,
					renderEmpty: () =>
						i
							? s.createElement(R, null, (0, A.we)("#AddonPicker_NoResults"))
							: s.createElement(q, null),
				},
			],
		});
	}
};
K = (0, n.Cg)([a.PA], K);
export const kS = (e) => {
	const { emoticon: t, emoticonHoverStore: r, large: n } = e;
	const i = !t.last_used && t.time_received;
	return s.createElement(
		"div",
		{
			className: D.EmoticonItem,
		},
		s.createElement(nl, {
			emoticon: t.name,
			emoticonHoverStore: r,
			large: n,
		}),
		i && s.createElement(iD, null),
	);
};
export class eE extends s.Component {
	state = {
		showHover: false,
	};
	m_ref = s.createRef();
	render() {
		const { sticker: e, className: t, ...r } = this.props;
		const n = (0, g.G)(h.TS.COMMUNITY_CDN_URL, e.name);
		return s.createElement(
			"div",
			{
				ref: this.m_ref,
				className: (0, d.A)(t, D.StickerButton),
				onMouseOver: () =>
					this.setState({
						showHover: true,
					}),
				onFocus: () =>
					this.setState({
						showHover: true,
					}),
				onMouseLeave: () =>
					this.setState({
						showHover: false,
					}),
				onBlur: () =>
					this.setState({
						showHover: false,
					}),
				...r,
			},
			s.createElement("img", {
				style: {
					width: "100%",
				},
				src: n,
			}),
			this.state.showHover &&
				s.createElement(kW, {
					target: this.m_ref.current,
					sticker: e,
				}),
		);
	}
}
export const kW = (0, a.PA)((e) => {
	const {
		target: t,
		sticker: { name: r, appid: n },
	} = e;
	const [i] = (0, c.t7)(n, {});
	return s.createElement(
		O,
		{
			target: t,
			title: r,
			subtitle: i?.GetName(),
		},
		s.createElement("img", {
			src: (0, g.G)(h.TS.COMMUNITY_CDN_URL, r),
			className: D.StickerHoverSticker,
		}),
	);
});
export class P6 extends s.Component {
	state = {
		showHover: false,
	};
	m_ref = s.createRef();
	render() {
		const { effect: e, roomEffectSettings: t, className: r, ...n } = this.props;
		const i = t[e.name];
		return s.createElement(
			"div",
			{
				ref: this.m_ref,
				onMouseOver: () =>
					this.setState({
						showHover: true,
					}),
				onFocus: () =>
					this.setState({
						showHover: true,
					}),
				onMouseLeave: () =>
					this.setState({
						showHover: false,
					}),
				onBlur: () =>
					this.setState({
						showHover: false,
					}),
				className: (0, d.A)(r, D.EffectButton),
				...n,
			},
			i.renderEffectIcon(),
			this.state.showHover &&
				s.createElement(te, {
					target: this.m_ref.current,
					effect: e,
					roomEffectSettings: t,
				}),
		);
	}
}
const te = (0, a.PA)((e) => {
	const {
		target: t,
		effect: { name: r, appid: n },
		roomEffectSettings: i,
	} = e;
	const a = i[r];
	const [o] = (0, c.t7)(n, {});
	return s.createElement(
		O,
		{
			target: t,
			title: r,
			subtitle: o?.GetName(),
		},
		s.createElement(
			"div",
			{
				className: D.EffectHoverEffect,
			},
			a.renderEffectIcon(),
		),
	);
});
export function iD() {
	return s.createElement(
		"div",
		{
			className: D.NewEmoticonIndicator,
		},
		s.createElement("div", {
			className: D.NewEmoticonCircle,
		}),
	);
}
export function qm(e) {
	if ((0, h.Qn)()) {
		return s.createElement(
			"svg",
			{
				viewBox: "0 0 36 36",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				...e,
			},
			s.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M21 29H22.1875V31H19L21 29Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M29 22.1875V21L31 19V22.1875H29Z",
				fill: "currentColor",
			}),
		);
	} else {
		return s.createElement(
			"svg",
			{
				viewBox: "0 0 59 59",
				width: "32",
				...e,
			},
			s.createElement(
				"switch",
				null,
				s.createElement(
					"g",
					null,
					s.createElement("path", {
						d: "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
						fillRule: "evenodd",
						clipRule: "evenodd",
						fill: "#fff",
					}),
				),
			),
		);
	}
}
function ie(e) {
	return s.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 36 36",
			fill: "none",
			...e,
		},
		s.createElement("path", {
			fill: "currentColor",
			d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M21 29H22.1875V31H19L21 29Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M29 22.1875V21L31 19V22.1875H29Z",
		}),
	);
}
export function ZT(e) {
	if ((0, h.Qn)()) {
		return s.createElement(
			"svg",
			{
				width: "36",
				height: "36",
				viewBox: "0 0 36 36",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				...e,
			},
			s.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z",
				fill: "currentColor",
			}),
		);
	} else {
		return s.createElement(
			"svg",
			{
				viewBox: "0 -8 60 60",
				width: "32",
				...e,
			},
			s.createElement("path", {
				d: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
				fillRule: "evenodd",
				clipRule: "evenodd",
				fill: "#fff",
			}),
		);
	}
}
function se(e) {
	return s.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 36 36",
			fill: "none",
			...e,
		},
		s.createElement("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
		}),
	);
}
export function Mj(e) {
	if ((0, h.Qn)()) {
		return s.createElement(
			"svg",
			{
				viewBox: "0 0 36 36",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				...e,
			},
			s.createElement("path", {
				d: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
				fill: "currentColor",
			}),
			s.createElement("path", {
				d: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
				fill: "currentColor",
			}),
		);
	} else {
		return s.createElement(
			"svg",
			{
				viewBox: "0 0 60 38",
				width: "32",
				...e,
			},
			s.createElement("path", {
				d: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
				fillRule: "evenodd",
				clipRule: "evenodd",
				fill: "#fff",
			}),
		);
	}
}
function le(e) {
	return s.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 36 36",
			fill: "none",
			...e,
		},
		s.createElement("path", {
			fill: "currentColor",
			d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
		}),
		s.createElement("path", {
			fill: "currentColor",
			d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
		}),
	);
}
function ce(e) {
	const { className: t, ...r } = e;
	return s.createElement(
		"svg",
		{
			className: (0, d.A)("SVGIcon_Button SVGIcon_Clock", t),
			version: "1.1",
			x: "0px",
			y: "0px",
			width: "20px",
			height: "20px",
			viewBox: "0 0 24 24",
			...r,
		},
		s.createElement("path", {
			d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
		}),
	);
}
