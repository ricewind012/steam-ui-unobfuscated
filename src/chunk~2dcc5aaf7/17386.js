import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./34792.js";
import a, { Gn, fm } from "./89193.js";
import { q3 } from "./90095.js";
import o from "./63696.js";
import l from "./9282.js";
import m from "./73870.js";
import u from "./64608.js";
import d from "./10606.js";
import p from "./52451.js";
import g, { Pr } from "./72476.js";
import h, { l5 } from "./96555.js";
import C from "./91957.js";
import _ from "./2306.js";
const c = l;
export function DP() {
	const e = l5();
	const [t] = lJ();
	return !Pr() && (e || t);
}
function b(e = false) {
	const t = l5();
	const r = e || (0, Localize)("#Settings_Display_ExternalDisplay");
	let n = q3(() => i.rV.settings?.strDisplayName);
	if (n == null || n.length == 0) {
		n = r;
	}
	n = n?.replace("Internal: ", "")?.replace("External: ", "");
	const a = n?.lastIndexOf("|||");
	if (a > 0) {
		n = n.substring(0, a);
	}
	if (n?.toLowerCase().startsWith("xwayland")) {
		n = r;
	}
	if (t) {
		return n ?? (0, Localize)("#Settings_Display_ExternalDisplay_DefaultName");
	} else {
		return (0, Localize)("#SteamDeckName");
	}
}
export function vB() {
	const e = b(true);
	if (e == null) {
		return (0, Localize)("#Settings_Display_DisplayScaling_Scaling");
	} else {
		return (0, Localize)(
			"#Settings_Display_DisplayScaling_ScalingForTVName",
			e,
		);
	}
}
export function XD(e) {
	const t = q3(() => i.rV.settings?.flCurrentUnderscanLevel ?? 0);
	const r = q3(() => i.rV.settings?.bUnderscanEnabled);
	const [n, setN] = o.useState(t);
	o.useEffect(() => setN(t), [t]);
	const l = (e) => 1 - (e - 0) + 0;
	const c = l(0);
	const m = [
		{
			notchIndex: 0,
			label: (0, Localize)("#Settings_Display_Underscan_Notch_Smaller"),
		},
		{
			notchIndex: 1,
			label: (0, Localize)("#Settings_Display_Underscan_Notch_Larger"),
		},
	];
	if (!r) {
		return null;
	}
	const u = l(n);
	return (
		<C.V
			feature={7}
			disabled={!r}
			layout="below"
			value={u}
			min={0}
			max={1}
			step={0.04}
			resetValue={c}
			onChange={(e, t) => {
				const r = l(e);
				if (t == 2 || t == 4) {
					SteamClient.System.Display.SetUnderscanLevel(r);
				}
				setN(r);
			}}
			onChangeComplete={(e, t) => {
				const r = l(e);
				if (t != 2 && t != 4) {
					SteamClient.System.Display.SetUnderscanLevel(r);
				}
			}}
			notchCount={2}
			notchLabels={m}
			notchTicksVisible={false}
		/>
	);
}
export function VJ(e) {
	const t = !q3(() => i.rV.settings?.bUnderscanEnabled);
	let e_bottomSeparator = e.bottomSeparator;
	if (e_bottomSeparator == "auto") {
		e_bottomSeparator = t ? "standard" : "none";
	}
	return (
		<_.C
			feature={7}
			label={(0, Localize)("#Settings_Display_Underscan_Auto")}
			checked={t}
			onChange={(e) => {
				SteamClient.System.Display.EnableUnderscan(!e);
			}}
			bottomSeparator={e_bottomSeparator}
		/>
	);
}
export function Dy(e) {
	const t = q3(() => i.rV.settings?.bDisplayIsUsingAutoScale);
	const r = q3(() => i.rV.settings?.flCurrentDisplayScaleFactor ?? 1.5);
	const [n, setN] = o.useState(r);
	o.useEffect(() => setN(r), [r]);
	const l = q3(() => i.rV.settings?.flAutoDisplayScaleFactor);
	const c = q3(() => i.rV.settings?.flMinDisplayScaleFactor ?? 0.5);
	const m = q3(() => i.rV.settings?.flMaxDisplayScaleFactor ?? 2.5);
	const u = (m - c) / 10;
	const d = [
		{
			notchIndex: 0,
			label: (0, Localize)("#Settings_Display_DisplayScaling_MoreContent"),
		},
		{
			notchIndex: 1,
			label: (0, Localize)(
				g.TS.ON_DECK
					? "#Settings_Display_DisplayScaling_LargerText_SteamDeck"
					: "#Settings_Display_DisplayScaling_LargerText",
			),
		},
	];
	if (t) {
		return null;
	} else {
		return (
			<C.V
				feature={7}
				layout="below"
				value={n}
				min={c}
				max={m}
				step={u}
				resetValue={l}
				onChange={(e, t) => {
					if (t == 2 || t == 4) {
						SteamClient.Window.SetManualDisplayScaleFactor(e);
					}
					setN(e);
				}}
				onChangeComplete={(e, t) => {
					if (t != 2 && t != 4) {
						SteamClient.Window.SetManualDisplayScaleFactor(e);
					}
				}}
				notchCount={2}
				notchLabels={d}
				notchTicksVisible={false}
			/>
		);
	}
}
export function Eh(e) {
	const t = q3(() => i.rV.settings?.bDisplayIsUsingAutoScale);
	const r = t === undefined;
	const n = e.concise
		? (0, Localize)(
				"#Settings_Display_DisplayScaling_Automatically_Scale_UI_Concise",
			)
		: (0, Localize)(
				"#Settings_Display_DisplayScaling_Automatically_Scale_UI_Verbose",
			);
	let e_bottomSeparator = e.bottomSeparator;
	if (e_bottomSeparator == "auto") {
		e_bottomSeparator = t ? "standard" : "none";
	}
	return (
		<_.C
			feature={7}
			disabled={r}
			label={n}
			checked={t}
			onChange={(e) => {
				SteamClient.Window.SetAutoDisplayScale(e);
			}}
			bottomSeparator={e_bottomSeparator}
		/>
	);
}
export function Rw(e) {
	const t = b(true);
	const r =
		t != null
			? (0, Localize)(
					"#Settings_Display_DisplayScaling_ChooseScalingForTVName",
					t,
				)
			: (0, Localize)("#Settings_Display_DisplayScaling_ChooseScaling");
	const n = q3(() => i.rV.settings?.bDisplayIsUsingAutoScale);
	const a = q3(() => !i.rV.settings?.bUnderscanEnabled);
	const l = !n || !a;
	const m = o.useMemo(() => i.rV.settings?.flCurrentDisplayScaleFactor, []);
	const p = o.useMemo(() => i.rV.settings?.bDisplayIsUsingAutoScale, []);
	const g = o.useMemo(() => i.rV.settings?.flCurrentUnderscanLevel ?? 0, []);
	const h = o.useMemo(() => !i.rV.settings?.bUnderscanEnabled, []);
	const C = () => {
		if (p) {
			SteamClient.Window.SetAutoDisplayScale(true);
		} else {
			SteamClient.Window.SetManualDisplayScaleFactor(m);
		}
		SteamClient.System.Display.EnableUnderscan(!h);
		if (!h) {
			SteamClient.System.Display.SetUnderscanLevel(g);
		}
		if (e.closeModal) {
			e.closeModal();
		}
		return true;
	};
	return (
		<d.eV closeModal={C} onCancel={C} className={c.Dialog}>
			<u.Y9>{r}</u.Y9>
			<u.nB>
				<Eh bottomSeparator="auto" />
				<Dy />
				{l && <div className={c.SectionSeparator} />}
				<VJ bottomSeparator="auto" />
				<XD />
				<div className={c.YouCanChangeThisLater}>
					<span>
						{LocalizeReact(
							"#Settings_Display_DisplayScaling_YouCanChangeThisIn_Section",
							<strong>{(0, Localize)("#MainTabsSettings")}</strong>,
							<strong>{(0, Localize)("#Settings_Page_Display")}</strong>,
						)}
					</span>
				</div>
			</u.nB>
			<u.wi>
				<u.CB onOK={e.closeModal} onCancel={C} />
			</u.wi>
		</d.eV>
	);
}
class E {
	static s_Singleton = undefined;
	static k_strAllowInternalDisplayScaling_StorageKey =
		"AllowInternalDisplayScaling";
	m_DisplayScalingDevSettings = undefined;
	m_bAllowInternalDisplayScaling = undefined;
	static Get() {
		if (E.s_Singleton == null) {
			E.s_Singleton = new E();
		}
		return E.s_Singleton;
	}
	constructor() {
		Gn(this);
		this.m_DisplayScalingDevSettings = new m.A();
		this.Load().then(() => fm(this.Save));
	}
	async Load() {
		this.m_bAllowInternalDisplayScaling =
			await this.m_DisplayScalingDevSettings.GetObject(
				E.k_strAllowInternalDisplayScaling_StorageKey,
			);
	}
	async Save() {
		await this.m_DisplayScalingDevSettings.StoreObject(
			E.k_strAllowInternalDisplayScaling_StorageKey,
			this.m_bAllowInternalDisplayScaling,
		);
	}
}
export function lJ() {
	return [
		q3(() => E.Get().m_bAllowInternalDisplayScaling),
		(e) => {
			E.Get().m_bAllowInternalDisplayScaling = e;
		},
	];
}
export function RP(e) {
	const [t, r] = lJ();
	return (
		<u.y4
			label={(0, Localize)("#Settings_Display_AllowInternalScaling")}
			checked={t}
			onChange={r}
		/>
	);
}
Cg([a.sH], E.prototype, "m_bAllowInternalDisplayScaling", undefined);
Cg([p.oI], E.prototype, "Save", null);
