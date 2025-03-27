import { Localize } from "../../actual_src/utils/localization.js";
import { _f } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i, {
	useRef,
	useMemo,
	useState,
	useCallback,
	cloneElement,
	useEffect,
} from "./63696.js";
import a, { W6 } from "./49519.js";
import s from "./18057.js";
import o from "./50350.js";
import l, { T as T_1 } from "./78057.js";
import c from "./3200.js";
import m, { V3 } from "./60155.js";
import u, { _h } from "./9808.js";
import d from "./69164.js";
import A, { Co, mM } from "./96593.js";
import p from "./91486.js";
import h, { ex, kn, hj, Hc, w$ } from "./32179.js";
import C, { Sk, Sv, bV } from "./48289.js";
import _, { q3 } from "./90095.js";
import f from "./12307.js";
import b from "./17231.js";
import y from "./64608.js";
import S from "./8573.js";
import w from "./87935.js";
import B from "./21105.js";
import v from "./81994.js";
import I, { Qv } from "./57665.js";
import E from "./4690.js";
import M, { j } from "./32084.js";
import T, { hf, Qn } from "./72476.js";
import R from "./79671.js";
import k from "./35488.js";
import { A as A_1 } from "./90765.js";
import N, { R7 } from "./11131.js";
import F from "./88696.js";
import G, { Gn } from "./89193.js";
import O from "./88750.js";
import { lX } from "./31084.js";
import { Yb, gQ } from "./39002.js";
import z, { yq } from "./93966.js";
import { Te } from "./55007.js";
import W from "./19579.js";
import { Tc } from "./31800.js";
import H, { Nd } from "./15918.js";
export function wi(e) {
	const { bShowGameInfoInHeader, appid } = e;
	const NRef = useRef(undefined);
	const c = j(NRef, W.headerPadding);
	const m = T_1(appid);
	Tc(NRef, 250);
	return (
		<o.Jr
			headerVisibility="default"
			padForHeader={false}
			padForFooter={false}
			minimumOpacity={0}
			scrollable={false}
			flexed
		>
			<B.MS
				className={W.Page}
				ref={NRef}
				scrollPaddingTop={0}
				scrollIntoViewType={E.Yo.NoTransform}
			>
				<Ae appid={appid} />
				<d.Z flow-children="column" className={W.Container}>
					<a.dO>
						<a.qh path={s.BV.Library.App.Achievements.My.Root()}>
							<Rp
								bShowGameInfoInHeader={bShowGameInfoInHeader}
								appid={appid}
								scrollTabsTop={c}
								autoFocus
							/>
						</a.qh>
						<a.qh path={s.BV.Library.App.Achievements.Friend.Root()}>
							{({ match }) => (
								<$
									bShowGameInfoInHeader={bShowGameInfoInHeader}
									appid={appid}
									accountid={parseInt(match.params.accountid)}
									scrollTabsTop={c}
									details={m}
								/>
							)}
						</a.qh>
					</a.dO>
				</d.Z>
			</B.MS>
		</o.Jr>
	);
}
function q(e) {
	const t = ex(e);
	return useMemo(() => {
		if (!t.data) {
			return {
				loading: t.loading,
				error: t.error,
			};
		}
		const { achieved, unachieved, hidden } = t.data;
		const i = Object.keys(achieved).map((t) => achieved[t]);
		const a = Object.keys(unachieved).map((e) => unachieved[e]);
		const s = i.sort((e, t) => t.rtUnlocked - e.rtUnlocked);
		const o = a.sort((e, t) => t.flAchieved - e.flAchieved);
		const l = Object.keys(hidden).length;
		return {
			data: {
				rgAchieved: s,
				rgUnachieved: o,
				cHidden: l,
				cTotal: s.length + o.length + l,
				cEarned: s.length,
			},
		};
	}, [t]);
}
export function Rp(e) {
	const {
		appid,
		bShowGameInfoInHeader,
		bPinnedView,
		bShowInProgress,
		scrollTabsTop,
		autoFocus,
		strDefaultTab,
		onSetTab,
	} = e;
	const URef = useRef(undefined);
	const { data, loading, error } = q(appid);
	const _ = Co(appid);
	const [b, setB] = useState(strDefaultTab || "achievements");
	const S = data?.rgUnachieved;
	const w = data?.cHidden;
	const [B, setB_1] = useState(0);
	const I = useCallback(() => setB_1(0), []);
	const E = !hf();
	const M = i.useCallback(
		(e) => {
			setB(e);
			if (onSetTab) {
				onSetTab(e);
			}
		},
		[onSetTab],
	);
	if (loading) {
		return <Me />;
	}
	if (error) {
		return <Ue error={error} />;
	}
	const { cEarned, cTotal } = data;
	const N = cEarned == cTotal && cTotal > 0;
	let F = [
		{
			id: "inprogress",
			title: Localize("#Achievements_Tab_InProgress"),
			content: <Y appid={appid} bPinnedView={bPinnedView} />,
		},
		{
			id: "achievements",
			title: Localize("#Achievements_Tab_MyAchievements"),
			content: (
				<J
					appid={appid}
					accountIDToCompare={B}
					onChangeAccountIDToCompare={setB_1}
					bPinnedView={bPinnedView}
				/>
			),
		},
		{
			id: "global",
			title: Localize("#Achievements_Tab_GlobalAchievements"),
			content: <Ne appid={appid} />,
		},
	];
	if (!bShowInProgress || S?.length + w == 0) {
		F = F.slice(1);
	}
	return (
		<>
			<d.Z
				scrollIntoViewWhenChildFocused
				className={A_1(
					W.HeaderContainer,
					bPinnedView && W.PinnedView,
					N && W.PerfectGame,
				)}
			>
				<m.c$
					bShowGameInfoInHeader={bShowGameInfoInHeader}
					bPinnedInOverlayView={bPinnedView}
					appid={appid}
					achievements={{
						cEarned: cEarned,
						cTotal: cTotal,
					}}
					playtime={
						E && _
							? {
									minutesForever: _.minutes_playtime_forever,
									minutesInLastTwoWeeks: _.minutes_playtime_last_two_weeks,
								}
							: undefined
					}
					autoFocus={autoFocus}
				/>
			</d.Z>
			<d.Z
				ref={URef}
				className={A_1(W.AchievementTabs, bPinnedView && W.PinnedView)}
				onSecondaryButton={B ? I : undefined}
				onSecondaryActionDescription={
					B ? Localize("#Achievements_ComparisonLabel_Clear") : undefined
				}
			>
				<f.xC
					canBeHeaderBackground="on-outer-scroll"
					autoFocusContents={false}
					activeTab={b}
					onShowTab={M}
					onFocusWithin={(e) =>
						e && scrollTabsTop && scrollTabsTop(URef.current)
					}
					bPinnedInOverlayView={bPinnedView}
					tabs={F}
				/>
			</d.Z>
		</>
	);
}
class Z {
	m_appid;
	m_storage;
	m_rgAchievements = [];
	constructor(e) {
		Gn(this);
		this.m_appid = e;
		this.m_storage = new F.A();
		this.m_storage.GetObject(this.GetKey()).then((e) => {
			if (e) {
				this.m_rgAchievements = e;
			}
		});
	}
	GetKey() {
		return `SortedAchievements_${this.m_appid}`;
	}
	GetSortedAchievements() {
		return this.m_rgAchievements;
	}
	SetSortedAchievements(e) {
		this.m_rgAchievements = e;
		this.m_storage.StoreObject(this.GetKey(), e);
	}
}
function Y(e) {
	const { appid, bPinnedView } = e;
	const n = R7();
	const { data, loading, error } = q(appid);
	const { rgUnachieved, cHidden } = data;
	const A = ((e) => {
		const TRef = i.useRef(undefined);
		TRef.current ||= new Z(e);
		return TRef.current;
	})(appid);
	const p = q3(() => A.GetSortedAchievements());
	const h = Qn();
	const [C, f, b] = V3(rgUnachieved);
	let y = i.useMemo(() => {
		const e = b.slice();
		e.sort((e, t) => {
			let r = p.indexOf(e.strID);
			let n = p.indexOf(t.strID);
			if (r == n) {
				return 0;
			} else if (r == -1) {
				return 1;
			} else if (n == -1) {
				return -1;
			} else {
				return r - n;
			}
		});
		return e;
	}, [b, p]);
	const S = i.useCallback(
		(e, t) => {
			if (!e.destination) {
				return;
			}
			let r = Yb(y, e.source.index, e.destination.index).map((e) => e.strID);
			A.SetSortedAchievements(r);
		},
		[A, y],
	);
	const w = i.useCallback(
		(e, t, r, n) => {
			const a = y;
			let s = r.source.index;
			let o = a[r.source.index];
			const l = (e) => {
				let t = a.map((e) => e.strID);
				t.splice(s, 1);
				t.unshift(o.strID);
				A.SetSortedAchievements(t);
			};
			const m = (e) => {
				let t = a.map((e) => e.strID);
				t.splice(s, 1);
				t.push(o.strID);
				A.SetSortedAchievements(t);
			};
			const d = gQ({
				...e.draggableProps.style,
				...n,
			});
			return (
				<div
					className={A_1(
						W.SortableUserAchievement,
						t.isDragging && W.IsDragging,
					)}
					ref={e.innerRef}
					{...e.draggableProps}
					{...e.dragHandleProps}
					style={d}
				>
					<div className={W.SortableUserAchievementInner}>
						<c.fm
							title={o.strName}
							description={o.strDescription}
							percentGlobalUnlocked={o.flAchieved}
							unlockDate={o.rtUnlocked}
							imgUrl={o.strImage}
							progress={_h(o)}
							glow={Qv(o.bAchieved, o.flAchieved)}
							onContextMenu={(e) => {
								let t = (
									<O.tz>
										<O.kt onSelected={l}>
											{Localize("#Achievements_Sort_MoveToTop")}
										</O.kt>
										<O.kt onSelected={m}>
											{Localize("#Achievements_Sort_MoveToBottom")}
										</O.kt>
									</O.tz>
								);
								lX(t, e);
							}}
						/>
						{!h && <k.Rows className={W.DragHandle} />}
					</div>
				</div>
			);
		},
		[h, A, y],
	);
	const B = w;
	const v = i.useCallback(() => {
		let e = window.document.body;
		if (n?.ownerWindow) {
			e = n.ownerWindow.document.body;
		}
		return e;
	}, [n]);
	const E = (
		<div className={W.Label}>{Localize("#Achievements_Tab_InProgress")}</div>
	);
	const M = (
		<m.zp
			className={W.MyAchievementsHeader}
			strFilter={C}
			onChangeFilter={f}
			leftContent={E}
		/>
	);
	const FRef = i.useRef(undefined);
	const G = i.useCallback((e) => {
		FRef.current = e ? (0, _f)(e) : null;
	}, []);
	const z = Te({
		count: y.length,
		getScrollElement: () => FRef.current,
		estimateSize: i.useCallback(
			(e) => parseInt(W.nAchievementHeight) + parseInt(W.nAchievementGap),
			[],
		),
		overscan: 5,
	});
	if (loading) {
		return <Me />;
	} else if (error) {
		return <Ue error={error} />;
	} else {
		return (
			<Oe bPinnedView={bPinnedView}>
				{M}
				<div ref={G} />
				<R.JY
					onDragEnd={S}
					stylesInsertionPoint={n?.ownerWindow?.document?.head}
				>
					<R.gL
						droppableId="droppable"
						renderClone={B}
						getContainerForClone={v}
						mode="virtual"
					>
						{(e, t) => (
							<div
								className={A_1(
									W.SortableAchievementsList,
									t.isDraggingOver && W.IsDraggingOver,
								)}
								style={{
									height: z.getTotalSize(),
									width: "100%",
									position: "relative",
								}}
								{...e.droppableProps}
								ref={e.innerRef}
							>
								{z.getVirtualItems().map((e) => {
									const t = {
										position: "absolute",
										top: e.start,
										left: 0,
										width: "100%",
										height: e.size,
									};
									const r = y[e.index];
									return (
										<R.sx key={r.strID} draggableId={r.strID} index={e.index}>
											{(e, r, n) => w(e, r, n, t)}
										</R.sx>
									);
								})}
							</div>
						)}
					</R.gL>
				</R.JY>
				<Se count={cHidden} />
			</Oe>
		);
	}
}
function K(e) {
	const { achievement, accountIDToCompare, friendAchievements, ...a } = e;
	const s = Sk();
	const o = Sv(accountIDToCompare);
	if (accountIDToCompare) {
		return (
			<c.ui
				key={achievement.strID}
				{...a}
				title={achievement.strName}
				description={achievement.strDescription}
				imgUrl={achievement.strImage}
				percentGlobalUnlocked={achievement.flAchieved}
				primaryAchiever={{
					avatarURL: s,
					unlockDate: achievement.rtUnlocked,
					progress: _h(achievement),
				}}
				secondaryAchiever={
					friendAchievements
						? {
								avatarURL: o,
								unlockDate: friendAchievements[achievement.strID]?.rtUnlocked,
								progress: _h(friendAchievements[achievement.strID]),
							}
						: undefined
				}
			/>
		);
	} else {
		return <Le key={achievement.strID} {...a} achievement={achievement} />;
	}
}
function X(e) {
	const { rgAchieved, rgUnachieved, fnRenderAchievement } = e;
	const a = i.useMemo(() => {
		const e = [];
		e.push(
			...rgAchieved.map((e) => ({
				type: "item",
				data: fnRenderAchievement(e),
			})),
		);
		if (rgUnachieved.length > 0) {
			e.push({
				type: "title",
				data: <c.YG>{Localize("#Achievements_LockedList_Title")}</c.YG>,
			});
		}
		e.push(
			...rgUnachieved.map((e) => ({
				type: "item",
				data: fnRenderAchievement(e),
			})),
		);
		return e;
	}, [rgAchieved, rgUnachieved, fnRenderAchievement]);
	const s = i.useCallback(
		(e) => {
			let t;
			if (a[e].type === "title") {
				t =
					parseInt(W.nAchievementsListTitleHeight) +
					parseInt(W.nAchievementGap) * 2;
			} else {
				t = parseInt(W.nAchievementHeight);
				if (e != a.length - 1) {
					t += parseInt(W.nAchievementGap);
				}
			}
			return t;
		},
		[a],
	);
	const ORef = i.useRef(undefined);
	const l = i.useCallback((e) => {
		ORef.current = e ? (0, _f)(e) : null;
	}, []);
	const m = Te({
		count: a.length,
		getScrollElement: () => ORef.current,
		estimateSize: s,
		overscan: 5,
	});
	return (
		<div
			className={W.ListWrapper}
			ref={l}
			style={{
				height: m.getTotalSize(),
				width: "100%",
				position: "relative",
			}}
		>
			{m.getVirtualItems().map((e) => {
				const t = {
					position: "absolute",
					top: e.start,
					left: 0,
					width: "100%",
					height: e.size - parseInt(W.nAchievementGap),
				};
				return cloneElement(a[e.index].data, {
					style: t,
					key: e.key,
				});
			})}
		</div>
	);
}
function J(e) {
	const { appid, accountIDToCompare, onChangeAccountIDToCompare, bPinnedView } =
		e;
	const { data, loading, error } = q(appid);
	const { rgAchieved, rgUnachieved, cHidden } = data;
	const { achievements, rgOptions } = ((e, t) => {
		const { data: data_1 } = kn(e, t);
		const { data: data_2 } = Nd(e, {
			staleTime: 3600000,
		});
		const a = q3(() => {
			if (!data_2) {
				return [];
			}
			const e = [
				...data_2.in_game,
				...data_2.played_ever,
				...data_2.played_recently,
				...data_2.owns,
			]
				.map(({ steamid }) => new S.b(steamid).GetAccountID())
				.map((e) => ({
					data: e,
					label: C.O$.GetFriendState(e).display_name,
				}))
				.sort((e, t) => e.label.localeCompare(t.label));
			if (t) {
				e.unshift({
					data: 0,
					label: Localize("#Achievements_ComparisonLabel_Clear"),
				});
			}
			return e;
		});
		return {
			achievements: useMemo(
				() =>
					data_1
						? {
								...data_1.achieved,
								...data_1.unachieved,
							}
						: null,
				[data_1],
			),
			rgOptions: a,
		};
	})(appid, accountIDToCompare);
	const [f, b, w, B] = V3(rgAchieved);
	const v = i.useMemo(
		() => rgUnachieved.filter((e) => B(e)),
		[rgUnachieved, B],
	);
	const I = rgOptions && rgOptions.length != 0 && (
		<div className={W.CompareButtonContainer}>
			<y.ZU
				strDefaultLabel={Localize("#Achievements_ComparisonLabel_NotComparing")}
				selectedOption={accountIDToCompare}
				rgOptions={rgOptions}
				onChange={(e) => onChangeAccountIDToCompare(e.data)}
				renderButtonValue={() =>
					accountIDToCompare
						? Localize(
								"#Achievements_ComparisonLabel_Comparing",
								C.O$.GetFriendState(accountIDToCompare).display_name,
							)
						: Localize("#Achievements_ComparisonLabel_NotComparing")
				}
			/>
		</div>
	);
	const E = (
		<m.zp
			className={W.MyAchievementsHeader}
			bPinnedView={bPinnedView}
			onChangeFilter={b}
			strFilter={f}
			rightContent={I}
		/>
	);
	const M = i.useCallback(
		(e) => (
			<K
				achievement={e}
				accountIDToCompare={accountIDToCompare}
				friendAchievements={achievements}
			/>
		),
		[accountIDToCompare, achievements],
	);
	const T = rgAchieved.length > 0 || rgUnachieved.length > 0;
	if (loading) {
		return <Me />;
	} else if (error) {
		return <Ue error={error} />;
	} else {
		return (
			<Oe bPinnedView={bPinnedView}>
				{T && E}
				<X rgAchieved={w} rgUnachieved={v} fnRenderAchievement={M} />
				<Se count={cHidden} />
			</Oe>
		);
	}
}
function $(e) {
	const t = Co(e.appid);
	if (mM(t)) {
		return <Ee {...e} />;
	} else {
		return <Te {...e} />;
	}
}
function Ee(e) {
	const { appid, bShowGameInfoInHeader, accountid, scrollTabsTop } = e;
	const { data, loading, error } = hj(appid, accountid);
	const [c, u] = useMemo(
		() =>
			data
				? [
						Object.keys(data.achieved)
							.map((e) => data.achieved[e])
							.sort((e, t) => t.rtUnlocked - e.rtUnlocked),
						Object.keys(data.unachieved)
							.map((e) => data.unachieved[e])
							.sort((e, t) => t.flGlobalAchieved - e.flGlobalAchieved),
					]
				: [],
		[data],
	);
	const A = bV(accountid);
	const p = Sv(accountid);
	const _Ref = useRef(undefined);
	const [y, setY] = useState("achievements");
	const [w, setW] = useState(true);
	if (loading || !A) {
		return <Me />;
	}
	if (error) {
		return <Ue error={error} />;
	}
	const v = Object.keys(data.hiddenAchieved).length;
	const I = Object.keys(data.hiddenUnachieved).length;
	const E = c.length + u.length + v + I;
	const M = c.length + v;
	return (
		<>
			<d.Z scrollIntoViewWhenChildFocused className={W.HeaderContainer}>
				<m.c$
					bShowGameInfoInHeader={bShowGameInfoInHeader}
					bPinnedInOverlayView={false}
					appid={appid}
					achievements={{
						cTotal: E,
						cEarned: M,
					}}
					subtitle={<Ce name={A} avatarURL={p} />}
					autoFocus
				/>
			</d.Z>
			<div ref={_Ref} className={W.AchievementTabs}>
				<f.xC
					canBeHeaderBackground="on-outer-scroll"
					autoFocusContents={false}
					activeTab={y}
					onShowTab={setY}
					onFocusWithin={(e) => {
						if (e && scrollTabsTop) {
							scrollTabsTop(_Ref.current);
						}
					}}
					tabs={[
						{
							id: "achievements",
							title: Localize("#Achievements_Tab_FriendAchievements"),
							renderTabAddon: () => (
								<b.Ul statusPosition="none" strAvatarURL={p} size="X-Small" />
							),
							tabAddonPosition: "left",
							content: (
								<Re
									appid={appid}
									accountid={accountid}
									comparison={w}
									onComparisonChange={setW}
								/>
							),
						},
						{
							id: "global",
							title: Localize("#Achievements_Tab_GlobalAchievements"),
							content: <Ie appid={appid} accountid={accountid} />,
						},
					]}
				/>
			</div>
		</>
	);
}
function Te(e) {
	const { appid, accountid } = e;
	const n = W6();
	useEffect(() => {
		const e = w.B7.BuildSteamURL(
			"UserAchievementsPage",
			S.b.InitFromAccountID(accountid).ConvertTo64BitString(),
			appid,
		);
		n.replace(s.BV.GamepadUI.SteamWeb(), {
			url: e,
		});
	}, [n, appid, accountid]);
	return null;
}
function Re(e) {
	const { appid, accountid, comparison, onComparisonChange } = e;
	const { data, loading, error } = hj(appid, accountid);
	const d = Sv(accountid);
	const p = Sk();
	const [_, f] = useMemo(() => {
		if (!data) {
			return [[], []];
		}
		const e = {
			...data.achieved,
			...data.hiddenAchieved,
		};
		return [
			Object.keys(e)
				.map((t) => e[t])
				.sort((e, t) => t.rtUnlocked - e.rtUnlocked),
			Object.keys(data.unachieved)
				.map((e) => data.unachieved[e])
				.sort((e, t) => t.rtUnlocked - e.rtUnlocked),
		];
	}, [data]);
	const b = mM(Co(appid));
	const S = Object.keys(data.hiddenUnachieved).length;
	const [w, B, v, I] = V3(_);
	const E = i.useMemo(() => f.filter((e) => I(e)), [f, I]);
	const M = b && (
		<div className={W.ToggleContainer}>
			<div className={W.Label}>
				{Localize("#Achievements_ComparisonToggle_Label")}
			</div>
			<y.Hk value={comparison} onChange={onComparisonChange} />
		</div>
	);
	const T = (
		<m.zp
			className={W.MyAchievementsHeader}
			strFilter={w}
			onChangeFilter={B}
			rightContent={M}
		/>
	);
	const R = i.useCallback(
		(e) => (
			<c.ui
				key={e.strID}
				title={e.strName}
				description={e.strDescription}
				imgUrl={e.strImage}
				hidden={!!data.hiddenAchieved[e.strID]}
				percentGlobalUnlocked={e.flGlobalAchieved}
				primaryAchiever={{
					avatarURL: d,
					unlockDate: e.rtUnlocked,
					progress: _h(e),
				}}
				secondaryAchiever={
					comparison
						? {
								avatarURL: p,
								unlockDate: e.rtCurrentUserUnlock,
								progress: _h({
									...e,
									flCurrentProgress: e.flCurrentUserCurrentProgress,
								}),
							}
						: undefined
				}
			/>
		),
		[data, comparison, d, p],
	);
	if (loading) {
		return <Me />;
	} else if (error) {
		return <Ue error={error} />;
	} else {
		return (
			<Oe>
				{T}
				<X rgAchieved={v} rgUnachieved={E} fnRenderAchievement={R} />
				<Se count={S} />
			</Oe>
		);
	}
}
function Ne(e) {
	const { appid } = e;
	const { data, loading, error } = ((e) => {
		const t = ex(e);
		const r = Hc(e);
		return useMemo(() => {
			const { data: data_1, loading: loading_1, error: error_1 } = t;
			const { data: data_2, loading: loading_2, error: error_2 } = r;
			if (loading_1 || loading_2) {
				return {
					loading: true,
				};
			}
			if (error_1 || error_2) {
				return {
					error: error_1 || error_2,
				};
			}
			const l = {
				...data_1.achieved,
				...data_1.unachieved,
				...data_1.hidden,
			};
			return {
				data: Object.keys(l)
					.sort((e, t) => data_2[t] - data_2[e])
					.map((e) => l[e]),
			};
		}, [t, r]);
	})(appid);
	const s = Sk();
	if (loading || !s) {
		return <Me />;
	} else if (error) {
		return <Ue error={error} />;
	} else {
		return (
			<c.Wh
				avatarURL={s}
				achievements={data.map((e) => ({
					id: e.strID,
					strName: e.strName,
					strDescription: e.strDescription,
					imgUrl: e.strImage,
					percentGlobalUnlocked: e.flAchieved,
					unlocked: e.bAchieved,
					hidden: e.bHidden && !e.bAchieved,
				}))}
			/>
		);
	}
}
function Ie(e) {
	const { appid, accountid } = e;
	const { data, loading, error } = ((e, t) => {
		const r = hj(e, t);
		const n = Hc(e);
		return useMemo(() => {
			const { data: data_1, loading: loading_1, error: error_1 } = r;
			const { data: data_2, loading: loading_2, error: error_2 } = n;
			if (loading_1 || loading_2) {
				return {
					loading: true,
				};
			}
			if (error_1 || error_2) {
				return {
					error: error_1 || error_2,
				};
			}
			const l = {
				...data_1.achieved,
				...data_1.unachieved,
				...data_1.hiddenAchieved,
				...data_1.hiddenUnachieved,
			};
			return {
				data: Object.keys(l)
					.sort((e, t) => data_2[t] - data_2[e])
					.map((t) => ({
						...l[t],
						flAchieved: data_2[t],
						bHidden: !!data_1.hiddenAchieved[t] || !!data_1.hiddenUnachieved[t],
					})),
			};
		}, [r, n]);
	})(appid, accountid);
	const o = Sv(accountid);
	if (loading) {
		return <Me />;
	} else if (error) {
		return <Ue error={error} />;
	} else {
		return (
			<c.Wh
				avatarURL={o}
				achievements={data.map((e) => ({
					id: e.strID,
					strName: e.strName,
					strDescription: e.strDescription,
					imgUrl: e.strImage,
					percentGlobalUnlocked: e.flAchieved,
					unlocked: e.bAchieved,
					hidden: e.bHidden,
				}))}
			/>
		);
	}
}
function Ae(e) {
	const { appid } = e;
	const r = Co(appid);
	if (!r) {
		return null;
	}
	const { rgHeroImages, bHasHeroImage } = l.H.GetHeroImages(r);
	return (
		<div className={W.Background}>
			<div className={W.Blur} />
			{bHasHeroImage && (
				<p.z
					className={W.HeaderImage}
					eAssetType={1}
					appid={appid}
					rgSources={rgHeroImages}
					neverShowTitle
				/>
			)}
			{!bHasHeroImage && (
				<p.z
					className={W.HeaderImage}
					eAssetType={3}
					app={r}
					bShortDisplay
					neverShowTitle
				/>
			)}
		</div>
	);
}
function Se(e) {
	const { count } = e;
	if (count === 0) {
		return null;
	} else {
		return (
			<>
				<c.YG
					style={{
						paddingTop: 0,
					}}
				>
					{Localize("#Achievements_HiddenList_Title")}
				</c.YG>
				<c.Eu count={count} />
			</>
		);
	}
}
Cg([G.sH], Z.prototype, "m_rgAchievements", undefined);
Cg([G.XI], Z.prototype, "SetSortedAchievements", null);
const Oe = (e) => {
	const { bPinnedView, ...r } = e;
	return <c.Om {...r} className={A_1(W.List, bPinnedView && W.PinnedView)} />;
};
function Le(e) {
	const { achievement, ...r } = e;
	return (
		<c.fm
			title={achievement.strName}
			description={achievement.strDescription}
			percentGlobalUnlocked={achievement.flAchieved}
			unlockDate={achievement.rtUnlocked}
			imgUrl={achievement.strImage}
			progress={_h(achievement)}
			glow={Qv(achievement.bAchieved, achievement.flAchieved)}
			{...r}
		/>
	);
}
function Ce(e) {
	const { name, avatarURL } = e;
	return (
		<div className={W.UserContext}>
			<b.Ul statusPosition="none" strAvatarURL={avatarURL} size="Small" />
			<div className={W.Text}>
				{Localize("#Achievements_FriendsAchievements", name)}
			</div>
		</div>
	);
}
function Me() {
	return (
		<div className={W.LoadingContainer}>
			<v.j className={W.Throbber} showFooter />
		</div>
	);
}
function Ue(e) {
	const t = w$();
	const r = yq();
	return (
		<div className={W.ErrorContainer}>
			<div className={W.ErrorTitle}>
				{Localize("#Achievements_FailedToLoad_Title")}
			</div>
			<d.Z flow-children="row" className={W.ErrorButtons}>
				<y.$n onClick={t}>{Localize("#Button_Retry")}</y.$n>
				<y.$n onClick={r}>{Localize("#ActionButtonLabelBack")}</y.$n>
			</d.Z>
		</div>
	);
}
