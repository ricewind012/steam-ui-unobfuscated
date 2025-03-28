import n, { Cg } from "./34629.js";
import { ESteamRealm } from "../../actual_src/clienttypes/realm.js";
import a from "./85243.js";
import s from "./44846.js";
import o from "./63696.js";
import l from "./18057.js";
import c from "./8436.js";
import u from "./46422.js";
import d from "./81338.js";
import A, { Gn } from "./89193.js";
import p, { OU } from "./51076.js";
import { $2 } from "./96680.js";
import h from "./37499.js";
import C from "./18052.js";
const m = c;
export class X4 {
	constructor() {
		Gn(this);
	}
	m_gidTransID = s.kF;
	m_unAppID = null;
	m_eRealm = ESteamRealm.k_ESteamRealmUnknown;
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
				if (t.includes(r)) {
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
Cg([A.sH], X4.prototype, "m_gidTransID", undefined);
export const UE = new X4();
export function B8(e) {
	if (OU(l.BV.GamepadUI.MicroTxnAuth())) {
		return <Y />;
	} else {
		return null;
	}
}
function Y(e) {
	let t = $2();
	const RRef = o.useRef(undefined);
	let n;
	RRef.current ||= UE.CreateBrowser(t);
	n = RRef.current;
	o.useEffect(
		() => () => {
			n?.Destroy();
			UE.AuthorizeMicroTxn(false);
		},
		[n],
	);
	o.useEffect(() => {
		let r_current = RRef.current;
		h.Q.AddMtxBrowser(r_current);
		return () => h.Q.RemoveMtxBrowser(r_current);
	}, []);
	return (
		<d.G
			browser={RRef.current}
			external
			path={l.BV.GamepadUI.MicroTxnAuth()}
			className={m.MicroTxnContainer}
			allowUnderlay={t.WindowType == a.W7.MainGamepadUI}
		/>
	);
}
