import { Localize } from "../../actual_src/utils/localization.js";
import n from "./96000.js";
import i, { Bh } from "./48289.js";
import a from "./5640.js";
import s, { Gs } from "./64004.js";
import o, { VI } from "./34792.js";
import l, { Sn } from "./46422.js";
import c, { q3 } from "./90095.js";
import m from "./63696.js";
import u from "./3475.js";
import d from "./88750.js";
import A from "./78325.js";
import p from "./21937.js";
import { R7 } from "./11131.js";
import h from "./88808.js";
import _ from "./35488.js";
import { uD, CH } from "./52451.js";
import y, { Qn, Y2, td } from "./72476.js";
import S from "./37743.js";
import B from "./32998.js";
import { A as A_1 } from "./90765.js";
function C(e) {
	const {
		active,
		hideMenu,
		element,
		position,
		browserInfo,
		options = {},
		refInstance,
		children,
	} = e;
	const c = R7().ownerWindow;
	const [u, setU] = m.useState();
	const _Ref = m.useRef();
	_Ref.current ||= new p.z();
	m.useLayoutEffect(() => {
		if (active || options.bRetainOnHide) {
			if (u) {
				if (active) {
					u.Show();
				}
			} else {
				const e = _Ref.current.CreateContextMenuInstance(
					<d.tz bForceDesktopPresentation>{children}</d.tz>,
					element,
					position?.x,
					position?.y,
					{
						...options,
						bForcePopup: true,
						bStandalone: true,
					},
				);
				e.SetOnHideCallback(() => {
					hideMenu();
					if (!options.bRetainOnHide) {
						refInstance.current = undefined;
						setU(undefined);
					}
				});
				refInstance.current = e;
				setU(e);
			}
		}
	}, [active, u]);
	m.useEffect(() => {
		if (u) {
			u.SetPosition(position.x, position.y, options);
		}
	}, [u, position, options]);
	if (active || options.bRetainOnHide) {
		return A.createPortal(
			<h.k managerOverride={_Ref.current} bSuppressMouseOverlay />,
			c.document.body,
		);
	} else {
		return null;
	}
}
const w = S;
const I = new Map([
	[
		"Online",
		{
			flags: 1,
			ePersonaState: 1,
			strURL: "steam://friends/status/online",
			eParentalFeature: 4,
		},
	],
	[
		"Away",
		{
			flags: 2,
			ePersonaState: 3,
			strURL: "steam://friends/status/away",
			eParentalFeature: 4,
		},
	],
	[
		"Invisible",
		{
			flags: 131072,
			ePersonaState: 7,
			strURL: "steam://friends/status/invisible",
			eParentalFeature: 4,
		},
	],
	[
		"Offline",
		{
			flags: 8,
			ePersonaState: 0,
			strURL: "steam://friends/status/offline",
			eParentalFeature: 4,
		},
	],
	[
		"Store",
		{
			flags: 16,
			bHideInCybercafe: true,
			strURL: "steam://store",
			eParentalFeature: 1,
		},
	],
	[
		"MyGames",
		{
			flags: 64,
			strURL: "steam://open/library",
		},
	],
	[
		"Community",
		{
			flags: 32,
			bHideInChina: true,
			strURL: "steam://url/CommunityHome",
		},
	],
	[
		"Friends",
		{
			flags: 512,
			strURL: "steam://open/friends",
			eParentalFeature: 4,
		},
	],
	[
		"FriendActivity",
		{
			flags: 16384,
			bHideInChina: true,
			strURL: "steam://url/SteamIDFriendsPage",
			eParentalFeature: 4,
		},
	],
	[
		"Screenshots",
		{
			flags: 4096,
			strURL: "steam://open/screenshots",
		},
	],
	[
		"Servers",
		{
			flags: 128,
			strURL: "steam://open/servers",
		},
	],
	[
		"Settings",
		{
			flags: 2048,
			strURL: "steam://open/settings",
		},
	],
	[
		"BigPicture",
		{
			flags: 8192,
			bHideInChina: true,
			bHideInGamepadUI: true,
			strURL: "steam://open/bigpicture",
		},
	],
	[
		"CloseBigPicture",
		{
			flags: 8192,
			bHideInChina: true,
			bHideInDesktop: true,
			strURL: "steam://close/bigpicture",
		},
	],
	[
		"VR",
		{
			flags: 65536,
			bHideInChina: true,
			strURL: "steam://run/250820",
		},
	],
	[
		"Exit",
		{
			flags: 1024,
			onSelected: () => {
				SteamClient.User.StartShutdown(true);
			},
		},
	],
	[
		"AlwaysExit",
		{
			onSelected: () => {
				SteamClient.User.StartShutdown(true);
			},
		},
	],
	[
		"StopStreaming",
		{
			bHideWhenNotStreaming: true,
			strURL: "steam://stopstreaming",
		},
	],
	[
		"Console",
		{
			strURL: "steam://open/console",
			eParentalFeature: u.JC,
		},
	],
]);
export function T() {
	return I;
}
function M(e) {
	const { overview } = e;
	const [r] = VI("library_display_icon_in_game_list");
	return (
		<d.kt
			key={overview.appid}
			onSelected={() => {
				SteamClient.Apps.RunGame(overview.GetGameID(), "", -1, 500);
			}}
		>
			{r && (
				<div className={w.GameIcon}>
					<B.nK item={overview} />
				</div>
			)}
			<_T item={overview} />
		</d.kt>
	);
}
function _T(e) {
	let t = q3(() => {
		let { item } = e;
		return {
			display_name: item.display_name,
			display_status: item.display_status,
			active_beta: item.active_beta,
		};
	});
	let r = "";
	switch (t.display_status) {
		case 6:
		case 18:
		case 19:
		case 20:
		case 39:
		case 7:
		case 22:
		case 23:
		case 24:
		case 38:
		case 8:
		case 34:
		case 35: {
			r = w.Updating;
			break;
		}
		case 4:
		case 36: {
			r = w.Running;
		}
	}
	let t_display_name = t.display_name;
	if (t.active_beta) {
		t_display_name = `${t_display_name} [${t.active_beta}]`;
	}
	return <span className={A_1(w.JumpListGameName, r)}>{t_display_name}</span>;
}
function R(e) {
	const t = q3(() =>
		n.md
			.GetCollection(n.A8.Recent)
			.visibleApps.filter((e) => e.BIsVisibleInMRUList())
			.slice(0, 5),
	);
	if (t.length == 0) {
		return null;
	} else {
		return (
			<>
				{t.map((e) => (
					<M key={e.appid} overview={e} />
				))}
				<d.K5 />
			</>
		);
	}
}
function K(e) {
	const { option, details, personaState } = e;
	const i =
		details.ePersonaState !== undefined &&
		personaState == details.ePersonaState;
	let a = m.useCallback(
		() => SteamClient.URL?.ExecuteSteamURL(details.strURL),
		[details.strURL],
	);
	if (!details.strURL) {
		a = details.onSelected;
	}
	return (
		<d.kt onSelected={a} className={w.JumpListItem}>
			{i && <_.Checkmark className={w.Icon} />}
			{!i && details.ePersonaState !== undefined && <div className={w.Icon} />}
			<div className={w.JumpListItemText}>
				{Localize(`#TaskbarOption_${option}`)}
			</div>
		</d.kt>
	);
}
function D(e) {
	const { rgItemsInSection, personaState } = e;
	const [n] = VI("jumplist_flags");
	const i = T();
	const l = Gs();
	const u = Qn();
	const A = !u;
	const p = q3(() =>
		rgItemsInSection.filter((e) => {
			const t = i.get(e);
			return (
				t &&
				(!t.flags || n & t.flags) &&
				(!Y2() || !t.bHideInChina) &&
				(l || !t.bHideWhenNotStreaming) &&
				!a.jR.BIsFeatureBlocked(t.eParentalFeature) &&
				((u && !t.bHideInGamepadUI) || (A && !t.bHideInDesktop))
			);
		}),
	);
	if (p.length == 0) {
		return null;
	} else {
		return (
			<>
				{p.map((e) => (
					<K
						key={e}
						option={e}
						details={i.get(e)}
						personaState={personaState}
					/>
				))}
				<d.K5 />
			</>
		);
	}
}
function N(e) {
	const t = Bh("m_ePersonaState");
	const r = Sn();
	return (
		<>
			<R />
			<D
				rgItemsInSection={["Online", "Away", "Invisible", "Offline"]}
				personaState={t}
			/>
			<D
				rgItemsInSection={["Store", "MyGames", "Community", "FriendActivity"]}
			/>
			<D rgItemsInSection={["Friends", "Screenshots", "Servers", "Settings"]} />
			<D
				rgItemsInSection={[
					"StopStreaming",
					"BigPicture",
					"CloseBigPicture",
					"VR",
				]}
			/>
			{r && <D rgItemsInSection={["Console"]} />}
			<D rgItemsInSection={["AlwaysExit"]} />
		</>
	);
}
export function x(e) {
	const [t, r, n] = uD();
	const IRef = m.useRef(undefined);
	const [a, setA] = m.useState({
		position: {
			x: 100000,
			y: 100000,
		},
		options: {
			targetMonitor: {
				nScreenLeft: 0,
				nScreenTop: 0,
				nScreenWidth: 100,
				nScreenHeight: 100,
				flMonitorScale: 1,
			},
			flGamepadScale: 1,
		},
	});
	const o = CH();
	m.useEffect(
		() =>
			SteamClient.Messaging.RegisterForMessages("JumpList", (e, n, a) => {
				if (n == "Open") {
					let e = JSON.parse(a);
					let n = {
						x: e.position.x,
						y: e.position.y,
					};
					let o = {
						targetMonitor: {
							nScreenLeft: e.monitorLeft,
							nScreenTop: e.monitorTop,
							nScreenWidth: e.monitorRight - e.monitorLeft,
							nScreenHeight: e.monitorBottom - e.monitorTop,
							flMonitorScale: e.monitorScale,
						},
						flGamepadScale: e.gamepadScale,
					};
					if (t) {
						SteamClient.Messaging.PostMessage("Jumplist", "Rendered", "");
						IRef.current.TakeFocus();
					}
					setA({
						position: n,
						options: o,
					});
					r();
				}
			}).unregister,
		[r, t, o],
	);
	m.useEffect(() => {
		if (t) {
			SteamClient.Messaging.PostMessage("Jumplist", "Rendered", "");
		}
	}, [t]);
	const l = m.useMemo(
		() => ({
			bForcePopup: true,
			bAlwaysOnTop: true,
			bScreenCoordinates: true,
			bPreferPopTop: true,
			bCreateHidden: true,
			bRetainOnHide: td(),
			...a?.options,
		}),
		[a],
	);
	const c = m.useMemo(() => a?.position, [a?.position.x, a?.position.y]);
	return (
		<C active={t} position={c} hideMenu={n} options={l} refInstance={IRef}>
			<N />
		</C>
	);
}
