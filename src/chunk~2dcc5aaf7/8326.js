import { Localize } from "../../actual_src/utils/localization.js";
import { _f } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import a from "./43691.js";
import s, { H3, Ck, l5, go, xY, hb, EH } from "./96555.js";
import o, { pg } from "./13869.js";
import l from "./10606.js";
import c, { L$, $$, QS, Fd } from "./52451.js";
import m, { OQ } from "./31958.js";
import d from "./13897.js";
import A from "./2306.js";
import p from "./75961.js";
function G(e) {
	const { displayId, previousModeId, closeModal } = e;
	const o = n.useCallback(() => {
		s.fQ.Get().SetMode(displayId, previousModeId);
	}, [displayId, previousModeId]);
	const u = n.useCallback(() => {
		o();
		if (closeModal) {
			closeModal();
		}
	}, [o, closeModal]);
	const { fnStopTimer } = L$(15000, u);
	const [A, setA] = n.useState(15);
	$$(() => {
		setA(A - 1);
	}, 1000);
	const g = n.useCallback(() => {
		fnStopTimer();
		o();
	}, [fnStopTimer, o]);
	const h = n.useCallback(() => {
		fnStopTimer();
	}, [fnStopTimer]);
	return (
		<l.o0
			strTitle={Localize("#Settings_Display_Resolution_ConfirmChange_Title")}
			strDescription={Localize(
				"#Settings_Display_Resolution_ConfirmChange_Body",
				OQ(A, 0, 15),
			)}
			strOKButtonText={Localize(
				"#Settings_Display_Resolution_ConfirmChange_Revert",
			)}
			onOK={g}
			strCancelButtonText={Localize(
				"#Settings_Display_Resolution_ConfirmChange_Accept",
			)}
			onCancel={h}
			closeModal={closeModal}
		/>
	);
}
export function cP(e) {
	const t = H3();
	const r = Ck();
	const a = n.useMemo(() => r.data?.modes ?? [], [r]);
	const o = r.data?.has_mode_override === undefined;
	const l = r.data?.has_mode_override === false;
	const m = Localize("#Settings_Display_Resolution_Auto_Resolution");
	let e_bottomSeparator = e.bottomSeparator;
	if (e_bottomSeparator == "auto") {
		e_bottomSeparator = l ? "standard" : "none";
	}
	const p = QS((e) => {
		if (!e) {
			return;
		}
		const t = Fd(e.ownerDocument.body, () => {
			const t = (0, _f)(e);
			if (t) {
				t.scrollTop = 0;
			}
		});
		return () => t.disconnect();
	}, []);
	if (r.data) {
		if (t.data !== true) {
			return null;
		} else {
			return (
				<>
					<A.C
						feature={7}
						disabled={o}
						label={m}
						checked={l}
						onChange={async (e) => {
							await s.fQ.Get().SetMode(r.data?.id, a[0].id);
							if (e) {
								s.fQ.Get().ClearModeOverride(r.data?.id);
							}
						}}
						bottomSeparator={e_bottomSeparator}
					/>
					<div
						ref={p}
						style={{
							visibility: "hidden",
						}}
					/>
				</>
			);
		}
	} else {
		return null;
	}
}
export function KX() {
	const e = H3();
	const t = Ck();
	const r = n.useMemo(() => t.data?.modes ?? [], [t]);
	const a = r.find((e) => e.id === t.data.current_mode_id);
	const l = n.useMemo(
		() => [
			...r.map((e) => ({
				data: e,
				label: `${e.width}x${e.height}@${e.refresh_hz}`,
			})),
		],
		[r],
	);
	const c = n.useCallback(
		async (e) => {
			const r = a?.id;
			await s.fQ.Get().SetMode(t?.data?.id, e?.data?.id);
			pg(<G displayId={t?.data?.id} previousModeId={r} />, window);
		},
		[t, a],
	);
	if (t.data) {
		if (e.data !== true) {
			return null;
		} else if (t.data.has_mode_override) {
			return (
				<d.B
					feature={7}
					label={Localize("#Settings_Display_Resolution")}
					rgOptions={l}
					selectedOption={a}
					onChange={c}
				/>
			);
		} else {
			return null;
		}
	} else {
		return null;
	}
}
export function E4(e, t) {
	const r = l5();
	const i = Ck();
	const a = go();
	n.useEffect(() => {
		if (
			r &&
			i.data?.has_mode_override === false &&
			i.data?.description &&
			a.data?.width &&
			a.data?.height
		) {
			const [r, n] = [a.data.width, a.data.height];
			if (r * n > e * Math.max(t, e / 1.6)) {
				SteamClient.System.DisplayManager?.SetGamescopeInternalResolution(
					e,
					r / n == 1.6 ? e / 1.6 : t,
				);
			}
		}
	}, [r, i.data?.has_mode_override, i.data?.description, a, e, t]);
}
export function XT(e) {
	const t = xY();
	if (hb() && t.isSuccess && t.data.bAvailble) {
		return (
			<A.C
				feature={7}
				label={Localize("#Settings_Display_CompatibilityMode_Label")}
				description={Localize(
					"#Settings_Display_CompatibilityMode_Description",
				)}
				checked={t.data.eCompatibilityMode == 2}
				onChange={(e) => t.data.fnSet(e ? 2 : 1)}
			/>
		);
	} else {
		return null;
	}
}
export function lt(e) {
	const t = EH();
	if (a.TS.ON_DECK && a.TS.IN_GAMESCOPE) {
		return (
			<p.X
				label={Localize("#Settings_Display_GameResolution")}
				explainer={Localize("#Settings_Display_GameResolution_Explainer")}
				rgOptions={t}
				setting="gamescope_game_resolution_global"
			/>
		);
	} else {
		return null;
	}
}
