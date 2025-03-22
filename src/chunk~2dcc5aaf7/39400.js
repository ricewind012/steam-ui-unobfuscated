var n = require("./96000.js");
var i = require("./61175.js");
var a = require("./48866.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require("./55116.js");
var c = require(/*webcrack:missing*/ "./69164.js");
var m = require("./56655.js");
var u = require("./43014.js");
var d = require("./64608.js");
var A = require("./13743.js");
var p = require("./10606.js");
var g = require(/*webcrack:missing*/ "./50376.js");
var h = require("./43520.js");
var C = require(/*webcrack:missing*/ "./90765.js");
var _ = require(/*webcrack:missing*/ "./46108.js");
var f = require(/*webcrack:missing*/ "./72476.js");
var b = require("./14629.js");
var y = require("./32330.js");
var S = y;
export function x(e) {
	const { collectionid: t, closeModal: r } = e;
	if (t || t === "") {
		return o.createElement(
			p.EN,
			{
				active: true,
			},
			o.createElement(T, {
				collectionid: t,
				closeModal: r,
			}),
		);
	} else {
		return null;
	}
}
function B(e) {
	const { lockedProps: t, closeModal: r } = e;
	return o.createElement(a.k, {
		appFilter: i.n6.collectionsAppFilterGamepad,
		...t,
		fnOnChange: i.n6.SaveLocalState,
		closeModal: r,
	});
}
const v = [
	[2, 12],
	[2, 13],
	[2, 14],
	[2, 7],
	[2, 8],
	[2, 9],
	[1, 2],
	[1, 1],
	[1, 3],
	[1, 4],
	[3, 19],
	[3, 21],
	[3, 597],
	[3, 492],
	[3, 128],
	[3, 699],
	[3, 122],
	[3, 599],
	[3, 701],
	[3, 9],
	[2, 1],
	[2, 2],
	[2, 3],
	[2, 4],
	[2, 5],
	[2, 6],
	[2, 11],
	[2, 23],
];
function I(e) {
	const { appFilter: t, lockedProps: r } = e;
	let n = (0, s.q3)(() => t.GetAllSelectedOptions()).sort((e, t) => {
		let r = v.findIndex((t) => t[0] == e.eGroup && t[1] == e.option);
		let n = v.findIndex((e) => e[0] == t.eGroup && e[1] == t.option);
		if (r == -1) {
			r = 1000;
		}
		if (n == -1) {
			n = 1000;
		}
		return r - n || e.eGroup - t.eGroup || e.option - t.option;
	});
	if (r) {
		r.lockedFeatures?.forEach((e) => {
			n = n.filter((t) => t.eGroup != 2 || t.option != e.option);
			if (e.state) {
				n.unshift({
					eGroup: 2,
					option: e.option,
					name: (0, _.we)("#FilterElement_" + (0, b.$P)(2, e.option)),
				});
			}
		});
		r.lockedPlayStates?.forEach((e) => {
			n = n.filter((t) => t.eGroup != 1 || t.option != e.option);
			if (e.state) {
				n.unshift({
					eGroup: 1,
					option: e.option,
					name: (0, _.we)("#FilterElement_" + (0, b.$P)(1, e.option)),
				});
			}
		});
	}
	const i = n.map((e, t) =>
		o.createElement(
			"div",
			{
				key: `${e.eGroup}-${e.option}`,
				className: S.SelectedFilterOption,
			},
			o.createElement(g.Jlk, null),
			e.name,
		),
	);
	return o.createElement(
		"div",
		{
			className: S.FilterSummary,
		},
		i,
		i.length == 0 && o.createElement("div", null),
	);
}
function E(e) {
	const {
		bSelected: t,
		bLastFocused: r,
		category: n,
		onSelected: i,
		onFocused: a,
		allIcons: s,
		refScrollable: l,
	} = e;
	const u = o.useCallback(() => {
		if (l.current) {
			l.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	}, [l]);
	return o.createElement(
		c.Z,
		{
			className: (0, C.A)(
				S.CompatFilterDialogRow,
				t && S.Active,
				r && S.LastFocused,
			),
			autoFocus: t,
			noFocusRing: true,
			onActivate: () => {
				i(n);
			},
			onGamepadFocus: () => a(),
			fnScrollIntoViewHandler: u,
		},
		o.createElement("div", {
			className: (0, C.A)(S.RadioButton),
		}),
		o.createElement(
			"div",
			null,
			o.createElement(
				"div",
				{
					className: S.CompatFilterLabel,
				},
				(0, _.we)((0, m.eS)(n)),
			),
			o.createElement(
				"div",
				{
					className: S.CompatFilterDescription,
				},
				(0, _.we)((0, m.C6)(n)),
			),
		),
		o.createElement(
			"div",
			{
				className: S.CompatFilterDialogIcons,
			},
			s,
		),
	);
}
const M = [14, 15, 13, 12];
function T(e) {
	const { collectionid: t, closeModal: r } = e;
	const a = (function (e) {
		const t = {};
		if (e == n.A8.LocalGames) {
			t.lockedPlayStates = [
				{
					option: 1,
					state: true,
				},
			];
		} else if (e == n.A8.DeckGames || e == n.A8.DTst1Games) {
			t.lockedFeatures = [
				{
					option: 12,
					state: true,
				},
				{
					option: 13,
					state: false,
				},
				{
					option: 14,
					state: false,
				},
			];
		}
		return t;
	})(t);
	const g = (0, f.rP)();
	const y = o.useRef(undefined);
	let w = (0, s.q3)(() => n.md.GetCurrentGamepadFilter());
	let v = false;
	const T = a?.lockedFeatures?.find((e) => e.state == 1 && (0, b.Pj)(e.option));
	if (T) {
		v = true;
		w = T.option;
	}
	const [R, k] = o.useState(
		!f.TS.ON_DECK || a.lockedPlayStates || T || n.md.BHasNonGamepadOptions(),
	);
	const D = o.useMemo(() => n.md.GetCurrentGamepadFilter() != M[1], []);
	const N = !g.IN_VR || D;
	const F = o.useCallback((e) => {
		n.md.SetGamepadCollectionFilter(M[e]);
	}, []);
	const G = [3, 2, 0, 1];
	const O = G.findIndex((e) => M[e] == w);
	const [P, L] = o.useState(O);
	const z = o.useCallback((e) => {
		L(e);
	}, []);
	const x = [];
	for (let e = 0; e < G.length; e++) {
		x.push((0, m.Wm)(G[e]));
	}
	const U = [];
	if (N) {
		for (let e = 0; e < G.length; e++) {
			const t = x.map((t, r) => {
				const n = r > e;
				const i = G[r] === 0 || G[r] === 1;
				return o.createElement(t, {
					className: (0, C.A)(n && S.Inactive, i && S.InvertFocusedIcon),
					key: r,
				});
			});
			const r = e == O;
			const n = e == P;
			const i = G[e];
			const a =
				(!v || r) &&
				o.createElement(E, {
					key: i,
					bSelected: r,
					bLastFocused: n,
					category: i,
					onSelected: F,
					onFocused: () => z(e),
					allIcons: t,
					refScrollable: y,
				});
			U.push(a);
		}
	}
	if (R) {
		U.push(
			o.createElement(I, {
				key: "filtersummary",
				appFilter: i.n6.collectionsAppFilterGamepad,
				lockedProps: a,
			}),
		);
	} else {
		U.push(
			o.createElement(
				c.Z,
				{
					key: "advanced",
					className: (0, C.A)(S.CompatFilterDialogRow, S.Center, S.Advanced),
					noFocusRing: true,
					onActivate: () => {
						k(true);
					},
				},
				o.createElement(
					"div",
					null,
					o.createElement(
						"div",
						{
							className: S.CompatFilterLabel,
						},
						(0, _.we)("#Library_FilterCollection_Advanced"),
					),
				),
			),
		);
	}
	const W = parseInt(S.DialogPadding);
	return o.createElement(
		p.x_,
		{
			className: S.ModalPosition,
			onEscKeypress: e.closeModal,
			padding: "none",
		},
		o.createElement(
			"div",
			{
				className: S.DialogWrapper,
				ref: y,
			},
			o.createElement(
				"div",
				{
					className: S.CompatFilterDialog,
				},
				o.createElement(
					l.q,
					null,
					o.createElement(
						h.hL,
						{
							spacing: {
								horizontal: W,
							},
						},
						o.createElement(
							d.Y9,
							null,
							o.createElement(
								"span",
								{
									className: S.CompatFilterDialogTitle,
								},
								(0, _.we)("#Library_FilterCollectionTitle"),
							),
						),
						o.createElement(
							d.nB,
							{
								className: S.DialogBody,
							},
							o.createElement(
								"div",
								{
									className: S.CompatFilterDialogDescription,
								},
								(0, _.PP)(
									"#Library_FilterCollectionDescription",
									o.createElement(A.$m, {
										button: u.g4.X,
										type: A.wt.Knockout,
										size: A.xY.Small,
									}),
								),
							),
							!f.TS.ON_DECK &&
								N &&
								o.createElement(
									"div",
									null,
									(0, _.we)(
										"#Library_FilterCollectionDescription_CompatNotOnDeck",
									),
								),
							o.createElement(
								c.Z,
								{
									className: (0, C.A)(S.CompatFilterOptions, v && S.Locked),
									retainFocus: true,
								},
								...U,
								R &&
									o.createElement(B, {
										key: "advanced",
										lockedProps: a,
										closeModal: r,
									}),
							),
						),
					),
				),
			),
		),
	);
}
