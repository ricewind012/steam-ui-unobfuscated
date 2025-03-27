import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./78325.js";
import a from "./85243.js";
import s from "./12031.js";
import l, { WR } from "./67686.js";
import c from "./35425.js";
import m, { A as A_1 } from "./90765.js";
import u from "./69164.js";
import d from "./35488.js";
import A from "./31800.js";
import p, { wY, Ue, uN, aA, OP, cZ, xA, D5 } from "./52451.js";
import g, { bT } from "./31958.js";
import h, { GU } from "./23829.js";
import C from "./70541.js";
import _ from "./17034.js";
import f, { $2 } from "./96680.js";
import b from "./91369.js";
import y, { i_ as i_1 } from "./43397.js";
import S, { V5, Xy } from "./22969.js";
import w from "./84252.js";
import B from "./3524.js";
import "./46422.js";
import v from "./55116.js";
import I, { K1 } from "./33572.js";
import E, { on } from "./60115.js";
import M from "./11131.js";
import T from "./91486.js";
import R from "./96593.js";
import k from "./10975.js";
import { q3 } from "./90095.js";
import { PA } from "./41230.js";
import G from "./64608.js";
import { e0, ey, oH } from "./38542.js";
import P from "./93681.js";
import L from "./83599.js";
import z, { Dw } from "./91745.js";
import x from "./6023.js";
import { ax } from "./45967.js";
import W, { dN } from "./64004.js";
import "./43691.js";
const o = s;
const V = Number.parseInt(o["vr-dashboard-bar-width"]);
const H = Number.parseInt(o["vr-dashboard-bar-height"]);
const j = i_1(
	o["vrgamepadui-dashboard-bar-side-button-click-animation-duration"],
);
const q = new L.wd("VR");
export const Dn = n.forwardRef((props, ref) => {
	const { active, tooltip, onActivate, ...s } = props;
	const [l, setL] = n.useState(0);
	const DRef = n.useRef(undefined);
	const ARef = n.useRef(undefined);
	const h = props.onActivate != null || props.focusable;
	const C = n.useCallback(() => {
		window.clearTimeout(ARef.current);
		DRef.current?.classList.remove(o.ClickAnimation);
	}, []);
	const _ = n.useCallback(
		(e) => {
			C();
			if (h) {
				DRef.current?.classList.add(o.ClickAnimation);
				ARef.current = window.setTimeout(C, j);
				if (onActivate) {
					onActivate(e);
				}
			}
		},
		[C, h, onActivate],
	);
	const f = n.useCallback((e) => {
		const t = e.contentBoxSize[0]?.inlineSize ?? 1;
		const r = e.contentBoxSize[0]?.blockSize ?? 1;
		setL(t / r);
	}, []);
	const b = n.useCallback(
		(e) => {
			C();
		},
		[C],
	);
	const y = wY(f);
	const w = bT(l, 1, 1.5, 0, 1);
	const B = V5(tooltip);
	const v = Ue(B, ref, DRef);
	return (
		<u.Z
			{...s}
			className={A_1(
				"VRDashboardBarItem",
				o.Item,
				h && o.Clickable,
				active && o.Active,
				s.className,
			)}
			style={{
				...s.style,
				"--bar-item-padding-pct": w.toString(),
			}}
			focusable={h}
			ref={v}
			onPointerDown={b}
			onClick={_}
		>
			<div className={o.Highlight}>
				<div className={o.Inner} ref={y}>
					{s.children}
				</div>
			</div>
		</u.Z>
	);
});
const Z = n.memo((e) => {
	const TRef = n.useRef(undefined);
	const RRef = n.useRef(undefined);
	const i = K1();
	const a = on();
	return (
		<w.B2
			ref={TRef}
			navID="VRDashboardBarContainer"
			navTreeRef={RRef}
			className={o.DashboardBar}
			onCancelButton={i}
			onGlobalButtonDown={a}
		>
			<v.g>
				<div className={A_1(o.SideSection, o.Left)}>
					<Ge />
				</div>
				<K />
				<div className={A_1(o.SideSection, o.Right)}>
					<A.rz />
				</div>
			</v.g>
		</w.B2>
	);
});
export function ML() {
	const e = GU(_.UQ);
	const t = e?.tabs ?? [];
	const r = t.find(
		(t) => t.tab_id == e?.vr_settings_tab_id && t.tab_id != null,
	)?.tab_id;
	const i = e?.vr_steam_tab_id ?? t.find((e) => e?.icon?.enum == 1)?.tab_id;
	const { rgTabsToShow, unTabToGoToOnParentTabClick } = ((e, t, r, i) => {
		i = i ?? [];
		let a = (e = e ?? []).filter((e) => !i.includes(e.tab_id));
		const SRef = n.useRef(undefined);
		const o = SRef.current != null && e.find((e) => e.tab_id == SRef.current);
		for (const e of [r, ...i]) {
			if ((e == t || !o) && e != null) {
				SRef.current = e;
				break;
			}
		}
		const l = a.findIndex((e) => e.tab_id == r);
		if (l >= 0 && o) {
			a[l] = {
				...a[l],
				tab_id: SRef.current,
			};
		}
		return {
			rgTabsToShow: a,
			unTabToGoToOnParentTabClick: SRef.current,
		};
	})(t, e?.selected_tab_id, i, [r]);
	return {
		tabsProto: e,
		rgTabsToShow: rgTabsToShow,
		bShowVRSettingsAsActiveInMainMenu:
			unTabToGoToOnParentTabClick == r && unTabToGoToOnParentTabClick != null,
	};
}
function K(e) {
	const t = $2();
	const { tabsProto, rgTabsToShow } = ML();
	const a = rgTabsToShow.filter((e) => e.visible_in_dashboard_bar);
	const [s, l, c] = uN(tabsProto?.selected_tab_id, () => {}, 1000);
	const [d] = Dw(21);
	const A = (a.length == 0 && t?.IsVRSimulatedOnDesktopWindow()) || d;
	const g = !a.find((e) => e.icon?.enum === 1);
	const h = n.useCallback(
		(e) => {
			l(e);
			k.eZ.PlayNavSound(k.PN.PagedNavigation);
			b.p.SteamVR.DashboardTabClicked({
				tab_id: e,
			}).catch(c);
		},
		[l, c],
	);
	const { bScrolledToBeginning, bScrolledToEnd, ref } = aA("horizontal");
	const S = n.useMemo(() => new Map(), []);
	n.useLayoutEffect(() => {
		const e = S.get(s)?.current;
		e?.scrollIntoView({
			inline: "nearest",
			behavior: "smooth",
		});
	}, [s, S]);
	return (
		<u.Z
			className={A_1(
				o.DockItems,
				!bScrolledToBeginning && o.FadeLeft,
				!bScrolledToEnd && o.FadeRight,
			)}
			ref={ref}
		>
			{a.map((e) => {
				return (
					<$
						tab={e}
						selected={s == e.tab_id}
						onActivate={() => h(e.tab_id)}
						key={e.tab_id}
						ref={
							((t = e.tab_id), S.has(t) || S.set(t, n.createRef()), S.get(t))
						}
					/>
				);
				var t;
			})}
			{A && <Ee showSteam={g} showMany={d} />}
			<Ae />
		</u.Z>
	);
}
function X(e) {
	switch (e.iconEnum) {
		case 0:
		default: {
			return <d.Question />;
		}
		case 1: {
			return <d.SteamLogo className={o.SteamSVG} />;
		}
		case 2: {
			return <d.Display />;
		}
		case 3: {
			return <d.Settings />;
		}
		case 4: {
			return <d.InGameVR />;
		}
		case 5: {
			return <Ue />;
		}
	}
}
function J(e) {
	const [t, setT] = n.useState(false);
	const [i, setI] = n.useState(false);
	const [s, setS] = n.useState(new Date().getTime());
	const [c, setC] = n.useState(false);
	const d = q3(() =>
		e.icon?.appid ? R.tw.GetAppOverviewByAppID(e.icon.appid) : undefined,
	);
	const A = e.icon?.overlay;
	const p = n.useCallback(
		(e) => {
			if (e == `${A}.thumb`) {
				setS((e) => e + 1);
			}
		},
		[A],
	);
	e0(p);
	if (e.icon?.hwnd && !t) {
		return (
			<div className={A_1(o.Icon, o.HwndIcon)}>
				<De hwnd={e.icon.hwnd} onError={() => setT(true)} />
			</div>
		);
	} else if (A && !i) {
		return (
			<div className={A_1(o.Icon, o.OverlayIcon)}>
				<img
					src={`https://steamloopback.host/overlays/thumbnail?key=${A}&cachebust=${s}`}
					onError={() => setI(true)}
				/>
			</div>
		);
	} else if (e.icon?.appid && !c) {
		return (
			<div className={A_1(o.Icon, o.AppIcon)}>
				<T.z
					app={d}
					eAssetType={4}
					onError={() => setC(true)}
					neverShowTitle
					allowCustomization={false}
				/>
			</div>
		);
	} else {
		return (
			<div className={A_1(o.Icon, o.EnumIcon)}>
				<X iconEnum={e.icon?.enum} />
			</div>
		);
	}
}
const $ = n.forwardRef((props, ref) => {
	const { tab, onActivate, selected } = props;
	const s = V5(tab.display_name);
	const l = Ue(s, ref);
	const c = n.useCallback(() => true, []);
	return (
		<u.Z
			ref={l}
			onActivate={onActivate}
			fnScrollIntoViewHandler={c}
			focusable
			className={A_1(o.DockItem, selected && o.Selected)}
		>
			<J icon={tab.icon} />
		</u.Z>
	);
});
function Ee(e) {
	const t = [];
	const r = e.showMany ? 4 : 1;
	for (let e = 0; e < r; e++) {
		t.push(
			<$
				key={`desktop${e}`}
				tab={{
					tab_id: 1010 + e,
					display_name: r > 1 ? `Fake Desktop ${e + 1}` : "Fake Desktop",
					icon: {
						enum: 2,
					},
					visible_in_dashboard_bar: true,
				}}
			/>,
		);
	}
	const i = [];
	const a = e.showMany ? 2 : 0;
	for (let e = 0; e < a; e++) {
		i.push(
			<$
				key={`window${e}`}
				tab={{
					tab_id: 1010 + e,
					display_name: r > 1 ? `Fake Window ${e + 1}` : "Fake Window",
					icon: {
						enum: 5,
					},
					visible_in_dashboard_bar: true,
				}}
			/>,
		);
	}
	return (
		<>
			{e.showSteam && (
				<$
					selected
					tab={{
						tab_id: 1000,
						display_name: "Fake Steam",
						icon: {
							enum: 1,
						},
						visible_in_dashboard_bar: true,
					}}
				/>
			)}
			{t}
			{i}
		</>
	);
}
function Te(e) {
	switch (e.icon?.enum) {
		case 0:
		default: {
			return <d.Question />;
		}
		case 10: {
			return <d.Exit />;
		}
		case 11: {
			return <d.Power />;
		}
		case 1: {
			return <d.FeatureVisible />;
		}
		case 2: {
			return <d.FeatureHidden />;
		}
		case 3: {
			return <d.Recenter />;
		}
		case 12: {
			return <d.Playspace />;
		}
		case 13: {
			return <d.FloorHeight />;
		}
	}
}
function Re(e) {
	const { action, location, onActivate } = e;
	const a = action?.invocation;
	const s = action?.action_id;
	const ORef = n.useRef(undefined);
	ORef.current = onActivate;
	const l = $2();
	const c = l?.IsVRSimulatedOnDesktopWindow();
	const [m, u, d] = uN(action?.active, () => {}, 1000);
	const A = n.useCallback(() => {
		const e = (e) => {
			if (
				!(e instanceof x.xn) ||
				e.error?.error != 4 ||
				e.error?.error != 4 ||
				!c
			) {
				d();
				throw e;
			}
		};
		switch (a) {
			case 3: {
				break;
			}
			case 1: {
				if (ORef.current) {
					ORef.current();
				}
				b.p.SteamVR.DashboardActionInvoked({
					action_id: s,
				}).catch(e);
				break;
			}
			case 2: {
				const t = !m;
				u(t);
				if (ORef.current) {
					ORef.current(t);
				}
				b.p.SteamVR.DashboardActionInvoked({
					action_id: s,
					toggle_value: t,
				}).catch(e);
			}
		}
		k.eZ.PlayNavSound(k.PN.BasicNav);
	}, [a, m, u, d, s, c]);
	let t_icon = action.icon;
	if (a == 2 && m && action.icon_active != null) {
		t_icon = action.icon_active;
	}
	if (
		(location == "bar" && !action?.visible_in_dashboard_bar) ||
		(location == "menu" && !action?.visible_in_menu)
	) {
		return null;
	}
	if (action?.enabled === false) {
		return null;
	}
	if (a == 3) {
		if (action.special_invocation === 1) {
			if (location == "bar") {
				return <Ie />;
			} else {
				return null;
			}
		} else {
			console.warn(
				"Unknown or unimplemented special invocation for dashboard action:",
				action.special_invocation,
				action,
			);
			return null;
		}
	}
	switch (location) {
		case "bar": {
			return (
				<Dn onActivate={A} active={m} tooltip={action?.display_name}>
					<Te icon={t_icon} />
				</Dn>
			);
		}
		case "menu": {
			return (
				<Se
					active={m}
					key={action.action_id}
					icon={<Te icon={t_icon} />}
					label={action.display_name}
					onActivate={A}
					bottomSeparator="none"
				/>
			);
		}
	}
}
function Ne(e) {
	const { onActivate, children } = e;
	return (
		<u.Z
			onActivate={onActivate}
			focusable
			className={A_1(o.ClickableSliderIcon, !!onActivate && o.Clickable)}
		>
			{children}
		</u.Z>
	);
}
const Ie = PA((e) => {
	const t = $2();
	const r = t?.IsVRSimulatedOnDesktopWindow();
	const [i, a] = uN(C.t.m_MainVolume, C.t.SetMainVolumeSettings);
	const [s, l] = uN(C.t.m_AudioMirrorVolume, C.t.SetAudioMirrorVolumeSettings);
	const [c, u] = uN(C.t.m_MicrophoneVolume, C.t.SetMicrophoneVolumeSettings);
	const A = i?.muted ? 0 : (i?.volume ?? 0);
	const g = s?.muted ? 0 : (s?.volume ?? 0);
	const h = c?.muted ? 0 : (c?.volume ?? 0);
	const _ = r || i.available;
	const b = r || s.available;
	const y = r || c.available;
	if (!_ && !b && !y) {
		return null;
	}
	let S;
	S = y ? "microphone" : b ? "audiomirror" : "main";
	return (
		<XO
			popupContents={
				<div className={A_1(o.DashboardBarPopupContents, o.VolumePopup)}>
					{_ && (
						<G.d3
							label={(0, Localize)("#Audio_VRHeadset_Volume")}
							value={A}
							onChange={(e) =>
								a({
									...i,
									muted: false,
									volume: e,
								})
							}
							min={0}
							max={1}
							step={0}
							childrenContainerWidth="max"
							layout="below"
							bottomSeparator={S == "main" ? "none" : "standard"}
							icon={
								<Ne
									onActivate={() =>
										a({
											...i,
											muted: !i.muted,
										})
									}
								>
									<d.AudioVolumeIcon flVolume={A} />
								</Ne>
							}
						/>
					)}
					{b && (
						<G.d3
							label={(0, Localize)("#Audio_VRAudioMirror_Volume")}
							value={g}
							onChange={(e) =>
								l({
									...s,
									muted: false,
									volume: e,
								})
							}
							min={0}
							max={1}
							step={0}
							childrenContainerWidth="max"
							layout="below"
							padding="standard"
							bottomSeparator={S == "audiomirror" ? "none" : "standard"}
							icon={
								<Ne
									onActivate={() =>
										l({
											...s,
											muted: !s.muted,
										})
									}
								>
									<d.AudioVolumeIcon flVolume={g} />
								</Ne>
							}
						/>
					)}
					{y && (
						<G.d3
							label={(0, Localize)("#Audio_VRMicrophone_Volume")}
							value={h}
							onChange={(e) =>
								u({
									...c,
									muted: false,
									volume: e,
								})
							}
							min={0}
							max={1}
							step={0}
							childrenContainerWidth="max"
							layout="below"
							padding="standard"
							bottomSeparator={S == "microphone" ? "none" : "standard"}
							icon={
								<Ne
									onActivate={() =>
										u({
											...c,
											muted: !c.muted,
										})
									}
								>
									<d.Microphone off={h == 0} />
								</Ne>
							}
						/>
					)}
				</div>
			}
			tooltip={(0, Localize)("#Audio_Volume")}
		>
			<d.AudioVolumeIcon flVolume={A} />
		</XO>
	);
});
function Ae_1(e) {
	const { bScrolledToBeginning, bScrolledToEnd, ref } = aA();
	return (
		<div
			className={A_1(
				o.DashboardBarPopupContents,
				o.DashboardBarPopupList,
				!bScrolledToBeginning && o.FadeTop,
				!bScrolledToEnd && o.FadeBottom,
			)}
		>
			<u.Z className={A_1(o.DashboardBarPopupListScrollPanel)} ref={ref}>
				{e.children}
			</u.Z>
		</div>
	);
}
function Se(e) {
	const { active, ...r } = e;
	const i = !!e.onActivate;
	const [a, s] = OP();
	return (
		<G.D0
			{...s}
			{...r}
			label={
				<P.r delay={0} play={a} resetOnPause>
					{e.label}
				</P.r>
			}
			className={A_1(
				o.DashboardBarPopupListItem,
				i && o.Clickable,
				active && o.Active,
			)}
		/>
	);
}
const Oe = PA((e) => {
	const { closeMenu } = e;
	const { rgTabsToShow, tabsProto } = ML();
	const a = rgTabsToShow.filter((e) => e.visible_in_dashboard_menu);
	const s = n.useCallback(
		(e) => {
			k.eZ.PlayNavSound(k.PN.PagedNavigation);
			b.p.SteamVR.DashboardTabClicked({
				tab_id: e,
			});
			closeMenu?.();
		},
		[closeMenu],
	);
	return (
		<>
			{a.map((e, t, r) => (
				<Se
					key={e.tab_id}
					icon={<J icon={e.icon} />}
					label={e.display_name}
					onActivate={() => s(e.tab_id)}
					active={e.tab_id === tabsProto.selected_tab_id}
					bottomSeparator={t == r.length - 1 ? "standard" : "none"}
				/>
			))}
		</>
	);
});
function Le(e) {
	dN();
	return null;
}
function Ce_1(e) {
	const { onClick } = e;
	const r = ey();
	const i = n.useCallback(() => {
		r();
		onClick?.();
	}, [r, onClick]);
	return (
		<Se
			icon={<d.Exit />}
			label={(0, Localize)("#ExitVR")}
			onActivate={i}
			bottomSeparator="none"
		/>
	);
}
const Me = PA((e) => {
	const t = pe();
	ax(5);
	const RRef = n.useRef(undefined);
	return (
		<XO
			popupContents={
				<Ae_1>
					{e.menuTabs && <Oe closeMenu={() => RRef.current?.closePopup()} />}
					{e.directVRStreamingOption && (
						<Le onClick={() => RRef.current?.closePopup()} />
					)}
					{t
						.filter((t) => t.parent_menu_action_id === e.menuActionID)
						.map((e) => (
							<Re
								key={e.action_id}
								action={e}
								location="menu"
								onActivate={() => {
									if (e.invocation == 1) {
										RRef.current?.closePopup();
									}
								}}
							/>
						))}
					{e.powerOptions && (
						<Ce_1 onClick={() => RRef.current?.closePopup()} />
					)}
					{e.powerOptions && false}
				</Ae_1>
			}
			tooltip={e.tooltip}
			refFunctions={RRef}
		>
			{e.icon}
		</XO>
	);
});
function Ue(e) {
	return <d.SingleWindowToggle />;
}
function De(e) {
	const { hwnd, onError } = e;
	const [i, setI] = n.useState(false);
	if (i) {
		return <Ue />;
	} else {
		return (
			<img
				src={`https://steamloopback.host/windows/icon?handle=${hwnd}`}
				onError={() => setI(true)}
			/>
		);
	}
}
const Ae = PA((e) => {
	const TRef = n.useRef(undefined);
	const r = n.useCallback((e) => {
		b.p.SteamVR.DashboardDesktopWindowClicked({
			window_id: e?.window_id,
		})
			.then(() => TRef.current?.closePopup())
			.catch((e) => q.Error("Failed to open VR desktop window:", e));
	}, []);
	const i = (() => {
		const e = $2();
		const t = GU(_.J$) ?? {};
		const r = t?.windows ?? [];
		if (r.length == 0 && e?.IsVRSimulatedOnDesktopWindow()) {
			const e = [
				"Example window",
				"Another example window",
				"This window has a longer title for marquee testing",
				"Yet another example",
				"So many example windows",
				"Test 1 2",
				"Test 1 2: Episode 2",
				"Hello world!",
			];
			for (let t = 0; t < 35; t++) {
				r.push({
					hwnd: t,
					window_id: t,
					title: e[t % e.length],
				});
			}
		}
		return r;
	})();
	if (i.length == 0) {
		return null;
	} else {
		return (
			<XO
				className={o.AddWindowButton}
				refFunctions={TRef}
				popupContents={
					<Ae_1>
						{i.map((e, t) => (
							<Se
								key={e.window_id}
								icon={
									<div className={A_1(o.Icon, o.HwndIcon)}>
										<De hwnd={e.hwnd} />
									</div>
								}
								label={e.title}
								onActivate={() => r(e)}
								bottomSeparator={t < i.length - 1 ? "standard" : "none"}
							/>
						))}
					</Ae_1>
				}
				tooltip={(0, Localize)("#VRDashboard_AddDesktopWindow")}
			>
				<d.Add />
			</XO>
		);
	}
});
function pe() {
	const e = GU(_.$1);
	const t = e?.actions ?? [];
	const r = $2();
	if (e == null && r?.IsVRSimulatedOnDesktopWindow()) {
		t.push({
			action_id: -1100,
			icon: {
				enum: 3,
			},
			invocation: 1,
			display_name: "Fake Recenter",
			visible_in_dashboard_bar: true,
		});
		t.push({
			action_id: -1101,
			icon: {
				enum: 1,
			},
			icon_active: {
				enum: 2,
			},
			invocation: 2,
			display_name: "Fake Room View",
			visible_in_dashboard_bar: true,
		});
	}
	if (!t.find((e) => e.special_invocation == 1)) {
		t.push({
			action_id: -1000,
			invocation: 3,
			special_invocation: 1,
			visible_in_dashboard_bar: true,
		});
	}
	{
		const e = t.find((e) => e.special_invocation == 1);
		if (e.visible_in_dashboard_bar === undefined) {
			e.visible_in_dashboard_bar = true;
		}
	}
	return t;
}
function Ge(e) {
	const t = pe();
	let r = [];
	r.push(
		<Me
			key="mainmenu"
			tooltip={(0, Localize)("#OptionsMenuVR")}
			directVRStreamingOption
			powerOptions
			menuActionID={undefined}
			icon={<d.Rows />}
			menuTabs
		/>,
	);
	for (const e of t) {
		if (e.is_menu) {
			r.push(
				<Me
					key={e.action_id}
					tooltip={e.display_name}
					menuActionID={e.action_id}
					icon={<Te icon={e.icon} />}
				/>,
			);
		} else {
			r.push(<Re action={e} key={e.action_id} location="bar" />);
		}
	}
	return <div className={o.SideSectionInner}>{r}</div>;
}
const He = n.forwardRef((props, ref) => {
	const { children, elemButton, onClosed } = props;
	const o = n.useCallback(
		(e) => {
			switch (e) {
				case 2:
				case 3: {
					onClosed?.();
				}
			}
		},
		[onClosed],
	);
	const l = M.Of?.GetPopupForWindow(elemButton?.ownerDocument?.defaultView);
	const c = l?.params?.strVROverlayKey;
	const m = n.useMemo(
		() =>
			((e) => {
				if (e?.getBoundingClientRect == null) {
					return;
				}
				const t = e.getBoundingClientRect();
				return (
					((t.left + t.right) / 2 / e.ownerDocument.defaultView.innerWidth) *
						2 -
					1
				);
			})(elemButton) ?? 0,
		[elemButton],
	);
	const { element, methods } = Xy(
		S.b7.DashboardBarPopup,
		{
			parent_overlay_key: c,
			interactive: true,
			inherit_parent_curvature: true,
			inherit_parent_pitch: false,
			origin_on_popup: {
				x: 0,
				y: -1,
			},
			origin_on_parent: {
				x: m,
				y: 1,
			},
			offset: {
				y_pixels: 25,
			},
		},
		{
			onStateChange: o,
		},
	);
	const d_close = methods.close;
	const g = n.useCallback(
		(e) => {
			if (!e) {
				d_close();
			}
		},
		[d_close],
	);
	oH(element?.ownerDocument?.defaultView, g);
	n.useLayoutEffect(() => cZ(ref, element), [ref, element]);
	if (element) {
		return (
			<B.b5 ownerWindow={element.ownerDocument.defaultView}>
				{i.createPortal(
					<w.B2 navID="VRDashboardBarPopup">{children}</w.B2>,
					element,
				)}
			</B.b5>
		);
	} else {
		return null;
	}
});
const Ce = 4000;
export function XO(e) {
	const { popupContents, refFunctions, ...i } = e;
	n.useRef(undefined).current = e;
	const [a, setA] = n.useState(false);
	const [o, setO] = n.useState();
	const CRef = n.useRef(undefined);
	const MRef = n.useRef(false);
	const URef = n.useRef(false);
	const DRef = n.useRef(true);
	n.useEffect(() => {
		if (DRef.current) {
			DRef.current = false;
		} else {
			k.eZ.PlayNavSound(a ? k.PN.OpenSideMenu : k.PN.CloseSideMenu);
		}
	}, [a]);
	const A = n.useCallback(() => setA(true), []);
	const g = n.useCallback(() => setA(false), []);
	const h = n.useCallback(() => setA((e) => !e), []);
	const C = n.useCallback(() => {
		window.clearTimeout(CRef.current);
		CRef.current = undefined;
	}, []);
	const _ = n.useCallback(() => {
		if (CRef.current == null) {
			CRef.current = window.setTimeout(g, Ce);
		}
	}, [g]);
	const f = n.useCallback(() => {
		if (MRef.current || URef.current) {
			C();
		} else {
			_();
		}
	}, [C, _]);
	const b = n.useCallback(() => {
		MRef.current = true;
		f();
	}, [f]);
	const y = n.useCallback(() => {
		MRef.current = false;
		f();
	}, [f]);
	const S = n.useCallback(
		(e) => {
			e.target.setPointerCapture?.(e.pointerId);
			URef.current = true;
			f();
		},
		[f],
	);
	const w = n.useCallback(
		(e) => {
			e.target.releasePointerCapture?.(e.pointerId);
			URef.current = false;
			f();
		},
		[f],
	);
	n.useEffect(() => () => window.clearTimeout(CRef.current), []);
	const B = [xA("mouseenter", b), xA("mouseleave", y)];
	const v = [
		xA("mouseenter", b),
		xA("mouseleave", y),
		xA("pointerdown", S),
		xA("pointerup", w),
	];
	const I = Ue(setO, ...B);
	const E = Ue(...v);
	const M = n.useMemo(
		() => ({
			openPopup: A,
			closePopup: g,
		}),
		[A, g],
	);
	D5(refFunctions, M);
	return (
		<>
			<Dn {...i} ref={I} active={a} onActivate={h} focusable />
			{a && o != null && (
				<He ref={E} elemButton={o} onClosed={g}>
					{popupContents}
				</He>
			)}
		</>
	);
}
export function iG(e) {
	const { popup, element } = WR("VRDashboardBar", {
		browserType: a.W.EBrowserType_OpenVROverlay,
		eCreationFlags: 0,
		strVROverlayKey: c.rn,
		title: "SteamVR - Dashboard Bar",
		dimensions: {
			width: V,
			height: H,
			left: 0,
			top: 0,
		},
		replace_existing_popup: true,
	});
	if (element) {
		return (
			<B.b5 ownerWindow={popup}>{i.createPortal(<Z {...e} />, element)}</B.b5>
		);
	} else {
		return null;
	}
}
