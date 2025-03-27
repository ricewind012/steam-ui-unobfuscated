import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { q3 } from "./90095.js";
import a from "./22176.js";
import s, { $2 } from "./96680.js";
import o, { v as v_1 } from "./55700.js";
import l from "./73375.js";
import c, { cZ, hL, uD } from "./52451.js";
import m, { wm } from "./69913.js";
import u from "./83718.js";
import d, { D as D_1 } from "./24590.js";
import A, { Cg } from "./34629.js";
import p from "./63032.js";
import g, { Gn } from "./89193.js";
import _ from "./39940.js";
import { T as T_1 } from "./78057.js";
import b from "./46422.js";
import y from "./48180.js";
import S, { J6 } from "./32411.js";
import w, { wB } from "./17754.js";
import B, { PA } from "./41230.js";
import v from "./79671.js";
import I from "./44846.js";
import E, { lX } from "./31084.js";
import M, { R7 } from "./11131.js";
import T from "./88750.js";
import R from "./64608.js";
import k, { Nr } from "./42318.js";
import D from "./35488.js";
import N from "./10606.js";
import F from "./50376.js";
import G from "./98995.js";
import O, { A as A_1 } from "./90765.js";
import L, { gQ, Yb, $b } from "./39002.js";
import z, { M as M_1 } from "./1756.js";
import { b as b_1 } from "./57337.js";
import { sO, OJ } from "./5640.js";
import W from "./28934.js";
import { nv } from "./51582.js";
function h(e) {
	let TRef = n.useRef(undefined);
	if (!TRef.current) {
		TRef.current = new C(e);
		TRef.current.Init();
	}
	return TRef.current;
}
class C {
	m_unAppID;
	m_storage;
	m_rgBookmarks = [];
	constructor(e) {
		Gn(this);
		this.m_unAppID = e;
		this.m_storage = new p.O();
	}
	GetKey() {
		return `BrowserBookmarks_${this.m_unAppID}`;
	}
	async Init() {
		let e = await this.m_storage.GetObject(this.GetKey());
		if (e) {
			this.m_rgBookmarks = e;
		}
	}
	async Save() {
		let e = this.GetKey();
		this.m_storage
			.RemoveObject(e)
			.finally(() =>
				this.m_storage.StoreObject(this.GetKey(), this.m_rgBookmarks),
			);
	}
	AddBookmark(e, t) {
		if (!this.BIsBookmarked(t)) {
			this.m_rgBookmarks.push({
				name: e,
				url: t,
			});
			this.Save();
		}
	}
	RemoveBookmark(e) {
		let t = this.m_rgBookmarks.findIndex((t) => t.url == e);
		if (t >= 0) {
			this.m_rgBookmarks.splice(t, 1);
			this.Save();
		}
	}
	SetBookmarks(e) {
		this.m_rgBookmarks = e;
		this.Save();
	}
	UpdateBookmark(e, t, r) {
		this.m_rgBookmarks[e] = {
			name: t,
			url: r,
		};
		this.Save();
	}
	BIsBookmarked(e) {
		return !!this.m_rgBookmarks.find((t) => t.url == e);
	}
	get bookmarks() {
		return this.m_rgBookmarks;
	}
	get appid() {
		return this.m_unAppID;
	}
}
Cg([g.sH], C.prototype, "m_rgBookmarks", undefined);
Cg([g.XI], C.prototype, "AddBookmark", null);
Cg([g.XI], C.prototype, "RemoveBookmark", null);
Cg([g.XI], C.prototype, "SetBookmarks", null);
Cg([g.XI], C.prototype, "UpdateBookmark", null);
function V(e, t, r, i) {
	let [a, s] = wB(t, i, r);
	n.useEffect(() => {
		cZ(a, e);
	}, [e, a]);
	return s.current;
}
function H(e) {
	const t = $2();
	return n.useCallback(
		(e) => {
			const r = "steam://openexternalforpid/";
			let n = e.indexOf(r);
			if (n != -1) {
				const r = e.substring(n + 27);
				n = r.indexOf("/");
				if (n != -1) {
					const e = r.substring(n + 1);
					t.Navigator.ExternalWeb(e);
					return true;
				}
			}
			return false;
		},
		[t],
	);
}
function J_1(e) {
	const { onClick, tooltip, bDisabled, bToggled, children } = e;
	return (
		<G.he
			className={A_1(
				y.StatusIcon,
				y.NavigationButton,
				bDisabled && y.Disabled,
				bToggled && y.Toggled,
			)}
			onClick={bDisabled || onClick}
			toolTipContent={tooltip}
		>
			{children}
		</G.he>
	);
}
const Q_1 = Nr((e) => {
	const { className, popup, manager, bookmarks, bCanChangeURL, strHomeURL } = e;
	const m = q3(() => manager.Loading);
	const u = q3(() => manager.PageSecurity);
	const d = q3(() => manager.Title);
	const A = q3(() => manager.DisplayURL);
	const p = q3(() => manager.CanGoBackward);
	const g = q3(() => manager.CanGoForward);
	const h = !m && A;

	const { Reload, GoBack, GoForward } = manager;

	const BRef = n.useRef(undefined);
	const w = q3(() => bookmarks && bookmarks.BIsBookmarked(A));
	let [B, v, I] = J6(popup, A);
	const E = n.useCallback(() => {
		manager.Browser.LoadURL(strHomeURL);
	}, [manager.Browser, strHomeURL]);
	const M = n.useCallback(
		(e) => {
			const e_target = e.target;
			if (e.key === "Enter") {
				manager.Browser.LoadURL(e_target.value);
			}
		},
		[manager.Browser],
	);
	const T = n.useCallback(
		(e, t) => {
			if (bookmarks.BIsBookmarked(t)) {
				bookmarks.RemoveBookmark(t);
			} else {
				bookmarks.AddBookmark(e || t, t);
			}
		},
		[bookmarks],
	);
	const k = n.useCallback((e) => {
		if (BRef.current?.element) {
			BRef.current.element.value = e;
		}
	}, []);
	const N = n.useCallback((e, t) => {
		if (BRef.current?.element) {
			BRef.current.element.value = e;
		}
	}, []);
	const F = n.useCallback((e, t) => {
		if (BRef.current?.element) {
			BRef.current.element.value = e;
		}
	}, []);
	hL(manager.StartRequestCallbacks, k);
	hL(manager.StartLoadingCallbacks, N);
	hL(manager.FinishedRequestCallbacks, F);
	let L = m ? <D.Spinner /> : <D.Globe />;
	let z = (0, Localize)("#Browser_Loading");
	if (!m && A && A.startsWith("https://") && u?.bIsSecure) {
		if (u?.bHasCertError) {
			L = <D.Caution className={y.CertError} />;
			z = (0, Localize)("#Browser_NotSecure");
		} else {
			L = <D.Lock locked />;
			z = u?.certName;
		}
	}
	return (
		<div className={A_1(y.URLBar, className)}>
			<J_1
				tooltip={(0, Localize)("#BrowserContextMenu_GoBack")}
				onClick={GoBack}
				bDisabled={!p}
			>
				<D.Arrow direction="left" />
			</J_1>
			<J_1
				tooltip={(0, Localize)("#BrowserContextMenu_GoForward")}
				onClick={GoForward}
				bDisabled={!g}
			>
				<D.Arrow direction="right" />
			</J_1>
			<J_1
				tooltip={(0, Localize)("#BrowserContextMenu_Reload")}
				onClick={Reload}
				bDisabled={!h}
			>
				<D.Refresh />
			</J_1>
			{bookmarks && (
				<J_1
					tooltip={(0, Localize)(
						w ? "#Browser_RemoveBookmark" : "#Browser_AddBookmark",
					)}
					onClick={() => T(d, A)}
					bToggled={w}
				>
					<D.Bookmark />
				</J_1>
			)}
			{strHomeURL && (
				<J_1 tooltip={(0, Localize)("#Browser_Home")} onClick={E}>
					<D.Home />
				</J_1>
			)}
			<div className={y.URLBarText} onClick={bCanChangeURL || v}>
				{!bCanChangeURL && <S.hL data={B} onAnimationComplete={I} />}
				<G.he className={A_1(y.StatusIcon, y.LockIcon)} toolTipContent={z}>
					{L}
				</G.he>
				<div className={A_1(y.URL, u?.bHasCertError && y.CertError)}>
					{!bCanChangeURL && A}
					{bCanChangeURL && (
						<R.pd
							type="input"
							ref={(e) => {
								BRef.current = e;
								if (e?.element) {
									e.element.value = A;
								}
							}}
							onKeyPress={M}
							spellCheck={false}
						/>
					)}
				</div>
			</div>
		</div>
	);
});
function Q(e) {
	return (
		<div className={y.LoadingThrobber}>
			<img alt="Steam Spinner" src={_.A} />
		</div>
	);
}
function Z(e) {
	const {
		appid,
		strHomeURL,
		onCloseTab,
		onSelectTab,
		onTabNavigate,
		onAddTab,
		onNewTab,
		onReorderTab,
		onBrowserFocusChanged,
		activeRequestID,
		rgPages,
		nMaxTabs,
		popup,
		onTitleChange,
		bPinned,
		bShowPinnedView,
	} = e;
	const S = nMaxTabs || 100;
	const w = rgPages.length < S;
	const B = h(appid);
	let VRef = n.useRef(undefined);
	VRef.current ||= new Map();
	const [I, setI] = n.useState();
	const M = n.useCallback(
		(e) => {
			onCloseTab(e);
			VRef.current.delete(e);
		},
		[onCloseTab],
	);
	n.useCallback(() => {
		onCloseTab(activeRequestID);
		VRef.current.delete(activeRequestID);
	}, [onCloseTab, activeRequestID]);
	const T = H();
	const R = n.useCallback(
		(e) =>
			e
				? (VRef.current.set(e.ID, e),
					e.ID == activeRequestID && setI(e),
					e.AddSteamURLCallback(T),
					() => e?.RemoveSteamURLCallback(T))
				: () => {},
		[VRef, T, activeRequestID],
	);
	const k = n.useCallback(
		(e) => {
			onSelectTab(e);
			setI(VRef.current.get(e));
		},
		[onSelectTab, VRef],
	);
	n.useEffect(() => {
		if (!VRef.current.has(activeRequestID)) {
			setI(undefined);
		}
	}, [activeRequestID]);
	const D = q3(() => I?.Title);
	const N = q3(() => I?.DisplayURL);
	const F = sO(N);
	n.useEffect(() => {
		onTitleChange(
			F ? (0, Localize)("#DisplayStatus_Compact_ParentalBlocked") : D,
		);
	}, [D, onTitleChange, F]);
	const [G, L, z] = uD(false);
	return (
		<>
			<_$
				className={A_1(bShowPinnedView && y.PinnedView)}
				popup={popup}
				browserManagers={VRef.current}
				bookmarks={B}
				activeRequestID={activeRequestID}
				rgPages={rgPages}
				onAddTab={onAddTab}
				onSelectTab={k}
				onCloseTab={M}
				onReorderTab={onReorderTab}
				onOrganizeBookmarks={L}
				bShowAddTabButton={w}
			/>
			{I && (
				<Q_1
					className={bShowPinnedView ? y.PinnedViewURLBar : undefined}
					popup={popup}
					manager={I}
					bookmarks={B}
					strHomeURL={strHomeURL}
					bCanChangeURL
				/>
			)}
			{rgPages.map((e) => (
				<Re
					key={e.requestid}
					popup={popup}
					appid={appid}
					tab={e}
					bActive={e.requestid == activeRequestID && !G}
					refBrowserManager={R}
					onNavigate={onTabNavigate}
					onCloseTab={M}
					onNewTab={onNewTab}
					onBrowserFocusChanged={onBrowserFocusChanged}
					bPinned={bPinned}
					bShowPinnedView={bShowPinnedView}
				/>
			))}
			{G && <X bookmarks={B} closeModal={z} />}
		</>
	);
}
function Y(e) {
	const { bookmarks, bookmark, idx, onEditBookmark } = e;
	const s = n.useCallback(() => {
		bookmarks.RemoveBookmark(bookmark.url);
	}, [bookmarks, bookmark.url]);
	return (
		<v.sx draggableId={bookmark.url} index={idx}>
			{(e, t) => (
				<div
					className={A_1(y.ManageBookmarkField, t.isDragging && y.IsDragging)}
					ref={e.innerRef}
					{...e.draggableProps}
					{...e.dragHandleProps}
					style={gQ(e.draggableProps.style)}
				>
					<R.D0
						label={bookmark.name}
						description={<div className={y.URL}>{bookmark.url}</div>}
						icon={<D.Rows className={y.DragHandle} />}
					>
						<div className={y.ManageBookmarkButtons}>
							<R.$n className={y.ManageBookmarkButton} onClick={onEditBookmark}>
								{(0, Localize)("#Browser_OrganizeBookmarks_Edit")}
							</R.$n>
							<R.$n className={y.ManageBookmarkButton} onClick={s}>
								{(0, Localize)("#Browser_OrganizeBookmarks_Remove")}
							</R.$n>
						</div>
					</R.D0>
				</div>
			)}
		</v.sx>
	);
}
function K(e) {
	const { name, url, onOK, closeModal } = e;
	const [s, setS] = n.useState(name);
	const [l, setL] = n.useState(url);
	const MRef = n.useRef(undefined);
	const URef = n.useRef(undefined);
	return (
		<N.EN active>
			<N.o0
				strTitle={(0, Localize)("#Browser_OrganizeBookmarks_EditBookmark")}
				onOK={() => onOK(s, l)}
				closeModal={closeModal}
				bOKDisabled={s.length == 0 || l.length == 0}
			>
				<div className={y.EditBookmarkDialog}>
					<R.pd
						ref={MRef}
						value={s}
						onChange={(e) => setS(e.currentTarget.value)}
						label={(0, Localize)("#Browser_OrganizeBookmarks_EditName")}
					/>
					<R.pd
						ref={URef}
						value={l}
						onChange={(e) => setL(e.currentTarget.value)}
						label={(0, Localize)("#Browser_OrganizeBookmarks_EditLink")}
					/>
				</div>
			</N.o0>
		</N.EN>
	);
}
const X = PA((e) => {
	const { bookmarks, closeModal } = e;
	const t_bookmarks = bookmarks.bookmarks;
	const a = T_1(bookmarks.appid);
	const s =
		bookmarks.appid == I.w1 ? (0, Localize)("#Menu_Steam") : a.strDisplayName;
	const [o, l, m] = uD(false);
	const [u, setU] = n.useState(0);
	const t_bookmarks_u = t_bookmarks[u];
	const { ownerWindow } = R7();
	const g = n.useCallback(
		(e) => {
			setU(e);
			l();
		},
		[l],
	);
	const h = n.useCallback(
		(e, r) => {
			if (!e.destination) {
				return;
			}
			let n = Yb(bookmarks.bookmarks, e.source.index, e.destination.index);
			bookmarks.SetBookmarks(n);
		},
		[bookmarks],
	);
	return (
		<N.EN active>
			<N.o0
				bAlertDialog
				strTitle={(0, Localize)("#Browser_OrganizeBookmarks_Title", s)}
				closeModal={closeModal}
				onCancel={closeModal}
			>
				<v.JY onDragEnd={h} stylesInsertionPoint={ownerWindow?.document?.head}>
					<v.gL droppableId="droppable">
						{(e, r) => (
							<div
								className={A_1(
									y.ManageBookmarksList,
									r.isDraggingOver && y.IsDraggingOver,
								)}
								{...e.droppableProps}
								ref={e.innerRef}
							>
								{t_bookmarks.map((e, r) => (
									<Y
										key={e.url}
										bookmarks={bookmarks}
										idx={r}
										bookmark={e}
										onEditBookmark={() => g(r)}
									/>
								))}
								{e.placeholder}
							</div>
						)}
					</v.gL>
				</v.JY>
			</N.o0>
			{o && (
				<K
					name={t_bookmarks_u?.name}
					url={t_bookmarks_u?.url}
					onOK={(e, r) => {
						bookmarks.UpdateBookmark(u, e, r);
					}}
					closeModal={m}
				/>
			)}
		</N.EN>
	);
});
function J(e) {
	const { bookmarks, onAddTab, onOrganizeBookmarks } = e;
	const a = n.useCallback(
		(e) => {
			if (bookmarks && bookmarks.bookmarks.length != 0) {
				lX(
					<T.tz>
						<T.kt onSelected={(e) => onAddTab()}>
							{(0, Localize)("#Browser_NewTab")}
						</T.kt>
						<T.K5 />
						<T.kt onSelected={onOrganizeBookmarks}>
							{(0, Localize)("#Browser_OrganizeBookmarks")}
						</T.kt>
						<T.K5 />
						{bookmarks.bookmarks.map((e, t) => (
							<T.kt key={t} onSelected={(t) => onAddTab(e.url)}>
								<div className={y.ContextMenuBookmarkName}>{e.name}</div>
							</T.kt>
						))}
					</T.tz>,
					e,
					{
						bForcePopup: true,
					},
				);
			} else {
				onAddTab();
			}
		},
		[bookmarks, onAddTab, onOrganizeBookmarks],
	);
	return (
		<div className={y.BrowserTab} onClick={a}>
			<F.FWt className={y.AddTabButton} />
		</div>
	);
}
const _$ = Nr((e) => {
	const {
		className,
		popup,
		browserManagers,
		bookmarks,
		activeRequestID,
		onCloseTab,
		onSelectTab,
		onAddTab,
		onReorderTab,
		onOrganizeBookmarks,
		bShowAddTabButton,
		rgPages,
	} = e;
	const p = n.useCallback(
		(e, t) => {
			if (onReorderTab) {
				onReorderTab(e.source.index, e.destination.index);
			}
		},
		[onReorderTab],
	);
	return (
		<>
			{popup?.document?.head && (
				<v.JY onDragEnd={p} stylesInsertionPoint={popup?.document?.head}>
					<v.gL droppableId="droppable" direction="horizontal">
						{(e, r) => (
							<div
								className={A_1(y.BrowserTabs, className)}
								{...e.droppableProps}
								ref={e.innerRef}
							>
								{rgPages.map((e, t) => (
									<v.sx
										draggableId={`${e.requestid}`}
										index={t}
										key={e.requestid}
									>
										{(t, r) => (
											<div
												ref={t.innerRef}
												{...t.draggableProps}
												{...t.dragHandleProps}
												style={$b(t.draggableProps.style)}
											>
												<Ee
													tab={e}
													browserManager={browserManagers.get(e.requestid)}
													bActive={e.requestid == activeRequestID}
													onSelectTab={onSelectTab}
													onCloseTab={onCloseTab}
												/>
											</div>
										)}
									</v.sx>
								))}
								{e.placeholder}
								{bShowAddTabButton && (
									<J
										bookmarks={bookmarks}
										onAddTab={onAddTab}
										onOrganizeBookmarks={onOrganizeBookmarks}
									/>
								)}
							</div>
						)}
					</v.gL>
				</v.JY>
			)}
		</>
	);
});
const Ee = Nr((e) => {
	const { tab, browserManager, bActive, onSelectTab, onCloseTab } = e;
	const LRef = n.useRef(undefined);
	const c = q3(
		() =>
			browserManager?.Title ||
			tab.strTitle ||
			tab.strTitle ||
			browserManager?.DisplayURL ||
			tab.strTitle ||
			browserManager?.DisplayURL ||
			tab.strURL,
	);
	const m = sO(tab.strURL);
	n.useEffect(() => {
		if (LRef.current && bActive) {
			LRef.current.scrollIntoView();
		}
	}, [bActive]);
	const u = n.useCallback(
		(e) => {
			if (e.button == 1) {
				onCloseTab(tab.requestid);
			}
		},
		[tab, onCloseTab],
	);
	return (
		<div
			ref={LRef}
			className={A_1(y.BrowserTab, bActive && y.Active)}
			onClick={bActive || (() => onSelectTab(tab.requestid))}
			onMouseDown={u}
		>
			<Te browserManager={browserManager} />
			<div className={y.TabTitle}>
				{m ? (0, Localize)("#DisplayStatus_Compact_ParentalBlocked") : c}
			</div>
			<D.Close
				className={y.CloseTabButton}
				onClick={(e) => {
					onCloseTab(tab.requestid);
					e.stopPropagation();
				}}
			/>
		</div>
	);
});
function Te(e) {
	const { browserManager } = e;
	const r = q3(() => browserManager?.Loading);
	const a = q3(() => browserManager?.FavIconURLs);
	if (!browserManager || r) {
		return <D.Spinner className={y.BrowserTabIcon} />;
	} else if (a && a.length != 0) {
		return <img className={y.BrowserTabIcon} src={a[0]} />;
	} else {
		return <D.Browse className={y.BrowserTabIcon} />;
	}
}
const Re = Nr((e) => {
	const {
		popup,
		appid,
		tab,
		bActive,
		onNavigate,
		onCloseTab,
		onNewTab,
		onBrowserFocusChanged,
		refBrowser,
		refBrowserManager,
		bPinned,
		bShowPinnedView,
	} = e;
	const f = `OverlayTab${tab.requestid}`;
	const S = appid == I.w1 ? "Valve Steam Client" : "Valve Steam GameOverlay";
	const [w, B] = v_1(popup, f, {
		strUserAgentIdentifier: S,
		bOnlyAllowTrustedPopups: false,
		strURL: tab.strURL,
	});
	D_1(w);
	const v = $2();
	const E = M_1(
		f,
		popup,
		v.params.browserInfo,
		w,
		b.oy.NavigationManager,
		bActive,
	);
	const M = b_1(popup, v.params.browserInfo, w);
	const T = n.useCallback(() => {
		onCloseTab(tab.requestid);
	}, [onCloseTab, tab.requestid]);
	const R = V(w, appid, T, tab.requestid);
	const k = n.useCallback(
		(e, t) => {
			onNavigate(tab.requestid, e, t);
		},
		[tab.requestid, onNavigate],
	);
	hL(R?.FinishedRequestCallbacks, k);
	hL(R?.NewTabCallbacks, onNewTab);
	const D = OJ(tab.strURL);
	const N = D != 0;
	n.useEffect(() => {
		if (w) {
			let e = JSON.stringify({
				bPinned: bPinned == 1,
				bShowPinnedView: bShowPinnedView == 1,
			});
			w.PostMessage("PinnedView", e);
		}
	}, [w, bPinned, bShowPinnedView]);
	const F = n.useCallback(() => {
		let e = JSON.stringify({
			bPinned: bPinned == 1,
			bShowPinnedView: bShowPinnedView == 1,
		});
		w.PostMessage("PinnedView", e);
	}, [w, bPinned, bShowPinnedView]);
	hL(R?.FinishedRequestCallbacks, F);
	n.useEffect(() => {
		cZ(refBrowser, w);
		if (w) {
			w.on("focus-changed", onBrowserFocusChanged);
		}
		return () => {
			if (w) {
				w.off("focus-changed", onBrowserFocusChanged);
			}
			cZ(refBrowser, null);
		};
	}, [refBrowser, w, onBrowserFocusChanged]);
	n.useEffect(() => {
		cZ(refBrowserManager, R);
		return () => cZ(refBrowserManager, null);
	}, [refBrowserManager, R]);
	n.useEffect(() => {}, [N]);
	return (
		<>
			<l.m4
				browser={w}
				visible={B && bActive && !N}
				className={y.BrowserViewHost}
			/>
			{!B && bActive && <Q />}
			{B && bActive && N && (
				<div className={y.ParentalPINDialogWrapper}>
					<W.g5 blockReason={D} />
				</div>
			)}
			{E}
			{M}
		</>
	);
});
function Ie(e) {
	const {
		appid,
		strName,
		strInitialURL,
		onClose,
		onNewTab,
		popup,
		onTitleChange,
		refBrowserManager,
		bTemporary,
		bCanChangeURL,
		bUseSavedSettings,
		bPinned,
		bShowPinnedView,
	} = e;
	const B = `OverlayPopupURL${appid}_${strName}`;
	const v =
		(bUseSavedSettings ? window.localStorage.getItem(B) : null) ||
		strInitialURL;
	const [I, E] = v_1(popup, strName, {
		strURL: v,
		strUserAgentIdentifier: "Valve Steam GameOverlay",
		bOnlyAllowTrustedPopups: false,
	});
	const M = V(I, appid, onClose);
	const T = h(appid);
	const R = q3(() => M?.Title);
	D_1(I);
	const k = $2();
	const D = M_1(
		strName,
		popup,
		k.params.browserInfo,
		I,
		b.oy.NavigationManager,
		true,
	);
	const N = b_1(popup, k.params.browserInfo, I);
	n.useEffect(() => {
		onTitleChange(R);
	}, [R, onTitleChange]);
	n.useEffect(() => {
		cZ(refBrowserManager, M);
		return () => cZ(refBrowserManager, null);
	}, [refBrowserManager, M]);
	const F = n.useCallback(() => {
		if (bUseSavedSettings && M) {
			window.localStorage.setItem(B, M.DisplayURL);
		}
	}, [bUseSavedSettings, B, M]);
	hL(M?.BeforeCloseCallbacks, F);
	hL(M?.NewTabCallbacks, onNewTab);
	n.useEffect(() => {
		if (I) {
			let e = JSON.stringify({
				bPinned: bPinned == 1,
				bShowPinnedView: bShowPinnedView == 1,
			});
			I.PostMessage("PinnedView", e);
		}
	}, [I, bPinned, bShowPinnedView]);
	const G = n.useCallback(() => {
		let e = JSON.stringify({
			bPinned: bPinned == 1,
			bShowPinnedView: bShowPinnedView == 1,
		});
		I.PostMessage("PinnedView", e);
	}, [I, bPinned, bShowPinnedView]);
	hL(M?.FinishedRequestCallbacks, G);
	const O = H();
	n.useEffect(() => {
		if (M) {
			M.AddSteamURLCallback(O);
		}
		let e = M;
		return () => e?.RemoveSteamURLCallback(O);
	}, [O, M]);
	return (
		<>
			{!!M && (
				<>
					<Q_1
						className={bShowPinnedView ? a.PinnedViewURLBar : undefined}
						popup={popup}
						manager={M}
						bookmarks={!bTemporary && T}
						strHomeURL={!bTemporary && strInitialURL}
						bCanChangeURL={bCanChangeURL}
					/>
					<l.m4 browser={I} visible={E} className={a.BrowserViewHost} />
				</>
			)}
			{!M && <Q />}
			{D}
			{N}
		</>
	);
}
export function f(e) {
	const {
		strName,
		appid,
		bUseSavedDimensions,
		refPopup,
		onClose,
		pinnedProps,
		...d
	} = e;
	const [A, setA] = n.useState();
	const [g, setG] = n.useState();
	const C = $2();
	const _ = n.useCallback(
		(e) => {
			const { dimensions, minWidth, minHeight } = wm(C, 1280, 1024, 600, 300);
			e.dimensions = dimensions;
			e.dimensions.left = undefined;
			e.dimensions.top = undefined;
			e.minWidth = minWidth;
			e.minHeight = minHeight;
			return e;
		},
		[C],
	);
	const f = nv(C, 1280, 1024, 600, 300);
	const b = bUseSavedDimensions ? f : _;
	return (
		<u.rG
			strName={strName}
			refPopup={(e) => {
				cZ(refPopup, e);
				setA(e);
			}}
			title={g}
			updateParamsBeforeShow={b}
			bUseSavedDimensions={bUseSavedDimensions}
			onClose={onClose}
			{...pinnedProps}
		>
			<Ie
				appid={appid}
				{...d}
				strName={strName}
				onTitleChange={setG}
				popup={A}
				onClose={onClose}
				bShowPinnedView={pinnedProps?.bShowPinnedView}
				bPinned={pinnedProps?.bPinned}
			/>
		</u.rG>
	);
}
export function $(e) {
	const {
		strName,
		strTitle,
		appid,
		refPopup,
		onClose,
		pinnedProps,
		bShowMin,
		bShowMax,
		onMinimize,
		onMaximize,
		...h
	} = e;
	const [C, setC] = n.useState();
	const [f, setF] = n.useState();
	const y = $2();
	const S = n.useCallback(
		(e) => {
			const { dimensions, minWidth, minHeight } = wm(y, 1280, 1024, 300, 300);
			e.dimensions = dimensions;
			e.dimensions.left = undefined;
			e.dimensions.top = undefined;
			e.minWidth = minWidth;
			e.minHeight = minHeight;
			return e;
		},
		[y],
	);
	const w = nv(y, 1280, 1024, 300, 300);
	const B = appid !== I.w1 ? w : S;
	const [v, setV] = n.useState(false);
	const T = n.useCallback((e) => {
		setV(e);
	}, []);
	const R = appid == I.w1;
	return (
		<u.rG
			strName={strName}
			strTitle={strTitle}
			refPopup={(e) => {
				cZ(refPopup, e);
				setC(e);
			}}
			title={f}
			bForceWindowFocused={v}
			updateParamsBeforeShow={B}
			eCreationFlags={M.Wf.Resizable | M.Wf.Composited}
			bUseSavedDimensions
			bShowMin={R || bShowMin}
			bShowMax={R || bShowMax}
			onMinimize={onMinimize}
			onMaximize={onMaximize}
			onClose={onClose}
			{...pinnedProps}
		>
			<Z
				appid={appid}
				onBrowserFocusChanged={T}
				{...h}
				onTitleChange={setF}
				popup={C}
				bShowPinnedView={pinnedProps?.bShowPinnedView}
				bPinned={pinnedProps?.bPinned}
			/>
		</u.rG>
	);
}
