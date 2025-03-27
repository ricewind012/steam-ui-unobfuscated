import {
	LocalizeReact,
	Localize,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { PA } from "./41230.js";
import s from "./14629.js";
import o, { A as A_1 } from "./90765.js";
import l from "./96000.js";
import c from "./61175.js";
import m from "./64608.js";
import u from "./10606.js";
import { pg } from "./13869.js";
import A from "./69164.js";
import g from "./52451.js";
import h from "./1634.js";
import _ from "./34348.js";
import b from "./46217.js";
import { wf } from "./32598.js";
import { br } from "./18869.js";
const C = h;
const f = _;
export function x2(e, t, r) {
	const n = (
		<span className={C.DynamicHeader}>
			{LocalizeReact("#FilterEdit_SaveDynamicCollectionWithIcon", <b.Qi />)}
		</span>
	);
	const a = (0, Localize)("#FilterEdit_SaveDynamicCollectionNoIcon");
	return pg(
		<V
			ownerWindow={e}
			rctTitle={n}
			appFilter={r}
			strCollectionSummary={t}
			strStatsTag="saved-search"
		/>,
		e,
		{
			strTitle: a,
		},
	);
}
export function oy(e, t, r) {
	const n = (0, Localize)("#GameAction_NewCollectionDialogTitle");
	pg(
		<V ownerWindow={e} rctTitle={n} rgManuallyAddedApps={t} strStatsTag={r} />,
		e,
		{
			strTitle: n,
		},
	);
}
const V = PA((e) => {
	let {
		ownerWindow,
		rctTitle,
		appFilter,
		rgManuallyAddedApps,
		strCollectionSummary,
		strStatsTag,
		closeModal,
	} = e;
	let [b, setB] = i.useState(false);
	let [B, setB_1] = i.useState(
		strCollectionSummary && strCollectionSummary.length <= 32
			? strCollectionSummary
			: "",
	);
	let [M, setM] = i.useState(null);
	const R = br().Collection;
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
			setB_1(e.currentTarget.value);
		},
		[setB_1],
	);
	const D = i.useCallback(
		(e) => {
			if (closeModal) {
				closeModal();
			}
			c.n6.ExitSearch();
			R(e.id);
			if (e.internalAppFilter && !appFilter) {
				c.n6.SetCollectionEditorOpen(true);
			}
			SteamClient.Stats.RecordActivationEvent("NewCollection", strStatsTag);
			if (
				c.n6.selectedGameListView == 1 &&
				(!c.n6.bIsGameListGroupedByCollection || c.n6.bIsGameListSortedByRecent)
			) {
				const e = () => {
					c.n6.SelectGameListView(1);
					c.n6.SetGameListGroupedByCollection(true);
					c.n6.SetGameListSortedByRecent(false);
				};
				pg(
					<u.o0
						strTitle={(0, Localize)("#FilterEdit_CollectionsHiddenPromptTitle")}
						strDescription={(0, Localize)(
							"#FilterEdit_CollectionsHiddenPrompt",
						)}
						strOKButtonText={(0, Localize)(
							"#FilterEdit_AcceptGameListViewChange",
						)}
						onOK={e}
						strCancelButtonText={(0, Localize)(
							"#FilterEdit_RejectGameListViewChange",
						)}
						onCancel={() => null}
					/>,
					ownerWindow,
					{
						strTitle: (0, Localize)("#FilterEdit_CollectionsHiddenPromptTitle"),
					},
				);
			}
		},
		[closeModal, appFilter, strStatsTag, ownerWindow, R],
	);
	const N = i.useCallback(
		(r) => {
			let e_appFilter = e.appFilter;
			if (r && !e_appFilter) {
				e_appFilter = new s.E6();
			}
			const i = l.md.NewUnsavedCollection(
				B.trim(),
				e_appFilter,
				rgManuallyAddedApps || [],
			);
			sp(ownerWindow, i, false, () => D(i));
		},
		[e.appFilter, rgManuallyAddedApps, ownerWindow, B, D],
	);
	const F = i.useCallback(() => {
		setB(true);
		setM(
			window.setTimeout(() => {
				setB(false);
			}, 300),
		);
	}, [setB, setM]);
	const G = B.trim().length == 0;
	const O = !!appFilter;
	const P = O ? (
		<m.CB
			bOKDisabled={G}
			strOKText={(0, Localize)("#Button_Save")}
			onCancel={closeModal}
		/>
	) : (
		<>
			<m.JU
				style={{
					marginTop: 16,
				}}
			>
				{(0, Localize)("#FilterEdit_SelectCollectionType")}
			</m.JU>
			<A.Z className={C.TwoOptionsContainer} onClick={F} flow-children="row">
				<I isdynamic={false} disabled={G} onClick={() => N(false)} />
				<I isdynamic disabled={G} onClick={() => N(true)} />
			</A.Z>
		</>
	);
	return (
		<u.eV
			className={C.SaveCollectionContainer}
			onOK={() => N(false)}
			bOKDisabled={G}
			onCancel={closeModal}
		>
			<m.Y9>{rctTitle}</m.Y9>
			<m.nB>
				<m.a3>
					{O && (
						<m.JU className={C.SelectedFilters}>
							{(0, Localize)("#FilterEdit_SelectedFilters")}
						</m.JU>
					)}
					{O && (
						<div className={A_1(C.CollectionSummary, f.SearchFilterInput)}>
							{wf(appFilter, undefined, undefined)}
						</div>
					)}
					<div className={C.InputContainer}>
						<m.JU>
							{(0, Localize)("#FilterEdit_SaveCollectionNameInputPrompt")}
						</m.JU>
						<m.JU className={A_1(C.Required, G && C.Visible, b && C.Pulse)}>
							{(0, Localize)("#FilterEdit_RequiredField")}
						</m.JU>
					</div>
					<m.pd
						value={B}
						onChange={k}
						maxLength={32}
						autoFocus
						bShowClearAction
					/>
					{O && (
						<div className={C.SaveSearchDescription}>
							{" "}
							{(0, Localize)("#FilterEdit_SaveCollectionVerbose")}{" "}
						</div>
					)}
					{O && (
						<div className={C.SaveSearchDescription}>
							{" "}
							{(0, Localize)(
								"#FilterEdit_SaveDynamicCollectionButtonDesc",
							)}{" "}
						</div>
					)}
				</m.a3>
				<m.wi>{P}</m.wi>
			</m.nB>
		</u.eV>
	);
});
class I extends i.Component {
	render() {
		let e = this.props.isdynamic
			? (0, Localize)("#FilterEdit_SaveDynamicCollectionButtonDesc")
			: (0, Localize)("#FilterEdit_SaveStandardCollectionButtonDesc");
		let t = this.props.isdynamic ? (
			<span>
				<b.Qi />
				{(0, Localize)("#FilterEdit_SelectCollectionTypeButtonCreateDynamic")}
			</span>
		) : (
			(0, Localize)("#FilterEdit_SelectCollectionTypeButtonCreate")
		);
		return (
			<div className={A_1(C.Option, this.props.disabled && C.Disabled)}>
				<m.$n
					className={C.ActionLabel}
					onClick={this.props.onClick}
					tabIndex={this.props.disabled ? -1 : 0}
				>
					{t}
				</m.$n>
				<div className={C.Description}>{e}</div>
			</div>
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
		pg(
			<u.KG
				strDescription={(0, Localize)(
					"#CollectionAction_CannotOverwrite",
					t.displayName,
				)}
			/>,
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
			pg(
				<u.KG
					strDescription={(0, Localize)(
						"#CollectionAction_SaveFailed",
						t.displayName,
					)}
				/>,
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
		pg(<M collection={t} ownerWindow={e} onOK={n} onCancel={a} />, e, {
			strTitle: s,
		});
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
		return (
			<u.o0
				strTitle={e}
				bDestructiveWarning
				strDescription={(0, Localize)(
					"#FilterEdit_SaveOverwrite",
					this.props.collection.displayName,
				)}
				onOK={this.SaveCollection}
				onCancel={this.OnCancel}
			/>
		);
	}
};
Cg([g.oI], M.prototype, "OnSuccessfulSave", null);
Cg([g.oI], M.prototype, "OnCancel", null);
Cg([g.oI], M.prototype, "SaveCollection", null);
M = Cg([a.PA], M);
