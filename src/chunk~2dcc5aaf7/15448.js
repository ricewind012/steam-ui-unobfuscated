var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./89193.js");
var l = require("./28346.js");
var c = require("./78057.js");
var m = require("./87935.js");
var u = require(/*webcrack:missing*/ "./50376.js");
var d = require("./91486.js");
var A = require(/*webcrack:missing*/ "./90765.js");
import {
	LocalizeRtime32ToShortDate,
	Localize,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";
var g = require(/*webcrack:missing*/ "./52451.js");
var h = require(/*webcrack:missing*/ "./31084.js");
var C = require(/*webcrack:missing*/ "./88750.js");
var _ = require("./76052.js");
var f = _;
var _b = require("./32700.js");
var y = require(/*webcrack:missing*/ "./69164.js");
var S = require("./56655.js");
var w = require("./10606.js");
var B = require("./7552.js");
var v = require("./18057.js");
require(/*webcrack:missing*/ "./72476.js");
let I = class extends i.Component {
	constructor(e) {
		super(e);
		(0, o.Gn)(this);
	}
	m_bDelayedLoad = true;
	m_refPortrait = i.createRef();
	state = {
		bCoverExpanded: false,
	};
	m_elCoverArt = i.createRef();
	componentDidMount() {
		this.m_bDelayedLoad = this.props.delayLoad;
		if (this.props.delayLoad) {
			const e = 800;
			window.setTimeout(() => {
				this.m_bDelayedLoad = false;
			}, e);
		}
	}
	OnImageLoad() {
		this.props.onImageLoad();
	}
	OnCoverClicked(e) {
		this.props.onCollapseStarted();
		this.setState({
			bCoverExpanded: true,
		});
	}
	OnCoverLeft() {
		if (this.state.bCoverExpanded) {
			this.setState({
				bCoverExpanded: false,
			});
			this.m_elCoverArt.current.addEventListener(
				"transitionend",
				this.CoverExpandCleanUp,
			);
		}
	}
	CoverExpandCleanUp() {
		this.props.onCollapseComplete();
		this.m_elCoverArt.current.removeEventListener(
			"transitionend",
			this.CoverExpandCleanUp,
		);
	}
	OnPortraitContextMenu(e) {
		(0, h.lX)(
			i.createElement(
				C.tz,
				null,
				i.createElement(
					C.kt,
					{
						onSelected: this.m_refPortrait.current.OnChangeArtwork,
					},
					(0, _b.Np)(
						this.m_refPortrait.current.is_custom_image
							? "ClearCustomArtwork"
							: "SetCustomArtwork",
					),
				),
			),
			e,
		);
	}
	render() {
		if (this.m_bDelayedLoad) {
			return null;
		}
		let e = "";
		if (this.props.overview.GetCanonicalReleaseDate()) {
			e = LocalizeRtime32ToShortDate(
				this.props.overview.GetCanonicalReleaseDate(),
			);
		}
		let t;
		let r = this.props.overview.BIsModOrShortcut();
		let n = !r && c.H.GetAssociations(this.props.overview.appid);
		let a = !r && c.H.GetDescriptions(this.props.overview.appid);
		let s = a && a.strSnippet;
		t = this.props.concise
			? i.createElement(
					"div",
					{
						className: f.ConciseContainer,
					},
					!r &&
						s &&
						i.createElement(
							"div",
							{
								className: (0, A.A)(),
							},
							i.createElement(
								"div",
								{
									className: f.GameDescription,
								},
								s,
							),
						),
				)
			: i.createElement(
					"div",
					{
						className: f.InnerContainer,
					},
					i.createElement(
						"div",
						{
							ref: this.m_elCoverArt,
							className: (0, A.A)(
								f.Portrait,
								this.state.bCoverExpanded && f.Expanded,
							),
							onContextMenu: this.OnPortraitContextMenu,
							onMouseLeave: this.OnCoverLeft,
							onClick: this.OnCoverLeft,
						},
						i.createElement(d.z, {
							ref: this.m_refPortrait,
							app: this.props.overview,
							eAssetType: 0,
							className: f.BoxArt,
							alt: this.props.overview.display_name,
							onLoad: this.OnImageLoad,
						}),
						i.createElement(
							"div",
							{
								className: f.ZoomInButton,
								onClick: this.OnCoverClicked,
							},
							i.createElement(u.eSy, null),
						),
					),
					!r &&
						s &&
						i.createElement(
							"div",
							{
								className: (0, A.A)(f.Description, f.SectionContainer),
							},
							i.createElement(
								"div",
								{
									className: f.GameDescription,
								},
								s,
							),
						),
					!r &&
						i.createElement(
							"div",
							{
								className: (0, A.A)(f.Stats, f.SectionContainer),
							},
							i.createElement(k, {
								className: f.Developers,
								data: n,
								association: "developer",
								label: "#AppDetails_Developer",
							}),
							i.createElement(k, {
								className: f.Publishers,
								data: n,
								association: "publisher",
								label: "#AppDetails_Publisher",
							}),
							i.createElement(k, {
								className: f.Franchises,
								data: n,
								association: "franchise",
								label: "#AppDetails_Franchise",
							}),
							i.createElement(R, {
								label: (0, Localize)("#AppDetails_ReleaseDate"),
								strDate: e,
							}),
						),
					!r &&
						i.createElement(
							"div",
							{
								className: (0, A.A)(f.FeaturesList, f.SectionContainer),
							},
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 7,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 8,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 9,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 11,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 6,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 10,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 5,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 23,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 1,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 2,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 16,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 18,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 20,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 3,
								minimode: false,
								suppresstooltip: true,
							}),
							i.createElement(l.n$, {
								overview: this.props.overview,
								feature: 22,
								minimode: false,
								suppresstooltip: true,
							}),
						),
				);
		return i.createElement(
			"div",
			{
				className: (0, A.A)(f.Container, r && f.ShortcutContainer),
			},
			r &&
				i.createElement(
					"div",
					{
						className: f.Shortcut,
					},
					(0, Localize)(
						"#AppDetails_Shortcut_Explanation",
						this.props.overview.display_name,
					),
				),
			t,
			i.createElement(E, {
				overview: this.props.overview,
				details: this.props.details,
			}),
		);
	}
};
function E(e) {
	const t = (0, S.er)();
	return i.createElement(
		i.Fragment,
		null,
		t &&
			i.createElement(M, {
				...e,
			}),
		i.createElement(T, {
			...e,
		}),
	);
}
function M(e) {
	const {
		eCategory: t,
		rgResults: r,
		strSteamDeckBlogURL: n,
	} = (0, s.q3)(() => ({
		eCategory: e.overview.steam_deck_compat_category,
		rgResults: e.details.vecDeckCompatTestResults ?? [],
		strSteamDeckBlogURL: e.details.strSteamDeckBlogURL ?? "",
	}));
	const a = (0, S.Wm)(t);
	const [o, l] = (0, i.useState)(false);
	const c = () => {
		l(false);
	};
	const m = (0, v.Qt)(n);
	const u = i.useCallback(() => {
		c();
		m();
	}, [m]);
	let d = {
		onOKButton: null,
		onOKActionDescription: null,
		onCancelButton: c,
		onCancelActionDescription: (0, Localize)("#Button_Close"),
	};
	if (e.overview.BIsModOrShortcut()) {
		return null;
	}
	let A = (0, Localize)("#DeckVerified_CompatibilitySection_Title");
	return i.createElement(
		"div",
		null,
		i.createElement(
			y.Z,
			{
				className: f.DeckVerifiedInfo,
				focusClassName: f.Focused,
			},
			i.createElement(
				"div",
				{
					className: f.Title,
				},
				A,
			),
			i.createElement(
				"div",
				{
					className: f.CompatLabel,
				},
				i.createElement(a, null),
				(0, S.Kt)(t),
			),
			i.createElement(
				y.Z,
				{
					onActivate: () => l(true),
					className: f.Details,
				},
				(0, Localize)("#DeckVerified_CompatibilitySection_Details"),
			),
			n &&
				i.createElement(B.Tz, {
					onOpenBlogPost: u,
					containerClass: f.Details,
				}),
		),
		i.createElement(
			w.mt,
			{
				active: o,
				onDismiss: c,
				modalClassName: "DeckVerifiedModalDialogClient",
			},
			i.createElement(
				y.Z,
				{
					onGamepadDirection: (e) => true,
				},
				i.createElement(B.g1, {
					results: {
						appid: e.overview.appid,
						resolved_category: t,
						resolved_items: r.map(({ test_result: e, test_loc_token: t }) => ({
							display_type: e,
							loc_token: t,
						})),
						steam_deck_blog_url: n,
					},
					buttonProps: d,
					onOpenBlogPost: u,
					autoFocus: true,
				}),
			),
		),
	);
}
function T(e) {
	const { nPriority: t, strName: r } = (0, s.q3)(() => ({
		nPriority: e.details.nCompatToolPriority,
		strName: e.details.strCompatToolDisplayName,
	}));
	if (!r) {
		return null;
	}
	let n;
	switch (t) {
		case 250:
		case 75:
			n = "#Steam_Settings_Compat_Launch_Tool_Forced";
			break;
		default:
			n = "#Steam_Settings_Compat_Launch_Tool_Whitelisted";
	}
	return i.createElement(
		"div",
		{
			className: f.CompatToolContainer,
		},
		LocalizeInlineReactWithFallback(
			"#Steam_Settings_Compat_Launch_SteamPlay",
			i.createElement("b", null),
		),
		" ",
		(0, Localize)(n, r),
	);
}
function R(e) {
	if (e.strDate) {
		return i.createElement(
			"div",
			{
				className: f.Release,
			},
			i.createElement(
				"div",
				{
					className: f.Label,
				},
				e.label,
			),
			i.createElement(
				"div",
				{
					className: f.Date,
				},
				e.strDate,
			),
		);
	} else {
		return null;
	}
}
(0, n.Cg)([o.sH], I.prototype, "m_bDelayedLoad", undefined);
(0, n.Cg)([g.oI], I.prototype, "OnImageLoad", null);
(0, n.Cg)([g.oI], I.prototype, "OnCoverClicked", null);
(0, n.Cg)([g.oI], I.prototype, "OnCoverLeft", null);
(0, n.Cg)([g.oI], I.prototype, "CoverExpandCleanUp", null);
(0, n.Cg)([g.oI], I.prototype, "OnPortraitContextMenu", null);
I = (0, n.Cg)([a.PA], I);
let k = class extends i.Component {
	GetURL(e, t, r) {
		if (t && t.length != 0) {
			return "steam://openurl/" + t;
		} else {
			return (
				"steam://openurl/" +
				m.B7.ResolveURL("StoreGameSearchPage") +
				"?" +
				r +
				"=" +
				encodeURIComponent(e)
			);
		}
	}
	render() {
		if (!this.props.data) {
			return null;
		}
		let e;
		let t;
		switch (this.props.association) {
			case "developer":
				e = this.props.data.rgDevelopers;
				t = "developer";
				break;
			case "publisher":
				e = this.props.data.rgPublishers;
				t = "publisher";
				break;
			case "franchise":
				e = this.props.data.rgFranchises;
				t = "franchise";
		}
		if (e.length == 0) {
			return null;
		}
		let r = [];
		for (let n = 0; n < e.length; n++) {
			const a = e[n];
			let s = this.GetURL(a.strName, a.strURL, t);
			r.push(
				i.createElement(
					"a",
					{
						key: a.strName,
						className: f.Name,
						href: s,
					},
					a.strName,
				),
			);
		}
		return i.createElement(
			"div",
			{
				className: (0, A.A)(this.props.className, f.AssociationList),
			},
			i.createElement(
				"div",
				{
					className: f.Label,
				},
				(0, Localize)(this.props.label),
			),
			i.createElement(
				"div",
				{
					className: f.Association,
				},
				r,
			),
		);
	}
};
k = (0, n.Cg)([a.PA], k);
var D = require("./70989.js");
var N = D;
export let b = class extends i.Component {
	m_contentRef = i.createRef();
	m_resizeObserver;
	m_mutationObserver;
	constructor(e) {
		super(e);
		this.state = {
			gameInfoHeight: 0,
			bBoxArtExpanded: false,
		};
	}
	componentDidMount() {
		if (this.m_contentRef.current) {
			this.m_resizeObserver = (0, g.Fd)(
				this.m_contentRef.current,
				this.OnResize,
			);
			this.m_mutationObserver = new MutationObserver(this.OnResize);
			this.m_mutationObserver.observe(this.m_contentRef.current, {
				subtree: true,
				childList: true,
			});
		}
	}
	componentWillUnmount() {
		this.m_resizeObserver.disconnect();
		this.m_mutationObserver.disconnect();
	}
	OnResize() {
		this.setBoxHeight();
	}
	OnImageLoad() {
		this.setBoxHeight();
	}
	onCollapseStarted() {
		this.setState({
			bBoxArtExpanded: true,
		});
	}
	onCollapseComplete() {
		this.setState({
			bBoxArtExpanded: false,
		});
	}
	setBoxHeight() {
		if (
			this.m_contentRef.current &&
			this.state.gameInfoHeight !=
				this.m_contentRef.current.children[0].scrollHeight
		) {
			this.setState({
				gameInfoHeight: this.m_contentRef.current.children[0].scrollHeight,
			});
		}
	}
	render() {
		let e = this.props.expand ? N.AppDetailsExpanded : N.AppDetailsCollapsed;
		let t;
		t =
			this.props.collapsible !== false
				? this.props.expand
					? this.state.gameInfoHeight + "px"
					: "0px"
				: "";
		return i.createElement(
			"div",
			{
				ref: this.m_contentRef,
				className: (0, A.A)(
					N.AppGameInfoContainer,
					e,
					this.props.suppressTransition ? N.SuppressTransition : "",
					N.Glassy,
					this.state.bBoxArtExpanded && N.BoxArtExpanded,
				),
				style: {
					height: t,
				},
			},
			i.createElement(I, {
				...this.props,
				onImageLoad: this.OnImageLoad,
				delayLoad: !this.props.expand,
				onCollapseStarted: this.onCollapseStarted,
				onCollapseComplete: this.onCollapseComplete,
			}),
			i.createElement("div", {
				className: N.GameInfoShadow,
			}),
		);
	}
};
(0, n.Cg)([g.oI], b.prototype, "OnResize", null);
(0, n.Cg)([g.oI], b.prototype, "OnImageLoad", null);
(0, n.Cg)([g.oI], b.prototype, "onCollapseStarted", null);
(0, n.Cg)([g.oI], b.prototype, "onCollapseComplete", null);
b = (0, n.Cg)([a.PA], b);
