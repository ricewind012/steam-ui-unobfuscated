var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./77347.js");
var a = require("./96593.js");
var s = require("./48289.js");
var o = require("./61175.js");
var l = require("./46422.js");
var c = require(/*webcrack:missing*/ "./90095.js");
var m = require(/*webcrack:missing*/ "./41230.js");
var u = require(/*webcrack:missing*/ "./63696.js");
var d = require(/*webcrack:missing*/ "./69164.js");
var A = require("./72655.js");
var p = require(/*webcrack:missing*/ "./61657.js");
var g = require(/*webcrack:missing*/ "./4690.js");
var h = require("./64608.js");
var C = require(/*webcrack:missing*/ "./50376.js");
var _ = require("./35488.js");
var f = require(/*webcrack:missing*/ "./98995.js");
var b = require("./43520.js");
var y = require(/*webcrack:missing*/ "./90765.js");
var S = require(/*webcrack:missing*/ "./54644.js");
var w = require(/*webcrack:missing*/ "./46108.js");
var B = require(/*webcrack:missing*/ "./52451.js");
var v = require(/*webcrack:missing*/ "./72476.js");
var I = require("./14629.js");
var E = require("./85524.js");
var M = E;
var T = require("./31706.js");
var R = require("./32598.js");
var _k = require("./34348.js");
var D = _k;
const N = 18;
function F(e) {
	if (!e) {
		return null;
	}
	return [
		[12, u.createElement(u.Fragment, null, u.createElement(C.o5Q, null))],
		[
			13,
			u.createElement(
				u.Fragment,
				null,
				u.createElement(C.o5Q, null),
				u.createElement(C.aVR, null),
			),
		],
		[
			14,
			u.createElement(
				u.Fragment,
				null,
				u.createElement(C.o5Q, null),
				u.createElement(C.aVR, null),
				u.createElement(C.WX$, null),
			),
		],
		[
			15,
			u.createElement(
				u.Fragment,
				null,
				u.createElement(C.o5Q, null),
				u.createElement(C.aVR, null),
				u.createElement(C.WX$, null),
				u.createElement(C.jIP, null),
			),
		],
		[
			2,
			u.createElement(
				u.Fragment,
				null,
				u.createElement(_.ControllerType, {
					className: M.SmallerSVG,
					controllerType: 32,
					partial: false,
				}),
			),
		],
		[
			16,
			u.createElement(
				u.Fragment,
				null,
				u.createElement(_.ControllerType, {
					className: M.SmallerSVG,
					controllerType: 34,
					partial: false,
				}),
			),
		],
		[
			18,
			u.createElement(
				u.Fragment,
				null,
				u.createElement(_.ControllerType, {
					className: M.SmallerSVG,
					controllerType: 45,
					partial: false,
				}),
			),
		],
		[
			20,
			u.createElement(
				u.Fragment,
				null,
				u.createElement(_.FrankenController, {
					className: M.BiggerSVG,
					bGreyOutRightSide: false,
				}),
			),
		],
	].find((t) => t[0] == e)[1];
}
const G = (e) => {
	const { eFeature: t, description: r, name: n } = e;
	return u.createElement(
		f.he,
		{
			className: M.CompatDropDownOption,
			toolTipContent: (0, w.we)(r),
		},
		F(t),
		u.createElement(
			"div",
			{
				className: M.CompatLabel,
			},
			(0, w.we)(n),
		),
	);
};
const O = (e) => {
	const { appFilter: t, fnOnChange: r } = e;
	const n = [
		{
			data: 12,
			label: u.createElement(G, {
				eFeature: 12,
				description: v.TS.ON_DECK
					? "#DeckVerified_FilterDescription_Verified"
					: "#DeckVerified_FilterDescription_Verified_NotOnDeck",
				name: "#DeckVerified_FilterLabel_Verified",
			}),
		},
		{
			data: 13,
			label: u.createElement(G, {
				eFeature: 13,
				description: "#DeckVerified_FilterDescription_Verified_Playable",
				name: "#DeckVerified_FilterLabel_Verified_Playable",
			}),
		},
		{
			data: 14,
			label: u.createElement(G, {
				eFeature: 14,
				description:
					"#DeckVerified_FilterDescription_Verified_Playable_Unknown",
				name: "#DeckVerified_FilterLabel_Verified_Playable_Unknown",
			}),
		},
		{
			data: 15,
			label: u.createElement(G, {
				eFeature: 15,
				description: "#DeckVerified_FilterDescription_AllGames",
				name: "#DeckVerified_FilterLabel_AllGames",
			}),
		},
	];
	const i = (0, c.q3)(() => t.GetCurrentSteamDeckCompatOption());
	const a = u.useCallback(
		(e) => {
			t.SelectOption(2, e.data, true);
			if (r) {
				r();
			}
		},
		[t, r],
	);
	const s =
		i == 15
			? u.createElement(
					"div",
					{
						className: M.Default,
					},
					(0, w.we)("#AdvancedSearch_SteamDeckOptions"),
				)
			: F(i);
	return u.createElement(
		"div",
		{
			className: (0, y.A)(M.CompatDropDown, M.DeckVerified),
		},
		u.createElement(h.ZU, {
			strDropDownClassName: M.DropDownContainer,
			strDropDownItemClassName: M.DropDownItems,
			strDefaultLabel: s,
			selectedOption: 0,
			onChange: a,
			rgOptions: n,
		}),
	);
};
const P = (e) => {
	const { appFilter: t, fnOnChange: r } = e;
	const n = (0, c.q3)(() => t.GetCurrentControllerSpecificOption());
	const i = [
		{
			data: undefined,
			label: u.createElement(G, {
				eFeature: undefined,
				description: undefined,
				name:
					n == null
						? "#AdvancedSearch_ControllerSpecificFilterOptions"
						: "#FilterElement_None",
			}),
		},
		{
			data: 2,
			label: u.createElement(G, {
				eFeature: 2,
				description: "#FilterElement_Tooltip_PartialControllerSupport",
				name: "#FilterElement_PartialControllerSupport",
			}),
		},
		{
			data: 16,
			label: u.createElement(G, {
				eFeature: 16,
				description: "#FilterElement_Tooltip_PS4ControllerSupport",
				name: "#FilterElement_PS4ControllerSupport",
			}),
		},
		{
			data: 18,
			label: u.createElement(G, {
				eFeature: 18,
				description: "#FilterElement_Tooltip_PS5ControllerSupport",
				name: "#FilterElement_PS5ControllerSupport",
			}),
		},
		{
			data: 20,
			label: u.createElement(G, {
				eFeature: 20,
				description: "#FilterElement_Tooltip_SteamInputAPI",
				name: "#FilterElement_SteamInputAPI",
			}),
		},
	];
	const a = u.useCallback(
		(e) => {
			t.SelectOption(2, 2, e.data == 2);
			t.SelectOption(2, 16, e.data == 16);
			t.SelectOption(2, 18, e.data == 18);
			t.SelectOption(2, 20, e.data == 20);
			if (r) {
				r();
			}
		},
		[t, r],
	);
	const s = (0, c.q3)(() => i.find((e) => e.data == n));
	const o =
		s?.data == null
			? u.createElement(
					"div",
					{
						className: M.Default,
					},
					(0, w.we)("#AdvancedSearch_ControllerSpecificFilterOptions"),
				)
			: s?.label;
	return u.createElement(
		"div",
		{
			className: (0, y.A)(M.CompatDropDown),
		},
		u.createElement(h.ZU, {
			strDropDownClassName: M.DropDownContainer,
			strDropDownItemClassName: M.DropDownItems,
			strDefaultLabel: o,
			selectedOption: 0,
			onChange: a,
			rgOptions: i,
		}),
	);
};
export let k = class extends u.Component {
	static contextType = v.QO;
	GetGenreOptions() {
		return [19, 21, 597, 492, 128, 699, 122, 599, 701, 9].map((e) => ({
			bNameIsPrelocalized: true,
			name: a.tw.GetLocalizationForStoreTag(e),
			option: e,
		}));
	}
	GetFilterOptions(e, t) {
		return t.map((t) => ({
			name: (0, I.$P)(e, t),
			option: t,
		}));
	}
	Reset() {
		this.props.appFilter.Reset();
		if (this.props.fnOnChange) {
			this.props.fnOnChange();
		}
	}
	OnSaveClick(e) {
		let t = this.props.appFilter;
		if (this.props.lockedFeatures || this.props.lockedPlayStates) {
			t = new I.E6(this.props.appFilter.ToStorageFormat());
			if (this.props.lockedPlayStates) {
				this.props.lockedPlayStates.forEach((e) =>
					t.SelectOption(1, e.option, e.state),
				);
			}
			if (this.props.lockedFeatures) {
				this.props.lockedFeatures.forEach((e) =>
					t.SelectOption(2, e.option, e.state),
				);
			}
		}
		(0, T.x2)(
			(0, S.uX)(e),
			(function (e) {
				const t = new Intl.ListFormat(w.pf.GetPreferredLocales(), {
					type: "conjunction",
					style: "long",
				});
				const r = e.GetAllSelectedOptions().map((e) => e.name);
				return t.format(r);
			})(t),
			t,
		).then(() => {
			if (this.props.closeModal) {
				this.props.closeModal();
			}
		});
	}
	render() {
		const e = u.createElement(
			"span",
			null,
			(0, w.PP)(
				"#FilterEdit_SaveDynamicCollectionWithIcon",
				u.createElement(C.U_V, {
					height: 20,
				}),
			),
		);
		const t = this.context?.IN_GAMEPADUI
			? !this.props.appFilter.bIsEmpty
			: o.n6.BIsSearchByTypeActive();
		return u.createElement(
			"div",
			{
				className: M.Container,
			},
			u.createElement(
				"div",
				{
					className: (0, y.A)(
						M.FilterArea,
						this.props.bUseWideFormat && M.WideFormat,
					),
				},
				u.createElement(W, {
					appFilter: this.props.appFilter,
					fnOnChange: this.props.fnOnChange,
					label: (0, w.we)("#AdvancedSearch_PlayerSection"),
					eGroup: 2,
					className: M.Player,
					options: this.GetFilterOptions(2, [7, 8, 9]),
				}),
				u.createElement(W, {
					appFilter: this.props.appFilter,
					fnOnChange: this.props.fnOnChange,
					label: (0, w.we)("#AdvancedSearch_StateSection"),
					eGroup: 1,
					className: M.PlayState,
					options: this.GetFilterOptions(1, [2, 1, 3, 4]),
					lockedOptions: this.props.lockedPlayStates,
				}),
				u.createElement(
					W,
					{
						appFilter: this.props.appFilter,
						fnOnChange: this.props.fnOnChange,
						label: (0, w.we)("#AdvancedSearch_HardwareSection"),
						eGroup: 2,
						className: M.Hardware,
						options: this.GetFilterOptions(2, [21, 1, 3]),
						lockedOptions: this.props.lockedFeatures,
					},
					u.createElement(P, {
						appFilter: this.props.appFilter,
						fnOnChange: this.props.fnOnChange,
					}),
					!this.context?.IN_GAMEPADUI &&
						u.createElement(O, {
							appFilter: this.props.appFilter,
							fnOnChange: this.props.fnOnChange,
						}),
				),
				u.createElement(W, {
					appFilter: this.props.appFilter,
					fnOnChange: this.props.fnOnChange,
					label: (0, w.we)("#AdvancedSearch_FeatureSection"),
					eGroup: 2,
					className: M.Feature,
					options: this.GetFilterOptions(2, [4, 5, 6, 11, 23]),
					lockedOptions: this.props.lockedFeatures,
				}),
				u.createElement(W, {
					appFilter: this.props.appFilter,
					fnOnChange: this.props.fnOnChange,
					label: (0, w.we)("#AdvancedSearch_GenreSection"),
					eGroup: 4,
					className: (0, y.A)(M.Genre, M.ExtraTall),
					options: this.GetGenreOptions(),
				}),
				u.createElement(q, {
					appFilter: this.props.appFilter,
					fnOnChange: this.props.fnOnChange,
				}),
				u.createElement(Q, {
					appFilter: this.props.appFilter,
					fnOnChange: this.props.fnOnChange,
				}),
			),
			u.createElement(
				d.Z,
				{
					className: M.Buttons,
					navEntryPreferPosition: g.iU.PREFERRED_CHILD,
				},
				this.context?.IN_GAMEPADUI &&
					u.createElement(
						h.$n,
						{
							className: M.ClearButton,
							onClick: this.Reset,
						},
						(0, w.we)("#AdvancedSearch_Reset"),
					),
				!this.props.bHideSaveButton &&
					u.createElement(
						d.Z,
						{
							preferredFocus: true,
						},
						u.createElement(
							f.he,
							{
								toolTipContent: "#FilterEdit_SaveDynamicCollectionButtonDesc",
								direction: "bottom",
							},
							u.createElement(
								h.jn,
								{
									className: M.SaveButton,
									focusable: t,
									disabled: !t,
									onClick: this.OnSaveClick,
								},
								e,
							),
						),
					),
			),
		);
	}
};
function z(e) {
	const { appFilter: t, selected: r, eGroup: n, tagid: i, fnOnChange: o } = e;
	const l = u.useCallback(() => {
		t.SelectOption(n, i, !r);
		if (o) {
			o();
		}
	}, [t, r, n, i, o]);
	const m =
		(0, c.q3)(() => r && n === 6 && s.O$.IsLibraryAccessDenied(i)) &&
		(0, w.we)("#FilterElement_Tooltip_FriendLibrary_AccessDenied");
	const A = n === 6;
	const p = (0, c.q3)(() => A && s.O$.GetFriendState(i)?.persona.avatar_url);
	const g = (0, c.q3)(() =>
		(function (e, t) {
			if (e == 4) {
				return a.tw.GetLocalizationForStoreTag(t);
			} else {
				return (0, I.$P)(e, t);
			}
		})(n, i),
	);
	return u.createElement(
		d.Z,
		{
			className: (0, y.A)(M.FilterStoreTag, r && M.Selected, m && M.Error),
			onActivate: l,
		},
		p &&
			u.createElement("img", {
				src: p,
				width: N,
				height: N,
			}),
		u.createElement(
			"div",
			{
				className: A && M.Name,
			},
			g,
		),
	);
}
function x(e) {
	const { options: t, eGroup: r, appFilter: n, fnOnChange: i } = e;
	const a = n.GetSelectedOptions(r);
	const s = (0, c.q3)(() =>
		a.filter((e) => !t.find((t) => t.option == e)).sort((e, t) => e - t),
	);
	if (a.length == 0 && t.length == 0) {
		return null;
	}
	const o = s.concat(t.map((e) => e.option));
	return u.createElement(
		b.VJ,
		null,
		u.createElement(
			"div",
			{
				className: M.SearchOptionsWrapper,
			},
			u.createElement(
				d.Z,
				{
					className: M.SearchOptions,
					"flow-children": "row",
				},
				o.map((e) =>
					u.createElement(z, {
						key: e.toString(),
						appFilter: n,
						selected: a.indexOf(e) !== -1,
						eGroup: r,
						tagid: e,
						fnOnChange: i,
					}),
				),
				o.length == 0 && u.createElement("div", null),
			),
		),
	);
}
function U(e) {
	const {
		filterOption: t,
		appFilter: r,
		eGroup: n,
		onChange: a,
		lockedOptions: s,
	} = e;
	const o =
		n == 6
			? ((m = t.name),
				(0, i.Id)()
					? (0, w.we)("#FilterElement_Tooltip_FriendLibrary", m)
					: (0, w.we)("#FilterElement_Tooltip_FriendLibrary_Offline", m))
			: t.bNameIsPrelocalized
				? (0, w.we)("#FilterElement_Tooltip_StoreTag", t.name)
				: (0, w.we)("#FilterElement_Tooltip_" + t.name);
	var m;
	const A = (0, I.Qv)(n, t.option);
	const g = t.bNameIsPrelocalized
		? t.name
		: (0, w.we)("#FilterElement_" + t.name);
	const C = s?.find((e) => t.option == e.option);
	const _ = !!C;
	const b = (0, c.q3)(() => (_ ? C.state : r.BIsSelected(n, t.option)));
	let S = A
		? u.createElement(
				u.Fragment,
				null,
				u.createElement("span", null, g),
				u.createElement("span", null, "*"),
			)
		: g;
	const [B, v] = u.useState();
	const E = u.useCallback(
		(e) => e.detail.button == p.pR.DIR_DOWN && !B && (v(e.detail.button), true),
		[B],
	);
	u.useEffect(() => {
		if (B) {
			l.oy.NavigationManager.DispatchVirtualButtonClick(B);
		}
	}, [B]);
	const T = u.useCallback(() => {
		v(undefined);
	}, []);
	return u.createElement(
		d.Z,
		{
			className: (0, y.A)(M.Row, !B && M.NotMoving),
			key: `checkbox-${n}-${t.option}`,
			onGamepadFocus: T,
			onGamepadDirection: E,
		},
		u.createElement(
			f.he,
			{
				toolTipContent: o,
			},
			u.createElement(h.Yh, {
				className: M.Checkbox,
				label: S,
				noFocusRing: true,
				disabled: _,
				checked: b,
				onChange: (e) => a(n, t.option, e),
			}),
		),
	);
}
function W(e) {
	const {
		appFilter: t,
		label: r,
		eGroup: n,
		options: i,
		className: a,
		fnOnChange: s,
		lockedOptions: o,
		children: l,
	} = e;
	const c = (0, v.Qn)();
	const m = u.useRef(undefined);
	const d = u.useCallback(
		(e, r, n) => {
			t.SelectOption(e, r, n);
			if (s) {
				s();
			}
		},
		[t, s],
	);
	const p = u.useCallback(
		() =>
			!!c &&
			(m.current?.scrollIntoView({
				block: "start",
				behavior: "smooth",
			}),
			true),
		[c],
	);
	return u.createElement(
		A.YZ,
		{
			ref: m,
			className: (0, y.A)(M.FilterBucket, a),
			"flow-children": "column",
			fnScrollIntoViewHandler: p,
		},
		u.createElement(
			"div",
			{
				className: M.FilterBucketLabel,
			},
			r,
		),
		l,
		u.createElement(
			"div",
			{
				className: M.FilterBucketBoxes,
				tabIndex: -1,
			},
			i.map((e) =>
				u.createElement(U, {
					key: `checkbox-${n}-${e.option}`,
					filterOption: e,
					appFilter: t,
					eGroup: n,
					onChange: d,
					lockedOptions: o,
				}),
			),
		),
	);
}
function V(e) {
	return (e.length == 0 ? [] : a.tw.GetTopStoreTags(e).map((e) => e.nTagId))
		.slice(0, 10)
		.map((e) => ({
			bNameIsPrelocalized: true,
			name: a.tw.GetLocalizationForStoreTag(e),
			option: e,
		}));
}
function H(e) {
	const t = (0, s.Sw)();
	if (e.trim().length == 0) {
		return [];
	}
	let r = e.toLocaleLowerCase();
	let n = t.filter(
		(e) =>
			(e.nickname && e.nickname.toLocaleLowerCase().includes(r)) ||
			(e.persona && e.persona.m_strPlayerName.toLocaleLowerCase().includes(r)),
	);
	let i = n.filter(
		(e) =>
			(e.nickname && e.nickname.toLocaleLowerCase().startsWith(r)) ||
			(e.persona &&
				e.persona.m_strPlayerName.toLocaleLowerCase().startsWith(r)),
	);
	return i
		.concat(n.filter((e) => !i.includes(e)))
		.slice(0, Math.min(n.length, 6))
		.map((e, t) => ({
			bNameIsPrelocalized: true,
			name: (0, I.$P)(6, e.persona && e.persona.GetAccountID()),
			option: e.persona.m_steamid.GetAccountID(),
		}));
}
function j(e) {
	const {
		appFilter: t,
		eGroup: r,
		label: n,
		disabled: i,
		prompt: a,
		bShowTags: s,
		fnOnChange: o,
		optionsQuery: l,
	} = e;
	const [m, p] = u.useState("");
	const g = (0, c.q3)(() => l(m));
	const C = u.useRef(undefined);
	const _ = (0, v.Qn)();
	const f = u.useCallback(() => {
		C.current?.scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
	}, []);
	if (_) {
		return u.createElement(
			u.Fragment,
			null,
			u.createElement(
				d.Z,
				{
					key: n,
					ref: C,
				},
				u.createElement(
					"div",
					{
						className: (M.FilterBucketLabel, M.SearchBucketLabel),
					},
					(0, w.we)(n),
				),
				u.createElement(h.pd, {
					disabled: i,
					className: M.TagInputDialog,
					fnScrollIntoViewHandler: f,
					placeholder: (0, w.we)(a),
					value: m,
					onChange: (e) => p(e.currentTarget.value),
					bShowClearAction: true,
				}),
			),
			u.createElement(x, {
				key: "searchresults",
				options: g,
				eGroup: r,
				appFilter: t,
				fnOnChange: o,
			}),
		);
	}
	{
		let e = (e, t, r) => {
			e.SelectOption(t, r, false);
		};
		let l =
			s &&
			u.createElement(
				"div",
				{
					className: (0, y.A)(D.SearchFilterInput),
				},
				(0, R.wf)(t, r, e),
			);
		return u.createElement(
			u.Fragment,
			null,
			u.createElement(
				W,
				{
					appFilter: t,
					fnOnChange: o,
					label: (0, w.we)(n),
					eGroup: r,
					className: (0, y.A)(
						M.StoreTag,
						M.DoubleWide,
						m.length > 0 && M.SearchResultsBox,
					),
					options: g,
				},
				u.createElement(h.pd, {
					disabled: i,
					placeholder: (0, w.we)(a),
					value: m,
					onChange: (e) => p(e.currentTarget.value),
					bShowClearAction: true,
				}),
			),
			l &&
				u.createElement(
					A.YZ,
					{
						ref: C,
						className: (0, y.A)(
							M.FilterBucket,
							M.StoreTag,
							M.DoubleWide,
							m.length > 0 && M.SearchResultsBox,
						),
						"flow-children": "column",
						fnScrollIntoViewHandler: null,
					},
					l,
				),
		);
	}
}
function q(e) {
	return u.createElement(j, {
		appFilter: e.appFilter,
		eGroup: 4,
		label: "#AdvancedSearch_StoreTagSection",
		prompt: "#AdvancedSearch_StoreTagPrompt",
		bShowTags: false,
		fnOnChange: e.fnOnChange,
		optionsQuery: V,
	});
}
function Q(e) {
	const t = (0, i.Id)();
	const r = t
		? "#AdvancedSearch_FriendsPrompt"
		: "#AdvancedSearch_FriendsPrompt_Offline";
	return u.createElement(j, {
		disabled: !t,
		appFilter: e.appFilter,
		eGroup: 6,
		label: "#AdvancedSearch_FriendsSection",
		prompt: r,
		bShowTags: true,
		fnOnChange: e.fnOnChange,
		optionsQuery: H,
	});
}
(0, n.Cg)([B.oI], k.prototype, "Reset", null);
(0, n.Cg)([B.oI], k.prototype, "OnSaveClick", null);
k = (0, n.Cg)([m.PA], k);
