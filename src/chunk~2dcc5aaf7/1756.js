import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a, { q3 } from "./90095.js";
import s from "./63696.js";
import o from "./78325.js";
import l, { yq } from "./11131.js";
import { OJ } from "./63439.js";
import m from "./64608.js";
import u from "./50376.js";
import d from "./35488.js";
import p from "./20690.js";
import g from "./3524.js";
import { l6 } from "./52451.js";
import C from "./98995.js";
class _ {
	m_browser;
	m_bFindInPage = false;
	m_strFind = "";
	m_nResults = 0;
	m_nActiveResultIndex = 0;
	constructor(e) {
		Gn(this);
		this.m_browser = e;
		e.on("toggle-find-in-page", this.OnToggleFindInPage);
		e.on("find-in-page-results", this.OnFindInPageResults);
	}
	OnToggleFindInPage() {
		this.m_bFindInPage = !this.m_bFindInPage;
	}
	OnFindInPageResults(e, t) {
		if (this.m_nResults != e) {
			this.m_nResults = e;
		}
		this.m_nActiveResultIndex = t;
	}
	StartFind() {
		this.m_bFindInPage = true;
	}
	Find(e, t) {
		let r = e == this.m_strFind;
		if (!r) {
			this.m_strFind = e;
		}
		this.m_browser.FindInPage(e, r, t);
	}
	FindPrevious() {
		this.m_browser.FindInPage(this.m_strFind, true, true);
	}
	FindNext() {
		this.m_browser.FindInPage(this.m_strFind, true, false);
	}
	StopFind() {
		this.m_browser.StopFindInPage();
		this.m_bFindInPage = false;
	}
	get find_in_page() {
		return this.m_bFindInPage;
	}
	get find_string() {
		return this.m_strFind;
	}
	get num_results() {
		return this.m_nResults;
	}
	get active_result_index() {
		return this.m_nActiveResultIndex;
	}
}
export function M(e, t, r, n, i, a) {
	if (t && n) {
		return (
			<B
				strName={e}
				ownerWindow={t}
				targetBrowserInfo={r}
				browser={n}
				focusNavController={i}
				bActive={a}
			/>
		);
	} else {
		return null;
	}
}
function B(e) {
	const t = 330;
	const {
		strName,
		ownerWindow,
		targetBrowserInfo,
		browser,
		focusNavController,
		bActive,
	} = e;
	const S = ownerWindow?.SteamClient.Browser.GetBrowserID();
	const w = `${strName}_Find`;
	const B = yq(l.Dr.PopupContextMenu) | l.Wf.Hidden;
	const VRef = s.useRef(undefined);
	if (!VRef.current && browser) {
		VRef.current = new _(browser);
	}
	const IRef = s.useRef(undefined);
	const E = q3(() => VRef.current.find_in_page);
	const M = q3(() => VRef.current.find_string);
	const T = q3(() => VRef.current.num_results);
	const R = q3(() => VRef.current.active_result_index);
	const { popup, element, popupObj } = OJ(w, {
		title: w,
		html_class: "fullheight",
		body_class: "fullheight",
		popup_class: "fullheight",
		target_browser: targetBrowserInfo,
		window_opener_id: S,
		parent_container_popup_id: S,
		dimensions: {
			width: t,
			height: 60,
		},
		eCreationFlags: B,
		bNoInitialShow: true,
	});
	const F = s.useCallback((e) => {
		VRef.current.Find(e.target.value, false);
	}, []);
	const G = s.useCallback(() => {
		VRef.current.FindPrevious();
	}, []);
	const O = s.useCallback(() => {
		VRef.current.FindNext();
	}, []);
	const P = s.useCallback(() => {
		VRef.current.StopFind();
	}, []);
	const L = s.useCallback((e) => {
		if (e.key === "Escape") {
			VRef.current.StopFind();
			e.stopPropagation();
		}
	}, []);
	const z = s.useCallback(
		(e) => {
			if (bActive && e.key == "f" && e.ctrlKey) {
				if (E) {
					IRef.current?.Focus();
					IRef.current?.element.select();
				} else {
					VRef.current.StartFind();
					e.preventDefault();
					e.stopPropagation();
				}
			}
		},
		[bActive, E],
	);
	l6(ownerWindow, "keydown", z, {
		capture: true,
	});
	l6(popup, "keydown", z, {
		capture: true,
	});
	const x = s.useCallback(() => {
		let e = browser.GetBounds();
		ownerWindow.SteamClient.Window.GetWindowRestoreDetails().then((r) => {
			const n = e.x + e.width - t - 20;
			const e_y = e.y;
			try {
				popup?.SteamClient.Window.PositionWindowRelative(r, n, e_y, t, 60);
			} catch (e) {
				console.error(e);
			}
		});
	}, [ownerWindow, browser, popup]);
	l6(ownerWindow, "resize", x);
	s.useEffect(() => {
		if (browser && popupObj) {
			if (E && bActive) {
				if (popup) {
					let e = browser.GetBounds();
					ownerWindow.SteamClient.Window.GetWindowRestoreDetails().then((r) => {
						const n = e.x + e.width - t - 20;
						const e_y = e.y;
						try {
							popup.SteamClient.Window.PositionWindowRelative(r, n, e_y, t, 60);
							popup.SteamClient.Window.ShowWindow();
							popup.SteamClient.Window.BringToFront();
							IRef.current?.Focus();
							IRef.current?.element.select();
						} catch (e) {
							console.error(e);
						}
					});
				} else {
					popupObj.Show();
				}
			} else {
				popup?.SteamClient.Window.HideWindow();
			}
		}
	}, [bActive, E, ownerWindow, browser, popup, popupObj, element]);
	if (element) {
		return (
			<g.b5 ownerWindow={popup}>
				{o.createPortal(
					<div className={p.FindBar}>
						<m.pd
							className={p.SearchInput}
							value={M}
							onChange={F}
							onKeyDown={L}
							ref={IRef}
							focusable
						/>
						<div className={p.SearchResults}>
							{R}/{T}
						</div>
						<C.he toolTipContent={(0, Localize)("#BrowserFindInPage_Previous")}>
							<m.$n
								className={p.ControlButton}
								svgicon={() => <u.L0X direction="up" />}
								onClick={G}
							/>
						</C.he>
						<C.he toolTipContent={(0, Localize)("#BrowserFindInPage_Next")}>
							<m.$n
								className={p.ControlButton}
								svgicon={() => <u.L0X direction="down" />}
								onClick={O}
							/>
						</C.he>
						<C.he toolTipContent={(0, Localize)("#BrowserFindInPage_Close")}>
							<m.$n
								className={p.ControlButton}
								svgicon={() => <d.Close />}
								onClick={P}
							/>
						</C.he>
					</div>,
					element,
				)}
			</g.b5>
		);
	} else {
		return null;
	}
}
Cg([i.sH], _.prototype, "m_bFindInPage", undefined);
Cg([i.sH], _.prototype, "m_strFind", undefined);
Cg([i.sH], _.prototype, "m_nResults", undefined);
Cg([i.sH], _.prototype, "m_nActiveResultIndex", undefined);
Cg([i.XI.bound], _.prototype, "OnToggleFindInPage", null);
Cg([i.XI.bound], _.prototype, "OnFindInPageResults", null);
Cg([i.XI], _.prototype, "StartFind", null);
Cg([i.XI], _.prototype, "Find", null);
Cg([i.XI], _.prototype, "StopFind", null);
