var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./78325.js");
var l = require(/*webcrack:missing*/ "./11131.js");
var c = require(/*webcrack:missing*/ "./63439.js");
var m = require("./64608.js");
var u = require(/*webcrack:missing*/ "./50376.js");
var d = require("./35488.js");
var A = require(/*webcrack:missing*/ "./46108.js");
var p = require("./20690.js");
var g = require(/*webcrack:missing*/ "./3524.js");
var h = require(/*webcrack:missing*/ "./52451.js");
var C = require(/*webcrack:missing*/ "./98995.js");
class _ {
	m_browser;
	m_bFindInPage = false;
	m_strFind = "";
	m_nResults = 0;
	m_nActiveResultIndex = 0;
	constructor(e) {
		(0, i.Gn)(this);
		this.m_browser = e;
		e.on("toggle-find-in-page", this.OnToggleFindInPage);
		e.on("find-in-page-results", this.OnFindInPageResults);
	}
	OnToggleFindInPage() {
		this.m_bFindInPage = !this.m_bFindInPage;
	}
	OnFindInPageResults(e, t) {
		if (this.m_nResults != e) {
			this.m_nResults = e;
		}
		this.m_nActiveResultIndex = t;
	}
	StartFind() {
		this.m_bFindInPage = true;
	}
	Find(e, t) {
		let r = e == this.m_strFind;
		if (!r) {
			this.m_strFind = e;
		}
		this.m_browser.FindInPage(e, r, t);
	}
	FindPrevious() {
		this.m_browser.FindInPage(this.m_strFind, true, true);
	}
	FindNext() {
		this.m_browser.FindInPage(this.m_strFind, true, false);
	}
	StopFind() {
		this.m_browser.StopFindInPage();
		this.m_bFindInPage = false;
	}
	get find_in_page() {
		return this.m_bFindInPage;
	}
	get find_string() {
		return this.m_strFind;
	}
	get num_results() {
		return this.m_nResults;
	}
	get active_result_index() {
		return this.m_nActiveResultIndex;
	}
}
export function M(e, t, r, n, i, a) {
	if (t && n) {
		return s.createElement(b, {
			strName: e,
			ownerWindow: t,
			targetBrowserInfo: r,
			browser: n,
			focusNavController: i,
			bActive: a,
		});
	} else {
		return null;
	}
}
function b(e) {
	const t = 330;
	const {
		strName: r,
		ownerWindow: n,
		targetBrowserInfo: i,
		browser: f,
		focusNavController: b,
		bActive: y,
	} = e;
	const S = n?.SteamClient.Browser.GetBrowserID();
	const w = r + "_Find";
	const B = (0, l.yq)(l.Dr.PopupContextMenu) | l.Wf.Hidden;
	const v = s.useRef(undefined);
	if (!v.current && f) {
		v.current = new _(f);
	}
	const I = s.useRef(undefined);
	const E = (0, a.q3)(() => v.current.find_in_page);
	const M = (0, a.q3)(() => v.current.find_string);
	const T = (0, a.q3)(() => v.current.num_results);
	const R = (0, a.q3)(() => v.current.active_result_index);
	const {
		popup: k,
		element: D,
		popupObj: N,
	} = (0, c.OJ)(w, {
		title: w,
		html_class: "fullheight",
		body_class: "fullheight",
		popup_class: "fullheight",
		target_browser: i,
		window_opener_id: S,
		parent_container_popup_id: S,
		dimensions: {
			width: t,
			height: 60,
		},
		eCreationFlags: B,
		bNoInitialShow: true,
	});
	const F = s.useCallback((e) => {
		v.current.Find(e.target.value, false);
	}, []);
	const G = s.useCallback(() => {
		v.current.FindPrevious();
	}, []);
	const O = s.useCallback(() => {
		v.current.FindNext();
	}, []);
	const P = s.useCallback(() => {
		v.current.StopFind();
	}, []);
	const L = s.useCallback((e) => {
		if (e.key === "Escape") {
			v.current.StopFind();
			e.stopPropagation();
		}
	}, []);
	const z = s.useCallback(
		(e) => {
			if (y && e.key == "f" && e.ctrlKey) {
				if (E) {
					I.current?.Focus();
					I.current?.element.select();
				} else {
					v.current.StartFind();
					e.preventDefault();
					e.stopPropagation();
				}
			}
		},
		[y, E],
	);
	(0, h.l6)(n, "keydown", z, {
		capture: true,
	});
	(0, h.l6)(k, "keydown", z, {
		capture: true,
	});
	const x = s.useCallback(() => {
		let e = f.GetBounds();
		n.SteamClient.Window.GetWindowRestoreDetails().then((r) => {
			const n = e.x + e.width - t - 20;
			const i = e.y;
			try {
				k?.SteamClient.Window.PositionWindowRelative(r, n, i, t, 60);
			} catch (e) {
				console.error(e);
			}
		});
	}, [n, f, k]);
	(0, h.l6)(n, "resize", x);
	s.useEffect(() => {
		if (f && N) {
			if (E && y) {
				if (k) {
					let e = f.GetBounds();
					n.SteamClient.Window.GetWindowRestoreDetails().then((r) => {
						const n = e.x + e.width - t - 20;
						const i = e.y;
						try {
							k.SteamClient.Window.PositionWindowRelative(r, n, i, t, 60);
							k.SteamClient.Window.ShowWindow();
							k.SteamClient.Window.BringToFront();
							I.current?.Focus();
							I.current?.element.select();
						} catch (e) {
							console.error(e);
						}
					});
				} else {
					N.Show();
				}
			} else {
				k?.SteamClient.Window.HideWindow();
			}
		}
	}, [y, E, n, f, k, N, D]);
	if (D) {
		return s.createElement(
			g.b5,
			{
				ownerWindow: k,
			},
			o.createPortal(
				s.createElement(
					"div",
					{
						className: p.FindBar,
					},
					s.createElement(m.pd, {
						className: p.SearchInput,
						value: M,
						onChange: F,
						onKeyDown: L,
						ref: I,
						focusable: true,
					}),
					s.createElement(
						"div",
						{
							className: p.SearchResults,
						},
						R,
						"/",
						T,
					),
					s.createElement(
						C.he,
						{
							toolTipContent: (0, A.we)("#BrowserFindInPage_Previous"),
						},
						s.createElement(m.$n, {
							className: p.ControlButton,
							svgicon: () =>
								s.createElement(u.L0X, {
									direction: "up",
								}),
							onClick: G,
						}),
					),
					s.createElement(
						C.he,
						{
							toolTipContent: (0, A.we)("#BrowserFindInPage_Next"),
						},
						s.createElement(m.$n, {
							className: p.ControlButton,
							svgicon: () =>
								s.createElement(u.L0X, {
									direction: "down",
								}),
							onClick: O,
						}),
					),
					s.createElement(
						C.he,
						{
							toolTipContent: (0, A.we)("#BrowserFindInPage_Close"),
						},
						s.createElement(m.$n, {
							className: p.ControlButton,
							svgicon: () => s.createElement(d.Close, null),
							onClick: P,
						}),
					),
				),
				D,
			),
		);
	} else {
		return null;
	}
}
(0, n.Cg)([i.sH], _.prototype, "m_bFindInPage", undefined);
(0, n.Cg)([i.sH], _.prototype, "m_strFind", undefined);
(0, n.Cg)([i.sH], _.prototype, "m_nResults", undefined);
(0, n.Cg)([i.sH], _.prototype, "m_nActiveResultIndex", undefined);
(0, n.Cg)([i.XI.bound], _.prototype, "OnToggleFindInPage", null);
(0, n.Cg)([i.XI.bound], _.prototype, "OnFindInPageResults", null);
(0, n.Cg)([i.XI], _.prototype, "StartFind", null);
(0, n.Cg)([i.XI], _.prototype, "Find", null);
(0, n.Cg)([i.XI], _.prototype, "StopFind", null);
