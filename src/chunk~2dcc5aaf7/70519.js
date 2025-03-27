import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./35488.js";
import s from "./74362.js";
import o from "./85243.js";
import l, { Bx } from "./55489.js";
import { hL, uN } from "./52451.js";
import m, { aO, ml, Cu, _t, hn, tQ, xU } from "./51943.js";
import { A as A_1 } from "./90765.js";
import d from "./43933.js";
import g from "./46422.js";
import h from "./10975.js";
import "./43691.js";
const A = d;
const C = 1000;
const _ = 1000;
export function vR(e) {
	const [t, setT] = n.useState(null);
	const d = n.useCallback(() => {
		setT(undefined);
		h.eZ.PlayNavSound(h.PN.VolSound);
	}, []);
	const { bKeepVisible, fnKeepVisible } = ((e) => {
		const [t, setT_1] = n.useState(false);
		const IRef = n.useRef(0);
		const a = n.useCallback(() => {
			setT_1(true);
			window.clearTimeout(IRef.current);
			IRef.current = window.setTimeout(() => setT_1(false), e);
		}, [e]);
		n.useEffect(() => window.clearTimeout(IRef.current), []);
		return {
			bKeepVisible: t,
			fnKeepVisible: a,
		};
	})(C);
	const f = aO();
	const b = n.useCallback(() => {
		if (!f) {
			fnKeepVisible();
		}
	}, [f, fnKeepVisible]);
	const y = ml(s.T4.Output);
	hL(y?.m_VolumeChangedSubscribable, b);
	hL(m.F5.m_VolumePressedSubscribable, b);
	const S = bKeepVisible || t != null;
	const w = S ? o.I5.Notification : null;
	Bx(w, "VolumePopin");
	const { flVolume, setVolume } = Cu(s.T4.Output);
	const [I, E] = uN(flVolume, setVolume, _);
	if (!y) {
		return null;
	}
	const M = !y.BOnboardAudio();
	const T = y.GetName(s.T4.Output);
	return (
		<div
			className={A_1(A.VolumePopin, {
				[A.VolumePopinHidden]: !S,
			})}
		>
			<div className={A.VolumeSliderPosition}>
				<i.d3
					layout="inline"
					childrenContainerWidth="max"
					padding="none"
					max={1}
					min={0}
					step={0}
					value={I}
					onChangeStart={(e) => setT(e)}
					onChange={E}
					onChangeComplete={d}
					isKeyNavTarget={false}
					trackTone="dark"
					showHandle={false}
					bottomSeparator="none"
					icon={<a.AudioVolumeIcon flVolume={I} color="#FFFFFF" />}
				/>
				{M && <div className={A.VolumeSliderLabel}>{T}</div>}
			</div>
		</div>
	);
}
function B(e) {
	const { flVolume, setVolume } = _t(e.id, e.direction);
	const [o, l] = uN(flVolume, setVolume, _);
	return (
		<i.d3
			disabled={flVolume == null}
			min={0}
			max={e.direction == s.T4.Input ? 1.3 : 1}
			step={0}
			value={o}
			onChange={l}
			onChangeComplete={() => {
				if (e.direction == s.T4.Output && !g.oy.BIsInOOBE) {
					h.eZ.PlayNavSound(h.PN.VolSound);
				}
			}}
			label={e.label}
			layout={e.layout}
			padding={e.padding}
			icon={
				e.direction == s.T4.Output ? (
					<a.AudioVolumeIcon flVolume={flVolume} />
				) : (
					<a.Microphone off={flVolume == 0} />
				)
			}
			bottomSeparator={e.bottomSeparator}
		/>
	);
}
export function RC(e) {
	const t = hn(e.direction);
	return <B {...e} id={t} />;
}
export function XZ(e) {
	const { flVolume } = Cu(s.T4.Output);
	return <a.AudioVolumeIcon flVolume={flVolume ?? 1} />;
}
export function E1(e) {
	const t = ml(e.direction);
	const r = tQ(e.direction);
	let a = xU(e.direction).map((t) => ({
		data: t,
		label: t.GetName(e.direction),
	}));
	let s = "";
	if (r == -1) {
		const r = t?.GetName(e.direction) ?? "";
		s = (0, Localize)("#Audio_DeviceDefaultWithDevice", r);
	} else {
		s = (0, Localize)("#Audio_DeviceDefault");
	}
	a.unshift({
		data: null,
		label: s,
	});
	const o = r == -1 || t;
	const l = n.useCallback(
		(t) => {
			if (t) {
				t.setAsDefaultDevice(e.direction);
			} else {
				m.F5.ClearDefaultDeviceOverride(e.direction);
			}
		},
		[e.direction],
	);
	return (
		<i.Vb
			label={e.label}
			rgOptions={a}
			onChange={(e) => l(e.data)}
			selectedOption={o}
			strDefaultLabel="Select a value"
			bottomSeparator={e.bottomSeparator}
		/>
	);
}
