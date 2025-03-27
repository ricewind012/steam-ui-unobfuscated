import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { useState } from "./63696.js";
import i, { W5 } from "./49519.js";
import a, { PA } from "./41230.js";
import s, { Qn } from "./72476.js";
import o from "./96000.js";
import l from "./61175.js";
import c from "./14663.js";
import m from "./88750.js";
import u from "./64608.js";
import d from "./10606.js";
import { pg } from "./13869.js";
import p from "./50376.js";
import { W as w_1 } from "./49455.js";
import _ from "./83628.js";
import b from "./18057.js";
import { br } from "./18869.js";
const f = _;
export const A = PA((e) => {
	const { strCollectionId, strDisplayName, bOnlyManagement } = e;
	const c = Qn();
	const u = !!W5(b.BV.Library.Collection());
	const d = br().Collection;
	const p = l.n6.IsCollapsed(strCollectionId)
		? (0, Localize)("#CollectionAction_Expand")
		: (0, Localize)("#CollectionAction_Collapse");
	const _ = o.md.GetCollection(strCollectionId);
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
	return (
		<m.tz>
			{!bOnlyManagement && (
				<m.kt
					onSelected={() => {
						if (l.n6.selectedGameListView == 10) {
							l.n6.SelectGameListView(1);
						} else {
							l.n6.SelectGameListView(10, strCollectionId);
						}
					}}
					disabled={S}
				>
					{f}
				</m.kt>
			)}
			{_.bIsEditable && _.bIsDynamic && v && (
				<m.kt
					onSelected={() => {
						d(strCollectionId);
						l.n6.SetCollectionEditorOpen(true);
					}}
				>
					{(0, Localize)("#CollectionAction_Edit")}
				</m.kt>
			)}
			{_.bIsEditable && v && (
				<m.kt
					onSelected={() => {
						d(strCollectionId);
						l.n6.SetCollectionRenameOpen(true);
					}}
				>
					{(0, Localize)("#CollectionAction_Rename")}
				</m.kt>
			)}
			{!bOnlyManagement && (
				<m.kt
					onSelected={() => {
						l.n6.toggleCollapsed(strCollectionId);
					}}
				>
					{p}
				</m.kt>
			)}
			{_.bIsDeletable && (
				<m.kt
					onSelected={(e) => {
						const i = o.md.GetCollection(strCollectionId);
						w_1(
							i.bIsDeletable,
							`Collection '${i.displayName}' should be deletable.`,
						);
						pg(
							<W
								strDisplayName={strDisplayName}
								strCollectionId={strCollectionId}
								bViewingCollection={u}
							/>,
							GetOwningWindowForEvent(e),
							{
								strTitle: (0, Localize)("#CollectionAction_DeleteDialog"),
							},
						);
					}}
				>
					{(0, Localize)("#CollectionAction_Delete")}
				</m.kt>
			)}
			{!bOnlyManagement && B && (
				<m.kt onSelected={l.n6.ExpandAll}>
					{(0, Localize)(
						l.n6.selectedGameListView == 11
							? "#CollectionAction_ExpandAll"
							: "#CollectionAction_ExpandAllCollections",
					)}
				</m.kt>
			)}
			{!bOnlyManagement && B && (
				<m.kt onSelected={l.n6.CollapseAll}>
					{(0, Localize)(
						l.n6.selectedGameListView == 11
							? "#CollectionAction_CollapseAll"
							: "#CollectionAction_CollapseAllCollections",
					)}
				</m.kt>
			)}
		</m.tz>
	);
});
const W = PA((e) => {
	const { closeModal, strCollectionId, strDisplayName, bViewingCollection } = e;
	const [s, setS] = useState("");
	const A = br();
	if (s) {
		return <d.KG strDescription={s} closeModal={closeModal} />;
	}
	let h = (
		<span
			style={{
				color: "white",
				textTransform: "uppercase",
			}}
		>
			{strDisplayName}
		</span>
	);
	return (
		<d.eV
			bDestructiveWarning
			className={f.CollectionDeleteContainer}
			onOK={async () => {
				try {
					closeModal();
					if (l.n6.currentCollectionID == strCollectionId) {
						if (l.n6.selectedGameListView == 10) {
							l.n6.SelectGameListView(1);
						}
						if (bViewingCollection) {
							A.Home();
						}
					}
					const e = o.md.GetCollection(strCollectionId);
					w_1(
						e.bIsDeletable,
						`Collection '${e.displayName}' should be deletable.`,
					);
					await e.AsDeletableCollection().Delete();
				} catch (e) {
					setS((0, Localize)("#CollectionAction_DeleteFailed", strDisplayName));
				}
			}}
			onCancel={closeModal}
		>
			<div className={f.CollectionDelete}>
				<c.F9
					bNonInteractive
					collection={o.md.GetCollection(strCollectionId)}
				/>
				<div className={f.CollectionDeleteIconOutline}>
					<p.sED />
				</div>
				<div className={f.CollectionDeleteIcon}>
					<p.sED />
				</div>
			</div>
			<div className={f.CollectionDeleteRightSide}>
				<u.Y9> {(0, Localize)("#CollectionAction_DeleteDialog")} </u.Y9>
				<u.nB>
					<u.a3>{LocalizeReact("#CollectionAction_ConfirmDelete", h)}</u.a3>
					<u.wi>
						<u.CB
							strOKText={(0, Localize)("#Button_Remove")}
							onCancel={closeModal}
						/>
					</u.wi>
				</u.nB>
			</div>
		</d.eV>
	);
});
