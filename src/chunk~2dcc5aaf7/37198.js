var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./5482.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require(/*webcrack:missing*/ "./72476.js");
var o = require(/*webcrack:missing*/ "./34629.js");
var l = require(/*webcrack:missing*/ "./89193.js");
var c = require(/*webcrack:missing*/ "./12176.js");
var m = require("./36523.js");
var u = require(/*webcrack:missing*/ "./90095.js");
var d = require("./90869.js");
class A extends d.gf {
	m_eStatus = 0;
	constructor(e) {
		super(
			e.transport,
			(t) => {
				this.m_eStatus = t.bSuccess ? 3 : 4;
				e.onComplete(t);
			},
			e.onDeviceDetails,
		);
		(0, l.Gn)(this);
	}
	async Start() {
		if (this.m_eStatus !== 0) {
			console.error(
				"Cannot start an already started auth session. Create a new session instance.",
			);
			return 2;
		}
		this.m_eStatus = 1;
		try {
			await this.m_transport.MakeReady();
			const e = c.w.Init(m.R9);
			e.SetEMsg(9804);
			try {
				e.Body().set_device_details(await this.GetDeviceDetails());
			} catch (e) {
				console.error("Failed to GetDeviceDetails");
				console.log(e);
			}
			e.Body().set_website_id(s.TS.WEBSITE_ID);
			const t = await m.kX.BeginAuthSessionViaQR(this.m_transport, e);
			const r = t.GetEResult();
			const n = t.Hdr().transport_error();
			if (r !== 1) {
				console.error(
					`Failed to start auth session. Result: ${r} Transport: ${n}`,
				);
				this.m_eFailureState = d.eF.Generic;
				this.m_onCompleteCallback({
					bSuccess: false,
				});
				return r;
			}
			const {
				client_id: i,
				challenge_url: a,
				interval: o,
				request_id: l,
			} = t.Body().toObject();
			this.m_strClientID = i;
			this.m_strChallengeURL = a;
			this.m_msPollInterval = o * 1000;
			this.m_rgRequestID = l;
			this.m_eStatus = 2;
			this.StartPolling(false);
			return r;
		} catch (e) {
			console.error(`Failed to start auth session: ${JSON.stringify(e)}`);
			this.m_eFailureState = d.eF.Generic;
			this.m_onCompleteCallback({
				bSuccess: false,
			});
			return 2;
		}
	}
	Stop() {
		this.StopPolling();
		this.m_eStatus = 5;
	}
	GetChallengeURL() {
		return this.m_strChallengeURL;
	}
	GetStatus() {
		return this.m_eStatus;
	}
}
(0, o.Cg)([l.sH], A.prototype, "m_eStatus", undefined);
var p = require("./65136.js");
var g = p;
var h = require("./89791.js");
var C = require("./64608.js");
export function V(e) {
	const {
		transport: t,
		onComplete: r,
		onStatusChange: o,
		platform: l,
		deckStyling: c,
	} = e;
	const m = s.TS.IN_STEAMUI ? h.sW : h.P5;
	const {
		eStatus: d,
		strChallengeURL: p,
		bHadRemoteInteraction: C,
		reset: _,
		setTokenToRevoke: S,
	} = (function (e) {
		const [t, r] = (0, n.useState)(new A(e));
		(0, n.useEffect)(() => {
			t.Start();
			return () => {
				t.Stop();
			};
		}, [t]);
		return (0, u.q3)(() => ({
			strChallengeURL: t.GetChallengeURL(),
			eFailureState: t.GetFailureState(),
			eStatus: t.GetStatus(),
			bHadRemoteInteraction: t.BHadRemoteInteraction(),
			reset: () => r(new A(e)),
			setTokenToRevoke: t.SetTokenToRevoke,
		}));
	})({
		transport: t,
		onComplete: r,
		onDeviceDetails: m,
	});
	(0, n.useEffect)(() => o && o(d), [o, d]);
	const B = d === 2 ? p : s.TS.STORE_BASE_URL;
	const v = d === 0 || d === 1 || C;
	const I = d === 4;
	const E = d === 3;
	const M = E
		? n.createElement(w, null)
		: I
			? n.createElement(y, {
					reset: _,
				})
			: v
				? n.createElement(b, {
						size: "small",
					})
				: null;
	const T = v || I || E;
	(0, n.useEffect)(() => {
		if (e.refreshInfo?.login_token_id) {
			S(e.refreshInfo.login_token_id);
		}
	}, [e.refreshInfo, S]);
	const R = s.TS.EUNIVERSE !== 1;
	return n.createElement(
		"div",
		{
			className: g.Column,
		},
		n.createElement(
			"div",
			{
				style: {
					position: "relative",
				},
			},
			n.createElement(
				i.rg,
				{
					borderWidth: 0,
					activeBitColor: "#212328",
					inactiveBitColor: R ? "magenta" : "white",
					quality: f(B),
					className: (0, a.A)(
						g.LoginQR,
						c && g.QRLoginDeck,
						T && g.Blur,
						R && g.NonPublic,
					),
				},
				B,
			),
			T &&
				n.createElement(
					"div",
					{
						className: g.Overlay,
					},
					n.createElement(
						"div",
						{
							className: g.Box,
						},
						M,
					),
				),
		),
	);
}
function f(e) {
	if (e.length <= 90) {
		return i.Cc.Q;
	} else {
		return undefined;
	}
}
function b(e) {
	const { size: t } = e;
	return n.createElement("div", {
		className: (0, a.A)(
			g.Loading,
			t == "small" && g.Small,
			(t == "medium" || !t) && g.Medium,
			t == "large" && g.Large,
		),
	});
}
function y(e) {
	return n.createElement(
		C.$n,
		{
			onClick: e.reset,
			className: g.QRFailure,
		},
		n.createElement(S, null),
	);
}
function S(e) {
	return n.createElement(
		"svg",
		{
			version: "1.1",
			id: "Layer_2",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				width: "40px",
				height: "40px",
				cursor: "pointer",
			},
			x: "0px",
			y: "0px",
			width: "256px",
			height: "256px",
			viewBox: "0 0 256 256",
		},
		n.createElement("path", {
			fill: "none",
			stroke: "#fff",
			strokeWidth: "30",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
		}),
		n.createElement("polygon", {
			points: "147.639,108.361 245.755,10.166 245.834,108.361",
			fill: "#fff",
		}),
	);
}
function w() {
	return n.createElement(
		"svg",
		{
			version: "1.1",
			id: "base",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				width: "45px",
				height: "45px",
			},
			x: "0px",
			y: "0px",
			width: "256px",
			height: "256px",
			viewBox: "0 0 256 256",
		},
		n.createElement("polyline", {
			fill: "none",
			stroke: "#fff",
			strokeWidth: "24",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			points: "49.5,147.75 95,210.75 206.5,45.25 ",
		}),
	);
}
