import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n from "./96000.js";
import i from "./61175.js";
import a from "./48866.js";
import s, { q3 } from "./90095.js";
import o from "./63696.js";
import l from "./55116.js";
import c from "./69164.js";
import { eS, C6, Wm } from "./56655.js";
import u from "./43014.js";
import d from "./64608.js";
import A from "./13743.js";
import p from "./10606.js";
import g from "./50376.js";
import h from "./43520.js";
import { A as A_1 } from "./90765.js";
import f, { rP } from "./72476.js";
import { $P, Pj } from "./14629.js";
import y from "./32330.js";
const S = y;
export function x(e) {
	const { collectionid, closeModal } = e;
	if (collectionid || collectionid === "") {
		return (
			<p.EN active>
				<T collectionid={collectionid} closeModal={closeModal} />
			</p.EN>
		);
	} else {
		return null;
	}
}
function B(e) {
	const { lockedProps, closeModal } = e;
	return (
		<a.k
			appFilter={i.n6.collectionsAppFilterGamepad}
			{...lockedProps}
			fnOnChange={i.n6.SaveLocalState}
			closeModal={closeModal}
		/>
	);
}
const v = [
	[2, 12],
	[2, 13],
	[2, 14],
	[2, 7],
	[2, 8],
	[2, 9],
	[1, 2],
	[1, 1],
	[1, 3],
	[1, 4],
	[3, 19],
	[3, 21],
	[3, 597],
	[3, 492],
	[3, 128],
	[3, 699],
	[3, 122],
	[3, 599],
	[3, 701],
	[3, 9],
	[2, 1],
	[2, 2],
	[2, 3],
	[2, 4],
	[2, 5],
	[2, 6],
	[2, 11],
	[2, 23],
];
function I(e) {
	const { appFilter, lockedProps } = e;
	let n = q3(() => appFilter.GetAllSelectedOptions()).sort((e, t) => {
		let r = v.findIndex((t) => t[0] == e.eGroup && t[1] == e.option);
		let n = v.findIndex((e) => e[0] == t.eGroup && e[1] == t.option);
		if (r == -1) {
			r = 1000;
		}
		if (n == -1) {
			n = 1000;
		}
		return (
			r - n || e.eGroup - t.eGroup || e.eGroup - t.eGroup || e.option - t.option
		);
	});
	if (lockedProps) {
		lockedProps.lockedFeatures?.forEach((e) => {
			n = n.filter((t) => t.eGroup != 2 || t.option != e.option);
			if (e.state) {
				n.unshift({
					eGroup: 2,
					option: e.option,
					name: (0, Localize)(`#FilterElement_${$P(2, e.option)}`),
				});
			}
		});
		lockedProps.lockedPlayStates?.forEach((e) => {
			n = n.filter((t) => t.eGroup != 1 || t.option != e.option);
			if (e.state) {
				n.unshift({
					eGroup: 1,
					option: e.option,
					name: (0, Localize)(`#FilterElement_${$P(1, e.option)}`),
				});
			}
		});
	}
	const i = n.map((e, t) => (
		<div key={`${e.eGroup}-${e.option}`} className={S.SelectedFilterOption}>
			<g.Jlk />
			{e.name}
		</div>
	));
	return (
		<div className={S.FilterSummary}>
			{i}
			{i.length == 0 && <div />}
		</div>
	);
}
function E(e) {
	const {
		bSelected,
		bLastFocused,
		category,
		onSelected,
		onFocused,
		allIcons,
		refScrollable,
	} = e;
	const u = o.useCallback(() => {
		if (refScrollable.current) {
			refScrollable.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	}, [refScrollable]);
	return (
		<c.Z
			className={A_1(
				S.CompatFilterDialogRow,
				bSelected && S.Active,
				bLastFocused && S.LastFocused,
			)}
			autoFocus={bSelected}
			noFocusRing
			onActivate={() => {
				onSelected(category);
			}}
			onGamepadFocus={() => onFocused()}
			fnScrollIntoViewHandler={u}
		>
			<div className={A_1(S.RadioButton)} />
			<div>
				<div className={S.CompatFilterLabel}>{(0, Localize)(eS(category))}</div>
				<div className={S.CompatFilterDescription}>
					{(0, Localize)(C6(category))}
				</div>
			</div>
			<div className={S.CompatFilterDialogIcons}>{allIcons}</div>
		</c.Z>
	);
}
const M = [14, 15, 13, 12];
function T(e) {
	const { collectionid, closeModal } = e;
	const a = ((e) => {
		const t = {};
		if (e == n.A8.LocalGames) {
			t.lockedPlayStates = [
				{
					option: 1,
					state: true,
				},
			];
		} else if (e == n.A8.DeckGames || e == n.A8.DTst1Games) {
			t.lockedFeatures = [
				{
					option: 12,
					state: true,
				},
				{
					option: 13,
					state: false,
				},
				{
					option: 14,
					state: false,
				},
			];
		}
		return t;
	})(collectionid);
	const g = rP();
	const YRef = o.useRef(undefined);
	let w = q3(() => n.md.GetCurrentGamepadFilter());
	let v = false;
	const T = a?.lockedFeatures?.find((e) => e.state == 1 && Pj(e.option));
	if (T) {
		v = true;
		w = T.option;
	}
	const [R, setR] = o.useState(
		!f.TS.ON_DECK ||
			a.lockedPlayStates ||
			a.lockedPlayStates ||
			T ||
			a.lockedPlayStates ||
			T ||
			n.md.BHasNonGamepadOptions(),
	);
	const D = o.useMemo(() => n.md.GetCurrentGamepadFilter() != M[1], []);
	const N = !g.IN_VR || D;
	const F = o.useCallback((e) => {
		n.md.SetGamepadCollectionFilter(M[e]);
	}, []);
	const G = [3, 2, 0, 1];
	const O = G.findIndex((e) => M[e] == w);
	const [P, setP] = o.useState(O);
	const z = o.useCallback((e) => {
		setP(e);
	}, []);
	const x = [];
	for (let e = 0; e < G.length; e++) {
		x.push(Wm(G[e]));
	}
	const U = [];
	if (N) {
		for (let e = 0; e < G.length; e++) {
			const t = x.map((T_1, r) => {
				const n = r > e;
				const i = G[r] === 0 || G[r] === 1;
				return (
					<T_1
						className={A_1(n && S.Inactive, i && S.InvertFocusedIcon)}
						key={r}
					/>
				);
			});
			const r = e == O;
			const n = e == P;
			const G_e = G[e];
			const a = (!v || r) && (
				<E
					key={G_e}
					bSelected={r}
					bLastFocused={n}
					category={G_e}
					onSelected={F}
					onFocused={() => z(e)}
					allIcons={t}
					refScrollable={YRef}
				/>
			);
			U.push(a);
		}
	}
	if (R) {
		U.push(
			<I
				key="filtersummary"
				appFilter={i.n6.collectionsAppFilterGamepad}
				lockedProps={a}
			/>,
		);
	} else {
		U.push(
			<c.Z
				key="advanced"
				className={A_1(S.CompatFilterDialogRow, S.Center, S.Advanced)}
				noFocusRing
				onActivate={() => {
					setR(true);
				}}
			>
				<div>
					<div className={S.CompatFilterLabel}>
						{(0, Localize)("#Library_FilterCollection_Advanced")}
					</div>
				</div>
			</c.Z>,
		);
	}
	const W = parseInt(S.DialogPadding);
	return (
		<p.x_
			className={S.ModalPosition}
			onEscKeypress={e.closeModal}
			padding="none"
		>
			<div className={S.DialogWrapper} ref={YRef}>
				<div className={S.CompatFilterDialog}>
					<l.q>
						<h.hL
							spacing={{
								horizontal: W,
							}}
						>
							<d.Y9>
								<span className={S.CompatFilterDialogTitle}>
									{(0, Localize)("#Library_FilterCollectionTitle")}
								</span>
							</d.Y9>
							<d.nB className={S.DialogBody}>
								<div className={S.CompatFilterDialogDescription}>
									{LocalizeReact(
										"#Library_FilterCollectionDescription",
										<A.$m
											button={u.g4.X}
											type={A.wt.Knockout}
											size={A.xY.Small}
										/>,
									)}
								</div>
								{!f.TS.ON_DECK && N && (
									<div>
										{(0, Localize)(
											"#Library_FilterCollectionDescription_CompatNotOnDeck",
										)}
									</div>
								)}
								<c.Z
									className={A_1(S.CompatFilterOptions, v && S.Locked)}
									retainFocus
								>
									{...U}
									{R && (
										<B key="advanced" lockedProps={a} closeModal={closeModal} />
									)}
								</c.Z>
							</d.nB>
						</h.hL>
					</l.q>
				</div>
			</div>
		</p.x_>
	);
}
