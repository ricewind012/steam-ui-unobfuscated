import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./16251.js";
import a from "./85243.js";
import s from "./34790.js";
import c, { lX } from "./31084.js";
import m from "./88750.js";
import u from "./97023.js";
import d from "./96593.js";
import A, { Bx } from "./55489.js";
import p from "./61175.js";
import g from "./10606.js";
import h, { mK } from "./13869.js";
import C from "./64608.js";
import { Yz } from "./51095.js";
import _f from "./88696.js";
import { MH } from "./76356.js";
import y from "./46422.js";
import "./43691.js";
const o = s;
function S(e, t) {
	if (!t) {
		return;
	}
	const r = Yz(JSON.stringify(t));
	return `Apps\\${e}\\DefaultLaunchOption\\${(r < 0
		? 4294967295 + r + 1
		: r
	).toString(16)}`;
}
export async function lZ(e, t) {
	const r = d.tw.GetAppOverviewByAppID(e.appid);
	console.log("showing launch options", e.appid, r.display_name);
	if (y.oy.ActiveWindowInstance?.BrowserWindow?.ConfigContext.IN_VR) {
		const r = t.filter(
			(e) =>
				e.eType == u.oI.k_ELaunchOptionType_OpenVR ||
				e.eType == u.oI.k_ELaunchOptionType_OpenVROverlay,
		);
		const n = t.filter((e) => e.eType == u.oI.k_ELaunchOptionType_OpenXR);
		const a = t.filter((e) => e.eType == u.oI.k_ELaunchOptionType_OculusVR);
		if (r.length === 1) {
			e.continue(r[0].nIndex);
			return;
		}
		if (n.length === 1) {
			e.continue(n[0].nIndex);
			return;
		}
		if (a.length === 1) {
			if (
				(await SteamClient?.OpenVR?.DeviceProperties?.GetStringDeviceProperty?.(
					"/user/head",
					i.fD.ActualTrackingSystemName_String,
				)) === "oculus"
			) {
				e.continue(a[0].nIndex);
				return;
			}
		}
	}
	const a = await v(e.appid, t);
	if (a == -1 || e.alwaysShowDialog) {
		if (p.n6.IsGamepadUIWindowActive()) {
			lX(
				<B {...e} launchOptions={t} />,
				y.oy.ActiveWindowInstance?.BrowserWindow?.document.documentElement,
				{
					onCancel: e.onCancel,
				},
			);
		} else {
			mK(
				<M {...e} launchOptions={t} />,
				e.ownerWindow || document.defaultView,
				{
					strTitle: r.display_name,
					bForcePopOut: true,
					popupWidth: 476,
					popupHeight: 430,
					fnOnClose: e.onCancel,
				},
			);
		}
	} else {
		e.continue(a);
	}
}
function B(e) {
	const TRef = n.useRef(undefined);
	const r = n.useCallback(() => {
		TRef.current.Hide();
	}, [TRef]);
	const { ready, selection, setSelection, onPlay, onCancel } = E(e, r);
	const { launchOptions } = e;
	Bx(a.I5.Opaque, "LaunchOptionsMenu");
	if (!ready) {
		return null;
	}
	const g = launchOptions.map((e) => (
		<m.Vs
			key={`option-${e.nIndex}`}
			label={Localize(e.strDescription, e.strGameName)}
		>
			<m.kt
				key="option-forever"
				disabled={false}
				onSelected={() => onPlay(e.nIndex, true)}
			>
				{Localize("#LaunchOptionsDialog_Forever")}
			</m.kt>
			<m.kt
				key="option-once"
				disabled={false}
				onSelected={() => onPlay(e.nIndex, false)}
			>
				{Localize("#LaunchOptionsDialog_JustOnce")}
			</m.kt>
		</m.Vs>
	));
	const h = d.tw.GetAppOverviewByAppID(e.appid);
	return (
		<m.tz
			refInstance={TRef}
			label={Localize("#LaunchOptionsDialog_MakeSelection", h.display_name)}
			onCancel={onCancel}
		>
			{g}
		</m.tz>
	);
}
async function v(e, t) {
	const r = S(e, t);
	const n = new _f.A();
	let i = await n.GetString(r);
	if (i?.length) {
		const e = parseInt(i);
		if (e >= t.length) {
			n.RemoveObject(r);
			return -1;
		} else {
			return e;
		}
	}
	return -1;
}
export function f(e, t) {
	const r = n.useMemo(() => S(e, t), [e, t]);
	const [i, setI] = n.useState();
	const s = n.useMemo(() => new _f.A(), []);
	n.useEffect(() => {
		(async () => {
			setI(t ? await v(e, t) : undefined);
		})();
	}, [r, t, e, s]);
	const o = n.useCallback(
		(e) => {
			setI(e);
			s.StoreString(r, e.toString());
		},
		[r, s],
	);
	const l = n.useCallback(() => {
		setI(-1);
		s.RemoveObject(r);
	}, [r, s]);
	return n.useMemo(
		() => ({
			value: i,
			set: o,
			clear: l,
		}),
		[i, o, l],
	);
}
function E(e, t) {
	const { appid, launchOptions } = e;
	const e_continue = e.continue;
	const s = f(appid, launchOptions);
	const [o, setO] = n.useState(0);
	const [c, setC] = n.useState(false);
	const [u, setU] = n.useState(false);
	MH(e.gameActionID, {
		OnGameActionEnd: t,
	});
	n.useEffect(() => {
		if (s.value !== undefined) {
			if (!u) {
				if (s.value == -1) {
					setO(0);
				} else if (s.value >= launchOptions.length || s.value < 0) {
					s.clear();
					setO(0);
					setC(true);
				} else {
					setO(s.value);
					setC(true);
				}
				setU(true);
			}
		}
	}, [s, setO, setC, u, setU, t, e_continue, launchOptions]);
	return {
		ready: u,
		selection: o,
		setSelection: setO,
		rememberAnswer: c,
		setRememberAnswer: setC,
		onPlay: (r, n) => {
			const i = r !== undefined ? r : o;
			const a = n === undefined ? c : n;
			if (i !== undefined) {
				e.continue(i);
				t();
				if (a) {
					s.set(i);
				} else {
					s.clear();
				}
			}
		},
		onCancel: () => {
			e.onCancel();
			t();
		},
	};
}
function M(e) {
	const {
		ready,
		selection,
		setSelection,
		rememberAnswer,
		setRememberAnswer,
		onPlay,
		onCancel,
	} = E(e, e.closeModal);
	const { launchOptions } = e;
	if (!ready) {
		return null;
	}
	const A = d.tw.GetAppOverviewByAppID(e.appid);
	const p = e.launchOptions.map((e) => {
		const t = () => setSelection(e.nIndex);
		const a = e.nIndex.toString();
		return (
			<div className={o.ListItem} key={a} onClick={t}>
				<input
					type="radio"
					name="LaunchOption"
					id={a}
					value={e.nIndex}
					checked={e.nIndex == selection}
					onChange={t}
				/>
				<label htmlFor={a}>{Localize(e.strDescription, e.strGameName)}</label>
			</div>
		);
	});
	return (
		<g.x_ onEscKeypress={e.onCancel}>
			<div className={o.LaunchOptionDialog}>
				<C.JU className={o.AppNameHeader}>{A.display_name}</C.JU>
				<div className={o.OptionList}>
					<C.JU className={o.ListHeader}>
						{Localize(
							"#LaunchOptionsDialog_SelectHeader",
							launchOptions.length,
						)}
					</C.JU>
					<div className={o.ListContainer}>{p}</div>
					<div className={o.CheckboxRow}>
						<C.Yh
							label={Localize("#LaunchOptionsDialog_Remember")}
							checked={rememberAnswer}
							onChange={setRememberAnswer}
						/>
					</div>
					<C.JU className={o.SeeProperties}>
						{Localize("#LaunchOptionsDialog_SeeProperties")}
					</C.JU>
				</div>
				<div className={o.ButtonContainer}>
					<div className={o.PlayButton} onClick={() => onPlay()}>
						{Localize("#GameAction_Play")}
					</div>
					<div className={o.CancelButton} onClick={onCancel}>
						{Localize("#GameAction_Cancel")}
					</div>
				</div>
			</div>
		</g.x_>
	);
}
