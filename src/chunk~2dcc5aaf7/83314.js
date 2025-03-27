import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i, { W6 } from "./49519.js";
import a from "./84056.js";
import s, { Ld } from "./64608.js";
import o, { h5 } from "./89193.js";
import l, { PA } from "./41230.js";
import c, { A as A_1 } from "./90765.js";
import m from "./78567.js";
import d, {
	ND,
	GW,
	fU,
	Bv,
	ON,
	KB,
	zB as zB_1,
	X as X_1,
	QQ,
	RW,
	wm,
	ix,
	Fq,
	Aj,
	K7,
	bj,
	U$,
	q8,
	yQ,
} from "./62486.js";
import A from "./85360.js";
import p from "./61277.js";
import g, {
	ot,
	Sp,
	_N,
	sn,
	Xt,
	_Q,
	rw,
	kF,
	Kw,
	B8,
	Ek,
	Zq,
	nr,
	SG,
	nQ,
	hq,
	Uz,
	sv,
	S1,
	Xe,
	im,
	R0,
	_H,
	JD,
} from "./52192.js";
import h from "./78057.js";
import C, { LC } from "./46422.js";
import _, { lX } from "./31084.js";
import f from "./69164.js";
import b from "./6630.js";
import y from "./88750.js";
import w, { pg } from "./13869.js";
import B from "./10606.js";
import v from "./22091.js";
import I from "./18057.js";
import E from "./35488.js";
import M from "./4690.js";
import T from "./84914.js";
import R from "./45309.js";
import k from "./83599.js";
import D from "./87928.js";
import F from "./12307.js";
import G, { U as U_1 } from "./2353.js";
import O from "./21105.js";
import P, { ZC, j9 } from "./18875.js";
import L, { vJ } from "./52451.js";
import z from "./96593.js";
import te, { Fu } from "./31958.js";
import re from "./53225.js";
import ne, { DL } from "./99452.js";
import ie, { qb } from "./46396.js";
import ae from "./75140.js";
import oe, { R7 } from "./11131.js";
import le, { VI } from "./34792.js";
import ce, { Cu } from "./91703.js";
import me from "./59396.js";
import { Xg } from "./61017.js";
import { ri } from "./44717.js";
import { CI } from "./72476.js";
import { z8 } from "./60221.js";
import ge from "./43014.js";
import he from "./53622.js";
import { w as w_1 } from "./49455.js";
const u = m;
const N = D;
const x = [
	"#FFFFFF",
	"#E4E4E4",
	"#AAAAAA",
	"#787878",
	"#434343",
	"#222222",
	"#0000AD",
	"#0045AD",
	"#0074AD",
	"#00ADAD",
	"#33AD69",
	"#00AD3D",
	"#00AD00",
	"#48B119",
	"#74AD00",
	"#96AD00",
	"#ADA200",
	"#AD5D00",
	"#AD3A00",
	"#AD0000",
	"#AD0051",
	"#AD007F",
	"#AD00AD",
	"#6800AD",
	"#4800AD",
];
const U = [
	"#939393",
	"#787878",
	"#434343",
	"#232323",
	"#000000",
	"#000055",
	"#002163",
	"#002E4D",
	"#145252",
	"#006652",
	"#00663D",
	"#2C5800",
	"#2D4400",
	"#425800",
	"#555500",
	"#665200",
	"#552A00",
	"#4D0000",
	"#3D0000",
	"#4D001F",
	"#58002C",
	"#4D004C",
	"#420058",
	"#210063",
];
const W = "";
const [V] = x;
const [, , , H] = U;
let j = null;
let q;
((e) => {
	e[(e.Icon = 0)] = "Icon";
	e[(e.Color = 1)] = "Color";
})((q ||= {}));
const Q = (e) => {
	const [t, setT] = n.useState(q.Icon);
	const [i, setI] = n.useState(e.selectedIcon?.icon_filename);
	const [o, setO] = n.useState(e.selectedIcon?.color_foreground ?? W);
	const [c, setC] = n.useState(e.selectedIcon?.color_background ?? W);
	const [u, setU] = n.useState(false);
	const A = e.selectedIcon?.icon_filename != null;
	const p = t == q.Icon;
	const g = t == q.Color;
	const h = i != null;
	const CRef = n.useRef(undefined);
	const _ = () => {
		if (e.onCancel) {
			e.onCancel();
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const b = () => {
		switch (t) {
			case q.Icon: {
				_();
				break;
			}
			case q.Color: {
				setT(q.Icon);
			}
		}
		return true;
	};
	const y = () => {
		if (h) {
			switch (t) {
				case q.Icon: {
					setT(q.Color);
					break;
				}
				case q.Color: {
					if (e.onOK) {
						e.onOK({
							icon_filename: i,
							color_foreground: o,
							color_background: c,
						});
					}
					if (e.closeModal) {
						e.closeModal();
					}
				}
			}
		}
	};
	const w = () => {
		j = i;
	};
	const v =
		t == q.Icon
			? (0, Localize)("#ControllerConfigurator_IconPicker_Title")
			: (0, Localize)("#ControllerConfigurator_IconPicker_PickColor_Title");
	return (
		<B.eV className={N.IconPickerDialog} closeModal={_} onCancel={b}>
			<s.Y9>{v}</s.Y9>
			<s.nB>
				{t == q.Icon && (
					<Z
						appID={e.appID}
						selectedFilename={i}
						onIconChange={(e) => {
							if (e != i) {
								setI(e);
								if (!u) {
									setO(W);
									setC(W);
								}
							}
							CRef?.current?.TakeFocus();
							setT(q.Color);
						}}
					/>
				)}
				{t == q.Color && (
					<Y
						appID={e.appID}
						iconFilename={i}
						foreground={o}
						background={c}
						onColorChange={(e, t) => {
							setO(e);
							setC(t);
							setU(true);
						}}
						onIconClick={() => setT(q.Icon)}
						onResetToSystemColors={() => CRef.current?.TakeFocus()}
					/>
				)}
			</s.nB>
			<s.wi className={N.Footer}>
				<f.Z
					className={N.FooterButtons}
					navEntryPreferPosition={M.iU.PREFERRED_CHILD}
				>
					<s.jn
						navRef={CRef}
						disabled={!h}
						preferredFocus={h}
						onClick={() => {
							w();
							y();
						}}
					>
						{g
							? (0, Localize)("#Button_Done")
							: (0, Localize)("#ControllerConfigurator_IconPicker_Next")}
					</s.jn>
					<s.$n
						disabled={!A}
						onClick={() => {
							if (A) {
								w();
								if (e.onRemove) {
									e.onRemove();
								}
								if (e.closeModal) {
									e.closeModal();
								}
							}
						}}
						className="Destructive"
					>
						{(0, Localize)("#ControllerConfigurator_IconPicker_RemoveIcon")}
					</s.$n>
					<s.$n
						onClick={() => {
							w();
							b();
						}}
						preferredFocus={!h}
					>
						{p
							? (0, Localize)("#Button_Cancel")
							: (0, Localize)("#ActionButtonLabelBack")}
					</s.$n>
				</f.Z>
			</s.wi>
		</B.eV>
	);
};
const Z = (e) => {
	const t = vJ(() => P.eA.Get().LoadIconsForApp(e.appID), [e.appID]) === true;
	const r = vJ(() => P.eA.Get().LoadIconsForApp(0), []) === true;
	const i = P.dS.filter(
		(t) => P.eA.Get().FilenamesForCategory(t, e.appID).length > 0,
	);
	const a = P.eA.Get().BFilenameExists(e.selectedFilename, e.appID)
		? e.selectedFilename
		: j;
	const s = i.map((t) => {
		let r = ZC(t);
		if (t == P.PP.AppIcons) {
			r = z.tw.GetAppOverviewByAppID(e.appID)?.display_name ?? r;
		}
		return {
			id: P.PP[t],
			title: r,
			content: (
				<J
					category={t}
					appID={e.appID}
					onSelect={e.onIconChange}
					filenameToHighlight={e.selectedFilename}
					filenameToAutofocus={a}
				/>
			),
		};
	});
	let o = a == null ? P.PP.AppIcons : P.eA.Get().CategoryForFilename(a);
	const [l, setL] = n.useState(P.PP[o]);
	const m = s.find((e) => e.id == l) ? l : s[0].id;
	return (
		<div className={N.TabbedPageBleed}>
			{t && r && (
				<F.xC
					tabs={s}
					activeTab={m}
					onShowTab={setL}
					autoFocusContents={a == null}
				/>
			)}
		</div>
	);
};
const Y = (e) => {
	const t = e.foreground == W && e.background == W;
	let r = e.foreground ?? "";
	if (r == "") {
		r = V;
	}
	let i = e.background ?? "";
	if (i == "") {
		i = H;
	}
	return (
		<f.Z className={N.ColorPickerStep}>
			<f.Z focusable={false} className={N.Preview} onActivate={e.onIconClick}>
				<Ee_1
					iconScale={0.5}
					appID={e.appID}
					filenameOrURI={e.iconFilename}
					foreground={e.foreground}
					background={e.background}
				/>
			</f.Z>
			<f.Z className={N.ColorPickers}>
				<K
					label={(0, Localize)(
						"#ControllerConfigurator_IconPicker_ForegroundColor",
					)}
					colors={x}
					selectedColor={e.foreground}
					onColorChange={(t) => e.onColorChange && e.onColorChange(t, i)}
				/>
				<K
					label={(0, Localize)(
						"#ControllerConfigurator_IconPicker_BackgroundColor",
					)}
					colors={U}
					selectedColor={e.background}
					onColorChange={(t) => e.onColorChange && e.onColorChange(r, t)}
				/>
				{!t && (
					<s.xh
						onClick={() => {
							if (e.onColorChange) {
								e.onColorChange(W, W);
							}
							if (e.onResetToSystemColors) {
								e.onResetToSystemColors();
							}
						}}
						highlightOnFocus={false}
						bottomSeparator="none"
					>
						{(0, Localize)(
							"#ControllerConfigurator_IconPicker_ResetToSystemTheme",
						)}
					</s.xh>
				)}
			</f.Z>
		</f.Z>
	);
};
const K = (e) => (
	<s.D0
		childrenLayout="below"
		label={e.label}
		bottomSeparator="none"
		highlightOnFocus={false}
	>
		<f.Z
			className={N.ColorPickerColors}
			autoFocus={e.autoFocus}
			navEntryPreferPosition={M.iU.PREFERRED_CHILD}
		>
			{e.colors.map((t) => (
				<X
					key={t}
					color={t}
					onSelect={() => e.onColorChange && e.onColorChange(t)}
					selected={t == e.selectedColor}
				/>
			))}
		</f.Z>
	</s.D0>
);
const X = (e) => {
	const TRef = n.useRef(undefined);
	return (
		<f.Z
			focusable
			navRef={TRef}
			className={A_1(N.ColorPickerColor, e.selected && N.Selected)}
			style={{
				backgroundColor: e.color,
			}}
			onFocus={e.onSelect}
			preferredFocus={e.selected}
			onMouseDown={(r) => {
				r.preventDefault();
				r.stopPropagation();
				if (e.onSelect) {
					e.onSelect();
				}
				TRef.current?.TakeFocus();
			}}
		/>
	);
};
const J = (e) => {
	const t = P.eA.Get().FilenamesForCategory(e.category, e.appID);
	const r = U_1();
	return (
		<O.MS
			className={A_1(N.IconGridScrollable, r.strClassNamesForScrollable)}
			onScroll={r.fnOnScroll}
			ref={r.refForScrollable}
			scrollIntoViewType={M.Yo.NoTransform}
		>
			<f.Z className={N.IconGrid} navEntryPreferPosition={M.iU.MAINTAIN_X}>
				{t.map((t) => (
					<$
						key={t}
						filename={t}
						appID={e.appID}
						onClick={() => e.onSelect(t)}
						onFocus={() => (j = t)}
						autoFocus={e.filenameToAutofocus == t}
						highlight={e.filenameToHighlight == t}
					/>
				))}
			</f.Z>
		</O.MS>
	);
};
const $ = (e) => (
	<s.$n
		className={A_1(N.IconButton, e.highlight && N.Highlighted)}
		onClick={e.onClick}
		noFocusRing={false}
		autoFocus={e.autoFocus}
		onGamepadFocus={e.onFocus}
	>
		<Ee_1 filenameOrURI={e.filename} appID={e.appID} />
	</s.$n>
);
const Ee_1 = (e) => {
	let t = null;
	let r = false;
	const i = j9(e.filenameOrURI, e.appID);
	const a = e.filenameOrURI == i;
	const [s, setS] = n.useState(false);
	const l = e.background == "" || e.background;
	const m = e.foreground == "" || e.foreground;
	const u = e.foreground != null && e.foreground.length > 0;
	if (e.filenameOrURI == null) {
		t = <E.IconEmpty />;
		r = true;
	} else if (i == null || s) {
		t = <E.IconNotFound />;
		r = true;
	} else {
		t = (
			<>
				<div
					className={A_1(N.BindingIconImage, u && N.WithForeground)}
					style={{
						backgroundImage: u
							? `url( "${i}" ), radial-gradient(${e.foreground}, ${e.foreground})`
							: `url("${i}")`,
						WebkitMaskImage: u ? `url("${i}")` : undefined,
					}}
				/>
				{a && (
					<img
						style={{
							visibility: "hidden",
						}}
						src={i}
						onError={() => setS(true)}
					/>
				)}
			</>
		);
	}
	return (
		<div
			className={A_1(
				N.BindingIcon,
				r && N.Placeholder,
				e.background != null && N.WithBackground,
				e.foreground != null && N.WithForeground,
			)}
			style={{
				"--touchmenuicon-bg": l,
				"--touchmenuicon-fg": m,
				"--touchmenuicon-scale": e.iconScale?.toString(),
			}}
		>
			{t}
		</div>
	);
};
function Ce(e) {
	if (CI() && e.key.length > 1) {
		return e.key || e.code;
	} else {
		return e.code || e.key;
	}
}
function _e(e) {
	const { appid, onResult, ...i } = e;
	const [s, setS] = n.useState(false);
	const [l, setL] = n.useState(false);
	const MRef = n.useRef(undefined);
	n.useEffect(() => {
		if (s) {
			MRef.current = setInterval(() => {
				i.closeModal();
			}, 1000);
		} else {
			clearInterval(MRef.current);
		}
		return () => clearInterval(MRef.current);
	}, [s, i]);
	const u = R7();
	n.useEffect(() => {
		const e = (e) => {
			e.preventDefault();
			e.stopPropagation();
			if (!e.repeat) {
				setL(true);
				if (e.key == "Escape") {
					setS(true);
				} else {
					const r = ot(Ce(e));
					if (r != 0) {
						Xg(appid, r);
					}
				}
			}
		};
		const r = (e) => {
			e.preventDefault();
			e.stopPropagation();
			if (e.key == "Escape") {
				setS(false);
				const r = ot(Ce(e));
				if (r != 0) {
					Xg(appid, r);
				}
			}
			if (l) {
				i.closeModal();
			}
		};
		const n = (e) => {
			e.preventDefault();
			setL(true);
			ri(appid, Sp(e.button));
			i.closeModal();
		};
		const u_ownerWindow = u.ownerWindow;
		u_ownerWindow.addEventListener("keydown", e);
		u_ownerWindow.addEventListener("keyup", r);
		u_ownerWindow.addEventListener("mousedown", n);
		const m = SteamClient.Input.RegisterForControllerInputMessages(
			(e, r, n, s, m) => {
				if (r <= a.H.GAMEPAD_BUTTON_LAST) {
					if (n) {
						setL(true);
						if (r == a.H.GAMEPAD_BUTTON_B) {
							setS(true);
						} else {
							z8(appid, _N(r));
						}
					} else if (!n) {
						if (r == a.H.GAMEPAD_BUTTON_B) {
							setS(false);
							z8(appid, _N(r));
						}
						if (l) {
							i.closeModal();
						}
					}
				}
			},
		);
		return () => {
			u_ownerWindow.removeEventListener("keydown", e);
			u_ownerWindow.removeEventListener("keyup", r);
			u_ownerWindow.removeEventListener("mousedown", n);
			m.unregister();
		};
	}, [u.ownerWindow, appid, l, i, e]);
	const d = A.v3.EditingConfigurationControllerIndex;
	n.useEffect(() => {
		SteamClient.Input.RegisterForControllerStateChanges((e) => {
			const r = e.find((e) => e.unControllerIndex == d);
			if (!r) {
				return;
			}
			const n = (e) => {
				setL(true);
				z8(appid, e);
				i.closeModal();
			};
			if (r.sLeftPadX > 10000) {
				n(17);
			} else if (r.sLeftPadX < -10000) {
				n(16);
			} else if (r.sLeftPadY > 10000) {
				n(14);
			} else if (r.sLeftPadY < -10000) {
				n(15);
			} else if (r.ulButtons & 131072) {
				n(9);
			} else if (r.sRightPadX > 10000 || r.sRightStickX > 10000) {
				n(25);
			} else if (r.sRightPadX < -10000 || r.sRightStickX < -10000) {
				n(24);
			} else if (r.sRightPadY > 10000 || r.sRightStickY > 10000) {
				n(22);
			} else if (r.sRightPadY < -10000 || r.sRightStickY < -10000) {
				n(23);
			} else if (r.ulButtons & 262144) {
				n(10);
			} else if (r.ulButtons & 256) {
				n(14);
			} else if (r.ulButtons & 2048) {
				n(15);
			} else if (r.ulButtons & 1024) {
				n(16);
			} else if (r.ulButtons & 512) {
				n(17);
			}
		});
		return () => {
			SteamClient.Input.UnregisterForControllerStateChanges();
		};
	}, [appid, d, i]);
	return (
		<B.eV onCancel={() => !l} {...i}>
			<f.Z autoFocus onKeyDown={undefined}>
				<div className={me.ContainerDiv}>
					{LocalizeReact(
						"#ControllerConfigurator_ChooseBinding_Listener",
						<he.W button={ge.g4.B} className={me.InlineGlyph} />,
					)}
				</div>
			</f.Z>
		</B.eV>
	);
}
export const tG = new k.wd("ControllerConfigurator");
function ye(e) {
	return A.v3.FilterText((0, Localize)(e));
}
export const ih = PA((e) => {
	const {
		appid,
		sourcesFilter,
		actionset_section,
		rgBackupSources,
		selectedSource,
		selectedInput,
	} = e;
	const c = R7();
	const m = W6();
	const u =
		A.v3.EditingConfigurationControllerIndex ??
		C.oy.MostRecentlyActiveControllerIndex;
	const p = v.Fd.Get().GetController(u)?.eControllerType;
	const [h] = VI("steam_input_configurator_error_msg_enable");
	if (h && A.v3.EditingConfiguration?.error_msg?.length > 0) {
		pg(
			<B.o0
				strTitle={(0, Localize)("#ControllerConfigurator_ErrorMsg_Title")}
				strDescription={A.v3.EditingConfiguration?.error_msg}
				bAlertDialog
			/>,
			c.ownerWindow ?? window,
		);
	}
	if (selectedInput) {
		A.v3.SetControllerConfiguratorFocusInput(selectedInput);
	}
	const _ = A.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const b = A.v3.ControllerConfiguratorLayerSetIndex;
	const y = A.v3.EditingConfiguration?.sets[_];
	const E = y == null || y.layers[b];
	const R = E ?? y;
	n.useEffect(() => {
		if (R?.source_bindings === undefined) {
			m.replace(I.BV.GamepadUI.ControllerConfigurator.Main(appid));
		}
	}, [R?.source_bindings, appid, m]);
	const T_N = T.N;
	const D = n.useMemo(() => {
		let e =
			sourcesFilter == null
				? R?.source_bindings
				: sourcesFilter(R?.source_bindings);
		rgBackupSources?.forEach((t) => {
			if (sn(p, t)) {
				let r = {
					key: t,
				};
				if (e?.findIndex((e) => e?.key == t) < 0) {
					e.push(r);
				}
			}
		});
		return e?.map((e, r) =>
			sn(p, e.key) ? (
				<n.Fragment key={r}>
					<$W
						baseActionSet={y}
						layerActionSet={E}
						eControllerSource={e.key}
						group={e?.active_group}
						appid={appid}
						actionset_section={actionset_section}
						showInputs={!d.G9.includes(e.active_group?.mode)}
						modeShift={false}
						autoFocus={e.key == selectedSource}
					/>
					{e.active_group?.mode_shift_source_group !== undefined && (
						<$W
							baseActionSet={y}
							layerActionSet={E}
							eControllerSource={e.key}
							group={e?.active_group?.mode_shift_source_group}
							appid={appid}
							actionset_section={actionset_section}
							showInputs={
								!d.G9.includes(e.active_group?.mode_shift_source_group?.mode)
							}
							modeShift
							autoFocus={e.key == selectedSource}
						/>
					)}
				</n.Fragment>
			) : null,
		);
	}, [
		R?.source_bindings,
		p,
		sourcesFilter,
		rgBackupSources,
		actionset_section,
		appid,
		y,
		E,
		selectedSource,
	]);
	if (R == null) {
		return null;
	} else {
		return (
			<div>
				<f.Z
					onButtonDown={T_N}
					retainFocus
					navEntryPreferPosition={M.iU.PREFERRED_CHILD}
				>
					{D}
				</f.Z>
			</div>
		);
	}
});
Array.from(
	{
		length: 30,
	},
	(e, t) => ({
		eMode: t,
	}),
);
export function OW(e) {
	return (
		<s.D0
			className={u.GroupSectionHeaderField}
			label={<s.iK>{e.label}</s.iK>}
			childrenContainerWidth="fixed"
			bottomSeparator="standard"
		>
			{e.children}
		</s.D0>
	);
}
export const Zm = PA((e) => {
	const { baseActionSet, layerActionSet, eControllerSource, group, appid } = e;
	const l = d.Dd[i].id;
	const c = ND(l) ?? Xt(l);
	const m = (0, Localize)(
		"#ControllerConfigurator_SourceMode_Group_Behavior",
		c,
	);
	return (
		<>
			<s.D0 label={m} childrenContainerWidth="fixed" bottomSeparator="standard">
				<Ie
					baseActionSet={baseActionSet}
					layerActionSet={layerActionSet}
					eControllerSource={eControllerSource}
					group={group}
					simpleView
					appid={appid}
					menuLabel={m}
				/>
			</s.D0>
		</>
	);
});
function ve(e, t, r, i) {
	const e_gameAction = e.gameAction;
	const o = d.k$[e.eMode].id;
	const l = d.Dd[t].id;
	let m;
	m = e.strDisplay
		? e.strDisplay
		: e_gameAction?.action.display_name
			? e_gameAction.action.display_name
			: GW(o, i) || Xt(o);
	let A = e_gameAction == null ? fU(o, l) : undefined;
	let p = <svg className={u.ModeSelectDropDownIcon} />;
	if (e_gameAction != null) {
		p = ((e) =>
			e.bMutatedActionMode ? (
				<E.HierarchyRowEnd
					className={A_1(u.ModeSelectDropDownIcon, u.SIAPIActionMutated)}
				/>
			) : (
				<E.SIAPIAction className={u.ModeSelectDropDownIcon} />
			))(e);
	} else {
		const t = _Q(e.eMode)
			? u.ModeSelectDropDownIcon
			: A_1(u.ModeSelectDropDownIcon, u.XInputOutput);
		p = rw(e.eMode, t);
	}
	const h = e.bMutatedActionMode ? u.MutatedActionMode : "";
	return {
		label: (
			<s.aZ
				title={m}
				description={A}
				descriptionVisibility="when-expanded"
				icon={p}
				iconVisibility="when-expanded"
				strTitleClassNames={r}
				strClassNames={h}
			/>
		),
		data: e,
		strOptionClass: u.HideOnMinified,
	};
}
const Ie = PA((e) => {
	const {
		baseActionSet,
		layerActionSet,
		eControllerSource,
		group,
		simpleView,
		appid,
		modeShift,
		autoFocus,
	} = e;
	const y = R7();
	const B = W6();
	h.H.GetAppDetails(appid);
	const I =
		A.v3.EditingConfigurationControllerIndex ??
		C.oy.MostRecentlyActiveControllerIndex;
	const T = v.Fd.Get().GetController(I)?.eControllerType;
	const k = layerActionSet
		? baseActionSet.source_bindings?.find((e) => e.key == eControllerSource)
				?.active_group
		: undefined;
	const D = eControllerSource != 5;
	const N =
		D &&
		Bv(eControllerSource, baseActionSet, layerActionSet, simpleView, group);
	const F =
		D &&
		ON(
			eControllerSource,
			baseActionSet,
			layerActionSet,
			appid,
			simpleView,
			group,
		);
	const G = KB(eControllerSource);
	const O =
		!kF(group?.mode) && simpleView ? N.concat(F) : N.concat(G.concat(F));
	const P = k?.mode != null;
	const L = k?.mode
		? (O.find((e) => e.eMode == k?.mode)?.strDisplay ?? ND(d.k$[k?.mode].id))
		: "";
	const z = D && zB_1(eControllerSource, baseActionSet, layerActionSet, L);
	const x = N.shift && z.concat(O);
	const U = k && group?.mode == 0 ? k : group;
	const W = U ? d.jg[U.mode] : undefined;
	const V = U ? X_1(U.settings, W, eControllerSource, T) : undefined;
	const H = (V != null && V.length > 0) || U?.mode_shift;
	const j = k?.mode && (!group || group?.mode == 0);
	const q = k?.mode && k?.mode == group?.mode;
	const Q = q || j ? u.BindingFromParentSet : "";
	let Z =
		x &&
		x.map((e) =>
			ve(e, eControllerSource, j || q ? u.ModeFromParentSet : "", modeShift),
		);
	const Y = Ld(Z).find((e) => QQ(group, e.data))?.data;
	if (!modeShift && Y) {
		const e = {
			label: (0, Localize)("#ControllerBinding_ModeShift_Create"),
			data: {
				eMode: Y.eMode,
				bMutatedActionMode: true,
				modeShift: true,
			},
		};
		Z.push(e);
	}
	const K =
		eControllerSource == 10
			? (e) => {
					p.z.AddInterstitialToQueue({
						eInterstitial: p.H.k_eGyro,
						appid: appid,
						onOK: e,
						onSkipped: e,
					});
					return false;
				}
			: undefined;
	const X = (e, n) => {
		const i = {
			action_set_key: baseActionSet.key,
			action_set_layer_key: layerActionSet?.key,
			source_binding_key: eControllerSource,
			mode_shift: U?.mode_shift,
		};
		i.new_mode = e.data.eMode;
		i.modeid = e.data.modeid;
		i.new_name = n ?? undefined;
		i.enable_virtual_menu_support = true;
		i.mode_shift = modeShift;
		const s = e.data.gameAction;
		if (s != null) {
			const e = s.layerSet ?? s.baseSet;
			i.new_game_action = {
				action_set_key: e.key,
				action_key: s.action.key,
			};
		}
		tG.Debug("onChangeModeOption", e.data, i);
		A.v3.SetControllerSourceMode(appid, i);
	};
	const J = (e) => {
		if (e.data?.modeShift) {
			((e, n) => {
				const i = {
					action_set_key: baseActionSet.key,
					action_set_layer_key: layerActionSet?.key,
					source_binding_key: eControllerSource,
					mode_shift: U?.mode_shift,
				};
				i.new_mode = e.data.eMode == 0 || kF(e.data.eMode) ? 1 : e.data.eMode;
				i.modeid = e.data.modeid;
				i.new_name = n ?? undefined;
				i.enable_virtual_menu_support = true;
				i.mode_shift = true;
				const s = e.data.gameAction;
				if (s != null) {
					const e = s.layerSet ?? s.baseSet;
					i.new_game_action = {
						action_set_key: e.key,
						action_key: s.action.key,
					};
				}
				tG.Debug("onCreateModeShift", e.data, i);
				A.v3.SetControllerSourceMode(appid, i);
			})(e, undefined);
		} else if (kF(e.data.eMode) && !e.data.modeid) {
			((e) => {
				const t = (
					<R.Qj
						title={(0, Localize)(
							"#ControllerConfigurator_CreateVirtualMenuDialog_Title_1",
						)}
						description={(0, Localize)(
							"#ControllerConfigurator_CreateVirtualMenuDialog_Description_1",
						)}
						isValid={(e) => e.length != 0}
						onResult={(t) => {
							X(e, t);
						}}
						onCancel={() => {}}
					/>
				);
				pg(t, y.ownerWindow ?? window, {});
			})(e);
		} else {
			X(e, undefined);
		}
	};
	const $ = () => {
		const e = kF(k.mode) ? Kw(k.modeid) : undefined;
		const t =
			e?.friendlyname && e?.friendlyname.length
				? e.friendlyname
				: GW(d.k$[e?.mode]?.id);
		const r = e
			? (0, Localize)("#ControllerConfigurator_SourceMode_Layer_Title", t)
			: undefined;
		X(
			Ld(Z).find((e) => QQ(k, e.data, kF(k.mode))),
			r,
		);
	};
	const ee =
		e.onSouthpawSwap != null
			? (0, Localize)("#ControllerConfigurator_SourceMode_Swap_Left_With_Right")
			: undefined;
	return (
		<f.Z
			className={A_1(u.BindingButtons)}
			navEntryPreferPosition={M.iU.PREFERRED_CHILD}
			onSecondaryButton={
				P
					? j
						? $
						: () => {
								J({
									label: "",
									data: {
										eMode: 0,
									},
								});
							}
					: null
			}
			onSecondaryActionDescription={
				P
					? j
						? (0, Localize)(
								"#ControllerConfigurator_SourceMode_Group_ConvertToEditable",
							)
						: (0, Localize)(
								"#ControllerConfigurator_SourceMode_Group_RevertToInherited",
							)
					: null
			}
			onOptionsActionDescription={ee}
			onOptionsButton={() => {
				if (e.onSouthpawSwap) {
					e.onSouthpawSwap();
				}
			}}
			autoFocus={autoFocus}
		>
			<s.ZU
				rgOptions={Z}
				onChange={J}
				selectedOption={Y}
				onMenuWillOpen={K}
				menuLabel={e.menuLabel}
				strDropDownButtonClassName={Q}
			/>
			{(H || j) && (
				<s.$n
					className={u.BindingOptionsButton}
					onClick={(e) =>
						H
							? void qb(
									appid,
									B,
									baseActionSet,
									layerActionSet,
									group,
									eControllerSource,
									W,
									T,
								)
							: $()
					}
				>
					<E.Settings />
				</s.$n>
			)}
		</f.Z>
	);
});
const Ee = new Map([
	[1, 2],
	[3, 12],
	[4, 13],
	[18, 17],
	[6, 7],
	[8, 9],
	[2, 1],
	[12, 3],
	[13, 4],
	[17, 18],
	[7, 6],
	[9, 8],
]);
export const $W = PA((e) => {
	const {
		baseActionSet,
		layerActionSet,
		eControllerSource,
		group,
		appid,
		actionset_section,
		virtualmenu_section,
		modeShift,
		autoFocus,
	} = e;
	const b = e.showInputs ?? true;
	const y =
		A.v3.EditingConfigurationControllerIndex ??
		C.oy.MostRecentlyActiveControllerIndex;
	const [B, setB] = n.useState(v.Fd.Get().GetController(y));
	const M = B?.eControllerType;
	const T = B?.unCapabilities;
	const R = R7();
	const k = W6();
	const D = group?.inputs ?? [];
	const N = D.filter(
		(e, t) =>
			(e.activators.length != 0 && !B8(M, e.key) && !d.SW[e.key]?.dupe) ||
			(!d.SW[e.key]?.macro &&
				((!d.SW[e.key]?.actionset_action && !actionset_section) ||
					(d.SW[e.key]?.actionset_action && actionset_section)) &&
				Ek(group?.mode, e.key) &&
				Zq(e, d.SW[e.key]?.only_show_if_bound) &&
				t === D.findIndex((t) => t.key === e.key) &&
				!nr(e) &&
				(virtualmenu_section ||
					(!virtualmenu_section &&
						(eControllerSource != 5 || !d.SW[e.key]?.dupe) &&
						SG(eControllerSource, e.key) &&
						nQ(M, e.key) &&
						hq(M, eControllerSource, e.key) &&
						Uz(T, e.key) &&
						sv(eControllerSource, group.mode, group.settings, e.key)))),
	).sort((e, t) => (S1(e.key) > S1(t.key) ? 1 : -1));
	const F = d.Dd[o]?.id;
	const G = virtualmenu_section
		? (0, Localize)("#ControllerConfigurator_VirtualMenu_MenuType")
		: (ND(F) ?? Xt(F));
	const O = layerActionSet
		? baseActionSet.source_bindings?.find((e) => e.key == eControllerSource)
				?.active_group
		: undefined;
	const P =
		O?.mode &&
		(!group ||
			group?.mode == 0 ||
			(O?.mode == group?.mode && O?.modeid != group?.modeid));
	const L = eControllerSource;
	const z = ((e, t, r) => {
		let n = Ee.get(e);
		if (n != null && t == 2) {
			if (e == 4) {
				n = 3;
			} else if (e == 3) {
				n = 4;
			}
		}
		if (t != 2 || (e != 4 && e != 3)) {
			return n;
		}
	})(L, M);
	const x = group?.mode;
	const U = baseActionSet.source_bindings?.find(
		(e) => e.key == z,
	)?.active_group;
	const W = U?.mode;
	const V = x == 0 && W == 0;
	const H = z != null && Xe(z, x);
	const j = L != null && Xe(L, W);
	const q =
		z != null && !V && H && j
			? () => {
					const e = {
						action_set_key_a: baseActionSet.key,
						action_set_layer_key_b: layerActionSet?.key,
						source_a: L,
						action_set_key_b: baseActionSet.key,
						action_set_layer_key_a: layerActionSet?.key,
						source_b: z,
					};
					A.v3.SwapControllerConfigurationSourceModes(appid, e);
				}
			: undefined;
	const Q = N.filter((e) => !nr(e)).map((e, i) => (
		<n.Fragment key={i}>
			{im(M, e.key) && <OW label={RW(e.key)} />}
			<AK
				baseActionSet={baseActionSet}
				layerActionSet={layerActionSet}
				eControllerSource={eControllerSource}
				input={e}
				eControllerMode={group.mode}
				indentLevel={1}
				bModeInherited={P}
				modeid={group.modeid}
				modeShift={modeShift}
			/>
		</n.Fragment>
	));
	const Z = wm(virtualmenu_section, F, G, modeShift);
	const Y = kF(group?.mode);
	const K = Y;
	let X;
	let J;
	let $ = false;
	if (Y) {
		const e =
			group.mode == 11
				? group.settings?.find((e) => e.key == 73)?.int_value
				: 0;
		const i = DL(group.modeid, O?.modeid);
		let a = group?.settings?.find((e) => e?.key == 73);
		let s = group.mode == 14 ? 30 : 29;
		$ = i >= 29 && (e == 0 || i - s < e);
		const c = group.mode == 11 && a?.int_value != 0 ? a?.int_value + s : 84;
		J = D.filter((e) => nr(e) && e?.key < c).sort((e, t) =>
			S1(e.key) > S1(t.key) ? 1 : -1,
		);
		if (
			!J.some((e) =>
				e?.activators?.some((e) =>
					e?.bindings?.some((e) => {
						const t =
							e?.key_binding_data?.icon_data?.color_background?.toUpperCase() ??
							"";
						const r =
							e?.key_binding_data?.icon_data?.color_foreground?.toUpperCase() ??
							"";
						return (t != "" && t != ae.Od) || (r != "" && r != ae.dH);
					}),
				),
			)
		) {
			for (let e of J) {
				for (let t of e?.activators ?? []) {
					for (let e of t?.bindings ?? []) {
						if (e?.key_binding_data?.icon_data != null) {
							e.key_binding_data.icon_data.color_background = "";
							e.key_binding_data.icon_data.color_foreground = "";
						}
					}
				}
			}
		}
		X = J.map((e, i) => (
			<n.Fragment key={i}>
				{im(M, e.key) && <OW label={RW(e.key)} />}
				<AK
					baseActionSet={baseActionSet}
					layerActionSet={layerActionSet}
					eControllerSource={eControllerSource}
					input={e}
					eControllerMode={group.mode}
					indentLevel={0}
					bModeInherited={P}
					modeid={group.modeid}
					modeShift={modeShift}
				/>
			</n.Fragment>
		));
	}
	return (
		<s.G5>
			{eControllerSource != 5 && (
				<OW label={Z}>
					{!virtualmenu_section && F && (
						<Ie
							baseActionSet={baseActionSet}
							layerActionSet={layerActionSet}
							eControllerSource={eControllerSource}
							group={group}
							appid={appid}
							menuLabel={Z}
							modeShift={modeShift}
							autoFocus={autoFocus}
							onSouthpawSwap={q}
						/>
					)}
					{virtualmenu_section && (
						<ne.L3
							baseActionSet={baseActionSet}
							layerActionSet={layerActionSet}
							eControllerSource={eControllerSource}
							group={group}
							appid={appid}
							menuLabel={Z}
							modeid={group?.modeid}
							modeShift={modeShift}
							autoFocus={autoFocus}
						/>
					)}
				</OW>
			)}
			{b && (
				<>
					{Y && X}
					{K && (
						<>
							<s.D0 highlightOnFocus={false}>
								<s.$n
									disabled={!$}
									onClick={() => {
										const e = DL(group.modeid, O?.modeid);
										if (e) {
											const n = {
												type: a.N.k_EControllerBindingType_ControllerAction,
												controller_action: {
													action: 43,
												},
											};
											const i = {
												action_set_key: baseActionSet.key,
												action_set_layer_key: layerActionSet?.key,
												source_binding_key: eControllerSource,
												input_key: e,
												activator_index: 0,
												binding_index: 0,
												modeid: group?.modeid,
												mode_shift: modeShift,
												new_binding: n,
												source_mode: group.mode,
											};
											A.v3.SetControllerInputBinding(appid, i);
											A.v3.SaveEditingConfiguration(appid);
											A.v3.EnsureEditingConfiguration();
											A.v3.SetEditedInputBinding(n);
											A.v3.SetActiveInputBinding(i);
											A.v3.Navigate(
												k,
												I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(
													appid,
												),
											);
										}
									}}
									className={A_1(
										u.BindingButtons,
										u.StandardPlusIconButtonWidth,
									)}
								>
									{(0, Localize)(
										"#ControllerConfigurator_VirtualMenu_AddBindingSlot",
									)}
								</s.$n>
							</s.D0>
							<s.D0 highlightOnFocus={false}>
								<s.$n
									onClick={() => {
										pg(
											<Ve
												appid={appid}
												actionSet={baseActionSet}
												actionSetLayer={layerActionSet}
												controllerType={M}
												source={eControllerSource}
												group={group}
												filteredInputs={J}
											/>,
											R.ownerWindow ?? window,
										);
									}}
									className={A_1(
										u.BindingButtons,
										u.StandardPlusIconButtonWidth,
									)}
								>
									{(0, Localize)(
										"#ControllerConfigurator_VirtualMenu_ReorderSlots",
									)}
								</s.$n>
							</s.D0>
							<OW
								label={(0, Localize)(
									"#ControllerConfigurator_Source_AdditionalCommands_Subheader_Title",
								)}
							/>
						</>
					)}
					{Q}
				</>
			)}
		</s.G5>
	);
});
export const Qr = PA((e) => {
	const {
		setting,
		onChange,
		bottomSeparator,
		localizationOverride,
		showDesc,
		showOptionsDescs,
		looseSetting,
		layout,
		disabled,
	} = e;
	const { int_value, int_min, int_max, toggle, choices } = setting;
	const w = localizationOverride || ix(setting.id);
	const B = setting.valueSuffixToken
		? (0, Localize)(setting.valueSuffixToken)
		: undefined;
	const v =
		setting?.parentset_setting &&
		setting?.parentset_setting.int_value == setting.int_value
			? u.BindingFromParentSet
			: null;
	const I = int_min < int_max ? int_min : int_max;
	const E = int_min < int_max ? int_max : int_min;
	const M = setting.humanDisplayMin ?? I;
	const T = setting.humanDisplayMax ?? E;
	const [R, setR] = n.useState(int_value);
	const D = showDesc
		? ix(`${setting.id}_Description`, Fu(R, I, E, M, T))
		: undefined;
	const [N, setN] = n.useState(false);
	n.useEffect(() => {
		setR(int_value);
	}, [int_value]);
	const G = Math.trunc(
		setting.parentset_setting
			? setting.parentset_setting.int_value
			: setting.int_default,
	);
	const O = setting.int_value != G;
	const P = n.useCallback(() => {
		if (O) {
			onChange(G);
		}
	}, [O, G, onChange]);
	const L = n.useCallback(
		(e) => {
			const t = (
				<y.tz>
					<y.kt disabled={!O} onSelected={P}>
						{(0, Localize)("#ResetToDefault")}
					</y.kt>
				</y.tz>
			);
			lX(t, e);
		},
		[O, P],
	);
	const z = looseSetting || u.SettingMaxWidth;
	if (toggle) {
		return (
			<s.y4
				className={A_1(u.SettingField, v, z)}
				label={w}
				description={D && <div className={u.SettingFieldDescription}>{D}</div>}
				checked={int_value == 1}
				onChange={(e) => onChange(e ? 1 : 0)}
				bottomSeparator={bottomSeparator}
				onSecondaryButton={P}
				onSecondaryActionDescription={
					O ? (0, Localize)("#ResetToDefault") : undefined
				}
				onContextMenu={L}
				disabled={disabled}
			/>
		);
	}
	if (choices != null) {
		const e = choices.map((e) => ({
			label: (
				<s.aZ
					title={Fq(e.id)}
					description={showOptionsDescs && Aj(setting.id, e.id)}
					descriptionVisibility="when-expanded"
				/>
			),

			data: e.value,
		}));
		return (
			<s.Vb
				strClassName={A_1(u.SettingField, v, z)}
				label={w}
				description={<div className={u.SettingFieldDescription}>{D}</div>}
				rgOptions={e}
				selectedOption={setting.int_value}
				onChange={(e) => onChange(e.data)}
				bottomSeparator={bottomSeparator}
				onSecondaryButton={P}
				onSecondaryActionDescription={
					O ? (0, Localize)("#ResetToDefault") : undefined
				}
				onContextMenu={L}
				layout={layout}
				disabled={disabled}
			/>
		);
	}
	{
		const e = (e, t) => {
			setR(t == 3 ? Fu(e, M, T, I, E) : e);
		};
		const a = (e, t) => {
			onChange(t == 3 ? Fu(e, M, T, I, E) : e);
		};
		const o = (e) => e >= I && e <= E;
		const l = (e) =>
			`${e != null ? Number.parseFloat(Fu(e, I, E, M, T).toFixed(3)) : null}${
				setting.valueSuffixToken ? B : ""
			}`;
		return (
			<s.d3
				className={A_1(u.SettingField, v, z)}
				label={w}
				description={<div className={u.SettingFieldDescription}>{D}</div>}
				value={R}
				onChange={e}
				onChangeComplete={a}
				renderValue={l}
				min={I}
				max={E}
				editableValue
				validValues={o}
				valueSuffix={B}
				bottomSeparator={bottomSeparator}
				resetValue={G}
				dpadStep={N ? 1 : Math.abs(E - I) * 0.025}
				onOptionsButton={() => setN(!N)}
				layout={layout}
				disabled={disabled}
				onOptionsActionDescription={
					N
						? (0, Localize)("#ControllerSettingSlider_Coarse")
						: (0, Localize)("#ControllerSettingSlider_Fine")
				}
			/>
		);
	}
});
const Re = PA((e) => {
	const {
		baseActionSet,
		layerActionSet,
		eControllerSource,
		eControllerModeInput,
		activatorIndex,
		mapKey,
		bottomSeparator,
		appid,
		modeid,
		modeShift,
	} = e;
	const d = A.v3.StableAppId;
	const p = appid ?? d;
	const g = A.v3.CurrentEditedActivatorSettings.find((e) => e.key == mapKey);
	if (g == null) {
		return null;
	} else {
		return (
			<Qr
				setting={g}
				onChange={(e) => {
					const n = {
						action_set_key: baseActionSet.key,
						action_set_layer_key: layerActionSet?.key,
						source_binding_key: eControllerSource,
						input_key: eControllerModeInput,
						activator_index: activatorIndex,
						new_activation: undefined,
						new_setting: {
							key: g.key,
							int_value: Math.trunc(e),
						},
						mode_shift: modeShift,
						modeid: modeid,
					};
					A.v3.SetControllerInputActivator(p, n);
					A.v3.SaveEditingConfiguration(p);
					A.v3.EnsureEditingConfiguration();
				}}
				indent={2}
				bottomSeparator={bottomSeparator}
			/>
		);
	}
});
export const AK = PA((e) => {
	const t = W6();
	const r = A.v3.StableAppId;
	const {
		input,
		eControllerMode,
		eControllerSource,
		baseActionSet,
		layerActionSet,
		modeid,
		modeShift,
		indentLevel,
		minimalPresentation,
		...T
	} = e;
	const k = input.activators
		.map((e) => {
			const t = {
				...e,
			};
			t.bindings = e.bindings.filter((e) => !e.mode_shift);
			return t;
		})
		.filter((e) => e.bindings.length > 0);
	const D = k.length > 1 || A.v3.EditingConfiguration?.controller_type == 43;
	const N = (indentLevel ?? 0) + (D ? 1 : 0);
	const F = eControllerMode == 16 && input.key == 67;
	const G = Cu(r, eControllerSource, input.key);
	if (k.length == 0) {
		return (
			<Ne
				key={-1}
				{...e}
				activatorIndex={-1}
				bModeInherited={e.bModeInherited}
				modeShift={e.modeShift}
			/>
		);
	}
	const [O] = k;
	const P = O.bindings?.length > 0 ? O.bindings[0] : null;
	const L = kF(eControllerMode);
	const z =
		(L && R0(input.key)) || A.v3.EditingConfiguration?.controller_type == 43;
	const x = P?.mode_shift;
	const U = P?.game_action?.action_key;
	const W = P?.key_binding_data?.icon_data?.icon_filename != "";
	const V = P?.controller_action?.action == 43;
	const H = !V;
	const j = H || (V && L);
	const q = (H || j) && W ? P?.key_binding_data?.icon_data : undefined;
	const Z = (
		<g.VF
			eControllerType={A.v3.EditingConfiguration?.controller_type}
			eInput={_H(input.key)}
			eMode={eControllerMode}
			eSource={eControllerSource}
		/>
	);
	const Y = (e) => {
		const t = O?.bindings[0];
		t.key_binding_data.friendly_name_utf8 = e;
		const n = {
			action_set_key: baseActionSet.key,
			action_set_layer_key: layerActionSet?.key,
			source_binding_key: eControllerSource,
			input_key: input.key,
			activator_index: 0,
			binding_index: 0,
			modeid: modeid,
			mode_shift: modeShift,
		};
		if (t != null) {
			n.new_binding = t;
		}
		A.v3.SetControllerInputBinding(r, n);
		A.v3.SaveEditingConfiguration(r);
		A.v3.EnsureEditingConfiguration();
	};
	const K = (e) => {
		const i = <div className={u.FlexFlowRow}>{Z}</div>;
		const s = (
			<y.tz label={i}>
				{!F && (
					<>
						<y.kt
							onSelected={() => {
								let [e] = k;
								if (input.inherited_from_parentset) {
									const t = (e, t) =>
										h5(() => {
											const n = {
												action_set_key: baseActionSet.key,
												action_set_layer_key: layerActionSet?.key,
												source_binding_key: eControllerSource,
												input_key: input.key,
												activator_index: 0,
												binding_index: e,
												modeid: modeid,
												mode_shift: modeShift,
											};
											if (t != null) {
												n.new_binding = t;
											}
											A.v3.SetControllerInputBinding(r, n);
											A.v3.SaveEditingConfiguration(r);
											A.v3.EnsureEditingConfiguration();
										});
									e?.bindings?.forEach((e) => t(-1, e));
								}
								M0(
									r,
									eControllerSource,
									input,
									baseActionSet,
									layerActionSet,
									-1,
									undefined,
									modeid,
									modeShift,
								);
								const n = {
									type: a.N.k_EControllerBindingType_ControllerAction,
									controller_action: {
										action: 43,
									},
								};
								const i = {
									action_set_key: baseActionSet.key,
									action_set_layer_key: layerActionSet?.key,
									source_binding_key: eControllerSource,
									input_key: input.key,
									activator_index: input.activators?.length ?? 0,
									binding_index: 0,
									modeid: modeid,
									mode_shift: modeShift,
									new_binding: n,
									source_mode: eControllerMode,
								};
								A.v3.SetControllerInputBinding(r, i);
								A.v3.SaveEditingConfiguration(r);
								A.v3.EnsureEditingConfiguration();
								A.v3.SetEditedInputBinding(n);
								A.v3.SetActiveInputBinding(i);
								A.v3.Navigate(
									t,
									I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(r),
								);
							}}
						>
							{(0, Localize)(
								"#ControllerConfigurator_Activator_ContextMenuItem_AddActivator_Title",
							)}
						</y.kt>
						<y.kt
							onSelected={() => {
								((e, t, r, n, i, a, s, l) => {
									h5(() => {
										for (let o = a - 1; o >= 0; --o) {
											const a = {
												action_set_key: n.key,
												action_set_layer_key: i?.key,
												source_binding_key: t,
												input_key: r.key,
												activator_index: o,
												modeid: s,
												mode_shift: l,
												new_activation: undefined,
											};
											A.v3.SetControllerInputActivator(e, a);
										}
									});
								})(
									r,
									eControllerSource,
									input,
									baseActionSet,
									layerActionSet,
									k.length,
									modeid,
									modeShift,
								);
							}}
						>
							{(0, Localize)(
								"#ControllerConfigurator_Activator_ContextMenuItem_RemoveAllActivators_Title",
							)}
						</y.kt>
					</>
				)}
				{!U && !x && (
					<R.G
						title={(0, Localize)(
							"#ControllerConfigurator_Activator_ContextMenuItem_RenameGrouped_Activators_Title",
						)}
						onResult={Y}
					>
						<R.Qj
							title={(0, Localize)(
								"#ControllerConfigurator_ActionSets_RenameVirtualMenuDialog_Title_1",
								P?.key_binding_data?.friendly_name_utf8,
							)}
							description=""
							isValid={() => true}
							inputOptions={{
								placeholder: (0, Localize)(
									"#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1",
									P?.key_binding_data?.friendly_name_utf8,
								),
							}}
						/>
					</R.G>
				)}
			</y.tz>
		);
		lX(s, e);
	};
	const X = (
		<div className={A_1(u.FlexFlowRow, u.GroupedActivators)}>
			{Z}
			<div className={A_1(u.ActivatorDesc, minimalPresentation && u.Minimal)}>
				{(0, Localize)("#ControllerConfigurator_Activators_Desc", k.length)}
			</div>
		</div>
	);
	const J = (e, t) => {
		const n = O?.bindings[e];
		const i = {
			...(n ?? {}),
			key_binding_data: {
				...(n?.key_binding_data ?? {}),
				icon_data: t ?? {
					icon_filename: "",
					color_background: "",
					color_foreground: "",
				},
			},
		};
		const a = {
			action_set_key: baseActionSet.key,
			action_set_layer_key: layerActionSet?.key,
			source_binding_key: eControllerSource,
			input_key: input.key,
			activator_index: 0,
			binding_index: e,
			modeid: modeid,
			mode_shift: modeShift,
			new_binding: i,
		};
		A.v3.SetControllerInputBinding(r, a);
		A.v3.SaveEditingConfiguration(r);
		A.v3.EnsureEditingConfiguration();
	};
	return (
		<>
			{D && (
				<s.D0
					label={X}
					inlineWrap="keep-inline"
					onContextMenu={A.v3.IsUpdatingEditingConfiguration || ((e) => K(e))}
					indentLevel={indentLevel}
					childrenContainerWidth={e.childrenContainerWidth ?? "fixed"}
				>
					<f.Z
						className={A_1(u.BindingButtons, z && u.HasIcons)}
						retainFocus
						navEntryPreferPosition={M.iU.PREFERRED_CHILD}
					>
						{z && (
							<s.$n
								onClick={(e) =>
									((e, t, r, i) => {
										pg(
											<Q
												onOK={(t) => J(e, t)}
												onRemove={() => J(e, undefined)}
												appID={t}
												selectedIcon={r}
											/>,
											i,
										);
									})(0, r, q, GetOwningWindowForEvent(e))
								}
								className={A_1(u.BindingButton, u.BindingIconButton)}
								disabled={!H && !j}
								noFocusRing={false}
							>
								<Ee_1
									filenameOrURI={q?.icon_url ?? q?.icon_filename}
									background={q?.color_background}
									foreground={q?.color_foreground}
								/>
							</s.$n>
						)}
						{P?.key_binding_data?.friendly_name_utf8 && (
							<div className={u.BindingDisplayName}>
								<div className={A_1(u.FriendlyName, u.GroupedActivators)}>
									{P?.key_binding_data?.friendly_name_utf8}
								</div>
							</div>
						)}
						<s.$n
							className={u.BindingOptionsButton}
							onClick={(e) => (minimalPresentation ? G() : K(e))}
						>
							<E.Settings />
						</s.$n>
					</f.Z>
				</s.D0>
			)}
			{(!minimalPresentation || !D) &&
				k.map((t, r) => (
					<Ne
						key={r}
						input={input}
						indentLevel={N}
						eControllerMode={eControllerMode}
						eControllerSource={eControllerSource}
						baseActionSet={baseActionSet}
						layerActionSet={layerActionSet}
						activatorIndex={r}
						activator={t}
						bModeInherited={e.bModeInherited}
						modeid={modeid}
						modeShift={modeShift}
						bActivatorsGrouped={D}
						{...T}
					/>
				))}
		</>
	);
});
function De(e) {
	const { activatorIndex, bIsActivatorSetToCycle, bIsExtraBinding } = e;
	if (bIsExtraBinding) {
		return (
			<div className={u.ActivatorDesc}>
				{(0, Localize)("#ControllerConfigurator_Activator_SubCommand_Desc")}
			</div>
		);
	} else {
		return (
			<div className={u.ActivatorDesc}>
				{(0, Localize)(
					bIsActivatorSetToCycle
						? "#ControllerConfigurator_Activator_Command_Cycles_Desc"
						: "#ControllerConfigurator_Activator_Command_Desc",
					activatorIndex + 1,
				)}
			</div>
		);
	}
}
const Ne = PA((e) => {
	const {
		baseActionSet,
		layerActionSet,
		eControllerSource,
		eControllerMode,
		input,
		activatorIndex,
		activator,
		bModeInherited,
		bottomSeparator,
		modeid,
		modeShift,
		labelAlignment,
	} = e;
	const G = A.v3.EditingConfiguration?.sets;
	const O = !K7(G);
	const P =
		A.v3.EditingConfigurationControllerIndex ??
		C.oy.MostRecentlyActiveControllerIndex;
	const L = v.Fd.Get().GetController(P)?.eControllerType;
	const z = input.inherited_from_parentset ? u.BindingFromParentSet : null;
	const x = labelAlignment ?? "left";
	const U = A.v3.StableAppId;
	const W = W6();
	const V = (e, n) =>
		h5(() => {
			const i = {
				action_set_key: baseActionSet.key,
				action_set_layer_key: layerActionSet?.key,
				source_binding_key: eControllerSource,
				input_key: input.key,
				activator_index: activatorIndex,
				binding_index: e,
				modeid: modeid,
				mode_shift: modeShift,
			};
			if (n != null) {
				i.new_binding = n;
			}
			A.v3.SetControllerInputBinding(U, i);
			A.v3.SaveEditingConfiguration(U);
			A.v3.EnsureEditingConfiguration();
		});
	const H = activator && activator?.activation != 1;
	const j = activator && activatorIndex > 0;
	const q = eControllerMode == 16 && input.key == 67;
	const Z = j || q || q || H;
	const Y = (e) => {
		const t = e > 0;
		const r = ne && t;
		const n = activator?.bindings[e]?.controller_action?.action == 29;
		const i = activator?.bindings[e]?.controller_action?.action == 43;
		const a = t && i;
		const s = activatorIndex >= 0 && e >= 0 && !i;
		const o = s || (i && kF(eControllerMode));
		const l = Z || s || s || a || s || a || o;
		const c = s && activator?.bindings[e]?.game_action?.action_key;
		const u = s && activator?.bindings[e]?.mode_shift;
		w_1(!u, "Mode shift bindings should not be handled here.");
		return {
			bIsExtraBinding: t,
			bIsBoundToEmptyBinding: i,
			bIsUnboundExtraBinding: a,
			bHasBinding: s,
			bAllowBindingRevert: l,
			bIsExtraBindingOnCycle: r,
			bIsBoundToEmptyAction: n,
			bAllowVirtualMenuOptions: o,
			bGameAction: c,
			bModeShift: u,
		};
	};
	const K = (e) => {
		const {
			bHasBinding,
			bIsUnboundExtraBinding,
			bIsBoundToEmptyBinding,
			bIsBoundToEmptyAction,
			bAllowVirtualMenuOptions,
		} = Y(e);
		if (!input.inherited_from_parentset && bModeInherited) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_ResetToParentSet_Title";
		} else if (bIsUnboundExtraBinding) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_RemoveExtraBinding_Title";
		} else if (bHasBinding || bAllowVirtualMenuOptions) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_RemoveCommand_Title";
		} else if (H) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_ResetActivator_Title";
		} else if (j || q) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_RemoveActivator_Title";
		} else {
			return "Unhandle Revert String";
		}
	};
	const X = (e) => {
		const {
			bIsExtraBinding,
			bHasBinding,
			bIsBoundToEmptyBinding,
			bIsUnboundExtraBinding,
			bAllowVirtualMenuOptions,
			bModeShift,
		} = Y(e);
		if (!input.inherited_from_parentset && bModeInherited) {
			V(e, undefined);
			M0(
				U,
				eControllerSource,
				input,
				baseActionSet,
				layerActionSet,
				activatorIndex,
				undefined,
				modeid,
				modeShift,
			);
		} else if (bIsUnboundExtraBinding) {
			V(e, undefined);
		} else if (bHasBinding || bAllowVirtualMenuOptions) {
			if (bModeShift) {
				let n = {
					action_set_key: baseActionSet.key,
					action_set_layer_key: layerActionSet?.key,
					source: activator?.bindings[e]?.mode_shift?.source,
					modeid: modeid,
					mode_shift_buttons_digital_io: [],
				};
				A.v3.SetControllerModeShiftBinding(U, n);
			} else {
				V(
					e,
					!bIsBoundToEmptyBinding && e > 0
						? {
								type: a.N.k_EControllerBindingType_ControllerAction,
								controller_action: {
									action: 43,
								},
							}
						: undefined,
				);
			}
		} else if (H) {
			M0(
				U,
				eControllerSource,
				input,
				baseActionSet,
				layerActionSet,
				activatorIndex,
				1,
				modeid,
				modeShift,
			);
		} else if (j || q) {
			M0(
				U,
				eControllerSource,
				input,
				baseActionSet,
				layerActionSet,
				activatorIndex,
				undefined,
				modeid,
				modeShift,
			);
		}
	};
	const J = (i, s) => {
		if (activatorIndex == -1) {
			return;
		}
		const {
			bIsExtraBinding,
			bAllowBindingRevert,
			bIsExtraBindingOnCycle,
			bIsBoundToEmptyAction,
			bHasBinding,
			bGameAction,
			bModeShift,
		} = Y(i);
		const M = d.wn.filter((e) => e.value === activator.activation);
		const T = (
			<div
				className={A_1(u.FlexFlowRow, x == "right" && u.RightLabelAlignment)}
			>
				<g.VF
					eControllerType={L}
					eInput={_H(input.key)}
					eMode={eControllerMode}
					eSource={eControllerSource}
				/>
				<div className={u.ActivatorText}>
					{activator == null || activator.activation === 1 ? "" : bj(M[0].id)}
				</div>
			</div>
		);
		const k = q ? d.wn.filter((e) => !e.filter_alwayson) : d.wn;
		const F = (
			<y.tz label={T}>
				{!bIsExtraBinding && bHasBinding && (
					<y.Vs label={bj(M[0].id)}>
						{k.map((e) => {
							return (
								<y.kt
									key={e.value}
									onSelected={
										((i = e.value),
										() =>
											M0(
												U,
												eControllerSource,
												input,
												baseActionSet,
												layerActionSet,
												activatorIndex,
												i,
												modeid,
												modeShift,
											))
									}
								>
									{bj(e.id)}
								</y.kt>
							);
							var i;
						})}
					</y.Vs>
				)}
				{re && !bIsExtraBinding && bHasBinding && (
					<y.kt onSelected={ae}>
						{(0, Localize)(
							"#ControllerConfigurator_Activator_ContextMenuItem_ActivatorSettings_Title",
						)}
					</y.kt>
				)}
				{!bIsExtraBinding &&
					!bGameAction &&
					!j &&
					!bModeShift &&
					!e.bActivatorsGrouped && (
						<R.G
							title={(0, Localize)(
								"#ControllerConfigurator_Activator_ContextMenuItem_Rename_Title",
							)}
							onResult={(e) => {
								const n = activator?.bindings[i];
								n.key_binding_data.friendly_name_utf8 = e;
								const a = {
									action_set_key: baseActionSet.key,
									action_set_layer_key: layerActionSet?.key,
									source_binding_key: eControllerSource,
									input_key: input.key,
									activator_index: activatorIndex,
									binding_index: i,
									modeid: modeid,
									mode_shift: modeShift,
								};
								if (n != null) {
									a.new_binding = n;
								}
								A.v3.SetControllerInputBinding(U, a);
								A.v3.SaveEditingConfiguration(U);
								A.v3.EnsureEditingConfiguration();
							}}
						>
							<R.Qj
								title={(0, Localize)(
									"#ControllerConfigurator_ActionSets_RenameVirtualMenuDialog_Title_1",
									activator?.bindings[i]?.key_binding_data?.friendly_name_utf8,
								)}
								description=""
								isValid={() => true}
								inputOptions={{
									placeholder: (0, Localize)(
										"#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1",
										activator?.bindings[i]?.key_binding_data
											?.friendly_name_utf8,
									),
								}}
							/>
						</R.G>
					)}
				{layerActionSet && !bIsBoundToEmptyAction && (
					<y.kt
						onSelected={() => {
							ie(i);
						}}
					>
						{(0, Localize)(
							"#ControllerConfigurator_Activator_ContextMenuItem_ResetToEmpty_Title",
						)}
					</y.kt>
				)}
				{bAllowBindingRevert && (
					<y.kt
						onSelected={() => {
							X(i);
						}}
					>
						{(0, Localize)(K(i))}
					</y.kt>
				)}
				{!q && !bIsExtraBinding && (
					<>
						<y.K5 key="add-activator-separator" />
						<y.kt
							onSelected={() => {
								if (input.inherited_from_parentset) {
									activator?.bindings?.forEach((e) => V(-1, e));
								}
								M0(
									U,
									eControllerSource,
									input,
									baseActionSet,
									layerActionSet,
									-1,
									undefined,
									modeid,
									modeShift,
								);
								const e = {
									type: a.N.k_EControllerBindingType_ControllerAction,
									controller_action: {
										action: 43,
									},
								};
								const n = {
									action_set_key: baseActionSet.key,
									action_set_layer_key: layerActionSet?.key,
									source_binding_key: eControllerSource,
									input_key: input.key,
									activator_index: input.activators?.length ?? 0,
									binding_index: 0,
									modeid: modeid,
									mode_shift: modeShift,
									new_binding: e,
									source_mode: eControllerMode,
								};
								A.v3.SetControllerInputBinding(U, n);
								A.v3.SaveEditingConfiguration(U);
								A.v3.EnsureEditingConfiguration();
								A.v3.SetEditedInputBinding(e);
								A.v3.SetActiveInputBinding(n);
								A.v3.Navigate(
									W,
									I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(U),
								);
							}}
						>
							{(0, Localize)(
								"#ControllerConfigurator_Activator_ContextMenuItem_AddActivator_Title",
							)}
						</y.kt>
						<y.kt
							onSelected={() => {
								if (activator?.bindings?.length > 0) {
									if (input.inherited_from_parentset) {
										activator?.bindings?.forEach((e) => V(-1, e));
									}
								} else {
									V(-1, {
										type: a.N.k_EControllerBindingType_ControllerAction,
										controller_action: {
											action: 43,
										},
									});
								}
								const e = {
									type: a.N.k_EControllerBindingType_ControllerAction,
									controller_action: {
										action: 43,
									},
								};
								V(-1, e);
								const n = {
									action_set_key: baseActionSet.key,
									action_set_layer_key: layerActionSet?.key,
									source_binding_key: eControllerSource,
									input_key: input.key,
									activator_index: activatorIndex,
									binding_index: activator.bindings?.length ?? 0,
									modeid: modeid,
									mode_shift: modeShift,
									new_binding: e,
									source_mode: eControllerMode,
								};
								A.v3.SetControllerInputBinding(U, n);
								A.v3.SaveEditingConfiguration(U);
								A.v3.EnsureEditingConfiguration();
								A.v3.SetEditedInputBinding(e);
								A.v3.SetActiveInputBinding(n);
								A.v3.Navigate(
									W,
									I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(U),
								);
							}}
						>
							{(0, Localize)(
								"#ControllerConfigurator_Activator_ContextMenuItem_AddExtraBinding_Title",
							)}
						</y.kt>
					</>
				)}
			</y.tz>
		);
		lX(F, s);
	};
	const $ = d.av[activator?.activation];
	const te =
		activator == null || X_1(activator.settings, $, eControllerSource, L);
	const re = te != null && te.length > 0;
	const ne = te?.find((e) => e.key == 102)?.int_value == 1;
	const ie = (e) => {
		V(e, {
			type: a.N.k_EControllerBindingType_ControllerAction,
			controller_action: {
				action: 29,
			},
		});
	};
	const ae = (e) => {
		let i = GetOwningWindowForEvent(e);
		A.v3.SetActiveInputActivator(activator, $, eControllerSource, L);
		pg(
			<We
				activator={activator}
				activatorIndex={activatorIndex}
				baseActionSet={baseActionSet}
				layerActionSet={layerActionSet}
				eControllerSource={eControllerSource}
				input={input}
				appid={U}
				modeid={modeid}
				modeShift={modeShift}
			/>,
			i,
			{
				fnOnClose: () => {
					const e =
						activator == null ||
						X_1(activator.settings, $, eControllerSource, L);
					if (e?.find((e) => e.key == 102)?.int_value == 1 && ce?.length < 2) {
						V(-1, {
							type: a.N.k_EControllerBindingType_ControllerAction,
							controller_action: {
								action: 43,
							},
						});
					}
				},
			},
		);
		return true;
	};
	const oe = (e, n) => {
		const i = activator?.bindings[e];
		const a = {
			...(i ?? {}),
			key_binding_data: {
				...(i?.key_binding_data ?? {}),
				icon_data: n ?? {
					icon_filename: "",
					color_background: "",
					color_foreground: "",
				},
			},
		};
		const s = {
			action_set_key: baseActionSet.key,
			action_set_layer_key: layerActionSet?.key,
			source_binding_key: eControllerSource,
			input_key: input.key,
			activator_index: activatorIndex,
			binding_index: e,
			modeid: modeid,
			mode_shift: modeShift,
			new_binding: a,
		};
		A.v3.SetControllerInputBinding(U, s);
		A.v3.SaveEditingConfiguration(U);
		A.v3.EnsureEditingConfiguration();
	};
	const le = (i, o) => {
		const _ = []
			.concat(
				Fe(layerActionSet?.key, U$(layerActionSet, 2)),
				Fe(layerActionSet?.key, U$(layerActionSet, 1)),
				Fe(baseActionSet?.key, U$(baseActionSet, 2)),
				Fe(baseActionSet?.key, U$(baseActionSet, 1)),
				Pe,
				{
					label: "Action",
					options:
						((y = i),
						(v = O ? G : undefined),
						(T = baseActionSet?.layers),
						d.X9.map((e) => {
							const t = {
								action: e.key,
							};
							if (e.set) {
								if (e.baseSet && v == null) {
									return;
								}
								if (!e.baseSet && T == null) {
									return;
								}
								t.action_set = {
									action_set_key: undefined,
									display: true,
									beep: true,
								};
							} else if (e.playerNumber) {
								t.change_player_number = {
									player_number: 0,
								};
							}
							const r =
								y?.controller_action?.action != e.key
									? (0, Localize)(e.id)
									: JD(y.controller_action, v, T);
							return {
								label: r ?? Xt(e.id),
								data: {
									type: a.N.k_EControllerBindingType_ControllerAction,
									controller_action: t,
								},
							};
						}).filter((e) => e != null)),
				},
			)
			.filter((e) => e != null);
		var y;
		var v;
		var T;
		const R = Ld(_);
		let F = R?.find((e) =>
			q8(o >= 0 ? activator?.bindings[o] : undefined, e.data),
		);
		if (i?.controller_action?.action !== undefined && F) {
			F.data.controller_action = i.controller_action;
		}
		if (F) {
			F.data.key_binding_data = i?.key_binding_data;
		}
		const {
			bIsExtraBinding,
			bHasBinding,
			bAllowBindingRevert,
			bIsExtraBindingOnCycle,
			bAllowVirtualMenuOptions,
		} = Y(o);
		let Z = <Oe dropDownValue={F} bHideFriendlyName={e.bActivatorsGrouped} />;
		if (i?.type == a.N.k_EControllerBindingType_Modeshift) {
			return <></>;
		}
		if (!bHasBinding) {
			Z = (0, Localize)(
				"#ControllerConfigurator_Activator_ContextMenuItem_AddCommand_Title",
			);
		}
		const $ = kF(eControllerMode);
		let te = -1;
		if ($ && input.key >= 29 && input.key <= 49) {
			te = input.key - 29;
		}
		const re = (
			<div
				className={A_1(
					u.FlexFlowRow,
					bIsExtraBindingOnCycle && u.ExtraBindingForCycle,
					x == "right" && u.RightLabelAlignment,
				)}
			>
				{bIsExtraBindingOnCycle && <E.HierarchyRowEnd />}
				{!e.bActivatorsGrouped && (
					<g.VF
						eControllerType={A.v3.EditingConfiguration?.controller_type}
						eInput={_H(input.key)}
						eMode={eControllerMode}
						eSource={eControllerSource}
					/>
				)}
				{e.bActivatorsGrouped && (
					<De
						activatorIndex={activatorIndex}
						bIsActivatorSetToCycle={ne}
						bIsExtraBinding={bIsExtraBinding}
					/>
				)}
				<div className={u.ActivatorText}>
					{activator == null ||
					activator.activation === 1 ||
					(activator.activation === 2 &&
						input.key === 13 &&
						yQ(eControllerSource))
						? ""
						: bj(d.VD[activator.activation].id) ||
							Xt(d.VD[activator.activation].id)}
				</div>
			</div>
		);
		const ie =
			(e.indentLevel ?? 0) +
			(bIsExtraBinding && !bIsExtraBindingOnCycle ? 2 : 0);
		const ae = layerActionSet
			? baseActionSet.source_bindings?.find((e) => e.key == eControllerSource)
					?.active_group
			: undefined;
		if (
			$ &&
			!input.inherited_from_parentset &&
			!((e, t, r) => {
				if (r < 30 || r > 49) {
					return true;
				}
				const n = Kw(e);
				for (let e = 0; e < n.inputs.length; e++) {
					if (
						n.inputs[e].key == r &&
						n.inputs[e].activators?.length &&
						n.inputs[e].activators[0].bindings?.length
					) {
						return true;
					}
				}
				if (t) {
					const e = Kw(t);
					for (let t = 0; t < e.inputs.length; t++) {
						if (
							e.inputs[t].key >= r &&
							e.inputs[t].activators?.length &&
							e.inputs[t].activators[0].bindings?.length
						) {
							return true;
						}
					}
				}
				return false;
			})(modeid, ae?.modeid, input.key)
		) {
			return null;
		}
		const le =
			!e.bActivatorsGrouped && $ && R0(input.key) && !bIsExtraBinding && !j;
		const ce =
			(bHasBinding || bAllowVirtualMenuOptions) &&
			i?.key_binding_data?.icon_data?.icon_filename != ""
				? i.key_binding_data.icon_data
				: undefined;
		return (
			<s.D0
				label={re}
				key={o < 0 ? 0 : o}
				id={`modeid-${modeid}-input-${b.$L(input.key)}-binding-${o}`}
				onContextMenu={A.v3.IsUpdatingEditingConfiguration || ((e) => J(o, e))}
				childrenContainerWidth={e.childrenContainerWidth ?? "fixed"}
				indentLevel={ie}
				inlineWrap="keep-inline"
				bottomSeparator={bottomSeparator}
				onFocusWithin={(e) => {
					if (e) {
						A.v3.SetVirtualMenuPreviewKey(te);
					}
				}}
				onMouseOver={() => {
					if (C.oy.ActiveNavigationMode == C.DT.Cursor) {
						A.v3.SetVirtualMenuPreviewKey(te);
					}
				}}
			>
				<f.Z
					className={A_1(u.BindingButtons, le && u.HasIcons)}
					retainFocus
					navEntryPreferPosition={M.iU.PREFERRED_CHILD}
				>
					{le && (
						<s.$n
							onClick={(e) =>
								((e, t, r, i) => {
									pg(
										<Q
											onOK={(t) => oe(e, t)}
											onRemove={() => oe(e, undefined)}
											appID={t}
											selectedIcon={r}
										/>,
										i,
									);
								})(o, U, ce, GetOwningWindowForEvent(e))
							}
							className={A_1(u.BindingButton, u.BindingIconButton, z)}
							disabled={!bHasBinding && !bAllowVirtualMenuOptions}
							noFocusRing={false}
						>
							<Ee_1
								filenameOrURI={ce?.icon_url ?? ce?.icon_filename}
								background={ce?.color_background}
								foreground={ce?.color_foreground}
							/>
						</s.$n>
					)}
					<s.$n
						onClick={() => {
							(() => {
								const e = {
									action_set_key: baseActionSet.key,
									action_set_layer_key: layerActionSet?.key,
									source_binding_key: eControllerSource,
									source_mode: eControllerMode,
									input_key: input.key,
									activator_index: activatorIndex,
									binding_index: o,
									modeid: modeid,
									mode_shift: modeShift,
								};
								A.v3.SetEditedInputBinding(i);
								A.v3.SetActiveInputBinding(e);
								A.v3.Navigate(
									W,
									I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(U),
								);
							})();
						}}
						className={A_1(
							u.BindingButton,
							z,
							!bHasBinding && u.AddBindingText,
						)}
						onSecondaryButton={() => X(o)}
						onSecondaryActionDescription={
							bAllowBindingRevert ? (0, Localize)(K(o)) : undefined
						}
						onMenuButton={(e) =>
							((e) => {
								const a = {
									action_set_key: baseActionSet.key,
									action_set_layer_key: layerActionSet?.key,
									source_binding_key: eControllerSource,
									source_mode: eControllerMode,
									input_key: input.key,
									activator_index: activatorIndex,
									binding_index: o,
									modeid: modeid,
									mode_shift: modeShift,
								};
								A.v3.SetEditedInputBinding(i);
								A.v3.SetActiveInputBinding(a);
								pg(<_e appid={U} />, e, {});
							})(GetOwningWindowForEvent(e))
						}
						onMenuActionDescription={(0, Localize)(
							"#ControllerConfigurator_Listen",
						)}
						preferredFocus
						autoFocus={A.v3.BControllerConfiguratorIsMatchingFocusInput(
							input.key,
						)}
					>
						{Z}
					</s.$n>
					<s.$n
						className={u.BindingOptionsButton}
						disabled={!bAllowBindingRevert}
						focusable={bAllowBindingRevert}
						onClick={(e) => J(o, e)}
					>
						<E.Settings />
					</s.$n>
				</f.Z>
			</s.D0>
		);
	};
	const ce = activator?.bindings;
	return (
		<>
			{ce && ce.length != 0 ? ce.map((e, t) => le(e, t)) : [le(undefined, -1)]}
		</>
	);
});
function Fe(e, t) {
	return t?.map((t) => ({
		label: <div className={u.GameActionName}>{t.display_name}</div>,

		data: {
			type: a.N.k_EControllerBindingType_GameAction,
			game_action: {
				action_set_key: e,
				action_key: t.key,
			},
		},
	}));
}
function Ge(e) {
	return (
		<div className={u.BindingDisplayName}>
			<div className={u.FriendlyName}>{ye(e.friendlyName)}</div>
			<div className={u.Binding}>{e.bindingLabel}</div>
		</div>
	);
}
function Oe(e) {
	const { dropDownValue, bHideFriendlyName } = e;
	let i = dropDownValue?.data;
	const a = A.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const s = A.v3.EditingConfiguration?.sets[a];
	let o = n.useMemo(() => {
		const e = A.v3.EditingConfiguration?.sets;
		const t = !K7(e);
		if (i?.controller_action?.action !== undefined) {
			return JD(i?.controller_action, t ? e : undefined, s?.layers);
		}
	}, [i, s]);
	if (o) {
		if (!bHideFriendlyName && i?.key_binding_data?.friendly_name_utf8) {
			return (
				<Ge
					friendlyName={i?.key_binding_data.friendly_name_utf8}
					bindingLabel={(0, Localize)(o)}
				/>
			);
		} else {
			return <>{o}</>;
		}
	}
	if (dropDownValue?.label) {
		if (i?.key_binding_data?.friendly_name_utf8) {
			if (i?.game_action?.action_key) {
				if (i?.key_binding_data?.friendly_name_utf8.charAt(0) == "#") {
					return <>{dropDownValue.label}</>;
				} else {
					return <>{ye(i?.key_binding_data?.friendly_name_utf8)}</>;
				}
			} else if (bHideFriendlyName) {
				return <>{(0, Localize)(dropDownValue.label)}</>;
			} else {
				return (
					<Ge
						friendlyName={i?.key_binding_data.friendly_name_utf8}
						bindingLabel={(0, Localize)(dropDownValue.label)}
					/>
				);
			}
		}
		let e =
			typeof dropDownValue.label == "string" ? dropDownValue.label : undefined;
		if (e?.charAt(0) == "#") {
			return <>{(0, Localize)(dropDownValue.label)}</>;
		} else {
			return <>{dropDownValue.label}</>;
		}
	}
	return null;
}
const Pe = [
	{
		label: "Keyboard",
		options: d.bu.map((e) => ({
			label: e.id,

			data: {
				type: a.N.k_EControllerBindingType_Key,
				keyboard_key: {
					key: e.key,
				},
			},
		})),
	},
	{
		label: "Mouse",
		options: d.Q7.map((e) =>
			e.button
				? {
						label: e.id,
						data: {
							type: a.N.k_EControllerBindingType_MouseButton,
							mouse_button: {
								button: e.key,
							},
						},
					}
				: e.wheel
					? {
							label: e.id,
							data: {
								type: a.N.k_EControllerBindingType_Mousewheel,
								mouse_wheel: {
									button: e.key,
								},
							},
						}
					: undefined,
		),
	},
	{
		label: "Gamepad",
		options: d.HL.map((e) => ({
			label: e.id,

			data: {
				type: a.N.k_EControllerBindingType_Gamepad,
				gamepad_button: {
					button: e.key,
				},
			},
		})),
	},
];
export function dI(e, t) {
	const r = []
		.concat(
			Fe(t?.key, U$(t, 2)),
			Fe(t?.key, U$(t, 1)),
			Fe(e?.key, U$(e, 2)),
			Fe(e?.key, U$(e, 1)),
			Pe,
		)
		.filter((e) => e != null);
	return Ld(r);
}
export function M0(e, t, r, n, i, a, s, l, c) {
	h5(() => {
		const o = {
			action_set_key: n.key,
			action_set_layer_key: i?.key,
			source_binding_key: t,
			input_key: r.key,
			activator_index: a,
			modeid: l,
			mode_shift: c,
			new_activation: undefined,
		};
		if (s != null) {
			o.new_activation = s;
		}
		A.v3.SetControllerInputActivator(e, o);
	});
}
export function zB(e, t, r, n, i, a, s, l) {
	h5(() => {
		const o = {
			action_set_key: n.key,
			action_set_layer_key: i?.key,
			source_binding_key: t,
			input_key: r.key,
			activator_index: a,
			enabled: s,
			mode_shift: l,
		};
		A.v3.SetControllerInputActivatorEnabled(e, o);
	});
}
export function es(e) {
	h5(() => {
		A.v3.SaveEditingConfiguration(e);
		A.v3.EnsureEditingConfiguration();
	});
}
function We(e) {
	const {
		activator,
		activatorIndex,
		baseActionSet,
		layerActionSet,
		eControllerSource,
		input,
		appid,
		modeid,
		modeShift,
	} = e;
	return (
		<B.eV onOK={e.closeModal} onCancel={e.closeModal}>
			<s.Y9>
				{(0, Localize)(
					"#ControllerConfigurator_Input_Settings",
					bj(d.VD[activator?.activation]?.id),
				)}
			</s.Y9>
			<s.nB>
				<s.a3>
					{A.v3.CurrentEditedActivator.settings?.map((e, t) => (
						<Re
							key={t}
							baseActionSet={baseActionSet}
							layerActionSet={layerActionSet}
							eControllerSource={eControllerSource}
							eControllerModeInput={input.key}
							activatorIndex={activatorIndex}
							mapKey={e.key}
							bottomSeparator="standard"
							appid={appid}
							modeid={modeid}
							modeShift={modeShift}
						/>
					))}
					<s.X8 alignItems="center">
						<s.jn onClick={e.closeModal}>
							{(0, Localize)("#Generic_Close")}
						</s.jn>
					</s.X8>
				</s.a3>
			</s.nB>
		</B.eV>
	);
}
const Ve = PA((e) => {
	LC(false);
	const {
		appid,
		controllerType,
		source,
		group,
		filteredInputs,
		actionSet,
		actionSetLayer,
		closeModal,
	} = e;
	const [m, setM] = n.useState([]);
	n.useEffect(() => {
		let e = [];
		filteredInputs.forEach((t) => {
			e[t.key] = t.key;
		});
		setM(e);
	}, [filteredInputs]);
	if (m.length == 0) {
		return null;
	}
	const p = filteredInputs
		.sort((e, t) => m[e.key] - m[t.key])
		.map((e, t) => {
			const s =
				e?.activators?.length > 0 &&
				e?.activators[0]?.bindings.length > 0 &&
				e?.activators[0]?.bindings[0]?.controller_action?.action != 43;
			const c = group.mode == 14 ? e.key - 29 : 2 + e.key - 30;
			let u;
			if (s) {
				let t = e?.activators[0]?.bindings[0];
				u = ye(t?.key_binding_data?.friendly_name_utf8);
				const r = dI(actionSet, actionSetLayer);
				let i = s && r?.find((t) => q8(e?.activators[0]?.bindings[0], t.data));
				if (t?.controller_action?.action !== undefined && i) {
					i.data.controller_action = t.controller_action;
				}
				if (i) {
					i.data.key_binding_data = t?.key_binding_data;
				}
				u = <Oe dropDownValue={i} />;
			}
			const A = u ?? (
				<g.VF
					eControllerType={controllerType}
					eInput={_H(e.key)}
					eMode={group.mode}
					eSource={source}
				/>
			);
			return {
				key: e.key.toString(),
				label: A,
				icon: null,
				index: m[e.key],
				disabled: false,
				displayedIndex: c,
			};
		});
	return (
		<re.o
			title={(0, Localize)("#ControllerMode_ReorderInputs_Title")}
			items={p}
			onMoveRelative={(e, t) => {
				let r = m.findIndex((t) => t == e);
				let n = m.findIndex((r) => r == e + t);
				if (n < 29 || n > 49) {
					return false;
				}
				let i = [...m];
				let m_r = m[r];
				i[r] = m[n];
				i[n] = m_r;
				setM(i);
				return true;
			}}
			onReorderActionDescription={(0, Localize)(
				"#ControllerMode_ReorderInputs_Reorder",
			)}
			onStopReorderActionDescription={(0, Localize)(
				"#ControllerMode_ReorderInputs_StopReorder",
			)}
			closeModal={() => {
				let r = [];
				m.forEach((e, t) => {
					if (e == t || r.find((t) => t.new_key == e)) {
						return;
					}
					const n = {
						new_key: e,
						old_key: t,
					};
					r.push(n);
				});
				let n = {
					action_set_key: actionSet.key,
					action_set_layer_key: actionSetLayer?.key,
					source_binding_key: source,
					mode_shift: false,
					modeid: group.modeid,
					swaps: r,
				};
				A.v3.ReOrderModeInputs(appid, n);
				A.v3.SaveEditingConfiguration(appid);
				A.v3.EnsureEditingConfiguration();
				if (e.closeModal) {
					e.closeModal();
				}
			}}
		/>
	);
});
