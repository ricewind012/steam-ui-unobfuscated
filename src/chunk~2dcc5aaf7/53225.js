var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./10606.js");
var s = require(/*webcrack:missing*/ "./90765.js");
var _o = require(/*webcrack:missing*/ "./69164.js");
var l = require(/*webcrack:missing*/ "./61657.js");
var c = require("./80517.js");
var m = c;
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require("./35488.js");
var A = require(/*webcrack:missing*/ "./4690.js");
var p = require(/*webcrack:missing*/ "./10975.js");
var g = require("./44351.js");
function h(e) {
	const [t, r] = n.useState(undefined);
	const i = (function () {
		const e = n.useRef(new Map());
		return n.useCallback((t) => {
			if (!e.current.has(t)) {
				e.current.set(t, n.createRef());
			}
			return e.current.get(t);
		}, []);
	})();
	const a = t != null;
	const s = (e) => {
		r(e?.key);
	};
	const c = (r) => {
		if (a) {
			let n;
			switch (r.detail.button) {
				case l.pR.DIR_UP:
					n = -1;
					break;
				case l.pR.DIR_DOWN:
					n = 1;
					break;
				default:
					return false;
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
			.map((r, a) =>
				n.createElement(C, {
					key: r.key,
					detail: r,
					onSelect: () => s(r),
					onDone: () => s(undefined),
					selected: t == r.key,
					navRef: i(r.key),
					bottomSeparator: a < e.items.length - 1,
					onGamepadDirection: c,
					onReorderActionDescription: e.onReorderActionDescription,
					onStopReorderActionDescription: e.onStopReorderActionDescription,
				}),
			),
	}));
	const u = n.useRef();
	n.useEffect(() => {
		if (a && u.current?.BFocusWithin()) {
			const e = i(t).current;
			if (e && !e.BHasFocus()) {
				e.TakeFocus();
			}
		} else if (u.current?.BFocusWithin() == 0) {
			u.current.TakeFocus();
		}
	});
	return n.createElement(
		_o.Z,
		{
			retainFocus: true,
			navRef: u,
			navEntryPreferPosition: a ? A.iU.PREFERRED_CHILD : A.iU.MAINTAIN_Y,
		},
		m.map(({ strLabel: e, key: t, rgItems: r }) =>
			r.length == 0
				? null
				: n.createElement(
						n.Fragment,
						{
							key: t,
						},
						e && n.createElement(g.lr, null, e),
						r,
					),
		),
	);
}
function C(e) {
	const t =
		e.onReorderActionDescription ?? (0, u.we)("#ActionButtonLabelReorder");
	const r =
		e.onStopReorderActionDescription ?? (0, u.we)("#ActionButtonLabelDone");
	const a = e.detail.disabled ?? false;
	const o =
		e.detail.displayedIndex === undefined
			? e.detail.index
			: e.detail.displayedIndex;
	return n.createElement(i.D0, {
		focusable: !a,
		icon: n.createElement(
			"div",
			{
				className: m.ReorderableListIconIndexCtr,
			},
			n.createElement(
				"div",
				{
					className: (0, s.A)(
						m.ReorderableListIndexCtr,
						e.selected && m.Selected,
					),
				},
				n.createElement(d.Carat, {
					direction: "up",
					className: m.ReorderArrow,
				}),
				n.createElement(
					"div",
					{
						className: m.ReorderableListIndex,
						style: {
							backgroundColor: e.detail.indexColor,
						},
					},
					o,
				),
				n.createElement(d.Carat, {
					direction: "down",
					className: m.ReorderArrow,
				}),
			),
			e.detail.icon,
		),
		label: n.createElement(
			"div",
			{
				className: m.ReorderableListItemLabel,
			},
			e.detail.label,
		),
		className: (0, s.A)(
			m.ReorderableListItem,
			e.selected && m.Selected,
			a && m.Disabled,
		),
		disabled: a,
		highlightOnFocus: !e.selected,
		bottomSeparator: e.bottomSeparator && !e.selected ? "standard" : "none",
		onClick: e.detail.disabled ? null : e.selected ? e.onDone : e.onSelect,
		onCancel: e.selected ? e.onDone : undefined,
		onOKActionDescription: e.selected ? r : t,
		onCancelActionDescription: e.selected ? null : undefined,
		onOptionsButton: e.detail.onOptionsButton,
		onOptionsActionDescription: e.detail.onOptionsActionDescription,
		onSecondaryButton: e.detail.onSecondaryButton,
		onSecondaryActionDescription: e.detail.onSecondaryActionDescription,
		onGamepadDirection: e.onGamepadDirection,
		navRef: e.navRef,
		navKey: e.detail.key,
		preferredFocus: e.selected,
	});
}
export function o(e) {
	const { closeModal: t, title: r, className: l, ...c } = e;
	return n.createElement(
		a.eV,
		{
			className: (0, s.A)(m.ReorderableListDialog, l),
			onCancel: t,
		},
		n.createElement(
			_o.Z,
			{
				onCancel: t,
			},
			n.createElement(
				"div",
				{
					className: m.ModalHeader,
				},
				n.createElement(i.Y9, null, r),
				n.createElement(
					_o.Z,
					{
						focusable: true,
						className: m.CloseButtonContainer,
						onActivate: t,
					},
					n.createElement(d.Close, {
						className: m.CloseButton,
					}),
				),
			),
			n.createElement(
				i.nB,
				null,
				n.createElement(
					i.a3,
					null,
					n.createElement(h, {
						...c,
					}),
				),
			),
		),
	);
}
