var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./72476.js");
var o = require("./96000.js");
var l = require("./61175.js");
var c = require("./14663.js");
var m = require(/*webcrack:missing*/ "./88750.js");
var u = require("./64608.js");
var d = require("./10606.js");
var _A = require("./13869.js");
var p = require(/*webcrack:missing*/ "./50376.js");
var g = require(/*webcrack:missing*/ "./49455.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var _ = require("./83628.js");
var f = _;
var b = require("./18057.js");
var y = require("./18869.js");
export const A = (0, a.PA)(function (e) {
	const { strCollectionId: t, strDisplayName: r, bOnlyManagement: a } = e;
	const c = (0, s.Qn)();
	const u = !!(0, i.W5)(b.BV.Library.Collection());
	const d = (0, y.br)().Collection;
	const p = l.n6.IsCollapsed(t)
		? (0, Localize)("#CollectionAction_Expand")
		: (0, Localize)("#CollectionAction_Collapse");
	const _ = o.md.GetCollection(t);
	let f = (0, Localize)("#CollectionAction_ViewOnlyThis");
	if (l.n6.selectedGameListView == 10) {
		f = (0, Localize)("#GameList_View_ShowAllCollections");
	} else if (_.id == o.A8.Favorites) {
		f = (0, Localize)("#CollectionAction_ViewOnlyThisFavorites");
	} else if (_.id == o.A8.Uncategorized) {
		f = (0, Localize)("#CollectionAction_ViewOnlyThisUncategorized");
	}
	const S = l.n6.BIsSearchActive();
	const B = l.n6.GetVisibleCollections().length > 1;
	const v = !c;
	return n.createElement(
		m.tz,
		null,
		!a &&
			n.createElement(
				m.kt,
				{
					onSelected: () => {
						if (l.n6.selectedGameListView == 10) {
							l.n6.SelectGameListView(1);
						} else {
							l.n6.SelectGameListView(10, t);
						}
					},
					disabled: S,
				},
				f,
			),
		_.bIsEditable &&
			_.bIsDynamic &&
			v &&
			n.createElement(
				m.kt,
				{
					onSelected: () => {
						d(t);
						l.n6.SetCollectionEditorOpen(true);
					},
				},
				(0, Localize)("#CollectionAction_Edit"),
			),
		_.bIsEditable &&
			v &&
			n.createElement(
				m.kt,
				{
					onSelected: () => {
						d(t);
						l.n6.SetCollectionRenameOpen(true);
					},
				},
				(0, Localize)("#CollectionAction_Rename"),
			),
		!a &&
			n.createElement(
				m.kt,
				{
					onSelected: () => {
						l.n6.toggleCollapsed(t);
					},
				},
				p,
			),
		_.bIsDeletable &&
			n.createElement(
				m.kt,
				{
					onSelected: (e) => {
						const i = o.md.GetCollection(t);
						(0, g.w)(
							i.bIsDeletable,
							`Collection '${i.displayName}' should be deletable.`,
						);
						(0, _A.pg)(
							n.createElement(w, {
								strDisplayName: r,
								strCollectionId: t,
								bViewingCollection: u,
							}),
							GetOwningWindowForEvent(e),
							{
								strTitle: (0, Localize)("#CollectionAction_DeleteDialog"),
							},
						);
					},
				},
				(0, Localize)("#CollectionAction_Delete"),
			),
		!a &&
			B &&
			n.createElement(
				m.kt,
				{
					onSelected: l.n6.ExpandAll,
				},
				(0, Localize)(
					l.n6.selectedGameListView == 11
						? "#CollectionAction_ExpandAll"
						: "#CollectionAction_ExpandAllCollections",
				),
			),
		!a &&
			B &&
			n.createElement(
				m.kt,
				{
					onSelected: l.n6.CollapseAll,
				},
				(0, Localize)(
					l.n6.selectedGameListView == 11
						? "#CollectionAction_CollapseAll"
						: "#CollectionAction_CollapseAllCollections",
				),
			),
	);
});
const w = (0, a.PA)((e) => {
	const {
		closeModal: t,
		strCollectionId: r,
		strDisplayName: i,
		bViewingCollection: a,
	} = e;
	const [s, m] = (0, n.useState)("");
	const A = (0, y.br)();
	if (s) {
		return n.createElement(d.KG, {
			strDescription: s,
			closeModal: t,
		});
	}
	let h = n.createElement(
		"span",
		{
			style: {
				color: "white",
				textTransform: "uppercase",
			},
		},
		i,
	);
	return n.createElement(
		d.eV,
		{
			bDestructiveWarning: true,
			className: f.CollectionDeleteContainer,
			onOK: async () => {
				try {
					t();
					if (l.n6.currentCollectionID == r) {
						if (l.n6.selectedGameListView == 10) {
							l.n6.SelectGameListView(1);
						}
						if (a) {
							A.Home();
						}
					}
					const e = o.md.GetCollection(r);
					(0, g.w)(
						e.bIsDeletable,
						`Collection '${e.displayName}' should be deletable.`,
					);
					await e.AsDeletableCollection().Delete();
				} catch (e) {
					m((0, Localize)("#CollectionAction_DeleteFailed", i));
				}
			},
			onCancel: t,
		},
		n.createElement(
			"div",
			{
				className: f.CollectionDelete,
			},
			n.createElement(c.F9, {
				bNonInteractive: true,
				collection: o.md.GetCollection(r),
			}),
			n.createElement(
				"div",
				{
					className: f.CollectionDeleteIconOutline,
				},
				n.createElement(p.sED, null),
			),
			n.createElement(
				"div",
				{
					className: f.CollectionDeleteIcon,
				},
				n.createElement(p.sED, null),
			),
		),
		n.createElement(
			"div",
			{
				className: f.CollectionDeleteRightSide,
			},
			n.createElement(
				u.Y9,
				null,
				" ",
				(0, Localize)("#CollectionAction_DeleteDialog"),
				" ",
			),
			n.createElement(
				u.nB,
				null,
				n.createElement(
					u.a3,
					null,
					LocalizeReact("#CollectionAction_ConfirmDelete", h),
				),
				n.createElement(
					u.wi,
					null,
					n.createElement(u.CB, {
						strOKText: (0, Localize)("#Button_Remove"),
						onCancel: t,
					}),
				),
			),
		),
	);
});
