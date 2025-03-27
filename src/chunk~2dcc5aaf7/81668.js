import {
	Localize,
	CLocalizationManager,
	LocalizeRtime32ToShortDate,
	LocalizeReact,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";

import { PadArray } from "../../actual_src/utils/arrayutils.js";
import { LocalizeRTimeToHourAndMinutes } from "../../actual_src/utils/localization/datetime.js";
import {
	GetOwningWindowForEvent,
	IsHTMLElement,
	BIsParentOrSelf,
} from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i, {
	useState,
	useEffect,
	useMemo,
	useRef,
	useCallback,
} from "./63696.js";
import a from "./83957.js";
import o from "./62757.js";
import c, { br as br_1 } from "./18869.js";
import m from "./91486.js";
import u, { Qt as Qt_1 } from "./18057.js";
import d from "./96593.js";
import A from "./87935.js";
import p, { q3 } from "./90095.js";
import g, { PA } from "./41230.js";
import h from "./69164.js";
import C from "./72655.js";
import _ from "./21105.js";
import f from "./61657.js";
import b from "./69740.js";
import y, { Gn, h5 } from "./89193.js";
import S from "./20590.js";
import w, { sf, Lg } from "./44846.js";
import B, { mr as mr_1 } from "./88341.js";
import v, { TB } from "./78771.js";
import I from "./12956.js";
import E from "./13665.js";
import M from "./88750.js";
import T from "./8573.js";
import R from "./83591.js";
import k from "./5859.js";
import { t7 } from "./82594.js";
import N from "./64608.js";
import F from "./50376.js";
import { m as m_1 } from "./39039.js";
import { A as A_1 } from "./90765.js";
import { k2, NT } from "./53807.js";
import _z, { Y2, Tc, Qn, rP } from "./72476.js";
import x, { EP } from "./43397.js";
import U from "./44831.js";
import V, { LJ, Hx, cq, Bd } from "./95020.js";
import H from "./59959.js";
import j from "./34036.js";
import q from "./11735.js";
import Q from "./74905.js";
import J from "./90242.js";
import { H as H_1 } from "./16154.js";
import te from "./76565.js";
import ne, { vg } from "./4816.js";
import ie from "./52451.js";
import ae from "./30470.js";
import se from "./6367.js";
import oe from "./99447.js";
import le from "./73674.js";
import ce from "./10606.js";
import me from "./98995.js";
import ue from "./49946.js";
import Ae from "./28987.js";
import ge from "./93960.js";
import he from "./90039.js";
import be from "./72388.js";
import ye, { I8 } from "./12176.js";
import Se from "./36934.js";
import we from "./54946.js";
import { lX } from "./31084.js";
import { XU } from "./50712.js";
import { mJ } from "./36885.js";
import Ee from "./56840.js";
import Me from "./7372.js";
import Te from "./98592.js";
import Re from "./33724.js";
import De from "./48214.js";
import Oe from "./15688.js";
import { pg, HT } from "./13869.js";
import Le from "./3083.js";
import { Dv } from "./15918.js";
import { js } from "./17613.js";
import Ve from "./13352.js";
import He from "./26853.js";
import je from "./73902.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import Ze from "./333.js";
import Ye from "./29381.js";
import Ke from "./46300.js";
import Je from "./42318.js";
import $e from "./63444.js";
import rt from "./67123.js";
import nt from "./33223.js";
import lt from "./24546.js";
import ct from "./34091.js";
import mt from "./27793.js";
import St from "./8953.js";
import wt from "./83450.js";
import { Dq } from "./34428.js";
import { OQ } from "./31958.js";
import kt from "./99327.js";
import Pt from "./58663.js";
import Lt from "./48307.js";
import { I as I_1 } from "./61416.js";
import { jE } from "./3715.js";
import { n as n_1 } from "./26667.js";
import { KV } from "./46382.js";
import hr from "./43691.js";
import { Fd } from "./9731.js";
import "./82301.js";
import wr from "./92469.js";
import Nr from "./24418.js";
import Gr from "./88306.js";
import Or from "./12767.js";
import Pr from "./7558.js";
import Lr from "./79769.js";
import zr from "./54573.js";
import xr from "./91323.js";
import "./823.js";
import Hr from "./59848.js";
import en from "./4584.js";
import tn from "./78688.js";
import rn from "./83599.js";
import { Ls } from "./50341.js";
import an from "./31366.js";
import An from "./3963.js";
import pn from "./57016.js";
import gn from "./9536.js";
var s = a;
var l = o;
var W = U;
function Z(e, t) {
	const [r, n] = useState({});
	const a = m_1("useEventHeaderData");
	useEffect(() => {
		if (e) {
			k.A.Get()
				.QueueAppRequest(e, {
					include_assets: true,
					include_screenshots: true,
				})
				.then(() => {
					const t = k.A.Get().GetApp(e);
					if (t && !a?.token?.reason) {
						n({
							strCapsuleUrl: t.GetAssets().GetHeaderURL(),
							strGroupTitle: t.GetName(),
							id: e,
							strStoreURL:
								(_z.TS.IN_CLIENT ? "steam://openurl/" : "") +
								t.GetStorePageURL(),
							strCommunityURL:
								(_z.TS.IN_CLIENT ? "steam://openurl/" : "") +
								t.GetCommunityPageURL(),
							strForumURL:
								(_z.TS.IN_CLIENT ? "steam://openurl/" : "") +
								t.GetCommunityDiscussionForumsURL(),
						});
					}
				});
		} else if (t) {
			const e = T.b.InitFromClanID(t);
			v.ac.LoadClanInfoForClanSteamID(e).then((r) => {
				if (!a?.token?.reason) {
					n({
						strCapsuleUrl: r.avatar_full_url,
						strGroupTitle: r.group_name,
						id: t,
						strStoreURL:
							(_z.TS.IN_CLIENT ? "steam://openurl/" : "") +
							_z.TS.STORE_BASE_URL +
							"curator/" +
							t +
							"/",
						strCommunityURL:
							(_z.TS.IN_CLIENT ? "steam://openurl/" : "") +
							_z.TS.COMMUNITY_BASE_URL +
							"gid/" +
							e.ConvertTo64BitString(),
						strExtraBannerGroupStyle: W.ClanBanner,
					});
				}
			});
		}
	}, [e, a?.token?.reason, t]);
	return r;
}
const Y = {};
function K(e) {
	const { appId: t, clanId: r, bShowRSSFeed: n } = e;
	const { strStoreURL: a, strCommunityURL: s, strForumURL: o } = Z(t, r);
	const l = Y2();
	const c =
		_z.TS.STORE_BASE_URL +
		"feeds/" +
		LJ() +
		(t ? "/app/" + t : "/group/" + r) +
		"/?cc=" +
		_z.TS.COUNTRY +
		"&l=" +
		_z.TS.LANGUAGE;
	const m = E.KN.Get().GetPartnerEventPermissions(T.b.InitFromClanID(r));
	const u = m && (m.can_edit || m.support_user);
	const d = R.Fm.Get().BOwnsApp(t);
	const A = useMemo(() => {
		const e = [];
		if (_z.TS.IN_CLIENT && d) {
			e.push({
				label: (0, Localize)("#EventDisplay_ViewInLibrary_ExtraShort"),
				data: "steam://nav/games/details/" + t,
			});
		}
		e.push({
			label: (0, Localize)("#EventDisplay_ViewStorePage_ExtraShort"),
			data: k2(a),
		});
		if (!l) {
			e.push({
				label: (0, Localize)("#EventDisplay_ViewCommunityPage_ExtraShort"),
				data: k2(s),
			});
			if (o) {
				e.push({
					label: (0, Localize)("#EventDisplay_ViewForum_ExtraShort"),
					data: k2(o),
				});
			}
			if (n) {
				e.push({
					label: i.createElement(
						"div",
						{
							className: W.RssRow,
						},
						i.createElement(F.ZPc, null),
						(0, Localize)("#EventDisplay_RSSFeed_ExtraShort"),
					),
					data: c,
				});
			}
		}
		if (u) {
			e.push({
				label: (0, Localize)("#EventDisplay_Admin_ExtraShort"),
				data: Hx(t, T.b.InitFromClanID(r), "admin"),
			});
		}
		return e;
	}, [d, a, l, u, s, o, n, c, t, r]);
	return i.createElement(N.m, {
		strDefaultLabel: (0, Localize)("#EventDisplay_LinksDropDown_ExtraShort"),
		strClassName: W.AppBannerLinkDD,
		strDropDownButtonClassName: W.AppBannerLinkDDButton,
		strDropDownMenuCtnClass: W.AppBannerLinkDDContainer,
		contextMenuPositionOptions: {
			bMatchWidth: false,
		},
		arrowClassName: W.DDButtonArrow,
		rgOptions: A,
		onChange: (e, t, r) => {
			return EP(r, e.data);
		},
	});
}
const X = PA((e) => {
	const { appId: t, clanId: r } = e;
	const {
		strCapsuleUrl: n,
		strGroupTitle: a,
		id: s,
		strExtraBannerGroupStyle: o,
	} = Z(t, r);
	const [l] = t7(t, Y);
	const c = R.Fm.Get().BOwnsApp(t);
	let m = Boolean(t !== b.DU);
	const u = i.createElement("img", {
		className: W.AppBannerLogo,
		src: n,
	});
	return i.createElement(
		"div",
		{
			className: W.AppBannerCtn,
		},
		i.createElement("div", {
			className: W.AppBannerBackground,
			style: {
				backgroundImage: `url(${n})`,
			},
		}),
		i.createElement(
			"div",
			{
				className: A_1(W.AppBannerGroup, o),
			},
			m
				? Boolean(t)
					? i.createElement(
							j.Qf,
							{
								item: {
									id: t,
									type: "game",
								},
								className: W.AppBannerLogoCtn,
								hoverProps: {
									direction: "overlay",
									style: {
										minWidth: "320px",
									},
								},
							},
							u,
						)
					: i.createElement(
							Q.u,
							{
								type: e.appId ? "app" : "clan",
								id: s,
								hoverClassName: W.AppBannerLogoCtn,
							},
							u,
						)
				: i.createElement(
						"div",
						{
							className: W.AppBannerLogoCtn,
						},
						u,
						" ",
					),
			i.createElement(
				"div",
				{
					className: W.AppBannerTitle,
				},
				a,
				i.createElement(
					"div",
					{
						className: W.NewsHubSubTitle,
					},
					(0, Localize)("#EventDisplay_NewsHubSubtitle"),
				),
			),
			m &&
				i.createElement(
					"div",
					{
						className: W.AppBannerLinks,
					},
					Boolean(!c) &&
						i.createElement(
							"div",
							{
								className: W.HeaderWishlistButton,
							},
							i.createElement(q._, {
								appid: t,
								bIsFree: l?.BIsFree(),
								bIsComingSoon: l?.BIsComingSoon(),
								className: A_1(W.ActionButton, W.WishlistBtnShort),
							}),
						),
					i.createElement(
						"div",
						{
							className: W.HeaderFollowButton,
						},
						Boolean(t)
							? i.createElement(H.do2, {
									appid: t,
									className: W.HeaderButtonDark,
								})
							: i.createElement(H.of, {
									clanAccountID: r,
									className: W.HeaderButtonDark,
								}),
					),
					i.createElement(K, {
						...e,
					}),
				),
		),
	);
});
class ee {
	constructor() {
		Gn(this);
	}
	m_mapClanReposted = new Set();
	m_mapSourceEventGIDToPostedClans = new Map();
	static s_EventRepost;
	static Get() {
		if (!ee.s_EventRepost) {
			ee.s_EventRepost = new ee();
			ee.s_EventRepost.Initialize();
		}
		return ee.s_EventRepost;
	}
	static ValidateRepostData(e) {
		const t = e;
		return (
			!!t &&
			!!t.repost_clan_account_ids &&
			!!Array.isArray(t.repost_clan_account_ids) &&
			!!(t.repost_clan_account_ids.length > 0) &&
			typeof t.repost_clan_account_ids[0] == "number"
		);
	}
	Initialize() {
		if (document.getElementById("application_config")) {
			let e = Tc("repostcontrols", "application_config");
			if (ee.ValidateRepostData(e)) {
				e.repost_clan_account_ids.forEach((e) => {
					return this.m_mapClanReposted.add(e);
				});
			}
		}
	}
	BCanRepostPartnerEvent() {
		return this.m_mapClanReposted.size > 0;
	}
	GetRepostClanAccountID() {
		return Array.from(this.m_mapClanReposted);
	}
	async LoadClansAlreadyRepostedTo(e, t, r) {
		if (this.m_mapSourceEventGIDToPostedClans.has(t)) {
			return this.m_mapSourceEventGIDToPostedClans.get(t);
		}
		const n = _z.TS.STORE_BASE_URL + "events/ajaxgetrepostedevent";
		const i = {
			sessionid: _z.TS.SESSIONID,
			source_clan_accountid: e.GetAccountID(),
			source_event_gid: t,
		};
		try {
			const e = await s.get(n, {
				params: i,
				withCredentials: true,
				cancelToken: r?.token,
			});
			if (e?.data?.success == 1) {
				this.m_mapSourceEventGIDToPostedClans.set(
					t,
					e.data.repost_clan_accountid || [],
				);
				return e.data.repost_clan_accountid;
			}
			console.error(
				"GetRepostClanAccountID: failed " +
					e?.data?.success +
					" and msg: " +
					e?.data?.msg,
			);
		} catch (e) {
			const t = H_1(e);
			console.error(
				"GetRepostClanAccountID: fail repost with " + t.strErrorMsg,
				t,
			);
		}
		return new Array();
	}
	async RepostEvent(e, t, r, n, i) {
		const a = _z.TS.STORE_BASE_URL + "events/ajaxrepostevent";
		const o = new FormData();
		o.append("sessionid", _z.TS.SESSIONID);
		o.append("source_clan_accountid", "" + e.GetAccountID());
		o.append("source_event_gid", "" + t);
		o.append("repost_clan_accountid", "" + r.GetAccountID());
		o.append("add", "" + n);
		try {
			let e = await s.post(a, o, {
				withCredentials: true,
				cancelToken: i?.token,
			});
			if (e?.data?.success == 1 && e.data.repost_gid) {
				if (!this.m_mapSourceEventGIDToPostedClans.has(t)) {
					this.m_mapSourceEventGIDToPostedClans.set(t, []);
				}
				const i = this.m_mapSourceEventGIDToPostedClans
					.get(t)
					.findIndex((e) => {
						return r.GetAccountID() == e;
					});
				if (n && i == -1) {
					this.m_mapSourceEventGIDToPostedClans.get(t).push(r.GetAccountID());
				} else if (!n && i !== -1) {
					this.m_mapSourceEventGIDToPostedClans.get(t).splice(i, 1);
				}
				return e.data.repost_gid;
			}
			console.error(
				"RepostEvent: failed " + e?.data?.success + " and msg: " + e?.data?.msg,
			);
		} catch (e) {
			const t = H_1(e);
			console.error("RepostEvent: fail repost with " + t.strErrorMsg, t);
		}
		return null;
	}
}
Cg([y.sH], ee.prototype, "m_mapClanReposted", undefined);
var re = te;
var de = ue;
class Ce {
	m_eCurLang = sf(_z.TS.LANGUAGE);
	m_rgHasData = PadArray([], 31, false);
	m_bHasLocalizationContext = false;
	m_callback = new he.l();
	GetCallback() {
		return this.m_callback;
	}
	GetCurEditLanguage() {
		return this.m_eCurLang;
	}
	SetCurEditLanguage(e) {
		return (
			this.m_eCurLang != e &&
			((this.m_eCurLang = e), this.GetCallback().Dispatch(e), true)
		);
	}
	SetHasLanguage(e) {
		e.forEach((e, t) => {
			if (this.m_rgHasData[t] != e) {
				this.m_rgHasData[t] = e;
			}
		});
	}
	BHasLanguageData(e) {
		return this.m_rgHasData[e];
	}
	GetHasLocalizationContext() {
		return this.m_bHasLocalizationContext;
	}
	SetHasLocalizationContext(e) {
		if (e != this.m_bHasLocalizationContext) {
			this.m_bHasLocalizationContext = e;
		}
	}
	static s_globalSingletonStore;
	static Get() {
		if (!Ce.s_globalSingletonStore) {
			Ce.s_globalSingletonStore = new Ce();
			if (_z.TS.WEB_UNIVERSE == "dev") {
				window.DUS = Ce.s_globalSingletonStore;
			}
		}
		return Ce.s_globalSingletonStore;
	}
	constructor() {
		Gn(this);
	}
}
Cg([y.sH], Ce.prototype, "m_eCurLang", undefined);
Cg([y.sH], Ce.prototype, "m_rgHasData", undefined);
Cg([y.sH], Ce.prototype, "m_bHasLocalizationContext", undefined);
Cg([ge.o], Ce.prototype, "GetCurEditLanguage", null);
Cg([ge.o], Ce.prototype, "SetCurEditLanguage", null);
Cg([y.XI.bound], Ce.prototype, "SetHasLanguage", null);
Cg([ge.o], Ce.prototype, "BHasLanguageData", null);
let fe = class extends i.Component {
	GenerateLanguageOptions() {
		let e = [];
		const {
			fnFilterLanguage: t,
			fnLangHasData: r,
			fnLastUpdateRTime: n,
			fnIsLangSupported: a,
		} = this.props;
		if (this.props.bAllowUnsetOption) {
			e.push(
				i.createElement(
					"option",
					{
						key: "langpicker_unset",
						value: -1,
					},
					(0, Localize)("#language_selection_none"),
				),
			);
		}
		let s = new Array();
		const o = this.props.realms || [Ae.TU.k_ESteamRealmGlobal];
		for (const e of CLocalizationManager.GetLanguageListForRealms(o)) {
			if (t && !t(e)) {
				continue;
			}
			const r = Lg(e);
			const n = (0, Localize)("#Language_" + r);
			const i = Boolean(a) && a(e);
			s.push({
				eLang: e,
				sLocName: n,
				bSupported: i,
			});
		}
		s.sort((e, t) => {
			return e.bSupported != t.bSupported
				? e.bSupported
					? -1
					: 1
				: e.sLocName.localeCompare(t.sLocName);
		});
		let l = false;
		for (const t of s) {
			if (t.bSupported != l) {
				e.push(
					i.createElement(
						"option",
						{
							key: t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
							className: re.SupportedGroupLabel,
							disabled: true,
						},
						(0, Localize)(
							t.bSupported
								? "#LanguageGroup_Supported"
								: "#LanguageGroup_Unsupported",
						),
					),
				);
				l = t.bSupported;
			}
			const a = r && r(t.eLang);
			const s = n && n(t.eLang);
			let o = t.sLocName;
			if (s && s !== 0) {
				o += " ";
				o += (0, Localize)(
					"#Language_Last_Update",
					LocalizeRtime32ToShortDate(s) +
						" @ " +
						LocalizeRTimeToHourAndMinutes(s, {
							bForce24HourClock: false,
						}),
				);
			}
			e.push(
				i.createElement(
					"option",
					{
						key: "langpicker" + t.eLang + (a ? "_hasdata" : ""),
						value: t.eLang,
						className: A_1(
							{
								[re.LanguageWithContent]: a,
							},
							t.bSupported ? re.SupportedLanguage : re.UnsupportedLanguage,
						),
					},
					o,
				),
			);
		}
		return e;
	}
	OnLanguageChange(e) {
		const { fnOnLanguageChanged: t, selectedLang: r } = this.props;
		let n = Number.parseInt(e.currentTarget.value);
		if (n != r && t) {
			t(n);
		}
	}
	render() {
		const { selectedLang: e, bDisabled: t, strTooltip: r } = this.props;
		let n = this.GenerateLanguageOptions();
		return i.createElement(
			me.he,
			{
				toolTipContent: r,
			},
			i.createElement(
				"select",
				{
					value: e,
					onChange: this.OnLanguageChange,
					disabled: t,
				},
				n,
			),
		);
	}
};
Cg([ie.oI], fe.prototype, "OnLanguageChange", null);
fe = Cg([g.PA], fe);
var ke = Re;
var Ne = De;
class Fe extends Te.A {
	performSearch(e) {
		let t = Array();
		this.props.supportBBCodes.forEach((r) => {
			if (r.indexOf(e) >= 0) {
				t.push({
					name: r,
				});
			}
		});
		return t;
	}
	getSelection(e) {
		return "[" + e.name + "][/" + e.name + "]";
	}
	getKey(e) {
		return e.name;
	}
	renderMatch(e) {
		return i.createElement(
			"div",
			{
				key: e.name,
				className: A_1(ke.BBCodeSuggestion),
			},
			i.createElement(
				"div",
				{
					className: ke.BBCode,
				},
				e.name,
			),
			"[",
			e.name,
			"]...[/",
			e.name,
			"]",
		);
	}
	renderNoMatchMessage() {
		return i.createElement(
			"div",
			{
				key: "nomatches",
				className: A_1(Ne.mentionSearchOption, Ne.noMatches),
			},
			(0, Localize)("#Bbcode_No_Match"),
		);
	}
	renderTooManyMatchesMessage(e) {
		return null;
	}
	renderHeader() {
		return null;
	}
	getMaxMatches() {
		return Number.MAX_VALUE;
	}
}
class Ge extends i.Component {
	descTextAreaRef = i.createRef();
	m_MentionDialog;
	m_bDisabled = true;
	m_iMentionSearchStartOffset;
	m_iMentionSearchCancelledOffset;
	constructor(e) {
		super(e);
		this.state = {
			mentionSearch: undefined,
			activeSuggestSearchType: undefined,
		};
	}
	BindMentionDialog(e) {
		this.m_MentionDialog = e;
	}
	OnKeyDown(e) {
		if (
			this.state.activeSuggestSearchType &&
			this.m_MentionDialog &&
			!e.shiftKey &&
			!e.ctrlKey &&
			this.m_MentionDialog.BHandleKeyPress(e.keyCode)
		) {
			e.preventDefault();
		} else if (e.keyCode == 8 || e.keyCode == 46) {
			this.m_iMentionSearchCancelledOffset = undefined;
		}
	}
	FindMatchOpener(e, t, r) {
		for (let n = r - 1; n >= 0; n--) {
			if (t[n] == e) {
				return n;
			}
			if (t[n] == " " || t[n] == "\n") {
				break;
			}
		}
	}
	ReplaceSuggestedText(e, t) {
		let r = this.descTextAreaRef.current.selectionStart;
		let n = this.descTextAreaRef.current.value;
		let i = this.FindMatchOpener(e, n, r);
		if (i === undefined && e == "@") {
			i = this.FindMatchOpener("＠", n, r);
		}
		if (i !== undefined) {
			let e = n.substr(0, i);
			e += t;
			if (r >= n.length || n[r] != " ") {
				e += " ";
			}
			let a = e.length;
			e += n.substr(r);
			this.descTextAreaRef.current.value = e;
			this.descTextAreaRef.current.selectionStart = a;
			this.descTextAreaRef.current.selectionEnd = a;
			this.props.fnSetText(e);
			this.FocusTextInput();
		}
	}
	OnFocus(e) {
		this.UpdateAutoSearchState();
	}
	OnKeyPress(e) {
		this.UpdateAutoSearchState();
	}
	OnClick(e) {
		this.UpdateAutoSearchState();
	}
	ClearMentionSearchState() {
		this.m_iMentionSearchStartOffset = undefined;
		if (this.state.activeSuggestSearchType) {
			this.setState({
				activeSuggestSearchType: undefined,
				mentionSearch: undefined,
			});
		}
	}
	OnEmoticonSuggestionSelected(e, t) {
		if (!t) {
			this.m_iMentionSearchCancelledOffset = this.m_iMentionSearchStartOffset;
			this.ClearMentionSearchState();
			return;
		}
		this.ReplaceSuggestedText(":", ":" + t + ":");
		this.ClearMentionSearchState();
	}
	OnBBCodeSuggestionSelected(e, t) {
		if (!t) {
			this.m_iMentionSearchCancelledOffset = this.m_iMentionSearchStartOffset;
			this.ClearMentionSearchState();
			return;
		}
		this.ReplaceSuggestedText("[", t);
		this.ClearMentionSearchState();
	}
	FocusTextInput() {
		if (this.descTextAreaRef.current) {
			this.descTextAreaRef.current.focus();
		}
	}
	UpdateAutoSearchState() {
		let e = this.descTextAreaRef.current;
		if (!e || this.m_bDisabled) {
			return;
		}
		if (e.selectionStart != e.selectionEnd || !e.selectionStart) {
			this.ClearMentionSearchState();
			return;
		}
		let t;
		let r;
		let n = e.selectionStart;
		let i = e.value;
		for (let e = n - 1; e >= 0; e--) {
			let n = e > 0 ? i[e - 1] : undefined;
			if (this.props.emoticonStore && i[e] == ":" && i.length > 2) {
				if (
					!n ||
					n == " " ||
					n == " " ||
					n == "\n" ||
					n == " " ||
					n == "\n" ||
					n == ":"
				) {
					t = e;
					r = "Emoticon";
				}
				break;
			}
			if (i[e] == "[" && (e + 1 > i.length || i[e + 1] != "/")) {
				if (
					!n ||
					n == " " ||
					n == " " ||
					n == "\n" ||
					n == " " ||
					n == "\n" ||
					n == "]"
				) {
					t = e;
					r = "BBCode";
				}
				break;
			}
			if (i[e] == " " || i[e] == "\n") {
				break;
			}
		}
		if (t === undefined || t === this.m_iMentionSearchCancelledOffset) {
			this.ClearMentionSearchState();
			return;
		}
		let a = i.substr(t + 1, n - t - 1);
		this.m_iMentionSearchStartOffset = t;
		this.setState({
			activeSuggestSearchType: r,
			mentionSearch: a,
		});
	}
	GetTextAreaRef() {
		return this.descTextAreaRef;
	}
	GetTextAreaCurrent() {
		return this.descTextAreaRef.current;
	}
	render() {
		let e;
		let {
			emoticonStore: t,
			supportBBCodes: r,
			fnSetText: n,
			...a
		} = this.props;
		switch (this.state.activeSuggestSearchType) {
			case "Emoticon": {
				e = i.createElement(Me.A, {
					emoticonStore: t,
					emoticonHoverStore: Ee.s,
					strSearch: this.state.mentionSearch,
					nMinimumSearchLengthBeforeAutoSelection: 2,
					onSuggestionSelected: this.OnEmoticonSuggestionSelected,
					ref: this.BindMentionDialog,
				});
				break;
			}
			case "BBCode": {
				e = i.createElement(Fe, {
					supportBBCodes: r,
					strSearch: this.state.mentionSearch,
					nMinimumSearchLengthBeforeAutoSelection: 2,
					onSuggestionSelected: this.OnBBCodeSuggestionSelected,
					ref: this.BindMentionDialog,
				});
			}
		}
		return i.createElement(
			i.Fragment,
			null,
			e,
			i.createElement("textarea", {
				...a,
				ref: this.descTextAreaRef,
				onKeyDown: this.OnKeyDown,
				onKeyUp: this.OnKeyPress,
				onFocus: this.OnFocus,
				onClick: this.OnClick,
			}),
		);
	}
}
Cg([ie.oI], Ge.prototype, "BindMentionDialog", null);
Cg([ie.oI], Ge.prototype, "OnKeyDown", null);
Cg([ie.oI], Ge.prototype, "OnFocus", null);
Cg([ie.oI], Ge.prototype, "OnKeyPress", null);
Cg([ie.oI], Ge.prototype, "OnClick", null);
Cg([ie.oI], Ge.prototype, "OnEmoticonSuggestionSelected", null);
Cg([ie.oI], Ge.prototype, "OnBBCodeSuggestionSelected", null);
Cg([ie.oI], Ge.prototype, "FocusTextInput", null);
Cg([ie.oI], Ge.prototype, "GetTextAreaRef", null);
Cg([ie.oI], Ge.prototype, "GetTextAreaCurrent", null);
var ze = Le;
var qe = je;
class Xe extends i.Component {
	state = {
		region: {
			xPosPct: 0,
			yPosPct: 0,
			widthPct: (this.GetDestWidth() / this.props.uploadFile.width) * 100,
			heightPct: (this.GetDestHeight() / this.props.uploadFile.height) * 100,
		},
	};
	async OnCrop() {
		await this.props.uploadFile.CropImage(
			(this.state.region.xPosPct / 100) * this.props.uploadFile.width,
			(this.state.region.yPosPct / 100) * this.props.uploadFile.height,
			(this.state.region.widthPct / 100) * this.props.uploadFile.width,
			(this.state.region.heightPct / 100) * this.props.uploadFile.height,
			this.GetDestWidth(),
			this.GetDestHeight(),
			this.props.fileType,
		);
		this.props.closeModal();
	}
	UpdateCrop(e, t) {
		this.setState({
			region: t,
		});
	}
	GetDestWidth() {
		const { uploadFile: e, forceResolution: t } = this.props;
		if (t) {
			return t.width;
		} else {
			return Ze.Fj[e.type].width;
		}
	}
	GetDestHeight() {
		const { uploadFile: e, forceResolution: t } = this.props;
		if (t) {
			return t.height;
		} else {
			return Ze.Fj[e.type].height;
		}
	}
	GetLargestBoxThatFits(e, t, r, n) {
		let i = r;
		let a = (i * t) / Math.max(e, 1);
		if (a > n) {
			a = n;
			i = (a * e) / Math.max(t, 1);
		}
		return {
			width: i,
			height: a,
		};
	}
	GetPreviewWindowStyle() {
		const { region: e } = this.state;
		const t = this.GetLargestBoxThatFits(
			this.GetDestWidth(),
			this.GetDestHeight(),
			500,
			150,
		);
		const r = t.width;
		const n = t.height;
		const i = 1 / Math.max(e.widthPct / 100, 0.0001);
		const a = 1 / Math.max(e.heightPct / 100, 0.0001);
		const s = (this.props.uploadFile.width * e.xPosPct) / 100;
		const o = (this.props.uploadFile.height * e.yPosPct) / 100;
		return {
			width: r,
			height: n,
			backgroundPosition: `${-s * ((r * i) / this.props.uploadFile.width)}px ${
				-o * ((n * a) / this.props.uploadFile.height)
			}px`,
			backgroundSize: `${i * 100}% ${a * 100}%`,
			backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
		};
	}
	render() {
		const e = (this.GetDestWidth() / this.props.uploadFile.width) * 100;
		const t = (this.GetDestHeight() / this.props.uploadFile.height) * 100;
		const r = this.GetLargestBoxThatFits(
			this.props.uploadFile.width,
			this.props.uploadFile.height,
			800,
			500,
		);
		return i.createElement(
			ce.x_,
			{
				onEscKeypress: this.props.closeModal,
				bDisableBackgroundDismiss: true,
			},
			i.createElement(
				"div",
				{
					className: A_1("DialogContent", "_DialogCenterVertically"),
				},
				i.createElement(
					N.iK,
					null,
					(0, Localize)(
						"#ImageUpload_CropModalTitleDims",
						this.GetDestWidth(),
						this.GetDestHeight(),
					),
				),
				i.createElement(
					"div",
					{
						className: A_1("DialogBodyText"),
					},
					(0, Localize)("#ImageUpload_CropModalDescription"),
				),
				i.createElement(
					"div",
					{
						className: Ke.CropImage,
						style: {
							width: r.width,
							height: r.height,
						},
					},
					i.createElement("img", {
						style: {
							maxWidth: "100%",
							maxHeight: "100%",
							objectFit: "contain",
						},
						src: this.props.uploadFile.dataUrl,
					}),
					i.createElement(Ye.I, {
						bLockAspectRatio: true,
						bDisableLink: true,
						index: 0,
						updateFn: this.UpdateCrop,
						xPosPct: 0,
						yPosPct: 0,
						widthMinPct: e,
						heightMinPct: t,
						widthPct: e,
						heightPct: t,
					}),
				),
				i.createElement(
					"div",
					{
						className: Ke.CropPreviewGroup,
					},
					i.createElement(
						"div",
						{
							className: Ke.CropPreviewLabel,
						},
						(0, Localize)("#ImageUpload_CropPreview"),
					),
					i.createElement("div", {
						style: this.GetPreviewWindowStyle(),
					}),
				),
				i.createElement(
					N.jn,
					{
						onClick: this.OnCrop,
					},
					(0, Localize)("#ImageUpload_CropAndContinue"),
				),
			),
		);
	}
}
Cg([ie.oI], Xe.prototype, "OnCrop", null);
Cg([ie.oI], Xe.prototype, "UpdateCrop", null);
const et = (e) => {
	const { clanSteamID: t, fnImageSelectCallBack: r } = e;
	const [n, a] = useState("");
	const s = mr_1(e.clanSteamID.GetAccountID());
	const o = () => {
		return e.closeModal && e.closeModal();
	};
	const l = B.pU.GetFilteredClanImages(t, n);
	const c = (e) => {
		r(e);
		o();
	};
	return i.createElement(
		Je.tH,
		null,
		i.createElement(
			ce.x_,
			{
				onEscKeypress: o,
			},
			i.createElement(
				N.UC,
				null,
				i.createElement(N.Y9, null, (0, Localize)("#ClanImageChooser_Title")),
				i.createElement(
					N.nB,
					null,
					i.createElement(
						N.a3,
						null,
						i.createElement("p", null, (0, Localize)("#ClanImageChooser_Desc")),
						i.createElement(N.pd, {
							placeholder: (0, Localize)("#ClanImageChooser_Search"),
							value: n,
							onChange: (e) => {
								return a(e.currentTarget.value);
							},
						}),
						i.createElement(
							"div",
							{
								className: $e.ImagesOuterContainer,
							},
							s
								? i.createElement(He.t, {
										size: "medium",
										string: (0, Localize)("#Loading"),
									})
								: Boolean(l.length > 0)
									? l.map((e) => {
											return i.createElement(tt, {
												key: "ci" + e.image_hash,
												clanImage: e,
												searchStringHilight: n,
												fnImageClick: c,
											});
										})
									: Boolean(n.trim().length == 0)
										? i.createElement(
												"div",
												null,
												(0, Localize)("#ClanImageChooser_None"),
											)
										: i.createElement(
												"div",
												null,
												(0, Localize)("#EventCalendar_GameSearch_NoneFound"),
											),
						),
					),
				),
				i.createElement(
					N.wi,
					null,
					i.createElement(
						N.$n,
						{
							onClick: o,
						},
						(0, Localize)("#Button_Cancel"),
					),
				),
			),
		),
	);
};
const tt = (e) => {
	const { clanImage: t, searchStringHilight: r, fnImageClick: n } = e;
	let a = t.file_name ? t.file_name : "";
	let s = (function (e, t, r, n) {
		let a = [];
		if (e.length > 0) {
			let s = t.toLocaleLowerCase();
			for (let o = 0; o < t.length; ) {
				let l = s.indexOf(e, o);
				if (l < 0) {
					a.push(
						i.createElement(
							"span",
							{
								key: r + "_" + String(o),
							},
							t.substring(o),
						),
					);
					break;
				}
				if (o < l) {
					a.push(
						i.createElement(
							"span",
							{
								key: r + "_" + String(o),
							},
							t.substring(o, l),
						),
					);
				}
				a.push(
					i.createElement(
						"span",
						{
							key: r + "_" + String(o),
							className: n,
						},
						t.substr(l, e.length),
					),
				);
				o = l + e.length;
			}
		} else {
			a.push(
				i.createElement(
					"span",
					{
						key: r + "_null",
					},
					t,
				),
			);
		}
		return a;
	})(r, a, String(t.imageid), $e.Hilight);
	return i.createElement(
		"div",
		{
			className: $e.ImageContainer,
		},
		i.createElement("div", {
			className: $e.Image,
			style: {
				backgroundImage: `url( '${t.thumb_url}' )`,
			},
			onDoubleClick: () => {
				return n(t);
			},
		}),
		i.createElement(
			"div",
			{
				className: $e.ImageFilename,
				title: a,
			},
			s,
		),
	);
};
const it = PA((e) => {
	const {
		clanSteamID: t,
		inputClanImage: r,
		nWidth: n,
		nHeight: a,
		setImage: s,
	} = e;
	const o = i.useMemo(() => {
		return ["sale_header"];
	}, []);
	const l = i.useMemo(() => {
		return {
			width: n,
			height: a,
		};
	}, [n, a]);
	const [c, m] = i.useState(undefined);
	const [u, d] = i.useState(Boolean(r));
	const [A, g] = i.useState(false);
	const [h] = q3(() => {
		return [Ce.Get().GetCurEditLanguage()];
	});
	const C = i.useMemo(() => {
		return new nt.V(t);
	}, [t.ConvertTo64BitString()]);
	const _ = i.useCallback(
		async (e) => {
			C.ClearImages();
			if (e && (d(true), await C.AddExistingClanImage(e, 0, o))) {
				m(e);
				const t = C.GetUploadImages()[0].IsValidAssetType(o, l);
				if (
					t.error.length == 0 &&
					!t.needsCrop &&
					(!r || r.image_hash != e.image_hash)
				) {
					s(e);
				}
			}
			d(false);
		},
		[C, r, s, o, l],
	);
	i.useEffect(() => {
		_(r);
	}, [_, r]);
	let f;
	let b = "";
	let y = false;
	if (C && C.GetFilesToUpload().length > 0) {
		f = C.GetUploadImages()[0];
		const e = f.IsValidAssetType(o, l);
		b = e.error;
		y = e.needsCrop;
	}
	return i.createElement(
		i.Fragment,
		null,
		u
			? i.createElement(He.t, {
					size: "medium",
					string: (0, Localize)("#Loading"),
				})
			: Boolean(c) &&
					i.createElement("div", {
						className: rt.Image,
						style: {
							backgroundImage: `url( '${f ? f.dataUrl : c.url}' )`,
							height: `${a}px`,
							width: `${n}px`,
						},
					}),
		Boolean(b) && i.createElement("p", null, b),
		y &&
			i.createElement(
				N.$n,
				{
					onClick: (e) => {
						const t = GetOwningWindowForEvent(e);
						let r = C.GetUploadImages()[0];
						pg(
							i.createElement(Xe, {
								ownerWin: t,
								uploadFile: r,
								forceResolution: {
									width: n,
									height: a,
								},
								fileType: 3,
							}),
							t,
						);
					},
				},
				(0, Localize)("#BBCode_ResizeImage"),
			),
		Boolean(f && f.bCropped) &&
			i.createElement(
				i.Fragment,
				null,
				i.createElement(
					"div",
					null,
					(0, Localize)("#ClanImagePickAndResize_UploadStatus", f.status),
				),
				A
					? i.createElement(He.t, {
							string: (0, Localize)("#Uploading"),
							size: "small",
						})
					: i.createElement(
							N.$n,
							{
								onClick: async () => {
									g(true);
									try {
										const e = await C.UploadAllImages(
											[Ae.TU.k_ESteamRealmGlobal],
											h,
											o,
											l,
										);
										const r = Object.values(e);
										if (
											r &&
											r.length > 0 &&
											(AssertMsg(
												r.length == 1,
												"ClanImagePickForCertainSize expected size 1, got " +
													r.length,
											),
											r[0].success == 1)
										) {
											const e = r[0];
											const n = mJ() + t.GetAccountID() + "/";
											const i = B.i6.GetExtensionStringForFileType(e.file_type);
											const a = n + e.image_hash + i;
											const o = n + e.thumbnail_hash + i;
											const l = {
												imageid: -11231412,
												image_hash: e.image_hash,
												thumbnail_hash: e.thumbnail_hash,
												file_type: e.file_type,
												file_name: e.file_name,
												clanAccountID: t.GetAccountID(),
												url: a,
												thumb_url: o,
												uploaded_time: Date.now() / 1000,
												loc_languages: undefined,
												is_loc_group: false,
											};
											m(l);
											s(l);
										}
									} finally {
										g(false);
									}
								},
							},
							(0, Localize)("#ClanImagePickAndResize_UploadImage"),
						),
			),
		i.createElement(
			N.$n,
			{
				onClick: (e) => {
					const t = new T.b(_z.UF.CLANSTEAMID);
					pg(
						i.createElement(et, {
							clanSteamID: t,
							fnImageSelectCallBack: (e) => {
								return _(e);
							},
						}),
						GetOwningWindowForEvent(e),
					);
				},
			},
			(0, Localize)("#BBCode_ChooseImage", n, a),
		),
	);
});
var at;
let st = class extends i.Component {
	static {
		at = this;
	}
	m_cancelSignal = s.CancelToken.source();
	static s_formattingHelp = new Map();
	constructor(e) {
		super(e);
		this.state = {
			formattingHelp: {
				__html: at.s_formattingHelp.has(e.formatType)
					? at.s_formattingHelp.get(e.formatType)
					: "",
			},
		};
	}
	componentDidMount() {
		this.AjaxGetFormattingHelp().catch((e) => {
			this.setState(H_1(e));
		});
	}
	componentWillUnmount() {
		this.m_cancelSignal.cancel("FormattingHelpWidget component unmounted");
	}
	static GetHelpURL(e, t) {
		return (
			_z.TS.COMMUNITY_BASE_URL +
			"comment/" +
			e +
			"/formattinghelp" +
			(t ? "?ajax=1" : "")
		);
	}
	async AjaxGetFormattingHelp() {
		if (this.state.formattingHelp.__html == "") {
			let e;
			let t = {
				sessionid: _z.TS.SESSIONID,
			};
			e = await s.get(at.GetHelpURL(this.props.formatType, true), {
				params: t,
				cancelToken: this.m_cancelSignal.token,
			});
			at.s_formattingHelp.set(this.props.formatType, e.data);
			this.setState({
				formattingHelp: {
					__html: e.data,
				},
			});
		}
	}
	render() {
		if (this.state.strErrorMsg) {
			return i.createElement(
				"div",
				null,
				this.state.strErrorMsg,
				i.createElement("br", null),
				this.state.errorCode,
			);
		} else if (this.state.formattingHelp.__html == "") {
			return i.createElement(He.t, null);
		} else {
			return i.createElement(
				ce.o0,
				{
					strTitle: (0, Localize)("#EventEditor_FormattingHelp_GetHelpLink"),
					strDescription: "",
					closeModal: this.props.closeModal,
					onOK: this.props.closeModal,
					onCancel: this.props.closeModal,
					bAlertDialog: true,
					className: "ModernBBStyles",
				},
				i.createElement("div", {
					dangerouslySetInnerHTML: this.state.formattingHelp,
				}),
			);
		}
	}
};
st = at = Cg([g.PA], st);
var ot;
let ut = class extends i.Component {
	descAutoTextAreaRef = i.createRef();
	constructor(e) {
		super(e);
		this.state = {
			bShowDragTarget: false,
		};
	}
	componentDidMount() {
		B.pU.AddClanImageDragListener(this.ClanImageDragListener);
	}
	componentWillUnmount() {
		B.pU.RemoveClanImageDragListener(this.ClanImageDragListener);
	}
	ClanImageDragListener(e, t) {
		if (this.state.bShowDragTarget != t) {
			this.setState({
				bShowDragTarget: t,
			});
		}
	}
	onFocus(e) {
		if (e) {
			e.target.select();
		}
	}
	InsertText(e) {
		dt.replaceSelection(this.GetTextAreaRef().current, e);
	}
	OnTextAreaDropListener(e) {
		e.preventDefault();
		e.stopPropagation();
		if (e.dataTransfer.items && e.dataTransfer.items[0]) {
			let t = e.dataTransfer.getData("text");
			if (t && t.length > 0) {
				let e = mJ();
				if (t.startsWith(e)) {
					let r = "[img]" + lt.lw + "/" + t.substr(e.length) + "[/img]";
					dt.replaceSelection(this.GetTextAreaRef().current, r);
				}
			}
		}
	}
	GetTextAreaRef() {
		if (this.descAutoTextAreaRef && this.descAutoTextAreaRef.current) {
			return this.descAutoTextAreaRef.current.GetTextAreaRef();
		} else {
			return undefined;
		}
	}
	render() {
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(At, {
				pathToImages:
					_z.TS.COMMUNITY_CDN_URL + "public/images/sharedfiles/guides/",
				fnTextareaRef: this.GetTextAreaRef,
				emoticonStore: this.props.emoticonStore,
				supportBBCodes: this.props.limitBBCode ? this.props.limitBBCode : be.Kl,
				bSupportHTMLImport: this.props.bSupportHTMLImport,
				showFormatHelp: this.props.showFormatHelp,
				bEmbeddedInDialog: this.props.bEmbeddedInDialog,
				clanSteamID: this.props.clanSteamID,
			}),
			i.createElement(
				"div",
				{
					className: A_1(
						qe.DescriptionCtn,
						qe.BBCodeEditorInputStyles,
						this.state.bShowDragTarget ? qe.DragTarget : "",
					),
				},
				i.createElement(Ge, {
					cols: 90,
					rows: this.props.nOverridesRows || 22,
					maxLength: 32000,
					className: A_1(
						qe.DefaultEditor,
						this.props.classNameForTextArea
							? this.props.classNameForTextArea
							: "",
					),
					placeholder: this.props.strPlaceholder,
					ref: this.descAutoTextAreaRef,
					value: this.props.fnGetCurText(),
					onChange: this.props.fnOnTextChange,
					onDrop: this.OnTextAreaDropListener,
					emoticonStore: this.props.emoticonStore,
					fnSetText: this.props.fnSetText,
					supportBBCodes: this.props.limitBBCode
						? this.props.limitBBCode
						: be.Kl,
				}),
			),
		);
	}
};
Cg([ie.oI], ut.prototype, "ClanImageDragListener", null);
Cg([ie.oI], ut.prototype, "onFocus", null);
Cg([ie.oI], ut.prototype, "OnTextAreaDropListener", null);
Cg([ie.oI], ut.prototype, "GetTextAreaRef", null);
ut = Cg([g.PA], ut);
class dt {
	static BIsFireFox() {
		return Boolean(
			new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(navigator.userAgent),
		);
	}
	static replaceSelection(e, t) {
		let r = e.selectionStart;
		e.focus();
		dt.InsertTextAtSelect(t, e);
		e.setSelectionRange(r, r + t.length);
	}
	static getSelectedString(e) {
		return e.value.substr(e.selectionStart, e.selectionEnd - e.selectionStart);
	}
	static wrapBBCode(e, t, r) {
		let n = dt.getSelectedString(r);
		let i = "";
		i =
			n.indexOf(e) == 0 && n.lastIndexOf(t) == n.length - t.length
				? n.substr(e.length, n.length - e.length - t.length)
				: e + n + t;
		dt.replaceSelection(r, i);
	}
	static append(e, t) {
		if (t) {
			t.focus();
			t.setSelectionRange(t.value.length, t.value.length);
			dt.InsertTextAtSelect(e, t);
		}
	}
	static ClearTextArea(e) {
		if (e) {
			e.focus();
			const t = 0;
			const r = e.value.length;
			if (t !== r) {
				if (e.setRangeText) {
					e.setRangeText("", t, r, "preserve");
				} else {
					e.value = "";
				}
				const n = new Event("input", {
					bubbles: true,
				});
				e.dispatchEvent(n);
			}
			e.focus();
		}
	}
	static overwrite(e, t) {
		if (t) {
			dt.ClearTextArea(t);
			dt.InsertTextAtSelect(e, t);
		}
	}
	static InsertTextAtSelect(e, t) {
		const r = t.selectionStart;
		const n = t.selectionEnd;
		if (r !== null && n !== null) {
			if (t.setRangeText) {
				t.setRangeText(e, r, n, "preserve");
			} else {
				t.value = t.value.slice(0, r) + e + t.value.slice(n);
			}
			const i = new Event("input", {
				bubbles: true,
			});
			t.dispatchEvent(i);
			t.selectionStart = t.selectionEnd = r + e.length;
		}
		t.focus();
	}
}
let At = class extends i.Component {
	m_linkPopupRef = i.createRef();
	onBold() {
		dt.wrapBBCode("[b]", "[/b]", this.props.fnTextareaRef().current);
	}
	onItalics() {
		dt.wrapBBCode("[i]", "[/i]", this.props.fnTextareaRef().current);
	}
	onUnderline() {
		dt.wrapBBCode("[u]", "[/u]", this.props.fnTextareaRef().current);
	}
	onStrikeThrough() {
		dt.wrapBBCode("[strike]", "[/strike]", this.props.fnTextareaRef().current);
	}
	onHeader() {
		dt.wrapBBCode("[h1]", "[/h1]", this.props.fnTextareaRef().current);
	}
	onHeader2() {
		dt.wrapBBCode("[h2]", "[/h2]", this.props.fnTextareaRef().current);
	}
	onHeader3() {
		dt.wrapBBCode("[h3]", "[/h3]", this.props.fnTextareaRef().current);
	}
	onUnorderedList() {
		this.handleList("list");
	}
	onOrderedList() {
		this.handleList("olist");
	}
	handleList(e) {
		let t = this.props.fnTextareaRef().current;
		let r = "[" + e + "]\n";
		let n = "[/" + e + "]";
		if (t.selectionStart == t.selectionEnd) {
			dt.wrapBBCode(r + "[*]", "\n" + n, t);
		} else {
			let e =
				r +
				dt
					.getSelectedString(t)
					.split("\n")
					.map((e) => {
						return (e.match(/\*+\s/) ? "[*]" : "[*] ") + e;
					})
					.join("\n") +
				"\n" +
				n;
			dt.replaceSelection(t, e);
		}
	}
	OnAddLink(e) {
		HT(
			i.createElement(ht, {
				textareaRef: this.props.fnTextareaRef(),
			}),
			GetOwningWindowForEvent(e),
		);
	}
	ShowHelpDialog(e) {
		if (this.props.showFormatHelp) {
			HT(
				i.createElement(st, {
					formatType: this.props.showFormatHelp,
				}),
				GetOwningWindowForEvent(e),
			);
		}
	}
	OnConvertHTMLToBBCodeDialog(e) {
		const t = GetOwningWindowForEvent(e);
		HT(
			i.createElement(yt, {
				ownerWindow: t,
				textareaRef: this.props.fnTextareaRef(),
			}),
			t,
		);
	}
	OnOpenYoutubeDialog(e) {
		let t = _z.TS.IMG_URL + "applications/community/";
		HT(
			i.createElement(gt, {
				textareaRef: this.props.fnTextareaRef(),
				pathToImages: t,
			}),
			GetOwningWindowForEvent(e),
		);
	}
	OnOpenImageDialog(e) {
		HT(
			i.createElement(Ct, {
				textareaRef: this.props.fnTextareaRef(),
			}),
			GetOwningWindowForEvent(e),
		);
	}
	OnOpenSpeakerDialog(e) {
		pg(
			i.createElement(_t, {
				clanSteamID: this.props.clanSteamID,
				textareaRef: this.props.fnTextareaRef(),
			}),
			GetOwningWindowForEvent(e),
		);
	}
	OnEmoticonSelected(e, t = false) {
		let r = `ː${e}ː`;
		dt.replaceSelection(this.props.fnTextareaRef().current, r);
		this.props.fnTextareaRef().current.focus();
	}
	BSupports(e) {
		return (
			this.props.supportBBCodes.findIndex((t) => {
				return t == e;
			}) >= 0
		);
	}
	render() {
		const {
			showFormatHelp: e,
			bEmbeddedInDialog: t,
			bSupportHTMLImport: r,
			pathToImages: n,
		} = this.props;
		let a;
		if (e) {
			a = t
				? i.createElement(
						"span",
						{
							className: A_1("ttip", qe.ActionGetHelp),
						},
						i.createElement(
							me.he,
							{
								toolTipContent: (0, Localize)(
									"#EventEditor_FormattingHelp_GetHelpLink",
								),
							},
							i.createElement(
								"a",
								{
									href: st.GetHelpURL(this.props.showFormatHelp, false),
									target: _z.TS.IN_CLIENT || "_blank",
								},
								i.createElement("img", {
									src: n + "/action_help.png",
								}),
								" ",
								(0, Localize)("#EventEditor_FormattingHelp_GetHelpLink"),
							),
						),
					)
				: i.createElement(
						"span",
						{
							onClick: this.ShowHelpDialog,
							className: A_1("ttip", qe.ActionGetHelp),
						},
						i.createElement(
							me.he,
							{
								toolTipContent: (0, Localize)(
									"#EventEditor_FormattingHelp_GetHelpLink",
								),
							},
							i.createElement("img", {
								src: n + "/action_help.png",
							}),
							" ",
							(0, Localize)("#EventEditor_FormattingHelp_GetHelpLink"),
						),
					);
		}
		return i.createElement(
			"div",
			{
				className: qe.TextEditorToolBarContainer,
			},
			this.BSupports("b") &&
				i.createElement(pt, {
					onClick: this.onBold,
					tooltip: (0, Localize)("#Editor_Bold"),
					imgURL: this.props.pathToImages + "/format_bold.png",
				}),
			this.BSupports("u") &&
				i.createElement(pt, {
					onClick: this.onUnderline,
					tooltip: (0, Localize)("#Editor_Underline"),
					imgURL: this.props.pathToImages + "/format_underline.png",
				}),
			this.BSupports("i") &&
				i.createElement(pt, {
					onClick: this.onItalics,
					tooltip: (0, Localize)("#Editor_Italics"),
					imgURL: this.props.pathToImages + "/format_italic.png",
				}),
			this.BSupports("strike") &&
				i.createElement(pt, {
					onClick: this.onStrikeThrough,
					tooltip: (0, Localize)("#Editor_StrikeThrough"),
					imgURL: this.props.pathToImages + "/format_strike.png",
				}),
			Boolean(this.BSupports("url") && !t) &&
				i.createElement(pt, {
					onClick: this.OnAddLink,
					tooltip: (0, Localize)("#Editor_Link"),
					imgURL: this.props.pathToImages + "/format_link.png",
				}),
			this.BSupports("list") &&
				i.createElement(pt, {
					onClick: this.onUnorderedList,
					tooltip: (0, Localize)("#Editor_Unordered"),
					imgURL: this.props.pathToImages + "/format_bullet.png",
				}),
			this.BSupports("olist") &&
				i.createElement(pt, {
					onClick: this.onOrderedList,
					tooltip: (0, Localize)("#Editor_Ordered"),
					imgURL: this.props.pathToImages + "/format_numbered.png",
				}),
			this.BSupports("h1") &&
				i.createElement(pt, {
					onClick: this.onHeader,
					tooltip: (0, Localize)("#Editor_Header"),
					imgURL: this.props.pathToImages + "/format_header1.png",
				}),
			this.BSupports("h2") &&
				i.createElement(pt, {
					onClick: this.onHeader2,
					tooltip: (0, Localize)("#Editor_Header2"),
					imgURL: this.props.pathToImages + "/format_header2.png",
				}),
			this.BSupports("h3") &&
				i.createElement(pt, {
					onClick: this.onHeader3,
					tooltip: (0, Localize)("#Editor_Header3"),
					imgURL: this.props.pathToImages + "/format_header3.png",
				}),
			this.BSupports("previewyoutube") &&
				i.createElement(pt, {
					onClick: this.OnOpenYoutubeDialog,
					tooltip: (0, Localize)("#EventEditor_InsertYouTube"),
					imgURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==",
				}),
			i.createElement(
				"span",
				{
					className: "ttip",
				},
				this.props.emoticonStore &&
					i.createElement(
						me.he,
						{
							toolTipContent: (0, Localize)("#Editor_Emoticon"),
						},
						i.createElement(Oe.A, {
							title: " ",
							className: A_1(qe.EmoteOuter),
							disabled: false,
							OnEmoticonSelected: this.OnEmoticonSelected,
							rtLastAckedNewEmoticons: Number.MAX_VALUE,
							emoticonStore: this.props.emoticonStore,
							emoticonHoverStore: Ee.s,
							useImg: this.props.pathToImages + "/format_emote.png",
							contextOptions: {
								bOverlapHorizontal: true,
								bDisablePopTop: true,
							},
						}),
					),
			),
			Boolean(this.BSupports("img") && !t) &&
				i.createElement(pt, {
					onClick: this.OnOpenImageDialog,
					tooltip: (0, Localize)("#EventEditor_InsertImage"),
					imgURL: this.props.pathToImages + "/insert_img.png",
				}),
			Boolean(
				_z.iA.is_support && this.props.clanSteamID && this.BSupports("speaker"),
			) &&
				i.createElement(pt, {
					onClick: this.OnOpenSpeakerDialog,
					tooltip: (0, Localize)("#EventEditor_AddSpeaker"),
					imgURL: this.props.pathToImages + "/insert_img.png",
				}),
			Boolean(r && !t) &&
				i.createElement(
					pt,
					{
						onClick: this.OnConvertHTMLToBBCodeDialog,
						className: qe.ActionImportHTML,
						tooltip: (0, Localize)("#EventEditor_ImportFromHTML_ttip"),
					},
					(0, Localize)("#EventEditor_ImportHTML"),
				),
			a,
		);
	}
};
function pt(e) {
	return i.createElement(
		"span",
		{
			onClick: e.onClick,
			className: e.className,
		},
		i.createElement(
			me.he,
			{
				toolTipContent: e.tooltip,
				className: "ttip",
			},
			Boolean(e.imgURL) &&
				i.createElement("img", {
					src: e.imgURL,
				}),
			e.children,
		),
	);
}
Cg([ie.oI], At.prototype, "onBold", null);
Cg([ie.oI], At.prototype, "onItalics", null);
Cg([ie.oI], At.prototype, "onUnderline", null);
Cg([ie.oI], At.prototype, "onStrikeThrough", null);
Cg([ie.oI], At.prototype, "onHeader", null);
Cg([ie.oI], At.prototype, "onHeader2", null);
Cg([ie.oI], At.prototype, "onHeader3", null);
Cg([ie.oI], At.prototype, "onUnorderedList", null);
Cg([ie.oI], At.prototype, "onOrderedList", null);
Cg([ie.oI], At.prototype, "OnAddLink", null);
Cg([ie.oI], At.prototype, "ShowHelpDialog", null);
Cg([ie.oI], At.prototype, "OnConvertHTMLToBBCodeDialog", null);
Cg([ie.oI], At.prototype, "OnOpenYoutubeDialog", null);
Cg([ie.oI], At.prototype, "OnOpenImageDialog", null);
Cg([ie.oI], At.prototype, "OnOpenSpeakerDialog", null);
Cg([ie.oI], At.prototype, "OnEmoticonSelected", null);
At = Cg([g.PA], At);
let gt = class extends i.Component {
	state = {
		youtubeInput: "",
		alignment: ct.V2.left,
	};
	OnYoutubeInsertLink() {
		const e = this.state.youtubeInput && XU(this.state.youtubeInput);
		if (e) {
			if (this.state.alignment == ct.V2.summary) {
				const t =
					"https://www.youtube.com/watch?v=" +
					e.strVideoID +
					(e.nStartSeconds ? "&t=" + e.nStartSeconds : "");
				dt.wrapBBCode(t, "", this.props.textareaRef.current);
			} else {
				let t =
					"[previewyoutube=" + e.strVideoID + ";" + this.state.alignment + "]";
				dt.wrapBBCode(t, "[/previewyoutube]", this.props.textareaRef.current);
			}
			this.setState({
				youtubeInput: "",
				alignment: ct.V2.left,
			});
		} else {
			alert((0, Localize)("#EventEditor_InsertYouTube_NoURL"));
		}
	}
	OnUrlChange(e) {
		if (this.state.youtubeInput != e.target.value) {
			this.setState({
				youtubeInput: e.target.value,
			});
		}
	}
	OnLeftSelected() {
		this.setState({
			alignment: ct.V2.left,
		});
	}
	OnRightSelected() {
		this.setState({
			alignment: ct.V2.right,
		});
	}
	OnFullSelected() {
		this.setState({
			alignment: ct.V2.full,
		});
	}
	OnSummarySelected() {
		this.setState({
			alignment: ct.V2.summary,
		});
	}
	OnOuterDivClickPassDown(e) {}
	render() {
		return i.createElement(
			ce.o0,
			{
				strTitle: (0, Localize)("#EventEditor_InsertYouTube"),
				strDescription: "",
				closeModal: this.props.closeModal,
				onCancel: this.props.closeModal,
				onOK: this.OnYoutubeInsertLink,
				strOKButtonText: (0, Localize)("#EventEditor_InsertYouTube"),
				className: qe.BBCodeEditorInputStyles,
			},
			i.createElement(
				"div",
				{
					className: qe.YouTubeInput,
				},
				i.createElement(
					"div",
					{
						className: "DialogInputLabelGroup",
					},
					i.createElement(
						"label",
						null,
						i.createElement(
							"div",
							{
								className: "DialogLabel",
							},
							(0, Localize)("#EventEditor_InsertYouTube_URL"),
						),
						i.createElement(
							"div",
							{
								className: "DialogInput_Wrapper",
							},
							i.createElement("input", {
								className: "DialogInput DialogTextInputBase",
								ref: (e) => {
									return e && e.focus();
								},
								type: "text",
								value: this.state.youtubeInput,
								onChange: this.OnUrlChange,
								placeholder: (0, Localize)(
									"#EventEditor_InsertYouTube_Placholder",
								),
							}),
						),
					),
				),
				i.createElement(
					"div",
					{
						className: "DialogInputLabelGroup",
					},
					i.createElement(
						"div",
						{
							className: "DialogLabel",
						},
						(0, Localize)("#EventEditor_InsertYouTube_Position"),
					),
					i.createElement(
						"div",
						{
							className: qe.YouTubePreviewInsertOption,
							onClick: this.OnOuterDivClickPassDown,
						},
						i.createElement("input", {
							type: "radio",
							name: "YouTubePreviewInsertType",
							id: ct.V2.left,
							value: ct.V2.left,
							checked: this.state.alignment == ct.V2.left,
							onChange: this.OnLeftSelected,
						}),
						i.createElement(
							"label",
							{
								htmlFor: ct.V2.left,
							},
							i.createElement(
								"span",
								null,
								(0, Localize)("#EventEditor_InsertYouTube_Left"),
							),
						),
					),
					i.createElement(
						"div",
						{
							className: qe.YouTubePreviewInsertOption,
							onClick: this.OnOuterDivClickPassDown,
						},
						i.createElement("input", {
							type: "radio",
							name: "YouTubePreviewInsertType",
							id: ct.V2.right,
							value: ct.V2.right,
							checked: this.state.alignment == ct.V2.right,
							onChange: this.OnRightSelected,
						}),
						i.createElement(
							"label",
							{
								htmlFor: ct.V2.right,
							},
							i.createElement(
								"span",
								null,
								(0, Localize)("#EventEditor_InsertYouTube_Right"),
							),
						),
					),
					i.createElement(
						"div",
						{
							className: qe.YouTubePreviewInsertOption,
							onClick: this.OnOuterDivClickPassDown,
						},
						i.createElement("input", {
							type: "radio",
							name: "YouTubePreviewInsertType",
							id: ct.V2.full,
							value: ct.V2.full,
							checked: this.state.alignment == ct.V2.full,
							onChange: this.OnFullSelected,
						}),
						i.createElement(
							"label",
							{
								htmlFor: ct.V2.full,
							},
							i.createElement(
								"span",
								null,
								(0, Localize)("#EventEditor_InsertYouTube_Full"),
							),
						),
					),
					i.createElement(
						"div",
						{
							className: qe.YouTubePreviewInsertOption,
							onClick: this.OnOuterDivClickPassDown,
						},
						i.createElement("input", {
							type: "radio",
							name: "YouTubePreviewInsertType",
							id: ct.V2.summary,
							value: ct.V2.summary,
							checked: this.state.alignment == ct.V2.summary,
							onChange: this.OnSummarySelected,
						}),
						i.createElement(
							"label",
							{
								htmlFor: ct.V2.summary,
							},
							i.createElement(
								"span",
								null,
								(0, Localize)("#EventEditor_InsertYouTube_Summary"),
							),
						),
					),
				),
			),
		);
	}
};
Cg([ie.oI], gt.prototype, "OnYoutubeInsertLink", null);
Cg([ie.oI], gt.prototype, "OnUrlChange", null);
Cg([ie.oI], gt.prototype, "OnLeftSelected", null);
Cg([ie.oI], gt.prototype, "OnRightSelected", null);
Cg([ie.oI], gt.prototype, "OnFullSelected", null);
Cg([ie.oI], gt.prototype, "OnSummarySelected", null);
Cg([ie.oI], gt.prototype, "OnOuterDivClickPassDown", null);
gt = Cg([g.PA], gt);
let ht = class extends i.Component {
	static {
		ot = this;
	}
	state = {
		textToDisplay: "",
		strURL: "",
	};
	static m_regExp = new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i);
	LoadFromTextArea() {
		const { textareaRef: e } = this.props;
		if (e && e.current) {
			let t = dt.getSelectedString(e.current);
			let r = ot.m_regExp.exec(t);
			if (r) {
				this.setState({
					strURL: r[1],
					textToDisplay: r[2],
				});
			} else {
				this.setState({
					textToDisplay: t,
				});
			}
		}
	}
	componentDidMount() {
		this.LoadFromTextArea();
	}
	onLinkTitleUpdate(e) {
		this.setState({
			textToDisplay: e.target.value,
		});
	}
	onLinkURLUpdate(e) {
		this.setState({
			strURL: e.target.value,
		});
	}
	onInsertLink() {
		const { strURL: e, textToDisplay: t } = this.state;
		let r = "[url=" + e + "]" + t + "[/url]";
		dt.replaceSelection(this.props.textareaRef.current, r);
	}
	render() {
		return i.createElement(
			ce.o0,
			{
				strTitle: (0, Localize)("#Editor_Link"),
				strDescription: "",
				closeModal: this.props.closeModal,
				onOK: this.onInsertLink,
				onCancel: this.props.closeModal,
				strOKButtonText: (0, Localize)("#EventEditor_InsertLinkURL"),
				className: qe.BBCodeEditorInputStyles,
			},
			i.createElement(
				"div",
				{
					className: qe.EventEditorLinkInput,
				},
				i.createElement(
					"div",
					{
						className: "DialogInputLabelGroup",
					},
					i.createElement(
						"label",
						null,
						i.createElement(
							"div",
							{
								className: "DialogLabel",
							},
							(0, Localize)("#EventEditor_LinkDescription"),
						),
						i.createElement(
							"div",
							{
								className: "DialogInput_Wrapper",
							},
							i.createElement("input", {
								type: "text",
								onChange: this.onLinkTitleUpdate,
								value: this.state.textToDisplay,
								className: "DialogInput DialogTextInputBase",
							}),
						),
					),
				),
				i.createElement(
					"div",
					{
						className: "DialogInputLabelGroup",
					},
					i.createElement(
						"label",
						null,
						i.createElement(
							"div",
							{
								className: "DialogLabel",
							},
							(0, Localize)("#EventEditor_LinkURL"),
						),
						i.createElement(
							"div",
							{
								className: "DialogInput_Wrapper",
							},
							i.createElement("input", {
								type: "text",
								onChange: this.onLinkURLUpdate,
								value: this.state.strURL,
								className: "DialogInput DialogTextInputBase",
							}),
						),
					),
				),
			),
		);
	}
};
Cg([ie.oI], ht.prototype, "onLinkTitleUpdate", null);
Cg([ie.oI], ht.prototype, "onLinkURLUpdate", null);
Cg([ie.oI], ht.prototype, "onInsertLink", null);
ht = ot = Cg([g.PA], ht);
let Ct = class extends i.Component {
	refFirstInput;
	state = {
		imgURL: "",
		anchorURL: "",
	};
	componentDidMount() {
		if (this.refFirstInput) {
			this.refFirstInput.current.focus();
		}
	}
	OnImageInsert() {
		const { anchorURL: e, imgURL: t } = this.state;
		let r = "";
		let n = "";
		if (e && e.length > 0) {
			r += "[url=" + e + "]";
			n = "[/url]" + n;
		}
		r += "[img]" + t;
		n = "[/img]" + n;
		dt.wrapBBCode(r, n, this.props.textareaRef.current);
	}
	OnImageURLChange(e) {
		if (this.state.imgURL != e.target.value) {
			this.setState({
				imgURL: e.target.value,
			});
		}
	}
	OnAnchorURLChange(e) {
		if (this.state.anchorURL != e.target.value) {
			this.setState({
				anchorURL: e.target.value,
			});
		}
	}
	render() {
		const { imgURL: e, anchorURL: t } = this.state;
		return i.createElement(
			ce.o0,
			{
				strTitle: (0, Localize)("#EventEditor_InsertImage_Title"),
				strDescription: "",
				closeModal: this.props.closeModal,
				onCancel: this.props.closeModal,
				onOK: this.OnImageInsert,
				strOKButtonText: (0, Localize)("#EventEditor_InsertImage_Title"),
				className: qe.BBCodeEditorInputStyles,
			},
			i.createElement(
				"div",
				{
					className: qe.EventEditorLinkInput,
				},
				i.createElement(
					"p",
					null,
					(0, Localize)("#EventEditor_InsertImage_Desc"),
				),
				i.createElement(
					"div",
					{
						className: "DialogInputLabelGroup",
					},
					i.createElement(
						"label",
						null,
						i.createElement(
							"div",
							{
								className: "DialogLabel",
							},
							(0, Localize)("#EventEditor_InsertImage_URL"),
						),
						i.createElement(
							"div",
							{
								className: "DialogInput_Wrapper",
							},
							i.createElement("input", {
								className: "DialogInput DialogTextInputBase",
								type: "text",
								value: e,
								onChange: this.OnImageURLChange,
								placeholder: (0, Localize)(
									"#EventEditor_InsertImage_Placeholder",
								),
								ref: this.refFirstInput,
							}),
						),
					),
				),
				i.createElement(
					"div",
					{
						className: "DialogInputLabelGroup",
					},
					i.createElement(
						"label",
						null,
						i.createElement(
							"div",
							{
								className: "DialogLabel",
							},
							(0, Localize)("#EventEditor_InsertImage_Anchor"),
						),
						i.createElement(
							"div",
							{
								className: "DialogInput_Wrapper",
							},
							i.createElement("input", {
								className: "DialogInput DialogTextInputBase",
								type: "text",
								value: t,
								onChange: this.OnAnchorURLChange,
								placeholder: (0, Localize)(
									"#EventEditor_InsertImage_Placeholder",
								),
							}),
						),
					),
				),
			),
		);
	}
};
Cg([ie.oI], Ct.prototype, "OnImageInsert", null);
Cg([ie.oI], Ct.prototype, "OnImageURLChange", null);
Cg([ie.oI], Ct.prototype, "OnAnchorURLChange", null);
Ct = Cg([g.PA], Ct);
const _t = (e) => {
	const [t, r] = i.useState("");
	const [n, a] = i.useState("");
	const [s, o] = i.useState("");
	const [l, c] = i.useState("");
	const [m, u] = i.useState(undefined);
	const [d, A] = i.useState(undefined);
	const { data: p } = Dv();
	const { isLoading: g, data: h } = js(d?.GetAccountID());
	const C = t.trim().length != 0 && l.trim().length != 0;
	return i.createElement(
		ce.o0,
		{
			strTitle: (0, Localize)("#EventEditor_AddSpeaker"),
			strDescription: (0, Localize)("#EventEditor_AddSpeaker_Desc"),
			closeModal: e.closeModal,
			onCancel: e.closeModal,
			bOKDisabled: !C,
			onOK: () => {
				let r = `[speaker name="${t.trim()}"`;
				if (n.trim().length > 0) {
					r += ` title="${n}"`;
				}
				if (s.trim().length > 0) {
					r += ` company="${s}"`;
				}
				if (m) {
					r += ` photo="${
						lt.lw + "/" + m.clanAccountID + "/" + B.i6.GetHashAndExt(m)
					}"`;
				}
				if (d) {
					r += ` steamid="${d.ConvertTo64BitString()}"`;
				}
				r += `]${l}[/speaker]`;
				dt.replaceSelection(e.textareaRef.current, r);
			},
			className: qe.BBCodeEditorInputStyles,
		},
		i.createElement(
			"div",
			{
				className: qe.InsertSpeakerCtn,
			},
			i.createElement(N.pd, {
				type: "text",
				label: (0, Localize)("#EventEditor_AddSpeaker_Name"),
				value: t,
				onChange: (e) => {
					return r(e.target.value);
				},
				focusOnMount: true,
			}),
			i.createElement(
				"div",
				{
					className: qe.TitleGroup,
				},
				i.createElement(N.pd, {
					type: "text",
					label: (0, Localize)("#EventEditor_AddSpeaker_Title"),
					value: n,
					onChange: (e) => {
						return a(e.target.value);
					},
				}),
				i.createElement(N.pd, {
					type: "text",
					label: (0, Localize)("#EventEditor_AddSpeaker_Company"),
					value: s,
					onChange: (e) => {
						return o(e.target.value);
					},
				}),
			),
			i.createElement(
				me.he,
				{
					toolTipContent: (0, Localize)(
						"#EventEditor_AssociateSteamAccount_ttip",
					),
				},
				i.createElement(
					"div",
					{
						className: "DialogLabel",
					},
					(0, Localize)("#EventEditor_AssociateSteamAccount"),
					" (?)",
				),
			),
			i.createElement(
				"div",
				null,
				g &&
					i.createElement(He.t, {
						string: (0, Localize)("#Loading"),
						size: "small",
					}),
				Boolean(h) &&
					i.createElement(
						"a",
						{
							href:
								_z.TS.COMMUNITY_BASE_URL +
								"profiles/" +
								d.ConvertTo64BitString(),
							target: "_blank",
						},
						h
							? i.createElement("img", {
									style: {
										marginRight: "8px",
									},
									src: h.avatar_url,
								})
							: null,
						h ? h.m_strPlayerName : null,
					),
				i.createElement(
					"div",
					{
						className: qe.AssociateRowCtn,
					},
					i.createElement(
						N.$n,
						{
							onClick: () => {
								return A(new T.b(_z.iA.steamid));
							},
						},
						(0, Localize)("#EventEditor_SteamAccount_addme"),
					),
					i.createElement(
						N.$n,
						{
							onClick: (e) => {
								return lX(
									i.createElement(ft, {
										friends: p,
										setSteamID: A,
									}),
									e,
								);
							},
						},
						(0, Localize)("#EventEditor_SteamAccount_addfriend"),
					),
					i.createElement(
						N.$n,
						{
							onClick: () => {
								return A(undefined);
							},
						},
						(0, Localize)("#EventEditor_SteamAccount_clear"),
					),
				),
			),
			i.createElement(
				"div",
				{
					className: qe.PhotoCtn,
				},
				i.createElement(
					"div",
					{
						className: "DialogLabel",
					},
					(0, Localize)("#EventEditor_ChoosePhoto"),
				),
				i.createElement(it, {
					clanSteamID: e.clanSteamID,
					inputClanImage: m,
					setImage: u,
					nWidth: 184,
					nHeight: 184,
				}),
			),
			i.createElement(
				"div",
				{
					className: qe.AboutCtn,
				},
				i.createElement(
					"div",
					{
						className: "DialogLabel",
					},
					(0, Localize)("#EventEditor_AddSpeaker_About"),
				),
				i.createElement(N.Cl, {
					value: l,
					onChange: (e) => {
						return c(e.target.value);
					},
					rows: 8,
					cols: 80,
					nMinHeight: 40,
					placeholder: (0, Localize)(
						"#EventEditor_AddSpeaker_About_Placeholder",
					),
				}),
			),
			i.createElement(
				"div",
				{
					className: qe.PreviewCtn,
				},
				i.createElement(
					"div",
					{
						className: "DialogLabel",
					},
					(0, Localize)("#Button_Preview"),
				),
				i.createElement(Ve.$k, {
					company: s,
					name: t,
					title: n,
					bioString: l,
					photo: m ? m.url : undefined,
				}),
			),
		),
	);
};
function ft(e) {
	const { friends: t, setSteamID: r } = e;
	return i.createElement(
		"div",
		{
			className: qe.DropDownScroll,
		},
		t.map((e) => {
			return i.createElement(bt, {
				key: e,
				steamid: e,
				setSteamID: r,
			});
		}),
	);
}
function bt(e) {
	const { steamid: t, setSteamID: r } = e;
	const { data: n } = js(t);
	return i.createElement(
		M.kt,
		{
			onSelected: () => {
				return r(new T.b(t));
			},
		},
		i.createElement(
			"div",
			{
				style: {
					display: "flex",
					alignItems: "center",
				},
			},
			n &&
				i.createElement("img", {
					className: ze.WhitelistAvatar,
					src: n.avatar_url,
				}),
			n?.m_strPlayerName,
		),
	);
}
let yt = class extends i.Component {
	m_isMounted = false;
	m_bAppend = false;
	constructor(e) {
		super(e);
		this.state = {
			bPreserveNewLines: false,
			strHTMLData: "",
		};
	}
	componentDidMount() {
		this.m_isMounted = true;
	}
	componentWillUnmount() {
		this.m_isMounted = false;
	}
	OnConvertAndOverriteHTML() {
		this.m_bAppend = false;
		this.ConvertBBCode();
	}
	OnConvertAndAppendHTML() {
		this.m_bAppend = true;
		this.ConvertBBCode();
	}
	async ConvertHtmlToBBCode(e, t) {
		let r = new URLSearchParams();
		r.append("content", e);
		r.append("preserve_newlines", t ? "1" : "0");
		let n = null;
		n = await s.post(
			_z.TS.COMMUNITY_BASE_URL + "/actions/ConvertHTMLToBBCode",
			r,
		);
		return n.data.content;
	}
	ConvertBBCode() {
		this.setState({
			bConverting: true,
		});
		this.ConvertHtmlToBBCode(
			this.state.strHTMLData,
			this.state.bPreserveNewLines,
		)
			.then((e) => {
				if (this.m_isMounted) {
					if (this.m_bAppend) {
						dt.append(e, this.props.textareaRef.current);
					} else {
						dt.overwrite(e, this.props.textareaRef.current);
					}
					this.setState({
						bConverting: false,
						bFinishedConverting: true,
					});
				}
			})
			.catch((e) => {
				pg(
					i.createElement(ce.KG, {
						strTitle: (0, Localize)("#EventEditor_ConvertHTML_Error"),
						strDescription: (0, Localize)(
							"#EventEditor_ConvertHTML_Error_Desc",
							e.response && e.response.data ? e.response.data.msg : e,
						),
						bAlertDialog: true,
						bDestructiveWarning: true,
					}),
					this.props.ownerWindow,
					{
						strTitle: (0, Localize)("#EventEditor_ConvertHTML_Error"),
					},
				);
			});
	}
	OnCheckboxChange(e) {
		let t = e.target.checked;
		if (t != this.state.bPreserveNewLines) {
			this.setState({
				bPreserveNewLines: t,
			});
		}
	}
	OnTextAreaChange(e) {
		this.setState({
			strHTMLData: e.currentTarget.value,
		});
	}
	render() {
		const { closeModal: e } = this.props;
		if (this.state.bConverting) {
			return i.createElement(
				ce.o0,
				{
					strTitle: (0, Localize)("#EventEditor_ImportFromHTML"),
					strDescription: (0, Localize)(
						"#EventEditor_ImportFromHTML_ConversionInProgress",
					),
					closeModal: e,
					bAlertDialog: true,
					onOK: e,
					onCancel: e,
				},
				i.createElement(He.t, null),
			);
		} else if (this.state.bFinishedConverting) {
			return i.createElement(ce.o0, {
				strTitle: (0, Localize)("#EventEditor_ImportFromHTML"),
				strDescription: (0, Localize)(
					"#EventEditor_ImportFromHTML_ConvertFinished",
				),
				closeModal: e,
				bAlertDialog: true,
				onOK: e,
				onCancel: e,
			});
		} else {
			return i.createElement(
				ce.eV,
				{
					onOK: this.OnConvertAndOverriteHTML,
					onCancel: e,
					className: qe.BBCodeEditorInputStyles,
				},
				i.createElement(
					N.Y9,
					null,
					" ",
					(0, Localize)("#EventEditor_ImportFromHTML"),
					" ",
				),
				i.createElement(
					N.nB,
					null,
					i.createElement(
						N.a3,
						null,
						i.createElement(
							"div",
							{
								className: A_1(re.FlexColumnContainer, qe.ImportHTMLCtn),
							},
							i.createElement(
								"div",
								{
									className: re.FlexColumnContainer,
								},
								LocalizeReact(
									"#EventEditor_ImportFromHTML_ConvertDescription",
									i.createElement(
										"a",
										{
											target: _z.TS.IN_CLIENT || "_blank",
											href: "https://partner.steamgames.com/doc/marketing/event_tools/import",
										},
										(0, Localize)("#EventEditor_ImportFromHTML_ConvertLearn"),
									),
								),
							),
							i.createElement("textarea", {
								value: this.state.strHTMLData,
								placeholder: (0, Localize)(
									"#EventEditor_ImportFromHTML_Instruction",
								),
								className: qe.ImportHTMLTextArea,
								onChange: this.OnTextAreaChange,
								ref: (e) => {
									return e && e.focus();
								},
							}),
							i.createElement(
								"div",
								{
									className: qe.ImportHTMLCheckBoxLine,
								},
								i.createElement("input", {
									id: "ImportFromHTMLNewLines",
									type: "checkbox",
									checked: this.state.bPreserveNewLines,
									onChange: this.OnCheckboxChange,
								}),
								i.createElement(
									"label",
									{
										htmlFor: "ImportFromHTMLNewLines",
									},
									(0, Localize)("#EventEditor_ImportFromHTML_PreserveNewlines"),
									i.createElement(mt.o, {
										tooltip: (0, Localize)(
											"#EventEditor_ImportFromHTML_PreserveNewlines_Hint",
										),
									}),
								),
							),
							i.createElement(
								"div",
								null,
								(0, Localize)("#EventEditor_ImportFromHTML_ConvertToBBCode"),
							),
						),
					),
					i.createElement(
						N.wi,
						null,
						i.createElement(N.VQ, {
							onCancel: e,
							strOKText: (0, Localize)("#Button_Overwrite"),
							onUpdate: this.OnConvertAndAppendHTML,
							strUpdateText: (0, Localize)("#Button_Append"),
						}),
					),
				),
			);
		}
	}
};
Cg([ie.oI], yt.prototype, "OnConvertAndOverriteHTML", null);
Cg([ie.oI], yt.prototype, "OnConvertAndAppendHTML", null);
Cg([ie.oI], yt.prototype, "OnCheckboxChange", null);
Cg([ie.oI], yt.prototype, "OnTextAreaChange", null);
yt = Cg([g.PA], yt);
var Bt = wt;
const vt = PA((e) => {
	const { appid: t, eventLink: r } = e;
	const n = i.useRef(null);
	const { data: a } = js(_z.iA.steamid);
	const [o, l] = i.useState("");
	const [c, m] = i.useState(false);
	const [u, d] = i.useState("");
	const [A, p] = i.useState(false);
	i.useEffect(() => {
		return () => {
			return (
				n.current && n.current("ShareEventOnFriendsActivityFeed: unmounting")
			);
		};
	}, []);
	const g = a ? a.avatar_url : null;
	const h = T.b.InitFromAccountID(_z.iA.accountid);
	const C = async () => {
		if (n.current) {
			n.current("ShareEventOnFriendsActivityFeed: cancel previous...");
		}
		const e = s.CancelToken.source();
		n.current = e.cancel;
		m(true);
		let i = o;
		if (i.trim().length != 0) {
			i += "\n\n";
		}
		i += r;
		const a =
			_z.TS.COMMUNITY_BASE_URL +
			"profiles/" +
			h.ConvertTo64BitString() +
			"/ajaxpostuserstatus";
		try {
			if (_z.TS.IN_STEAMUI) {
				let r = ye.w.Init(we.kV);
				r.Body().set_appid(t);
				r.Body().set_status_text(i);
				let n = await we.xt.PostStatusToFriends(
					Se.Vw.CMInterface.GetServiceTransport(),
					r,
				);
				if (n.GetEResult() != 1) {
					const t =
						(0, Localize)("#EventDisplay_Share_Failure") +
						"\n\n" +
						n.GetEResult();
					console.error(t, !e.token.reason);
					if (!e.token.reason) {
						d(t);
					}
					return;
				}
			} else {
				const r = new FormData();
				r.append("appid", "" + t);
				r.append("status_text", i);
				r.append("sessionid", _z.TS.SESSIONID);
				const n = await s.post(a, r, {
					withCredentials: true,
				});
				if (n.status != 200 || n?.data?.success != 1) {
					const t =
						(0, Localize)("#EventDisplay_Share_Failure") +
						"\n\n" +
						n?.data?.message;
					console.error(t);
					if (!e.token.reason) {
						d(t);
					}
					return;
				}
			}
			if (!e.token.reason) {
				p(true);
				d((0, Localize)("#EventDisplay_Share_Success"));
			}
		} catch (t) {
			const r = H_1(t);
			const n =
				(0, Localize)("#EventDisplay_Share_Failure") + "\n\n" + r.strErrorMsg;
			if (!e.token.reason) {
				d(n);
			}
			console.error(n);
		}
	};
	if (c) {
		return i.createElement(
			ce.o0,
			{
				strDescription: "",
				strTitle: (0, Localize)("#Button_Share"),
				onCancel: e.closeModal,
				onOK: e.closeModal,
				bAlertDialog: true,
			},
			i.createElement(
				"div",
				{
					className: re.FlexColumnContainer,
				},
				i.createElement(
					"div",
					null,
					(0, Localize)("#EventDisplay_Share_OnMyStatus_Details"),
				),
				i.createElement(
					"div",
					{
						className: Bt.Container,
					},
					u?.length == 0
						? i.createElement(He.t, {
								position: "center",
							})
						: i.createElement("div", null, u),
					Boolean(A) &&
						i.createElement(
							"a",
							{
								href:
									_z.TS.COMMUNITY_BASE_URL +
									"profiles/" +
									h.ConvertTo64BitString() +
									"/home",
								target: _z.TS.IN_CLIENT || "_blank",
							},
							(0, Localize)("#EventDisplay_Share_OpenActivityFeed"),
						),
				),
			),
		);
	} else {
		return i.createElement(
			ce.o0,
			{
				strDescription: "",
				strTitle: (0, Localize)("#Button_Share"),
				onCancel: e.closeModal,
				onOK: C,
				strOKButtonText: (0, Localize)("#Button_Post"),
			},
			i.createElement(
				"div",
				{
					className: re.FlexColumnContainer,
				},
				i.createElement(
					"div",
					null,
					(0, Localize)("#EventDisplay_Share_OnMyStatus_Details"),
				),
				i.createElement(
					"div",
					{
						className: A_1(Bt.Container, re.FlexColumnContainer),
					},
					i.createElement(
						"div",
						null,
						i.createElement("img", {
							className: Bt.SmallAvatar,
							src: g,
							"data-miniprofile": "s" + _z.iA.steamid,
						}),
						i.createElement(
							"div",
							{
								className: A_1(re.FlexColumnContainer),
							},
							i.createElement(ut, {
								strPlaceholder: (0, Localize)(
									"#EventDisplay_Share_OnMyStatus_Placeholder",
								),
								fnGetCurText: () => {
									return o;
								},
								fnOnTextChange: (e) => {
									return l(e.currentTarget.value);
								},
								fnSetText: l,
								emoticonStore: e.emoticonStore,
								bSupportHTMLImport: false,
								showFormatHelp: "UserStatusPublished",
								limitBBCode: be.iH,
								classNameForTextArea: Bt.ShareDescription,
								bEmbeddedInDialog: true,
							}),
						),
					),
					i.createElement(
						"div",
						{
							className: Bt.ShareLink,
						},
						i.createElement(St.f, {
							text: r,
							event: null,
							partnerEventStore: e.partnerEventStore,
						}),
					),
				),
			),
		);
	}
});
class It extends i.Component {
	state = {
		bShareOnSteamDialog: false,
		bRequireLoginToShare: false,
	};
	ShareOnSteamActivityFeed() {
		if (_z.iA.logged_in) {
			this.setState({
				bShareOnSteamDialog: true,
			});
		} else if (_z.TS.IN_CLIENT) {
			console.log(
				"ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
			);
		} else {
			this.setState({
				bRequireLoginToShare: true,
			});
		}
	}
	render() {
		const {
			eventLink: e,
			fnGetSharePageUrl: t,
			appid: r,
			closeModal: n,
			emoticonStore: a,
			partnerEventStore: s,
		} = this.props;
		if (this.state.bRequireLoginToShare) {
			return i.createElement(ce.o0, {
				strTitle: (0, Localize)("#EventDisplay_Share_NotLoggedIn"),
				strDescription: (0, Localize)(
					"#EventDisplay_Share_NotLoggedIn_Description",
				),
				strOKButtonText: (0, Localize)("#MobileLogin_SignIn"),
				onCancel: this.props.closeModal,
				onOK: () => {
					return vg();
				},
			});
		} else if (this.state.bShareOnSteamDialog) {
			return i.createElement(vt, {
				eventLink: e,
				appid: r,
				emoticonStore: a,
				partnerEventStore: s,
				closeModal: n,
			});
		} else {
			return i.createElement(
				ce.o0,
				{
					strDescription: "",
					strTitle: (0, Localize)("#Button_Share"),
					onCancel: this.props.closeModal,
					onOK: this.props.closeModal,
					bAlertDialog: true,
					modalClassName: "EventDisplay_Share_Dialog",
				},
				i.createElement(Et, {
					eventLink: e,
					fnGetSharePageUrl: t,
					fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
				}),
			);
		}
	}
}
Cg([ie.oI], It.prototype, "ShareOnSteamActivityFeed", null);
const Et = (e) => {
	const {
		eventLink: t,
		fnGetSharePageUrl: r,
		fnShareOnSteamActivityFeed: n,
	} = e;
	const a = Y2();
	const [s, o] = useState(sf(_z.TS.LANGUAGE));
	const l = useMemo(() => {
		const e = new URL(t);
		e.searchParams.set("l", Lg(s));
		return e.href;
	}, [s, t]);
	return i.createElement(
		"div",
		{
			className: A_1(re.FlexColumnContainer, de.share_controls_ctn),
		},
		!a &&
			i.createElement(
				i.Fragment,
				null,
				i.createElement(
					"div",
					{
						className: de.ShareLanguagePicker,
					},
					i.createElement(
						N.JU,
						{
							className: de.LanguageLabel,
						},
						(0, Localize)("#EventDisplay_Share_LanguageLabel"),
					),
					i.createElement(
						"div",
						null,
						i.createElement(fe, {
							selectedLang: s,
							fnOnLanguageChanged: o,
						}),
					),
				),
				i.createElement(
					"div",
					{
						className: A_1(re.FlexRowContainer, de.ShareButtonContainer),
						style: {
							flexWrap: "wrap",
						},
					},
					i.createElement(
						me.he,
						{
							toolTipContent: (0, Localize)("#EventDisplay_Share_OnSteam"),
						},
						i.createElement(
							"div",
							{
								onClick: n,
								className: A_1(re.Button, de.ShareBtn, de.ShareSteamBtn),
							},
							i.createElement("img", {
								className: de.SteamIcon,
								src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=",
							}),
							i.createElement(
								"span",
								{
									style: {
										whiteSpace: "nowrap",
									},
								},
								(0, Localize)("#EventDisplay_Share_OnMyStatus"),
							),
						),
					),
					i.createElement(
						me.he,
						{
							toolTipContent: (0, Localize)("#EventDisplay_Share_OnFaceBook"),
						},
						i.createElement(
							x.uU,
							{
								href: r(V._.k_eFacebook),
								className: de.ShareBtn,
							},
							i.createElement("img", {
								className: A_1(re.Button),
								src: se.A,
							}),
						),
					),
					i.createElement(
						me.he,
						{
							toolTipContent: (0, Localize)("#EventDisplay_Share_OnTwitter"),
						},
						i.createElement(
							x.uU,
							{
								href: r(V._.k_eTwitter),
								className: de.ShareBtn,
							},
							i.createElement("img", {
								className: A_1(re.Button),
								src: le.A,
							}),
						),
					),
					i.createElement(
						me.he,
						{
							toolTipContent: (0, Localize)("#EventDisplay_Share_OnReddit"),
						},
						i.createElement(
							x.uU,
							{
								href: r(V._.k_eReddit),
								className: de.ShareBtn,
							},
							i.createElement("img", {
								className: A_1(re.Button),
								src: oe.A,
							}),
						),
					),
				),
				i.createElement("div", {
					className: re.Divider,
				}),
			),
		i.createElement(Mt, {
			eventLink: l,
		}),
	);
};
const Mt = (e) => {
	const t = i.createRef();
	const [r, n] = i.useState("");
	const a = i.createRef();
	return i.createElement(
		"div",
		null,
		i.createElement(
			"div",
			{
				className: A_1(re.FlexRowContainer, de.linkField),
				onClick: (e) => {
					if (t.current) {
						t.current.ownerDocument.defaultView.navigator.clipboard
							.writeText(t.current.value)
							.then((e) => {
								n((0, Localize)("#EventDisplay_Share_CopiedToClipboard"));
							})
							.catch((e) => {
								n((0, Localize)("#EventDisplay_Share_FailedToCopyToClipboard"));
								console.error("Failed to copy link to clipboard:", e);
							});
					}
				},
			},
			i.createElement(
				"span",
				{
					className: de.LinkInputLabel,
				},
				(0, Localize)(
					e.labelOverride ? e.labelOverride : "#EventDisplay_Share_Link",
				),
			),
			i.createElement("textarea", {
				className: de.LinkInput,
				ref: t,
				value: e.eventLink,
				readOnly: true,
			}),
			document.queryCommandSupported("copy") &&
				i.createElement(
					"div",
					{
						className: A_1(re.Button, re.Icon, de.LinkButton),
						title: (0, Localize)("#ToolTip_CopyLinkToClipboard"),
					},
					i.createElement(
						me.he,
						{
							toolTipContent: (0, Localize)("#ToolTip_CopyLinkToClipboard"),
						},
						i.createElement("img", {
							className: de.ClipboardIcon,
							src: ae.A,
						}),
					),
				),
		),
		i.createElement(
			"div",
			{
				ref: a,
				className: de.ClipboardText,
			},
			r,
		),
	);
};
const Dt = PA((e) => {
	const { eventModel: t } = e;
	const [r, n] = useState(true);
	const [a, o] = useState(new Set());
	const [l, c] = useState(new Set());
	const [m, u] = useState(new Set());
	const [d, A] = useState(null);
	const [p, g] = useState(null);
	const h = useRef(null);
	useEffect(() => {
		if (r) {
			(async () => {
				const e = s.CancelToken.source();
				h.current = e.cancel;
				const r = ee.Get().LoadClansAlreadyRepostedTo(t.clanSteamID, t.GID, e);
				r.then((e) => {
					const t = new Set();
					e.forEach((e) => {
						return t.add(e);
					});
					o(t);
				});
				let i = new Array();
				i.push(r);
				ee.Get()
					.GetRepostClanAccountID()
					.forEach((e) => {
						const t = T.b.InitFromClanID(e);
						i.push(v.ac.LoadClanInfoForClanSteamID(t));
					});
				await Promise.all(i);
				n(false);
			})();
		}
		return () => {
			return h.current && h.current();
		};
	}, [r, t.GID, t.clanSteamID]);
	const C = new Array();
	ee.Get()
		.GetRepostClanAccountID()
		.forEach((e) => {
			const r = v.ac.GetClanInfoByClanAccountID(e);
			if (r && e != t.clanSteamID.GetAccountID()) {
				const t = a.has(e);
				const n = l.has(e) || (t && !m.has(e));
				C.push(
					i.createElement(N.Yh, {
						key: "checkbox" + e,
						label: t
							? (0, Localize)("#EventRepost_Dialog_Existing", r.group_name)
							: r.group_name,
						checked: n,
						disabled: d !== null,
						onChange: (t) => {
							if (a.has(e)) {
								if (t) {
									m.delete(e);
								} else {
									m.add(e);
								}
								u(new Set(m));
							} else {
								if (t) {
									l.add(e);
								} else {
									l.delete(e);
								}
								c(new Set(l));
							}
						},
					}),
				);
			}
		});
	return i.createElement(
		Je.tH,
		null,
		i.createElement(
			ce.x_,
			{
				onEscKeypress: () => {
					return e.closeModal && e.closeModal();
				},
			},
			i.createElement(
				N.UC,
				null,
				i.createElement(N.Y9, null, (0, Localize)("#EventRepost_Dialog_Title")),
				i.createElement(
					N.nB,
					null,
					i.createElement(
						N.a3,
						null,
						(0, Localize)("#EventRepost_Dialog_Desc"),
					),
					r
						? i.createElement(He.t, {
								string: (0, Localize)("#Loading"),
							})
						: i.createElement("div", null, C),
					Boolean(l.size || m.size) &&
						i.createElement(
							"div",
							null,
							i.createElement(
								"span",
								null,
								(0, Localize)("#EventRepost_Dialog_Action_Desc"),
							),
							i.createElement(
								"ul",
								null,
								Boolean(l.size) &&
									i.createElement(
										"li",
										null,
										(0, Localize)("#EventRepost_Dialog_Action_Add", l.size),
									),
								Boolean(m.size) &&
									i.createElement(
										"li",
										null,
										(0, Localize)("#EventRepost_Dialog_Action_Remove", m.size),
									),
							),
						),
					Boolean(d) && i.createElement("div", null, d),
					Boolean(p) && i.createElement("div", null, p),
				),
				i.createElement(
					N.wi,
					null,
					i.createElement(N.CB, {
						onCancel: () => {
							return e.closeModal && e.closeModal();
						},
						strOKText: (0, Localize)("#EventRepost_Dialog_OK"),
						bOKDisabled:
							(l.size == 0 && m.size == 0) || d !== null || p !== null,
						onOK: async () => {
							if (h.current) {
								h.current();
							}
							const e = s.CancelToken.source();
							h.current = e.cancel;
							const r = l.size + m.size;
							let n = 1;
							A((0, Localize)("#EventRepost_Dialog_Progress", n, r));
							for (const i of Array.from(l)) {
								const a = T.b.InitFromClanID(i);
								if (
									!(await ee
										.Get()
										.RepostEvent(t.clanSteamID, t.GID, a, true, e))
								) {
									g((0, Localize)("#EventRepost_Dialog_ResultFail"));
									return;
								}
								A((0, Localize)("#EventRepost_Dialog_Progress", ++n, r));
							}
							for (const i of Array.from(m)) {
								const a = T.b.InitFromClanID(i);
								if (
									!(await ee
										.Get()
										.RepostEvent(t.clanSteamID, t.GID, a, false, e))
								) {
									g((0, Localize)("#EventRepost_Dialog_ResultFail"));
									return;
								}
								A((0, Localize)("#EventRepost_Dialog_Progress", ++n, r));
							}
							g((0, Localize)("#EventRepost_Dialog_ResultSuccess"));
						},
					}),
				),
			),
		),
	);
});
function Nt(e) {
	let t;
	if (e === true) {
		t = "up";
	} else if (e === false) {
		t = "down";
	}
	return t;
}
const Ft = (e) => {
	const t = Qn();
	return i.createElement(Gt, {
		...e,
		bInGamepadUI: t,
	});
};
let Gt = class extends i.Component {
	m_cancelSignal = s.CancelToken.source();
	constructor(e) {
		super(e);
		const t = E.KN.Get().BHasMyVote(e.eventModel);
		let r;
		if (t) {
			r = Nt(E.KN.Get().GetPreviouslyLoadedVote(e.eventModel));
		}
		this.state = {
			bLoadedVote: !!t,
			myVote: r,
		};
	}
	async HandleRefreshMyVotingInformation() {
		const { eventModel: e, partnerEventStore: t } = this.props;
		if (E.KN.Get().BIsUserLoggedIn()) {
			E.KN.Get()
				.LoadMyVote(e, this.m_cancelSignal)
				.then((e) => {
					let t = Nt(e);
					this.setState({
						myVote: t,
						bLoadedVote: true,
					});
				})
				.catch((e) => {
					let t = H_1(e);
					console.error("EventDiscussionWidget = " + t.strErrorMsg);
				});
			v.ac.LoadClanInfoForClanSteamID(e.clanSteamID).catch((e) => {
				let t = H_1(e);
				console.error("EventDiscussionWidget = " + t.strErrorMsg);
			});
		}
	}
	componentDidMount() {
		if (!this.state.bLoadedVote) {
			this.HandleRefreshMyVotingInformation();
		}
	}
	componentDidUpdate(e) {
		if (this.props.eventModel.GID != e.eventModel.GID) {
			this.HandleRefreshMyVotingInformation();
		}
	}
	componentWillUnmount() {
		this.m_cancelSignal.cancel("EventDiscussionWidget is being unmounted");
	}
	OnVoteUp() {
		this.Vote("up");
	}
	OnVoteDown() {
		this.Vote("down");
	}
	Vote(e) {
		const { eventModel: t } = this.props;
		if (
			(function (e, t) {
				if (t.BIsUserLoggedIn()) {
					return (
						!t.GetPartnerEventPermissions(e.clanSteamID).limited_user ||
						(pg(i.createElement(kt.g, null), window), false)
					);
				} else {
					if (_z.TS.IN_CLIENT) {
						console.log(
							"EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.",
						);
					} else {
						pg(
							i.createElement(ce.o0, {
								strTitle: (0, Localize)("#EventDisplay_Share_NotLoggedIn"),
								strDescription: (0, Localize)(
									"#EventDisplay_Share_NotLoggedIn_Description",
								),
								strOKButtonText: (0, Localize)("#MobileLogin_SignIn"),
								onOK: () => {
									return vg();
								},
							}),
							window,
						);
					}
					return false;
				}
			})(t, E.KN.Get()) &&
			this.state.myVote != e &&
			e != null &&
			this.state.bLoadedVote
		) {
			this.setState(
				{
					bVotingUp: e == "up",
					bVotingDown: e == "down",
				},
				() => {
					E.KN.Get()
						.Vote(t, e === "up", this.m_cancelSignal)
						.catch((t) => {
							let r = H_1(t);
							console.error(
								"EventDiscussionWidget.OnVote" + e + " " + r.strErrorMsg,
								r,
							);
							this.setState({
								bVotingDown: false,
								bVotingUp: false,
							});
						});
					this.setState({
						myVote: e,
						bVotingDown: false,
						bVotingUp: false,
					});
				},
			);
		}
	}
	OnShareDialog(e) {
		const t = cq(this.props.eventModel);
		pg(
			i.createElement(It, {
				eventLink: t,
				fnGetSharePageUrl: (e) => {
					return Bd(this.props.eventModel, e);
				},
				appid: this.props.eventModel.appid,
				emoticonStore: this.props.emoticonStore,
				partnerEventStore: this.props.partnerEventStore,
			}),
			GetOwningWindowForEvent(e),
			{
				strTitle: (0, Localize)("#Button_Share"),
			},
		);
	}
	GotoDiscussion(e) {
		pg(
			i.createElement(ce.KG, {
				strDescription: (0, Localize)(
					"#EventDisplay_Share_CommentMigrationInProcess",
				),
			}),
			GetOwningWindowForEvent(e),
		);
	}
	OpenRepostDialogs(e) {
		pg(
			i.createElement(Dt, {
				eventModel: this.props.eventModel,
			}),
			GetOwningWindowForEvent(e),
		);
	}
	render() {
		const { eventModel: e } = this.props;
		const t = OQ(e.nVotesUp - e.nVotesDown, 0, Number.MAX_SAFE_INTEGER);
		const r = e.GetForumTopicURL();
		const n = NT(r);
		const a = Y2();
		const s = e.BIsUnlistedEvent();
		const o = _z.iA.logged_in && ee.Get().BCanRepostPartnerEvent();
		return i.createElement(
			h.Z,
			{
				className: de.Container,
				"flow-children": "row",
				focusable: false,
			},
			i.createElement(
				"div",
				{
					className: de.InnerContainer,
				},
				i.createElement(
					"div",
					{
						className: de.VoteContainer,
					},
					i.createElement(
						"div",
						{
							className: de.VoteCount,
						},
						i.createElement(F.bfp, {
							className: de.VoteUpStaticIcon,
						}),
						Dq(t),
					),
					i.createElement(
						h.Z,
						{
							focusable: true,
							className: A_1(
								re.Button,
								re.Icon,
								de.DiscussionButton,
								this.state.myVote == "up" ? de.VoteButtonSelected : "",
							),
							onActivate: this.OnVoteUp,
						},
						i.createElement(F.bfp, {
							className:
								this.state.myVote == "up"
									? de.VoteUpSelectedIcon
									: de.VoteUpIcon,
						}),
						i.createElement(
							"span",
							{
								className: de.DiscussionButtonText,
							},
							(0, Localize)("#Button_RateUp"),
						),
					),
					i.createElement(
						h.Z,
						{
							focusable: true,
							className: A_1(
								re.Button,
								re.Icon,
								de.DiscussionButton,
								this.state.myVote == "down" ? de.VoteButtonSelected : "",
							),
							onActivate: this.OnVoteDown,
						},
						i.createElement(F.bfp, {
							className:
								this.state.myVote == "down"
									? de.VoteDownSelectedIcon
									: de.VoteDownIcon,
						}),
					),
				),
				Boolean(!a && !s) &&
					i.createElement(Ot, {
						commentCount: e.nCommentCount,
						discussionURL: n,
						gotoDiscussion: this.GotoDiscussion,
					}),
				o &&
					i.createElement(
						"div",
						{
							className: de.VoteContainer,
						},
						i.createElement(
							h.Z,
							{
								focusable: true,
								className: A_1(
									re.Button,
									re.Icon,
									de.DiscussionButton,
									this.state.myVote == "down" ? de.VoteButtonSelected : "",
								),
								onActivate: this.OpenRepostDialogs,
							},
							(0, Localize)("#EventRepost_Dialog_Title"),
						),
					),
			),
			i.createElement(
				"div",
				{
					className: de.ShareContainer,
				},
				!this.props.bInGamepadUI &&
					i.createElement(
						h.Z,
						{
							focusable: true,
							className: A_1(re.Button, re.Icon, de.DiscussionButton),
							onActivate: this.OnShareDialog,
						},
						i.createElement(F.SYj, {
							className: de.ShareIcon,
						}),
						i.createElement(
							"span",
							{
								className: de.DiscussionButtonText,
							},
							(0, Localize)("#Button_Share"),
						),
					),
			),
		);
	}
};
function Ot(e) {
	const { commentCount: t, discussionURL: r, gotoDiscussion: n } = e;
	return i.createElement(
		"div",
		{
			className: de.DiscussContainer,
		},
		i.createElement(
			"div",
			{
				className: de.DiscussionCount,
			},
			i.createElement(F.ROZ, null),
			Dq(t),
		),
		r &&
			i.createElement(
				J.Ii,
				{
					href: k2(r),
				},
				i.createElement(
					"div",
					{
						className: A_1(re.Button, re.Icon, de.DiscussionButton),
					},
					i.createElement(F.ROZ, null),
					i.createElement(
						"span",
						{
							className: de.DiscussionButtonText,
						},
						(0, Localize)("#Button_Discuss"),
					),
				),
			),
		!r &&
			i.createElement(
				h.Z,
				{
					focusable: true,
					onActivate: n,
					className: A_1(re.Button, re.Icon, de.DiscussionButton),
				},
				i.createElement(F.ROZ, null),
				i.createElement(
					"span",
					{
						className: de.DiscussionButtonText,
					},
					(0, Localize)("#Button_Discuss"),
				),
			),
	);
}
Cg([ie.oI], Gt.prototype, "OnVoteUp", null);
Cg([ie.oI], Gt.prototype, "OnVoteDown", null);
Cg([ie.oI], Gt.prototype, "OnShareDialog", null);
Cg([ie.oI], Gt.prototype, "GotoDiscussion", null);
Cg([ie.oI], Gt.prototype, "OpenRepostDialogs", null);
Gt = Cg([g.PA], Gt);
const Pt_Message = Pt.Message;
class xt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!xt.prototype.voteid) {
			Lt.Sg(xt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, [5, 7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		xt.sm_m ||= {
			proto: xt,
			fields: {
				voteid: {
					n: 1,
					br: Lt.qM.readInt32,
					bw: Lt.gp.writeInt32,
				},
				active: {
					n: 2,
					br: Lt.qM.readBool,
					bw: Lt.gp.writeBool,
				},
				start_time: {
					n: 3,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				end_time: {
					n: 4,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				app_discounts: {
					n: 5,
					c: Ut,
					r: true,
					q: true,
				},
				grouped_vote_options: {
					n: 6,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				groups: {
					n: 7,
					c: Wt,
					r: true,
					q: true,
				},
				internal_name: {
					n: 8,
					br: Lt.qM.readString,
					bw: Lt.gp.writeString,
				},
				localization: {
					n: 9,
					c: Vt,
				},
				reveal_time: {
					n: 10,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				release_date_min: {
					n: 11,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				winner_appid: {
					n: 12,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				flag: {
					n: 13,
					br: Lt.qM.readEnum,
					bw: Lt.gp.writeEnum,
				},
				release_date_max: {
					n: 14,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				item_type: {
					n: 15,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
			},
		};
		return xt.sm_m;
	}
	static MBF() {
		xt.sm_mbf ||= Lt.w0(xt.M());
		return xt.sm_mbf;
	}
	toObject(e = false) {
		return xt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(xt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(xt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new xt();
		return xt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(xt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		xt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(xt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		xt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_VoteDefinition";
	}
}
class Ut extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ut.prototype.appid) {
			Lt.Sg(Ut.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ut.sm_m ||= {
			proto: Ut,
			fields: {
				appid: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				discount: {
					n: 2,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
			},
		};
		return Ut.sm_m;
	}
	static MBF() {
		Ut.sm_mbf ||= Lt.w0(Ut.M());
		return Ut.sm_mbf;
	}
	toObject(e = false) {
		return Ut.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(Ut.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(Ut.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Ut();
		return Ut.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(Ut.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Ut.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(Ut.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Ut.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_VoteDefinition_AppDefinition";
	}
}
class Wt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Wt.prototype.groupid) {
			Lt.Sg(Wt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Wt.sm_m ||= {
			proto: Wt,
			fields: {
				groupid: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				group_name: {
					n: 2,
					br: Lt.qM.readString,
					bw: Lt.gp.writeString,
				},
				app_discounts: {
					n: 3,
					c: Ut,
					r: true,
					q: true,
				},
			},
		};
		return Wt.sm_m;
	}
	static MBF() {
		Wt.sm_mbf ||= Lt.w0(Wt.M());
		return Wt.sm_mbf;
	}
	toObject(e = false) {
		return Wt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(Wt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(Wt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Wt();
		return Wt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(Wt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Wt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(Wt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Wt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_VoteDefinition_GroupDefinition";
	}
}
class Vt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Vt.prototype.title) {
			Lt.Sg(Vt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Vt.sm_m ||= {
			proto: Vt,
			fields: {
				title: {
					n: 1,
					br: Lt.qM.readString,
					bw: Lt.gp.writeString,
				},
				title_linebreak: {
					n: 2,
					br: Lt.qM.readString,
					bw: Lt.gp.writeString,
				},
				title_award: {
					n: 3,
					br: Lt.qM.readString,
					bw: Lt.gp.writeString,
				},
				award_description: {
					n: 4,
					br: Lt.qM.readString,
					bw: Lt.gp.writeString,
				},
			},
		};
		return Vt.sm_m;
	}
	static MBF() {
		Vt.sm_mbf ||= Lt.w0(Vt.M());
		return Vt.sm_mbf;
	}
	toObject(e = false) {
		return Vt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(Vt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(Vt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Vt();
		return Vt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(Vt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Vt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(Vt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Vt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_VoteDefinition_Localization";
	}
}
class Ht extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ht.prototype.language) {
			Lt.Sg(Ht.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ht.sm_m ||= {
			proto: Ht,
			fields: {
				language: {
					n: 1,
					br: Lt.qM.readString,
					bw: Lt.gp.writeString,
				},
				sale_appid: {
					n: 2,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
			},
		};
		return Ht.sm_m;
	}
	static MBF() {
		Ht.sm_mbf ||= Lt.w0(Ht.M());
		return Ht.sm_mbf;
	}
	toObject(e = false) {
		return Ht.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(Ht.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(Ht.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Ht();
		return Ht.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(Ht.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Ht.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(Ht.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Ht.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_GetVoteDefinitions_Request";
	}
}
class jt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!jt.prototype.votes) {
			Lt.Sg(jt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		jt.sm_m ||= {
			proto: jt,
			fields: {
				votes: {
					n: 1,
					c: xt,
					r: true,
					q: true,
				},
				labor_of_love_winners: {
					n: 2,
					r: true,
					q: true,
					br: Lt.qM.readUint32,
					pbr: Lt.qM.readPackedUint32,
					bw: Lt.gp.writeRepeatedUint32,
				},
			},
		};
		return jt.sm_m;
	}
	static MBF() {
		jt.sm_mbf ||= Lt.w0(jt.M());
		return jt.sm_mbf;
	}
	toObject(e = false) {
		return jt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(jt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(jt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new jt();
		return jt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(jt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		jt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(jt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		jt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_GetVoteDefinitions_Response";
	}
}
class qt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qt.prototype.voteid) {
			Lt.Sg(qt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qt.sm_m ||= {
			proto: qt,
			fields: {
				voteid: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				appid: {
					n: 2,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				communityitemid: {
					n: 3,
					br: Lt.qM.readUint64String,
					bw: Lt.gp.writeUint64String,
				},
			},
		};
		return qt.sm_m;
	}
	static MBF() {
		qt.sm_mbf ||= Lt.w0(qt.M());
		return qt.sm_mbf;
	}
	toObject(e = false) {
		return qt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(qt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(qt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new qt();
		return qt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(qt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		qt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(qt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		qt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "SteamAwardsUserVote";
	}
}
class Qt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Qt.prototype.sale_appid) {
			Lt.Sg(Qt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Qt.sm_m ||= {
			proto: Qt,
			fields: {
				sale_appid: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
			},
		};
		return Qt.sm_m;
	}
	static MBF() {
		Qt.sm_mbf ||= Lt.w0(Qt.M());
		return Qt.sm_mbf;
	}
	toObject(e = false) {
		return Qt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(Qt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(Qt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Qt();
		return Qt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(Qt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Qt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(Qt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Qt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_GetUserVotes_Request";
	}
}
class Zt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Zt.prototype.user_votes) {
			Lt.Sg(Zt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Zt.sm_m ||= {
			proto: Zt,
			fields: {
				user_votes: {
					n: 1,
					c: qt,
					r: true,
					q: true,
				},
			},
		};
		return Zt.sm_m;
	}
	static MBF() {
		Zt.sm_mbf ||= Lt.w0(Zt.M());
		return Zt.sm_mbf;
	}
	toObject(e = false) {
		return Zt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(Zt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(Zt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Zt();
		return Zt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(Zt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Zt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(Zt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Zt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_GetUserVotes_Response";
	}
}
class Yt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Yt.prototype.voteid) {
			Lt.Sg(Yt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Yt.sm_m ||= {
			proto: Yt,
			fields: {
				voteid: {
					n: 1,
					br: Lt.qM.readInt32,
					bw: Lt.gp.writeInt32,
				},
				appid: {
					n: 2,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				sale_appid: {
					n: 3,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
			},
		};
		return Yt.sm_m;
	}
	static MBF() {
		Yt.sm_mbf ||= Lt.w0(Yt.M());
		return Yt.sm_mbf;
	}
	toObject(e = false) {
		return Yt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(Yt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(Yt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Yt();
		return Yt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(Yt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Yt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(Yt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Yt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_SetVote_Request";
	}
}
class Kt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Kt.prototype.user_votes) {
			Lt.Sg(Kt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Kt.sm_m ||= {
			proto: Kt,
			fields: {
				user_votes: {
					n: 1,
					c: qt,
					r: true,
					q: true,
				},
			},
		};
		return Kt.sm_m;
	}
	static MBF() {
		Kt.sm_mbf ||= Lt.w0(Kt.M());
		return Kt.sm_mbf;
	}
	toObject(e = false) {
		return Kt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(Kt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(Kt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Kt();
		return Kt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(Kt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Kt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(Kt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Kt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStore_SetVote_Response";
	}
}
class Xt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Xt.prototype.category_id) {
			Lt.Sg(Xt.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Xt.sm_m ||= {
			proto: Xt,
			fields: {
				category_id: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				appid: {
					n: 2,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				last_updated: {
					n: 3,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
			},
		};
		return Xt.sm_m;
	}
	static MBF() {
		Xt.sm_mbf ||= Lt.w0(Xt.M());
		return Xt.sm_mbf;
	}
	toObject(e = false) {
		return Xt.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(Xt.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(Xt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Xt();
		return Xt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(Xt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Xt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(Xt.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Xt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwardsNomination";
	}
}
class Jt extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Jt.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new Jt();
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new Jt();
		return Jt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		Jt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		Jt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetUserNominations_Request";
	}
}
class $t extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$t.prototype.nominations) {
			Lt.Sg($t.M());
		}
		Pt_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$t.sm_m ||= {
			proto: $t,
			fields: {
				nominations: {
					n: 1,
					c: Xt,
					r: true,
					q: true,
				},
			},
		};
		return $t.sm_m;
	}
	static MBF() {
		$t.sm_mbf ||= Lt.w0($t.M());
		return $t.sm_mbf;
	}
	toObject(e = false) {
		return $t.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT($t.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq($t.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new $t();
		return $t.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj($t.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		$t.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0($t.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		$t.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetUserNominations_Response";
	}
}
class er extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!er.prototype.steamid) {
			Lt.Sg(er.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		er.sm_m ||= {
			proto: er,
			fields: {
				steamid: {
					n: 1,
					br: Lt.qM.readFixed64String,
					bw: Lt.gp.writeFixed64String,
				},
				code: {
					n: 2,
					br: Lt.qM.readFixed64String,
					bw: Lt.gp.writeFixed64String,
				},
			},
		};
		return er.sm_m;
	}
	static MBF() {
		er.sm_mbf ||= Lt.w0(er.M());
		return er.sm_mbf;
	}
	toObject(e = false) {
		return er.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(er.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(er.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new er();
		return er.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(er.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		er.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(er.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		er.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetOtherUserNominations_Request";
	}
}
class tr extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!tr.prototype.category_id) {
			Lt.Sg(tr.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		tr.sm_m ||= {
			proto: tr,
			fields: {
				category_id: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				nominated_id: {
					n: 2,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				source: {
					n: 3,
					br: Lt.qM.readEnum,
					bw: Lt.gp.writeEnum,
				},
			},
		};
		return tr.sm_m;
	}
	static MBF() {
		tr.sm_mbf ||= Lt.w0(tr.M());
		return tr.sm_mbf;
	}
	toObject(e = false) {
		return tr.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(tr.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(tr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new tr();
		return tr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(tr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		tr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(tr.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		tr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_Nominate_Request";
	}
}
class rr extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!rr.prototype.nominations) {
			Lt.Sg(rr.M());
		}
		Pt_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		rr.sm_m ||= {
			proto: rr,
			fields: {
				nominations: {
					n: 1,
					c: Xt,
					r: true,
					q: true,
				},
			},
		};
		return rr.sm_m;
	}
	static MBF() {
		rr.sm_mbf ||= Lt.w0(rr.M());
		return rr.sm_mbf;
	}
	toObject(e = false) {
		return rr.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(rr.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(rr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new rr();
		return rr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(rr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		rr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(rr.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		rr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_Nominate_Response";
	}
}
class nr extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!nr.prototype.category_id) {
			Lt.Sg(nr.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		nr.sm_m ||= {
			proto: nr,
			fields: {
				category_id: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
			},
		};
		return nr.sm_m;
	}
	static MBF() {
		nr.sm_mbf ||= Lt.w0(nr.M());
		return nr.sm_mbf;
	}
	toObject(e = false) {
		return nr.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(nr.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(nr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new nr();
		return nr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(nr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		nr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(nr.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		nr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetNominationRecommendations_Request";
	}
}
class ir extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ir.prototype.played_app) {
			Lt.Sg(ir.M());
		}
		Pt_Message.initialize(this, e, 0, -1, [1, 2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ir.sm_m ||= {
			proto: ir,
			fields: {
				played_app: {
					n: 1,
					c: ar,
					r: true,
					q: true,
				},
				suggested_events: {
					n: 2,
					c: sr,
					r: true,
					q: true,
				},
				suggested_apps: {
					n: 3,
					c: or,
					r: true,
					q: true,
				},
				debug_query: {
					n: 4,
					br: Lt.qM.readString,
					bw: Lt.gp.writeString,
				},
			},
		};
		return ir.sm_m;
	}
	static MBF() {
		ir.sm_mbf ||= Lt.w0(ir.M());
		return ir.sm_mbf;
	}
	toObject(e = false) {
		return ir.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(ir.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(ir.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new ir();
		return ir.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(ir.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		ir.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(ir.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		ir.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetNominationRecommendations_Response";
	}
}
class ar extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ar.prototype.appid) {
			Lt.Sg(ar.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ar.sm_m ||= {
			proto: ar,
			fields: {
				appid: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				playtime: {
					n: 2,
					br: Lt.qM.readInt32,
					bw: Lt.gp.writeInt32,
				},
			},
		};
		return ar.sm_m;
	}
	static MBF() {
		ar.sm_mbf ||= Lt.w0(ar.M());
		return ar.sm_mbf;
	}
	toObject(e = false) {
		return ar.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(ar.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(ar.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new ar();
		return ar.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(ar.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		ar.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(ar.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		ar.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
	}
}
class sr extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!sr.prototype.clanid) {
			Lt.Sg(sr.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		sr.sm_m ||= {
			proto: sr,
			fields: {
				clanid: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
				event_gid: {
					n: 2,
					br: Lt.qM.readUint64String,
					bw: Lt.gp.writeUint64String,
				},
				appid: {
					n: 3,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
			},
		};
		return sr.sm_m;
	}
	static MBF() {
		sr.sm_mbf ||= Lt.w0(sr.M());
		return sr.sm_mbf;
	}
	toObject(e = false) {
		return sr.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(sr.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(sr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new sr();
		return sr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(sr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		sr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(sr.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		sr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
	}
}
class or extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!or.prototype.appid) {
			Lt.Sg(or.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		or.sm_m ||= {
			proto: or,
			fields: {
				appid: {
					n: 1,
					br: Lt.qM.readUint32,
					bw: Lt.gp.writeUint32,
				},
			},
		};
		return or.sm_m;
	}
	static MBF() {
		or.sm_mbf ||= Lt.w0(or.M());
		return or.sm_mbf;
	}
	toObject(e = false) {
		return or.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(or.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(or.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new or();
		return or.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(or.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		or.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(or.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		or.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
	}
}
class lr extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!lr.prototype.generate_new) {
			Lt.Sg(lr.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		lr.sm_m ||= {
			proto: lr,
			fields: {
				generate_new: {
					n: 1,
					br: Lt.qM.readBool,
					bw: Lt.gp.writeBool,
				},
			},
		};
		return lr.sm_m;
	}
	static MBF() {
		lr.sm_mbf ||= Lt.w0(lr.M());
		return lr.sm_mbf;
	}
	toObject(e = false) {
		return lr.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(lr.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(lr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new lr();
		return lr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(lr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		lr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(lr.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		lr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetNominationShareLink_Request";
	}
}
class cr extends Pt_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!cr.prototype.code) {
			Lt.Sg(cr.M());
		}
		Pt_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		cr.sm_m ||= {
			proto: cr,
			fields: {
				code: {
					n: 1,
					br: Lt.qM.readFixed64String,
					bw: Lt.gp.writeFixed64String,
				},
			},
		};
		return cr.sm_m;
	}
	static MBF() {
		cr.sm_mbf ||= Lt.w0(cr.M());
		return cr.sm_mbf;
	}
	toObject(e = false) {
		return cr.toObject(e, this);
	}
	static toObject(e, t) {
		return Lt.BT(cr.M(), e, t);
	}
	static fromObject(e) {
		return Lt.Uq(cr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Pt.BinaryReader(e);
		let r = new cr();
		return cr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Lt.zj(cr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new Pt.BinaryWriter();
		cr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Lt.i0(cr.M(), e, t);
	}
	serializeBase64String() {
		var e = new Pt.BinaryWriter();
		cr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamAwards_GetNominationShareLink_Response";
	}
}
var mr;
var ur;
(function (e) {
	e.GetVoteDefinitions = function (e, t) {
		return e.SendMsg("StoreSales.GetVoteDefinitions#1", I8(Ht, t), jt, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	};
	e.SetVote = function (e, t) {
		return e.SendMsg("StoreSales.SetVote#1", I8(Yt, t), Kt, {
			ePrivilege: 1,
		});
	};
	e.GetUserVotes = function (e, t) {
		return e.SendMsg("StoreSales.GetUserVotes#1", I8(Qt, t), Zt, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
})((mr ||= {}));
(function (e) {
	e.GetUserNominations = function (e, t) {
		return e.SendMsg("SteamAwards.GetUserNominations#1", I8(Jt, t), $t, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.GetOtherUserNominations = function (e, t) {
		return e.SendMsg("SteamAwards.GetOtherUserNominations#1", I8(er, t), $t, {
			bConstMethod: true,
			ePrivilege: 2,
		});
	};
	e.Nominate = function (e, t) {
		return e.SendMsg("SteamAwards.Nominate#1", I8(tr, t), rr, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.GetNominationRecommendations = function (e, t) {
		return e.SendMsg(
			"SteamAwards.GetNominationRecommendations#1",
			I8(nr, t),
			ir,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetNominationShareLink = function (e, t) {
		return e.SendMsg("SteamAwards.GetNominationShareLink#1", I8(lr, t), cr, {
			ePrivilege: 1,
		});
	};
})((ur ||= {}));
let _r;
function fr() {
	_r ||= Fd("steam_awards_config", "application_config");
	return _r;
}
i.createContext(null);
function br() {
	const e = KV();
	return I_1({
		queryKey: [`SteamAwardNominations_${hr.iA.accountid}`],
		queryFn: async () => {
			const t = ye.w.Init(Jt);
			const r = await ur.GetUserNominations(e, t);
			return r.Body().toObject()?.nominations;
		},
		initialData: () => {
			return fr()?.user_nominations?.nominations;
		},
		enabled: hr.iA.logged_in,
	});
}
function yr() {
	return [`SteamAwardBadgeProgress_${hr.iA.accountid}`];
}
function Sr(e, t, r, n) {
	const i = KV();
	const a = jE();
	return n_1({
		mutationFn: () => {
			return (async function (e, t, r, n) {
				const i = ye.w.Init(tr);
				i.Body().set_category_id(r);
				i.Body().set_source(n);
				i.Body().set_nominated_id(t);
				const a = await ur.Nominate(e, i);
				if (!a.BSuccess()) {
					console.warn(`Failed to nominate app: ${a.GetEResult()}`);
				}
				return [a.GetEResult(), a.Body().toObject()];
			})(i, e, t, r);
		},
		onSuccess: ([e, t]) => {
			if (e == 1) {
				(function (e, t) {
					e.setQueryData([`SteamAwardNominations_${hr.iA.accountid}`], t);
				})(a, t.nominations);
				window.setTimeout(() => {
					return a.invalidateQueries({
						queryKey: yr(),
					});
				}, 1000);
			} else if (n) {
				n(e);
			}
		},
		onError: () => {
			if (n) {
				n();
			}
		},
	});
}
var Br = wr;
function vr(e) {
	if (_z.iA.logged_in) {
		return (
			!_z.iA.is_limited ||
			(pg(
				i.createElement(kt.g, {
					strTokenOverride: e
						? "#SteamAward_Vote_LimitedAccount"
						: "#SteamAward_Nominate_LimitedAccount",
				}),
				window,
			),
			false)
		);
	} else {
		pg(
			i.createElement(ce.o0, {
				strTitle: (0, Localize)("#EventDisplay_Share_NotLoggedIn"),
				strDescription: (0, Localize)(
					"#EventDisplay_Share_NotLoggedIn_Description",
				),
				strOKButtonText: (0, Localize)("#MobileLogin_SignIn"),
				onOK: ne.vg,
			}),
			window,
		);
		return false;
	}
}
async function Ir(e, t) {
	const r = _z.TS.STORE_BASE_URL + "steamawards/ajaxgetsteamawardeventdetails";
	const n = {
		rgCategories: e,
		t:
			((i = I.HD.GetTimeNowWithOverride()),
			new Date(i * 1000).toISOString().slice(0, 19).replace("T", " ")),
	};
	var i;
	try {
		const e = await s.get(r, {
			params: n,
			withCredentials: false,
			cancelToken: t.token,
		});
		if (t.token.reason) {
			return null;
		}
		if (e?.data?.success == 1 && e?.data?.event_details) {
			return e.data.event_details;
		}
	} catch (e) {
		const t = H_1(e);
		console.error("Could not fetch award event details:" + t.strErrorMsg, t);
	}
	return null;
}
const Er = {
	include_assets: true,
};
function Mr(e) {
	const { event: t, lang: r, previewMode: n } = e;
	const [a] = q3(() => {
		return [t.GetSteamAwardCategory()];
	});
	const s = m_1("EventDisplaySteamAwardNomination");
	const [o, l] = useState(null);
	const { currentNomination: c, bLoadingNominationForCategory: m } = (function (
		e,
	) {
		const t = br();
		if (t.isLoading) {
			return {
				bLoadingNominationForCategory: true,
			};
		} else {
			return {
				currentNomination: t.data?.find((t) => {
					return t.category_id == e;
				}),
				bLoadingNominationForCategory: false,
			};
		}
	})(a);
	useEffect(() => {
		Ir([a], s).then((e) => {
			l(e);
		});
	}, [s, a]);
	if (
		!o ||
		!o.rgAwardCategoryDetails?.length ||
		!o.rgAwardCategoryDetails?.length ||
		m
	) {
		return i.createElement(He.t, {
			className: Br.SteamAwardContainer,
			size: "medium",
			position: "center",
			string: (0, Localize)("#Loading"),
		});
	}
	const u = I.HD.GetTimeNowWithOverride();
	if (!n && !o.bIsAutumnSaleActive) {
		return null;
	}
	let d = {};
	if (o.strBackgroundCSS?.length) {
		d.backgroundColor = o.strBackgroundCSS;
	}
	if (o.strBackgroundImage?.length) {
		d.backgroundImage = `url( ${o.strBackgroundImage} )`;
	}
	if (o.strTextColor?.length) {
		d.color = o.strTextColor;
	}
	const A = o.rgAwardCategoryDetails?.length == 1;
	const g = t.BIsEventActionEnabled() || u < t.GetStartTimeAndDateUnixSeconds();
	const h = new Date().getFullYear();
	return i.createElement(
		"div",
		{
			style: d,
			className: A_1(Br.SteamAwardContainer, re.PartnerEventFont),
		},
		i.createElement(
			"div",
			{
				className: Br.SteamAwardHeader,
			},
			i.createElement("img", {
				className: Br.SteamAwardHeaderImage,
				src: `${o.strTrophyImg}`,
			}),
			i.createElement(
				"div",
				{
					className: Br.SteamAwardMainCtn,
				},
				i.createElement(
					"div",
					{
						className: Br.SteamAwardMainTitle,
					},
					(0, Localize)("#SteamAwards_EventMainTitle"),
				),
				i.createElement(
					"div",
					{
						className: Br.SteamAwardSubTitle,
					},
					g
						? (0, Localize)("#SteamAwards_EventCallToAction")
						: (0, Localize)("#SteamAwards_EventVotingDateTeaser", h),
					g &&
						i.createElement(
							"a",
							{
								href: NT(_z.TS.STORE_BASE_URL + "steamawards/nominations/"),
								className: Br.SteamAwardLearnMore,
							},
							"(",
							(0, Localize)("#EventDisplay_CallToAction_LearnMore"),
							")",
						),
				),
				i.createElement(
					"div",
					{
						className: Br.SteamAwardHeaderText,
					},
					g
						? A
							? (0, Localize)(
									"#SteamAwards_EventNominateGamePrompt_Long",
									t.GetGameTitle(r),
								)
							: i.createElement(
									"a",
									{
										className: Br.LinkText,
										href: NT(_z.TS.STORE_BASE_URL + "steamawards/nominations/"),
									},
									(0, Localize)(
										"#SteamAwards_EventNominateGamePrompt_NoCategory",
										t.GetGameTitle(r),
									),
								)
						: (0, Localize)("#SteamAwards_Event_NominationsClosed"),
				),
			),
		),
		i.createElement(Tr, {
			event: t,
			nominationEventDetails: o,
			currentNomination: c,
		}),
	);
}
function Tr(e) {
	const { event: t, nominationEventDetails: r, currentNomination: n } = e;
	const [a, s] = q3(() => {
		return [t.GetSteamAwardCategory(), t.appid];
	});
	const o = n?.appid;
	const l = Sr(s, a, 0);
	const c = Boolean(n?.appid == s && n?.category_id == a);
	const m = useCallback(
		async (e) => {
			if (!e) {
				console.log(
					"EventDisplaySteamAwardNomination: ignore turning off the checkbox",
				);
				return;
			}
			if (!vr(false)) {
				console.log(
					"EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
				);
				return;
			}
			if (o && o != s) {
				pg(
					i.createElement(Rr, {
						strLocTokenInfix: "Nomination",
						newAppID: s,
						curNominatedAppID: o,
						fnOnConfirm: l.mutate,
					}),
					window,
				);
			} else {
				l.mutate();
			}
		},
		[o, s, l],
	);
	const u = I.HD.GetTimeNowWithOverride();
	const d = r.rgAwardCategoryDetails?.length == 1;
	const A = t.BIsEventActionEnabled() || u < t.GetStartTimeAndDateUnixSeconds();
	if (d && (A || c)) {
		return i.createElement(
			"div",
			{
				className: A_1(Br.SteamAwardNominationWidget, Br.SteamAwardVoteWidget),
			},
			i.createElement(
				"div",
				{
					className: Br.NominateCtn,
				},
				i.createElement(
					"div",
					{
						style: {
							background: r?.strNominateButtonBGColor,
						},
						className: A_1(Br.SteamAwardNominateButton, c && Br.Nominated),
					},
					i.createElement(N.Yh, {
						controlled: true,
						className: A_1(Br.SteamAwardVoteCheckBox, c && Br.Nominated),
						checked: c,
						onChange: m,
						disabled: c,
						color: "#FFFFFF",
						highlightColor: "white",
						label: i.createElement(
							i.Fragment,
							null,
							i.createElement(
								"div",
								{
									className: Br.SteamAwardCategoryTitle,
								},
								c
									? LocalizeReact(
											"#SteamAwards_NominateWidget_CTA_PastTense",
											r.rgAwardCategoryDetails[0].strSuggestedCategoryTitle,
										)
									: LocalizeReact(
											"#SteamAwards_NominateWidget_CTA",
											r.rgAwardCategoryDetails[0].strSuggestedCategoryTitle,
										),
							),
						),
					}),
				),
				i.createElement(
					"div",
					{
						className: Br.SteamAwardCategoryDesc,
					},
					r.rgAwardCategoryDetails[0].strSuggestedCategoryDesc,
				),
			),
			Boolean(A && a != r.eLaborOfLove) &&
				i.createElement(
					"div",
					{
						className: Br.SteamAwardLinkToNominationPage,
					},
					i.createElement(
						"a",
						{
							href: NT(_z.TS.STORE_BASE_URL + "steamawards/nominations/"),
						},
						(0, Localize)("#SteamAwards_EventNominationAlternativeLinkText"),
					),
				),
		);
	} else {
		return null;
	}
}
function Rr(e) {
	const {
		curNominatedAppID: t,
		newAppID: r,
		strLocTokenInfix: n,
		fnOnConfirm: a,
		fnOnCancel: s,
		closeModal: o,
	} = e;
	const [l] = t7(t, Er);
	const [c] = t7(r, Er);
	return i.createElement(
		ce.o0,
		{
			modalClassName: Br.SteamAwardConflictModal,
			strTitle: (0, Localize)(`#SteamAward_${n}ConflictWarning_Title`),
			closeModal: o,
			onOK: a,
			onCancel: s,
		},
		i.createElement(
			"div",
			{
				className: Br.ConflictBody,
			},
			LocalizeReact(
				`#SteamAward_${e.strLocTokenInfix}ConflictWarning_Explanation`,
				i.createElement(
					"span",
					{
						className: Br.SteamAwardModalGameTitle,
					},
					l?.GetName(),
				),
				i.createElement(
					"span",
					{
						className: Br.SteamAwardModalGameTitle,
					},
					c?.GetName(),
				),
			),
			Boolean(!l || !c)
				? i.createElement(He.t, {
						size: "small",
						position: "center",
						string: (0, Localize)("#Loading"),
					})
				: i.createElement(
						"div",
						{
							className: Br.NominationSwitchCtn,
						},
						i.createElement("img", {
							src: l.GetAssets().GetSmallCapsuleURL(),
						}),
						"→",
						i.createElement("img", {
							src: c.GetAssets().GetSmallCapsuleURL(),
						}),
					),
		),
	);
}
let kr = class extends i.Component {
	constructor(e) {
		super(e);
		Gn(this);
	}
	state = {
		eCategoryLoaded: null,
		votedForAppID: null,
	};
	m_strPreviousVotedForAppTitle = null;
	m_cancelSignal = s.CancelToken.source();
	componentDidMount() {
		this.FetchVoteState();
	}
	componentDidUpdate() {
		if (this.props.eVoteCategory != this.state.eCategoryLoaded) {
			this.FetchVoteState();
		}
	}
	componentWillUnmount() {
		this.m_cancelSignal.cancel("EventDisplaySteamAwardVote is being unmounted");
	}
	async FetchVoteState() {
		const e = _z.TS.STORE_BASE_URL + "steamawards/ajaxgetuservotes";
		if (_z.iA.logged_in) {
			try {
				const t = await s.get(e, {
					withCredentials: true,
					cancelToken: this.m_cancelSignal.token,
				});
				if (this.m_cancelSignal.token.reason) {
					return;
				}
				if (t?.data?.success == 1 && t.data.votes) {
					this.UpdateVoteState(t.data.votes);
				}
			} catch (e) {
				const t = H_1(e);
				console.error("Could not fetch previous votes:" + t.strErrorMsg, t);
			}
		} else {
			this.UpdateVoteState([]);
		}
	}
	async UpdateVoteState(e) {
		const t = this.props.eVoteCategory;
		const r = e[t];
		this.setState({
			eCategoryLoaded: t,
			votedForAppID: r,
		});
		if (r && r != this.props.appID) {
			await k.A.Get().QueueAppRequest(r, {});
			if (this.m_cancelSignal.token.reason) {
				return;
			}
			if (this.props.eVoteCategory == t) {
				this.m_strPreviousVotedForAppTitle = k.A.Get().GetApp(r)?.GetName();
			}
		}
	}
	async OnVoteClick() {
		const e = this.props.eVoteCategory;
		if (e != this.state.eCategoryLoaded) {
			return;
		}
		if (!vr(true)) {
			return;
		}
		const t = this.props.appID;
		if (this.state.votedForAppID && this.state.votedForAppID != t) {
			this.HandleConflict(() => {
				return this.SaveVote(e, t);
			});
		} else {
			this.SaveVote(e, t);
		}
	}
	HandleConflict(e) {
		const t = k.A.Get().GetApp(this.props.appID);
		pg(
			i.createElement(Rr, {
				strLocTokenInfix: "Vote",
				newAppID: t?.GetAppID(),
				curNominatedAppID: this.state.votedForAppID,
				fnOnConfirm: e,
				fnOnCancel: () => {},
			}),
			window,
		);
	}
	async SaveVote(e, t) {
		this.setState({
			eCategoryLoaded: e,
			votedForAppID: t,
		});
		if (this.props.previewMode && _z.TS.EUNIVERSE == 1) {
			return;
		}
		const r = _z.TS.STORE_BASE_URL + "steamawards/ajaxvoteforgame";
		const n = new URLSearchParams();
		n.append("sessionid", _z.TS.SESSIONID);
		n.append("categoryid", e.toString());
		n.append("appid", t.toString());
		try {
			const e = await s.post(r, n, {
				withCredentials: true,
				cancelToken: this.m_cancelSignal.token,
			});
			if (this.m_cancelSignal.token.reason) {
				return;
			}
			if (!e || e.status != 200 || e.status != 200 || e.data.success != 1) {
				console.error("Vote request failed.", e && H_1(e));
			}
		} catch (e) {
			const t = H_1(e);
			console.error("SaveVote failed: " + t.strErrorMsg, t);
		}
	}
	render() {
		const e = this.props.eVoteCategory;
		const t =
			this.state.eCategoryLoaded == e &&
			this.state.votedForAppID == this.props.appID;
		const r =
			this.props.bIsEventActionEnabled ||
			this.props.previewMode ||
			this.props.previewMode ||
			t;
		let n = {};
		if (this.props.strBackgroundColor.length) {
			n.backgroundColor = this.props.strBackgroundColor;
		}
		if (r) {
			return i.createElement(
				"div",
				{
					style: n,
					className: A_1(Br.SteamAwardVoteWidget),
				},
				i.createElement(
					"div",
					{
						className: Br.SteamAwardVoteButtonArea,
					},
					i.createElement(
						"div",
						{
							className: A_1(Br.SteamAwardCategoryTitle, Br.VotingTitle),
						},
						this.props.strCategoryTitle,
					),
					!this.props.bRenderFromStorePage &&
						i.createElement(
							"div",
							{
								className: Br.SteamAwardCategoryDesc,
							},
							this.props.strCategoryDesc,
						),
					t
						? i.createElement(
								"button",
								{
									className: Br.SteamAwardVoteButtonSubmitted,
								},
								i.createElement(
									"span",
									{
										className: Br.SteamAwardVoteButtonText,
									},
									(0, Localize)("#SteamAward_VoteButton_VotedText"),
								),
							)
						: i.createElement(
								"button",
								{
									className: Br.SteamAwardVoteButton,
									onClick: this.OnVoteClick,
								},
								i.createElement(
									"span",
									{
										className: Br.SteamAwardVoteButtonText,
									},
									(0, Localize)("#SteamAward_VoteButton_PromptText"),
								),
							),
				),
			);
		} else {
			return null;
		}
	}
};
Cg([y.sH], kr.prototype, "m_strPreviousVotedForAppTitle", undefined);
Cg([ie.oI], kr.prototype, "OnVoteClick", null);
Cg([ie.oI], kr.prototype, "SaveVote", null);
kr = Cg([g.PA], kr);
i.Component;
let Dr = class extends i.Component {
	m_cancelSignal = s.CancelToken.source();
	m_awardEventDetails = null;
	constructor(e) {
		super(e);
		Gn(this);
		this.state = {
			bAppInfoLoaded: false,
		};
	}
	componentDidMount() {
		k.A.Get()
			.QueueAppRequest(this.props.appID, {})
			.then(() => {
				if (k.A.Get().BHasApp(this.props.appID)) {
					this.setState({
						bAppInfoLoaded: true,
					});
				}
			});
		Ir(this.props.voteCategories, this.m_cancelSignal).then((e) => {
			this.m_awardEventDetails = e;
		});
	}
	componentWillUnmount() {
		this.m_cancelSignal.cancel(
			"WinterSaleSteamAwardVoteWrapper is being unmounted",
		);
	}
	GetNominatedAwardCategories() {
		let e = [];
		this.m_awardEventDetails.rgAwardCategoryDetails?.forEach((t) => {
			e.push(
				i.createElement(kr, {
					key: t.eSteamAwardCategoryID,
					eVoteCategory: t.eSteamAwardCategoryID,
					strCategoryDesc: t.strSuggestedCategoryDesc,
					strCategoryTitle: t.strSuggestedCategoryTitle,
					strBackgroundColor: this.m_awardEventDetails.strNominateButtonBGColor,
					...this.props,
				}),
			);
		});
		return e;
	}
	render() {
		if (!this.state.bAppInfoLoaded || !this.props.voteCategories) {
			return null;
		}
		if (!this.m_awardEventDetails) {
			return null;
		}
		let e = {};
		if (this.m_awardEventDetails.strBackgroundCSS?.length) {
			e.backgroundColor = this.m_awardEventDetails.strBackgroundCSS;
		}
		if (this.m_awardEventDetails.strBackgroundImage?.length) {
			e.backgroundImage = `url( ${this.m_awardEventDetails.strBackgroundImage} )`;
		}
		if (this.m_awardEventDetails.strTextColor?.length) {
			e.color = this.m_awardEventDetails.strTextColor;
		}
		return i.createElement(
			"div",
			{
				style: e,
				className: A_1(Br.SteamAwardContainer, re.PartnerEventFont),
			},
			i.createElement(
				"div",
				{
					className: Br.SteamAwardHeader,
				},
				i.createElement("img", {
					className: Br.SteamAwardHeaderImage,
					src: this.m_awardEventDetails.strTrophyImg,
				}),
				i.createElement(
					"div",
					{
						className: Br.SteamAwardMainCtn,
					},
					i.createElement(
						"div",
						{
							className: Br.SteamAwardMainTitle,
						},
						" ",
						(0, Localize)("#SteamAwards_EventMainTitleCombined"),
						" ",
					),
					i.createElement(
						"div",
						{
							className: Br.SteamAwardHeaderText,
						},
						this.props.bIsEventActionEnabled
							? i.createElement(
									i.Fragment,
									null,
									(0, Localize)(
										"#SteamAwards_EventVoteForGamePrompt",
										k.A.Get().GetApp(this.props.appID)?.GetName(),
									),
								)
							: i.createElement(
									"a",
									{
										href: NT(_z.TS.STORE_BASE_URL + "steamawards/"),
										className: Br.LinkText,
									},
									(0, Localize)("#SteamAwards_Event_VotesClosed"),
								),
					),
					i.createElement(
						"div",
						{
							className: Br.AwardCategoriesCtn,
						},
						this.GetNominatedAwardCategories(),
					),
				),
			),
			i.createElement(
				"div",
				{
					className: Br.SteamAwardLinkToNominationPage,
				},
				i.createElement(
					"a",
					{
						href: NT(_z.TS.STORE_BASE_URL + "steamawards/"),
					},
					(0, Localize)("#EventDisplay_CallToAction_LearnMore"),
				),
			),
		);
	}
};
Cg([y.sH], Dr.prototype, "m_awardEventDetails", undefined);
Dr = Cg([g.PA], Dr);
var Fr = Nr;
var Ur = xr;
function Wr(e) {
	const { event: t } = e;
	const r = q3(() => {
		return t.jsondata?.referenced_appids || [];
	});
	const [n, a] = i.useState(false);
	i.useEffect(() => {
		k.A.Get()
			.QueueMultipleAppRequests(r, {})
			.then(() => {
				return a(true);
			});
	}, [r]);
	if (!r.length || !n) {
		return null;
	}
	const s = r
		.map((e) => {
			return k.A.Get().GetApp(e);
		})
		.filter(Boolean)
		.map((e) => {
			return `[url="${e.GetStorePageURL()}"]${e.GetName()}[/url]`;
		})
		.join((0, Localize)("#EventDisplay_ReferencedApps_Joiner"));
	const o = LocalizePlural("#EventDisplay_ReferencedApps", r.length, s);
	return i.createElement(
		"div",
		{
			className: Ur.ReferencedApps,
		},
		i.createElement(St.f, {
			text: o,
			event: t,
		}),
	);
}
function Vr(e) {
	const { children: t } = e;
	if (Qn() && !_z.TS.IN_STEAMUI) {
		return i.createElement(
			_.Qg,
			{
				className: te.GamepadOnlyScrollPanel,
			},
			i.createElement(
				h.Z,
				{
					focusable: true,
					noFocusRing: true,
					className: te.GamepadOnlyPanel,
				},
				t,
			),
		);
	} else {
		return i.createElement(i.Fragment, null, t);
	}
}
const jr = i.lazy(() => {
	return require.e(8396).then(require.bind(require, 94164));
});
function qr(e) {
	const [t, r] = t7(e.appid, {
		include_assets: true,
	});
	const [n, a] = TB(e.clanID);
	let s = "";
	if (e.appid) {
		s = t?.GetAssets()?.GetCommunityIconURL() || "";
	} else if (e.clanID) {
		s = a ? a.avatar_full_url : "";
	}
	return i.createElement(
		"div",
		{
			className: A_1(W.ScrollButton, W.GameArt, W.AnimIn),
			onClick: e.onAppIconClick,
		},
		Boolean(s) &&
			i.createElement("img", {
				src: s,
			}),
	);
}
let Qr = class extends i.Component {
	m_loader = null;
	m_refPage = i.createRef();
	m_refContent = i.createRef();
	m_refScroll = i.createRef();
	m_refScrollAnchor = i.createRef();
	m_scrollAnimation = null;
	m_nTouchStartClientY;
	m_nPreviousRenderCount = 0;
	m_nCurrentRenderCount = 0;
	constructor(e) {
		super(e);
		if (!this.props.bShowOnlyInitialEvent && this.props.initialEvent) {
			this.m_loader = new Jr(this.props.partnerEventStore);
			this.m_loader.InitAroundEvent(
				this.props.initialEvent,
				this.props.additionalParams,
			);
		}
	}
	FindCurrentlyViewedEventIndex() {
		if (!this.m_refContent.current || !this.m_refScroll.current) {
			return -1;
		}
		let e = this.m_refContent.current.children;
		let t = this.GetScrollTopForComparison();
		for (let r = 0; r < e.length; r++) {
			let n = e[r];
			let i = n.offsetTop;
			let a = i + n.clientHeight;
			if (i <= t && a > t) {
				return r;
			}
		}
		return -1;
	}
	GetPaddingTop() {
		if (this.props.showAppHeader) {
			return 136;
		} else {
			return 56;
		}
	}
	GetScrollTopForComparison() {
		return Math.ceil(
			this.m_refScroll.current.scrollTop + this.GetPaddingTop() + 24,
		);
	}
	ScrollToEvent(e) {
		let t = this.m_refContent.current;
		if (!t) {
			return;
		}
		if (e < 0 || e >= t.children.length) {
			return;
		}
		if (this.m_scrollAnimation) {
			return;
		}
		let r = t.children[e].offsetTop - this.GetPaddingTop();
		this.ScrollToOffset(r);
	}
	ScrollToOffset(e) {
		let t = this.m_refScroll.current;
		if (!t) {
			return;
		}
		let r = {
			msDuration: 500,
			timing: "cubic-in-out",
			onComplete: this.OnScrollComplete,
		};
		this.m_scrollAnimation = new Pr.JV(
			t,
			{
				scrollTop: e,
			},
			r,
		);
		this.m_scrollAnimation.Start();
	}
	ScrollToBottom() {
		if (this.m_refScroll.current) {
			this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
		}
	}
	ScrollToNextEvent() {
		let e = this.m_loader.GetEvents();
		let t = this.FindCurrentlyViewedEventIndex() + 1;
		if (t >= e.length) {
			this.ScrollToBottom();
		} else {
			this.ScrollToEvent(t);
			if (t == e.length - 1) {
				this.m_loader.LoadMoreAtEnd();
			}
		}
	}
	ScrollToPrevEvent() {
		let e = this.FindCurrentlyViewedEventIndex();
		let t = e - 1;
		if (t < 0) {
			this.ScrollToOffset(0);
			return;
		}
		let r = this.m_refContent.current;
		if (r) {
			let n = r.children[e];
			let i = n.offsetTop;
			let a = i + n.clientHeight;
			let s = this.GetScrollTopForComparison();
			s -= (a - i) * 0.3;
			if (i <= s) {
				t = e;
			}
		}
		this.ScrollToEvent(t);
	}
	OnScrollComplete() {
		this.m_scrollAnimation = null;
	}
	Close() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}
	OnBackgroundClick(e) {
		if (e.currentTarget == e.target) {
			this.Close();
		}
	}
	OnKeyDown(e) {
		if (e.keyCode == 27) {
			this.Close();
		}
	}
	OnScroll(e) {
		if (this.props.bShowOnlyInitialEvent) {
			return;
		}
		let t = this.m_refScroll.current;
		if (!t) {
			return;
		}
		let r = t.clientHeight;
		if (t.scrollHeight - (t.scrollTop + r) <= r) {
			this.m_loader.LoadMoreAtEnd();
		}
		if (t.scrollTop <= r) {
			this.m_loader.LoadMoreAtBeginning();
		}
	}
	getSnapshotBeforeUpdate(e) {
		let t = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
		this.m_nPreviousRenderCount = this.m_nCurrentRenderCount;
		if (!t) {
			return null;
		}
		let r = this.m_refScroll.current;
		if (!r || !this.m_refScrollAnchor.current) {
			return null;
		}
		let n = this.m_refScrollAnchor.current.GetDOM();
		if (n) {
			return n.offsetTop - r.scrollTop;
		} else {
			return null;
		}
	}
	OnTouchStart(e) {
		if (e.touches.length == 1) {
			this.m_nTouchStartClientY = e.touches[0].clientY;
		}
	}
	OnTouchMove(e) {
		if (!this.m_refScroll.current || e.touches.length == 0) {
			return;
		}
		const t = this.m_nTouchStartClientY - e.touches[0].clientY;
		this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, t);
	}
	OnWheel(e) {
		this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, e.deltaY);
	}
	SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, t) {
		const r =
			IsHTMLElement(e.target) &&
			BIsParentOrSelf(this.m_refScroll.current, e.target);
		const n = t < 0 && this.m_refScroll.current.scrollTop < 1;
		const i =
			this.m_refScroll.current.scrollHeight -
				this.m_refScroll.current.scrollTop <=
			this.m_refScroll.current.clientHeight;
		if ((!r || n || (t > 0 && i)) && e.cancelable) {
			e.preventDefault();
		}
	}
	SetGlobalHeaderHidden(e) {
		const t = document.getElementsByClassName("responsive_header");
		AssertMsg(t.length <= 1, "Must have at most one responsive_header");
		if (t.length >= 1) {
			t[0].style.display = e ? "none" : null;
		}
	}
	SetFooterPinnedToBottom(e) {
		const t = document.getElementById("footer");
		if (t) {
			t.style.position = e ? "absolute" : null;
		}
	}
	componentDidMount() {
		const e = this.m_refScroll.current;
		if (e && !BIsParentOrSelf(e, e.ownerDocument.activeElement)) {
			e.focus();
		}
		const t = this.m_refPage.current;
		if (t) {
			t.addEventListener("touchstart", this.OnTouchStart);
			t.addEventListener("touchmove", this.OnTouchMove, {
				passive: false,
			});
			t.addEventListener("wheel", this.OnWheel, {
				passive: false,
			});
		}
		if (this.props.showAppHeader) {
			this.SetGlobalHeaderHidden(true);
		}
		this.SetFooterPinnedToBottom(true);
	}
	componentDidUpdate(e, t, r) {
		if (r !== null) {
			let e = this.m_refScroll.current;
			if (e && !BIsParentOrSelf(e, e.ownerDocument.activeElement)) {
				e.focus();
			}
			let t = this.m_refScrollAnchor.current
				? this.m_refScrollAnchor.current.GetDOM()
				: null;
			if (t) {
				e.scrollTop = t.offsetTop - r;
			}
		}
	}
	componentWillUnmount() {
		const e = this.m_refPage.current;
		if (e) {
			e.removeEventListener("touchstart", this.OnTouchStart);
			e.removeEventListener("touchmove", this.OnTouchMove);
			e.removeEventListener("wheel", this.OnWheel);
		}
		if (this.props.showAppHeader) {
			this.SetGlobalHeaderHidden(false);
		}
		this.SetFooterPinnedToBottom(false);
	}
	render() {
		const { initialEvent: e, bShowOnlyInitialEvent: t } = this.props;
		const r = !e;
		const n = r ? [] : t ? [e] : this.m_loader.GetEvents();
		const a = [];
		let s = this.props.appid;
		let o = this.props.clanSteamID?.GetAccountID();
		for (const e of n) {
			const t = e.GID == this.props.initialEvent.GID;
			const r = t;
			a.push(
				i.createElement(Yr, {
					ref: t ? this.m_refScrollAnchor : null,
					key: e.GID,
					event: e,
					emoticonStore: this.props.emoticonStore,
					partnerEventStore: this.props.partnerEventStore,
					disableReadTracking: t,
					fnFilterImageURLsForKnownFailures:
						this.props.fnFilterImageURLsForKnownFailures,
					fnImageFailureCallback: this.props.fnImageFailureCallback,
					bDisableBroadcastPlayer: !r,
					className: this.props.eventClassName,
				}),
			);
			if (s == null) {
				s = e.appid;
			}
			if (o == null) {
				o = e.clanSteamID.GetAccountID();
			}
		}
		this.m_nCurrentRenderCount = a.length;
		return i.createElement(
			h.Z,
			{
				onCancelButton: this.props.closeModal,
				className: W.AppPartnerEventsPage,
				ref: this.m_refPage,
			},
			this.props.showAppHeader &&
				i.createElement($r, {
					appId: s,
					clanId: o,
				}),
			i.createElement(
				"div",
				{
					className: A_1(W.AppPartnerEventsBody, W.EndlessScroll),
					ref: this.m_refScroll,
					onScroll: this.OnScroll,
					onClick: this.OnBackgroundClick,
					tabIndex: -1,
					onKeyDown: this.OnKeyDown,
				},
				r
					? i.createElement(
							"div",
							{
								className: W.NoEvents,
							},
							(0, Localize)("#EventDisplay_NoEventsToSee"),
						)
					: i.createElement(
							i.Fragment,
							null,
							i.createElement(
								"div",
								{
									className: A_1(
										W.ControlSection,
										!this.props.onAppIconClick && W.NoGameLink,
										t && W.NoScrollArrows,
									),
								},
								i.createElement(
									"div",
									{
										className: W.ControlSectionWidth,
									},
									i.createElement(
										"div",
										{
											className: W.ControlSectionRightSide,
										},
										Boolean(this.props.closeModal) &&
											i.createElement(
												"div",
												{
													className: A_1(W.CloseButton, W.AnimIn),
													onClick: this.Close,
												},
												i.createElement(F.sED, null),
											),
										!t &&
											i.createElement(
												"div",
												{
													className: A_1(W.ScrollButton, W.Up, W.AnimIn),
													onClick: this.ScrollToPrevEvent,
												},
												i.createElement(F.V5W, {
													angle: 0,
												}),
											),
										!t &&
											i.createElement(
												"div",
												{
													className: A_1(W.ScrollButton, W.Down, W.AnimIn),
													onClick: this.ScrollToNextEvent,
												},
												i.createElement(F.V5W, {
													angle: 180,
												}),
											),
										this.props.onAppIconClick &&
											i.createElement(qr, {
												appid: s,
												clanID: o,
												onAppIconClick: this.props.onAppIconClick,
											}),
									),
								),
							),
							!t &&
								i.createElement(Zr, {
									loader: this.m_loader,
									location: "top",
								}),
							i.createElement(
								"div",
								{
									ref: this.m_refContent,
									className: A_1(
										W.AppPartnerEventsContainer,
										!this.props.onAppIconClick && W.NoGameLink,
									),
								},
								a,
							),
							!t &&
								i.createElement(Zr, {
									loader: this.m_loader,
									location: "bottom",
								}),
							Boolean(t) &&
								i.createElement(
									V.tj,
									{
										eventModel: e,
										route: V.PH.k_eStoreNewsHub,
									},
									(0, Localize)("#EventBrowse_MoreEventsBtn"),
								),
						),
			),
		);
	}
};
Cg([ie.oI], Qr.prototype, "ScrollToNextEvent", null);
Cg([ie.oI], Qr.prototype, "ScrollToPrevEvent", null);
Cg([ie.oI], Qr.prototype, "OnScrollComplete", null);
Cg([ie.oI], Qr.prototype, "Close", null);
Cg([ie.oI], Qr.prototype, "OnBackgroundClick", null);
Cg([ie.oI], Qr.prototype, "OnKeyDown", null);
Cg([ie.oI], Qr.prototype, "OnScroll", null);
Cg([ie.oI], Qr.prototype, "OnTouchStart", null);
Cg([ie.oI], Qr.prototype, "OnTouchMove", null);
Cg([ie.oI], Qr.prototype, "OnWheel", null);
Qr = Cg([g.PA], Qr);
const Zr = PA((e) => {
	let t = e.loader.GetNewerState();
	let r = e.loader.GetOlderState();
	if (t == Xr.Loading && r == Xr.Loading) {
		return null;
	} else if ((e.location == "top" ? t : r) == Xr.Loading) {
		return i.createElement(
			"div",
			{
				className: W.DirectionState,
			},
			i.createElement(He.t, {
				position: "center",
				string: (0, Localize)("#Loading"),
			}),
		);
	} else {
		return null;
	}
});
const Yr = i.forwardRef(function (e, t) {
	const r = Qn();
	const [n, a] = t7(e.event.appid, {
		include_assets: true,
	});
	return i.createElement(Kr, {
		ref: t,
		...e,
		bInGamepadUI: r,
		storeItem: n,
	});
});
let Kr = class extends i.Component {
	m_refContent = i.createRef();
	m_sendReadInfo = new Lr.LU();
	m_bSentRead = false;
	OnEnterVisible() {
		if (this.m_bSentRead || this.m_sendReadInfo.IsScheduled()) {
			return;
		}
		this.m_sendReadInfo.Schedule(750, () => {
			E.KN.Get().RecordEventRead(this.props.event, 4);
			this.m_bSentRead = true;
		});
	}
	OnLeaveVisible() {
		this.m_sendReadInfo.Cancel();
	}
	GetDOM() {
		return this.m_refContent.current;
	}
	render() {
		const {
			event: e,
			langOverride: t,
			partnerEventStore: r,
			emoticonStore: n,
			className: a,
			additionalTypeAndDateElement: s,
			fnFilterImageURLsForKnownFailures: o,
			fnImageFailureCallback: l,
			headerClassnames: c,
			isPreview: m,
			storeItem: u,
		} = this.props;
		const d = t || sf(_z.TS.LANGUAGE);
		const A = e.GetDescriptionWithFallback(d) || "";
		const p = c;
		let g = e.GetImageForSizeAsArrayWithFallback(
			"background",
			d,
			B.wI.background_main,
		);
		if (o) {
			g = o(g);
		}
		const h = e.GetCategoryAsString();
		const C = e.type;
		const _ = e.BImageNeedScreenshotFallback("background", d);
		let f = "";
		if (e.appid) {
			f = u?.GetName() || "";
		} else if (e.clanSteamID) {
			const t = v.ac.GetClanInfoByClanAccountID(e.clanSteamID.GetAccountID());
			f = t ? t.group_name : "";
		}
		const b = I.HD.GetTimeNowWithOverride();
		const y = C !== 28 && b < e.GetStartTimeAndDateUnixSeconds() && !m;
		return i.createElement(
			Vr,
			null,
			i.createElement(
				"div",
				{
					ref: this.m_refContent,
					className: A_1(
						a,
						W.PartnerEvent,
						Fr.InLibraryView,
						p == "editor" ? Fr.InEditor : "",
					),
				},
				C != 12 &&
					!_ &&
					i.createElement(Or.c, {
						className: A_1(Fr.EventCoverImageBackground),
						rgSources: g,
						onIncrementalError: (e, t, r) => {
							return l && l(t);
						},
					}),
				g.length > 0 &&
					i.createElement(Or.c, {
						className: Fr.EventBackgroundBlur,
						rgSources: g,
						onIncrementalError: (e, t, r) => {
							return l && l(t);
						},
					}),
				i.createElement(
					"div",
					{
						className: Fr.LibraryEventTitleContainer,
					},
					i.createElement(
						"div",
						{
							className: Fr.EventDetailTitleContainer,
						},
						this.props.headerElement,
						i.createElement(
							"div",
							{
								className: A_1(W.EventTypeAndTimeRow, y && W.WithReminder),
							},
							i.createElement(
								"div",
								{
									className: W.TimeandPostedBy,
								},
								i.createElement(
									"span",
									{
										className: W.EventType,
									},
									h,
								),
								i.createElement(
									"span",
									{
										className: W.PostedBy,
									},
									" ",
									(0, Localize)("#EventDisplay_PostedBy"),
									f,
									" ",
								),
								i.createElement(Gr.OT, {
									event: e,
								}),
							),
							y &&
								!m &&
								i.createElement(
									"div",
									{
										className: W.ReminderContainer,
									},
									i.createElement(zr.j, {
										eventModel: e,
										lang: d,
										bExpandLeft: true,
									}),
								),
							!m && s,
						),
						!this.props.disableReadTracking &&
							!m &&
							i.createElement(S.Y, {
								onEnter: this.OnEnterVisible,
								onLeave: this.OnLeaveVisible,
								bottomOffset: "300px",
							}),
						this.props.bInGamepadUI
							? i.createElement(
									"div",
									{
										className: Fr.EventDetailTitle,
									},
									e.GetNameWithFallback(d),
								)
							: i.createElement(
									V.tj,
									{
										eventModel: e,
										route: V.PH.k_eView,
										className: Fr.EventDetailTitle,
									},
									e.GetNameWithFallback(d),
								),
						e.BHasSubTitle(d) &&
							i.createElement(
								"div",
								{
									className: A_1(
										Fr.EventDetailsSubTitle,
										W.LibraryViewSubtitle,
									),
								},
								e.GetSubTitle(d),
							),
						i.createElement("div", {
							className: Fr.EventDetailUserType,
						}),
					),
				),
				Boolean(
					e.BEventCanShowBroadcastWidget() &&
						!this.props.bDisableBroadcastPlayer,
				) &&
					i.createElement(
						"div",
						{
							className: Fr.EventBroadcastCtn,
						},
						i.createElement(
							i.Suspense,
							{
								fallback: null,
							},
							i.createElement(jr, {
								event: this.props.event,
							}),
						),
					),
				e.BHasTag("steam_award_nomination_request") &&
					i.createElement(Mr, {
						event: e,
						lang: d,
					}),
				e.BHasTag("steam_award_vote_request") &&
					i.createElement(Dr, {
						appID: e.appid,
						bIsEventActionEnabled: e.BIsEventActionEnabled(),
						voteCategories: e.GetSteamAwardNomineeCategories(),
					}),
				i.createElement(
					"div",
					{
						className: Fr.LibraryEventBodyContainer,
					},
					i.createElement(
						"div",
						{
							className: A_1(Fr.EventDetailsBody, W.EventDetailsBody),
							onContextMenu: _z.TS.IN_CLIENT ? M.aE : undefined,
						},
						i.createElement(St.f, {
							text: A,
							partnerEventStore: r,
							event: e,
						}),
						i.createElement("span", {
							className: re.Clear,
						}),
					),
					i.createElement(Wr, {
						event: this.props.event,
					}),
					Boolean(e.jsondata.read_more_link) &&
						i.createElement(
							"div",
							{
								className: A_1(W.ReadMoreCnt),
							},
							i.createElement(
								x.uU,
								{
									className: A_1(re.Button),
									href: e.jsondata.read_more_link,
								},
								(0, Localize)("#EventEmail_Button_ClickForMoreDetails"),
							),
						),
					Boolean(e.jsondata.bSaleEnabled && e.jsondata.sale_vanity_id) &&
						i.createElement(
							"div",
							{
								className: A_1(W.ReadMoreCnt),
							},
							i.createElement(Hr.m, {
								gidEvent: e.GID,
							}),
							i.createElement(
								"a",
								{
									className: A_1(re.Button, "LinkButton"),
									href: k2(e.GetSaleURL()),
								},
								(0, Localize)("#Event_Button_VisitSalePage"),
							),
						),
					i.createElement(Gr.lS, {
						appid: e.appid,
					}),
				),
				!Boolean(m) &&
					i.createElement(Ft, {
						eventModel: e,
						partnerEventStore: r,
						emoticonStore: n,
					}),
			),
		);
	}
};
var Xr;
Cg([ie.oI], Kr.prototype, "OnEnterVisible", null);
Cg([ie.oI], Kr.prototype, "OnLeaveVisible", null);
Kr = Cg([g.PA], Kr);
(function (e) {
	e[(e.Idle = 1)] = "Idle";
	e[(e.Loading = 2)] = "Loading";
	e[(e.EndOfContent = 3)] = "EndOfContent";
})((Xr ||= {}));
class Jr {
	k_nMaxPerDirection = 3;
	m_nAppID = 0;
	m_clanSteamID;
	m_partnerEventStore;
	m_additionalParams;
	m_rgEvents = [];
	m_eOlderDirection = Xr.Idle;
	m_eNewerDirection = Xr.Idle;
	constructor(e) {
		Gn(this);
		this.m_partnerEventStore = e;
	}
	GetEvents() {
		return this.m_rgEvents;
	}
	GetAppID() {
		return this.m_nAppID;
	}
	GetOlderState() {
		return this.m_eOlderDirection;
	}
	GetNewerState() {
		return this.m_eNewerDirection;
	}
	async InitAroundEvent(e, t) {
		const r = this.m_partnerEventStore;
		this.m_nAppID = e.appid;
		this.m_clanSteamID = e.clanSteamID;
		this.m_rgEvents = [];
		this.m_eOlderDirection = Xr.Loading;
		this.m_eNewerDirection = Xr.Loading;
		this.m_additionalParams = t;
		this.m_rgEvents.push(e);
		let n = null;
		try {
			n = await r.LoadAdjacentPartnerEventsByEvent(
				e,
				this.m_clanSteamID,
				this.m_nAppID,
				this.k_nMaxPerDirection,
				this.k_nMaxPerDirection,
				this.m_additionalParams,
			);
		} catch (e) {}
		h5(() => {
			if (!n || n.length == 0) {
				this.m_eOlderDirection = Xr.EndOfContent;
				this.m_eNewerDirection = Xr.EndOfContent;
				return;
			}
			let t = n.findIndex((t) => {
				return t.GID == e.GID;
			});
			let r = t;
			let i = t >= 0 ? n.length - t - 1 : 0;
			this.m_eNewerDirection =
				r >= this.k_nMaxPerDirection ? Xr.Idle : Xr.EndOfContent;
			this.m_eOlderDirection =
				i >= this.k_nMaxPerDirection ? Xr.Idle : Xr.EndOfContent;
			this.m_rgEvents = n;
		});
	}
	async LoadMoreAtEnd() {
		if (this.m_eOlderDirection != Xr.Idle) {
			return;
		}
		if (this.m_rgEvents.length == 0) {
			return;
		}
		let e = this.m_rgEvents[this.m_rgEvents.length - 1];
		this.m_eOlderDirection = Xr.Loading;
		let t = null;
		try {
			const r = this.m_partnerEventStore;
			t = await r.LoadAdjacentPartnerEventsByEvent(
				e,
				this.m_clanSteamID,
				this.m_nAppID,
				0,
				this.k_nMaxPerDirection,
				this.m_additionalParams,
			);
		} catch (e) {}
		h5(() => {
			if (!t) {
				this.m_eOlderDirection = Xr.Idle;
				return;
			}
			const e = new Set(
				this.m_rgEvents.map((e) => {
					return e.GID;
				}),
			);
			for (let r of t) {
				if (!e.has(r.GID)) {
					this.m_rgEvents.push(r);
					e.add(r.GID);
				}
			}
			this.m_eOlderDirection =
				t.length >= this.k_nMaxPerDirection ? Xr.Idle : Xr.EndOfContent;
		});
	}
	async LoadMoreAtBeginning() {
		if (this.m_eNewerDirection != Xr.Idle) {
			return;
		}
		if (this.m_rgEvents.length == 0) {
			return;
		}
		let e = this.m_rgEvents[0];
		this.m_eNewerDirection = Xr.Loading;
		let t = null;
		try {
			const r = this.m_partnerEventStore;
			t = await r.LoadAdjacentPartnerEventsByEvent(
				e,
				this.m_clanSteamID,
				this.m_nAppID,
				this.k_nMaxPerDirection,
				0,
			);
		} catch (e) {}
		h5(() => {
			if (!t) {
				this.m_eNewerDirection = Xr.Idle;
				return;
			}
			const e = new Set(
				this.m_rgEvents.map((e) => {
					return e.GID;
				}),
			);
			for (let r of t.reverse()) {
				if (!e.has(r.GID)) {
					this.m_rgEvents.unshift(r);
					e.add(r.GID);
				}
			}
			this.m_eNewerDirection =
				t.length >= this.k_nMaxPerDirection ? Xr.Idle : Xr.EndOfContent;
		});
	}
}
Cg([y.sH.shallow], Jr.prototype, "m_rgEvents", undefined);
Cg([y.sH], Jr.prototype, "m_eOlderDirection", undefined);
Cg([y.sH], Jr.prototype, "m_eNewerDirection", undefined);
const $r = PA((e) => {
	return i.createElement(
		"div",
		{
			className: A_1(W.AppPartnerEventsBanner, "AppPartnerEventsBanner"),
		},
		i.createElement(X, {
			...e,
		}),
	);
});
var sn = an;
const on = new rn.wd("BasicPartnerEvents").Debug;
const ln = (e) => {
	const {
		index: t,
		event: r,
		bMakeAnchor: n,
		nItemWidth: a,
		nItemHeight: s,
		onItemFocused: o,
		navRef: l,
	} = e;
	const m = Ls();
	const p = n;
	const g = {
		width: a || undefined,
		height: s || undefined,
	};
	const y = i.useCallback(() => {
		on("Focused", r.GID, t);
		if (o) {
			o(t);
		}
	}, [o, t, r]);
	const S = i.useCallback((e) => {
		switch (e.detail.button) {
			case f.pR.DIR_UP:
			case f.pR.DIR_DOWN: {
				return true;
			}
		}
		return false;
	}, []);
	const w = br_1();
	const B = Qt_1(A.B7.BuildStoreAppURL(r.appid, "gamepadevent"));
	const v = d.tw.GetAppOverviewByAppID(r.appid);
	const I = v?.visible_in_game_list;
	const E = v?.BIsApplicationOrTool();
	const M = v?.BIsHardware();
	const T =
		r.appid == b.qF &&
		m &&
		i.createElement(
			"div",
			{
				className: sn.ChannelIndicator,
			},
			(0, Localize)(m.label + "_Channel"),
		);
	let R = I
		? () => {
				return w.App(r.appid);
			}
		: B;
	let k = "";
	if (M) {
		R = B;
		k = (0, Localize)("#Generic_ViewInStore");
	} else {
		k = E
			? I
				? (0, Localize)("#Generic_ViewInLibrary")
				: (0, Localize)("#Generic_ViewInStore")
			: I
				? (0, Localize)("#Generic_ViewGameDetails")
				: (0, Localize)("#Generic_ViewGameInStore");
	}
	return i.createElement(
		h.Z,
		{
			style: g,
			className: A_1(sn.BasicPartnerEventContainer, n && sn.Anchor),
			onGamepadDirection: S,
		},
		i.createElement(
			_.Qg,
			{
				style: g,
				className: sn.ScrollablePanel,
			},
			i.createElement(
				C.YZ,
				{
					className: sn.PartnerEventFocusable,
					navKey: r.GID,
					navRef: l,
					noFocusRing: true,
					focusable: true,
					onFocus: y,
					onOptionsActionDescription: k,
					onOptionsButton: R,
					fnScrollIntoViewHandler: () => {
						return true;
					},
				},
				false,
				i.createElement(Yr, {
					className: sn.BasicPartnerEvent,
					event: r,
					emoticonStore: e.emoticonStore,
					partnerEventStore: e.partnerEventStore,
					disableReadTracking: n,
					fnFilterImageURLsForKnownFailures:
						e.fnFilterImageURLsForKnownFailures,
					fnImageFailureCallback: e.fnImageFailureCallback,
					bDisableBroadcastPlayer: !p,
					additionalTypeAndDateElement: T,
					headerElement: i.createElement(cn, {
						overview: v,
					}),
				}),
			),
		),
	);
};
const cn = (e) => {
	const { overview: t } = e;
	if (t) {
		return i.createElement(
			"div",
			{
				className: sn.GameIconAndName,
			},
			i.createElement(m.z, {
				app: t,
				eAssetType: 4,
				className: sn.GameIcon,
			}),
			i.createElement(
				"div",
				{
					className: sn.GameName,
				},
				t.display_name,
			),
		);
	} else {
		return null;
	}
};
const mn = (e) => {
	const { nItemWidth: t, nItemHeight: r, bNewer: n, loader: a } = e;
	const s = {
		width: t || undefined,
		height: r || undefined,
	};
	const o = q3(() => {
		return n ? a.GetNewerState() : a.GetOlderState();
	});
	return i.createElement(
		"div",
		{
			className: sn.BasicPartnerEventContainer,
			style: s,
		},
		i.createElement(
			"div",
			{
				className: A_1(
					sn.ScrollablePanel,
					sn.Placeholder,
					o == Xr.EndOfContent && sn.EndOfContent,
					o == Xr.Loading && sn.Loading,
				),
			},
			i.createElement(
				h.Z,
				{
					className: sn.PartnerEventFocusable,
					style: s,
					focusable: false,
				},
				false,
				i.createElement("div", {
					className: A_1(
						sn.BasicPartnerEvent,
						sn.EventPlaceholder,
						W.PartnerEvent,
						W.InLibraryView,
					),
				}),
			),
		),
	);
};
const un = PA(function (e) {
	on("render BasicPartnerEventsPage", e.initialEvent.GID, e.appid);
	const t = 1000;
	const [r, n] = i.useState(null);
	const [a, s] = i.useState(0);
	const [o, l] = i.useState(0);
	const [c, m] = i.useState(t);
	const u = i.useCallback((e) => {
		if (e) {
			s(e.clientWidth);
			l(e.clientHeight);
		}
	}, []);
	i.useEffect(() => {
		const t = new Jr(e.partnerEventStore);
		n(t);
		if (!e.bShowOnlyInitialEvent) {
			t.InitAroundEvent(e.initialEvent, e.additionalParams);
		}
	}, [
		e.bShowOnlyInitialEvent,
		e.partnerEventStore,
		e.initialEvent,
		e.additionalParams,
	]);
	const d = e.bShowOnlyInitialEvent
		? [e.initialEvent]
		: r
			? r.GetEvents().slice()
			: [];
	if (!e.bShowOnlyInitialEvent && d.length > 0) {
		d.unshift(null);
		d.push(null);
	}
	on(
		"Events",
		d.length,
		r && r.GetNewerState(),
		r && r.GetOlderState(),
		d.map((e) => {
			return e && e.GID;
		}),
	);
	const A = d.findIndex((t) => {
		return t && t.GID == e.initialEvent.GID;
	});
	on("Anchor at", A, "of events", d.length);
	if (A != -1) {
		on(A, t, c);
		if (A != t - c) {
			on("Setting initial index to", t - c);
			m(t - A);
		}
	}
	const p = (e) => {
		on("Focused", e, "of", d.length, r.GetOlderState(), r.GetNewerState());
		if (e == 1 && r.GetNewerState() == Xr.Idle) {
			on("Loading more at beginning");
			r.LoadMoreAtBeginning();
		}
		if (e == d.length - 2 && r.GetOlderState() == Xr.Idle) {
			on("Loading more at end");
			r.LoadMoreAtEnd();
		}
	};
	const g = (t, n, a, s) => {
		on("Render item", (t -= c));
		if (!d[t]) {
			return i.createElement(mn, {
				index: t,
				bNewer: t <= 0,
				loader: r,
				event: undefined,
				bMakeAnchor: false,
				nItemWidth: n,
				nItemHeight: a,
				...e,
			});
		}
		const o = d[t];
		const l = o.GID == e.initialEvent.GID;
		return i.createElement(ln, {
			index: t,
			event: o,
			bMakeAnchor: l,
			nItemWidth: n,
			nItemHeight: a,
			onItemFocused: p,
			...e,
		});
	};
	const C = i.useCallback(
		(e) => {
			return a * 0.8;
		},
		[a],
	);
	const _ = (e) => {
		return d[(e -= c)] ? d[e].GID : "placeholder" + e;
	};
	const f = (e) => {
		on("fnCanFocus", (e -= c));
		return e > 0 && e < d.length - 1;
	};
	const b = c + 1;
	return i.createElement(
		h.Z,
		{
			className: sn.BasicPartnerEventsPage,
			onCancel: e.closeModal,
			ref: e.containerRef,
		},
		i.createElement(
			"div",
			{
				className: sn.InnerContainer,
				ref: u,
			},
			d.length &&
				i.createElement(
					en.C,
					{
						className: sn.PageableContainer,
						name: "xxx",
						bNoHeader: true,
						fnUpdateArrows: undefined,
					},
					(e, t) => {
						return i.createElement(tn.X, {
							name: "BasicPartnerEvents",
							className: sn.EventCarousel,
							ref: e,
							fnItemRenderer: g,
							fnGetColumnWidth: C,
							fnGetId: _,
							fnUpdateArrows: t,
							fnDoesItemTakeFocus: f,
							nIndexLeftmost: b,
							nNumItems: d.length + c,
							nItemMarginX: 0,
							nHeight: o,
							nItemHeight: o,
							scrollToAlignment: "center",
							initialColumn: A + c,
							enableBumperPaging: true,
							autoFocus: true,
						});
					},
				),
		),
	);
});
var dn;
export function z(e) {
	const t = rP();
	const r = br_1();
	return i.createElement(
		gn.k.Provider,
		{
			value: {
				fnSetURL: (e) => {
					return r.SteamWeb(e);
				},
			},
		},
		i.createElement(Cn, {
			...e,
			navigator: r,
			config: t,
		}),
	);
}
(function (e) {
	e[(e.AppDetails = 1)] = "AppDetails";
	e[(e.LibraryHome = 2)] = "LibraryHome";
})((dn ||= {}));
class Cn extends i.Component {
	constructor(e) {
		super(e);
		const t = this.LoadOrRequestEvent();
		this.state = {
			event: t,
		};
	}
	m_cancelSignal = s.CancelToken.source();
	LoadOrRequestEvent() {
		let e;
		if (this.props.initialEventID) {
			e = pn.IB.GetClanEventModel(this.props.initialEventID);
		}
		if (
			!e &&
			(this.props.initialEventID ||
				this.props.appid ||
				this.props.appid ||
				this.props.clanSteamID)
		) {
			this.LoadInitialEvent();
		}
		return e;
	}
	async LoadInitialEvent() {
		const e = await pn.IB.LoadAdjacentPartnerEvents(
			this.props.initialEventID,
			this.props.clanSteamID,
			this.props.appid,
			0,
			3,
			this.props.additionalParams,
			this.m_cancelSignal,
		);
		this.setState({
			event: e[0],
		});
	}
	componentDidUpdate(e) {
		if (
			(!this.props.initialEventID && !this.props.appid) ||
			(e.initialEventID == this.props.initialEventID &&
				e.appid == this.props.appid &&
				l(e.additionalParams, this.props.additionalParams))
		) {
			if (!!this.state.event && !this.props.appid && !this.props.clanSteamID) {
				this.setState({
					event: undefined,
				});
			}
		} else {
			const e = this.LoadOrRequestEvent();
			this.setState({
				event: e,
			});
		}
	}
	componentWillUnmount() {
		this.m_cancelSignal.cancel("LibraryAppPartnerEventsPage unmounting");
	}
	OnNavigateToApp() {
		this.props.navigator.App(this.props.appid);
	}
	BHasValidEvent() {
		let e = this.state.event;
		return (
			!!e &&
			(!this.props.appid || e.appid == this.props.appid) &&
			(!this.props.clanSteamID ||
				!this.props.clanSteamID.ConvertTo64BitString ||
				!this.props.clanSteamID.ConvertTo64BitString ||
				e?.clanSteamID?.ConvertTo64BitString() ==
					this.props.clanSteamID?.ConvertTo64BitString()) &&
			(!this.props.initialEventID || e.GID == this.props.initialEventID)
		);
	}
	render() {
		const e = this.state.event;
		if (this.BHasValidEvent()) {
			if (this.props.config?.IN_GAMEPADUI) {
				return i.createElement(un, {
					initialEvent: e,
					partnerEventStore: pn.IB,
					emoticonStore: An.Nb.EmoticonStore,
					closeModal: this.props.onClose,
					additionalParams: this.props.additionalParams,
					containerRef: this.props.containerRef,
				});
			} else {
				return i.createElement(
					"div",
					{
						style: {
							width: "100%",
							height: "100%",
						},
						ref: this.props.containerRef,
					},
					i.createElement(Qr, {
						initialEvent: e,
						additionalParams: this.props.additionalParams,
						partnerEventStore: pn.IB,
						emoticonStore: An.Nb.EmoticonStore,
						closeModal: this.props.onClose,
						onAppIconClick: this.props.showAppIcon && this.OnNavigateToApp,
						fnFilterImageURLsForKnownFailures:
							pn.dm.FilterImageURLsForKnownFailures,
						fnImageFailureCallback: pn.dm.ImageFailureCallback,
					}),
				);
			}
		} else {
			return null;
		}
	}
}
Cg([ie.oI], Cn.prototype, "OnNavigateToApp", null);
