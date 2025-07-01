import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { W6 } from "./49519.js";
import s from "./64608.js";
import o from "./35488.js";
import l from "./34792.js";
import c from "./44846.js";
import m from "./46422.js";
import { q3 } from "./90095.js";
import d from "./44313.js";
import A, { gc, uD } from "./52451.js";
import p, { Av } from "./77347.js";
import g from "./10606.js";
import { pg } from "./13869.js";
import { Y as Y_1 } from "./28916.js";
import _ from "./18057.js";
import f from "./45309.js";
import b from "./4406.js";
import { dd } from "./32179.js";
import { Di } from "./13925.js";
import { Qo } from "./47356.js";
import B from "./46375.js";
import v, { lJ } from "./17386.js";
import E, { Gn, fm } from "./89193.js";
import M from "./52698.js";
import { M as M_1 } from "./19840.js";
import R from "./50350.js";
import k, { rP } from "./72476.js";
import { Vs, Lb, Hy, y_ as y_1 } from "./20326.js";
import N from "./81247.js";
import F from "./28351.js";
import G from "./57472.js";
import P from "./66943.js";
import { cS, ws, KO } from "../../actual_src/stores/25467.js";
import z from "./60517.js";
function X_1() {
	const e = gc(m.oy.NavigationManager.GetShowDebugFocusRing());
	return (
		<s.y4
			label="Show Debug Focus Ring"
			checked={e}
			onChange={(e) => {
				m.oy.NavigationManager.SetShowDebugFocusRing(e);
			}}
		/>
	);
}
export class Lc {
	static s_Singleton;
	static k_strContinuouslyRenderStorageKey = "continuously_render_store";
	m_machineStorage = new M.g();
	m_bContinuouslyRender = false;
	static Get() {
		Lc.s_Singleton ||= new Lc();
		return Lc.s_Singleton;
	}
	constructor() {
		Gn(this);
		this.Load().then(() => fm(this.Save));
	}
	get ContinuouslyRender() {
		return this.m_bContinuouslyRender;
	}
	set ContinuouslyRender(e) {
		this.m_bContinuouslyRender = e;
	}
	async Load() {
		this.m_bContinuouslyRender =
			(await this.m_machineStorage.GetObject(
				Lc.k_strContinuouslyRenderStorageKey,
			)) ?? false;
	}
	async Save() {
		return this.m_machineStorage.StoreObject(
			Lc.k_strContinuouslyRenderStorageKey,
			this.m_bContinuouslyRender,
		);
	}
}
function W() {
	const e = q3(() => Lc.Get().ContinuouslyRender);
	return (
		<s.y4
			label="Continuously Render Frames"
			description={
				'\n\t\t\t\tWhen nothing is painted/composited, Chromium won\'t update the framebuffer, resulting in "0 fps".\n\t\t\t\tThis setting puts a flashing pixel in the corner of the screen to continuously push frames with\n\t\t\t\tnearly zero overhead to help comparatively profile performance changes in GamepadUI.\n\t\t\t'
			}
			checked={e}
			onChange={(e) => (Lc.Get().ContinuouslyRender = e)}
		/>
	);
}
function V() {
	const e = q3(() => l.rV.settings.bEnableSoftProcessKill);
	return (
		<s.y4
			label="Enable Soft Process Kill"
			checked={e}
			onChange={(e) => {
				SteamClient.Settings.SetEnableSoftProcessKill(e);
			}}
		/>
	);
}
function H() {
	const e = q3(() => m.oy.ForceBetaSectionVisible);
	return (
		<s.y4
			label="Force Beta Section Visible"
			checked={e}
			onChange={(e) => {
				m.oy.ForceBetaSectionVisible = e;
			}}
		/>
	);
}
function J_1() {
	const e = rP();
	const t = q3(() => m.oy.RemainInBigPictureModeOnClose);
	const r = i.useCallback(
		(t) => {
			m.oy.RemainInBigPictureModeOnClose = t;
			if (e.IN_GAMEPADUI) {
				SteamClient.UI.ExitBigPictureMode();
			}
		},
		[e],
	);
	if (k.TS.IN_GAMESCOPE) {
		return null;
	} else {
		return (
			<s.y4
				label="Remain in Big Picture Mode on Window Close"
				description="Changing setting will exit Big Picture Mode to apply."
				checked={t}
				onChange={r}
			/>
		);
	}
}
function Q_1() {
	return (
		<>
			<s.iK>Log Settings</s.iK>
			<d.e />
		</>
	);
}
function Q() {
	const e = Av();
	return (
		<>
			<s.lr>Internet Connectivity Test</s.lr>
			<s.Vb
				label="Simulate connectivity condition"
				layout="inline"
				rgOptions={[
					{
						label: "None",
						data: c.jr.k_ENetFakeLocalSystemState_Normal,
					},
					{
						label: "Not connected to AP (NoLAN)",
						data: c.jr.k_ENetFakeLocalSystemState_NoLAN,
					},
					{
						label: "No Internet",
						data: c.jr.k_ENetFakeLocalSystemState_NoInternet,
					},
					{
						label: "Captive Portal - redirected",
						data: c.jr.k_ENetFakeLocalSystemState_CaptivePortal_Redirected,
					},
					{
						label: "Captive Portal - in place",
						data: c.jr.k_ENetFakeLocalSystemState_CaptivePortal_InPlace,
					},
					{
						label: "Can't connect to Steam",
						data: c.jr.k_ENetFakeLocalSystemState_NoSteam,
					},
				]}
				selectedOption={e.eFakeState}
				onChange={(e) => p.OQ.Get().SetNetFakeLocalSystemState(e.data)}
			/>
			<s.xh
				label="Connectivity state"
				description={c.ck[e.eConnectivityTestResult]}
				icon={e.bChecking && <o.Spinner />}
				disabled={e.bChecking}
				onClick={() => p.OQ.Get().RecheckConnectivity()}
			>
				Retest
			</s.xh>
			{e.strCaptivePortalURL && (
				<s.xh
					label="Captive portal detected"
					description={e.strCaptivePortalURL}
					onClick={(e) => Y_1(GetOwningWindowForEvent(e))}
				>
					Open
				</s.xh>
			)}
		</>
	);
}
function Z() {
	const e = W6();
	const t = q3(() => l.rV.settings.bIsSteamSideload)
		? "Set system Steam as default"
		: "Set sideload Steam as default";
	return (
		<s.BC alignItems="right">
			<s.$n onClick={() => e.push(_.BV.GamepadUI.Zoo.Root())}>Open Zoo</s.$n>
			<s.$n onClick={() => pg(<X />, window)}>Open Drive Info</s.$n>
			<s.$n onClick={() => SteamClient.Settings.ToggleSteamInstall()}>{t}</s.$n>
			<s.$n onClick={() => pg(<J />, window, {})}>Add Client Beta</s.$n>
		</s.BC>
	);
}
function Y() {
	const e = W6();
	let t = i.useCallback(() => {
		Di({});
	}, []);
	return (
		<>
			<s.lr>Internal Links</s.lr>
			<s.BC>
				<s.$n onClick={t}>Lock Screen</s.$n>
				<s.$n
					onClick={() =>
						e.push(_.BV.Library.Home(), {
							bShowGuidedTour: true,
						})
					}
				>
					Guided Tour
				</s.$n>
				<s.$n onClick={(e) => Qo(GetOwningWindowForEvent(e))}>
					Hardware Survey
				</s.$n>
			</s.BC>
		</>
	);
}
function K() {
	const e = dd();
	return (
		<>
			<s.lr>Miscellaneous</s.lr>
			<s.y4
				controlled
				checked={e}
				onChange={() => {}}
				disabled
				label="Use New Achievements Pages"
			/>
			<B.g5 />
		</>
	);
}
function X(e) {
	return (
		<g.x_ onEscKeypress={e.closeModal}>
			<s.UC>
				<s.Y9>Drives</s.Y9>
				<s.nB>
					<N.q />;
				</s.nB>
			</s.UC>
		</g.x_>
	);
}
function J(e) {
	const [t, setT] = i.useState("");
	const [n, setN] = i.useState("");
	return (
		<f.X_
			{...e}
			title="Add Client Beta"
			description="Specify a name and password for a new Steam Client beta"
			disableCommit={t.length == 0 || n.length == 0}
			onCommitResult={() => {
				if (t.length > 0) {
					SteamClient.Settings.AddClientBeta(t, n);
				}
			}}
		>
			<s.pd
				autoFocus
				label="Beta Name"
				onChange={(e) => setT(e.target.value)}
				placeholder="New Beta"
			/>
			<s.pd
				label="Beta Password"
				onChange={(e) => setN(e.target.value)}
				placeholder="Password"
			/>
		</f.X_>
	);
}
function $() {
	pg(
		<g.o0
			strTitle="Reboot to alternate OS partition?"
			strDescription="Confirm will restart your device"
			onOK={() => {
				SteamClient.System?.RebootToAlternateSystemPartition();
			}}
		/>,
		window,
		{
			strTitle: "Error",
		},
	);
}
function Ee(e) {
	return (
		<s.xh label="Reboot to alternate system partition" onClick={$}>
			Reboot
		</s.xh>
	);
}
function te() {
	pg(
		<g.o0
			strTitle="Delete all browser data?"
			strDescription="This includes the Chrome browser as well as Steam internal HTTP client"
			onOK={() => {
				SteamClient.Settings.ClearAllHTTPCaches();
			}}
		/>,
		window,
		{
			strTitle: "Error",
		},
	);
}
function Re(e) {
	return (
		<s.xh label="Delete all CEF & internal HTTP client data" onClick={te}>
			Delete
		</s.xh>
	);
}
function Ne(e) {
	const [t, r] = lJ();
	const [n, a, o] = uD();
	return (
		<s.G5>
			{n && <v.Rw closeModal={o} />}
			<s.lr>Display</s.lr>
			<s.y4
				label="Show display scaling settings for Internal Display"
				checked={t}
				onChange={r}
			/>
			<G.G
				feature={7}
				setting="gamescope_use_game_refresh_rate_in_steam"
				label={(0, Localize)("#Settings_Developer_UseGameRefreshRateInSteam")}
			/>
			<s.BC alignItems="right">
				<s.$n
					onClick={() => {
						m.oy.WindowStore.GamepadUIMainWindowInstance?.BrowserWindow?.SteamClient.Window.ResizeTo(
							1280,
							800,
							false,
						);
					}}
				>
					Reset window size
				</s.$n>
				<s.$n onClick={a}>Show display scale dialog</s.$n>
			</s.BC>
		</s.G5>
	);
}
function Ie(e) {
	const { device } = e;
	const r = cS(device.id);
	const n = ws(r);
	if (!r) {
		return null;
	}
	let r_name = r.name;
	if (n !== null) {
		r_name += ` - Battery Percent: ${n}`;
	}
	return (
		<s.y4
			icon={<P.u3 type={device.etype} name={r.name} />}
			label={r_name}
			disabled={!r.wake_allowed_supported}
			checked={r.wake_allowed}
			onChange={(e) =>
				z.RF.SetWakeAllowed({
					device: device.id,
					allowed: e,
				})
			}
		/>
	);
}
function Ae(e) {
	const { rPairedDevices } = KO();
	return (
		<s.G5>
			<s.lr>Bluetooth WakeAllowed</s.lr>
			{rPairedDevices.map((e, t) => (
				<Ie device={e} key={e.id} />
			))}
		</s.G5>
	);
}
export function Vg() {
	const e = rP();
	const t = M_1("GamepadPage_MaxWidthEnabled_2", true);
	const r = i.useCallback((e) => {}, []);
	if (e.IN_VR) {
		return [false, r];
	} else {
		return t;
	}
}
export function W1() {
	return M_1("GamepadPage_MaxWidth", R.QK);
}
function Le(e) {
	const [t, r] = Vg();
	const [n, a] = W1();
	const o = rP().IN_VR;
	return (
		<>
			<s.RF
				label="Constrain GamepadPage width"
				checked={t}
				onChange={r}
				disabled={o}
			/>
			{t && (
				<s.d3
					indentLevel={1}
					label="Max width in virtual pixels"
					min={200}
					max={2000}
					layout="inline"
					showValue
					editableValue
					resetValue={R.QK}
					valueSuffix="px"
					value={n}
					onChange={a}
				/>
			)}
		</>
	);
}
function Ce(e) {
	const [t, r] = Vs();
	const [n, a] = Lb();
	const [o, l] = Hy();
	const [c, m] = y_1();
	return (
		<>
			<s.RF label="Show debug pointer" checked={t} onChange={r} />
			{t && (
				<>
					<s.d3
						indentLevel={1}
						label="Debug pointer size"
						min={1}
						max={100}
						layout="inline"
						showValue
						editableValue
						resetValue={12}
						valueSuffix="px"
						value={n}
						onChange={a}
					/>
					<s.d3
						indentLevel={1}
						label="Debug pointer opacity (when inside window)"
						min={0}
						max={1}
						step={0.1}
						layout="inline"
						showValue
						renderValue={(e) => `${Math.round(e * 100)}%`}
						resetValue={1}
						value={o}
						onChange={l}
					/>
					<s.d3
						indentLevel={1}
						label="Debug pointer opacity (when outside window)"
						min={0}
						max={1}
						step={0.1}
						layout="inline"
						showValue
						renderValue={(e) => `${Math.round(e * 100)}%`}
						resetValue={0.5}
						value={c}
						onChange={m}
					/>
				</>
			)}
		</>
	);
}
export function BY(e) {
	return (
		<s.nB>
			<Z />
			<s.lr>Internal Settings</s.lr>
			<Le />
			<X_1 />
			<Ce />
			<W />
			<V />
			<H />
			<J_1 />
			<Ee />
			<b.Lf />
			<Re />
			<F.w2 />
			<Ne />
			<Ae />
			<Q />
			<Q_1 />
			<Y />
			<K />
		</s.nB>
	);
}
Cg([E.sH], Lc.prototype, "m_bContinuouslyRender", undefined);
Cg([A.oI], Lc.prototype, "Save", null);
