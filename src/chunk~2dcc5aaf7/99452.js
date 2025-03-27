import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { PA } from "./41230.js";
import i from "./63696.js";
import a, { VI } from "./34792.js";
import s, { W6 } from "./49519.js";
import o, { lX } from "./31084.js";
import l from "./69164.js";
import c from "./88750.js";
import m, { Ld } from "./64608.js";
import u from "./35488.js";
import d from "./10606.js";
import A, { pg } from "./13869.js";
import g from "./45309.js";
import h from "./46422.js";
import C from "./83314.js";
import _ from "./84914.js";
import f, { GW, JS, X, QQ } from "./62486.js";
import { Kw, rw, kF, Xt } from "./52192.js";
import y from "./85360.js";
import S from "./94899.js";
import w from "./75706.js";
import v, { A as A_1 } from "./90765.js";
import I from "./4690.js";
import E from "./22091.js";
import M, { qb } from "./46396.js";
import T from "./75140.js";
import k, { R7 } from "./11131.js";
const B = w;
function D(e) {
	const {
		baseActionSet,
		layerActionSet,
		eControllerSource,
		group,
		appid,
		actionset_section,
	} = e;
	const _ = W6();
	if (group == null) {
		return null;
	}
	const S = Kw(group?.modeid);
	if (!S) {
		return null;
	}
	if (S.mode != 11 && S.mode != 14 && S.mode != 19) {
		return null;
	}
	const w = S.settings.find((e) => e.key == 129)?.int_value;
	if (w == 1) {
		return null;
	}
	const v = f.k$[S.mode].id;
	const I = S.friendlyname ? S.friendlyname : GW(v);
	const E = rw(S.mode);
	const T = {
		action_set_key: baseActionSet?.key,
		action_set_layer_key: layerActionSet?.key,
		source_binding_key: eControllerSource,
		modeid: group?.modeid,
	};
	const k = (e) => {
		const t = {
			action_set_key: T.action_set_key,
			action_set_layer_key: T.action_set_layer_key,
			source_binding_key: T.source_binding_key,
			new_name: e,
			modeid: group?.modeid,
		};
		y.v3.DuplicateControllerSourceMode(appid, t);
		y.v3.SaveEditingConfiguration(appid);
		y.v3.EnsureEditingConfiguration();
	};
	const D = () => {
		const e = {
			action_set_key: T.action_set_key,
			action_set_layer_key: T.action_set_layer_key,
			source_binding_key: T.source_binding_key,
			modeid: group?.modeid,
			change_mode: true,
			new_mode: 20,
		};
		y.v3.SetControllerSourceMode(appid, e);
		y.v3.SaveEditingConfiguration(appid);
		y.v3.EnsureEditingConfiguration();
	};
	const N = (e) => {
		let t = GetOwningWindowForEvent(e);
		pg(
			<d.o0
				strTitle={(0, Localize)(
					"#ControllerConfigurator_VirtualMenu_Confirm_Delete",
					I,
				)}
				strDescription={(0, Localize)(
					"#ControllerConfigurator_VirtualMenu_Confirm_Delete_Desc",
				)}
				bDestructiveWarning
				onOK={D}
				onCancel={null}
			/>,
			t,
			{
				strTitle: (0, Localize)(
					"#AppControllerConfiguration_ConfirmRevertConfig",
				),
			},
		);
	};
	const F = (e) => {
		const t = {
			action_set_key: T.action_set_key,
			action_set_layer_key: T.action_set_layer_key,
			source_binding_key: T.source_binding_key,
			modeid: group?.modeid,
			mode_shift: group?.mode_shift,
			new_name: e,
		};
		y.v3.SetControllerSourceMode(appid, t);
		y.v3.SaveEditingConfiguration(appid);
		y.v3.EnsureEditingConfiguration();
	};
	const G = (e) => {
		const t = (
			<c.tz
				label={(0, Localize)(
					"#ControllerConfigurator_VirtualMenu_ContextMenu_Title",
				)}
			>
				<g.G
					title={(0, Localize)(
						"#ControllerConfigurator_VirtualMenu_ContextMenu_Rename",
					)}
					onResult={F}
				>
					<g.Qj
						title={(0, Localize)(
							"#ControllerConfigurator_ActionSets_RenameVirtualMenuDialog_Title_1",
							I,
						)}
						description=""
						inputOptions={{
							placeholder: (0, Localize)(
								"#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1",
								S.friendlyname,
							),
						}}
					/>
				</g.G>
				<g.G
					title={(0, Localize)(
						"#ControllerConfigurator_VirtualMenu_ContextMenu_Duplicate",
					)}
					onResult={k}
				>
					<g.Qj
						title={(0, Localize)(
							"#ControllerConfigurator_ActionSets_DuplicateVirtualMenuDialog_Title_1",
							I,
						)}
						description=""
						inputOptions={{
							placeholder: (0, Localize)(
								"#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1",
								S.friendlyname,
							),
						}}
					/>
				</g.G>
				<c.kt onSelected={N}>
					{(0, Localize)(
						"#ControllerConfigurator_VirtualMenu_ContextMenu_Delete",
					)}
				</c.kt>
			</c.tz>
		);
		lX(t, e);
	};
	return (
		<m.D0 icon={E} label={I} description={S.description} onContextMenu={G}>
			<l.Z className={B.VirtualMenuListButtons} retainFocus>
				<m.$n
					className={B.VirtualMenuListButton}
					onClick={() => {
						qb(
							appid,
							_,
							baseActionSet,
							layerActionSet,
							group,
							eControllerSource,
						);
					}}
				>
					<u.Edit />
				</m.$n>
				<m.$n className={B.VirtualMenuListButton} onClick={G}>
					<u.Settings />
				</m.$n>
			</l.Z>
		</m.D0>
	);
}
function N(e) {
	const t = f.k$[e].id;
	const r = GW(t);
	let n = JS(t);
	const a = rw(e);
	return (
		<m.aZ
			title={r}
			description={n}
			descriptionVisibility="always"
			icon={a}
			iconVisibility="always"
		/>
	);
}
export const TX = PA((e) => {
	const { appid } = e;
	const r = R7();
	const n =
		y.v3.EditingConfigurationControllerIndex ??
		h.oy.MostRecentlyActiveControllerIndex;
	y.v3.EnsureEditingConfiguration(appid, n);
	let SRef = i.useRef(undefined);
	const u = y.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const C = y.v3.ControllerConfiguratorLayerSetIndex;
	const _ = y.v3.EditingConfiguration?.sets[u];
	const f = _ == null || _.layers[C];
	const S = f ?? _;
	const w = i.useCallback(
		(e, r) => {
			const n = {
				action_set_key: _.key,
				action_set_layer_key: f?.key,
				source_binding_key: 3,
			};
			n.new_mode = r;
			n.new_virtual_menu = true;
			n.new_name = e ?? undefined;
			n.enable_virtual_menu_support = true;
			y.v3.SetControllerSourceMode(appid, n);
			y.v3.SaveEditingConfiguration(appid);
			y.v3.EnsureEditingConfiguration();
		},
		[appid, _?.key, f?.key],
	);
	const B = i.useCallback(
		(e) => {
			const t = (
				<c.tz
					label={(0, Localize)("#ControllerConfigurator_VirtualMenu_CreateNew")}
				>
					<c.kt onSelected={() => w(e, 14)}>{N(14)}</c.kt>
					<c.kt onSelected={() => w(e, 11)}>{N(11)}</c.kt>
					<c.kt onSelected={() => w(e, 19)}>{N(19)}</c.kt>
				</c.tz>
			);
			return lX(t, SRef.current);
		},
		[w, SRef],
	);
	const v = i.useCallback(
		(e) => {
			let t = GetOwningWindowForEvent(e);
			const r = (
				<g.Qj
					title={(0, Localize)(
						"#ControllerConfigurator_CreateVirtualMenuDialog_Title_1",
					)}
					description={(0, Localize)(
						"#ControllerConfigurator_CreateVirtualMenuDialog_Description_1",
					)}
					isValid={(e) => e.length != 0}
					onResult={(e) => {
						B(e);
					}}
					onCancel={() => {}}
				/>
			);
			return pg(r, t, {});
		},
		[B],
	);
	const [I] = VI("steam_input_configurator_error_msg_enable");
	if (I && y.v3.EditingConfiguration?.error_msg?.length > 0) {
		pg(
			<d.o0
				strTitle={(0, Localize)("#ControllerConfigurator_ErrorMsg_Title")}
				strDescription={y.v3.EditingConfiguration?.error_msg}
				bAlertDialog
			/>,
			r?.ownerWindow ?? window,
		);
	}
	const E = y.v3.EditingConfiguration?.modes;
	let M = [];
	E?.forEach((e) => {
		const t = e.settings.find((e) => e.key == 129)?.int_value;
		const r = kF(e.mode);
		if (t != 1 && r) {
			M.push({
				key: e.source,
				active_group: {
					mode: e.mode,
					inputs: e.inputs,
					settings: e.settings,
					modeid: e.modeid,
					mode_shift: e.mode_shift,
				},
			});
		}
	});
	let T = M.filter(
		(e, t) =>
			t === M.findIndex((t) => t.active_group.modeid === e.active_group.modeid),
	);
	if (S == null) {
		return null;
	} else {
		return (
			<l.Z retainFocus ref={SRef}>
				{T?.map((e, r) => (
					<D
						key={`${e.key}_${r}`}
						baseActionSet={_}
						layerActionSet={f}
						eControllerSource={e.key}
						group={e?.active_group}
						appid={appid}
						actionset_section={undefined}
					/>
				))}
				<m.xh onClick={v} bottomSeparator="none" highlightOnFocus={false}>
					{(0, Localize)("#ControllerConfigurator_VirtualMenu_CreateNew")}
				</m.xh>
			</l.Z>
		);
	}
});
export const DL = (e, t) => {
	let r = 30;
	const n = Kw(e);
	let i = n.mode == 14 ? 49 : 44;
	let a = i - 30;
	let s = 0;
	const o = n.inputs.find(
		(e) =>
			e.key >= r &&
			e.key <= i &&
			(e.activators?.length && s++,
			e.activators?.length == 0 || e.activators[0]?.bindings?.length == 0),
	);
	r = o?.key ?? (s <= a ? r : undefined);
	if (t) {
		const e = Kw(t);
		const n = e?.inputs.find(
			(e) =>
				e.key >= r &&
				e.key <= i &&
				(e.activators?.length == 0 || e.activators[0]?.bindings?.length == 0),
		);
		r = n?.key ?? r;
	}
	if (!(r > i)) {
		return r;
	}
};
export const WJ = PA((e) => {
	const { appid, modeid, econtrollersource, actionset_section } = e;
	const [o] = VI("steam_input_configurator_error_msg_enable");
	const c = Kw(modeid);
	if (!c) {
		return null;
	}
	if (o && y.v3.EditingConfiguration?.error_msg?.length > 0) {
		pg(
			<d.o0
				strTitle={(0, Localize)("#ControllerConfigurator_ErrorMsg_Title")}
				strDescription={y.v3.EditingConfiguration?.error_msg}
				bAlertDialog
			/>,
			window,
		);
	}
	const m = y.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const u = y.v3.ControllerConfiguratorLayerSetIndex;
	const g = y.v3.EditingConfiguration?.sets[m];
	const h = g == null || g.layers[u];
	const f = h ?? g;
	const _N = _.N;
	if (f == null) {
		return null;
	} else {
		return (
			<div>
				<l.Z onButtonDown={_N} retainFocus>
					<C.$W
						baseActionSet={g}
						layerActionSet={h}
						eControllerSource={econtrollersource}
						group={{
							mode: c.mode,
							inputs: c.inputs,
							settings: c.settings,
							modeid: c.modeid,
						}}
						appid={appid}
						actionset_section={actionset_section}
						virtualmenu_section
						modeShift={c?.mode_shift}
					/>
				</l.Z>
			</div>
		);
	}
});
export const Jc = PA((e) => {
	const { appid, mode } = e;
	const n = mode?.virtual_menu_info
		? T.gw.FromPreview(mode.virtual_menu_info, appid)
		: null;
	const a = y.v3.VirtualMenuPreviewKey;
	i.useEffect(() => n?.SetSelectedPreviewKey(a), [n, a]);
	if (n) {
		switch (mode.virtual_menu_info?.menu_style) {
			case 0:
			case 2: {
				return <S.F9 virtualMenu={n} />;
			}
			case 1: {
				return <S.yq virtualMenu={n} />;
			}
		}
	}
	return null;
});
export const L3 = PA((e) => {
	const {
		baseActionSet,
		layerActionSet,
		eControllerSource,
		group,
		simpleView,
		appid,
	} = e;
	W6();
	const u =
		y.v3.EditingConfigurationControllerIndex ??
		h.oy.MostRecentlyActiveControllerIndex;
	const d = E.Fd.Get().GetController(u)?.eControllerType;
	let A = [];
	A.push({
		eMode: 14,
		modeid: group.modeid,
	});
	A.push({
		eMode: 11,
		modeid: group.modeid,
	});
	A.push({
		eMode: 19,
		modeid: group.modeid,
	});
	const p = group;
	const g = p ? f.jg[p.mode] : undefined;
	if (p) {
		X(p.settings, g, eControllerSource, d);
	}
	const _ =
		A &&
		A.map((e) =>
			((e, t) => {
				const e_gameAction = e.gameAction;
				const n = f.k$[e.eMode].id;
				const a = e.strDisplay
					? e.strDisplay
					: e_gameAction != null && e_gameAction.action.display_name
						? e_gameAction.action.display_name
						: GW(n) || Xt(n);
				let s = JS(n);
				const o = rw(e.eMode) ?? <svg className={B.ModeSelectDropDownIcon} />;
				const l = (
					<m.aZ
						title={a}
						description={s}
						descriptionVisibility="when-expanded"
						icon={o}
						iconVisibility="when-expanded"
						strTitleClassNames={t}
					/>
				);
				const B_HideOnMinified = B.HideOnMinified;
				return {
					label: l,
					data: e,
					strOptionClass: B_HideOnMinified,
				};
			})(e, ""),
		);
	const S = Ld(_).find((e) => QQ(group, e.data))?.data;
	return (
		<l.Z
			className={A_1(B.BindingButtons)}
			navEntryPreferPosition={I.iU.PREFERRED_CHILD}
		>
			<m.ZU
				rgOptions={_}
				onChange={(e) => {
					const i = {
						action_set_key: baseActionSet.key,
						action_set_layer_key: layerActionSet?.key,
						source_binding_key: eControllerSource,
						change_mode: true,
						mode_shift: p?.mode_shift,
					};
					i.new_mode = e.data.eMode;
					i.modeid = e.data.modeid;
					const a = e.data.gameAction;
					if (a != null) {
						const e = a.layerSet ?? a.baseSet;
						i.new_game_action = {
							action_set_key: e.key,
							action_key: a.action.key,
						};
					}
					C.tG.Debug("onChangeModeOption", e.data, i);
					y.v3.SetControllerSourceMode(appid, i);
					y.v3.SaveEditingConfiguration(appid);
					y.v3.EnsureEditingConfiguration();
				}}
				selectedOption={S}
				menuLabel={e.menuLabel}
			/>
		</l.Z>
	);
});
