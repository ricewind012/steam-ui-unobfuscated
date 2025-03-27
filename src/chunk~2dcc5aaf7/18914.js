import {
	Localize,
	LocalizePlural,
	LocalizeCalendarTime,
	CLocLanguageArray,
	LocalizeInlineReactPlural,
	LocalizeReact,
	LocalizeInlineReactWithFallback,
	LocalizeRtime32ToShorterDate,
} from "../../actual_src/utils/localization.js";

import { Seconds, GetUnixTime } from "../../actual_src/utils/time.js";
import { GetCookie, SetCookie } from "../../actual_src/utils/cookies.js";
import {
	ShuffleArray,
	FindAndRemove,
} from "../../actual_src/utils/arrayutils.js";
import {
	GetOwningWindowForEvent,
	GetTotalZoom,
} from "../../actual_src/utils/domutils.js";
import n, { Qt as Qt_1, jb, ut as ut_1, ZQ, vT, VT, Qx } from "./18057.js";
import i from "./70519.js";
import a from "./61294.js";
import s, { Di as Di_1 } from "./13925.js";
import o, { RP, LC, Qu as Qu_1, Un as Un_1, Sn as Sn_1 } from "./46422.js";
import l, { FN, dv, u6, jg } from "./43152.js";
import c from "./56970.js";
import m, { QR, qw, Wx } from "./89748.js";
import u, { q3 } from "./90095.js";
import d, { PA } from "./41230.js";
import A, {
	useCallback,
	useState,
	useRef,
	useEffect,
	useMemo,
} from "./63696.js";
import p, { zy, W6, W5, B6 } from "./49519.js";
import g from "./84252.js";
import h from "./55116.js";
import C from "./69164.js";
import _ from "./15181.js";
import f from "./64608.js";
import b from "./42318.js";
import y, { iE } from "./79421.js";
import S, { A as A_1 } from "./90765.js";
import w, { Qn as Qn_1, rP, Tc as Tc_1, Fd, CI, Pr as Pr_1 } from "./72476.js";
import B from "./85360.js";
import v from "./46285.js";
import I from "./329.js";
import M, { yq, LB } from "./93966.js";
import T from "./85243.js";
import R, { Xf, pw, mH } from "./31319.js";
import k, { h as h_1 } from "./15123.js";
import D from "./10975.js";
import N, { aE } from "./88750.js";
import F from "./46701.js";
import "./94790.js";
import G, {
	CH,
	hL,
	$$,
	l6,
	wY,
	Ue as Ue_1,
	xM,
	Z3,
	gc as gc_1,
	uN,
	w6,
	DF,
	AX,
	xA,
	QS,
} from "./52451.js";
import O from "./6276.js";
import x from "./10606.js";
import U, { iW, Wh, ez, Tc as Tc_3, Mi as Mi_2 } from "./31800.js";
import W, { Bx, xf, P4 } from "./55489.js";
import j, { O7 } from "./90242.js";
import q from "./81338.js";
import Q from "./46375.js";
import Z from "./39649.js";
import Y from "./51964.js";
import K from "./3289.js";
import X from "./20297.js";
import $ from "./59856.js";
import ee, { T as T_3 } from "./78057.js";
import te from "./20797.js";
import re from "./57665.js";
import ne from "./80478.js";
import ie from "./77163.js";
import ae from "./3651.js";
import se from "./2326.js";
import oe from "./15448.js";
import le from "./56262.js";
import ce from "./52470.js";
import me from "./71333.js";
import ue from "./57150.js";
import de from "./81863.js";
import Ae from "./22165.js";
import pe from "./81452.js";
import ge from "./38857.js";
import he, { ch } from "./12307.js";
import Ce from "./96000.js";
import fe, { T4 } from "./14663.js";
import be from "./59298.js";
import { SP, Ll as Ll_2, OU } from "./51076.js";
import Se, { Wm as Wm_2, er as er_2 } from "./56655.js";
import we, { VI, e_ as e } from "./34792.js";
import Be from "./87935.js";
import ve from "./1252.js";
import Ie from "./12750.js";
import Ee from "./7552.js";
import Me from "./53074.js";
import Te from "./9066.js";
import We from "./50350.js";
import Ve, {
	D7,
	oH as oH_2,
	K1,
	SA,
	Xp,
	ch as ch_2,
	we as we_2,
} from "./33572.js";
import He, { XI, Gn as Gn_2, h5, fm as fm_2 } from "./89193.js";
import je from "./61657.js";
import qe from "./2053.js";
import Ze, { $2 } from "./96680.js";
import { L$ } from "./42898.js";
import Je from "./30449.js";
import $e, { Co as Co_3, mM } from "./96593.js";
import et, { zq, WB, AH, Co as Co_1, jy, a_ as a_3, _D } from "./5808.js";
import tt from "./3475.js";
import rt, { lX } from "./31084.js";
import nt, { ck } from "./43014.js";
import it from "./22047.js";
import at from "./13743.js";
import st from "./35488.js";
import { pg } from "./13869.js";
import lt from "./79293.js";
import ct from "./46720.js";
import mt from "./72655.js";
import ut from "./61277.js";
import dt from "./19037.js";
import At from "./93681.js";
import gt from "./57472.js";
import ht from "./16251.js";
import Ct from "./11714.js";
import _t from "./75961.js";
import ft from "./10064.js";
import bt from "./13277.js";
import { V3, rO as rO_2 } from "./61518.js";
import nr from "./85399.js";
import { k1 } from "./13688.js";
import { tn as tn_2, br as br_2 } from "./18869.js";
import sr from "./93075.js";
import mr from "./81661.js";
import ur from "./91209.js";
import Ar from "./2092.js";
import _r, { ak, sf, Lg } from "./44846.js";
import { l as l_2 } from "./80254.js";
import br from "./78688.js";
import yr, { YQ, aH } from "./30496.js";
import Sr, { Lb, Uu as Uu_2, oH, LK, L4 } from "./48289.js";
import wr, { A as A_3 } from "./91486.js";
import { w as w_4 } from "./49455.js";
import vr from "./20566.js";
import Er from "./74491.js";
import Mr, { bJ } from "./3524.js";
import Pr from "./84194.js";
import { gb, FJ } from "./45967.js";
import xr from "./88696.js";
import Yr, { yX } from "./57016.js";
import Kr from "./12767.js";
import Xr from "./88341.js";
import Jr from "./26853.js";
import $r from "./88306.js";
import en, { R2, dZ, JS } from "./97893.js";
import tn, { dm as dm_2 } from "./34428.js";
import rn from "./92193.js";
import mn from "./85965.js";
import un from "./36464.js";
import dn from "./36563.js";
import An, { L2 } from "./83591.js";
import { t7 } from "./82594.js";
import gn from "./97510.js";
import hn from "./50376.js";
import fn from "./9826.js";
import Bn, { T as T_1 } from "./83399.js";
import vn from "./44750.js";
import { I as I_2 } from "./61416.js";
import Mn from "./5859.js";
import Tn, { Is as Is_2, l9, e8 } from "./5640.js";
import Rn, { I8 } from "./12176.js";
import kn from "./58663.js";
import Dn from "./48307.js";
import On from "./80222.js";
import { KV } from "./46382.js";
import { rV, Bn as Bn_2, hS } from "./85606.js";
import ui, { Ho as Ho_2 } from "./49265.js";
import di from "./95783.js";
import Ai from "./43691.js";
import gi from "./72905.js";
import hi from "./99731.js";
import Ci from "./84991.js";
import fi from "./2306.js";
import { lA } from "./50876.js";
import Ti from "./82023.js";
import Di from "./24418.js";
import Fi from "./46999.js";
import Oi from "./14883.js";
import { K_ as K_2 } from "./92749.js";
import qi from "./92475.js";
import ua from "./83957.js";
import Aa from "./31222.js";
import { H as H_2 } from "./16154.js";
import ha from "./69740.js";
import { Cg } from "./34629.js";
import { Fd as Fd_2 } from "./9731.js";
import { _4 } from "./58839.js";
import { Fv, MB, LG } from "./95877.js";
import { a9, H2, AX } from "./527.js";
import va from "./72706.js";
import Ua from "./55667.js";
import "./69412.js";
import "./79769.js";
import "./35268.js";
import "./36723.js";
import Wa, { PG } from "./10593.js";
import Va from "./4690.js";
import { b as b_2 } from "./59750.js";
import ja, { ru as ru_2, n9, bV, aL } from "./92059.js";
import { R7 } from "./11131.js";
import { Qt as Qt_3, os as os_2 } from "./89697.js";
import { m as m_2 } from "./39039.js";
import Ya from "./83599.js";
import Ka from "./31958.js";
import { E as E_2 } from "./52922.js";
import Ja, { Bk, WX, IH } from "./55444.js";
import $a from "./48130.js";
import { c as c_3 } from "./38837.js";
import rs from "./34036.js";
import ns from "./98995.js";
import is from "./7081.js";
import as from "./17231.js";
import ss from "./68608.js";
import os from "./8573.js";
import ls from "./78771.js";
import cs, { FV } from "./823.js";
import ms from "./74110.js";
import ds from "./79840.js";
import ps, { js as js_2, DW } from "./17613.js";
import { Nd } from "./15918.js";
import _Is from "./60367.js";
import Ms from "./86062.js";
import { M as M_2 } from "./19840.js";
import Ds from "./72993.js";
import Ns from "./83250.js";
import eo from "./57585.js";
import Co from "./86454.js";
import _o from "./10167.js";
import { Id } from "./77347.js";
import { bg } from "./68292.js";
import No from "./7817.js";
import Oo from "./87913.js";
import Po from "./36934.js";
import Lo from "./9133.js";
import Qo from "./49220.js";
import Zo from "./21105.js";
import Yo, { L as L_2 } from "./76319.js";
import Ko from "./25536.js";
import tl from "./19390.js";
import nl, { xZ } from "./33000.js";
import il from "./39400.js";
import al from "./61175.js";
import sl from "./33697.js";
import { RS, _Y } from "./22091.js";
import Ml from "./81994.js";
import Tl from "./39265.js";
import Rl from "./13741.js";
import Nl from "./94899.js";
import { r } from "./37499.js";
import Gl from "./75140.js";
import Ol from "./23644.js";
import Ll, { QM, xv, ED } from "./5822.js";
import Ul from "./23038.js";
import Wl from "./22004.js";
import Vl from "./26030.js";
import Ql from "./3824.js";
import Yl from "./75248.js";
import Kl, { Nm as Nm_2 } from "./14629.js";
import $l from "./36032.js";
import { Te as Te_2 } from "./55007.js";
import tc from "./6670.js";
import fc from "./10709.js";
import bc from "./40478.js";
import yc from "./13656.js";
import Sc from "./47060.js";
import vc from "./79905.js";
import Ic from "./33036.js";
import Ec from "./37086.js";
import Mc from "./64481.js";
import Rc from "./10481.js";
import kc from "./72345.js";
import Dc from "./60730.js";
import { xs as xs_2, Xs as Xs_2 } from "./34819.js";
import Lc, { j as j_2 } from "./32084.js";
import zc from "./82667.js";
import xc from "./76356.js";
import Wc, { DO, YN, eK, gn as gn_2 } from "./31144.js";
import Vc from "./81546.js";
import Hc from "./18831.js";
import { QP } from "./45264.js";
import Qc, { o as o_2 } from "./73259.js";
import Zc from "./38602.js";
import Yc from "./7455.js";
import "./17754.js";
import Kc, { BGameRecordingFeatureEnabled } from "./4069.js";
import { ek } from "./42983.js";
import _m from "./74751.js";
import wm from "./21110.js";
import vm from "./81668.js";
import Im from "./58254.js";
import { Ze as Ze_2, LU } from "./54102.js";
import { ho as ho_2 } from "./67784.js";
import "./16647.js";
import Dm from "./31627.js";
import Nm from "./36757.js";
import Fm, { Nx } from "./71033.js";
import { PU } from "./33706.js";
import Om from "./90389.js";
import { a as a_1 } from "./37619.js";
import Hm from "./57565.js";
import { Qf } from "./32700.js";
import qm from "./53622.js";
import { w as w_1 } from "./98385.js";
import { x5 } from "./95979.js";
import Ym from "./11555.js";
import { $ as $_2 } from "./6232.js";
import ru, { K1 as K1_2 } from "./91703.js";
import { C2 } from "./89411.js";
import iu, { Xy } from "./22969.js";
import { ML } from "./45921.js";
import { Tr as Tr_2 } from "./74416.js";
import ou from "./78325.js";
import { rO } from "./88724.js";
import cu, { sd as sd_2 } from "./73375.js";
import mu from "./91369.js";
import uu from "./56461.js";
import { k6, on as on_2, Y$ } from "./60115.js";
import Tu from "./79476.js";
import Ru from "./17016.js";
import ku from "./16403.js";
import { w as w_2 } from "./10501.js";
import Pu from "./91435.js";
import { c as c_1 } from "./80553.js";
import zu from "./93440.js";
import { Qc as Qc_2 } from "./87546.js";
import Qu from "./20326.js";
import Zu from "./60712.js";
import Ku from "./57421.js";
import { Fj } from "./736.js";
import Ju from "./59718.js";
import $u from "./223.js";
import td from "./48197.js";
const E = I;
const P = O;
function L(e) {
	const { ActiveMenu: t } = e;
	const r = A.useCallback(() => {
		t?.OnCancel();
	}, [t]);
	A.useEffect(() => () => t?.Hide(), [t]);
	let n = [];
	let i = null;
	q3(() => {
		for (let e = t; e && e.visible; e = e.submenu) {
			n.push(
				A.createElement(z, {
					key: e.key,
					instance: e,
				}),
			);
			i = e.label;
		}
	});
	const a = A.useCallback(
		(e) => {
			if (e.currentTarget == e.target) {
				r();
			}
		},
		[r],
	);
	return A.createElement(
		F.x_,
		{
			padding: "none",
		},
		A.createElement(
			"div",
			{
				onClick: a,
				className: A_1("BasicUIContextMenu", P.BasicContextMenuModal),
			},
			i &&
				A.createElement(
					A.Fragment,
					null,
					A.createElement(
						"div",
						{
							className: P.BasicContextMenuHeader,
						},
						i,
					),
				),
			A.createElement(
				C.Z,
				{
					className: P.BasicContextMenuContainer,
					onCancelButton: r,
					onClick: a,
				},
				n,
			),
		),
	);
}
function z(e) {
	const { instance: t } = e;
	const r = Qn_1();
	const n = A.useCallback(() => {
		if (r) {
			D.eZ.PlayNavSound(D.PN.FailedNav);
		}
	}, [r]);
	let i = A.useMemo(
		() => ({
			instance: t,
			styles: P,
			presentation: 1,

			callbacks: {
				onDisabledItemSelected: n,
			},
		}),
		[t, n],
	);
	return A.createElement(
		b.tH,
		null,
		A.createElement(
			N.P.Provider,
			{
				value: i,
			},
			t.ReactElement,
		),
	);
}
function V(e) {
	const { managerOverride: t } = e;
	const r = h_1();
	const n = t ?? r;
	const i = CH();
	hL(n.OnMenusChanged, i);
	return A.createElement(
		x.EN,
		{
			active: !!n.ActiveMenu,
		},
		A.createElement(H, {
			ActiveMenu: n.ActiveMenu,
		}),
	);
}
const H = A.forwardRef((e, t) => {
	const { ActiveMenu: r } = e;
	Bx(T.I5.Overlay, "BasicUIContextMenuModal");
	iW(true, "BasicUIContextMenuModal");
	Xf("hidden", "BasicUIContextMenuModal");
	Wh(null, "BasicUIContextMenuModal");
	ez(true, "BasicUIContextMenuModal");
	return A.createElement(L, {
		ActiveMenu: r,
	});
});
const J = X;
function Re(e) {
	const { overview: t } = e;
	const r = Wm_2(t.steam_deck_compat_category);
	const n =
		t.steam_deck_compat_category === 0 || t.steam_deck_compat_category === 1;
	if (t.BIsModOrShortcut()) {
		return null;
	} else if (w.TS.ON_DECK) {
		return A.createElement(r, {
			className: n && J.InvertFocusedIcon,
		});
	} else {
		return null;
	}
}
function ke(e) {
	const t = iE();
	const [r, n] = SP("AppDetailsTabsActive", false);
	const i = A.useRef(undefined);
	const a = A.useRef(undefined);
	const s = A.useRef(true);
	const o = q3(
		() => w.TS.ON_DECK && we.rV.storePreferences.provide_deck_feedback == 0,
	);
	const l = q3(() =>
		Ie.yX.BShouldPromptForDeckCompatibilityFeedback(e.overview.appid),
	);
	const c = A.useCallback(() => {
		n(false);
		t?.ScrollToTop();
	}, [t, n]);
	const m = A.useCallback(() => {
		a.current.FocusActionButton();
	}, []);
	const d = A.useCallback(
		(e) => {
			if (e) {
				n(e);
			}
		},
		[n],
	);
	A.useEffect(() => {
		const e = s.current;
		s.current = false;
		let n = i.current;
		if (!r || !t || !t || !n) {
			return;
		}
		const a = (e) => {
			let r =
				n.getBoundingClientRect().top + t.scrollTop - parseInt(J.headerPadding);
			t.ScrollTo(r, e);
		};
		if (e) {
			window.setTimeout(() => a("auto"), 1);
		} else {
			a("smooth");
		}
	}, [t, i, r]);
	return A.createElement(
		C.Z,
		{
			className: J.AppDetailsRoot,
		},
		A.createElement(Oe, {
			...e,
			onNav: c,
			ref: a,
		}),
		A.createElement(le.sD, {
			...e,
			onFocus: c,
		}),
		A.createElement(
			C.Z,
			{
				onFocusWithin: c,
			},
			o && A.createElement(De, null),
			!o &&
				l &&
				A.createElement(Ne, {
					...e,
				}),
		),
		A.createElement(
			C.Z,
			{
				ref: i,
				className: J.AppDetailsContainer,
				onFocusWithin: d,
			},
			A.createElement(Fe, {
				fnOnCancelFromTabHeader: m,
				details: e.details,
				overview: e.overview,
				setSections: e.setSections,
				bSuppressTransition: e.bSuppressTransition,
				parentComponent: e.parentComponent,
			}),
		),
	);
}
function De() {
	const e = Qt_1(
		`${Be.B7.GetStoreURL()}news/app/1675200/view/3131696829170735771`,
	);
	async function t(e) {
		if (e == 2) {
			Ie.yX.ClearDeckCompatibilityFeedbackAskList();
		}
		const t = `${Be.B7.GetStoreURL()}account/savepreferences`;
		const r = new FormData();
		r.append("sessionid", w.TS.SESSIONID);
		r.append("provide_deck_feedback", `${e}`);
		try {
			let e = await ve.g.post(t, r, {
				retrycount: 1,
			});
			if (!e.success || e.success != 1) {
				throw e.success;
			}
			return e.success;
		} catch (e) {
			console.error("Setting permission failed", e);
		}
	}
	return A.createElement(
		C.Z,
		{
			className: J.DeckVerifiedFeedbackContainer,
		},
		A.createElement(
			"div",
			{
				className: J.DeckVerifiedFeedbackQuestion,
			},
			Localize("#SteamDeckFeedback_UserPrefence_Question"),
		),
		A.createElement(
			C.Z,
			{
				noFocusRing: true,
				onActivate: () => t(1),
				className: J.DeckVerifiedFeedbackButton,
				focusClassName: J.Focused,
			},
			Localize("#SteamDeckFeedback_UserPrefence_Yes"),
		),
		A.createElement(
			C.Z,
			{
				noFocusRing: true,
				onActivate: () => t(2),
				className: J.DeckVerifiedFeedbackButton,
				focusClassName: J.Focused,
			},
			Localize("#SteamDeckFeedback_UserPrefence_No"),
		),
		A.createElement(
			j.Ii,
			{
				noFocusRing: true,
				className: J.DeckVerifiedFeedbackButton,
				focusClassName: J.Focused,
				onClick: e,
			},
			Localize("#SteamDeckFeedback_UserPrefence_LearnMore"),
		),
	);
}
function Ne(e) {
	const [t, r] = A.useState("");
	function n(t) {
		r(
			t == 3
				? Localize(
						"#SteamDeckVerified_Feedback_Confirmation_Ignore",
						e.overview.display_name,
					)
				: Localize("#SteamDeckVerified_Feedback_Confirmation"),
		);
		window.setTimeout(
			() => Ie.yX.SetDeckCompatibilityFeedback(e.overview.appid, t),
			4000,
		);
	}
	if (t !== "") {
		return A.createElement(
			C.Z,
			{
				className: J.DeckVerifiedFeedbackConfirmationContainer,
			},
			A.createElement(
				"div",
				{
					className: J.DeckVerifiedFeedbackConfirmation,
				},
				t,
			),
		);
	} else {
		return A.createElement(
			C.Z,
			{
				className: J.DeckVerifiedFeedbackContainer,
			},
			A.createElement(
				"div",
				{
					className: J.DeckVerifiedFeedbackQuestion,
				},
				A.createElement(Ee.UN, {
					category: e.overview.steam_deck_compat_category,
					appName: e.overview.display_name,
					descriptionToken: "#SteamDeckVerified_Feedback_Question",
				}),
			),
			A.createElement(
				C.Z,
				{
					noFocusRing: true,
					onActivate: () => n(1),
					className: J.DeckVerifiedFeedbackButton,
					focusClassName: J.Focused,
				},
				Localize("#SteamDeckVerified_Feedback_Agree"),
			),
			A.createElement(
				C.Z,
				{
					noFocusRing: true,
					onActivate: () => n(2),
					className: J.DeckVerifiedFeedbackButton,
					focusClassName: J.Focused,
				},
				Localize("#SteamDeckVerified_Feedback_Disagree"),
			),
			A.createElement(
				C.Z,
				{
					noFocusRing: true,
					onActivate: () => n(3),
					className: J.DeckVerifiedFeedbackButton,
					focusClassName: J.Focused,
				},
				Localize("#SteamDeckVerified_Feedback_Ignore"),
			),
		);
	}
}
function Fe(e) {
	const { fnOnCancelFromTabHeader: t, ...r } = e;
	let i = ((e) => {
		const {
			parentComponent: t,
			details: r,
			setSections: n,
			bSuppressTransition: i,
			overview: a,
		} = e;
		return A.useMemo(
			() => [
				{
					id: "WhatsNew",
					title: "#AppDetails_Tab_Activity",
					content: A.createElement(
						Ue,
						{
							name: "activity",
							parent: t,
						},
						A.createElement(Pe, {
							setSections: n,
							details: r,
							overview: a,
							parentComponent: t,
						}),
					),
				},
				{
					id: "YourStuff",
					title: "#AppDetails_Tab_YourStuff",
					content: A.createElement(
						Ue,
						{
							name: "achievements",
							parent: t,
						},
						A.createElement(Le, {
							setSections: n,
							details: r,
							overview: a,
						}),
					),
					feature: 3,
				},
				{
					id: "Community",
					title: "#AppDetails_Tab_Community",
					content: A.createElement(
						Ue,
						{
							name: "friends",
							parent: t,
						},
						A.createElement(ze, {
							setSections: n,
							details: r,
							overview: a,
						}),
					),
					feature: 2,
				},
				{
					id: "GameInfo",
					title: "#AppDetails_Tab_GameInfo",
					renderTabAddon: () =>
						A.createElement(Re, {
							overview: a,
						}),
					content: A.createElement(
						Ue,
						{
							name: "info",
							parent: t,
						},
						A.createElement(xe, {
							setSections: n,
							details: r,
							overview: a,
							bSuppressTransition: i,
						}),
					),
				},
			],
			[i, r, a, t, n],
		);
	})(r);
	const a = e.details.unAppID;
	const { onShowTab: s, strActiveTab: o } = ch(
		useCallback((e, t) => n.BV.GamepadUI.App.Tab(t, e), []),
		{
			context: a,
		},
	);
	return A.createElement(he.xC, {
		canBeHeaderBackground: "on-outer-scroll",
		tabs: i,
		activeTab: o,
		onShowTab: s,
		autoFocusContents: false,
		onCancelFromTabHeader: t,
	});
}
const Ge = A.forwardRef((e, t) =>
	A.createElement(
		C.Z,
		{
			className: J.ActionRow,
		},
		A.createElement(
			C.Z,
			{
				className: J.ActionButtonAndStatusPanel,
			},
			A.createElement(te.aV, {
				bShowStreamingSelector: true,
				overview: e.overview,
				className: J.AppActionButton,
				ref: t,
			}),
			A.createElement(le.qj, {
				overview: e.overview,
				details: e.details,
				statusPanelType: 2,
			}),
		),
		A.createElement(le.uy, {
			overview: e.overview,
			details: e.details,
			onSeek: undefined,
			statusPanelType: 1,
		}),
		A.createElement(
			C.Z,
			{
				className: J.AppButtons,
			},
			A.createElement(le.k1, {
				overview: e.overview,
				details: e.details,
			}),
			A.createElement(le.h2, {
				...e,
			}),
		),
	),
);
const Oe = A.forwardRef((e, t) => {
	const { onNav: r, ...n } = e;
	return A.createElement(
		C.Z,
		{
			className: J.PlaySection,
			onFocusWithin: (e) => e && r(),
		},
		A.createElement(Ge, {
			...n,
			ref: t,
		}),
		A.createElement(le.BA, {
			...n,
		}),
	);
});
function Pe(e) {
	return A.createElement(
		A.Fragment,
		null,
		e.setSections.has("friends") &&
			A.createElement(se.gr, {
				details: e.details,
			}),
		e.setSections.has("postgamesummary") &&
			A.createElement(Me.T, {
				details: e.details,
			}),
		e.setSections.has("spotlightdemo") &&
			A.createElement(ge.Be, {
				overview: e.overview,
				details: e.details,
			}),
		false,
		e.setSections.has("spotlightreview") &&
			A.createElement(ge.Cz, {
				parent: e.details,
				overview: e.overview,
				onSeek: e.parentComponent.SeekToSection,
			}),
		e.setSections.has("friends") &&
			A.createElement(se.w4, {
				details: e.details,
			}),
		e.setSections.has("activity") &&
			A.createElement(ne.W, {
				appid: e.details.unAppID,
			}),
		e.setSections.has("timedtrialbanner") &&
			A.createElement(de.P, {
				overview: e.overview,
				details: e.details,
			}),
	);
}
function Le(e) {
	return A.createElement(
		A.Fragment,
		null,
		e.setSections.has("achievements") &&
			A.createElement(re.Jq, {
				details: e.details,
			}),
		e.setSections.has("cards") &&
			A.createElement(Ae.on, {
				details: e.details,
			}),
		e.setSections.has("dlc") &&
			A.createElement(ae.Kf, {
				details: e.details,
				showRemainder: true,
			}),
		e.setSections.has("workshop") &&
			A.createElement(pe.y, {
				details: e.details,
			}),
		e.setSections.has("screenshots") &&
			A.createElement(ue.E, {
				overview: e.overview,
				details: e.details,
			}),
		e.setSections.has("review") &&
			A.createElement(me.h, {
				details: e.details,
				overview: e.overview,
			}),
		e.setSections.has("notes") &&
			A.createElement(Te.E, {
				overview: e.overview,
				details: e.details,
			}),
	);
}
function ze(e) {
	return (
		e.setSections.has("community") &&
		A.createElement(ie.w, {
			appid: e.overview.appid,
		})
	);
}
function xe(e) {
	const t = Ce.md.GetCollectionListForAppID(e.details.unAppID);
	const r = t.map((e) =>
		A.createElement(fe.F9, {
			bStartFocused: false,
			key: e.id,
			collection: e,
			eCoverSize: 2,
		}),
	);
	const n = iE();
	const i = ee.H.BIsWorkshopVisible(e.details);
	let a = t.length > 0;
	return A.createElement(
		C.Z,
		{
			className: J.GameInfoContainer,
		},
		A.createElement(oe.b, {
			concise: false,
			overview: e.overview,
			details: e.details,
			expand: true,
			collapsible: false,
			suppressTransition: e.bSuppressTransition,
		}),
		A.createElement(
			C.Z,
			{
				className: J.GameInfoQuickLinks,
			},
			A.createElement(ce.Qd, {
				overview: e.overview,
				details: e.details,
				workshopVisible: i,
				marketPresence: ee.H.BHasMarketPresence(e.details),
			}),
		),
		a &&
			n &&
			A.createElement(
				C.Z,
				{
					className: J.GameInfoCollections,
				},
				A.createElement(
					"div",
					{
						className: J.CollectionsHeader,
					},
					Localize("#AppDetails_GameInfo_CollectionsHeader"),
				),
				A.createElement(be.i, {
					...fe.V$,
					scaleGridItems: 1,
					renderOutsideRows: 2,
					paddingLeft: 0,
					paddingRight: 0,
					gridClassName: J.Grid,
					scrollElement: n.Element,
					childElements: r,
					name: "GameInfo Collections",
				}),
			),
	);
}
function Ue(e) {
	return A.createElement(
		"div",
		{
			className: J.AppDetailsContent,
		},
		A.createElement(
			b.tH,
			null,
			A.createElement(
				$.UL,
				{
					name: e.name,
					parent: e.parent,
				},
				e.children,
			),
		),
	);
}
const Qe = qe;
const Ke = {
	m_pchExistingText: "",
	m_bOpen: false,
	m_dwPID: 0,
	m_dwOverlayPID: 0,
	m_hPipe: 0,
	m_pchDescription: "",
	m_unCharMax: 0,
	m_bSubmitted: false,
	m_eInputMode: 0,
	m_unSubmittedText: 0,
	m_eLineInputMode: 0,
	nAppID: 0,
};
const Xe = PA(() => {
	const e = RP();
	const t = $2();
	const r = zy().state;
	const i = {
		...Ke,
		...(r || {}),
	};
	const [a, s] = A.useState(e);
	const l = i.m_pchExistingText;
	const [c, m] = A.useState(l);
	const u = A.useRef(undefined);
	if (e != null && e != a) {
		s(e);
	}
	const d = XI((e) => {
		m(e.target.value);
	});
	const g = A.useRef(false);
	const h = yq();
	const _ = A.useCallback(
		(e, t) => {
			if (!g.current) {
				g.current = true;
				SteamClient.Input.SetGamepadKeyboardText(e, t);
				h();
			}
		},
		[h],
	);
	const b = XI(() => _(true, c));
	const y = XI(() => _(false, c));
	const w = i.m_eLineInputMode == 0;
	D7().SetDismissOnEnterKey(w);
	let B = w ? "text" : "textarea";
	if (i.m_eInputMode != 0) {
		B = "password";
	}
	const { fnRestartTimer: v } = L$(
		10,
		() => u.current?.TakeFocusAndShowKeyboard(),
		false,
		false,
	);
	A.useEffect(() => {
		v();
		return () => {
			if (!g.current) {
				SteamClient.Input.SetGamepadKeyboardText(false, "");
			}
		};
	}, [v]);
	pw();
	LC();
	if (t && !t.BRouteMatch(n.BV.GamepadUI.GameAPIOSK())) {
		return null;
	} else {
		return A.createElement(
			We.Jr,
			null,
			A.createElement(
				f.G5,
				null,
				A.createElement(
					x.x_,
					{
						className: Qe.NoHeaderPadding,
					},
					A.createElement(
						f.U9,
						{
							classNameContent: Qe.TopAligned,
							style: {
								minWidth: 300,
							},
						},
						A.createElement(
							C.Z,
							{
								onButtonDown: (e) => {
									if (
										e.detail.button == je.pR.CANCEL ||
										e.detail.button == je.pR.STEAM_GUIDE
									) {
										y();
										e.preventDefault();
										e.stopPropagation();
									}
								},
							},
							i.m_pchDescription &&
								i.m_pchDescription.length > 0 &&
								A.createElement(f.Y9, null, " ", i.m_pchDescription, " "),
							w &&
								A.createElement(f.pd, {
									refKeyboardHandle: u,
									label: Localize("#AppOverlayGameAPIOSK_Title"),
									type: B,
									value: c,
									maxLength: i.m_unCharMax,
									autoFocus: true,
									onEnterKeyPress: w ? b : undefined,
									strEnterKeyLabel: w
										? Localize("#AppOverlayGameAPIOSK_Submit")
										: undefined,
									onChange: d,
								}),
							!w &&
								A.createElement(
									"div",
									{
										className: Qe.TextareaWrapper,
									},
									A.createElement(
										"label",
										null,
										A.createElement(
											"div",
											{
												className: "DialogLabel",
											},
											Localize("#AppOverlayGameAPIOSK_Title"),
										),
									),
									A.createElement(j.dO, {
										className: A_1(Qe.BasicTextInput, Qe.Textarea),
										refKeyboardHandle: u,
										value: c,
										maxLength: i.m_unCharMax,
										autoFocus: true,
										noFocusRing: true,
										onChange: (e) => m(e.target.value),
									}),
								),
							A.createElement(
								f.wi,
								null,
								A.createElement(f.CB, {
									focusButton: "primary",
									onOK: b,
									strOKText: Localize("#AppOverlayGameAPIOSK_Submit"),
									onCancel: y,
								}),
							),
						),
					),
				),
			),
		);
	}
});
function pt(e) {
	return Object.values(e)
		.filter((e) => typeof e == "number")
		.map((e) => e);
}
function yt(e) {
	const { setting: t, visible: r = true, ...n } = e;
	const [i, a] = VI(t);
	if (r) {
		return A.createElement(bt.j, {
			currentKey: i,
			onSetKey: a,
			...n,
		});
	} else {
		return null;
	}
}
const wt = () => A.createElement("div", null);
const Bt = () => A.createElement("div", null);
function vt(e) {
	const t = [
		{
			data: 1,
			label: "One",
		},
		{
			data: 2,
			label: "Two",
		},
		{
			data: 3,
			label: "Three",
		},
		{
			data: 4,
			label: "Four",
		},
	];
	const [r, n] = A.useState(null);
	const i = ((e) => {
		const t = Math.round(e);
		const [r, n] = A.useState(t);
		A.useEffect(() => n(t), [t, e]);
		A.useEffect(() => {
			if (r <= 0) {
				return () => {};
			}
			const e = setTimeout(() => n(r - 1), 1000);
			return () => clearTimeout(e);
		}, [r]);
		return r;
	})(3);
	return A.createElement(
		f.nB,
		null,
		A.createElement(f.Vb, {
			label: "Stateful Dropdown Field",
			rgOptions: t,
			selectedOption: 2,
			strDefaultLabel: "Select a value",
		}),
		A.createElement(
			f.BC,
			{
				label: "Externally-Driven Dropdown Fields",
				description:
					"As most dropdowns are, these two are driven externally by the same data source.",
				alignItems: "right",
			},
			A.createElement(f.ZU, {
				rgOptions: t,
				onChange: (e) => n(e?.data),
				selectedOption: r,
				strDefaultLabel: "Select a value",
			}),
			A.createElement(f.ZU, {
				rgOptions: t,
				onChange: (e) => n(e?.data),
				selectedOption: r,
				strDefaultLabel: "Select a value",
			}),
		),
		A.createElement(f.Vb, {
			label: "Dropdown with Async Options",
			description: i > 0 ? `${i} seconds left...` : "Loaded options.",
			rgOptions: i == 0 ? t : undefined,
			selectedOption: 3,
			strDefaultLabel: "Select a value",
		}),
		A.createElement(f.Vb, {
			label: "Nested Dropdown Field",
			rgOptions: [
				{
					data: 1,
					label: "One",
				},
				{
					data: 2,
					label: "Two",
				},
				{
					data: 3,
					label: "Three",
				},
				{
					data: 4,
					label: "Four",
				},
				{
					label: "Fruits",
					options: [
						{
							data: 10,
							label: "Apple",
						},
						{
							data: 11,
							label: "Banana",
						},
						{
							data: 12,
							label: "Cranberry",
						},
					],
				},
				{
					label: "Colors",
					options: [
						{
							label: "Warm Colors",
							options: [
								{
									data: 20,
									label: "Red",
								},
								{
									data: 21,
									label: "Orange",
								},
								{
									data: 22,
									label: "Yellow",
								},
							],
						},
						{
							label: "Cool Colors",
							options: [
								{
									data: 30,
									label: "Blue",
								},
								{
									data: 31,
									label: "Green",
								},
								{
									data: 32,
									label: "Teal",
								},
							],
						},
					],
				},
			],
			selectedOption: 3,
			strDefaultLabel: "Select a value",
		}),
		A.createElement(f.Vb, {
			disabled: true,
			label: "Disabled Dropdown",
			rgOptions: t,
			selectedOption: 2,
		}),
	);
}
const It = (e) =>
	A.createElement(
		f.$n,
		{
			onClick: (t) => lX(e.children, t.currentTarget, e.positionOptions),
		},
		e.title,
	);
function Et(e) {
	const [t, r] = A.useState(null);
	const n = $2();
	const i = Qn_1();
	const a = n.BrowserWindow;
	return A.createElement(
		f.nB,
		null,
		A.createElement(f.lr, null, "Context Menus"),
		A.createElement(
			f.BC,
			{
				alignItems: "right",
			},
			A.createElement(
				It,
				{
					title: "Simple Menu",
				},
				A.createElement(
					N.tz,
					{
						label: "Simple Menu",
					},
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item One",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Two",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Three",
					),
				),
			),
			A.createElement(
				It,
				{
					title: "Deeply Nested",
				},
				A.createElement(
					N.tz,
					null,
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Single Item",
					),
					A.createElement(
						N.Vs,
						{
							label: "Submenu One",
						},
						A.createElement(
							N.Vs,
							{
								label: "Submenu Two",
							},
							A.createElement(
								N.Vs,
								{
									label: "Submenu Three",
								},
								A.createElement(
									N.Vs,
									{
										label: "Submenu Four",
									},
									A.createElement(
										N.kt,
										{
											onSelected: () => {},
										},
										"A Final Single Item",
									),
								),
							),
						),
						A.createElement(
							N.kt,
							{
								onSelected: () => {},
							},
							"Another Single Item",
						),
					),
				),
			),
			A.createElement(
				It,
				{
					title: "Confirmation Example",
				},
				A.createElement(
					N.tz,
					{
						label: "Are you sure?",
					},
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Yes",
					),
				),
			),
			A.createElement(
				It,
				{
					title: "AppActionsMenu (Portal 2)",
					positionOptions: {
						...zq(),
						bOverlapHorizontal: true,
						bOverlapVertical: false,
					},
				},
				A.createElement(et.uU, {
					overview: $e.tw.GetAppOverviewByAppID(620),
					client: "selected",
					launchSource: 100,
					bInGamepadUI: i,
					ownerWindow: n?.BrowserWindow,
				}),
			),
			A.createElement(
				It,
				{
					title: "Longboi (no title)",
				},
				A.createElement(
					N.tz,
					null,
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item One",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Two",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Three",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Four",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Five",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Six",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Seven",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Eight",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Nine",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Ten",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Eleven",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Twelve",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Thirteen",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Fourteen",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Fifteen",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Sixteen",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Seventeen",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Eighteen",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Nineteen",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Item Twenty",
					),
					A.createElement(N.K5, null),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Wow, so long",
					),
				),
			),
			A.createElement(
				It,
				{
					title: "Longboi (long title)",
				},
				A.createElement(
					N.tz,
					{
						title: "LONG",
						label:
							"This context menu has a long long name because it likes to tell stories of quick brown foxes jumping over lazy dogs",
					},
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"Cool, Thanks",
					),
					A.createElement(N.K5, null),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"The",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"quick",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"brown",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"fox",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"jumps",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"over",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"the",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"lazy",
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => {},
						},
						"dog",
					),
				),
			),
		),
		A.createElement(f.lr, null, "Dialogs"),
		A.createElement(
			f.BC,
			{
				alignItems: "right",
				description: t && `Result from last dialog: ${t}`,
			},
			A.createElement(
				Rt,
				{
					title: "OK/Cancel Dialog",
					ownerWindow: a,
					onResult: r,
				},
				A.createElement(kt, null),
			),
			A.createElement(
				Rt,
				{
					title: "GenericConfirmDialog Dialog",
					ownerWindow: a,
					onResult: r,
				},
				A.createElement(x.o0, {
					strTitle: "Generic Confirm Dialog",
				}),
			),
			A.createElement(
				Rt,
				{
					title: "Text Prompt",
					ownerWindow: a,
					onResult: r,
				},
				A.createElement(Dt, null),
			),
			A.createElement(
				Rt,
				{
					title: "Empty Dialog",
					ownerWindow: a,
					onResult: r,
				},
				A.createElement(x.eV, null),
			),
			A.createElement(Tt, null),
			A.createElement(Mt, null),
			A.createElement(
				Rt,
				{
					title: "Non-Interactive Dialog",
					ownerWindow: a,
					onResult: r,
				},
				A.createElement(
					x.eV,
					null,
					A.createElement(
						f.Y9,
						null,
						"This is the header of a mostly empty dialog.",
					),
					A.createElement(f.a3, null, "Not much else to see."),
				),
			),
			A.createElement(
				Rt,
				{
					title: "Long Non-Interactive Dialog",
					ownerWindow: a,
					onResult: r,
				},
				A.createElement(
					x.eV,
					null,
					A.createElement(
						f.Y9,
						null,
						"This is the header of a long empty dialog.",
					),
					A.createElement(
						f.a3,
						null,
						((e, t) => {
							const r = t - e + 1;
							return Array.from(
								{
									length: r,
								},
								(t, r) => e + r,
							);
						})(1, 20).map((e) =>
							A.createElement(
								A.Fragment,
								{
									key: e,
								},
								"This is line ",
								e,
								".",
								A.createElement("br", null),
								A.createElement("br", null),
							),
						),
					),
				),
			),
		),
	);
}
function Mt(e) {
	const t = Co_3(440);
	const r = Co_3(570);
	const n = $2().BrowserWindow;
	const i = A.useCallback(() => {
		console.log("kill and launch");
	}, []);
	const a = A.useCallback(() => {
		console.log("launch both");
	}, []);
	const s = A.useCallback(() => {
		console.log("cancel");
	}, []);
	const o = A.useCallback(() => {
		const e = A.createElement(te.Iy, {
			launchApp: r,
			otherRunningGames: [t],
			fnKillAndLaunch: i,
			fnLaunchBoth: a,
			fnCancelLaunch: s,
		});
		pg(e, n, {});
	}, [r, t, i, a, s, n]);
	return A.createElement(
		f.$n,
		{
			onClick: o,
		},
		"Launch Multiple Games Dialog",
	);
}
function Tt(e) {
	const [t, r] = SP("ModalScrollPanelTest", false);
	return A.createElement(
		A.Fragment,
		null,
		A.createElement(
			x.EN,
			{
				active: t,
			},
			A.createElement(
				x.x_,
				null,
				A.createElement(
					h.q,
					null,
					A.createElement(
						C.Z,
						{
							style: {
								display: "flex",
								flexDirection: "column",
								minHeight: 0,
								flex: 1,
							},
							onCancel: () => r(false),
						},
						A.createElement(
							mt.f7,
							{
								style: {
									flex: 1,
									minHeight: 0,
									padding: "12px",
								},
								focusable: true,
								autoFocus: true,
							},
							A.createElement("h2", null, "About This Game"),
							"Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008.",
							A.createElement("br", null),
							A.createElement("br", null),
							"                    This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.",
							A.createElement("br", null),
							A.createElement("br", null),
							"                    You'll play as one of four new survivors armed with a wide and devastating array of classic and upgraded weapons. In addition to firearms, you'll also get a chance to take out some aggression on infected with a variety of carnage-creating melee weapons, from chainsaws to axes and even the deadly frying pan.",
							A.createElement("br", null),
							A.createElement("br", null),
							"                    You'll be putting these weapons to the test against (or playing as in Versus) three horrific and formidable new Special Infected. You'll also encounter five new uncommon common infected, including the terrifying Mudmen.",
							A.createElement("br", null),
							A.createElement("br", null),
							"                    Helping to take L4D's frantic, action-packed gameplay to the next level is AI Director 2.0. This improved Director has the ability to procedurally change the weather you'll fight through and the pathways you'll take, in addition to tailoring the enemy population, effects, and sounds to match your performance. L4D2 promises a satisfying and uniquely challenging experience every time the game is played, custom-fitted to your style of play.",
							A.createElement("br", null),
							A.createElement("br", null),
							"                    ",
							A.createElement(
								"ul",
								{
									className: "bb_ul",
								},
								A.createElement(
									"li",
									null,
									"Next generation co-op action gaming from the makers of Half-Life, Portal, Team Fortress and Counter-Strike.",
									A.createElement("br", null),
									A.createElement("br", null),
									"                    ",
								),
								A.createElement(
									"li",
									null,
									"Over 20 new weapons & items headlined by over 10 melee weapons – axe, chainsaw, frying pan, baseball bat – allow you to get up close with the zombies",
									A.createElement("br", null),
									A.createElement("br", null),
									"                    ",
								),
								A.createElement(
									"li",
									null,
									"New survivors. New Story. New dialogue. ",
									A.createElement("br", null),
									A.createElement("br", null),
									"                    ",
								),
								A.createElement(
									"li",
									null,
									"Five expansive campaigns for co-operative, Versus and Survival game modes.",
									A.createElement("br", null),
									A.createElement("br", null),
									"                    ",
								),
								A.createElement(
									"li",
									null,
									"An all new multiplayer mode.",
									A.createElement("br", null),
									A.createElement("br", null),
									"                    ",
								),
								A.createElement(
									"li",
									null,
									"Uncommon common infected. Each of the five new campaigns contains at least one new uncommon common zombies which are exclusive to that campaign. ",
									A.createElement("br", null),
									A.createElement("br", null),
									"                    ",
								),
								A.createElement(
									"li",
									null,
									"AI Director 2.0: Advanced technology dubbed The AI Director drove L4D's unique gameplay – customizing enemy population, effects, and music, based upon the players’ performance. L4D 2 features The AI Director 2.0 which expands the Director’s ability to customize level layout, world objects, weather, and lighting to reflect different times of day.",
									A.createElement("br", null),
									A.createElement("br", null),
									"                    ",
								),
								A.createElement(
									"li",
									null,
									"Stats, rankings, and awards system drives collaborative play",
									A.createElement("br", null),
									A.createElement("br", null),
									"                    ",
								),
							),
							A.createElement(f.$n, null, "Here's a button"),
							"Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008.",
							A.createElement("br", null),
							A.createElement("br", null),
							"                    This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.",
							A.createElement("br", null),
							A.createElement(
								"div",
								null,
								A.createElement("br", null),
								"                    You'll play as one of four new survivors armed with a wide and devastating array of classic and upgraded weapons. In addition to firearms, you'll also get a chance to take out some aggression on infected with a variety of carnage-creating melee weapons, from chainsaws to axes and even the deadly frying pan.",
								A.createElement("br", null),
								A.createElement("br", null),
								"                    You'll be putting these weapons to the test against (or playing as in Versus) three horrific and formidable new Special Infected. You'll also encounter five new uncommon common infected, including the terrifying Mudmen.",
								A.createElement("br", null),
								A.createElement("br", null),
								"                    Helping to take L4D's frantic, action-packed gameplay to the next level is AI Director 2.0. This improved Director has the ability to procedurally change the weather you'll fight through and the pathways you'll take, in addition to tailoring the enemy population, effects, and sounds to match your performance. L4D2 promises a satisfying and uniquely challenging experience every time the game is played, custom-fitted to your style of play.",
								A.createElement("br", null),
								A.createElement("br", null),
								"                    ",
								A.createElement(
									"ul",
									{
										className: "bb_ul",
									},
									A.createElement(
										"li",
										null,
										"Next generation co-op action gaming from the makers of Half-Life, Portal, Team Fortress and Counter-Strike.",
										A.createElement("br", null),
										A.createElement("br", null),
										"                    ",
									),
									A.createElement(
										"li",
										null,
										"Over 20 new weapons & items headlined by over 10 melee weapons – axe, chainsaw, frying pan, baseball bat – allow you to get up close with the zombies",
										A.createElement("br", null),
										A.createElement("br", null),
										"                    ",
									),
									A.createElement(
										"li",
										null,
										"New survivors. New Story. New dialogue. ",
										A.createElement("br", null),
										A.createElement("br", null),
										"                    ",
									),
									A.createElement(
										"li",
										null,
										"Five expansive campaigns for co-operative, Versus and Survival game modes.",
										A.createElement("br", null),
										A.createElement("br", null),
										"                    ",
									),
									A.createElement(
										"li",
										null,
										"An all new multiplayer mode.",
										A.createElement("br", null),
										A.createElement("br", null),
										"                    ",
									),
									A.createElement(
										"li",
										null,
										"Uncommon common infected. Each of the five new campaigns contains at least one new uncommon common zombies which are exclusive to that campaign. ",
										A.createElement("br", null),
										A.createElement("br", null),
										"                    ",
									),
									A.createElement(
										"li",
										null,
										"AI Director 2.0: Advanced technology dubbed The AI Director drove L4D's unique gameplay – customizing enemy population, effects, and music, based upon the players’ performance. L4D 2 features The AI Director 2.0 which expands the Director’s ability to customize level layout, world objects, weather, and lighting to reflect different times of day.",
										A.createElement("br", null),
										A.createElement("br", null),
										"                    ",
									),
									A.createElement(
										"li",
										null,
										"Stats, rankings, and awards system drives collaborative play",
										A.createElement("br", null),
										A.createElement("br", null),
										"                    ",
									),
								),
								A.createElement(
									C.Z,
									{
										onActivate: () =>
											(window.location.href =
												"https://www.store.steampowered.com"),
									},
									"A link to the store here",
								),
								"Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008.",
								A.createElement("br", null),
								A.createElement("br", null),
								"                    This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.",
							),
							A.createElement("br", null),
							A.createElement("br", null),
							A.createElement(
								"h3",
								{
									style: {
										textAlign: "center",
									},
								},
								"THE END",
							),
							A.createElement("br", null),
							A.createElement("br", null),
						),
						A.createElement(
							f.$n,
							{
								onClick: () => r(false),
							},
							"Close",
						),
					),
				),
			),
		),
		A.createElement(
			f.$n,
			{
				onClick: () => r(true),
			},
			"Scroll Panel Test",
		),
	);
}
const Rt = (e) =>
	A.createElement(
		f.$n,
		{
			onClick: () =>
				pg(
					A.cloneElement(e.children, {
						setModalResult: e.onResult,
					}),
					e.ownerWindow,
				),
		},
		e.title,
	);
function kt(e) {
	const t = (t) => {
		if (e.setModalResult) {
			e.setModalResult(t);
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	return A.createElement(
		x.eV,
		{
			onOK: () => t("dialog onOK"),
			onCancel: () => t("dialog onCancel"),
		},
		A.createElement(f.Y9, null, "Click OK or Cancel"),
		A.createElement(f.a3, null, "Response will be shown after closing."),
		A.createElement(
			f.wi,
			null,
			A.createElement(f.CB, {
				focusButton: "primary",
				onOK: () => t("button onOK"),
				onCancel: () => t("button onCancel"),
			}),
		),
	);
}
function Dt(e) {
	const [t, r] = A.useState("");
	const n = A.useRef(undefined);
	A.useEffect(() => {
		n.current?.TakeFocusAndShowKeyboard();
	}, []);
	const i = (t) => {
		if (e.setModalResult) {
			e.setModalResult(t);
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	return A.createElement(
		x.x_,
		{
			onEscKeypress: () => {
				i("dialog onEsc");
			},
		},
		A.createElement(
			f.U9,
			{
				classNameContent: Qe.TopAligned,
				style: {
					minWidth: 300,
				},
				onSubmit: () => {
					i(`form onSubmit: "${t}"`);
				},
			},
			A.createElement(f.Y9, null, "Text Prompt example"),
			A.createElement(f.pd, {
				onChange: (t) => {
					r(t.target.value);
					if (e.setModalResult) {
						e.setModalResult(t.target.value);
					}
				},
				placeholder: "Type a value",
				refKeyboardHandle: n,
			}),
		),
	);
}
function Nt(e) {
	const t = A.useRef(undefined);
	const [r, n] = A.useState();
	$$(() => {
		n(t.current?.element?.value);
	}, 100);
	const [i, a] = A.useState(0);
	return A.createElement(
		"form",
		{
			onSubmit: (e) => {
				e.preventDefault();
				a(i + 1);
			},
		},
		A.createElement(f.pd, {
			placeholder: "Type here",
			ref: t,
		}),
		A.createElement(
			f.JU,
			null,
			"Submitted ",
			i,
			" time",
			i === 1 ? "" : "s",
			". Text: ",
			JSON.stringify(r, null, 2),
		),
	);
}
function Ft(e) {
	const [t, r] = A.useState(0);
	const [n, i] = A.useState(0);
	const [a, s] = A.useState(0);
	const [o, l] = A.useState(0);
	return A.createElement(
		f.nB,
		null,
		A.createElement(f.lr, null, "Buttons"),
		A.createElement(
			f.xh,
			{
				label: "Button field",
				onClick: (e) => r(t + 1),
				onOKActionDescription: `Click Me ( clicked: ${t})`,
			},
			"Click me ",
			t > 0 && `( ${t} )`,
		),
		A.createElement(
			f.xh,
			{
				label: "Another button field",
				onClick: (e) => l(o + 1),
			},
			"Click me ",
			o > 0 && `( ${o} )`,
		),
		A.createElement(
			f.xh,
			{
				disabled: true,
				label: "Disabled button field (with icon)",
				icon: A.createElement(st.Lock, {
					locked: true,
				}),
				onClick: (e) => i(n + 1),
			},
			"Can't click me ",
			n > 0 && `( ${n} )`,
		),
		A.createElement(
			f.xh,
			{
				label: "Describing button field",
				description:
					"Here's some info to help you go about your day, clicking buttons...",
				icon: A.createElement(st.Information, null),
				onClick: (e) => s(a + 1),
			},
			"Click me ",
			a > 0 && `( ${a} )`,
		),
	);
}
function Gt(e) {
	const [t, r] = A.useState(4);
	const [n, i] = A.useState(7);
	const [a, s] = A.useState(6);
	const [o, l] = A.useState(3);
	const [c, m] = A.useState(9);
	const [u, d] = A.useState(7);
	const [p, g] = A.useState(5);
	const [h, C] = A.useState(2);
	const [_, b] = A.useState(3);
	const [y, S] = A.useState(4);
	const [w, B] = A.useState(4);
	const [v, I] = A.useState(5);
	const [E, M] = A.useState(6);
	const [T, R] = A.useState(7);
	const [k, D] = A.useState(7);
	const [N, F] = A.useState(123456);
	const [G, O] = A.useState(5);
	const [P, L] = A.useState(4);
	const [z, x] = A.useState(6);
	const [U, W] = A.useState(3);
	const [V, H] = A.useState(4);
	const [j, q] = A.useState(0);
	const [Q, Z] = A.useState(0);
	const [Y, K] = A.useState(0);
	const [X, J] = A.useState(0);
	const [$, ee] = A.useState(0);
	const [te, re] = A.useState(0);
	const [ne, ie] = A.useState(0);
	const [ae, se] = A.useState(0.5);
	const [oe, le] = A.useState(6500);
	const ce = [
		45, 47, 48, 49, 50, 51, 53, 55, 56, 59, 60, 62, 64, 65, 66, 68, 72, 73, 76,
		77, 78, 80, 81, 82, 84, 85, 86, 87, 88, 90,
	];
	const [me, ue] = A.useState(ce[5]);
	const [de, Ae] = A.useState(3);
	return A.createElement(
		f.nB,
		null,
		A.createElement(
			f.G5,
			null,
			A.createElement(f.gz, {
				showValue: true,
				showBookendLabels: true,
				label: "Slider with discrete values",
				rValues: ce,
				value: me,
				onChange: ue,
			}),
			A.createElement(f.Kc, {
				label: "Simple slider with description.",
				description:
					"This is a description for the slider. It has been described.",
				value: t,
				onChange: r,
				min: 0,
				max: 10,
			}),
			A.createElement(f.Kc, {
				label: "Simple slider with description and value.",
				description:
					"This is a description for the slider. It has been described and displays its value.",
				value: p,
				onChange: g,
				min: 0,
				max: 10,
				showValue: true,
			}),
			A.createElement(f.Kc, {
				label: "Slider without description",
				value: n,
				onChange: i,
				min: 0,
				max: 10,
			}),
			A.createElement(f.d3, {
				label: "GamepadUI Slider",
				description: "With fine steps and a description.",
				value: a,
				onChange: s,
				min: 0,
				max: 10,
				step: 0.2,
			}),
			A.createElement(f.d3, {
				label: "GamepadUI Continuous Slider",
				value: o,
				onChange: l,
				min: 0,
				max: 10,
				step: 0,
				showValue: true,
			}),
			A.createElement(f.d3, {
				label: "GamepadUI Inline Slider",
				value: c,
				onChange: m,
				layout: "inline",
				min: 0,
				max: 10,
				step: 0.5,
			}),
			A.createElement(f.d3, {
				label: "GamepadUI Slider Without Handle",
				value: u,
				onChange: d,
				showHandle: false,
				layout: "inline",
				min: 0,
				max: 10,
				step: 0,
			}),
			A.createElement(f.d3, {
				disabled: true,
				label: "GamepadUI Disabled Inline Slider",
				value: 3,
				layout: "inline",
				min: 0,
				max: 10,
				step: 0.5,
			}),
		),
		A.createElement(
			f.G5,
			null,
			A.createElement(f.lr, null, "Inline sliders with stuff next to 'em"),
			A.createElement(f.d3, {
				layout: "inline",
				label: "An inline slider with an icon",
				icon: A.createElement(st.Color, null),
				value: ae,
				onChange: se,
				min: 0,
				max: 1,
				step: 0.125,
				resetValue: 0.5,
			}),
			A.createElement(f.d3, {
				layout: "inline",
				label: "An inline slider with a label",
				value: oe,
				onChange: le,
				min: 4000,
				max: 10000,
				step: 0.125,
				resetValue: 6500,
				showValue: true,
				renderValue: (e) => `${Math.round(e / 100) * 100}K`,
			}),
			A.createElement(f.d3, {
				layout: "inline",
				label: "An inline slider with an editable label",
				value: oe,
				onChange: le,
				min: 4000,
				max: 10000,
				step: 0.125,
				resetValue: 6500,
				showValue: true,
				renderValue: (e) => `${Math.round(e / 100) * 100}K`,
				editableValue: true,
			}),
			A.createElement(f.d3, {
				layout: "inline",
				label: "An inline slider with an editable label and icon",
				icon: A.createElement(st.Color, null),
				value: oe,
				onChange: le,
				min: 4000,
				max: 10000,
				step: 0.125,
				resetValue: 6500,
				showValue: true,
				renderValue: (e) => `${Math.round(e / 100) * 100}K`,
				editableValue: true,
			}),
			A.createElement(f.d3, {
				layout: "inline",
				label: "An inline slider with a label and icon",
				icon: A.createElement(st.Color, null),
				value: oe,
				onChange: le,
				min: 4000,
				max: 10000,
				step: 0.125,
				resetValue: 6500,
				showValue: true,
				renderValue: (e) => `${Math.round(e / 100) * 100}K`,
			}),
		),
		A.createElement(
			f.G5,
			null,
			A.createElement(f.lr, null, "Acceleration comparisons"),
			A.createElement(f.d3, {
				label: "Slider with 10 steps",
				value: j,
				onChange: q,
				min: 0,
				max: 10,
				showValue: true,
			}),
			A.createElement(f.d3, {
				label: "Slider with 100 steps",
				value: Q,
				onChange: Z,
				min: 0,
				max: 100,
				showValue: true,
			}),
			A.createElement(f.d3, {
				label: "Slider with 1000 steps",
				value: Y,
				onChange: K,
				min: 0,
				max: 1000,
				showValue: true,
			}),
			A.createElement(f.d3, {
				label: "Slider with 10000 steps",
				value: $,
				onChange: ee,
				min: 0,
				max: 10000,
				step: 1,
				showValue: true,
			}),
			A.createElement(f.d3, {
				label: "Slider with infinite steps (0-100%)",
				value: X,
				onChange: J,
				min: 0,
				max: 100,
				step: 0,
				showValue: true,
				valueSuffix: "%",
			}),
			A.createElement(f.d3, {
				label:
					"Slider with infinite steps (0-100%) but more granular dpad step (20%)",
				value: te,
				onChange: re,
				min: 0,
				max: 100,
				step: 0,
				dpadStep: 20,
				showValue: true,
				valueSuffix: "%",
			}),
			A.createElement(f.d3, {
				label:
					"Slider with illegal dpadSteps (more granular than actual legal steps)",
				value: ne,
				onChange: ie,
				min: 0,
				max: 100,
				step: 5,
				dpadStep: 2,
				showValue: true,
				valueSuffix: "%",
			}),
		),
		A.createElement(
			f.G5,
			null,
			A.createElement(f.lr, null, "Notches"),
			A.createElement(f.d3, {
				label: "Slider with notches and labels",
				value: h,
				onChange: C,
				layout: "inline",
				min: 1,
				max: 4,
				step: 1,
				notchCount: 4,
				notchLabels: [
					{
						notchIndex: 0,
						label: "One",
					},
					{
						notchIndex: 1,
						label: "Two",
					},
					{
						notchIndex: 2,
						label: "Three",
					},
					{
						notchIndex: 3,
						label: "The fourth value",
					},
				],
			}),
			A.createElement(f.d3, {
				label: "Slider with just notches",
				value: _,
				onChange: b,
				layout: "inline",
				min: 1,
				max: 4,
				step: 1,
				notchCount: 4,
			}),
			A.createElement(f.d3, {
				label: "Slider with just labels",
				value: y,
				onChange: S,
				layout: "inline",
				min: 1,
				max: 4,
				step: 1,
				notchCount: 4,
				notchLabels: [
					{
						notchIndex: 0,
						label: "One",
					},
					{
						notchIndex: 1,
						label: "Two",
					},
					{
						notchIndex: 2,
						label: "Three",
					},
					{
						notchIndex: 3,
						label: "The fourth value",
					},
				],
				notchTicksVisible: false,
			}),
			A.createElement(f.d3, {
				label: "Slider with two labels and no notches",
				description:
					"In this state the labels are bookending the min and max values, so we don't center them over the ends but instead align them to the ends.",
				value: V,
				onChange: H,
				layout: "inline",
				min: 1,
				max: 4,
				step: 1,
				notchCount: 2,
				notchLabels: [
					{
						notchIndex: 0,
						label: "One",
					},
					{
						notchIndex: 1,
						label: "The last value",
					},
				],
				notchTicksVisible: false,
			}),
			A.createElement(f.d3, {
				label: "Slider with extra padding around notches",
				value: de,
				onChange: Ae,
				layout: "inline",
				min: 1,
				max: 4,
				step: 1,
				notchCount: 4,
				notchLabels: [
					{
						notchIndex: 0,
						label: "One",
					},
					{
						notchIndex: 1,
						label: "Two",
					},
					{
						notchIndex: 2,
						label: "Three",
					},
					{
						notchIndex: 3,
						label: "The fourth value",
					},
				],
				extraNotchPadding: "20px",
			}),
		),
		A.createElement(
			f.G5,
			null,
			A.createElement(f.lr, null, "Resettable Default Values"),
			A.createElement(f.d3, {
				label: "Meta: Default value tick location",
				description: "For the two following sliders",
				value: G,
				onChange: O,
				layout: "inline",
				min: 1,
				max: 10,
				step: 1,
			}),
			A.createElement(f.d3, {
				label: "Slider with default value",
				resetValue: G,
				value: P,
				onChange: L,
				layout: "inline",
				min: 1,
				max: 10,
				step: 1,
			}),
			A.createElement(f.d3, {
				label: "Continuous slider with default value",
				resetValue: G,
				value: z,
				onChange: x,
				layout: "inline",
				min: 1,
				max: 10,
				step: 0,
			}),
			A.createElement(f.d3, {
				label: "Continuous slider with color shade to left of default value",
				resetValue: G,
				resetValueAppearance: {
					trackForegroundColor: "magenta",
					side: "left",
				},
				value: z,
				onChange: x,
				layout: "inline",
				min: 1,
				max: 10,
				step: 0,
			}),
			A.createElement(f.d3, {
				label: "Continuous slider with color shade to right of default value",
				resetValue: G,
				resetValueAppearance: {
					trackForegroundColor: "magenta",
					side: "right",
				},
				value: z,
				onChange: x,
				layout: "inline",
				min: 1,
				max: 10,
				step: 0,
			}),
			A.createElement(f.d3, {
				label: "Slider with default value and notches",
				resetValue: 2,
				value: U,
				onChange: W,
				layout: "inline",
				min: 1,
				max: 4,
				step: 1,
				notchCount: 4,
				notchLabels: [
					{
						notchIndex: 0,
						label: "One",
					},
					{
						notchIndex: 1,
						label: "Two",
					},
					{
						notchIndex: 2,
						label: "Three",
					},
					{
						notchIndex: 3,
						label: "The fourth value",
					},
				],
			}),
		),
		A.createElement(
			f.G5,
			null,
			A.createElement(f.lr, null, "Editable Values"),
			A.createElement(f.d3, {
				label: "Continuous slider",
				description: "Allows entering any value within the range.",
				value: w,
				onChange: B,
				min: 1,
				max: 10,
				step: 0,
				editableValue: true,
			}),
			A.createElement(f.d3, {
				label: "Discrete slider with strict input",
				description: "Allows entering a step-aligned value within the range.",
				value: v,
				onChange: I,
				min: 1,
				max: 10,
				step: 1,
				editableValue: true,
				validValues: "steps",
			}),
			A.createElement(f.d3, {
				label: "Discrete slider with range input",
				description: "Allows entering any continuous value within the range.",
				value: E,
				onChange: M,
				min: 1,
				max: 10,
				step: 1,
				editableValue: true,
				validValues: "range",
			}),
			A.createElement(f.d3, {
				label: "Discrete slider with custom input rules, and units.",
				description:
					"Allows entering any even value within the custom range [-100,100]",
				value: T,
				onChange: R,
				min: 1,
				max: 10,
				step: 1,
				editableValue: true,
				valueSuffix: "%",
				validValues: (e) => e >= -100 && e <= 100,
			}),
			A.createElement(f.d3, {
				label: "Inline slider with input",
				value: k,
				onChange: D,
				layout: "inline",
				min: 1,
				max: 10,
				step: 1,
				editableValue: true,
			}),
			A.createElement(f.d3, {
				label: "Slider with long numbers",
				value: N,
				onChange: F,
				min: 1,
				max: 10000,
				step: 1,
				dpadStep: 1 / 9999,
				editableValue: true,
			}),
		),
	);
}
function Ot(e) {
	const [t, r] = A.useState(true);
	return A.createElement(
		f.nB,
		null,
		A.createElement(f.RF, {
			label: "Toggle switch",
			checked: t,
			onChange: r,
		}),
		A.createElement(f.RF, {
			label: "Another toggle switch",
			description:
				"This toggle has a description and is the inverted value of the above toggle.",
			checked: !t,
			onChange: (e) => r(!e),
		}),
		A.createElement(f.RF, {
			disabled: true,
			label: "Disabled toggle",
			checked: !t,
		}),
	);
}
function Pt(e) {
	const t = V3();
	return A.createElement(
		f.nB,
		null,
		A.createElement(gt.G, {
			feature: tt.uX,
			label: "Test bool toggle",
			setting: "setting_validation_bool",
		}),
		A.createElement(gt.G, {
			feature: tt.uX,
			label: "Test bool toggle: inverted",
			setting: "setting_validation_bool",
			invert: true,
		}),
		A.createElement(_t.X, {
			label: "Enum dropdown",
			setting: "setting_validation_enum",
			rgOptions: [
				{
					data: 0,
					label: "None",
				},
				{
					data: 1,
					label: "Heatmap",
				},
				{
					data: 4,
					label: "Heatmap Classic",
				},
				{
					data: 3,
					label: "Heatmap Extended",
				},
				{
					data: 2,
					label: "Analysis",
				},
			],
		}),
		A.createElement(Ct.Pl, {
			label: "Int32 slider field",
			setting: "setting_validation_int32",
			min: -10,
			max: 10,
			step: 1,
		}),
		A.createElement(Ct.Ax, {
			label: "UInt32 slider field: discrete",
			setting: "setting_validation_uint32",
			rValues: [0, 1, 2, 3, 5, 8, 13, 21, 34],
		}),
		A.createElement(ft.C, {
			label: "UInt64 field",
			setting: "setting_validation_uint64",
		}),
		A.createElement(Ct.Pl, {
			label: "Float slider field",
			setting: "setting_validation_float",
			min: 0,
			max: 1,
			step: 0.1,
		}),
		A.createElement(ft.C, {
			label: "String field",
			setting: "setting_validation_string",
		}),
		A.createElement(yt, {
			label: "Hotkey field",
			setting: "setting_validation_hotkey",
			feature: tt.uX,
		}),
		A.createElement(yt, {
			label: "Guide Hotkey",
			setting: "gamescope_guide_hotkey",
			feature: tt.uX,
			visible: t,
		}),
		A.createElement(yt, {
			label: "QAM Hotkey",
			setting: "gamescope_qam_hotkey",
			feature: tt.uX,
			visible: t,
		}),
	);
}
function Lt(e) {
	const [t, r] = A.useState(0);
	return A.createElement(
		A.Fragment,
		null,
		A.createElement(f.lr, null, "Progress Bars"),
		A.createElement(Je.hA, {
			focusable: true,
			label: "Default",
			nProgress: t,
		}),
		A.createElement(Je.hA, {
			focusable: true,
			label: "Unsmoothed",
			nProgress: t,
			nTransitionSec: 0,
		}),
		A.createElement(Je.hA, {
			focusable: true,
			label: "Indeterminate",
			nProgress: t,
			indeterminate: true,
		}),
		A.createElement(f.d3, {
			label: "Progress value",
			layout: "inline",
			value: t,
			onChange: r,
			min: 0,
			max: 100,
			dpadStep: 0.2,
			showValue: true,
			valueSuffix: "%",
		}),
	);
}
function zt(e) {
	const [t, r] = A.useState(true);
	const [n, i] = A.useState(false);
	const [a, s] = A.useState(undefined);
	return A.createElement(
		A.Fragment,
		null,
		A.createElement(f.lr, null, "Marquee"),
		A.createElement(
			f.D0,
			{
				childrenContainerWidth: "fixed",
				label: "Marquee Example",
			},
			A.createElement(
				"div",
				{
					style: {
						width: "300px",
					},
				},
				A.createElement(
					At.r,
					{
						play: t,
						delay: a,
						resetOnPause: n,
					},
					"This is some very long text that scrolls and it keeps going and going and going and going",
				),
			),
		),
		A.createElement(f.y4, {
			label: "Playing",
			checked: t,
			onChange: r,
		}),
		A.createElement(f.y4, {
			label: "Reset on pause",
			checked: n,
			onChange: i,
		}),
		A.createElement(f.Vb, {
			label: "Delay",
			rgOptions: [
				{
					data: undefined,
					label: "Default (3sec)",
				},
				{
					data: 0,
					label: "0 Seconds",
				},
				{
					data: 0.2,
					label: "0.2 Seconds",
				},
				{
					data: 1,
					label: "1 Second",
				},
				{
					data: 4,
					label: "4 Seconds",
				},
			],
			selectedOption: a,
			onChange: (e) => s(e.data),
		}),
	);
}
function xt(e) {
	const { eHaptic: t } = e;
	const r = A.useRef(undefined);
	const [n, i] = A.useState(-1);
	A.useRef(undefined).current = n;
	const [a, s] = A.useState(true);
	const o = A.useCallback(() => s(true), []);
	const l = A.useCallback(() => s(false), []);
	const [c, m] = A.useState(false);
	const u = A.useCallback(() => m(true), []);
	const d = A.useCallback(() => m(false), []);
	l6(r.current?.ownerDocument, "mouseenter", o);
	l6(r.current?.ownerDocument, "mouseleave", l);
	l6(r.current?.ownerDocument, "touchstart", u);
	l6(r.current?.ownerDocument, "touchend", d);
	A.useEffect(() => {
		if (n == 0) {
			r.current?.ownerDocument.defaultView.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
				t,
				0,
			);
		}
		if (n >= 0) {
			const e = window.setTimeout(() => {
				i(n - 1);
			}, 750);
			return () => window.clearTimeout(e);
		}
	}, [n, t]);
	let p = "Trigger Haptic";
	if (n > 0) {
		p = n.toString();
	} else if (n == 0) {
		p = "Triggered";
	}
	return A.createElement(
		f.xh,
		{
			label: ht.en[t],
			onClick: () => i(3),
			ref: r,
			disabled: n >= 0,
			description:
				n >= 0 &&
				!a &&
				!c &&
				"Lasermouse must be pointing at this overlay to feel the haptic.",
		},
		p,
	);
}
function Ut(e) {
	const t = Object.values(ht.en)
		.filter((e) => typeof e == "number")
		.filter((e) => e != ht.en.None);
	return A.createElement(
		A.Fragment,
		null,
		A.createElement(f.lr, null, "VR Haptics"),
		t.map((e) =>
			A.createElement(xt, {
				eHaptic: e,
				key: e,
			}),
		),
	);
}
function Wt(e) {
	return A.createElement(
		f.nB,
		null,
		A.createElement(
			f.xh,
			{
				label: "Show Chord Hint",
				onClick: (e) => tr(),
			},
			"Show Chord Hint",
		),
		A.createElement(f.lr, null, "Text input"),
		A.createElement(Nt, null),
		A.createElement(Lt, null),
		A.createElement(zt, null),
		A.createElement(f.lr, null, "Labels"),
		A.createElement(
			f.Nv,
			{
				label: "Simple inline label field",
			},
			"with a short value",
		),
		A.createElement(
			f.Nv,
			{
				label: "Simple inline label field",
			},
			"with a long value that demonstrates how it looks when wrapped",
		),
		A.createElement(
			f.Nv,
			{
				label: "Simple two-line label field",
				layout: "below",
			},
			"with a short value",
		),
		A.createElement(
			f.Nv,
			{
				label:
					"This field will have a very long label that should cause the contents to go ahead and wrap",
			},
			"with a long value that demonstrates how it looks when wrapped",
		),
		A.createElement(
			f.Nv,
			{
				label:
					"This field will have a very long label that should cause the contents to go ahead and wrap",
				inlineWrap: "keep-inline",
			},
			"but this one explicitly keeps children inline with the label",
		),
		A.createElement(f.lr, null, "Field Indentation"),
		A.createElement(
			f.D0,
			{
				label: "Non-indented field",
			},
			A.createElement(f.$n, null, "Hello There"),
		),
		A.createElement(
			f.D0,
			{
				label: "Indented field",
				indentLevel: 1,
			},
			A.createElement(f.$n, null, "Hello There"),
		),
		A.createElement(
			f.D0,
			{
				label: "Indented field",
				indentLevel: 1,
			},
			A.createElement(f.$n, null, "Hello There"),
		),
		A.createElement(
			f.D0,
			{
				label: "Extra indented field",
				indentLevel: 2,
			},
			A.createElement(f.$n, null, "Hello There"),
		),
		A.createElement(Zt, null),
		A.createElement(Ut, null),
	);
}
function Vt(e) {
	return A.createElement(
		f.D0,
		{
			focusable: true,
			label: nt.g4[e.button],
			childrenLayout: "inline",
			childrenContainerWidth: "fixed",
		},
		A.createElement(
			"div",
			{
				style: {
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					width: 400,
				},
			},
			A.createElement(at.$m, {
				button: e.button,
				type: at.wt.Light,
				size: at.xY.Small,
			}),
			A.createElement(at.$m, {
				button: e.button,
				type: at.wt.Light,
				size: at.xY.Medium,
			}),
			A.createElement(at.$m, {
				button: e.button,
				type: at.wt.Light,
				size: at.xY.Large,
			}),
			A.createElement(
				"div",
				{
					style: {
						color: "#FFC82C",
					},
				},
				A.createElement(at.$m, {
					button: e.button,
					type: at.wt.Knockout,
				}),
			),
		),
	);
}
function Ht(e) {
	const t = pt(nt.g4);
	return A.createElement(
		f.nB,
		null,
		A.createElement(f.lr, null, "Small, Medium, Large, Knockout"),
		t.map((e) =>
			A.createElement(Vt, {
				key: e,
				button: e,
			}),
		),
	);
}
function jt(e) {
	const t = Object.keys(st)
		.map((e) => e)
		.filter((e) => typeof st[e] == "function")
		.map((e) => ({
			key: e,
			fn: st[e],
		}));
	const [r, n] = A.useState("");
	const i = r.toLowerCase();
	const a = t
		.map((e) => {
			let t;
			try {
				t = e.fn({
					width: 32,
					height: 32,
				});
			} catch (e) {}
			return {
				key: e.key,
				element: t,
			};
		})
		.filter((e) => e.element == null || e.element.type === "svg")
		.filter((e) => e.key.toLowerCase().includes(i));
	return A.createElement(
		f.nB,
		{
			className: ct.SVGZooBody,
		},
		A.createElement(
			"div",
			{
				className: ct.SVGZooHeaderField,
			},
			A.createElement(f.qq, {
				label: A.createElement(f.Y9, null, "SVGs"),
				value: r,
				onChange: (e) => n(e.target.value),
				placeholder: "Search icons...",
			}),
		),
		A.createElement(
			f.lr,
			null,
			"All the functions found in gamepadui_svg_library that can be called with svg props",
		),
		a.map((e) =>
			A.createElement(
				f.D0,
				{
					key: e.key,
					focusable: true,
					label: e.key,
					childrenLayout: "inline",
					childrenContainerWidth: "fixed",
				},
				e.element
					? A.createElement(
							A.Fragment,
							null,
							A.createElement(
								"div",
								{
									className: ct.SVGPreview,
									style: {
										height: 32,
									},
								},
								e.element,
							),
							A.createElement(
								"div",
								{
									className: A_1(ct.SVGPreview, ct.LightBG),
									style: {
										height: 32,
									},
								},
								e.element,
							),
						)
					: A.createElement(
							"div",
							{
								className: ct.SVGUnknown,
							},
							"unknown",
						),
			),
		),
	);
}
function qt(e) {
	return A.createElement(
		f.nB,
		null,
		A.createElement(
			"div",
			{
				className: ct.GiantHeading,
			},
			"Giant-heading",
		),
		A.createElement(
			"div",
			{
				className: ct.HeadingEmphasis,
			},
			"Heading-emphasis",
		),
		A.createElement(
			"div",
			{
				className: ct.Heading,
			},
			"Heading",
		),
		A.createElement(
			"div",
			{
				className: ct.HeadingSmall,
			},
			"Heading-small",
		),
		A.createElement(
			"div",
			{
				className: ct.Label,
			},
			"Label",
		),
		A.createElement(
			"div",
			{
				className: ct.SubHeading,
			},
			"Sub-heading",
		),
		A.createElement(
			"div",
			{
				className: ct.BodyExtrabold,
			},
			"Body-extrabold",
		),
		A.createElement(
			"div",
			{
				className: ct.BodyEmphasis,
			},
			"Body-emphasis",
		),
		A.createElement(
			"div",
			{
				className: ct.Body,
			},
			"Body",
		),
		A.createElement(
			"div",
			{
				className: ct.BodyItalic,
			},
			"Body-italic",
		),
		A.createElement(
			"div",
			{
				className: ct.BodySmall,
			},
			"Body-small",
		),
		A.createElement(
			"div",
			{
				className: ct.MicroHeading,
			},
			"Micro-heading",
		),
		A.createElement(
			"div",
			{
				className: ct.Description,
			},
			"Description",
		),
	);
}
function Qt(e) {
	const t = A.useRef(undefined);
	return A.createElement(
		C.Z,
		{
			ref: t,
			onGamepadFocus: () =>
				t.current?.scrollIntoView({
					behavior: "smooth",
				}),
		},
		A.createElement(f.lr, null, "Input Fields"),
		A.createElement(
			f.D0,
			{
				label: "Input",
			},
			A.createElement(j.BA, null),
		),
		A.createElement(
			f.D0,
			{
				label: "Text Area",
			},
			A.createElement(j.dO, null),
		),
	);
}
function Zt(e) {
	const [t, r] = A.useState(false);
	const n = t ? "left" : "right";
	const i = A.useRef(undefined);
	return A.createElement(
		C.Z,
		{
			ref: i,
			onGamepadFocus: () =>
				i.current?.scrollIntoView({
					behavior: "smooth",
				}),
		},
		A.createElement(f.lr, null, "Controls List Fields"),
		A.createElement(
			f.xh,
			{
				label: "Item Alignment",
				onClick: () => r(!t),
			},
			t ? "Left" : "Right",
		),
		A.createElement(
			f.BC,
			{
				alignItems: n,
			},
			A.createElement(f.$n, null, "A Controls List"),
			A.createElement(f.$n, null, "With 2 Buttons"),
		),
		A.createElement(
			f.BC,
			{
				alignItems: n,
			},
			A.createElement(f.$n, null, "...And with 1 Control"),
		),
		A.createElement(
			f.BC,
			{
				alignItems: n,
			},
			A.createElement(f.$n, null, "A List"),
			A.createElement(f.$n, null, "With Controls That Wrap"),
			A.createElement(f.ZU, {
				rgOptions: [
					{
						label: "And A Dropdown",
						data: 1,
					},
					{
						label: "Nothing To See Here :)",
						data: 2,
					},
				],
				selectedOption: 1,
			}),
			A.createElement(f.$n, null, "To Demonstrate It's Loc-Safe"),
		),
	);
}
const Yt = (e) =>
	A.createElement(
		f.xh,
		{
			label: e.soundFile.path,
			onClick: () => {
				o.oy.GamepadUIAudio.PlayAudioURL(e.soundFile.resolvedPath);
			},
		},
		"Play",
	);
const Kt = () => {
	let [e, t] = A.useState([]);
	A.useEffect(() => {
		const e = require("./81550.js");
		let n = e.keys().map((t) => ({
			path: t.toString().substring(2),
			resolvedPath: e(t.toString()).default,
		}));
		n.sort((e, t) =>
			e.path.indexOf("testing_only") && !t.path.indexOf("testing_only")
				? -1
				: !e.path.indexOf("testing_only") && t.path.indexOf("testing_only")
					? 1
					: e.path.localeCompare(t.path.toString()),
		);
		t(n);
	}, [t]);
	return A.createElement(
		"div",
		null,
		e.map((e, t) =>
			A.createElement(Yt, {
				key: t,
				soundFile: e,
			}),
		),
	);
};
function Xt(e) {
	let t = [];
	const r = pt(ut.H);
	t.push(
		A.createElement(
			f.$n,
			{
				key: "clearall",
				onClick: ut.z.ClearAllInterstitialsSeen,
			},
			"Clear All Seen",
		),
	);
	for (const e of r) {
		t.push(
			A.createElement(
				f.BC,
				{
					key: ut.H[e],
					label: ut.H[e],
				},
				A.createElement(
					f.$n,
					{
						disabled: false,
						onClick: () => {
							ut.z.ClearInterstitialSeen(e);
						},
					},
					"Clear Seen",
				),
				A.createElement(
					f.$n,
					{
						onClick: () => {
							ut.z.AddInterstitialToQueue({
								eInterstitial: e,
								bForce: true,
								appid: 620,
								strParam: "ParamText",
							});
						},
					},
					"Open",
				),
			),
		);
	}
	return A.createElement(C.Z, null, t);
}
function Jt(e) {
	let { name: t, url: r } = e;
	const i = jb(r);
	return A.createElement(
		f.xh,
		{
			key: t,
			label: t,
			onClick: i,
		},
		"GO",
	);
}
function $t(e) {
	const t = new Map([
		["Google", "https://www.google.com/"],
		["Valve Software", "https://www.valvesoftware.com/"],
		["Chrome GPU", "chrome://gpu"],
		["Netflix", "https://www.netflix.com/"],
		["Reddit", "https://www.reddit.com/"],
		["YouTube", "https://www.youtube.com/"],
		["Amazon.com", "https://www.amazon.com/"],
		["Wikipedia", "https://en.wikipedia.org/wiki/Main_Page"],
		["Twitter", "https://twitter.com/Steam"],
		["Chrome", "chrome://about"],
	]);
	let r = [];
	t.forEach((e, t) => {
		r.push(
			A.createElement(Jt, {
				key: t,
				name: t,
				url: e,
			}),
		);
	});
	return A.createElement(C.Z, null, A.createElement(er, null), r);
}
function er(e) {
	const [t, r] = A.useState("");
	const i = A.useCallback(
		(e) => {
			r(e.target.value);
		},
		[r],
	);
	const a = jb(t);
	return A.createElement(
		f.D0,
		{
			childrenLayout: "below",
			label: "Navigate to URL",
		},
		A.createElement(f.pd, {
			onChange: i,
			placeholder: "Enter a URL",
			onEnterKeyPress: a,
			strEnterKeyLabel: "GO",
		}),
		t.length > 0 &&
			A.createElement(
				f.xh,
				{
					onClick: a,
				},
				"GO",
			),
	);
}
function tr() {
	const e = B.v3.GetChordHintVisible();
	if (!e) {
		o.oy.CloseSideMenus();
	}
	B.v3.SetChordHintVisible(!e);
}
function rr() {
	return A.createElement(
		We.dj,
		{
			onButtonDown: (e) => {
				if (B.v3.GetChordHintVisible()) {
					tr();
				}
			},
		},
		A.createElement(it.q, {
			title: "GamepadUI Settings Zoo",
			pages: [
				{
					title: "Dropdowns",
					route: n.BV.GamepadUI.Zoo.Dropdowns(),
					content: A.createElement(vt, null),
				},
				{
					title: "Modals",
					route: n.BV.GamepadUI.Zoo.Modals(),
					content: A.createElement(Et, null),
				},
				{
					title: "Buttons",
					route: n.BV.GamepadUI.Zoo.Buttons(),
					content: A.createElement(Ft, null),
				},
				{
					title: "Sliders",
					route: n.BV.GamepadUI.Zoo.Sliders(),
					content: A.createElement(Gt, null),
				},
				{
					title: "Toggles",
					route: n.BV.GamepadUI.Zoo.Toggles(),
					content: A.createElement(Ot, null),
				},
				{
					title: "ClientSettings",
					route: n.BV.GamepadUI.Zoo.ClientSettings(),
					content: A.createElement(Pt, null),
				},
				{
					title: "Other Controls",
					route: n.BV.GamepadUI.Zoo.OtherControls(),
					content: A.createElement(Wt, null),
				},
				{
					title: "Glyphs",
					route: n.BV.GamepadUI.Zoo.Glyphs(),
					content: A.createElement(Ht, null),
				},
				{
					title: "SVGs",
					route: n.BV.GamepadUI.Zoo.SVG(),
					content: A.createElement(jt, null),
					hideTitle: true,
					padding: "none",
				},
				{
					title: "Typography",
					route: n.BV.GamepadUI.Zoo.Type(),
					content: A.createElement(qt, null),
				},
				{
					title: "Focusable Input",
					route: n.BV.GamepadUI.Zoo.Input(),
					content: A.createElement(Qt, null),
				},
				...lt.yQ
					.filter((e) => e.identifier != "LogSettings")
					.map(({ identifier: e, ...t }) => ({
						...t,
						route: o.GA[e](),
					})),
				{
					title: "Sound Tester",
					route: n.BV.GamepadUI.Zoo.SoundTester(),
					content: A.createElement(Kt, null),
				},
				{
					title: "Web Links",
					route: n.BV.GamepadUI.Zoo.WebLinks(),
					content: A.createElement($t, null),
				},
				{
					title: "Interstitials",
					route: n.BV.GamepadUI.Zoo.Interstitials(),
					content: A.createElement(Xt, null),
				},
				{
					title: "Three.js Tests",
					route: n.BV.GamepadUI.Zoo.ThreeJSTests(),
					content: A.createElement(
						A.Suspense,
						{
							fallback: A.createElement("div", null, "Loading..."),
						},
						A.createElement(wt, null),
					),
				},
				{
					title: "GraphEditor",
					route: n.BV.GamepadUI.Zoo.GraphEditor(),
					content: A.createElement(Bt, null),
				},
			],
		}),
		A.createElement(dt.LP, {
			appid: 620,
		}),
	);
}
function or(e) {
	pw(true);
	return A.createElement(
		"div",
		{
			className: sr.ErrorConditionBackground,
		},
		A.createElement(
			"div",
			{
				className: sr.ErrorConditionContainer,
			},
			A.createElement(
				C.Z,
				{
					autoFocus: true,
					onCancelActionDescription: null,
					onCancelButton: () => true,
				},
				A.createElement(
					"div",
					{
						className: sr.Header,
					},
					e.title,
				),
				A.createElement(
					"div",
					{
						className: sr.SubHeader,
					},
					e.desc,
				),
				A.createElement(
					f.jn,
					{
						onClick: e.onClick,
					},
					Localize("#Steam_ErrorCondition_OK").toLocaleUpperCase(),
				),
			),
		),
	);
}
function lr() {
	const e = k1();
	const t = yq();
	const r = A.useCallback(() => {
		o.oy.ResetErrorCondition();
		SteamClient.User.Reconnect();
		t();
	}, [t]);
	let n = () => {
		o.oy.ResetErrorCondition();
		e.Reauthentication();
	};
	let i = Localize("#Steam_RefreshLogin_InfoTicketExpired");
	let a = Localize("#Steam_ErrorCondition_RefreshLogin");
	if (o.oy.ErrorConditionResult != 1) {
		switch (o.oy.ErrorConditionResult) {
			case 6: {
				i = Localize("#Steam_RefreshLogin_AccountAlreadyLoggedInNoPassword");
				a = Localize("#Steam_RefreshLogin_AccountAlreadyLoggedInContinue");
				n = r;
				break;
			}
			case 49: {
				i = Localize("#Steam_RefreshLogin_AccountAlreadyLoggedInNeedPassword");
				break;
			}
			case 50: {
				i = Localize("#Steam_RefreshLogin_AccountAlreadyLoggedInNeedShutdown");
				break;
			}
			case 85: {
				e.Login();
				return A.createElement(A.Fragment, null);
			}
			case 88: {
				i = Localize("#Steam_RefreshLogin_InvalidTwoFactorCode");
				break;
			}
			default: {
				i = Localize("#Steam_RefreshLogin_InvalidPassword");
			}
		}
	}
	return A.createElement(
		"div",
		{
			className: sr.ErrorConditionBackground,
		},
		A.createElement(
			"div",
			{
				className: sr.ErrorConditionContainer,
			},
			A.createElement(
				C.Z,
				{
					autoFocus: true,
					onCancelActionDescription: null,
					onCancelButton: () => true,
				},
				A.createElement(
					"div",
					{
						className: sr.Header,
					},
					Localize("#Steam_ErrorCondition_Title"),
				),
				A.createElement(
					"div",
					{
						className: sr.SubHeader,
					},
					i,
				),
				A.createElement(
					"div",
					{
						className: sr.SubHeader,
					},
					a,
				),
				A.createElement(
					f.jn,
					{
						onClick: n,
					},
					Localize("#Steam_ErrorCondition_OK").toLocaleUpperCase(),
				),
			),
		),
	);
}
function cr(e) {
	const t = o.oy.ErrorCondition;
	const r = tn_2(n.BV.Library.Home());
	const i = yq();
	A.useEffect(() => {
		o.oy.DisableHomeAndQuickAccessButtons();
		return () => o.oy.EnableHomeAndQuickAccessButtons();
	}, []);
	let a = A.useCallback(() => {
		SteamClient.User.ChangeUser();
	}, []);
	let s = A.useCallback(() => {
		o.oy.ResetErrorCondition();
		r();
	}, [r]);
	let l = A.useCallback(() => {
		o.oy.ResetErrorCondition();
		i();
	}, [i]);
	switch (t) {
		case 1: {
			return A.createElement(lr, null);
		}
		case 2: {
			return A.createElement(or, {
				title: Localize("#Steam_ErrorCondition_Title"),
				desc: Localize("#Steam_ErrorCondition_LoggedInElsewhere"),
				onClick: a,
			});
		}
		case 3: {
			return A.createElement(or, {
				title: Localize("#Steam_ErrorCondition_Title"),
				desc: Localize("#Steam_ErrorCondition_SteamGuard"),
				onClick: a,
			});
		}
		case 4: {
			return A.createElement(or, {
				title: Localize("#Steam_ErrorCondition_Title"),
				desc: Localize("#Steam_ErrorCondition_AccountDisabled"),
				onClick: a,
			});
		}
		case 5: {
			return A.createElement(or, {
				title: Localize("#Steam_ErrorCondition_Title"),
				desc: Localize("#Steam_ErrorCondition_Offline"),
				onClick: s,
			});
		}
		case 6: {
			return A.createElement(or, {
				title: Localize("#Steam_ErrorCondition_Title"),
				desc: Localize("#Steam_ErrorCondition_UnhandledMailTo"),
				onClick: l,
			});
		}
	}
	return A.createElement(A.Fragment, null);
}
function dr() {
	const e = k1();
	return A.createElement(
		We.Sw,
		null,
		A.createElement(
			C.Z,
			{
				onCancel: o.oy.BIsInOOBE ? () => e.Login() : undefined,
				onOKActionDescription: null,
			},
			A.createElement(
				f.nB,
				null,
				A.createElement(ur.hd, null),
				A.createElement(ur.jI, null),
			),
		),
	);
}
const pr = Ar;
function gr(e) {
	const { className: t, background: r, ...n } = e;
	return A.createElement(C.Z, {
		className: A_1(
			pr.OverlayPosition,
			{
				[pr.DarkBackground]: r === "dark",
			},
			t,
		),
		...n,
	});
}
const hr = PA(() => {
	const e = $2();
	const t = A.useCallback(() => {
		console.log("resuming from overlay");
		e.NavigateToRunningApp(true);
	}, [e]);
	const r = A.useCallback((e) => {
		console.log("overlay button press", je.pR[e.detail.button]);
	}, []);
	return A.createElement(
		gr,
		{
			background: "clear",
			onButtonDown: r,
		},
		A.createElement(Cr, {
			resumeGame: t,
		}),
	);
});
function Cr(e) {
	const t = FN();
	const r = e.resumeGame;
	const n = A.useCallback(
		(e) => {
			if (!e) {
				r();
			}
		},
		[r],
	);
	pw();
	D7();
	dv(n);
	A.useEffect(() => {
		t.ShowModalKeyboard();
		return () => t.BIsActive() && t.HideVirtualKeyboard();
	}, [t]);
	return null;
}
const Ir = vr;
const Tr = A.createContext(null);
const Rr = (e) => {
	const t = WB(e.action);
	if (t) {
		return A.createElement(
			"div",
			{
				className: Ir.ActionIcon,
			},
			t,
		);
	} else {
		return null;
	}
};
const kr = PA((e) => {
	const t = $2();
	const r = AH(t, e.app, "mostavailable");
	const n = Sr.O$.GetFriendsInGame(e.app.appid).length;
	if (n > 0) {
		return A.createElement(
			"div",
			{
				className: A_1(Ir.SubMessage, Ir.FriendsInGame),
			},
			A.createElement(Rr, {
				action: r,
			}),
			A.createElement(
				"div",
				{
					className: Ir.Message,
				},
				LocalizePlural("#AppPortraitHover_FriendsPlaying", n),
				" ",
			),
		);
	}
	let i;
	i =
		e.app.minutes_playtime_forever > 0
			? e.app.minutes_playtime_last_two_weeks > 0
				? l_2(e.app.minutes_playtime_last_two_weeks, "#AppBox_RecentPlayTime_")
				: l_2(
						e.app.minutes_playtime_forever,
						"#BasicGameCarousel_TotalPlayTime_",
					)
			: e.app.installed
				? Localize("#AppBox_NoPlayTimeYet")
				: Localize("#BasicGameCarousel_NotInstalled");
	const a = i;
	return A.createElement(
		"div",
		{
			className: A_1(Co_1(r, Ir), Ir.SubMessage),
		},
		A.createElement(Rr, {
			action: r,
		}),
		A.createElement(
			"div",
			{
				className: Ir.Message,
			},
			a,
		),
	);
});
const Dr = PA((e) => {
	const { app: t, nLeft: r, nCarouselWidth: n, bShowAsHovered: i, ...a } = e;
	const s = e.app.display_name ? e.app.display_name : e.app.appid.toString();
	const o = A.createElement(kr, {
		app: t,
	});
	const l = A.useContext(Tr);
	const c = $2();
	u = c.BrowserWindow;
	d = Ir.CarouselHorizontalPadding;
	const m = u
		? d.endsWith("vw")
			? (parseFloat(d) * u.innerWidth) / 100
			: (w_4(d.endsWith("px"), "Unhandled width string"), parseInt(d))
		: 0;
	var u;
	var d;
	let p = 0;
	if (n) {
		p = n - m - (r - l);
	}
	if (p <= 0) {
		return null;
	} else {
		return A.createElement(
			"div",
			{
				className: A_1(Ir.CarouselGameLabelWrapper, i && Ir.ShowAsHovered),
				style: {
					width: p,
				},
				...a,
			},
			A.createElement(
				"div",
				{
					className: A_1(Ir.CarouselGameLabel),
				},
				A.createElement(yr.eL, {
					message: s,
					subMessage: o,
					bShortLayout: false,
				}),
				A.createElement("div", {
					className: A_1(Ir.FooterBlurImageContainer),
				}),
			),
		);
	}
});
const Nr = A.memo((e) => {
	const {
		appid: t,
		bFeatured: r,
		bShortLayout: n,
		nWidth: i,
		nHeight: a,
		nLeft: s,
		label: o,
		nCarouselWidth: l,
		onItemFocus: c,
		onItemHover: m,
		showAsHovered: d,
		...p
	} = e;
	const g = q3(() => $e.tw.GetAppOverviewByAppID(t));
	const h = {
		width: i,
		height: a,
	};
	const _ = A_1(
		Ir.BasicGameCarouselItemMediaContainer,
		r && Ir.Featured,
		n && Ir.Short,
	);
	const f = {
		height: a - parseInt(Ir.LabelHeight),
	};
	const b = A.useCallback(() => true, []);
	const y = A.useCallback(() => c && c(t, true), [t, c]);
	const w = A.useRef(undefined);
	((e, t, r) => {
		A.useEffect(() => {
			if (!e) {
				return;
			}
			if (!t.current) {
				return;
			}
			let n;
			const i = () => {
				if (r) {
					n = setTimeout(() => {
						n = undefined;
						e(false);
					}, r);
				} else {
					e(false);
				}
			};
			const a = () => {
				if (n) {
					clearTimeout(n);
					n = undefined;
				} else {
					e(true);
				}
			};
			const s = t.current;
			s.addEventListener("mouseenter", a);
			s.addEventListener("mouseleave", i);
			return () => {
				s.removeEventListener("mouseenter", a);
				s.removeEventListener("mouseleave", i);
				if (n) {
					clearTimeout(n);
					n = undefined;
					e(false);
				}
			};
		}, [t, e, r]);
	})(m, w, 250);
	return A.createElement(
		C.Z,
		{
			navKey: t,
			className: Ir.BasicGameCarouselItem,
			onFocus: y,
			...p,
		},
		e.label,
		g &&
			A.createElement(
				C.Z,
				{
					className: _,
					style: h,
				},
				A.createElement(
					"div",
					{
						className: Ir.AppPortraitWrapper,
						style: f,
						ref: w,
					},
					A.createElement(yr.TK, {
						app: g,
						bFeatured: e.bFeatured,
						bShowFriendsAsIcons: true,
						context: 2,
						bShortLayout: n,
						fnScrollIntoViewHandler: b,
						bShowAsHovered: d,
					}),
					A.createElement(wr.z, {
						app: g,
						eAssetType: e.bFeatured ? 3 : 0,
						className: A_1(
							Ir.CarouselCapsuleBackgroundGlow,
							Ir.PortraitImage,
							Ir.Capsule,
							Ir.CapsuleVisible,
							d && Ir.ShowAsHovered,
						),
					}),
				),
				A.createElement(Dr, {
					nLeft: s,
					nCarouselWidth: l,
					app: g,
					bShowAsHovered: d,
				}),
			),
	);
});
const Fr = (e) => {
	const { nWidth: t, nHeight: r, strLabel: n, fnOnActivate: i, ...a } = e;
	const s = {
		width: t,
		height: r - parseInt(Ir.LabelHeight),
	};
	const o = A_1(
		Ir.TextBoxCarouselContents,
		Ir.BasicGameCarouselItemMediaContainer,
	);
	return A.createElement(
		"div",
		{
			className: Ir.BasicGameCarouselItem,
			...a,
		},
		A.createElement(
			C.Z,
			{
				focusable: true,
				className: o,
				style: s,
				onActivate: i,
			},
			Localize(e.strLabel),
		),
	);
};
const Gr = PA((e) => {
	const {
		className: t,
		games: r,
		name: n,
		fnGetLabel: i,
		autoFocus: a,
		onItemFocus: s,
		overscan: o,
		showFeaturedItem: l = true,
	} = e;
	const c = A.useRef(undefined);
	const [m, d] = A.useState(0);
	const p = A.useCallback((e) => {
		d(e);
	}, []);
	const g = A.useContext(Er.g);
	const h = q3(() => YQ(g.libraryWidth, g.libraryHeight));
	const _ = A.useCallback(
		(e) => {
			let { childWidth: t, childHeight: r, bShort: n } = aH(h, true);
			if (t > 175) {
				t = 175;
				r = 262.5;
			}
			r += parseInt(Ir.LabelHeight);
			return {
				nItemWidth: t,
				nItemHeight: r,
				bShortLayout: n,
			};
		},
		[h],
	);
	const { nItemWidth: f, nItemHeight: b, bShortLayout: y } = _(window);
	const [w, B] = A.useState(0);
	const v = A.useCallback(
		(e) => {
			B((t) => t + (e ? 1 : -1));
		},
		[B],
	);
	const I = bJ();
	const E = A.useRef("");
	const M = A.useCallback(
		(e, t, n, a) => {
			if (e == r.length) {
				return A.createElement(Or, {
					nWidth: t,
					nHeight: n,
				});
			}
			const o = r[e];
			const m = e === 0 && l;
			if (o == 0) {
				return A.createElement(C.Z, {
					focusable: false,
					className: Ir.FeaturedSeparator,
				});
			}
			const { label: u, strLabelText: d } = i
				? i(o, e, E.current)
				: {
						label: undefined,
						strLabelText: "",
					};
			E.current = d;
			const p = {
				appid: o,
				bFeatured: m,
				bShortLayout: y,
				label: u,
				nWidth: t,
				nHeight: n,
				nLeft: a,
				nCarouselWidth: c.current && c.current.clientWidth,
				onItemFocus: s,
				onItemHover: v,
				showAsHovered: !I && e === 0 && w === 0,
			};
			return A.createElement(Nr, {
				...p,
			});
		},
		[y, i, s, v, r, l, I, w],
	);
	const T = A.useCallback(
		(e) => (e == r.length ? "GoToLibrary" : r[e].toString()),
		[r],
	);
	const R = A.useCallback((e) => e == r.length || r[e] !== 0, [r]);
	let k = A.useCallback(
		(e) => (e === 0 && l ? (690 / 215) * f : r[e] === 0 ? 10 : f),
		[r, f, l],
	);
	if (r.length == 0) {
		return null;
	}
	const D =
		parseInt(Ir.CarouselTopPadding) + parseInt(Ir.CarouselBottomPadding) + 30;
	const N = parseInt(Ir.ItemMarginRight);
	return A.createElement(
		Tr.Provider,
		{
			value: m,
		},
		A.createElement(
			"div",
			{
				ref: c,
				className: Ir.OuterWrapper,
			},
			A.createElement(br.X, {
				name: n,
				className: A_1(
					t,
					Ir.BasicGameCarousel,
					y && Ir.Short,
					Ir.VirtualizedBoxCarousel,
				),
				fnItemRenderer: M,
				fnGetColumnWidth: k,
				fnGetId: T,
				fnOnScroll: p,
				fnDoesItemTakeFocus: R,
				nNumItems: r.length + 1,
				nHeight: b + D,
				nItemHeight: b,
				nItemMarginX: N,
				autoFocus: a,
				scrollToAlignment: "center",
				scrollDuration: 120,
				overscan: o,
			}),
		),
	);
});
function Or(e) {
	const { nWidth: t, nHeight: r } = e;
	const n = k1();
	const i = useCallback(() => n.LibraryTab("AllGames"), [n]);
	return A.createElement(Fr, {
		nWidth: t,
		nHeight: r,
		strLabel: "#GamepadHome_GoToLibrary",
		fnOnActivate: i,
	});
}
const Lr = Pr;
const Ur = "recentgames_show_vr_only";
function Wr(e) {
	let t = e.rt_last_time_locally_played || 0;
	let r = e.rt_purchased_time || 0;
	let n = 0;
	if (e.local_per_client_data && e.local_per_client_data.installed) {
		n = e.rt_last_time_played_or_installed || 0;
	}
	return Math.max(t, r, n);
}
const Vr = (e) => {
	const { autoFocus: t, onItemFocus: r, games: n, showFeaturedItem: i } = e;
	return A.createElement(Gr, {
		name: Localize("#LibraryHome_RecentGames"),
		games: n,
		autoFocus: t,
		onItemFocus: r,
		overscan: n.length,
		showFeaturedItem: i,
	});
};
const Hr = (e) => {
	const { appid: t, previousAppid: r, preloadAppid: n, movementRight: i } = e;
	return A.createElement(
		"div",
		{
			className: Lr.RecentGamesBackgroundImages,
		},
		A.createElement(jr, {
			key: t,
			appid: t,
			mode: "active",
			movementRight: i,
		}),
		r !== undefined &&
			A.createElement(jr, {
				key: r,
				appid: r,
				mode: "inactive",
				movementRight: i,
			}),
		n !== undefined &&
			A.createElement(jr, {
				key: n,
				appid: n,
				mode: "preload",
				movementRight: i,
			}),
	);
};
function jr(e) {
	const { appid: t, mode: r, movementRight: n } = e;
	const i = T_3(t);
	const a = Co_3(t);
	if (!i) {
		return null;
	}
	let s = "";
	if (r != "preload") {
		s = A_1(
			Lr.RecentGamesBackgroundImage,
			r == "inactive" && Lr.OffScreen,
			n ? Lr.MoveRight : Lr.MoveLeft,
		);
	}
	return A.createElement(wr.z, {
		className:
			r == "preload"
				? Lr.RecentGamesBackgroundImagePreload
				: Lr.RecentGamesBackground,
		imageClassName: s,
		eAssetType: 1,
		app: a,
		backgroundType: "transparent",
	});
}
const qr = (e) => {
	const { games: t, refOnItemFocus: r } = e;
	const [n, i] = A.useState(t[0]);
	const [a, s] = A.useState(undefined);
	const [o, l] = A.useState(t.length > 1 ? t[1] : undefined);
	const [c, m] = A.useState(true);
	const u = A.useCallback(
		(e) => {
			let r = t.findIndex((t) => t === e);
			let a = t.findIndex((e) => e === n);
			if (a == r) {
				a = undefined;
			}
			let o = a === undefined || r > a ? r + 1 : r - 1;
			i(e);
			s(a !== undefined ? t[a] : undefined);
			l(o >= 0 && o < t.length ? t[o] : undefined);
			m(a === undefined || r > a);
		},
		[t, n],
	);
	A.useEffect(() => {
		r.current = u;
	}, [r, u]);
	if (n) {
		return A.createElement(
			"div",
			{
				className: Lr.RecentGamesBackgroundContainer,
			},
			A.createElement(Hr, {
				appid: n,
				previousAppid: a,
				preloadAppid: o,
				movementRight: c,
			}),
			A.createElement("div", {
				className: Lr.RecentGamesBackgroundFadeGradient,
			}),
		);
	} else {
		return null;
	}
};
function Qr() {
	return A.createElement(
		C.Z,
		{
			className: Lr.LibraryHomeEmptyGames,
		},
		A.createElement(
			"div",
			{
				className: Lr.TextBody,
			},
			Localize("#Library_Recent_NoRecentGames_NoGames"),
		),
		A.createElement(
			"div",
			{
				className: A_1(Lr.TextBody, Lr.Smaller),
			},
			Localize(
				"#Library_Recent_NoRecentGames_StoreLink",
				Localize("#Library_Recent_NoRecentGames_SteamStore"),
			),
		),
		A.createElement(
			C.Z,
			{
				className: Lr.OptionContainer,
			},
			A.createElement(
				C.Z,
				{
					focusable: true,
					className: Lr.Option,
					onActivate: ut_1(),
				},
				Localize("#Library_Recent_NoRecentGames_FreeToPlay"),
			),
			A.createElement(
				C.Z,
				{
					focusable: true,
					className: Lr.Option,
					onActivate: ZQ(),
				},
				Localize("#Library_Recent_NoRecentGames_GamesOnSale"),
			),
			A.createElement(
				C.Z,
				{
					focusable: true,
					className: Lr.Option,
					onActivate: vT(),
				},
				Localize("#Library_Recent_NoRecentGames_NewReleases"),
			),
		),
	);
}
const Zr = A.memo((e) => {
	const { autoFocus: t, showBackground: r = true } = e;
	const [n, i] = A.useState();
	const a = rP();
	const s = a.IN_VR;
	const l = A.useMemo(() => new xr.A(), []);
	const [c, m] = A.useState(false);
	A.useEffect(() => {
		if (s) {
			l.GetObject(Ur).then((e) => m(e));
		}
	}, [s, l]);
	const { bHeaderVisible: d, setHeaderVisible: p } = (() => {
		const [e, t] = A.useState(true);
		A.useEffect(() => {
			let r;
			if (e) {
				r = setTimeout(() => t(false), 8000);
			}
			return () => clearTimeout(r);
		}, [e]);
		return {
			bHeaderVisible: e,
			setHeaderVisible: t,
		};
	})();
	const g = ((e) => {
		const t = gb();
		const r = rP();
		const n = r.IN_VR;
		const i = r.IN_VR;
		return q3(() => {
			let r = Ce.md.GetCollection(Ce.A8.Recent).visibleApps;
			let a = Ce.md.GetCollection(Ce.A8.LocalPlayed).visibleApps;
			let s = Ce.md.GetCollection(Ce.A8.RecentPurchased).visibleApps;
			let l = Ce.md.GetCollection(Ce.A8.LocalGames).visibleApps;
			let c = [];
			let m = a.slice();
			c.push(...m.map((e) => e.appid));
			const u = m.shift();
			s = s.filter((e) => !c.includes(e.appid));
			m.push(...s);
			c.push(...s.map((e) => e.appid));
			l = l.filter((e) => !c.includes(e.appid));
			m.push(...l);
			c.push(...l.map((e) => e.appid));
			m.sort((e, t) => Wr(t) - Wr(e));
			if (u) {
				m.unshift(u);
			}
			r = r.filter((e) => !c.includes(e.appid));
			m.splice(15, 0, ...r);
			if (w.TS.ON_DECK && !t) {
				m = m.filter((e) => !o.oy.BIsVrOnlyGame(e));
			}
			if (e) {
				m = m
					.filter((e) => e.BSupportsVR())
					.concat(m.filter((e) => !e.BSupportsVR()));
			}
			m = m.filter(
				(e) => !e.BIsApplicationOrTool() || e.minutes_playtime_forever > 0,
			);
			if (n) {
				m = m.filter((e) => !e.BIsSteamVR());
			}
			let d = o.oy.MainRunningApp;
			if (i) {
				m = m.filter((e) => !o.oy.BIsVROverlayApp(e));
				if (d && o.oy.BIsVROverlayApp(d) === true) {
					d = undefined;
				}
			}
			if (d && (!n || !d.BIsSteamVR())) {
				let e = Object.assign({}, d);
				e.appid = 0;
				m = m.filter((e) => e.appid != d.appid);
				m.unshift(e);
				m.unshift(d);
			}
			m.splice(20);
			return JSON.stringify(m.map((e) => e.appid));
		});
	})(s && c);
	const h = A.useMemo(() => JSON.parse(g), [g]);
	const _ = q3(() => o.oy.MainRunningApp?.appid);
	const b = h.length > 0 && ak(h[0]);
	const y = _ == n;
	const B = A.useRef(undefined);
	const v = A.useCallback(
		(e) => {
			i(e);
			B?.current(e);
			p(true);
		},
		[B, p],
	);
	const I = A_1(Lr.RecentGamesContainer, a.IN_VR && Lr.VR);
	if (h.length === 0) {
		return A.createElement(Qr, null);
	}
	return A.createElement(
		C.Z,
		{
			className: I,
			"flow-children": "column",
		},
		r &&
			A.createElement(qr, {
				games: h,
				refOnItemFocus: B,
			}),
		A.createElement(
			"div",
			{
				className: Lr.RecentGamesInnerContainer,
			},
			A.createElement(
				"div",
				{
					className: Lr.RecentGamesHeader,
				},
				A.createElement(
					"div",
					{
						className: A_1(
							Lr.RecentGamesHeaderLabel,
							d ? Lr.HeaderEnter : Lr.HeaderExit,
						),
					},
					Localize(y ? "#Showcase_CurrentGame" : "#Showcase_RecentGames"),
				),
				A.createElement("div", {
					className: Lr.Spacer,
				}),
				a.IN_VR &&
					A.createElement(
						"div",
						{
							className: Lr.FilterContainer,
						},
						A.createElement(
							"div",
							{
								className: Lr.VRFilterText,
							},
							Localize("#LibraryHome_PrioritizeVR"),
						),
						A.createElement(f.J0, {
							onChange: () => {
								m(!c);
								l.StoreObject(Ur, !c);
							},
							value: c,
						}),
					),
			),
			A.createElement(Vr, {
				games: h,
				autoFocus: t,
				onItemFocus: v,
				showFeaturedItem: !b,
			}),
		),
	);
});
const nn = rn;
const an = (e) =>
	e.overview
		? A.createElement(
				"div",
				{
					className: nn.GameIconAndName,
				},
				A.createElement(wr.z, {
					app: e.overview,
					eAssetType: 4,
					className: nn.GameIcon,
				}),
				A.createElement(
					"div",
					{
						className: nn.GameName,
					},
					e.overview.display_name,
				),
			)
		: null;
const sn = (e) => {
	const [t] = e("b24HourClock");
	return A.createElement(
		"div",
		{
			className: nn.PatchNotes,
		},
		A.createElement(
			"span",
			{
				className: A_1(nn.EventType, nn[`EventType${e.event.GetEventType()}`]),
			},
			e.event.GetCategoryAsString(),
		),
		A.createElement("span", null, "\xA0-\xA0"),
		A.createElement(
			"span",
			{
				className: nn.PostedTime,
			},
			LocalizeCalendarTime(e.event.GetPostTimeAndDateUnixSeconds(), {
				bGranularToday: true,
				bGranularWeek: true,
				bAbbreviateDayOfWeek: true,
				bForce24HourClock: t,
			}),
			" ",
		),
	);
};
const on = (e) => {
	const [t] = e("b24HourClock");
	return A.createElement(
		"div",
		{
			className: nn.DownloadInfo,
		},
		A.createElement(
			"div",
			{
				className: nn.Bytes,
			},
			dm_2(R2(e.item), {
				nDigitsAfterDecimal: 1,
				bValueIsInBytes: true,
			}),
		),
		A.createElement(
			"div",
			{
				className: nn.Date,
			},
			Localize(
				"#LibraryHome_RecentlyCompleted_DownloadDate",
				LocalizeCalendarTime(e.item.completed_time, {
					bGranularToday: true,
					bGranularWeek: true,
					bAbbreviateDayOfWeek: true,
					bForce24HourClock: t,
				}),
			),
		),
	);
};
const ln = (e) => {
	const { item: t, width: r, height: n } = e;
	const [i, a] = A.useState();
	const s = $e.tw.GetAppOverviewByAppID(t.appid);
	const { data: o } = dZ(t);
	const l = o && o.length ? o[0] : undefined;
	const c = l && l.clan_event_gid;
	A.useEffect(() => {
		if (l) {
			Yr.IB.LoadPartnerEventFromClanEventGID(l.appid, l.clan_event_gid, 0).then(
				(e) => {
					a(e);
				},
			);
		}
	}, [l]);
	const m = br_2();
	const u = {
		width: r,
		height: n,
	};
	return A.createElement(
		C.Z,
		{
			className: A_1(
				nn.RecentlyCompletedItem,
				i && i.GetEventType() == 14 && nn.MajorEvent,
			),
			style: u,
			onActivate: () => m.App(t.appid),
			onOptionsActionDescription: c
				? Localize("#Downloads_ViewPatchNotes")
				: undefined,
			onOptionsButton: c
				? () =>
						m.Home({
							partnerEvent: {
								appid: t.appid,
								gid: c,
							},
						})
				: undefined,
		},
		A.createElement(
			"div",
			{
				className: nn.TopSection,
			},
			A.createElement(an, {
				overview: s,
			}),
		),
		A.createElement(
			"div",
			{
				className: nn.BottomSection,
			},
			i &&
				A.createElement(sn, {
					event: i,
				}),
			A.createElement(on, {
				item: t,
			}),
		),
	);
};
const cn = () => {
	const e = JS();
	const t = Number.parseInt(nn.ItemWidth);
	const r = Number.parseInt(nn.GridHeight);
	const n = Number.parseInt(nn.ItemHeight);
	const i = Number.parseInt(nn.ItemMargin);
	const a = A.useCallback((e) => t, [t]);
	if (e.length == 0) {
		return null;
	}
	return A.createElement(
		he.Lv,
		null,
		A.createElement(
			C.Z,
			{
				className: nn.RecentlyCompleted,
			},
			A.createElement(
				he.Lv.Unbleed,
				null,
				A.createElement(
					"div",
					{
						className: nn.Header,
					},
					Localize("#LibraryHome_RecentlyCompleted"),
				),
			),
			A.createElement(br.X, {
				name: "RecentlyCompleted",
				className: nn.RecentlyCompletedCarousel,
				nNumItems: e.length,
				nHeight: r,
				nItemHeight: n,
				nItemMarginX: i,
				fnGetColumnWidth: a,
				fnGetId: (t) => e[t].appid.toString(),
				fnItemRenderer: (t, r, n, i) => {
					const a = e[t];
					return A.createElement(ln, {
						key: a.appid,
						item: a,
						width: r,
						height: n,
					});
				},
				scrollToAlignment: "center",
			}),
		),
	);
};
function Cn(e, t, r, n) {
	lX(
		A.createElement(_n, {
			snr: n,
			storeitem: t,
			fnNavigateToStore: r,
		}),
		e,
	);
	e.preventDefault();
	e.stopPropagation();
}
function _n(e) {
	const { storeitem: t, fnNavigateToStore: r, snr: n } = e;
	A.useEffect(() => {
		An.Fm.Get().HintLoad();
	}, []);
	const i = q3(() => An.Fm.Get().BIsGameWishlisted(t.GetAppID()));
	const a = q3(() => An.Fm.Get().BIsGameIgnored(t.GetAppID()));
	const s = q3(() => An.Fm.Get().BIsAjaxInFlight() || !An.Fm.Get().BIsLoaded());
	let o = [
		A.createElement(
			N.kt,
			{
				key: "wishlist",
				onSelected: () => An.Fm.Get().UpdateGameWishlist(t.GetAppID(), !i, n),
			},
			i
				? Localize("#LibraryHome_GameCarousel_ContextMenu_RemoveWishlist")
				: Localize("#LibraryHome_GameCarousel_ContextMenu_AddWishlist"),
		),
		A.createElement(
			N.kt,
			{
				key: "ignore",
				onSelected: () => An.Fm.Get().UpdateAppIgnore(t.GetAppID(), !a, n),
			},
			a
				? Localize("#LibraryHome_GameCarousel_ContextMenu_UnIgnore")
				: Localize("#LibraryHome_GameCarousel_ContextMenu_Ignore"),
		),
	];
	return A.createElement(
		N.tz,
		{
			label: t.GetName(),
		},
		A.createElement(
			N.kt,
			{
				onSelected: r,
			},
			Localize("#LibraryHome_GameCarousel_ContextMenu_StorePage"),
		),
		s &&
			A.createElement(Jr.t, {
				position: "center",
				size: "medium",
			}),
		!s && o,
	);
}
const bn = fn;
const yn = (e) =>
	A.createElement(
		"div",
		{
			className: bn.Friends,
		},
		A.createElement(dn.S, {
			keyExtractor: (e) => e.toString(),
			itemRenderer: (e) => {
				const t = Sr.O$.GetFriendState(e);
				if (t) {
					return A.createElement(
						"div",
						{
							className: bn.Avatar,
						},
						A.createElement(un.fH, {
							size: "X-Small",
							friend: t,
						}),
					);
				} else {
					return null;
				}
			},
			remainderRenderer: (e) =>
				A.createElement(
					"div",
					{
						className: A_1(bn.Avatar, bn.Remainder),
					},
					A.createElement(
						"div",
						{
							className: bn.RemainderText,
						},
						"+",
						e,
					),
				),
			items: e.friends,
			totalItemOverride: e.totalFriends,
		}),
	);
const Sn = () =>
	A.createElement(
		"div",
		{
			className: bn.InLibrary,
		},
		A.createElement(
			"div",
			{
				className: bn.BurgerWrapper,
			},
			A.createElement(hn.wVV, {
				size: "10px",
			}),
		),
		Localize("#GameCapsule_InLibrary"),
	);
const wn = (e) => {
	const {
		appid: t,
		rgFriendAccountIDs: r,
		totalFriends: i,
		width: a,
		height: s,
		feature: o,
	} = e;
	const l = (r && r.length > 0) || i > 0;
	const c = $e.tw.GetAppOverviewByAppID(t);
	const [m] = t7(t, wn.k_StoreItemDataRequest);
	const d = mM(c);
	const p = br_2();
	const g = "gamepadgamecapsule";
	const h = Qt_1(Be.B7.BuildStoreAppURL(t, o || g));
	const _ = q3(() => m && An.Fm.Get().BIsGameIgnored(m.GetAppID()));
	const f = er_2();
	if (!d && !m) {
		console.warn("GameCapsule unable to render", t);
		return null;
	}
	const b = {
		width: a,
		height: s,
	};
	const y = c
		? A.createElement(wr.z, {
				eAssetType: 3,
				app: c,
			})
		: A.createElement(wr.z, {
				eAssetType: 3,
				appid: t,
				rgSources: [m.GetAssets().GetHeaderURL(), mn.A],
			});
	const w = c
		? c.steam_deck_compat_category
		: m.GetPlatforms().steam_deck_compat_category;
	let B = [bn.GameCapsule];
	if (_) {
		B.push(bn.IgnoredApp);
	}
	return A.createElement(
		C.Z,
		{
			focusable: true,
			className: A_1(...B),
			style: b,
			onActivate: d ? () => p.App(t) : h,
			onContextMenu: d || ((e) => Cn(e, m, h, g)),
			onMenuButton: d || ((e) => Cn(e, m, h, g)),
			onMenuActionDescription:
				d || Localize("#LibraryHome_GameCarousel_ContextMenu"),
		},
		y,
		d && A.createElement(Sn, null),
		f &&
			A.createElement(Se.$o, {
				className: bn.DeckCompat,
				category: w,
			}),
		A.createElement(
			"div",
			{
				className: bn.BottomBar,
			},
			l &&
				A.createElement(yn, {
					friends: r || [],
					totalFriends: i || 0,
				}),
			!d &&
				A.createElement(
					"div",
					{
						className: bn.PriceCtn,
					},
					A.createElement(gn.kb, {
						storeItem: m,
					}),
				),
		),
	);
};
wn.k_StoreItemDataRequest = {
	include_assets: true,
	include_platforms: true,
	include_release: true,
};
wn.BCanDisplay = (e, t) => {
	const r = $e.tw.GetAppOverviewByAppID(e);
	const n = r && r.BIsOwned();
	const i = t && t.BIsVisible();
	return n || i;
};
const In = vn;
const Nn = kn.Message;
class Fn extends Nn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Fn.prototype.clanid) {
			Dn.Sg(Fn.M());
		}
		Nn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Fn.sm_m ||= {
			proto: Fn,
			fields: {
				clanid: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				listid: {
					n: 2,
					br: Dn.qM.readUint64String,
					bw: Dn.gp.writeUint64String,
				},
			},
		};
		return Fn.sm_m;
	}
	static MBF() {
		Fn.sm_mbf ||= Dn.w0(Fn.M());
		return Fn.sm_mbf;
	}
	toObject(e = false) {
		return Fn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Fn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Fn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Fn();
		return Fn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Fn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Fn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Fn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Fn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserInterface_CuratorData";
	}
}
class Gn extends Nn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Gn.prototype.domain) {
			Dn.Sg(Gn.M());
		}
		Nn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Gn.sm_m ||= {
			proto: Gn,
			fields: {
				domain: {
					n: 1,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				controller: {
					n: 2,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				method: {
					n: 3,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				submethod: {
					n: 4,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				feature: {
					n: 5,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				depth: {
					n: 6,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				countrycode: {
					n: 7,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				webkey: {
					n: 8,
					br: Dn.qM.readUint64String,
					bw: Dn.gp.writeUint64String,
				},
				is_client: {
					n: 9,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				curator_data: {
					n: 10,
					c: Fn,
				},
				is_likely_bot: {
					n: 11,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				is_utm: {
					n: 12,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
			},
		};
		return Gn.sm_m;
	}
	static MBF() {
		Gn.sm_mbf ||= Dn.w0(Gn.M());
		return Gn.sm_mbf;
	}
	toObject(e = false) {
		return Gn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Gn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Gn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Gn();
		return Gn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Gn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Gn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Gn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Gn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserInterface_NavData";
	}
}
const Pn = kn.Message;
class Ln extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ln.prototype.steamid) {
			Dn.Sg(Ln.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ln.sm_m ||= {
			proto: Ln,
			fields: {
				steamid: {
					n: 1,
					br: Dn.qM.readFixed64String,
					bw: Dn.gp.writeFixed64String,
				},
			},
		};
		return Ln.sm_m;
	}
	static MBF() {
		Ln.sm_mbf ||= Dn.w0(Ln.M());
		return Ln.sm_mbf;
	}
	toObject(e = false) {
		return Ln.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Ln.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Ln.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Ln();
		return Ln.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Ln.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Ln.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Ln.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Ln.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlist_Request";
	}
}
class zn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zn.prototype.items) {
			Dn.Sg(zn.M());
		}
		Pn.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zn.sm_m ||= {
			proto: zn,
			fields: {
				items: {
					n: 1,
					c: xn,
					r: true,
					q: true,
				},
			},
		};
		return zn.sm_m;
	}
	static MBF() {
		zn.sm_mbf ||= Dn.w0(zn.M());
		return zn.sm_mbf;
	}
	toObject(e = false) {
		return zn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(zn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(zn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new zn();
		return zn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(zn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		zn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(zn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		zn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlist_Response";
	}
}
class xn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!xn.prototype.appid) {
			Dn.Sg(xn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		xn.sm_m ||= {
			proto: xn,
			fields: {
				appid: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				priority: {
					n: 2,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				date_added: {
					n: 3,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
			},
		};
		return xn.sm_m;
	}
	static MBF() {
		xn.sm_mbf ||= Dn.w0(xn.M());
		return xn.sm_mbf;
	}
	toObject(e = false) {
		return xn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(xn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(xn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new xn();
		return xn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(xn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		xn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(xn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		xn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlist_Response_WishlistItem";
	}
}
class Un extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Un.prototype.appid) {
			Dn.Sg(Un.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Un.sm_m ||= {
			proto: Un,
			fields: {
				appid: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				navdata: {
					n: 2,
					c: Gn,
				},
			},
		};
		return Un.sm_m;
	}
	static MBF() {
		Un.sm_mbf ||= Dn.w0(Un.M());
		return Un.sm_mbf;
	}
	toObject(e = false) {
		return Un.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Un.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Un.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Un();
		return Un.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Un.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Un.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Un.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Un.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_AddToWishlist_Request";
	}
}
class Wn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Wn.prototype.wishlist_count) {
			Dn.Sg(Wn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Wn.sm_m ||= {
			proto: Wn,
			fields: {
				wishlist_count: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
			},
		};
		return Wn.sm_m;
	}
	static MBF() {
		Wn.sm_mbf ||= Dn.w0(Wn.M());
		return Wn.sm_mbf;
	}
	toObject(e = false) {
		return Wn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Wn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Wn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Wn();
		return Wn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Wn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Wn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Wn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Wn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_AddToWishlist_Response";
	}
}
class Vn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Vn.prototype.appid) {
			Dn.Sg(Vn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Vn.sm_m ||= {
			proto: Vn,
			fields: {
				appid: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
			},
		};
		return Vn.sm_m;
	}
	static MBF() {
		Vn.sm_mbf ||= Dn.w0(Vn.M());
		return Vn.sm_mbf;
	}
	toObject(e = false) {
		return Vn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Vn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Vn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Vn();
		return Vn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Vn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Vn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Vn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Vn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_RemoveFromWishlist_Request";
	}
}
class Hn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Hn.prototype.wishlist_count) {
			Dn.Sg(Hn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Hn.sm_m ||= {
			proto: Hn,
			fields: {
				wishlist_count: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
			},
		};
		return Hn.sm_m;
	}
	static MBF() {
		Hn.sm_mbf ||= Dn.w0(Hn.M());
		return Hn.sm_mbf;
	}
	toObject(e = false) {
		return Hn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Hn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Hn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Hn();
		return Hn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Hn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Hn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Hn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Hn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_RemoveFromWishlist_Response";
	}
}
class jn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!jn.prototype.steamid) {
			Dn.Sg(jn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		jn.sm_m ||= {
			proto: jn,
			fields: {
				steamid: {
					n: 1,
					br: Dn.qM.readFixed64String,
					bw: Dn.gp.writeFixed64String,
				},
			},
		};
		return jn.sm_m;
	}
	static MBF() {
		jn.sm_mbf ||= Dn.w0(jn.M());
		return jn.sm_mbf;
	}
	toObject(e = false) {
		return jn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(jn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(jn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new jn();
		return jn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(jn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		jn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(jn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		jn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlistItemCount_Request";
	}
}
class qn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qn.prototype.count) {
			Dn.Sg(qn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qn.sm_m ||= {
			proto: qn,
			fields: {
				count: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
			},
		};
		return qn.sm_m;
	}
	static MBF() {
		qn.sm_mbf ||= Dn.w0(qn.M());
		return qn.sm_mbf;
	}
	toObject(e = false) {
		return qn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(qn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(qn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new qn();
		return qn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(qn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		qn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(qn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		qn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlistItemCount_Response";
	}
}
class Qn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Qn.prototype.context) {
			Dn.Sg(Qn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Qn.sm_m ||= {
			proto: Qn,
			fields: {
				context: {
					n: 1,
					c: On.TS,
				},
				data_request: {
					n: 2,
					c: On.gn,
				},
			},
		};
		return Qn.sm_m;
	}
	static MBF() {
		Qn.sm_mbf ||= Dn.w0(Qn.M());
		return Qn.sm_mbf;
	}
	toObject(e = false) {
		return Qn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Qn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Qn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Qn();
		return Qn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Qn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Qn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Qn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Qn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlistItemsOnSale_Request";
	}
}
class Zn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Zn.prototype.items) {
			Dn.Sg(Zn.M());
		}
		Pn.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Zn.sm_m ||= {
			proto: Zn,
			fields: {
				items: {
					n: 1,
					c: Yn,
					r: true,
					q: true,
				},
			},
		};
		return Zn.sm_m;
	}
	static MBF() {
		Zn.sm_mbf ||= Dn.w0(Zn.M());
		return Zn.sm_mbf;
	}
	toObject(e = false) {
		return Zn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Zn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Zn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Zn();
		return Zn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Zn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Zn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Zn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Zn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlistItemsOnSale_Response";
	}
}
class Yn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Yn.prototype.appid) {
			Dn.Sg(Yn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Yn.sm_m ||= {
			proto: Yn,
			fields: {
				appid: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				store_item: {
					n: 2,
					c: On.vB,
				},
			},
		};
		return Yn.sm_m;
	}
	static MBF() {
		Yn.sm_mbf ||= Dn.w0(Yn.M());
		return Yn.sm_mbf;
	}
	toObject(e = false) {
		return Yn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Yn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Yn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Yn();
		return Yn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Yn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Yn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Yn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Yn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlistItemsOnSale_Response_WishlistItem";
	}
}
class Kn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Kn.prototype.macos_only) {
			Dn.Sg(Kn.M());
		}
		Pn.initialize(this, e, 0, -1, [24], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Kn.sm_m ||= {
			proto: Kn,
			fields: {
				macos_only: {
					n: 1,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				steamos_linux_only: {
					n: 2,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				only_games: {
					n: 10,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				only_software: {
					n: 11,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				only_dlc: {
					n: 12,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				only_free: {
					n: 13,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				max_price_in_cents: {
					n: 20,
					br: Dn.qM.readInt64String,
					bw: Dn.gp.writeInt64String,
				},
				min_discount_percent: {
					n: 21,
					br: Dn.qM.readInt32,
					bw: Dn.gp.writeInt32,
				},
				exclude_types: {
					n: 22,
					c: Xn,
				},
				steam_deck_filters: {
					n: 23,
					c: Jn,
				},
				tagids_must_match: {
					n: 24,
					r: true,
					q: true,
					br: Dn.qM.readInt32,
					pbr: Dn.qM.readPackedInt32,
					bw: Dn.gp.writeRepeatedInt32,
				},
			},
		};
		return Kn.sm_m;
	}
	static MBF() {
		Kn.sm_mbf ||= Dn.w0(Kn.M());
		return Kn.sm_mbf;
	}
	toObject(e = false) {
		return Kn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Kn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Kn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Kn();
		return Kn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Kn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Kn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Kn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Kn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlistFilters";
	}
}
class Xn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Xn.prototype.exclude_early_access) {
			Dn.Sg(Xn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Xn.sm_m ||= {
			proto: Xn,
			fields: {
				exclude_early_access: {
					n: 1,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				exclude_coming_soon: {
					n: 2,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				exclude_vr_only: {
					n: 3,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
			},
		};
		return Xn.sm_m;
	}
	static MBF() {
		Xn.sm_mbf ||= Dn.w0(Xn.M());
		return Xn.sm_mbf;
	}
	toObject(e = false) {
		return Xn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Xn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Xn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Xn();
		return Xn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Xn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Xn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Xn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Xn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlistFilters_ExcludeTypeFilters";
	}
}
class Jn extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Jn.prototype.include_verified) {
			Dn.Sg(Jn.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Jn.sm_m ||= {
			proto: Jn,
			fields: {
				include_verified: {
					n: 1,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
				include_playable: {
					n: 2,
					br: Dn.qM.readBool,
					bw: Dn.gp.writeBool,
				},
			},
		};
		return Jn.sm_m;
	}
	static MBF() {
		Jn.sm_mbf ||= Dn.w0(Jn.M());
		return Jn.sm_mbf;
	}
	toObject(e = false) {
		return Jn.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Jn.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Jn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Jn();
		return Jn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Jn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Jn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Jn.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Jn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlistFilters_SteamDeckFilters";
	}
}
class $n extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$n.prototype.steamid) {
			Dn.Sg($n.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$n.sm_m ||= {
			proto: $n,
			fields: {
				steamid: {
					n: 1,
					br: Dn.qM.readFixed64String,
					bw: Dn.gp.writeFixed64String,
				},
				context: {
					n: 2,
					c: On.TS,
				},
				data_request: {
					n: 3,
					c: On.gn,
				},
				sort_order: {
					n: 4,
					d: 0,
					br: Dn.qM.readEnum,
					bw: Dn.gp.writeEnum,
				},
				filters: {
					n: 5,
					c: Kn,
				},
				start_index: {
					n: 6,
					d: 0,
					br: Dn.qM.readInt32,
					bw: Dn.gp.writeInt32,
				},
				page_size: {
					n: 7,
					d: 100,
					br: Dn.qM.readInt32,
					bw: Dn.gp.writeInt32,
				},
			},
		};
		return $n.sm_m;
	}
	static MBF() {
		$n.sm_mbf ||= Dn.w0($n.M());
		return $n.sm_mbf;
	}
	toObject(e = false) {
		return $n.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT($n.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq($n.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new $n();
		return $n.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj($n.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		$n.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0($n.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		$n.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlistSortedFiltered_Request";
	}
}
class ei extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ei.prototype.items) {
			Dn.Sg(ei.M());
		}
		Pn.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ei.sm_m ||= {
			proto: ei,
			fields: {
				items: {
					n: 1,
					c: ti,
					r: true,
					q: true,
				},
			},
		};
		return ei.sm_m;
	}
	static MBF() {
		ei.sm_mbf ||= Dn.w0(ei.M());
		return ei.sm_mbf;
	}
	toObject(e = false) {
		return ei.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(ei.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(ei.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new ei();
		return ei.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(ei.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		ei.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(ei.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		ei.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlistSortedFiltered_Response";
	}
}
class ti extends Pn {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ti.prototype.appid) {
			Dn.Sg(ti.M());
		}
		Pn.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ti.sm_m ||= {
			proto: ti,
			fields: {
				appid: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				priority: {
					n: 2,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				date_added: {
					n: 3,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				store_item: {
					n: 4,
					c: On.vB,
				},
			},
		};
		return ti.sm_m;
	}
	static MBF() {
		ti.sm_mbf ||= Dn.w0(ti.M());
		return ti.sm_mbf;
	}
	toObject(e = false) {
		return ti.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(ti.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(ti.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new ti();
		return ti.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(ti.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		ti.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(ti.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		ti.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWishlist_GetWishlistSortedFiltered_Response_WishlistItem";
	}
}
let ri;
((e) => {
	e.GetWishlist = (e, t) =>
		e.SendMsg("Wishlist.GetWishlist#1", I8(Ln, t), zn, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.AddToWishlist = (e, t) =>
		e.SendMsg("Wishlist.AddToWishlist#1", I8(Un, t), Wn, {
			ePrivilege: 1,
		});
	e.RemoveFromWishlist = (e, t) =>
		e.SendMsg("Wishlist.RemoveFromWishlist#1", I8(Vn, t), Hn, {
			ePrivilege: 1,
		});
	e.GetWishlistItemCount = (e, t) =>
		e.SendMsg("Wishlist.GetWishlistItemCount#1", I8(jn, t), qn, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetWishlistItemsOnSale = (e, t) =>
		e.SendMsg("Wishlist.GetWishlistItemsOnSale#1", I8(Qn, t), Zn, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetWishlistSortedFiltered = (e, t) =>
		e.SendMsg("Wishlist.GetWishlistSortedFiltered#1", I8($n, t), ei, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
})((ri ||= {}));
function si(e) {
	const t = KV();
	return I_2({
		queryKey: ["GetWishlistItemsOnSale", e],
		queryFn: () =>
			(async (e, t) => {
				const r = Rn.w.Init(Qn);
				rV(r);
				if (t) {
					Bn_2(r, t);
				}
				const n = await ri.GetWishlistItemsOnSale(e, r);
				if (!n.BSuccess()) {
					console.warn(
						`Failed to get wishlist items on sale EResult=${n.GetEResult()}`,
					);
					return [];
				}
				if (t) {
					for (const e of n.Body().items()) {
						Mn.A.Get().ReadItem(e.store_item(), t);
					}
				}
				return n.Body().toObject().items || [];
			})(t, e),
		staleTime: Seconds.PerMinute * 1000 * 5,
	});
}
const oi = () => {
	const e = si(wn.k_StoreItemDataRequest);
	const t = A.useMemo(() => e.data?.map((e) => e.appid), [e.data]);
	const r = q3(() => t?.filter((e) => !Tn.jR.BIsAppBlocked(e)));
	if (r && r.length) {
		return A.createElement(ci, {
			rgAppIDs: r,
			strTitle: LocalizePlural("#WishlistOnSale_Title", r.length),
			id: "gamepadwishlistonsale",
		});
	} else {
		return null;
	}
};
const li = () => {
	const [e] = VI("show_store_content_on_home");
	const t = T_1();
	let r = q3(() =>
		t.filter((t) => {
			const r = $e.tw.GetAppOverviewByAppID(t.appid);
			return e || (r && r.BIsOwned());
		}),
	);
	return A.createElement(mi, {
		rgCarouselItems: r,
		strTitle: Localize("#TrendingWithFriends_Title"),
		id: "TrendingWithFriends",
	});
};
const ci = (e) => {
	if (!e.rgAppIDs) {
		return null;
	}
	const t = e.rgAppIDs.map((e) => ({
		appid: e,
	}));
	return A.createElement(mi, {
		rgCarouselItems: t,
		...e,
	});
};
const mi = (e) => {
	const t = e.rgCarouselItems;
	const r = Number.parseInt(In.ItemWidth);
	const n = Number.parseInt(In.GridHeight);
	const i = Number.parseInt(In.ItemHeight);
	const a = Number.parseInt(In.ItemMargin);
	const s = ((e, t) => {
		const r = A.useMemo(
			() =>
				e
					.map((e) => e.appid)
					.filter((e) => {
						const t = $e.tw.GetAppOverviewByAppID(e);
						return !t || !t.BIsOwned();
					}),
			[e],
		);
		return I_2({
			queryKey: [`DisplayableCarouselItems_${t}`],
			queryFn: async () => {
				await Mn.A.Get().HintLoadStoreApps(r, wn.k_StoreItemDataRequest);
				return e.filter((e) => {
					const t = Mn.A.Get().GetApp(e.appid);
					return wn.BCanDisplay(e.appid, t);
				});
			},
			staleTime: Infinity,
			enabled: e.length > 0,
		}).data;
	})(t, e.id);
	const o = A.useCallback((e) => s[e].appid.toString(), [s]);
	const l = A.useCallback(
		(t, r, n, i) => {
			const a = s[t];
			return A.createElement(wn, {
				key: o(t),
				appid: a.appid,
				rgFriendAccountIDs: a.rgAccountIDs,
				totalFriends: a.totalFriends,
				width: r,
				height: n,
				feature: e.id,
			});
		},
		[o, e.id, s],
	);
	const c = A.useCallback((e) => r, [r]);
	if (s && s.length != 0) {
		return A.createElement(
			"div",
			{
				className: In.StoreCarouselCtn,
			},
			A.createElement(
				"div",
				{
					className: In.Header,
				},
				e.strTitle,
			),
			A.createElement(
				he.Lv,
				null,
				A.createElement(br.X, {
					name: e.id,
					className: In.ItemsCarousel,
					nNumItems: s.length,
					nHeight: n,
					nItemHeight: i,
					nItemMarginX: a,
					fnGetColumnWidth: c,
					fnGetId: o,
					fnItemRenderer: l,
					scrollToAlignment: "center",
				}),
			),
		);
	} else {
		return null;
	}
};
function pi(e) {
	const { path: t, message: r, eLanguage: n, ...i } = e;
	const a = r.GetTemplateVars()?.last_asset_mtime;
	const s = ((e, t, r, n) => {
		if (!n || !n.path) {
			return null;
		}
		const i = r ? `?t=${r}` : "";
		if (n.path.startsWith("images")) {
			return `${Ai.TS.MEDIA_CDN_URL}steam/marketing/${e}/${n.path}${i}`;
		} else {
			return `${Ai.TS.BASE_URL_SHARED_CDN}store_item_assets/mm/${e}/${t}/${n.path}${i}`;
		}
	})(r.id, n, a, {
		type: "file",
		path: t,
	});
	return A.createElement("img", {
		...i,
		src: s,
	});
}
const _i = Ci;
function yi(e) {
	const {
		message: t,
		alreadySeen: r,
		onClick: n,
		width: i,
		height: a,
		bShowDLCMessage: s,
		bShowPrice: o,
	} = e;
	const l = t.associated_item;
	const c = {
		width: i,
		height: a,
	};
	const m =
		l.GetAssets().GetHeroCapsuleURL()?.trim().length > 0
			? l.GetAssets().GetHeroCapsuleURL()
			: l.GetAssets().GetMainCapsuleURL();
	const u = ((e) => {
		switch (e) {
			case 2: {
				return Localize("#LibraryHome_Spotlight_Weekend");
			}
			case 11: {
				return Localize("#LibraryHome_Spotlight_Midweek");
			}
			case 12: {
				return Localize("#LibraryHome_Spotlight_Daily");
			}
			case 3: {
				return Localize("#LibraryHome_Spotlight_PrePurchase");
			}
			case 5: {
				return Localize("#LibraryHome_Spotlight_PreloadNow");
			}
			case 4:
			case 1: {
				return Localize("#LibraryHome_Spotlight_PlayNow");
			}
			case 6: {
				return Localize("#LibraryHome_MarketingMessages");
			}
			case 13: {
				return Localize("#LibraryHome_Spotlight_DLC_Available");
			}
			case 14: {
				return Localize("#LibraryHome_Spotlight_Free_Weekend");
			}
			case 15: {
				return Localize("#LibraryHome_sale_now");
			}
			case 16: {
				return Localize("#LibraryHome_Play_Beta");
			}
		}
		return null;
	})(t.GetType());
	return A.createElement(
		C.Z,
		{
			className: A_1(_i.MarketingMessage, _i.DLCFallback, r && _i.Seen),
			style: c,
			focusable: true,
			onActivate: n,
		},
		A.createElement("img", {
			className: _i.Image,
			src: m,
		}),
		A.createElement(
			"div",
			null,
			Boolean(u) &&
				A.createElement(
					"div",
					{
						className: _i.Type,
					},
					u,
				),
		),
		s &&
			A.createElement(
				"div",
				{
					className: _i.CallToAction,
				},
				Localize("#LibraryHome_MarketingMessages_DLCOverride"),
			),
		o &&
			A.createElement(gn.kb, {
				storeItem: l,
			}),
	);
}
function Si(e) {
	const { message: t, alreadySeen: r, onClick: n, width: i, height: a } = e;
	const s = {
		width: i,
		height: a,
	};
	const [o, l] = t.GetTemplateImage();
	const c = t.GetTemplateTypeForReporting() == 4;
	const m = t.GetTemplateTypeForReporting() == 7;
	if ((c || m) && t.associated_item) {
		return A.createElement(yi, {
			...e,
			bShowDLCMessage: c,
			bShowPrice: m,
		});
	} else {
		return A.createElement(
			C.Z,
			{
				className: A_1(_i.MarketingMessage, r && _i.Seen),
				style: s,
				focusable: true,
				onActivate: n,
			},
			A.createElement(pi, {
				className: _i.Image,
				message: t,
				path: o,
				eLanguage: l,
			}),
		);
	}
}
function wi() {
	const e = lA();
	const [t, r] = A.useState(false);
	return A.createElement(
		di.K,
		{
			placeholderHeight: 240,
			rootMargin: "0px 0px 200px 0px",
		},
		t ? A.createElement(vi, null) : A.createElement(Ii, null),
		e &&
			A.createElement(fi.C, {
				feature: tt.uX,
				label: "(VO) Use Test Special Offers",
				checked: t,
				onChange: (e) => r(e),
			}),
	);
}
const Bi = "4227289586048552458";
const vi = A.memo(() => {
	const [e, t] = A.useState(null);
	A.useEffect(() => {
		(async () => {
			const e = await Promise.all([
				ui.Nt.Get().GetSingleMessage("1099159580270740022"),
				ui.Nt.Get().GetSingleMessage("7578863524931363874"),
				ui.Nt.Get().GetSingleMessage("7260998652591513116"),
				ui.Nt.Get().GetSingleMessage("7360082821934877115"),
				ui.Nt.Get().GetSingleMessage("4058886069517582009"),
				ui.Nt.Get().GetSingleMessage("3427281805801238900"),
				ui.Nt.Get().GetSingleMessage("1481164789910472111"),
				ui.Nt.Get().GetSingleMessage(Bi),
			]);
			t(
				e.map((e) => {
					const t = new ui.rT(e);
					if (t.GetGID() == Bi) {
						t.GetTemplateVars().custom_display = "dlc_override";
					}
					return t;
				}),
			);
		})();
	}, []);
	if (e) {
		return A.createElement(Ei, {
			rgMarketingMessages: e,
		});
	} else {
		return A.createElement(Jr.t, null);
	}
});
const Ii = A.memo(() => {
	const e = (() => {
		const [e] = VI("show_store_content_on_home");
		const { rgMessages: t } = Ho_2(
			ui.Nt.Get(),
			{
				bIncludeSeenMessages: true,
			},
			{
				enabled: e,
				staleTime: 3600000,
			},
		);
		const r = q3(() =>
			Tn.jR.BIsFeatureBlocked(1)
				? []
				: t?.filter(
						(e) =>
							!e.associated_item?.GetAppID() ||
							!Tn.jR.BIsAppBlocked(e.associated_item.GetAppID()),
					),
		);
		return (e && r) || [];
	})();
	return A.createElement(Ei, {
		rgMarketingMessages: e,
	});
});
const Ei = (e) => {
	const { rgMarketingMessages: t } = e;
	const r = Number.parseInt(_i.ItemWidth);
	const n = Number.parseInt(_i.ItemHeight);
	const i = Number.parseInt(_i.ItemMargin);
	const a = Number.parseInt(_i.GridHeight);
	const [s, o] = A.useState(undefined);
	const l = A.useRef(undefined);
	const c = A.useCallback(
		(e) => {
			l.current = Date.now();
			o(e);
		},
		[o],
	);
	const m = A.useCallback(() => {
		const e = t.indexOf(s) + 1;
		ui.Nt.Get().MarkMessageSeen(s.id, e, s.GetTemplateTypeForReporting());
		o(undefined);
	}, [o, t, s]);
	const u = A.useCallback(
		(e, r, n, i) => {
			const a = t[e];
			const s = ui.Nt.Get().BIsMessageSeen(a.id);
			return A.createElement(Si, {
				key: a.id,
				message: a,
				alreadySeen: s,
				width: r,
				height: n,
				onClick: () => c(a),
			});
		},
		[t, c],
	);
	const d = A.useCallback((e) => t[e].id, [t]);
	const p = A.useCallback((e) => r, [r]);
	if (t.length == 0) {
		return null;
	} else {
		return A.createElement(
			gi.A,
			{
				domain: "steamclient",
				controller: "library",
				submethod: "marketingmessages",
			},
			A.createElement(
				C.Z,
				null,
				A.createElement(
					he.Lv,
					null,
					A.createElement(
						"div",
						{
							className: _i.MarketingMessages,
						},
						A.createElement(
							he.Lv.Unbleed,
							null,
							A.createElement(
								"div",
								{
									className: _i.Header,
								},
								Localize("#LibraryHome_MarketingMessages"),
							),
						),
						A.createElement(br.X, {
							name: "MarketingMessages",
							className: _i.MarketingMessagesCarousel,
							nNumItems: t.length,
							nHeight: a,
							nItemHeight: n,
							nItemMarginX: i,
							fnGetColumnWidth: p,
							fnGetId: d,
							fnItemRenderer: u,
							scrollToAlignment: "center",
						}),
					),
				),
				A.createElement(
					x.EN,
					{
						active: s !== undefined,
					},
					A.createElement(
						v.M,
						{
							className: _i.MarketingModal,
							padding: "none",
						},
						A.createElement(Mi, {
							message: s,
							onClose: m,
						}),
					),
				),
			),
		);
	}
};
function Mi(e) {
	const { message: t, onClose: r } = e;
	const i = A.useRef(undefined);
	const a = lA();
	const [s] = VI("library_low_bandwidth_mode");
	const o = Qt_1(t.GetTemplateVars()?.linkurl);
	let l = `${Be.B7.GetStoreURL()}marketingmessages/${t.id}`;
	const c = new URLSearchParams();
	if (s) {
		c.set("low_bandwidth", "1");
	}
	if (a && t.GetGID() == Bi) {
		l = `${Be.B7.GetStoreURL()}marketingmessages/preview/${t.id}`;
		c.set("dlc_appid_overrides", JSON.stringify([323180, 2678630, 1310460]));
	}
	const m = c.toString();
	l = m ? `${l}?${m}` : l;
	return A.createElement(
		C.Z,
		{
			className: _i.BrowserWrapper,
			focusable: true,
			autoFocus: true,
			onActivate: o,
			onOKActionDescription: Localize("#AppDetails_Links_Store"),
			onCancelButton: r,
			onCancelActionDescription: Localize("#Button_Close"),
		},
		A.createElement(hi.Pw, {
			name: "MarketingMessageBrowser",
			url: l,
			refBrowser: i,
		}),
	);
}
const Ri = Ti;
const ki = () => {
	const e = 1902490;
	const t = Seconds.PerWeek * 2;
	const r = `${Be.B7.GetMediaCDNUrl()}store/steamdeck/desk_job_banner.png`;
	const {
		bVisible: i,
		onViewed: a,
		onDismissed: s,
	} = ((e) => {
		const { storageKey: t, appid: r, displayCutoffSec: n } = e;
		const i = A.useRef(new xr.A());
		const a = Co_3(r);
		const s = q3(() => a && a.visible_in_game_list);
		const [o, l] = A.useState();
		const c = A.useCallback(
			(e = r) => {
				const r = Math.floor(GetUnixTime());
				if (e < o) {
					i.current.StoreObject(t, e);
					l(e);
				}
			},
			[t, o],
		);
		const m = A.useCallback(() => {
			i.current.StoreObject(t, 0);
			l(0);
		}, [t]);
		A.useEffect(() => {
			i.current.GetObject(t).then((e) => {
				l(e === null ? Number.MAX_SAFE_INTEGER : e);
			});
		}, [t, i]);
		const d = GetUnixTime();
		return {
			bVisible: o === undefined ? undefined : !s && o >= d - n && w.TS.ON_DECK,
			onViewed: c,
			onDismissed: m,
		};
	})({
		storageKey: "rtDeskJobPromoFirstSeen",
		appid: e,
		displayCutoffSec: t,
	});
	const o = Qt_1(Be.B7.BuildStoreAppURL(e, "gamepadhomedeskjobpromo"));
	const [l, c] = A.useState(false);
	const [m, d] = A.useState(false);
	const [p, g] = A.useState(false);
	const h = parseInt(Ri.DismissTime);
	const _ = A.useContext(Jo);
	const f = A.useCallback(() => {
		c(true);
		a();
	}, [a]);
	const b = A.useCallback(() => {
		d(true);
	}, []);
	const y = A.useCallback(() => {
		g(true);
		window.setTimeout(() => {
			s();
			if (_?.fnScrollTabsToTop) {
				window.setTimeout(() => {
					_.fnScrollTabsToTop("auto");
				}, 0);
			}
		}, h);
	}, [_, s, h]);
	if (i === false || m) {
		return null;
	} else {
		return A.createElement(
			C.Z,
			{
				navKey: "DeskJobPromo",
				noFocusRing: p,
				className: A_1(Ri.DeskJobPromo, l && Ri.Loaded, p && Ri.Dismissing),
				onActivate: o,
				onSecondaryButton: y,
				onSecondaryActionDescription: Localize("#Button_Dismiss"),
			},
			i !== undefined &&
				A.createElement(
					A.Fragment,
					null,
					A.createElement("img", {
						className: Ri.Banner,
						src: r,
						onLoad: f,
						onError: b,
					}),
					A.createElement(
						"div",
						{
							className: Ri.Text,
						},
						A.createElement(
							"div",
							{
								className: Ri.Title,
							},
							Localize("#DeskJobPromo_Title"),
						),
						A.createElement(
							"div",
							{
								className: Ri.SubTitle,
							},
							Localize("#DeskJobPromo_SubTitle"),
							" ",
						),
					),
				),
		);
	}
};
const Ni = Di;
const Gi = Fi;
const Pi = () =>
	A.createElement(
		"div",
		{
			className: Gi.LibraryHomeWhatsNew,
		},
		A.createElement(b.tH, null, A.createElement(Oi.Uc, null)),
		A.createElement(b.tH, null, A.createElement(ki, null)),
		A.createElement(b.tH, null, A.createElement(Hi, null)),
		A.createElement(b.tH, null, A.createElement(cn, null)),
		A.createElement(b.tH, null, A.createElement(li, null)),
		A.createElement(b.tH, null, A.createElement(wi, null)),
		A.createElement(Li, null),
	);
const Li = () =>
	A.createElement(
		"div",
		{
			className: Gi.Empty,
		},
		Localize("#LibraryHome_WhatsNew_Empty"),
	);
const zi = (e) => {
	const { event: t, focused: r } = e;
	return A.createElement(
		"div",
		{
			className: Gi.EventImageWrapper,
		},
		A.createElement(Ui, {
			event: t,
		}),
		A.createElement("div", {
			className: Gi.Darkener,
		}),
		A.createElement(xi, {
			event: t,
			focused: r,
		}),
	);
};
const xi = A.memo((e) => {
	const { event: t, focused: r } = e;
	const [n, i] = A.useState(undefined);
	A.useEffect(() => i(undefined), [t]);
	A.useEffect(() => {
		if (r && n === undefined) {
			const e = sf(w.TS.LANGUAGE);
			i(t.GetSummaryWithFallback(e));
		}
	}, [r, n, t]);
	return A.createElement(
		"div",
		{
			className: Gi.EventSummary,
		},
		n,
	);
});
const Ui = (e) => {
	const { event: t } = e;
	const r = sf(w.TS.LANGUAGE);
	const n = Yr.dm.FilterImageURLsForKnownFailures(
		t.GetImageForSizeAsArrayWithFallback("capsule", r, Xr.wI.capsule_main),
	);
	return A.createElement(Kr.c, {
		className: Gi.EventImage,
		rgSources: n,
		onIncrementalError: (e, t, r) => Yr.dm.ImageFailureCallback(t),
	});
};
const Wi = (e) => {
	const { index: t, event: r, onFocus: i, width: a, height: s } = e;
	const o = W6();
	const [l, c] = A.useState(false);
	const m = br_2();
	const u = A.useCallback(() => {
		Yr.dm.TrackEventClickedByUser(r, 9);
		m.Home({
			partnerEvent: {
				appid: r.appid,
				gid: r.GID,
			},
		});
	}, [m, r]);
	const d = A.useCallback(() => {
		Yr.dm.TrackEventShownToUser(r, 9);
		if (i) {
			i(t);
		}
	}, [r, t, i]);
	const g = A.useCallback(
		(e) => {
			const t = Yr.dm.GetUserAppPrioritySetting(r.appid);
			const i = $e.tw.GetAppOverviewByAppID(r.appid);
			lX(
				A.createElement(
					N.tz,
					null,
					A.createElement(
						N.kt,
						{
							onSelected: () => m.App(r.appid),
						},
						Localize("#Generic_ViewGameDetails"),
					),
					A.createElement(
						N.kt,
						{
							onSelected: () => Yr.dm.RemoveEvent(r.GID),
						},
						Localize("#MajorUpdate_Context_RemoveThisUpdate"),
					),
					t > -2 &&
						i &&
						A.createElement(
							N.kt,
							{
								onSelected: () => Yr.dm.LowerAppPriorityForApp(r.appid),
							},
							Localize(
								"#MajorUpdate_Context_ShowMeFewerForApp",
								i.display_name,
							),
						),
					t < 2 &&
						i &&
						A.createElement(
							N.kt,
							{
								onSelected: () => Yr.dm.RaiseAppPriorityForApp(r.appid),
							},
							Localize("#MajorUpdate_Context_ShowMeMoreForApp", i.display_name),
						),
					A.createElement(N.K5, null),
					A.createElement(
						N.kt,
						{
							onSelected: () => o.push(n.BV.Settings.Home()),
						},
						Localize("#MajorUpdate_GoToSettings"),
					),
				),
				e,
			);
		},
		[r, m, o],
	);
	const h = {
		width: a,
		height: s,
	};
	const _ = sf(w.TS.LANGUAGE);
	const f = $e.tw.GetAppOverviewByAppID(r.appid);
	if (f) {
		return A.createElement(
			"div",
			{
				className: Gi.OuterWrapper,
				style: h,
			},
			A.createElement(
				"div",
				{
					className: A_1(Gi.EventType, Gi[`EventType${r.GetEventType()}`]),
				},
				r.GetCategoryAsString(),
			),
			A.createElement(
				C.Z,
				{
					className: Gi.EventPreviewContainer,
					focusable: true,
					onActivate: u,
					onContextMenu: g,
					onMenuButton: g,
					onMenuActionDescription: Localize("#ActionButtonLabelContextMenu"),
					onFocus: d,
					onFocusWithin: c,
				},
				A.createElement(zi, {
					event: r,
					focused: l,
				}),
				A.createElement(
					"div",
					{
						className: A_1(Gi.EventInfo, Ni.InLibraryView),
					},
					A.createElement($r.OT, {
						event: r,
						dateRangeLayout: "vertical",
					}),
					A.createElement(
						Vi,
						{
							maxLines: 2,
							className: Gi.Title,
						},
						r.GetNameWithFallback(_),
					),
					A.createElement(
						"div",
						{
							className: Gi.GameIconAndName,
						},
						A.createElement(wr.z, {
							app: f,
							eAssetType: 4,
							className: Gi.GameIcon,
						}),
						A.createElement(
							"div",
							{
								className: Gi.GameName,
							},
							f.display_name,
						),
					),
				),
			),
		);
	} else {
		return null;
	}
};
function Vi(e) {
	const { children: t, className: r, maxLines: n } = e;
	const i = A.useRef(undefined);
	const a = A.useRef(undefined);
	const s = A.useRef(undefined);
	const o = A.useCallback(() => {
		let e;
		let r = n;
		while (
			((e = i.current.getBoundingClientRect().height),
			s.current?.flOuterHeight != e || s.current?.children != t)
		) {
			a.current.style.webkitLineClamp = r.toString();
			if (a.current.getBoundingClientRect().height <= e || r <= 1) {
				break;
			}
			r--;
		}
		s.current = {
			flOuterHeight: e,
			children: t,
		};
	}, [n, t]);
	A.useLayoutEffect(o, [o]);
	const l = wY(o);
	const c = Ue_1(i, l);
	return A.createElement(
		"div",
		{
			ref: c,
			className: A_1(Gi.MultilineClippedText, r),
		},
		A.createElement(
			"div",
			{
				ref: a,
				className: Gi.Inner,
			},
			t,
		),
	);
}
const Hi = () => {
	const {
		bEventsLoaded: e,
		bInitialLoadPending: t,
		eventsToShow: r,
		takeoverEvents: n,
	} = yX();
	const i = parseInt(Gi.ItemPreviewWidth);
	const a = parseInt(Gi.ItemPreviewHeight);
	const s = parseInt(Gi.ItemMarginRight);
	const o = A.useCallback((e) => i, [i]);
	if (!e && t) {
		return A.createElement(
			"div",
			{
				className: A_1(Gi.BasicHomeUpdates, Gi.Loading),
			},
			A.createElement(Jr.t, {
				size: "xlarge",
				position: "center",
			}),
		);
	} else if (r.length == 0) {
		return null;
	} else {
		return A.createElement(
			C.Z,
			{
				navKey: "BasicHomeUpdates",
				className: Gi.BasicHomeUpdates,
			},
			A.createElement(
				he.Lv,
				null,
				A.createElement(br.X, {
					name: "WhatsNew",
					className: Gi.EventCarousel,
					nNumItems: r.length,
					nHeight: a,
					nItemHeight: a,
					nItemMarginX: s,
					fnGetColumnWidth: o,
					fnGetId: (e) => r[e].AnnouncementGID,
					fnItemRenderer: (e, t, n, i) => {
						const a = r[e];
						return A.createElement(Wi, {
							index: e,
							event: a,
							width: t,
							height: n,
						});
					},
					scrollToAlignment: "center",
				}),
			),
		);
	}
};
const Qi = qi;
const Zi = kn.Message;
class Yi extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Yi.prototype.context) {
			Dn.Sg(Yi.M());
		}
		Zi.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Yi.sm_m ||= {
			proto: Yi,
			fields: {
				context: {
					n: 1,
					c: On.TS,
				},
				data_request: {
					n: 2,
					c: On.gn,
				},
			},
		};
		return Yi.sm_m;
	}
	static MBF() {
		Yi.sm_mbf ||= Dn.w0(Yi.M());
		return Yi.sm_mbf;
	}
	toObject(e = false) {
		return Yi.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Yi.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Yi.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Yi();
		return Yi.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Yi.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Yi.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Yi.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Yi.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetMostPlayedGames_Request";
	}
}
class Ki extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ki.prototype.rollup_date) {
			Dn.Sg(Ki.M());
		}
		Zi.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ki.sm_m ||= {
			proto: Ki,
			fields: {
				rollup_date: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				ranks: {
					n: 2,
					c: Xi,
					r: true,
					q: true,
				},
			},
		};
		return Ki.sm_m;
	}
	static MBF() {
		Ki.sm_mbf ||= Dn.w0(Ki.M());
		return Ki.sm_mbf;
	}
	toObject(e = false) {
		return Ki.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Ki.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Ki.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Ki();
		return Ki.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Ki.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Ki.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Ki.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Ki.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetMostPlayedGames_Response";
	}
}
class Xi extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Xi.prototype.rank) {
			Dn.Sg(Xi.M());
		}
		Zi.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Xi.sm_m ||= {
			proto: Xi,
			fields: {
				rank: {
					n: 1,
					br: Dn.qM.readInt32,
					bw: Dn.gp.writeInt32,
				},
				appid: {
					n: 2,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				item: {
					n: 3,
					c: On.vB,
				},
				last_week_rank: {
					n: 4,
					br: Dn.qM.readInt32,
					bw: Dn.gp.writeInt32,
				},
				peak_in_game: {
					n: 5,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				daily_active_players: {
					n: 6,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
			},
		};
		return Xi.sm_m;
	}
	static MBF() {
		Xi.sm_mbf ||= Dn.w0(Xi.M());
		return Xi.sm_mbf;
	}
	toObject(e = false) {
		return Xi.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Xi.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Xi.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Xi();
		return Xi.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Xi.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Xi.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Xi.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Xi.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetMostPlayedGames_Response_MostPlayedRank";
	}
}
class Ji extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ji.prototype.context) {
			Dn.Sg(Ji.M());
		}
		Zi.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ji.sm_m ||= {
			proto: Ji,
			fields: {
				context: {
					n: 1,
					c: On.TS,
				},
				data_request: {
					n: 2,
					c: On.gn,
				},
			},
		};
		return Ji.sm_m;
	}
	static MBF() {
		Ji.sm_mbf ||= Dn.w0(Ji.M());
		return Ji.sm_mbf;
	}
	toObject(e = false) {
		return Ji.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(Ji.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(Ji.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new Ji();
		return Ji.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(Ji.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		Ji.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(Ji.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		Ji.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetGamesByConcurrentPlayers_Request";
	}
}
class $i extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$i.prototype.last_update) {
			Dn.Sg($i.M());
		}
		Zi.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$i.sm_m ||= {
			proto: $i,
			fields: {
				last_update: {
					n: 1,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				ranks: {
					n: 2,
					c: ea,
					r: true,
					q: true,
				},
			},
		};
		return $i.sm_m;
	}
	static MBF() {
		$i.sm_mbf ||= Dn.w0($i.M());
		return $i.sm_mbf;
	}
	toObject(e = false) {
		return $i.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT($i.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq($i.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new $i();
		return $i.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj($i.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		$i.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0($i.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		$i.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetGamesByConcurrentPlayers_Response";
	}
}
class ea extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ea.prototype.rank) {
			Dn.Sg(ea.M());
		}
		Zi.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ea.sm_m ||= {
			proto: ea,
			fields: {
				rank: {
					n: 1,
					br: Dn.qM.readInt32,
					bw: Dn.gp.writeInt32,
				},
				appid: {
					n: 2,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				item: {
					n: 3,
					c: On.vB,
				},
				concurrent_in_game: {
					n: 4,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				peak_in_game: {
					n: 5,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
			},
		};
		return ea.sm_m;
	}
	static MBF() {
		ea.sm_mbf ||= Dn.w0(ea.M());
		return ea.sm_mbf;
	}
	toObject(e = false) {
		return ea.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(ea.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(ea.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new ea();
		return ea.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(ea.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		ea.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(ea.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		ea.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetGamesByConcurrentPlayers_Response_MostPlayedRank";
	}
}
class ta extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Zi.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ta.toObject(e, this);
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
		return new ta();
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new ta();
		return ta.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		ta.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		ta.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetTopReleasesPages_Request";
	}
}
class ra extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ra.prototype.pages) {
			Dn.Sg(ra.M());
		}
		Zi.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ra.sm_m ||= {
			proto: ra,
			fields: {
				pages: {
					n: 1,
					c: na,
					r: true,
					q: true,
				},
			},
		};
		return ra.sm_m;
	}
	static MBF() {
		ra.sm_mbf ||= Dn.w0(ra.M());
		return ra.sm_mbf;
	}
	toObject(e = false) {
		return ra.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(ra.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(ra.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new ra();
		return ra.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(ra.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		ra.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(ra.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		ra.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetTopReleasesPages_Response";
	}
}
class na extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!na.prototype.name) {
			Dn.Sg(na.M());
		}
		Zi.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		na.sm_m ||= {
			proto: na,
			fields: {
				name: {
					n: 1,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				start_of_month: {
					n: 2,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				url_path: {
					n: 3,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				item_ids: {
					n: 4,
					c: On.O4,
					r: true,
					q: true,
				},
			},
		};
		return na.sm_m;
	}
	static MBF() {
		na.sm_mbf ||= Dn.w0(na.M());
		return na.sm_mbf;
	}
	toObject(e = false) {
		return na.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(na.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(na.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new na();
		return na.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(na.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		na.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(na.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		na.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetTopReleasesPages_Response_TopReleasesPage";
	}
}
class ia extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Zi.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ia.toObject(e, this);
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
		return new ia();
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new ia();
		return ia.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		ia.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		ia.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetBestOfYearPages_Request";
	}
}
class aa extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!aa.prototype.pages) {
			Dn.Sg(aa.M());
		}
		Zi.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		aa.sm_m ||= {
			proto: aa,
			fields: {
				pages: {
					n: 1,
					c: sa,
					r: true,
					q: true,
				},
			},
		};
		return aa.sm_m;
	}
	static MBF() {
		aa.sm_mbf ||= Dn.w0(aa.M());
		return aa.sm_mbf;
	}
	toObject(e = false) {
		return aa.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(aa.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(aa.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new aa();
		return aa.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(aa.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		aa.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(aa.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		aa.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetBestOfYearPages_Response";
	}
}
class sa extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!sa.prototype.name) {
			Dn.Sg(sa.M());
		}
		Zi.initialize(this, e, 0, -1, [3, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		sa.sm_m ||= {
			proto: sa,
			fields: {
				name: {
					n: 1,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				url_path: {
					n: 2,
					br: Dn.qM.readString,
					bw: Dn.gp.writeString,
				},
				banner_url: {
					n: 3,
					r: true,
					q: true,
					br: Dn.qM.readString,
					bw: Dn.gp.writeRepeatedString,
				},
				banner_url_mobile: {
					n: 4,
					r: true,
					q: true,
					br: Dn.qM.readString,
					bw: Dn.gp.writeRepeatedString,
				},
				start_date: {
					n: 5,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
			},
		};
		return sa.sm_m;
	}
	static MBF() {
		sa.sm_mbf ||= Dn.w0(sa.M());
		return sa.sm_mbf;
	}
	toObject(e = false) {
		return sa.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(sa.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(sa.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new sa();
		return sa.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(sa.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		sa.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(sa.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		sa.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetBestOfYearPages_Response_BestOfYearPage";
	}
}
class oa extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oa.prototype.context) {
			Dn.Sg(oa.M());
		}
		Zi.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oa.sm_m ||= {
			proto: oa,
			fields: {
				context: {
					n: 1,
					c: On.TS,
				},
				data_request: {
					n: 2,
					c: On.gn,
				},
				top_played_period: {
					n: 3,
					br: Dn.qM.readEnum,
					bw: Dn.gp.writeEnum,
				},
				count: {
					n: 4,
					br: Dn.qM.readInt32,
					bw: Dn.gp.writeInt32,
				},
			},
		};
		return oa.sm_m;
	}
	static MBF() {
		oa.sm_mbf ||= Dn.w0(oa.M());
		return oa.sm_mbf;
	}
	toObject(e = false) {
		return oa.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(oa.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(oa.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new oa();
		return oa.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(oa.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		oa.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(oa.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		oa.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetMostPlayedSteamDeckGames_Request";
	}
}
class la extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!la.prototype.ranks) {
			Dn.Sg(la.M());
		}
		Zi.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		la.sm_m ||= {
			proto: la,
			fields: {
				ranks: {
					n: 1,
					c: ca,
					r: true,
					q: true,
				},
				top_played_period: {
					n: 2,
					br: Dn.qM.readEnum,
					bw: Dn.gp.writeEnum,
				},
			},
		};
		return la.sm_m;
	}
	static MBF() {
		la.sm_mbf ||= Dn.w0(la.M());
		return la.sm_mbf;
	}
	toObject(e = false) {
		return la.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(la.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(la.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new la();
		return la.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(la.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		la.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(la.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		la.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetMostPlayedSteamDeckGames_Response";
	}
}
class ca extends Zi {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ca.prototype.rank) {
			Dn.Sg(ca.M());
		}
		Zi.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ca.sm_m ||= {
			proto: ca,
			fields: {
				rank: {
					n: 1,
					br: Dn.qM.readInt32,
					bw: Dn.gp.writeInt32,
				},
				appid: {
					n: 2,
					br: Dn.qM.readUint32,
					bw: Dn.gp.writeUint32,
				},
				item: {
					n: 3,
					c: On.vB,
				},
				last_period_rank: {
					n: 4,
					br: Dn.qM.readInt32,
					bw: Dn.gp.writeInt32,
				},
			},
		};
		return ca.sm_m;
	}
	static MBF() {
		ca.sm_mbf ||= Dn.w0(ca.M());
		return ca.sm_mbf;
	}
	toObject(e = false) {
		return ca.toObject(e, this);
	}
	static toObject(e, t) {
		return Dn.BT(ca.M(), e, t);
	}
	static fromObject(e) {
		return Dn.Uq(ca.M(), e);
	}
	static deserializeBinary(e) {
		let t = new kn.BinaryReader(e);
		let r = new ca();
		return ca.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return Dn.zj(ca.MBF(), e, t);
	}
	serializeBinary() {
		const e = new kn.BinaryWriter();
		ca.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		Dn.i0(ca.M(), e, t);
	}
	serializeBase64String() {
		const e = new kn.BinaryWriter();
		ca.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamCharts_GetMostPlayedSteamDeckGames_Response_MostPlayedRank";
	}
}
let ma;
((e) => {
	e.GetMostPlayedGames = (e, t) =>
		e.SendMsg("SteamCharts.GetMostPlayedGames#1", I8(Yi, t), Ki, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetGamesByConcurrentPlayers = (e, t) =>
		e.SendMsg("SteamCharts.GetGamesByConcurrentPlayers#1", I8(Ji, t), $i, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetTopReleasesPages = (e, t) =>
		e.SendMsg("SteamCharts.GetTopReleasesPages#1", I8(ta, t), ra, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetBestOfYearPages = (e, t) =>
		e.SendMsg("SteamCharts.GetBestOfYearPages#1", I8(ia, t), aa, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetMostPlayedSteamDeckGames = (e, t) =>
		e.SendMsg("SteamCharts.GetMostPlayedSteamDeckGames#1", I8(oa, t), la, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
})((ma ||= {}));
const da = ua;
class ga {
	m_rgMyWishlistOnSale = null;
	m_rgMyDLCForGamesInLibraryOnSale = null;
	m_rgMySoundtracksForGamesInLibraryOnSale = null;
	m_rgMyInteractiveRecOnSale = null;
	m_rgMySaleTags = null;
	m_rgMyTagRecommendation = null;
	m_mapSaleGameListsByFlavor = new Map();
	m_mapPromisesByFlavor = new Map();
	m_rgTopN = null;
	m_rgAllDiscounted = null;
	m_mapMyWishlistInContentHub = new Map();
	m_mapMyIRInContentHub = new Map();
	m_rgDeckTopPlayedGames = null;
	m_serviceTransport;
	constructor() {
		const e = Tc_1("loyalty_webapi_token", "application_config");
		const t = new Aa.D(w.TS.WEBAPI_BASE_URL, e || undefined);
		this.m_serviceTransport = t.GetServiceTransport();
	}
	async GetDiscounts(e) {
		try {
			let t = "discount";
			t += e.tagid ? `_tag${e.tagid}` : "";
			t += e.categoryid ? `_categoryid${e.categoryid}` : "";
			t += e.top_n_sellers ? `_ntop${e.top_n_sellers}` : "";
			t += e.max_results ? `_max${e.max_results}` : "";
			t += e.random_across_set ? "_rand" : "";
			let r = Fd(t, "application_config");
			if (!r) {
				r = (
					await da.get(`${w.TS.STORE_BASE_URL}actions/ajaxgetdiscounts`, {
						params: {
							...e,
							cc: w.TS.COUNTRY,
						},
					})
				).data.rgAppIDs;
			}
			return {
				rgAppIDs: r,
				rgSolrFacetCounts: null,
			};
		} catch (e) {
			const t = H_2(e);
			console.error(`GetDiscounts hit error: ${t.strErrorMsg}`, t);
		}
		return {
			rgAppIDs: [],
			rgSolrFacetCounts: null,
		};
	}
	async GetTopN(e, t) {
		if (
			!this.m_rgTopN &&
			((this.m_rgTopN = Fd("top_n", "application_config")), !this.m_rgTopN)
		) {
			const r = 500;
			const n = (
				await this.GetDiscounts({
					top_n_sellers: r,
					max_results: t,
					feature: e,
				})
			).rgAppIDs;
			this.m_rgTopN = n?.map((e) => Number(e));
		}
		return this.m_rgTopN;
	}
	async GetAllDiscounted(e, t, r = null, n = null) {
		const i = r?.GetQuery() || "";
		if (
			(!this.m_rgAllDiscounted || !this.m_rgAllDiscounted.has(i)) &&
			!((this.m_rgAllDiscounted = Fd("all_discounted", "application_config")),
			this.m_rgAllDiscounted && this.m_rgAllDiscounted.has(i))
		) {
			const r = await this.GetDiscounts({
				sort_by_sales_rank: true,
				facet_filter: i,
				pre_filter: n ? JSON.stringify(n) : null,
				max_results: t,
				feature: e,
			});
			this.m_rgAllDiscounted ||= new Map();
			this.m_rgAllDiscounted.set(i, {
				rgAppIDs: r.rgAppIDs.map((e) => Number(e)),
				...r,
			});
		}
		return this.m_rgAllDiscounted.get(i);
	}
	async GetWishlistOnSale() {
		if (
			!this.m_rgMyWishlistOnSale &&
			((this.m_rgMyWishlistOnSale = Fd(
				"wishlist_onsale",
				"application_config",
			)),
			!this.m_rgMyWishlistOnSale)
		) {
			const e = await da.get(
				`${w.TS.STORE_BASE_URL}saleaction/ajaxgetwishlistonsale`,
				{
					withCredentials: true,
				},
			);
			this.m_rgMyWishlistOnSale = e.data.appids;
		}
		return this.m_rgMyWishlistOnSale;
	}
	async GetDLCForGamesInMyLibraryOnSale() {
		if (
			!this.m_rgMyDLCForGamesInLibraryOnSale &&
			((this.m_rgMyDLCForGamesInLibraryOnSale = Fd(
				"dlc_onsale",
				"application_config",
			)),
			!this.m_rgMyDLCForGamesInLibraryOnSale)
		) {
			const e = await da.get(
				`${w.TS.STORE_BASE_URL}saleaction/ajaxgetdlconsale`,
				{
					withCredentials: true,
				},
			);
			this.m_rgMyDLCForGamesInLibraryOnSale = e.data.appids;
		}
		return this.m_rgMyDLCForGamesInLibraryOnSale;
	}
	async GetSoundtracksForGamesInMyLibraryOnSale() {
		if (
			!this.m_rgMySoundtracksForGamesInLibraryOnSale &&
			((this.m_rgMySoundtracksForGamesInLibraryOnSale = Fd(
				"dlc_music_onsale",
				"application_config",
			)),
			!this.m_rgMySoundtracksForGamesInLibraryOnSale)
		) {
			const e = await da.get(
				`${w.TS.STORE_BASE_URL}saleaction/ajaxgetsoundtracksonsale`,
				{
					withCredentials: true,
				},
			);
			this.m_rgMySoundtracksForGamesInLibraryOnSale = e.data.appids;
		}
		return this.m_rgMySoundtracksForGamesInLibraryOnSale;
	}
	async GetInteractiveRecommendationsOnSale() {
		if (
			!this.m_rgMyInteractiveRecOnSale &&
			((this.m_rgMyInteractiveRecOnSale = Fd(
				"ir_onsale",
				"application_config",
			)),
			!this.m_rgMyInteractiveRecOnSale)
		) {
			const e = await da.get(
				`${w.TS.STORE_BASE_URL}saleaction/ajaxgetironsale`,
				{
					withCredentials: true,
				},
			);
			this.m_rgMyInteractiveRecOnSale = e.data.appids;
		}
		return this.m_rgMyInteractiveRecOnSale;
	}
	async GetSaleTags() {
		if (
			!this.m_rgMySaleTags &&
			((this.m_rgMySaleTags = Fd("saletags", "application_config")),
			!this.m_rgMySaleTags)
		) {
			const e = await da.get(
				`${w.TS.STORE_BASE_URL}saleaction/ajaxgetsaletags`,
				{
					withCredentials: false,
				},
			);
			this.m_rgMySaleTags = e.data;
		}
		return this.m_rgMySaleTags;
	}
	async GetTagRecommendorForThisSale(e, t, r, n, i, a, s) {
		if (
			!this.m_rgMyTagRecommendation &&
			(n == null &&
				i == null &&
				(this.m_rgMyTagRecommendation = Fd(
					"tag_recommender",
					"application_config",
				)),
			!this.m_rgMyTagRecommendation)
		) {
			const o = `${w.TS.STORE_BASE_URL}saleaction/ajaxgetsaletagsrecommendation`;
			let l = {
				origin: self.origin,
				cc: w.TS.COUNTRY,
				l: w.TS.LANGUAGE,
				clanAccountID: e?.clanSteamID.GetAccountID(),
				clanAnnouncementGID: e?.AnnouncementGID,
				count: t,
				nocache: r,
				hubtype: n?.type,
				category: n?.category,
				tagid: n?.tagid,
				tabfilter: i,
				bPrioritizeDiscounts: a,
				strSectionFilter: s,
			};
			const c = await da.get(o, {
				params: l,
				withCredentials: true,
			});
			if (c.status == 200 && c.data && c.data.tag_recommender) {
				this.m_rgMyTagRecommendation = c.data.tag_recommender;
			} else {
				this.m_rgMyTagRecommendation = [];
			}
		}
		return this.m_rgMyTagRecommendation;
	}
	GetFlavorCacheKey(e, t, r, n, i, a, s, o, l, c, m, u) {
		let d = "";
		if (a) {
			d += a.type;
			if (a.type === "category") {
				d += `-${a.category}`;
			} else if (a.type === "tags") {
				d += `-${a.tagid}`;
			}
		}
		return `key-${e}-${t?.GetQuery() || ""}-${m || "*"}-${l}-${r || "*"}-${o}-${
			n || ""
		}-${u || "*"}-${i}-${d}-${s}-${c}`;
	}
	ValidateDataGameByFlavor(e) {
		const t = e;
		return (
			t &&
			typeof t == "object" &&
			t.solr_index &&
			typeof t.solr_index == "number" &&
			t.appids &&
			Array.isArray(t.appids)
		);
	}
	GetJSONDataKey(e, t, r, n, i, a) {
		if (t) {
			return `section_${t}_${r || "*"}_${a || "*"}`;
		} else {
			return `browser_${e}_${n?.GetQuery() || ""}_${r || "*"}${i || ""}`;
		}
	}
	async InternalGetSaleGamesByFlavor(
		e,
		t,
		r,
		n,
		i,
		a,
		s,
		o,
		l = 0,
		c = undefined,
		m,
		u,
		d,
		A,
		p,
		g,
		h,
		C,
		_,
		f,
	) {
		let b = this.m_mapSaleGameListsByFlavor.get(e);
		if (!b) {
			const t = this.GetJSONDataKey(a, g, n, s, c, h);
			const r = Fd(t, "application_config");
			if (this.ValidateDataGameByFlavor(r)) {
				b = r;
				b.setAppIDs = new Set(b.appids);
				b.setStoreItemKeys = new Set(b.store_item_keys);
				this.m_mapSaleGameListsByFlavor.set(e, r);
			} else {
				b = {
					appids: [],
					store_item_keys: [],
					setAppIDs: new Set(),
					setStoreItemKeys: new Set(),
					solr_index: 0,
					possible_has_more: true,
				};
				this.m_mapSaleGameListsByFlavor.set(e, b);
			}
		}
		const y = l + o - b.appids.length;
		if (y > 0 && b.possible_has_more) {
			let e =
				w.TS.STORE_BASE_URL +
				(r
					? "saleaction/ajaxpreviewsaledynamicappquery"
					: "saleaction/ajaxgetsaledynamicappquery");
			if (a == "ml_wishlist_recommender" || a == "ml_playtime_recommender") {
				e =
					w.TS.STORE_BASE_URL +
					(r
						? "saleaction/ajaxpreviewgetsaledynamicappqueryforuser"
						: "saleaction/ajaxgetsaledynamicappqueryforuser");
			}
			let o = null;
			const l = {
				cc: w.TS.COUNTRY,
				l: w.TS.LANGUAGE,
				clanAccountID: i?.clanSteamID.GetAccountID() || null,
				clanAnnouncementGID: i?.AnnouncementGID || null,
				flavor: a,
				strFacetFilter: s?.GetQuery(),
				start: b.solr_index,
				count: Math.max(y, 50),
				tabuniqueid: n,
				sectionuniqueid: g,
				return_capsules: true,
				search: t ? c : undefined,
				origin: self.origin,
				strContentHubType: m?.type,
				strContentHubCategory: m?.category,
				nContentHubTagID: m?.tagid,
				bContentHubDiscountedOnly: u,
				strTabFilter: d,
				strSectionFilter: A,
				bPrioritizeDiscounts: p,
				bRequestFacetCounts: C,
				prune_list_optin_name: i?.jsondata.prune_list_optin_name || undefined,
				optin_tagid:
					f ||
					i?.jsondata?.optin_tagid ||
					i?.jsondata?.optin_tagid ||
					undefined,
				optin_prune_tagid: i?.jsondata?.optin_prune_tagid || undefined,
				optin_only:
					Boolean(f) ||
					Boolean(i?.jsondata?.optin_only) ||
					Boolean(i?.jsondata?.optin_only) ||
					undefined,
				controller_category: Number(h) || undefined,
			};
			o = await da.get(e, {
				params: l,
				withCredentials: r,
				cancelToken: _?.token,
			});
			if (
				o?.status != 200 ||
				o.data?.success != 1 ||
				o.data?.success != 1 ||
				!o.data?.appids
			) {
				throw new Error(
					`query failed, status=${o?.status} success: ${o?.data?.success}`,
				);
			}
			for (const e of o.data.appids) {
				if (!b.setAppIDs.has(e)) {
					b.appids.push(e);
					b.setAppIDs.add(e);
				}
			}
			for (const e of o.data.store_item_keys) {
				if (!b.setStoreItemKeys.has(e)) {
					b.store_item_keys.push(e);
					b.setStoreItemKeys.add(e);
				}
			}
			b.faceting = o.data.faceting;
			b.multifaceting = o.data.multifaceting;
			b.possible_has_more = o.data.possible_has_more;
			b.solr_index = o.data.solr_index;
			b.match_count = o.data.match_count;
		}
		this.m_mapSaleGameListsByFlavor.set(e, b);
		const S = b.possible_has_more || l + o < b.appids.length;
		return {
			appids: b.appids.slice(l, l + o),
			rgStoreItemKeys: b.store_item_keys,
			facetCounts: b.faceting,
			multifaceting: b.multifaceting,
			nMatchCount: b.match_count,
			bHasPossibleMoreResults: S,
		};
	}
	async GetSaleGamesByFlavor(e, t, r, n, i, a = 0, s) {
		let {
			strSectionFilter: o,
			nTabUniqueID: l,
			strTabFilter: c,
			facetFilter: m,
			contentHub: u,
			salePageOptInIDOverride: d,
			bContentHubDiscountedOnly: A,
			strSearch: p,
			bPrioritizeDiscounts: g,
			nSectionUniqueID: h,
			eControllerCategory: C,
			bRequestFacetCounts: _,
		} = n;
		p = p?.trim();
		const f = Boolean(p);
		if (f) {
			r = "search";
			l = undefined;
		}
		const b = this.GetFlavorCacheKey(
			r,
			m,
			l,
			p,
			t?.AnnouncementGID || "0",
			u,
			A,
			c,
			o,
			g,
			h,
			C,
		);
		while (this.m_mapPromisesByFlavor.has(b)) {
			try {
				await this.m_mapPromisesByFlavor.get(b);
			} catch (e) {}
		}
		const y = this.InternalGetSaleGamesByFlavor(
			b,
			f,
			e,
			l,
			t,
			r,
			m,
			i,
			a,
			p,
			u,
			A,
			c,
			o,
			g,
			h,
			C,
			_,
			s,
			d,
		);
		this.m_mapPromisesByFlavor.set(b, y);
		(async () => {
			try {
				await y;
			} catch (e) {
			} finally {
				this.m_mapPromisesByFlavor.delete(b);
			}
		})();
		return y;
	}
	async GetWishlistedInContentHub(e, t, r, n) {
		const i = `${e.type}_${e.category}_${e.tagid}_${t?.GetActiveTabUniqueID()}`;
		if (this.m_mapMyWishlistInContentHub.has(i)) {
			return this.m_mapMyWishlistInContentHub.get(i);
		}
		try {
			let a = Fd(
				`hubitems_${t?.GetActiveTabUniqueID() || "*"}`,
				"application_config",
			);
			if (!a || a.appids.length === 0) {
				const i = `${w.TS.STORE_BASE_URL}saleaction/ajaxgetitemsincontenthub`;
				const s = {
					origin: self.origin,
					cc: w.TS.COUNTRY,
					hubtype: e.type,
					category: e.category,
					tagid: e.tagid,
					tabuniqueid: t?.GetActiveTabUniqueID(),
					tabfilter: t?.GetStoreFilter(),
					bPrioritizeDiscounts: r,
				};
				const o = await da.get(i, {
					params: s,
					cancelToken: n?.token,
				});
				if (o?.data?.success === 1) {
					a = o.data;
				}
			}
			if (!a) {
				return [];
			}
			const s = new Set();
			for (const e of a.appids) {
				s.add(Number(e));
			}
			const o = An.Fm.Get().GetWishlistGamesInUserOrder();
			const l = [];
			for (const e of o) {
				if (
					s.has(e) &&
					!An.Fm.Get().BOwnsApp(e) &&
					An.Fm.Get().BIsGameWishlisted(e)
				) {
					l.push(e);
				}
			}
			this.m_mapMyWishlistInContentHub.set(i, l);
			return l;
		} catch (e) {
			return [];
		}
	}
	async GetInteractiveRecommenderInContentHub(e, t, r, n) {
		const i = `${e.type}_${e.category || "*"}_${
			e.tagid || "*"
		}_${t?.GetActiveTabUniqueID()}`;
		if (this.m_mapMyIRInContentHub.has(i)) {
			return this.m_mapMyIRInContentHub.get(i);
		}
		try {
			let a = Fd(
				`hubitems_${t?.GetActiveTabUniqueID() || "*"}`,
				"application_config",
			);
			if (!a || a.appids.length === 0) {
				const i = `${w.TS.STORE_BASE_URL}saleaction/ajaxgetitemsincontenthub`;
				const s = {
					origin: self.origin,
					cc: w.TS.COUNTRY,
					hubtype: e.type,
					category: e.category,
					tagid: e.tagid,
					tabuniqueid: t?.GetActiveTabUniqueID(),
					tabfilter: t?.GetStoreFilter(),
					bPrioritizeDiscounts: r,
				};
				const o = await da.get(i, {
					params: s,
					cancelToken: n?.token,
				});
				if (o?.data?.success === 1) {
					a = o.data;
				}
			}
			if (!a) {
				return [];
			}
			const s = new Set();
			for (const e of a.appids) {
				s.add(Number(e));
			}
			const o = An.Fm.Get().GetRecommendedGamesInIRPriorityOrder();
			const l = [];
			for (const e of o) {
				if (s.has(e)) {
					if (!An.Fm.Get().BOwnsApp(e)) {
						l.push(e);
					}
				}
			}
			this.m_mapMyIRInContentHub.set(i, l);
			return l;
		} catch (e) {
			console.error("GetInteractiveRecommenderInContentHub failed: ", e);
			return [];
		}
	}
	async GetTopPlayedGamesOnDeck(e) {
		if (!this.m_rgDeckTopPlayedGames && !this.m_rgDeckTopPlayedGames) {
			const t = Rn.w.Init(oa);
			t.Body().set_context(hS(false));
			t.Body().set_count(50);
			t.Body().set_top_played_period(1);
			if (e) {
				Bn_2(t, e);
			}
			const r = await ma.GetMostPlayedSteamDeckGames(
				this.m_serviceTransport,
				t,
			);
			if (r.GetEResult() !== 1) {
				console.error("GetTopPlayedGamesOnDeck failed: ", r.GetEResult());
				return [];
			}
			this.m_rgDeckTopPlayedGames = r
				.Body()
				.ranks()
				?.map((t) => {
					if (t.item()) {
						Mn.A.Get().ReadItem(t.item(), e);
					}
					return t.appid();
				});
		}
		return this.m_rgDeckTopPlayedGames;
	}
	static s_globalSingletonStore;
	static Get() {
		if (!ga.s_globalSingletonStore) {
			ga.s_globalSingletonStore = new ga();
			if (w.TS.WEB_UNIVERSE == "dev") {
				window.g_DiscountStore = ga.s_globalSingletonStore;
			}
		}
		return ga.s_globalSingletonStore;
	}
}
function _a(e) {
	const t = {
		...e,
	};
	if (!t) {
		return t;
	}
	if (
		t.type === ha.EE.k_EStoreFilterClauseTypeOr ||
		t.type === ha.EE.k_EStoreFilterClauseTypeAnd
	) {
		if (!t.rgSubexpressions || t.rgSubexpressions.length === 0) {
			return null;
		}
		t.rgSubexpressions = t.rgSubexpressions.map((e) => _a(e));
		if (!t.bNegated && t.rgSubexpressions.length === 1) {
			return t.rgSubexpressions[0];
		}
		if (!t.bNegated) {
			let e = [];
			for (const r of t.rgSubexpressions) {
				if (r.bNegated || r.type !== t.type) {
					e.push(r);
				} else {
					e = e.concat(r.rgSubexpressions);
				}
			}
			t.rgSubexpressions = e;
		}
	}
	return t;
}
class ba {
	m_priceStopInfo = [];
	m_asyncLoader = null;
	GetPriceStops() {
		return this.m_priceStopInfo;
	}
	async LoadPriceStops() {
		this.m_asyncLoader ||= this.InternalLoadPriceStops();
		return this.m_asyncLoader;
	}
	async InternalLoadPriceStops() {
		if (this.m_priceStopInfo?.length > 0) {
			return;
		}
		const e = `${Ai.TS.STORE_BASE_URL}saleaction/ajaxgetpricestops`;
		let t;
		try {
			t = await da.get(e);
			if (t?.data?.success !== 1) {
				console.error(
					"CPriceStopStore: Unable to load price stop data: ",
					t?.data?.success,
				);
				return null;
			}
		} catch (e) {
			console.error(
				"CPriceStopStore: Unable to load price stop data: ",
				t?.data?.success,
			);
			return null;
		}
		this.m_priceStopInfo = t.data.rgPriceStops;
		this.m_priceStopInfo[0].price = 0;
	}
	static s_Singleton;
	static Get() {
		if (!ba.s_Singleton) {
			ba.s_Singleton = new ba();
			ba.s_Singleton.Init();
			if (Ai.TS.WEB_UNIVERSE == "dev") {
				window.g_SaleInteractionStore = ba.s_Singleton;
			}
		}
		return ba.s_Singleton;
	}
	constructor() {
		Gn_2(this);
	}
	Init() {
		const e = Fd_2("pricestops", "application_config");
		if (e) {
			this.m_priceStopInfo = e;
			this.m_priceStopInfo[0].price = 0;
		}
	}
}
function ya() {
	return ba.Get().GetPriceStops();
}
Cg([He.sH], ba.prototype, "m_priceStopInfo", undefined);
Cg([He.XI], ba.prototype, "LoadPriceStops", null);
class Ia {
	m_facets = [];
	m_nFilteredCapsuleCount;
	m_facetCounts;
	m_mapMultiFacetCounts;
	m_bUnboundedScope = false;
	m_facetSortKey = ha.IS.k_ESortFacetsByMatchCount;
	m_language = -1;
	m_bHasHideIgnoredItemsFacetValue;
	m_matchingReferencedCapsules;
	m_strQuery;
	m_strURLParam;
	m_nSelectedOptions;
	m_userPreferences;
	m_prunedFacets;
	m_sortedFacets = [];
	m_setCapsulesRemovedByUserPreferenceFilters;
	m_nSolrMatchCount;
	constructor(e, t, r, n) {
		Gn_2(this);
		this.m_facetSortKey = t;
		this.m_language = r;
		this.m_bUnboundedScope = n;
		(async () => {
			ba.Get().LoadPriceStops();
		})();
		this.m_facets = [];
		e.forEach((e) => {
			const t = [];
			e.facetValues.forEach((e) => {
				t.push({
					facetValue: e,
					bEnabled: Boolean(e.bEnabledByDefault),
					nPriceStopIndex: Boolean(ya().length > 0)
						? ya().length - 1
						: undefined,
					bDeactivated: false,
					nMatchingFilteredCapsules: null,
					bHiddenBySearch: false,
				});
			});
			this.m_facets.push({
				facet: e,
				facetValues: t,
				matchingCapsules: null,
				matchingCapsulesInOtherFacets: null,
			});
		});
		this.PruneFacets();
		this.UpdateFilter();
		this.m_bHasHideIgnoredItemsFacetValue = e.some((e) =>
			e.facetValues.some(
				(e) =>
					e.type === ha.GE.k_EUserPreference &&
					e.userPreference === ha.yX.k_EHideIgnoredItems,
			),
		);
		this.SortFacets();
	}
	BHasHideIgnoredItemsFacetValue() {
		return this.m_bHasHideIgnoredItemsFacetValue;
	}
	GetFacets() {
		return this.m_facets;
	}
	GetQuery() {
		return this.m_strQuery;
	}
	GetURLParam() {
		return this.m_strURLParam;
	}
	GetSelectedOptionsCount() {
		return this.m_nSelectedOptions;
	}
	BIsUserPreferenceEnabled(e) {
		return this.m_userPreferences.has(e);
	}
	BIsAnyUserPreferenceEnabled() {
		return this.m_userPreferences.size > 0;
	}
	GetSortedFacets() {
		return this.m_sortedFacets;
	}
	GetMatchCount() {
		return this.m_nFilteredCapsuleCount;
	}
	Reset() {
		this.m_facets.forEach((e) => {
			e.facetValues.forEach((e) => {
				e.bEnabled = Boolean(e.facetValue.bEnabledByDefault);
			});
		});
		this.UpdateFilter();
	}
	SetFromURLParam(e) {
		if (e === this.m_strURLParam) {
			return;
		}
		this.m_facets.forEach((e) => {
			e.facetValues.forEach((e) => {
				e.bEnabled = Boolean(e.facetValue.bEnabledByDefault);
			});
		});
		(e?.split(",") || []).forEach((e) => {
			const t = e.split(":");
			const r = Number(t[0]);
			t[1].split("|").forEach((e) => {
				if (e.includes("_")) {
					const t = e.split("_");
					this.m_facets[r].facetValues[Number(t[0])].bEnabled = true;
					this.m_facets[r].facetValues[Number(t[0])].nPriceStopIndex = Number(
						t[1],
					);
				} else {
					this.m_facets[r].facetValues[Number(e)].bEnabled =
						!this.m_facets[r].facetValues[Number(e)].facetValue
							.bEnabledByDefault;
				}
			});
		});
		this.UpdateFilter();
	}
	SetFacetCounts(e) {
		this.m_facetCounts = new Map();
		if (e) {
			for (const t of Object.keys(e)) {
				this.m_facetCounts.set(Number(t), Number(e[t]));
			}
		}
	}
	SetMultiFacetCounts(e) {
		this.m_mapMultiFacetCounts = new Map();
		if (e) {
			for (const t of Object.keys(e)) {
				const r = e[t];
				const n = new Map();
				if (t === "discounted") {
					let e = 0;
					for (const t of Object.keys(r)) {
						e += Number(r[t]);
					}
					n.set("true", e);
				} else {
					for (const e of Object.keys(r)) {
						n.set(e, Number(r[e]));
					}
				}
				this.m_mapMultiFacetCounts.set(t, n);
			}
		}
	}
	FilterCapsules(e) {
		if (this.m_matchingReferencedCapsules == null) {
			return e;
		} else {
			return e.filter((e) => this.m_matchingReferencedCapsules.has(Oa(e)));
		}
	}
	SetSolrMatchCount(e) {
		this.m_nSolrMatchCount = e;
	}
	SetFacetValueSearchString(e, t, r) {
		for (const e of this.m_facets) {
			for (const t of e.facetValues) {
				t.bHiddenBySearch = false;
			}
		}
		if (!e) {
			return;
		}
		const n = e.toLocaleLowerCase().trim();
		if (n.length !== 0) {
			for (const e of this.m_facets) {
				for (const i of e.facetValues) {
					if (
						!(
							ka(i.facetValue, t, r)?.toLocaleLowerCase().trim() || ""
						).includes(n)
					) {
						i.bHiddenBySearch = true;
					}
				}
			}
		}
	}
	UpdateFilter() {
		this.UpdateQuery();
		this.UpdateURLParam();
		this.UpdateSelectedOptionsCount();
		this.UpdateUserPreferenceFilters();
	}
	static BFacetHasEnabledOptTags(e) {
		for (const t of e.facetValues) {
			if (t.bEnabled && t.facetValue.filter != null) {
				for (const e of t.facetValue.filter.clauses) {
					for (const t of e.or_tags) {
						if (t.startsWith("[Opt]")) {
							return true;
						}
					}
				}
			}
		}
		return false;
	}
	UpdateQuery() {
		let e = {
			type: ha.EE.k_EStoreFilterClauseTypeAnd,
			rgSubexpressions: new Array(),
		};
		this.m_facets.forEach((t) => {
			if (Ia.BFacetHasEnabledOptTags(t)) {
				return;
			}
			const r = {
				type: t.facet.logical_and
					? ha.EE.k_EStoreFilterClauseTypeAnd
					: ha.EE.k_EStoreFilterClauseTypeOr,
				rgSubexpressions: new Array(),
			};
			t.facetValues.forEach((e) => {
				if (e.bEnabled && Boolean(e.facetValue.rgStoreTagFilter)) {
					if (e.facetValue.type === ha.GE.k_EUserPreference) {
						return;
					}
					const t = {
						...e.facetValue.rgStoreTagFilter,
					};
					if (e.facetValue.type === ha.GE.k_EPrice) {
						t.value = Boolean(
							ya().length > 0 &&
								e.nPriceStopIndex != null &&
								e.nPriceStopIndex != -1,
						)
							? ya()[e.nPriceStopIndex].price
							: undefined;
					}
					if (
						e.facetValue.type !== ha.GE.k_EPrice ||
						Boolean(ya().length > 0)
					) {
						r.rgSubexpressions.push(t);
					}
				}
			});
			if (r.rgSubexpressions.length !== 0) {
				e.rgSubexpressions.push(r);
			}
		});
		e = _a(e);
		this.m_strQuery = Boolean(e) ? JSON.stringify(e) : "";
	}
	UpdateURLParam() {
		const e = [];
		this.m_facets.forEach((t, r) => {
			const n = [];
			t.facetValues.forEach((e, t) => {
				if (e.bEnabled !== Boolean(e.facetValue.bEnabledByDefault)) {
					if (e.facetValue.type === ha.GE.k_EPrice) {
						n.push(`${t}_${e.nPriceStopIndex}`);
					} else {
						n.push(t.toString());
					}
				}
			});
			if (n.length === 0) {
				return;
			}
			const i = n.join("|");
			e.push(`${r}:${i}`);
		});
		this.m_strURLParam = e.length > 0 ? e.join(",") : undefined;
	}
	UpdateSelectedOptionsCount() {
		this.m_nSelectedOptions = 0;
		this.m_facets.forEach((e) => {
			e.facetValues.forEach((e) => {
				if (e.bEnabled !== Boolean(e.facetValue.bEnabledByDefault)) {
					++this.m_nSelectedOptions;
				}
			});
		});
	}
	UpdateUserPreferenceFilters() {
		this.m_userPreferences = new Set();
		this.m_facets.forEach((e) => {
			e.facetValues.forEach((e) => {
				if (e.facetValue.type === ha.GE.k_EUserPreference && e.bEnabled) {
					this.m_userPreferences.add(e.facetValue.userPreference);
				}
			});
		});
	}
	PruneFacets() {
		this.m_prunedFacets = [];
		this.m_facets.forEach((e) => {
			e.facetValues.forEach((e) => {
				e.bDeactivated = false;
				e.nMatchingFilteredCapsules = null;
			});
			this.m_prunedFacets.push({
				facet: e,
				facetValues: e.facetValues,
			});
		});
		this.PruneFacetsForCurrentUser();
	}
	PruneFacetsForCurrentUser() {
		this.m_prunedFacets.forEach((e) => {
			e.facetValues = e.facetValues.filter((e) =>
				e.facetValue.type === ha.GE.k_EContentDescriptor
					? !An.Fm.Get().BIsLoaded() ||
						An.Fm.Get().BIncludesContentDescriptor(
							e.facetValue.contentDescriptor,
						)
					: e.facetValue.type === ha.GE.k_ELanguage
						? !An.Fm.Get().BIsLoaded() ||
							e.facetValue.language === 0 ||
							((An.Fm.Get().GetSecondaryLanguages().size !== 0 ||
								An.Fm.Get().GetPrimaryLanguage() !== 0) &&
								(An.Fm.Get().GetPrimaryLanguage() === e.facetValue.language ||
									An.Fm.Get()
										.GetSecondaryLanguages()
										.has(e.facetValue.language)))
						: e.facetValue.type !== ha.GE.k_EUserPreference ||
							(w.iA.logged_in && An.Fm.Get().BIsLoaded()),
			);
		});
		this.m_prunedFacets = this.m_prunedFacets.filter(
			(e) => e.facetValues.length > 0,
		);
	}
	UpdateMatchingFilteredCapsuleCounts() {
		this.m_prunedFacets.forEach((e) => {
			e.facetValues.forEach((e) => {
				e.nMatchingFilteredCapsules = this.GetMatchCountForFacetValue(e);
			});
		});
	}
	GetMatchCountForFacetValue(e) {
		if (this.m_mapMultiFacetCounts) {
			const t = "402";
			const r = "401";
			const n = "9";
			const i = "28";
			const a = "18";
			const s = "41";
			const o = "42";
			const l = "43";
			const c = "44";
			const m = "61";
			const u = "37";
			switch (e.facetValue.type) {
				case ha.GE.k_ESaleTagFilter:
				case undefined: {
					if (
						e.facetValue.rgStoreTagFilter?.type ===
							ha.EE.k_EStoreFilterClauseTypeStoreTag &&
						e.facetValue.nAtomicStoreTagID
					) {
						return this.m_mapMultiFacetCounts
							.get("tagidset")
							?.get(e.facetValue.nAtomicStoreTagID.toString());
					}
					if (
						e.facetValue.rgStoreTagFilter?.type ===
						ha.EE.k_EStoreFilterClauseTypeFeatureTag
					) {
						switch (e.facetValue.rgStoreTagFilter.value) {
							case "windows": {
								return this.m_mapMultiFacetCounts
									.get("platform_win")
									?.get("true");
							}
							case "linux": {
								return this.m_mapMultiFacetCounts
									.get("platform_linux")
									?.get("true");
							}
							case "mac": {
								return this.m_mapMultiFacetCounts
									.get("platform_mac")
									?.get("true");
							}
							case "vr": {
								return this.m_mapMultiFacetCounts.get("vrsupport")?.get(t);
							}
							case "vr only": {
								return this.m_mapMultiFacetCounts.get("vrsupport")?.get(r);
							}
							case "full controller": {
								return this.m_mapMultiFacetCounts.get("category")?.get(i);
							}
							case "any controller": {
								return (
									this.m_mapMultiFacetCounts.get("category")?.get(i) ||
									this.m_mapMultiFacetCounts.get("category")?.get(a)
								);
							}
							case "remote play": {
								return Math.max(
									this.m_mapMultiFacetCounts.get("category")?.get(s),
									this.m_mapMultiFacetCounts.get("category")?.get(o),
									this.m_mapMultiFacetCounts.get("category")?.get(l),
									this.m_mapMultiFacetCounts.get("category")?.get(c),
								);
							}
							case "remote play together": {
								return this.m_mapMultiFacetCounts.get("category")?.get(c);
							}
							case "free": {
								return this.m_mapMultiFacetCounts.get("genre")?.get(u);
							}
							case "discounted": {
								return this.m_mapMultiFacetCounts
									.get("discounted")
									?.get("true");
							}
							case "coop": {
								return this.m_mapMultiFacetCounts.get("category")?.get(n);
							}
							case "hdr": {
								return this.m_mapMultiFacetCounts.get("category")?.get(m);
							}
						}
					}
					break;
				}
				case ha.GE.k_EAppType: {
					return this.m_mapMultiFacetCounts
						.get("type")
						?.get(e.facetValue.appType);
				}
				case ha.GE.k_ELanguage: {
					const d = Lg(e.facetValue.language);
					return this.m_mapMultiFacetCounts
						.get(`supportedlang_${d}`)
						?.get("true");
				}
				case ha.GE.k_EContentDescriptor: {
					return this.m_mapMultiFacetCounts
						.get("descids")
						?.get(e.facetValue.contentDescriptor.toString());
				}
			}
		} else if (this.m_facetCounts) {
			return this.m_facetCounts?.get(e.facetValue.nAtomicStoreTagID);
		}
		return null;
	}
	DeactivateFacetValues() {
		this.m_prunedFacets.forEach((e) => {
			e.facetValues.forEach((e) => {
				e.bDeactivated = false;
			});
		});
		this.m_prunedFacets.forEach((e) => {
			const t = Pa(e.facet.facet);
			e.facetValues.forEach((e) => {
				let r = e.nMatchingFilteredCapsules;
				e.bDeactivated =
					!e.bEnabled &&
					!t &&
					r === 0 &&
					e.facetValue.type !== ha.GE.k_EUserPreference;
			});
		});
	}
	SortFacets() {
		this.UpdateMatchingFilteredCapsuleCounts();
		this.DeactivateFacetValues();
		this.m_sortedFacets = [];
		this.m_prunedFacets.forEach((e) => {
			const t = e.facetValues.slice();
			t.sort((e, t) => {
				if (
					e.facetValue.type === ha.GE.k_EPrice &&
					t.facetValue.type !== ha.GE.k_EPrice
				) {
					return 1;
				}
				if (
					e.facetValue.type !== ha.GE.k_EPrice &&
					t.facetValue.type == ha.GE.k_EPrice
				) {
					return -1;
				}
				if (e.bEnabled !== t.bEnabled) {
					if (t.bEnabled) {
						return 1;
					} else {
						return -1;
					}
				}
				if (e.bDeactivated !== t.bDeactivated) {
					if (e.bDeactivated) {
						return 1;
					} else {
						return -1;
					}
				}
				if (!e.bEnabled && !e.bDeactivated) {
					if (
						e.facetValue.type === ha.GE.k_ELanguage &&
						t.facetValue.type === ha.GE.k_ELanguage
					) {
						if (t.facetValue.language === An.Fm.Get().GetPrimaryLanguage()) {
							return 1;
						} else {
							return -1;
						}
					}
					const r = e.nMatchingFilteredCapsules || 0;
					const n = t.nMatchingFilteredCapsules || 0;
					if (
						this.m_facetSortKey === ha.IS.k_ESortFacetsByMatchCount &&
						r !== n
					) {
						return n - r;
					}
				}
				if (this.m_facetSortKey === ha.IS.k_ESortFacetsByName) {
					const r = CLocLanguageArray.GetWithFallback(
						e.facetValue.name,
						this.m_language,
					);
					const n = CLocLanguageArray.GetWithFallback(
						t.facetValue.name,
						this.m_language,
					);
					return r.localeCompare(n);
				}
				return 0;
			});
			this.m_sortedFacets.push({
				...e,
				facetValues: t,
			});
		});
	}
	ApplyOptInFilters(e) {
		this.m_bUnboundedScope;
		return e;
	}
	async ApplyUserPreferenceFilters(e, t, r) {
		const n = this.BHasHideIgnoredItemsFacetValue();
		const i = this.BIsUserPreferenceEnabled(ha.yX.k_EHideOwnedItems);
		const a = this.BIsUserPreferenceEnabled(ha.yX.k_EHideWishlistedItems);
		const s = this.BIsUserPreferenceEnabled(ha.yX.k_EHideIgnoredItems);
		let o = [];
		const l = await a9(e, t, i, a, n, s, o);
		this.m_setCapsulesRemovedByUserPreferenceFilters = new Set(o.map(Oa));
		if (r) {
			for (const e of o) {
				r.push(e);
			}
		}
		return l;
	}
	UpdateMatchCount(e, t) {
		if (e) {
			this.m_nFilteredCapsuleCount = this.m_nSolrMatchCount;
			this.m_nFilteredCapsuleCount -=
				this.m_setCapsulesRemovedByUserPreferenceFilters?.size || 0;
		} else {
			this.m_nFilteredCapsuleCount = t;
		}
		this.SortFacets();
	}
}
Cg([He.sH], Ia.prototype, "m_facets", undefined);
Cg([He.sH], Ia.prototype, "m_sortedFacets", undefined);
Cg([He.XI], Ia.prototype, "Reset", null);
Cg([He.XI], Ia.prototype, "SetFromURLParam", null);
Cg([He.XI], Ia.prototype, "SetFacetCounts", null);
Cg([He.XI], Ia.prototype, "SetMultiFacetCounts", null);
Cg([He.XI], Ia.prototype, "SetSolrMatchCount", null);
Cg([He.XI], Ia.prototype, "SetFacetValueSearchString", null);
Cg([He.XI], Ia.prototype, "UpdateMatchCount", null);
const Ea = PA((e) => {
	const {
		language: t,
		linkColor: r,
		headingColor: n,
		background: i,
		styleOverrides: a,
		facetFilterState: s,
		fnOnUpdateFilter: o,
		onInitFilter: l,
	} = e;
	const [c, m] = useState("");
	const { data: u } = Fv(Lg(t));
	let d;
	let p;
	if (!a?.menu) {
		d = {
			background: i,
			color: r || "white",
		};
	}
	if (!a?.menuTitle) {
		p = {
			borderBottom: `0px solid ${r || "white"}`,
			color: n || "white",
		};
	}
	const g = useRef(null);
	const h = () => {
		s.UpdateFilter();
		o();
	};
	A.useEffect(() => {
		if (!s && l) {
			l();
		}
	}, [s, l]);
	A.useEffect(() => {
		if (s && e.rgItems) {
			s.SetFacetCounts(e.faceting);
			s.SetMultiFacetCounts(e.multifaceting);
			s.SetSolrMatchCount(e.nMatchCount);
			s.UpdateMatchCount(e.bMoreAvailable, e.rgItems?.length);
		}
	}, [
		s,
		e.bMoreAvailable,
		e.faceting,
		e.multifaceting,
		e.nMatchCount,
		e.rgItems,
		e.rgItems?.length,
	]);
	if (s) {
		return A.createElement(
			"div",
			{
				ref: g,
				className: a?.menu || va.FacetedBrowseControls,
				style: d,
			},
			A.createElement(
				"div",
				{
					className: a?.menuTitle || va.FacetMenuTitle,
					style: p,
				},
				Localize("#FacetedBrowse_Heading"),
			),
			A.createElement(Ma, {
				facets: s?.GetSortedFacets(),
				onUpdateFilter: h,
				...e,
			}),
			Boolean(s) &&
				A.createElement(
					"div",
					{
						className: a?.matchCount || va.FacetedBrowseMatchCount,
					},
					s.GetMatchCount() != null &&
						LocalizePlural("#FacetedBrowse_MatchCount", s.GetMatchCount()),
				),
			A.createElement(
				"div",
				{
					className: va.FacetValueSearch,
				},
				A.createElement(f.pd, {
					type: "text",
					value: c,
					placeholder: Localize("#FacetedBrowse_SearchFacetValues"),
					onChange: (e) => {
						m(e.target.value);
						s.SetFacetValueSearchString(e.target.value, t, u);
					},
					bShowClearAction: true,
				}),
			),
			A.createElement(
				"div",
				{
					className: va.FacetList,
				},
				s?.GetSortedFacets()?.map((r, n) =>
					A.createElement(Ra, {
						key: `facet_${CLocLanguageArray.GetWithFallback(
							r.facet.facet.name,
							t,
						)}_${n}`,
						facet: r,
						facetFilterState: s,
						nFacetIndex: n,
						language: t,
						nMaxFacetValues: e.nMaxFacetValues,
						highlightedFacetColor: e.highlightedFacetColor,
						linkColor: e.linkColor,
						headingColor: e.headingColor,
						fnOnUpdateFilter: h,
						styleOverrides: a,
						bSearching: c?.length > 0,
					}),
				),
			),
			A.createElement(
				"div",
				{
					className: a?.reset || va.FacetedBrowseReset,
				},
				A.createElement(
					"a",
					{
						onClick: (e) => {
							e.preventDefault();
							const t = g.current.getBoundingClientRect().top + window.scrollY;
							window.scrollTo(0, t);
						},
					},
					Localize("#FacetedBrowse_ReturnToTop"),
				),
			),
		);
	} else {
		return null;
	}
});
const Ma = PA((e) => {
	const { facets: t } = e;
	const [r, n] = useState([]);
	useEffect(() => {
		const e = [];
		if (t) {
			for (const r of t) {
				for (const t of r.facetValues) {
					if (t.bEnabled && t.facetValue.type !== ha.GE.k_EPrice) {
						e.push(t);
					}
				}
			}
		}
		n(e);
	}, [t]);
	if (r) {
		return A.createElement(
			A.Fragment,
			null,
			A.createElement(
				"div",
				{
					className: va.SelectedFacetValuesList,
				},
				r.map((t, r) =>
					A.createElement(Ta, {
						key: `${t.facetValue.unique_id}_${r}`,
						facetValue: t,
						...e,
					}),
				),
			),
		);
	} else {
		return null;
	}
});
const Ta = PA((e) => {
	const { facetValue: t, language: r, onUpdateFilter: n } = e;
	const i = Da(t.facetValue, r);
	return A.createElement(
		"a",
		{
			className: va.SelectedFacetValueCtn,
			onClick: (e) => {
				e.preventDefault();
				t.bEnabled = false;
				if (n) {
					n();
				}
			},
		},
		A.createElement(hn.i6V, null),
		A.createElement(
			"span",
			{
				className: va.SelectedFacetValue,
			},
			i,
		),
	);
});
const Ra = PA((e) => {
	const {
		language: t,
		linkColor: r,
		headingColor: n,
		facet: i,
		nFacetIndex: a,
		styleOverrides: s,
		bSearching: o,
	} = e;
	const [l, c] = useState(Boolean(a !== 0));
	const [m, u] = useState(false);
	if (i.facetValues.every((e) => e.bHiddenBySearch)) {
		return null;
	}
	let d;
	if (!s?.facetName) {
		d = {
			borderBottom: `0px solid ${r || "white"}`,
			color: n || "white",
		};
	}
	const p = Localize(
		CLocLanguageArray.GetWithFallback(i.facet.facet.name, t).trim(),
	);
	let g = e.nMaxFacetValues;
	const h = i.facetValues.reduce((e, t) => e + (t.bDeactivated ? 1 : 0), 0);
	g = Math.min(g, i.facetValues.length - h);
	const C = i.facetValues.reduce(
		(e, t) => e + (t.bEnabled || t.facetValue.type === ha.GE.k_EPrice ? 1 : 0),
		0,
	);
	const _ = i.facetValues.some((e) => !e.bEnabled && !e.bDeactivated);
	g = Math.max(g, C + (_ ? 1 : 0));
	const f = i.facetValues.length > g;
	let b = !f || m || m || o ? i.facetValues : i.facetValues.slice(0, g);
	if (l && !o) {
		b = b.filter((e) => e.bEnabled);
	}
	const y = b.every(
		(e) =>
			!Boolean(e.facetValue.subtitle) ||
			CLocLanguageArray.GetWithFallback(e.facetValue.subtitle, t)?.length <= 0,
	);
	return A.createElement(
		"div",
		{
			className: va.Facet,
		},
		A.createElement(
			"div",
			{
				className: va.FacetTitleCtn,
				onClick: () => c(!l),
			},
			A.createElement(
				"div",
				{
					className: s?.facetName || va.FacetTitle,
					style: d,
				},
				p,
			),
			A.createElement(hn.DK4, {
				angle: l ? 270 : 0,
			}),
		),
		b.map((t, r) =>
			A.createElement(Na, {
				key: `facet_${p}_value_${r}`,
				facetValue: t,
				styleOverrides: s,
				showMatchCounts: y && !Pa(i.facet.facet),
				...e,
			}),
		),
		!l &&
			f &&
			!o &&
			A.createElement(
				"div",
				{
					className: s?.showMore || va.FacetValueShowMore,
					onClick: () => u(!m),
				},
				m
					? Localize("#Bbcode_Expand_ShowMore_Expanded")
					: Localize("#Bbcode_Expand_ShowMore_Collapsed"),
			),
	);
});
function ka(e, t, r) {
	const n = e.name;
	if (n?.length > 0 && n[0]?.startsWith("#tagid_")) {
		const e = parseInt(n[0].substring(7));
		if (e > 0) {
			return r?.get(e)?.name;
		}
	}
	return Localize(CLocLanguageArray.GetWithFallback(n, t).trim());
}
function Da(e, t) {
	const r = e.name;
	let n;
	if (r?.length > 0 && r[0]?.startsWith("#tagid_")) {
		n = parseInt(r[0].substring(7));
	}
	const i = MB(n, Lg(t))?.name;
	if (n) {
		return i;
	} else {
		return Localize(CLocLanguageArray.GetWithFallback(r, t).trim());
	}
}
const Na = PA((e) => {
	const {
		language: t,
		highlightedFacetColor: r,
		linkColor: n,
		facetValue: i,
		facetFilterState: a,
		styleOverrides: s,
		fnOnUpdateFilter: o,
		showMatchCounts: l,
	} = e;
	const c = Da(i.facetValue, t);
	if (i.facetValue.type === ha.GE.k_EPrice && ya().length == 0) {
		return null;
	}
	if (i.bHiddenBySearch) {
		return null;
	}
	const m = i.bEnabled;
	const u = i.bDeactivated;
	const d = {
		color: r || "darkorange",
		borderLeft: `4px solid ${r || "darkorange"}`,
	};
	let p;
	let g;
	if (!s?.facetValue) {
		p = m ? d : {};
	}
	if (!s?.facetValueName) {
		g = {
			color: n || "white",
		};
	}
	const h = (e) => {
		e.preventDefault();
		h5(() => {
			if (!u) {
				i.bEnabled = !i.bEnabled;
				o();
			}
		});
	};
	const C = (e) => {
		h5(() => {
			i.nPriceStopIndex = Math.floor(e);
		});
	};
	const _ = () => {
		h5(() => {
			i.bEnabled = Boolean(i.nPriceStopIndex !== ya().length - 1);
			o();
		});
	};
	const b = c;
	const y = Boolean(i.facetValue.subtitle)
		? CLocLanguageArray.GetWithFallback(i.facetValue.subtitle, t)
		: null;
	if (i.facetValue.type === ha.GE.k_EPrice) {
		const e =
			i.nPriceStopIndex != null && i.nPriceStopIndex != -1
				? i.nPriceStopIndex
				: ya().length - 1;
		return A.createElement(f.Kc, {
			className: va.FacetValuePriceSlider,
			min: 0,
			max: ya().length - 1,
			value: e,
			label: ya()[e].label,
			onChange: C,
			onChangeComplete: _,
		});
	}
	{
		const e = s?.facetValue || va.FacetValue;
		const t = s?.facetValueEnabled || va.FacetValueEnabled;
		const r = s?.facetValueDeactivated || va.FacetValueDeactivated;
		const n = s?.facetValueName || va.FacetValueName;
		return A.createElement(
			"div",
			{
				className: m ? t : u ? r : e,
				style: p,
			},
			A.createElement(
				"a",
				{
					className: n,
					style: g,
					onClick: h,
					href: "",
				},
				b,
			),
			l &&
				!i.bDeactivated &&
				Boolean(i.nMatchingFilteredCapsules) &&
				A.createElement(
					"div",
					{
						className: s?.facetValueDesc || va.FacetValueDescription,
					},
					i.nMatchingFilteredCapsules,
				),
			Boolean(y) &&
				A.createElement(
					"div",
					{
						className: s?.facetValueDesc || va.FacetValueDescription,
					},
					y,
				),
		);
	}
});
PA((e) => {
	const {
		background: t,
		labelColor: r,
		headingColor: n,
		buttonColor: i,
		highlightedFacetColor: a,
	} = e;
	const [s, o] = useState(false);
	return A.createElement(
		"div",
		{
			className: va.FacetedBrowseCtn,
		},
		Ga() &&
			A.createElement(Fa, {
				buttonColor: i,
				bShowControls: s,
				fnOnToggleControls: () => {
					o(!s);
				},
			}),
		A.createElement(
			"div",
			{
				className: va.FacetedBrowseInnerCtn,
			},
			s || !Ga()
				? A.createElement(Ea, {
						highlightedFacetColor: a,
						linkColor: r,
						headingColor: n,
						background: t,
						...e,
					})
				: null,
			A.createElement(
				"div",
				{
					className: va.FacetedBrowseItems,
				},
				e.children,
			),
		),
	);
});
const Fa = PA((e) => {
	const { buttonColor: t, bShowControls: r, fnOnToggleControls: n } = e;
	const i = {
		color: t || "white",
	};
	return A.createElement(
		"div",
		{
			className: va.FacetedBrowsePopupCtn,
			onClick: () => n(),
		},
		r
			? A.createElement(
					A.Fragment,
					null,
					A.createElement(
						"div",
						{
							className: va.FacetedBrowsePopup,
							style: i,
						},
						A.createElement(hn.i6V, null),
					),
					A.createElement(
						"div",
						{
							className: va.FacetedBrowsePopupLabel,
						},
						Localize("#Button_Close"),
					),
				)
			: A.createElement(
					A.Fragment,
					null,
					A.createElement(
						"div",
						{
							className: va.FacetedBrowsePopup,
							style: i,
						},
						A.createElement(hn.dJT, null),
					),
					A.createElement(
						"div",
						{
							className: va.FacetedBrowsePopupLabel,
						},
						Localize("#FacetedBrowse_Heading"),
					),
				),
	);
});
const Ga = () => window.innerWidth < parseInt(va.strMidscreenWidth);
function Oa(e) {
	return e.type + e.id;
}
function Pa(e) {
	for (const t of e.facetValues) {
		if (t.filter != null) {
			for (const e of t.filter.clauses) {
				for (const t of e.or_tags) {
					if (t.startsWith("[Opt]")) {
						return true;
					}
				}
			}
		}
	}
	return false;
}
function La(e, t, r, n) {
	const [i, a] = A.useState([]);
	A.useEffect(() => {
		const i = sf(w.TS.LANGUAGE);
		const s = {
			nTabUniqueID: undefined,
			contentHub: {
				type: "greatondeck",
			},
			facetFilter: new Ia([], ha.IS.k_ESortFacetsByMatchCount, i, true),
		};
		ga.Get()
			.GetSaleGamesByFlavor(false, null, e, s, t, r, n)
			.then((e) => {
				const t = e.appids.map((e) => ({
					id: e,
					type: "game",
				}));
				H2(t, {
					include_assets: true,
				}).then(() => {
					AX(t, false).then((e) => {
						let t = e.map((e) => e.id);
						a(t);
					});
				});
			});
	}, [e, t, r, n]);
	return i;
}
let za;
let xa;
((e) => {
	e[(e.k_EStatusString = 0)] = "k_EStatusString";
	e[(e.k_ECreator = 1)] = "k_ECreator";
	e[(e.k_ECurator = 2)] = "k_ECurator";
	e[(e.k_ETags = 3)] = "k_ETags";
	e[(e.k_EDisplayList = 4)] = "k_EDisplayList";
})((za ||= {}));
((e) => {
	e[(e.k_EUnknown = 0)] = "k_EUnknown";
	e[(e.k_EPublisher = 1)] = "k_EPublisher";
	e[(e.k_EDeveloper = 2)] = "k_EDeveloper";
	e[(e.k_EPublisherDeveloper = 3)] = "k_EPublisherDeveloper";
	e[(e.k_EMacPortDeveloper = 4)] = "k_EMacPortDeveloper";
	e[(e.k_ELinuxPortDeveloper = 5)] = "k_ELinuxPortDeveloper";
	e[(e.k_EFranchise = 6)] = "k_EFranchise";
})((xa ||= {}));
function ts(e) {
	switch (e) {
		case 0: {
			return "game";
		}
		case 6: {
			return "software";
		}
		case 1: {
			return "demo";
		}
		case 4: {
			return "dlc";
		}
		case 7:
		case 3: {
			return "video";
		}
		case 11: {
			return "music";
		}
		case 12: {
			return "beta";
		}
		case 2: {
			return "mod";
		}
	}
	return "invalid";
}
class us {
	static async LoadFriendsRecommendedApp(e, t) {
		const r = Rn.w.Init(ms.KV);
		r.Body().set_appid(t);
		const n = await ms.YK.GetFriendsRecommendedApp(e, r);
		const i = n.GetEResult();
		if (i == 1) {
			return n.Body().toObject();
		}
		throw `Error ${i} failed to call GetFriendsRecommendedApp ${t}`;
	}
	static async LoadStoreRelevanceData(e) {
		let t = {
			appid: e,
		};
		let r = {
			arrSimilarPlayedApps: [],
			bRecommendedByIR: false,
		};
		const n = (
			await da.get(`${w.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`, {
				params: t,
				withCredentials: true,
				timeout: 10000,
			})
		).data;
		if (n && n.success == 1) {
			if (n.results.similar_played_apps) {
				r.arrSimilarPlayedApps = n.results.similar_played_apps.map((e) => ({
					appid: e.appid,
					playtimeForever: e.playtime_forever,
				}));
			}
			if (n.results.recommended_by_ir) {
				r.bRecommendedByIR = true;
			}
		}
		return r;
	}
}
const As = ds;
const hs = new Ya.wd("AppRelevance").Debug;
function Cs(e) {
	const {
		appID: t,
		bShowAvatars: r,
		storeItem: n,
		bHideDescription: i,
		bShowCuratorInfo: a,
		bShowCreatorInfo: s,
	} = e;
	const o = Nd(t);
	const l = ((e) => {
		const t = KV();
		return I_2({
			queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
			queryFn: () => us.LoadFriendsRecommendedApp(t, e),
			enabled: w.iA.logged_in,
		});
	})(t);
	const c = ((e) =>
		I_2({
			queryKey: ["AppRelevanceStore", "StoreRelevance", e],
			queryFn: () => us.LoadStoreRelevanceData(e),
			enabled: w.iA.logged_in,
		}))(t);
	const m = (() => {
		const { data: e } = PG("App Relevance Store Top Sellers", {
			sort: 11,
			start: 0,
			count: 100,
		});
		return e;
	})();
	const u = I_2({
		queryKey: ["SimilarPlayedAppsLoad", t],
		queryFn: () =>
			Mn.A.Get().QueueMultipleAppRequests(
				c.data.arrSimilarPlayedApps?.map((e) => e.appid),
				{
					include_basic_info: true,
					include_assets: true,
				},
			),
		enabled: c.isSuccess,
	});
	const d = ((e, t) => {
		const r = useMemo(
			() => An.Fm.Get().GetRecommendingCuratorsForApp(e) || [],
			[e],
		);
		return I_2({
			queryKey: ["RecommendingCurators", e],
			queryFn: () =>
				Promise.all(r?.map((e) => ls.ac.LoadClanInfoForClanAccountID(e))),
			enabled: !!t && r && r.length > 0,
		});
	})(t, a);
	const p = useMemo(() => {
		let e = [];
		if (n) {
			e = e.concat(
				n.GetAllFranchiseCreatorClans().map((e) => ({
					nAccountID: e,
					type: "franchise",
				})),
			);
			e = e.concat(
				n.GetAllDeveloperCreatorClans().map((e) => ({
					nAccountID: e,
					type: "developer",
				})),
			);
			e = e.concat(
				n.GetAllPublisherCreatorClans().map((e) => ({
					nAccountID: e,
					type: "publisher",
				})),
			);
			e = e.filter((e) => An.Fm.Get().BIsFollowingCurator(e.nAccountID));
		}
		return e;
	}, [n]);
	const g = I_2({
		queryKey: ["FollowedCreators", t],
		queryFn: () =>
			ls.ac.LoadClanInfoForClanAccountID(p[0].nAccountID).then((e) => ({
				clanInfo: e,
				type: p[0].type,
			})),
		enabled: !!s && p && p.length > 0,
	});
	const h = I_2({
		queryKey: ["PlayerSummaries", t, r],
		queryFn: async () => {
			let e = [];
			let t = [];
			let n = [];
			const i = r ? 10 : 1;
			for (let t = 0; t < l.data.accountids_recommended?.length && t < i; t++) {
				const r = os.b.InitFromAccountID(l.data.accountids_recommended[t]);
				e.push(r.ConvertTo64BitString());
			}
			for (let e = 0; e < o.data.in_wishlist?.length && e < i; e++) {
				const r = new os.b(o.data.in_wishlist[e].steamid);
				t.push(r.ConvertTo64BitString());
			}
			for (let e = 0; e < o.data.owns?.length && e < i; e++) {
				const t = new os.b(o.data.owns[e].steamid);
				n.push(t.ConvertTo64BitString());
			}
			return {
				rgRecommendedFriends: e,
				rgWishlistFriends: t,
				rgOwnedFriends: n,
			};
		},
		enabled: l.isSuccess && o.isSuccess,
	});
	if (
		!m ||
		u.isLoading ||
		u.isLoading ||
		c.isLoading ||
		u.isLoading ||
		c.isLoading ||
		l.isLoading ||
		u.isLoading ||
		c.isLoading ||
		l.isLoading ||
		o.isLoading ||
		u.isLoading ||
		c.isLoading ||
		l.isLoading ||
		o.isLoading ||
		d.isLoading ||
		u.isLoading ||
		c.isLoading ||
		l.isLoading ||
		o.isLoading ||
		d.isLoading ||
		g.isLoading ||
		u.isLoading ||
		c.isLoading ||
		l.isLoading ||
		o.isLoading ||
		d.isLoading ||
		g.isLoading ||
		h.isLoading
	) {
		return A.createElement(Jr.t, {
			size: "medium",
			position: "center",
		});
	}
	let C = [];
	if (c.isSuccess && c.data.arrSimilarPlayedApps) {
		c.data.arrSimilarPlayedApps.forEach((e) => {
			const r = Mn.A.Get().GetApp(e.appid);
			if (r) {
				C.push(
					A.createElement(bs, {
						key: e.appid,
						lifetimePlaytime: e.playtimeForever,
						storeItem: r,
					}),
				);
			} else {
				console.error("Failed to load store data ", t);
			}
		});
	}
	const _ = m.GetItemIDs().findIndex((e) => e.appid === t);
	const f = c.data?.bRecommendedByIR;
	const b = C.length > 0;
	const y = o.data?.owns?.length;
	const B = o.data?.in_wishlist?.length;
	const v = l.data?.accountids_recommended?.length;
	let I = 0;
	if (y > 0) {
		I++;
	}
	if (B > 0) {
		I++;
	}
	if (v > 0) {
		I++;
	}
	if (f) {
		I++;
	}
	if (_ >= 0) {
		I++;
	}
	if (C.length > 0) {
		I++;
	}
	if (a && d?.data?.length > 0) {
		I++;
	}
	if (s && Boolean(g.data)) {
		I++;
	}
	hs("FriendsOwned: ", y, " FriendsWishlisted: ", B, "cRecommended: ", v);
	return A.createElement(
		A.Fragment,
		null,
		I > 0 &&
			A.createElement(
				A.Fragment,
				null,
				A.createElement(
					"div",
					{
						className: As.WhyRelevant,
					},
					Localize("#DiscoveryQueue_WhyRelevant"),
				),
				A.createElement(
					"div",
					{
						className: As.RelevantCtn,
					},
					b &&
						A.createElement(
							vs,
							{
								header: Localize("#DiscoveryQueue_SimilarGames"),
							},
							A.createElement(
								"div",
								{
									className: As.ReleventSimilarAppsCtn,
								},
								C,
							),
						),
					a &&
						d?.data?.length > 0 &&
						A.createElement(
							vs,
							{
								header: Localize("#ContentHub_Recommendation_Curators"),
							},
							A.createElement(
								"div",
								{
									className: A_1(
										As.ReleventSimilarAppsCtn,
										As.RecommendingCuratorsCtn,
									),
								},
								d.data.filter(Boolean).map((e) =>
									A.createElement(fs, {
										key: `curator_${e.clanAccountID}`,
										curator: e,
									}),
								),
							),
						),
					s &&
						Boolean(g.data) &&
						A.createElement(_s, {
							creatorInfo: g.data,
						}),
					_ >= 0 &&
						A.createElement(vs, {
							header: LocalizeInlineReactPlural(
								"#DiscoveryQueue_TopSellers",
								(_ + 1).toLocaleString(),
								A.createElement("span", {
									className: As.RelevantTextBold,
								}),
							),
						}),
					f &&
						!b &&
						A.createElement(vs, {
							header: Localize("#DiscoveryQueue_RecommendedByIR"),
						}),
					A.createElement(ys, {
						bShowAvatars: r,
						count: l.data?.accountids_recommended?.length,
						locToken: "#DiscoveryQueue_FriendsRecommended",
						arrSteamIDs: h.data?.rgRecommendedFriends,
					}),
					A.createElement(ys, {
						bShowAvatars: r,
						count: o.data?.owns?.length,
						locToken: "#DiscoveryQueue_FriendsOwned",
						arrSteamIDs: h.data?.rgOwnedFriends,
					}),
					A.createElement(ys, {
						bShowAvatars: r,
						count: o.data?.in_wishlist?.length,
						locToken: "#DiscoveryQueue_FriendsWishlisted",
						arrSteamIDs: h.data?.rgWishlistFriends,
					}),
				),
			),
		(!i || I == 0) &&
			A.createElement(
				"div",
				{
					className: A_1(As.AppDescription, I && As.Divider),
				},
				n.GetShortDescription(),
			),
	);
}
function _s(e) {
	const { creatorInfo: t } = e;
	if (!t) {
		return null;
	}
	let r;
	switch (t.type) {
		case "publisher": {
			r = "#ContentHub_Recommendation_FollowedPublisher";
			break;
		}
		case "developer": {
			r = "#ContentHub_Recommendation_FollowedDeveloper";
			break;
		}
		case "franchise": {
			r = "#ContentHub_Recommendation_FollowedFranchise";
		}
	}
	if (r) {
		return A.createElement(vs, {
			header: LocalizeReact(
				r,
				A.createElement(
					"span",
					{
						className: As.RelevantTextBold,
					},
					t.clanInfo?.group_name,
				),
			),
		});
	} else {
		return null;
	}
}
function fs(e) {
	const { curator: t } = e;
	const r = FV(t?.clanAccountID);
	if (t && r) {
		return A.createElement(
			j.Ii,
			{
				href: r.GetCreatorHomeURL(null),
			},
			A.createElement("img", {
				src: t.avatar_medium_url,
			}),
		);
	} else {
		return null;
	}
}
function bs(e) {
	const { lifetimePlaytime: t, storeItem: r } = e;
	return A.createElement(
		"div",
		{
			className: As.SimilarAppCtn,
		},
		A.createElement(
			rs.Qf,
			{
				item: {
					type: "game",
					id: r.GetAppID(),
				},
				bHidePrice: true,
				hoverProps: {
					direction: "overlay",
					nBodyAlignment: 1,
					style: {
						minWidth: "320px",
						zIndex: 5000,
					},
				},
			},
			A.createElement("img", {
				className: As.SimilarAppImg,
				src: r.GetAssets().GetSmallCapsuleURL(),
			}),
		),
	);
}
function ys(e) {
	const { arrSteamIDs: t, count: r, locToken: n, bShowAvatars: i } = e;
	if (r) {
		if (r != 1 || i) {
			return A.createElement(
				vs,
				{
					header: LocalizeInlineReactPlural(
						n,
						r,
						A.createElement("span", {
							className: As.RelevantTextBold,
						}),
					),
				},
				i &&
					t.length > 0 &&
					A.createElement(
						"div",
						{
							className: As.FriendAvatarsCtn,
						},
						r == 1
							? A.createElement(Bs, {
									steamid: t[0],
								})
							: A.createElement(ws, {
									arrSteamIDs: t,
								}),
					),
			);
		} else {
			return A.createElement(vs, {
				header: LocalizeReact(
					`${n}_Single`,
					A.createElement(Ss, {
						steamid: t[0],
					}),
				),
			});
		}
	} else {
		return null;
	}
}
function Ss(e) {
	const { steamid: t } = e;
	const { data: r } = js_2(t);
	if (r && r.m_bInitialized) {
		return A.createElement(
			"span",
			{
				"data-miniprofile": `s${r.m_steamid.ConvertTo64BitString()}`,
				className: As.RelevantTextBold,
			},
			r.m_strPlayerName,
		);
	} else {
		return null;
	}
}
function ws(e) {
	const { arrSteamIDs: t } = e;
	const r = DW(t);
	return A.createElement(
		A.Fragment,
		null,
		r.map(
			({ data: e }) =>
				e &&
				A.createElement(as.i8, {
					key: e.m_steamid.ConvertTo64BitString(),
					"data-miniprofile": `s${e.m_steamid.ConvertTo64BitString()}`,
					persona: e,
					size: "Small",
					statusPosition: "right",
				}),
		),
	);
}
function Bs(e) {
	const { steamid: t } = e;
	const { data: r } = js_2(t);
	if (r) {
		return A.createElement(
			C.Z,
			{
				className: As.FriendBlockCtn,
				"data-miniprofile": `s${t}`,
			},
			A.createElement(as.i8, {
				persona: r,
				size: "Small",
				statusPosition: "right",
			}),
			A.createElement(ss.D, {
				className: As.PersonaStatus,
				persona: r,
				eFriendRelationship: 3,
				bIsSelf: false,
				strNickname: null,
				bParenthesizeNicknames: false,
				bCompactView: false,
				bNoMask: true,
			}),
		);
	} else {
		return null;
	}
}
function vs(e) {
	const { children: t, header: r } = e;
	return A.createElement(
		"div",
		{
			className: As.RelevantItem,
		},
		A.createElement(
			"div",
			{
				className: As.RelevantCheck,
			},
			A.createElement(hn.Jlk, null),
		),
		A.createElement(
			"div",
			{
				className: As.RelevantColumn,
			},
			A.createElement(
				"div",
				{
					className: As.ReleventText,
				},
				r,
			),
			t,
		),
	);
}
const Es = _Is;
const Ts = Ms;
const Fs = Ns;
function Gs(e) {
	const { name: t, trailerCategory: r, trailerDisplay: n, mouseOver: i } = e;
	const [a, s] = A.useState(false);
	A.useEffect(() => {
		if (n != 0) {
			s(true);
		}
	}, [n]);
	A.useEffect(() => {
		if (i) {
			s(true);
			return;
		}
		if (!a) {
			return;
		}
		const e = setTimeout(() => s(false), 3000);
		return () => clearTimeout(e);
	}, [a, i]);
	if (r == null || n == 0) {
		return;
	}
	const o =
		n == 1
			? Localize("#StoreTrailer_Title_TrailerPreview")
			: ((e) => {
					switch (e) {
						case 1: {
							return Localize("#StoreTrailer_Title_Category_Gameplay");
						}
						case 2: {
							return Localize("#StoreTrailer_Title_Category_Teaser");
						}
						case 3: {
							return Localize("#StoreTrailer_Title_Category_Cinematic");
						}
						case 4: {
							return Localize("#StoreTrailer_Title_Category_Update");
						}
						case 5: {
							return Localize("#StoreTrailer_Title_Category_Accolades");
						}
						case 6: {
							return Localize("#StoreTrailer_Title_Category_Interview");
						}
					}
					return Localize("#StoreTrailer_Title_Category_Unknown");
				})(r);
	return A.createElement(
		"div",
		{
			className: A_1({
				[Fs.TrailerTitle]: true,
				[Fs.Visible]: a,
			}),
		},
		LocalizeReact(
			"#StoreTrailer_Title_Combiner",
			A.createElement(
				"span",
				{
					className: Fs.Category,
				},
				o,
			),
			t,
		),
	);
}
const Os = new Ya.wd("TrailerAppVideo");
const Ps = "bGameHighlightAutoplayDisabled";
const Ls = "discovery-queue-volume";
function zs(e) {
	const {
		storeItem: t,
		bCurrentlyActive: r,
		autoPlayCookieName: n,
		bPlayWithBroadcastPlayer: i,
		showScreenshotInsteadOfMainCap: a,
		autoplayCheckboxPosition: s,
		refTogglePlayPause: o,
		...l
	} = e;
	const [c, m] = A.useState(false);
	const [u, d] = A.useState(false);
	const [p, g] = A.useState(false);
	const [h, _] = A.useState(false);
	const [f, b] = A.useState(0);
	const y = A.useRef();
	const w = A.useRef();
	const [B, v] = A.useState();
	const I = A.useRef();
	A.useEffect(() => {
		if (r && u && (c || i)) {
			g(true);
		}
	}, [c, u, r, i]);
	A.useEffect(() => {
		if (r) {
			const e = GetCookie(n ?? Ps);
			const t = !!e && e.toLowerCase() === "true";
			m(!t);
			d(true);
		}
		return () => d(false);
	}, [n, r]);
	const E = ((e, t, r, n, i) =>
		A.useCallback(() => {
			if (e == 0) {
				t(true);
			} else if (e == 1 && r.current) {
				if (r.current.paused) {
					r.current.play();
				} else {
					r.current.pause();
				}
			} else if (e == 2 && n.current) {
				if (n.current.paused) {
					n.current.play();
				} else {
					n.current.pause();
				}
			} else if (e == 2 && i) {
				i.TogglePlayPause();
			}
		}, [i, e, n, r, t]))(f, g, y, w, B);
	A.useEffect(() => {
		if (o) {
			o.current = E;
		}
	}, [E, o]);
	const M =
		a && t.BHasAgeSafeScreenshots()
			? t.GetOnlyAllAgesSafeScreenshots()[0]
			: t.GetAssets().GetMainCapsuleURL();
	const T = ((e) => {
		let t = null;
		if (e?.GetAllTrailers().GetHighlightTrailers().length > 0) {
			t = e.GetAllTrailers().GetHighlightTrailers()[0];
		} else if (e?.GetAllTrailers().GetOtherTrailers().length > 0) {
			t = e.GetAllTrailers().GetOtherTrailers()[0];
		}
		return t;
	})(t);
	return A.createElement(
		C.Z,
		{
			className: Ts.AppCarouselTrailerCtn,
			onMouseEnter: () => _(true),
			onMouseLeave: () => _(false),
		},
		A.createElement("img", {
			ref: I,
			className: A_1(Ts.AppMainCap, f != 0 && Ts.Hidden),
			src: M,
			onClick: E,
		}),
		!i &&
			A.createElement(Vs, {
				storeItem: t,
				bAutoplayVideos: c,
				autoplayCheckboxPosition: s,
				fnSetAutoPlayVideos: (e) => {
					SetCookie(n ?? Ps, String(!e), 3650);
					m(e);
					g(e);
				},
			}),
		A.createElement(Gs, {
			name: t.GetName(),
			trailerCategory: T?.GetTrailerCategory(),
			trailerDisplay: f,
			mouseOver: h,
		}),
		A.createElement(xs, {
			eTrailerDisplay: f,
			setTrailerDisplay: b,
			featuredTrailer: T,
			refMicroTrailer: y,
			refMainTrailer: w,
			loadedAndActive: u && r,
			setVideoShouldStart: g,
			bMouseOverVideo: h,
			storeItem: t,
			broadcastVideo: B,
			fnSetBroadcastVideo: v,
			fnTogglePlayPause: E,
			bAutoplayVideos: c,
			bVideoShouldStart: p,
			bPlayWithBroadcastPlayer: i,
			...l,
		}),
	);
}
function xs(e) {
	const {
		storeItem: t,
		featuredTrailer: r,
		bPlayWithBroadcastPlayer: n,
		bSkipMicroTrailer: i,
		nFadeRatio: a,
		fnPlayPause: s,
		bRequestPause: o,
		fnComplete: l,
		bLoopVideo: c,
		nDefaultVolume: m,
		eTrailerDisplay: u,
		setTrailerDisplay: d,
		refMainTrailer: p,
		refMicroTrailer: g,
		loadedAndActive: h,
		setVideoShouldStart: _,
		broadcastVideo: f,
		fnSetBroadcastVideo: b,
		fnTogglePlayPause: y,
		bAutoplayVideos: S,
		bVideoShouldStart: B,
	} = e;
	const [v, I] = A.useState(false);
	const [E, M] = A.useState(false);
	const [T, R] = A.useState(false);
	const [k, D] = M_2(Ls);
	const [N, F] = A.useState(false);
	const [G, O] = A.useState(false);
	const [P, L] = A.useState(false);
	A.useEffect(() => {
		if (p.current) {
			const e = m ?? 0.8;
			p.current.volume = (k ?? e) * (a ?? 1);
			p.current.muted = k == null || k <= 0 || k <= 0 || N;
		}
	}, [k, a, N, m, p]);
	const z = t?.GetMicroTrailer();
	const x = !!z || !!r;
	A.useEffect(() => {
		let e = false;
		if (h && T && x) {
			e = u === 0 || (u === 1 && !G) || (u === 2 && !P);
		}
		I(e);
		s?.(S && e);
	}, [s, u, P, G, h, S, T, x]);
	Hs(g, O);
	Hs(p, L);
	A.useEffect(() => {
		if (!B) {
			d(0);
			I(false);
			R(false);
			if (g.current) {
				g.current.pause();
				g.current.currentTime = 0;
			}
			if (p.current) {
				p.current.pause();
				p.current.currentTime = 0;
			}
		}
	}, [B, p, g, d]);
	A.useEffect(() => {
		if (p.current) {
			p.current.onended = l;
		}
	}, [l, p]);
	const U = A.useRef(false);
	A.useEffect(() => {
		if (h && u === 0) {
			R(true);
			if (B) {
				if (p.current) {
					Os.Debug("Starting microtrailer");
					d(1);
					const e = () =>
						((e, t, r, n) => {
							if (e.current) {
								return;
							}
							e.current = true;
							Os.Debug("Starting main trailer");
							t(2);
							r(false);
							Us(n, "main trailer", (e) => {
								if (e) {
									r(true);
								}
							});
						})(U, d, F, p.current);
					if (i || !g.current) {
						e();
					} else {
						O(true);
						g.current.onended = e;
						Us(g.current, "microtrailer", () => O(false));
					}
				} else if (f) {
					Os.Debug("Starting broadcast player");
					d(2);
					F(false);
					f.Play();
				}
			} else {
				Os.Debug("Showing image");
			}
		}
	}, [h, u, i, B, l, f, d, p, g]);
	((e, t) => {
		A.useEffect(() => {
			if (!t.current || !t.current.onended) {
				return;
			}
			if (!e) {
				return;
			}
			let r = t.current.onended;
			let n = setTimeout(() => {
				r();
			}, 6000);
			return () => clearTimeout(n);
		}, [e, t]);
	})(G, g);
	A.useEffect(() => {
		if (!h) {
			_(false);
		}
	}, [h, _]);
	A.useEffect(() => {
		const e = fm_2(() => {
			M(f?.GetUserInputNeeded());
			L(!f?.IsPaused());
		});
		return () => e();
	}, [f]);
	((e, t, r, n, i, a, s) => {
		const [o, l] = A.useState(false);
		A.useEffect(() => {
			if (e && !o) {
				if (t == 1 && r && n) {
					r.pause();
					l(true);
				} else if (t == 2 && i && a) {
					i.pause();
					l(true);
				} else if (t == 2 && s && !s.IsPaused()) {
					s.Pause();
					l(true);
				}
			} else if (!e && o) {
				if (t == 1 && r) {
					r.play();
				} else if (t == 2 && i) {
					i.play();
				} else if (t == 2 && s && s.IsPaused()) {
					s.Play();
				}
				l(false);
			}
		}, [s, t, e, o, n, a, r, i]);
	})(o, u, g.current, G, p.current, P, f);
	if (!t || !t.BIsVisible()) {
		return null;
	}
	const W = (c ?? true) && !l;
	return (
		(r || n) &&
		A.createElement(
			A.Fragment,
			null,
			v &&
				!E &&
				A.createElement(
					C.Z,
					{
						focusable: true,
						onClick: y,
						className: Ts.PlayButton,
					},
					A.createElement(hn.IOc, null),
				),
			z &&
				A.createElement(
					"video",
					{
						className: Ws(true, u),
						ref: g,
						preload: "auto",
						playsInline: true,
						muted: true,
						onClick: y,
					},
					A.createElement("source", {
						src: z.strWebMURL,
						type: "video/webm",
					}),
					Boolean(!w.TS.IN_CLIENT) &&
						A.createElement("source", {
							src: z.strMP4URL,
							type: "video/mp4",
						}),
				),
			r &&
				!n &&
				A.createElement(
					"video",
					{
						className: Ws(false, u),
						ref: p,
						onVolumeChange: (e) => {
							if (a && a < 1) {
								return;
							}
							if (N) {
								return;
							}
							const t = e.target;
							const r = t.muted ? 0 : t.volume;
							if (k === undefined || Math.abs(k - r) > Number.EPSILON) {
								Os.Debug("Saving volume to storage", r);
								D(r);
							}
						},
						muted: !(k > 0),
						preload: "auto",
						playsInline: true,
						loop: W,
						controls: true,
					},
					A.createElement("source", {
						src: r.GetTrailer480p().strWebMURL,
						type: "video/webm",
					}),
					Boolean(!w.TS.IN_CLIENT) &&
						A.createElement("source", {
							src: r.GetTrailer480p().strMP4URL,
							type: "video/mp4",
						}),
				),
			n &&
				A.createElement(Ds.default, {
					classes: Ws(false, u),
					nAppIDVOD: t.GetAppID(),
					watchLocation: 15,
					fnOnVideoEnd: l,
					fnVideoClick: y,
					fnSetBroadcastVideo: b,
					bStartWithSubtitles: true,
					bStartMuted: true,
				}),
		)
	);
}
function Us(e, t, r) {
	e.play().catch((n) => {
		const i = n.name === "NotAllowedError";
		r(i);
		if (n.name === "NotAllowedError") {
			Os.Debug(`Failed to play ${t}, trying again muted`);
			e.muted = true;
			e.play().catch((e) => {
				Os.Warning(`Failed to play ${t}: `, e);
			});
		} else {
			Os.Warning(`Failed to play ${t}: `, n);
		}
	});
}
function Ws(e, t) {
	return A_1({
		[Ts.AppVideo]: true,
		[Ts.PlayFullTrailer]: t == 2,
		[Ts.PlayMicrotrailer]: t == 1,
		[Ts.NoTrailer]: t == 0,
		[Ts.Microtrailer]: e,
		[Ts.Trailer]: !e,
	});
}
function Vs(e) {
	const {
		storeItem: t,
		bAutoplayVideos: r,
		fnSetAutoPlayVideos: n,
		autoplayCheckboxPosition: i,
	} = e;
	const a = {
		[i || "top"]: 0,
	};
	return A.createElement(
		"div",
		{
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
			},
			className: Ts.AutoplayCheckboxCtn,
		},
		A.createElement(f.Yh, {
			controlled: true,
			checked: r,
			key: t.GetAppID(),
			className: Ts.AutoplayCheckbox,
			style: a,
			label: Localize("#StoreTrailer_AutoPlayVideos"),
			onChange: n,
		}),
	);
}
function Hs(e, t) {
	A.useEffect(() => {
		const r = e.current;
		if (!r) {
			return;
		}
		const n = () => t(true);
		const i = () => t(false);
		r.addEventListener("play", n);
		r.addEventListener("pause", i);
		return () => {
			r.removeEventListener("play", n);
			r.removeEventListener("pause", i);
		};
	}, [t, e]);
}
const js = {
	include_assets: true,
	include_trailers: true,
	include_basic_info: true,
	include_platforms: true,
};
function qs(e) {
	const {
		appID: t,
		focused: r,
		skipMicroTrailer: n,
		playWithBroadcastPlayer: i,
		autoPlayCookieName: a,
		showScreenshotInsteadOfMainCap: s,
		fadeRatio: o,
		fnPlayPause: l,
		refTogglePlayPause: c,
		bRequestPause: m,
		fnComplete: u,
		loopVideo: d,
		defaultVolume: p,
	} = e;
	const [g] = t7(t, js);
	const { bIsIgnored: h } = Qs(t);
	const { bIsWishlisted: _ } = Ys(t);
	const f = er_2();
	return A.createElement(
		C.Z,
		{
			className: A_1(Es.AppVideoCtn, "AppVideoCtn"),
		},
		A.createElement(
			"div",
			{
				className: A_1(Es.WishlistBadge, _ && Es.Active),
			},
			Localize("#Sale_OnWishlist"),
		),
		f &&
			A.createElement(Se.$o, {
				className: Es.DeckVerifiedLogo,
				category: g.GetPlatforms().steam_deck_compat_category,
			}),
		A.createElement(
			"div",
			{
				className: Es.VideoArea,
			},
			A.createElement(Zs, {
				appID: t,
			}),
			A.createElement(zs, {
				key: t,
				storeItem: g,
				bCurrentlyActive: r && !h,
				autoplayCheckboxPosition: "top",
				autoPlayCookieName: a,
				bSkipMicroTrailer: n,
				bPlayWithBroadcastPlayer: i,
				nFadeRatio: o,
				showScreenshotInsteadOfMainCap: s,
				fnPlayPause: l,
				refTogglePlayPause: c,
				bRequestPause: m,
				fnComplete: u,
				bLoopVideo: d,
				nDefaultVolume: p,
			}),
		),
	);
}
function Qs(e) {
	const t = q3(() => An.Fm.Get().BIsGameIgnored(e));
	const r = ru_2();
	const n = A.useCallback(() => {
		An.Fm.Get().UpdateAppIgnore(e, !t, r);
	}, [e, r, t]);
	return {
		bIsIgnored: t,
		fnUpdateIgnored: n,
	};
}
function Zs(e) {
	const { appID: t } = e;
	const r = Qn_1();
	const { bIsIgnored: n, fnUpdateIgnored: i } = Qs(t);
	return A.createElement(
		"div",
		{
			className: A_1(Es.IgnoredCtn, n && Es.Active),
		},
		A.createElement(
			"div",
			{
				className: A_1(Es.IgnoredInfo, n && Es.Active),
			},
			A.createElement(
				"div",
				{
					className: Es.IgnoredTitle,
				},
				Localize("#SaleTrailerCarousel_Ignored"),
			),
			A.createElement(
				"div",
				{
					className: Es.IgnoredDescription,
				},
				Localize("#SaleTrailerCarousel_IgnoredConfirmation"),
			),
			A.createElement(
				C.Z,
				{
					className: A_1(Es.UndoButton, Es.UndoIgnoreButton),
					onClick: i,
				},
				r &&
					A.createElement(at.$m, {
						button: nt.g4.X,
						type: at.wt.Light,
						size: at.xY.Medium,
					}),
				Localize("#SaleTrailerCarousel_Undo"),
			),
		),
	);
}
function Ys(e) {
	const t = q3(() => An.Fm.Get().BIsGameWishlisted(e));
	const r = ru_2();
	const n = A.useCallback(() => {
		An.Fm.Get().UpdateGameWishlist(e, !t, r);
	}, [e, t, r]);
	return {
		bIsWishlisted: t,
		fnUpdateWishlist: n,
	};
}
new Ya.wd("DiscoveryQueueApp").Debug;
function Ks(e) {
	const {
		appID: t,
		nItemHeight: r,
		nItemWidth: n,
		selected: i,
		fnFocused: a,
		eStoreDiscoveryQueueType: s,
		storePageFilter: o,
		bPreferDemoStorePage: l,
		elVideo: c,
		elDetails: m,
	} = e;
	const [u] = t7(t, js);
	const d = Qn_1();
	const p = R7();
	const g = p?.ownerWindow || window;
	const h = Xs(u, s, o, l);
	const { bIsIgnored: _, fnUpdateIgnored: f } = Qs(t);
	const { bIsWishlisted: b, fnUpdateWishlist: y } = Ys(t);
	const B = A.useRef();
	A.useEffect(() => {
		if (i && B.current) {
			B.current.focus({
				preventScroll: true,
			});
		}
	}, [i]);
	if (!u) {
		console.warn("Error: missing store item for appid ", t);
		return null;
	}
	const v = {
		width: n || undefined,
		height: r || undefined,
	};
	return A.createElement(
		C.Z,
		{
			ref: B,
			style: v,
			className: A_1(As.DiscoveryQueueApp, i && As.Selected),
			onOptionsActionDescription: b
				? Localize("#DiscoveryQueue_RemoveFromWishlist")
				: Localize("#DiscoveryQueue_AddToWishlist"),
			onOptionsButton: y,
			onOKActionDescription: Localize("#DiscoveryQueue_ViewStorePage"),
			onOKButton: () => {
				g.location.href = h;
			},
			onSecondaryActionDescription: _
				? Localize("#DiscoveryQueue_Undo")
				: Localize("#DiscoveryQueue_IgnoreLink"),
			onSecondaryButton: f,
			fnScrollIntoViewHandler: () => {
				a();
				return true;
			},
		},
		A.createElement(
			"div",
			{
				className: A_1(As.IgnoredCtn, _ && As.Active),
			},
			A.createElement(
				"div",
				{
					className: A_1(As.IgnoredInfo, _ && As.Active),
				},
				A.createElement(
					"div",
					{
						className: As.IgnoredTitle,
					},
					Localize("#DiscoveryQueue_Ignored"),
				),
				A.createElement(
					"div",
					{
						className: As.IgnoredDescription,
					},
					Localize("#DiscoveryQueue_IgnoredConfirmation"),
				),
				A.createElement(
					C.Z,
					{
						className: A_1(As.QueueButton, As.UndoIgnoreButton),
						onClick: f,
					},
					d &&
						A.createElement(at.$m, {
							button: nt.g4.X,
							type: at.wt.Light,
							size: at.xY.Medium,
						}),
					Localize("#DiscoveryQueue_Undo"),
				),
			),
		),
		c,
		m,
	);
}
function Xs(e, t, r, n) {
	const i = n9();
	return A.useMemo(() => {
		if (!e) {
			return;
		}
		const a = Bk(r);
		const s = t >= 0 ? `?inqueue=${t}${r ? `_${a}` : ""}` : "";
		return bV(i, e.GetStorePageURL(n) + s);
	}, [n, t, i, e, r]);
}
function Js(e) {
	const {
		appID: t,
		bShowMinimizedDisplay: r,
		eStoreDiscoveryQueueType: n,
		storePageFilter: i,
		bPreferDemoStorePage: a,
	} = e;
	const [s] = t7(t, js);
	const { bIsIgnored: o, fnUpdateIgnored: l } = Qs(t);
	const { bIsWishlisted: c, fnUpdateWishlist: m } = Ys(t);
	const u = Xs(s, n, i, a);
	const d = Qn_1();
	const p = d;
	const g = LG(s?.GetTagIDs());
	if (!s) {
		return;
	}
	const h = s.GetAssets().GetLibraryCapsuleURL();
	const _ = s.GetAssets().GetHeaderURL();
	return A.createElement(
		C.Z,
		{
			className: As.AppDetailsCtn,
		},
		A.createElement(
			"div",
			{
				className: As.AppDetailsCtnTop,
			},
			h &&
				A.createElement(
					"a",
					{
						className: A_1(As.CapsuleLink),
						href: u,
					},
					A.createElement("img", {
						className: As.AppLibraryHero,
						src: h,
					}),
					_ &&
						A.createElement("img", {
							className: As.AppHeader,
							src: _,
						}),
				),
			A.createElement(
				"div",
				{
					className: As.RightColumn,
				},
				A.createElement(
					"a",
					{
						className: A_1(As.AppName),
						href: u,
					},
					s.GetName(),
				),
				A.createElement(gn.wc, {
					bSingleLineMode: true,
					info: {
						id: t,
						type: ts(s.GetAppType()),
					},
				}),
			),
			A.createElement($s, {
				rgTagNames: g,
			}),
			A.createElement(
				"div",
				{
					className: As.AppReviews,
				},
				A.createElement(rs.Jz, {
					bShowTooltip: true,
					bTruncateTotalReviews: r,
					appInfo: {
						id: t,
						type: ts(s.GetAppType()),
					},
				}),
			),
			A.createElement(
				"div",
				{
					className: As.AppRelevanceCtn,
				},
				A.createElement(Cs, {
					bShowAvatars: !r,
					storeItem: s,
					appID: t,
				}),
			),
		),
		!d &&
			A.createElement(
				"div",
				{
					className: As.AppActionButtonsCtn,
				},
				A.createElement(
					"div",
					{
						className: As.AppActionJustButtonsCtn,
					},
					A.createElement(
						"div",
						{
							className: As.ButtonsRowWrap,
						},
						s.BHasDemo() &&
							A.createElement(is.j, {
								info: {
									id: s.GetAppID(),
									type: _4(s.GetStoreItemType(), s.GetAppType()),
								},
								className: A_1(As.QueueButton, As.Primary, As.Launch),
							}),
						A.createElement(
							"a",
							{
								className: A_1(As.QueueButton, As.Primary),
								href: u,
							},
							p &&
								A.createElement(at.$m, {
									button: nt.g4.Y,
									type: at.wt.Light,
									size: at.xY.Medium,
									additionalClassName: As.YGlyph,
								}),
							" ",
							Localize("#DiscoveryQueue_ViewStorePage"),
						),
						A.createElement(
							ns.he,
							{
								toolTipContent: c
									? Localize("#RemoveFromWishlist_ttip")
									: Localize("#AddToWishlist_ttip"),
							},
							A.createElement(
								C.Z,
								{
									focusable: true,
									className: A_1(As.QueueButton, c && As.Active),
									onClick: m,
								},
								p &&
									A.createElement(at.$m, {
										button: nt.g4.Y,
										type: at.wt.Light,
										size: at.xY.Medium,
										additionalClassName: As.YGlyph,
									}),
								c
									? A.createElement(hn.qnF, null)
									: A.createElement(hn.T4m, null),
							),
						),
						A.createElement(
							ns.he,
							{
								toolTipContent: Localize(
									"#SaleTrailerCarousel_IgnoreLink_ttip",
								),
							},
							A.createElement(
								C.Z,
								{
									focusable: true,
									className: A_1(As.QueueButton, o && As.Active),
									onClick: l,
								},
								A.createElement(hn.NtH, null),
							),
						),
					),
				),
			),
	);
}
function $s(e) {
	const { rgTagNames: t } = e;
	const r = ((e) => {
		const t = An.Fm.Get().GetRecommendedTags();
		const r = A.useMemo(() => new Map(t.map((e, t) => [e, t])), [t]);
		const n = A.useMemo(() => new Map(e.map((e, t) => [e.tagid, t])), [e]);
		return A.useMemo(
			() =>
				[...e].sort((e, t) =>
					r.has(e.tagid) && !r.has(t.tagid)
						? -1
						: !r.has(e.tagid) && r.has(t.tagid)
							? 1
							: r.has(e.tagid)
								? r.get(e.tagid) - r.get(t.tagid)
								: n.get(e.tagid) - n.get(t.tagid),
				),
			[n, r, e],
		);
	})(t);
	return A.createElement(
		"div",
		{
			className: As.AppTagsCtn,
		},
		r.map((e) =>
			A.createElement(
				"div",
				{
					key: e.name,
					className: As.TagEntry,
				},
				e.name,
			),
		),
	);
}
const to = eo;
function ro(e) {
	const {
		className: t,
		showPriorAsActive: r,
		count: n,
		selectedIndex: i,
		fnNavigate: a,
	} = e;
	return A.createElement(
		C.Z,
		{
			"flow-children": "row",
			className: A_1(to.ProgressCtn, t),
		},
		Array.from({
			length: n,
		}).map((e, t) =>
			A.createElement("div", {
				key: `dot_${t}`,
				className: A_1({
					[to.ProgressDot]: true,
					[to.ProgressDotActive]: r && t < i,
					[to.ProgressDotSelected]: t == i,
					[to.ProgressDotClickable]: !!a,
				}),
				onClick: a ? () => a(t) : undefined,
			}),
		),
	);
}
const no = new Ya.wd("DiscoveryQueueWizard").Debug;
const io = 1;
const ao = 1400;
const so = "discoveryqueue2022";
const oo = {
	include_assets: true,
	include_trailers: true,
	include_basic_info: true,
	include_tag_count: 20,
	include_release: true,
	include_platforms: true,
};
async function lo(e, t, r, n) {
	let i = [];
	let a = false;
	try {
		const { appids: s, exhausted: o } = await Ja.aI
			.Get()
			.GetDiscoveryQueueAppsOfType(e, t, n);
		i = [...s];
		a = o;
		if (r && i.findIndex((e) => e === r) === -1) {
			i.unshift(r);
		}
		await Mn.A.Get().QueueMultipleAppRequests(i, {
			...js,
			...oo,
		});
	} catch (e) {
		console.error("Failed getting discovery queue apps", e);
	}
	return {
		appids: i,
		exhausted: a,
	};
}
function co(e) {
	const {
		eStoreDiscoveryQueueType: t,
		bWizardVisible: r,
		fnCloseModal: n,
		includeAppID: i,
		storePageFilter: a,
		bPreferDemoStorePage: s,
	} = e;
	const [o, l] = A.useState(0);
	const [c, m] = A.useState(undefined);
	const [u, d] = A.useState(0);
	const p = R7();
	const g = p?.ownerWindow || window;
	const h = ru_2(so);
	const [_, f] = A.useState(0);
	const b = b_2();
	E_2("ArrowLeft", () => I(false), true, true);
	E_2("Left", () => I(false), true, true);
	E_2("ArrowRight", () => I(true), true, true);
	E_2("Right", () => I(true), true, true);
	E_2("Escape", () => n?.(), true, true);
	E_2("Esc", () => n?.(), true, true);
	const y = A.useMemo(() => Boolean(g.innerWidth < ao), [g]);
	const { fnGetDiscoveryQueue: B, rgAppIDs: v } = ((e, t, r) => {
		const [n, i] = A.useState([]);
		const a = m_2("DiscoveryQueueWizard");
		const s = async (s) => {
			let { appids: o } = await lo(e, !s, s && r, t);
			if (s && !o.length) {
				let { appids: r } = await lo(e, true, undefined, t);
				o = r;
			}
			if (!a?.token?.reason) {
				const e = [...(n ?? []), ...o, io];
				i(e);
			}
			no("Loaded new discovery queue apps: ", o);
		};
		return {
			fnGetDiscoveryQueue: s,
			rgAppIDs: n,
		};
	})(t, a, i);
	A.useEffect(() => {
		B(true);
		An.Fm.Get().HintLoad();
	}, []);
	A.useEffect(() => {
		const e = v[o];
		if (e != c) {
			if (e && e != io) {
				b.AddImpression(e, h);
			}
			m(e);
		}
	}, [b, o, c, v, h]);
	const I = (e) => {
		const t = Ka.OQ(o + (e ? 1 : -1), 0, v.length - 1);
		if (t != o) {
			l(t);
			no("New selected index: ", t, " Prev selected index: ", o);
		}
	};
	A.useEffect(() => {
		if (v?.length && v[o] !== io) {
			f((e) => e + 1);
			Ja.aI
				.Get()
				.SkipDiscoveryQueueItem(v[o], t, a)
				.then(() => f((e) => e - 1));
		}
	}, [t, o, v, a]);
	A.useEffect(() => {
		if (v.length != u) {
			d(v.length);
			if (v.length > u && v[o] == io) {
				l(o + 1);
			}
		}
	}, [u, o, v]);
	const [E] = A.useState(new Map());
	const M = WX(t, a);
	const T = !c_3() && o > 0;
	const R = !c_3() && o < v.length - 1;
	const {
		refContainer: k,
		bIsDragging: D,
		nDragOffset: N,
		nDragSelectedOffsetIndex: F,
		handleTouchStart: G,
		handleTouchMove: O,
		handleTouchEnd: P,
	} = ((e, t) => {
		const r = A.useRef(null);
		const [n, i] = A.useState(0);
		const [a, s] = A.useState(false);
		const [o, l] = A.useState(0);
		const c = A.useRef(0);
		const m = 50;
		const u = (e) => {
			s(true);
			c.current = e.touches[0].clientX;
			i(0);
			l(0);
		};
		const d = (e) => {
			if (!a) {
				return;
			}
			const t = e.touches[0].clientX - c.current;
			i(t);
			l(n > m ? 1 : n < -m ? -1 : 0);
		};
		const p = () => {
			if (a) {
				s(false);
				if (n > m) {
					e((e) => Math.max(e - 1, 0));
				} else if (n < -m) {
					e((e) => Math.min(e + 1, t - 1));
				}
				i(0);
				l(0);
			}
		};
		return {
			refContainer: r,
			bIsDragging: a,
			nDragOffset: n,
			nDragSelectedOffsetIndex: o,
			handleTouchStart: u,
			handleTouchMove: d,
			handleTouchEnd: p,
		};
	})((e) => l(e), v.length);
	const L = (e) => Ka.W(o + e, v) && (Ka.LA(e, -1, 1) || D);
	const z = aL(`${w.TS.STORE_BASE_URL}explore?dq=widget`);
	const U = v[o] !== io;
	const { nQueueStart: W, nCount: V } = ((e, t) => {
		let r = 0;
		for (let n = 0; n < e; n++) {
			if (t[n] == io) {
				r = n + 1;
			}
		}
		let n = 0;
		for (let r = e; r < t.length; r++) {
			if (t[r] == io) {
				n = r;
				break;
			}
			if (r == t.length - 1) {
				n = t.length;
			}
		}
		const i = n - r;
		return {
			nQueueStart: r,
			nQueueEnd: n,
			nCount: i,
		};
	})(o, v);
	return A.createElement(
		x.EN,
		{
			active: r,
		},
		A.createElement(
			gi.A,
			{
				feature: so,
			},
			A.createElement(
				C.Z,
				{
					focusable: false,
					className: As.DiscoveryQueueCarouselCtn,
					navEntryPreferPosition: Va.iU.LAST,
					onCancelButton: () => n?.(),
					onCancelActionDescription: Localize("#Button_Close"),
				},
				A.createElement(
					"div",
					{
						className: As.DiscoveryQueueWrapper,
						onClick: (e) => {
							if (e.target == e.currentTarget) {
								n?.();
								e.stopPropagation();
							}
						},
					},
					A.createElement(
						C.Z,
						{
							"flow-children": "row",
							className: As.DiscoveryQueueName,
						},
						M,
					),
					A.createElement(
						C.Z,
						{
							"flow-children": "row",
							className: As.TopBarCtn,
						},
						A.createElement(
							C.Z,
							{
								className: As.LearnMore,
							},
							LocalizeInlineReactWithFallback(
								"#DiscoveryQueue_LearnMore_Default",
								A.createElement(j.Ii, {
									className: As.LearnMoreLink,
									href: z,
								}),
							),
						),
						A.createElement(
							C.Z,
							{
								className: As.ControlsCtn,
							},
							A.createElement(
								C.Z,
								{
									focusable: true,
									className: As.QueueButton,
									onClick: n,
									onActivate: () => n && n(),
								},
								A.createElement(hn.X, null),
							),
						),
					),
					A.createElement(
						C.Z,
						{
							onClick: () => I(false),
							className: A_1(As.QueueNavArrow, As.LeftArrow, T && As.Enable),
						},
						A.createElement(hn.l8x, {
							angle: 180,
						}),
					),
					A.createElement(
						C.Z,
						{
							onClick: () => I(true),
							className: A_1(As.QueueNavArrow, As.RightArrow, R && As.Enable),
						},
						A.createElement(hn.l8x, {
							angle: 0,
						}),
					),
					A.createElement(
						C.Z,
						{
							ref: k,
							className: As.DiscoveryQueueItemsCtn,
							focusable: false,
							onTouchStart: G,
							onTouchMove: O,
							onTouchEnd: P,
						},
						[-2, -1, 0, 1, 2].map((e) =>
							A.createElement(
								"div",
								{
									key: o + e,
									className: A_1({
										[As.DiscoveryQueueItemPositioner]: true,
										[As.Dragging]: D,
										[As.InRange]: L(e),
										[As.FarLeft]: e == -2,
										[As.Left]: e == -1,
										[As.Current]: e == 0,
										[As.Right]: e == 1,
										[As.FarRight]: e == 2,
										[As.Selected]: e + F == 0,
									}),
									style: {
										"--dragOffsetX": `${N}px`,
									},
								},
								L(e) &&
									A.createElement(mo, {
										eStoreDiscoveryQueueType: t,
										storePageFilter: a,
										rgAppIDs: v,
										index: o + e,
										bShowMinimizedDisplay: y,
										selectedIndex: o,
										bPreferDemoStorePage: s,
										mapViewedAppCount: E,
										fnCloseModal: n,
										fnLoadNextQueue: () => B(false),
										fnAdvance: I,
										bSkipAppRequestPending: Boolean(_ != 0),
									}),
							),
						),
					),
					A.createElement(ro, {
						className: A_1(!U && As.ProgressHidden),
						showPriorAsActive: true,
						count: V,
						selectedIndex: o - W,
					}),
				),
			),
		),
	);
}
function mo(e) {
	const {
		eStoreDiscoveryQueueType: t,
		storePageFilter: r,
		rgAppIDs: n,
		index: i,
		bShowMinimizedDisplay: a,
		selectedIndex: s,
		bPreferDemoStorePage: o,
		mapViewedAppCount: l,
		fnCloseModal: c,
		fnLoadNextQueue: m,
		fnAdvance: u,
		bSkipAppRequestPending: d,
	} = e;
	const [p, g] = A.useState(false);
	const h = () => {
		if (s != i) {
			u(i > s);
		}
	};
	const C = s === i;
	const _ = A.useRef(C);
	A.useEffect(() => {
		const e = _.current;
		_.current = C;
		if (e && !C) {
			g(true);
			const e = setTimeout(() => g(false), 500);
			return () => {
				clearTimeout(e);
			};
		}
	}, [C]);
	if (n[i] == io) {
		let a = 0;
		for (let e = i - 1; e >= 0; e--) {
			if (n[e] == io) {
				a += 1;
			}
		}
		let o = 0;
		for (let e = i - 1; e >= 0 && n[e] !== io; e--) {
			o++;
		}
		if (!l.has(a)) {
			l.set(a, Ja.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(t, r));
		}
		return A.createElement(uo, {
			...e,
			key: s,
			selected: C,
			lastCard: s == n.length - 1,
			fnLoadNextQueue: m,
			fnCloseModal: c,
			summaryCardIndex: a,
			eStoreDiscoveryQueueType: t,
			viewedAppCount: (l.get(a) || 0) + o,
			fnFocused: h,
			fnAdvance: () => u(true),
			bSkipAppRequestPending: d,
		});
	}
	const f = C || _.current || _.current || p;
	return A.createElement(Ks, {
		eStoreDiscoveryQueueType: t,
		storePageFilter: r,
		selected: C,
		appID: n[i],
		bPreferDemoStorePage: o,
		fnFocused: h,
		elVideo: A.createElement(qs, {
			appID: n[i],
			focused: f,
		}),
		elDetails: A.createElement(Js, {
			appID: n[i],
			bShowMinimizedDisplay: a,
			eStoreDiscoveryQueueType: t,
			storePageFilter: r,
			bPreferDemoStorePage: o,
		}),
	});
}
function uo(e) {
	const {
		eStoreDiscoveryQueueType: t,
		fnCloseModal: r,
		summaryCardIndex: n,
		lastCard: i,
		selected: a,
		fnLoadNextQueue: s,
		storePageFilter: o,
		fnDisplaySummaryReward: l,
		viewedAppCount: c,
		fnFocused: m,
		fnAdvance: u,
		bSkipAppRequestPending: d,
	} = e;
	const [p, g] = A.useState([]);
	const [h, _] = A.useState(false);
	const f = Qn_1();
	const b = Qt_3(2, w.TS.LANGUAGE, false);
	A.useEffect(() => {
		if (a && !p.length && !h) {
			_(true);
			An.Fm.Get()
				.HintLoad()
				.then(() => {
					Ja.aI
						.Get()
						.LoadSkippedApps(t, o)
						.then((e) => {
							g(e);
							_(false);
						});
				});
		}
	}, [h, t, p.length, a, o]);
	const y = A.useMemo(
		() =>
			p?.reduce((e, t) => (An.Fm.Get().BIsGameWishlisted(t) ? e + 1 : e), 0) ||
			0,
		[p],
	);
	const B = A.useMemo(
		() =>
			p?.reduce((e, t) => (An.Fm.Get().BIsGameIgnored(t) ? e + 1 : e), 0) || 0,
		[p],
	);
	const [v, I] = A.useState(false);
	const E = IH(t, o);
	const M = m_2("DiscoveryQueueSummary");
	const T = async () => {
		if (i) {
			if (!v) {
				I(true);
				await s();
				if (!M?.token?.reason) {
					I(false);
				}
			}
		} else {
			u();
		}
	};
	return A.createElement(
		Ao,
		{
			selected: a,
			fnFocused: m,
			fnOnContinue: T,
			fnCloseModal: r,
		},
		A.createElement(
			"div",
			{
				className: As.SummaryContentCtn,
			},
			A.createElement(
				"div",
				{
					className: As.SummaryTitle,
				},
				Localize("#DiscoveryQueue_SummaryTitle"),
			),
			!E &&
				a &&
				b.data?.definition &&
				A.createElement(go, {
					bSkipAppRequestPending: d,
					summaryCardIdx: n,
				}),
			A.createElement(
				"div",
				{
					className: As.YourStats,
				},
				Localize("#DiscoveryQueue_YourStats"),
			),
			A.createElement(
				C.Z,
				{
					"flow-children": "row",
					className: As.SummaryGrid,
				},
				A.createElement(
					"div",
					{
						className: As.GridItem,
					},
					A.createElement(
						"div",
						{
							className: As.GridTitle,
						},
						Localize("#DiscoveryQueue_ViewedCaps"),
					),
					A.createElement(
						"div",
						{
							className: As.GridNumber,
						},
						c.toLocaleString(),
					),
					A.createElement(
						"div",
						{
							className: As.GridSubTitle,
						},
						Localize("#DiscoveryQueue_Titles"),
					),
				),
				A.createElement(
					"div",
					{
						className: As.GridItem,
					},
					A.createElement(
						"div",
						{
							className: As.GridTitle,
						},
						Localize("#DiscoveryQueue_WishlistedCaps"),
					),
					A.createElement(
						"div",
						{
							className: As.GridNumber,
						},
						y.toLocaleString(),
					),
					A.createElement(
						ja.Fh,
						{
							className: A_1(As.GridSubTitle, As.TextLink),
							href: `${w.TS.STORE_BASE_URL}wishlist`,
						},
						Localize("#DiscoveryQueue_ViewWishlist"),
					),
				),
				A.createElement(
					"div",
					{
						className: As.GridItem,
					},
					A.createElement(
						"div",
						{
							className: As.GridTitle,
						},
						Localize("#DiscoveryQueue_IgnoredCaps"),
					),
					A.createElement(
						"div",
						{
							className: As.GridNumber,
						},
						B.toLocaleString(),
					),
					A.createElement(
						ja.Fh,
						{
							className: A_1(As.GridSubTitle, As.TextLink),
							href: `${w.TS.STORE_BASE_URL}account/notinterested`,
						},
						Localize("#DiscoveryQueue_ViewIgnored"),
					),
				),
			),
			!f &&
				A.createElement(
					C.Z,
					{
						className: As.SummaryActionButtonsCtn,
					},
					A.createElement(
						C.Z,
						{
							className: A_1(As.QueueButton, As.Wide),
							onClick: r,
						},
						Localize("#ActionButtonLabelDone"),
					),
					!E &&
						A.createElement(
							C.Z,
							{
								className: A_1(
									v && As.Disabled,
									As.QueueButton,
									As.Primary,
									As.Wide,
								),
								onClick: T,
							},
							v ? Localize("#Loading") : Localize("#Button_Continue"),
						),
				),
		),
		Boolean(!E) && A.createElement(A.Fragment, null, Boolean(l) && l(n + 1)),
	);
}
function Ao(e) {
	const {
		children: t,
		selected: r,
		fnOnContinue: n,
		fnCloseModal: i,
		fnFocused: a,
	} = e;
	const s = aL(`${w.TS.STORE_BASE_URL}wishlist`);
	const o = A.useRef();
	A.useEffect(() => {
		if (r && o.current) {
			o.current.focus({
				preventScroll: true,
			});
		}
	}, [r]);
	return A.createElement(
		mt.YZ,
		{
			ref: o,
			className: A_1(As.SummaryCtn, As.DiscoveryQueueApp, r && As.Selected),
			onOptionsActionDescription: Localize("#DiscoveryQueue_ViewWishlist"),
			onOptionsButton: () => {
				window.location.href = s;
			},
			onOKActionDescription: Localize("#Button_Continue"),
			onOKButton: () => {
				n();
			},
			onCancelActionDescription: Localize("#ActionButtonLabelDone"),
			onCancelButton: () => i && i(),
			fnScrollIntoViewHandler: () => {
				a();
				return true;
			},
		},
		t,
	);
}
function po() {
	return A.createElement(
		C.Z,
		{
			className: As.SaleRewardsCtn,
		},
		A.createElement(Jr.t, {
			size: "large",
			position: "center",
		}),
	);
}
function go(e) {
	const { bSkipAppRequestPending: t, summaryCardIdx: r } = e;
	if (t) {
		return A.createElement(po, null);
	} else {
		return A.createElement(ho, {
			summaryCardIdx: r,
		});
	}
}
function ho(e) {
	const { summaryCardIdx: t } = e;
	const r = os_2(2, w.TS.LANGUAGE, false, t.toString());
	const [n] = t7(r?.data?.current_def?.appid, {});
	if (!r?.data?.current_def || !n?.GetName().length) {
		return A.createElement(po, null);
	}
	const i = r.data.num_items_earned;
	const a = r.data.current_def.num_items_per_def;
	const s = a - i;
	const o = (i / a) * 100;
	return A.createElement(
		C.Z,
		{
			className: As.SaleRewardsCtn,
		},
		A.createElement($a.A, {
			nPercent: o,
			size: 70,
			strokeWidth: 12,
		}),
		A.createElement(
			C.Z,
			{
				className: As.RewardStatusCtn,
			},
			A.createElement(
				"div",
				{
					className: As.SaleRewardAppTitle,
				},
				Localize(
					`#DiscoveryQueue_SaleStatus_Title${s ? "" : "_Complete"}`,
					i.toLocaleString(),
					n.GetName(),
				),
			),
			s > 0 &&
				A.createElement(
					"div",
					{
						className: As.SaleRewardAppTitle,
					},
					Localize(
						"#DiscoveryQueue_SaleStatus_Desc",
						s.toLocaleString(),
						n.GetName(),
					),
				),
			A.createElement(
				"a",
				{
					href: `${w.TS.COMMUNITY_BASE_URL}my/itemcollection`,
				},
				Localize("#DiscoveryQueue_SaleStatus_Link"),
			),
		),
	);
}
const fo = _o;
function yo(e) {
	if (
		(() => {
			const [e, t] = useState(!Ai.iA.logged_in);
			const [r] = L2();
			const n = KV();
			useEffect(() => {
				if (!e) {
					Ja.aI.Init(n);
					t(true);
				}
			}, [e, n]);
			return e && !r;
		})()
	) {
		return A.createElement(
			So,
			null,
			A.createElement(wo, {
				...e,
			}),
		);
	} else {
		return null;
	}
}
function So(e) {
	const [t, r] = L2();
	let n = q3(() => r.ExcludedContentDescriptor);
	let i = A.useMemo(
		() => ({
			content_descriptors_excluded: n,
		}),
		[n],
	);
	if (t) {
		return null;
	} else {
		return A.createElement(
			Wa.E2,
			{
				defaultOptions: i,
			},
			e.children,
		);
	}
}
function wo(e) {
	const {
		eStoreDiscoveryQueueType: t,
		storePageFilter: r,
		strQueueDescriptionOverride: n,
		bPreferDemoStorePage: i,
	} = e;
	let [a, s] = useState([]);
	const [o, l] = useState(false);
	const [c, m] = useState(false);
	const u = Qn_1();
	const [d, p] = useState(!u);
	const g = A.useRef();
	const h = A.useRef(0);
	const _ = A.useRef(performance.now());
	const [f, b] = useState([]);
	const y = m_2("DiscoveryQueueWidget");
	const B = IH(t, r);
	const v = ((e) => {
		let { data: t } = PG(
			"DiscoveryQueueWidget",
			{
				sort: 11,
				start: 0,
				count: 12,
				filters: {
					type_filters: {
						include_games: true,
					},
				},
			},
			undefined,
			{
				reactQuery: {
					enabled: e,
					staleTime: Infinity,
				},
			},
		);
		if (t) {
			return t.GetItemIDs().map((e) => e.appid);
		} else {
			return undefined;
		}
	})(!w.iA.logged_in);
	A.useEffect(() => {
		if (!c) {
			(async () => {
				let e = false;
				if (w.iA.logged_in) {
					const { appids: n, exhausted: i } = await Ja.aI
						.Get()
						.GetDiscoveryQueueAppsOfType(t, true, r);
					if (!y?.token?.reason) {
						s([...n]);
					}
					e = i;
				} else {
					s(v);
				}
				if (a?.length) {
					let e = oo;
					e.include_screenshots = true;
					await Mn.A.Get().QueueMultipleAppRequests(a, e);
					An.Fm.Get().HintLoad();
					const t = a.map((e) =>
						A.createElement(Bo, {
							key: `Capsule_${e}`,
							appID: e,
						}),
					);
					t.push(
						A.createElement(Bo, {
							key: `Capsule2_${a[0]}`,
							appID: a[0],
						}),
					);
					if (!y?.token?.reason) {
						b(t);
						m(true);
					}
				}
				if (e && !y?.token?.reason) {
					m(true);
				}
			})();
		}
	}, [t, a, c, r, y?.token?.reason, v]);
	A.useEffect(() => {
		if (!c || !d || !d || o) {
			cancelAnimationFrame(h.current);
			return;
		}
		const e = () => {
			if (!g.current) {
				return;
			}
			const t =
				((performance.now() - _.current) / 40) % (g.current.offsetWidth - 320);
			g.current.style.transform = `translateX( -${t}px )`;
			h.current = requestAnimationFrame(e);
		};
		h.current = requestAnimationFrame(e);
		return () => cancelAnimationFrame(h.current);
	}, [g, c, d, o, h]);
	const I = A.useCallback(
		(e) => {
			if (!u) {
				p(e);
			}
		},
		[u],
	);
	if (c && (!f || f.length === 0)) {
		return null;
	}
	const E = () => {
		if (w.iA.logged_in) {
			if (!B) {
				l(true);
			}
		} else {
			window.location.href = `${
				w.TS.STORE_BASE_URL
			}login?redir=${encodeURIComponent(document.location.href)}`;
		}
	};
	const M = n ?? Localize("#DiscoveryQueue_WidgetHeader");
	return A.createElement(
		Co.J,
		{
			trigger: "repeated",
			onVisibilityChange: I,
		},
		A.createElement(vo, null),
		A.createElement(
			C.Z,
			{
				focusable: true,
				onGamepadFocus: () => p(true),
				onMouseEnter: () => u && p(true),
				onGamepadBlur: () => p(false),
				onMouseLeave: () => u && p(false),
				onOKButton: E,
				onOKActionDescription: Localize("#DiscoveryQueue_OpenWizard"),
				onClick: E,
				className: A_1(fo.DiscoveryQueueWidgetCtn, c && fo.Initialized),
			},
			!B &&
				A.createElement(
					A.Fragment,
					null,
					A.createElement(
						"div",
						{
							className: A_1(fo.WidgetHeaderCtn, "WidgetHeaderCtn"),
						},
						A.createElement(
							"div",
							{
								className: fo.WidgetHeaderText,
							},
							Localize("#DiscoveryQueue_WidgetHeader_Yours"),
						),
						A.createElement(
							"div",
							{
								className: fo.WidgetHeaderSubText,
							},
							w.iA.logged_in
								? M
								: Localize("#DiscoveryQueue_WidgetHeader_LoggedOut"),
						),
						!w.iA.logged_in &&
							A.createElement(
								"div",
								{
									className: fo.LoginButton,
								},
								Localize("#DiscoveryQueue_Error_Login_Title"),
							),
					),
					A.createElement(
						"div",
						{
							className: fo.AppCarouselPosition,
						},
						!c &&
							A.createElement(st.Spinner, {
								className: fo.Spinner,
							}),
						c &&
							A.createElement(
								"div",
								{
									ref: g,
									className: A_1(fo.AppCarouselCtn, "vt-scrollable"),
								},
								f,
							),
					),
				),
			c &&
				o &&
				A.createElement(co, {
					...e,
					bWizardVisible: o,
					fnCloseModal: (e) => {
						l(false);
						e?.stopPropagation();
					},
					eStoreDiscoveryQueueType: t,
					bPreferDemoStorePage: i,
				}),
		),
	);
}
function Bo(e) {
	const { appID: t } = e;
	const [r] = t7(t, oo);
	if (!r) {
		return null;
	}
	let n = r.GetAssets().GetMainCapsuleURL();
	if (r.GetOnlyAllAgesSafeScreenshots()?.length) {
		n = r.GetOnlyAllAgesSafeScreenshots()[0];
	}
	return A.createElement(
		"div",
		{
			className: fo.AppCapsuleCtn,
			style: {
				backgroundImage: `radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgba(0, 0, 0, 1) 92.5%), url('${n}')`,
			},
		},
		A.createElement(
			"div",
			{
				className: A_1(fo.CapsuleColumn, fo.LibraryImage),
			},
			A.createElement("img", {
				src: r.GetAssets().GetLibraryCapsuleURL(),
			}),
		),
		A.createElement(
			"div",
			{
				className: fo.CapsuleColumn,
			},
			A.createElement(
				"div",
				{
					className: fo.AppName,
				},
				r.GetName(),
			),
		),
	);
}
function vo() {
	const e = Qt_3(2, w.TS.LANGUAGE, true);
	if (!e.data?.definition || !e.data?.reward_items.length) {
		return null;
	}
	const t = e?.data.reward_items;
	ShuffleArray(t);
	const r = t.slice(0, 3);
	let n = null;
	if (w.iA.logged_in) {
		n = A.createElement(
			A.Fragment,
			null,
			" - ",
			A.createElement(
				"a",
				{
					href: `${w.TS.COMMUNITY_BASE_URL}my/itemcollection`,
				},
				Localize("#DiscoveryQueue_SaleStatus_Link"),
			),
		);
	}
	return A.createElement(
		"div",
		{
			className: fo.SaleTopSection,
		},
		A.createElement(Io, {
			rgRewardItems: r,
		}),
		A.createElement(
			"div",
			{
				className: fo.SaleTextCtn,
			},
			A.createElement(
				"div",
				{
					className: fo.BoldText,
				},
				Localize("#DiscoveryQueue_Widget_SaleDesc"),
			),
			A.createElement(
				"div",
				null,
				Localize(
					"#DiscoveryQueue_Widget_SaleTitle",
					LocalizeRtime32ToShorterDate(
						e.data.definition.rtime_end_time,
						false,
						false,
						false,
						false,
					),
				),
				n,
			),
		),
	);
}
function Io(e) {
	const { rgRewardItems: t } = e;
	const r = t.map((e) => {
		const t = `${w.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${e.appid}/${e.community_definition.item_image_small}`;
		return A.createElement(
			"div",
			{
				key: e.community_definition.item_name.toString(),
				className: fo.SaleSticker,
			},
			A.createElement("img", {
				src: t,
			}),
		);
	});
	return A.createElement(
		"div",
		{
			className: fo.StickerArrangement,
		},
		r,
	);
}
function Mo(e, t) {
	let r = q3(() =>
		t.filter((t) => {
			const r = $e.tw.GetAppOverviewByAppID(t);
			const n = r && r.BIsOwned();
			return !e.includes(t) && !n;
		}),
	);
	r = r.slice(0, 12);
	return r;
}
const To = () => {
	const e = ((e, t, r, n) => {
		const [i, a] = useState(true);
		const [s, o] = useState([]);
		useEffect(() => {
			a(true);
			ga.Get()
				.GetTagRecommendorForThisSale(null, e, false, {
					type: t,
					category: r,
					tagid: n,
				})
				.then((e) => {
					const t = e.map((e) => ({
						id: e,
						type: "game",
					}));
					H2(t, Ua.Xh).then(() => {
						AX(t, false).then((e) => {
							o(e);
							a(false);
						});
					});
				});
		}, [e, n, r, t]);
		return {
			bLoading: i,
			rgTagRecommendations: s,
		};
	})(12, "greatondeck").rgTagRecommendations.map((e) => e.id);
	const t = Mo(e, La("contenthub_topsellers", 50, 0));
	const r = La("contenthub_newandtrending", 50, 0);
	const n = Mo([...e, ...t], r);
	return A.createElement(
		A.Fragment,
		null,
		A.createElement(oi, null),
		A.createElement(ci, {
			rgAppIDs: e,
			strTitle: LocalizeInlineReactWithFallback(
				"#Recommended_NewReleases_Title",
				A.createElement("span", {
					className: In.SubHeader,
				}),
			),
			id: "gamepadnewreleases",
		}),
		A.createElement(ci, {
			rgAppIDs: t,
			strTitle: Localize("#Recommended_TopSellers_Title"),
			id: "gamepadtopsellers",
		}),
		A.createElement(ci, {
			rgAppIDs: n,
			strTitle: Localize("#Recommended_NewAndTrending_Title"),
			id: "gamepadnewandtrending",
		}),
	);
};
const Ro = () => {
	const [e] = VI("show_store_content_on_home");
	const t = QR();
	const r = Id();
	const n = q3(() => e && !t && r);
	return A.createElement(
		ps.un,
		{
			loadPersonaState: Sr.O$.LoadPersonaState,
		},
		A.createElement(
			"div",
			{
				className: Qi.Recommended,
			},
			A.createElement(
				b.tH,
				null,
				n &&
					A.createElement(
						"div",
						{
							className: Qi.DiscoveryQueueWidgetCtn,
						},
						A.createElement(yo, {
							eStoreDiscoveryQueueType: 0,
						}),
					),
			),
			A.createElement(b.tH, null, A.createElement(ko, null)),
			A.createElement(b.tH, null, n && A.createElement(To, null)),
		),
	);
};
const ko = () => {
	const e = K_2();
	const t = q3(() =>
		e.sort((t, r) => {
			const n = $e.tw.GetAppOverviewByAppID(t);
			return (
				$e.tw.GetAppOverviewByAppID(r).steam_deck_compat_category -
					n.steam_deck_compat_category || e.indexOf(t) - e.indexOf(r)
			);
		}),
	);
	return A.createElement(
		"div",
		{
			className: Qi.PlayNextCarousel,
		},
		A.createElement(
			"div",
			{
				className: Qi.PlayNextCarouselTitle,
			},
			Localize("#GamepadHome_PlayNext"),
		),
		A.createElement(
			"div",
			{
				className: Qi.PlayNextCarouselSubHeading,
			},
			Localize("#LibraryHome_PlayNextSubHead"),
		),
		A.createElement(
			he.Lv,
			null,
			A.createElement(Gr, {
				name: Localize("#LibraryHome_PlayNext"),
				games: t,
				showFeaturedItem: false,
			}),
		),
	);
};
const Fo = No;
const Go = (e) => {
	const { className: t, ...r } = e;
	return A.createElement(
		"div",
		{
			className: A_1(t, Fo.FriendActivityFeed),
			...r,
		},
		A.createElement(ne.W, {
			appid: 0,
			showTextBox: false,
		}),
	);
};
const zo = Lo;
const xo = (e) => {
	const { friend: t, width: r, height: n } = e;
	const i = {
		width: r,
		height: n,
	};
	const a = $2();
	const s = A.useCallback(() => {
		Oo.LN.ShowFriendChatDialog(a, t.persona.m_steamid);
	}, [a, t.persona.m_steamid]);
	return A.createElement(
		C.Z,
		{
			className: zo.FavoriteFriend,
			style: i,
			focusable: true,
			onActivate: s,
		},
		A.createElement(se.a0, {
			key: t.persona.GetAccountID(),
			friend: t,
			bAlwaysShowGameName: true,
		}),
	);
};
const Uo = (e) => {
	const { width: t, height: r } = e;
	const n = {
		width: t,
		height: r,
	};
	const i = br_2();
	return A.createElement(
		C.Z,
		{
			className: zo.GoToFriends,
			style: n,
			focusable: true,
			onActivate: () => i.Chat(),
		},
		Localize("#Friends_GoToFriends"),
	);
};
const Wo = () => {
	const e = Lb();
	const t = Number.parseInt(zo.FavoriteCarouselItemWidth);
	const r = Number.parseInt(zo.FavoriteCarouselItemHeight);
	const n = Number.parseInt(zo.FavoriteCarouselItemMargin);
	const i = A.useCallback((e) => t, [t]);
	if (e.length == 0) {
		return null;
	} else {
		return A.createElement(
			"div",
			{
				className: zo.FavoriteCarouselWrapper,
			},
			A.createElement(
				"div",
				{
					className: zo.FriendsHeader,
				},
				Localize("#Friends_Favorites"),
			),
			A.createElement(
				he.Lv,
				null,
				A.createElement(br.X, {
					name: "FavoriteFriends",
					className: zo.FavoritesCarousel,
					nNumItems: e.length + 1,
					nHeight: r,
					nItemHeight: r,
					nItemMarginX: n,
					fnGetColumnWidth: i,
					fnGetId: (t) =>
						t == e.length
							? "GoToFriends"
							: e[t].persona.GetAccountID().toString(),
					fnItemRenderer: (t, r, n, i) => {
						if (t == e.length) {
							return A.createElement(Uo, {
								width: r,
								height: n,
							});
						}
						const a = e[t];
						return A.createElement(xo, {
							key: a.persona.GetAccountID().toString(),
							friend: a,
							width: r,
							height: n,
						});
					},
					scrollToAlignment: "center",
				}),
			),
		);
	}
};
const Vo = (e) =>
	A.createElement(
		"div",
		{
			className: zo.Friends,
		},
		A.createElement(dn.S, {
			keyExtractor: (e) => e.persona.GetAccountID().toString(),
			itemRenderer: (e) =>
				A.createElement(
					"div",
					{
						className: zo.Avatar,
					},
					A.createElement(un.fH, {
						size: "X-Small",
						friend: e,
					}),
				),
			remainderRenderer: (e) =>
				A.createElement(
					"div",
					{
						className: A_1(zo.Avatar, zo.Remainder),
					},
					A.createElement(
						"div",
						{
							className: zo.RemainderInner,
						},
						A.createElement(
							"div",
							{
								className: zo.RemainderText,
							},
							"+",
							e,
						),
					),
				),
			items: e.friends,
		}),
	);
const Ho = (e) => {
	const { appid: t, friends: r, width: i, height: a, gamename: s } = e;
	const o = t && $e.tw.GetAppOverviewByAppID(t);
	const l = {
		width: i,
		height: a,
	};
	const c = o && o.visible_in_game_list;
	const m = br_2();
	const u = Qt_1(Be.B7.BuildStoreAppURL(t, "gamepadhomefriends"));
	const d = A_3(t, s);
	const p = d.name;
	return A.createElement(
		C.Z,
		{
			className: zo.InGameGame,
			style: l,
			focusable: true,
			onActivate: c ? () => m.App(t) : u,
		},
		A.createElement(
			"div",
			{
				className: zo.CoverImageWrapper,
			},
			A.createElement(wr.z, {
				className: zo.CoverImage,
				...d,
			}),
		),
		A.createElement(
			"div",
			{
				className: zo.RightSide,
			},
			A.createElement(
				"div",
				{
					className: zo.Title,
				},
				p,
			),
			A.createElement(
				"div",
				{
					className: zo.FriendsPlaying,
				},
				LocalizePlural("#AppPortraitHover_FriendsPlaying", r.length),
			),
			r.length > 1 &&
				A.createElement(Vo, {
					friends: r,
				}),
			r.length == 1 &&
				A.createElement(se.a0, {
					className: zo.GamepageHomeFriendsPlaying,
					key: r[0].persona.GetAccountID(),
					friend: r[0],
					renderStatus: () => null,
				}),
			c &&
				A.createElement(
					"div",
					{
						className: zo.InLibrary,
					},
					Localize("#GameCapsule_InLibrary"),
				),
		),
	);
};
const jo = PA(() => {
	const e = Number.parseInt(zo.InGameCarouselItemWidth);
	const t = Number.parseInt(zo.InGameCarouselItemHeight);
	const r = Number.parseInt(zo.InGameCarouselItemMargin);
	const n = bg().FriendGroupStore;
	const i = n.games_with_friends_playing;
	const a = Uu_2();
	const { rgInGame: s, rgOnline: o } = oH();
	A.useEffect(() => {
		Po.Vw.EnsureAppInfoForAppIDs(i);
	}, [i]);
	const l = i
		.filter((e) => Po.Vw.GetAppInfo(e)?.is_valid)
		.sort((e, t) => {
			if (n.GetCountFriendsInGame(e) != n.GetCountFriendsInGame(t)) {
				return n.GetCountFriendsInGame(t) - n.GetCountFriendsInGame(e);
			}
			const r = $e.tw.GetAppOverviewByAppID(e);
			const i = $e.tw.GetAppOverviewByAppID(t);
			const a = r?.minutes_playtime_forever || 0;
			return (i?.minutes_playtime_forever || 0) - a || e - t;
		});
	const c = A.useCallback((t) => e, [e]);
	const m = l.length + a.length;
	if (m == 0) {
		return null;
	} else {
		return A.createElement(
			"div",
			{
				className: zo.InGameCarouselWrapper,
			},
			A.createElement(
				"div",
				{
					className: zo.FriendsHeader,
				},
				LocalizePlural("#Friends_PlayingNow", s.length),
			),
			A.createElement(
				he.Lv,
				null,
				A.createElement(br.X, {
					name: "FriendsPlayingNow",
					className: zo.InGameCarousel,
					nNumItems: m,
					nHeight: t,
					nItemHeight: t,
					nItemMarginX: r,
					fnGetColumnWidth: c,
					fnGetId: (e) =>
						e < l.length
							? l[e].toString()
							: a[e - l.length].persona.GetAccountID().toString(),
					fnItemRenderer: (e, t, r, n) => {
						if (e < l.length) {
							const n = l[e];
							const i = Sr.O$.GetFriendsInGame(n);
							return A.createElement(Ho, {
								key: n,
								appid: n,
								friends: i,
								width: t,
								height: r,
							});
						}
						{
							e -= l.length;
							const n = a[e];
							const i = n.persona.GetCurrentGameName();
							return A.createElement(Ho, {
								key: n.persona.GetAccountID(),
								gamename: i,
								friends: [n],
								width: t,
								height: r,
							});
						}
					},
					scrollToAlignment: "center",
				}),
			),
		);
	}
});
const qo = (e) => {
	const { className: t, ...r } = e;
	return A.createElement(
		"div",
		{
			className: A_1(t, zo.LibraryHomeFriends),
			...r,
		},
		A.createElement(Wo, null),
		A.createElement(jo, null),
		A.createElement(Go, null),
	);
};
const Xo = Ko;
const Jo = A.createContext(null);
const $o = A.memo(() => {
	const [e, t] = SP("HomeTabsActive", false);
	const [r, n] = SP("HomeActiveTab", null);
	const i = A.useRef(undefined);
	const a = A.useRef(undefined);
	const s = A.useRef(true);
	const o = A.useCallback(
		(e) => {
			if (e) {
				t(false);
				i.current?.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			}
		},
		[t, i],
	);
	let l = A.useCallback(
		(e) => {
			if (e) {
				t(e);
			}
		},
		[t],
	);
	const c = A.useCallback(
		(e) => {
			n(e);
			L_2(`/GamepadHome/${e}`);
		},
		[n],
	);
	const m = A.useCallback(
		(t) => {
			const r = s.current;
			s.current = false;
			let n = i.current;
			let o = a.current;
			if (!e || !n || !n || !o) {
				return;
			}
			const l = (e) => {
				let t =
					o.getBoundingClientRect().top +
					n.scrollTop -
					parseInt(Xo.headerPadding);
				n.scrollTo({
					top: t,
					behavior: e,
				});
			};
			if (r) {
				window.setTimeout(() => l("auto"), 1);
			} else {
				l(t || "smooth");
			}
		},
		[e],
	);
	A.useEffect(() => m(), [m]);
	Tc_3(i, 250);
	return A.createElement(
		Jo.Provider,
		{
			value: {
				fnScrollTabsToTop: m,
			},
		},
		A.createElement(
			We.Jr,
			{
				headerVisibility: "default",
				padForHeader: false,
				padForFooter: false,
				minimumOpacity: 0,
				scrollable: false,
				flexed: true,
			},
			A.createElement(
				C.Z,
				{
					className: Xo.BackstackRootTest,
					scrollIntoViewType: Va.Yo.NoTransform,
				},
				A.createElement(
					Zo.MS,
					{
						ref: i,
						className: Xo.ScrollArea,
						scrollPaddingTop: 0,
					},
					A.createElement(
						C.Z,
						{
							className: Xo.RecentSection,
							onFocusWithin: o,
							autoFocus: true,
							focusableIfNoChildren: true,
						},
						A.createElement(
							b.tH,
							null,
							A.createElement(Zr, {
								autoFocus: true,
								showBackground: true,
							}),
						),
					),
					A.createElement(
						"div",
						{
							ref: a,
							className: A_1(Xo.TabbedContent),
						},
						A.createElement(el, {
							onFocusWithin: l,
							strActiveTab: r,
							setActiveTab: c,
						}),
					),
					A.createElement(Qo.JD, null),
				),
			),
		),
	);
});
const el = A.memo((e) => {
	const { onFocusWithin: t, setActiveTab: r, strActiveTab: n } = e;
	const i = (() => {
		const e = Xo.contentBottomPadding;
		return A.useMemo(() => {
			let t = [];
			t.push({
				id: "WhatsNew",
				title: "#HomeTab_WhatsNew",
				content: A.createElement(Pi, null),
				scrollStyle: {
					scrollPaddingBottom: e,
					paddingBottom: e,
				},
			});
			t.push({
				id: "Friends",
				title: "#HomeTab_Friends",
				content: A.createElement(qo, null),
				renderTabAddon: ({ active: e }) =>
					A.createElement(se.n8, {
						tabSelected: e,
						bFriendsTabOverride: true,
					}),
				feature: 4,
				scrollStyle: {
					scrollPaddingBottom: e,
					paddingBottom: e,
				},
			});
			t.push({
				id: "Recommended",
				title: "#HomeTab_Recommended",
				content: A.createElement(Ro, null),
				scrollStyle: {
					scrollPaddingBottom: e,
					paddingBottom: e,
				},
			});
			return t;
		}, [e]);
	})();
	return A.createElement(he.xC, {
		canBeHeaderBackground: "on-outer-scroll",
		tabs: i,
		activeTab: n,
		onShowTab: r,
		onFocusWithin: t,
		autoFocusContents: false,
	});
});
const rl = tl;
const ol = sl;
class ll {
	constructor() {
		Gn_2(this);
	}
	m_installedApps = [];
	m_rgInstalling = [];
	async ListFlatpakApps() {
		SteamClient.Apps.ListFlatpakApps().then((e) => (this.m_installedApps = e));
		return this.m_installedApps;
	}
	get InstalledApps() {
		return this.m_installedApps;
	}
	IsInstalling(e) {
		return this.m_rgInstalling.includes(e);
	}
	async BDoesInstalledAppHaveShortcut(e) {
		let t = Ce.md.GetCollection(Ce.A8.LocalGames).visibleApps;
		for (const r of t) {
			if (r.app_type == 1073741824) {
				if (
					(await ee.H.RequestAppDetails(r.appid)).strLaunchOptions.includes(
						e.applicationid,
					)
				) {
					return true;
				}
			}
		}
		return false;
	}
	async GetInstallAppsWithShortcuts() {
		let e = await this.ListFlatpakApps();
		let t = [];
		let r = Ce.md.GetCollection(Ce.A8.LocalGames).visibleApps;
		let n = [];
		for (const e of r) {
			if (e.app_type == 1073741824) {
				n.push(e);
			}
		}
		for (let r of e) {
			let e = false;
			for (const t of n) {
				if (
					(await ee.H.RequestAppDetails(t.appid)).strFlatpakAppID ==
					r.applicationid
				) {
					e = true;
					break;
				}
			}
			if (!e) {
				t.push(r);
			}
		}
		return {
			installedApps: e,
			missingShortcuts: t,
		};
	}
	async InstallApp(e, t) {
		this.m_rgInstalling.push(e);
		if (!CI()) {
			await new Promise((e) => setTimeout(e, 10000));
			FindAndRemove(this.m_rgInstalling, e);
			return {
				appid: 0,
				strInstallOutput: "",
			};
		}
		let r = await SteamClient.Apps.InstallFlatpakAppAndCreateShortcut(e, t);
		if (r.appid) {
			this.SetCustomArtworkForFlatpak(r.appid, e);
			await ee.H.RequestAppDetails(r.appid);
		}
		FindAndRemove(this.m_rgInstalling, e);
		return r;
	}
	async SetCustomArtwork(e, t, n) {
		let i = null;
		switch (t) {
			case 0: {
				i = "library_capsule";
				break;
			}
			case 1: {
				i = "library_hero";
				break;
			}
			case 3: {
				i = "store_capsule_main";
				break;
			}
			case 2: {
				i = "library_logo_transparent";
			}
		}
		let a = null;
		if (i) {
			a = ((e, t) => {
				if (Object.keys(cl).length == 0) {
					const e = require("./19807.js");
					cl = e.keys().reduce((t, r) => {
						t[r] = e(r);
						return t;
					}, {});
				}
				return cl[`./${e}/${t}`];
			})(n, `${i}.png`);
		}
		if (!a) {
			return;
		}
		let s = await fetch(a).then((e) => e.blob());
		let o = new FileReader();
		o.onload = () => {
			let r = o.result.toString();
			r = r.slice(r.indexOf("base64,") + 7);
			SteamClient.Apps.SetCustomArtworkForApp(e, r, "png", t);
		};
		o.readAsDataURL(s);
	}
	async SetCustomArtworkForFlatpak(e, t) {
		if (t === "com.google.Chrome") {
			const t = "google_chrome";
			let r = [];
			r.push(this.SetCustomArtwork(e, 0, t));
			r.push(this.SetCustomArtwork(e, 1, t));
			r.push(this.SetCustomArtwork(e, 3, t));
			r.push(this.SetCustomArtwork(e, 2, t));
			await Promise.all(r);
		}
	}
}
Cg([He.sH], ll.prototype, "m_installedApps", undefined);
Cg([He.sH], ll.prototype, "m_rgInstalling", undefined);
let cl = {};
const ml = new ll();
const ul = "deck_desktopapp_intro_seen";
const dl = "com.google.Chrome";
const Al =
	"--window-size=1024,640 --force-device-scale-factor=1.25 --device-scale-factor=1.25";
function pl(e) {
	const t = A.useRef(undefined);
	const [r, n] = A.useState(false);
	const [i, a] = (() => {
		const [e, t] = A.useState(undefined);
		const r = xM();
		A.useEffect(() => {
			(async () => {
				const e = new xr.A();
				return (await e.GetString(ul)) == "1";
			})().then((e) => {
				if (!r()) {
					t(e);
				}
			});
		}, [r]);
		const n = A.useCallback((e) => {
			t(e);
			(async (e) => {
				const t = new xr.A();
				await t.StoreString(ul, e ? "1" : "0");
			})(e);
		}, []);
		return [e, n];
	})();
	const s = q3(() => ml.IsInstalling(dl));
	const o = e.collection?.allApps.length > 0;
	const l = A.useCallback(() => {
		n(false);
		a(true);
	}, [a]);
	const c = A.useCallback(() => {
		if (w.TS.ON_DECK) {
			n(true);
		}
	}, []);
	A.useEffect(() => {
		if (!r && i === false) {
			c();
		}
	}, [i, r, c]);
	if (i === undefined) {
		return null;
	}
	const m = w.TS.ON_DECK && s && !r;
	const d = w.TS.ON_DECK && !o && !r && !m;
	return A.createElement(
		C.Z,
		{
			className: ol.DesktopApps,
			retainFocus: true,
			noFocusRing: true,
		},
		A.createElement(
			C.Z,
			{
				childFocusDisabled: r,
				className: A_1(r && ol.Blurred),
			},
			m && A.createElement(hl, null),
			d &&
				A.createElement(gl, {
					navRef: t,
					onActivate: c,
				}),
			o &&
				A.createElement(wl, {
					...e,
					ignoreFiltering: true,
				}),
		),
		r &&
			A.createElement(Cl, {
				installingChrome: s,
				onClose: l,
			}),
	);
}
function gl(e) {
	let { navRef: t, onActivate: r } = e;
	return A.createElement(
		C.Z,
		null,
		A.createElement(
			"div",
			{
				className: ol.HeaderBlock,
			},
			A.createElement(
				"span",
				{
					className: ol.HeaderBody,
				},
				Localize("#Library_DesktopApps_LearnMoreBody"),
			),
			A.createElement(
				C.Z,
				{
					navRef: t,
					className: ol.HeaderButton,
					onActivate: r,
					noFocusRing: true,
				},
				Localize("#Library_DesktopApps_LearnMore"),
			),
		),
	);
}
function hl(e) {
	return A.createElement(
		"div",
		{
			className: A_1(ol.HeaderBlock, ol.InstallingChromeHeader),
		},
		A.createElement(
			"span",
			{
				className: ol.HeaderBody,
			},
			A.createElement(st.Spinner, null),
			" ",
			Localize("#Library_DesktopApps_InstallingChrome"),
		),
	);
}
function Cl(e) {
	const { onClose: t } = e;
	const r = A.useCallback(async () => {
		await ml.InstallApp(dl, Al);
		t();
	}, [t]);
	return A.createElement(
		C.Z,
		{
			className: ol.DialogContainer,
			navEntryPreferPosition: Va.iU.PREFERRED_CHILD,
			onCancel: t,
			autoFocus: true,
			retainFocus: true,
			noFocusRing: true,
		},
		A.createElement(
			"div",
			{
				className: A_1(ol.Content, e.installingChrome && ol.Installing),
			},
			e.installingChrome &&
				A.createElement(
					A.Fragment,
					null,
					A.createElement(
						"div",
						{
							className: ol.Header,
						},
						Localize("#Library_DesktopApps_InstallingChrome"),
					),
					A.createElement(Jr.t, {
						className: ol.Throbber,
					}),
					A.createElement(
						f.$n,
						{
							className: ol.CloseButton,
							onClick: e.onClose,
						},
						Localize("#Generic_Close"),
					),
				),
			!e.installingChrome &&
				A.createElement(
					A.Fragment,
					null,
					A.createElement(
						"div",
						{
							className: ol.Header,
						},
						Localize("#Library_DesktopApps_DialogHeader"),
					),
					A.createElement(
						"div",
						{
							className: ol.Body,
						},
						Localize("#Library_DesktopApps_DialogBody1"),
					),
					A.createElement(
						"div",
						{
							className: ol.Body,
						},
						Localize("#Library_DesktopApps_DialogBody2"),
					),
					A.createElement(
						f.dR,
						{
							className: ol.ButtonRow,
						},
						A.createElement(
							f.$n,
							{
								onClick: e.onClose,
							},
							Localize("#Library_DesktopApps_NotNow"),
						),
						A.createElement(
							f.jn,
							{
								preferredFocus: true,
								onClick: r,
							},
							Localize("#Library_DesktopApps_AddChrome"),
						),
					),
				),
		),
	);
}
function fl() {
	return [Ce.A8.Favorites, Ce.A8.LocalGames, Ce.A8.AppType_Soundtracks];
}
function bl() {
	let e = W5(n.BV.Library.Collection());
	let t = W5(n.BV.Library.AllCollections());
	const { strActiveTab: r, onShowTab: i } = ch(n.BV.GamepadUI.Library.Tab);
	const a = Ll_2(vl);
	const [s, l] = A.useState(false);
	Z3(() => l(true), 450);
	Xf(s ? "show-expanded" : "show-icon", "GamepadLibrary");
	let { strActiveTab: c, collectionid: m } = o.oy.GetLastLibraryTab() || {
		strActiveTab: "GreatOnDeck",
	};
	if (r) {
		c = r;
		m = a;
	} else if (e && a) {
		c = "Collections";
		m = a;
	} else if (t) {
		c = "Collections";
		m = undefined;
	}
	return A.createElement(Sl, {
		tab: c,
		collectionid: m,
		onShowTab: i,
	});
}
const yl = A.createContext((e) => {});
const Sl = A.memo((e) => {
	const { tab: t, collectionid: r, onShowTab: n } = e;
	let i = t;
	const [a, s] = A.useState();
	const l = A.useCallback(() => s(undefined), []);
	const {
		rgTabs: c,
		eSortBy: m,
		showSortingContextMenu: d,
	} = ((e, t) => {
		const { eSortBy: r, setSortBy: n, showSortingContextMenu: i } = xZ();
		let a = al.n6.collectionsAppFilterGamepad;
		const [s, o] = RS();
		const l = _Y();
		const c = FJ();
		const {
			allApps: m,
			installedApps: d,
			favoriteApps: p,
			steamDeckVerifiedApps: g,
			dtst1VerifiedApps: h,
			desktopApps: C,
			remotePlayApps: _,
			soundtrackApps: f,
			vrApps: b,
			xboxControllerApps: y,
			ps4ControllerApps: S,
			ps5ControllerApps: B,
		} = q3(() => ({
			allApps: Ce.md.GetCollection(Ce.A8.AllGames),
			installedApps: Ce.md.GetCollection(Ce.A8.LocalGames),
			favoriteApps: Ce.md.GetCollection(Ce.A8.Favorites),
			steamDeckVerifiedApps: Ce.md.GetCollection(Ce.A8.DeckGames),
			dtst1VerifiedApps: Ce.md.GetCollection(Ce.A8.DTst1Games),
			desktopApps: Ce.md.GetCollection(Ce.A8.DeckDesktopApps),
			remotePlayApps: Ce.md.GetCollection(Ce.A8.RemotePlayActive),
			soundtrackApps: Ce.md.GetCollection(Ce.A8.AppType_Soundtracks),
			vrApps: Ce.md.GetCollection(Ce.A8.VR),
			xboxControllerApps: Ce.md.GetCollection(Ce.A8.Xbox),
			ps4ControllerApps: Ce.md.GetCollection(Ce.A8.PS4),
			ps5ControllerApps: Ce.md.GetCollection(Ce.A8.PS5),
		}));
		return {
			rgTabs: A.useMemo(() => {
				const u = {
					eSortBy: r,
					setSortBy: n,
					showSortingContextMenu: i,
				};
				const h = (e, r, n) =>
					r
						? {
								id: e,
								title: n,
								renderTabAddon: () =>
									A.createElement(he.h7, {
										count: r.GetAppCountWithToolsFilter(a),
									}),
								content: A.createElement(wl, {
									collection: r,
									...u,
								}),
								footer: {
									onOptionsButton: (e) => {
										i(e);
									},
									onOptionsActionDescription: Localize(
										"#Library_SortCollectionBy",
									),
									onSecondaryButton: (e) => {
										t(r.id);
									},
									onSecondaryActionDescription: A.createElement(nl.dq, null),
								},
							}
						: null;
				let v = [
					h("AllGames", m, "#LibraryTab_AllGames"),
					h("Installed", d, "#LibraryTab_Installed"),
				];
				if (w.TS.ON_DECK) {
					let e;
					e = h("GreatOnDeck", g, "#LibraryTab_DeckGames");
					if (e) {
						v.unshift(e);
						v[0].footer.onSecondaryActionDescription = A.createElement(nl.dq, {
							overrideCompatFilter: 12,
						});
					}
				} else if (l) {
					if (s) {
						v.unshift(h("PS4", S, "#LibraryTab_PS4ControllerGames"));
					}
					if (o) {
						v.unshift(h("PS5", B, "#LibraryTab_PS5ControllerGames"));
					}
					if (!s && !o) {
						v.unshift(h("Xbox", y, "#LibraryTab_XboxControllerGames"));
					}
				}
				if (c) {
					v.unshift(h("VR", b, "#LibraryTab_VR"));
				}
				const I = p.GetAppCountWithToolsFilter(a);
				const E = _.GetAppCountWithToolsFilter(a);
				const M = T4(fl());
				const T = f.GetAppCountWithToolsFilter(a);
				if (I > 0) {
					v.push(h("Favorites", p, "#LibraryTab_Favorites"));
				}
				if (E > 0) {
					v.push(h("RemotePlay", _, "#LibraryTab_RemotePlay"));
				}
				if (M > 0) {
					let r;
					r = e
						? {
								onOptionsButton: (e) => {
									i(e);
								},
								onOptionsActionDescription: Localize(
									"#Library_SortCollectionBy",
								),
								onSecondaryButton: (r) => {
									t(e);
								},
								onSecondaryActionDescription: A.createElement(nl.dq, null),
							}
						: {
								onSecondaryButton: (e) => {
									t("");
								},
								onSecondaryActionDescription: A.createElement(nl.dq, null),
							};
					v.push({
						id: "Collections",
						title: "#LibraryTab_Collections",
						renderTabAddon: () =>
							A.createElement(he.h7, {
								count: T4(fl()),
							}),
						content: A.createElement(Bl, {
							collectionid: e,
							...u,
						}),
						footer: r,
					});
				}
				v.push({
					id: "DesktopApps",
					title: "#LibraryTab_NonSteam",
					renderTabAddon: () =>
						A.createElement(he.h7, {
							count: C?.visibleApps.length ?? 0,
						}),
					content: A.createElement(pl, {
						collection: C,
						...u,
					}),
				});
				if (T > 0) {
					v.push(h("Soundtracks", f, "#LibraryTab_Soundtracks"));
				}
				return v.filter((e) => e);
			}, [r, n, i, m, d, p, a, _, f, C, t, g, h, b, e, c, s, o, y, S, B, l]),
			eSortBy: r,
			showSortingContextMenu: i,
		};
	})(r, s);
	A.useEffect(
		() => o.oy.SetLastLibraryTab(i, i == "Collections" ? r : undefined),
		[i, r],
	);
	if (c.length == 0) {
		return null;
	} else {
		if (c.findIndex((e) => e.id == i) == -1) {
			i = c[0].id;
		}
		return A.createElement(
			yl.Provider,
			{
				value: s,
			},
			A.createElement(
				C.Z,
				{
					className: rl.GamepadLibrary,
				},
				A.createElement(il.x, {
					collectionid: a,
					closeModal: l,
				}),
				A.createElement(he.xC, {
					canBeHeaderBackground: "always",
					tabs: c,
					activeTab: i,
					onShowTab: n,
					autoFocusContents: true,
					eSortBy: m,
					showSortingContextMenu: d,
					showFilterDialogForCollection: () => s(i),
				}),
			),
		);
	}
});
function wl(e) {
	let t = e.collection;
	let r = A.useContext(he.Q7);
	const n = A.useContext(yl);
	const i = [2, 1, 8192];
	const a = q3(() =>
		t.visibleApps.filter((e) => i.includes(e.canonicalAppType)),
	);
	const s = q3(() =>
		a.filter(
			(t) => e.ignoreFiltering || al.n6.collectionsAppFilterGamepad.Matches(t),
		),
	);
	const o = a.length - s.length;
	const l = s.length == 0;
	const c = {
		onSecondaryButton: (e) => {
			n(t.id);
		},
		onSecondaryActionDescription: A.createElement(nl.dq, null),
	};
	return A.createElement(
		"div",
		{
			className: rl.AppGridContents,
		},
		o > 0 &&
			A.createElement(
				C.Z,
				{
					focusable: l,
					onActivate: (e) => n(t.id),
					className: A_1(
						l && rl.AppGridFilterHeaderAsButton,
						rl.AppGridFilterHeader,
					),
					...c,
				},
				A.createElement(
					"span",
					{
						className: rl.AppGridFilterText,
					},
					LocalizeReact(
						o > 1
							? "#Library_FilteredByHeader"
							: "#Library_FilteredByHeader_Singular",
						o,
						A.createElement(at.$m, {
							button: nt.g4.X,
							type: at.wt.Knockout,
							size: at.xY.Small,
						}),
					),
				),
			),
		A.createElement(nl.lx, {
			appOverviews: s,
			strCollectionId: t.id,
			elScrollElement: r,
			hideFilterFooterButton: e.ignoreFiltering,
			eSortBy: e.eSortBy,
			setSortBy: e.setSortBy,
			showSortingContextMenu: e.showSortingContextMenu,
		}),
	);
}
function Bl(e) {
	const { collectionid: t } = e;
	return A.createElement(
		C.Z,
		{
			retainFocus: true,
		},
		t &&
			A.createElement(El, {
				...e,
			}),
		!t && A.createElement(Il, null),
	);
}
function vl(e) {
	const t = B6(e, n.BV.Library.Collection());
	return (
		t && t.params.collectionid && decodeURIComponent(t.params.collectionid)
	);
}
function Il(e) {
	let t = A.useContext(he.Q7);
	const [r] = VI("library_display_size");
	return A.createElement(
		C.Z,
		{
			className: rl.CollectionContents,
			retainFocus: true,
			focusableIfNoChildren: true,
		},
		A.createElement(fe.lc, {
			coverSize: r,
			scrollElement: t,
			autofocus: false,
			bHideCreateButton: true,
			filterCollections: fl(),
		}),
	);
}
function El(e) {
	const { collectionid: t, ...r } = e;
	let n = Ce.md.GetCollection(t);
	const i = br_2();
	if (n) {
		return A.createElement(
			C.Z,
			{
				onCancel: () =>
					i.AllCollections({
						bReplace: true,
					}),
			},
			A.createElement(
				"div",
				{
					className: rl.CollectionHeader,
				},
				n.displayName,
			),
			A.createElement(wl, {
				collection: n,
				...r,
			}),
		);
	} else {
		return null;
	}
}
const kl = Rl;
function Dl() {
	const e = k1();
	return A.createElement(
		We.Jr,
		null,
		A.createElement(
			C.Z,
			{
				className: kl.SetupHelp,
				onCancelButton: () => e.Login(),
				onOKActionDescription: null,
				autoFocus: true,
				focusable: true,
				noFocusRing: true,
			},
			A.createElement(
				"div",
				{
					className: kl.Content,
				},
				A.createElement(
					"div",
					{
						className: kl.Heading,
					},
					Localize("#OOBESupport_Title"),
				),
				A.createElement(
					"div",
					{
						className: kl.SubHeading,
					},
					Localize("#OOBESupport_Subtitle"),
				),
				A.createElement(
					"a",
					{
						href: "https://s.team/deck/setup",
					},
					"https://s.team/deck/setup",
				),
				A.createElement(
					"div",
					{
						className: kl.QRCode,
					},
					A.createElement(st.SteamDeckSetupQR, null),
				),
			),
		),
	);
}
const Pl = Ol;
const zl = PA(() => {
	const e = $2();
	const t = xf();
	const r = t === W.VE;
	const i = e.MenuStore.GetOpenSideMenu();
	const a = QM();
	const s = P4();
	const l = Qu_1();
	const c = o.oy.RunningApps.length != 0;
	const m = !!l;
	const d = e.GetShowingGlobalModal();
	const g = W5(n.BV.GamepadUI.AppRunning());
	const h = r(t);
	let C = oH_2();
	let _ = q3(() => o.oy.WindowStore.BHasOverlayWindowForApp(t));
	let f = l?.appid;
	let b =
		(_ && C.forcedAppID != t) || !Gl.Mf.AppsWithTouchMenusEnabled.includes(f);
	let y = Gl.Mf.ActiveTouchMenus.some((e) => e.MenuState.bActive);
	const S = e.IsMainGamepadUIWindow();
	const w = e.IsVRWindowInGamescope();
	const B = S || w;
	const v = A.useRef(0);
	const I = A.useRef(false);
	let [E, R] = A.useState(t);
	let [k, D] = A.useState(performance.now());
	let [N, F] = A.useState(false);
	let [G, O] = A.useState(false);
	let P = d || (t == W.VE && (N || i != Ll.Ez.None));
	if (i == Ll.Ez.Main) {
		P = true;
	}
	LC(!P);
	const L = yq();
	const z = K1();
	A.useEffect(() => {
		if (B && !c && g && !I.current) {
			I.current = true;
			L();
			z();
		}
	}, [B, c, g, z, L]);
	A.useEffect(() => {
		if (!_r.wr(t) && _r.wr(E)) {
			R(t);
			D(performance.now());
			F(false);
			O(true);
		}
		const e = () => {
			let t = performance.now();
			if (t - k >= 5000) {
				F(true);
			} else {
				v.current = window.setTimeout(e, 5000 - (t - k));
			}
		};
		v.current = window.setTimeout(e, 5000);
		return () => {
			clearTimeout(v.current);
			v.current = undefined;
		};
	}, [t, E, k]);
	if (B && !m) {
		return A.createElement(xl, {
			enableAbort: N,
			bDoneLoading: G,
		});
	}
	if (m && !b) {
		return A.createElement(Nl.EB, {
			appID: f,
			bVisible: y,
		});
	}
	let x = h.length > 0;
	if (
		!r ||
		s == T.I5.Hidden ||
		s == T.I5.Hidden ||
		s == T.I5.Overlay ||
		s == T.I5.Hidden ||
		s == T.I5.Overlay ||
		a ||
		s == T.I5.Hidden ||
		s == T.I5.Overlay ||
		a ||
		x ||
		s == T.I5.Hidden ||
		s == T.I5.Overlay ||
		a ||
		x ||
		C?.mode == Ve._5.Overlay
	) {
		return null;
	} else {
		return A.createElement(xl, {
			enableAbort: N,
			bDoneLoading: G,
		});
	}
});
function xl(e) {
	const t = Qu_1();
	let r = A.useCallback((e) => {
		if (
			e.detail.button != je.pR.STEAM_GUIDE &&
			e.detail.button != je.pR.STEAM_QUICK_MENU
		) {
			e.preventDefault();
			e.stopPropagation();
		}
	}, []);
	let n = A.useCallback(
		(e) => {
			if (e.detail.button == je.pR.CANCEL) {
				let e = t?.GetGameID();
				if (e) {
					SteamClient.Apps.TerminateApp(e, false);
				}
			}
			if (
				e.detail.button != je.pR.STEAM_GUIDE &&
				e.detail.button != je.pR.STEAM_QUICK_MENU
			) {
				e.preventDefault();
				e.stopPropagation();
			}
		},
		[t],
	);
	return A.createElement(
		C.Z,
		{
			className: Pl.MainPanelAppRunning,
			autoFocus: true,
			focusable: true,
			noFocusRing: true,
			onButtonDown: e.enableAbort ? n : r,
			onMenuActionDescription: null,
			onOptionsActionDescription: null,
			onOKActionDescription: null,
			onSecondaryActionDescription: null,
			onCancelActionDescription: e.enableAbort
				? Localize("#Button_AbortGame")
				: null,
		},
		A.createElement(Ml.j, {
			showFooter: true,
			doneLoading: e.bDoneLoading,
		}),
	);
}
const Hl = Vl;
function jl(e) {
	let t = zy();
	const r = {
		base: Hl.TopLevelTransition,
		enterStart: Hl.Enter,
		enterEnd: Hl.EnterActive,
		exitStart: Hl.Exit,
		exitEnd: Hl.ExitActive,
	};
	let [n, i] = ((e, t) => {
		let r = null;
		let n = null;
		A.Children.forEach(t, (t) => {
			if (n != null || !A.isValidElement(t)) {
				return;
			}
			r = t;
			let i = t.props.path;
			if (!i && "from" in t.props) {
				i = t.props.from;
			}
			if (i) {
				n = B6(e.pathname, {
					...t.props,
					path: i,
				});
			}
		});
		return [r, n];
	})(t, e.children);
	let a = i
		? A.cloneElement(n, {
				location: t,
				computedMatch: i,
			})
		: null;
	if (n.props.noTransitionZoom) {
		r.base = A_1(r.base, Hl.NoTransitionZoom);
	}
	return A.createElement(
		Ul.A,
		{
			className: Hl.TopLevelTransitionSwitch,
		},
		a &&
			A.createElement(
				Wl.rO,
				{
					key: i.path,
					navKey: i.path,
					childrenClasses: r,
					sizeClass: Hl.AbsoluteDiv,
				},
				a,
			),
	);
}
function ql(e) {
	return A.createElement("div", {
		...e,
		className: A_1(e.className, Hl.AbsoluteDiv, Hl.TopLevelTransition),
	});
}
const Zl = Ql;
function Xl(e) {
	switch (e.app_type) {
		case 1:
		case 2:
		case 8:
		case 4:
		case 8192:
		case 1073741824: {
			return true;
		}
		default: {
			return false;
		}
	}
}
function Jl(e) {
	let t = A.useRef("");
	let r = A.useRef({
		total: 0,
		items: [],
	});
	let n = A.useRef(undefined);
	let i = A.useRef({
		all: [],
		all_total: 0,
		library: [],
		friends: [],
		store: [],
		store_total: 0,
		tools: [],
	});
	let a = A.useRef(new Kl.zG());
	let s = gc_1(Yl.U.GetSearchText());
	const o = s.toLowerCase();
	const l = ((e, t) => {
		const [r, n] = A.useState({
			total: 0,
			items: [],
		});
		A.useEffect(() => {
			Yl.U.FetchSearchSuggestions(e, t).then((t) => {
				if (e == Yl.U.GetSearchText().Value) {
					n(t);
				} else {
					console.warn("Throwing away stale suggestions for", e);
				}
			});
		}, [e, t]);
		return r;
	})(s, e);
	useEffect(() => {
		a.current.SetSearchText(s);
	}, [s]);
	useEffect(() => {
		a.current.SetSearchSuggestions(l.items.map((e) => e.GetID()));
	}, [l]);
	return q3(() => {
		if (
			t.current == o &&
			r.current == l &&
			n.current == a.current.searchSuggestions
		) {
			return i.current;
		}
		console.log(`~~ Search result sets: ${a.current.searchText} ~~`);
		const s = Sr.O$.allFriends
			.map((e) => ({
				type: "friend",
				id: `f${e.persona.GetAccountID()}`,
				friendState: e,

				score: Nm_2(o, [
					e.display_name.toLowerCase(),
					...(e.nickname ? [e.nickname.toLowerCase()] : []),
				]),
			}))
			.filter((e) => e.score > 0)
			.sort((e, t) => t.score - e.score);
		const c = $e.tw.allApps
			.filter(Xl)
			.map((e) => ({
				type: "ownApp",
				id: `o${e.appid}`,
				ownAppOverview: e,
				score: a.current.MatchesScored(e),
			}))
			.filter((e) => e.score > 0)
			.sort((e, t) => t.score - e.score);
		const m = c.filter(
			(e) => e.type === "ownApp" && e.ownAppOverview.app_type != 4,
		);
		const u = c.filter(
			(e) => e.type === "ownApp" && e.ownAppOverview.app_type == 4,
		);
		let d = l.items.map((e) =>
			((e, t) => {
				if (
					e.GetStoreItemType() === 0 ||
					e.GetStoreItemType() === 1 ||
					e.GetStoreItemType() === 1 ||
					e.GetStoreItemType() === 2
				) {
					return {
						type: "storeApp",
						id: `s${e.GetAppID()}`,
						storeItem: e,
						score:
							Nm_2(t, [e.GetName().toLowerCase(), e.GetAppID().toString()]) -
							0.5,
					};
				} else if (e.GetStoreItemType() === 4 || e.GetStoreItemType() === 6) {
					return {
						type: "storeTag",
						id: (e.GetStoreItemType() === 6 ? "sh" : "st") + e.GetID(),
						storeItem: e,
						score:
							Nm_2(t, [e.GetName().toLowerCase(), e.GetID().toString()]) - 0.6,
					};
				} else {
					console.error(
						"mapStoreItemToSearchResult: Trying to map an unsupported store item to a search result. ",
						e,
					);
					return null;
				}
			})(e, o),
		);
		if (l.total >= e) {
			const t = 3;
			const r = d.length - e;
			const n = r > t ? t : r;
			if (n > 0) {
				let t = e - 1;
				while (t > 0 && d[t].type === "storeTag") {
					t--;
				}
				d = d.slice(0, t + 1 - n).concat(d.slice(t + 1, t + 1 + n));
			}
		}
		d.sort((e, t) => t.score - e.score);
		let A = false;
		if (l.total >= e) {
			A = true;
			d.push({
				type: "redirectLink",
				strText: Localize("#GamepadHome_GoToStore"),
				strURL: `${Be.B7.ResolveURL("StoreGameSearchPage")}?term=${
					Yl.U.GetSearchText().Value
				}`,
				score: Number.MAX_SAFE_INTEGER,
				id: "s_redirect",
			});
		}
		for (let e of c) {
			if (e.type == "ownApp" && e.ownAppOverview.app_type == 4) {
				e.score -= 1;
			}
		}
		const p = new Set(
			c.map((e) => e.type === "ownApp" && e.ownAppOverview.appid),
		);
		const g = d.filter(
			(e) =>
				(e.type === "storeApp" && !p.has(e.storeItem.GetAppID())) ||
				e.type === "storeTag",
		);
		const h = d.length - g.length;
		const C = Array.prototype.concat(s, c, g).sort((e, t) => t.score - e.score);
		const _ = s.length + c.length + l.total - h;
		if (A) {
			C.push({
				type: "redirectLink",
				strText: Localize("#GamepadHome_GoToStore"),
				strURL: `${Be.B7.ResolveURL("StoreGameSearchPage")}?term=${
					Yl.U.GetSearchText().Value
				}`,
				score: Number.MAX_SAFE_INTEGER,
				id: "s_redirect",
			});
		}
		let f = {
			all: C,
			all_total: _,
			library: m,
			friends: s,
			store: d,
			store_total: l.total,
			tools: u,
		};
		i.current = f;
		t.current = o;
		r.current = l;
		n.current = a.current.searchSuggestions;
		return f;
	});
}
function rc(e) {
	let t = A.useCallback(() => console.log("implement"), []);
	let { strActiveTab: r, onShowTab: i } = ch(n.BV.GamepadUI.Search.Tab);
	Xf("show-expanded", "BasicSearch");
	mH(t);
	let a = ((e) =>
		A.useMemo(
			() => [
				{
					id: "All",
					title: "#SearchTab_All",
					renderTabAddon: ({ active: t }) =>
						A.createElement(he.h7, {
							count: e.all_total,
						}),
					content: A.createElement(nc, {
						results: e.all,
					}),
				},
				{
					id: "Library",
					title: "#SearchTab_Library",
					count: e.library.length,
					renderTabAddon: ({ active: t }) =>
						A.createElement(he.h7, {
							count: e.library.length,
						}),
					content: A.createElement(nc, {
						results: e.library,
					}),
				},
				{
					id: "Friends",
					title: "#SearchTab_Friends",
					count: e.friends.length,
					renderTabAddon: ({ active: t }) =>
						A.createElement(he.h7, {
							count: e.friends.length,
						}),
					content: A.createElement(nc, {
						results: e.friends,
					}),
				},
				{
					id: "Store",
					title: "#SearchTab_Store",
					count: e.store.length,
					renderTabAddon: ({ active: t }) =>
						A.createElement(he.h7, {
							count: e.store_total,
						}),
					content: A.createElement(nc, {
						results: e.store,
					}),
				},
				{
					id: "Tools",
					title: "#SearchTab_Tools",
					count: e.tools.length,
					renderTabAddon: ({ active: t }) =>
						A.createElement(he.h7, {
							count: e.tools.length,
						}),
					content: A.createElement(nc, {
						results: e.tools,
					}),
				},
			],
			[e],
		))(Jl(19));
	if (a.length == 0) {
		return null;
	} else {
		if (a.findIndex((e) => e.id == r) == -1) {
			r = a[0].id;
		}
		return A.createElement(
			C.Z,
			{
				className: Zl.GamepadSearch,
			},
			A.createElement(he.xC, {
				tabs: a,
				activeTab: r,
				onShowTab: i,
				autoFocusContents: false,
			}),
		);
	}
}
const nc = A.memo((e) => {
	let { results: t } = e;
	const r = A.useContext(he.Q7);
	let n = A.useCallback(
		({ width: e, height: n }) =>
			e <= 0 ||
			A.createElement(ic, {
				results: t,
				scrollElement: r,
				width: e,
			}),
		[t, r],
	);
	if (r) {
		if (t.length == 0 && Yl.U.GetSearchText().Value.toLowerCase().length > 0) {
			return A.createElement(_c, null);
		} else {
			return A.createElement(
				"div",
				{
					className: Zl.ResultsGridWrapper,
				},
				A.createElement(tc.N, null, n),
			);
		}
	} else {
		return null;
	}
});
const ic = A.memo((e) => {
	let { results: t, scrollElement: r, width: n } = e;
	let i = A.useRef(r);
	let a = (e, r) => {
		let n = e * r;
		return t.slice(n, n + r);
	};
	let s = parseInt(Zl.ResultItemWidth);
	let o = parseInt(Zl.ResultItemHeight);
	let l = ((e, t, r) => {
		let n = Math.floor(e / t);
		if ((e - t * n) / (n - 1) < r) {
			n -= 1;
		}
		return n;
	})(n, s, parseInt(Zl.ResultPadding));
	let c = Math.ceil(t.length / l);
	const m = Te_2({
		count: c,
		getScrollElement: () => i.current,
		estimateSize: A.useCallback(() => o, [o]),
		overscan: 5,
	});
	const u = {
		height: `${m.getTotalSize()}px`,
		width: "100%",
		position: "relative",
	};
	return A.createElement(
		C.Z,
		{
			style: u,
			className: Zl.ResultsGrid,
			"flow-children": "grid",
		},
		m.getVirtualItems().map((e) =>
			A.createElement(ac, {
				key: e.index,
				size: e.size,
				start: e.start,
				items: a(e.index, l),
			}),
		),
	);
});
function ac(e) {
	const { size: t, start: r, items: n } = e;
	const i = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: `${t}px`,
		transform: `translateY(${r}px)`,
	};
	return A.createElement(
		"div",
		{
			style: i,
			className: Zl.ResultsRow,
		},
		n.map((e, t) =>
			A.createElement(sc, {
				key: e.id,
				item: e,
			}),
		),
	);
}
function sc(e) {
	let t = e.item;
	if (t.type === "ownApp") {
		return A.createElement(lc, {
			item: t.ownAppOverview,
		});
	} else if (t.type == "storeApp") {
		return A.createElement(uc, {
			item: t.storeItem,
		});
	} else if (t.type == "friend") {
		return A.createElement(dc, {
			item: t.friendState,
		});
	} else if (t.type == "redirectLink") {
		return A.createElement(Ac, {
			title: t.strText,
			url: t.strURL,
		});
	} else if (t.type == "storeTag") {
		return A.createElement(gc, {
			item: t.storeItem,
		});
	} else {
		return null;
	}
}
function oc(e) {
	let { image: t, icon: r, description: n, overlaidText: i, onActivate: a } = e;
	return A.createElement(
		C.Z,
		{
			className: Zl.ResultTemplate,
			onActivate: a,
			focusable: false,
		},
		A.createElement(
			C.Z,
			{
				className: Zl.ResultTemplateImage,
				focusable: true,
			},
			t,
			i &&
				A.createElement(
					"div",
					{
						className: Zl.OverlaidText,
					},
					i,
				),
		),
		A.createElement(
			"div",
			{
				className: Zl.ResultTemplateDescriptionRow,
			},
			r &&
				A.createElement(
					"div",
					{
						className: Zl.Icon,
					},
					r,
				),
			n &&
				A.createElement(
					"div",
					{
						className: Zl.Description,
					},
					n,
				),
		),
	);
}
const lc = A.memo((e) => {
	let { item: t } = e;
	let r = A.createElement(cc, {
		app: t,
		displayName: t.display_name,
	});
	let n = st.SearchResultTypeLibrary();
	const i = br_2();
	return A.createElement(oc, {
		image: r,
		icon: n,
		onActivate: () => i.App(t.appid),
		description: Localize("#SearchResultType_OwnApp"),
	});
});
function cc(e) {
	let { displayName: t, ...r } = e;
	let [n, i] = A.useState(false);
	let a = A.useCallback(
		(e) => {
			let t = e.currentTarget.src;
			if (!t || !!t.startsWith("data:image/")) {
				i(true);
			}
		},
		[i],
	);
	return A.createElement(
		"div",
		{
			className: Zl.LibraryImageWithName,
		},
		A.createElement(wr.z, {
			...r,
			eAssetType: 3,
			className: Zl.GameIcon,
			allowCustomization: false,
			neverShowTitle: true,
			onLoad: a,
		}),
		n &&
			A.createElement(
				"div",
				{
					className: Zl.Title,
				},
				A.createElement("span", null, t),
			),
	);
}
function mc(e) {
	let { displayName: t, ...r } = e;
	return A.createElement(
		"div",
		{
			className: A_1(Zl.LibraryImageWithName, Zl.TagCtn),
		},
		A.createElement(wr.z, {
			...r,
			eAssetType: 3,
			className: Zl.GameIcon,
			allowCustomization: false,
			neverShowTitle: true,
		}),
		A.createElement(
			"div",
			{
				className: Zl.Title,
			},
			A.createElement("span", null, t),
		),
	);
}
const uc = A.memo((e) => {
	let { item: t } = e;
	let r = A.createElement(cc, {
		appid: t.GetAppID(),
		rgSources: [t.GetAssets().GetHeaderURL(), mn.A],
		displayName: t.GetName(),
	});
	let i = st.SearchResultTypeStore();
	let a = Qt_1(t.GetStorePageURL());
	return A.createElement(oc, {
		image: r,
		icon: i,
		onActivate: a,
		description: Localize("#SearchResultType_StoreApp"),
	});
});
const dc = A.memo((e) => {
	let { item: t } = e;
	let r = $2();
	let n = A.createElement(hc, {
		item: t,
	});
	let i = A.createElement(st.User, null);
	let a = t.display_name;
	return A.createElement(oc, {
		image: n,
		icon: i,
		onActivate: () => Oo.LN.ShowFriendChatDialog(r, t.persona.m_steamid),
		description: a,
	});
});
const Ac = A.memo((e) => {
	let t = Qt_1(e.url);
	return A.createElement(oc, {
		image: A.createElement("div", {
			className: Zl.RedirectResultBackground,
		}),
		icon: undefined,
		onActivate: t,
		overlaidText: Localize(e.title),
	});
});
function pc(e) {
	if (e.GetStoreItemType() === 4) {
		return `${w.TS.STORE_CDN_URL}/categories/headerimage/tags/${e.GetID()}?cc=${
			w.TS.COUNTRY
		}&l=${w.TS.LANGUAGE}`;
	} else if (e.GetStoreItemType() === 6) {
		return `${
			w.TS.STORE_CDN_URL
		}/categories/headerimage/category/${e.GetInternalName()}?cc=${
			w.TS.COUNTRY
		}&l=${w.TS.LANGUAGE}`;
	} else {
		w_4(
			false,
			`Unknown store item type in GetTagBackgroundImageUrl: ${e.GetStoreItemType()}`,
		);
		return "unknown_url";
	}
}
const gc = A.memo((e) => {
	let { item: t } = e;
	let r = A.createElement(mc, {
		appid: 1,
		rgSources: [pc(t)],
		displayName: t.GetName(),
	});
	let i = st.SearchResultTypeStore();
	let a = Qt_1(t.GetStorePageURL());
	return A.createElement(oc, {
		image: r,
		icon: i,
		onActivate: a,
		description: Localize("#SearchResultType_StoreApp"),
	});
});
function hc(e) {
	let { item: t } = e;
	A.useEffect(() => {
		e.item.miniProfileData?.EnsureCommunityDataLoaded();
	});
	return A.createElement(
		"div",
		{
			className: Zl.FriendResultImage,
		},
		A.createElement(
			"div",
			{
				className: Zl.ProfileBackground,
			},
			A.createElement($l.xh, {
				persona: t.persona,
				community_data: t.miniProfileData?.community_data,
			}),
		),
		A.createElement(
			"div",
			{
				className: Zl.ImageContainer,
			},
			A.createElement(Cc, {
				persona: t.persona,
				community_data: t.miniProfileData?.community_data,
			}),
		),
	);
}
function Cc(e) {
	const t =
		e.community_data?.avatar_frame &&
		A.createElement("img", {
			src: e.community_data.avatar_frame,
			className: Zl.Frame,
		});
	const r = e.community_data?.animated_avatar;
	const n = {
		size: "FillArea",
		statusPosition: "bottom",
		children: t,
		className: Zl.SearchResultFriendAvatar,
	};
	if (r) {
		return A.createElement(as.Ul, {
			strAvatarURL: r,
			...n,
		});
	} else {
		return A.createElement(as.i8, {
			persona: e.persona,
			...n,
		});
	}
}
function _c(e) {
	return A.createElement(
		"div",
		{
			className: Zl.NoResultsFound,
		},
		A.createElement("span", null, Localize("#Search_NoResults")),
	);
}
const wc = A.lazy(() => require.e(7462).then(require.bind(require, 32676)));
function Bc(e) {
	Mi_2(0, "MediaPage");
	ez(true);
	const { state: t } = zy();
	const { filter: r, item: n } = t || {};
	const i = W6();
	const a = useCallback(
		(e) => {
			const t = i.location.state;
			const r = t && typeof t == "object" ? t : {};
			i.replace({
				...i.location,
				state: {
					...r,
					filter: e,
				},
			});
		},
		[i],
	);
	return A.createElement(
		We.Jr,
		{
			padForFooter: true,
			padForHeader: true,
			scrollable: false,
			headerVisibility: "default",
			scrollIntoViewType: Va.Yo.NoTransform,
			flexed: false,
		},
		A.createElement(
			A.Suspense,
			{
				fallback: null,
			},
			A.createElement(wc, {
				initialFilter: r,
				initialItem: n,
				onFilterChange: a,
			}),
		),
	);
}
const Tc = Mc;
const Fc = 1000;
function Gc(e) {
	const [t, r, n, i] = xs_2();
	const [a, s] = uN(n, i, Fc);
	let o = [];
	if (r == 1) {
		o.push({
			notchIndex: 0,
			label: Localize("#Settings_Display_ColorVibrance_sRGB"),
		});
		o.push({
			notchIndex: 1,
			label: Localize("#Settings_Display_ColorVibrance_Native"),
		});
	} else if (r == 2) {
		o.push({
			notchIndex: 0,
			label: Localize("#Settings_Display_ColorVibrance_Native"),
		});
		o.push({
			notchIndex: 1,
			label: Localize("#Settings_Display_ColorVibrance_sRGB"),
		});
		o.push({
			notchIndex: 2,
			label: Localize("#Settings_Display_ColorVibrance_Boosted"),
		});
	} else {
		o.push({
			notchIndex: 0,
			label: Localize("#Settings_Display_ColorVibrance_Min"),
		});
		o.push({
			notchIndex: 1,
			label: Localize("#Settings_Display_ColorVibrance_Max"),
		});
	}
	return (
		t &&
		A.createElement(f.d3, {
			layout: "below",
			label: Localize("#Settings_Display_ColorVibrance"),
			padding: "none",
			disabled: false,
			value: a,
			onChange: s,
			min: 0,
			max: 1,
			resetValue: 0.5,
			step: 1 / 16,
			notchCount: o.length,
			notchLabels: o,
			notchTicksVisible: false,
			description: Localize("#Settings_Display_ColorVibrance_Desc"),
			highlightOnFocus: false,
			childrenContainerWidth: "min",
			bottomSeparator: "none",
		})
	);
}
function Oc() {
	const [e, t, r, n] = Xs_2();
	const [i, a] = uN(t, n, Fc);
	const s = r - 3500;
	const o = r + 3500;
	return (
		e &&
		A.createElement(f.d3, {
			layout: "below",
			padding: "none",
			label: Localize("#Settings_Display_ColorTemperature"),
			disabled: false,
			value: i,
			onChange: a,
			min: s,
			max: o,
			resetValue: r,
			step: 500,
			showValue: true,
			childrenContainerWidth: "min",
			highlightOnFocus: false,
			renderValue: (e) =>
				Localize(
					"#Settings_Display_ColorTemperature_Kelvin",
					Math.round(e).toString(),
				),
			bottomSeparator: "none",
		})
	);
}
function Pc() {
	Mi_2(0, "ColorSettings");
	ez(true, "ColorSettings");
	const e = Un_1();
	Bx(T.I5.Overlay, "ColorSettings");
	return A.createElement(
		We.Jr,
		{
			headerVisibility: "default",
			padForHeader: false,
			padForFooter: false,
		},
		A.createElement(
			"div",
			{
				className: A_1(Dc.PageContainer, e && Dc.Floating),
			},
			!e &&
				A.createElement("div", {
					className: Dc.PreviewImage,
					style: {
						"--image-url": "url( '/images/deck_colorsettings_default_bg.jpg' )",
					},
				}),
			A.createElement(
				C.Z,
				{
					className: Dc.FloatingControls,
					autoFocus: true,
				},
				A.createElement(
					C.Z,
					{
						className: Dc.Section,
					},
					A.createElement(Gc, null),
				),
				A.createElement(
					C.Z,
					{
						className: Dc.Section,
					},
					A.createElement(Oc, null),
				),
			),
		),
	);
}
const jc = Hc;
function Jc(e) {
	const {
		app: t,
		visible: r,
		ownerWindow: n,
		focusedColumn: i,
		collapsible: a,
	} = e;
	const s = ((e) => {
		let [t, r] = A.useState(false);
		A.useEffect(() => {
			let t = (e) => {
				r(true);
			};
			let n = ee.H.RegisterForAppData(e, t);
			return () => n.unregister();
		}, [e, r]);
		return t;
	})(t.appid);
	const o = ((e) => {
		let t = A.useRef(undefined);
		A.useEffect(() => {
			if (e == Wc.wp.Menu && t.current) {
				t.current.scrollTo({
					left: 0,
					top: 0,
					behavior: "smooth",
				});
			}
		}, [t, e]);
		return t;
	})(i);
	const c = A.useRef(undefined);
	const m = u6();
	const u = ek();
	if (!s) {
		return null;
	}
	const d = A_1(
		jc.ScrollMask,
		a && jc.Collapsible,
		i == Wc.wp.Controller && jc.HideMask,
		m && jc.KeyBoardVisible,
		u && jc.KeyBoardUsesIME,
		r && jc.Visible,
	);
	const p = A_1(
		jc.AppRunningControls,
		i != Wc.wp.Menu && jc.Collapsed,
		r && jc.Visible,
	);
	return A.createElement(
		"div",
		{
			className: d,
		},
		A.createElement(
			C.Z,
			{
				ref: o,
				className: p,
				scrollIntoViewType: Va.Yo.NoTransform,
				resetNavOnEntry: true,
			},
			A.createElement(rm, {
				app: t,
				navRef: c,
				collapsible: a,
			}),
			A.createElement(
				lm,
				{
					onCancel: () => c.current?.TakeFocus(),
				},
				A.createElement(mm, {
					app: t,
				}),
				A.createElement(um, {
					app: t,
				}),
				A.createElement(dm, {
					app: t,
				}),
				A.createElement(pm, {
					app: t,
				}),
				A.createElement(gm, {
					app: t,
					ownerWindow: n,
				}),
				A.createElement(Cm, {
					app: t,
				}),
			),
		),
	);
}
function $c(e) {
	const t = DO();
	return A.createElement(Jc, {
		...e,
		collapsible: true,
		focusedColumn: t,
	});
}
function em(e) {
	const t = $2();
	const r = q3(() => t.MainRunningApp);
	iW(true, "StandaloneAppRunningControls");
	((e) => {
		const t = W5(n.BV.GamepadUI.AppOverlay.AppRunningControls());
		const r = A.useRef(false);
		const i = yq();
		const a = K1();
		A.useEffect(() => {
			if (e == null && t && !r.current) {
				r.current = true;
				i();
				a();
			}
		}, [e, t, a, i]);
	})(r);
	return A.createElement(
		We.Jr,
		{
			background: "dialog",
			headerVisibility: "opaque",
			scrollable: false,
			padForHeader: false,
			padForFooter: false,
		},
		r &&
			A.createElement(Jc, {
				app: r,
				visible: true,
				collapsible: false,
				ownerWindow: t.BrowserWindow,
			}),
	);
}
function tm(e) {
	let { app: t } = e;
	let r = t.local_per_client_data?.display_status === 2;
	let [n, i] = im(t);
	let a = q3(() => o.oy.WindowStore.GetAppWindowIDs(t.appid));
	let s = q3(() => o.oy.WindowStore.GetAppFocusedWindowID(t.appid));
	let [l, c] = A.useState(null);
	let m = xf();
	A.useEffect(() => {
		let e = Array.from(a.values());
		SteamClient.System.UI.GetGameWindowsInfo(t.appid, e).then(
			(e) => {
				let t = new Map(e.map((e) => [e.windowid, e]));
				c(t);
			},
			(e) => {
				console.log("Window titles fail: ", e);
			},
		);
	}, [m, t.appid, a, c]);
	let d = [];
	a.forEach((e, i) => {
		const a = () => {
			o.oy.WindowStore.SetFocusedAppWindowID(t.appid, e);
		};
		let c = l?.get(e);
		if (c && (c.strTitle || r)) {
			let r = e == s || (i == 0 && s == 0);
			let o = {
				strLabel: c.strTitle ?? "",
				bActive: r,
				bDisabled: n,
				fnAction: a,
			};
			if (c.bCanClose) {
				o.fnSecondaryAction = () => {
					SteamClient.System.UI.CloseGameWindow(t.appid, e);
				};
				o.strSecondaryActionLabel = Localize("#AppOverlay_CloseWindow");
			}
			d.push(o);
		}
	});
	if (d.length <= 1 && !r) {
		return null;
	} else {
		return A.createElement(
			A.Fragment,
			null,
			A.createElement("div", {
				className: jc.NavigationMenuItemSeparator,
			}),
			A.createElement(
				C.Z,
				{
					className: A_1(jc.NavigationMenuItem, jc.SwitchAppsTitle),
					focusable: false,
				},
				Localize("#AppOverlay_SwitchWindows"),
			),
			d.map((e) =>
				A.createElement(om, {
					className: jc.SelectableAppWindow,
					key: e.strLabel,
					text: e.strLabel,
					active: e.bActive,
					disabled: e.bDisabled,
					onActivate: e.fnAction,
					onSecondaryButton: e.fnSecondaryAction,
					onSecondaryActionDescription: e.strSecondaryActionLabel,
				}),
			),
		);
	}
}
function rm(e) {
	const { app: t, navRef: r, collapsible: n } = e;
	const i = xv();
	const a = br_2();
	const s = nm(t);
	const l = q3(() => i.GetSelectedNavEntry());
	const c = am(Wc.k9.Achievements);
	const m = am(Wc.k9.Controller);
	const d = am(Wc.k9.Guides);
	const p = am(Wc.k9.Notes);
	am(Wc.k9.Browser);
	const g = am(Wc.k9.GR);
	const [h, _] = im(t);
	const f = T_3(t.appid);
	let b;
	A.useEffect(() => {
		if (t != i.GetFocusedApp()) {
			i.SetSelectedNavEntry(Wc.k9.Controller);
		}
	}, [i, t]);
	b = o.oy.BIsStreamingRemotePlayTogetherGame(t.appid)
		? "#AppOverlay_StopStreaming"
		: h
			? "#AppOverlay_ExitingGame"
			: "#AppOverlay_ExitGame";
	const y = [
		{
			strLabel: Localize("#AppOverlay_Resume"),
			bDisabled: h,
			fnAction: s,
		},
	];
	y.push({
		strLabel: Localize("#AppOverlay_ControllerSettings"),
		bDisabled: false,
		bActive: l == Wc.k9.Controller,
		fnAction: m,
	});
	y.push({
		strLabel: Localize("#AppOverlay_GameDetails"),
		bDisabled: false,
		fnAction: () => a.App(t.appid),
	});
	if (f && f.achievements.nTotal > 0) {
		y.push({
			strLabel: Localize("#AppOverlay_Achievements"),
			bDisabled: false,
			bActive: l == Wc.k9.Achievements,
			fnAction: c,
		});
	}
	y.push({
		strLabel: Localize("#AppOverlay_Guides"),
		bDisabled: false,
		bActive: l == Wc.k9.Guides,
		fnAction: d,
	});
	y.push({
		strLabel: Localize("#AppOverlay_Notes"),
		bDisabled: false,
		bActive: l == Wc.k9.Notes,
		fnAction: p,
	});
	if (BGameRecordingFeatureEnabled()) {
		y.push({
			strLabel: Localize("#AppOverlay_GR"),
			bDisabled: false,
			bActive: l == Wc.k9.GR,
			fnAction: g,
		});
	}
	y.push({
		strLabel: Localize(b),
		bDisabled: h,
		fnAction: _,
	});
	const w = DO();
	const B = A_1(
		jc.NavigationColumn,
		n && jc.Collapsible,
		w == Wc.wp.NavEntries && jc.NavColumnFocused,
		w == Wc.wp.Controller && jc.ControllerColumnFocused,
	);
	const v = YN(Wc.wp.NavEntries);
	return A.createElement(
		C.Z,
		{
			className: B,
			"flow-children": "column",
			onFocusWithin: v,
			navRef: r,
		},
		A.createElement(wr.z, {
			imageClassName: jc.CurrentGameLogo,
			eAssetType: 2,
			app: t,
			backgroundType: "transparent",
		}),
		A.createElement(
			sm,
			null,
			y.map((e) =>
				A.createElement(om, {
					key: e.strLabel,
					text: e.strLabel,
					disabled: e.bDisabled,
					active: e.bActive,
					onActivate: e.fnAction,
				}),
			),
			A.createElement(tm, {
				app: t,
			}),
		),
	);
}
function nm(e) {
	const t = xv();
	const r = R7();
	return A.useCallback(() => {
		jy("ResumeGameInProgress", e, "selected", 100, r.ownerWindow)();
		o.oy.CloseSideMenus();
		t.SetSelectedNavEntry(Wc.k9.Controller);
	}, [t, e, r.ownerWindow]);
}
function im(e) {
	let [t, r] = A.useState(false);
	let n = e.gameid;
	let i = e.appid;
	let a = A.useCallback(
		(a) => {
			let s = GetOwningWindowForEvent(a);
			let l = () => {
				if (e?.display_status == 1) {
					xc.I.CancelAllGameActions();
				}
				r(true);
			};
			if (!t) {
				if (o.oy.BIsStreamingRemotePlayTogetherGame(i)) {
					a_3(n, l, s);
				} else {
					_D(n, i, l, s);
				}
			}
		},
		[t, n, i, e],
	);
	return [t, a];
}
function am(e) {
	const t = xv();
	return A.useCallback(() => {
		t.SetFocusedColumn(Wc.wp.Controller);
		t.SetSelectedNavEntry(e);
	}, [t, e]);
}
function sm(e) {
	return A.createElement(
		C.Z,
		{
			className: jc.NavigationBox,
			"flow-children": "column",
			..._._k,
		},
		e.children,
	);
}
function om(e) {
	let {
		className: t,
		text: r,
		disabled: n,
		active: i,
		onActivate: a,
		...s
	} = e;
	let o = A_1(t, jc.NavigationMenuItem, n && jc.Disabled, i && jc.Active);
	return A.createElement(
		C.Z,
		{
			className: o,
			onActivate: a,
			...s,
		},
		i &&
			A.createElement("div", {
				className: jc.ActiveDot,
			}),
		r,
	);
}
function lm(e) {
	const { onCancel: t, children: r } = e;
	const n = YN(Wc.wp.Controller);
	const i = DO();
	const a =
		A.useContext(Ze.mA).params.eWindowType == T.W7.OverlayGamepadUI &&
		!w.TS.IN_GAMESCOPE;
	const s = A_1(
		jc.AppColumn,
		i == Wc.wp.Controller && jc.FocusedColumn,
		i == Wc.wp.Controller && "FocusedColumn",
		a && jc.DesktopOverlay,
	);
	return A.createElement(
		C.Z,
		{
			className: s,
			focusable: false,
			onFocusWithin: n,
			onCancelButton: t,
			scrollIntoViewWhenChildFocused: true,
		},
		r,
	);
}
function cm(e, t) {
	const r = DO();
	const n = xv();
	const i = q3(() => n.GetSelectedNavEntry()) == e;
	A.useEffect(() => {
		if (r == Wc.wp.Controller && i) {
			t.current?.ChildTakeFocus();
		}
	}, [t, r, i]);
}
function mm(e) {
	const { app: t } = e;
	const r = xv();
	const n = A.useRef(undefined);
	const i = q3(() => r.GetSelectedNavEntry()) == Wc.k9.Controller;
	const a = A.useCallback(() => i, [i]);
	cm(Wc.k9.Controller, n);
	const s = o.oy.MostRecentlyActiveControllerIndex;
	B.v3.EnsureEditingConfiguration(t.appid, s);
	return A.createElement(
		C.Z,
		{
			className: A_1(i && jc.ActiveContent, jc.AppColumnContent),
			navRef: n,
			fnCanTakeFocus: a,
			navEntryPreferPosition: Va.iU.PREFERRED_CHILD,
		},
		A.createElement(zc.c, {
			inMainMenu: true,
			appid: t.appid,
			controllerIndex: s,
		}),
	);
}
function um(e) {
	const { app: t } = e;
	const r = xv();
	const n = T_3(t.appid);
	const i = A.useRef(undefined);
	const a = q3(() => r.GetSelectedNavEntry());
	const s = useRef(undefined);
	const o = j_2(s, "0");
	const l = a == Wc.k9.Achievements;
	const c = A.useCallback(() => l, [l]);
	cm(Wc.k9.Achievements, i);
	if (n && n.achievements.nTotal != 0) {
		return A.createElement(
			C.Z,
			{
				className: A_1(l && jc.ActiveContent, jc.AppColumnContent),
				navRef: i,
				fnCanTakeFocus: c,
			},
			A.createElement(
				We.Jr,
				{
					padForHeader: false,
					padForFooter: false,
					headerVisibility: "default",
					scrollable: false,
					flexed: true,
				},
				A.createElement(
					Zo.MS,
					{
						className: jc.OverlayAchievements,
						ref: s,
						scrollPaddingTop: 0,
						scrollIntoViewType: Va.Yo.NoTransform,
					},
					A.createElement(
						C.Z,
						{
							"flow-children": "column",
							className: jc.Container,
						},
						A.createElement(fc.Rp, {
							appid: t.appid,
							bShowGameInfoInHeader: true,
							bShowInProgress: true,
							scrollTabsTop: o,
							autoFocus: false,
						}),
					),
				),
			),
		);
	} else {
		return null;
	}
}
function dm(e) {
	const { app: t } = e;
	const r = xv();
	const n = A.useRef(undefined);
	const i = q3(() => r.GetSelectedNavEntry()) == Wc.k9.Guides;
	const a = A.useCallback(() => i, [i]);
	cm(Wc.k9.Guides, n);
	return A.createElement(
		C.Z,
		{
			className: A_1(i && jc.ActiveContent, jc.AppColumnContent),
			navRef: n,
			fnCanTakeFocus: a,
		},
		A.createElement(
			We.Jr,
			{
				padForHeader: false,
				padForFooter: false,
				headerVisibility: "default",
				scrollable: false,
				flexed: true,
			},
			A.createElement(
				Zo.i6,
				{
					name: `OverlayGuides_${t.appid}`,
					className: jc.OverlayGuides,
					scrollPaddingTop: 200,
					scrollPaddingBottom: 20,
					scrollIntoViewType: Va.Yo.NoTransform,
				},
				A.createElement(Vc._j, {
					app: t,
					bVisible: i,
				}),
			),
		),
	);
}
const Am = A.lazy(() => require.e(1220).then(require.bind(require, 55518)));
function pm(e) {
	const { app: t } = e;
	const r = xv();
	const n = A.useRef(undefined);
	const i = q3(() => r.GetSelectedNavEntry()) == Wc.k9.Notes;
	const a = A.useCallback(() => i, [i]);
	cm(Wc.k9.Notes, n);
	const s = QP(t.appid, t.BIsShortcut() ? t.display_name : undefined);
	const o = A.useMemo(() => [o_2(s)], [s]);
	if (i) {
		return A.createElement(
			C.Z,
			{
				className: A_1(i && jc.ActiveContent, jc.AppColumnContent),
				navRef: n,
				fnCanTakeFocus: a,
			},
			A.createElement(
				We.Jr,
				{
					padForHeader: false,
					padForFooter: false,
					headerVisibility: "default",
					scrollable: false,
					flexed: true,
				},
				A.createElement(
					Zo.i6,
					{
						name: `OverlayNotes_${t.appid}`,
						className: jc.OverlayNotes,
						scrollPaddingTop: 200,
						scrollPaddingBottom: 20,
						scrollIntoViewType: Va.Yo.NoTransform,
					},
					A.createElement(
						p.fS,
						{
							initialEntries: o,
						},
						A.createElement(
							Zc.th,
							{
								mode: "page",
								store: Yc.L.Get(),
							},
							A.createElement(
								A.Suspense,
								{
									fallback: null,
								},
								A.createElement(Am, {
									noteParent: s,
								}),
							),
						),
					),
				),
			),
		);
	} else {
		return null;
	}
}
const gm = A.Fragment;
const hm = A.lazy(() => Promise.resolve().then(require.bind(require, 72858)));
function Cm(e) {
	const { app: t } = e;
	const r = xv();
	const n = A.useRef(undefined);
	const i = q3(() => r.GetSelectedNavEntry()) == Wc.k9.GR;
	const a = A.useCallback(() => i, [i]);
	cm(Wc.k9.GR, n);
	if (i) {
		return A.createElement(
			C.Z,
			{
				className: A_1(i && jc.ActiveContent, jc.AppColumnContent),
				navRef: n,
				fnCanTakeFocus: a,
			},
			A.createElement(
				We.Jr,
				{
					padForHeader: false,
					padForFooter: false,
					headerVisibility: "default",
					scrollable: false,
					flexed: true,
				},
				A.createElement(
					Zo.i6,
					{
						name: `OverlayGR_${t.appid}`,
						className: jc.OverlayGR,
						scrollPaddingTop: 200,
						scrollPaddingBottom: 20,
						scrollIntoViewType: Va.Yo.NoTransform,
					},
					A.createElement(
						A.Suspense,
						{
							fallback: null,
						},
						A.createElement(hm, {
							app: t,
							bVisible: i,
						}),
					),
				),
			),
		);
	} else {
		return null;
	}
}
const fm = A.memo(() =>
	A.createElement(
		A.Fragment,
		null,
		A.createElement(
			jl,
			null,
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.Login(),
				},
				A.createElement(Tl.GW, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.CreateAccount(),
				},
				A.createElement(Tl.g, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.Account(),
				},
				A.createElement(K.I, null),
			),
			A.createElement(
				bm,
				{
					path: n.BV.GamepadUI.Invites(),
				},
				A.createElement(mr.u2, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.Error(),
				},
				A.createElement(cr, null),
			),
			A.createElement(
				bm,
				{
					path: n.BV.Downloads(),
				},
				A.createElement(Sc.lw, null),
			),
			A.createElement(
				bm,
				{
					path: n.BV.Library.Home(),
				},
				A.createElement($o, null),
			),
			A.createElement(
				bm,
				{
					path: n.BV.AppProperties.Root(),
				},
				A.createElement(yc.Z0, null),
			),
			A.createElement(
				p.qh,
				{
					path: n.BV.Console(),
				},
				A.createElement(kc.C, null),
			),
			A.createElement(
				p.qh,
				{
					path: n.BV.GamepadUI.ControllerConfigurator.Standalone(),
				},
				null,
			),
			A.createElement(
				p.qh,
				{
					path: n.BV.GamepadUI.ControllerConfigurator.Root(),
				},
				" ",
				A.createElement(nr.yE, null),
			),
			A.createElement(
				bm,
				{
					path: n.BV.Library.App.Achievements.Root(),
				},
				(e) =>
					A.createElement(fc.wi, {
						bShowGameInfoInHeader: true,
						appid: parseInt(e.match.params.appid),
					}),
			),
			A.createElement(
				bm,
				{
					path: n.BV.Library.App.Root(),
				},
				A.createElement(bc.xA, {
					renderFunc: Sm,
				}),
			),
			A.createElement(
				bm,
				{
					path: n.BV.Library.Root(),
					noTransitionZoom: true,
				},
				A.createElement(bl, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.Setup(),
				},
				A.createElement(Dl, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.Workshop(),
				},
				A.createElement(
					j.Ii,
					{
						autoFocus: true,
						href: "steam://open/workshop",
						className: Tc.DeveloperPlaceholderButton,
					},
					"WORKSHOP",
				),
			),
			A.createElement(bm, {
				path: n.BV.GamepadUI.Chat(),
			}),
			A.createElement(
				bm,
				{
					path: n.BV.Media.Root(),
				},
				A.createElement(Bc, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.Settings.Root(),
				},
				A.createElement(Ec.wB, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.ColorSettings(),
				},
				A.createElement(Pc, null),
			),
			A.createElement(
				bm,
				{
					path: n.BV.GamepadUI.Search.Root(),
				},
				A.createElement(rc, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.Zoo.Root(),
				},
				A.createElement(rr, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.About(),
				},
				A.createElement(dr, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.GameAPIOSK(),
				},
				A.createElement(Xe, null),
			),
			A.createElement(n.Jh, {
				path: ["/", "/index.html", "/sp.html"],
				exact: true,
			}),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.ControllerDeviceBindInput(),
				},
				A.createElement(Ic.Hg, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.ControllerDeviceTestInput(),
				},
				A.createElement(Ic.cs, null),
			),
			A.createElement(
				n.Jh,
				{
					path: n.BV.GamepadUI.ControllerDeviceCalibration.Root(),
				},
				A.createElement(vc.sA, null),
			),
			A.createElement(
				n.Jh,
				{
					path: Qc.O.AppNotes(":appid", ":noteid?"),
				},
				A.createElement(
					Zc.th,
					{
						mode: "page",
						store: Yc.L.Get(),
					},
					A.createElement(_m.u, {
						bStandalonePage: true,
					}),
				),
			),
		),
		A.createElement(
			p.dO,
			null,
			A.createElement(
				bm,
				{
					path: n.BV.GamepadUI.AppRunning(),
				},
				A.createElement(ql, null, A.createElement(zl, null)),
			),
			A.createElement(
				bm,
				{
					path: n.BV.GamepadUI.AppOverlay.Keyboard(),
				},
				A.createElement(ql, null, A.createElement(hr, null)),
			),
			A.createElement(
				bm,
				{
					path: n.BV.GamepadUI.AppOverlay.AppRunningControls(),
				},
				A.createElement(ql, null, A.createElement(em, null)),
			),
		),
	),
);
function bm(e) {
	let { children: t, ...r } = e;
	if (!q3(() => qw().GetServicesInitialized())) {
		t = A.createElement(ym, null);
	}
	return A.createElement(
		n.Jh,
		{
			...r,
		},
		t,
	);
}
function ym(e) {
	return A.createElement(
		Ml.j,
		{
			background: "black",
		},
		Localize("#LibraryHome_Loading"),
	);
}
function Sm(e, t) {
	return A.createElement(
		$.AC.Provider,
		{
			value: ke,
		},
		A.createElement(bc.kg, {
			overview: e,
			details: t,
			LaunchingDetails: Rc.rp,
		}),
	);
}
const Bm = PA(() => {
	const e = o.oy.GetShutdownState();
	if (!e.bFailed || e.appid == 0) {
		return null;
	}
	const t = ee.H.GetAppDetails(e.appid)?.strDisplayName;
	return A.createElement(
		x.EN,
		{
			active: true,
		},
		A.createElement(x.KG, {
			onOK: () => o.oy.ClearShutdownFailure(),
			strDescription: Localize("#Steam_AppMustBeClosedToQuit_Info", t),
		}),
	);
});
const Tm = "FocusNavHistoryID";
const Rm = new Ya.wd("FocusNavigation").Debug;
function km(e = 2) {
	const t = W6();
	const r = A.useRef();
	const n = zy();
	const i = ho_2();
	const a = n.state && n.state[Tm];
	const s = A.useRef();
	const [o, l] = A.useState(a);
	A.useLayoutEffect(() => {
		if (!r.current) {
			return;
		}
		const e = r.current;
		return e
			.Node()
			.Tree.WindowContext.FocusChangedCallbacks.Register((r, n, a) => {
				const o = t.location;
				let l = o.state && o.state[Tm];
				if (!l) {
					l = i ? `State_${o.key}` : `State_${e.Node().Tree.id}`;
					s.current = l;
					t.replace({
						...t.location,
						state: {
							...o.state,
							[Tm]: l,
						},
					});
				}
				if (s.current == l) {
					if (i) {
						e.SaveState(l);
					} else {
						window.history.replaceState(
							{
								...window.history.state,
								[l]: Ze_2(e.Node()),
							},
							null,
						);
					}
				}
			}).Unregister;
	}, [t, i]);
	A.useLayoutEffect(() => {
		if (r.current && s.current != a) {
			if (!a) {
				l(undefined);
				return;
			}
			const t = r.current.NavTree().DeferredFocus;
			t.SuppressFocus();
			Rm(`Start restoring history for ${a}, suppressing focus`);
			const n = window.setTimeout(() => {
				l(a);
			}, e);
			return () => {
				window.clearTimeout(n);
				t.ExecuteQueuedFocus();
			};
		}
	}, [a, e]);
	A.useEffect(() => {
		if (!o) {
			return;
		}
		const e = i || window.history.state?.[o];
		const t = r.current.NavTree().DeferredFocus;
		let n = false;
		if (i) {
			n = r.current.RestoreState(o, 1);
		} else if (e) {
			LU(r.current.Node(), e, 0);
			n = true;
		}
		Rm(
			`Completed restoring history for state ${o} - ${
				n ? "had history." : "no history for this state."
			}`,
		);
		if (n) {
			t.Reset();
		} else {
			t.ExecuteQueuedFocus();
		}
		s.current = o;
	}, [o, t, i]);
	return r;
}
function Pm(e) {
	const [t, r] = VI("force_fake_mandatory_update");
	const [n, i] = A.useState(false);
	const a = A.useCallback(() => {
		if (t) {
			r(false);
		} else {
			Om.Bd.ApplyMandatoryUpdate({});
			i(true);
		}
	}, [r, t, i]);
	return A.createElement(
		f.$n,
		{
			className: Nm.Button,
			onClick: a,
			disabled: n,
			autoFocus: true,
			focusable: true,
			preferredFocus: true,
			focusableIfNoChildren: true,
		},
		n
			? Localize("#MandatoryUpdate_ButtonInstalling")
			: Localize("#MandatoryUpdate_ButtonText"),
	);
}
function Lm(e) {
	const { setForceSkip: t } = e;
	const [r, n] = A.useState(0);
	LC();
	pw();
	Nx();
	Bx(T.I5.Opaque, "MandatoryUpdateTakeoverContent");
	const i = A.useCallback((e) => {
		switch (e.detail.button) {
			case je.pR.STEAM_GUIDE:
			case je.pR.STEAM_QUICK_MENU: {
				e.preventDefault();
				e.stopPropagation();
				return;
			}
		}
	}, []);
	const a = A.useCallback(() => {
		if (r + 1 >= 20) {
			t(true);
		}
		n((e) => e + 1);
	}, [r, n, t]);
	return A.createElement(
		x.EN,
		{
			active: true,
		},
		A.createElement(
			"div",
			{
				className: Nm.MandatoryUpdateTakeoverContent,
			},
			A.createElement(
				C.Z,
				{
					className: Nm.Container,
					noFocusRing: true,
					onButtonDown: i,
					onButtonUp: i,
				},
				A.createElement(
					"div",
					{
						className: Nm.Image,
						onClick: a,
					},
					A.createElement(st.DeckLogoOLED, null),
				),
				A.createElement(
					"div",
					{
						className: Nm.Title,
					},
					" ",
					Localize("#MandatoryUpdate_Title"),
					" ",
				),
				A.createElement(
					"div",
					{
						className: Nm.Text,
					},
					" ",
					Localize("#MandatoryUpdate_Text"),
					" ",
				),
				A.createElement(
					"div",
					{
						className: Nm.ButtonContainer,
					},
					A.createElement(Pm, null),
				),
			),
		),
	);
}
function zm(e) {
	const t = PU();
	const [r] = VI("force_fake_mandatory_update");
	const [n, i] = A.useState(false);
	if (!w.TS.ON_STEAMOS && !r) {
		return null;
	}
	if ((!r && !t) || n) {
		return null;
	} else {
		return A.createElement(Lm, {
			setForceSkip: i,
		});
	}
}
const xm = PA(() => {
	const e = zy();
	let t = e.pathname.startsWith(n.BV.GamepadUI.Chat());
	const r = Wx();
	const i = km();
	const a = A.useCallback((e) => e.altKey && aE(e), []);
	return A.createElement(
		A.Fragment,
		null,
		A.createElement(
			C.Z,
			{
				className: Tc.AppDetailsMain,
				navRef: i,
				onContextMenu: a,
			},
			A.createElement(q.N, null),
			A.createElement(
				b.tH,
				{
					errorKey: e.key,
				},
				A.createElement(fm, null),
				r &&
					A.createElement(mr.ZY, {
						visible: t,
					}),
			),
			A.createElement(Um, null),
			A.createElement(Wm, null),
		),
	);
});
function Um() {
	const e = RP();
	return A.createElement(
		b.wC,
		null,
		A.createElement(Dm.g, null),
		A.createElement(Y.S, null),
		A.createElement(Z.jj, {
			appid: e,
		}),
		A.createElement(Q.TE, null),
		A.createElement(zm, null),
		A.createElement(Bm, null),
		A.createElement(wm.T, null),
		A.createElement(s.SA, null),
	);
}
function Wm() {
	const e = parseInt(Tc.OverlayTransitionDurationMS);
	const t = VT();
	const r = Qx();
	const [i, a] = A.useState(false);
	const [s] = VI("library_low_perf_mode");
	const o = A.useRef(undefined);
	O7(o, !!t);
	const l = A.useCallback(() => {
		a(true);
	}, []);
	const c = A.useCallback(() => {
		r();
		a(false);
	}, [r]);
	const m = {
		enter: Tc.OverlayAppDetailsTransitionEnter,
		enterActive: Tc.OverlayAppDetailsTransitionEnterActive,
		enterDone: Tc.OverlayAppDetailsTransitionEntered,
		exit: Tc.OverlayAppDetailsTransitionExit,
		exitActive: Tc.OverlayAppDetailsTransitionExitActive,
	};
	const u = !s;
	const d = A.useRef(null);
	return A.createElement(
		g.B2,
		{
			navID: "PartnerEventOverlayContainer",
			navTreeRef: o,
			onCancelButton: l,
			enabled: !!t,
			modal: true,
		},
		A.createElement(
			"div",
			{
				className: Tc.PartnerEventOverlayContainer,
			},
			A.createElement(
				Im.A,
				{
					nodeRef: d,
					in: !i && !!t,
					appear: u,
					enter: u,
					exit: true,
					classNames: m,
					timeout: e,
					onExited: c,
				},
				A.createElement(
					"div",
					{
						ref: d,
						className: Tc.TransitionWrapper,
					},
					A.createElement(vm.z, {
						onClose: l,
						showAppIcon: true,
						appid: t?.appid,
						initialEventID: t?.eventid,
						clanSteamID: t?.clanSteamID,
						additionalParams: t?.additionalParams,
					}),
				),
			),
		),
	);
}
const Km = Ym;
const Xm = A.memo((e) => {
	const { bQuickAccessFooter: t } = e;
	const r = SA();
	const i = q3(() => r.BShowFooter());
	const a = [
		n.BV.GamepadUI.AppRunning(),
		n.BV.GamepadUI.AppOverlay.AppRunningControls(),
		n.BV.GamepadUI.SteamWeb(),
	];
	const s = OU(a);
	const o = OU(n.BV.GamepadUI.SteamWeb());
	Qf();
	const l = A.useCallback(
		(e, n) => {
			if (!t) {
				r.m_flCurrentFooterHeight = n;
			}
		},
		[r, t],
	);
	const c = w6(l);
	if (i || t) {
		return A.createElement(
			"div",
			{
				id: "Footer",
				ref: c,
				className: A_1(
					Km.BasicFooter,
					t && Km.QuickAccessFooter,
					s && Km.Opaque,
					o && Km.Relative,
				),
				onTouchStart: (e) => e.preventDefault(),
				onTouchEnd: (e) => e.preventDefault(),
				onMouseMove: (e) => e.preventDefault(),
				onMouseDown: (e) => e.preventDefault(),
			},
			A.createElement($m, {
				minimal: t,
			}),
		);
	} else {
		return null;
	}
});
function Jm(e) {
	if (x5()) {
		return A.createElement("div", null, Localize("#Devkit_Unsupported_Footer"));
	} else {
		return null;
	}
}
const $m = (e) => {
	const { minimal: t } = e;
	const r = [nt.g4.HomeMenu, nt.g4.A, nt.g4.B];
	const n = Object.values(nt.g4)
		.filter((e) => typeof e == "number")
		.filter((e) => !r.includes(e));
	const i = $2();
	const a = gc_1(i.FocusNavActiveSubscribableValue);
	return A.createElement(
		"div",
		{
			className: Km.FooterLegend,
		},
		a &&
			A.createElement(eu, {
				minimal: t,
				button: nt.g4.HomeMenu,
			}),
		A.createElement(
			"div",
			{
				className: Km.Spacer,
			},
			A.createElement(Jm, null),
		),
		a &&
			A.createElement(
				A.Fragment,
				null,
				n.map((e) =>
					A.createElement(eu, {
						key: e,
						minimal: t,
						button: e,
					}),
				),
				A.createElement(eu, {
					minimal: t,
					button: nt.g4.A,
				}),
				A.createElement(eu, {
					minimal: t,
					button: nt.g4.B,
				}),
			),
	);
};
function eu(e) {
	const t = Xp();
	if (w_1(e.button)) {
		if (
			(e.minimal && e.button == nt.g4.HomeMenu) ||
			(e.minimal && e.button == nt.g4.B && t.IsDefaultAction(e.button))
		) {
			return null;
		} else {
			return A.createElement(qm.X, {
				button: e.button,
			});
		}
	} else {
		return null;
	}
}
const du = uu;
const pu = A.memo((e) => {
	const { active: t, loggedIn: r } = e;
	iW(t, "MainMenuBrowserView");
	const n = A.useCallback(
		(e) => o.oy.NavigationManager.RegisterInputSource(e),
		[],
	);
	const i = sd_2(n, {
		name: "MainMenu",
	});
	let a = Qu_1();
	let s = ((e) => {
		let t = parseInt(du.mainMenuCloseDurationMS);
		let r = A.useRef(false);
		let n = A.useRef(undefined);
		let i = CH();
		let a = A.useCallback(() => {
			if (n.current !== undefined) {
				window.clearTimeout(n.current);
			}
			n.current = undefined;
		}, [n]);
		A.useEffect(() => a, [a]);
		let s = A.useCallback(() => {
			r.current = false;
			a();
			i();
		}, [r, a, i]);
		if (r.current && !e) {
			if (n.current === undefined) {
				n.current = window.setTimeout(s, t);
			}
		} else {
			r.current = e;
			a();
		}
		return r.current;
	})(t);
	const c = u6();
	const m = A.useCallback(
		(e) => {
			if (i) {
				i.GetBrowserView().SetFocus(false);
				i.GetBrowserView().SetFocus(true);
			}
		},
		[i],
	);
	jg(t ? m : undefined);
	const { fnOnFocusNavActivated: u, fnOnFocusNavDeactivated: d } = k6(
		Ll.Ez.Main,
		i,
		e.ModalManager,
	);
	const p = K1_2();
	if (!i) {
		return null;
	}
	let g = A_1(
		du.ViewPlaceholder,
		a && du.Fullscreen,
		c && du.IsVirtualKeyboardShown,
	);
	return A.createElement(
		Hm.H,
		{
			appearance: "darkblur",
			visible: t,
			onClick: p,
		},
		A.createElement(cu.m4, {
			className: g,
			browser: i.GetBrowserView(),
			visible: s,
		}),
		A.createElement(
			Mr.b5,
			{
				ownerWindow: i.GetViewWindow(),
			},
			ou.createPortal(
				A.createElement(bu, {
					bLoggedIn: e.loggedIn,
					open: t,
					popup: i.GetViewWindow(),
					onFocusNavActivated: u,
					onFocusNavDeactivated: d,
				}),
				i.GetRenderElement(),
			),
		),
	);
});
const gu = A.memo((e) => {
	const { active: t } = e;
	const r = ch_2();
	const n = R7().ownerWindow;
	const i = DF(t, 500);
	const a = t || i;
	ED(a);
	const [s, o] = A.useState(false);
	A.useEffect(() => o(t), [t]);
	iW(s, "MainMenuEmbedded");
	const l = A.useCallback(() => {
		r.OnMenuDeactivated(Ll.Ez.Main);
	}, [r]);
	if (a) {
		return A.createElement(
			"div",
			{
				className: du.MainMenuEmbedded,
			},
			A.createElement(bu, {
				bLoggedIn: e.loggedIn,
				open: s,
				onFocusNavDeactivated: l,
				popup: n,
			}),
		);
	} else {
		return null;
	}
});
const hu = A.memo((e) => {
	const t = $2();
	const { element: r } = Xy(iu.b7.MainPanelMenu, {
		inherit_parent_curvature: true,
		interactive: true,
		requires_laser: true,
		parent_overlay_key: t.GetMainVROverlayKey(),
		origin_on_parent: {
			x: -1,
			y: 0,
		},
		origin_on_popup: {
			x: 1,
			y: 0,
		},
		offset: {
			x_pixels: -6,
		},
	});
	const n = A.useRef(undefined);
	const i = A.useRef(undefined);
	const a = K1_2();
	const s = on_2();
	if (!r) {
		return null;
	}
	const o = e.loggedIn;
	return ou.createPortal(
		A.createElement(
			g.B2,
			{
				navID: "VRMainNavMenuContainer",
				ref: n,
				navTreeRef: i,
				onCancelButton: a,
				onGlobalButtonDown: s,
			},
			A.createElement(vu, {
				loggedIn: o,
				menuOpen: true,
			}),
		),
		r,
	);
});
function Cu(e) {
	const {
		label: t,
		action: r,
		active: n,
		eFeature: i = tt.uX,
		route: a,
		location: s,
		className: o,
		children: l,
		...c
	} = e;
	const m = Is_2(a, s);
	const u = l9(i);
	const d = m == 0 ? u : m;
	const p = d != 0;
	const g = rP().IN_VR;
	const h = A.useRef(undefined);
	const _ = $2();
	let f = () => {
		$_2(_.BrowserWindow || window, d, i, () => {
			r(h.current);
		});
	};
	if (d == 2 && i == tt.JC) {
		f = undefined;
	}
	const b = p ? f : r;
	const y = n && !g;
	const B = A_1(
		o,
		du.Item,
		n && du.Active,
		p && du.Blocked,
		!b && du.Unselectable,
	);
	return A.createElement(
		"div",
		{
			className: du.ItemOuter,
		},
		A.createElement(
			C.Z,
			{
				className: B,
				onClick: b ? () => b(h.current) : undefined,
				onActivate: b ? () => b(h.current) : undefined,
				focusable: !!b,
				ref: h,
				...c,
				preferredFocus: n,
			},
			y &&
				A.createElement("div", {
					className: du.ActiveDot,
					style: {
						width: "10px",
						height: "50%",
					},
				}),
			A.createElement(
				"div",
				{
					className: du.ItemIcon,
				},
				l,
			),
			A.createElement(
				At.r,
				{
					className: du.ItemLabel,
				},
				t,
			),
		),
	);
}
function _u(e) {
	const {
		route: t,
		routeState: r,
		label: n,
		exactRouteMatch: i,
		suppressActiveState: a,
		...s
	} = e;
	const o =
		!!W5({
			path: t,
			exact: i,
		}) && !a;
	const l = {
		pathname: "",
		search: "",
		state: r,
		hash: "",
	};
	const c = e8(t, l);
	let m = Eu(t, r);
	return A.createElement(Cu, {
		active: o,
		eFeature: c,
		route: t,
		location: l,
		label: n,
		action: m,
		...s,
	});
}
function fu(e) {
	let { app: t, suppressActiveState: r = false } = e;
	const i = RP() == t.appid;
	const a = $2();
	const s =
		a.BRouteMatch({
			path: n.BV.GamepadUI.AppRunning(),
			exact: true,
		}) && i;
	const l = OU(n.BV.GamepadUI.AppOverlay.AppRunningControls());
	const c = (s || (l && i)) && !r;
	const m = nm(t);
	const u = Eu(n.BV.GamepadUI.AppOverlay.AppRunningControls(), undefined);
	const d = A.useCallback(
		() => a.MenuStore.MainMenuStore.SetFocusedApp(t),
		[a, t],
	);
	return A.createElement(
		Cu,
		{
			active: c,
			action: () => {
				if (a.IsVRWindowInGamescope()) {
					u();
				} else {
					m();
				}
			},
			label: e.app.display_name,
			onFocus: d,
		},
		A.createElement(wr.z, {
			app: e.app,
			eAssetType: 4,
			className: du.RunningAppIcon,
		}),
	);
}
function bu(e) {
	const {
		bLoggedIn: t,
		open: r,
		popup: n,
		onFocusNavActivated: i,
		onFocusNavDeactivated: a,
	} = e;
	const s = A.useRef(undefined);
	const o = A.useRef(undefined);
	const c = Y$(Ll.Ez.Main);
	const m = u6();
	useEffect(() => {
		if (r) {
			o.current.Activate(true);
		} else if (o.current.BIsActive()) {
			o.current.Deactivate();
		}
	}, [r]);
	const u = K1_2();
	const d = on_2();
	let p = eK();
	let C = DO() != Wc.wp.Menu;
	A.useEffect(() => {
		if (C) {
			s.current.scrollTo(0, 0);
		}
	}, [C]);
	let _ = A_1(
		"BasicUI",
		du.Container,
		r && du.Open,
		m && du.IsVirtualKeyboardShown,
	);
	return A.createElement(
		g.B2,
		{
			ref: s,
			navID: "MainNavMenuContainer",
			navTreeRef: o,
			onActivated: i,
			onDeactivated: a,
			className: _,
			onCancelButton: u,
			onButtonDown: d,
			enabled: r || c,
		},
		A.createElement(
			h.g,
			null,
			A.createElement(vu, {
				loggedIn: t,
				menuOpen: r,
			}),
			p &&
				A.createElement($c, {
					app: p,
					visible: r,
					ownerWindow: n,
				}),
		),
	);
}
function yu(e) {
	let t = null;
	const r = Wx();
	const n = qw().GetServicesInitialized();
	if (r && n) {
		t = bg().self;
	}
	const i = LK();
	let a = Tr_2();
	if (!t) {
		return null;
	}
	let s = a?.animated_avatar;
	let o = a?.avatar_frame;
	let l = rO(t?.persona);
	let c = {};
	return A.createElement(
		"div",
		{
			className: A_1(du.CurrentUserAvatar, l),
		},
		s &&
			A.createElement(as.xz, {
				className: du.Avatar,
				loopDuration: e.animate ? "Infinite" : "None",
				size: "FillArea",
				persona: t?.persona,
				animatedAvatar: s,
				avatarFrame: o,
				statusPosition: "right",
				statusStyle: c,
				bLimitProfileFrameAnimationTime: true,
			}),
		!s &&
			i &&
			A.createElement(as.Ul, {
				strAvatarURL: i,
				statusStyle: c,
			}),
	);
}
const Su = 500;
const wu = 800;
const Bu = 1500;
function vu(e) {
	let { loggedIn: t, menuOpen: r } = e;
	const i = xv();
	const a = ((e) => {
		let t = A.useRef(undefined);
		const r = OU(n.BV.GamepadUI.AppRunning());
		let i = DO();
		A.useEffect(() => {
			if (i == Wc.wp.Menu && e && r) {
				t.current.TakeFocus();
			}
		}, [t, e, r, i]);
		return t;
	})(r);
	const s = q3(() => i.GetRunningApps());
	const c = rP();
	const m = c.IN_VR;
	const d = q3(() => i.GetStoreURL(c));
	const p = !m && r;
	rO_2(p);
	const { refForVRHover: g, bCollapsedVR: h } = (() => {
		const [e, t] = A.useState(false);
		const r = A.useRef(undefined);
		const n = A.useCallback(() => t(true), []);
		const i = A.useCallback(() => t(false), []);
		const a = A.useCallback(() => {
			window.clearTimeout(r.current);
		}, []);
		const s = A.useCallback(() => {
			window.clearTimeout(r.current);
			r.current = window.setTimeout(n, Bu);
		}, [n]);
		const o = A.useCallback(() => {
			window.clearTimeout(r.current);
			r.current = window.setTimeout(n, Su);
		}, [n]);
		const l = A.useCallback(() => {
			window.clearTimeout(r.current);
			r.current = window.setTimeout(i, wu);
		}, [i]);
		A.useEffect(() => () => window.clearTimeout(r.current), []);
		const c = [
			AX(a),
			xA("mouseup", s),
			xA("mouseenter", o),
			xA("mouseleave", l),
		];
		return {
			refForVRHover: Ue_1(...c),
			bCollapsedVR: !e,
		};
	})();
	const f = gn_2();
	const b = m ? h : f;
	const y = C2();
	const B = o.oy.BIsInOOBE;
	const v = Sn_1();
	const I = u6();
	const E = A_1(
		du.Menu,
		r && du.Open,
		b && du.Collapsed,
		m && du.VR,
		I && du.IsVirtualKeyboardShown,
	);
	const M = A.useCallback(() => i.SetFocusedApp(null), [i]);
	const T = YN(Wc.wp.Menu);
	const { tabsProto: R, bShowVRSettingsAsActiveInMainMenu: k } = ML();
	const D = R?.tabs?.find(
		(e) => e.tab_id != null && e.tab_id == R?.vr_settings_tab_id,
	);
	const N = D?.tab_id;
	const F = m && (D?.visible_in_dashboard_bar || D?.visible_in_dashboard_menu);
	const O = A.useCallback(() => {
		mu.p.SteamVR.DashboardTabClicked({
			tab_id: N,
		});
	}, [N]);
	return A.createElement(
		C.Z,
		{
			ref: g,
			navRef: a,
			"flow-children": "column",
			className: E,
			onFocusWithin: T,
			navEntryPreferPosition: Va.iU.PREFERRED_CHILD,
			..._._k,
		},
		s.map((e) =>
			A.createElement(fu, {
				key: e.appid,
				app: e,
				suppressActiveState: k,
			}),
		),
		s.length > 0 &&
			A.createElement("div", {
				className: du.RunnningAppSeparator,
			}),
		t &&
			A.createElement(
				_u,
				{
					route: n.BV.Library.Home(),
					label: Localize("#MainTabsHome"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(st.Home, null),
			),
		!t &&
			A.createElement(
				_u,
				{
					route: n.BV.GamepadUI.Login(),
					label: Localize(B ? "#MainTabsOOBE" : "#MainTabsLogin"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(st.Home, null),
			),
		t &&
			A.createElement(
				_u,
				{
					route: n.BV.Library.Root(),
					exactRouteMatch: true,
					label: Localize("#MainTabsLibrary"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(st.Library, null),
			),
		t &&
			A.createElement(
				_u,
				{
					route: n.BV.GamepadUI.SteamWeb(),
					routeState: {
						url: d,
					},
					label: Localize("#MainTabsStore"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(st.Store, null),
			),
		t &&
			A.createElement(
				_u,
				{
					route: n.BV.GamepadUI.Chat(),
					label: Localize("#MainTabsChat"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(st.Friends, null),
			),
		t &&
			A.createElement(
				_u,
				{
					route: n.BV.Media.Grid(),
					label: Localize("#MainTabsMedia"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(st.MediaGallery, null),
			),
		t &&
			A.createElement(
				_u,
				{
					route: n.BV.Downloads(),
					label: Localize("#MainTabsDownload"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(st.Download, null),
			),
		v &&
			A.createElement(
				_u,
				{
					route: n.BV.Console(),
					label: Localize("#Menu_Console"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(
					"div",
					{
						className: du.ConsoleButton,
					},
					">_",
				),
			),
		t &&
			A.createElement(
				_u,
				{
					route: n.BV.Settings.Root(),
					label: m
						? Localize("#MainTabsSteamSettings")
						: Localize("#MainTabsSettings"),
					onFocus: M,
					suppressActiveState: k,
				},
				y
					? A.createElement(st.SteamdeckUpdate, null)
					: A.createElement(st.Settings, null),
			),
		F &&
			A.createElement(
				Cu,
				{
					active: k,
					action: O,
					label: Localize("#MainTabsVRSettings"),
					onFocus: M,
				},
				A.createElement(st.VR, null),
			),
		B &&
			A.createElement(
				_u,
				{
					route: n.BV.GamepadUI.Setup(),
					label: Localize("#Help"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(st.Help, null),
			),
		!t &&
			A.createElement(
				_u,
				{
					route: n.BV.GamepadUI.About(),
					label: Localize("#MainTabsAbout"),
					onFocus: M,
					suppressActiveState: k,
				},
				A.createElement(st.Information, null),
			),
		!m &&
			A.createElement(
				Cu,
				{
					action: Mu,
					label: Localize("#Power"),
					onFocus: M,
				},
				A.createElement(st.Power, null),
			),
		t &&
			m &&
			A.createElement(Iu, {
				onFocus: M,
				bShowVRSettingsAsActiveInMainMenu: k,
			}),
		A.createElement("div", {
			className: du.FooterBoxShadow,
		}),
	);
}
function Iu(e) {
	const { onFocus: t, bShowVRSettingsAsActiveInMainMenu: r } = e;
	const i = L4();
	return A.createElement(
		_u,
		{
			route: n.BV.GamepadUI.Account(),
			label: i ?? Localize("#Menu_Account"),
			onFocus: t,
			suppressActiveState: r,
		},
		A.createElement(yu, null),
	);
}
function Eu(e, t) {
	const r = W6();
	const n = K1_2();
	return A.useCallback(() => {
		r.push(e, {
			force: Math.random(),
			...(t || {}),
		});
		n();
	}, [r, e, t, n]);
}
function Mu(e) {
	o.oy.OpenPowerMenu(e);
}
function Du(e) {
	const t = A.useMemo(
		() => ({
			OnContextMenu: Nu,
			HasContextMenu: Fu,
		}),
		[],
	);
	if (rP().IN_VR) {
		return A.createElement(
			ku.el.Provider,
			{
				value: t,
			},
			e.children,
		);
	} else {
		return e.children;
	}
}
function Nu(e, t) {
	const r = e.GetActiveActionDescriptions();
	const n = Object.keys(nt.g4)
		.filter((e) => isNaN(Number(e)))
		.map((e) => ck(nt.g4[e]))
		.filter((e) => r[e])
		.map((e) => ({
			button: e,
			description: r[e],
		}));
	if (n.length === 0) {
		return false;
	}
	if (n.length === 1 && n[0].button == je.pR.START) {
		return false;
	}
	t.preventDefault();
	t.stopPropagation();
	const i = [];
	for (const t of n) {
		const r = (r) => {
			o.oy.NavigationManager.DispatchVirtualButtonClick(t.button, e.Element);
			r.preventDefault();
			r.stopPropagation();
		};
		i.push(
			A.createElement(
				N.kt,
				{
					onSelected: r,
				},
				t.description,
			),
		);
	}
	lX(A.createElement(N.tz, null, i), t, {
		bRootContextMenu: true,
	});
	return true;
}
function Fu(e) {
	if (e?.GetFocusable() !== "self") {
		return false;
	}
	const t = e.GetActiveActionDescriptions();
	return Object.values(t).filter((e) => !!e).length > 0;
}
function Ou() {
	return A.useMemo(
		() => (e) => {
			const {
				refNavTree: t,
				className: r,
				active: n,
				children: i,
				modalKey: a,
			} = e;
			const s = A.useRef(null);
			O7(s, n, true);
			const o = Ue_1(s, t);
			return A.createElement(
				g.B2,
				{
					className: r,
					navTreeRef: o,
					modal: true,
					enabled: n,
					navID: `ModalDialogOverlay_${a}`,
				},
				i,
			);
		},
		[],
	);
}
const xu = PA((e) => {
	const { children: t } = e;
	const [r, n] = A.useState();
	const [i, a] = A.useState();
	const s = A.useRef(true);
	const l = $2();
	A.useEffect(() => {
		if (i) {
			return l.InitGamepadApplicationUI(i);
		}
	}, [l, i]);
	const c = W6();
	const m = A.useCallback(() => {
		if (l?.IsVRWindow()) {
			if (s.current) {
				s.current = false;
			} else if (l.BCanPopVRDashboardForCurrentPath()) {
				c_1(l.GetMainVROverlayKey());
			} else {
				SteamClient.OpenVR?.VROverlay?.SwitchToDashboardOverlay(
					l.GetMainVROverlayKey(),
				);
			}
		}
		h5(() => {
			if (l.BHasMenus()) {
				l.MenuStore.ClearLastRequestedSideMenu();
			}
			if (r) {
				r.Activate();
			} else {
				console.warn("FocusApplicationRoot called before root mounted");
			}
		});
	}, [r, l]);
	A.useEffect(() => l.InitNavigation(c, m), [l, c, m]);
	const u = R7()?.ownerWindow || window;
	const d = A.useCallback((e) => {
		if (e.key == "Enter" && e.altKey) {
			e.preventDefault();
			e.stopPropagation();
			if (!Pr_1()) {
				o.oy.WindowStore.GamepadUIMainWindowInstance.BrowserWindow.SteamClient.Window.Minimize();
			}
			SteamClient.UI.ExitBigPictureMode();
		}
	}, []);
	l6(u, "keydown", d, {
		capture: true,
	});
	return A.createElement(
		y.kd,
		null,
		A.createElement(
			ru.rc,
			{
				fnFocusNavigationRoot: m,
			},
			A.createElement(
				"div",
				{
					id: "MainNavMenu-Rest",
					"flow-children": "row",
					className: E.MainNavMenuMainSplit,
				},
				l.BHasMenus() &&
					A.createElement(Uu, {
						ModalManager: i,
					}),
				A.createElement(Wu, {
					refNavTreeRoot: n,
					refModalManager: a,
				}),
				l.BIsGamepadApplicationUIInitialized() &&
					A.createElement(Xm, {
						bQuickAccessFooter: false,
					}),
				A.createElement(Ru.Y, null),
			),
			t,
		),
	);
});
const Uu = PA((e) => {
	const { ModalManager: t } = e;
	const r = ch_2().GetOpenSideMenu();
	const i = qw().BHasCurrentUser();
	const a = rP();
	const s = w_2();
	const o = OU(n.BV.GamepadUI.AppRunning());
	const l = K1_2();
	if (!t) {
		return null;
	}
	if (a.IN_VR) {
		return A.createElement(
			A.Fragment,
			null,
			A.createElement(hu, {
				loggedIn: i,
				ModalManager: t,
			}),
		);
	}
	if (s) {
		const e = r == Ll.Ez.Main || (r == Ll.Ez.QuickAccess && !o);
		return A.createElement(
			A.Fragment,
			null,
			A.createElement(Hm.H, {
				appearance: "darkblur",
				visible: e,
				onClick: l,
			}),
			A.createElement(gu, {
				loggedIn: i,
				active: r == Ll.Ez.Main,
				ModalManager: t,
			}),
			A.createElement(Tu.pZ, {
				active: r == Ll.Ez.QuickAccess,
				ModalManager: t,
			}),
		);
	}
	return A.createElement(
		A.Fragment,
		null,
		A.createElement(pu, {
			loggedIn: i,
			active: r == Ll.Ez.Main,
			ModalManager: t,
		}),
		A.createElement(Tu.Gt, {
			active: r == Ll.Ez.QuickAccess,
			ModalManager: t,
		}),
	);
});
const Wu = PA((e) => {
	const t = Ll_2(o.oy.BIsTransparentBackgroundPath);
	const r = (() => {
		const e = A.useCallback((e) => {
			const t = B6(e, [
				n.BV.GamepadUI.ControllerConfigurator.Root(),
				n.BV.GamepadUI.ColorSettings(),
				n.BV.GamepadUI.Chat(),
			]);
			const r = B6(e, [
				n.BV.GamepadUI.ControllerConfigurator.ChooseConfiguration.Root(),
			]);
			return t && !r;
		}, []);
		return Ll_2(e);
	})();
	const i = A_1(
		E.BasicHome,
		t && E.TransparentBackground,
		!t && E.OpaqueBackground,
		r && E.TrueBlackBackground,
	);
	const a = oH_2();
	const l = $2();
	let m = `GamepadUI${l.IsVRWindow() ? "_VR" : ""}_${Ve._5[a.mode]}${
		a.forcedAppID ? `_${a.forcedAppID}` : ""
	}_Root`;
	if (l?.IsVRSimulatedOnDesktopWindow()) {
		m += "_simulated";
	}
	const u = a_1();
	const d = Ue_1(u, e.refNavTreeRoot);
	const f = c.yE.GetActiveLockScreenProps();
	const y = on_2();
	const B = A.useCallback(() => l.MenuStore.OpenMainMenu(), [l]);
	const v = LB(window, B);
	const I = yq();
	const T = rP().IN_VR;
	(() => {
		const e = br_2();
		A.useEffect(() => {
			const t = (t, r, n) => {
				const i = parseInt(r);
				e.AppProperties(i, n);
			};
			const r = SteamClient.Messaging.RegisterForMessages("AppProperties", t);
			return () => r.unregister();
		}, [e]);
	})();
	return A.createElement(
		g.B2,
		{
			navID: m,
			navTreeRef: d,
			id: "Header.Main.Footer",
			"flow-children": "column",
			className: i,
			onCancelButton: a.mode == Ve._5.Overlay ? I : v,
			onGlobalButtonDown: y,
		},
		A.createElement(
			Du,
			null,
			A.createElement(
				Vu,
				{
					refModalManager: e.refModalManager,
					instance: l,
				},
				l.BIsGamepadApplicationUIInitialized() &&
					A.createElement(
						b.tH,
						null,
						T ? A.createElement(U.YF, null) : A.createElement(U.Y9, null),
						A.createElement(
							h.q,
							null,
							A.createElement(
								C.Z,
								{
									id: "Main",
									autoFocus: true,
									className: E.Content,
									onMoveUp: _.W7,
								},
								A.createElement(
									b.tH,
									null,
									f
										? A.createElement(s.kG, {
												...f,
											})
										: A.createElement(xm, null),
									A.createElement(zu.ve, null),
									!f && A.createElement(zu._p, null),
								),
							),
						),
					),
			),
		),
	);
});
function Vu(e) {
	const { instance: t, refModalManager: r } = e;
	const n = A.useCallback(
		(e) => {
			if (e) {
				e.SetUsePopups(false);
				let r = [
					e.RegisterOnModalShownCallback(() =>
						D.eZ.PlayNavSound(D.PN.ShowModal),
					).Unregister,
					e.RegisterOnModalHiddenCallback(() =>
						D.eZ.PlayNavSound(D.PN.HideModal),
					).Unregister,
				];
				if (t?.IsVRWindow()) {
					r.push(
						e.RegisterOnModalShownCallback(() => c_1(t.GetMainVROverlayKey()))
							.Unregister,
					);
				}
				return () => r.forEach((e) => e());
			}
		},
		[t],
	);
	const i = Ue_1(n, r);
	const a = QS(
		(e) => {
			if (t.IsMainGamepadUIWindow() || t.IsVRWindowInGamescope()) {
				rt.XX.SetMenuManager(window, e);
				return () => rt.XX.SetMenuManager(window, undefined);
			}
		},
		[t],
	);
	const s = Ou();
	return A.createElement(
		Pu.EO,
		{
			className: A_1(E.GamepadDialogOverlay, "GamepadMode"),
			bUseDialogElement: false,
			DialogWrapper: s,
			ContextMenuComponent: V,
			refModalManager: i,
			refContextMenuManager: a,
		},
		e.children,
	);
}
const Hu = PA((e) => {
	const t = A.useRef(undefined);
	const r = o.oy.ActiveNavigationSourceType != je.Vz.MOUSE;
	const n = (() => {
		let e = $2();
		const t = A.useRef({
			x: 0,
			y: 0,
		});
		const r = A.useCallback((e) => {
			t.current.x = e.clientX;
			t.current.y = e.clientY;
		}, []);
		l6(e.BrowserWindow, "mousemove", r);
		return t;
	})();
	A.useLayoutEffect(() => {
		if (t.current) {
			if (r) {
				const e = GetTotalZoom(t.current);
				t.current.style.display = null;
				t.current.style.top = `${n.current.y / e}px`;
				t.current.style.left = `${n.current.x / e}px`;
			} else {
				t.current.style.display = "none";
			}
		}
	}, [r, t, n]);
	return A.createElement(
		"div",
		{
			style: {
				position: "absolute",
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				contain: "layout",
				pointerEvents: "none",
			},
		},
		A.createElement("div", {
			ref: t,
			id: "MouseHoverBlockerHack",
			style: {
				position: "absolute",
				width: 1,
				height: 1,
				marginLeft: -0.5,
				marginTop: -0.5,
				background: "transparent",
				pointerEvents: "all",
			},
		}),
	);
});
function qu(e) {
	const t = Qc_2().bShutdownRequested;
	return A.createElement(
		Ml.j,
		null,
		t &&
			A.createElement(
				A.Fragment,
				null,
				Localize("#Steam_Shutdown_Out_Of_Battery"),
				A.createElement("br", null),
			),
		((e) => {
			switch (e.eShutdownState) {
				case 2: {
					let t = $e.tw.GetAppOverviewByAppID(e.appid);
					return Localize("#Steam_Shutdown_Waiting_For_Game", t?.display_name);
				}
				case 4: {
					return Localize("#Steam_Shutdown_Finishing_Download");
				}
				case 5: {
					let t = $e.tw.GetAppOverviewByAppID(e.appid);
					return Localize(
						"#Steam_Shutdown_Waiting_For_Download",
						t?.display_name,
					);
				}
				case 3: {
					return Localize("#Steam_Shutdown_Waiting_For_Cloud");
				}
				case 7: {
					return Localize("#Steam_Shutdown_Waiting_For_Logoff");
				}
			}
			return Localize("#Steam_Shutdown_Generic");
		})(e),
	);
}
const Yu = Zu;
function ed(e) {
	const { className: t, style: r, ResponsiveRecorderProps: n, children: i } = e;
	const a = we_2();
	A.useEffect(
		() =>
			fm_2(() => {
				const e = a.BShowHeader() ? E.HeaderHeightVisible : "0px";
				let t = Number.parseFloat(e);
				if (!Number.isFinite(t)) {
					t = 0;
				}
				a.m_flCurrentHeaderHeight = t;
			}),
		[a],
	);
	if (n) {
		return A.createElement(
			$u.b,
			{
				style: r,
				className: t,
				...n,
			},
			i,
		);
	} else {
		return A.createElement(
			"div",
			{
				style: r,
				className: t,
			},
			i,
		);
	}
}
function rd(e) {
	if (q3(() => Ku.Lc.Get().ContinuouslyRender)) {
		return A.createElement("div", {
			className: E.ContinuousRenderPixel,
		});
	} else {
		return null;
	}
}
export const Is = PA((e) => {
	const [t, r] = A.useState(true);
	const [n, s] = A.useState({
		libraryWidth: 0,
		libraryHeight: 0,
	});
	const l = Wx();
	const d = $2();
	const p = A.useCallback(
		(e) => {
			if (e.eTouchGesture === 5) {
				const t = d.BrowserWindow?.document.elementFromPoint(e.x, e.y);
				t?.dispatchEvent(
					new MouseEvent("contextmenu", {
						bubbles: true,
					}),
				);
			}
		},
		[d.BrowserWindow],
	);
	A.useEffect(() => {
		if (!Fj(d.BrowserWindow, "Browser.RegisterForGestureEvents")) {
			return;
		}
		const e = d.BrowserWindow.SteamClient.Browser.RegisterForGestureEvents(p);
		return () => e.unregister();
	}, [p, d.BrowserWindow]);
	A.useEffect(() => {
		r(false);
	}, []);
	let g = (() => {
		const e = we_2();
		const t = q3(() => e.m_flCurrentHeaderHeight);
		const r = SA();
		const n = q3(() => r.m_flCurrentFooterHeight);
		return {
			"--basicui-header-height": `${t}px`,
			"--gamepadui-current-footer-height": `${n}px`,
		};
	})();
	const h = rP();
	const C = Qc_2();
	const _ = w.TS.IN_GAMESCOPE;
	if (t || !qw().BFinishedInitStageOne()) {
		if (e.bPlayingStartupMovie) {
			return null;
		} else {
			return A.createElement(Ml.j, {
				background: "black",
			});
		}
	}
	if (o.oy.BIsShuttingDown()) {
		const e = o.oy.GetShutdownState();
		return A.createElement(qu, {
			eShutdownState: e.eShutdownState,
			appid: e.appid,
		});
	}
	const f = B.v3.GetChordHintVisible();
	const v = A_1(
		"BasicUI",
		"GamepadMode",
		E.BasicUiRoot,
		h.IN_VR && E.VR,
		!_ && e.mode == Ve._5.Full && E.BlackBackground,
		C.bHasBattery && C.eACState == 1 && "BatteryPower",
	);
	if (e.mode == Ve._5.StandaloneKeyboard) {
		const t = we.rV.settings?.flCurrentDisplayScaleFactor ?? 1;
		g.zoom = 1.5 / t;
		w_4(!e.children, "Standalone keyboard doesn't support children");
		return A.createElement(
			Ve.Fq,
			{
				mode: e.mode,
			},
			A.createElement(
				ed,
				{
					className: A_1(v),
					style: g,
				},
				A.createElement(
					y.kd,
					null,
					A.createElement(
						"div",
						{
							id: "MainNavMenu-Rest",
							"flow-children": "row",
							className: E.MainNavMenuMainSplit,
						},
						A.createElement(Ru.Y, null),
						A.createElement(sd, null),
					),
				),
				A.createElement(a.Xw, {
					visible: f,
				}),
				A.createElement(Hu, null),
			),
			A.createElement(rd, null),
		);
	}
	if (e.mode == Ve._5.ControllerConfigurator) {
		return A.createElement(
			Ve.Fq,
			{
				mode: e.mode,
				forcedAppID: e.forcedAppID,
			},
			A.createElement(
				ed,
				{
					className: A_1(
						v,
						o.oy.ShouldZoomStandaloneConfigurator && E.StandaloneConfigurator,
					),
					style: g,
				},
				A.createElement(xu, null, e.children),
				A.createElement(a.Xw, {
					visible: f,
				}),
				A.createElement(Hu, null),
			),
			A.createElement(rd, null),
		);
	}
	const I = {
		breakNarrow: [parseInt(Yu.GamepadUIBreakNarrow), "NarrowWindow"],
		breakWide: [parseInt(Yu.GamepadUIBreakWide), "WideWindow"],
		breakShort: [parseInt(Yu.GamepadUIBreakShort), "ShortWindow"],
		strMedium: "MediumWindow",
		fnDimensionsChanged: (e, t) => {
			s({
				libraryWidth: e,
				libraryHeight: t,
			});
		},
	};
	const M = c.yE.IsLockScreenActive();
	const T = !e.bPlayingStartupMovie && !M;
	return A.createElement(
		Ve.Fq,
		{
			mode: e.mode,
			forcedAppID: e.forcedAppID,
		},
		A.createElement(
			Er.g.Provider,
			{
				value: n,
			},
			A.createElement(
				ed,
				{
					className: A_1(v),
					style: g,
					ResponsiveRecorderProps: I,
				},
				A.createElement(
					xu,
					null,
					T &&
						A.createElement(
							b.tH,
							null,
							A.createElement(td.Y, {
								appid: e.forcedAppID,
							}),
						),
					A.createElement(b.tH, null, e.children),
				),
				A.createElement(
					b.tH,
					null,
					A.createElement(a.Xw, {
						visible: f,
					}),
				),
				A.createElement(b.tH, null, A.createElement(i.vR, null)),
				A.createElement(b.tH, null, A.createElement(ad, null)),
				!h.IN_VR && A.createElement(Hu, null),
				e.bPlayingStartupMovie &&
					A.createElement(g3, {
						fnCancelStartupMove: e.fnCancelStartupMove,
					}),
			),
		),
		A.createElement(rd, null),
		A.createElement(Qu.Zi, null),
		l && A.createElement(Ju.x, null),
	);
});
export function g3(e) {
	const { fnCancelStartupMove: t } = e;
	const r = A.useCallback(
		(e) => {
			switch (e) {
				case je.pR.OK:
				case je.pR.CANCEL:
				case je.pR.SECONDARY:
				case je.pR.OPTIONS:
				case je.pR.BUMPER_LEFT:
				case je.pR.BUMPER_RIGHT:
				case je.pR.TRIGGER_LEFT:
				case je.pR.TRIGGER_RIGHT:
				case je.pR.SELECT:
				case je.pR.START:
				case je.pR.LSTICK_CLICK:
				case je.pR.RSTICK_CLICK:
				case je.pR.LPAD_CLICK:
				case je.pR.RPAD_CLICK:
				case je.pR.STEAM_GUIDE:
				case je.pR.STEAM_QUICK_MENU: {
					t();
				}
			}
			return true;
		},
		[t],
	);
	const n = A.useCallback(
		(e) => {
			t();
		},
		[t],
	);
	A.useEffect(() => {
		o.oy.NavigationManager.SetCatchAllGamepadInput(r);
		o.oy.ActiveWindowInstance?.BrowserWindow?.addEventListener("mousedown", n);
		return () => {
			o.oy.NavigationManager.SetCatchAllGamepadInput(undefined);
			o.oy.ActiveWindowInstance?.BrowserWindow?.removeEventListener(
				"mousedown",
				n,
			);
		};
	}, [r, n]);
	return null;
}
function ad() {
	const e = W6();
	A.useEffect(() => {
		if (
			!B6(e.location.pathname, n.BV.GamepadUI.Login()) ||
			!c.yE.GetSettings().bLockOnLogin
		) {
			if (c.yE.GetSettings().bLockOnWake) {
				Di_1({
					preventCancel: true,
					preventSteamButtons: true,
				});
			}
		}
	}, []);
	return null;
}
const sd = PA(() => {
	const e = A_1(E.BasicHome, E.TransparentBackground);
	const t = A.useCallback(() => {}, []);
	const r = FN({
		onKeyboardNavOut: t,
	});
	const n = A.useCallback((e) => {
		if (!e) {
			SteamClient.Input.StandaloneKeyboardDismissed();
		}
	}, []);
	const i = D7();
	dv(n);
	i.SetDismissOnEnterKey(false);
	A.useEffect(() => {
		r.ShowVirtualKeyboard();
		return () => r.BIsActive() && r.HideVirtualKeyboard();
	}, [r]);
	const a = LB(window, () => {});
	return A.createElement(
		g.B2,
		{
			navID: "root-StandaloneKeyboard",
			id: "Header.Main.Footer",
			"flow-children": "column",
			className: e,
			onCancelButton: a,
		},
		A.createElement(
			b.tH,
			null,
			A.createElement(
				h.q,
				null,
				A.createElement(C.Z, {
					id: "Main",
					autoFocus: true,
					className: E.Content,
					onMoveUp: _.W7,
				}),
			),
		),
	);
});
export function RT(e) {
	return A.createElement(
		b.tH,
		null,
		A.createElement(v.I, null, A.createElement(f.J1, null, e.children)),
	);
}
