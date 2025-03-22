var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./5808.js");
var o = require(/*webcrack:missing*/ "./31084.js");
var l = require(/*webcrack:missing*/ "./88750.js");
var c = require(/*webcrack:missing*/ "./90242.js");
var m = require(/*webcrack:missing*/ "./26853.js");
var u = require(/*webcrack:missing*/ "./90765.js");
var d = require(/*webcrack:missing*/ "./46108.js");
var A = require(/*webcrack:missing*/ "./52451.js");
var p = require(/*webcrack:missing*/ "./72476.js");
var g = require("./44658.js");
var h = g;
var C = require("./78057.js");
var _ = require("./32700.js");
var f = require("./46217.js");
var b = require(/*webcrack:missing*/ "./69164.js");
var y = require(/*webcrack:missing*/ "./10975.js");
var S = require("./64608.js");
var w = require("./67512.js");
var B = w;
var v = require("./35376.js");
function I(e) {
	const {
		strTitle: t,
		strDescription: r,
		onPrimary: n,
		onSecondary: a,
		onCancel: s,
		closeModal: o,
		bDisableSecondary: l,
		strPrimaryButtonText: c,
		strSecondaryButtonText: m,
		strCancelButtonText: d,
		bPrimaryRequiresConfirm: A = false,
		strPrimaryConfirmText: p,
		className: g,
	} = e;
	const [h, C] = i.useState(false);
	const _ = i.useCallback(() => {
		if (o) {
			o();
		}
	}, [o]);
	const f = i.useCallback(() => {
		a();
		_();
	}, [a, _]);
	const b = i.useCallback(() => {
		if (s) {
			s();
		}
		_();
	}, [s, _]);
	const y = i.useCallback(() => {
		if (!A || h) {
			n();
			_();
		} else {
			C(true);
		}
	}, [n, _, A, h]);
	const w = (0, u.A)(B.StackedThreeButtonDialog, g);
	const I = (0, u.A)(B.PrimaryButton, h && B.RequestConfirm);
	const E = h && p ? p : c;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			v.e,
			{
				closeModal: o,
				className: w,
			},
			i.createElement(S.Y9, null, t),
			i.createElement(
				S.f3,
				{
					onCancelButton: b,
				},
				r,
			),
			i.createElement(
				S.wi,
				null,
				i.createElement(
					"div",
					{
						className: B.ButtonContainer,
					},
					i.createElement(S.xv, {
						className: B.StackedButtons,
						strPrimaryButtonText: E,
						onPrimary: y,
						classNamePrimary: I,
						strSecondaryButtonText: m,
						onSecondary: f,
						bDisableSecondary: l,
						strCancelButtonText: d,
						onCancel: b,
					}),
				),
			),
		),
	);
}
var E = require("./13869.js");
var M = require("./46422.js");
var T = require("./14982.js");
var R = require(/*webcrack:missing*/ "./88696.js");
var k = require("./76356.js");
var D = require("./35488.js");
var N = require(/*webcrack:missing*/ "./54644.js");
var F = require("./18869.js");
var G = require("./96680.js");
var O = require("./10294.js");
var P = require("./37086.js");
var L = require("./44351.js");
var z = require("./41480.js");
var x = require("./55717.js");
var U = require("./5482.js");
var W = require(/*webcrack:missing*/ "./14628.js");
var V = require("./18057.js");
function H(e) {
	switch (e) {
		case "phone":
			return (0, d.we)("#RemotePlay_Explainer_Description_Phone");
		case "tablet":
			return (0, d.we)("#RemotePlay_Explainer_Description_Tablet");
		case "tv":
			return (0, d.we)("#RemotePlay_Explainer_Description_TV");
		default:
			console.warn(`Unknown remote play anywhere support cateogry "${e}"`);
			return "";
	}
}
function j(e) {
	const { overview: t, onDismiss: r, ...n } = e;
	const a = (0, V.jb)();
	const s = W.TS.STORE_BASE_URL + "mobile";
	const o = zZ(t);
	let l = "";
	if (!o.length) {
		o.push("phone");
	}
	switch (o.length) {
		case 0:
			console.error(
				`Request to show remote play explainer dialog for app (${t.appid}) that does not support remote play`,
			);
			return null;
		case 1:
			l = H(o[0]);
			break;
		case 2:
			const [e, r] = o;
			l = (0, d.we)("#RemotePlay_Explainer_Description_Two", H(e), H(r));
			break;
		default:
			if (o.length > 3) {
				console.error(
					"Did not expect more than 3 remote play categories. Only know how to display 3 at a time.",
				);
			}
			const [n, i, a] = o;
			l = (0, d.we)(
				"#RemotePlay_Explainer_Description_Three",
				H(n),
				H(i),
				H(a),
			);
	}
	const c = (0, d.we)("#RemotePlay_Explainer_Description", t.display_name, l);
	const m = () => a(`${s}#steam_link_section`);
	return i.createElement(
		z.mt,
		{
			...n,
			onDismiss: r,
		},
		i.createElement(
			P.sh,
			null,
			i.createElement(L.Y9, null, (0, d.we)("#RemotePlay_Explainer_Title")),
			i.createElement("div", null, c),
			i.createElement(
				"div",
				{
					className: x.InsetContainer,
				},
				i.createElement(
					"div",
					null,
					i.createElement(
						"b",
						null,
						(0, d.we)("#RemotePlay_Explainer_HowWorks_Title"),
					),
				),
				i.createElement(
					"div",
					null,
					(0, d.oW)(
						"#RemotePlay_Explainer_HowWorks_1",
						i.createElement("b", null),
						i.createElement(P.Oy, {
							onClick: m,
						}),
					),
				),
				i.createElement(
					"div",
					null,
					(0, d.oW)(
						"#RemotePlay_Explainer_HowWorks_2",
						i.createElement("b", null),
						i.createElement(P.Oy, {
							onClick: m,
						}),
					),
				),
				i.createElement(
					"div",
					null,
					(0, d.oW)(
						"#RemotePlay_Explainer_HowWorks_3",
						i.createElement("b", null),
					),
				),
				i.createElement(
					"div",
					{
						className: x.LinksContainer,
					},
					i.createElement(
						U.rg,
						{
							className: x.QR,
						},
						s,
					),
					i.createElement(
						"div",
						{
							className: x.Right,
						},
						i.createElement(
							"b",
							null,
							(0, d.we)("#RemotePlay_Explainer_GetApp"),
						),
						i.createElement(
							"div",
							null,
							(0, d.PP)(
								"#RemotePlay_Explainer_GetApp_Desc",
								i.createElement(P.Oy, null, s),
							),
						),
						i.createElement(
							"div",
							{
								className: x.AppStoreContainer,
							},
							i.createElement(q, null),
							i.createElement(Q, null),
						),
					),
				),
			),
			i.createElement(
				L.wi,
				null,
				i.createElement(L.CB, {
					onCancel: r,
					strCancelText: (0, d.we)("#Button_Close"),
					onOK: () => {
						a(`${W.TS.STORE_BASE_URL}remoteplay#anywhere`);
						r();
					},
					strOKText: (0, d.we)("#RemotePlay_LearnMore_Button"),
				}),
			),
		),
	);
}
function q() {
	return i.createElement(Z, {
		imgURL: `${W.TS.STORE_CDN_URL}public/images/mobile/localizedimages/appleappstore/apple_store_${W.TS.LANGUAGE}.png`,
		href: "https://itunes.apple.com/app/steam-link/id1246969117",
	});
}
function Q() {
	return i.createElement(Z, {
		imgURL: `${W.TS.STORE_CDN_URL}public/images/mobile/localizedimages/googleplaystore/google_play_store_${W.TS.LANGUAGE}.png`,
		href: "https://play.google.com/store/apps/details?id=com.valvesoftware.steamlink",
		className: x.Google,
	});
}
function Z(e) {
	const { imgURL: t, href: r, className: n } = e;
	const a = (0, V.jb)();
	return i.createElement("img", {
		className: (0, u.A)(n, x.AppStoreLink),
		onClick: () => a(r),
		src: t,
	});
}
var Y = require(/*webcrack:missing*/ "./98995.js");
var K = require(/*webcrack:missing*/ "./50376.js");
export const aV = (0, i.forwardRef)(function (e, t) {
	const r = (0, F.br)();
	const n = (0, G.$2)();
	return i.createElement($, {
		...e,
		navigator: r,
		instance: n,
		ref: t,
	});
});
export function Iy(e) {
	const {
		launchApp: t,
		otherRunningGames: r,
		fnLaunchBoth: n,
		fnKillAndLaunch: a,
		fnCancelLaunch: s,
		closeModal: o,
	} = e;
	const l = r[0].display_name;
	const c = t.display_name;
	const m = r.length;
	const u = (0, O.VA)();
	const A =
		m > 1
			? (0, d.we)("#GameAction_Launch_Multiple_Description_Multiple")
			: (0, d.we)("#GameAction_Launch_Multiple_Description", l);
	const p =
		m > 1
			? (0, d.we)("#GameAction_Launch_Multiple_CloseAndLaunch_Multiple", c)
			: (0, d.we)("#GameAction_Launch_Multiple_CloseAndLaunch", l, c);
	const g = i.createElement(
		"div",
		{
			className: h.SaveWarning,
		},
		(0, d.we)("#GameAction_Launch_Multiple_Warning"),
	);
	return i.createElement(I, {
		className: h.LaunchMultipleAppsDialog,
		strTitle: (0, d.we)("#GameAction_Launch_Multiple_Title", c),
		strDescription: i.createElement(
			i.Fragment,
			null,
			A,
			i.createElement("br", null),
			g,
		),
		strPrimaryButtonText: p,
		onPrimary: a,
		bPrimaryRequiresConfirm: true,
		strPrimaryConfirmText: (0, d.we)(
			"#GameAction_Launch_Multiple_CloseAndLaunch_Confirm",
		),
		strSecondaryButtonText: (0, d.we)(
			"#GameAction_Launch_Multiple_LaunchSimultaneous",
			c,
		),
		onSecondary: n,
		bDisableSecondary: u,
		strCancelButtonText: (0, d.we)("#GameAction_Launch_Multiple_Cancel"),
		onCancel: s,
		closeModal: o,
	});
}
let $ = class extends i.Component {
	static contextType = p.QO;
	constructor(e) {
		super(e);
		this.state = {
			bShowRemotePlayExplainer: false,
		};
	}
	PerformAppAction(e, t) {
		e();
		if (t) {
			y.eZ.PlayNavSound(y.PN.LaunchGame);
		}
	}
	OnClick(e, t) {
		const r = (0, s.AH)(this.props.instance, this.props.overview, "selected");
		const n = (0, s.jy)(r, this.props.overview, "selected", 100, e);
		if (n) {
			let t = true;
			let a = false;
			if (this.context?.IN_GAMEPADUI) {
				switch (r) {
					case "Play":
					case "Launch":
					case "Connect":
					case "Stream":
						a = true;
				}
				if (r == "Play" || r == "Launch") {
					const r = M.oy.RunningApps.filter(
						(e) =>
							(e.app_type & 1) != 0 && e.appid != this.props.overview.appid,
					);
					const s = r.length;
					const o = (this.props.overview.app_type & 1) != 0;
					if (s > 0 && o && p.TS.ON_DECK) {
						t = false;
						const s = () => {
							for (const e of r) {
								SteamClient.Apps.TerminateApp(e.gameid, false);
							}
							this.PerformAppAction(n, a);
						};
						const o = i.createElement(Iy, {
							launchApp: this.props.overview,
							otherRunningGames: r,
							fnKillAndLaunch: s,
							fnLaunchBoth: () => this.PerformAppAction(n, a),
							fnCancelLaunch: () => {},
						});
						(0, E.pg)(o, e, {});
					}
				}
			}
			if (t) {
				this.PerformAppAction(n, a);
			}
		}
		if (
			this.props.bNavigateToApp &&
			this.props.overview.selected_per_client_data.display_status == 11
		) {
			this.props.navigator.App(this.props.overview.appid);
		}
		if (t) {
			t.stopPropagation();
			t.preventDefault();
		}
	}
	m_elActionButtonRef = i.createRef();
	FocusActionButton() {
		if (this.m_elActionButtonRef.current) {
			this.m_elActionButtonRef.current.focus();
		}
	}
	ShowStreamingMenu(e) {
		(0, o.lX)(
			i.createElement(te, {
				overview: this.props.overview,
				onStreamingTargetSelected: (e, t) => {
					SteamClient.Apps.SetStreamingClientForApp(
						this.props.overview.appid,
						e.clientid,
					);
				},
				onShowRemotePlayInfo: this.ShowRemotePlayInfo,
			}),
			this.m_elActionButtonRef.current,
			{
				bOverlapHorizontal: true,
			},
		);
		e.stopPropagation();
		e.preventDefault();
	}
	ShowRemotePlayInfo() {
		this.setState({
			bShowRemotePlayExplainer: true,
		});
	}
	HideRemotePlayInfo() {
		this.setState({
			bShowRemotePlayExplainer: false,
		});
	}
	render() {
		if (this.props.overview.selected_per_client_data.display_status == 13) {
			return null;
		}
		const {
			overview: e,
			buttonStyle: t,
			className: r,
			bShowStreamingSelector: n,
			strGameActionDetailsOverride: a,
			bFakeActions: o,
			bNavigateToApp: l,
			onFocus: A,
			navigator: p,
			instance: g,
			...f
		} = this.props;
		const y = t == "long";
		let S = (0, s.AH)(this.props.instance, e, "selected");
		let w = (0, s.Kw)(e, "selected");
		let B = !S && !w;
		const v = n && (e.per_client_data.length > 1 || ie(this.props.overview));
		if (C.H.BHasRecentlyLaunched(e.appid)) {
			S = null;
			w = "Launching";
			B = true;
		}
		let I = "";
		if (S || w) {
			I = (0, _.Np)(S ?? w);
		}
		const E = this.context?.IN_GAMEPADUI && S == "ResumeGameInProgress";
		const M = (e) => {
			const t = (0, s.jy)(
				"Stop",
				this.props.overview,
				"selected",
				100,
				(0, N.uX)(e),
			);
			if (t) {
				t();
			}
		};
		const T = S ?? w;
		const R = (0, s.k2)(T) || (0, s.KM)(T);
		const F =
			this.context?.IN_GAMEPADUI &&
			R &&
			k.I.GetActiveLaunches().get(e.appid.toString());
		const G = S == "Play" || S == "Launch" || S == "Stream" || S == "Connect";
		const O = (e) => this.OnClick((0, N.uX)(e), e);
		const P = i.createElement(
			b.Z,
			{
				className: (0, u.A)(
					r,
					y && h.LongButton,
					h.PlayButtonContainer,
					!S && h.Disabled,
					G && h.Green,
					v && h.ShowingStreaming,
				),
				...f,
			},
			i.createElement(
				c.ml,
				{
					noFocusRing: true,
					autoFocus: this.context?.IN_GAMEPADUI,
					className: (0, u.A)(h.PlayButton, h.ButtonChild, !T && h.NoAction),
					ref: this.m_elActionButtonRef,
					onMouseUp: o ? O : undefined,
					onClick: o ? undefined : O,
					onFocus: A,
				},
				F && i.createElement(D.Spinner, null),
				!F && T && (0, s.WB)(T),
				I.length > 0 &&
					i.createElement(
						"div",
						{
							className: (0, u.A)(h.ButtonText, B && h.ButtonThrobberPadding),
						},
						I,
					),
				B &&
					i.createElement(
						"div",
						{
							className: h.ThrobberContainer,
						},
						i.createElement(m.t, {
							className: h.Throbber,
							position: "center",
							size: "small",
						}),
					),
			),
			E &&
				i.createElement(
					b.Z,
					{
						focusable: true,
						className: h.ShutdownAppButton,
						onActivate: (e) => M(e),
						noFocusRing: true,
					},
					(0, s.WB)("Stop"),
				),
			v &&
				i.createElement(ee, {
					overview: e,
					onMouseUp: o ? this.ShowStreamingMenu : undefined,
					onClick: o ? undefined : this.ShowStreamingMenu,
				}),
			i.createElement(j, {
				overview: this.props.overview,
				active: this.state.bShowRemotePlayExplainer,
				onDismiss: this.HideRemotePlayInfo,
			}),
		);
		if (S === "Stream") {
			const e = this.props.overview.selected_per_client_data.client_name;
			if (e) {
				const t = (0, d.we)("#StreamingClient_StreamFrom", e);
				return i.createElement(
					Y.Gq,
					{
						toolTipContent: t,
					},
					P,
				);
			}
		}
		return P;
	}
};
function ee(e) {
	const { onMouseUp: t, onClick: r, overview: n } = e;
	const [a, o] = (function (e) {
		const t = 3;
		const [r, n] = (0, i.useState)(false);
		(0, A.Z3)(() => n(true), 30000, []);
		const [a, o] = (0, i.useState)(true);
		const l = (0, p.Qn)();
		const c = (0, G.$2)();
		(0, i.useEffect)(() => {
			if (!e) {
				return;
			}
			const r = (0, s.AH)(c, e, "selected");
			if (l && r === "Install" && e.per_client_data.length > 1) {
				const e = new R.A();
				e.GetString(le).then((r) => {
					const n = parseInt(r);
					if (isNaN(n)) {
						e.StoreString(le, "1");
						o(false);
					} else if (n < t) {
						e.StoreString(le, (n + 1).toString());
						o(false);
					}
				});
			}
		}, [c, e, l]);
		const m = (0, i.useCallback)(() => {
			o(true);
			new R.A().StoreString(le, t.toString());
		}, []);
		const u = k.I.GetActiveLaunches().has(e?.appid?.toString());
		return [!a && !r && !u, m];
	})(n);
	const l = (e) => {
		if (a) {
			o();
		}
		if (r) {
			r(e);
		}
	};
	return i.createElement(
		c.ml,
		{
			noFocusRing: true,
			className: (0, u.A)(h.StreamingSelector, h.ButtonChild),
			onMouseUp: (e) => {
				if (a) {
					o();
				}
				if (t) {
					t(e);
				}
			},
			onClick: l,
		},
		i.createElement(f.V5, null),
		a &&
			i.createElement(T.r9, {
				className: h.StreamingCallout,
				pulseMagnitude: 2,
				bobberMagnitude: 1.3,
			}),
		a &&
			i.createElement(
				"div",
				{
					className: h.StreamingCalloutMessageContainer,
					onClick: l,
				},
				i.createElement(
					T.kg,
					{
						className: h.StreamingCalloutMessage,
					},
					(0, d.we)("#RemotePlay_Tip_Callout"),
				),
			),
	);
}
function te(e) {
	const {
		overview: t,
		onStreamingTargetSelected: r,
		onShowRemotePlayInfo: n,
	} = e;
	const a = !(0, p.Qn)() && ie(t);
	return i.createElement(
		l.tz,
		null,
		t.per_client_data.map((n) =>
			i.createElement(se, {
				appid: t.appid,
				key: n.clientid,
				client: n,
				isLocalClient: t.BIsPerClientDataLocal(n),
				onSelected: (e) => r(n, e),
				selected:
					t.selected_clientid == n.clientid ||
					(e.overview.BIsSelectedClientLocal() && n.clientid == "0"),
			}),
		),
		a &&
			i.createElement(
				i.Fragment,
				null,
				i.createElement(l.K5, null),
				i.createElement(ne, {
					overview: t,
					onSelected: n,
				}),
			),
	);
}
(0, n.Cg)([A.oI], $.prototype, "PerformAppAction", null);
(0, n.Cg)([A.oI], $.prototype, "OnClick", null);
(0, n.Cg)([A.oI], $.prototype, "FocusActionButton", null);
(0, n.Cg)([A.oI], $.prototype, "ShowStreamingMenu", null);
(0, n.Cg)([A.oI], $.prototype, "ShowRemotePlayInfo", null);
(0, n.Cg)([A.oI], $.prototype, "HideRemotePlayInfo", null);
$ = (0, n.Cg)([a.PA], $);
const re = {
	generic: [
		"#StreamingClient_AnotherDevice",
		"#StreamingClient_LinkDesc_Generic",
	],
	phone: ["#StreamingClient_Phone", "#StreamingClient_LinkDesc_Specific_Phone"],
	tablet: [
		"#StreamingClient_TabletDevice",
		"#StreamingClient_LinkDesc_Specific_Tablet",
	],
	tv: ["#StreamingClient_TV", "#StreamingClient_LinkDesc_Specific_TV"],
	mobile: [
		"#StreamingClient_MobileDevice",
		"#StreamingClient_LinkDesc_Specific_Mobile",
	],
};
function ne(e) {
	const { overview: t, onSelected: r } = e;
	const n = zZ(t);
	if (!n.length) {
		return null;
	}
	let a = "generic";
	if (n.length === 1) {
		a = n[0];
	} else if (n.length === 2 && n.includes("phone") && n.includes("tablet")) {
		a = "mobile";
	}
	const [s, o] = re[a];
	const l = (0, d.we)(s);
	const c = (0, d.we)(o);
	return i.createElement(
		oe,
		{
			onSelected: r,
		},
		i.createElement(
			"div",
			null,
			i.createElement("div", null, l),
			i.createElement(
				"div",
				{
					className: h.RemotePlayAnywhereDescription,
				},
				c,
			),
		),
	);
}
function ie(e) {
	return zZ(e).length > 0;
}
export function zZ(e) {
	const t = [];
	for (const r of e.store_category) {
		switch (r) {
			case 41:
				t.push("phone");
				break;
			case 42:
				t.push("tablet");
		}
	}
	return t;
}
function se(e) {
	const { client: t, isLocalClient: r, onSelected: n, selected: a } = e;
	let s = (0, d.we)("#StreamingClient_StreamFrom", t.client_name);
	if (r) {
		s = p.TS.ON_DECK
			? (0, d.we)("#StreamingClient_ThisDeck")
			: (0, d.we)("#StreamingClient_ThisComputer");
	}
	return i.createElement(
		oe,
		{
			onSelected: n,
		},
		i.createElement(
			"span",
			{
				className: h.CheckContainer,
			},
			a && i.createElement(K.X4B, null),
		),
		i.createElement(
			"span",
			{
				className: h.StreamingTargetLabel,
			},
			s,
		),
	);
}
function oe(e) {
	return i.createElement(l.kt, {
		...e,
		className: h.StreamingContextMenuItem,
	});
}
const le = "TimesSeenStreamingCallout";
