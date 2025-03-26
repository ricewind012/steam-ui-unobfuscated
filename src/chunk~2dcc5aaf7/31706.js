var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./14629.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require("./96000.js");
var c = require("./61175.js");
var m = require("./64608.js");
var u = require("./10606.js");
var d = require("./13869.js");
var A = require(/*webcrack:missing*/ "./69164.js");
import {
	LocalizeReact,
	Localize,
} from "../../actual_src/utils/localization.js";
var g = require(/*webcrack:missing*/ "./52451.js");
var h = require("./1634.js");
var C = h;
var _ = require("./34348.js");
var f = _;
var b = require("./46217.js");
var y = require("./32598.js");
var S = require("./18869.js");
export function x2(e, t, r) {
	const n = i.createElement(
		"span",
		{
			className: C.DynamicHeader,
		},
		LocalizeReact(
			"#FilterEdit_SaveDynamicCollectionWithIcon",
			i.createElement(b.Qi, null),
		),
	);
	const a = (0, Localize)("#FilterEdit_SaveDynamicCollectionNoIcon");
	return (0, d.pg)(
		i.createElement(v, {
			ownerWindow: e,
			rctTitle: n,
			appFilter: r,
			strCollectionSummary: t,
			strStatsTag: "saved-search",
		}),
		e,
		{
			strTitle: a,
		},
	);
}
export function oy(e, t, r) {
	const n = (0, Localize)("#GameAction_NewCollectionDialogTitle");
	(0, d.pg)(
		i.createElement(v, {
			ownerWindow: e,
			rctTitle: n,
			rgManuallyAddedApps: t,
			strStatsTag: r,
		}),
		e,
		{
			strTitle: n,
		},
	);
}
const v = (0, a.PA)(function (e) {
	let {
		ownerWindow: t,
		rctTitle: r,
		appFilter: n,
		rgManuallyAddedApps: a,
		strCollectionSummary: g,
		strStatsTag: h,
		closeModal: _,
	} = e;
	let [b, w] = i.useState(false);
	let [B, v] = i.useState(g && g.length <= 32 ? g : "");
	let [M, T] = i.useState(null);
	const R = (0, S.br)().Collection;
	i.useEffect(
		() => () => {
			if (M) {
				clearTimeout(M);
			}
		},
		[M],
	);
	const k = i.useCallback(
		(e) => {
			v(e.currentTarget.value);
		},
		[v],
	);
	const D = i.useCallback(
		(e) => {
			if (_) {
				_();
			}
			c.n6.ExitSearch();
			R(e.id);
			if (e.internalAppFilter && !n) {
				c.n6.SetCollectionEditorOpen(true);
			}
			SteamClient.Stats.RecordActivationEvent("NewCollection", h);
			if (
				c.n6.selectedGameListView == 1 &&
				(!c.n6.bIsGameListGroupedByCollection || c.n6.bIsGameListSortedByRecent)
			) {
				const e = () => {
					c.n6.SelectGameListView(1);
					c.n6.SetGameListGroupedByCollection(true);
					c.n6.SetGameListSortedByRecent(false);
				};
				(0, d.pg)(
					i.createElement(u.o0, {
						strTitle: (0, Localize)("#FilterEdit_CollectionsHiddenPromptTitle"),
						strDescription: (0, Localize)(
							"#FilterEdit_CollectionsHiddenPrompt",
						),
						strOKButtonText: (0, Localize)(
							"#FilterEdit_AcceptGameListViewChange",
						),
						onOK: e,
						strCancelButtonText: (0, Localize)(
							"#FilterEdit_RejectGameListViewChange",
						),
						onCancel: () => null,
					}),
					t,
					{
						strTitle: (0, Localize)("#FilterEdit_CollectionsHiddenPromptTitle"),
					},
				);
			}
		},
		[_, n, h, t, R],
	);
	const N = i.useCallback(
		(r) => {
			let n = e.appFilter;
			if (r && !n) {
				n = new s.E6();
			}
			const i = l.md.NewUnsavedCollection(B.trim(), n, a || []);
			sp(t, i, false, () => D(i));
		},
		[e.appFilter, a, t, B, D],
	);
	const F = i.useCallback(() => {
		w(true);
		T(
			window.setTimeout(() => {
				w(false);
			}, 300),
		);
	}, [w, T]);
	const G = B.trim().length == 0;
	const O = !!n;
	const P = O
		? i.createElement(m.CB, {
				bOKDisabled: G,
				strOKText: (0, Localize)("#Button_Save"),
				onCancel: _,
			})
		: i.createElement(
				i.Fragment,
				null,
				i.createElement(
					m.JU,
					{
						style: {
							marginTop: 16,
						},
					},
					(0, Localize)("#FilterEdit_SelectCollectionType"),
				),
				i.createElement(
					A.Z,
					{
						className: C.TwoOptionsContainer,
						onClick: F,
						"flow-children": "row",
					},
					i.createElement(I, {
						isdynamic: false,
						disabled: G,
						onClick: () => N(false),
					}),
					i.createElement(I, {
						isdynamic: true,
						disabled: G,
						onClick: () => N(true),
					}),
				),
			);
	return i.createElement(
		u.eV,
		{
			className: C.SaveCollectionContainer,
			onOK: () => N(false),
			bOKDisabled: G,
			onCancel: _,
		},
		i.createElement(m.Y9, null, r),
		i.createElement(
			m.nB,
			null,
			i.createElement(
				m.a3,
				null,
				O &&
					i.createElement(
						m.JU,
						{
							className: C.SelectedFilters,
						},
						(0, Localize)("#FilterEdit_SelectedFilters"),
					),
				O &&
					i.createElement(
						"div",
						{
							className: (0, o.A)(C.CollectionSummary, f.SearchFilterInput),
						},
						(0, y.wf)(n, undefined, undefined),
					),
				i.createElement(
					"div",
					{
						className: C.InputContainer,
					},
					i.createElement(
						m.JU,
						null,
						(0, Localize)("#FilterEdit_SaveCollectionNameInputPrompt"),
					),
					i.createElement(
						m.JU,
						{
							className: (0, o.A)(C.Required, G && C.Visible, b && C.Pulse),
						},
						(0, Localize)("#FilterEdit_RequiredField"),
					),
				),
				i.createElement(m.pd, {
					value: B,
					onChange: k,
					maxLength: 32,
					autoFocus: true,
					bShowClearAction: true,
				}),
				O &&
					i.createElement(
						"div",
						{
							className: C.SaveSearchDescription,
						},
						" ",
						(0, Localize)("#FilterEdit_SaveCollectionVerbose"),
						" ",
					),
				O &&
					i.createElement(
						"div",
						{
							className: C.SaveSearchDescription,
						},
						" ",
						(0, Localize)("#FilterEdit_SaveDynamicCollectionButtonDesc"),
						" ",
					),
			),
			i.createElement(m.wi, null, P),
		),
	);
});
class I extends i.Component {
	render() {
		let e = this.props.isdynamic
			? (0, Localize)("#FilterEdit_SaveDynamicCollectionButtonDesc")
			: (0, Localize)("#FilterEdit_SaveStandardCollectionButtonDesc");
		let t = this.props.isdynamic
			? i.createElement(
					"span",
					null,
					i.createElement(b.Qi, null),
					(0, Localize)("#FilterEdit_SelectCollectionTypeButtonCreateDynamic"),
				)
			: (0, Localize)("#FilterEdit_SelectCollectionTypeButtonCreate");
		return i.createElement(
			"div",
			{
				className: (0, o.A)(C.Option, this.props.disabled && C.Disabled),
			},
			i.createElement(
				m.$n,
				{
					className: C.ActionLabel,
					onClick: this.props.onClick,
					tabIndex: this.props.disabled ? -1 : 0,
				},
				t,
			),
			i.createElement(
				"div",
				{
					className: C.Description,
				},
				e,
			),
		);
	}
}
export async function sp(e, t, r, n, a) {
	const s = (0, Localize)(
		t.bIsDynamic
			? "#FilterEdit_SaveDynamicCollectionNoIcon"
			: "#FilterEdit_SaveCollection",
	);
	if (
		l.md.BIsSystemCollectionName(t.displayName) ||
		l.md.BIsPartnerCollectionName(t.displayName)
	) {
		(0, d.pg)(
			i.createElement(u.KG, {
				strDescription: (0, Localize)(
					"#CollectionAction_CannotOverwrite",
					t.displayName,
				),
			}),
			e,
			{
				strTitle: s,
			},
		);
		if (a) {
			a();
		}
		return;
	}
	const o = l.md
		.GetUserCollectionsByName(t.displayName)
		.some((e) => e.id != t.id);
	if (r || !o) {
		try {
			await t.Save();
			if (n) {
				n();
			}
		} catch (r) {
			(0, d.pg)(
				i.createElement(u.KG, {
					strDescription: (0, Localize)(
						"#CollectionAction_SaveFailed",
						t.displayName,
					),
				}),
				e,
				{
					strTitle: s,
				},
			);
			if (a) {
				a();
			}
		}
	} else {
		(0, d.pg)(
			i.createElement(M, {
				collection: t,
				ownerWindow: e,
				onOK: n,
				onCancel: a,
			}),
			e,
			{
				strTitle: s,
			},
		);
	}
}
let M = class extends i.Component {
	OnSuccessfulSave() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
		if (this.props.onOK) {
			this.props.onOK();
		}
	}
	OnCancel() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
		if (this.props.onCancel) {
			this.props.onCancel();
		}
	}
	SaveCollection() {
		sp(
			this.props.ownerWindow,
			this.props.collection,
			true,
			this.OnSuccessfulSave,
			this.OnCancel,
		);
	}
	render() {
		const e = (0, Localize)(
			this.props.collection.bIsDynamic
				? "#FilterEdit_SaveDynamicCollectionNoIcon"
				: "#FilterEdit_SaveCollection",
		);
		return i.createElement(u.o0, {
			strTitle: e,
			bDestructiveWarning: true,
			strDescription: (0, Localize)(
				"#FilterEdit_SaveOverwrite",
				this.props.collection.displayName,
			),
			onOK: this.SaveCollection,
			onCancel: this.OnCancel,
		});
	}
};
(0, n.Cg)([g.oI], M.prototype, "OnSuccessfulSave", null);
(0, n.Cg)([g.oI], M.prototype, "OnCancel", null);
(0, n.Cg)([g.oI], M.prototype, "SaveCollection", null);
M = (0, n.Cg)([a.PA], M);
