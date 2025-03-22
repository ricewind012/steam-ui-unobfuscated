var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./18057.js");
var o = require("./93966.js");
var l = require("./19037.js");
var c = require("./31800.js");
var m = require("./46422.js");
var u = require("./96538.js");
var d = require("./78057.js");
var A = require("./74827.js");
var p = require("./96593.js");
var g = require("./47979.js");
var h = require("./61175.js");
var C = require(/*webcrack:missing*/ "./49519.js");
var _ = require(/*webcrack:missing*/ "./90242.js");
var f = require(/*webcrack:missing*/ "./69164.js");
var b = require(/*webcrack:missing*/ "./10975.js");
var y = require("./79421.js");
var S = require(/*webcrack:missing*/ "./26853.js");
var w = require(/*webcrack:missing*/ "./90765.js");
var B = require(/*webcrack:missing*/ "./72476.js");
var v = require("./69196.js");
var I = v;
var E = require("./80818.js");
var M = require("./59856.js");
var T = require("./56262.js");
var R = require("./46424.js");
var k = require("./18869.js");
var D = require("./45426.js");
var N = require(/*webcrack:missing*/ "./89193.js");
export const xA = (0, a.PA)(function (e) {
	const { appid: t } = (0, C.g)();
	const r = parseInt(t);
	const n = p.tw.GetAppOverviewByAppID(r);
	const a = (0, C.zy)();
	(function (e, t) {
		i.useEffect(() => {
			(0, N.h5)(() => {
				g.b.ClearSelection();
				h.n6.SetGameListSelection(t, e);
				h.n6.UpdateGameListSelection();
			});
		}, [e, t]);
	})(r, a.state?.strCollectionId);
	let o = i.useCallback(
		(e, t) =>
			i.createElement(kg, {
				overview: e,
				details: t,
			}),
		[],
	);
	if (e.renderFunc) {
		o = e.renderFunc;
	}
	if (!n || n.BIsAppBlocked()) {
		return i.createElement(C.rd, {
			to: s.BV.Library.Home(),
		});
	} else {
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(G, {
				appid: r,
				renderChildrenFunc: o,
			}),
			i.createElement("div", {
				className: I.TopGradient,
			}),
		);
	}
});
let G = class extends i.Component {
	m_hAppDetails = null;
	m_hAppDetailsParent = null;
	constructor(e) {
		super(e);
		this.RegisterForAppDetails();
	}
	componentDidUpdate(e) {
		if (e.appid != this.props.appid) {
			this.RegisterForAppDetails();
		}
	}
	componentWillUnmount() {
		this.UnregisterForAppDetails();
	}
	RegisterForAppDetails() {
		this.UnregisterForAppDetails();
		const e = p.tw.GetAppOverviewByAppID(this.props.appid);
		this.m_hAppDetails = d.H.RegisterForAppData(this.props.appid);
		u.O.FetchDataForApp(this.props.appid);
		A.Ri.EnterAppDetailsPage(this.props.appid);
		if (e && e.optional_parent_app_id) {
			this.m_hAppDetails = d.H.RegisterForAppData(e.optional_parent_app_id);
			u.O.FetchDataForApp(e.optional_parent_app_id);
		}
	}
	UnregisterForAppDetails() {
		A.Ri.ExitAppDetailsPage(this.props.appid);
		if (this.m_hAppDetails) {
			this.m_hAppDetails.unregister();
			this.m_hAppDetails = null;
		}
		if (this.m_hAppDetailsParent) {
			this.m_hAppDetailsParent.unregister();
			this.m_hAppDetailsParent = null;
		}
	}
	render() {
		const e = p.tw.GetAppOverviewByAppID(this.props.appid);
		const t = d.H.GetAppDetails(this.props.appid);
		if (t && e && !e.BIsAppBlocked()) {
			return this.props.renderChildrenFunc(e, t);
		} else {
			return i.createElement(
				"div",
				{
					className: I.Container,
				},
				i.createElement(S.t, {
					className: I.Throbber,
					size: "xlarge",
				}),
			);
		}
	}
};
G = (0, n.Cg)([a.PA], G);
export const kg = (0, a.PA)(function (e) {
	const { overview: t, details: r } = e;
	const n = (0, B.Qn)();
	const [a, s] = i.useState(false);
	const [d, A] = i.useState(undefined);
	const p = i.useRef(undefined);
	const g = i.useRef(undefined);
	const h = t?.appid;
	const C = (0, k.br)();
	const v = !t || t.BIsAppBlocked();
	i.useEffect(() => {
		if (v) {
			console.log("App", t, "removed or blocked, navigating back to home");
			C.Home();
		}
	}, [v, t, C]);
	const N = i.useCallback(() => {
		if (a) {
			s(false);
		}
	}, [a]);
	const F = i.useCallback(() => {
		if (!a) {
			s(true);
		}
	}, [a]);
	const G = i.useCallback(() => {
		p.current?.ScrollToTop();
	}, [p]);
	const O = i.useCallback(() => {
		A(h);
	}, [h]);
	(0, o.pC)(
		i.useCallback(() => {
			if (n) {
				m.oy.GamepadUIAudio.PlayNavSound(b.PN.OutOfGameDetail);
			}
		}, [n]),
	);
	if (n) {
		(0, c.Tc)(g, 250);
	}
	const P = d == h;
	const L = !P || !u.O.BHasDataForApp(h);
	const [z, x] = i.useState(false);
	const U = i.useRef(false);
	const W = (0, _.b$)();
	i.useLayoutEffect(() => {
		if (z) {
			p.current?.ScrollToTop();
			if (
				W.current?.BFocusWithin() &&
				document.activeElement instanceof HTMLElement
			) {
				U.current = true;
				document.activeElement.blur();
			}
		} else if (U.current) {
			const e = window.setTimeout(() => {
				U.current = false;
				if (!W.current?.BFocusWithin()) {
					W.current?.FocusVisibleChild();
				}
			}, 1000);
			return () => window.clearTimeout(e);
		}
	}, [z, W, p]);
	if (r && t && !t.BIsAppBlocked()) {
		if (t.app_type == 8192) {
			return i.createElement(R.gR, {
				overview: t,
				details: r,
			});
		} else {
			return i.createElement(
				i.Fragment,
				null,
				!n &&
					i.createElement(T.XC, {
						className: (0, w.A)(I.PlayBar, a && I.ShowPlayBar),
						details: r,
						overview: t,
						stickyheader: a,
						onGameInfoToggle: G,
						onSeek: undefined,
					}),
				i.createElement(
					y.ix,
					{
						className: I.Container,
						scrollClassName: (0, w.A)(
							I.ScrollContainer,
							I.Glassy,
							a && I.Sticky,
							z && I.PreventScrolling,
						),
						scrollToTopThreshold: 386,
						ref: p,
						innerRef: g,
						scrollToTopButtonWrapper: D.f,
					},
					i.createElement(
						f.Z,
						{
							className: I.InnerContainer,
						},
						i.createElement(E.xZ, {
							className: (0, w.A)(I.Header, P && I.HeaderLoaded),
							fnOnLoaded: O,
							overview: t,
							fullscreen: z,
						}),
						i.createElement(
							f.Z,
							{
								navRef: W,
								className: I.AppDetailsOverviewPanel,
								childFocusDisabled: z,
							},
							i.createElement(M.N_, {
								details: r,
								overview: t,
								bFastRender: L,
								onGameInfoButtonToggle: G,
								onWaypointEnter: N,
								onWaypointLeave: F,
								bShowingLaunchDetails: z,
							}),
						),
						e.LaunchingDetails &&
							i.createElement(e.LaunchingDetails, {
								onShowLaunchingDetails: x,
								overview: t,
							}),
					),
				),
				n &&
					i.createElement(l.LP, {
						appid: h,
					}),
			);
		}
	} else {
		return i.createElement(
			"div",
			{
				className: I.Container,
			},
			i.createElement(S.t, {
				className: I.Throbber,
				size: "xlarge",
			}),
		);
	}
});
