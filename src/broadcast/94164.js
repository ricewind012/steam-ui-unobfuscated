import * as r from "./34629.js";
import * as n from "./83957.js";
import * as o from "./41230.js";
import * as i from "./90095.js";
import * as l from "./63696.js";
import * as c from "./56654.js";
import * as d from "./72993.js";
import * as m from "./45328.js";
import * as p from "./82594.js";
import * as _ from "./47628.js";
import * as h from "./97510.js";
import * as u from "./74905.js";
import * as S from "./92059.js";
import * as E from "./26853.js";
import * as b from "./90765.js";
import * as g from "./72476.js";
import * as v from "./77301.js";
import * as B from "./44846.js";
import * as I from "./22584.js";
import * as N from "./23024.js";
import * as w from "./1079.js";
import * as A from "./72261.js";
import * as P from "./5859.js";
import * as T from "./81726.js";
import * as G from "./23337.js";
import * as D from "./95783.js";
import * as k from "./50376.js";
import * as O from "./98995.js";
import * as x from "./20590.js";
import { Localize } from "../../actual_src/utils/localization.js";
import * as L from "./34428.js";
import * as j from "./52451.js";
import * as V from "./8573.js";
import * as U from "./823.js";
import * as F from "./52966.js";
import * as q from "./76565.js";
import * as X from "./30470.js";
import * as Y from "./6367.js";
import * as J from "./99447.js";
import * as K from "./73674.js";
import * as Z from "./10606.js";
import * as Q from "./43397.js";
import * as $ from "./95020.js";
import * as ee from "./49946.js";
import * as oe from "./54644.js";
import * as ie from "./13869.js";
import * as le from "./68430.js";
const s = n;
const C = v;
const f = (0, o.PA)((e) => {
	const { appid: t } = e;
	const a = (0, S.n9)();
	const r = (0, l.useRef)({
		include_assets: true,
		include_release: true,
	});
	const [n, s] = (0, p.t7)(t, r.current);
	let o = (0, b.A)(
		C.StoreSaleWidgetContainer_mini,
		"StoreSaleWidgetContainer_mini",
	);
	let i = C.StoreSaleWidgetImage_mini;
	let c = C.StoreSaleImage_mini;
	if (!n && s != 2) {
		return l.createElement(
			"div",
			{
				className: o,
			},
			l.createElement(E.t, {
				size: "medium",
			}),
		);
	}
	if (s == 2 || !n.GetName()) {
		return l.createElement("div", {
			className: _.StoreSaleWidgetEmptyContainer,
		});
	}
	const d = n.GetAppType() != 8;
	const v = (0, m.wJ)(n.GetStorePageURL(true), a);
	return l.createElement(
		"div",
		{
			className: o,
		},
		l.createElement(
			"div",
			{
				className: _.Actions,
			},
			l.createElement(
				"a",
				{
					href: v,
					target: g.TS.IN_CLIENT || "_blank",
				},
				l.createElement(
					u.j,
					{
						type: "app",
						id: t,
					},
					l.createElement(
						"div",
						{
							className: i,
						},
						l.createElement("img", {
							className: c,
							src: n.GetAssets().GetSmallCapsuleURL(),
						}),
					),
				),
			),
		),
		l.createElement(
			"div",
			{
				className: _.StoreSaleBroadcastWidgetRight,
			},
			l.createElement(
				"div",
				{
					className: _.Actions,
				},
				l.createElement(
					"a",
					{
						href: v,
						target: g.TS.IN_CLIENT || "_blank",
					},
					l.createElement(
						u.j,
						{
							type: "app",
							id: t,
						},
						l.createElement(
							"div",
							{
								className: (0, b.A)(
									_.StoreSaleWidgetTitle,
									"StoreSaleWidgetTitle",
								),
							},
							n.GetName(),
						),
					),
				),
			),
			l.createElement(
				"div",
				{
					className: _.StoreSaleWidgetRelease,
				},
				n.GetFormattedSteamReleaseDate(),
			),
			Boolean(d) &&
				l.createElement(h.wD, {
					info: {
						id: t,
						type: "game",
					},
					bShowDemoButton: true,
				}),
		),
	);
});
function y() {
	let e = window.GetUsabilityTracker;
	if (e) {
		return e();
	}
}
const W = (e) => {
	const { onPositionChange: t, onLeave: a } = e;
	const r = l.useCallback(
		(e) => {
			if (
				e.previousPosition === undefined &&
				e.currentPosition === x.Y.above &&
				a
			) {
				a(e);
			}
			return t && t(e);
		},
		[t, a],
	);
	return l.createElement(x.Y, {
		...e,
		onPositionChange: r,
	});
};
const M = F;
const H = (0, o.PA)((e) => {
	const { event: t } = e;
	const a = t.clanSteamID.GetAccountID();
	const r =
		!t ||
		!t.jsondata ||
		!t.jsondata ||
		!t.jsondata ||
		!t.jsondata ||
		!t.jsondata ||
		!t.jsondata.broadcast_item_drops_enabled;
	const n = (0, l.useRef)(null);
	const [o, i] = (0, l.useState)(t ? U.pF.GetCreatorHome(t.clanSteamID) : null);
	(0, l.useEffect)(() => {
		const e = s.CancelToken.source();
		n.current = e.cancel;
		(async () => {
			const t = V.b.InitFromClanID(a);
			const r = await U.pF.LoadCreatorHome(t, e);
			if (!e.token.reason) {
				i(r);
			}
		})();
		return () => {
			if (n.current) {
				n.current("BroadcastDropsDisplay: unmounting");
			}
		};
	}, [a]);
	if (r || !o || !o || !o || !o || !o || !o.BIsLoaded()) {
		return null;
	}
	const c = `${g.TS.COMMUNITY_BASE_URL}gid/${t.jsondata.broadcast_item_drops_details_clan_accountid}/partnerevents/view/${t.jsondata.broadcast_item_drops_details_event_gid}`;
	return l.createElement(
		"div",
		{
			className: M.item_drop_ctn,
		},
		l.createElement(
			"div",
			null,
			Localize(
				o.GetName().length > 0
					? t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
						? "#SalePage_WatchForDrop_Hours_CreatorNamed"
						: "#SalePage_WatchForDrop_Minutes_CreatorNamed"
					: t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
						? "#SalePage_WatchForDrop_Hours_Developer"
						: "#SalePage_WatchForDrop_Minutes_Developer",
				t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
					? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
					: t.jsondata.broadcast_item_drops_min_watch_time_minutes,
				o.GetName(),
			),
			Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
				l.createElement(
					"a",
					{
						href: c,
						target: g.TS.IN_CLIENT ? "" : "_blank",
					},
					Localize("#SalePage_WatchForDrop_LearnMore"),
				),
		),
	);
});
const z = q;
const te = ee;
function ae(e) {
	const { steamid: t, closeModal: a } = e;
	return l.createElement(
		Z.o0,
		{
			strDescription: "",
			strTitle: Localize("#Button_Share"),
			onCancel: a,
			onOK: a,
			bAlertDialog: true,
			modalClassName: "EventDisplay_Share_Dialog",
		},
		l.createElement(re, {
			steamid: t,
		}),
		l.createElement(ne, {
			steamid: t,
		}),
	);
}
function re(e) {
	const { steamid: t } = e;
	return l.createElement(
		"div",
		{
			className: (0, b.A)(z.FlexRowContainer, te.share_controls_ctn),
		},
		l.createElement(
			O.he,
			{
				toolTipContent: Localize("#EventDisplay_Share_OnFaceBook"),
			},
			l.createElement(
				Q.uU,
				{
					href: se(t, $._.k_eFacebook),
					className: te.ShareBtn,
				},
				l.createElement("img", {
					className: (0, b.A)(z.Button),
					src: Y.A,
				}),
			),
		),
		l.createElement(
			O.he,
			{
				toolTipContent: Localize("#EventDisplay_Share_OnTwitter"),
			},
			l.createElement(
				Q.uU,
				{
					href: se(t, $._.k_eTwitter),
					className: te.ShareBtn,
				},
				l.createElement("img", {
					className: (0, b.A)(z.Button),
					src: K.A,
				}),
			),
		),
		l.createElement(
			O.he,
			{
				toolTipContent: Localize("#EventDisplay_Share_OnReddit"),
			},
			l.createElement(
				Q.uU,
				{
					href: se(t, $._.k_eReddit),
					className: te.ShareBtn,
				},
				l.createElement("img", {
					className: (0, b.A)(z.Button),
					src: J.A,
				}),
			),
		),
	);
}
function ne(e) {
	const { steamid: t } = e;
	const a = l.createRef();
	const [r, n] = l.useState("");
	const s = l.createRef();
	const o = l.useCallback(
		(e) => {
			if (a.current) {
				a.current.ownerDocument.defaultView.navigator.clipboard
					.writeText(a.current.value)
					.then((e) => {
						n(Localize("#EventDisplay_Share_CopiedToClipboard"));
					})
					.catch((e) => {
						n(Localize("#EventDisplay_Share_FailedToCopyToClipboard"));
						console.error("Failed to copy link to clipboard:", e);
					});
			}
		},
		[a],
	);
	const i = `${g.TS.COMMUNITY_BASE_URL}broadcast/watch/${t}`;
	return l.createElement(
		"div",
		null,
		l.createElement(
			"div",
			{
				className: (0, b.A)(z.FlexRowContainer, te.linkField),
				onClick: o,
			},
			l.createElement(
				"span",
				{
					className: te.LinkInputLabel,
				},
				Localize("#EventDisplay_Share_Link"),
			),
			l.createElement("textarea", {
				className: te.LinkInput,
				ref: a,
				value: i,
				readOnly: true,
			}),
			Boolean(document.queryCommandSupported("copy")) &&
				l.createElement(
					O.he,
					{
						toolTipContent: Localize("#ToolTip_CopyLinkToClipboard"),
					},
					l.createElement(
						"div",
						{
							className: (0, b.A)(z.Button, z.Icon, te.LinkButton),
						},
						l.createElement("img", {
							className: te.ClipboardIcon,
							src: X.A,
						}),
					),
				),
		),
		l.createElement(
			"div",
			{
				ref: s,
				className: te.ClipboardText,
			},
			r,
		),
	);
}
function se(e, t) {
	return `${g.TS.COMMUNITY_BASE_URL}broadcast/share/${e}?site=${t}`;
}
const ce = {
	list: [
		{
			appid: 444090,
			url: "https://steam.tv/paladins",
		},
		{
			appid: 386360,
			url: "https://steam.tv/smite",
		},
		{
			appid: 813820,
			url: "https://steam.tv/realmroyale",
		},
		{
			appid: 583950,
			url: "https://steam.tv/artifact",
			broadcasterAccountID: 912972716,
		},
		{
			appid: 570,
			url: "https://steam.tv/dota",
			broadcasterAccountID: 238221269,
		},
		{
			appid: 1025790,
			url: "https://steam.tv/steamawards",
			broadcasterAccountID: 934427243,
		},
		{
			appid: 730,
			url: "https://steam.tv/csgo",
			broadcasterAccountID: 155466124,
		},
	],
};
export default function de(e) {
	if (
		(() => {
			const e = (0, g.Qn)();
			return !(0, g.Y2)() && !e;
		})()
	) {
		return l.createElement(me, {
			...e,
		});
	} else {
		return null;
	}
}
let me = class extends l.Component {
	m_cancelSignal = s.CancelToken.source();
	m_bMarkedUsabilitySeen = false;
	state = {
		bShowPopoutHeader: false,
		bExpanded: false,
		bLoadingPreference: true,
		style: {
			maxHeight: "0vh",
			overflow: "hidden",
			transition: "max-height 1s ease-in-out",
		},
		innerStyle: {
			maxHeight: "0vh",
			overflow: "hidden",
			transition: "max-height 1s ease-in-out",
		},
		bStartMuted: true,
	};
	async componentDidMount() {
		await w.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal);
		if (!this.m_cancelSignal.token.reason) {
			this.setState({
				bLoadingPreference: false,
				bExpanded: !w.j.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
				innerStyle: {
					...this.state.innerStyle,
					maxHeight: w.j.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
						? "0vh"
						: "100vh",
				},
			});
		}
		await (this.props.bIsPreview &&
		this.props.accountIDs &&
		!this.props.event.BUsesContentHubForItemSource()
			? w.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
			: w.j.Get().HintLoadEmbeddableStreams(this.props));
		if (this.props.nAppIDVOD) {
			w.j.Get().SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll);
		}
		window.setTimeout(() => {
			if (!this.m_cancelSignal.token.reason) {
				this.setState({
					style: {
						...this.state.style,
						maxHeight: "100vh",
					},
				});
			}
		}, 10);
	}
	componentWillUnmount() {
		this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
	}
	ToggleBroadcastExpandShrink() {
		let e = w.j.Get().GetPlayReadyStream(this.props);
		const t = this.state.bExpanded;
		const a = N.BroadcastWatchStore.GetOrCreateBroadcastInfo(
			e.steamid,
		).m_nAppID;
		(0, w.U7)(a, t ? 2 : 3, e.snr);
		if (t && y()) {
			y().AddEvent(1005);
		}
		window.setTimeout(
			() =>
				this.setState({
					innerStyle: {
						...this.state.innerStyle,
						maxHeight: t ? "0vh" : "100vh",
					},
				}),
			10,
		);
		if (!t) {
			this.setState(
				{
					bExpanded: !this.state.bExpanded,
				},
				() => w.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
			);
		}
	}
	OnShrinkTransitionEnd() {
		if (this.state.innerStyle.maxHeight === "0vh") {
			this.setState(
				{
					bExpanded: false,
				},
				() => w.j.Get().SetEmbeddedStreamCollapsed(true),
			);
		}
	}
	async onStreamSelect(e) {
		this.setState({
			bStartMuted: false,
		});
		if (w.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid) {
			await w.j.Get().AttemptToPlayStream(this.props, e);
		}
	}
	async PlayNextNonVOD() {
		this.setState({
			bStartMuted: false,
		});
		const e = w.j
			.Get()
			.GetStreams(this.props)
			.filter(
				(e) => !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
			);
		await w.j.Get().PlayFromAvailableStreams(this.props, e, true);
	}
	ConstructSidePanels(e, t) {
		let a = {
			leftPanel: null,
			rightPanel: null,
			bRightPanelArtworkOrEmpty: true,
		};
		if (this.props.bWidePlayer) {
			return a;
		}
		const r = w.j.Get().GetConcurrentStreams(this.props) > 1;
		let n = N.BroadcastWatchStore.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
		let s = l.createElement(
			"div",
			{
				className: M.rightPanel,
			},
			l.createElement(ue, {
				key: `right${n}`,
				ImgUrl: e.right_panel,
			}),
		);
		let o = l.createElement(ue, {
			key: `left${n}`,
			ImgUrl: e.left_panel,
		});
		if (n < 11) {
			const t = I.l.GetAppIDListForBroadcasterSteamID(e.steamid);
			if (t && t.length === 1) {
				n = t[0];
			}
		}
		if (
			(!!this.props.promotionName ||
				!!this.props.bIsPreview ||
				!!this.props.bIsPreview ||
				!!this.props.bIsPreview ||
				!!this.props.bIsPreview ||
				!!this.props.bIsPreview ||
				!!this.props.subid ||
				!!this.props.bIsPreview ||
				!!this.props.bIsPreview ||
				!!this.props.subid ||
				!!this.props.bIsPreview ||
				!!this.props.bIsPreview ||
				!!this.props.bIsPreview ||
				!!this.props.subid ||
				!!this.props.bIsPreview ||
				!!this.props.subid ||
				!!this.props.bIsPreview ||
				!!this.props.bIsPreview ||
				!!this.props.subid ||
				!!this.props.bIsPreview ||
				!!this.props.subid ||
				!!this.props.bundleid) &&
			!!(n >= 11) &&
			(!this.props.event || !this.props.event.jsondata.broadcast_force_banner)
		) {
			s = l.createElement(f, {
				key: `mini${e.accountid}`,
				appid: n,
			});
			a.bRightPanelArtworkOrEmpty = false;
		}
		if (r && !t) {
			a.leftPanel = l.createElement(be, {
				broadcastEmbedContext: this.props,
				key: `selector${n}`,
				curStream: e,
				onStreamSelect: this.onStreamSelect,
				fnFilterStreams: this.props.fnFilterStreams,
				bShowCapsuleArt: this.props.bShowCapsuleArt,
			});
			a.rightPanel = s;
		} else if (t) {
			a.leftPanel = l.createElement("div", null);
			a.rightPanel = l.createElement(Ce, {
				stream: e,
				orientation: "rightside",
			});
			a.bRightPanelArtworkOrEmpty = false;
		} else {
			a.leftPanel = o;
			a.rightPanel = s;
		}
		return a;
	}
	MarkBroadcastSeen() {
		if (!this.m_bMarkedUsabilitySeen) {
			this.m_bMarkedUsabilitySeen = true;
			if (y()) {
				y().AddEvent(1004);
			}
		}
	}
	render() {
		if (this.state.bLoadingPreference) {
			return null;
		}
		let e = w.j.Get().GetPlayReadyStream(this.props);
		if (e) {
			this.MarkBroadcastSeen();
			let t = w.j.Get().GetChatVisibility() === "show";
			const { event: a, language: r, fnRenderBroadcastContext: n } = this.props;
			if (a) {
				e = {
					...e,
					left_panel: a.GetImageURL(
						"broadcast_left",
						r || (0, B.sf)(g.TS.LANGUAGE),
					),
					right_panel: a.GetImageURL(
						"broadcast_right",
						r || (0, B.sf)(g.TS.LANGUAGE),
					),
					store_title: a.GetBroadcastTitle(r || (0, B.sf)(g.TS.LANGUAGE)),
					broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
				};
			}
			let s = this.ConstructSidePanels(e, t);
			let o = e.store_title ? e.store_title : e.title;
			let i = w.j.Get().GetConcurrentStreams(this.props) > 1;
			const c = () => {
				if (e.nAppIDVOD) {
					this.PlayNextNonVOD();
				}
				this.props.fnOnVideoEnd?.();
			};
			return l.createElement(
				l.Fragment,
				null,
				l.createElement(
					"div",
					{
						className: "broadcast_embed_top_ctn_trgt",
						style: this.state.style,
					},
					l.createElement(
						"div",
						{
							className: (0, b.A)({
								[M.bordered_container]: true,
								[M.Event]: Boolean(a),
								broadcast_brd_ctn_trgt: true,
							}),
						},
						l.createElement(
							"div",
							{
								className: (0, b.A)(M.bordered_title, "bordered_title_trgt"),
							},
							l.createElement(T.K, null),
							l.createElement(
								"div",
								{
									className: M.streamTitle,
								},
								o,
							),
							l.createElement(
								"div",
								{
									className: M.bordered_corner_container,
								},
								Boolean(!this.state.bExpanded) &&
									l.createElement(
										O.he,
										{
											toolTipContent: Localize(
												"#StoreBroadcast_Change_store_Broadcast_settings",
											),
										},
										l.createElement("div", {
											className: M.broadcast_settings_icon,
											onClick: () =>
												window.open(
													`${g.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
												),
										}),
									),
								l.createElement(
									O.he,
									{
										toolTipContent: Localize("#StoreBroadcast_Hide_Tooltip"),
									},
									l.createElement("div", {
										className: this.state.bExpanded
											? M.bordered_corner_expanded
											: M.bordered_corner_shrinked,
										onClick: this.ToggleBroadcastExpandShrink,
									}),
								),
							),
							Boolean(e.gamedata_subtitle) &&
								l.createElement(
									"div",
									{
										className: M.bordered_subtitle,
									},
									e.gamedata_subtitle,
								),
						),
						Boolean(this.state.bExpanded) &&
							l.createElement(
								"div",
								{
									className: (0, b.A)({
										[M.container]: true,
										embeddable_ctn_trgt: true,
										multistream: i,
										broadcast_right_panel_simple: s.bRightPanelArtworkOrEmpty,
										broadcast_chat_expanded: t,
									}),
									style: {
										...this.state.innerStyle,
									},
									onTransitionEnd: this.OnShrinkTransitionEnd,
								},
								s.leftPanel,
								l.createElement(pe, {
									stream: e,
									bStartMuted: this.state.bStartMuted,
									fnRenderBroadcastContext: n,
									fnOnVideoEnd: c,
									bWidePlayer: this.props.bWidePlayer,
								}),
								s.rightPanel,
								Boolean(this.state.bExpanded) &&
									l.createElement(he, {
										stream: e,
										bMultistream: i,
										chatAnnouncementGivewayGID:
											s.rightPanel || this.props.chat_announcement_giveaway,
									}),
							),
					),
					Boolean(a && a.jsondata && a.jsondata.broadcast_item_drops_enabled) &&
						l.createElement(H, {
							event: a,
						}),
					l.createElement("div", {
						className: M.clear_div,
					}),
				),
			);
		}
		return l.createElement("div", {
			className: "NoBroadcastAvailable",
		});
	}
};
(0, r.Cg)([j.oI], me.prototype, "ToggleBroadcastExpandShrink", null);
(0, r.Cg)([j.oI], me.prototype, "OnShrinkTransitionEnd", null);
(0, r.Cg)([j.oI], me.prototype, "onStreamSelect", null);
(0, r.Cg)([j.oI], me.prototype, "PlayNextNonVOD", null);
me = (0, r.Cg)([o.PA], me);
class pe extends l.Component {
	m_iVideoContainerRef = l.createRef();
	constructor(e) {
		super(e);
		this.state = {
			bPopout: false,
			bPreventPopup: window.screen.width <= 768,
		};
	}
	CloseBroadcastPopup() {
		const e = N.BroadcastWatchStore.GetOrCreateBroadcastInfo(
			this.props.stream.steamid,
		).m_nAppID;
		(0, w.U7)(e, 7, this.props.stream.snr);
		if (y()) {
			y().AddEvent(1006);
		}
		this.setState({
			bPopout: false,
			bPreventPopup: true,
		});
	}
	OnEnter() {
		if (!this.state.bPreventPopup && this.state.bPopout) {
			this.setState({
				bPopout: false,
			});
		}
	}
	OnLeave() {
		if (!this.state.bPreventPopup && !this.state.bPopout) {
			this.setState({
				bPopout: true,
			});
		}
	}
	render() {
		return l.createElement(
			"div",
			{
				className: M.wrapper,
			},
			l.createElement(
				W,
				{
					onEnter: this.OnEnter,
					onLeave: this.OnLeave,
				},
				l.createElement(
					"div",
					{
						className: (0, b.A)({
							[M.video_placeholder]: true,
							video_placeholder_trgt: true,
							[M.WidePlayer]: this.props.bWidePlayer,
						}),
						ref: this.m_iVideoContainerRef,
					},
					l.createElement(
						"div",
						{
							className: this.state.bPopout
								? M.broadcast_floating
								: M.video_container,
						},
						this.state.bPopout &&
							l.createElement(BroadcastEmbeddablePopoutHeader, {
								steamIDBroadcast: this.props.stream.steamid,
								OnPreventPopup: this.CloseBroadcastPopup,
							}),
						l.createElement(
							"div",
							{
								className: M.BroadcastPlayerContainer,
							},
							l.createElement(d.default, {
								steamIDBroadcast: this.props.stream.steamid,
								watchLocation: 6,
								bStartMuted: this.props.bStartMuted,
								fnRenderBroadcastContext: this.props.fnRenderBroadcastContext,
								fnOnVideoEnd: this.props.fnOnVideoEnd,
								nAppIDVOD: this.props.stream.nAppIDVOD,
							}),
						),
					),
				),
			),
		);
	}
}
function _e(e) {
	const { stream: t } = e;
	const [a] = (0, i.q3)(() => [t.steamid]);
	const r = N.BroadcastWatchStore.GetOrCreateBroadcastInfo(a).m_nAppID;
	const n = ce.list.find(
		(e) =>
			e.appid == r &&
			(!e.broadcasterAccountID || e.broadcasterAccountID == t.accountid),
	);
	if (n) {
		let e = n.url;
		if (
			g.TS.IN_CLIENT ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam GameOverlay") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam GameOverlay") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam GameOverlay") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam GameOverlay") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam GameOverlay") ||
			navigator.userAgent.includes("Valve Steam Client") ||
			navigator.userAgent.includes("Valve Steam GameOverlay") ||
			navigator.userAgent.includes("Valve Steam Tenfoot")
		) {
			e = `steam://openurl/${e}`;
		}
		return l.createElement(
			"a",
			{
				href: e,
			},
			Localize("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
		);
	}
	{
		const e = `${g.TS.COMMUNITY_BASE_URL}broadcast/watch/${a}`;
		return l.createElement(
			O.he,
			{
				toolTipContent: Localize("#BroadcastWatch_View_Broadcast_Page"),
			},
			l.createElement(
				"a",
				{
					href: e,
					className: M.external_link,
				},
				l.createElement(k.GrD, null),
			),
		);
	}
}
(0, r.Cg)([j.oI], pe.prototype, "CloseBroadcastPopup", null);
(0, r.Cg)([j.oI], pe.prototype, "OnEnter", null);
(0, r.Cg)([j.oI], pe.prototype, "OnLeave", null);
let he = class extends l.Component {
	OnToggleChat(e) {
		e.preventDefault();
		const t = N.BroadcastWatchStore.GetOrCreateBroadcastInfo(
			this.props.stream.steamid,
		).m_nAppID;
		(0, w.U7)(
			t,
			w.j.Get().GetChatVisibility() === "show" ? 5 : 4,
			this.props.stream.snr,
		);
		w.j.Get().ToggleChatVisibility();
	}
	onWatchBroadcastPage() {
		const e = N.BroadcastWatchStore.GetOrCreateBroadcastInfo(
			this.props.stream.steamid,
		).m_nAppID;
		(0, w.U7)(e, 9, this.props.stream.snr);
	}
	render() {
		const e = w.j.Get().GetChatVisibility() != "remove";
		const t = w.j.Get().GetChatVisibility() === "hide";
		const a = !this.props.stream.nAppIDVOD;
		const r = a;
		let n = Number.parseInt(
			`${
				N.BroadcastWatchStore.GetOrCreateBroadcastInfo(
					this.props.stream.steamid,
				).m_nViewerCount
			}`,
		);
		return l.createElement(
			"div",
			{
				className: (0, b.A)(M.viewer_bar, "viewer_bar"),
			},
			l.createElement(
				"div",
				{
					className: (0, b.A)(M.viewer_count, "viewer_count"),
				},
				l.createElement(k.y_e, null),
				(0, L.Dq)(n),
			),
			l.createElement(
				"div",
				{
					className: (0, b.A)(M.viewer_links, "viewer_links"),
				},
				Boolean(e && !t && this.props.bMultistream) &&
					l.createElement(
						"div",
						{
							className: M.chat_link,
						},
						l.createElement(
							"a",
							{
								href: "#",
								className: M.ChatToggle,
								onClick: this.OnToggleChat,
							},
							Localize("#sale_three_section_show_streams"),
						),
					),
				e &&
					l.createElement(
						"div",
						{
							className: M.chat_link,
						},
						l.createElement(k.ROZ, null),
						l.createElement(
							"a",
							{
								href: "#",
								className: M.ChatToggle,
								onClick: this.OnToggleChat,
							},
							Localize(
								t
									? "#sale_three_section_show_chat"
									: "#sale_three_section_hide_chat",
							),
						),
					),
				r &&
					l.createElement(
						"div",
						{
							className: M.chat_link,
						},
						l.createElement(k.SYj, null),
						l.createElement(
							"a",
							{
								href: "#",
								className: M.ChatToggle,
								onClick: (e) =>
									(0, ie.pg)(
										l.createElement(ae, {
											steamid: this.props.stream.steamid,
										}),
										(0, oe.uX)(e),
									),
							},
							Localize("#Broadcast_ShareBroadcast"),
						),
					),
				l.createElement(
					O.he,
					{
						toolTipContent: Localize(
							"#StoreBroadcast_Change_store_Broadcast_settings",
						),
					},
					l.createElement(
						"a",
						{
							href: `${g.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
							target: g.TS.IN_CLIENT || "_blank",
							className: M.settings_link,
						},
						l.createElement(k.wB_, null),
					),
				),
				a &&
					l.createElement(_e, {
						...this.props,
					}),
			),
			Boolean(this.props.chatAnnouncementGivewayGID) &&
				l.createElement(le.V, {
					gidGiveaway: this.props.chatAnnouncementGivewayGID,
					stream: this.props.stream,
				}),
		);
	}
};
(0, r.Cg)([j.oI], he.prototype, "OnToggleChat", null);
(0, r.Cg)([j.oI], he.prototype, "onWatchBroadcastPage", null);
he = (0, r.Cg)([o.PA], he);
class ue extends l.Component {
	render() {
		let e = this.props.ImgUrl;
		return l.createElement(
			l.Fragment,
			null,
			e &&
				l.createElement("img", {
					className: M.side_panels,
					src: this.props.ImgUrl,
				}),
			!e &&
				l.createElement("div", {
					className: M.side_panels,
				}),
		);
	}
}
export const BroadcastEmbeddablePopoutHeader = (0, o.PA)((e) => {
	const { steamIDBroadcast: t } = e;
	let a = N.BroadcastWatchStore.GetOrCreateBroadcastInfo(t).m_nAppID;
	a = a != N.fO ? a : 0;
	const [r] = (0, p.t7)(a, {});
	return l.createElement(
		"div",
		{
			className: [M.PopOutVideoTitleBar, M.NoSeslect].join(" "),
		},
		Boolean(r)
			? l.createElement(
					u.u,
					{
						type: "app",
						id: a,
						className: M.PopOutVideoTitleText,
					},
					Localize("#StoreBroadcast_Detault_popout_Title"),
				)
			: l.createElement(
					"div",
					{
						className: M.PopOutVideoTitleText,
					},
					Localize("#StoreBroadcast_Detault_popout_Title"),
				),
		l.createElement(
			O.he,
			{
				toolTipContent: Localize("#StoreBroadcast_close_broadcast_popup"),
			},
			l.createElement(
				"button",
				{
					className: M.PopOutVideoCloseButton,
					onClick: e.OnPreventPopup,
				},
				l.createElement(k.X, null),
			),
		),
	);
});
function Ee(e, t) {
	const a = N.BroadcastWatchStore.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
	const r = P.A.Get().GetApp(a);
	if (e && r?.GetAssets()?.GetHeaderURL()) {
		return parseInt(M.strStreamIconCapsuleArtHeight);
	} else {
		return parseInt(M.strStreamIconScreenshotArtHeight);
	}
}
function be(e) {
	const {
		curStream: t,
		onStreamSelect: a,
		fnFilterStreams: r,
		bShowCapsuleArt: n,
		broadcastEmbedContext: s,
	} = e;
	const o = (0, l.useRef)();
	const i = (0, l.useMemo)(() => {
		const e = w.j
			.Get()
			.GetStreams(s)
			.filter((e) => !r || r(e));
		(0, w.MU)(e);
		return e;
	}, [s, r]);
	(0, l.useEffect)(() => {
		if (o && o.current) {
			const e = i
				.map(
					(e) =>
						N.BroadcastWatchStore.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
				)
				.filter(Boolean);
			P.A.Get()
				.QueueMultipleAppRequests(e, {
					include_assets: true,
				})
				.then(() => {
					if (o.current) {
						let e = 0;
						for (const a of i) {
							if (t.accountid == a.accountid) {
								break;
							}
							e += Ee(n, a);
						}
						o.current.scrollTop = e;
					}
				});
		}
	}, [i, n, t.accountid, o]);
	return l.createElement(
		"div",
		{
			ref: o,
			className: (0, b.A)({
				[M.side_panels]: true,
				side_panels: true,
				[M.multistream]: true,
				[M.scrollingstreams]: i.length > 3,
			}),
		},
		i.map((e) =>
			l.createElement(ge, {
				key: e.accountid ?? e.steamid,
				stream: e,
				bSelected: t.accountid == e.accountid,
				onStreamSelect: a,
				bShowCapsuleArt: n,
			}),
		),
	);
}
function ge(e) {
	const { onStreamSelect: t, bSelected: a, stream: r, bShowCapsuleArt: n } = e;
	let s = (0, i.q3)(
		() => N.BroadcastWatchStore.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
	);
	s = s != N.fO ? s : 0;
	const [o] = (0, p.t7)(r.nAppIDVOD ?? s, {
		include_assets: true,
	});
	if (!(0, w.fn)(r)) {
		return null;
	}
	const c = n && o?.GetAssets().GetHeaderURL();
	const d = Number.parseInt(`${r.viewer_count}`);
	const m = !Number.isNaN(d);
	const _ = !!r.nAppIDVOD && o?.GetName();
	return l.createElement(
		"div",
		{
			className: (0, b.A)({
				[M.stream_icon_and_viewer_container]: true,
				[M.stream_featured]: r.current_selection_priority == A.mY.k_eFeatured,
				[M.display_capsule_art]: Boolean(c),
			}),
		},
		l.createElement(
			u.j,
			{
				type: "app",
				id: s,
			},
			l.createElement(
				D.K,
				{
					className: M.stream_icon_container,
					onClick: () => t && t(r),
					rootMargin: "100px 0px 100px 0px",
				},
				l.createElement(ve, {
					strThumbnail: r.thumbnail_http_address,
					bSelected: a,
					strCapsuleArtURL: c,
				}),
				a &&
					l.createElement("div", {
						className: M.stream_icon_arrow,
					}),
			),
		),
		l.createElement(
			"div",
			{
				className: (0, b.A)(M.viewer_count, !m && M.vod_title),
			},
			m
				? l.createElement(
						l.Fragment,
						null,
						l.createElement(k.y_e, null),
						" ",
						(0, L.Dq)(d),
					)
				: _,
		),
	);
}
function ve(e) {
	const { strCapsuleArtURL: t, strThumbnail: a, bSelected: r } = e;
	const n = r ? M.stream_icon_selected : M.stream_icon;
	if (t) {
		const e = [t];
		return l.createElement(
			l.Fragment,
			null,
			l.createElement("img", {
				className: (0, b.A)(n, M.stream_icon_hide_on_hover),
				src: t,
			}),
			l.createElement(G.o, {
				className: (0, b.A)(n, M.stream_icon_show_on_hover),
				srcs: e,
			}),
		);
	}
	return l.createElement("img", {
		className: n,
		src: a,
	});
}
function Ce(e) {
	const { stream: t, orientation: a } = e;
	const r = a == "below";
	const [n, s] = (0, i.q3)(() => [
		N.BroadcastWatchStore.GetBroadcast(t.steamid),
		N.BroadcastWatchStore.GetBroadcast(t.steamid)?.m_ulBroadcastID,
	]);
	const o = (0, i.q3)(() => t.steamid);
	if (n) {
		return l.createElement(
			"div",
			{
				className: (0, b.A)({
					[M.chat_below_container]: r,
					[M.chat_rightside_container]: !r,
					[M.store_chat_ctn]: true,
				}),
			},
			l.createElement(
				"div",
				{
					className: M.ChatContainer,
				},
				l.createElement(c.I, {
					emoticonStore: w.MX,
					watchLocation: 6,
					steamID: o,
					broadcastID: s,
				}),
			),
		);
	} else {
		return null;
	}
}
