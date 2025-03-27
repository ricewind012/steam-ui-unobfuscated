import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./10606.js";
import s, { A as A_1 } from "./90765.js";
import _o from "./69164.js";
import l from "./61657.js";
import c from "./80517.js";
import d from "./35488.js";
import A from "./4690.js";
import p from "./10975.js";
import g from "./44351.js";
const m = c;
function H(e) {
	const [t, setT] = n.useState(undefined);
	const i = (() => {
		const ERef = n.useRef(new Map());
		return n.useCallback((t) => {
			if (!ERef.current.has(t)) {
				ERef.current.set(t, n.createRef());
			}
			return ERef.current.get(t);
		}, []);
	})();
	const a = t != null;
	const s = (e) => {
		setT(e?.key);
	};
	const c = (r) => {
		if (a) {
			let n;
			switch (r.detail.button) {
				case l.pR.DIR_UP: {
					n = -1;
					break;
				}
				case l.pR.DIR_DOWN: {
					n = 1;
					break;
				}
				default: {
					return false;
				}
			}
			if (
				((r) => {
					const n = e.items.find((e) => e.key == t);
					try {
						return (
							e.onMoveRelative != null &&
							n != null &&
							e.onMoveRelative(n.index, r)
						);
					} catch (e) {
						console.error("Failed to reorder item:", e);
						return false;
					}
				})(n)
			) {
				p.eZ.PlayNavSound(n > 0 ? p.PN.SliderUp : p.PN.SliderDown);
			} else {
				p.eZ.PlayNavSound(p.PN.FailedNav);
			}
			return true;
		}
		return false;
	};
	const m = [
		{
			name: undefined,
			label: undefined,
		},
		...(e.sections ?? []),
	].map((r, a) => ({
		strLabel: r.label,
		key: r.label ?? a,

		rgItems: e.items
			.filter((e) => e.sectionName == r.name)
			.map((r, a) => (
				<C
					key={r.key}
					detail={r}
					onSelect={() => s(r)}
					onDone={() => s(undefined)}
					selected={t == r.key}
					navRef={i(r.key)}
					bottomSeparator={a < e.items.length - 1}
					onGamepadDirection={c}
					onReorderActionDescription={e.onReorderActionDescription}
					onStopReorderActionDescription={e.onStopReorderActionDescription}
				/>
			)),
	}));
	const URef = n.useRef();
	n.useEffect(() => {
		if (a && URef.current?.BFocusWithin()) {
			const e = i(t).current;
			if (e && !e.BHasFocus()) {
				e.TakeFocus();
			}
		} else if (URef.current?.BFocusWithin() == 0) {
			URef.current.TakeFocus();
		}
	});
	return (
		<_o.Z
			retainFocus
			navRef={URef}
			navEntryPreferPosition={a ? A.iU.PREFERRED_CHILD : A.iU.MAINTAIN_Y}
		>
			{m.map(
				({ strLabel, key, rgItems }) =>
					rgItems.length == 0 || (
						<n.Fragment key={key}>
							{strLabel && <g.lr>{strLabel}</g.lr>}
							{rgItems}
						</n.Fragment>
					),
			)}
		</_o.Z>
	);
}
function C(e) {
	const t =
		e.onReorderActionDescription ?? (0, Localize)("#ActionButtonLabelReorder");
	const r =
		e.onStopReorderActionDescription ?? (0, Localize)("#ActionButtonLabelDone");
	const a = e.detail.disabled ?? false;
	const o =
		e.detail.displayedIndex === undefined
			? e.detail.index
			: e.detail.displayedIndex;
	return (
		<i.D0
			focusable={!a}
			icon={
				<div className={m.ReorderableListIconIndexCtr}>
					<div
						className={A_1(m.ReorderableListIndexCtr, e.selected && m.Selected)}
					>
						<d.Carat direction="up" className={m.ReorderArrow} />
						<div
							className={m.ReorderableListIndex}
							style={{
								backgroundColor: e.detail.indexColor,
							}}
						>
							{o}
						</div>
						<d.Carat direction="down" className={m.ReorderArrow} />
					</div>
					{e.detail.icon}
				</div>
			}
			label={<div className={m.ReorderableListItemLabel}>{e.detail.label}</div>}
			className={A_1(
				m.ReorderableListItem,
				e.selected && m.Selected,
				a && m.Disabled,
			)}
			disabled={a}
			highlightOnFocus={!e.selected}
			bottomSeparator={e.bottomSeparator && !e.selected ? "standard" : "none"}
			onClick={e.detail.disabled ? null : e.selected ? e.onDone : e.onSelect}
			onCancel={e.selected ? e.onDone : undefined}
			onOKActionDescription={e.selected ? r : t}
			onCancelActionDescription={e.selected || undefined}
			onOptionsButton={e.detail.onOptionsButton}
			onOptionsActionDescription={e.detail.onOptionsActionDescription}
			onSecondaryButton={e.detail.onSecondaryButton}
			onSecondaryActionDescription={e.detail.onSecondaryActionDescription}
			onGamepadDirection={e.onGamepadDirection}
			navRef={e.navRef}
			navKey={e.detail.key}
			preferredFocus={e.selected}
		/>
	);
}
export function o(e) {
	const { closeModal, title, className, ...c } = e;
	return (
		<a.eV
			className={A_1(m.ReorderableListDialog, className)}
			onCancel={closeModal}
		>
			<_o.Z onCancel={closeModal}>
				<div className={m.ModalHeader}>
					<i.Y9>{title}</i.Y9>
					<_o.Z
						focusable
						className={m.CloseButtonContainer}
						onActivate={closeModal}
					>
						<d.Close className={m.CloseButton} />
					</_o.Z>
				</div>
				<i.nB>
					<i.a3>
						<H {...c} />
					</i.a3>
				</i.nB>
			</_o.Z>
		</a.eV>
	);
}
