var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./28987.js");
var a = require(/*webcrack:missing*/ "./85243.js");
var s = require(/*webcrack:missing*/ "./44846.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require("./18057.js");
var c = require("./8436.js");
var m = c;
var u = require("./46422.js");
var d = require("./81338.js");
var A = require(/*webcrack:missing*/ "./89193.js");
var p = require("./51076.js");
var g = require("./96680.js");
var h = require("./37499.js");
var C = require("./18052.js");
export class X4 {
	constructor() {
		(0, A.Gn)(this);
	}
	m_gidTransID = s.kF;
	m_unAppID = null;
	m_eRealm = i.TU.k_ESteamRealmUnknown;
	InitMicroTxnAuth(e, t, r) {
		if (this.m_gidTransID != s.kF) {
			this.AuthorizeMicroTxn(false);
		}
		this.m_gidTransID = t;
		this.m_unAppID = e;
		this.m_eRealm = r;
	}
	CreateBrowser(e) {
		const t = e.CreateBrowserView("Microtransaction", {
			strInitialURL: C.p,
		});
		this.InitBrowser(e, t.GetBrowser(), () => {
			u.oy.WindowStore.GetOverlayInstanceWithFallback(
				u.oy.MainRunningAppID,
				0,
			).NavigateBack();
		});
		return t;
	}
	InitBrowser(e, t, r) {
		t.SetSteamURLCallback((t) => {
			if (t.indexOf("steam://close/authorize") == 0) {
				this.AuthorizeMicroTxn(true);
				window.setTimeout(() => r(), 100);
				return true;
			}
			if (t.indexOf("steam://close/cancel") == 0) {
				this.AuthorizeMicroTxn(false);
				window.setTimeout(() => r(), 100);
				return true;
			}
			{
				const r = "steam://openexternalforpid/";
				if (t.indexOf(r) != -1) {
					const n = t.substring(r.length);
					const i = n.indexOf("/");
					if (i != -1) {
						const t = n.substring(i + 1);
						const r = {
							bWebPage: true,
							appid: e.params.browserInfo.m_unAppID,
							strDialog: t,
							eWebPageMode: s.Sx.k_EActivateGameOverlayToWebPageMode_Modal,
							unRequestingAppID: e.params.browserInfo.m_unAppID,
							steamidTarget: "0",
							eFlag: s.SS.k_EOverlayToStoreFlag_None,
							strConnectString: "",
						};
						h.Q.AddWebPageRequest(r);
						return true;
					}
				}
			}
			return false;
		});
	}
	GetTransID() {
		return this.m_gidTransID;
	}
	AuthorizeMicroTxn(e) {
		if (this.m_gidTransID && this.m_gidTransID != s.kF) {
			if (e) {
				SteamClient.User.AuthorizeMicrotxn(this.m_gidTransID);
			} else {
				SteamClient.User.CancelMicrotxn(this.m_gidTransID);
			}
			this.m_gidTransID = s.kF;
		}
	}
}
(0, n.Cg)([A.sH], X4.prototype, "m_gidTransID", undefined);
export const UE = new X4();
export function B8(e) {
	if ((0, p.OU)(l.BV.GamepadUI.MicroTxnAuth())) {
		return o.createElement(y, null);
	} else {
		return null;
	}
}
function y(e) {
	let t = (0, g.$2)();
	const r = o.useRef(undefined);
	var n;
	r.current ||= UE.CreateBrowser(t);
	n = r.current;
	o.useEffect(
		() => () => {
			n?.Destroy();
			UE.AuthorizeMicroTxn(false);
		},
		[n],
	);
	o.useEffect(() => {
		let e = r.current;
		h.Q.AddMtxBrowser(e);
		return () => h.Q.RemoveMtxBrowser(e);
	}, []);
	return o.createElement(d.G, {
		browser: r.current,
		external: true,
		path: l.BV.GamepadUI.MicroTxnAuth(),
		className: m.MicroTxnContainer,
		allowUnderlay: t.WindowType == a.W7.MainGamepadUI,
	});
}
