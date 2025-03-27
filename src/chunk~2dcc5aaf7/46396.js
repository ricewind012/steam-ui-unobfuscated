import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { g as g_1, W6, zy, B6 } from "./49519.js";
import a, { PA } from "./41230.js";
import s from "./78567.js";
import l, { ix, ND, GW } from "./62486.js";
import c, { Ij } from "./85360.js";
import m, { Kw, kF, Xt } from "./52192.js";
import u from "./69164.js";
import A, { as } from "./22091.js";
import p from "./18057.js";
import g from "./64608.js";
import h from "./19037.js";
import C from "./15917.js";
import _, { u6 } from "./43152.js";
import f from "./83314.js";
import b from "./99452.js";
import y from "./50350.js";
import S from "./42318.js";
import w, { A as A_1 } from "./90765.js";
import B from "./10975.js";
import v from "./22047.js";
import I from "./4690.js";
import E from "./10606.js";
import M, { uD } from "./52451.js";
import T from "./70078.js";
import k, { ej, E0, UP } from "./78787.js";
import F from "./94790.js";
import G from "./35376.js";
const o = s;
const R = T;
function D(e) {
	const {
		appid,
		baseActionSet,
		layerActionSet,
		eControllerSource,
		modeId,
		mode_shift,
		buttonBehaviourSetting,
		buttonMaskSetting,
	} = e;
	const p = ix(buttonBehaviourSetting.id);
	const [h, C, _] = uD();
	const f = BigInt(buttonMaskSetting.long_value) != k.Dk;
	let b;
	if (buttonBehaviourSetting) {
		switch (buttonBehaviourSetting.int_value) {
			case 0: {
				b = ix("GyroConfigurationModeSetting_Off_Description");
				break;
			}
			case 1: {
				b = ix("GyroConfigurationModeSetting_On_Description");
				break;
			}
			case 2: {
				b = ix("GyroConfigurationModeSetting_Toggle_Description");
			}
		}
		b += ` ${Localize(
			"#ControllerBinding_GyroConfigurationModeSetting_NoteCarefully",
		)}`;
	} else {
		b = ix(`${buttonMaskSetting.id}_Description`);
	}
	n.useEffect(
		() => () => {
			if (h) {
				c.v3.SaveEditingConfiguration(appid);
			}
		},
		[appid, h],
	);
	const y = n.useCallback(
		(e) => {
			const n = {
				action_set_key: baseActionSet?.key,
				action_set_layer_key: layerActionSet?.key,
				source_binding_key: eControllerSource,
				modeid: modeId,
				mode_shift: mode_shift,
				new_setting: {
					key: 157,
					long_value: e.toString(),
				},
			};
			c.v3.SetControllerSourceMode(appid, n);
		},
		[
			appid,
			baseActionSet,
			layerActionSet,
			eControllerSource,
			modeId,
			mode_shift,
		],
	);
	const S = c.v3.EditingConfigurationControllerIndex;
	const B = as(S);
	if (!B) {
		return null;
	}
	const v = ej(B);
	return (
		<>
			<g.xh
				key={buttonBehaviourSetting.id}
				label={Localize(p)}
				onClick={() => {
					C();
				}}
				layout={buttonBehaviourSetting.layout}
				bottomSeparator="none"
				childrenContainerWidth="fixed"
				fieldClassName={A_1(R.SettingField, R.SettingMaxWidth)}
			>
				<k.ZZ
					nButtonMaskValue={BigInt(buttonMaskSetting?.long_value ?? 0)}
					nAvailableButtonsMask={v}
					controllerDetailItem={B}
				/>
			</g.xh>
			<E.EN key={buttonBehaviourSetting.id + 1} active={h}>
				<E.eV bAllowFullSize className={A_1(R.ButtonPickerDialog)} onCancel={_}>
					<g.Y9>{p || <>{"\xA0"}</>}</g.Y9>
					<NO
						key={69}
						baseActionSet={c.v3.BaseActionSet}
						layerActionSet={c.v3.LayerActionSet}
						eControllerSource={10}
						mapKey={69}
						localizationOverride={ix("GyroEnableButtonBehavior")}
						disabled={!f}
						showDesc={false}
						showOptionsDescs
					/>
					<g.f3 onCancelButton={_}>
						<k.lP
							eControllerSource={eControllerSource}
							controllerDetailItem={B}
							nSelectedButtonMaskValue={BigInt(
								buttonMaskSetting?.long_value ?? 0,
							)}
							nAvailableButtonsMask={v}
							onSetButtonMaskSetting={y}
						/>
					</g.f3>
					<div className={A_1(R.DialogBodyText, R.Center)}>{b}</div>
				</E.eV>
			</E.EN>
		</>
	);
}
function N(e) {
	const {
		appid,
		baseActionSet,
		layerActionSet,
		eControllerSource,
		modeId,
		mode_shift,
		buttonMaskSetting,
	} = e;
	const u = ix(buttonMaskSetting.id);
	const [p, h, C] = uD();
	const _ = ix(`${buttonMaskSetting.id}_Description`);
	n.useEffect(
		() => () => {
			if (p) {
				c.v3.SaveEditingConfiguration(appid);
			}
		},
		[appid, p],
	);
	const f = n.useCallback(
		(e) => {
			const n = {
				action_set_key: baseActionSet?.key,
				action_set_layer_key: layerActionSet?.key,
				source_binding_key: eControllerSource,
				modeid: modeId,
				mode_shift: mode_shift,
				new_setting: {
					key: 157,
					long_value: e.toString(),
				},
			};
			c.v3.SetControllerSourceMode(appid, n);
		},
		[
			appid,
			baseActionSet,
			layerActionSet,
			eControllerSource,
			modeId,
			mode_shift,
		],
	);
	const b = c.v3.EditingConfigurationControllerIndex;
	const y = as(b);
	if (!y) {
		return null;
	}
	const S = ej(y);
	return (
		<>
			<g.xh
				key={buttonMaskSetting.id}
				label={Localize(u)}
				onClick={() => {
					h();
				}}
				layout={buttonMaskSetting.layout}
				bottomSeparator="none"
				childrenContainerWidth="fixed"
				fieldClassName={A_1(R.SettingField, R.SettingMaxWidth)}
			>
				<k.ZZ
					nButtonMaskValue={BigInt(buttonMaskSetting?.long_value ?? 0)}
					nAvailableButtonsMask={S}
					controllerDetailItem={y}
				/>
			</g.xh>
			<E.EN key={buttonMaskSetting.id + 1} active={p}>
				<E.eV bAllowFullSize className={A_1(R.ButtonPickerDialog)} onCancel={C}>
					<g.Y9>{u || <>{"\xA0"}</>}</g.Y9>
					<NO
						key={69}
						baseActionSet={c.v3.BaseActionSet}
						layerActionSet={c.v3.LayerActionSet}
						eControllerSource={10}
						mapKey={69}
						localizationOverride={ix("GyroEnableButtonBehavior")}
						disabled={false}
						showDesc={false}
						showOptionsDescs
					/>
					<g.f3 onCancelButton={C}>
						<k.lP
							eControllerSource={eControllerSource}
							controllerDetailItem={y}
							nSelectedButtonMaskValue={BigInt(
								buttonMaskSetting?.long_value ?? 0,
							)}
							nAvailableButtonsMask={S}
							onSetButtonMaskSetting={f}
						/>
					</g.f3>
					<div className={A_1(R.DialogBodyText, R.Center)}>{_}</div>
				</E.eV>
			</E.EN>
		</>
	);
}
const O = new Map([
	[0, k.fK.k_eGamepadButtonBitMask_RightTriggerFullPull],
	[1, k.fK.k_eGamepadButtonBitMask_LeftTriggerFullPull],
	[45, k.fK.k_eGamepadButtonBitMask_LeftTriggerSoftPull],
	[46, k.fK.k_eGamepadButtonBitMask_RightTriggerSoftPull],
	[16, k.fK.k_eGamepadButtonBitMask_ButtonDPadUp],
	[17, k.fK.k_eGamepadButtonBitMask_ButtonDPadRight],
	[18, k.fK.k_eGamepadButtonBitMask_ButtonDPadLeft],
	[19, k.fK.k_eGamepadButtonBitMask_ButtonDPadDown],
	[2, k.fK.k_eGamepadButtonBitMask_ButtonNorth],
	[3, k.fK.k_eGamepadButtonBitMask_ButtonEast],
	[4, k.fK.k_eGamepadButtonBitMask_ButtonWest],
	[5, k.fK.k_eGamepadButtonBitMask_ButtonSouth],
	[6, k.fK.k_eGamepadButtonBitMask_ButtonRightBumper],
	[7, k.fK.k_eGamepadButtonBitMask_ButtonLeftBumper],
	[8, k.fK.k_eGamepadButtonBitMask_ButtonLeftStick],
	[63, k.fK.k_eGamepadButtonBitMask_ButtonRightStick],
	[9, k.fK.k_eGamepadButtonBitMask_ButtonStartOrOptions],
	[11, k.fK.k_eGamepadButtonBitMask_ButtonBackOrView],
	[10, k.fK.k_eGamepadButtonBitMask_ButtonGuideOrSteam],
	[20, k.fK.k_eGamepadButtonBitMask_ButtonBackGripLeftLower],
	[21, k.fK.k_eGamepadButtonBitMask_ButtonBackGripRightLower],
	[64, k.fK.k_eGamepadButtonBitMask_CapSenseLeftTouchPad],
	[65, k.fK.k_eGamepadButtonBitMask_CapSenseRightTouchPad],
	[42, k.fK.k_eGamepadButtonBitMask_ButtonLeftPadClicked],
	[43, k.fK.k_eGamepadButtonBitMask_ButtonRightPadClicked],
	[47, k.fK.k_eGamepadButtonBitMask_ButtonBackGripLeftUpper],
	[48, k.fK.k_eGamepadButtonBitMask_ButtonBackGripRightUpper],
	[50, k.fK.k_eGamepadButtonBitMask_ButtonAncillary1],
	[61, k.fK.k_eGamepadButtonBitMask_CapSenseLeftAux],
	[62, k.fK.k_eGamepadButtonBitMask_CapSenseRightAux],
]);
function P(e) {
	const {
		appid,
		baseActionSet,
		layerActionSet,
		controllerDetails,
		eControllerSource,
		modeId,
	} = e;
	const [m, u, A] = uD();
	let p = [];
	c.v3.EditingConfiguration?.modes?.find((e) => {
		if (e?.mode_shift_buttons?.length > 0) {
			const t = e.reference_modeid ?? e.modeid;
			if (modeId == t) {
				p = e.mode_shift_buttons;
				return true;
			}
		}
		return false;
	});
	const h = p.reduce((e, t) => {
		const r = O.get(t);
		return e | E0(r);
	}, BigInt(0));
	n.useEffect(
		() => () => {
			if (m) {
				c.v3.SaveEditingConfiguration(appid);
			}
		},
		[appid, m],
	);
	const C = n.useCallback(
		(e) => {
			let n = [];
			const a = Array.from(O.entries());
			for (let t = 0; t < a.length; t++) {
				const [r, i] = a[t];
				if (UP(e, i)) {
					n.push(r);
				}
			}
			let o = {
				action_set_key: baseActionSet.key,
				action_set_layer_key: layerActionSet?.key,
				source: eControllerSource,
				modeid: modeId,
				mode_shift_buttons_digital_io: n,
			};
			c.v3.SetControllerModeShiftBinding(appid, o);
		},
		[appid, baseActionSet, layerActionSet, eControllerSource, modeId],
	);
	const _ = ej(controllerDetails);
	const f = (() => {
		let e = BigInt(0);
		O.forEach((t, r) => {
			e |= E0(t);
		});
		return e;
	})();
	const b = _ & f;
	return (
		<>
			<g.xh
				key="MultButtonContents"
				label={Localize("#ControllerBinding_ModeShiftDropDown")}
				onClick={() => {
					u();
				}}
				layout="inline"
				bottomSeparator="none"
				childrenContainerWidth="fixed"
				fieldClassName={A_1(o.SettingField, o.SettingMaxWidth)}
			>
				<k.ZZ
					nButtonMaskValue={h}
					nAvailableButtonsMask={b}
					controllerDetailItem={controllerDetails}
				/>
			</g.xh>
			<F.E key="MultButtonContentsPopupModal" active={m}>
				<G.e bAllowFullSize className={A_1(o.ButtonPickerDialog)} onCancel={A}>
					<g.Y9>
						{Localize("#ControllerBinding_ModeShiftDropDown") || <>{"\xA0"}</>}
					</g.Y9>
					<g.f3 onCancelButton={A}>
						<k.lP
							eControllerSource={eControllerSource}
							controllerDetailItem={controllerDetails}
							nSelectedButtonMaskValue={h}
							nAvailableButtonsMask={b}
							onSetButtonMaskSetting={C}
						/>
					</g.f3>
				</G.e>
			</F.E>
		</>
	);
}
export const g8 = PA((e) => {
	const { appid } = e;
	const r = c.v3.EditingConfigurationAppId;
	const {
		modeKey,
		strBaseActionSetKey,
		strLayerActionSetKey,
		eControllerSource,
		modeId,
		index,
		modeshift,
	} = ((e) => {
		const t = g_1();
		return {
			modeKey: parseInt(t?.modeKey),
			strBaseActionSetKey:
				t?.strBaseActionSetKey != "0" ? t?.strBaseActionSetKey : undefined,
			strLayerActionSetKey: t?.strLayerActionSetKey,
			eControllerSource: parseInt(t?.eControllerSource),
			modeId: parseInt(t?.modeId),
			index: parseInt(t?.index),
			modeshift: t?.modeshift == "true",
		};
	})();
	const B = A.Fd.Get().GetController(c.v3.EditingConfigurationControllerIndex);
	const { eControllerType } = B;
	const E = c.v3.EditingConfiguration?.sets?.find(
		(e) => e.key == strBaseActionSetKey,
	);
	const M = E?.layers.find((e) => e.key == strLayerActionSetKey);
	let T = Kw(modeId);
	T ||=
		M?.source_bindings?.find((e) => e.key == eControllerSource)?.active_group ??
		E?.source_bindings?.find((e) => e.key == eControllerSource)?.active_group;
	const R = c.v3.EditIdx;
	const k = W6();
	n.useEffect(() => {
		if (eControllerType === undefined) {
			k.replace(p.BV.GamepadUI.ControllerConfigurator.Main(appid));
		}
	}, [eControllerType, appid, k]);
	n.useEffect(() => {
		if (r == -1) {
			c.v3.EnsureEditingConfiguration(appid);
		}
	}, [r, appid]);
	n.useEffect(() => {
		const e = T ? T.mode : undefined;
		const t = T ? T.settings : undefined;
		const r = e ? l.jg[e] : undefined;
		c.v3.SetEditedGroupSettings(
			strBaseActionSetKey,
			strLayerActionSetKey,
			t,
			r,
			eControllerSource,
			eControllerType,
		);
	}, [
		R,
		T,
		modeKey,
		strBaseActionSetKey,
		strLayerActionSetKey,
		eControllerSource,
		eControllerType,
		modeId,
		r,
	]);
	const F = Ij({
		baseActionSetKey: strBaseActionSetKey,
		layerActionSetKey: strLayerActionSetKey ?? "",
		eControllerSource: eControllerSource,
	});
	const G = c.v3.CurrentEditedGroupSettings.get(F);
	const O = n.useMemo(() => {
		const e = c.v3.EditingConfiguration?.sets?.find(
			(e) => e.key == strBaseActionSetKey,
		);
		const r = e?.layers?.find((e) => e.key == strLayerActionSetKey);
		const i = (e) => {
			const t = G?.find((t) => t.key == e);
			if (t) {
				return t.sortOrder;
			} else {
				return 9999;
			}
		};
		let o = {
			Commands: [],
		};
		o.General = [
			modeshift ? (
				<P
					key="ModeShiftButtonSelector"
					appid={appid}
					baseActionSet={e}
					layerActionSet={r}
					modeId={modeId}
					controllerDetails={B}
					eControllerSource={eControllerSource}
				/>
			) : null,
		];
		G?.slice()
			?.sort((e, t) => i(e.key) - i(t.key))
			?.filter((e) => !e.hiddenByViz)
			?.forEach((i, a) => {
				let s;
				if (i.visualizerType) {
					if (i.visualizerType == "GyroButtonPicker") {
						const i = G.find((e) => e.key == 69);
						const o = G.find((e) => e.key == 157);
						s = (
							<D
								key={a}
								appid={appid}
								baseActionSet={e}
								layerActionSet={r}
								modeId={modeId}
								mode_shift={modeshift}
								eControllerSource={eControllerSource}
								buttonBehaviourSetting={i}
								buttonMaskSetting={o}
							/>
						);
					} else if (i.visualizerType == "TouchMenuActivatorButtonPicker") {
						const i = G.find((e) => e.key == 157);
						s = (
							<N
								key={a}
								appid={appid}
								baseActionSet={e}
								layerActionSet={r}
								modeId={modeId}
								mode_shift={modeshift}
								eControllerSource={eControllerSource}
								buttonMaskSetting={i}
							/>
						);
					} else if (i.visualizerType == "Deadzones_Default") {
						s = <C.NQ key={a} appid={appid} mode="default" />;
					} else if (i.visualizerType == "Deadzones_Custom") {
						s = <C.NQ key={a} appid={appid} mode="custom" />;
					} else {
						console.error(
							`Configurator Mode Setting specifying an invalid visualizerType: ${i.visualizerType}`,
						);
					}
				} else {
					const t = !i.sectionContainsViz && !i.hiddenByViz;
					s = (
						<NO
							key={a}
							baseActionSet={e}
							layerActionSet={r}
							eControllerSource={eControllerSource}
							mapKey={i.key}
							showDesc={i.showDesc}
							showOptionsDescs={i.showOptionsDescs}
							bottomSeparator={t ? "standard" : "none"}
							modeid={modeId}
							layout={i.layout}
						/>
					);
				}
				const l = i.sectionId ? i.sectionId : "General";
				o[l] ||= [];
				o[l].push(s);
			});
		if (l.G9.includes(c.v3.CurrentEditedGroup?.mode)) {
			o.Commands.push(
				<b.WJ
					key={modeId}
					appid={appid}
					modeid={modeId}
					econtrollersource={eControllerSource}
				/>,
			);
		}
		for (const e in o) {
			if (o[e].length == 0) {
				delete o[e];
			}
		}
		let m = [];
		Object.keys(o).forEach((e, r) => {
			let i = <div key={r}>{o[e]}</div>;
			m.push({
				title: Localize(`#ControllerConfigurator_Setting_Section_${e}`),
				route: p.BV.GamepadUI.ControllerConfigurator.ModeSettings(
					appid,
					modeKey,
					strBaseActionSetKey,
					strLayerActionSetKey,
					eControllerSource,
					modeId,
					r,
					modeshift,
				),
				content: i,
				hideTitle: false,
				padding: "none",
			});
		});
		return m;
	}, [
		appid,
		modeKey,
		B,
		eControllerSource,
		G,
		strBaseActionSetKey,
		strLayerActionSetKey,
		modeId,
		modeshift,
	]);
	const L = u6();
	const x = kF(T?.mode) && !L;
	let U;
	if (kF(T?.mode)) {
		const e = O.map((e) => ({
			title: e.title,
			route: e.route,
			link: e.route,
			content: e.content,
			hideTitle: true,
		}));
		U = (
			<v.q
				title="Unused"
				bNoHeaderPadding
				topControls={<Z modeKey={modeKey} modeId={modeId} />}
				pages={e}
				disablePageListScrolling
				bottomControls={
					x && (
						<div className={o.VirtualMenuPreviewContainer}>
							<b.Jc appid={appid} mode={Kw(modeId)} />
						</div>
					)
				}
			/>
		);
	} else {
		U = (
			<J
				topControls={<Z modeKey={modeKey} modeId={modeId} />}
				pages={O}
				bottomControls={
					x && (
						<div className={o.VirtualMenuPreviewContainer}>
							<b.Jc appid={appid} mode={Kw(modeId)} />
						</div>
					)
				}
			/>
		);
	}
	return (
		<y.dj onMouseDown={(e) => e.preventDefault()}>
			{U}
			<h.LP appid={appid} />
		</y.dj>
	);
});
const Z = PA((e) => {
	const { modeKey, modeId } = e;
	const i = Kw(modeId);
	const a = l.Dd[i?.source]?.id;
	const s = l.k$[t]?.id;
	let c = ND(a);
	if (c == a) {
		c = Xt(a);
	}
	const u = GW(s);
	const A = Localize("#ControllerConfigurator_SourceMode_Group_Settings", u);
	const p = i?.friendlyname != null && i.friendlyname.length > 0;
	return (
		<div className={o.SettingsHeaderContainer}>
			<div className={o.SettingsSource}>{p ? i.friendlyname : c}</div>
			<div className={o.SettingsMode}>{A}</div>
		</div>
	);
});
export function qb(e, t, r, n, i, a, s, o) {
	c.v3.SetActiveInputGroup(r, n, i, s, a, o, i.modeid);
	const l = r?.key && r?.key.length ? r?.key : "0";
	const m = p.BV.GamepadUI.ControllerConfigurator.ModeSettings(
		e,
		i.mode,
		l,
		n?.key ?? "0",
		a,
		i.modeid,
		0,
		i.mode_shift,
	);
	t.push(m);
}
export const Hx = PA((e) => {
	const {
		baseActionSet,
		layerActionSet,
		group,
		eControllerSource,
		eControllerType,
		disabled,
		...m
	} = e;
	n.useEffect(() => {
		const e = group ? l.jg[group.mode] : undefined;
		c.v3.SetEditedGroupSettings(
			baseActionSet?.key,
			layerActionSet?.key,
			group.settings,
			e,
			eControllerSource,
			eControllerType,
		);
	}, [
		baseActionSet,
		layerActionSet,
		group,
		eControllerSource,
		eControllerType,
	]);
	return (
		<NO
			baseActionSet={baseActionSet}
			layerActionSet={layerActionSet}
			eControllerSource={eControllerSource}
			bottomSeparator="standard"
			modeid={group.modeid}
			looseSetting
			disabled={disabled}
			{...m}
		/>
	);
});
export const NO = PA((e) => {
	const {
		baseActionSet,
		layerActionSet,
		eControllerSource,
		mapKey,
		bottomSeparator,
		localizationOverride,
		showDesc,
		showOptionsDescs,
		modeid,
		looseSetting,
		layout,
	} = e;
	const p = c.v3.CurrentEditedGroupSettings.get(
		Ij({
			baseActionSetKey: baseActionSet?.key,
			layerActionSetKey: layerActionSet?.key,
			eControllerSource: eControllerSource,
		}),
	);
	const g = p?.find((e) => e.key == mapKey);
	const h = c.v3.StableAppId;
	if (g == null) {
		return null;
	} else {
		return (
			<f.Qr
				setting={g}
				onChange={(e) => {
					const n = {
						action_set_key: baseActionSet?.key,
						action_set_layer_key: layerActionSet?.key,
						source_binding_key: eControllerSource,
						modeid: modeid,
						mode_shift: c.v3.CurrentEditedGroup?.mode_shift,
						new_setting: {
							key: g.key,
							int_value: Math.trunc(e),
						},
					};
					c.v3.SetControllerSourceMode(h, n);
				}}
				indent={1}
				bottomSeparator="none"
				localizationOverride={localizationOverride}
				showDesc={showDesc}
				showOptionsDescs={showOptionsDescs}
				looseSetting={looseSetting}
				layout={layout}
			/>
		);
	}
});
function V(e) {
	const { title, icon, active, navRef, ...s } = e;
	return (
		<u.Z
			preferredFocus={active}
			navRef={active ? e.navRef : null}
			noFocusRing
			onActivate={s.onClick}
			onFocus={s.onClick}
			{...s}
		>
			{icon && <div className={o.PageListItem_Icon}>{icon}</div>}
			<div className={o.PageListItem_Title}>{title}</div>
		</u.Z>
	);
}
const H = n.forwardRef((props, ref) => {
	const r = W6();
	return (
		<u.Z
			ref={ref}
			navRef={props.navRef}
			className={A_1(props.activePage.pageClassName, o.PageContainer)}
			onFocusWithin={(t) => {
				if (t) {
					r.replace(props.activePage.route);
				}
			}}
			navEntryPreferPosition={I.iU.MAINTAIN_Y}
		>
			{props.activePage.header}
			{!props.hideTitle && <g.Y9>{props.activePage.title}</g.Y9>}
			<S.tH errorKey={props.activePage.title}>
				{props.activePage.content != null &&
					n.cloneElement(props.activePage.content)}
			</S.tH>
		</u.Z>
	);
});
function J(e) {
	const t = zy();
	const r = W6();
	const a = n.useMemo(
		() =>
			e.pages.map((e) => {
				let t = e;
				t.leftColumnNavRef = e.leftColumnNavRef ?? n.createRef();
				t.rightColumnNavRef = e.rightColumnNavRef ?? n.createRef();
				t.htmlRef = e.htmlRef ?? n.createRef();
				return t;
			}),
		[e.pages],
	);
	const s = a.find(({ route }) => B6(t.pathname, route)) || a[0];
	a.findIndex((e) => e == s);
	const l = n.useCallback(() => s.leftColumnNavRef.current.TakeFocus(), [s]);
	const c = n.useMemo(
		() =>
			a.map((e, t) => (
				<u.Z
					key={t}
					navRef={e.rightColumnNavRef}
					navEntryPreferPosition={I.iU.MAINTAIN_Y}
				>
					{" "}
					<H
						key={e.identifier}
						hideTitle={false}
						activePage={e}
						ref={e.htmlRef}
					/>{" "}
				</u.Z>
			)),
		[a],
	);
	const m = n.useMemo(
		() =>
			a.map((e, t) => {
				if (e.visible === false) {
					return null;
				}
				const l = e == s;
				const c = e.title && e.title.length > 0 ? e.title : t.toString();
				return (
					<V
						key={c}
						onClick={() => {
							B.eZ.PlayNavSound(B.PN.PagedNavigation);
							if (!B6(e.route, s.route)) {
								r.replace(e.route);
							}
							a[t].rightColumnNavRef?.current.TakeFocus();
						}}
						onFocus={() => {
							if (!B6(e.route, s.route) && s.htmlRef.current) {
								e.htmlRef.current?.scrollIntoView({
									block: "center",
								});
								r.replace(e.route);
							}
						}}
						title={e?.title}
						icon={e?.icon}
						active={l}
						className={A_1(o.PageListItem, l && o.Active)}
						navRef={e.leftColumnNavRef}
					/>
				);
			}),
		[a, s, r],
	);
	return (
		<div className={A_1(o.PagedSettingsDialog, e.className)}>
			<u.Z
				className={A_1(o.PageListColumn)}
				onMoveRight={() => s?.rightColumnNavRef?.current.TakeFocus()}
			>
				{e.topControls && <div>{e.topControls}</div>}
				<div className={o.PageList}>{m}</div>
				{e.bottomControls && <div>{e.bottomControls}</div>}
			</u.Z>
			<u.Z
				className={o.RightColumnContainer}
				onCancelButton={l}
				onMoveLeft={l}
				autoFocus
			>
				{c}
			</u.Z>
		</div>
	);
}
