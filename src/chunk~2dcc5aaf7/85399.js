import {
	Localize,
	LocalizeReact,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";
import {
	GetOwningWindowForEvent,
	CopyTextToClipboard,
	_f,
} from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./72476.js";
import a, { W6, zy, B6 } from "./49519.js";
import s, { PA } from "./41230.js";
import o, { q3 } from "./90095.js";
import l from "./64608.js";
import c from "./69164.js";
import m from "./61657.js";
import u, { A as A_1 } from "./90765.js";
import A from "./50727.js";
import p from "./78567.js";
import g from "./35488.js";
import h, { St as st_1 } from "./85360.js";
import C from "./45309.js";
import _, { Un, LC } from "./46422.js";
import f, { lX } from "./31084.js";
import b from "./88750.js";
import y, { K7, U$ } from "./62486.js";
import S, { M0, zB, es } from "./83314.js";
import w from "./61277.js";
import B from "./4690.js";
import v, { pg } from "./13869.js";
import G from "./46396.js";
import O from "./99452.js";
import P from "./82667.js";
import L from "./13110.js";
import z from "./84056.js";
import x from "./12272.js";
import U, { yq } from "./93966.js";
import W, { R7 } from "./11131.js";
import V, { pw } from "./31319.js";
import H, { VI } from "./34792.js";
import j, { l6, L$, X as X_1, Ue as Ue_1 } from "./52451.js";
import q from "./53622.js";
import Q from "./43014.js";
import Z, { $2 } from "./96680.js";
import Y, { MZ } from "./3499.js";
import K, { bY } from "./67429.js";
import X, { fu } from "./78721.js";
import te from "./70456.js";
import re from "./12307.js";
import ne from "./50350.js";
import { Wh, ez } from "./31800.js";
import ae from "./48289.js";
import se from "./78057.js";
import oe from "./96593.js";
import le, { wy, Sz, q_ as q_1, Id, tk } from "./22091.js";
import ce from "./37976.js";
import me, { C6 } from "./70239.js";
import ue from "./20414.js";
import de from "./44846.js";
import Ae from "./10606.js";
import pe from "./26853.js";
import { SP } from "./51076.js";
import we, { N as N_1 } from "./84914.js";
import Be, {
	SG,
	nQ,
	hq,
	Uz,
	S1,
	sn,
	og,
	P4,
	yZ,
	M8,
	Ut as ut_1,
	$c,
	mx,
} from "./52192.js";
import ve from "./81540.js";
import Ee from "./85243.js";
import Me, { R_ as R_1 } from "./18057.js";
import Te from "./22047.js";
import { TE } from "./13200.js";
import ke from "./19037.js";
import De from "./21105.js";
import Ne from "./10975.js";
import { Bx } from "./55489.js";
import { b as b_1, Z as Z_1 } from "./9482.js";
import Oe, { oH } from "./33572.js";
import { N4 } from "./77347.js";
import { qw } from "./89748.js";
const E = PA((e) => {
	const { appid } = e;
	const r =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	h.v3.EnsureEditingConfiguration(appid, r);
	const i = h.v3.EditingConfiguration?.sets;
	const a = !K7(i);
	return (
		<c.Z navEntryPreferPosition={B.iU.PREFERRED_CHILD}>
			<l.Y9>
				{Localize("#ControllerConfigurator_Section_ActionSets")}
				<div className={A.HelpButtonContainer}>
					<M />
				</div>
			</l.Y9>
			<l.nB>
				{i?.map((e, r) => (
					<R key={e.key} baseSetIndex={r} appid={appid} />
				))}
				{a && (
					<c.Z className={A.AddSetButtonContainer}>
						<l.$n
							className={A.GlobalSetButton}
							onClick={(e) => {
								let r = GetOwningWindowForEvent(e);
								const i = [];
								const a = h.v3.EditingConfiguration?.sets;
								i.push(
									...(y.TK.filter((e) => e.usableForSetCloning).map(
										(e) => e.key,
									) ?? []),
								);
								i.push(...(a?.filter((e) => e.key) ?? []));
								pg(
									<F
										title={Localize(
											"#ControllerConfigurator_ActionSets_AddBaseSetDialog_Title",
										)}
										description={Localize(
											"#ControllerConfigurator_ActionSets_AddBaseSetDialog_Description",
										)}
										inputOptions={{
											placeholder: Localize(
												"#ControllerConfigurator_ActionSets_AddBaseSetDialog_InitialText",
											),
										}}
										actionSetOptions={i}
										onResult={(e) => {
											h.v3.SetControllerActionSet(appid, e);
										}}
									/>,
									r,
								);
							}}
						>
							{Localize(
								"#ControllerConfigurator_ActionSets_AddBaseSetButton_Title",
							)}
						</l.$n>
						<l.$n
							className={A.GlobalSetButton}
							onClick={(e) => {
								let r = GetOwningWindowForEvent(e);
								const i = [];
								const a = h.v3.EditingConfiguration?.sets;
								i.push(
									...(y.TK.filter(
										(e) => e.usableForCursorVisibilityOptions,
									).map((e) => e.key) ?? []),
								);
								i.push(...(a?.filter((e) => e.key) ?? []));
								pg(
									<N
										title={Localize(
											"#ControllerConfigurator_ActionSets_SetOptions_Title",
										)}
										description={Localize(
											"#ControllerConfigurator_ActionSets_SetOptions_Desc",
										)}
										actionSetOptions={i}
										onResult={(e) => {
											h.v3.SetControllerMiscSettings(appid, e);
										}}
										cursorShownValue={
											h.v3.EditingConfiguration?.misc_action_set_settings
												?.cursor_visible_action_set_key
										}
										cursorHiddenValue={
											h.v3.EditingConfiguration?.misc_action_set_settings
												?.cursor_hidden_action_set_key
										}
									/>,
									r,
								);
							}}
						>
							{Localize("#ControllerConfigurator_ActionSets_SetOptions_Title")}
						</l.$n>
					</c.Z>
				)}
				<div className={A.Spacer} />
			</l.nB>
		</c.Z>
	);
});
function M(e) {
	const t = h.v3.StableAppId;
	return (
		<l.$n
			className={A.HelpButton}
			onClick={async () => {
				w.z.AddInterstitialToQueue({
					eInterstitial: w.H.k_eIntroToActionSets,
					appid: t,
					bForce: true,
				});
			}}
			onOKActionDescription={Localize("#Help")}
		>
			<g.Question />
		</l.$n>
	);
}
const T = (e, t) => {
	const r = t || e;
	const i = r?.source_bindings?.find(
		(e) => e.active_group?.mode == 16,
	)?.active_group;
	const a = i?.inputs?.filter((e) => e.key == 67 && e.activators.length > 0);
	let s = [];
	a?.forEach((r, a) => {
		s.push(
			<S.aK
				key={a}
				baseActionSet={e}
				layerActionSet={t}
				eControllerSource={5}
				input={r}
				eControllerMode={16}
				indentLevel={t ? 3 : 1}
				modeid={i?.modeid}
			/>,
		);
	});
	return s;
};
const R = PA((e) => {
	const { baseSetIndex, appid } = e;
	const i = h.v3.EditingConfiguration?.sets;
	const a = i?.[t];
	const s =
		a.display_name ??
		Localize("#ControllerConfigurator_ActionSets_UnnamedSet_Title");
	const o = D(
		Localize(
			"#ControllerConfigurator_ActionSets_BaseSetContextMenu_Title_1",
			s,
		),
		a,
		undefined,
	);
	return (
		<>
			<l.D0
				label={s}
				onContextMenu={o}
				icon={<g.Copy />}
				bottomSeparator="standard"
				preferredFocus
			>
				<l.$n
					focusable
					preferredFocus
					className={p.BindingOptionsButton}
					onClick={o}
				>
					<g.Settings />
				</l.$n>
			</l.D0>
			{T(a, undefined)}
			{a.layers?.map((e, r) => (
				<>
					<K_1 key={r} baseSetIndex={baseSetIndex} layerSetIndex={r} />
					{T(a, e)}
				</>
			))}
		</>
	);
});
const K_1 = PA((e) => {
	const { baseSetIndex, layerSetIndex } = e;
	const i = h.v3.EditingConfiguration?.sets?.[t];
	const a = i?.layers;
	const s = a?.[r];
	const o =
		s.display_name ??
		Localize("#ControllerConfigurator_ActionSets_UnnamedSet_Title");
	const c = D("Layer", i, s);
	return (
		<l.D0
			label={
				<span className={A_1(A.ActionSetEntry, A.ActionSetLayerEntry)}>
					<g.Inventory /> {o}
				</span>
			}
			onContextMenu={c}
			indentLevel={2}
			bottomSeparator="standard"
		>
			<l.$n focusable className={p.BindingOptionsButton} onClick={c}>
				<g.Settings />
			</l.$n>
		</l.D0>
	);
});
function D(e, t, r) {
	const i = h.v3.StableAppId;
	return (a) => {
		const s = r ?? t;
		if (s == null) {
			return;
		}
		const o =
			s.display_name ??
			Localize("#ControllerConfigurator_ActionSets_UnnamedSet_Title");
		const l =
			r != null ||
			((e) => {
				if (!(e?.length > 0)) {
					return;
				}
				const r = {
					action_set_key: t.key,
					action_set_layer_key: "",
					new_display_name: e,
				};
				h.v3.SetControllerActionSet(i, r);
			});
		const c = () => {
			const e = {
				action_set_key: t.key,
			};
			if (r != null) {
				e.action_set_layer_key = r.key;
			}
			h.v3.SetControllerActionSet(i, e);
		};
		const m = (
			<b.tz label={e}>
				{r == null && (
					<C.G
						title={Localize(
							"#ControllerConfigurator_ActionSets_BaseSetContextMenu_AddLayerSetMenuItem_Title",
						)}
						onResult={l}
					>
						<C.Qj
							title={Localize(
								"#ControllerConfigurator_ActionSets_AddLayerSetDialog_Title_1",
								o,
							)}
							description={Localize(
								"#ControllerConfigurator_ActionSets_AddLayerSetDialog_Description_1",
								o,
							)}
							inputOptions={{
								placeholder: Localize(
									"#ControllerConfigurator_ActionSets_AddLayerSetDialog_InitialText_1",
									o,
								),
							}}
						/>
					</C.G>
				)}
				<b.kt
					onSelected={() => {
						const e = r || t;
						const n = e?.source_bindings?.find(
							(e) => e.active_group?.mode == 16,
						)?.active_group;
						const a = n?.inputs?.filter((e) => e.key == 67);
						a?.forEach((e) => {
							M0(i, 5, e, t, r, -1, undefined, n.modeid, n.mode_shift);
						});
					}}
				>
					{Localize(
						"#ControllerConfigurator_ActionSets_BaseSetContextMenu_AddAlwaysOnCommandMenuItem_Title",
					)}
				</b.kt>
				{(h.v3.EditingConfiguration?.sets?.length != 1 || r != null) && (
					<>
						<b.K5 />
						<C.G
							title={Localize(
								r == null
									? "#ControllerConfigurator_ActionSets_BaseSetContextMenu_RenameMenuItem_Title"
									: "#ControllerConfigurator_ActionSets_LayerSetContextMenu_RenameMenuItem_Title",
							)}
							onResult={(e) => {
								if (!(e?.length > 0)) {
									return;
								}
								const n = {
									action_set_key: t.key,
									new_display_name: e,
								};
								if (r != null) {
									n.action_set_layer_key = r.key;
								}
								h.v3.SetControllerActionSet(i, n);
							}}
						>
							<C.Qj
								title={Localize(
									r == null
										? "#ControllerConfigurator_ActionSets_RenameBaseSetDialog_Title_1"
										: "#ControllerConfigurator_ActionSets_RenameLayerSetDialog_Title_1",
									o,
								)}
								description={Localize(
									r == null
										? "#ControllerConfigurator_ActionSets_RenameBaseSetDialog_Description_1"
										: "#ControllerConfigurator_ActionSets_RenameLayerSetDialog_Description_1",
									o,
								)}
								inputOptions={{
									placeholder: Localize(
										r == null
											? "#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1"
											: "#ControllerConfigurator_ActionSets_RenameLayerSetDialog_InitialText_1",
										o,
									),
								}}
							/>
						</C.G>
						<C.G
							title={Localize(
								r == null
									? "#ControllerConfigurator_ActionSets_BaseSetContextMenu_RemoveMenuItem_Title"
									: "#ControllerConfigurator_ActionSets_LayerSetContextMenu_RemoveMenuItem_Title",
							)}
							onResult={c}
						>
							<C.X_
								title={Localize(
									r == null
										? "#ControllerConfigurator_ActionSets_RemoveSetDialog_Title_1"
										: "#ControllerConfigurator_ActionSets_RemoveLayerDialog_Title_1",
									o,
								)}
								description={Localize(
									r == null
										? "#ControllerConfigurator_ActionSets_RemoveSetDialog_Description_1"
										: "#ControllerConfigurator_ActionSets_RemoveLayerDialog_Description_1",
									o,
								)}
								onCommitResult={c}
							/>
						</C.G>
					</>
				)}
			</b.tz>
		);
		lX(m, a);
	};
}
function N(e) {
	const {
		actionSetOptions,
		onResult,
		cursorShownValue,
		cursorHiddenValue,
		...s
	} = e;
	const [o, setO] = n.useState(
		actionSetOptions.find(
			(e) =>
				(typeof e == "number" ? y.TW[e]?.cursorBackendKey : e.key) ==
				cursorShownValue,
		) ?? 32767,
	);
	const [m, setM] = n.useState(
		actionSetOptions.find(
			(e) =>
				(typeof e == "number" ? y.TW[e]?.cursorBackendKey : e.key) ==
				cursorHiddenValue,
		) ?? 32767,
	);
	const A = actionSetOptions.map((e) =>
		typeof e == "number"
			? {
					label: Localize(
						`#ControllerConfigurator_EControllerPresetType_${y.TW[e]?.id}`,
					),
					data: e,
				}
			: {
					label: e.display_name,
					data: e,
				},
	);
	const p =
		onResult == null ||
		(() => {
			const e = {
				cursor_visible_action_set_key: "",
				cursor_hidden_action_set_key: "",
			};
			e.cursor_visible_action_set_key =
				typeof o == "number" ? y.TW[o].cursorBackendKey : o.key;
			e.cursor_hidden_action_set_key =
				typeof m == "number" ? y.TW[m].cursorBackendKey : m.key;
			onResult(e);
		});
	return (
		<C.X_ {...s} onCommitResult={p}>
			<l.Vb
				autoFocus
				label={Localize(
					"#ControllerConfigurator_ActionSets_Global_CursorShown",
				)}
				rgOptions={A}
				selectedOption={o}
				onChange={(e) => setO(e.data)}
			/>
			<l.Vb
				autoFocus
				label={Localize(
					"#ControllerConfigurator_ActionSets_Global_CursorHidden",
				)}
				rgOptions={A}
				selectedOption={m}
				onChange={(e) => setM(e.data)}
				bottomSeparator="none"
			/>
		</C.X_>
	);
}
function F(e) {
	const { inputOptions, onResult, isValid, actionSetOptions, ...s } = e;
	const [o, setO] = n.useState("");
	const m = isValid ? isValid(o) : o?.length > 0;
	const [u, setU] = n.useState(actionSetOptions[0]);
	const p = actionSetOptions.map((e) =>
		typeof e == "number"
			? {
					label: Localize(
						`#ControllerConfigurator_EControllerPresetType_${y.TW[e]?.id}`,
					),
					data: e,
				}
			: {
					label: e.display_name,
					data: e,
				},
	);
	const g =
		onResult == null ||
		(() => {
			const e = typeof u == "number" ? y.TW[u].cloningBackendKey : u.key;
			if (m && onResult) {
				onResult({
					action_set_key: "",
					new_display_name: o,
					action_set_to_copy_key: e,
				});
			}
		});
	return (
		<C.X_ {...s} disableCommit={!m} onCommitResult={g}>
			<l.pd
				autoFocus
				onChange={(e) => {
					setO(e.target.value);
				}}
				{...inputOptions}
			/>
			<l.Vb
				autoFocus
				label={Localize(
					"#ControllerConfigurator_ActionSets_AddBaseSetButton_CopyFrom",
				)}
				rgOptions={p}
				selectedOption={u}
				onChange={(e) => setU(e.data)}
				bottomSeparator="none"
			/>
		</C.X_>
	);
}
function J(e) {
	const [t, setT] = n.useState(true);
	const i = () => setT(!t);
	if (t) {
		return <$ appid={e.appid} ToggleVisiblity={i} />;
	} else {
		return <Ee_1 appid={e.appid} ToggleVisiblity={i} />;
	}
}
function $(e) {
	const { appid, ToggleVisiblity } = e;
	const a = yq();
	const [s, setS] = n.useState(
		h.v3?.CurrentEditedBinding?.controller_action?.mouse?.x ?? 0,
	);
	const [m, setM] = n.useState(
		h.v3?.CurrentEditedBinding?.controller_action?.mouse?.y ?? 0,
	);
	const [p, setP] = n.useState(
		h.v3?.CurrentEditedBinding?.controller_action?.mouse?.restore ?? true,
	);
	const f = (e) => {
		setS(Number.isSafeInteger(Number(e)) ? Number(e) : 0);
	};
	const b = (e) => {
		setM(Number.isSafeInteger(Number(e)) ? Number(e) : 0);
	};
	const y = R7().ownerWindow;
	const S = Un();
	const w =
		_.oy.WindowStore.SteamUIWindows.find(
			(e) => e.BrowserWindow == y,
		)?.IsGamepadUIOverlayWindow() ||
		(i.TS.IN_GAMESCOPE && S);
	return (
		<div className={A_1(x.BackgroundDiv, !w && x.Opaque)}>
			<div className={A_1(x.MouseControlPanelContainer)}>
				<c.Z className={A_1(x.MouseControlPanel)}>
					<l.Y9>
						{" "}
						{Localize("#ControllerBinding_MousePositionModal_Title")}{" "}
					</l.Y9>
					<l.nB>
						{" "}
						{Localize("#ControllerBinding_MousePositionModal_Desc")}
						<l.D0
							label={Localize(
								"#ControllerBinding_MousePositionModal_XPosition",
							)}
							className={A_1(x.Row)}
						>
							<C.Ql title={String(s)} onResult={f}>
								<C.Qj
									title={Localize(
										"#ControllerBinding_MousePositionModal_XPosition",
									)}
									description=""
									inputOptions={{
										placeholder: String(s),
									}}
									onResult={f}
								/>
							</C.Ql>
						</l.D0>
						<l.D0
							label={Localize(
								"#ControllerBinding_MousePositionModal_YPosition",
							)}
							className={A_1(x.Row)}
						>
							<C.Ql title={String(m)} onResult={b}>
								<C.Qj
									title={Localize(
										"#ControllerBinding_MousePositionModal_YPosition",
									)}
									description=""
									inputOptions={{
										placeholder: String(m),
									}}
									onResult={b}
								/>
							</C.Ql>
						</l.D0>
						<l.y4
							label={Localize(
								"#ControllerBinding_MousePositionModal_TeleportSetting",
							)}
							checked={p}
							onChange={setP}
							className={A_1(x.Row)}
						/>
						<l.D0
							label={Localize(
								"#ControllerBinding_MousePositionModal_SelectMousePosition",
							)}
							className={A_1(x.Row)}
						>
							<l.$n
								onClick={() => {
									const e = {
										x: s,
										y: m,
										restore:
											h.v3?.CurrentEditedBinding?.controller_action?.mouse
												?.restore,
									};
									const t = {
										type: z.N.k_EControllerBindingType_ControllerAction,
										controller_action: {
											action: 3,
											mouse: e,
										},
									};
									h.v3.SetEditedInputBinding(t);
									ToggleVisiblity();
								}}
							>
								{" "}
								{Localize(
									"#ControllerBinding_MousePositionModal_SelectMousePosition_StartButton",
								)}{" "}
							</l.$n>
						</l.D0>
					</l.nB>
					<l.wi className={A_1(x.Footer)}>
						<l.CB
							focusButton="primary"
							onOK={() => {
								const e = {
									x: s,
									y: m,
									restore: p,
								};
								const r = {
									type: z.N.k_EControllerBindingType_ControllerAction,
									controller_action: {
										action: 3,
										mouse: e,
									},
								};
								let n = h.v3.ActiveInputBinding;
								if (r != null) {
									n.new_binding = r;
								}
								h.v3.SetControllerInputBinding(appid, n);
								a();
								a();
							}}
							onCancel={() => {
								a();
								a();
							}}
						/>
					</l.wi>
				</c.Z>
			</div>
		</div>
	);
}
function Ee_1(e) {
	const { appid, ToggleVisiblity } = e;
	const a = R7().ownerWindow;
	const [s, setS] = n.useState(0);
	const [l, setL] = n.useState(0);
	const p = $2();
	const g = Un();
	const C =
		_.oy.WindowStore.SteamUIWindows.find(
			(e) => e.BrowserWindow == a,
		)?.IsGamepadUIOverlayWindow() ||
		(i.TS.IN_GAMESCOPE && g);
	const f = C ? p.params.browserInfo.m_unPID : 0;
	LC();
	pw();
	n.useEffect(() => {
		SteamClient.Input.SetCursorActionset(true);
		return () => {
			SteamClient.Input.SetCursorActionset(false);
		};
	}, []);
	n.useEffect(() => {
		const e = H.rV.settings?.flCurrentDisplayScaleFactor;
		const t = h.v3?.CurrentEditedBinding?.controller_action?.mouse?.x;
		const r = h.v3?.CurrentEditedBinding?.controller_action?.mouse?.y;
		const n = Math.round(a.screenLeft + (e * a.innerWidth * t) / 32767);
		const i = Math.round(a.screenTop + (e * a.innerHeight * r) / 32767);
		if (t != 0 || r != 0) {
			SteamClient.Input.SetMousePosition(f, 0, 0);
			SteamClient.Input.SetMousePosition(f, n, i);
		}
	}, [a, f]);
	const b = n.useCallback(
		(e) => {
			setS(Math.round((e.pageX / a.innerWidth) * 32767));
			setL(Math.round((e.pageY / a.innerHeight) * 32767));
		},
		[a],
	);
	l6(a, "mousemove", b);
	const [y, setY] = n.useState(-1);
	const { rgMedia } = MZ(
		{
			listSource: {
				type: "app",
				gameid: bY(appid),
			},
			mediaType: "screenshot",
			uploadStatus: "all",
		},
		10,
	);
	const B = () => {
		if (y != -1 && rgMedia.length > 0) {
			setY(y - 1);
		} else {
			setY(rgMedia.length - 1);
		}
		return true;
	};
	const v = () => {
		if (y != rgMedia.length - 1) {
			setY(y + 1);
		} else {
			setY(-1);
		}
		return true;
	};
	const I = (
		<c.Z
			onActivate={() => {
				const e = {
					x: s,
					y: l,
					restore:
						h.v3?.CurrentEditedBinding?.controller_action?.mouse?.restore,
				};
				const t = {
					type: z.N.k_EControllerBindingType_ControllerAction,
					controller_action: {
						action: 3,
						mouse: e,
					},
				};
				h.v3.SetEditedInputBinding(t);
				ToggleVisiblity();
			}}
			onCancel={() => ToggleVisiblity()}
			className={A_1(x.MouseCapturePanel)}
			autoFocus
			onMoveRight={() => v()}
			onMoveLeft={() => B()}
			onButtonDown={(e) => {
				switch (e.detail.button) {
					case m.pR.BUMPER_LEFT: {
						B();
						return true;
					}
					case m.pR.BUMPER_RIGHT: {
						v();
						return true;
					}
					default: {
						return false;
					}
				}
			}}
		>
			<div className={A_1(x.HintLabel)}>
				{" "}
				{LocalizeReact(
					"#ControllerBinding_MousePositionModal_SelectMousePosition_Hint",
					<q.W button={Q.g4.A} />,
					<q.W button={Q.g4.B} />,
					<q.W button={Q.g4.LeftBumper} />,
					<q.W button={Q.g4.RightBumper} />,
				)}{" "}
			</div>
		</c.Z>
	);
	if (y >= 0) {
		const w_y = rgMedia[y];
		return (
			<div className={A_1(x.MouseCapturePanel, !C && x.Opaque)}>
				<div
					className={A_1(x.MouseCapturePanel, x.BackgroundScreenshot)}
					style={{
						backgroundImage: `url( ${fu(w_y.strUrl)})`,
					}}
				>
					{I}
				</div>
			</div>
		);
	}
	return <div className={A_1(x.MouseCapturePanel, !C && x.Opaque)}>{I}</div>;
}
function He_1() {
	return (
		<div className={te.SteamInputAPILogoContainer}>
			<div className={te.SteamInputAPILogo}>
				<g.SteamInputAPISvg />
			</div>
			<div className={te.SteamInputAPILogoText}>
				{" "}
				{Localize("#SteamInputAPI_LogoText")}
			</div>
		</div>
	);
}
const Ce = PA((e) => {
	const { appid, currentSelectedConfig, configInfo, type, bShowGameTitle } = e;
	const l = $2();
	const m = appid ?? configInfo.appID;
	let A = h.v3.EditingConfigurationControllerIndex;
	W6();
	const p = n.useCallback(() => {
		h.v3.PreviewConfiguration(m, A, configInfo.URL);
		_.oy.NavigateToLayoutPreview(m, l);
	}, [m, A, configInfo.URL, l]);
	const C = se.H.GetAppDetails(m);
	const f = oe.tw.GetAppOverviewByAppID(m);
	let b = null;
	let y = null;
	const S = Localize(
		`#${le.Fd.GetControllerTypeString(configInfo.nControllerType)}`,
	);
	let w =
		configInfo?.Title.charAt(0) == "#"
			? Localize(configInfo?.Title, f?.display_name)
			: configInfo?.Title;
	w = h.v3.FilterText(w);
	let B =
		configInfo?.Description.charAt(0) == "#"
			? Localize(configInfo?.Description, y, S)
			: configInfo?.Description;
	B = h.v3.FilterText(B);
	let E = configInfo?.bOfficial || configInfo?.bRecommended;
	let M = false;
	let T = false;
	let R = C6(configInfo?.publishedFileID);
	switch (type) {
		case h7.Autosave: {
			b = w;
			y = Localize("#AppControllerConfiguration_SelectedConfigCustomized");
			break;
		}
		case h7.Official: {
			b = Localize(
				"#AppControllerConfiguration_OfficialConfig",
				f?.display_name,
				w,
			);
			y = C?.strDeveloperName;
			break;
		}
		case h7.Personal: {
			b = w;
			y = ae.O$.GetFriendState(ae.O$.currentUserSteamID).display_name;
			break;
		}
		case h7.Workshop: {
			b = w;
			y = ae.O$.GetFriendState(configInfo.accountID).display_name;
			M = R?.user_vote_summary?.vote_for === true;
			T = true;
			break;
		}
		case h7.Template: {
			b = w;
			y = E
				? Localize("#AppControllerConfiguration_RecommendedTemplateConfig")
				: Localize("#AppControllerConfiguration_TemplateConfig");
			break;
		}
		case h7.Search: {
			b = Localize(
				"#AppControllerConfiguration_SearchResult",
				C?.strDisplayName,
				w,
			);
			y = E
				? Localize("#AppControllerConfiguration_RecommendedTemplateConfig")
				: Localize("#AppControllerConfiguration_TemplateConfig");
		}
	}
	if (b == "$$$autosave") {
		b = Localize("#SettingsController_AutosaveName");
	}
	if (bShowGameTitle === true) {
		const e =
			m == 0
				? Localize("#AppControllerConfiguration_TemplateConfig")
				: m?.toString();
		b = Localize(
			"#AppControllerConfiguration_SearchResult",
			f?.display_name ?? e,
			b,
		);
	}
	const k = () => {
		SteamClient.Input.DeletePersonalControllerConfiguration(configInfo?.URL);
		h.v3.AddDeletedConfig(configInfo?.URL);
		if (configInfo.URL == currentSelectedConfig?.URL) {
			SteamClient.Input.ClearSelectedConfigForApp(m, A);
		}
	};
	const D = M
		? "#ControllerConfigurator_ChooseConfiguration_DownVote"
		: "#ControllerConfigurator_ChooseConfiguration_UpVote";
	const N =
		configInfo.accountID == ae.O$.currentUserSteamID.GetAccountID() ||
		(type == h7.Template && configInfo.publishedFileID != "0")
			? {
					onMenuButton: (e) => {
						let t = GetOwningWindowForEvent(e);
						pg(
							<Ae.o0
								strTitle={Localize(
									"#AppControllerConfiguration_DeleteConfig_Title",
								)}
								strDescription={Localize(
									"#AppControllerConfiguration_DeleteConfig_Desc",
									w,
								)}
								strOKButtonText={Localize(
									"#AppControllerConfiguration_DeleteConfig_Confirm",
								)}
								bDestructiveWarning
								onOK={k}
							/>,
							t,
							{
								strTitle: Localize(
									"#AppControllerConfiguration_OverwriteConfig_Title",
								),
							},
						);
					},
					onMenuActionDescription: Localize(
						"#ControllerConfigurator_ChooseConfiguration_Delete",
					),
				}
			: type == h7.Workshop
				? {
						onOptionsButton: () => {
							me.B6.VoteOnPublishedFile(
								configInfo?.publishedFileID,
								M ? ue.bJ.Down : ue.bJ.Up,
							);
						},
						onOptionsActionDescription: Localize(D),
					}
				: {};
	const F = T ? R?.file?.vote_data?.votes_up : null;
	const G = y != null || F != null || F != null || configInfo.playtime != null;
	const O = configInfo.playtime && type == h7.Workshop;
	const P = configInfo.timeUpdated && type == h7.Personal;
	const L = configInfo.timeUpdated
		? new Date(Number(configInfo?.timeUpdated) * 1000)
		: undefined;
	const z = configInfo.URL == currentSelectedConfig?.URL;
	const x = configInfo?.publishedFileID ?? "0";
	const U = x != "0";
	const W =
		U && me.B6.GetDownloadingItems(de.rm)?.some((e) => e.publishedfileid == x);
	const V =
		U && me.B6.GetDownloadedItems(de.rm)?.some((e) => e.publishedfileid == x);
	const H = U && !V;
	let j;
	j =
		H && !W
			? () => {
					me.B6.Download(de.rm, configInfo?.publishedFileID);
					setQ(true);
				}
			: H && !V
				? null
				: p;
	let q = H && W ? null : Localize("#AppControllerConfiguration_Select");
	const [Q, setQ] = n.useState(false);
	const K = me.B6.BConnectedToSteam();
	const X = H && !W && K;
	const J = configInfo?.bUsesSIAPI;
	n.useEffect(() => {
		if (Q && V) {
			p();
			setQ(false);
		}
	}, [Q, V, W, p]);
	if (h.v3.IsDeletedConfig(configInfo?.URL)) {
		return null;
	} else {
		return (
			<c.Z
				className={A_1(
					te.ConfigurationButton,
					configInfo.bRecommended && te.Recommended,
					z && te.Selected,
				)}
				focusable
				noFocusRing
				onActivate={j}
				onOKButton={j}
				onOKActionDescription={q}
				onSecondaryActionDescription={
					X ? Localize("#AppControllerConfiguration_Download") : null
				}
				onSecondaryButton={
					X ? () => me.B6.Download(de.rm, configInfo?.publishedFileID) : null
				}
				{...N}
			>
				<div className={te.IconContainer}>
					<g.ControllerType controllerType={configInfo.nControllerType} />
				</div>
				<div className={te.TextRows}>
					{G && (
						<div className={A_1(te.TextRow, te.Header)}>
							{y && <div className={te.Author}>{y}</div>}
							<div className={te.Stretch} />
							{W && (
								<div className={te.InfoSection}>
									<g.Spinner />
									<span>
										{Localize("#AppControllerConfiguration_Downloading")}
									</span>
								</div>
							)}
							{V && (
								<div className={te.InfoSection}>
									<g.Checkmark />
									<span>
										{Localize("#AppControllerConfiguration_Downloaded")}
									</span>
								</div>
							)}
							{H && !W && (
								<div className={te.InfoSection}>
									<g.Download />
									<span>
										{Localize("#AppControllerConfiguration_NotDownloaded")}
									</span>
								</div>
							)}
							{F != null && (
								<div className={te.InfoSection}>
									<g.ThumbsUp className={M ? te.ReviewIconThumbsUpColor : ""} />
									<span>{F}</span>
								</div>
							)}
							{O && (
								<div className={te.InfoSection}>
									<g.Clock />
									<span>
										{Localize(
											"#AppControllerConfiguration_ConfigPlaytime",
											configInfo.playtime,
										)}
									</span>
								</div>
							)}
							{P && (
								<div className={te.InfoSection}>
									<g.Edit />
									<span>
										{Localize(
											"#AppControllerConfiguration_ConfigUpdated",
											L?.toDateString() ?? "",
										)}
									</span>
								</div>
							)}
						</div>
					)}
					<div className={te.ConfigTitleRow}>
						<div className={A_1(te.TextRow, te.Title)}>{b}</div>
						{J && <He_1 />}
					</div>
					{configInfo.Description && (
						<div className={A_1(te.TextRow, te.Description)}>{B}</div>
					)}
				</div>
			</c.Z>
		);
	}
});
function _e(e) {
	const {
		title,
		description,
		appid,
		controllerIndex,
		currentSelectedConfig,
		type,
		configs,
	} = e;
	const m = q3(() =>
		configs.filter(
			(e) =>
				e?.Title?.toLowerCase()?.includes(h.v3.SearchText.toLowerCase()) ||
				e?.Description?.toLowerCase()?.includes(
					h.v3.SearchText.toLowerCase(),
				) ||
				e?.Description?.toLowerCase()?.includes(
					h.v3.SearchText.toLowerCase(),
				) ||
				oe.tw
					.GetAppOverviewByAppID(e?.appID)
					?.display_name?.toLowerCase()
					.includes(h.v3.SearchText.toLowerCase()),
		),
	);
	return (
		<div>
			<Se />
			<Fe_1
				title={title}
				description={description}
				controllerIndex={controllerIndex}
				type={type}
				currentSelectedConfig={currentSelectedConfig}
				configs={m}
				bShowGameTitle
			/>
		</div>
	);
}
function Fe_1(e) {
	const {
		title,
		description,
		appid,
		controllerIndex,
		currentSelectedConfig,
		type,
		configs,
		bShowGameTitle,
	} = e;
	return (
		<div className={te.PageContainer}>
			<div className={te.OuterColumn}>
				<h1>{title}</h1>
				<p>
					{" "}
					{configs.length
						? description
						: Localize(
								"#ControllerConfigurator_ChooseConfiguration_EmptyDescription",
							)}
				</p>
				{configs.map((e, t) => (
					<Ce
						key={t}
						appid={appid}
						configInfo={e}
						type={type}
						currentSelectedConfig={currentSelectedConfig}
						bShowGameTitle={bShowGameTitle}
					/>
				))}
			</div>
		</div>
	);
}
const Be_1 = PA((e) => {
	n.useEffect(() => {
		h.v3.QueryConfigsForApp(e.appid, e.controllerIndex);
	}, [e.appid, e.controllerIndex]);
	if (h.v3.BConfigurationQueryInFlight) {
		return (
			<ne.Sw
				background="dialog"
				scrollable={false}
				dialogContentPadding="none"
				autoFocus
			>
				<pe.t size="medium" position="center" />
			</ne.Sw>
		);
	} else {
		return <Ye {...e} />;
	}
});
const Ye = PA((e) => {
	const { appid, controllerIndex, currentSelectedConfig, strDefaultTab } = e;
	Wh(
		Localize("#ControllerConfigurator_ChooseConfiguration_Title"),
		"ControllerConfiguratorChooseConfiguration",
	);
	const s = h.v3.BFilterOtherControllerTypes;
	const o = me.B6.BConnectedToSteam();
	const l = le.Fd.Get().GetController(controllerIndex)?.eControllerType;
	const c = h.v3.GetOfficialConfigsForApp(appid, l);
	const m = h.v3
		.GetTemplateConfigsForApp(appid, l)
		?.filter((e) => e.publishedFileID == "0")
		?.sort((e, t) => (t?.bRecommended ? 1 : 0) - (e?.bRecommended ? 1 : 0));
	const u = h.v3
		.GetTemplateConfigsForApp(appid, l)
		?.filter((e) => e.publishedFileID != "0");
	const A = h.v3.GetUserConfigsForApp(
		appid,
		l,
		ae.O$.currentUserSteamID.GetAccountID(),
	);
	let p = h.v3.GetWorkshopConfigsForApp(appid, l);
	if (!o) {
		p = p.filter(
			(e) =>
				me.B6.GetDownloadedItems(de.rm)?.findIndex(
					(t) => e.publishedFileID == t.publishedfileid,
				) >= 0,
		);
	}
	const C = p
		.filter((e) => !e.bOfficial)
		.sort((e, t) =>
			ce.A.fromString(t.playtime, false)
				.subtract(ce.A.fromString(e.playtime, false))
				.toNumber(),
		);
	const _ = m.filter((e) => e.bRecommended);
	const f = c?.length ?? 0;
	const b = _?.length ?? 0;
	let y = n.useMemo(() => {
		let e = [];
		if (c?.length || _?.length) {
			e.push({
				id: "Official",
				title: "#ControllerConfigurator_ChooseConfiguration_RecommendedSection",
				icon: <g.Star />,
				content: (
					<>
						{f > 0 && (
							<Fe_1
								title={Localize(
									"#ControllerConfigurator_ChooseConfiguration_Official",
								)}
								description={Localize(
									"#ControllerConfigurator_ChooseConfiguration_Official_Description",
								)}
								type={h7.Official}
								configs={c}
								appid={appid}
								controllerIndex={controllerIndex}
								currentSelectedConfig={currentSelectedConfig}
							/>
						)}
						{f == 0 && b > 0 && (
							<Fe_1
								title={Localize(
									"#ControllerConfigurator_ChooseConfiguration_Recommended",
								)}
								description={Localize(
									"#ControllerConfigurator_ChooseConfiguration_Recommended_Description",
								)}
								type={h7.Template}
								configs={_}
								appid={appid}
								controllerIndex={controllerIndex}
								currentSelectedConfig={currentSelectedConfig}
							/>
						)}
					</>
				),
			});
		}
		if (A?.length) {
			e.push({
				id: "User",
				title: "#ControllerConfigurator_ChooseConfiguration_User",
				icon: <g.User />,
				content: (
					<Fe_1
						title={Localize("#ControllerConfigurator_ChooseConfiguration_User")}
						type={h7.Personal}
						configs={A}
						appid={appid}
						controllerIndex={controllerIndex}
						currentSelectedConfig={currentSelectedConfig}
					/>
				),
			});
		}
		e.push(
			{
				id: "Templates",
				title: "#ControllerConfigurator_ChooseConfiguration_Template",
				icon: <g.ControllerType controllerType={l} />,
				content: (
					<>
						<Fe_1
							title={Localize(
								"#ControllerConfigurator_ChooseConfiguration_Template",
							)}
							description={Localize(
								"#ControllerConfigurator_ChooseConfiguration_Template_Description",
							)}
							type={h7.Template}
							configs={m}
							appid={appid}
							controllerIndex={controllerIndex}
							currentSelectedConfig={currentSelectedConfig}
						/>
						{u.length > 0 && (
							<Fe_1
								title={Localize(
									"#ControllerConfigurator_ChooseConfiguration_UserTemplate",
								)}
								description={Localize(
									"#ControllerConfigurator_ChooseConfiguration_UserTemplate_Description",
								)}
								type={h7.Template}
								configs={u}
								appid={appid}
								controllerIndex={controllerIndex}
								currentSelectedConfig={currentSelectedConfig}
							/>
						)}
					</>
				),
			},
			{
				id: "Community",
				title: "#ControllerConfigurator_ChooseConfiguration_Community",
				icon: <g.SteamLogo />,
				content: (
					<Fe_1
						title={Localize(
							"#ControllerConfigurator_ChooseConfiguration_Community",
						)}
						type={h7.Workshop}
						configs={C}
						appid={appid}
						controllerIndex={controllerIndex}
						currentSelectedConfig={currentSelectedConfig}
					/>
				),
			},
			{
				id: "Search",
				title: "#ControllerConfigurator_ChooseConfiguration_Search",
				icon: <g.Search />,
				content: (
					<_e
						title={Localize(
							"#ControllerConfigurator_ChooseConfiguration_SearchResults",
						)}
						type={h7.Workshop}
						configs={h.v3.GetAllConfigs()}
						appid={appid}
						controllerIndex={controllerIndex}
						currentSelectedConfig={currentSelectedConfig}
					/>
				),
			},
		);
		return e;
	}, [
		b,
		f,
		appid,
		controllerIndex,
		l,
		m,
		c,
		C,
		u,
		A,
		currentSelectedConfig,
		_,
	]);
	const S = n.useCallback(() => {
		h.v3.SetFilterOtherControllerTypes(!s);
		SteamClient.Input.QueryControllerConfigsForApp(appid, controllerIndex, !s);
	}, [appid, controllerIndex, s]);
	const [w, B] = SP(
		strDefaultTab ??
			(c?.length || _?.length ? "Official" : A.length ? "User" : "Templates"),
	);
	const v = s
		? {
				onSecondaryButton: S,
				onSecondaryActionDescription: Localize(
					"#ControllerConfigurator_ChooseConfiguration_ShowAllConfigs",
				),
			}
		: {
				onSecondaryButton: S,
				onSecondaryActionDescription: Localize(
					"#ControllerConfigurator_ChooseConfiguration_ShowCompatibleConfigs",
				),
			};
	return (
		<ne.Sw
			background="dialog"
			scrollable={false}
			dialogContentPadding="none"
			{...v}
			autoFocus
		>
			<re.xC
				tabs={y}
				activeTab={w}
				autoFocusContents={false}
				onShowTab={B}
				cancelSkipTabHeader
			/>
		</ne.Sw>
	);
});
function Se(e) {
	const t = q3(() => h.v3.SearchText);
	const r = t.length > 0;
	const i = n.useCallback(() => "VKClose", []);
	return (
		<c.Z
			className={te.SearchBoxContainer}
			onOptionsButton={r ? () => h.v3.SetSearchText("") : undefined}
			onOptionsActionDescription={r ? Localize("#Clear") : undefined}
		>
			<l.pd
				type="search"
				noFocusRing
				focusable
				preferredFocus
				value={t}
				onChange={(e) => h.v3.SetSearchText(e.target.value)}
				onEnterKeyPress={i}
				onKeyboardNavOut={i}
				strEnterKeyLabel={Localize("#SearchEnterKeyLabel")}
				spellCheck={false}
				placeholder={Localize(
					"#ControllerConfigurator_ChooseConfiguration_Search",
				)}
			/>
		</c.Z>
	);
}
const Ie = PA((e) => {
	const { appid, controllerIndex, onRender } = e;
	const a = h.v3.EditingConfiguration?.controller_type;
	const s = h.v3.ActionSet;
	const o = s?.source_bindings?.find(
		(e) => e.active_group?.mode == 16,
	)?.active_group;
	const m = s?.source_bindings?.find((e) => e.key == 4)?.active_group;
	const [u, setU] = n.useState(le.Fd.Get().GetController(controllerIndex));
	n.useEffect(() => {
		setU(le.Fd.Get().GetController(controllerIndex));
	}, [controllerIndex]);
	const g = o?.inputs
		?.filter(
			(e) =>
				(e.key == 55 || e.key == 57 || e.key == 57 || e.key == 79) &&
				SG(5, e.key) &&
				nQ(a, e.key) &&
				hq(a, 5, e.key) &&
				!!u &&
				Uz(u.unCapabilities, e.key),
		)
		.sort((e, t) => (S1(e.key) > S1(t.key) ? 1 : -1));
	const C = o?.inputs
		?.filter(
			(e) =>
				(e.key == 56 || e.key == 58 || e.key == 58 || e.key == 80) &&
				SG(5, e.key) &&
				nQ(a, e.key) &&
				hq(a, 5, e.key) &&
				!!u &&
				Uz(u.unCapabilities, e.key),
		)
		.sort((e, t) => (S1(e.key) > S1(t.key) ? 1 : -1));
	let _ = false;
	g?.forEach((e) => {
		e.activators?.forEach((e) => {
			if (e.bindings?.length >= 1) {
				_ = true;
			}
		});
	});
	if (!_) {
		C?.forEach((e) => {
			e.activators?.forEach((e) => {
				if (e.bindings?.length >= 1) {
					_ = true;
				}
			});
		});
	}
	const f = n.useCallback(
		(e) => {
			const r = (e, r, n, i) => {
				const a = n?.inputs.find((e) => e.key == i);
				if (a?.disabled_activators?.length) {
					a?.disabled_activators.forEach((e, r) => {
						const n = {
							action_set_key: h.v3.BaseActionSet.key,
							action_set_layer_key: h.v3.LayerActionSet?.key,
							source_binding_key: 5,
							input_key: i,
							activator_index: r,
							enabled: true,
						};
						h.v3.SetControllerInputActivatorEnabled(appid, n);
					});
					return;
				}
				const s = e?.inputs?.find((e) => e.key == r);
				s?.activators?.forEach((e, r) => {
					M0(
						appid,
						5,
						a,
						h.v3.BaseActionSet,
						h.v3.LayerActionSet,
						r,
						undefined,
						n.modeid,
						n.mode_shift,
					);
					e?.bindings?.forEach((e, n) => {
						const a = {
							action_set_key: h.v3.BaseActionSet.key,
							action_set_layer_key: h.v3.LayerActionSet?.key,
							source_binding_key: 5,
							input_key: i,
							activator_index: r,
							binding_index: n,
							new_binding: e,
						};
						h.v3.SetControllerInputBinding(appid, a);
					});
				});
			};
			if (e) {
				r(m, 12, o, 56);
				r(m, 11, o, 55);
				if (nQ(a, 57)) {
					r(m, 10, o, 58);
					r(m, 9, o, 57);
				}
			} else {
				g?.forEach((e) => {
					e.activators?.forEach((r, n) => {
						zB(
							appid,
							5,
							e,
							h.v3.BaseActionSet,
							h.v3.LayerActionSet,
							n,
							false,
							false,
						);
					});
				});
				C?.forEach((e) => {
					e.activators?.forEach((r, n) => {
						zB(
							appid,
							5,
							e,
							h.v3.BaseActionSet,
							h.v3.LayerActionSet,
							n,
							false,
							false,
						);
					});
				});
				es(appid);
			}
		},
		[m, appid, a, 5, o, g, C],
	);
	const b =
		a == 2 || a == 4
			? "#ControllerConfigurationQuickSettings_EnableGrips"
			: "#ControllerConfigurationQuickSettings_EnableBackButtons";
	const y = <l.RF label={Localize(b)} checked={_} onChange={f} />;
	const w = _
		? g.map((e, t) => {
				const r =
					g.filter((t) => t.key == e.key).length > 1 ||
					e?.activators?.length > 1;
				return (
					<S.aK
						key={t}
						baseActionSet={h.v3.BaseActionSet}
						layerActionSet={h.v3.LayerActionSet}
						eControllerSource={5}
						input={e}
						eControllerMode={16}
						childrenContainerWidth={r ? "min" : "max"}
						bottomSeparator="none"
						minimalPresentation
						modeid={o.modeid}
					/>
				);
			})
		: [];
	const v = _
		? C.map((e, t) => {
				const r =
					C.filter((t) => t.key == e.key).length > 1 ||
					e?.activators?.length > 1;
				return (
					<S.aK
						key={t}
						baseActionSet={h.v3.BaseActionSet}
						layerActionSet={h.v3.LayerActionSet}
						eControllerSource={5}
						input={e}
						eControllerMode={16}
						childrenContainerWidth={r ? "min" : "fixed"}
						bottomSeparator="none"
						modeid={o.modeid}
						labelAlignment="right"
						minimalPresentation
					/>
				);
			})
		: [];
	const I = [];
	let E = 0;
	const M = sn(a, 10);
	const T = M && s?.source_bindings?.find((e) => e.key == 10)?.active_group;
	const R = sn(a, 2);
	const k = R && s?.source_bindings?.find((e) => e.key == 2)?.active_group;
	const D = R && s?.source_bindings?.find((e) => e.key == 1)?.active_group;
	const N =
		sn(a, 3) && s?.source_bindings?.find((e) => e.key == 3)?.active_group;
	const F = sn(a, 12);
	const O = F && s?.source_bindings?.find((e) => e.key == 12)?.active_group;
	if (M) {
		I.push(
			<S.Zm
				key={E++}
				baseActionSet={h.v3.BaseActionSet}
				layerActionSet={h.v3.LayerActionSet}
				eControllerSource={10}
				group={T}
				appid={appid}
			/>,
		);
	}
	const P = T?.mode == 4 ? 140 : 30;
	if (T && T?.mode && og(a, T.mode, 10, P)) {
		I.push(
			<G.Hx
				key={E++}
				eControllerType={a}
				baseActionSet={h.v3.BaseActionSet}
				layerActionSet={h.v3.LayerActionSet}
				eControllerSource={10}
				group={T}
				mapKey={P}
				localizationOverride={Localize(
					"#ControllerConfigurationQuickSettings_GyroSensitivity",
				)}
			/>,
		);
		if (T && T?.mode && T?.mode != 4 && og(a, T.mode, 10, 140)) {
			I.push(
				<G.Hx
					key={E++}
					eControllerType={a}
					baseActionSet={h.v3.BaseActionSet}
					layerActionSet={h.v3.LayerActionSet}
					eControllerSource={10}
					group={T}
					mapKey={140}
					localizationOverride={Localize(
						"#ControllerConfigurationQuickSettings_GyroNaturalSensitivity",
					)}
				/>,
			);
		}
	}
	if (
		(T?.mode != 25 && T?.mode != 27 && og(a, T?.mode, 10, 137)) ||
		og(a, O?.mode, 12, 137) ||
		og(a, N?.mode, 3, 137) ||
		og(a, k?.mode, 2, 137) ||
		og(a, D?.mode, 1, 137)
	) {
		const e =
			T?.mode == 22
				? T
				: O?.mode == 17
					? O
					: N?.mode == 17
						? N
						: k?.mode == 17
							? k
							: D?.mode == 17
								? D
								: null;
		const t =
			T?.mode == 22
				? 10
				: O?.mode == 17
					? 12
					: N?.mode == 17
						? 3
						: k?.mode == 17
							? 2
							: D?.mode == 17
								? 1
								: 0;
		if (e && t != 0) {
			I.push(
				<G.Hx
					key={E++}
					eControllerType={a}
					baseActionSet={h.v3.BaseActionSet}
					layerActionSet={h.v3.LayerActionSet}
					eControllerSource={t}
					group={e}
					mapKey={137}
					localizationOverride={Localize(
						"#ControllerConfigurationQuickSettings_PixelsPerRevolution",
					)}
				/>,
			);
		}
	}
	if (T && T?.mode && og(a, T.mode, 10, 42)) {
		I.push(
			<G.Hx
				key={E++}
				eControllerType={a}
				baseActionSet={h.v3.BaseActionSet}
				layerActionSet={h.v3.LayerActionSet}
				eControllerSource={10}
				group={T}
				mapKey={42}
				localizationOverride={Localize(
					"#ControllerConfigurationQuickSettings_GyroInvert",
				)}
			/>,
		);
	}
	if (R) {
		I.push(
			<S.Zm
				key={E++}
				baseActionSet={h.v3.BaseActionSet}
				layerActionSet={h.v3.LayerActionSet}
				eControllerSource={2}
				group={k}
				appid={appid}
			/>,
		);
	}
	if (k && k?.mode && og(a, k.mode, 2, 30)) {
		I.push(
			<G.Hx
				key={E++}
				eControllerType={a}
				baseActionSet={h.v3.BaseActionSet}
				layerActionSet={h.v3.LayerActionSet}
				eControllerSource={2}
				group={k}
				mapKey={30}
				localizationOverride={Localize(
					"#ControllerConfigurationQuickSettings_RPadSensitivity",
				)}
			/>,
		);
	}
	if (k && k?.mode && og(a, k.mode, 2, 42)) {
		I.push(
			<G.Hx
				key={E++}
				eControllerType={a}
				baseActionSet={h.v3.BaseActionSet}
				layerActionSet={h.v3.LayerActionSet}
				eControllerSource={2}
				group={k}
				mapKey={42}
				localizationOverride={Localize(
					"#ControllerConfigurationQuickSettings_RPadInvert",
				)}
			/>,
		);
	}
	if (F && O?.mode && og(a, O.mode, 12, 30)) {
		I.push(
			<G.Hx
				key={E++}
				eControllerType={a}
				baseActionSet={h.v3.BaseActionSet}
				layerActionSet={h.v3.LayerActionSet}
				eControllerSource={12}
				group={O}
				mapKey={30}
				localizationOverride={Localize(
					"#ControllerConfigurationQuickSettings_RStickSensitivity",
				)}
			/>,
		);
	}
	if (F && O?.mode && og(a, O.mode, 12, 42)) {
		I.push(
			<G.Hx
				key={E++}
				eControllerType={a}
				baseActionSet={h.v3.BaseActionSet}
				layerActionSet={h.v3.LayerActionSet}
				eControllerSource={12}
				group={O}
				mapKey={42}
				localizationOverride={Localize(
					"#ControllerConfigurationQuickSettings_RStickInvert",
				)}
			/>,
		);
	}
	const L = (e) => {
		setU(e);
		le.Fd.Get().CommitControllerSettings(e);
	};
	if (u && T && T?.mode && og(a, T.mode, 10, 65)) {
		I.push(
			<ve.mZ key={E++} controllerSettings={u} setControllerSettings={L} />,
		);
	}
	const [z, setZ] = n.useState(false);
	const U = h.v3.EditingConfiguration;
	const W = P4(U);
	const V = nQ(a, 55);
	const H = V && (w?.length > 0 || v?.length > 0);
	const JRef = n.useRef(undefined);
	n.useEffect(() => {
		const e = JRef.current?.childElementCount > 0;
		if (onRender) {
			onRender(e || W || W || V);
		}
	});
	return (
		<>
			<div className={A.QuickSettingsHeader}>
				{W
					? Localize(
							"#ControllerConfigurationQuickSettings_SectionTitle_MultipleActionSets",
						)
					: Localize("#ControllerConfigurationQuickSettings_SectionTitle")}
			</div>
			<we.dY showGlyphs={z} bleedGlpyhs />
			<c.Z onButtonDown={we.N} onFocusWithin={setZ} noFocusRing retainFocus>
				{V && y}
				{H && (
					<>
						<c.Z
							className={A.QuickSettingsGripGridContainer}
							flow-children="grid"
							navEntryPreferPosition={B.iU.MAINTAIN_X}
						>
							<c.Z
								flow-children="column"
								navEntryPreferPosition={B.iU.MAINTAIN_Y}
							>
								{V && w}
							</c.Z>
							<c.Z
								flow-children="column"
								navEntryPreferPosition={B.iU.MAINTAIN_Y}
							>
								{V && v}
							</c.Z>
						</c.Z>
						<l.Nu />
					</>
				)}
				<div className={A.QuickSettingsFieldsContainer} ref={JRef}>
					{I}
				</div>
			</c.Z>
		</>
	);
});
function ze() {
	const e = zy();
	return [e.state?.source ?? undefined, e.state?.input ?? undefined];
}
function Xe(e) {
	const [t, r] = ze();
	const i = n.useCallback(
		(e) =>
			e
				?.filter((e) => !y.Dd[e.key].analog && !y.Dd[e.key].dpad)
				.sort((e, t) => (y.Dd[e.key].id > y.Dd[t.key].id ? 1 : -1)),
		[],
	);
	return (
		<S.ih
			sourcesFilter={i}
			selectedSource={t}
			selectedInput={r}
			appid={e.appid}
		/>
	);
}
function Ue(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) => e?.filter((e) => y.Dd[e.key].dpad)?.sort((e) => e.key),
		[],
	);
	return (
		<S.ih
			sourcesFilter={r}
			rgBackupSources={[13]}
			selectedSource={t}
			appid={e.appid}
		/>
	);
}
function We(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) =>
			e
				?.filter((e) => y.Dd[e.key].stick)
				?.sort((e, t) => (y.Dd[e.key].id > y.Dd[t.key].id ? -1 : 1)),
		[],
	);
	return (
		<S.ih
			sourcesFilter={r}
			rgBackupSources={[3, 12, 18, 17]}
			selectedSource={t}
			appid={e.appid}
		/>
	);
}
function Ve(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) =>
			e
				?.filter((e) => y.Dd[e.key].trigger)
				?.sort((e, t) => (y.Dd[e.key].id > y.Dd[t.key].id ? -1 : 1)),
		[],
	);
	return <S.ih sourcesFilter={r} selectedSource={t} appid={e.appid} />;
}
function He(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) =>
			e
				?.filter((e) => y.Dd[e.key].trackpad)
				?.sort((e, t) => (y.Dd[e.key].id > y.Dd[t.key].id ? -1 : 1)),
		[],
	);
	return (
		<S.ih
			sourcesFilter={r}
			rgBackupSources={[1, 2, 11]}
			selectedSource={t}
			appid={e.appid}
		/>
	);
}
function Je(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) => e?.filter((e) => y.Dd[e.key].gyro)?.sort((e) => e.key),
		[],
	);
	const i =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	const [a, setA] = n.useState(le.Fd.Get().GetController(i));
	return (
		<>
			<S.ih
				sourcesFilter={r}
				rgBackupSources={[10]}
				selectedSource={t}
				appid={e.appid}
			/>
			<S.oW label={Localize("#Settings_ControllerCalibration_CalibrateIMU")} />
			<ve.mZ
				controllerSettings={a}
				setControllerSettings={(e) => {
					setA(e);
					le.Fd.Get().CommitControllerSettings(e);
				}}
			/>
		</>
	);
}
let qe;
export var h7;
function Ze(e) {
	if (e) {
		if (e.startsWith("template")) {
			return qe.Template;
		} else if (e.startsWith("autosave")) {
			return qe.Autosave;
		} else if (e.startsWith("workshop")) {
			return qe.Workshop;
		} else if (e.startsWith("game")) {
			return qe.Game;
		} else {
			return qe.Unknown;
		}
	} else {
		return qe.Unknown;
	}
}
export function QP(e) {
	if (!e) {
		return {
			eConfigType: h7.Unknown,
			bModified: false,
		};
	}
	if (!e.bConfigurationEnabled) {
		return {
			eConfigType: h7.OptedOut,
			bModified: false,
		};
	}
	if (e.bOfficial) {
		return {
			eConfigType: h7.Official,
			bModified: false,
		};
	}
	switch (Ze(e.URL)) {
		case qe.Unknown: {
			return {
				eConfigType: h7.Unknown,
				bModified: false,
			};
		}
		case qe.Autosave: {
			if (e.bProgenitorOfficial) {
				return {
					eConfigType: h7.Official,
					bModified: true,
				};
			}
			switch (Ze(e.ProgenitorURL)) {
				case qe.Unknown:
				case qe.Autosave:
				default: {
					return {
						eConfigType: h7.Unknown,
						bModified: true,
					};
				}
				case qe.Workshop: {
					if (e.accountID == ae.O$.currentUserSteamID?.GetAccountID()) {
						return {
							eConfigType: h7.Personal,
							bModified: true,
						};
					} else {
						return {
							eConfigType: h7.Workshop,
							bModified: true,
						};
					}
				}
				case qe.Template: {
					return {
						eConfigType: h7.Template,
						bModified: true,
					};
				}
				case qe.Game: {
					return {
						eConfigType: h7.Official,
						bModified: true,
					};
				}
			}
		}
		case qe.Workshop: {
			if (e.accountID == ae.O$.currentUserSteamID?.GetAccountID()) {
				return {
					eConfigType: h7.Personal,
					bModified: false,
				};
			} else {
				return {
					eConfigType: h7.Workshop,
					bModified: false,
				};
			}
		}
		case qe.Template: {
			return {
				eConfigType: h7.Template,
				bModified: false,
			};
		}
		case qe.Game: {
			return {
				eConfigType: h7.Official,
				bModified: false,
			};
		}
	}
}
export function hY(e) {
	return (
		!!e && (Ze(e.URL) == qe.Template || Ze(e.ProgenitorURL) == qe.Template)
	);
}
export function jT(e) {
	return (
		!!e &&
		((e.bRecommended && !e.bOfficial) ||
			(e.bProgenitorRecommended && !e.bProgenitorOfficial))
	);
}
export function W4(e) {
	const {
		onClick,
		bGamepadSupport,
		configType,
		bDisabled,
		iconType,
		creator,
		description,
		label,
		bInfoOnly,
	} = e;
	return (
		<>
			<l.$n
				className={A_1(
					A.CurrentConfigurationButton,
					!bGamepadSupport && A.CommunityConfigCalloutContainer,
				)}
				onClick={onClick}
				onOKActionDescription={Localize(
					"#ControllerConfigurator_ChooseConfiguration_Title",
				)}
				focusable={!bDisabled && configType != h7.OptedOut}
			>
				<l.aZ
					icon={
						<g.ControllerType
							controllerType={iconType}
							className={A.ControllerIcon}
						/>
					}
					upperDescription={creator}
					upperDescriptionVisibility="always"
					title={label}
					description={bInfoOnly || Localize(description)}
					descriptionVisibility="when-expanded"
					strTitleClassNames={A_1(
						!bGamepadSupport && A.CommunityConfigCalloutPresent,
						bDisabled && A.DisabledOverride,
					)}
				/>
				{configType != h7.OptedOut && (
					<g.Carat direction="right" className={A.Carat} />
				)}
			</l.$n>
		</>
	);
}
((e) => {
	e[(e.Unknown = 0)] = "Unknown";
	e[(e.Autosave = 1)] = "Autosave";
	e[(e.Workshop = 2)] = "Workshop";
	e[(e.Template = 3)] = "Template";
	e[(e.Game = 4)] = "Game";
})((qe ||= {}));
((e) => {
	e[(e.Unknown = 0)] = "Unknown";
	e[(e.Autosave = 1)] = "Autosave";
	e[(e.Official = 2)] = "Official";
	e[(e.Personal = 3)] = "Personal";
	e[(e.Workshop = 4)] = "Workshop";
	e[(e.Template = 5)] = "Template";
	e[(e.Search = 6)] = "Search";
	e[(e.OptedOut = 7)] = "OptedOut";
})((h7 ||= {}));
const $e = PA((e) => {
	const { config, type, bInfoOnly, onClick } = e;
	const s = h.v3.StableAppId;
	let o = null;
	let l = null;
	const m = se.H.GetAppDetails(s);
	let u = yZ(config);
	if (u == "$$$autosave") {
		u = Localize("#SettingsController_AutosaveName");
	}
	const p =
		config?.bOfficial ||
		config?.bRecommended ||
		config?.bRecommended ||
		config?.bProgenitorOfficial ||
		config?.bRecommended ||
		config?.bProgenitorOfficial ||
		config?.bProgenitorRecommended;
	let g = config?.nControllerType;
	switch (type) {
		case h7.Unknown: {
			o = u;
			break;
		}
		case h7.Autosave: {
			o = u;
			l = Localize("#AppControllerConfiguration_SelectedConfigCustomized");
			break;
		}
		case h7.Official: {
			o = u;
			l = m?.strDeveloperName;
			break;
		}
		case h7.Personal: {
			o = u;
			l = ae.O$.GetFriendState(ae.O$.currentUserSteamID).display_name;
			break;
		}
		case h7.Workshop: {
			o = u;
			l = ae.O$.GetFriendState(config.accountID).display_name;
			break;
		}
		case h7.Template: {
			o = u;
			l = p
				? Localize("#AppControllerConfiguration_RecommendedTemplateConfigUsing")
				: Localize("#AppControllerConfiguration_TemplateConfigUsing");
			break;
		}
		case h7.OptedOut: {
			o = Localize("#AppControllerConfiguration_SelectedConfigBuiltInGamepad");
			l = Localize("#AppControllerConfiguration_SelectedConfigBuiltIn");
			const e =
				h.v3.EditingConfigurationControllerIndex ??
				_.oy.MostRecentlyActiveControllerIndex;
			const r = le.Fd.Get().GetControllers() ?? [];
			const n = r.findIndex((t) => t.nControllerIndex == e);
			g = r[n]?.eControllerType;
		}
	}
	if (p) {
		o = Localize(
			"#AppControllerConfiguration_OfficialConfig",
			m?.strDisplayName,
			o,
		);
	}
	const C = M8(s);
	const f = (
		<W4
			onClick={onClick}
			description={config?.Description}
			bInfoOnly={bInfoOnly}
			bGamepadSupport={C}
			creator={l}
			label={o}
			configType={type}
			iconType={g}
		/>
	);
	if (C) {
		return <div>{f}</div>;
	} else {
		return (
			<c.Z onOKButton={onClick}>
				{f}
				{bInfoOnly && !C && (
					<c.Z
						focusable={false}
						onActivate={onClick}
						className={A.CommunityConfigsCallout}
					>
						<div className={A.Description}>
							<div className={A.SubTitle}>
								{LocalizeInlineReactWithFallback(
									"#AppControllerConfiguration_FindCommunityConfig_Desc",
									<span className={A.ConfigurationHeaderBold} />,
								)}
							</div>
						</div>
					</c.Z>
				)}
			</c.Z>
		);
	}
});
const Et = PA((e) => {
	const { currentConfig, onClick } = e;
	return q3(() => {
		let { eConfigType, bModified } = QP(currentConfig);
		if (bModified) {
			eConfigType = h7.Personal;
		}
		if (eConfigType == h7.OptedOut) {
			return (
				<$e
					config={currentConfig}
					type={h7.OptedOut}
					bInfoOnly
					onClick={null}
				/>
			);
		} else {
			return (
				<$e
					config={currentConfig}
					type={eConfigType}
					bInfoOnly
					onClick={onClick}
				/>
			);
		}
	});
});
function tt(e, t) {
	const r = _.oy.IsAnyAppRunning();
	const n = le.Fd.Get().GetControllersSorted(r);
	const i =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	const a = n.findIndex((e) => e.nControllerIndex == i) + t;
	if (a >= 0 && a < n.length) {
		const t = n[a].nControllerIndex;
		h.v3.SaveEditingConfiguration(e);
		h.v3.EnsureEditingConfiguration(e, t);
		Ne.eZ.PlayNavSound(Ne.PN.ChangeTabs);
	} else {
		Ne.eZ.PlayNavSound(Ne.PN.FailedNav);
	}
}
function Rt(e) {
	const { appid, autoFocus, ...i } = e;
	const a = n.useCallback(
		(e) => {
			h.v3.SaveEditingConfiguration(appid);
			h.v3.EnsureEditingConfiguration(appid, e);
		},
		[appid],
	);
	const s = (le.Fd.Get().GetControllers() ?? []).length >= 2;
	return (
		<c.Z
			className={A_1(A.ControllerSelectionContainer, s && A.Visible)}
			autoFocus={autoFocus}
		>
			{s && <BV {...i} onControllerSelected={a} />}
		</c.Z>
	);
}
export function BV(e) {
	const {
		selectedControllerIndex,
		onControllerSelected,
		showGlyphs,
		wrapAround,
		showUnboundControllers,
	} = e;
	const o = Un();
	const l = wy(o);
	const u = Sz();
	const A = R7();
	let p = 0;
	let h = l.map((e, r) => {
		const i = e.eControllerType == 4;
		if (e.nControllerIndex == selectedControllerIndex) {
			p = r;
		}
		const a = e.strName.startsWith("#")
			? i
				? Localize("#SteamDeckName")
				: Localize(e.strName)
			: e.strName;
		return {
			id: `${e.nControllerIndex}`,
			title: a,
			icon: <g.ControllerType controllerType={e.eControllerType} />,
		};
	});
	if (showUnboundControllers) {
		h = h.concat(
			u.map((e, r) => {
				if (r == q_1(selectedControllerIndex)) {
					p = l.length + r;
				}
				return {
					id: `${Id(r)}`,
					title: e.strName,
					icon: <g.ControllerType controllerType={30} />,
				};
			}),
		);
	}
	const CRef = n.useRef(undefined);
	const f = n.useCallback(
		(e) => {
			const t = Number.parseInt(e);
			if (onControllerSelected) {
				onControllerSelected(t);
			}
		},
		[onControllerSelected],
	);
	const b = n.useCallback(
		(e) => !!o && e.detail.button == m.pR.SELECT && (b_1(A), true),
		[o, A],
	);
	return (
		<c.Z
			onButtonDown={b}
			actionDescriptionMap={
				o && {
					[m.pR.SELECT]: Localize(
						"#ControllerConfigurator_ActionButtonLabel_ChangeOrder",
					),
				}
			}
		>
			<re.JZ
				tabs={h}
				activeTab={`${selectedControllerIndex}`}
				onShowTab={f}
				showGlyphs={showGlyphs}
				navRef={CRef}
				wrapAround={wrapAround}
			/>
		</c.Z>
	);
}
export function FD() {
	const e = h.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const t = h.v3.EditingConfiguration?.sets[e];
	const r = U$(t, 2);
	return r?.length > 0;
}
function at(e) {
	let [t, setT] = n.useState(e);
	return [t, (e) => setT(e.target.value)];
}
const St = PA((e) => {
	const { appid, controllerIndex, currentConfig, typeOverride, ...s } = e;
	const c =
		currentConfig.bOfficial ||
		currentConfig.accountID != ae.O$.currentUserSteamID.GetAccountID() ||
		currentConfig.accountID != ae.O$.currentUserSteamID.GetAccountID() ||
		currentConfig.Title?.charAt(0) == "#";
	const m = se.H.GetAppDetails(currentConfig?.appID);
	let [u, p] = at(c ? "" : yZ(currentConfig));
	let [g, _] = at(ut_1(currentConfig, m?.strDisplayName));
	let [f, setF] = n.useState(typeOverride || 1);
	const y = yZ(currentConfig);
	const S = u.trim().length != 0 || u == y;
	let WRef = n.useRef(undefined);
	let BRef = n.useRef(undefined);
	h.v3.EnsureEditingConfiguration(appid, controllerIndex);
	const { bTimerCompleted, fnStopTimer, fnRestartTimer } = L$(2000);
	n.useEffect(() => fnStopTimer(), [fnStopTimer]);
	let [M, setM] = n.useState(false);
	const R = N4();
	const k = q3(() => qw().BIsOfflineMode());
	n.useEffect(() => {
		if (bTimerCompleted) {
			h.v3.EnsureEditingConfiguration(appid, controllerIndex);
			h.v3.QueryConfigsForApp(appid, controllerIndex);
			e.closeModal();
		}
	}, [bTimerCompleted, appid, controllerIndex, e]);
	let D = [
		{
			data: 1,
			label: Localize("#AppControllerConfiguration_Export_Type_PersonalLocal"),
		},
		{
			data: 2,
			label: Localize("#AppControllerConfiguration_Export_Type_PersonalCloud"),
		},
		{
			data: 4,
			label: Localize("#AppControllerConfiguration_Export_Type_Template"),
		},
	];
	if (!R || !!k) {
		D = D.slice(0, 1);
	}
	return (
		<C.X_
			{...s}
			onCustomOK={() => {
				if (!M) {
					setM(true);
					const e = y == u ? currentConfig?.Title : u;
					h.v3.ExportEditingConfiguration(appid, f, e, g, "");
				}
				fnRestartTimer();
			}}
			onCancel={() => {
				e.closeModal();
			}}
			title={Localize("#AppControllerConfiguration_OverwriteConfig_New")}
			disableCommit={!S}
		>
			<l.pd
				placeholder={Localize("#AppControllerConfiguration_Export_Title")}
				className={A.AccountNameCtn}
				label={Localize("#AppControllerConfiguration_Export_Title")}
				value={u}
				maxLength={64}
				autoFocus
				onChange={p}
				onEnterKeyPress={() => {
					BRef.current.TakeFocus();
				}}
				navRef={WRef}
			/>
			<l.pd
				placeholder={Localize("#AppControllerConfiguration_Export_Description")}
				className={A.AccountNameCtn}
				label={Localize("#AppControllerConfiguration_Export_Description")}
				value={g}
				maxLength={512}
				autoFocus={false}
				onChange={_}
				onEnterKeyPress={() => {}}
				navRef={BRef}
			/>
			{!typeOverride && (
				<l.Vb
					label={Localize("#AppControllerConfiguration_Export_Type")}
					rgOptions={D}
					onChange={(e) => setF(e.data)}
					selectedOption={f}
					strDefaultLabel={Localize("#AppControllerConfiguration_Export_Type")}
				/>
			)}
		</C.X_>
	);
});
const Ot = PA((e) => {
	const { appid, controllerIndex, currentConfig, ...a } = e;
	let s = currentConfig.vecOfficialTitles[0]?.strToken;
	let o = currentConfig.vecOfficialDescriptions[0]?.strToken;
	h.v3.EnsureEditingConfiguration(appid, controllerIndex);
	let [c, setC] = n.useState(false);
	const u = oe.tw.GetAppOverviewByAppID(appid)?.display_name;
	const A = currentConfig?.vecOfficialTitles?.map((e, t) => ({
		label: Localize(e.strLocalized, u),
		data: t,
	}));
	const p = se.H.GetAppDetails(appid);
	const g = p?.strDeveloperName;
	const _ = Localize(
		`#${le.Fd.GetControllerTypeString(currentConfig.nControllerType)}`,
	);
	const f = currentConfig.vecOfficialDescriptions.map((e, t) => ({
		label: Localize(e.strLocalized, g, _),
		data: t,
	}));
	return (
		<C.X_
			{...a}
			onCommitResult={() => {
				if (!c) {
					setC(true);
					h.v3.EnsureEditingConfiguration(appid, controllerIndex);
					h.v3.ExportEditingConfiguration(appid, 2, s, o, "");
				}
				e.closeModal();
			}}
			onCancel={() => {
				e.closeModal();
			}}
			title={Localize("#AppControllerConfiguration_OfficialExport")}
		>
			<l.Vb
				label={Localize("#AppControllerConfiguration_Export_Title")}
				rgOptions={A}
				onChange={(e) => {
					t = e.data;
					s = currentConfig.vecOfficialTitles[t].strToken;
					return;
					var t;
				}}
				selectedOption={0}
				strDefaultLabel={Localize("#AppControllerConfiguration_Export_Title")}
			/>
			<l.Vb
				label={Localize("#AppControllerConfiguration_Export_Description")}
				rgOptions={f}
				onChange={(e) => {
					t = e.data;
					o = currentConfig.vecOfficialDescriptions[t].strToken;
					return;
					var t;
				}}
				selectedOption={0}
				strDefaultLabel={Localize(
					"#AppControllerConfiguration_Export_Description",
				)}
			/>
		</C.X_>
	);
});
const Lt = PA((e) => {
	const t = st_1(e.appid, e.controllerIndex);
	const [r] = VI("steam_input_configurator_error_msg_enable");
	if (!t) {
		return (
			<Ae.eV onCancel={e.closeModal}>
				<l.Y9>
					{Localize("#AppControllerConfiguration_Configuration_Details")}
				</l.Y9>
				<l.iK>Not found</l.iK>
			</Ae.eV>
		);
	}
	const i = se.H.GetAppDetails(t?.appID);
	const a = yZ(t);
	const s = t.bOfficial
		? i?.strDeveloperName
		: ae.O$.GetFriendState(t.accountID).display_name;
	const o = ut_1(t, s);
	const c = `steam://controllerconfig/${e.appid}/${t.publishedFileID}`;
	const { eConfigType, bModified } = QP(t);
	const p = eConfigType == h7.Template || t.eExportType == 4;
	const g = t.publishedFileID != "0" && !bModified && !p && t.eExportType != 1;
	const C = g;
	const _ = r && H.rV.settings?.bIsValveEmail;
	const f = h.v3.EditingConfiguration?.error_msg?.split("\n").map((e, t) => (
		<span key={t}>
			{e}
			<br />
		</span>
	));
	const b = h.v3.EditingConfiguration?.action_block_path?.length > 0;
	if (C) {
		CopyTextToClipboard(c);
	}
	return (
		<Ae.eV onCancel={e.closeModal}>
			<l.Y9>
				{Localize("#AppControllerConfiguration_Configuration_Details")}
			</l.Y9>
			<l.a3>
				<l.Nv
					label={Localize(
						"#AppControllerConfiguration_Configuration_Details_Title",
					)}
				>
					{a}
				</l.Nv>
				<l.Nv
					label={Localize(
						"#AppControllerConfiguration_Configuration_Details_Description",
					)}
				>
					{o}
				</l.Nv>
				<l.Nv
					label={Localize(
						"#AppControllerConfiguration_Configuration_Details_Author",
					)}
				>
					{p ? Localize("#AppControllerConfiguration_TemplateConfig") : s}
				</l.Nv>
				<l.Nv label="URL">{t.URL}</l.Nv>
				{g && (
					<l.Nv
						label={Localize(
							"#AppControllerConfiguration_Configuration_Details_ID",
						)}
					>
						{t.publishedFileID}
					</l.Nv>
				)}
				{C && (
					<l.Nv
						label={Localize(
							"#AppControllerConfiguration_Configuration_Details_Link",
						)}
					>
						{c}
					</l.Nv>
				)}
				<div className={A.ClipboardLabel}>
					{Localize(
						C
							? "#AppControllerConfiguration_Configuration_LinkInfo"
							: "#AppControllerConfiguration_Configuration_NoLinkInfo",
					)}
				</div>
				{r && (
					<l.G5>
						<l.lr>{Localize("#ControllerConfigurator_ConfigInfo_Title")}</l.lr>
						<l.Nv
							label={Localize(
								"#ControllerConfigurator_ConfigInfo_ActionBlockSource",
							)}
						>
							{b
								? h.v3.EditingConfiguration?.action_block_path
								: Localize(
										"#ControllerConfigurator_ConfigInfo_ActionBlockSource_None",
									)}
						</l.Nv>
						<l.iK>
							{Localize("#ControllerConfigurator_ConfigInfo_ErrorMsgs")}
						</l.iK>
						<l.a3>
							{" "}
							{h.v3.EditingConfiguration?.error_msg?.length > 0
								? f
								: Localize(
										"#ControllerConfigurator_ConfigInfo_ActionBlockSource_None",
									)}{" "}
						</l.a3>
					</l.G5>
				)}
				{_ && (
					<>
						<l.lr>Valve-Only Developer Info</l.lr>
						<l.Nv label="Launching Interstitial Type">
							{h7[m]}
							{jT(t) && " (Recommended)"}
							{bModified && " (Modified)"}
						</l.Nv>
						<l.Nv label="Progenitor URL">
							{t.ProgenitorURL?.length > 0 ? t.ProgenitorURL : "None"}
						</l.Nv>
					</>
				)}
			</l.a3>
		</Ae.eV>
	);
});
function Ct_1(e) {
	const { appid, controllerIndex, currentConfig, autoFocus } = e;
	const m = W6();
	oH();
	const u = N4();
	const p = q3(() => qw().BIsOfflineMode());
	const [C] = VI("steam_input_configurator_error_msg_enable");
	let _ = currentConfig?.bDeveloper || C;
	let y = le.Fd.Get().GetControllers();
	const S = h.v3.EditingConfigurationControllerIndex;
	const w = y.findIndex((e) => e.nControllerIndex == S);
	const B = Math.max(0, Math.min(w, y.length));
	const E = y[w]?.eControllerType != 4 && y[w]?.eControllerType != 2;
	const { eConfigType, bModified } = q3(() => QP(currentConfig));
	const R = () => {
		h.v3.Navigate(m, Me.BV.GamepadUI.ControllerConfigurator.Summary(appid));
	};
	const k = _ && h.v3.EditingConfiguration?.error_msg?.length > 0;
	const D = () => {
		h.v3.Navigate(m, Me.BV.GamepadUI.ControllerConfigurator.Buttons(appid));
	};
	let [N, setN] = n.useState(false);
	const G = (e) => {
		pg(
			<St
				appid={appid}
				controllerIndex={controllerIndex}
				currentConfig={currentConfig}
			/>,
			e,
		);
	};
	const O = (e) => {
		let a = GetOwningWindowForEvent(e);
		pg(
			<St
				appid={appid}
				controllerIndex={controllerIndex}
				currentConfig={currentConfig}
				typeOverride={3}
			/>,
			a,
		);
	};
	const P = () => {
		if (!currentConfig) {
			return;
		}
		if (!currentConfig.ProgenitorURL || Ze(currentConfig.URL) == qe.Workshop) {
			return;
		}
		let i_ProgenitorURL = currentConfig.ProgenitorURL;
		let n;
		let a;
		let s;
		let o;
		n = currentConfig.Title;
		a = currentConfig.Description;
		s = currentConfig.eExportType;
		o = i_ProgenitorURL;
		if (!N) {
			setN(true);
			h.v3.EnsureEditingConfiguration(appid, controllerIndex);
			h.v3.ExportEditingConfiguration(appid, s, n, a, o);
		}
	};
	const L = (e) => {
		let a = GetOwningWindowForEvent(e);
		if (currentConfig?.vecOfficialTitles?.length > 0) {
			pg(
				<Ot
					appid={appid}
					controllerIndex={controllerIndex}
					currentConfig={currentConfig}
				/>,
				a,
			);
		} else {
			pg(
				<St
					appid={appid}
					controllerIndex={controllerIndex}
					currentConfig={currentConfig}
					typeOverride={2}
				/>,
				a,
			);
		}
	};
	const z = (e) => {
		let i = GetOwningWindowForEvent(e);
		h.v3.SaveEditingConfiguration(appid);
		pg(<Lt controllerIndex={controllerIndex} appid={appid} />, i, {
			strTitle: Localize("#AppControllerConfiguration_Configuration_Details"),
		});
	};
	const x = (e) => {
		let t = GetOwningWindowForEvent(e);
		if (
			!((e) =>
				!!e &&
				(!e.ProgenitorURL || Ze(e.ProgenitorURL) == qe.Workshop) &&
				e.accountID == ae.O$.currentUserSteamID.GetAccountID() &&
				(e.eExportType == null ||
					e.eExportType == 1 ||
					e.eExportType == 1 ||
					e.eExportType == 2))(currentConfig) ||
			!u ||
			!u ||
			p
		) {
			G(t);
		} else {
			pg(
				<Ae.o0
					strTitle={Localize(
						"#AppControllerConfiguration_OverwriteConfig_Title",
					)}
					strDescription={Localize(
						"#AppControllerConfiguration_OverwriteConfig_Desc",
						currentConfig?.Title,
					)}
					strOKButtonText={Localize(
						"#AppControllerConfiguration_OverwriteConfig_Overwrite",
					)}
					strCancelButtonText={Localize(
						"#AppControllerConfiguration_OverwriteConfig_New",
					)}
					bDestructiveWarning
					onOK={P}
					onCancel={() => G(t)}
				/>,
				t,
				{
					strTitle: Localize(
						"#AppControllerConfiguration_OverwriteConfig_Title",
					),
				},
			);
		}
	};
	const U = () => {
		if (currentConfig && currentConfig.ProgenitorURL != "") {
			let e = h.v3.EditingConfigurationControllerIndex;
			const n = false;
			h.v3.SetActiveConfigForApp(appid, e, currentConfig.ProgenitorURL, n);
			h.v3.EnsureEditingConfiguration(appid, controllerIndex);
		}
	};
	const W = () => {
		SteamClient.Apps.SetThirdPartyControllerConfiguration(appid, 0);
		h.v3.SaveEditingConfiguration(appid);
		h.v3.ClearSelectedConfigCache(appid);
		h.v3.EnsureEditingConfiguration(appid, controllerIndex);
	};
	const V = (e) => {
		let t = GetOwningWindowForEvent(e);
		pg(
			<Ae.o0
				strTitle={Localize("#AppControllerConfiguration_SteamInputToggle")}
				strDescription={Localize(
					"#AppControllerConfiguration_SteamInputToggle_Desc",
				)}
				bDestructiveWarning
				onOK={W}
				onCancel={null}
			/>,
			t,
			{
				strTitle: Localize("#AppControllerConfiguration_SteamInputToggle"),
			},
		);
	};
	const j = (e) => {
		let t = GetOwningWindowForEvent(e);
		if (currentConfig?.ProgenitorURL != "") {
			pg(
				<Ae.o0
					strTitle={Localize("#AppControllerConfiguration_ConfirmRevertConfig")}
					strDescription={Localize(
						"#AppControllerConfiguration_ConfirmRevertConfig_Desc",
					)}
					bDestructiveWarning
					onOK={U}
					onCancel={null}
				/>,
				t,
				{
					strTitle: Localize("#AppControllerConfiguration_ConfirmRevertConfig"),
				},
			);
		}
	};
	let q = null;
	if (w != B && y.length > 0) {
		const e = y[B].nControllerIndex;
		h.v3.SaveEditingConfiguration(appid);
		h.v3.EnsureEditingConfiguration(appid, e);
	}
	q =
		y.length == 0 ? (
			<div className={A.NoControllerMessage}>
				{Localize("#AppControllerConfiguration_NoController")}
			</div>
		) : (
			eConfigType == h7.OptedOut || (
				<>
					<c.Z
						className={A.ControllerConfigurationActionButtons}
						flow-children="row"
					>
						<div>
							<l.jn autoFocus={autoFocus} onClick={R}>
								{Localize("#AppControllerConfiguration_ViewLayout")}
							</l.jn>
						</div>
						<div>
							<l.$n onClick={D}>
								{Localize("#AppControllerConfiguration_Edit")}
							</l.$n>
						</div>
						<l.$n
							className={A.MainOptionsButton}
							onClick={(e) =>
								((e) => {
									const t = (
										<b.tz
											label={Localize(
												"#ControllerConfigurator_Main_ContextMenu_Title",
											)}
										>
											<b.kt onSelected={x}>
												{Localize("#AppControllerConfiguration_Export")}
											</b.kt>
											{u && !p && (
												<b.kt onSelected={O}>
													{Localize("#AppControllerConfiguration_Share")}
												</b.kt>
											)}
											{_ && u && !p && (
												<b.kt onSelected={L}>
													{Localize(
														"#AppControllerConfiguration_OfficialExport",
													)}
												</b.kt>
											)}
											<b.kt onSelected={z}>
												{Localize(
													"#AppControllerConfiguration_Configuration_Details",
												)}
											</b.kt>
											<b.kt
												onSelected={j}
												disabled={currentConfig?.ProgenitorURL == ""}
											>
												{Localize("#AppControllerConfiguration_RevertChanges")}
											</b.kt>
											{E && (
												<b.kt onSelected={V}>
													{Localize(
														"#AppControllerConfiguration_SteamInputToggle",
													)}
												</b.kt>
											)}
										</b.tz>
									);
									lX(t, e);
								})(e)
							}
						>
							<g.Settings />
						</l.$n>
					</c.Z>
					{k && (
						<c.Z focusable className={A.ErrorMsgButton} onActivate={z}>
							{" "}
							{Localize("#AppControllerConfiguration_SeeErrorMsgs")}
						</c.Z>
					)}
				</>
			)
		);
	return (
		<c.Z
			style={{
				scrollMargin: "60px 0",
			}}
		>
			<l.iK />
			{q}
		</c.Z>
	);
}
function Mt(e) {
	const t = h.v3.StableAppId;
	return (
		<l.$n
			className={A.HelpButton}
			onClick={async () => {
				await w.z.ClearInterstitialSeen(w.H.k_eIntro);
				let e = oe.tw.GetAppOverviewByAppID(t)?.steam_deck_compat_category;
				if (i.TS.ON_DECK && e != 3) {
					await w.z.ClearInterstitialSeen(w.H.k_eNonVerifiedGame);
				}
				await w.z.ClearInterstitialSeen(w.H.k_eGyro);
				w.z.AddInterstitialToQueue({
					eInterstitial: w.H.k_eIntro,
					appid: t,
				});
				if (i.TS.ON_DECK && e != 3) {
					w.z.AddInterstitialToQueue({
						eInterstitial: w.H.k_eNonVerifiedGame,
						appid: t,
					});
				}
			}}
			onOKActionDescription={Localize("#Help")}
		>
			<g.Question />
		</l.$n>
	);
}
function Ut(e) {
	const { appid, onFocusWithin, children, grow } = e;
	const SRef = n.useRef(undefined);
	const ORef = n.useRef(undefined);
	const l = n.useCallback(
		(e) => {
			if (onFocusWithin) {
				onFocusWithin(e);
			}
			if (ORef.current != null && e) {
				const e = (0, _f)(ORef.current);
				window.clearTimeout(SRef.current);
				SRef.current = window.setTimeout(
					() =>
						e.scrollTo({
							top: 0,
							behavior: "smooth",
						}),
					0,
				);
			}
		},
		[ORef, SRef, onFocusWithin],
	);
	const d = n.useCallback(
		(e) =>
			e.detail.button == m.pR.BUMPER_LEFT
				? (tt(appid, -1), true)
				: e.detail.button == m.pR.BUMPER_RIGHT && (tt(appid, 1), true),
		[appid],
	);
	n.useEffect(() => window.clearTimeout(SRef.current), []);
	return (
		<div className={A_1(A.TopSection, grow && A.Grow)}>
			<c.Z className={A.Inner} ref={ORef} onFocusWithin={l} onButtonDown={d}>
				{children}
			</c.Z>
		</div>
	);
}
function Dt(e) {
	const TRef = n.useRef(undefined);
	const RRef = n.useRef(undefined);
	const i = n.useCallback(() => {
		const e = (0, _f)(RRef.current);
		const n = e.getBoundingClientRect().top;
		const i = RRef.current.getBoundingClientRect().top;
		const a = Math.round(e.scrollTop);
		const s = Math.round(i - n + e.scrollTop);
		if (a < s) {
			window.clearTimeout(TRef.current);
			TRef.current = window.setTimeout(
				() =>
					e.scrollTo({
						top: s,
						behavior: "smooth",
					}),
				0,
			);
		}
	}, [RRef, TRef]);
	n.useEffect(() => window.clearTimeout(TRef.current), []);
	const { strMinHeightStyle, refForResizeObserver } = X_1();
	const o = Ue_1(refForResizeObserver, RRef);
	return (
		<c.Z
			style={{
				minHeight: strMinHeightStyle,
			}}
			className={A_1(A.BottomSection, e.visible && A.Visible)}
			ref={o}
			onGamepadFocus={i}
		>
			{e.children}
		</c.Z>
	);
}
export function E6(e) {
	if (le.Fd.Get().GetControllers()?.length > 0) {
		return null;
	} else {
		return (
			<div className={A.NoControllerColumn}>
				<g.NoController className={A_1(A.NoControllerSVG, e.wide && A.Wide)} />
				<div className={A.NoControllerLabel}>
					{Localize("#AppControllerConfiguration_NoController")}
				</div>
			</div>
		);
	}
}
export function Dh(e) {
	const { appid, controllerIndex, currentConfig, app, centerLayout } = e;
	const c = le.Fd.Get().GetControllers();
	const m = app?.BHasStoreCategory(59);
	const p = le.Fd.Get().GetController(controllerIndex);
	const g =
		m ||
		(app?.ps4_controller_support >= 1 && !p?.bBluetooth) ||
		(app?.ps4_controller_support == 2 && p.bBluetooth);
	const C =
		m ||
		(app?.ps5_controller_support >= 1 && !p?.bBluetooth) ||
		(app?.ps5_controller_support == 2 && p.bBluetooth);
	let _ = false;
	const f = $c(p?.eControllerType);
	switch (f) {
		case 32: {
			_ = app?.xbox_controller_support >= 1;
			break;
		}
		case 34: {
			_ = g;
			break;
		}
		case 45: {
			_ = C;
		}
	}
	let b;
	b = m
		? [
				"#AppControllerConfiguration_SteamInputAPI",
				"#AppControllerConfiguration_SteamInputAPI_Desc",
			]
		: currentConfig?.bConfigurationEnabled && _
			? [
					"#AppControllerConfiguration_SteamInputTranslation",
					"#AppControllerConfiguration_SteamInputRemap_Desc",
				]
			: currentConfig?.bConfigurationEnabled
				? [
						"#AppControllerConfiguration_SteamInputTranslation",
						"#AppControllerConfiguration_SteamInputTranslation_Desc",
					]
				: [
						"#AppControllerConfiguration_BuiltInSupport",
						"#AppControllerConfiguration_ControllerOptedOut1",
					];
	let y = "#AppControllerConfiguration_SteamInputTranslation_Desc2_None";
	if (app?.BIsShortcut()) {
		y = "#AppControllerConfiguration_SteamInputTranslation_Desc2_Shortcut";
	} else if (app?.xbox_controller_support == 2) {
		y = "#AppControllerConfiguration_SteamInputTranslation_Desc2_Full";
	} else if (app?.xbox_controller_support == 1) {
		y = "#AppControllerConfiguration_SteamInputTranslation_Desc2_Partial";
	}
	const S =
		f == 34 || f == 45 || f == 45 || f == 32 || (m && (f == 38 || f == 30));
	const w =
		!i.TS.ON_DECK ||
		(S && !p?.bRemoteDevice && !currentConfig?.bConfigurationEnabled);
	const B = c?.filter((e) => mx(e.eControllerType)).length == 0;
	if (w) {
		return (
			<div className={A.ControllerSupportInfoSection}>
				{B && (
					<l.xh
						label={Localize(b[0])}
						description={<>{Localize(b[1])}</>}
						onClick={
							currentConfig?.bConfigurationEnabled
								? () => {
										SteamClient.Apps.SetThirdPartyControllerConfiguration(
											appid,
											0,
										);
										h.v3.SaveEditingConfiguration(appid);
										h.v3.ClearSelectedConfigCache(appid);
										h.v3.EnsureEditingConfiguration(appid, controllerIndex);
									}
								: () => {
										SteamClient.Apps.SetThirdPartyControllerConfiguration(
											appid,
											2,
										);
										h.v3.SaveEditingConfiguration(appid);
										h.v3.ClearSelectedConfigCache(appid);
										h.v3.EnsureEditingConfiguration(appid, controllerIndex);
									}
						}
						highlightOnFocus={false}
						bottomSeparator="standard"
					>
						{currentConfig?.bConfigurationEnabled
							? Localize("#AppProperties_SteamInputOff")
							: Localize("#AppProperties_SteamInputOn")}
					</l.xh>
				)}
				{!i.TS.ON_DECK && app && (
					<div
						className={A_1((centerLayout || c?.length == 0) && A.CenterColumn)}
					>
						<div className={A.SupportTitle}>
							{Localize(
								"#AppControllerConfiguration_ControllerSupportInfo_Title",
							)}
						</div>
						<div className={A.SupportLabel}>{Localize(y)}</div>
						{app?.xbox_controller_support >= 1 && (
							<div className={A_1(A.ControllerImageRow, S && A.HasADevice)}>
								<Gt
									controllerIndex={controllerIndex}
									controllerType={32}
									checked={app?.xbox_controller_support >= 1}
									partial={app?.xbox_controller_support == 1}
								/>
								<Gt
									controllerIndex={controllerIndex}
									controllerType={34}
									checked={g}
									partial={app?.xbox_controller_support == 1}
								/>
								<Gt
									controllerIndex={controllerIndex}
									controllerType={45}
									checked={C}
									partial={app?.xbox_controller_support == 1}
								/>
								{m && (
									<Gt
										controllerIndex={controllerIndex}
										controllerType={38}
										checked
										partial={app?.xbox_controller_support == 1}
									/>
								)}
								{m && (
									<Gt
										controllerIndex={controllerIndex}
										controllerType={30}
										checked
										partial={app?.xbox_controller_support == 1}
									/>
								)}
							</div>
						)}
					</div>
				)}
			</div>
		);
	} else {
		return null;
	}
}
function Gt(e) {
	const t = le.Fd.Get().GetController(e.controllerIndex)?.eControllerType;
	return (
		<div className={A_1(e.checked && A.Checked, A.ControllerSupportImage)}>
			<g.ControllerType
				className={A.ControllerInfoSVG}
				controllerType={e.controllerType}
				partial={e.partial}
			/>
			{e.checked && <g.Checkmark className={A.Checkmark} />}
			{e.controllerType == $c(t) && (
				<div className={A.YourControllerLabel}>
					{Localize(
						"#AppControllerConfiguration_ControllerSupportInfo_YourController",
					)}
				</div>
			)}
		</div>
	);
}
const Ht = PA((e) => {
	const { appid } = e;
	const r =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	const s = st_1(e.appid, e.controllerIndex);
	const m = R7();
	const [u, setU] = n.useState(false);
	const g = oe.tw.GetAppOverviewByAppID(appid);
	n.useEffect(() => {
		w.z.AddInterstitialToQueue({
			eInterstitial: w.H.k_eIntro,
			appid: appid,
		});
		let e = g?.steam_deck_compat_category;
		if (i.TS.ON_DECK && e != 3) {
			w.z.AddInterstitialToQueue({
				eInterstitial: w.H.k_eNonVerifiedGame,
				appid: appid,
			});
		}
	}, [appid, g?.steam_deck_compat_category]);
	const C = W6();
	q3(() => h.v3.EnsureEditingConfiguration(appid, r));
	const f = tk();
	const b = f.length > 0 && s?.bConfigurationEnabled;
	const [y, setY] = n.useState(true);
	const v = n.useCallback(
		(e) => {
			if (e != y) {
				setY(e);
			}
		},
		[y],
	);
	const I = se.H.GetAppDetails(appid);
	let E = false;
	if (I?.bSteamInputRequiresGameInstall) {
		let e = g && g.GetPerClientData("local");
		if (g && e) {
			E = !g.BIsPerClientDataLocal(e) || !e.installed;
		}
	}
	const M = Z_1();
	const T = f.length > 1;
	return (
		<ne.Jr
			scrollable={false}
			className={A.ControllerConfiguratorGamepadPage}
			onMouseDown={(e) => e.preventDefault()}
		>
			<Rt
				autoFocus={T}
				appid={appid}
				selectedControllerIndex={r}
				showGlyphs={u}
			/>
			<De.MS
				className={A.ControllerConfiguratorMain}
				scrollIntoViewType={B.Yo.NoTransform}
			>
				{!E && s && (
					<>
						<Ut appid={appid} onFocusWithin={setU} grow={!b}>
							<E6 />
							<Dh appid={appid} controllerIndex={r} currentConfig={s} app={g} />
							{s?.bConfigurationEnabled && (
								<>
									<div className={A.TopSectionHeader}>
										{Localize(
											"#AppControllerConfiguration_CurrentConfiguration",
										)}
										<c.Z className={A.HelpButtonContainer}>
											{M && (
												<l.$n
													className={A.SmallTopButtons}
													onClick={() => b_1(m)}
													onOKActionDescription={Localize(
														"#ControllerConfigurator_ActionButtonLabel_ChangeOrder",
													)}
												>
													{Localize(
														"#ControllerConfigurator_ActionButtonLabel_ChangeOrder",
													)}
												</l.$n>
											)}
											<Mt />
										</c.Z>
									</div>
									<Et
										currentConfig={s}
										onClick={() => {
											h.v3.Navigate(
												C,
												Me.BV.GamepadUI.ControllerConfigurator.ChooseConfiguration.Root(
													appid,
												),
											);
										}}
									/>
									<Ct_1
										appid={appid}
										controllerIndex={r}
										currentConfig={s}
										autoFocus={!T}
									/>
								</>
							)}
						</Ut>
						{b && (
							<Dt visible={y}>
								<Ie appid={appid} controllerIndex={r} onRender={v} />
							</Dt>
						)}
					</>
				)}
				{E && (
					<l.a3 className={A.NeedsInstallWarning}>
						{" "}
						{Localize("#AppControllerConfiguration_ConfigNeedsGameInstall")}
					</l.a3>
				)}
			</De.MS>
			<ke.LP appid={appid} />
		</ne.Jr>
	);
});
function Ct() {
	const e = W6();
	const t = h.v3.BControllerConfigCloudConflict;
	const r = !h.v3.BControllerConfigCloudSyncPending;
	const [i, setI] = n.useState(false);
	const o = R7();
	const m = o?.ownerWindow || window;
	const u = yq();
	n.useEffect(() => {
		if (t && !i) {
			setI(true);
			TE(
				{
					bOnAppLaunch: true,
					appid: y.rm,
					onCancel: u,
					keepLocal: () => h.v3.ResolveControllerConfig(true),
					keepRemote: () => {
						h.v3.ResolveControllerConfig(false);
						u();
					},
					onOK: u,
				},
				m,
			);
		}
	}, [u, e, r, t, i, m]);
	return (
		<c.Z className={A.ControllerConfiguratorBackgroundContainer}>
			<div className={A.ControllerConfiguratorMain}>
				<l.nB>
					<pe.t size="medium" position="center" />
				</l.nB>
			</div>
		</c.Z>
	);
}
export const yE = PA(() => {
	const e = $2().BRouteMatch({
		path: Me.BV.GamepadUI.ControllerConfigurator.MousePosition(),
	});
	Bx(e ? Ee.I5.Overlay : Ee.I5.Opaque, "ControllerConfigurator");
	const t = oH();
	const r = R_1() ?? h.v3.EditingConfigurationAppId;
	const [i, setI] = n.useState(false);
	const o =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	const l = st_1(r, o);
	const c = oe.tw.GetAppOverviewByAppID(r)?.display_name;
	const m = c
		? Localize("#ControllerConfigurator_Header_TitleWithApp", c)
		: Localize("#ControllerConfigurator_Header_Title");
	Wh(m, "ControllerConfigurator");
	ez(true, "ControllerConfigurator");
	const u = R7();
	const A = u?.ownerWindow || window;
	const p = W6();
	n.useEffect(() => h.v3.InitHistory(p), [p]);
	n.useEffect(() => {
		h.v3.SyncDownControllerConfigs();
		const e = () => {
			h.v3.UploadControllerConfigs();
			if (t.mode == Oe._5.ControllerConfigurator) {
				SteamClient.Overlay.DestroyGamePadUIDesktopConfiguratorWindow();
				A?.close();
			}
		};
		return () => {
			h.v3.SaveEditingConfiguration(r, e);
		};
	}, [t, r, A]);
	n.useEffect(() => {
		const e = () => {
			if (i) {
				h.v3.SaveEditingConfiguration(r);
			}
		};
		A?.addEventListener("blur", e);
		return () => {
			A?.removeEventListener("blur", e);
		};
	}, [A, i, r]);
	const g = h.v3.BControllerConfigCloudConflict;
	const C = !h.v3.BControllerConfigCloudSyncPending;
	n.useEffect(() => {
		let e = false;
		if (!e && !g && !!C) {
			setI(true);
		}
		return () => {
			e = true;
		};
	}, [g, C]);
	return (
		<a.dO>
			<Me.Jh path={Me.BV.GamepadUI.ControllerConfigurator.Root()} exact>
				{i ? <Ht appid={r} controllerIndex={o} /> : <Ct />}
			</Me.Jh>
			<Me.Jh path={Me.BV.GamepadUI.ControllerConfigurator.Main()}>
				{i ? <Ht appid={r} controllerIndex={o} /> : <Ct />}
			</Me.Jh>
			<Me.Jh path={Me.BV.GamepadUI.ControllerConfigurator.Summary()}>
				<P.c appid={r} controllerIndex={o} />
			</Me.Jh>
			<Me.Jh path={Me.BV.GamepadUI.ControllerConfigurator.SharedLayout()}>
				<P.c appid={r} controllerIndex={o} bSharedLayout />
			</Me.Jh>
			<Me.Jh path={Me.BV.GamepadUI.ControllerConfigurator.ChooseBinding()}>
				<L.I appid={r} />
			</Me.Jh>
			<Me.Jh path={Me.BV.GamepadUI.ControllerConfigurator.MousePosition()}>
				<J appid={r} />
			</Me.Jh>
			<Me.Jh
				path={Me.BV.GamepadUI.ControllerConfigurator.ChooseConfiguration.Community()}
			>
				<Be_1
					appid={r}
					controllerIndex={o}
					currentSelectedConfig={l}
					strDefaultTab="Community"
				/>
			</Me.Jh>
			<Me.Jh
				path={Me.BV.GamepadUI.ControllerConfigurator.ChooseConfiguration.Root()}
			>
				<Be_1 appid={r} controllerIndex={o} currentSelectedConfig={l} />
			</Me.Jh>
			<Me.Jh
				path={Me.BV.GamepadUI.ControllerConfigurator.ModeSettings()}
				exact={false}
			>
				<G.g8 appid={r} />
			</Me.Jh>
			<Me.Jh>
				<Ft appid={r} controllerIndex={o} />
			</Me.Jh>
		</a.dO>
	);
});
const Ft = PA((e) => {
	const { appid, controllerIndex } = e;
	const i = W6();
	const s = zy();
	const o =
		B6(s.pathname, Me.BV.GamepadUI.ControllerConfigurator.ActionSets()) != null;
	const c =
		B6(s.pathname, Me.BV.GamepadUI.ControllerConfigurator.VirtualMenus()) !=
		null;
	const u = n.useCallback(
		(e) =>
			(!o && !!N_1(e)) ||
			(e.detail.button == m.pR.SELECT &&
				(h.v3.Navigate(
					i,
					Me.BV.GamepadUI.ControllerConfigurator.Summary(appid),
				),
				true)),
		[appid, i, o],
	);
	const p = le.Fd.Get().GetController(controllerIndex)?.eControllerType;
	const C = h.v3.EditingConfiguration;
	const _ = P4(C);
	const f = n.useMemo(
		() => [
			{
				title: Localize("#ControllerConfigurator_Section_Buttons"),
				icon: (
					<Be.UT
						className={A.SectionGlyph}
						controllerType={4}
						controllerSource={4}
						controllerModeInput={12}
					/>
				),
				route: Me.BV.GamepadUI.ControllerConfigurator.Buttons(appid),
				content: <Xe appid={appid} />,
			},
			{
				title: Localize("#ControllerConfigurator_Section_DPad"),
				icon: (
					<Be.UT
						className={A.SectionGlyph}
						controllerType={4}
						controllerSource={13}
						controllerModeInput={0}
					/>
				),
				route: Me.BV.GamepadUI.ControllerConfigurator.DPad(appid),
				content: <Ue appid={appid} />,
				visible: sn(p, 13),
			},
			{
				title: Localize("#ControllerConfigurator_Section_Triggers"),
				icon: (
					<Be.UT
						className={A.SectionGlyph}
						controllerType={4}
						controllerSource={6}
						controllerModeInput={13}
					/>
				),
				route: Me.BV.GamepadUI.ControllerConfigurator.Triggers(appid),
				content: <Ve appid={appid} />,
				visible: sn(p, 7),
			},
			{
				title: Localize("#ControllerConfigurator_Section_Sticks"),
				icon: (
					<Be.UT
						className={A.SectionGlyph}
						controllerType={4}
						controllerSource={3}
						controllerModeInput={0}
					/>
				),
				route: Me.BV.GamepadUI.ControllerConfigurator.Sticks(appid),
				content: <We appid={appid} />,
			},
			{
				title: Localize("#ControllerConfigurator_Section_Touchpads"),
				icon: (
					<Be.UT
						className={A.SectionGlyph}
						controllerType={4}
						controllerSource={1}
						controllerModeInput={0}
					/>
				),
				route: Me.BV.GamepadUI.ControllerConfigurator.Touchpads(appid),
				content: <He appid={appid} />,
				visible: sn(p, 2),
			},
			{
				title: Localize("#ControllerConfigurator_Section_Gyros"),
				icon: (
					<Be.UT
						className={A.SectionGlyph}
						controllerType={4}
						controllerSource={10}
						controllerModeInput={0}
					/>
				),
				route: Me.BV.GamepadUI.ControllerConfigurator.Gyroscopes(appid),
				content: <Je appid={appid} />,
				visible: sn(p, 10),
			},
			l.Vj,
			l.I0,
			{
				title: Localize("#ControllerConfigurator_Section_VirtualMenus"),
				icon: <g.TouchMenu />,
				route: Me.BV.GamepadUI.ControllerConfigurator.VirtualMenus(appid),
				content: <O.TX appid={appid} />,
				visible: true,
			},
			{
				title: Localize("#ControllerConfigurator_Section_ActionSets"),
				hideTitle: true,
				icon: <g.Copy />,
				route: Me.BV.GamepadUI.ControllerConfigurator.ActionSets(appid),
				content: <E appid={appid} />,
			},
		],
		[appid, p],
	);
	return (
		<ne.dj
			onButtonDown={u}
			actionDescriptionMap={{
				[m.pR.SELECT]: Localize(
					"#ControllerConfigurator_ActionButtonLabel_Preview",
				),
			}}
			onMouseDown={(e) => e.preventDefault()}
		>
			<Te.q
				bNoHeaderPadding={_}
				title={null}
				bAutoFocusPageContent
				topControls={
					<we.eu
						className={A.ControllerConfiguratorActionSetSelector}
						disabled={o || c}
					/>
				}
				pages={f}
			/>
			<ke.LP appid={appid} />
		</ne.dj>
	);
});
