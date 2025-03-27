import { Localize } from "../../actual_src/utils/localization.js";
import {
	GetOwningWindowForElement,
	GetOwningWindowForEvent,
} from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./22222.js";
import a from "./44846.js";
import s from "./64608.js";
import o, { pg } from "./13869.js";
import l, { A as A_1 } from "./90765.js";
import m, { vJ, xM, L$ } from "./52451.js";
import u from "./35488.js";
import d, { rw, Jg, td, Op, Av, qk } from "./77347.js";
import A, { Y } from "./28916.js";
import p from "./63988.js";
import h, { _ as __1 } from "./67338.js";
import _, { D7 } from "./33572.js";
import f, { $2 } from "./96680.js";
const g = p;
export function V(e = {}, t) {
	pg(<Y {...e} />, window, t);
}
function Y(e) {
	return (
		<o.x_ onEscKeypress={e.closeModal}>
			<S {...e} />
		</o.x_>
	);
}
function S(e) {
	const { accessPoint } = e;
	__1(accessPoint);
	const r = accessPoint == null;
	const [a, setA] = n.useState(0);
	const [l, setL] = n.useState({
		deviceId: r ? d.OQ.Get().wirelessNetworkDevice?.id : accessPoint.deviceId,
		deviceWapId: r || accessPoint.deviceWapId,
		credentials: {
			username: "",
			password: r ? "" : (accessPoint.wirelessAPInfo?.password ?? ""),
		},
		customAP: r
			? {
					ssid: null,
					esecurity: w(d.OQ.Get().supportedWirelessSecurityFlags),
				}
			: null,
	});
	const [A, setA_1] = n.useState(false);
	const [g, setG] = n.useState(null);
	const _ = vJ(() => g, [g]);
	const f = r
		? (l.customAP?.ssid ?? (0, Localize)("#Internet_Network_Type_Other"))
		: accessPoint.displayName;
	const b = r ? i.WO.Wireless : accessPoint.type;
	const y = (l.credentials?.password ?? "") != "";
	const S = r || accessPoint.showAsLocked;
	const B = r || (accessPoint.showAsLocked && !y);
	const I = r ? _ : accessPoint.isConnected;
	const E = xM();
	const T = async (e) => {
		if (!r && accessPoint.state == i.$J.NotPresent && a != 2) {
			setA(2);
			return false;
		}
		setA(1);
		setA_1(false);
		const n = d.OQ.Get().Connect(e);
		setG(n);
		setL(e);
		const s = await n;
		if (!s && !E()) {
			setA_1(true);
			if (S) {
				setA(3);
			}
		}
		return s;
	};
	if (!r && accessPoint?.state == i.$J.NotPresent && a != 2 && a != 3) {
		setA(2);
		return null;
	}
	if (a == 0) {
		if (B) {
			setA(3);
		} else {
			T(l);
		}
		return null;
	}
	const R = () => {
		if (a == 1) {
			accessPoint?.Forget();
		}
		if (S) {
			setA(3);
		} else if (e.closeModal) {
			e.closeModal();
		}
	};
	const k = () => {
		if (a == 1) {
			accessPoint?.Forget();
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const D = () => {
		if (e.onSuccess) {
			e.onSuccess();
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	switch (a) {
		case 1: {
			return (
				<M
					networkDisplayName={f}
					currentlyConnected={I}
					networkType={b}
					lastConnectAttemptFailed={A}
					onCloseAction={D}
					onBackAction={R}
					onCancelAction={k}
				/>
			);
		}
		case 2: {
			return (
				<s.UC>
					<s.Y9>
						{(0, Localize)("#Settings_Internet_Network_Not_Found", f)}
					</s.Y9>
					<s.nB>
						<s.wi>
							<s.jn autoFocus onClick={D}>
								{(0, Localize)("#Button_Close")}
							</s.jn>
						</s.wi>
					</s.nB>
				</s.UC>
			);
		}
		case 3: {
			return (
				<V_1
					accessPoint={accessPoint}
					connectParams={l}
					onSubmit={T}
					onCancel={k}
					lastAttemptFailed={A}
				/>
			);
		}
	}
}
function w(e) {
	const t = [
		i.Df.Wpa2,
		i.Df.Wpa,
		i.Df.DynamicWep,
		i.Df.StaticWep,
		i.Df.Wpa2Enterprise,
		i.Df.WpaEnterprise,
	].filter((t) => e.includes(t));
	if (t.length > 0) {
		return t[0];
	} else {
		return i.Df.None;
	}
}
function B(e) {
	const t = rw().map((e) => ({
		data: e,
		label: Jg(e),
	}));
	return (
		<s.Vb
			selectedOption={e.value}
			label={(0, Localize)("#Settings_Internet_Security_Type")}
			layout="inline"
			onChange={(t) => e.onChange(t.data)}
			rgOptions={t}
		/>
	);
}
function V_1(e) {
	const [t, setT] = n.useState(e.connectParams);
	const [a, setA] = n.useState(t.customIP4 != null);
	const MRef = n.useRef(undefined);
	const URef = n.useRef(undefined);
	const ARef = n.useRef(undefined);
	const p = e.accessPoint == null;
	const h =
		(p ? t.customAP?.esecurity : e.accessPoint?.wirelessAPInfo?.esecurity) ??
		i.Df.Unsupported;
	const C = td(h);
	const b = Op(h);
	const y = !p && h == i.Df.Unsupported;
	n.useEffect(() => {
		if (MRef.current) {
			MRef.current.element?.click();
		} else if (URef.current) {
			URef.current.element?.click();
		} else if (ARef.current) {
			ARef.current.element?.click();
		}
	}, []);
	let S = true;
	if (p && !t.customAP?.ssid) {
		S = false;
	}
	$2();
	const w = D7();
	const v = () => {
		let r;
		if (S) {
			w.SetVirtualKeyboardHidden();
			if (
				!a ||
				!t.customIP4 ||
				(r.ip == "" &&
					r.netmask == "" &&
					r.gateway_ip == "" &&
					r.primary_dns_ip == "" &&
					r.secondary_dns_ip == "")
			) {
				t.customIP4 = null;
			}
			if (S && e.onSubmit) {
				e.onSubmit(t);
			}
		}
	};
	let E;
	E = e.lastAttemptFailed
		? p
			? (0, Localize)("#Settings_Internet_Reenter_Network_Credentials")
			: (0, Localize)(
					"#Settings_Internet_Reenter_The_Password_For_Network",
					e.accessPoint?.displayName,
				)
		: p
			? (0, Localize)("#Settings_Internet_Enter_Network_Credentials")
			: (0, Localize)(
					"#Settings_Internet_Enter_The_Password_For_Network",
					e.accessPoint?.displayName,
				);
	const M = d.OQ.Get().wirelessNetworkDevice?.mac;
	return (
		<s.U9 classNameContent={A_1(g.PasswordPromptContent)} onSubmit={v}>
			<s.nB>
				<s.lr>
					{e.lastAttemptFailed && (
						<div className={g.DialogError}>
							{(0, Localize)("#Settings_Internet_Failed_To_Connect")}
						</div>
					)}
					{y && (
						<div className={g.DialogError}>
							{(0, Localize)("#Settings_Internet_AP_Security_Unsupported")}
						</div>
					)}
					{E}
				</s.lr>
				{p && (
					<s.qq
						className={g.PasswordPromptNetworkName}
						label={(0, Localize)("#Settings_Internet_Enter_NetworkName")}
						value={t.customAP?.ssid ?? ""}
						onChange={(e) => {
							setT({
								...t,
								customAP: {
									...t.customAP,
									ssid: e.target.value,
								},
							});
						}}
						ref={MRef}
					/>
				)}
				{p && (
					<B
						value={h}
						onChange={(e) => {
							setT({
								...t,
								customAP: {
									...t.customAP,
									esecurity: e,
								},
							});
						}}
					/>
				)}
				{C && (
					<s.D0
						className={g.PasswordPromptUserName}
						label={(0, Localize)("#Settings_Internet_Enter_UserName")}
						childrenContainerWidth="fixed"
					>
						<s.pd
							onChange={(e) => {
								setT({
									...t,
									credentials: {
										...t.credentials,
										username: e.target.value,
									},
								});
							}}
							value={t.credentials.username ?? ""}
							ref={URef}
						/>
					</s.D0>
				)}
				{b && (
					<s.D0
						className={g.PasswordPromptPassword}
						label={(0, Localize)("#Settings_Internet_Enter_Password")}
						childrenContainerWidth="fixed"
					>
						<s.yA
							onChange={(e) => {
								setT({
									...t,
									credentials: {
										...t.credentials,
										password: e.target.value,
									},
								});
							}}
							value={t.credentials.password ?? ""}
							ref={ARef}
						/>
					</s.D0>
				)}
				{!a && (
					<s.xh onClick={() => setA(true)} bottomSeparator="none">
						{(0, Localize)("#Settings_Internet_Connect_Advanced_Enable")}
					</s.xh>
				)}
				{a && (
					<I
						customIP4={t.customIP4}
						setCustomIP4={(e) => {
							setT({
								...t,
								customIP4: e,
							});
						}}
					/>
				)}
				{a && M && (
					<s.Nv label={(0, Localize)("#Settings_Internet_MAC_Address")}>
						{M}
					</s.Nv>
				)}
			</s.nB>
			<s.wi>
				<s.CB
					strOKText={(0, Localize)("#Settings_Internet_Connect")}
					onOK={v}
					onCancel={e.onCancel}
					bOKDisabled={!S}
				/>
			</s.wi>
		</s.U9>
	);
}
function I(e) {
	const t = (t, r) => {
		e.setCustomIP4({
			...e.customIP4,
			[t]: r.target.value,
		});
	};
	return (
		<>
			<s.MQ
				label={(0, Localize)("#Settings_Internet_IP")}
				value={e.customIP4?.ip}
				onChange={(e) => t("ip", e)}
			/>
			<s.MQ
				label={(0, Localize)("#Settings_Internet_Netmask")}
				value={e.customIP4?.netmask}
				onChange={(e) => t("netmask", e)}
			/>
			<s.MQ
				label={(0, Localize)("#Settings_Internet_Gateway")}
				value={e.customIP4?.gateway_ip}
				onChange={(e) => t("gateway_ip", e)}
			/>
			<s.MQ
				label={(0, Localize)("#Settings_Internet_Primary_DNS")}
				value={e.customIP4?.primary_dns_ip}
				onChange={(e) => t("primary_dns_ip", e)}
			/>
			<s.MQ
				label={(0, Localize)("#Settings_Internet_Secondary_DNS")}
				value={e.customIP4?.secondary_dns_ip}
				onChange={(e) => t("secondary_dns_ip", e)}
			/>
		</>
	);
}
export function E(e) {
	const TRef = n.useRef({
		...d.OQ.Get().connectivityTestState,
		eConnectivityTestResult: a.ck.k_EConnectivityTestResult_Unknown,
	});
	if (!e.bChecking) {
		TRef.current = e;
	}
	return TRef.current;
}
function M(e) {
	const t = e.networkType == i.WO.Wireless;
	const e_currentlyConnected = e.currentlyConnected;
	const o = !e_currentlyConnected && e.lastConnectAttemptFailed;
	const p = !e_currentlyConnected && !o;
	const h = E(Av());
	const _ =
		e_currentlyConnected &&
		h.eConnectivityTestResult == a.ck.k_EConnectivityTestResult_Connected;
	const f =
		e_currentlyConnected &&
		h.eConnectivityTestResult == a.ck.k_EConnectivityTestResult_CaptivePortal;
	const b = ((e) => {
		const { bTimerCompleted, fnStopTimer, fnRestartTimer } = L$(20000);
		n.useEffect(() => {
			if (e) {
				fnRestartTimer();
			} else {
				fnStopTimer();
			}
		}, [e, fnRestartTimer, fnStopTimer]);
		return bTimerCompleted;
	})(e_currentlyConnected);
	const y = e_currentlyConnected && qk(h.eConnectivityTestResult) && (b || f);
	const S = e_currentlyConnected && !_ && !y;
	const w = S ? 1 : _ ? 2 : y ? 3 : 0;
	const B = {};
	let v;
	if (_) {
		B.onOKButton = e.onCloseAction;
		B.onOKActionDescription = (0, Localize)("#Button_Done");
		B.onCancelButton = e.onCloseAction;
		B.onCancelActionDescription = null;
	} else if (y) {
		B.onCancelButton = e.onBackAction;
		B.onCancelActionDescription = (0, Localize)("#Button_Cancel");
	} else {
		B.onOKButton = () => true;
		B.onOKActionDescription = null;
		B.onCancelButton = e.onBackAction;
		B.onCancelActionDescription = (0, Localize)("#Button_Cancel");
	}
	v = _
		? (0, Localize)("#Settings_Internet_Connection_Successful")
		: f
			? (0, Localize)("#Settings_Internet_Captive_Portal_Detected")
			: y
				? (0, Localize)("#Settings_Internet_Failed_To_Connect_To_Internet")
				: S
					? (0, Localize)("#Settings_Internet_Connecting_To_Internet")
					: o
						? (0, Localize)("#Settings_Internet_Failed_To_Connect_To_Network")
						: (0, Localize)(
								"#Settings_Internet_Connecting_To_Network",
								e.networkDisplayName,
							);
	const h_strCaptivePortalURL = h.strCaptivePortalURL;
	const M = n.useCallback(
		(e) => {
			Y(e, h_strCaptivePortalURL);
		},
		[h_strCaptivePortalURL],
	);
	let KRef = n.useRef(undefined);
	n.useEffect(() => {
		if (f) {
			M(GetOwningWindowForElement(KRef.current));
		}
	}, [f, M]);
	return (
		<s.UC>
			<s.f3 retainFocus noFocusRing autoFocus focusable={false} {...B}>
				<div className={g.ConnectingProgressIcons} ref={KRef}>
					<T icon={<u.SteamPal className={g.SteamPalIcon} />} />
					<R state={p ? 1 : e_currentlyConnected ? 2 : 3} />
					<T
						failed={o}
						icon={
							t ? (
								<u.WirelessNetwork className={g.ProgressNetworkIcon} />
							) : (
								<u.WiredNetwork className={g.ProgressNetworkIcon} />
							)
						}
					/>
					<R state={w} />
					<T
						failed={y}
						icon={<u.WiredNetwork className={g.ProgressNetworkIcon} />}
					/>
				</div>
				<div className={g.ConnectionStatus}>
					<div
						className={A_1(g.ConnectionStatusText, {
							[g.Success]: _,
							[g.Failed]: o || y,
						})}
					>
						{v}
					</div>
					<s.X8 alignItems="center" topPadding="none">
						{f && (
							<s.$n onClick={(e) => M(GetOwningWindowForEvent(e))}>
								{(0, Localize)(
									"#Settings_Internet_Captive_Portal_Login_Button",
								)}
							</s.$n>
						)}
						{y && (
							<s.$n onClick={e.onCloseAction}>
								{(0, Localize)("#Settings_Internet_Use_Network_Anyway")}
							</s.$n>
						)}
						{y && (
							<s.$n onClick={e.onCancelAction}>
								{(0, Localize)("#Settings_Internet_Try_Another_Network")}
							</s.$n>
						)}
						{!_ && !y && (
							<s.$n onClick={e.onBackAction}>
								{(0, Localize)("#Button_Cancel")}
							</s.$n>
						)}
						{_ && (
							<s.$n onClick={e.onCloseAction}>
								{(0, Localize)("#Login_Continue")}
							</s.$n>
						)}
					</s.X8>
				</div>
			</s.f3>
		</s.UC>
	);
}
function T(e) {
	return (
		<div
			className={A_1(g.ConnectingProgressIconContainer, e.failed && g.Failed)}
		>
			<div className={g.ConnectingProgressIcon}>{e.icon}</div>
		</div>
	);
}
function R(e) {
	return (
		<div
			className={A_1(g.ConnectingThrobberContainer, e.state == 3 && g.Failed)}
		>
			{e.state == 1 && (
				<div className={g.ConnectingThrobber}>
					<div />
					<div />
					<div />
				</div>
			)}
			{e.state == 2 && <u.Checkmark />}
			{e.state == 3 && <u.Close />}
		</div>
	);
}
