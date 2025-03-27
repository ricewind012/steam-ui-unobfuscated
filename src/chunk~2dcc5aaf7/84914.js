import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./35488.js";
import a, { PA } from "./41230.js";
import s from "./86078.js";
import l from "./85360.js";
import c from "./43014.js";
import { A as A_1 } from "./90765.js";
import d from "./53622.js";
import A from "./12307.js";
import p from "./61657.js";
import g from "./69164.js";
import h from "./10975.js";
import { P4 } from "./52192.js";
const o = s;
export const eu = PA((e) => {
	const t = l.v3.EditingConfiguration;
	const r = l.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const a = l.v3.ControllerConfiguratorLayerSetIndex;
	const s = t?.sets[r];
	const A = s?.layers?.[a];
	if (e.bShowWhenOneActionSet === true || P4(t)) {
		return (
			<div
				className={A_1(
					e.className,
					o.ActionSetNameOverIndicators,
					e.disabled && o.ActionSetSelectorDisabled,
				)}
			>
				<div className={o.ActionSetNameAndGlyphs}>
					<div
						className={o.ActionSetGlyph}
						onClick={
							e.disabled ||
							(() =>
								l.v3.GoToRelativeEditingConfigurationActionSetInFlattenedList(
									-1,
								))
						}
					>
						<d.W button={c.g4.LeftBumper} />
					</div>
					<div className={o.ActionSetNameAndHeader}>
						<span className={o.ActionSetHeader}>
							{Localize("#ControllerConfigurator_ActionSet")}
						</span>
						<span className={A_1(o.ActionSetName, A && o.SetDisabled)}>
							{s?.display_name ??
								Localize("#ControllerConfigurator_ActionSets_UnnamedSet_Title")}
						</span>
						{A && (
							<div className={o.ActionSetLayer}>
								<i.Inventory />
								{A?.display_name ??
									Localize(
										"#ControllerConfigurator_ActionSets_UnnamedSet_Title",
									)}
							</div>
						)}
					</div>
					<div
						className={o.ActionSetGlyph}
						onClick={
							e.disabled ||
							(() =>
								l.v3.GoToRelativeEditingConfigurationActionSetInFlattenedList(
									1,
								))
						}
					>
						<d.W button={c.g4.RightBumper} />
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
});
export const dY = PA((e) => {
	const t = l.v3.EditingConfiguration;
	const r = l.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const a = l.v3.ControllerConfiguratorLayerSetIndex;
	const s = l.v3.GetFlattenedActionSets().map((e) => ({
		id: JSON.stringify([e.nActionSetIndex, e.nLayerIndex]),
		title: e.strName,
		icon: e.nLayerIndex == null || <i.Inventory />,
	}));
	const CRef = n.useRef(undefined);
	const [m, setM] = n.useState(false);
	const p = n.useCallback((e) => !!m && N(e), [m]);
	const HRef = n.useRef([r, a]);
	n.useEffect(() => {
		if (HRef.current[0] != r || HRef.current[1] != a) {
			if (m) {
				CRef.current?.TakeFocus();
			}
			HRef.current = [r, a];
		}
	}, [m, CRef, r, a]);
	const _ = n.useCallback((e) => {
		const [t, r] = JSON.parse(e);
		l.v3.SetControllerConfiguratorBaseSetIndex(t);
		l.v3.SetControllerConfiguratorLayerSetIndex(r);
	}, []);
	if (e.bShowWhenOneActionSet === true || P4(t)) {
		return (
			<g.Z
				className={A_1(e.className, o.ControllerSelectionContainer)}
				onFocusWithin={setM}
				onButtonDown={p}
			>
				<A.JZ
					tabs={s}
					activeTab={JSON.stringify([r, a])}
					onShowTab={_}
					showGlyphs={m || e.showGlyphs}
					bleedGlyphs={e.bleedGlpyhs}
					navRef={CRef}
					wrapAround={e.wrapAround}
				/>
			</g.Z>
		);
	} else {
		return null;
	}
});
export function N(e) {
	let t;
	if (e.detail.button == p.pR.BUMPER_LEFT) {
		t = -1;
	} else {
		if (e.detail.button != p.pR.BUMPER_RIGHT) {
			return false;
		}
		t = 1;
	}
	const r = l.v3.GoToRelativeEditingConfigurationActionSetInFlattenedList(t);
	h.eZ.PlayNavSound(r ? h.PN.ChangeTabs : h.PN.FailedNav);
	e.stopPropagation();
	return true;
}
