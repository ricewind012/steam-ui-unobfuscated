import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./3475.js";
import s from "./41230.js";
import o, { q3 } from "./90095.js";
import l, { A as A_1 } from "./90765.js";
import c from "./1965.js";
import u, { Fd } from "./52451.js";
import d, { H_ as H } from "./47801.js";
import A from "./87935.js";
import p, { Qn } from "./72476.js";
import { ID } from "./44846.js";
import h from "./88750.js";
import C from "./90242.js";
import _ from "./50376.js";
import f from "./60712.js";
import y from "./21154.js";
import { lX } from "./31084.js";
import B from "./69164.js";
import v from "./26271.js";
import I, { S1 } from "./43520.js";
import { OJ } from "./5640.js";
import { Qt } from "./18057.js";
import { wT } from "./28934.js";
import R from "./10294.js";
import { t7 } from "./82594.js";
const b = f;
const S = y;
export function Qd(e) {
	const { overview, details, workshopVisible, marketPresence } = e;
	const s = Qn();
	const l = ((e, t, r = {}) => {
		let { appid } = e;
		const i = H(appid);
		const [a] = t7(e.optional_parent_app_id ?? 0, {});
		return q3(() => {
			const { bWorkshopVisible, bMarketPresence } = r;
			const l = e.BIsModOrShortcut();
			const c = e.app_type == 8;
			if (c && e.optional_parent_app_id) {
				appid = e.optional_parent_app_id;
			}
			const u = c && a?.HasDemoStandaloneStorePage() ? e.appid : appid;
			const d = [];
			if (!l) {
				const e = ID(p.TS.LAUNCHER_TYPE);
				const r = !e && i.rgCards?.length > 0;
				const t_bAvailableContentOnStore = t.bAvailableContentOnStore;
				const l = [
					{
						label: Localize("#AppDetails_Links_Store"),
						url: A.B7.BuildStoreAppURL(u, "primarylinks"),
					},
					t_bAvailableContentOnStore && {
						label: Localize("#AppDetails_Links_DLC"),
						url: A.B7.BuildStoreAppDlcURL(appid, "primarylinks"),
					},
					!e && {
						label: Localize("#AppDetails_Links_Community"),
						link: "GameHub",
						appid: appid,
					},
					r && {
						label: Localize("#AppDetails_Links_PointsShop"),
						url: A.B7.BuildAppPointsShopURL(appid),
					},
					!e && {
						label: Localize("#AppDetails_Link_Discussions"),
						link: "GameHubDiscussions",
						appid: appid,
					},
					!e && {
						label: Localize("#AppDetails_Link_Guides"),
						link: "GameHubGuides",
						appid: appid,
					},
					bWorkshopVisible && {
						label: Localize("#AppDetails_Link_Workshop"),
						link: "SteamWorkshopPage",
						appid: appid,
					},
					bMarketPresence && {
						label: Localize("#AppDetails_Link_Market"),
						link: "CommunityMarketApp",
						appid: appid,
					},
					!R.Ih.BKioskModeLocked() && {
						label: Localize("#AppDetails_Link_Support"),
						link: "HelpAppPage",
						appid: appid,
					},
				];
				d.push(...l.filter(Boolean));
			}
			return d;
		});
	})(overview, details, {
		bMarketPresence: marketPresence,
		bWorkshopVisible: workshopVisible,
	});
	if (s) {
		return <L links={l} />;
	} else {
		return <N links={l} {...e} />;
	}
}
let N = class extends i.Component {
	state = {
		nRowHeight: 0,
		nRows: 0,
		nMaxRows: 0,
		rgChildPositions: [],
		bPointsShopStateLoaded: false,
	};
	m_resizeObserver;
	m_elInnerLinks;
	constructor(e) {
		super(e);
		window.addEventListener("resize", this.OnResize);
	}
	componentWillUnmount() {
		this.StopListening();
		window.removeEventListener("resize", this.OnResize);
	}
	StopListening() {
		if (this.m_resizeObserver) {
			this.m_resizeObserver.disconnect();
			this.m_resizeObserver = undefined;
		}
	}
	componentDidUpdate(e) {
		if (
			e.overview.appid != this.props.overview.appid ||
			e.workshopVisible != this.props.workshopVisible ||
			e.workshopVisible != this.props.workshopVisible ||
			e.marketPresence != this.props.marketPresence ||
			e.workshopVisible != this.props.workshopVisible ||
			e.marketPresence != this.props.marketPresence ||
			e.links.length != this.props.links.length
		) {
			this.CalculateLinkPositions();
		}
	}
	OnResize() {
		this.CalculateLinkPositions();
	}
	BindInnerLinks(e) {
		this.m_elInnerLinks = e;
		this.StopListening();
		if (e) {
			this.m_resizeObserver = Fd(e, this.OnResize);
			this.CalculateLinkPositions();
		}
	}
	CalculateLinkPositions() {
		const e = this.m_elInnerLinks;
		if (e && e.children) {
			const t = e.children[0];
			const t_clientHeight = t.clientHeight;
			let n = 1;
			const i =
				e.ownerDocument.defaultView.innerHeight < parseInt(b.BreakTall) ? 1 : 3;
			const a = getComputedStyle(t);
			const s = parseInt(a.marginRight);
			const e_clientWidth = e.clientWidth;
			let l = 0;
			let c = 0;
			let m = 0;
			const u = [];
			for (let t = 0; t < e.children.length; t++) {
				const a = e.children[t].clientWidth;
				if (a > e_clientWidth) {
					for (let r = t; r < e.children.length; r++) {
						u.push({
							x: -1,
							y: -1,
						});
					}
					break;
				}
				if (l + a > e_clientWidth) {
					l = 0;
					c++;
					n++;
					m = 0;
				}
				if (c < i) {
					u.push({
						x: l,
						y: c * t_clientHeight,
					});
				} else {
					u.push({
						x: -1,
						y: -1,
					});
				}
				if (t < e.children.length - 1) {
					if (c == 0) {
						l = l + a + s;
					} else {
						while (u[++m].x < l + a && u[m].y == 0) {}
						if (u[m].y != 0) {
							l = 0;
							c++;
							n++;
							m = 0;
						} else {
							l = u[m].x;
						}
					}
				}
			}
			if (
				t_clientHeight != this.state.nRowHeight ||
				n != this.state.nRows ||
				n != this.state.nRows ||
				JSON.stringify(u) != JSON.stringify(this.state.rgChildPositions)
			) {
				this.setState({
					nRowHeight: t_clientHeight,
					nRows: n,
					nMaxRows: i,
					rgChildPositions: u,
				});
			}
		}
	}
	render() {
		const { links } = this.props;
		if (links.length == 0) {
			return null;
		}
		let t = this.state.rgChildPositions.findIndex((e) => e.x == -1) !== -1;
		let r = 0;
		return (
			<c.n
				flow-children="row"
				className={S.LinksSection}
				rightColumnSection
				availableOffline
			>
				<c.n.Body className={S.LinksSectionBody}>
					<B.Z
						flow-children="row"
						className={A_1(S.Links)}
						ref={this.BindInnerLinks}
						style={{
							height:
								this.state.nRowHeight *
								Math.min(this.state.nRows, this.state.nMaxRows),
						}}
					>
						{links.map((e) => (
							<Kd
								key={e.label}
								position={this.state.rgChildPositions[r++]}
								label={e.label}
								url={e.url}
								link={e.link}
								appid={e.appid}
							/>
						))}
					</B.Z>
					{t && (
						<F
							links={links.filter(
								(e, t) => this.state.rgChildPositions[t]?.x == -1,
							)}
						/>
					)}
				</c.n.Body>
			</c.n>
		);
	}
};
function F(e) {
	const { links } = e;
	const r = wT();
	const n = (e) => {
		const n = (
			<h.tz>
				{links.map((e) => (
					<P key={e.label} {...e} showUnlockDialog={r} />
				))}
			</h.tz>
		);
		lX(n, e.currentTarget, {
			bOverlapHorizontal: true,
			bOverlapVertical: false,
		});
	};
	return (
		<C.ml className={S.MenuButton} onClick={n} onContextMenu={n}>
			<_.faJ />
		</C.ml>
	);
}
export function Kd(e) {
	let t = {};
	let r = e.position && e.position.x != -1;
	if (r) {
		t = {
			left: e.position.x,
			top: e.position.y,
		};
	} else if (e.position) {
		t = {
			opacity: 0,
			pointerEvents: "none",
			zIndex: -100,
		};
	}
	return (
		<div className={A_1(S.LinkInner, e.className)} style={t}>
			<AX
				className={e.innerClassName}
				label={e.label}
				link={e.link}
				appid={e.appid}
				url={e.url}
				isVisible={r}
			/>
		</div>
	);
}
export function AX(e) {
	const t = e.url ? e.url : A.B7.ResolveURL(e.link, e.appid);
	const r = Qt(t);
	const n = OJ(t);
	const s = n != 0;
	const o = wT();
	return (
		<B.Z
			className={A_1(S.Anchor)}
			onActivate={
				s
					? () => {
							const e = A.B7.GetParentalFeatureForFullUrl(t);
							o(n, e ?? a.uX, r);
						}
					: r
			}
			focusable={e.isVisible ?? true}
		>
			<div className={A_1(S.Link, s && S.Disabled, e.className)}>
				<span className={S.Text}>{e.label}</span>
			</div>
		</B.Z>
	);
}
function P(e) {
	const { label, link, appid, url, showUnlockDialog } = e;
	const c = url || A.B7.BuildSteamURL(link, appid);
	const m = Qt(c);
	const u = OJ(c);
	const d = u != 0;
	const p = A.B7.GetParentalFeatureForFullUrl(c);
	return (
		<h.kt
			onSelected={
				d
					? () => {
							showUnlockDialog(u, p ?? a.uX, m);
						}
					: m
			}
			className={A_1(S.ContextMenuItem, d && S.Disabled)}
		>
			{label}
		</h.kt>
	);
}
function L(e) {
	const { links } = e;
	const r = S1();
	return (
		<I.VJ>
			<B.Z
				flow-children="row"
				style={{
					width: "100vw",
				}}
			>
				<v.Q
					edgeMask="none"
					fnUpdateArrows={() => {}}
					fnRenderScrollingDiv={({ htmlElementRef, ...t }) => (
						<div {...t} ref={htmlElementRef} style={r} />
					)}
				>
					{links.map((e) => (
						<AX {...e} key={e.label} />
					))}
					<div className={S.ForcedCarouselPadding} data-carousel="ignore" />
				</v.Q>
			</B.Z>
		</I.VJ>
	);
}
Cg([u.oI], N.prototype, "OnResize", null);
Cg([u.oI], N.prototype, "BindInnerLinks", null);
Cg([u.oI], N.prototype, "CalculateLinkPositions", null);
N = Cg([s.PA], N);
