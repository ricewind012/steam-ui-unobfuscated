import { Localize, Hq } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { ETimeSinceSuffix } from "../../actual_src/utils/localization/datetime.js";
import n from "./63696.js";
import i from "./22222.js";
import a, { q3 } from "./90095.js";
import s from "./44846.js";
import o from "./64608.js";
import l, { mK } from "./13869.js";
import c from "./10606.js";
import m, { A as A_1 } from "./90765.js";
import d from "./35488.js";
import A, { Ev, yL, ED, tI, yt, db, gb, Av, qm, dw } from "./77347.js";
import p, { qw } from "./89748.js";
import g from "./16204.js";
import { V } from "./43802.js";
import { U } from "./27238.js";
import { Y } from "./28916.js";
import { B as B_1 } from "./45011.js";
import y from "./46422.js";
import B, { R7 } from "./11131.js";
const h = g;
function v(e) {
	switch (e.state) {
		case i.$J.Failed:
		case i.$J.Disconnecting:
		case i.$J.Connecting:
		case i.$J.Connected:
		case i.$J.Retrying: {
			return true;
		}
		case i.$J.NotPresent:
		case i.$J.Disconnected: {
			return false;
		}
	}
}
export function kE(e) {
	return (
		e.state == i.$J.Connecting ||
		e.state == i.$J.Disconnecting ||
		e.state == i.$J.Disconnecting ||
		e.state == i.$J.Retrying
	);
}
function E(e) {
	const { accessPoint } = e;
	const r = n.useCallback(() => {
		U(accessPoint);
	}, [accessPoint]);
	const a = accessPoint.type == i.WO.Wireless;

	const { isConnected, showAsLocked, displayName } = accessPoint;

	const A = kE(accessPoint);
	const p = ((e) => {
		const t = n.useCallback(() => {
			U(e);
		}, [e]);
		const r = n.useCallback(() => {
			V({
				accessPoint: e,
			});
		}, [e]);
		if (!e) {
			return {};
		}
		const i = {};
		if (e.isConnectable) {
			i.onOKButton = r;
			i.onOKActionDescription = (0, Localize)("#Settings_Internet_Connect");
			i.onMenuActionDescription = (0, Localize)("#Settings_Internet_Info");
		} else {
			i.onOKButton = t;
			i.onOKActionDescription = (0, Localize)("#Settings_Internet_Info");
		}
		i.onMenuButton = t;
		return i;
	})(accessPoint);
	if (accessPoint) {
		return (
			<o.D0
				{...p}
				onActivate={r}
				navKey={accessPoint.key}
				icon={
					A ? (
						<d.Spinner />
					) : isConnected ? (
						<d.Checkmark className={h.Checkmark} />
					) : null
				}
				label={displayName}
				childrenLayout="inline"
			>
				{showAsLocked && (
					<d.Lock locked className={A_1(h.LockIcon, h.LargerIcon)} />
				)}
				{a ? (
					<d.WirelessNetwork
						className={h.LargerIcon}
						strength={accessPoint?.wirelessAPInfo?.estrength}
					/>
				) : (
					<d.WiredNetwork className={h.LargerIcon} />
				)}
			</o.D0>
		);
	} else {
		return null;
	}
}
export function y6() {
	const ERef = n.useRef(new Map());
	const t = q3(() => [...A.OQ.Get().userVisibleAccessPoints]).map((t) => {
		if (!ERef.current.has(t.key)) {
			ERef.current.set(t.key, t.wirelessAPInfo?.strength_raw ?? 0);
		}
		return {
			accessPoint: t,
			initialRawSignalStrength: ERef.current.get(t.key),
		};
	});
	t.sort((e, t) => {
		let r = ((e, t) => {
			const e_isConnected = e.isConnected;
			if (e_isConnected == t.isConnected) {
				return 0;
			} else if (e_isConnected) {
				return -1;
			} else {
				return 1;
			}
		})(e.accessPoint, t.accessPoint);
		if (r == 0) {
			r = ((e, t) => {
				if (e.type == i.WO.Wired && t.type != i.WO.Wired) {
					return -1;
				} else if (
					(e.type != i.WO.Wired && t.type == i.WO.Wired) ||
					(e.type == i.WO.Wireless && t.type != i.WO.Wireless)
				) {
					return 1;
				} else if (e.type != i.WO.Wireless && t.type == i.WO.Wireless) {
					return -1;
				} else {
					return 0;
				}
			})(e.accessPoint, t.accessPoint);
		}
		if (r == 0) {
			r =
				e.initialRawSignalStrength > t.initialRawSignalStrength
					? -1
					: e.initialRawSignalStrength < t.initialRawSignalStrength
						? 1
						: 0;
		}
		return r;
	});
	return t.map((e) => e.accessPoint);
}
export function KM(e) {
	const t = Ev();
	const r = y6();
	const i = yL();
	const s = ED();
	tI();
	const [l, c, m] = q3(() => [
		r.filter((e) => v(e)),
		r.filter((e) => !v(e) && false),
		r.filter((e) => !v(e) && true),
	]);
	const d = i && s;
	return (
		<o.f3>
			<D />
			<N />
			<K />
			{!t && (
				<o.G5>
					<o.lr>{(0, Localize)("#Settings_Internet_Active_Networks")}</o.lr>
					{l.map((e) => (
						<E key={e.key} accessPoint={e} />
					))}
				</o.G5>
			)}
			{t && (
				<>
					<o.G5>
						<o.y4
							checked={i}
							onChange={(e) => A.OQ.Get().SetWifiEnabled(e)}
							label={(0, Localize)("#Settings_Internet_Wifi_Enabled")}
						/>
						{l.map((e) => (
							<E key={e.key} accessPoint={e} />
						))}
					</o.G5>
					{c.length > 0 && (
						<o.G5>
							<o.lr>{(0, Localize)("#Settings_Internet_Known_Networks")}</o.lr>
							{c.map((e) => (
								<E key={e.key} accessPoint={e} />
							))}
						</o.G5>
					)}
					<o.G5>
						<o.lr>{(0, Localize)("#Settings_Internet_Networks_Found")}</o.lr>
						{m.map((e) => (
							<E key={e.key} accessPoint={e} />
						))}
						{m.length == 0 && (
							<o.D0
								disabled
								bottomSeparator={d ? "standard" : "none"}
								label={(0, Localize)(
									"#Settings_Internet_No_Other_Networks_Found",
								)}
							/>
						)}
						{d && (
							<o.D0
								label={(0, Localize)(
									"#Settings_Internet_Custom_Network_Button",
								)}
								onActivate={() => V()}
							/>
						)}
					</o.G5>
				</>
			)}
			<o.G5>
				<o.lr>{(0, Localize)("#Settings_Internet_Advanced_Settings")}</o.lr>
				<F />
				<G />
			</o.G5>
		</o.f3>
	);
}
export function $I(e, t) {
	let r = (0, Localize)("#GoOnline");
	let i = (0, Localize)("#UserManagement_GoOnline_Desc");
	let a = GetOwningWindowForEvent(e);
	if (t) {
		return mK(
			<c.o0
				strTitle={r}
				strDescription={i}
				onOK={() => SteamClient.User.GoOnline()}
			/>,
			a,
			{
				strTitle: r,
				bForcePopOut: true,
			},
		);
	} else {
		return mK(
			<c.KG
				strTitle={r}
				strDescription={(0, Localize)("#UserManagement_GoOnline_NoNetwork")}
			/>,
			a,
			{
				strTitle: r,
				bForcePopOut: true,
			},
		);
	}
}
function K(e) {
	const t = q3(() => qw().GetServicesInitialized());
	const r = yt();
	const i = qw().BIsOfflineMode();
	const s = n.useCallback(
		(e) => {
			if (i) {
				$I(e, r);
			} else if (r) {
				((e) => {
					const t = y.oy.MainRunningApp != null;
					let r = GetOwningWindowForEvent(e);
					if (t) {
						let e = (0, Localize)("#GoOffline");
						let t = (0, Localize)("#UserManagement_OfflineMode_MustCloseGames");
						return mK(
							<c.o0
								strTitle={e}
								strDescription={t}
								strCancelButtonText=""
								bAlertDialog
							/>,
							r,
							{
								strTitle: e,
								bForcePopOut: true,
							},
						);
					}
					{
						let e = (0, Localize)("#GoOffline");
						let t = (0, Localize)("#UserManagement_OfflineMode_Desc");
						mK(
							<c.o0
								strTitle={e}
								strDescription={t}
								onOK={() => SteamClient.User.GoOffline()}
							/>,
							r,
							{
								strTitle: e,
								bForcePopOut: true,
							},
						);
					}
				})(e);
			}
		},
		[i, r],
	);
	if (!t) {
		return null;
	}
	const m = r || (0, Localize)("#UserManagement_OfflineMode_NoNetwork");
	return (
		<o.G5>
			<o.D0
				icon={i ? <d.Caution className={h.OfflineMode} /> : undefined}
				label={(0, Localize)(
					i
						? "#Settings_Internet_In_Offline_Mode"
						: "#Settings_Internet_Go_Offline",
				)}
				description={m}
				bottomSeparator="none"
				childrenContainerWidth="min"
			>
				<o.$n onClick={s} focusable={r} disabled={!r}>
					{(0, Localize)(i ? "#GoOnline" : "#GoOffline")}
				</o.$n>
			</o.D0>
		</o.G5>
	);
}
function D(e) {
	const t = db();
	const r = gb();
	if (!t) {
		return null;
	}
	let i = null;
	if (r > 0) {
		const e = (0, Hq)(r, {
			eSuffix: ETimeSinceSuffix.None,
			bHighGranularity: true,
		});
		i = (0, Localize)(
			"#Settings_Internet_Connected_To_Internet_But_Not_Steam_Throttled",
			e,
		);
	} else {
		i = (0, Localize)("#Settings_Internet_Connected_To_Internet_But_Not_Steam");
	}
	return (
		<o.G5>
			<o.D0
				icon={<d.Caution className={h.NetworkWarning} />}
				className={h.NetworkConnectivityWarningField}
				label={i}
				bottomSeparator="none"
				childrenContainerWidth="min"
			/>
		</o.G5>
	);
}
function N(e) {
	const t = Av().eConnectivityTestResult;
	if (!q3(() => qw().GetServicesInitialized())) {
		return null;
	}
	let r = null;
	let i = null;
	switch (t) {
		default:
		case s.ck.k_EConnectivityTestResult_Unknown:
		case s.ck.k_EConnectivityTestResult_Connected: {
			break;
		}
		case s.ck.k_EConnectivityTestResult_CaptivePortal: {
			r = (0, Localize)("#Settings_Internet_Captive_Portal_Detected");
			i = (
				<o.$n onClick={(e) => Y(GetOwningWindowForEvent(e))}>
					{(0, Localize)("#Settings_Internet_Captive_Portal_Login_Button")}
				</o.$n>
			);
			break;
		}
		case s.ck.k_EConnectivityTestResult_TimedOut:
		case s.ck.k_EConnectivityTestResult_Failed: {
			r = (0, Localize)(
				"#Settings_Internet_Connected_To_Network_But_Not_Internet",
			);
			break;
		}
		case s.ck.k_EConnectivityTestResult_NoLAN: {
			r = (0, Localize)("#Settings_Internet_Not_Connected_To_Network");
		}
		case s.ck.k_EConnectivityTestResult_WifiDisabled:
	}
	if (r) {
		return (
			<o.G5>
				<o.D0
					icon={<d.Caution className={h.NetworkWarning} />}
					className={h.NetworkConnectivityWarningField}
					label={r}
					bottomSeparator="none"
					childrenContainerWidth="min"
				>
					{i}
				</o.D0>
			</o.G5>
		);
	} else {
		return null;
	}
}
function F(e) {
	const t = qm();
	const r =
		t.proxy_mode != i.Xu.k_EHTTPProxyMode_Invalid
			? dw(t.proxy_mode)
			: (0, Localize)("#Settings_Internet_ConfigureProxy");
	const a = R7();
	return (
		<o.xh
			label={(0, Localize)("#Settings_Internet_HTTPProxy")}
			onClick={() => B_1(a.ownerWindow)}
		>
			{r}
		</o.xh>
	);
}
function G(e) {
	return (
		<o.xh
			label={(0, Localize)("#Settings_Internet_WebBrowserDataDelete")}
			onClick={(e) =>
				((e) => {
					let t = (0, Localize)("#Settings_Internet_WebBrowserDataDelete");
					return mK(
						<c.o0
							strTitle={t}
							strDescription={(0, Localize)(
								"#Settings_Internet_WebBrowserDataDelete_Desc",
							)}
							onOK={() => SteamClient.Browser.ClearAllBrowsingData()}
						/>,
						GetOwningWindowForEvent(e),
						{
							strTitle: t,
							bForcePopOut: true,
						},
					);
				})(e)
			}
			bottomSeparator="none"
		>
			{(0, Localize)("#Settings_Internet_WebBrowserDataDeleteButton")}
		</o.xh>
	);
}
