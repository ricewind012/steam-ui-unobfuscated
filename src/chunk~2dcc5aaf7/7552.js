var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90242.js");
var a = require(/*webcrack:missing*/ "./69164.js");
var s = require("./56655.js");
var o = require(/*webcrack:missing*/ "./34629.js");
var l = require(/*webcrack:missing*/ "./83957.js");
var c = l;
var m = require("./16154.js");
var u = require(/*webcrack:missing*/ "./79769.js");
var d = require(/*webcrack:missing*/ "./52451.js");
var A = require(/*webcrack:missing*/ "./72476.js");
class p {
	m_mapAppResults = new Map();
	m_mapAppCallbackList = new Map();
	m_mapAppResultsPromises = new Map();
	GetCompatabilityResultForApp(e) {
		return this.m_mapAppResults.get(e);
	}
	BHasCompatabilityResultForApp(e) {
		return this.m_mapAppResults.has(e);
	}
	GetCallbackForAppList(e) {
		if (!this.m_mapAppCallbackList.has(e)) {
			this.m_mapAppCallbackList.set(e, new u.lu());
		}
		return this.m_mapAppCallbackList.get(e);
	}
	AddCompatabilityResult(e) {
		this.m_mapAppResults.set(e.appid, e);
		this.GetCallbackForAppList(e.appid).Dispatch(e);
	}
	async LoadAppCompabitilityResult(e) {
		return (
			!!this.m_mapAppResults.has(e) ||
			(this.m_mapAppResultsPromises.has(e) ||
				this.m_mapAppResultsPromises.set(
					e,
					this.InternalLoadAppCompatability(e),
				),
			this.m_mapAppResultsPromises.get(e))
		);
	}
	async InternalLoadAppCompatability(e) {
		let t = null;
		try {
			const r = {
				nAppID: e,
				l: A.TS.LANGUAGE,
				cc: A.TS.COUNTRY,
			};
			let n =
				A.TS.STORE_BASE_URL + "saleaction/ajaxgetdeckappcompatibilityreport";
			const i = await c.get(n, {
				params: r,
				withCredentials: true,
			});
			if (i?.status == 200 && i.data?.success == 1 && i.data?.results) {
				this.AddCompatabilityResult(i.data.results);
				return true;
			}
			t = (0, m.H)(i);
		} catch (e) {
			t = (0, m.H)(e);
		}
		console.error(
			"CDeckVerifiedDetailsStore.InternalLoadAppCompatability failed: " +
				t?.strErrorMsg,
			t,
		);
		return false;
	}
	static s_Singleton;
	static Get() {
		if (!p.s_Singleton) {
			p.s_Singleton = new p();
			if (A.TS.WEB_UNIVERSE == "dev" || A.TS.WEB_UNIVERSE == "beta") {
				window.g_DeckVerifiedDetailStores = p.s_Singleton;
			}
		}
		return p.s_Singleton;
	}
	constructor() {
		if (document.getElementById("application_config")) {
			let e = (0, A.Tc)("deckcompatibility", "application_config");
			if (p.ValidateCompatabilityResult(e)) {
				this.AddCompatabilityResult(e);
				if (A.TS.WEB_UNIVERSE == "dev") {
					console.log(
						"CDeckCompatibilityDetailsStore compatability loaded: ",
						e,
					);
				}
			}
		}
	}
	static ValidateCompatabilityResult(e) {
		const t = e;
		return (
			t &&
			typeof t.appid == "number" &&
			typeof t.resolved_category == "number" &&
			typeof t.resolved_items == "object"
		);
	}
}
(0, o.Cg)([d.oI], p.prototype, "LoadAppCompabitilityResult", null);
var g = require("./64608.js");
var h = require("./10606.js");
var C = require(/*webcrack:missing*/ "./50376.js");
var _ = require(/*webcrack:missing*/ "./46108.js");
var f = require("./81489.js");
var b = f;
var y = require("./21105.js");
var S = require("./13743.js");
var w = require("./43014.js");
export function g1(e) {
	const {
		results: t,
		appName: r,
		buttonProps: i,
		autoFocus: s,
		onOpenBlogPost: o,
	} = e;
	const [l, c] = n.useState(false);
	const m = n.useCallback(() => l, [l]);
	const u = n.useRef();
	const d = (0, A.Qn)();
	n.useEffect(() => {
		c(u?.current?.scrollHeight > u?.current?.clientHeight);
	}, []);
	if (!t) {
		return null;
	}
	const p = () => {
		if (o) {
			o();
		} else {
			window.location.href = t.steam_deck_blog_url;
		}
	};
	let g = i ?? {};
	let h = null;
	if (t.steam_deck_blog_url) {
		g.onOptionsActionDescription = (0, _.we)(
			"#SteamDeckVerified_ViewDeveloperPost",
		);
		g.onOptionsButton = p;
		h = n.createElement(v, {
			blogURL: t.steam_deck_blog_url,
		});
	}
	const C = t.resolved_items?.findIndex((e) => e.display_type == 1) !== -1;
	if (t.resolved_items?.length) {
		return n.createElement(
			a.Z,
			{
				className: d
					? b.CompatibilityDetailsContainer
					: b.CompatibilityDetailsContainerDesktop,
				...g,
			},
			n.createElement(
				"div",
				null,
				n.createElement(
					"div",
					{
						className: b.DialogHeader,
					},
					n.createElement(
						"div",
						{
							className: b.DialogTitle,
						},
						(0, _.we)("#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI"),
					),
					n.createElement(
						"div",
						{
							className: b.AppTitleCategory,
						},
						n.createElement(Ez, {
							category: t.resolved_category,
						}),
					),
				),
				n.createElement(UN, {
					category: t.resolved_category,
					appName: r,
				}),
			),
			h,
			n.createElement("div", {
				className: b.CompatibilityDetailsSeparator,
			}),
			n.createElement(
				y.Qg,
				{
					ref: u,
					className: m()
						? b.CompatibilityDetailsInterior_Scroll
						: b.CompatibilityDetailsInterior_NoScroll,
				},
				n.createElement(
					a.Z,
					{
						autoFocus: s,
						focusableIfNoChildren: s || m(),
						noFocusRing: true,
					},
					t.resolved_items
						.filter((e) => e.display_type !== 1)
						.map((e) =>
							n.createElement(
								"div",
								{
									key: e.loc_token + e.display_type,
									className: b.CompatibilityDetailsRow,
								},
								n.createElement(I, {
									displaytype: e.display_type,
								}),
								n.createElement("span", null, (0, _.we)(e.loc_token)),
							),
						),
					C &&
						n.createElement(
							"div",
							{
								className: b.CompatibilityNotes,
							},
							t.resolved_items
								.filter((e) => e.display_type == 1)
								.map((e) =>
									n.createElement(
										"div",
										{
											key: e.loc_token + e.display_type,
											className: b.CompatibilityDetailsNoteRow,
										},
										n.createElement("span", null, (0, _.we)(e.loc_token)),
									),
								),
						),
				),
			),
		);
	} else {
		return n.createElement(
			a.Z,
			{
				autoFocus: s,
				focusableIfNoChildren: s,
				noFocusRing: true,
				className: b.CompatibilityDetailsContainer,
				...g,
			},
			n.createElement(
				"div",
				null,
				n.createElement(
					"div",
					{
						className: b.DialogHeader,
					},
					n.createElement(
						"div",
						{
							className: b.DialogTitle,
						},
						(0, _.we)("#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI"),
					),
					n.createElement(
						"div",
						{
							className: b.AppTitleCategory,
						},
						n.createElement(Ez, {
							category: t.resolved_category,
						}),
					),
				),
				n.createElement(UN, {
					category: t.resolved_category,
					appName: r,
				}),
				h,
			),
		);
	}
}
function v(e) {
	const { blogURL: t } = e;
	const r = (0, A.Qn)();
	if (t) {
		if (r) {
			return n.createElement(
				"div",
				{
					className: b.CompatibilityDetailRatingSummary,
				},
				(0, _.we)("#SteamDeckVerified_DescriptionHeader_DeveloperBlog"),
				n.createElement(
					"div",
					{
						className: b.DeveloperBlogYButton,
					},
					n.createElement(S.$m, {
						button: w.g4.Y,
						type: S.wt.Knockout,
					}),
				),
			);
		} else {
			return n.createElement(
				"div",
				{
					className: b.CompatibilityDetailRatingSummary,
				},
				(0, _.we)("#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop"),
				n.createElement(
					"a",
					{
						href: t,
						className: b.DeveloperBlockLinkDesktop,
					},
					(0, _.we)("#SteamDeckVerified_ViewDeveloperPost"),
				),
			);
		}
	} else {
		return null;
	}
}
function I(e) {
	const { displaytype: t } = e;
	switch (t) {
		case 4:
			return n.createElement(C.o5Q, {
				className: b.CompatibilityDetailsResultIcon,
			});
		case 3:
			return n.createElement(C.aVR, {
				className: b.CompatibilityDetailsResultIcon,
			});
		case 2:
			return n.createElement(C.jIP, {
				className: b.CompatibilityDetailsResultIcon,
			});
		case 0:
			return n.createElement(C.WX$, {
				className: b.CompatibilityDetailsResultIcon,
			});
		case 1:
			if (A.TS.WEB_UNIVERSE == "dev") {
				console.error(
					"deck verified banner shouldn't try to display the information display type for appid",
				);
			}
			return null;
	}
}
var E = require(/*webcrack:missing*/ "./26853.js");
var M = require(/*webcrack:missing*/ "./90765.js");
var T = require(/*webcrack:missing*/ "./54644.js");
var R = require("./51095.js");
var k = require("./13869.js");
export function Q8(e) {
	const { storeItem: t } = e;
	if (t.GetStoreItemType() !== 0) {
		return null;
	}
	const r = t.GetPlatforms()?.steam_deck_compat_category || 0;
	return n.createElement(
		"div",
		{
			className: (0, M.A)(b.LearnMoreCtn, "LearnMoreCtn"),
		},
		n.createElement(s.$o, {
			category: r,
		}),
		n.createElement(
			i.Ii,
			{
				onClick: (e) => {
					var r;
					var i;
					e.preventDefault();
					e.stopPropagation();
					r = (0, T.uX)(e);
					i = t.GetAppID();
					(0, k.pg)(
						n.createElement(F, {
							nAppID: i,
						}),
						r,
					);
				},
			},
			n.createElement(
				"span",
				{
					className: b.LearnMorePC,
				},
				(0, _.we)("#SteamDeckVerified_Store_CompatSectionHeader_Desktop"),
			),
		),
	);
}
export function Tz(e) {
	const { url: t, containerClass: r, bIncludeIcon: a, onOpenBlogPost: s } = e;
	return n.createElement(
		i.Ii,
		{
			className: r,
			onClick: () => {
				if (s) {
					s();
				} else {
					window.location.href = t;
				}
			},
		},
		a &&
			n.createElement("div", {
				className: b.DeveloperComments_Icon,
			}),
		n.createElement(
			"div",
			{
				className: a
					? b.DeveloperComments_LinkIcon
					: b.DeveloperComments_LinkNoIcon,
			},
			(0, _.we)("#SteamDeckVerified_Store_CompatSection_DeveloperComments"),
		),
	);
}
function F(e) {
	const { nAppID: t, closeModal: r } = e;
	const i = (function (e) {
		const [t, r] = n.useState(p.Get().GetCompatabilityResultForApp(e));
		(0, d.hL)(p.Get().GetCallbackForAppList(e), r);
		n.useEffect(() => {
			if (!p.Get().BHasCompatabilityResultForApp(e)) {
				p.Get()
					.LoadAppCompabitilityResult(e)
					.then(() => r(p.Get().GetCompatabilityResultForApp(e)));
			}
		}, [e]);
		return t;
	})(t);
	return n.createElement(
		h.eV,
		{
			modalClassName: "DeckVerifiedModalDialog",
			closeModal: r,
			onCancel: r,
		},
		n.createElement(
			g.nB,
			null,
			n.createElement(
				a.Z,
				{
					focusable: false,
					"flow-children": "column",
				},
				Boolean(i)
					? n.createElement(g1, {
							results: i,
						})
					: n.createElement(E.t, {
							size: "medium",
							position: "center",
							string: (0, _.we)("#Loading"),
						}),
			),
		),
	);
}
export function Ez(e) {
	const { category: t } = e;
	switch (t) {
		case 3:
			return n.createElement(C.o5Q, {
				className: b.CategoryIcon,
			});
		case 2:
			return n.createElement(C.aVR, {
				className: b.CategoryIcon,
			});
		case 1:
			return n.createElement(C.jIP, {
				className: b.CategoryIcon,
			});
		case 0:
			return n.createElement(C.WX$, {
				className: b.CategoryIcon,
			});
	}
}
export function UN(e) {
	const { category: t, appName: r, descriptionToken: i } = e;
	if (t == 0) {
		return n.createElement(
			"div",
			{
				className: b.CompatibilityDetailRatingSummary,
			},
			r
				? (0, _.PP)(
						"#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName",
						n.createElement("b", null, (0, R.EK)(r)),
					)
				: (0, _.we)("#SteamDeckVerified_DescriptionHeader_Unknown"),
		);
	}
	let a = "";
	let s = null;
	switch (t) {
		case 3:
			a = "#SteamDeckVerified_DescriptionHeader_Verified";
			s = b.Verified;
			break;
		case 2:
			a = "#SteamDeckVerified_DescriptionHeader_Playable";
			s = b.Playable;
			break;
		case 1:
			a = "#SteamDeckVerified_DescriptionHeader_Unsupported";
			s = b.Unsupported;
	}
	const o = n.createElement(
		"span",
		{
			className: s,
		},
		(0, _.we)(P(t)),
	);
	const l = n.createElement(
		"span",
		{
			className: b.CompatibilityDetailRatingSummary,
		},
		(0, _.we)(i || a),
	);
	const c = r
		? (0, _.PP)(
				"#SteamDeckVerified_DescriptionHeader_WithAppName",
				n.createElement("b", null, (0, R.EK)(r)),
				o,
				l,
			)
		: (0, _.PP)("#SteamDeckVerified_DescriptionHeader", o, l);
	return n.createElement(
		"div",
		{
			className: b.CompatibilityDetailRatingSummary,
		},
		c,
	);
}
function P(e) {
	switch (e) {
		case 3:
			return "#SteamDeckVerified_Category_Verified";
		case 2:
			return "#SteamDeckVerified_Category_Playable";
		case 1:
			return "#SteamDeckVerified_Category_Unsupported";
		default:
			return "#SteamDeckVerified_Category_Unknown";
	}
}
