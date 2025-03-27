import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { PA } from "./41230.js";
import s from "./18057.js";
import o, { pC } from "./93966.js";
import l from "./19037.js";
import { Tc } from "./31800.js";
import m from "./46422.js";
import u from "./96538.js";
import d from "./78057.js";
import A from "./74827.js";
import p from "./96593.js";
import g from "./47979.js";
import h from "./61175.js";
import C, { g as g_1, zy } from "./49519.js";
import { b$ } from "./90242.js";
import f from "./69164.js";
import b from "./10975.js";
import y from "./79421.js";
import S from "./26853.js";
import { A as A_1 } from "./90765.js";
import { Qn } from "./72476.js";
import v from "./69196.js";
import E from "./80818.js";
import M from "./59856.js";
import T from "./56262.js";
import R from "./46424.js";
import { br } from "./18869.js";
import D from "./45426.js";
import N, { h5 } from "./89193.js";
const I = v;
export const xA = PA((e) => {
	const { appid } = g_1();
	const r = parseInt(appid);
	const n = p.tw.GetAppOverviewByAppID(r);
	const a = zy();
	((e, t) => {
		i.useEffect(() => {
			h5(() => {
				g.b.ClearSelection();
				h.n6.SetGameListSelection(t, e);
				h.n6.UpdateGameListSelection();
			});
		}, [e, t]);
	})(r, a.state?.strCollectionId);
	let o = i.useCallback((e, t) => <Kg overview={e} details={t} />, []);
	if (e.renderFunc) {
		o = e.renderFunc;
	}
	if (!n || n.BIsAppBlocked()) {
		return <C.rd to={s.BV.Library.Home()} />;
	} else {
		return (
			<>
				<G appid={r} renderChildrenFunc={o} />
				<div className={I.TopGradient} />
			</>
		);
	}
});
let G = class extends i.Component {
	m_hAppDetails = null;
	m_hAppDetailsParent = null;
	constructor(e) {
		super(e);
		this.RegisterForAppDetails();
	}
	componentDidUpdate(e) {
		if (e.appid != this.props.appid) {
			this.RegisterForAppDetails();
		}
	}
	componentWillUnmount() {
		this.UnregisterForAppDetails();
	}
	RegisterForAppDetails() {
		this.UnregisterForAppDetails();
		const e = p.tw.GetAppOverviewByAppID(this.props.appid);
		this.m_hAppDetails = d.H.RegisterForAppData(this.props.appid);
		u.O.FetchDataForApp(this.props.appid);
		A.Ri.EnterAppDetailsPage(this.props.appid);
		if (e && e.optional_parent_app_id) {
			this.m_hAppDetails = d.H.RegisterForAppData(e.optional_parent_app_id);
			u.O.FetchDataForApp(e.optional_parent_app_id);
		}
	}
	UnregisterForAppDetails() {
		A.Ri.ExitAppDetailsPage(this.props.appid);
		if (this.m_hAppDetails) {
			this.m_hAppDetails.unregister();
			this.m_hAppDetails = null;
		}
		if (this.m_hAppDetailsParent) {
			this.m_hAppDetailsParent.unregister();
			this.m_hAppDetailsParent = null;
		}
	}
	render() {
		const e = p.tw.GetAppOverviewByAppID(this.props.appid);
		const t = d.H.GetAppDetails(this.props.appid);
		if (t && e && !e.BIsAppBlocked()) {
			return this.props.renderChildrenFunc(e, t);
		} else {
			return (
				<div className={I.Container}>
					<S.t className={I.Throbber} size="xlarge" />
				</div>
			);
		}
	}
};
G = Cg([a.PA], G);
export const Kg = PA((e) => {
	const { overview, details } = e;
	const n = Qn();
	const [a, setA] = i.useState(false);
	const [d, setD] = i.useState(undefined);
	const PRef = i.useRef(undefined);
	const GRef = i.useRef(undefined);
	const h = overview?.appid;
	const C = br();
	const v = !overview || overview.BIsAppBlocked();
	i.useEffect(() => {
		if (v) {
			console.log(
				"App",
				overview,
				"removed or blocked, navigating back to home",
			);
			C.Home();
		}
	}, [v, overview, C]);
	const N = i.useCallback(() => {
		if (a) {
			setA(false);
		}
	}, [a]);
	const F = i.useCallback(() => {
		if (!a) {
			setA(true);
		}
	}, [a]);
	const G = i.useCallback(() => {
		PRef.current?.ScrollToTop();
	}, [PRef]);
	const O = i.useCallback(() => {
		setD(h);
	}, [h]);
	pC(
		i.useCallback(() => {
			if (n) {
				m.oy.GamepadUIAudio.PlayNavSound(b.PN.OutOfGameDetail);
			}
		}, [n]),
	);
	if (n) {
		Tc(GRef, 250);
	}
	const P = d == h;
	const L = !P || !u.O.BHasDataForApp(h);
	const [z, setZ] = i.useState(false);
	const URef = i.useRef(false);
	const W = b$();
	i.useLayoutEffect(() => {
		if (z) {
			PRef.current?.ScrollToTop();
			if (
				W.current?.BFocusWithin() &&
				document.activeElement instanceof HTMLElement
			) {
				URef.current = true;
				document.activeElement.blur();
			}
		} else if (URef.current) {
			const e = window.setTimeout(() => {
				URef.current = false;
				if (!W.current?.BFocusWithin()) {
					W.current?.FocusVisibleChild();
				}
			}, 1000);
			return () => window.clearTimeout(e);
		}
	}, [z, W, PRef]);
	if (details && overview && !overview.BIsAppBlocked()) {
		if (overview.app_type == 8192) {
			return <R.gR overview={overview} details={details} />;
		} else {
			return (
				<>
					{!n && (
						<T.XC
							className={A_1(I.PlayBar, a && I.ShowPlayBar)}
							details={details}
							overview={overview}
							stickyheader={a}
							onGameInfoToggle={G}
							onSeek={undefined}
						/>
					)}
					<y.ix
						className={I.Container}
						scrollClassName={A_1(
							I.ScrollContainer,
							I.Glassy,
							a && I.Sticky,
							z && I.PreventScrolling,
						)}
						scrollToTopThreshold={386}
						ref={PRef}
						innerRef={GRef}
						scrollToTopButtonWrapper={D.f}
					>
						<f.Z className={I.InnerContainer}>
							<E.xZ
								className={A_1(I.Header, P && I.HeaderLoaded)}
								fnOnLoaded={O}
								overview={overview}
								fullscreen={z}
							/>
							<f.Z
								navRef={W}
								className={I.AppDetailsOverviewPanel}
								childFocusDisabled={z}
							>
								<M.N_
									details={details}
									overview={overview}
									bFastRender={L}
									onGameInfoButtonToggle={G}
									onWaypointEnter={N}
									onWaypointLeave={F}
									bShowingLaunchDetails={z}
								/>
							</f.Z>
							{e.LaunchingDetails && (
								<e.LaunchingDetails
									onShowLaunchingDetails={setZ}
									overview={overview}
								/>
							)}
						</f.Z>
					</y.ix>
					{n && <l.LP appid={h} />}
				</>
			);
		}
	} else {
		return (
			<div className={I.Container}>
				<S.t className={I.Throbber} size="xlarge" />
			</div>
		);
	}
});
