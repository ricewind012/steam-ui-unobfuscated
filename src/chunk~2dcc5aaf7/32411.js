import {
	Localize,
	LocalizeInlineReactWithFallback,
	LocalizePlural,
	LocalizeReact,
	LocalizationManager,
	LocalizeDateHumanReadable,
	LocalizeCalendarTime,
} from "../../actual_src/utils/localization.js";

import { LocalizeTimeRemaining } from "../../actual_src/utils/localization/datetime.js";
import {
	GetOwningWindowForEvent,
	GetOwningWindowForElement,
} from "../../actual_src/utils/domutils.js";
import n, { tf, bG, Qt as Qt_1, jB, jb, VT, Qx } from "./18057.js";
import i, { tn as tn_1, br as br_1 } from "./18869.js";
import a from "./81994.js";
import s from "./61175.js";
import o, { no, TO } from "./60021.js";
import l, { VI } from "./34792.js";
import c, { qw, QR, KC, gK } from "./89748.js";
import m, { Sn as Sn_1 } from "./46422.js";
import u from "./87935.js";
import d, {
	useState,
	useEffect,
	useCallback,
	useRef,
	createContext,
	useContext,
	forwardRef,
} from "./63696.js";
import A, { q3 } from "./90095.js";
import p, { A as A_1 } from "./90765.js";
import g, { zM, MD, B7 } from "./97893.js";
import h from "./48130.js";
import C from "./50376.js";
import _, { lX } from "./31084.js";
import f, { aE } from "./88750.js";
import y, { l9, yp, Wp, dF, oA, Wf } from "./5640.js";
import S from "./19696.js";
import w, { R7 } from "./11131.js";
import B from "./88607.js";
import v, { cM } from "./50341.js";
import I, { wN, Tt as Tt_1, Yk } from "./89411.js";
import E from "./63367.js";
import M from "./88696.js";
import R, { dm } from "./34428.js";
import k, { eV, l6, L$, Sz, Fd, hL as hL_1, QS } from "./52451.js";
import D from "./52698.js";
import N from "./39941.js";
import F from "./8573.js";
import G from "./69740.js";
import O from "./39437.js";
import se, { Co } from "./96593.js";
import oe from "./91486.js";
import { U as U_1 } from "./83184.js";
import ce from "./60988.js";
import { zv, KV } from "./46382.js";
import de, { Y2, CI, hf, Qn as Qn_1, td, IW, rP, Pr as Pr_1 } from "./72476.js";
import { wT } from "./28934.js";
import pe from "./98995.js";
import ye from "./3475.js";
import { bg } from "./68292.js";
import { r } from "./37905.js";
import { Ux, ey } from "./38542.js";
import ve, { Bh, L4, wI } from "./48289.js";
import { LoginStore } from "../../actual_src/stores/loginstore.js";
import Ee, { Pb } from "./13661.js";
import Me, { bI } from "./75001.js";
import { ht as ht_2 } from "./63259.js";
import Re, { fm, Gn as Gn_2, mJ, EW } from "./89193.js";
import { gb, FJ } from "./45967.js";
import De from "./35488.js";
import Ne from "./21459.js";
import Ge, { fK, VA } from "./10294.js";
import Oe from "./42318.js";
import { BGameRecordingFeatureEnabled } from "./4069.js";
import Je, { W5, zy, g as g_3, B6, y as y_2, W6 } from "./49519.js";
import $e from "./81220.js";
import { yq, kV } from "./93966.js";
import ht, { PA } from "./41230.js";
import Ct from "./15521.js";
import { rO } from "./88724.js";
import ft from "./17231.js";
import bt from "./54946.js";
import { jE } from "./3715.js";
import { I as I_3 } from "./61416.js";
import { n as n_2 } from "./26667.js";
import Bt from "./12176.js";
import vt, { sf, ID, DO } from "./44846.js";
import Tt, { M as M_3 } from "./51517.js";
import Rt from "./29629.js";
import Ft, { ZT, Xm, zF } from "./60917.js";
import Gt from "./11521.js";
import Ot from "./11374.js";
import Pt from "./23953.js";
import { tx } from "./23783.js";
import xt from "./91745.js";
import { V8, kE } from "./655.js";
import { l as l_2 } from "./47742.js";
import { q as q_2 } from "./99235.js";
import Ht, { pg, HT, mK } from "./13869.js";
import jt from "./10606.js";
import qt, { I as I_1 } from "./91325.js";
import _r from "./32661.js";
import fr from "./47060.js";
import br, { Cg } from "./34629.js";
import yr from "./60712.js";
import wr from "./36141.js";
import Br from "./74491.js";
import vr from "./96000.js";
import Ir from "./52958.js";
import Er from "./49171.js";
import Mr from "./88244.js";
import Tr, { YQ, aH, jF } from "./30496.js";
import Rr from "./23038.js";
import kr from "./58254.js";
import Dr, { OQ } from "./31958.js";
import Nr from "./14663.js";
import Fr from "./10709.js";
import Gr from "./40478.js";
import Or, { $P } from "./14629.js";
import Pr from "./48866.js";
import Lr from "./33000.js";
import { sp } from "./31706.js";
import xr from "./42805.js";
import Ur from "./79421.js";
import Wr from "./64608.js";
import Vr from "./90242.js";
import jr, { wf } from "./32598.js";
import qr from "./6356.js";
import Qr from "./15983.js";
import Xr from "./47979.js";
import Jr from "./97211.js";
import rn from "./98748.js";
import an from "./34348.js";
import on from "./46217.js";
import ln from "./69164.js";
import cn from "./45426.js";
import { Xe as Xe_2 } from "./36934.js";
import Cn from "./4405.js";
import wn from "./59351.js";
import Bn from "./66127.js";
import vn from "./50797.js";
import Yn from "./68120.js";
import Kn from "./32998.js";
import Xn from "./29547.js";
import Jn from "./15489.js";
import $n from "./19151.js";
import ni from "./24892.js";
import ai from "./92426.js";
import oi from "./12774.js";
import hi from "./94884.js";
import bi from "./31512.js";
import wi from "./80100.js";
import vi from "./81668.js";
import Ii from "./26271.js";
import Ei from "./57016.js";
import Mi from "./88341.js";
import Ti from "./12767.js";
import Ri from "./26853.js";
import { JS } from "./98670.js";
import Di, { zq } from "./5808.js";
import Ni from "./11123.js";
import Gi from "./70334.js";
import { c as c_3 } from "./38837.js";
import Li from "./6162.js";
import Wi from "./3639.js";
import Hi from "./4584.js";
import ji from "./18339.js";
import Yi from "./56337.js";
import { A as A_3 } from "./10711.js";
import { g as g_1 } from "./23393.js";
import ta from "./39287.js";
import na from "./70623.js";
import la from "./59298.js";
import ca from "./68483.js";
import Aa from "./92749.js";
import pa from "./7868.js";
import _a from "./16139.js";
import fa from "./7558.js";
import ba from "./88431.js";
import Ta from "./85166.js";
import ka from "./20797.js";
import { T } from "./78057.js";
import Na from "./92031.js";
import { JV, i5 } from "./45387.js";
import za from "./17391.js";
import Ua from "./83665.js";
import Va from "./223.js";
import "./79293.js";
import Ja from "./48197.js";
import { $2 } from "./96680.js";
import es from "./3524.js";
import { D as D_2 } from "./24590.js";
import rs from "./73375.js";
import ns from "./91435.js";
import { Ju } from "./3673.js";
import as from "./27773.js";
import ss from "./72345.js";
import { Jg } from "./85175.js";
import ls from "./84108.js";
import cs from "./34461.js";
import ms, { c as c_1 } from "./23600.js";
import us from "./56655.js";
import "./16647.js";
import { M as M_1 } from "./1756.js";
import { b } from "./57337.js";
import ps from "./3392.js";
import { w as w_2 } from "./10501.js";
const P = {
	3: function (e) {
		const { onRequestClose: t } = e;
		return d.createElement(
			j,
			{
				actions: [
					{
						label: Localize("#Generic_Close"),
						onClick: t,
					},
				],
			},
			d.createElement(
				"div",
				{
					className: O.CheckingForUpdates,
				},
				d.createElement(te, null),
				d.createElement(Z, null, Localize("#ClientUpdate_Checking")),
			),
		);
	},
	5: function (e) {
		const { updater: t, onRequestClose: r } = e;
		const n = [
			{
				label: Localize("#ClientUpdate_ApplyAndRestart"),
				disabled: true,
			},
			{
				label: Localize("#ClientUpdate_Defer"),
				disabled: true,
				onClick: r,
			},
		];
		const i = wN();
		const a = t.GetProgressPercent() ?? 0;
		const s = dm(t.GetCurrentBytes(), {
			nDigitsAfterDecimal: 1,
		});
		const o = dm(parseInt(t.m_updateState?.progress?.stage_size_bytes) ?? 0, {
			nDigitsAfterDecimal: 1,
		});
		return d.createElement(
			j,
			{
				actions: n,
			},
			d.createElement($, {
				bytesDownloadedLabel: s,
				bytesTotalLabel: o,
				percentProgress: a,
				secondsRemaining: i,
			}),
		);
	},
	4: function (e) {
		const { updater: t, onError: r, onRequestClose: n } = e;
		const i = [
			{
				label: Localize("#ClientUpdate_Download"),
				onClick: () =>
					t.ApplyUpdate(t.GetAvailableTypes(), ({ eResult: e }) =>
						Promise.resolve(
							r({
								eResult: e,
								phase: "applying",
							}),
						),
					),
			},
			{
				label: Localize("#ClientUpdate_Defer"),
				onClick: n,
			},
		];
		return d.createElement(
			j,
			{
				actions: i,
			},
			d.createElement(
				K,
				null,
				d.createElement(
					Z,
					null,
					LocalizeInlineReactWithFallback(
						"#ClientUpdate_AvailableAndPatchNotes",
						d.createElement(U, null),
					),
				),
				d.createElement(Y, null, Localize("#ClientUpdate_Available_Prompt")),
			),
		);
	},
	6: W,
	7: W,
	8: W,
	2: function (e) {
		const { onRequestClose: t, foundUpdateHint: r } = e;
		const n = r ? "#ClientUpdate_NowUpToDate" : "#ClientUpdate_AlreadyUpToDate";
		eV(() => r && t(), 10000, [r]);
		return d.createElement(
			j,
			{
				actions: [
					{
						label: Localize("#Generic_Close"),
						onClick: t,
					},
				],
			},
			d.createElement(
				Z,
				null,
				LocalizeInlineReactWithFallback(
					n,
					d.createElement(U, {
						onClick: () => {
							t();
						},
					}),
				),
			),
		);
	},
	0: null,
};
const L = {
	54: function (e) {
		return d.createElement(
			H,
			{
				...e,
			},
			Localize("#ClientUpdate_NotEnoughSpace"),
		);
	},
	40: function (e) {
		0;
		return d.createElement(V, {
			...e,
		});
	},
};
const z = () => {
	const [e, t] = useState(0);
	useEffect(
		() =>
			E.Dt.RegisterForRunSteamURL(7, "checkforupdates", () => t((e) => e + 1))
				.unregister,
		[],
	);
	const [r, n] = (() => {
		const [e, t] = useState(false);
		useEffect(() => {
			const e = new M.A();
			e.GetString(J)
				.then((e) => {
					if (e === "1") {
						t(true);
					}
				})
				.finally(() => e.RemoveObject(J));
		}, []);
		return [e, useCallback(() => t(false), [])];
	})();
	useEffect(() => {
		if (r) {
			t((e) => e + 1);
		}
	}, [r]);
	const [i, a] = (() => {
		const [e, t] = useState(false);
		const r = q3(() => l.rV.settings.bIsInDesktopUIBeta);
		useEffect(() => {
			if (r) {
				const e = new D.g();
				e.GetString(re).then((r) => {
					if (r !== "1" && r !== "2") {
						e.StoreString(re, "1").then(() => t(true));
					}
				});
			}
		}, [r]);
		return [e, useCallback(() => t(false), [])];
	})();
	const [s, o] = (() => {
		const [e, t] = useState(false);
		const r = cM();
		const n = q3(() => l.rV.settings.bIsInDesktopUIBeta);
		useEffect(() => {
			if (!r && !n) {
				const e = new D.g();
				e.GetString(re).then((r) => {
					if (r === "1") {
						e.StoreString(re, "2").then(() => t(true));
					}
				});
			}
		}, [n, r]);
		return [e, useCallback(() => t(false), [])];
	})();
	if (i) {
		return d.createElement(ne, {
			active: i,
			onRequestClose: a,
		});
	} else if (s) {
		return d.createElement(ae, {
			active: s,
			onRequestClose: o,
		});
	} else {
		return d.createElement(x, {
			activationCount: e,
			onRequestClose: () => {
				t(0);
				n();
			},
			foundUpdateHint: r,
		});
	}
};
function x(e) {
	const { onRequestClose: t, activationCount: r, foundUpdateHint: n } = e;
	const i = Tt_1();
	const [a, s] = useState();
	useEffect(() => {
		if (r) {
			i.CheckForUpdates(({ eResult: e }) =>
				Promise.resolve(
					s({
						eResult: e,
						phase: "checking",
					}),
				),
			);
		}
	}, [r, i]);
	const o = i.m_updateState.state;
	const l = {
		onRequestClose: t,
		updater: i,
		errorState: a,
		onError: s,
		clearError: () => {
			s(undefined);
			i.CheckForUpdates(({ eResult: e }) =>
				Promise.resolve(
					s({
						eResult: e,
						phase: "checking",
					}),
				),
			);
		},
		foundUpdateHint: n,
	};
	const c = ((e, t) => {
		if (t) {
			return L[t.eResult] || V;
		} else {
			return P[e] || null;
		}
	})(o, a);
	return d.createElement(
		X,
		{
			active: !!r,
		},
		c
			? d.createElement(c, {
					...l,
				})
			: null,
	);
}
function U(e) {
	const { onClick: t, children: r } = e;
	const i = cM();
	const a = i || G.DU;
	const s = i ? G.Ro : undefined;
	const o = s ? F.b.InitFromClanID(s) : undefined;
	const [c, m] = VI("small_mode");
	const u = d.useCallback(() => {
		m(false);
		if (t) {
			t();
		}
	}, [t, m]);
	const A = tf(n.BV.Library.Home(), a, undefined, o, {
		event_type_filter: [12, 14],
	});
	return d.createElement(
		N.N_,
		{
			className: O.PatchNotesLink,
			to: A,
			onClick: u,
		},
		r,
	);
}
function W(e) {
	const { onRequestClose: t } = e;
	const r = [
		{
			label: Localize("#ClientUpdate_ApplyAndRestart"),
			onClick: () => {
				new M.A().StoreString(J, "1");
				SteamClient.User.StartRestart(false);
			},
		},
		{
			label: Localize("#ClientUpdate_Defer"),
			onClick: t,
		},
	];
	return d.createElement(
		j,
		{
			actions: r,
		},
		d.createElement(
			K,
			null,
			d.createElement(
				Z,
				null,
				LocalizeInlineReactWithFallback(
					"#ClientUpdate_AvailableAndPatchNotes",
					d.createElement(U, null),
				),
			),
			d.createElement(Y, null, Localize("#ClientUpdate_RestartPending_Prompt")),
		),
	);
}
function V(e) {
	const t = e.errorState?.phase === "checking";
	return d.createElement(
		H,
		{
			...e,
		},
		Localize(
			t
				? "#ClientUpdate_Checking_GenericError"
				: "#ClientUpdate_Applying_GenericError",
		),
	);
}
function H(e) {
	const { onRequestClose: t, clearError: r, children: n } = e;
	const i = [
		{
			label: Localize("#ClientUpdate_ErrorTryAgain"),
			onClick: r,
		},
		{
			label: Localize("#Generic_Close"),
			onClick: t,
		},
	];
	return d.createElement(
		j,
		{
			tone: "error",
			actions: i,
		},
		d.createElement(Z, null, n),
	);
}
function j(e) {
	const { children: t, actions: r, tone: n } = e;
	return d.createElement(
		q,
		{
			tone: n,
		},
		d.createElement(
			"div",
			{
				className: O.ActionAlert,
			},
			d.createElement(
				"div",
				{
					className: O.Content,
				},
				t,
			),
			d.createElement(
				"div",
				{
					className: O.Actions,
				},
				r.map(({ label: e, ...t }, r) =>
					d.createElement(
						Q,
						{
							key: r,
							...t,
						},
						e,
					),
				),
			),
		),
	);
}
function q(e) {
	const { tone: t } = e;
	const [r] = VI("small_mode");
	return d.createElement(
		"div",
		{
			className: A_1(O.Alert, t === "error" && O.Error, r && O.SmallMode),
		},
		e.children,
	);
}
function Q(e) {
	const { children: t, disabled: r, onClick: n } = e;
	return d.createElement(
		"div",
		{
			className: A_1(O.AlertButton, r && O.Disabled),
			onClick: r || n,
		},
		t,
	);
}
function Z(e) {
	return d.createElement(
		"div",
		{
			className: O.PrimaryMessage,
		},
		e.children,
	);
}
function Y(e) {
	return d.createElement(
		"div",
		{
			className: O.SecondaryMessage,
		},
		e.children,
	);
}
function K(e) {
	return d.createElement(
		"div",
		{
			className: O.MessageStack,
		},
		e.children,
	);
}
function X(e) {
	const { active: t, children: r } = e;
	const n = useRef(undefined);
	const [i, a] = useState(0);
	if (!i) {
		return d.createElement(
			"div",
			{
				ref: (e) => {
					if (e?.offsetHeight) {
						a(e?.offsetHeight);
					}
				},
				style: {
					position: "absolute",
					opacity: 0,
				},
			},
			r,
		);
	}
	const s = {
		transition: "opacity 200ms ease-in-out, height 200ms ease-in-out",
		overflow: "hidden",
		opacity: 0,
		height: 0,
	};
	const o = {
		entering: {
			opacity: 1,
			height: `${i}px`,
		},
		entered: {
			opacity: 1,
			height: "auto",
		},
		exiting: {
			opacity: 1,
			height: "0px",
		},
		exited: {
			opacity: 1,
			height: "0px",
		},
	};
	return d.createElement(
		B.Ay,
		{
			nodeRef: n,
			in: t,
			timeout: 200,
			appear: true,
		},
		(e) =>
			d.createElement(
				"div",
				{
					ref: n,
					style: {
						...s,
						...o[e],
					},
				},
				r,
			),
	);
}
const J = "updatedNowHint";
function $(e) {
	const {
		secondsRemaining: t,
		percentProgress: r,
		bytesDownloadedLabel: n,
		bytesTotalLabel: i,
	} = e;
	return d.createElement(
		"div",
		{
			className: O.UpdateDownloadProgress,
		},
		d.createElement(
			"div",
			{
				className: O.Top,
			},
			d.createElement(
				"div",
				{
					className: O.Left,
				},
				d.createElement(
					"div",
					{
						className: O.DownloadingLabel,
					},
					Localize("#ClientUpdate_Downloading"),
				),
				d.createElement(
					"div",
					{
						className: O.Percentage,
					},
					r,
					"%",
				),
			),
			d.createElement(
				"div",
				{
					className: O.TimeRemaining,
				},
				LocalizeTimeRemaining(t),
			),
		),
		d.createElement(ee, {
			progress: r,
		}),
		d.createElement(
			"div",
			{
				className: O.ByteProgress,
			},
			d.createElement(
				"span",
				{
					className: O.BytesDownloaded,
				},
				n,
			),
			" / ",
			i,
		),
	);
}
function ee(e) {
	const { progress: t } = e;
	return d.createElement(
		"div",
		{
			className: O.ProgressContainer,
		},
		d.createElement("div", {
			className: O.ProgressTrack,
		}),
		d.createElement("div", {
			className: O.Progress,
			style: {
				width: `${t}%`,
			},
		}),
	);
}
function te() {
	return d.createElement("div", {
		className: O.Spinner,
	});
}
const re = "betaOptInAlertShown";
function ne(e) {
	const { active: t, onRequestClose: r } = e;
	const i = bG("SteamClientBetaBugReports");
	const a = bG("SteamClientBetaPatchNotes");
	const s = [
		{
			label: Localize("#BetaOptIn_SeeChanged"),
			onClick: () => {
				r();
				a();
			},
		},
		{
			label: Localize("#BetaOptIn_Dismiss"),
			onClick: r,
		},
	];
	return d.createElement(
		X,
		{
			active: t,
		},
		d.createElement(
			j,
			{
				actions: s,
			},
			d.createElement(ie, null),
			d.createElement(
				"div",
				{
					className: O.BetaOptInMessages,
				},
				d.createElement(Z, null, Localize("#BetaOptIn_Updated")),
				d.createElement(
					Y,
					null,
					LocalizeInlineReactWithFallback(
						"#BetaOptIn_ThankYou",
						d.createElement("a", {
							href: "#",
							className: O.FeedbackLink,
							onClick: () => {
								r();
								i();
							},
						}),
					),
				),
			),
		),
	);
}
function ie() {
	return d.createElement(
		"svg",
		{
			viewBox: "0 0 42 42",
			fill: "none",
			className: O.OptInUpdateIcon,
		},
		d.createElement("path", {
			fill: "currentColor",
			d: "M27.9837 23.9438L28.0665 21.0967L25.7284 20.5978C25.5896 20.064 25.3896 19.548 25.1326 19.0599L26.5474 17.1376L24.6023 15.0637L22.6007 16.3764C22.1284 16.0914 21.6249 15.8619 21.1001 15.6922L20.7378 13.3291L17.8908 13.2463L17.3918 15.5844C16.858 15.7233 16.342 15.9232 15.854 16.1802L13.932 14.7535L11.8578 16.7105L13.1704 18.7121C12.8855 19.1844 12.6559 19.6879 12.4863 20.2127L10.1232 20.575L10.0404 23.422L12.3784 23.921C12.5173 24.4548 12.7172 24.9708 12.9742 25.4588L11.5475 27.3808L13.5045 29.4551L15.5062 28.1424C15.9791 28.4232 16.4827 28.6488 17.0071 28.8146L17.3691 31.1897L20.2161 31.2724L20.7151 28.9344C21.2488 28.7955 21.7649 28.5956 22.2529 28.3386L24.1752 29.7533L26.2494 27.7963L24.9365 25.8066C25.2173 25.3337 25.4428 24.8301 25.6087 24.3057L27.9837 23.9438ZM18.9665 25.2499C18.375 25.2327 17.8019 25.0405 17.3197 24.6976C16.8374 24.3547 16.4677 23.8765 16.2572 23.3235C16.0468 22.7705 16.005 22.1674 16.1373 21.5907C16.2696 21.0139 16.5699 20.4893 17.0003 20.0833C17.4307 19.6772 17.9718 19.4079 18.5553 19.3093C19.1388 19.2108 19.7383 19.2875 20.2782 19.5297C20.8181 19.772 21.274 20.1689 21.5883 20.6702C21.9026 21.1716 22.0612 21.7549 22.044 22.3463C22.0326 22.7391 21.9439 23.1257 21.7831 23.4842C21.6222 23.8426 21.3924 24.1659 21.1066 24.4355C20.8208 24.7051 20.4847 24.9158 20.1175 25.0556C19.7503 25.1953 19.3592 25.2614 18.9665 25.2499Z",
			fillOpacity: "0.5",
		}),
		d.createElement("path", {
			fill: "currentColor",
			d: "M25.6918 3.82243L28.5688 3L30.89 11.1201L30.9238 11.2394L22.8041 13.5606L21.9818 10.684L25.3983 9.70731C23.4921 8.74186 21.3363 8.19784 19.0534 8.19784C11.2874 8.19784 4.99182 14.4934 4.99182 22.2594C4.99182 30.0254 11.2874 36.321 19.0534 36.321C23.9689 36.321 28.2953 33.7988 30.809 29.978L33.404 31.4762C30.3699 36.1905 25.0763 39.3128 19.0534 39.3128C9.63506 39.3128 2 31.6777 2 22.2594C2 12.8411 9.63506 5.20602 19.0534 5.20602C21.7581 5.20602 24.3157 5.83568 26.5877 6.95639L25.6918 3.82243Z",
		}),
		d.createElement("path", {
			fill: "currentColor",
			d: "M35.5644 10.2922L34.6557 13.1094C34.5421 13.4956 34.224 13.791 33.8378 13.9273L31.0206 14.836L33.8378 15.7448C34.224 15.8584 34.5193 16.1765 34.6557 16.5627L35.5644 19.3799L36.4732 16.5627C36.5868 16.1765 36.9049 15.8811 37.2911 15.7448L40.1082 14.836L37.2911 13.9273C36.9049 13.8137 36.6095 13.4956 36.4732 13.1094L35.5644 10.2922Z",
		}),
		d.createElement("path", {
			fill: "currentColor",
			d: "M38.7361 19.866L38.2701 21.3254C38.2079 21.5294 38.0526 21.6864 37.8506 21.7491L36.4059 22.2199L37.8506 22.6907C38.0526 22.7535 38.2079 22.9104 38.2701 23.1144L38.7361 24.5738L39.2021 23.1144C39.2643 22.9104 39.4196 22.7535 39.6216 22.6907L41.0663 22.2199L39.6216 21.7491C39.4196 21.6864 39.2643 21.5294 39.2021 21.3254L38.7361 19.866Z",
		}),
		d.createElement("path", {
			fill: "currentColor",
			d: "M32.7841 22.8579L32.5511 23.5954C32.52 23.6896 32.4423 23.768 32.3491 23.7994L31.619 24.0348L32.3491 24.2702C32.4423 24.3016 32.52 24.38 32.5511 24.4742L32.7841 25.2117L33.0171 24.4742C33.0482 24.38 33.1258 24.3016 33.219 24.2702L33.9492 24.0348L33.219 23.7994C33.1258 23.768 33.0482 23.6896 33.0171 23.5954L32.7841 22.8579Z",
		}),
		d.createElement("path", {
			fill: "currentColor",
			d: "M34.5792 27.6448L34.3462 28.3823C34.3151 28.4765 34.2374 28.5549 34.1442 28.5863L33.4141 28.8217L34.1442 29.0571C34.2374 29.0885 34.3151 29.1669 34.3462 29.2611L34.5792 29.9986L34.8122 29.2611C34.8433 29.1669 34.9209 29.0885 35.0141 29.0571L35.7443 28.8217L35.0141 28.5863C34.9209 28.5549 34.8433 28.4765 34.8122 28.3823L34.5792 27.6448Z",
		}),
		d.createElement("path", {
			fill: "currentColor",
			d: "M31.5873 17.4726L31.3543 18.2101C31.3233 18.3043 31.2456 18.3827 31.1524 18.4141L30.4223 18.6495L31.1524 18.8849C31.2456 18.9163 31.3233 18.9948 31.3543 19.0889L31.5873 19.8265L31.8204 19.0889C31.8514 18.9948 31.9291 18.9163 32.0223 18.8849L32.7524 18.6495L32.0223 18.4141C31.9291 18.3827 31.8514 18.3043 31.8204 18.2101L31.5873 17.4726Z",
		}),
		d.createElement("path", {
			fill: "currentColor",
			d: "M32.7841 7.89875L32.5511 8.6363C32.52 8.73045 32.4423 8.80892 32.3491 8.8403L31.619 9.07569L32.3491 9.31108C32.4423 9.34246 32.52 9.42092 32.5511 9.51508L32.7841 10.2526L33.0171 9.51508C33.0482 9.42092 33.1258 9.34246 33.219 9.31108L33.9492 9.07569L33.219 8.8403C33.1258 8.80892 33.0482 8.73045 33.0171 8.6363L32.7841 7.89875Z",
		}),
	);
}
function ae(e) {
	const { active: t, onRequestClose: r } = e;
	const i = bG("HelpFAQ", "276C-85A0-C531-AFA3");
	const a = bG("SteamClientPatchNotes");
	const s = [
		{
			label: Localize("#BetaOptIn_SeeChanged"),
			onClick: () => {
				r();
				a();
			},
		},
		{
			label: Localize("#BetaOptIn_Dismiss"),
			onClick: r,
		},
	];
	return d.createElement(
		X,
		{
			active: t,
		},
		d.createElement(
			j,
			{
				actions: s,
			},
			d.createElement(ie, null),
			d.createElement(
				"div",
				{
					className: O.BetaOptInMessages,
				},
				d.createElement(Z, null, Localize("#BetaOptIn_Updated")),
				d.createElement(
					Y,
					null,
					LocalizeInlineReactWithFallback(
						"#BetaOptIn_WeShipped",
						d.createElement("a", {
							href: "#",
							className: O.FeedbackLink,
							onClick: () => {
								r();
								i();
							},
						}),
					),
				),
			),
		),
	);
}
const me = ce;
const ge = (e) => {
	const { showUnlockDialog: t } = e;
	const r = R7();
	const i = Qt_1("steam://open/addnonsteamgame");
	const a = d.useCallback(() => {
		U_1(r.ownerWindow);
	}, [r]);
	const s = Qt_1();
	const o = d.useCallback(() => s(u.B7.ResolveURL("StoreFrontPage")), [s]);
	const l = l9(1);
	const c = l != 0;
	return d.createElement(
		f.tz,
		{
			className: me.AddGameMenu,
		},
		d.createElement(
			f.kt,
			{
				onSelected: i,
			},
			Localize("#BottomBar_AddNonSteam"),
		),
		d.createElement(
			f.kt,
			{
				onSelected: a,
			},
			Localize("#BottomBar_ActivateProduct"),
		),
		d.createElement(
			f.kt,
			{
				className: A_1(c && me.ContextMenuItemDisabled),
				onSelected: c ? () => t(l, 1, o) : o,
			},
			Localize("#BottomBar_BrowseStore"),
		),
	);
};
const he = () => {
	const e = wT();
	if (Y2()) {
		return null;
	} else {
		return d.createElement(
			"div",
			{
				className: me.AddGameButton,
				onClick: (t) => {
					lX(
						d.createElement(ge, {
							showUnlockDialog: e,
						}),
						t,
						{
							bForcePopup: true,
						},
					);
				},
			},
			d.createElement(
				"div",
				{
					className: me.Icon,
				},
				d.createElement(C.PZP, null),
			),
			d.createElement(
				"div",
				{
					className: me.Text,
				},
				Localize("#BottomBar_AddGame"),
			),
		);
	}
};
const Ce = () => {
	const e = l9(4);
	const t = e != 0;
	const r = wT();
	const i = Qt_1("steam://open/friends");
	return d.createElement(
		"div",
		{
			className: A_1(me.FriendsButton, t && me.Disabled),
			onClick: t ? () => r(e, 4, i) : i,
		},
		d.createElement(
			"div",
			{
				className: me.Text,
			},
			Localize("#BottomBar_FriendsAndChat"),
		),
		d.createElement(
			"div",
			{
				className: me.Icon,
			},
			d.createElement(C.PN3, null),
		),
	);
};
const _e = () => {
	const e = zM();
	const t = zv();
	const r = q3(() => qw().BIsOfflineMode());
	const a = q3(() => t?.BIsConnected());
	const s = tn_1(n.BV.Downloads());
	const o = e.update_appid != 0;
	const l = e.paused;
	const m = q3(() => g.hj.QueuedTransfers);
	const u = q3(() => g.hj.CompletedTransfers);
	const p = m.length;
	const h = u.length;
	const _ = p + h;
	const f = MD(e);
	const y = Co(e.update_appid);
	let S;
	let w = "#BottomBar_Downloads";
	if (r) {
		w = "#BottomBar_Offline";
	} else if (a) {
		if (l) {
			w = "#BottomBar_DownloadsPaused";
		} else if (o) {
			w = "#BottomBar_Downloading";
		}
	} else {
		w = "#BottomBar_NoConnection";
	}
	S =
		!l && _ > 0
			? LocalizePlural("#BottomBar_DownloadQueue", _, h)
			: l && p > 0
				? LocalizePlural("#BottomBar_PausedQueue", p)
				: Localize("#BottomBar_Manage");
	const B = !r && a && y;
	const v = !B && !r && a;
	return d.createElement(
		"div",
		{
			className: me.DownloadStatus,
		},
		d.createElement(
			"div",
			{
				className: me.DownloadStatusContent,
				onClick: s,
			},
			v &&
				d.createElement(
					d.Fragment,
					null,
					d.createElement(
						"div",
						{
							className: me.Icon,
						},
						d.createElement(C.aPd, null),
					),
					d.createElement(
						"div",
						{
							className: me.Queue,
						},
						S,
					),
				),
			!v &&
				!B &&
				d.createElement(
					"div",
					{
						className: me.Status,
					},
					Localize(w),
				),
			B &&
				d.createElement(fe, {
					appOverview: y,
					nPercentCompleted: f,
				}),
		),
	);
};
const fe = (e) => {
	const { appOverview: t, nPercentCompleted: r } = e;
	const n =
		t &&
		d.createElement(oe.z, {
			app: t,
			eAssetType: 4,
			className: me.GameIcon,
		});
	const [i] = VI("library_low_perf_mode");
	const a = B7();
	return d.createElement(
		"div",
		{
			className: me.DetailedDownloadProgress,
		},
		d.createElement(
			pe.he,
			{
				toolTipContent: t?.display_name,
			},
			d.createElement(
				"div",
				{
					className: me.Icon,
				},
				n,
				d.createElement("div", {
					className: me.IconBevel,
				}),
			),
		),
		d.createElement(
			"div",
			{
				className: me.ProgressBarWrapper,
			},
			d.createElement(
				"div",
				{
					className: me.StatusLine,
				},
				d.createElement(
					"div",
					{
						className: me.Status,
					},
					a,
				),
				d.createElement(
					"div",
					{
						className: A_1(me.Status, me.Percentage),
					},
					Math.floor(Math.trunc(r)),
					"%",
				),
			),
			d.createElement(h.z, {
				className: me.ProgressBar,
				nPercent: r,
				animate: !i,
			}),
		),
	);
};
const be = (e) => {
	const t = R7();
	if (e.bSmallMode) {
		return d.createElement(
			"div",
			{
				className: me.BottomBarContainer,
			},
			Yk() && d.createElement(z, null),
		);
	} else {
		return d.createElement(
			"div",
			{
				className: me.BottomBarContainer,
			},
			Yk() && d.createElement(z, null),
			d.createElement(
				"div",
				{
					className: me.BottomBar,
				},
				d.createElement(he, null),
				d.createElement(_e, null),
				d.createElement(Ce, null),
				d.createElement(S.Z, {
					popup: t?.ownerWindow,
				}),
			),
		);
	}
};
const Fe = Ne;
const Le = (e) => {
	const {
		title: t,
		parentalFeature: r,
		menuItems: n,
		bIsAnyMenuOpen: i,
		onShow: a,
		onHide: s,
		children: o,
		...l
	} = e;
	return d.createElement(
		Me.W1,
		{
			title: `${t} Root Menu`,
			className: Fe.RootMenuButton,
			...l,
			parentalFeature: r,
			disabledClass: Fe.Disabled,
			disabledItemClass: Fe.DisabledItem,
			onShow: a,
			onHide: s,
			bIsAnyMenuOpen: i,
			menuItems: n,
		},
		o,
	);
};
const ze = (e) => {
	const { bOSX: t } = e;
	const r = q3(() => qw().BIsOfflineMode());
	const n = q3(() => LoginStore.secureComputer);
	const i = r();
	const a = fK();
	const s = [
		{
			name: "#Menu_ChangeAccount",
			steamURL: "steam://changeuser",
			visible: n,
		},
		{
			name: "#Menu_SignOut",
			steamURL: "steam://signout",
		},
		{
			name: "#Menu_GoOnline",
			onClick: () => {
				SteamClient.User.GoOnline();
			},
			visible: !i && r,
		},
		{
			name: "#Menu_GoOffline",
			onClick: () => {
				SteamClient.User.GoOffline();
			},
			visible: !i && !r,
		},
		{
			name: "Separator1",
			visible: !t,
		},
		{
			name: "#Menu_CheckForSteamUpdates",
			dialog: "CheckForUpdates",
			visible: !t,
		},
		{
			name: "Separator2",
		},
		{
			name: "#Menu_BackupRestore",
			onClick: (e) => {
				ht_2(e);
			},
		},
		{
			name: "Separator3",
			parentalFeature: ye.JC,
			visible: !t,
		},
		{
			name: "#Menu_Settings",
			steamURL: "steam://settings",
			parentalFeature: a ? ye.JC : ye.uX,
			visible: !t,
		},
		{
			name: "Separator4",
			parentalFeature: ye.JC,
			visible: !t,
		},
		{
			name: "#Menu_Exit",
			steamURL: "steam://exit",
			visible: !t,
		},
	];
	return d.createElement(Me._G, {
		menuItems: s,
	});
};
const xe = (e) => {
	const { bOSX: t, ...r } = e;
	const n = t
		? Localize("#Menu_Account")
		: d.createElement(
				"div",
				{
					className: Fe.SteamButton,
				},
				d.createElement(De.SteamLogo, {
					className: Fe.Logo,
				}),
				Localize("#Menu_Steam"),
			);
	return d.createElement(
		d.Fragment,
		null,
		d.createElement(
			Le,
			{
				title: "Steam",
				menuContent: d.createElement(ze, {
					bOSX: t,
				}),
				...r,
			},
			n,
		),
	);
};
const Ue = (e) => {
	const { bOSX: t } = e;
	const r = gb();
	const n = FJ();
	const i = Ux();
	const a = ey();
	const [s] = VI("small_mode");
	let o = Y2();
	let c = "#Menu_Screenshots_New";
	let m = true;
	if (!!o || !BGameRecordingFeatureEnabled()) {
		c = "#Menu_Screenshots";
		m = false;
	}
	let u = [
		{
			name: "#Menu_Library",
			steamURL: "steam://open/library/view/home",
		},
		{
			name: "#Menu_HiddenGames",
			steamURL: "steam://open/library/collection/hidden",
		},
		{
			name: "#Menu_Soundtracks",
			steamURL: "steam://open/library/view/soundtracks",
			visible: !o,
		},
		{
			name: "#Menu_Downloads",
			steamURL: "steam://open/downloads",
		},
		{
			name: "Separator1",
		},
		{
			name: "#Menu_SmallMode",
			steamURL: "steam://open/minigameslist",
			visible: !t && !s,
		},
		{
			name: "#Menu_LargeMode",
			steamURL: "steam://open/largegameslist",
			visible: !t && s,
		},
		{
			name: "#Menu_BigPictureMode",
			steamURL: "steam://open/bigpicture",
			visible: !o,
		},
		{
			name: "Separator2",
			visible: r && !o,
		},
		{
			name: "#Menu_StartVR",
			onClick: i,
			visible: r && !n && !o,
		},
		{
			name: "#Menu_ExitVR",
			onClick: a,
			visible: r && n && !o,
		},
		{
			name: "Separator3",
		},
		{
			name: "#Menu_FriendsChat",
			steamURL: "steam://open/friends",
			parentalFeature: 4,
		},
		{
			name: "#Menu_Players",
			steamURL: "steam://friends/players",
			parentalFeature: 4,
		},
		{
			name: "#Menu_Servers",
			steamURL: "steam://open/servers",
			visible: !o,
		},
		{
			name: "#Menu_Inventory",
			steamURL: "steam://open/inventory",
			visible: !o,
		},
		{
			name: "#Menu_NewForYou",
			steamURL: "steam://open/newforyou",
			visible: !o,
		},
		{
			name: "Separator4",
		},
		{
			name: c,
			steamURL: "steam://open/screenshots",
			newItem: m,
		},
	];
	return d.createElement(Me._G, {
		menuItems: u,
	});
};
const We = (e) => {
	const { bOSX: t, ...r } = e;
	return d.createElement(
		Le,
		{
			title: "View",
			menuContent: d.createElement(Ue, {
				bOSX: t,
			}),
			...r,
		},
		Localize("#Menu_View"),
	);
};
const Ve = (e) => {
	const t = Bh("m_ePersonaState") == e.personaState;
	return d.createElement(
		"div",
		{
			className: Fe.Icon,
		},
		t && d.createElement(De.Checkmark, null),
	);
};
const He = (e) =>
	d.createElement(
		"div",
		{
			className: Fe.StatusEntry,
		},
		d.createElement(Ve, {
			personaState: e.personaState,
		}),
		d.createElement("div", null, Localize(e.name)),
	);
function je() {
	const e = bI();
	const [t, r] = d.useState(0);
	useEffect(() => {
		if (e) {
			return fm(() => {
				if (qw().GetServicesInitialized()) {
					r(bg().GetOnlineFriendCount());
				}
			});
		}
	}, [e]);
	return d.createElement(
		d.Fragment,
		null,
		Localize("#Menu_ViewFriendsList", t),
	);
}
const qe = (e) => {
	const t = [
		{
			name: Localize("#Menu_ViewFriendsList"),
			steamURL: "steam://open/friends",
			children: d.createElement(je, null),
		},
		{
			name: "Separator1",
		},
		{
			name: "#Menu_AddFriend",
			steamURL: "steam://friends/add",
		},
		{
			name: "#Menu_EditProfile",
			steamURL: "steam://url/SteamIDEditPage",
		},
		{
			name: "Separator2",
		},
		{
			name: "#Menu_Status_Online",
			steamURL: "steam://friends/status/online",
			children: d.createElement(He, {
				name: "#Menu_Status_Online",
				personaState: 1,
			}),
		},
		{
			name: "#Menu_Status_Away",
			steamURL: "steam://friends/status/away",
			children: d.createElement(He, {
				name: "#Menu_Status_Away",
				personaState: 3,
			}),
		},
		{
			name: "#Menu_Status_Invisible",
			steamURL: "steam://friends/status/invisible",
			children: d.createElement(He, {
				name: "#Menu_Status_Invisible",
				personaState: 7,
			}),
		},
		{
			name: "#Menu_Status_Offline",
			steamURL: "steam://friends/status/offline",
			children: d.createElement(He, {
				name: "#Menu_Status_Offline",
				personaState: 0,
			}),
		},
	];
	return d.createElement(Me._G, {
		menuItems: t,
	});
};
const Qe = (e) => {
	const { bOSX: t, ...r } = e;
	return d.createElement(
		Le,
		{
			title: "Friends",
			parentalFeature: 4,
			menuContent: d.createElement(qe, null),
			...r,
		},
		Localize("#Menu_Friends"),
	);
};
const Ze = (e) => {
	const { bOSX: t, ...r } = e;
	const n = [
		{
			name: "#Menu_ViewLibrary",
			steamURL: "steam://open/library/view/home",
		},
		{
			name: "Separator1",
		},
		{
			name: "#Menu_ActivateRetail",
			onClick: d.useCallback((e) => {
				U_1(e);
			}, []),
		},
		{
			name: "#Menu_RedeemWallet",
			steamURL: "steam://url/RedeemWalletVoucher",
			parentalFeature: 1,
		},
		{
			name: "#Menu_ManageGifts",
			steamURL: "steam://url/ManageGiftsPage",
			parentalFeature: 1,
		},
		{
			name: "#Menu_AddNonSteam",
			steamURL: "steam://open/addnonsteamgame",
		},
	];
	if (Y2()) {
		return null;
	} else {
		return d.createElement(
			Le,
			{
				title: "Games",
				menuItems: n,
				...r,
			},
			Localize("#Menu_Games"),
		);
	}
};
const Ye = (e) => {
	const { bOSX: t, ...r } = e;
	if (t) {
		return d.createElement(
			Le,
			{
				title: "Window",
				menuItems: [
					{
						name: "#Menu_SmallMode",
						steamURL: "steam://open/minigameslist",
					},
				],
				...r,
			},
			Localize("#Menu_Window"),
		);
	} else {
		return null;
	}
};
const Ke = (e) => {
	const { bOSX: t, ...r } = e;
	let n = Y2();
	const i = [
		{
			name: "#Menu_Support",
			steamURL: "steam://url/HelpFrontPage",
		},
		{
			name: "Separator1",
		},
		{
			name: "#Menu_PrivacyPolicy",
			steamURL: "steam://url/PrivacyPolicy",
		},
		{
			name: "#Menu_LegalInfo",
			steamURL: "steam://url/LegalInformation",
			visible: !n,
		},
		{
			name: n ? "#Menu_SSA_China" : "#Menu_SSA",
			steamURL: "steam://url/SSA",
		},
		{
			name: "Separator2",
		},
		{
			name: "#Menu_SystemReport",
			dialog: "SystemReport",
			visible: Pb(),
		},
		{
			name: "#Menu_SystemInfo",
			dialog: "SystemInfo",
		},
		{
			name: "#Menu_SRSI_Diagnostics",
			dialog: "RuntimeInfo",
			visible: CI(),
		},
		{
			name: "Separator3",
		},
		{
			name: "#Menu_About",
			dialog: "AboutSteam",
		},
	];
	return d.createElement(
		Le,
		{
			title: "Help",
			menuItems: i,
			...r,
		},
		Localize("#Menu_Help"),
	);
};
const Xe = d.memo((e) => {
	const { className: t, bOSX: r, ...n } = e;
	const [i, a] = d.useState(false);
	const s = () => {
		a(true);
	};
	const o = () => {
		a(false);
	};
	return d.createElement(
		"div",
		{
			className: A_1(Fe.RootMenuBar, t),
			...n,
		},
		d.createElement(
			Oe.wC,
			null,
			d.createElement(xe, {
				bIsAnyMenuOpen: i,
				onShow: s,
				onHide: o,
				bOSX: r,
			}),
			d.createElement(We, {
				bIsAnyMenuOpen: i,
				onShow: s,
				onHide: o,
				bOSX: r,
			}),
			d.createElement(Qe, {
				bIsAnyMenuOpen: i,
				onShow: s,
				onHide: o,
				bOSX: r,
			}),
			d.createElement(Ze, {
				bIsAnyMenuOpen: i,
				onShow: s,
				onHide: o,
				bOSX: r,
			}),
			d.createElement(Ye, {
				bIsAnyMenuOpen: i,
				onShow: s,
				onHide: o,
				bOSX: r,
			}),
			d.createElement(Ke, {
				bIsAnyMenuOpen: i,
				onShow: s,
				onHide: o,
				bOSX: r,
			}),
		),
	);
});
const et = $e;
const rt = (e) => {
	const {
		title: t,
		name: r,
		parentalFeature: n = ye.uX,
		rootRoute: a,
		menuItems: s,
		selected: o = (e) => !!e,
		onClick: l,
	} = e;
	const c = o(
		W5({
			path: a,
		}),
	);
	const m = tn_1(a);
	return d.createElement(
		Me.W1,
		{
			title: t,
			className: A_1(et.SuperNavMenu, c && et.Selected),
			popupClass: et.MenuPopup,
			buttonClass: et.MenuButton,
			disabledClass: et.Disabled,
			bSuperNavBehavior: true,
			onClick: l || m,
			menuItems: s,
			parentalFeature: n,
		},
		typeof r == "string" ? Localize(r) : r,
	);
};
const nt = (e) => {
	const { tab: t, menuItems: r, title: i, ...a } = e;
	const { activeTab: s, activateTab: l } = no();
	return d.createElement(rt, {
		title: i,
		rootRoute: n.BV.Browser(),
		menuItems: r.map(({ urlName: e, ...t }) => ({
			...t,
			steamURL: u.B7.ResolveURL(e),
		})),
		selected: (e) => e && s === t,
		onClick: () => l(t),
		...a,
	});
};
const it = () => {
	let e = Y2();
	return d.createElement(nt, {
		title: "Store Supernav",
		name: "#Menu_Store",
		parentalFeature: 1,
		tab: "store",
		menuItems: [
			{
				name: "#Menu_Featured",
				urlName: "StoreFrontPage",
			},
			{
				name: "#Menu_DiscoveryQueue",
				urlName: "StoreExplore",
				visible: !e,
			},
			{
				name: "#Menu_Wishlist",
				urlName: "UserWishlist",
			},
			{
				name: "#Menu_PointsShop",
				urlName: "PointsShop",
			},
			{
				name: "#Menu_News",
				urlName: "NewsHomePage",
			},
			{
				name: "#Menu_Stats",
				urlName: "StoreStats",
				visible: !e,
			},
		],
	});
};
const at = createContext({
	location: undefined,
	bActive: true,
});
function st(e) {
	const { children: t } = e;
	const r = useRef(undefined);
	const i = zy();
	const a = W5([n.BV.Library.Root(), n.BV.Downloads()]);
	if (a) {
		r.current = i;
	}
	const s = r.current;
	const o = !!a;
	const l = d.useMemo(
		() => ({
			location: s,
			bActive: o,
		}),
		[s, o],
	);
	return d.createElement(
		at.Provider,
		{
			value: l,
		},
		t,
	);
}
function ot() {
	const e = useContext(at);
	const t = hf();
	if (m.oy.IsDesktopUIWindowActive() || t) {
		return e;
	} else {
		return {
			location: undefined,
			bActive: true,
		};
	}
}
const lt = () => {
	const { location: e, bActive: t } = ot();
	const r = (!t && e?.pathname) || n.BV.Library.Home();
	const a = tn_1(r, {
		bNoRedundantNavigation: true,
	});
	const s = [
		{
			name: "#Menu_Home",
			route: n.BV.Library.Home(),
		},
		{
			name: "#Menu_Collections",
			route: n.BV.Library.AllCollections(),
		},
		{
			name: "Separator",
		},
		{
			name: "#Menu_Downloads",
			route: n.BV.Downloads(),
		},
	];
	return d.createElement(rt, {
		title: "Library Supernav",
		name: "#Menu_Library",
		rootRoute: n.BV.Library.Root(),
		menuItems: s,
		onClick: a,
	});
};
const ct = () =>
	Y2() ||
	d.createElement(nt, {
		title: "Community Supernav",
		name: "#Menu_Community",
		parentalFeature: 2,
		tab: "community",
		menuItems: [
			{
				name: "#Menu_Home",
				urlName: "CommunityHome",
			},
			{
				name: "#Menu_Discussions",
				urlName: "SteamDiscussions",
			},
			{
				name: "#Menu_Workshop",
				urlName: "SteamWorkshop",
			},
			{
				name: "#Menu_Market",
				urlName: "CommunityMarket",
			},
			{
				name: "#Menu_Broadcasts",
				urlName: "GameHubBroadcasts",
			},
		],
	});
const mt = () => {
	const [e, t] = d.useState();
	const r = L4();
	let n = Y2();
	d.useEffect(() => {
		if (r) {
			t(r);
		}
	}, [r]);
	return d.createElement(nt, {
		title: "Profile Supernav",
		name: e
			? d.createElement(
					"span",
					{
						className: et.DisplayName,
					},
					e,
				)
			: "#Menu_Profile",
		parentalFeature: 3,
		tab: "me",
		menuItems: [
			{
				name: "#Menu_Activity",
				urlName: "SteamIDFriendsPage",
				parentalFeature: 4,
				visible: !n,
			},
			{
				name: "#Menu_Profile",
				urlName: "SteamIDMyProfile",
			},
			{
				name: "#Menu_Friends",
				urlName: "SteamIDFriendsList",
				parentalFeature: 4,
			},
			{
				name: "#Menu_Groups",
				urlName: "SteamIDGroupsPage",
				parentalFeature: 4,
				visible: !n,
			},
			{
				name: "#Menu_Content",
				urlName: "CommunityScreenshots",
				visible: !n,
			},
			{
				name: "#Menu_Badges",
				urlName: "SteamIDBadgePage",
				visible: !n,
			},
			{
				name: "#Menu_Inventory",
				urlName: "CommunityInventory",
				visible: !n,
			},
			{
				name: "#Menu_YearInReview",
				urlName: "YearInReview",
			},
		],
	});
};
const ut = () =>
	d.createElement(rt, {
		title: "Console Supernav",
		name: "#Menu_Console",
		parentalFeature: ye.JC,
		rootRoute: n.BV.Console(),
	});
function dt(e) {
	const t = Sn_1();
	return d.createElement(
		"div",
		{
			className: et.SuperNav,
		},
		d.createElement(At, null),
		d.createElement(pt, null),
		d.createElement(it, null),
		d.createElement(lt, null),
		d.createElement(ct, null),
		d.createElement(mt, null),
		t && d.createElement(ut, null),
	);
}
function At() {
	const e = jB();
	const t = yq();
	const r = zy();
	const i = e.entries[Math.max(e.index - 1, 0)];
	const a = yp(i.pathname, i) || r.key === e.entries[0].key;
	return d.createElement(gt, {
		direction: "left",
		onClick: t,
		disabled: a,
	});
}
function pt() {
	const e = jB();
	const t = kV();
	const r = zy();
	const i = e.entries[Math.min(e.index + 1, e.length - 1)];
	const a = yp(i.pathname, i) || r.key === e.entries[e.entries.length - 1].key;
	return d.createElement(gt, {
		direction: "right",
		onClick: t,
		disabled: a,
	});
}
function gt(e) {
	const { direction: t, disabled: r, onClick: n } = e;
	const i = t === "left" ? "scale( -1, 1 )" : undefined;
	return d.createElement(
		"svg",
		{
			onClick: r || n,
			viewBox: "0 0 16 16",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				transform: i,
			},
			className: A_1(et.Arrow, r ? et.Disabled : et.Enabled),
		},
		d.createElement("path", {
			fill: "currentColor",
			opacity: "1",
			d: "M9.75467 6.5L5.56047 2.43952C5.56047 2.43952 5.68487 1.26955 6.27511 0.70555C6.86535 0.141549 8 -3.49691e-07 8 -3.49691e-07C8 -3.49691e-07 16.0009 7.08692 16 8C15.9991 8.91308 8 16 8 16C8 16 6.87982 15.8258 6.27511 15.2535C5.6704 14.6812 5.56047 13.5605 5.56047 13.5605L9.75462 9.5L0.677395 9.5C0.677395 9.5 3.49692e-07 9 3.49691e-07 8C3.4969e-07 7 0.677395 6.5 0.677395 6.5L9.75467 6.5Z",
		}),
	);
}
const It = "SteamAnnouncements";
function Et() {
	const e = jE();
	const t = zv();
	const [r, n] = d.useState(false);
	const i = I_3({
		queryKey: [It],
		queryFn: async () => {
			const e = Bt.w.Init(bt.gz);
			e.Body().set_language(sf(de.TS.LANGUAGE));
			const r = await bt.xt.GetNewSteamAnnouncementState(
				t.GetServiceTransport(),
				e,
			);
			if (r.GetEResult() !== 1) {
				console.error(
					"Received error from GetNewSteamAnnouncementState",
					r.GetEResult(),
					r.Hdr().transport_error(),
				);
				throw new Error(
					`Error from GetNewSteamAnnouncementState: ${r.GetEResult()}`,
				);
			}
			return r.Body().toObject();
		},
		enabled: r,
	});
	const a = d.useCallback(() => {
		n(true);
		e.invalidateQueries({
			queryKey: [It],
		});
	}, [e]);
	const s = d.useCallback(() => {
		n(false);
	}, []);
	d.useEffect(() => t?.AddOnLogonCallback(a).Unregister, [t, a]);
	d.useEffect(() => t?.AddOnDisconnectCallback(s).Unregister, [t, s]);
	return i;
}
function Mt() {
	const e = Et();
	const t = (() => {
		const e = jE();
		const t = KV();
		const r = Et();
		return n_2({
			mutationFn: async () => {
				if (r.isSuccess && r.data.announcement_gid) {
					const n = Bt.w.Init(bt.GN);
					n.Body().set_announcement_gid(r.data.announcement_gid);
					n.Body().set_time_posted(r.data.time_posted);
					const i = await bt.xt.UpdateSteamAnnouncementLastRead(t, n);
					if (i.GetEResult() !== 1) {
						console.error(
							"Received error from UpdateSteamAnnouncementLastRead",
							i.GetEResult(),
							i.Hdr().transport_error(),
						);
						throw new Error(
							`Error from UpdateSteamAnnouncementLastRead: ${i.GetEResult()}`,
						);
					}
					e.invalidateQueries({
						queryKey: [It],
					});
				}
			},
		});
	})();
	return [
		e.isSuccess && e.data.state != 1,
		() => {
			t.mutate();
		},
	];
}
const kt = Rt;
function Dt() {
	return M_3({
		className: kt.ParentalLock,
		onOK: () => {
			SteamClient.Parental.LockParentalLock();
		},
		strTitle: Localize("#FamilyView_Dialog_Title"),
		strDescription: Localize("#FamilyView_LockDialog_Description"),
	});
}
function Nt() {
	return M_3({
		className: kt.ParentalLock,
		onOK: () => {
			Ge.Ih.KioskModeLock();
		},
		strTitle: Localize("#KioskMode_Dialog_Title"),
		strDescription: Localize("#KioskMode_LockDialog_Description"),
	});
}
const Lt = Pt;
function Qt(e) {
	const [t] = q3(() => [qw().GetCurrentUser().strAccountName]);
	const r = q3(() => LoginStore.secureComputer);
	const n = [
		{
			name: "#Menu_ViewMyProfile",
			steamURL: "steam://url/SteamIDMyProfile",
			parentalFeature: 3,
		},
		{
			name: "#Menu_ViewMyAccount",
			steamURL: "steam://url/StoreAccount",
			parentalFeature: ye.JC,
			children: d.createElement(
				"div",
				{
					className: Lt.LogoutButton,
				},
				LocalizeReact(
					"#Menu_ViewMyAccount",
					d.createElement(
						"div",
						{
							className: Lt.AccountName,
						},
						t,
					),
				),
			),
		},
		{
			name: "#Menu_StorePreferences",
			steamURL: "steam://url/SteamPreferences",
			parentalFeature: ye.JC,
		},
		{
			name: "#Menu_ViewMyWallet",
			steamURL: "steam://url/StoreAddFundsPage",
			parentalFeature: 1,
			children: d.createElement(
				"div",
				{
					className: Lt.LogoutButton,
				},
				LocalizeReact(
					"#Menu_ViewMyWallet",
					d.createElement(Zt, {
						bShowEmptyBalance: true,
					}),
				),
			),
		},
		{
			name: "Separator1",
		},
		{
			name: "#Menu_ChangeAccount",
			disabled: !r,
			steamURL: "steam://changeuser",
			children: d.createElement(
				"div",
				{
					className: Lt.LogoutButton,
				},
				LocalizeReact(
					"#Menu_ChangeAccount",
					d.createElement(
						"div",
						{
							className: Lt.AccountName,
						},
						t,
					),
				),
			),
		},
		{
			name: "#Menu_Logout",
			steamURL: "steam://signout",
		},
	];
	return d.createElement(Me._G, {
		menuItems: n,
	});
}
const Zt = PA((e) => {
	const { bShowEmptyBalance: t } = e;
	const r = qw().GetCurrentUser().strAccountBalance;
	const n = qw().GetCurrentUser().strAccountBalancePending;
	if (n?.length > 0) {
		return d.createElement(
			"div",
			{
				className: Lt.WalletBalance,
			},
			Localize("#WalletPendingBalance", r, n),
		);
	} else if (r?.length > 0) {
		return d.createElement(
			"div",
			{
				className: Lt.WalletBalance,
			},
			r,
		);
	} else {
		if (t) {
			d.createElement("div", {
				className: Lt.WalletBalance,
			});
		}
		return null;
	}
});
const Yt = PA(() => {
	const e = wI();
	const t = L4();
	const [r, n] = d.useState(false);
	return d.createElement(
		pe.he,
		{
			toolTipContent: "#ViewAccountDropdown",
			direction: "bottom",
			bDisabled: r,
		},
		d.createElement(
			Me.W1,
			{
				title: "Account Menu",
				menuItems: [],
				menuContent: d.createElement(Qt, null),
				parentalFeature: ye.uX,
				popupClass: A_1(Lt.AccountMenuPopup, rO(e)),
				onShow: () => n(true),
				onHide: () => n(false),
			},
			d.createElement(
				"div",
				{
					className: A_1(Lt.AccountMenu, rO(e)),
				},
				d.createElement(ft.i8, {
					persona: e,
					size: "X-Small",
					statusPosition: "right",
				}),
				d.createElement(
					"div",
					{
						className: Lt.PersonaName,
					},
					t,
				),
				d.createElement(De.Chevron, {
					className: Lt.Chevron,
					direction: "down",
				}),
				d.createElement(Zt, {
					bShowEmptyBalance: false,
				}),
			),
		),
	);
});
function Kt(e) {
	const [t, r] = l_2();
	return d.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 13 13",
			fill: "none",
			...e,
		},
		d.createElement(
			"g",
			{
				clipPath: r,
			},
			d.createElement("path", {
				fill: "currentColor",
				d: "M10.1111 0.722168V10.8333L6.50001 7.94439H5.41667V11.5555H4.33334L3.13084 7.94439H2.8889C2.31426 7.94439 1.76316 7.71612 1.35683 7.30979C0.950502 6.90346 0.722229 6.35236 0.722229 5.77772C0.722229 5.20309 0.950502 4.65199 1.35683 4.24566C1.76316 3.83933 2.31426 3.61106 2.8889 3.61106H6.50001L10.1111 0.722168ZM11.5556 3.99745V7.53633C11.9637 7.45345 12.3307 7.23202 12.5943 6.90954C12.8578 6.58706 13.0018 6.18338 13.0018 5.76689C13.0018 5.3504 12.8578 4.94672 12.5943 4.62424C12.3307 4.30176 11.9637 4.08033 11.5556 3.99745V3.99745Z",
			}),
		),
		d.createElement(
			"defs",
			null,
			d.createElement(
				"clipPath",
				{
					id: t,
				},
				d.createElement("rect", {
					fill: "currentColor",
					width: "13",
					height: "13",
				}),
			),
		),
	);
}
function Xt(e) {
	const [t, r] = l_2();
	return d.createElement(
		"svg",
		{
			className: Lt.AnnouncementWaveSVG,
			width: "13",
			height: "24",
			viewBox: "0 0 13 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
		},
		d.createElement(
			"mask",
			{
				id: t,
				maskUnits: "userSpaceOnUse",
				x: "0",
				y: "0",
				width: "11",
				height: "24",
			},
			d.createElement("rect", {
				width: "11",
				height: "24",
				fill: "#ffffff",
			}),
		),
		d.createElement(
			"g",
			{
				mask: r,
			},
			d.createElement("circle", {
				cx: "-1",
				cy: "12",
				r: "9",
				stroke: "currentColor",
				strokeWidth: "3",
			}),
		),
	);
}
function Jt(e) {
	let t = R7().ownerWindow;
	let [r, n] = d.useState(undefined);
	let i = d.useRef(undefined);
	let a = d.useRef(e);
	a.current = e;
	let s = d.useCallback(() => {
		n(true);
		i.current ||= window.setTimeout(() => {
			n(false);
			i.current = undefined;
		}, a.current * 1000);
	}, [i, a, n]);
	let o = d.useCallback(() => {
		if (r === undefined) {
			s();
		}
	}, [r, s]);
	d.useEffect(() => {
		if (t.document.hasFocus() && r === undefined) {
			s();
		}
	}, [t, r, s]);
	d.useEffect(() => () => window.clearTimeout(i.current), []);
	l6(t, "focus", o);
	return r === true;
}
function $t(e) {
	let [t, r] = Mt();
	const i = Qt_1("steam://url/SteamAnnouncements");
	const a = Jt(60);
	if (Y2()) {
		return null;
	}
	let s = t && a;
	return d.createElement(
		pe.he,
		{
			toolTipContent: "#ViewAnnouncements",
			direction: "bottom",
		},
		d.createElement(
			"div",
			{
				className: A_1(
					Lt.Button,
					Lt.AnnouncementsButton,
					t && Lt.Active,
					s && Lt.ActiveAnimation,
				),
				onClick: (e) => {
					i();
					r();
				},
			},
			d.createElement(Kt, {
				className: A_1(Lt.Icon, a && Lt.FirstFocus),
			}),
			d.createElement(Xt, null),
		),
	);
}
function er(e) {
	const t = new F.b(ve.O$.currentUserSteamID);
	const r = bG("AllNotifications", t.ConvertTo64BitString());
	return d.createElement(
		"div",
		{
			className: A_1(Lt.NotificationHeader),
		},
		d.createElement(
			"div",
			{
				className: Lt.AllNotificationsTitle,
			},
			Localize("#NotificationsMenu_Title"),
		),
		d.createElement(
			"button",
			{
				className: Lt.AllNotificationsButton,
				onClick: r,
			},
			Localize("#NotificationsMenu_ViewAll"),
		),
	);
}
function tr(e) {
	return d.createElement(
		"div",
		{
			className: Lt.NotificationMenuItem,
		},
		d.createElement(Ot.Tm, {
			...e,
		}),
	);
}
function rr() {
	return d.createElement(
		"div",
		{
			className: Lt.EmptyNotificationsCtn,
		},
		d.createElement(
			"div",
			{
				className: Lt.EmptyNotificationsTitle,
			},
			Localize("#NotificationsList_EmptyTitle_New"),
		),
		d.createElement(
			"div",
			{
				className: Lt.EmptyNotificationsBody,
			},
			Localize("#NotificationsList_EmptyBody"),
		),
	);
}
function nr(e) {
	const { popupRef: t, onVisibleCallback: r } = e;
	const n = ZT();
	const [i, a] = d.useState(false);
	r.current = d.useCallback(
		(e) => {
			a(e);
		},
		[a],
	);
	const s = d.useRef(undefined);
	const [o, l] = d.useState(false);
	d.useEffect(() => {
		l(s.current?.scrollHeight > s.current?.clientHeight);
	}, [s.current?.scrollHeight, o]);
	const c = V8();
	let m = n.map((e) => {
		if (e.notifications[0].eSource == Ft.a9.k_Client) {
			return null;
		}
		const t = e.notifications[0].data;
		kE(c, t.type, t.rgunread?.length);
		return d.createElement(tr, {
			key: e.notifications[0].notificationID,
			location: 3,
			group: e,
			onDismiss: undefined,
		});
	});
	const u = o || Lt.MenuScrollbarHidden;
	return d.createElement(
		"div",
		{
			onClick: () => t?.current?.Hide(),
		},
		d.createElement(er, null),
		d.createElement(
			"div",
			{
				className: A_1(Lt.NotificationsMenuScrollable, u),
				ref: s,
			},
			d.createElement(Gt.r, {
				displayedCounts: o || c,
				visible: i,
			}),
			m.length > 0 &&
				d.createElement(
					"div",
					{
						className: Lt.NotificationsMenuEntriesContainer,
					},
					" ",
					m,
					" ",
				),
			d.createElement(rr, null),
		),
	);
}
function ir(e) {
	const t = d.useRef(undefined);
	const [r, n] = d.useState(false);
	const i = d.useRef(undefined);
	let a = Jt(60);
	const [s, o] = d.useState(Lt.NoNew);
	const l = Xm();
	const c = zF();
	d.useEffect(() => {
		const e = c + l > 0;
		if (e && s != Lt.HasNew) {
			o(Lt.HasNew);
		} else if (!e && s == Lt.HasNew) {
			window.setTimeout(() => {
				o(Lt.WasNew);
			}, 1500);
		}
		if (r) {
			Ft.Tu.Viewed();
		}
	}, [l, r, s, c]);
	let m = d.useCallback(
		(e) => {
			if (i.current) {
				i.current(e);
			}
			n(e);
		},
		[i],
	);
	let u = l && a;
	return d.createElement(
		pe.he,
		{
			toolTipContent: "#ViewNotifications",
			direction: "bottom",
			bDisabled: r,
		},
		d.createElement(
			Me.W1,
			{
				title: "Notifications Menu",
				refPopupMenu: t,
				disabledClass: Lt.Disabled,
				popupClass: A_1(Lt.dialog, Lt.NotificationsMenu),
				className: A_1(Lt.NotificationButtonContainer),
				menuContent: d.createElement(nr, {
					popupRef: t,
					onVisibleCallback: i,
				}),
				menuOptions: {
					bPreferPopLeft: true,
				},
				onShow: () => m(true),
				onHide: () => m(false),
			},
			d.createElement(
				"div",
				{
					className: A_1(
						Lt.Button,
						Lt.NotificationsButton,
						s,
						u && Lt.ActiveAnimation,
					),
				},
				d.createElement(De.Notifications, {
					className: Lt.Icon,
				}),
			),
		),
	);
}
function ar(e) {
	const t = gb();
	const r = FJ();
	const n = Ux();
	const i = ey();
	const a = q3(() => l.rV.settings?.bIsValveEmail);
	const s = d.useCallback(
		(e) => {
			if (r) {
				i();
			} else {
				n();
			}
		},
		[n, i, r],
	);
	const o = d.useCallback(
		(e) => {
			const t = xt.hG.GetToggle(20);
			const r = () => xt.hG.SetToggle(20, !t);
			if (a) {
				lX(
					d.createElement(
						f.tz,
						null,
						d.createElement(
							f.kt,
							{
								onSelected: r,
							},
							t ? "(VO) Stop Simulating VR UI" : "(VO) Simulate VR UI",
						),
					),
					e,
				);
			}
		},
		[a],
	);
	if (Y2()) {
		return null;
	} else if (t) {
		return d.createElement(
			pe.he,
			{
				toolTipContent: r ? "#ExitVR" : "#EnterVR",
				direction: "bottom",
			},
			d.createElement(
				"div",
				{
					className: A_1(Lt.Button, Lt.VRToggle, r && Lt.Running),
					onClick: s,
					onContextMenu: o,
				},
				d.createElement(De.VR, {
					className: Lt.Icon,
				}),
			),
		);
	} else {
		return null;
	}
}
function sr() {
	if (Y2()) {
		return null;
	} else {
		return d.createElement(
			pe.he,
			{
				toolTipContent: "#EnterGamepadUI",
				direction: "bottom",
			},
			d.createElement(
				"div",
				{
					className: A_1(Lt.Button, Lt.GamepadUIToggle),
					onClick: () => SteamClient.UI.SetUIMode(4),
				},
				d.createElement(De.TV, {
					className: Lt.Icon,
				}),
			),
		);
	}
}
function or(e) {
	const { bShouldShowIcon: t, onShowControls: r, playbackState: n } = tx();
	if (t) {
		return d.createElement(
			pe.he,
			{
				toolTipContent: "#ControlSoundtrack",
				direction: "bottom",
			},
			d.createElement(
				"div",
				{
					className: A_1(
						Lt.Button,
						Lt.SoundtrackControls,
						n.ePlaybackStatus == Ct.f.AudioPlayback_Playing && Lt.Playing,
					),
					onClick: (e) => r(e),
				},
				d.createElement(De.Music, {
					className: Lt.Icon,
				}),
			),
		);
	} else {
		return null;
	}
}
function lr(e) {
	const { rtExpiration: t } = e;
	const { fnRestartTimer: r } = L$(1000, () => r());
	if (t == 0) {
		return null;
	}
	const n = t == 0 ? 0 : t - Math.floor(Date.now() / 1000);
	const i = Localize(
		"#FamilyView_TemporaryFeaturesDuration",
		LocalizeTimeRemaining(n),
	);
	return d.createElement("div", null, i);
}
function cr(e) {
	const t = Wp();
	const r = dF();
	const n = oA();
	const i = t
		? Localize(n ? "#FamilyView_Unlock" : "#FamilyView_Lock")
		: Localize("#FamilyView_Enabled");
	return d.createElement(
		pe.t1,
		{
			className: Lt.ParentalToggleTooltip,
		},
		d.createElement("div", null, i),
		!!r &&
			d.createElement(lr, {
				rtExpiration: r,
			}),
	);
}
function mr(e) {
	const t = Wf();
	const r = oA();
	const i = Wp();
	const a = wT();
	const [s, o] = Dt();
	const l = bG("FamilyManagement");
	const c = d.useCallback(
		(e) => {
			if (r) {
				a(i ? 1 : 2);
			} else {
				o();
			}
		},
		[r, a, o, i],
	);
	if (t) {
		return d.createElement(
			"div",
			{
				className: A_1(Lt.Button, Lt.ParentalToggleButton, r && Lt.Locked),
				onClick: i ? c : l,
			},
			d.createElement(
				pe.m9,
				{
					style: {
						display: "flex",
					},
					toolTipContent: d.createElement(cr, null),
					direction: "bottom",
				},
				r &&
					d.createElement(De.FamilySharing, {
						className: Lt.Icon,
					}),
				!r &&
					d.createElement(De.FamilySharingOff, {
						className: Lt.Icon,
					}),
			),
			s,
		);
	} else {
		return null;
	}
}
function ur() {
	const [e, t, r] = I_1();
	if (e) {
		return d.createElement(
			"div",
			{
				className: A_1(Lt.Button, Lt.LowDiskWarning),
				onClick: () => r(true),
			},
			d.createElement(De.HardDriveWarning, {
				className: Lt.Icon,
			}),
			d.createElement(qt.p, {
				active: t,
				onDismiss: () => r(false),
			}),
		);
	} else {
		return null;
	}
}
function dr(e) {
	const t = VA();
	const r = fK();
	const n = wT();
	const [i, a] = Nt();
	const s = d.useCallback(
		(e) => {
			if (r) {
				n(4);
			} else {
				a();
			}
		},
		[r, n, a],
	);
	const o = r
		? Localize("#KioskMode_Unlock_Tooltip")
		: Localize("#KioskMode_Lock_Tooltip");
	if (t) {
		return d.createElement(
			"div",
			{
				className: A_1(
					Lt.Button,
					Lt.KioskModeToggleButton,
					r && Lt.Locked,
					Lt.HasPassword,
				),
				onClick: s,
			},
			d.createElement(
				pe.he,
				{
					style: {
						display: "flex",
					},
					toolTipContent: o,
					direction: "bottom",
				},
				d.createElement(De.Lock, {
					locked: r,
					className: Lt.Icon,
				}),
			),
			i,
		);
	} else {
		return null;
	}
}
function Ar(e) {
	if (de.TS.EUNIVERSE == 1) {
		return null;
	}
	let t = "Public";
	switch (de.TS.EUNIVERSE) {
		case 2: {
			t = "Beta";
			break;
		}
		case 3: {
			t = "Internal";
			break;
		}
		case 4: {
			t = "Dev";
		}
	}
	let r = "RELEASE build";
	if (Y2()) {
		r += " - Steam China";
	}
	return d.createElement(
		"div",
		{
			className: Lt.BranchBar,
		},
		`[${t} - ${r}]`,
	);
}
function pr(e) {
	const t = q3(() => qw().BHasActiveSupportAlerts());
	const r = q3(() => qw().BHasAckOnlyActiveSupportAlerts());
	const n = d.useCallback(() => qw().ShowSupportAlertsModal(), []);
	if (t) {
		return d.createElement(
			"div",
			{
				className: A_1(
					Lt.Button,
					Lt.SupportAlertsButton,
					r && Lt.AckOnlyAlerts,
				),
				onClick: n,
			},
			Localize("#UserManagement_ActiveSupportAlert"),
		);
	} else {
		return null;
	}
}
function gr(e) {
	const t = (() => {
		const [e, t] = d.useState();
		d.useEffect(() => {
			SteamClient.UI.GetOSEndOfLifeInfo().then((e) => t(e));
		}, []);
		return e;
	})();
	const r = jb(t?.strFAQLink);
	const i = q3(() => qw().BHasActiveSupportAlerts());
	const [a] = VI("os_version_unsupported");
	if (i || !t || !t || !t.bOSWillBeUnsupported) {
		return null;
	}
	let s = LocalizePlural(
		"#Steam_EOLAlert",
		t.daysUntilOSEndOfLife,
		t.strOSName,
	);
	if (a) {
		s = Localize("#Steam_OSVersionUnsupported", t.strOSName);
	}
	return d.createElement(
		"div",
		{
			className: A_1(Lt.Button, Lt.OSEndOfLifeAlertsButton),
			onClick: r,
		},
		s,
	);
}
function hr(e) {
	const t = R7();
	q_2();
	Jt(60);
	d.useCallback(() => {
		const e = Localize("#WebUITransport_ErrorButton_ModalMessage_Public");
		pg(
			d.createElement(jt.Ee, {
				strTitle: Localize("#WebUITransport_ErrorButton_ModalTitle"),
				strDescription: e,
			}),
			t.ownerWindow ?? window,
		);
	}, [t.ownerWindow]);
	return null;
}
const Cr = d.memo((e) => {
	const { className: t, ...r } = e;
	return d.createElement(
		"div",
		{
			className: A_1(Lt.TitleBarControls, t),
			...r,
		},
		d.createElement(
			Oe.wC,
			null,
			d.createElement(Ar, null),
			d.createElement(hr, null),
			d.createElement(pr, null),
			d.createElement(gr, null),
			d.createElement(or, null),
			d.createElement(dr, null),
			d.createElement(mr, null),
			d.createElement(ur, null),
			d.createElement($t, null),
			d.createElement(ir, null),
			d.createElement(Yt, null),
			d.createElement(ar, null),
			d.createElement(sr, null),
		),
	);
});
const Sr = yr;
const Zr = Qr;
let Yr = class extends d.Component {
	static GetClassnameForParent() {
		return Zr.CollapseIconParent;
	}
	render() {
		return d.createElement(
			"div",
			{
				className: A_1(Zr.Container, this.props.isCollapsed && Zr.Collapsed),
				onClick: this.props.onClick,
			},
			d.createElement(C.f5w, null),
		);
	}
};
Yr = Cg([ht.PA], Yr);
const Kr = Yr;
const $r = Jr;
function en(e) {
	const { nTotalCount: t, nFilteredCount: r, filter: n } = e;
	const i = n.GetToolTipText();
	return d.createElement(
		pe.t1,
		null,
		d.createElement(
			"div",
			null,
			Localize("#GameList_SectionHeader_AppCountToolTip", t - r),
		),
		i.length > 0 &&
			d.createElement(
				"div",
				{
					className: $r.AppCountToolTip,
				},
				i.map((e, t) =>
					d.createElement(
						"div",
						{
							key: t,
						},
						e,
					),
				),
			),
	);
}
const tn = PA((e) => {
	const {
		strId: t,
		strName: r,
		nTotalCount: n,
		nFilteredCount: a,
		isSelected: o,
		bInHover: l,
	} = e;
	const [c, m] = useState(false);
	const u = br_1();
	const A = () => s.n6.toggleCollapsed(t);
	const g = s.n6.IsCollapsed(t);
	const h = A_1(
		$r.Container,
		l && $r.HoverOverlay,
		Kr.GetClassnameForParent(),
		o(t) && $r.Selected,
		c && $r.HasContextMenuOpen,
		(g || a == 0) && $r.SingleLine,
	);
	let f;
	let y;
	let S = vr.md.GetCollection(t);
	let w = S && S.bIsDynamic;
	if (a == n) {
		f = ` (${n})`;
	} else if (a != 0) {
		f = ` (${a}/${n})`;
		y = d.createElement(en, {
			nTotalCount: n,
			nFilteredCount: a,
			filter: s.n6.currentAppFilter,
		});
	} else {
		f = ` (${a}/${n})`;
		y = d.createElement(
			pe.zQ,
			null,
			Localize("#GameList_SectionHeader_AppCountToolTipAllHidden"),
		);
	}
	return d.createElement(
		xr.wf,
		{
			strCollectionId: t,
			onContextMenu: (e) => {
				const n = lX(
					d.createElement(qr.A, {
						strCollectionId: t,
						strDisplayName: r,
					}),
					e,
				);
				if (n) {
					m(true);
					n.SetOnHideCallback(() => m(false));
				}
			},
			className: h,
			strEligibleClassName: $r.DropOption,
			strTargetedClassName: $r.DropTarget,
			onDoubleClick: A,
		},
		d.createElement(Kr, {
			isCollapsed: g,
			onClick: A,
		}),
		d.createElement(
			"div",
			{
				className: $r.SectionHeaderContent,
				onClick: (e) => {
					if (!e.shiftKey && !e.ctrlKey && !e.metaKey) {
						Xr.b.ClearSelection();
					}
					u.Collection(t);
				},
			},
			d.createElement(
				"span",
				{
					className: $r.SectionName,
				},
				r,
			),
			d.createElement(
				pe.m9,
				{
					toolTipContent: y,
					className: $r.SectionCount,
				},
				f,
			),
			w &&
				d.createElement(
					"span",
					{
						style: {
							fontSize: 12,
						},
					},
					d.createElement(
						pe.he,
						{
							toolTipContent: Localize("#Collection_DynamicCollection"),
							nDelayShowMS: 30,
						},
						d.createElement(C.U_V, null),
					),
				),
			d.createElement("div", {
				className: $r.SectionRule,
			}),
		),
	);
});
const nn = rn;
const sn = an;
function un() {
	const { collectionid: e } = g_3();
	const t = decodeURIComponent(e);
	useEffect(() => {
		s.n6.SetGameListSelection(t, null);
		((e) => {
			const t = vr.md.GetCollection(e);
			if (t && t.bIsDynamic && t.bIsEditable) {
				const e = t
					.AsEditableCollection()
					.internalAppFilter.GetSelectedOptions(6);
				for (const t of e) {
					ve.O$.RefreshOwnedGames(t);
				}
			}
		})(t);
	}, [t]);
	return d.createElement(An, {
		collectionId: t,
	});
}
function dn(e) {
	const {
		className: t,
		bEditorOpen: r,
		appid: n,
		toolTipContent: i,
		setApps: a,
		editableCollection: s,
	} = e;
	const o = Co(n);
	const l = Xe_2(n);
	let c =
		o?.display_name ||
		l?.name ||
		l?.name ||
		Localize("#CollectionViewHeader_UnknownApp", n);
	let m =
		(o || l) &&
		d.createElement(oe.z, {
			app: o,
			appinfo: l,
			appid: n,
			eAssetType: 4,
			className: sn.GameIcon,
		});
	return d.createElement(
		pe.he,
		{
			toolTipContent: i,
			direction: "bottom",
			className: A_1(sn.FilterTag, t),
		},
		d.createElement("div", {
			className: sn.FiltertagSpacer,
		}),
		m,
		c,
		r &&
			d.createElement(
				"div",
				{
					onClick: () =>
						((e) => {
							if (r) {
								a.delete(e);
								s.Save();
							}
						})(n),
				},
				d.createElement(on.bm, null),
			),
		d.createElement("div", {
			className: sn.FiltertagSpacer,
		}),
	);
}
let An = class extends d.Component {
	state = {
		elContainerRef: undefined,
	};
	BindContainerRef(e) {
		this.setState({
			elContainerRef: e,
		});
	}
	GetCollectionFilterTags(e) {
		return wf(
			e.internalAppFilter,
			undefined,
			s.n6.isCollectionEditorOpen &&
				((t, r, n) => {
					if (s.n6.isCollectionEditorOpen) {
						e.internalAppFilter.SelectOption(r, n, false);
						e.Save();
					}
				}),
		);
	}
	GetManualChangeTags(e) {
		const t = [];
		for (const r of e.internalAddedList) {
			t.push(
				d.createElement(dn, {
					key: `added-${r}`,
					appid: r,
					className: sn.AddedAppTag,
					toolTipContent: "#CollectionViewHeader_Tooltip_ManuallyAddedApp",
					bEditorOpen: s.n6.isCollectionEditorOpen,
					setApps: e.internalAddedList,
					editableCollection: e,
				}),
			);
		}
		if (s.n6.isCollectionEditorOpen) {
			for (const r of e.internalRemovedList) {
				t.push(
					d.createElement(dn, {
						key: `removed-${r}`,
						appid: r,
						className: sn.RemovedAppTag,
						toolTipContent: "#CollectionViewHeader_Tooltip_ManuallyRemovedApp",
						bEditorOpen: s.n6.isCollectionEditorOpen,
						setApps: e.internalRemovedList,
						editableCollection: e,
					}),
				);
			}
		} else {
			const r = e.internalRemovedList.size;
			if (r > 0) {
				t.push(
					d.createElement(
						pe.he,
						{
							toolTipContent: Localize(
								"#CollectionViewHeader_Tooltip_ManuallyRemovedApps_WithCount",
								r,
							),
							direction: "bottom",
							key: "removed-many",
							className: A_1(sn.FilterTag, sn.RemovedAppTag),
						},
						d.createElement("div", {
							className: sn.FiltertagSpacer,
						}),
						Localize("#CollectionViewHeader_ManuallyRemovedApps_WithCount", r),
						d.createElement("div", {
							className: sn.FiltertagSpacer,
						}),
					),
				);
			}
		}
		return t;
	}
	FreezeCollection(e, t) {
		const r = Localize("#Collection_FreezeDynamicCollection_DialogTitle");
		pg(
			d.createElement(pn, {
				rctTitle: r,
				editableCollection: e,
			}),
			GetOwningWindowForEvent(t),
			{
				strTitle: r,
			},
		);
	}
	render() {
		const { collectionId: e } = this.props;
		const t = e && vr.md.GetCollection(e);
		if (!t) {
			return d.createElement(
				"div",
				{
					className: nn.Container,
				},
				d.createElement(
					"div",
					{
						className: nn.MissingCollectionMessage,
					},
					" ",
					Localize("#CollectionView_MissingCollection"),
					" ",
				),
			);
		}
		const r = t.bIsEditable && t.AsEditableCollection();
		let n = s.n6.collectionsAppFilter;
		if (!t.bFiltersOnGameListAppType) {
			const e = n.ToStorageFormat();
			e.filterGroups[0] = {
				rgOptions: [],
				bAcceptUnion: true,
			};
			n = new Or.E6(e);
		}
		const i = t.GetAppCountWithToolsFilter(n);
		let a;
		let o;
		let l = t.visibleApps.filter(n.Matches);
		if (l.length == i) {
			a = ` (${l.length})`;
		} else {
			a = ` (${l.length}/${i})`;
			o = d.createElement(en, {
				nTotalCount: i,
				nFilteredCount: l.length,
				filter: n,
			});
		}
		return d.createElement(
			Ur.ix,
			{
				className: nn.OuterContainer,
				scrollClassName: nn.ContainerScroll,
				innerRef: this.BindContainerRef,
				strRememberScrollKey: `collection-${t.id}`,
				scrollToTopButtonWrapper: cn.f,
			},
			d.createElement(
				xr.wf,
				{
					className: nn.Container,
					strCollectionId: e,
					strEligibleClassName: nn.DropOption,
					strTargetedClassName: nn.DropTarget,
					noFocusRing: true,
				},
				d.createElement(
					ln.Z,
					{
						className: nn.Header,
					},
					r && s.n6.isCollectionRenameOpen
						? d.createElement(hn, {
								collection: r,
								fnClose: () => s.n6.SetCollectionRenameOpen(false),
							})
						: d.createElement(
								d.Fragment,
								null,
								d.createElement(
									"div",
									{
										className: nn.CollectionName,
									},
									t.displayName,
								),
								r &&
									d.createElement(
										pe.he,
										{
											toolTipContent: "#CollectionEdit_RenameButton",
										},
										d.createElement(
											Vr.ml,
											{
												className: A_1(nn.EditButton, nn.Pencil),
												onClick: () => s.n6.SetCollectionRenameOpen(true),
											},
											d.createElement(on.ff, null),
										),
									),
							),
					d.createElement(
						pe.m9,
						{
							className: nn.SectionCount,
							toolTipContent: o,
						},
						a,
					),
					d.createElement("div", {
						className: nn.Rule,
					}),
					r &&
						r.bIsDynamic &&
						d.createElement(
							pe.he,
							{
								className: nn.DynamicCollectionLabelAndButton,
								toolTipContent: "#FilterEdit_CollectionModeHeader",
								onClick: () =>
									s.n6.SetCollectionEditorOpen(!s.n6.isCollectionEditorOpen),
							},
							d.createElement(
								"div",
								{
									className: nn.DynamicCollectionLabel,
								},
								d.createElement(on.Qi, null),
								Localize("#Collection_DynamicCollection"),
							),
							d.createElement(
								"div",
								null,
								d.createElement(
									"div",
									{
										className: nn.EditButton,
									},
									d.createElement(on.wB, null),
								),
							),
						),
				),
				r &&
					r.bIsDynamic &&
					d.createElement(
						d.Fragment,
						null,
						d.createElement(
							"div",
							{
								className: nn.DynamicCollectionSubHeader,
							},
							d.createElement(
								"div",
								{
									className: A_1(
										sn.SearchFilterInput,
										!s.n6.isCollectionEditorOpen && sn.Disabled,
									),
								},
								this.GetCollectionFilterTags(r),
								this.GetManualChangeTags(r),
							),
							s.n6.isCollectionEditorOpen &&
								d.createElement(
									"div",
									{
										className: nn.RightSideButtons,
									},
									d.createElement(
										pe.he,
										{
											direction: "bottom",
											toolTipContent:
												"#Collection_FreezeDynamicCollection_ToolTip",
											className: nn.FreezeButton,
											onClick: (e) => this.FreezeCollection(r, e),
										},
										Localize("#Collection_FreezeDynamicCollection_Button"),
									),
								),
						),
						d.createElement(gn, {
							collection: r,
							fnClose: () => s.n6.SetCollectionEditorOpen(false),
						}),
					),
				d.createElement(Lr.IJ, {
					appOverviews: l,
					strCollectionId: e,
					elScrollElement: this.state.elContainerRef,
				}),
			),
		);
	}
};
Cg([k.oI], An.prototype, "BindContainerRef", null);
Cg([k.oI], An.prototype, "GetCollectionFilterTags", null);
Cg([k.oI], An.prototype, "GetManualChangeTags", null);
Cg([k.oI], An.prototype, "FreezeCollection", null);
An = Cg([ht.PA], An);
class pn extends d.Component {
	FreezeCollection() {
		this.props.closeModal();
		this.props.editableCollection.FreezeToStatic();
		SteamClient.Stats.RecordActivationEvent("Freeze", "Collection");
	}
	render() {
		return d.createElement(jt.o0, {
			strTitle: this.props.rctTitle,
			bDestructiveWarning: true,
			closeModal: this.props.closeModal,
			strDescription: Localize(
				"#Collection_FreezeDynamicCollection_Confirmation",
			),
			onOK: this.FreezeCollection,
		});
	}
}
Cg([k.oI], pn.prototype, "FreezeCollection", null);
const gn = PA((e) => {
	const { collection: t } = e;
	const r = Qn_1();
	let n = s.n6.isCollectionEditorOpen;
	if (r && !n) {
		return null;
	} else {
		return d.createElement(
			"div",
			{
				className: nn.CollectionEditor,
				style: {
					height: n ? "auto" : 0,
					opacity: n ? 1 : 0,
					pointerEvents: n ? "initial" : "none",
				},
			},
			d.createElement(Pr.k, {
				appFilter: t.internalAppFilter,
				bUseWideFormat: Mr.o.rightPanelWidth >= 1028,
				bHideSaveButton: true,
				fnOnChange: () => t.Save(),
			}),
		);
	}
});
let hn = class extends d.Component {
	m_strCollectionName = "";
	constructor(e) {
		super(e);
		Gn_2(this);
		this.m_strCollectionName = this.props.collection.displayName;
	}
	componentDidUpdate(e) {
		if (e.collection.id != this.props.collection.id) {
			this.m_strCollectionName = this.props.collection.displayName;
		}
	}
	SaveRenamedCollection(e) {
		const t = this.props.collection;
		const r = t.displayName;
		if (this.m_strCollectionName != t.displayName) {
			t.displayName = this.m_strCollectionName;
			sp(e, t, false, this.props.fnClose, () => this.ResetName(r));
		}
		this.props.fnClose();
	}
	OnTextChanged(e) {
		this.m_strCollectionName = e.currentTarget.value;
	}
	OnBlur(e) {
		this.SaveRenamedCollection(GetOwningWindowForEvent(e));
	}
	ResetName(e) {
		this.props.collection.displayName = e;
		this.m_strCollectionName = e;
		this.props.fnClose();
	}
	OnKeyPressed(e) {
		if (e.keyCode == 13) {
			this.SaveRenamedCollection(GetOwningWindowForEvent(e));
		}
		if (e.keyCode == 27) {
			this.props.fnClose();
		}
	}
	render() {
		return d.createElement(
			d.Fragment,
			null,
			d.createElement(Wr.pd, {
				className: nn.CollectionName,
				value: this.m_strCollectionName,
				onKeyDown: this.OnKeyPressed,
				onChange: this.OnTextChanged,
				maxLength: 32,
				onBlur: this.OnBlur,
				autoFocus: true,
			}),
			d.createElement(
				"div",
				{
					className: A_1(nn.EditButton, nn.Close),
					onMouseDown: () => this.ResetName(this.props.collection.displayName),
				},
				d.createElement(on.bm, null),
			),
		);
	}
};
Cg([Re.sH], hn.prototype, "m_strCollectionName", undefined);
Cg([k.oI], hn.prototype, "SaveRenamedCollection", null);
Cg([k.oI], hn.prototype, "OnTextChanged", null);
Cg([k.oI], hn.prototype, "OnBlur", null);
Cg([k.oI], hn.prototype, "ResetName", null);
Cg([k.oI], hn.prototype, "OnKeyPressed", null);
hn = Cg([ht.PA], hn);
const _n = Cn;
class fn extends d.Component {
	render() {
		return d.createElement(
			"div",
			{
				className: _n.Item,
			},
			d.createElement(
				"div",
				{
					className: _n.Title,
				},
				Localize("#WhatsNew_PlayNext_Title"),
			),
			d.createElement(
				"div",
				{
					className: _n.Description,
				},
				Localize("#WhatsNew_PlayNext_Description"),
			),
			d.createElement(
				"div",
				{
					className: _n.ReadMore,
				},
				d.createElement(
					"a",
					{
						href: "steam://url/EventAnnouncementPage/593110/2173495126269399731",
					},
					Localize("#WhatsNew_ReadMore"),
				),
			),
			d.createElement("img", {
				className: _n.Screenshot,
				src: "/images/whatsnew_playnext.jpg",
			}),
		);
	}
}
const bn = [
	{
		fnRender: () => d.createElement(fn, null),
		dtExpiration: new Date("11/10/2020"),
		incrementalID: 3,
	},
];
class yn extends d.Component {
	render() {
		return d.createElement(
			jt.o0,
			{
				className: _n.Container,
				bAlertDialog: true,
				closeModal: this.props.closeModal,
				onOK: this.props.closeModal,
				onCancel: this.props.closeModal,
				strTitle: Localize("#WhatsNew_Title"),
			},
			this.props.rgElements,
		);
	}
}
const Sn = "whatsnew_lastseen";
const In = PA(() => {
	d.useEffect(() => {
		Bn.yC.Get().BeginDetailedConnectionStateUpdates();
		return () => Bn.yC.Get().EndDetailedConnectionStateUpdates();
	}, []);
	const e = Bn.yC.Get();
	let t = e.activeConnectionKeys();
	let r = e.closedConnectionKeys();
	return d.createElement(
		jt.eV,
		{
			bAllowFullSize: true,
		},
		d.createElement(
			Wr.Y9,
			null,
			"Steamworks Network Connections",
			d.createElement(
				"div",
				{
					className: vn.BetaText,
				},
				"BETA",
			),
		),
		d.createElement(
			Wr.iK,
			null,
			d.createElement(
				"div",
				{
					className: vn.SubHeader,
				},
				"Connection diagnostics for games using Steamworks networking",
			),
		),
		d.createElement(
			Wr.nB,
			null,
			d.createElement(
				Wr.a3,
				{
					className: vn.NetworkDialog,
				},
				t.length > 0
					? d.createElement(
							d.Fragment,
							null,
							d.createElement(
								"div",
								{
									className: vn.ActiveHeader,
								},
								"ACTIVE",
							),
							d.createElement(
								"table",
								{
									className: vn.StatsTable,
									cellSpacing: "0",
									cellPadding: "0",
								},
								d.createElement(
									"tbody",
									null,
									t.map((t) =>
										d.createElement(Zn, {
											key: t,
											active: true,
											cxn: e.connectionSummary(t),
										}),
									),
								),
							),
						)
					: d.createElement(
							"div",
							{
								className: vn.ActiveHeader,
							},
							"NO ACTIVE CONNECTIONS",
						),
				r.length > 0
					? d.createElement(
							d.Fragment,
							null,
							d.createElement(
								"div",
								{
									className: vn.ClosedHeader,
								},
								"RECENT",
							),
							d.createElement(
								"table",
								{
									className: vn.StatsTable,
									cellSpacing: "0",
									cellPadding: "0",
								},
								d.createElement(
									"tbody",
									null,
									r.map((t) =>
										d.createElement(Zn, {
											key: t,
											active: false,
											cxn: e.connectionSummary(t),
										}),
									),
								),
							),
						)
					: "",
			),
			d.createElement(Wr.wi, null),
		),
	);
});
function En(e, t) {
	if (t == null) {
		t = 0;
	}
	return e.toLocaleString(undefined, {
		minimumFractionDigits: t,
		maximumFractionDigits: t,
	});
}
function Mn(e) {
	if (e == null) {
		return "???";
	} else {
		return `${e.toFixed(0)}ms`;
	}
}
function Tn(e) {
	if (e) {
		return `[${e}]`;
	} else {
		return "[???]";
	}
}
function Rn(e) {
	if (e == null) {
		return "";
	} else {
		return `${En(e, 0)} KB/s`;
	}
}
function kn(e) {
	if (e == null) {
		return "";
	} else {
		return `${En(e, 1)} pkts/s`;
	}
}
function Dn(e) {
	if (e == null) {
		return "";
	} else {
		return `${En(e, 0)}KB`;
	}
}
function Nn(e) {
	if (e) {
		return En(e);
	} else {
		return "";
	}
}
function Fn(e) {
	if (e < 10) {
		return `0${e}`;
	} else {
		return `${e}`;
	}
}
const Gn = (e) => {
	const t = e.appid;
	const r = se.tw.GetAppOverviewByAppID(t);
	let n = null;
	if (r) {
		n = Ln(
			d.createElement(oe.z, {
				eAssetType: 4,
				app: r,
			}),
			r.display_name,
		);
	}
	return d.createElement(
		"td",
		{
			rowSpan: 2,
			className: vn.ColumnLogo,
		},
		n,
	);
};
const On = 3084;
const Pn = PA((e) => {
	const t = e.connection_key;
	const r = Bn.yC.Get();
	const n = r.getConnectionDetailsObserved(t);
	const i = r.connectionSummary(t);
	if (!n || !i) {
		return null;
	}
	let a = null;
	let s = false;
	if (n.p2p_routing()) {
		const e = n.p2p_routing().ice();
		if (e) {
			const t = e.failure_reason_code() || 0;
			const r = e.local_candidate_types();
			const n = e.remote_candidate_types();
			if (t == 0 && e.initial_ping() >= 0) {
				a =
					(r & On) == 0
						? "NAT traversal succeeded.  Your IP address was not shared."
						: "NAT traversal succeeded.  Your IP address was shared.";
				s = true;
			} else if (t) {
				a =
					t == 3998 || e.local_candidate_types_allowed() == 0
						? "NAT traversal not attempted due to local user options."
						: t == 4999 || n == 0
							? "NAT traversal not attempted.  Remote host did not share any IP addresses"
							: t == 5009 && r && n
								? (r & On) == 0
									? "NAT traversal failed.  Your IP address was not shared"
									: (n & On) == 0
										? "NAT traversal failed.  Remote host did not share IP address"
										: "NAT traversal failed due to firewall configuration."
								: `NAT traversal failed.  (${t})`;
			}
		}
	}
	const o = " <> ";
	let l = null;
	let c = null;
	const m = n.ping_default_internet_route();
	let u;
	if (n.front_quality_local() && n.front_quality_local().instantaneous()) {
		u = n.front_quality_local().instantaneous().ping_ms();
	}
	const A = n.ping_interior();
	const p = n.ping_remote_front();
	let g = m - i.ping;
	if (!(g > 1)) {
		g = 0;
	}
	const h = i.sdrpopid_local;
	const C = i.sdrpopid_remote;
	switch (n.transport_kind()) {
		case Bn.WD.k_ESteamNetTransport_SDRP2P: {
			if (u >= 0 && A >= 0 && p >= 0 && h && C) {
				l = "Local Host";
				l += o + Mn(u) + o + Tn(h);
				if (h != C || A > 0) {
					l += o + Mn(A) + o + Tn(C);
				}
				l += o + Mn(p) + o;
				l += "Remote Host";
			}
			if (s && g > 0) {
				c =
					"The SDR route is %1$s faster than the default Internet route of %2$s";
				c = c.replace("%1$s", Mn(g));
				c = c.replace("%2$s", Mn(m));
			}
			break;
		}
		case Bn.WD.k_ESteamNetTransport_SDRHostedServer: {
			if (u >= 0 && A >= 0 && h != C) {
				l = "Local Host";
				l += o + Mn(u) + o + Tn(h);
				l += o + Mn(A) + o + Tn(C);
			}
			if (g > 0 && h && h != C) {
				c =
					"The SDR route through %1$s is %2$s faster than the default Internet route to %3$s of %4$s";
				c = c.replace("%1$s", Tn(h));
				c = c.replace("%2$s", Mn(g));
				c = c.replace("%3$s", Tn(C));
				c = c.replace("%4$s", Mn(m));
			}
		}
	}
	let _ = [];
	const f = (e) => {
		if (e) {
			_.push(
				d.createElement(
					"div",
					{
						className: vn.RouteItem,
					},
					e,
				),
			);
		}
	};
	f(l);
	f(a);
	f(c);
	if (_.length) {
		return d.createElement(
			"div",
			{
				className: vn.RoutingToolTip,
			},
			d.createElement(pe.MA, null, "Routing details"),
			_,
		);
	} else {
		return null;
	}
});
function Ln(e, t, r) {
	r ||= "top";
	return d.createElement(
		pe.m9,
		{
			nDelayShowMS: 0,
			direction: r,
			toolTipContent: t,
		},
		e,
	);
}
function zn(e, t, r) {
	const n = r > 0 ? t / r : 0;
	const i = `${(n * 100).toFixed(1)}%`;
	return d.createElement(
		"tr",
		{
			key: e,
		},
		d.createElement(
			"td",
			{
				className: vn.Label,
			},
			e,
		),
		d.createElement(
			"td",
			{
				className: vn.Pct,
			},
			i,
		),
		d.createElement(
			"td",
			null,
			d.createElement("span", {
				className: vn.Bar,
				style: {
					width: `${n * 90 + 1}px`,
				},
			}),
			d.createElement(
				"span",
				{
					className: vn.Num,
				},
				En(t),
			),
		),
	);
}
function xn(e, t) {
	if (!(t > 0)) {
		return null;
	}
	let r = [];
	for (let n = 0; n < e.length; ++n) {
		r.push(zn(e[n][0], e[n][1], t));
	}
	return d.createElement(
		"table",
		{
			className: vn.Histogram,
		},
		d.createElement("tbody", null, r),
	);
}
function Un(e) {
	let t = [];
	for (let r = 0; r < e.length; ++r) {
		const [n, i] = e[r];
		if (i != null) {
			t.push(
				d.createElement(
					"tr",
					{
						key: n,
					},
					d.createElement(
						"td",
						{
							className: vn.NTile,
						},
						n,
						"% <=",
					),
					d.createElement(
						"td",
						{
							className: vn.Value,
						},
						i,
					),
				),
			);
		}
	}
	if (t.length) {
		return d.createElement(
			"table",
			{
				className: vn.Distribution,
			},
			d.createElement("tbody", null, t),
		);
	} else {
		return null;
	}
}
function Wn(e) {
	const t = e && e.lifetime();
	if (!t) {
		return null;
	}
	let r = null;
	const n = [
		[0, t.ping_histogram_25() || 0],
		[25, t.ping_histogram_50() || 0],
		[50, t.ping_histogram_75() || 0],
		[75, t.ping_histogram_100() || 0],
		[100, t.ping_histogram_125() || 0],
		[125, t.ping_histogram_150() || 0],
		[150, t.ping_histogram_200() || 0],
		[200, t.ping_histogram_300() || 0],
		[300, t.ping_histogram_max() || 0],
	];
	let i;
	let a = 0;
	let s = 0;
	for (let e = 0; e < n.length; ++e) {
		if (n[e][1] > 0) {
			if (i == null) {
				i = e;
			}
			s = e + 1;
			a += n[e][1];
		}
	}
	if (a > 0) {
		i = Math.max(0, i - 2);
		s = Math.min(n.length, s + 2);
		let e = [];
		for (let t = i; t < s; ++t) {
			let r;
			let [o, l] = n[t];
			if (t == i && l == 0) {
				o = 0;
			}
			r =
				t + 1 >= n.length || (t + 1 >= s && l == 0)
					? `${Mn(o)}+`
					: `${o}-${Mn(n[t + 1][0])}`;
			e.push(zn(r, l, a));
		}
		r = d.createElement(
			"table",
			{
				className: vn.Histogram,
			},
			d.createElement("tbody", null, e),
		);
	}
	const o = (e) => e == null || Mn(e);
	const l = Un([
		[5, o(t.ping_ntile_5th())],
		[50, o(t.ping_ntile_50th())],
		[75, o(t.ping_ntile_75th())],
		[95, o(t.ping_ntile_95th())],
		[98, o(t.ping_ntile_98th())],
	]);
	const c = [
		["<1ms", t.jitter_histogram_negligible() || 0],
		["1-2ms", t.jitter_histogram_1() || 0],
		["2-5ms", t.jitter_histogram_2() || 0],
		["5-10ms", t.jitter_histogram_5() || 0],
		["10-20ms", t.jitter_histogram_10() || 0],
		["20ms+", t.jitter_histogram_20() || 0],
	];
	let m = 0;
	for (let e = 0; e < c.length; ++e) {
		m += c[e][1];
	}
	const u = xn(c, m);
	if (!r && !l && !u) {
		return null;
	}
	const A = `${En(a)} samples`;
	const p = `${En(m)} samples`;
	return d.createElement(
		"div",
		{
			className: vn.PingBreakdown,
		},
		d.createElement(
			"div",
			{
				className: vn.PingSection,
			},
			d.createElement(
				"div",
				{
					className: vn.SectionTitle,
				},
				"Round Trip Latency",
			),
			d.createElement(
				"div",
				{
					className: vn.NumSamples,
				},
				A,
			),
			r,
			r && l ? d.createElement("br", null) : null,
			l,
		),
		d.createElement(
			"div",
			{
				className: vn.JitterSection,
			},
			d.createElement(
				"div",
				{
					className: vn.SectionTitle,
				},
				"Jitter",
			),
			d.createElement(
				"div",
				{
					className: vn.NumSamples,
				},
				p,
			),
			u,
		),
	);
}
function Vn(e, t, r, n, i) {
	if (!e) {
		return null;
	}
	const a = (e) =>
		d.createElement(
			"div",
			{
				className: vn.PingOrQualityToolTip,
			},
			e,
		);
	if (!t && !r) {
		return a(e);
	}
	if (!r) {
		return a(
			d.createElement(
				"table",
				null,
				d.createElement(
					"tbody",
					null,
					d.createElement(
						"tr",
						{
							className: vn.LocalRemoteTitles,
						},
						d.createElement("th", null, "Measured by local host"),
						d.createElement("th", null, "Measured by remote host"),
					),
					d.createElement(
						"tr",
						null,
						d.createElement("td", null, e),
						d.createElement("td", null, t),
					),
				),
			),
		);
	}
	const s = "Communications with relay";
	return a(
		n
			? d.createElement(
					"table",
					null,
					d.createElement(
						"tbody",
						null,
						d.createElement(
							"tr",
							null,
							d.createElement(
								"th",
								{
									colSpan: 2,
								},
								"End-to-end",
							),
							d.createElement(
								"th",
								{
									colSpan: 2,
								},
								s,
							),
						),
						d.createElement(
							"tr",
							{
								className: vn.LocalRemoteTitles,
							},
							d.createElement("th", null, "Measured by local host"),
							d.createElement("th", null, "Measured by remote host"),
							d.createElement("th", null, "Measured by local host"),
							d.createElement("th", null, "Measured by relay"),
						),
						d.createElement(
							"tr",
							null,
							d.createElement("td", null, e),
							d.createElement("td", null, t),
							d.createElement("td", null, r),
							d.createElement("td", null, n),
						),
					),
				)
			: d.createElement(
					"table",
					null,
					d.createElement(
						"tbody",
						null,
						d.createElement(
							"tr",
							null,
							d.createElement("th", null, "End-to-end"),
							d.createElement("th", null, s),
						),
						d.createElement(
							"tr",
							null,
							d.createElement("td", null, e),
							d.createElement("td", null, r),
						),
					),
				),
	);
}
const Hn = PA((e) => {
	const t = e.connection_key;
	const r = Bn.yC.Get();
	const n = r.getConnectionDetailsObserved(t);
	const i = r.connectionSummary(t);
	if (!n || !i) {
		return null;
	}
	return Vn(
		Wn(n.e2e_quality_local()),
		Wn(n.e2e_quality_remote()),
		Wn(n.front_quality_local()),
		Wn(n.front_quality_remote()),
	);
});
function jn(e) {
	const t = e && e.lifetime();
	if (!t) {
		return null;
	}
	const r = (e) => (e == null ? 0 : parseInt(e));
	const n = r(t.packets_recv_sequenced());
	if (!n) {
		return null;
	}
	const i = r(t.packets_recv_dropped());
	const a = r(t.packets_recv_out_of_order());
	const s = r(t.packets_recv_duplicate());
	const o = r(t.packets_recv_lurch());
	const l = (e) => `(${((e * 100) / (n + i)).toFixed(2)}%)`;
	const c = (e, t, r) =>
		d.createElement(
			"tr",
			{
				key: e,
			},
			d.createElement(
				"td",
				{
					className: vn.PktOutcomeLabel,
				},
				e,
			),
			d.createElement(
				"td",
				{
					className: vn.Num,
				},
				En(t),
			),
			d.createElement(
				"td",
				{
					className: vn.Pct,
				},
				r,
			),
		);
	let m = d.createElement(
		"table",
		{
			className: vn.PacketBreakdown,
		},
		d.createElement(
			"tbody",
			null,
			c("Recv w/ pkt num", n, ""),
			c("Dropped", i, l(i)),
			c("Out of order", a, l(a)),
			c("Duplicate", s, l(s)),
			c("Pkt num lurch", o, l(o)),
		),
	);
	const u = [
		["Perfect", t.quality_histogram_100() || 0],
		[">99%", t.quality_histogram_99() || 0],
		["97-99%", t.quality_histogram_97() || 0],
		["95-97%", t.quality_histogram_95() || 0],
		["90-95%", t.quality_histogram_90() || 0],
		["75-90%", t.quality_histogram_75() || 0],
		["50-75%", t.quality_histogram_50() || 0],
		["<50%", t.quality_histogram_1() || 0],
		["Dead", t.quality_histogram_dead() || 0],
	];
	let A = 0;
	for (let e = 0; e < u.length; ++e) {
		A += u[e][1];
	}
	const p = xn(u, A);
	const g = (e) => e == null || `${e}%`;
	const h = Un([
		[50, g(t.quality_ntile_50th())],
		[25, g(t.quality_ntile_25th())],
		[5, g(t.quality_ntile_5th())],
		[2, g(t.quality_ntile_2nd())],
	]);
	const C = `${En(A)} measurement intervals`;
	return d.createElement(
		"div",
		{
			className: vn.LifetimeQualityStats,
		},
		d.createElement(
			"div",
			{
				className: vn.SectionTitle,
			},
			"Packet delivery",
		),
		m,
		d.createElement(
			"div",
			{
				className: vn.SectionTitle,
			},
			"Quality interval breakdown",
		),
		d.createElement(
			"div",
			{
				className: vn.numSamples,
			},
			C,
		),
		p,
		p && h ? d.createElement("br", null) : null,
		h,
	);
}
const qn = PA((e) => {
	const t = e.connection_key;
	const r = Bn.yC.Get();
	const n = r.getConnectionDetailsObserved(t);
	const i = r.connectionSummary(t);
	if (!n || !i) {
		return null;
	}
	return Vn(
		jn(n.e2e_quality_local()),
		jn(n.e2e_quality_remote()),
		jn(n.front_quality_local()),
		jn(n.front_quality_remote()),
	);
});
const Qn = PA((e) => {
	const t = e.connection_key;
	const r = Bn.yC.Get();
	const n = r.getConnectionDetailsObserved(t);
	const i = r.connectionSummary(t);
	let a = [];
	if (i && i.full_status) {
		a.push(d.createElement("div", null, i.full_status));
	}
	if (n && n.close_reason()) {
		a.push(
			d.createElement(
				"div",
				null,
				"(",
				n.close_reason(),
				": ",
				n.close_message(),
				")",
			),
		);
	}
	if (a.length) {
		return d.createElement(
			"div",
			{
				className: vn.CloseReasonToolTip,
			},
			a,
		);
	} else {
		return null;
	}
});
const Zn = PA((e) => {
	const t = e.cxn;
	const r = e.active;
	const n = t.key;
	const i = (r ? wn.tB() / 1000 : t.close_time) - t.start_time;
	const a = r ? kn(t.recv_pkts_rate) : Nn(t.recv_pkts_total);
	const s = r ? kn(t.send_pkts_rate) : Nn(t.send_pkts_total);
	const o = r ? Rn(t.recv_kb_rate) : Dn(t.recv_kb_total);
	const l = r ? Rn(t.send_kb_rate) : Dn(t.send_kb_total);
	const c = t.quality;
	let m = "";
	if (c != null) {
		m = `${c.toFixed(r ? 0 : 1)}%`;
	}
	return d.createElement(
		d.Fragment,
		null,
		d.createElement(
			"tr",
			{
				key: `${n}.1`,
			},
			d.createElement(Gn, {
				appid: t.appid,
			}),
			d.createElement(
				"td",
				{
					className: vn.ColumnAvatar,
					rowSpan: 2,
				},
				((e) => {
					const t = e.remote_steamid;
					if (e.is_gameserver) {
					} else if (t) {
						let e = ve.O$.GetFriendState(t);
						if (e && e.persona && e.persona.BHasAvatarSet()) {
							return d.createElement("img", {
								src: e.persona.avatar_url,
							});
						}
					}
					return null;
				})(t),
			),
			d.createElement(
				"td",
				{
					className: vn.ColumnDisplayName,
				},
				((e) => {
					const t = e.remote_steamid;
					if (e.is_gameserver) {
						if (e.sdrpopid_remote) {
							return `Gameserver in ${Tn(e.sdrpopid_remote)}`;
						} else {
							return "Gameserver";
						}
					}
					if (t && t.GetAccountType() == 1) {
						let e = ve.O$.GetFriendState(t);
						if (e && e.display_name && e.display_name.length > 0) {
							return e.display_name;
						} else {
							return "Player";
						}
					}
					return "Unknown Remote Host";
				})(t),
			),
			d.createElement(
				"td",
				{
					className: vn.ColumnStatus,
				},
				Ln(
					t.short_status,
					d.createElement(Qn, {
						connection_key: n,
					}),
				),
			),
			d.createElement(
				"td",
				null,
				Ln(
					d.createElement(
						d.Fragment,
						null,
						d.createElement(
							"span",
							{
								className: vn.ColumnPingLabel,
							},
							"Ping:",
						),
						d.createElement(
							"span",
							{
								className: vn.ColumnPingValue,
							},
							Mn(t.ping),
						),
					),
					d.createElement(Hn, {
						connection_key: n,
					}),
				),
			),
			d.createElement(
				"td",
				{
					className: vn.ColumnInOutLabel,
				},
				"In:",
			),
			d.createElement(
				"td",
				{
					className: vn.ColumnPktsValue,
				},
				a,
			),
			d.createElement(
				"td",
				{
					className: vn.ColumnKBValue,
				},
				o,
			),
		),
		d.createElement(
			"tr",
			{
				key: `${n}.2`,
			},
			d.createElement(
				"td",
				null,
				((e) => {
					let t = "";
					switch (e.transport) {
						case Bn.WD.k_ESteamNetTransport_LoopbackBuffers:
						case Bn.WD.k_ESteamNetTransport_LocalHost: {
							t = "Local host";
							break;
						}
						case Bn.WD.k_ESteamNetTransport_UDP: {
							t = e.address ? `UDP: ${e.address}` : "UDP";
							break;
						}
						case Bn.WD.k_ESteamNetTransport_UDPProbablyLocal: {
							t = e.address ? `LAN UDP: ${e.address}` : "LAN UDP";
							break;
						}
						case Bn.WD.k_ESteamNetTransport_TURN: {
							t = e.address ? `TURN Relay: ${e.address}` : "TURN Relay";
							break;
						}
						case Bn.WD.k_ESteamNetTransport_SDRP2P: {
							t = e.sdrpopid_local
								? e.sdrpopid_local != e.sdrpopid_remote && e.sdrpopid_remote
									? `SDR Relay via ${Tn(e.sdrpopid_local)}-${Tn(
											e.sdrpopid_remote,
										)}`
									: `SDR Relay via ${Tn(e.sdrpopid_local)}`
								: "SDR Relay";
							break;
						}
						case Bn.WD.k_ESteamNetTransport_SDRHostedServer: {
							t =
								e.sdrpopid_local && e.sdrpopid_local != e.sdrpopid_remote
									? `SDR Relay via ${Tn(e.sdrpopid_local)}`
									: "SDR Relay";
						}
					}
					if (e.routing_moreinfo) {
						return Ln(
							t,
							d.createElement(Pn, {
								connection_key: e.key,
							}),
						);
					} else {
						return t;
					}
				})(t),
			),
			d.createElement(
				"td",
				{
					className: vn.ColumnDurationValue,
				},
				((e) => {
					e = Math.floor(e);
					let t = Math.floor(e / 60);
					e -= t * 60;
					let r = Math.floor(t / 60);
					t -= r * 60;
					return `${r}:${Fn(t)}:${Fn(e)}`;
				})(i),
			),
			d.createElement(
				"td",
				null,
				Ln(
					d.createElement(
						d.Fragment,
						null,
						d.createElement(
							"span",
							{
								className: vn.ColumnQualityLabel,
							},
							"Quality:",
						),
						d.createElement(
							"span",
							{
								className: vn.ColumnQualityValue,
							},
							m,
						),
					),
					d.createElement(qn, {
						connection_key: n,
					}),
				),
			),
			d.createElement(
				"td",
				{
					className: vn.ColumnInOutLabel,
				},
				"Out:",
			),
			d.createElement(
				"td",
				{
					className: vn.ColumnPktsValue,
				},
				s,
			),
			d.createElement(
				"td",
				{
					className: vn.ColumnKBValue,
				},
				l,
			),
		),
	);
});
const ei = $n;
let ti = class extends d.Component {
	constructor(e) {
		super(e);
		Gn_2(this);
	}
	m_strJumpString = "";
	m_flLastJumpChar = 0;
	m_nScrollTop = 0;
	m_nDelayedIndex = -1;
	m_rgAutorunDisposers = [];
	m_listRef = d.createRef();
	m_containerRef = d.createRef();
	m_browseTimer = null;
	componentDidMount() {
		this.m_rgAutorunDisposers.push(
			mJ(
				this.GetAllStateThatShouldTriggerGameListAutoScroll,
				(e) => {
					let t = -1;
					if (
						B6(this.props.location.pathname, [
							n.BV.Library.App.Root(),
							n.BV.Library.Collection(),
							n.BV.Library.Home(),
						])
					) {
						t = this.GetCurrentSelectedIndex();
					}
					setTimeout(() => this.EnsureVisible(t, "center"), 0);
					if (!this.props.fnBIsSearchFocused()) {
						if (this.m_containerRef.current) {
							this.m_containerRef.current.focus();
						}
					}
				},
				{
					fireImmediately: true,
				},
			),
		);
		this.m_rgAutorunDisposers.push(
			fm(() => {
				this.GetRowCount();
				if (this.m_listRef.current) {
					this.m_listRef.current.forceUpdateGrid();
				}
			}),
		);
	}
	componentWillUnmount() {
		this.m_rgAutorunDisposers.forEach((e) => e());
		this.m_rgAutorunDisposers.length = 0;
	}
	GetAllStateThatShouldTriggerGameListAutoScroll() {
		return [
			s.n6.currentGameListSelection,
			s.n6.selectedGameListView,
			s.n6.bIsGameListGroupedByCollection,
			s.n6.bIsGameListSortedByRecent,
			s.n6.selectedGameListView == 1 && s.n6.currentAppFilter.BIsSelected(2, 3),
			s.n6.selectedGameListView == 1 && s.n6.currentAppFilter.BIsSelected(1, 2),
		];
	}
	ScrollToTop() {
		this.m_listRef.current.scrollToRow(0);
	}
	OnScroll({ scrollTop: e }) {
		this.m_nScrollTop = e;
		this.props.onScrolled(e == 0);
	}
	EnsureVisible(e, t) {
		if (!this.m_listRef.current) {
			return;
		}
		if (e < 0) {
			this.m_listRef.current.scrollToPosition(0);
			return;
		}
		const r = this.m_listRef.current.getOffsetForRow({
			alignment: "auto",
			index: e,
		});
		let n = this.RowHeightMeasure({
			index: e,
		});
		if (Math.abs(r - this.m_nScrollTop) < n) {
			this.m_listRef.current.scrollToPosition(r);
			return;
		}
		const i = this.m_listRef.current.getOffsetForRow({
			alignment: t,
			index: e,
		});
		this.m_listRef.current.scrollToPosition(i);
	}
	OnKeyDown(e) {
		if (this.props.fnBIsSearchFocused()) {
			return;
		}
		let t = e.keyCode;
		switch (t) {
			case 38: {
				if (e.shiftKey) {
					this.MoveRangeSelectUpOneRow();
				} else {
					this.SelectPrevRow();
				}
				e.preventDefault();
				return;
			}
			case 40: {
				if (e.shiftKey) {
					this.MoveRangeSelectDownOneRow();
				} else {
					this.SelectNextRow();
				}
				e.preventDefault();
				return;
			}
			case 37: {
				this.SetRowIsCollapsed(true);
				e.preventDefault();
				return;
			}
			case 39: {
				this.SetRowIsCollapsed(false);
				e.preventDefault();
				return;
			}
			case 36: {
				this.SelectFirstRow();
				e.preventDefault();
				return;
			}
			case 35: {
				this.SelectLastRow();
				e.preventDefault();
				return;
			}
			case 34: {
				this.PageDown();
				e.preventDefault();
				return;
			}
			case 33: {
				this.PageUp();
				e.preventDefault();
				return;
			}
		}
		if (
			!e.ctrlKey &&
			!e.altKey &&
			!e.metaKey &&
			!e.repeat &&
			(t == 32 || (t >= 65 && t <= 90) || (t >= 48 && t <= 57))
		) {
			let t = e.key[0].toLowerCase();
			this.HandleJumpCharacter(t);
			e.preventDefault();
			return;
		}
	}
	OnKeyUp(e) {
		let t = e.keyCode;
		e.preventDefault();
		clearTimeout(this.m_browseTimer);
		this.m_browseTimer = window.setTimeout(() => this.OnKeyUpDelayed(t), 250);
	}
	OnKeyUpDelayed(e) {
		if (this.m_nDelayedIndex > -1) {
			switch (e) {
				case 38:
				case 40: {
					this.SelectIndex(this.m_nDelayedIndex);
				}
			}
		}
	}
	HandleJumpCharacter(e) {
		let t = performance.now();
		if (this.m_flLastJumpChar + 1000 < t) {
			this.m_strJumpString = "";
		}
		this.m_strJumpString = this.m_strJumpString + e;
		this.m_flLastJumpChar = t;
		this.JumpToString(this.m_strJumpString);
	}
	get visibleRows() {
		let e = [];
		for (const t of s.n6.GetCollectionList()) {
			const r = t.visibleApps.filter(s.n6.currentAppFilter.Matches);
			if (r.length == 0) {
				continue;
			}
			const n = s.n6.IsCollapsed(t.id);
			e.push({
				bIsCollection: true,
				rgStrNames: [t.displayName],
				strCollectionId: t.id,
				bIsCollapsed: n,
				nTotalCollectionSize: t.GetAppCountWithToolsFilter(
					s.n6.currentAppFilter,
				),
				nFilteredSize: r.length,
			});
			if (!n) {
				for (let n of r) {
					e.push({
						bIsCollection: false,
						rgStrNames: [n.display_name, n.sort_as],
						strCollectionId: t.id,
						appOverview: n,
					});
				}
			}
		}
		return e;
	}
	GetRowCount() {
		return this.visibleRows.length;
	}
	GetAppsInBetween(e, t) {
		if (this.GetRowCount() == 0) {
			return null;
		}
		const r = this.GetIndexForApp(e);
		const n = this.GetIndexForApp(t);
		if (r < 0 || n < 0) {
			return null;
		}
		let i = [];
		for (let e = Math.min(r, n); e <= Math.max(r, n); e++) {
			const t = this.visibleRows[e];
			if (!t.bIsCollection) {
				i.push(new Xn.q(t.appOverview.appid, t.strCollectionId));
			}
		}
		return i;
	}
	GetCurrentSelectedIndex() {
		if (this.m_nDelayedIndex > -1) {
			return this.m_nDelayedIndex;
		}
		const { nAppId: e, strCollectionId: t } = s.n6.currentGameListSelection;
		return this.GetIndexForApp({
			appid: e,
			strCollectionId: t,
		});
	}
	GetIndexForApp(e) {
		if (this.GetRowCount() == 0) {
			return -1;
		}
		let t;
		let r = 0;
		while (
			r < this.GetRowCount() &&
			((t = this.visibleRows[r]), t.strCollectionId != e.strCollectionId)
		) {
			r += t.bIsCollapsed ? 1 : 1 + t.nFilteredSize;
		}
		if (r >= this.GetRowCount()) {
			return -1;
		}
		if (!e.appid) {
			return r;
		}
		if (t.bIsCollapsed) {
			return -1;
		}
		for (let n = 1; n <= t.nFilteredSize; n++) {
			if (this.visibleRows[r + n].appOverview.appid == e.appid) {
				return r + n;
			}
		}
		return -1;
	}
	SelectPrevRow() {
		if (this.GetRowCount() == 0) {
			return;
		}
		const e = this.GetCurrentSelectedIndex() - 1;
		if (!(e < 0)) {
			this.DelayedSelectIndex(e, "end");
		}
	}
	SelectNextRow() {
		if (this.GetRowCount() == 0) {
			return;
		}
		const e = this.GetCurrentSelectedIndex() + 1;
		if (e != this.GetRowCount()) {
			this.DelayedSelectIndex(e, "start");
		}
	}
	FindFirstAppFrom(e, t) {
		let r = e;
		while (r >= 0 && r < this.GetRowCount()) {
			const e = this.visibleRows[r];
			if (!e.bIsCollection) {
				return new Xn.q(e.appOverview.appid, e.strCollectionId);
			}
			r += t;
		}
		return null;
	}
	MoveRangeSelectUpOneRow() {
		if (this.GetRowCount() == 0) {
			return;
		}
		const e = Xr.b.GetLastRangeSelection();
		const t = e ? this.GetIndexForApp(e) - 1 : this.GetRowCount() - 1;
		const r = this.FindFirstAppFrom(t, -1);
		if (r) {
			Xr.b.SelectRange(r, this.GetAppsInBetween);
			this.EnsureVisible(this.GetIndexForApp(r), "center");
		}
	}
	MoveRangeSelectDownOneRow() {
		if (this.GetRowCount() == 0) {
			return;
		}
		const e = Xr.b.GetLastRangeSelection();
		const t = e ? this.GetIndexForApp(e) + 1 : 0;
		const r = this.FindFirstAppFrom(t, 1);
		if (r) {
			Xr.b.SelectRange(r, this.GetAppsInBetween);
			this.EnsureVisible(this.GetIndexForApp(r), "center");
		}
	}
	SelectFirstRow() {
		if (this.GetRowCount() != 0) {
			this.SelectIndex(0);
		}
	}
	SelectLastRow() {
		if (this.GetRowCount() != 0) {
			this.SelectIndex(this.GetRowCount() - 1);
		}
	}
	PageDown() {
		if (this.GetRowCount() == 0) {
			return;
		}
		let e = Math.ceil(this.m_listRef.current.props.height / 26);
		let t = Math.min(
			this.GetCurrentSelectedIndex() + e,
			this.GetRowCount() - 1,
		);
		this.DelayedSelectIndex(t, "start");
	}
	PageUp() {
		if (this.GetRowCount() == 0) {
			return;
		}
		let e = Math.ceil(this.m_listRef.current.props.height / 26);
		let t = Math.max(this.GetCurrentSelectedIndex() - e, 0);
		this.DelayedSelectIndex(t, "end");
	}
	SetRowIsCollapsed(e) {
		if (this.GetRowCount() == 0) {
			return;
		}
		const t = this.visibleRows[this.GetCurrentSelectedIndex()];
		if (t && t.bIsCollection) {
			s.n6.SetIsCollapsed(t.strCollectionId, e);
		}
	}
	JumpToString(e) {
		let t = this.GetCurrentSelectedIndex();
		t = t < 0 ? 0 : t;
		for (let r = 0; r < this.GetRowCount(); r++) {
			let n = (t + r) % this.GetRowCount();
			let i = this.visibleRows[n];
			for (let t of i.rgStrNames) {
				if (t.toLowerCase().startsWith(e)) {
					this.SelectIndex(n);
					return;
				}
			}
		}
	}
	DelayedSelectIndex(e, t) {
		this.m_nDelayedIndex = e;
		this.EnsureVisible(e, t);
	}
	SelectIndex(e) {
		this.m_nDelayedIndex = -1;
		let t = this.visibleRows[e];
		Xr.b.ClearSelection();
		if (t.bIsCollection) {
			this.props.navigator.Collection(t.strCollectionId);
		} else {
			s.n6.SetGameListSelection(t.strCollectionId, t.appOverview.appid);
			s.n6.UpdateGameListSelection();
			this.props.navigator.App(t.appOverview.appid, {
				strCollectionId: t.strCollectionId,
			});
		}
	}
	EqualsCurrentCursor(e, t) {
		if (this.m_nDelayedIndex > -1) {
			const r = this.visibleRows[this.m_nDelayedIndex];
			if (r) {
				if (t === undefined) {
					return r.bIsCollection && e == r.strCollectionId;
				} else {
					return (
						!r.bIsCollection &&
						e == r.strCollectionId &&
						t == r.appOverview.appid
					);
				}
			}
		}
		const r = s.n6.currentGameListSelection;
		if (t === undefined) {
			return (
				Er.z.BRouteMatch(n.BV.Library.Collection()) && e == r.strCollectionId
			);
		} else {
			return (
				Er.z.BRouteMatch(n.BV.Library.App.Root()) &&
				e == r.strCollectionId &&
				t == r.nAppId
			);
		}
	}
	RowRenderer({ key: e, index: t, parent: r, style: n }) {
		if (t < 0 || t >= this.GetRowCount()) {
			return null;
		}
		const i = this.visibleRows[t];
		const a = `${t}-${i.strCollectionId}-${i.rgStrNames[0]}`;
		const s = t + 1;
		const o = s == this.GetRowCount() || this.visibleRows[s].bIsCollection;
		const l = (e = true) =>
			i.bIsCollection
				? d.createElement(tn, {
						key: a,
						strId: i.strCollectionId,
						strName: i.rgStrNames[0],
						nTotalCount: i.nTotalCollectionSize,
						nFilteredCount: i.nFilteredSize,
						isSelected: this.EqualsCurrentCursor,
						bInHover: e,
					})
				: d.createElement(Kn.Ay, {
						key: a,
						index: t,
						item: i.appOverview,
						strCollectionId: i.strCollectionId,
						bIsLastInCollection: o,
						fnSelectAppsInRange: this.GetAppsInBetween,
						isSelected: this.EqualsCurrentCursor,
						bInHover: e,
						bInGamepadUI: this.props.bInGamepadUI,
						onClick: (e) => this.SelectIndex(e),
					});
		n = {
			...n,
			width: undefined,
			minWidth: "100%",
		};
		return d.createElement(
			Jn.z,
			{
				hoverDelay: 0,
				hoverHideDelay: 0,
				key: e,
				style: n,
				bOnlyIfOverflowing: true,
				renderHover: l,
				direction: "overlay",
			},
			l(false),
		);
	}
	RowHeightMeasure({ index: e }) {
		if (e < 0 || e >= this.GetRowCount()) {
			return null;
		}
		this.visibleRows[e].bIsCollection;
		return 26;
	}
	render() {
		let e = this.GetRowCount();
		if (e == 0) {
			if (s.n6.BIsSearchActive()) {
				let e = "";
				if (s.n6.BIsSearchByTypeActive()) {
					e =
						u.B7.ResolveURL("StoreGameSearchPage") +
						s.n6.currentAppFilter.GetTagsString();
				} else if (s.n6.BIsTextSearchActive()) {
					e = `${u.B7.ResolveURL(
						"StoreGameSearchPage",
					)}?term=${encodeURIComponent(s.n6.currentAppFilter.searchText)}`;
				}
				return d.createElement(
					"div",
					{
						className: ei.NoSearchResultsContainer,
					},
					d.createElement(
						"div",
						{
							className: ei.NoResultsTitle,
						},
						Localize("#GameList_Search_NoResults_Title"),
					),
					d.createElement(
						"div",
						{
							className: ei.NoResultsLink,
							onClick: (t) =>
								(GetOwningWindowForEvent(t).location.href =
									`steam://openurl/${e}`),
						},
						Localize("#GameList_Search_NoResults_Link"),
					),
				);
			}
			{
				const e = s.n6.collectionsAppFilter.BIsSelected(0, 1);
				return d.createElement(
					"div",
					{
						className: ei.NoSearchResultsContainer,
					},
					d.createElement(
						"div",
						{
							className: ei.NoResultsTitle,
						},
						Localize("#GameList_View_NothingSelected_HelpText"),
					),
					!e &&
						d.createElement(
							"div",
							{
								className: ei.NoResultsLink,
								onClick: () =>
									s.n6.collectionsAppFilter.SelectOption(0, 1, true),
							},
							Localize("#GameList_Search_GamesCheckbox_Link"),
						),
				);
			}
		}
		return d.createElement(
			"div",
			{
				className: ei.Container,
				ref: this.m_containerRef,
				tabIndex: 0,
			},
			d.createElement(Yn.t$, null, ({ width: t, height: r }) =>
				d.createElement(Yn.B8, {
					ref: this.m_listRef,
					width: t,
					height: r,
					onScroll: this.OnScroll,
					rowCount: e,
					rowHeight: this.RowHeightMeasure,
					rowRenderer: this.RowRenderer,
				}),
			),
		);
	}
};
Cg([Re.sH], ti.prototype, "m_nDelayedIndex", undefined);
Cg([k.oI], ti.prototype, "ScrollToTop", null);
Cg([k.oI], ti.prototype, "OnScroll", null);
Cg([k.oI], ti.prototype, "EnsureVisible", null);
Cg([k.oI], ti.prototype, "OnKeyDown", null);
Cg([k.oI], ti.prototype, "OnKeyUp", null);
Cg([k.oI], ti.prototype, "OnKeyUpDelayed", null);
Cg(
	[
		EW({
			keepAlive: true,
		}),
	],
	ti.prototype,
	"visibleRows",
	null,
);
Cg([k.oI], ti.prototype, "GetAppsInBetween", null);
Cg([k.oI], ti.prototype, "EqualsCurrentCursor", null);
Cg([k.oI], ti.prototype, "RowRenderer", null);
Cg([k.oI], ti.prototype, "RowHeightMeasure", null);
ti = Cg([ht.PA], ti);
const ri = forwardRef((e, t) => {
	const r = zy();
	const n = br_1();
	return d.createElement(ti, {
		...e,
		location: r,
		ref: t,
		navigator: n,
	});
});
const ii = ni;
const si = ai;
const li = [1, 8192, 2, 2048, 4];
function ci(e) {
	const { closeModal: t } = e;
	return d.createElement(
		oi.Ee,
		{
			closeModal: t,
			strTitle: Localize("#GameList_ToolsEnabled_Title"),
		},
		d.createElement("p", null, Localize("#GameList_ToolsEnabled_1")),
		d.createElement("p", null, Localize("#GameList_ToolsEnabled_2")),
	);
}
function mi() {
	return `ToolsShown_${qw().GetCurrentUser().strSteamID}`;
}
const ui = PA((e) => {
	const { gamelistref: t, bScrolledTop: r } = e;
	const n = d.useRef(undefined);
	const i = d.useRef(undefined);
	const a = d.useCallback(() => {
		if (s.n6.currentAppFilter.BIsSelected(0, 4)) {
			if (
				!(() => {
					const e = mi();
					return window.localStorage.getItem(e) == "true";
				})()
			) {
				pg(d.createElement(ci, null), GetOwningWindowForElement(n.current));
				(() => {
					const e = mi();
					window.localStorage.setItem(e, "true");
				})();
			}
		}
		n.current?.focus();
		i.current = undefined;
	}, []);
	const o = d.useCallback(() => {
		i.current?.Hide();
	}, []);
	const l = d.useCallback(() => {
		const e = {
			bOverlapHorizontal: true,
			bOverlapVertical: false,
			bMatchWidth: true,
			strClassName: A_1(ii.contextMenu, si.DropDown),
		};
		i.current = lX(
			d.createElement(gi, {
				fnHide: o,
			}),
			n.current,
			e,
		);
		i.current.SetOnHideCallback(a);
	}, [o, a]);
	const c = d.useCallback(() => {
		t.current?.ScrollToTop();
	}, [t]);
	const m = s.n6.selectedGameListView === 10;
	const u = s.n6.bIsGameListSortedByRecent;
	const A = s.n6.selectedGameListView != 1;
	const g = s.n6.currentAppFilter.BIsSelected(1, 2);
	const h = !r;
	const f = !td();
	const y = CI();
	const S = s.n6.currentAppFilter.BIsSelected(1, 5);
	return d.createElement(
		"div",
		{
			className: si.Bar,
		},
		d.createElement(
			"div",
			{
				className: si.SearchBar,
				ref: n,
				tabIndex: -1,
			},
			d.createElement(
				"div",
				{
					className: si.MenuHeader,
					onClick: l,
				},
				d.createElement(
					"span",
					{
						className: si.ViewName,
					},
					(() => {
						if (s.n6.selectedGameListView == 11) {
							return Localize("#GameList_View_SearchResults");
						}
						const e = [];
						let t = true;
						for (const r of li) {
							const n = s.n6.currentAppFilter.BIsSelected(0, r);
							const i =
								r == 1 || vr.md.GetCollectionForAppType(r).allApps.length > 0;
							if (n && i) {
								e.push(r);
							} else if (i) {
								t = false;
							} else if (n) {
								console.log(
									`Automatically un-selecting '${
										vr.md.GetCollectionForAppType(r).displayName
									}' from game list.`,
								);
								setTimeout(
									() => s.n6.SelectCollectionsAppFilterOption(0, r, false),
									0,
								);
							}
						}
						if (t || e.length == 0) {
							return Localize("#GameList_View_All");
						}
						const r = e.map(
							(e) => vr.md.GetCollectionForAppType(e).displayName,
						);
						return new Intl.ListFormat(
							LocalizationManager.GetPreferredLocales(),
							{
								type: "conjunction",
								style: "long",
							},
						).format(r);
					})(),
				),
				d.createElement(
					"div",
					{
						className: si.Arrow,
					},
					d.createElement(C.GB9, null),
				),
			),
			d.createElement(
				pe.he,
				{
					direction: "top",
					nDelayShowMS: 240,
					toolTipContent: "#Generic_ScrollToTop",
					className: A_1(si.ScrollToTop, h && si.Visible),
					onClick: c,
				},
				d.createElement(C.i3G, {
					angle: 0,
				}),
			),
		),
		d.createElement(
			"div",
			{
				className: si.ViewFiltersBar,
			},
			d.createElement(
				"div",
				{
					className: A_1(si.Filters, m && si.Disabled),
				},
				f &&
					d.createElement(
						pe.he,
						{
							direction: "top",
							nDelayShowMS: 240,
							toolTipContent: y
								? "#GameList_View_Platform_Linux"
								: "#GameList_View_Platform_Apple",
							className: A_1(
								si.CheckboxWithImage,
								A && si.Disabled,
								S && si.Active,
							),
							onClick: () => A || Ai(1, 5, !S),
						},
						y && d.createElement(C.Wy0, null),
						!y && d.createElement(C.kPc, null),
					),
				d.createElement(
					pe.he,
					{
						direction: "top",
						nDelayShowMS: 240,
						toolTipContent: "#GameList_View_SortByRecent",
						className: A_1(
							si.CheckboxWithImage,
							m && si.Disabled,
							u && si.Active,
						),
						onClick: () => {
							return (
								m ||
								((e = !u),
								s.n6.SetGameListSortedByRecent(e),
								void SteamClient.Stats.RecordActivationEvent(
									"SetGameListSortedByRecent",
									e ? "Enabled" : "Disabled",
								))
							);
							var e;
						},
					},
					d.createElement(C.QHH, null),
				),
				d.createElement(
					pe.m9,
					{
						direction: "right",
						nDelayShowMS: 240,
						toolTipContent: d.createElement(di, null),
						className: A_1(
							si.CheckboxWithImage,
							A && si.Disabled,
							g && si.Active,
						),
						onClick: () => A || Ai(1, 2, !g),
					},
					d.createElement(C.$Qn, null),
				),
			),
		),
	);
});
function di(e) {
	const [t] = VI("ready_to_play_includes_streaming");
	return d.createElement(
		pe.t1,
		null,
		d.createElement(
			pe.MA,
			null,
			Localize("#GameList_View_ShowOnlyReadyToPlay"),
		),
		d.createElement(
			pe.I2,
			null,
			d.createElement(
				"div",
				null,
				Localize("#GameList_View_ReadyToPlay_ToolTip_Installed"),
			),
			t &&
				d.createElement(
					"div",
					null,
					Localize("#GameList_View_ReadyToPlay_ToolTip_Streaming"),
				),
		),
		d.createElement(
			pe.I2,
			null,
			Localize("#GameList_View_ReadyToPlay_ToolTip_Setting"),
		),
	);
}
function Ai(e, t, r) {
	s.n6.SelectCollectionsAppFilterOption(e, t, r);
	SteamClient.Stats.RecordActivationEvent(
		`FilterOption_${$P(e, t)}`,
		r ? "Enabled" : "Disabled",
	);
}
function pi(e) {
	const { eAppType: t } = e;
	const r = vr.md.GetCollectionForAppType(t);
	const n = r.allApps.length;
	const i = r.visibleApps.length;
	if (t != 1 && n == 0) {
		return null;
	}
	const a = d.createElement(
		"span",
		{
			className: si.ViewName,
		},
		r.displayName,
		d.createElement(
			"span",
			{
				className: si.AppCount,
			},
			`(${i})`,
		),
	);
	return d.createElement(Wr.Yh, {
		className: A_1(si.Row, si.Checkbox),
		label: a,
		checked: s.n6.currentAppFilter.BIsSelected(0, t),
		onChange: (e) => s.n6.SelectCollectionsAppFilterOption(0, t, e),
	});
}
let gi = class extends d.Component {
	render() {
		let e = false;
		switch (s.n6.selectedGameListView) {
			case 10: {
				e = true;
			}
			case 1: {
				const t = s.n6.bIsGameListSortedByRecent || e;
				const r = se.tw.sharedLibraryAccountIds.length > 0;
				return d.createElement(
					d.Fragment,
					null,
					li.map((e) =>
						d.createElement(pi, {
							key: `checkbox-eAppType-${e}`,
							eAppType: e,
						}),
					),
					d.createElement("div", {
						className: si.Rule,
					}),
					d.createElement(
						pe.he,
						{
							bDisabled: !t,
							toolTipContent: "#GameList_View_GroupingDisabled_ToolTip",
						},
						d.createElement(Wr.Yh, {
							key: "checkbox-grouping-collections",
							className: A_1(si.Row, si.Checkbox, t && si.Disabled),
							disabled: t,
							label: Localize("#GameList_View_GroupByCollections"),
							checked: s.n6.bIsGameListGroupedByCollection,
							onChange: (e) => {
								s.n6.SetGameListGroupedByCollection(e);
								SteamClient.Stats.RecordActivationEvent(
									"SetGameListGroupedByCollection",
									e ? "Enabled" : "Disabled",
								);
								this.props.fnHide();
							},
						}),
						r &&
							d.createElement(Wr.Yh, {
								key: "checkbox-grouping-shared-libraries",
								className: A_1(si.Row, si.Checkbox, t && si.Disabled),
								disabled: t,
								label: Localize("#GameList_View_GroupSharedLibraries"),
								checked: s.n6.bIsGameListGroupedBySharedLibraries,
								onChange: (e) => {
									s.n6.SetGameListGroupedBySharedLibrary(e);
									this.props.fnHide();
								},
							}),
					),
				);
			}
			case 11: {
				return d.createElement(
					"div",
					{
						key: "view-collections",
						className: A_1(si.Row, si.ViewName),
						onClick: () => {
							s.n6.SelectGameListView(1);
							this.props.fnHide();
						},
					},
					Localize("#GameList_View_ExitSearch"),
				);
			}
		}
	}
};
gi = Cg([ht.PA], gi);
const Ci = hi;
function _i() {
	return d.createElement(
		N.k2,
		{
			to: n.BV.Library.Home(),
			className: Ci.Bar,
			activeClassName: Ci.Selected,
		},
		d.createElement(
			"div",
			{
				className: Ci.Icon,
			},
			d.createElement(C.Cip, null),
		),
		d.createElement(
			"div",
			{
				className: Ci.Label,
			},
			Localize("#GameList_Home"),
		),
	);
}
function fi() {
	return d.createElement(
		"div",
		{
			className: Ci.CollectionBar,
		},
		d.createElement(
			N.k2,
			{
				to: n.BV.Library.AllCollections(),
				className: A_1(Ci.Bar, Ci.CollectionButton),
				activeClassName: Ci.Selected,
			},
			d.createElement(
				"div",
				{
					className: Ci.CollectionIcon,
				},
				d.createElement("div", {
					className: Ci.CollectionIconBox,
				}),
				d.createElement("div", {
					className: Ci.CollectionIconBox,
				}),
				d.createElement("div", {
					className: Ci.CollectionIconBox,
				}),
				d.createElement("div", {
					className: Ci.CollectionIconBox,
				}),
			),
		),
	);
}
const yi = bi;
const Si = (e) => {
	const t = (() => {
		const e = zy();
		const t = Sz(e);
		const r = useRef(undefined);
		const n = e?.pathname;
		const i = t?.pathname;
		useEffect(() => {
			if (n && i && n !== i) {
				r.current?.focus();
			}
		}, [r, n, i]);
		return r;
	})();
	const r = useRef(undefined);
	const n = useRef(undefined);
	const [i, a] = useState(true);
	const o = useCallback(() => n.current?.FocusOnSearch(), [n]);
	const l = useCallback(() => n.current?.BIsFocused(), [n]);
	const c = q3(() => s.n6.selectedGameListView);
	const m = Qn_1();
	const u = R7();
	const p = useCallback(
		(e) => {
			if (e.keyCode == 70 && (e.ctrlKey || e.metaKey)) {
				o();
				e.preventDefault();
				return;
			}
		},
		[o],
	);
	const g = (e) => {
		const t = e.dataTransfer.types.includes("text/appids");
		e.dataTransfer.dropEffect = t ? "move" : "none";
		e.preventDefault();
		e.stopPropagation();
	};
	const h = (e) => {
		const t = e.dataTransfer.types.includes("text/appids");
		e.dataTransfer.dropEffect = t ? "move" : "none";
		e.preventDefault();
		e.stopPropagation();
	};
	useEffect(() => {
		const e = u.ownerWindow;
		e.addEventListener("keydown", p);
		e.addEventListener("dragenter", g);
		e.addEventListener("dragover", h);
		return () => {
			e.removeEventListener("keydown", p);
			e.removeEventListener("dragenter", g);
			e.removeEventListener("dragover", h);
		};
	}, [u.ownerWindow, p]);
	return d.createElement(
		"div",
		{
			className: yi.Container,
			ref: t,
			tabIndex: 0,
			onKeyDown: (e) => r.current?.OnKeyDown(e),
			onKeyUp: (e) => r.current?.OnKeyUp(e),
		},
		!e.bSmallMode &&
			d.createElement(
				"div",
				{
					className: yi.GameListHomeAndSearch,
				},
				d.createElement(
					"div",
					{
						className: yi.HomeBox,
					},
					d.createElement(Oe.tH, null, d.createElement(_i, null)),
				),
				d.createElement(
					"div",
					{
						className: yi.CollectionsButton,
					},
					d.createElement(
						Oe.tH,
						null,
						d.createElement(
							pe.he,
							{
								direction: "right",
								nDelayShowMS: 240,
								toolTipContent: Localize("#GameList_View_Collections"),
							},
							d.createElement(fi, null),
						),
					),
				),
			),
		d.createElement(
			Oe.tH,
			null,
			d.createElement(ui, {
				gamelistref: r,
				bScrolledTop: i,
			}),
		),
		d.createElement(
			Oe.tH,
			null,
			d.createElement(jr.ye, {
				ref: n,
				bSmallMode: e.bSmallMode,
			}),
		),
		d.createElement(
			Oe.tH,
			null,
			c == 10 &&
				d.createElement(
					"div",
					{
						className: yi.OneCollectionWarning,
						onClick: () => s.n6.SelectGameListView(1),
					},
					Localize("#GameList_View_ShowAllCollections"),
				),
		),
		d.createElement(
			Oe.tH,
			null,
			d.createElement(ri, {
				ref: r,
				fnBIsSearchFocused: l,
				bInGamepadUI: m,
				onScrolled: a,
			}),
		),
	);
};
const Bi = wi;
const Fi = Ni;
const Oi = Gi;
const zi = Li;
function xi(e) {
	const {
		event: t,
		spotlightURLOverride: r,
		fnHandleOpenEvent: n,
		fnImageFailureCallback: i,
		fnFilterImageURLsForKnownFailures: a,
		langOverride: s,
	} = e;
	const o = c_3();
	const l = d.useCallback(
		(e) => {
			e.preventDefault();
			if (n) {
				n(t);
			}
		},
		[t, n],
	);
	const c = s || sf(de.TS.LANGUAGE);
	const [m, u, g, h] = q3(() => [
		t.GetSummaryWithFallback(c),
		t.GetNameWithFallback(c),
		t.GetCategoryAsString(),
		t.BShowLibrarySpotlightText(),
	]);
	let C = new Array();
	C =
		r !== undefined
			? [r]
			: t.appid == 2434320 || de.TS.EUNIVERSE == 2
				? o
					? t.GetImageForSizeAsArrayWithFallback(
							"localized_store_app_spotlight_mobile",
							c,
							Mi.wI.full,
						)
					: t.GetImageForSizeAsArrayWithFallback(
							"localized_store_app_spotlight",
							c,
							Mi.wI.full,
						)
				: t.GetImageForSizeAsArrayWithFallback(
						"spotlight",
						c,
						Mi.wI.spotlight_main,
					);
	if (a) {
		C = a(C);
	}
	const _ = m.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
	return d.createElement(
		d.Fragment,
		null,
		d.createElement(
			"div",
			{
				className: zi.MajorEvent_Ctn,
				ref: e.containerRef,
			},
			d.createElement(
				ln.Z,
				{
					className: A_1(
						zi.AppDetailsSpotlightContainer,
						zi.MajorEventContainer,
					),
					onActivate: l,
					focusable: true,
				},
				d.createElement(
					"div",
					{
						className: zi.MajorEventBackground,
					},
					d.createElement(Ti.c, {
						className: zi.MajorEventImageBackgroundBlur,
						rgSources: C,
						onIncrementalError: (e, t, r) => i && i(t),
					}),
				),
				d.createElement(
					"div",
					{
						className: zi.MajorEventImageContainer,
					},
					d.createElement(Ti.c, {
						className: zi.MajorEventImage,
						rgSources: C,
						onIncrementalError: (e, t, r) => i && i(t),
					}),
					d.createElement("div", {
						className: zi.MajorEventImageTemplate,
					}),
					d.createElement(
						"div",
						{
							className: zi.MajoreEventImageContentContainer,
						},
						h &&
							d.createElement(
								"div",
								{
									className: zi.MajorEventContent,
								},
								d.createElement(Ti.c, {
									className: zi.MajorEventSpotlightBackground,
									rgSources: C,
									onIncrementalError: (e, t, r) => i && i(t),
								}),
								d.createElement(
									"div",
									{
										className: zi.MajorEventTextCtn,
									},
									d.createElement(
										"div",
										{
											className: zi.MajorEventTitle,
										},
										u,
									),
									d.createElement(
										"div",
										{
											className: zi.MajorEventSummary,
										},
										_,
									),
								),
							),
					),
				),
				d.createElement("div", {
					className: zi.BottomShadow,
				}),
			),
		),
	);
}
const Ui = PA((e) => {
	const { majorUpdates: t } = e;
	const [r, n] = useState(0);
	const [a, s] = useState(false);
	const o = br_1();
	const l = () => Ei.dm.RemoveEvent(t[r].GID);
	const c = (e) => {
		lX(
			d.createElement(
				f.tz,
				null,
				d.createElement(
					f.kt,
					{
						onSelected: () => s(true),
					},
					Localize("#MajorUpdate_Context_WhyAmISeeingThis"),
				),
				d.createElement(
					f.kt,
					{
						onSelected: l,
					},
					Localize("#MajorUpdate_Context_RemoveThisUpdate"),
				),
			),
			e,
		);
	};
	const m = d.useRef(null);
	const u = d.useRef(null);
	if (!t || t.length == 0) {
		return d.createElement("div", null);
	}
	const A = t.map((e, t) =>
		d.createElement("div", {
			key: `eventTab${t}`,
			className: A_1(Oi.TopBarTab, r == t ? Oi.Selected : ""),
			onClick: () => n(t),
		}),
	);
	const g = t[r];
	Ei.dm.TrackEventShownToUser(g, 2);
	let h = g.startTime;
	if (g.visibilityStartTime != 0) {
		h = g.visibilityStartTime;
	}
	const C = se.tw.GetAppOverviewByAppID(g.appid);
	const y = d.createElement(
		"div",
		{
			className: Oi.HeaderNavigation,
		},
		d.createElement(
			"div",
			{
				className: Oi.TopBarTabs,
			},
			A,
		),
		d.createElement(
			"div",
			{
				className: Oi.NextUpdateLink,
				onClick: () => {
					if (r + 1 >= t.length) {
						n(0);
					} else {
						n(r + 1);
					}
				},
			},
			Localize("#MajorUpdate_NextUpdate"),
		),
	);
	return d.createElement(
		Oe.tH,
		null,
		d.createElement(
			"div",
			{
				className: Oi.LibraryHomeMajorUpdates,
				onContextMenu: c,
			},
			d.createElement(
				Rr.A,
				{
					className: Oi.TransitionGroup,
					appear: true,
					enter: true,
					exit: true,
				},
				d.createElement(
					kr.A,
					{
						nodeRef: m,
						key: `majorUpdateTransition${t[r].GID}`,
						classNames: {
							enter: Oi.TransitionEnter,
							enterActive: Oi.TransitionEnterActive,
							exit: Oi.TransitionExit,
							exitActive: Oi.TransitionExitActive,
						},
						timeout: 500,
					},
					d.createElement(xi, {
						containerRef: m,
						strDisplayName: C.display_name,
						event: t[r],
						headerNavElement: y,
						fnHandleOpenEvent: () => {
							const e = t[r];
							Ei.dm.TrackEventClickedByUser(e, 2);
							o.App(e.appid, {
								gidPartnerEvent: e.GID,
							});
						},
						fnFilterImageURLsForKnownFailures:
							Ei.dm.FilterImageURLsForKnownFailures,
						fnImageFailureCallback: Ei.dm.ImageFailureCallback,
					}),
				),
			),
			d.createElement(
				"div",
				{
					className: Oi.DetailsButton,
					onClick: c,
				},
				"...",
			),
			d.createElement(
				kr.A,
				{
					nodeRef: u,
					in: a,
					timeout: 250,
					unmountOnExit: true,
					classNames: {
						enter: Oi.DialogEnter,
						enterActive: Oi.DialogEnterActive,
						exit: Oi.DialogExit,
						exitActive: Oi.DialogExitActive,
					},
				},
				d.createElement(
					"div",
					{
						ref: u,
						className: Oi.ExplanationDialogContainer,
					},
					d.createElement("div", {
						className: Oi.ExplanationDialogBackground,
						onClick: () => s(false),
					}),
					d.createElement(
						"div",
						{
							className: Oi.ExplanationDialog,
						},
						d.createElement(
							"div",
							{
								className: Oi.ExplanationTitle,
							},
							Localize("#MajorUpdate_Context_WhyAmISeeingThis"),
						),
						d.createElement(
							"div",
							{
								className: Oi.ExplanationBody,
							},
							Localize("#MajorUpdate_Context_WhyAmISeeingThis_Text"),
						),
						d.createElement(
							Wr.jn,
							{
								className: Oi.UpdateButton,
								onClick: () => s(false),
							},
							Localize("#Generic_GotIt"),
						),
					),
				),
			),
		),
	);
});
const Vi = Wi;
const qi = PA((e) => {
	const { event: t, bInGamepadUI: r } = e;
	const n = Co(t.appid);
	const a = br_1();
	const s = () => Ei.dm.RemoveEvent(t.GID);
	const o = () => Ei.dm.LowerAppPriorityForApp(t.appid);
	const l = () => Ei.dm.RaiseAppPriorityForApp(t.appid);
	const c = (e) => {
		let i = Ei.dm.GetUserAppPrioritySetting(t.appid);
		lX(
			d.createElement(
				f.tz,
				null,
				r &&
					d.createElement(
						f.kt,
						{
							onSelected: () => a.App(t.appid),
						},
						Localize("#Generic_ViewGameDetails"),
					),
				d.createElement(
					f.kt,
					{
						onSelected: s,
					},
					Localize("#MajorUpdate_Context_RemoveThisUpdate"),
				),
				i > -2 &&
					n &&
					d.createElement(
						f.kt,
						{
							onSelected: o,
						},
						Localize("#MajorUpdate_Context_ShowMeFewerForApp", n.display_name),
					),
				i < 2 &&
					n &&
					d.createElement(
						f.kt,
						{
							onSelected: l,
						},
						Localize("#MajorUpdate_Context_ShowMeMoreForApp", n.display_name),
					),
			),
			e,
		);
	};
	const m = (e) => {
		if (vr.md.BIsVisible(n) && n.app_type != 256) {
			lX(
				d.createElement(Di.uU, {
					overview: n,
					client: "mostavailable",
					launchSource: 103,
					bInGamepadUI: r,
					ownerWindow: GetOwningWindowForEvent(e),
				}),
				e,
				zq(),
			);
		}
	};
	if (!t) {
		return d.createElement("div", {
			className: Vi.PartnerEventRowCapsule,
		});
	}
	if (!n) {
		return null;
	}
	let u = n.display_name;
	let A = d.createElement(oe.z, {
		app: n,
		eAssetType: 4,
		className: Vi.GameIcon,
	});
	let g = sf(de.TS.LANGUAGE);
	let h = Ei.dm.FilterImageURLsForKnownFailures(
		t.GetImageForSizeAsArrayWithFallback("capsule", g, Mi.wI.capsule_main),
	);
	let C = t.GetNameWithFallback(g);
	let y = d.createElement(
		"span",
		{
			className: Vi.HeaderNameAndType,
		},
		u,
	);
	let S = t.GetCategoryAsString();
	let w = t.GetSummaryWithFallback(g);
	let B = t.GetEndTimeAndDateUnixSeconds();
	let v = JS(t.type);
	let I = ji.tz.guess();
	let E = ji.unix(t.GetStartTimeAndDateUnixSeconds()).tz(I);
	let M = LocalizeDateHumanReadable(t.GetStartTimeAndDateUnixSeconds());
	let T = LocalizeDateHumanReadable(t.GetEndTimeAndDateUnixSeconds());
	let R = vr.md.BIsVisible(n);
	let k = false;
	if (
		k ||
		ji.unix(t.GetStartTimeAndDateUnixSeconds()).format("L") ==
			ji.unix(t.GetEndTimeAndDateUnixSeconds()).format("L")
	) {
		k = true;
	} else {
		M = ji.unix(t.GetStartTimeAndDateUnixSeconds()).format("MMM D,");
		T = ji.unix(t.GetEndTimeAndDateUnixSeconds()).format("MMM D,");
	}
	const D = Ir._.GetDragData("apps") && Ir._.GetDragData("apps").length > 0;
	return d.createElement(
		ln.Z,
		{
			focusable: true,
			className: Vi.PartnerEventRowCapsule,
			onContextMenu: c,
			onActivate: (e) => {
				e.preventDefault();
				Ei.dm.TrackEventClickedByUser(t, 2);
				a.Home({
					partnerEvent: {
						appid: t.appid,
						gid: t.GID,
					},
				});
			},
		},
		d.createElement(
			"div",
			{
				className: Vi.EventTime,
			},
			LocalizeCalendarTime(t.GetStartTimeAndDateUnixSeconds()),
		),
		d.createElement(
			"div",
			{
				className: A_1(
					Vi.PartnerEventRowCapsule_Container,
					!D && Vi.HoversEnabled,
				),
			},
			d.createElement(
				"div",
				{
					className: Vi.EventSummaryContainer,
				},
				d.createElement(
					"div",
					{
						className: Vi.EventSummaryType,
					},
					S,
				),
				d.createElement(
					"div",
					{
						className: Vi.EventSummaryText,
					},
					w,
				),
			),
			d.createElement(
				"div",
				{
					className: Vi.PartnerEventRowCapsule_MainImageContainer,
				},
				d.createElement(Ti.c, {
					className: Vi.PartnerEventRowCapsule_MainImage,
					rgSources: h,
					onIncrementalError: (e, t) => Ei.dm.ImageFailureCallback(t),
				}),
				d.createElement(
					"div",
					{
						className: Vi.EventOptions,
					},
					d.createElement("div", {
						onClick: c,
					}),
				),
			),
			B != null &&
				v &&
				d.createElement(
					"div",
					{
						className: Vi.EventTimeSpan,
					},
					d.createElement(
						"span",
						{
							className: Vi.DateAndTime,
						},
						M,
						d.createElement("span", null, "\xA0"),
						E.format("LT"),
						d.createElement("span", null, "\xA0"),
						B != null && v && " - ",
						B != null && v && !k && T,
						d.createElement("span", null, "\xA0"),
						B != null && v && ji.unix(B).tz(I).format("LT"),
						d.createElement(
							"span",
							{
								"data-tooltip-text": `${E.format("Z")}, ${I}`,
							},
							" ",
							E.zoneAbbr(),
						),
					),
				),
		),
		d.createElement(
			"div",
			{
				className: Vi.PartnerEventRowCapsule_TextCtn,
			},
			d.createElement(
				"div",
				{
					className: Vi.Event_Title,
				},
				d.createElement(
					"div",
					{
						className: Vi.PartnerEventRowCapsule_TextTitle,
					},
					C,
				),
			),
		),
		R &&
			d.createElement(
				pe.he,
				{
					direction: "bottom",
					nBodyAlignment: 0,
					className: Vi.GameIconAndName,
					nDelayShowMS: 320,
					toolTipContent: "#Generic_ViewGameDetails",
					onClick: (e) => {
						a.App(t.appid);
						e.stopPropagation();
					},
				},
				A,
				d.createElement(
					"div",
					{
						onContextMenu: m,
						className: Vi.GameName,
					},
					y,
				),
			),
		!R &&
			d.createElement(
				"div",
				{
					className: Vi.GameIconAndName,
				},
				A,
				d.createElement(
					"div",
					{
						onContextMenu: m,
						className: Vi.GameName,
					},
					y,
				),
			),
	);
});
let Qi = class extends d.Component {
	constructor(e) {
		super(e, Localize("#Settings"));
		Ei.dm.FetchUpdatedEventAppPrioritiesForUser();
	}
	onContextMenu(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	onSubmit() {
		return false;
	}
	OnShowOnlyProductUpdatesToggle(e) {
		const [t, r] = l.rV.GetClientSetting(
			"library_whats_new_show_only_product_updates",
		);
		r(e);
		Ei.dm.ScheduleUpdateBestEventsForUser(300);
	}
	render() {
		let e = vr.md.GetCollection(vr.A8.Hidden).allApps.length;
		let t = [];
		let r = [];
		for (let e of Ei.dm.GetAppsShowingLess()) {
			let r = se.tw.GetAppOverviewByAppID(e);
			if (r) {
				t.push(r);
			}
		}
		for (let e of Ei.dm.GetAppsShowingMore()) {
			let t = se.tw.GetAppOverviewByAppID(e);
			if (t) {
				r.push(t);
			}
		}
		return d.createElement(
			Ht.x_,
			{
				className: Vi.WhatsNewSettingsContainer,
			},
			d.createElement(
				"div",
				{
					className: Vi.WhatsNewSettingsContent,
				},
				d.createElement(Wr.Y9, null, Localize("#WhatsNew")),
				d.createElement(
					Wr.lV,
					{
						className: Vi.WhatsNewSettings,
						onContextMenu: this.onContextMenu,
						onSubmit: this.onSubmit,
					},
					d.createElement(
						Wr.JU,
						{
							className: A_1(Vi.WhatsNewHeaderText, Vi.DialogLabelSoft),
						},
						Localize("#WhatsNewFeatureExplainer"),
					),
					d.createElement(
						Wr.JU,
						{
							className: A_1(Vi.WhatsNewHeaderText, Vi.DialogLabelSoft),
						},
						Localize("#WhatsNewFeatureExplainer2"),
					),
					d.createElement(Wr.JU, null, Localize("#WhatsNewVisibilitySettings")),
					d.createElement(Wr.RF, {
						useToggleRail: true,
						onChange: (e) => {
							this.OnShowOnlyProductUpdatesToggle(e);
						},
						label: Localize("#WhatsNewSettings_ShowOnlyGameUpdates"),
						checked:
							l.rV.clientSettings.library_whats_new_show_only_product_updates,
						description: Localize(
							"#WhatsNewSettings_ShowOnlyGameUpdates_Explainer",
						),
					}),
					d.createElement(
						"div",
						{
							className: "_DialogInputContainer",
						},
						d.createElement(
							"div",
							{
								className: "displayColumn alignSelfCenter",
							},
							d.createElement(
								"div",
								{
									className: "DialogToggle_Label",
								},
								LocalizePlural("#WhatsNewYouHaveNItemsHidden", e),
							),
						),
					),
					d.createElement(Wr.JU, null, Localize("#WhatsNewPrioritySettings")),
					d.createElement(
						"div",
						{
							className: A_1(
								"_DialogInputContainer",
								Vi.WhatsNewPriorityContainer,
							),
						},
						t.length > 0 &&
							d.createElement(
								"div",
								{
									className: "displayColumn alignSelfCenter",
								},
								d.createElement(
									"div",
									{
										className: Vi.DialogLabelSoft,
									},
									Localize("#WhatsNewYouHaveAskedToShowLessFor"),
								),
								d.createElement(
									"div",
									{
										className: Vi.WhatsNewGameListSection,
									},
									t.map((e, t) =>
										d.createElement(
											"div",
											{
												key: e.appid,
												className: Vi.WhatsNewGameListRow,
											},
											d.createElement(
												"div",
												{
													className: "DialogToggle_Description",
												},
												e.display_name,
											),
											d.createElement(
												"div",
												{
													className: A_1(
														Fi.UpdateLoweredPriorityUndo,
														Vi.WhatsNewSettingsUndoButton,
													),
													onClick: () => {
														Ei.dm.ResetUserAppPriorityForApp(e.appid);
													},
												},
												d.createElement(C.sED, null),
											),
										),
									),
								),
							),
						t.length == 0 &&
							d.createElement(
								"div",
								{
									className: "displayColumn alignSelfCenter",
								},
								d.createElement(
									"div",
									{
										className: Vi.DialogLabelSoft,
									},
									Localize("#WhatsNewYouHaveNothingShowingLess"),
								),
							),
					),
					d.createElement(
						"div",
						{
							className: A_1(
								"_DialogInputContainer",
								Vi.WhatsNewPriorityContainer,
							),
						},
						r.length > 0 &&
							d.createElement(
								"div",
								{
									className: "displayColumn alignSelfCenter",
								},
								d.createElement(
									"div",
									{
										className: Vi.DialogLabelSoft,
									},
									Localize("#WhatsNewYouHaveAskedToShowMoreFor"),
								),
								d.createElement(
									"div",
									{
										className: Vi.WhatsNewGameListSection,
									},
									r.map((e, t) =>
										d.createElement(
											"div",
											{
												key: e.appid,
												className: Vi.WhatsNewGameListRow,
											},
											d.createElement(
												"div",
												{
													className: "DialogToggle_Description",
												},
												e.display_name,
											),
											d.createElement(
												"div",
												{
													className: A_1(
														Fi.UpdateLoweredPriorityUndo,
														Vi.WhatsNewSettingsUndoButton,
													),
													onClick: () => {
														Ei.dm.ResetUserAppPriorityForApp(e.appid);
													},
												},
												d.createElement(C.sED, null),
											),
										),
									),
								),
							),
						r.length == 0 &&
							d.createElement(
								"div",
								{
									className: "displayColumn alignSelfCenter",
								},
								d.createElement(
									"div",
									{
										className: Vi.DialogLabelSoft,
									},
									Localize("#WhatsNewYouHaveNothingShowingMore"),
								),
							),
					),
				),
			),
		);
	}
};
Cg([k.oI], Qi.prototype, "onContextMenu", null);
Cg([k.oI], Qi.prototype, "onSubmit", null);
Cg([k.oI], Qi.prototype, "OnShowOnlyProductUpdatesToggle", null);
Qi = Cg([ht.PA], Qi);
let Zi = class extends d.Component {
	k_MaxSmallCapsToShow = 18;
	m_timeout = undefined;
	constructor(e) {
		super(e);
		this.state = {
			bLoaded: false,
		};
		this.m_timeout = window.setTimeout(() => {
			this.setState({
				bLoaded: true,
			});
			this.m_timeout = undefined;
		}, 2000);
		if (Ei.dm.BNoShowMoreOrLessDataFetched()) {
			Ei.dm.FetchUpdatedEventAppPrioritiesForUser();
		}
	}
	componentWillUnmount() {
		if (this.m_timeout) {
			window.clearTimeout(this.m_timeout);
		}
	}
	OnChildrenVisible(e, t) {
		if (e >= 0 && t >= 0) {
			const { eventsToShow: r } = Ei.dm.GetWhatsNewEvents();
			while (e < r.length - 1 && e <= t) {
				let t = r[e];
				Ei.dm.TrackEventShownToUser(t, 2);
				++e;
			}
		}
	}
	async RaiseAppPriorityForUndo(e) {
		await Ei.dm.RaiseAppPriorityForApp(e);
		Ei.dm.ClearJustChangedAppPriority();
	}
	async LowerAppPriorityForUndo(e) {
		await Ei.dm.LowerAppPriorityForApp(e);
		Ei.dm.ClearJustChangedAppPriority();
	}
	OpenWhatsNewSettings(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		HT(d.createElement(Qi, null), t, Localize("#WhatsNewSettings"), {
			strTitle: Localize("#WhatsNewSettings"),
			popupWidth: 842,
			popupHeight: 720,
		});
	}
	static BIsContentVisible(e) {
		return (
			(!e.bEventsLoaded && !!e.bInitialLoadPending) ||
			e.takeoverEvents.length > 0 ||
			e.eventsToShow.length > 0
		);
	}
	render() {
		const { className: e, hideHeader: t, bInGamepadUI: r, ...n } = this.props;
		const {
			bEventsLoaded: i,
			bInitialLoadPending: a,
			eventsToShow: s,
			takeoverEvents: o,
		} = Ei.dm.GetWhatsNewEvents();
		if (!i && a) {
			return d.createElement(
				"div",
				{
					className: Fi.UpdatesContainer,
				},
				d.createElement(Ri.t, {
					size: "xlarge",
					position: "center",
				}),
			);
		}
		if (o.length > 0) {
			return d.createElement(Ui, {
				majorUpdates: o,
			});
		}
		if (s.length == 0) {
			return null;
		}
		const l = s.slice(0, this.k_MaxSmallCapsToShow).map((e) => {
			let t = `event_${e.clanSteamID}_${e.GID}_${e.AnnouncementGID}`;
			return d.createElement(qi, {
				key: t,
				event: e,
				bInGamepadUI: this.props.bInGamepadUI,
			});
		});
		let c;
		let m = Ei.dm.GetJustChangedPriorityAppID();
		let u = Ei.dm.GetWasJustChangedPriorityLower();
		if (m) {
			c = se.tw.GetAppOverviewByAppID(m);
		}
		let A = d.createElement(
			"div",
			null,
			d.createElement(
				"div",
				{
					className: Vi.SettingsButton,
					onClick: this.OpenWhatsNewSettings,
				},
				d.createElement(C.wB_, null),
			),
		);
		if (c) {
			let e = "";
			e = u
				? Localize("#LibraryHome_NewUpdates_LoweredPriority", c.display_name)
				: Localize("#LibraryHome_NewUpdates_RaisedPriority", c.display_name);
			A = d.createElement(
				"div",
				{
					className: Vi.SettingsAndUndoContainer,
				},
				d.createElement(
					"div",
					{
						className: Vi.SettingsButton,
						onClick: this.OpenWhatsNewSettings,
					},
					d.createElement(C.wB_, null),
				),
				d.createElement(
					"div",
					{
						key: `UpdatedPriority${m}${u ? "lower" : "higher"}`,
						className: Fi.UpdateLoweredPriorityNotice,
					},
					d.createElement("span", null, e),
					d.createElement(
						"span",
						{
							className: Fi.UpdateLoweredPriorityUndo,
							onClick: () => {
								if (u) {
									this.RaiseAppPriorityForUndo(m);
								} else {
									this.LowerAppPriorityForUndo(m);
								}
							},
						},
						Localize("#LibraryHome_NewUpdates_Undo"),
					),
				),
			);
		}
		return d.createElement(
			"div",
			{
				className: A_1(e, Fi.UpdatesContainer),
				...n,
			},
			d.createElement(
				Oe.tH,
				null,
				d.createElement(
					Hi.C,
					{
						className: Vi.WhatsNewContainer,
						bNoHeader: t,
						name: Localize("#LibraryHome_NewUpdates"),
						aftername: A,
						bHeaderClickScrollToFirst: true,
					},
					(e, t) =>
						d.createElement(
							Ii.Q,
							{
								className: Vi.EventRowCarousel,
								leftMargin: 0,
								ref: e,
								fnUpdateArrows: t,
								fnOnChildrenVisible: this.OnChildrenVisible,
							},
							l,
						),
				),
			),
		);
	}
};
Cg([k.oI], Zi.prototype, "OnChildrenVisible", null);
Cg([k.oI], Zi.prototype, "RaiseAppPriorityForUndo", null);
Cg([k.oI], Zi.prototype, "LowerAppPriorityForUndo", null);
Cg([k.oI], Zi.prototype, "OpenWhatsNewSettings", null);
Zi = Cg([ht.PA], Zi);
const Ki = Yi;
const Xi = PA(() => {
	const e = bG("StoreFrontPage");
	const t = bG("StoreFreeToPlay");
	const r = bG("StoreSpecials");
	const i = bG("StoreExploreNew");
	if (
		vr.md.GetCollection(vr.A8.Recent).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(1).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(1).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(2).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(1).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(2).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(2048).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(1).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(2).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(2048).visibleApps.length > 0 ||
		vr.md.GetCollectionForAppType(8192).visibleApps.length > 0
	) {
		return null;
	}
	const a = d.createElement(
		"a",
		{
			className: Ki.StoreLink,
			onClick: e,
		},
		Localize("#Library_Recent_NoRecentGames_SteamStore"),
	);
	const s = ID(de.TS.LAUNCHER_TYPE);
	return d.createElement(
		"div",
		{
			className: Ki.Container,
		},
		d.createElement(
			"div",
			{
				className: Ki.TopSection,
			},
			d.createElement(
				"div",
				{
					className: Ki.AlignBottom,
				},
				d.createElement(
					"div",
					{
						className: Ki.Description,
					},
					d.createElement(
						"div",
						{
							className: Ki.NoGames,
						},
						Localize("#Library_Recent_NoRecentGames_NoGames"),
					),
					d.createElement(
						"div",
						{
							className: Ki.VisitStore,
						},
						LocalizeReact("#Library_Recent_NoRecentGames_StoreLink", a),
					),
				),
				d.createElement(
					"div",
					{
						className: Ki.ButtonContainer,
					},
					d.createElement(
						Wr.jn,
						{
							className: Ki.TopButton,
							onClick: t,
						},
						Localize("#Library_Recent_NoRecentGames_FreeToPlay"),
					),
					d.createElement(
						Wr.jn,
						{
							className: Ki.TopButton,
							onClick: r,
						},
						Localize("#Library_Recent_NoRecentGames_GamesOnSale"),
					),
					d.createElement(
						Wr.jn,
						{
							className: Ki.TopButton,
							onClick: i,
						},
						Localize("#Library_Recent_NoRecentGames_NewReleases"),
					),
				),
			),
		),
		!s && d.createElement(Ji, null),
	);
});
function Ji() {
	const e = bG("RegisterKeyNoParams");
	const t = bG("RedeemWalletVoucher");
	return d.createElement(
		"div",
		{
			className: A_1(Ki.ButtonContainer, Ki.BottomSection),
		},
		d.createElement(
			Wr.$n,
			{
				className: Ki.BottomButton,
				onClick: e,
			},
			Localize("#Library_Recent_NoRecentGames_ActivateProduct"),
		),
		d.createElement(
			Wr.$n,
			{
				className: Ki.BottomButton,
				onClick: t,
			},
			Localize("#Library_Recent_NoRecentGames_RedeemCode"),
		),
	);
}
const ra = ta;
const ia = na;
const aa = (e) => {
	const t = QR();
	if (e.strCollectionId != "partner-ea-access") {
		return null;
	}
	const r = d.createElement(oa, null);
	const n = Localize("#EAAccessCollection_LinkToLandingPage");
	const i =
		(!Ir._.GetDragData("apps") || !(Ir._.GetDragData("apps").length > 0)) && !t;
	const a = A_1(
		ia.CollectionShelfBannerCtn,
		i && ia.EnableHovers,
		i && ra.HoversEnabled,
	);
	if (t) {
		return d.createElement(
			"div",
			{
				className: a,
			},
			r,
		);
	} else {
		return d.createElement(
			"a",
			{
				className: a,
				href: "https://store.steampowered.com/subscriptions/ea",
			},
			r,
			d.createElement(
				"div",
				{
					className: ia.LinkToLandingPage,
				},
				n,
			),
		);
	}
};
const sa = (e) =>
	d.createElement("div", {
		className: ia.BannerSecondHalf,
	});
const oa = (e) => {
	const [t] = VI("library_low_perf_mode");
	return d.createElement(
		"div",
		{
			className: ia.CollectionShelfBanner,
		},
		d.createElement("img", {
			className: ia.EALogo,
			src: "/images/eaplay_collection.jpg",
		}),
		!t &&
			d.createElement("div", {
				className: A_1(ra.LibraryItemBoxShine, ra.Landscape),
			}),
	);
};
const ma = ca;
let ua = class extends d.Component {
	render() {
		const {
			app: e,
			bFeatured: t,
			bShortLayout: r,
			nWidth: n,
			nHeight: i,
			label: a,
			...s
		} = this.props;
		const o = {
			width: `${n}px`,
			height: `${i}px`,
		};
		const l = A_1(ma.RecentGameMediaContainer, t && ma.Featured, r && ma.Short);
		return d.createElement(
			"div",
			{
				className: ma.RecentGame,
				...s,
			},
			this.props.label,
			d.createElement(
				"div",
				{
					className: l,
					style: o,
				},
				d.createElement(Tr.TK, {
					app: e,
					bFeatured: this.props.bFeatured,
					bShowFriendsAsIcons: true,
					context: 2,
					bShortLayout: r,
				}),
			),
		);
	}
};
ua = Cg([ht.PA], ua);
const da = PA(
	d.forwardRef((e, t) => {
		const r = d.useContext(de.QO);
		const n = d.useContext(Br.g);
		const i = d.useRef(null);
		const a = d.useCallback(
			(e) => {
				i.current?.ScrollLeft(e);
			},
			[i],
		);
		const o = d.useCallback(
			(e) => {
				i.current?.ScrollRight(e);
			},
			[i],
		);
		d.useImperativeHandle(t, () => ({
			ScrollLeft: a,
			ScrollRight: o,
		}));
		const c = ((e, t, r) => {
			const [n] = l.rV.GetClientSetting("library_display_size");
			let i = e ? YQ(t, r) : Mr.o.GetComputedDisplaySize(n);
			let { childWidth: a, childHeight: s, bShort: o } = aH(i, e);
			if (a > 175) {
				a = 175;
				s = 262.5;
			}
			return {
				nItemWidth: a,
				nItemHeight: s,
				bShortLayout: o,
			};
		})(IW(r), n?.libraryWidth, n?.libraryHeight);
		const m = vr.md.GetCollection(vr.A8.Recent).visibleApps;
		const u = m.length === 0;
		const A = c.bShortLayout;
		const g = parseInt(ma.CarouselExtraHeight, 10);
		let h = "";
		if (u) {
			return null;
		} else {
			return d.createElement(
				Hi.C,
				{
					ref: i,
					name: Localize("#LibraryHome_RecentGames"),
					bHeaderClickScrollToFirst: true,
					bNoHeader: true,
					fnUpdateArrows: e.fnUpdateArrows,
				},
				(e, t) =>
					d.createElement(
						Ii.Q,
						{
							ref: e,
							className: A_1(ma.RecentGames, A && ma.Short),
							fnUpdateArrows: t,
							fnOnChildrenVisible: (e) =>
								m[e] && s.n6.SetRecentGamesFirstApp(m[e].appid),
							initialScrollToChild: m.findIndex(
								(e) => e.appid === s.n6.GetRecentGamesFirstApp(),
							),
							style: {
								height: `${c.nItemHeight + g}px`,
							},
						},
						m.map((e, t) =>
							((e, t, r, n) => {
								let i;
								let a = null;
								let s = null;
								let o = e.app;
								if (o.rt_recent_activity_time) {
									s = LocalizeCalendarTime(o.rt_recent_activity_time);
									i = ma.AddedDate;
								}
								a =
									!s || (s == h && r != 0)
										? d.createElement("div", {
												className: ma.EmptyDate,
											})
										: d.createElement(
												"div",
												{
													className: i,
												},
												" ",
												s,
												" ",
											);
								h = s;
								const l = {
									app: o,
									bFeatured: t === 0,
									bShortLayout: A,
									label: a,
									nWidth: n,
									nHeight: c.nItemHeight,
								};
								return d.createElement(ua, {
									key: o.appid,
									...l,
								});
							})(
								{
									app: e,
								},
								t,
								t,
								t === 0 ? c.nItemWidth * 2.108 : c.nItemWidth,
							),
						),
					),
			);
		}
	}),
);
const ga = pa;
const ha = PA((e) => {
	const {
		appid: t,
		bFeatured: r,
		bShortLayout: n,
		nWidth: i,
		nHeight: a,
		...s
	} = e;
	const o = Qn_1();
	const l = se.tw.GetAppOverviewByAppID(t);
	const c = {
		width: `${i}px`,
		height: `${a}px`,
	};
	const m = o
		? {
				onSecondaryButton: () => Aa.x3.AddIgnoredApp(l.appid),
				onSecondaryActionDescription: Localize("#ActionButtonLabelDismiss"),
			}
		: {};
	return d.createElement(
		ln.Z,
		{
			className: ga.PlayNextSuggestion,
			...m,
			...s,
		},
		d.createElement(
			"div",
			{
				className: ga.PlayNextSuggestionMediaContainer,
				style: c,
			},
			d.createElement(Tr.TK, {
				app: l,
				bFeatured: r,
				bShowFriendsAsIcons: true,
				context: 5,
				strCollectionId: "play-next",
				bShortLayout: n,
				bHideFooter: false,
				strMessage: r ? Localize("#AppBox_PlayNextMostPopular") : null,
				strSubMessage: r ? Localize("#AppBox_PlayNextMostPopularSub") : null,
			}),
		),
	);
});
const Ca = PA(
	d.forwardRef((e, t) => {
		const r = d.useContext(de.QO);
		const n = d.useContext(Br.g);
		const i = d.useRef(null);
		const a = d.useCallback(
			(e) => {
				i.current?.ScrollLeft(e);
			},
			[i],
		);
		const s = d.useCallback(
			(e) => {
				i.current?.ScrollRight(e);
			},
			[i],
		);
		d.useImperativeHandle(t, () => ({
			ScrollLeft: a,
			ScrollRight: s,
		}));
		const o = ((e, t, r) => {
			const [n] = l.rV.GetClientSetting("library_display_size");
			let i = e ? YQ(t, r) : Mr.o.GetComputedDisplaySize(n);
			let { childWidth: a, childHeight: s, bShort: o } = aH(i, e);
			if (a > 175) {
				a = 175;
				s = 262.5;
			}
			return {
				nItemWidth: a,
				nItemHeight: s,
				bShortLayout: o,
			};
		})(IW(r), n?.libraryWidth, n?.libraryHeight);
		const c = o.bShortLayout;
		const m = parseInt(ga.CarouselExtraHeight, 10);
		const {
			apps: u,
			bLoading: A,
			bFresh: g,
		} = Aa.x3.GetSuggestionsToShow(xt.hG.GetToggle(13));
		const h = u.length === 0;
		if (A) {
			return d.createElement(Ri.t, {
				key: "loading_play_next",
			});
		}
		if (g) {
			SteamClient.Stats.RecordDisplayEvent(
				true,
				"PlayNextShowcase_NumDisplayed",
				u.length.toString(),
			);
		}
		if (h) {
			return d.createElement(
				"div",
				{
					className: ga.PlayNextNoResultsContainer,
					style: {
						height: `${o.nItemHeight + m}px`,
					},
				},
				d.createElement(
					"div",
					{
						className: ga.Message,
					},
					Localize("#LibraryHome_PlayNextNoResults"),
				),
			);
		}
		const C = IW(r) ? (460 / 215) * 1 * o.nItemWidth : o.nItemWidth * 2.108;
		return d.createElement(
			"div",
			null,
			d.createElement(
				"div",
				{
					className: ga.PlayNextSubHead,
				},
				Localize("#LibraryHome_PlayNextSubHead"),
			),
			d.createElement(
				Hi.C,
				{
					ref: i,
					name: Localize("#LibraryHome_PlayNext"),
					bHeaderClickScrollToFirst: true,
					bNoHeader: true,
					fnUpdateArrows: e.fnUpdateArrows,
				},
				(e, t) =>
					d.createElement(
						Ii.Q,
						{
							ref: e,
							className: A_1(ga.PlayNextSuggestions, c && ga.Short),
							fnUpdateArrows: t,
							style: {
								height: `${o.nItemHeight + m}px`,
							},
						},
						u.map((e, t) =>
							((e, t, r, n) => {
								const i = {
									appid: e,
									bFeatured: t === 0,
									bShortLayout: c,
									nWidth: n,
									nHeight: o.nItemHeight,
								};
								return d.createElement(ha, {
									key: e,
									...i,
								});
							})(e, t, 0, t === 0 ? C : o.nItemWidth),
						),
					),
			),
		);
	}),
);
const ya = ba;
const Sa = PA((e) => {
	const t = [];
	const r = ya.OptionsRule;
	const n = vr.md.userCollections;
	let i;
	for (let e of n) {
		let n = e.id == vr.A8.Uncategorized || e.id == vr.A8.AppType_Soundtracks;
		if (n) {
			i = e;
		} else {
			t.push({
				label: e.displayName,
				data: e.id,
				strOptionClass: n && r,
			});
		}
	}
	if (vr.md.sharedLibrariesCollections.length > 0) {
		let e = vr.md.myGamesCollection;
		t.push({
			label: e.displayName,
			data: e.id,
			strOptionClass: r,
		});
		for (let e of vr.md.sharedLibrariesCollections) {
			t.push({
				label: e.displayName,
				data: e.id,
			});
		}
	}
	t.push({
		label: i.displayName,
		data: i.id,
		strOptionClass: r,
	});
	const a = vr.md.GetCollectionForAppType(1);
	t.push({
		label: Localize("#Showcase_AllYourGames"),
		data: a.id,
	});
	t.push({
		label: Localize("#Showcase_RecentGames"),
		data: "recent-games",
	});
	t.push({
		label: Localize("#Showcase_AllCollections"),
		data: "all-collections",
	});
	t.push({
		label: Localize("#Showcase_PlayNext"),
		data: "play-next",
	});
	const s = vr.md.GetCollectionForAppType(8192);
	t.push({
		label: Localize("#Showcase_AllYourSoundtracks"),
		data: s.id,
	});
	t.push({
		label: Localize("#Showcase_DeleteShowcase"),
		data: undefined,
		strOptionClass: r,
	});
	const o = e.hideCount;
	const l = e.count;
	const c = d.useCallback(
		(e) =>
			d.createElement(
				d.Fragment,
				null,
				e,
				!o &&
					d.createElement(
						"div",
						{
							className: ya.CountDisplay,
						},
						l,
					),
			),
		[o, l],
	);
	return d.createElement(
		"div",
		{
			className: ya.CollectionDropDown,
			tabIndex: -1,
		},
		d.createElement(Wr.m, {
			rgOptions: t,
			onChange: (t) => e.onChange && e.onChange(t.data),
			selectedOption: e.initialValue,
			disabled: e.disabled,
			strDefaultLabel: Localize("#Showcase_SelectCategory"),
			strClassName: ya.MenuHeader,
			strDropDownClassName: ya.CollectionDropDownContainer,
			strDropDownItemClassName: ya.DropDownItems,
			contextMenuPositionOptions: {
				bShiftToFitWindow: true,
				bFitToWindow: true,
				bMatchWidth: false,
			},
			renderButtonValue: c,
		}),
	);
});
class wa extends d.Component {
	m_pressTimer = undefined;
	m_mouseY = undefined;
	componentWillUnmount() {
		this.StopListening();
	}
	StopListening() {
		if (this.m_pressTimer) {
			let e = this.m_pressTimer.win;
			e.clearTimeout(this.m_pressTimer.hTimer);
			e.removeEventListener("mouseup", this.OnGlobalMouseUp);
			e.removeEventListener("mousemove", this.OnGlobalMouseMove);
			this.m_pressTimer = undefined;
		}
	}
	OnMouseDown(e) {
		if (e.button != 0 || !this.props.refDraggableDiv) {
			return;
		}
		const t = GetOwningWindowForElement(this.props.refDraggableDiv);
		if (!t) {
			return;
		}
		this.StopListening();
		const r =
			e.clientY - this.props.refDraggableDiv.getBoundingClientRect().top;
		this.m_mouseY = e.clientY;
		t.addEventListener("mouseup", this.OnGlobalMouseUp);
		t.addEventListener("mousemove", this.OnGlobalMouseMove);
		let n = t.setTimeout(() => {
			this.props.onStartReordering(r, this.m_mouseY);
		}, 200);
		this.m_pressTimer = {
			win: t,
			hTimer: n,
		};
	}
	OnGlobalMouseMove(e) {
		if ((e.buttons & 1) == 0) {
			this.OnGlobalMouseUp(e);
		} else {
			this.m_mouseY = e.clientY;
		}
	}
	OnGlobalMouseUp(e) {
		if (e.button == 0) {
			this.StopListening();
		}
	}
	render() {
		const {
			className: e,
			refDraggableDiv: t,
			onStartReordering: r,
			...n
		} = this.props;
		const i = !r;
		return d.createElement(
			"div",
			{
				className: A_1(!i && ya.Draggable, e),
				...n,
				onMouseDown: i || this.OnMouseDown,
			},
			this.props.children,
		);
	}
}
Cg([k.oI], wa.prototype, "OnMouseDown", null);
Cg([k.oI], wa.prototype, "OnGlobalMouseMove", null);
Cg([k.oI], wa.prototype, "OnGlobalMouseUp", null);
const Ba = PA((e) => {
	const {
		showcase: t,
		itemsDisplayed: r,
		itemsTotal: n,
		trueTotal: a,
		collapsed: o,
		onToggleCollapse: l,
		showSortByPicker: c,
		hideCollectionCount: m,
		pageable: u,
		fnLeftClicked: A,
		fnRightClicked: g,
		reorderMode: h,
		onStartReordering: y,
	} = e;
	const S = useRef(undefined);
	const w = br_1();
	const B = !t.strCollectionId;
	const v = y == null;
	let I;
	let E = r == a;
	let M = (!o || r < n) && !u;
	let T = !B && `(${r}${E ? ")" : `/${a})`}`;
	let R = u;
	if (h) {
		E = true;
		M = false;
		R = false;
		T = !B && `(${a})`;
	}
	if (o || E) {
		if (o && a == n) {
			I = d.createElement(
				pe.zQ,
				null,
				Localize("#Shelf_SectionHeader_ExpandTooltip"),
			);
		} else if (o && !E) {
			I = d.createElement(
				pe.zQ,
				null,
				Localize("#Shelf_SectionHeader_ExpandTooltipFilter", a - r),
			);
		} else if (r == 0) {
			I = d.createElement(
				pe.zQ,
				null,
				Localize("#GameList_SectionHeader_AppCountToolTipAllHidden"),
			);
		}
	} else {
		I = d.createElement(en, {
			nTotalCount: a,
			nFilteredCount: r,
			filter: s.n6.collectionsAppFilter,
		});
	}
	const k =
		t.strCollectionId != "play-next" &&
		t.strCollectionId != "recent-games" &&
		s.n6.collectionsAppFilter.BIsSelected(1, 2);
	return d.createElement(
		wa,
		{
			refDraggableDiv: S.current,
			onStartReordering: !v && h ? y : undefined,
		},
		d.createElement(
			"div",
			{
				ref: S,
				className: A_1(
					ya.ShowcaseHeader,
					B && ya.EmptyShowcase,
					h && ya.Reordering,
				),
				onContextMenu:
					B ||
					h ||
					((e) => {
						if (t.strCollectionId == "all-collections") {
							lX(
								d.createElement(
									f.tz,
									null,
									d.createElement(
										f.kt,
										{
											onSelected: () => w.AllCollections(),
										},
										Localize("#Showcase_GoToAllCollections"),
									),
								),
								e,
							);
						} else if (t.strCollectionId == "play-next") {
							const r = Aa.x3.LastIgnoredApps(5);
							lX(
								d.createElement(
									f.tz,
									null,
									d.createElement(
										f.kt,
										{
											onSelected: () => w.Collection(t.strCollectionId),
										},
										Localize("#Showcase_GoToCollection"),
									),
									r.length > 0 &&
										d.createElement(
											f.kt,
											{
												onSelected: () => Aa.x3.ClearIgnoredApps(),
											},
											Localize("#PlayNext_ClearIgnoredApps"),
										),
									r.map((e) =>
										d.createElement(
											f.kt,
											{
												key: e,
												onSelected: () => Aa.x3.RemoveIgnoredApp(e),
											},
											Localize(
												"#PlayNext_UnhideSuggestion",
												se.tw.GetAppOverviewByAppID(e).display_name,
											),
										),
									),
								),
								e,
							);
						} else {
							lX(
								d.createElement(
									f.tz,
									null,
									d.createElement(
										f.kt,
										{
											onSelected: () => w.Collection(t.strCollectionId),
										},
										Localize("#Showcase_GoToCollection"),
									),
								),
								e,
							);
						}
					}),
			},
			d.createElement(
				pe.m9,
				{
					toolTipContent: !E && I,
					className: ya.SectionCount,
				},
				d.createElement(Sa, {
					initialValue: t.strCollectionId,
					onChange: (e) => {
						if (e !== undefined) {
							_a.N.SetCollectionId(t.nShowcaseId, e);
						} else {
							_a.N.DeleteShowcase(t.nShowcaseId);
						}
					},
					count: T,
					hideCount: m,
					disabled: h,
				}),
			),
			k &&
				d.createElement(
					pe.m9,
					{
						direction: "right",
						nDelayShowMS: 240,
						toolTipContent: d.createElement(di, null),
					},
					d.createElement(C.$Qn, null),
				),
			c &&
				d.createElement(Lr.OJ, {
					className: ya.SortingDropDown,
					initialValue: t.eSortBy,
					onSortChangeCallback: (e) => _a.N.SetSortBy(t.nShowcaseId, e),
					disabled: h,
				}),
			d.createElement(wa, {
				className: ya.Rule,
				refDraggableDiv: S.current,
				onStartReordering: v || h || y,
			}),
			R &&
				d.createElement(
					"div",
					{
						className: ya.PageButtons,
					},
					d.createElement(
						"div",
						{
							className: A_1(ya.PageLeft, !A && ya.Disabled),
							onClick: A,
						},
						d.createElement(C.F2T, {
							singlearrow: true,
							angle: 0,
						}),
					),
					d.createElement(
						"div",
						{
							className: A_1(ya.PageRight, !g && ya.Disabled),
							onClick: g,
						},
						d.createElement(C.F2T, {
							singlearrow: true,
							angle: 180,
						}),
					),
					" ",
				),
			M &&
				d.createElement(
					"div",
					{
						className: A_1(ya.Collapser, M && ya.Visible),
						onClick: M ? l : undefined,
					},
					d.createElement(C.F2T, {
						angle: o ? 270 : 90,
					}),
				),
			d.createElement(
				"div",
				{
					className: ya.DragHandle,
				},
				d.createElement(C.wVV, {
					size: "10px",
				}),
			),
			h &&
				d.createElement(
					"div",
					{
						className: ya.DeleteButton,
						onClick: () => {
							const e = parseFloat(ya.ReorderTransitionTime) * 1000;
							_a.N.SetDeleting(t.nShowcaseId, true);
							setTimeout(() => {
								_a.N.DeleteShowcase(t.nShowcaseId);
							}, e);
						},
						onMouseDown: (e) => {
							e.preventDefault();
							e.stopPropagation();
						},
					},
					d.createElement(C.lMJ, null),
				),
		),
	);
});
const va = d.forwardRef((e, t) => {
	const r = rP();
	return d.createElement(Ia, {
		ref: t,
		configContext: r,
		...e,
	});
});
let Ia = class extends d.Component {
	static contextType = Br.g;
	m_fnSort;
	m_bLeftArrowEnabled = false;
	m_bRightArrowEnabled = false;
	m_refScrollableCarousel = d.createRef();
	m_refDiv = d.createRef();
	m_bAnimateExpansion = false;
	constructor(e) {
		super(e);
		Gn_2(this);
		this.m_fnSort = A_3((e, t) => e.visibleApps.slice().sort(t));
		this.state = {
			nItemsDisplayed: 0,
		};
	}
	componentDidUpdate(e) {
		if (this.props.reorderMode) {
			this.m_bAnimateExpansion = false;
		}
	}
	get height() {
		return this.m_refDiv.current.getBoundingClientRect().height;
	}
	OnToggleCollapsed(e) {
		this.m_bAnimateExpansion = true;
		_a.N.SetExpanded(
			this.props.showcase.nShowcaseId,
			!this.props.showcase.bExpanded,
		);
	}
	ComputeChildSizes(e, t) {
		const r = this.props.coverSize;
		let n = IW(this.props.configContext)
			? YQ(e, t)
			: Mr.o.GetComputedDisplaySize(r);
		let i = aH(
			n,
			IW(this.props.configContext),
			this.props.showcase.strCollectionId,
		);
		if (this.props.showcase.strCollectionId == "all-collections") {
			i.childHeight = i.childWidth;
		}
		return i;
	}
	OnUpdateArrows(e, t) {
		if (e != this.m_bLeftArrowEnabled) {
			this.m_bLeftArrowEnabled = e;
		}
		if (t != this.m_bRightArrowEnabled) {
			this.m_bRightArrowEnabled = t;
		}
	}
	ScrollLeft(e) {
		let t = this.m_refScrollableCarousel.current;
		if (t) {
			t.ScrollLeft(e);
		}
	}
	ScrollRight(e) {
		let t = this.m_refScrollableCarousel.current;
		if (t) {
			t.ScrollRight(e);
		}
	}
	OnStartReordering(e, t) {
		this.props.onStartReordering(this.props.showcase, e, t);
	}
	OnGridItemsDisplayedChanged(e) {
		this.setState({
			nItemsDisplayed: e,
		});
	}
	render() {
		let e = [];
		let t = true;
		const r = !this.props.showcase.strCollectionId;
		let n = 0;
		let i = 0;
		let a = 0;
		let o = true;
		let l = false;
		let c = false;
		let m = false;
		const u = this.ComputeChildSizes(
			this.context.libraryWidth,
			this.context.libraryHeight,
		);
		let A = r ? 0 : this.state.nItemsDisplayed;
		if (this.props.collectionId == "recent-games") {
			e.push(
				d.createElement(da, {
					key: "LibraryHomeRecentGames",
					ref: this.m_refScrollableCarousel,
					fnUpdateArrows: this.OnUpdateArrows,
				}),
			);
			o = false;
			l = true;
			t = false;
			c = true;
		} else if (this.props.collectionId == "all-collections") {
			t = false;
			const n = vr.md.userCollections.filter(
				(e) => e.id != vr.A8.Uncategorized,
			);
			if (n) {
				for (let t = 0; t <= n.length; t++) {
					const r = n[t];
					if (r) {
						e.push(
							d.createElement(
								Oe.tH,
								{
									key: `collection_list_${r.id}`,
								},
								d.createElement(Nr.F9, {
									key: r.id,
									collection: r,
									eCoverSize: jF(u.childWidth, IW(this.props.configContext)),
									bHide: t >= A,
									bIsShowcase: true,
								}),
							),
						);
					}
				}
			}
			a = (!r && e.length) || 0;
		} else if (this.props.collectionId == "play-next") {
			t = false;
			c = true;
			l = true;
			o = false;
			m =
				Aa.x3.GetPlayNext().appids.length == 0 &&
				(!this.props.showcase.nLastChangedMS ||
					Date.now() - this.props.showcase.nLastChangedMS > 3600000);
			e.push(
				d.createElement(Ca, {
					key: "LibraryHomePlayNext",
					ref: this.m_refScrollableCarousel,
					fnUpdateArrows: this.OnUpdateArrows,
				}),
			);
		} else {
			const t = vr.md.GetCollection(this.props.showcase.strCollectionId);
			let i = s.n6.collectionsAppFilter;
			if (t && !t.bFiltersOnGameListAppType) {
				const e = i.ToStorageFormat();
				e.filterGroups[0] = {
					rgOptions: [],
					bAcceptUnion: true,
				};
				i = new Or.E6(e);
			}
			n = (t && t.GetAppCountWithToolsFilter(i)) || 0;
			if (t) {
				if (t.id == "partner-ea-access" && !ID(de.TS.LAUNCHER_TYPE)) {
					e.push(
						d.createElement(
							Oe.tH,
							{
								key: "collection_header",
							},
							d.createElement(aa, {
								strCollectionId: t.id,
							}),
						),
					);
					e.push(
						d.createElement(sa, {
							key: "collection_header_spacer",
						}),
					);
					A -= 2;
				}
				let r = this.m_fnSort(t, g_1(this.props.showcase.eSortBy)).filter(
					i.Matches,
				);
				for (let n = 0; n <= r.length; n++) {
					const i = r[n];
					if (i) {
						e.push(
							d.createElement(
								Oe.tH,
								{
									key: `app_list_${i.appid}`,
								},
								d.createElement(Tr.TK, {
									app: i,
									strCollectionId: t.id,
									bShowFriendsAsIcons: true,
									context: 1,
									sortByType: this.props.showcase.eSortBy,
									nWidth: u.childWidth,
									bShortLayout: u.bShort,
									bHidePortrait: n >= A,
								}),
							),
						);
					}
				}
			}
			a = (!r && n) || 0;
		}
		let g;
		i = (!r && e.length) || 0;
		const h = this.props.y !== undefined;
		if (h) {
			g = {
				position: "absolute",
				top: this.props.y,
				width: this.props.width,
			};
		} else if (this.props.transformY !== undefined) {
			g = {
				transform: `translateY(${this.props.transformY}px)`,
			};
		}
		m = m && !this.props.reorderMode;
		const _ = A_1(
			ya.Showcase,
			!this.props.showcase.strCollectionId && ya.EmptyShowcase,
			this.props.onStartReordering == null && ya.ReorderingDisabled,
			this.props.spacer && ya.Spacer,
			m && ya.Hidden,
		);
		const f =
			this.props.reorderMode ||
			h ||
			d.createElement(
				d.Fragment,
				null,
				r &&
					d.createElement(
						"div",
						{
							className: ya.EmptyMessage,
						},
						d.createElement(
							"div",
							{
								className: ya.ShowcaseArrow,
							},
							d.createElement(C.MFH, null),
						),
						d.createElement(
							"div",
							{
								className: ya.Message,
							},
							Localize("#Showcase_EmptyShowcaseHint"),
						),
					),
				o &&
					d.createElement(la.i, {
						onItemsDisplayedCountChanged: this.OnGridItemsDisplayedChanged,
						maxRows: this.props.reorderMode
							? 0
							: this.props.showcase.bExpanded || 1,
						minRows: this.props.reorderMode ? 0 : 1,
						childWidth: u.childWidth,
						childHeight: u.childHeight,
						gridColumnGap: 16,
						gridRowGap: 24,
						scaleGridItems: 1,
						paddingLeft: 8,
						paddingRight: 8,
						animateExpansion: this.m_bAnimateExpansion,
						gridClassName: ya.ShowcaseGrid,
						childElements: e,
						scrollElement: this.props.scrollElement,
						renderOutsideRows: 2,
						name: this.props.collectionId,
					}),
				!o &&
					d.createElement(
						"div",
						{
							className: ya.ChildrenContainer,
						},
						e,
					),
			);
		return d.createElement(
			xr.wf,
			{
				style: g,
				className: A_1(
					ya.ShowcaseOuter,
					h && ya.DragElement,
					this.props.showcase.bDeleting && ya.Deleting,
				),
				strCollectionId: this.props.showcase.strCollectionId,
				strEligibleClassName: ya.DropOption,
				strTargetedClassName: ya.DropTarget,
				"data-id": this.props.showcase.nShowcaseId,
			},
			d.createElement(
				"div",
				{
					ref: this.m_refDiv,
					className: _,
				},
				d.createElement(Ba, {
					showcase: this.props.showcase,
					hideCollectionCount: c,
					itemsDisplayed: A,
					itemsTotal: i,
					trueTotal: a,
					collapsed: !this.props.showcase.bExpanded,
					onToggleCollapse: this.OnToggleCollapsed,
					showSortByPicker: t,
					pageable: l,
					fnLeftClicked: this.m_bLeftArrowEnabled ? this.ScrollLeft : undefined,
					fnRightClicked: this.m_bRightArrowEnabled
						? this.ScrollRight
						: undefined,
					reorderMode: this.props.reorderMode,
					onStartReordering: this.props.onStartReordering
						? this.OnStartReordering
						: undefined,
				}),
				f,
			),
		);
	}
};
Cg([Re.sH], Ia.prototype, "m_bLeftArrowEnabled", undefined);
Cg([Re.sH], Ia.prototype, "m_bRightArrowEnabled", undefined);
Cg([k.oI], Ia.prototype, "OnToggleCollapsed", null);
Cg([k.oI], Ia.prototype, "OnUpdateArrows", null);
Cg([k.oI], Ia.prototype, "ScrollLeft", null);
Cg([k.oI], Ia.prototype, "ScrollRight", null);
Cg([k.oI], Ia.prototype, "OnStartReordering", null);
Cg([k.oI], Ia.prototype, "OnGridItemsDisplayedChanged", null);
Ia = Cg([ht.PA], Ia);
class Ea extends d.Component {
	state = {
		bButtonHovered: false,
		bReorderMode: false,
		nDraggingShowcase: undefined,
		nDragOffset: undefined,
		mouseY: undefined,
		rgShowcases: undefined,
		nLibraryDisplaySize: undefined,
		rgPositions: undefined,
		rgOrder: undefined,
	};
	m_refOuter = d.createRef();
	m_refSortableContainer = d.createRef();
	m_refDragElement = d.createRef();
	m_refFirstShowcase = undefined;
	m_resizeObserver = undefined;
	m_rgAutorunDisposers = [];
	constructor(e) {
		super(e);
	}
	componentDidMount() {
		this.m_rgAutorunDisposers.push(
			fm(() => {
				const [e] = l.rV.GetClientSetting("library_display_size");
				const t = _a.N.showcases;
				const [r, n] = this.CalculatePositions(t, this.state.mouseY);
				this.setState({
					rgShowcases: t,
					rgPositions: r,
					rgOrder: n,
					nLibraryDisplaySize: e,
				});
			}),
		);
	}
	componentWillUnmount() {
		this.m_resizeObserver?.disconnect();
		this.m_rgAutorunDisposers.forEach((e) => e());
		this.StopGlobalMouseTracking();
	}
	AddShowcase(e) {
		_a.N.AddNewShowcase();
	}
	OnReorder(e, t, r) {
		let n;
		n =
			t == null
				? Date.now()
				: r == null
					? _a.m.GetOrderForShowcase(t) - 1000
					: (_a.m.GetOrderForShowcase(t) + _a.m.GetOrderForShowcase(r)) / 2;
		_a.N.SetOrder(e, n);
	}
	OnStartReordering(e, t, r) {
		const n = !this.state.bReorderMode;
		this.setState(
			{
				bReorderMode: true,
				nDraggingShowcase: e.nShowcaseId,
				nDragOffset: t,
				mouseY: r,
			},
			() => {
				this.ScrollIntoView(n, () => {
					this.TrackMouseMove(r);
					this.StartGlobalMouseTracking();
				});
			},
		);
	}
	ScrollIntoView(e, t) {
		let r = this.m_refOuter.current.offsetTop;
		let n = this.props.scrollElement.scrollTop;
		let i =
			this.props.scrollElement.scrollTop +
			this.props.scrollElement.offsetHeight;
		if (r < n || r > i) {
			let e = Math.max(Math.min((Math.abs(n - r) / 1000) * 200, 500), 300);
			new fa.JV(
				this.props.scrollElement,
				{
					scrollTop: r,
				},
				{
					msDuration: e,
					timing: "sine",
					onComplete: t,
				},
			).Start();
		} else if (e) {
			window.setTimeout(() => {
				t();
			}, 300);
		} else {
			t();
		}
	}
	OnDoneReordering() {
		this.setState({
			bReorderMode: false,
		});
	}
	BindFirstShowcase(e) {
		this.m_refFirstShowcase = e;
	}
	StartGlobalMouseTracking() {
		const e = GetOwningWindowForElement(this.m_refOuter.current);
		e.addEventListener("mouseup", this.OnGlobalMouseUp);
		e.addEventListener("mousemove", this.OnGlobalMouseMove);
		this.props.scrollElement.addEventListener(
			"scroll",
			this.OnScrollParentScroll,
		);
		if (this.m_resizeObserver) {
			this.m_resizeObserver.observe(this.m_refSortableContainer.current);
		} else {
			this.m_resizeObserver = Fd(
				this.m_refSortableContainer.current,
				this.OnResize,
			);
		}
	}
	StopGlobalMouseTracking() {
		const e = GetOwningWindowForElement(this.m_refOuter.current);
		e.removeEventListener("mouseup", this.OnGlobalMouseUp);
		e.removeEventListener("mousemove", this.OnGlobalMouseMove);
		this.props.scrollElement.removeEventListener(
			"scroll",
			this.OnScrollParentScroll,
		);
		this.m_resizeObserver?.unobserve(this.m_refSortableContainer.current);
	}
	OnGlobalMouseUp(e) {
		this.StopGlobalMouseTracking();
		this.m_refSortableContainer.current.ownerDocument.body.style.cursor = "";
		const t = this.state.nDraggingShowcase;
		const r = this.state.rgShowcases.findIndex((e) => e.nShowcaseId == t);
		const n = this.state.rgOrder.findIndex((e) => e.nShowcaseId == t);
		const i = n == 0 || this.state.rgOrder[n - 1];
		const a =
			n == this.state.rgShowcases.length - 1 || this.state.rgOrder[n + 1];
		this.setState(
			{
				nDraggingShowcase: undefined,
				rgPositions: undefined,
				rgOrder: undefined,
			},
			() => {
				if (r != n) {
					this.OnReorder(t, i, a);
				}
			},
		);
	}
	OnGlobalMouseMove(e) {
		if ((e.buttons & 1) == 0) {
			this.OnGlobalMouseUp(e);
		} else {
			this.TrackMouseMove(e.clientY);
		}
	}
	OnScrollParentScroll(e) {
		this.TrackMouseMove(this.state.mouseY);
	}
	OnResize() {
		if (this.state.nDraggingShowcase !== undefined) {
			this.TrackMouseMove(this.state.mouseY);
		}
	}
	TrackMouseMove(e) {
		const t = this.m_refSortableContainer.current.getBoundingClientRect();
		this.m_refSortableContainer.current.ownerDocument.body.style.cursor =
			"grabbing";
		const r = this.m_refDragElement.current
			? this.m_refDragElement.current.height
			: 0;
		const n = OQ(e - this.state.nDragOffset, t.top, t.bottom - r);
		const i = this.props.scrollElement.getBoundingClientRect();
		if (e + r > i.bottom) {
			this.props.scrollElement.scrollTo(
				0,
				this.props.scrollElement.scrollTop + (e + r - i.bottom),
			);
		} else if (e < 0) {
			const t = this.m_refOuter.current.getBoundingClientRect();
			const n = OQ(e, t.top, t.bottom - r);
			this.props.scrollElement.scrollTo(
				0,
				this.props.scrollElement.scrollTop + n,
			);
		}
		const [a, s] = this.CalculatePositions(this.state.rgShowcases, n);
		this.setState({
			mouseY: n + this.state.nDragOffset,
			rgPositions: a,
			rgOrder: s,
		});
	}
	CalculatePositions(e, t) {
		const r = e.slice();
		if (
			this.state.bReorderMode &&
			this.m_refFirstShowcase &&
			this.state.nDraggingShowcase !== undefined
		) {
			const n = this.m_refFirstShowcase.height;
			const i = this.m_refSortableContainer.current.getBoundingClientRect();
			const a = OQ(t - i.top, 0, i.height);
			const s = r.findIndex(
				(e) => e.nShowcaseId == this.state.nDraggingShowcase,
			);
			const o = Math.round(a / n);
			const l = r.splice(s, 1);
			r.splice(o, 0, l[0]);
			return [
				e.map((e, t) => {
					const i = r.findIndex((t) => t.nShowcaseId == e.nShowcaseId);
					return Math.floor((i - t) * n);
				}),
				r,
			];
		}
		if (
			this.state.bReorderMode &&
			this.state.rgShowcases &&
			e &&
			this.state.rgShowcases.findIndex((e) => e.bDeleting) !== -1
		) {
			const t = this.m_refFirstShowcase.height;
			let n = 0;
			let i = [];
			for (let r = 0; r < e.length; r++) {
				i.push(n);
				if (e[r].bDeleting) {
					n -= t;
				}
			}
			return [i, r];
		}
		return [undefined, r];
	}
	render() {
		const e = this.state.rgShowcases;
		if (!e) {
			return null;
		}
		const t = _a.N.BHasEmptyShowcase();
		const r = e.length < 2 || t;
		const n = this.state.rgPositions;
		let i;
		if (
			this.state.bReorderMode &&
			this.state.nDraggingShowcase !== undefined &&
			this.state.mouseY !== undefined
		) {
			const t = e.find((e) => e.nShowcaseId == this.state.nDraggingShowcase);
			const r = this.m_refSortableContainer.current.getBoundingClientRect();
			const n = this.state.mouseY - r.top - this.state.nDragOffset;
			i = d.createElement(va, {
				key: `drag${t.nShowcaseId}`,
				ref: this.m_refDragElement,
				width: this.m_refSortableContainer.current.clientWidth,
				y: n,
				showcase: t,
				collectionId: t.strCollectionId,
				scrollElement: this.props.scrollElement,
				coverSize: this.state.nLibraryDisplaySize,
				reorderMode: true,
			});
		}
		return d.createElement(
			"div",
			{
				ref: this.m_refOuter,
				className: A_1(
					ya.LibraryShowCases,
					this.state.bReorderMode && ya.Reordering,
				),
			},
			e.length < _a.N.maxShowcases &&
				d.createElement(
					"div",
					{
						className: A_1(
							ya.AddShowcaseRow,
							this.state.bButtonHovered && !t && ya.ButtonHovered,
						),
					},
					d.createElement("div", {
						className: A_1(ya.Rule, ya.RuleLeft),
					}),
					d.createElement(
						"div",
						{
							className: A_1(ya.AddShowcase, t && ya.Disabled),
							onMouseEnter: () =>
								this.setState({
									bButtonHovered: true,
								}),
							onMouseLeave: () =>
								this.setState({
									bButtonHovered: false,
								}),
							onClick: t || this.AddShowcase,
						},
						d.createElement(C.f5w, null),
						Localize("#Showcase_AddNewShowcase"),
					),
					d.createElement("div", {
						className: A_1(ya.Rule, ya.RuleRight),
					}),
				),
			d.createElement(
				"div",
				{
					className: ya.DoneReorderingRow,
				},
				d.createElement(
					Wr.jn,
					{
						className: A_1(ya.DoneReordering),
						onClick: this.OnDoneReordering,
					},
					Localize("#Showcase_DoneReordering"),
				),
			),
			d.createElement(
				"div",
				{
					ref: this.m_refSortableContainer,
					className: A_1(
						ya.Sortable,
						this.state.nDraggingShowcase !== undefined && ya.DragInProgress,
						this.state.rgShowcases.findIndex((e) => e.bDeleting) !== -1 &&
							ya.DeleteInProgress,
					),
				},
				i,
				d.createElement(Ma, {
					rgShowcases: e,
					rgPositions: n,
					bDisableReordering: r,
					bReorderMode: this.state.bReorderMode,
					nDraggingShowcase: this.state.nDraggingShowcase,
					nLibraryDisplaySize: this.state.nLibraryDisplaySize,
					bindFirstShowcase: this.BindFirstShowcase,
					scrollElement: this.props.scrollElement,
					onStartReordering: this.OnStartReordering,
				}),
			),
		);
	}
}
Cg([k.oI], Ea.prototype, "AddShowcase", null);
Cg([k.oI], Ea.prototype, "OnReorder", null);
Cg([k.oI], Ea.prototype, "OnStartReordering", null);
Cg([k.oI], Ea.prototype, "ScrollIntoView", null);
Cg([k.oI], Ea.prototype, "OnDoneReordering", null);
Cg([k.oI], Ea.prototype, "BindFirstShowcase", null);
Cg([k.oI], Ea.prototype, "OnGlobalMouseUp", null);
Cg([k.oI], Ea.prototype, "OnGlobalMouseMove", null);
Cg([k.oI], Ea.prototype, "OnScrollParentScroll", null);
Cg([k.oI], Ea.prototype, "OnResize", null);
class Ma extends d.Component {
	m_refSortableContainer = d.createRef();
	m_strLastShowcaseData = undefined;
	shouldComponentUpdate(e) {
		return (
			this.props.bReorderMode != e.bReorderMode ||
			this.props.bDisableReordering != e.bDisableReordering ||
			this.props.bDisableReordering != e.bDisableReordering ||
			this.props.nDraggingShowcase != e.nDraggingShowcase ||
			this.props.bDisableReordering != e.bDisableReordering ||
			this.props.nDraggingShowcase != e.nDraggingShowcase ||
			this.props.nLibraryDisplaySize != e.nLibraryDisplaySize ||
			this.props.bDisableReordering != e.bDisableReordering ||
			this.props.nDraggingShowcase != e.nDraggingShowcase ||
			this.props.nLibraryDisplaySize != e.nLibraryDisplaySize ||
			this.m_strLastShowcaseData != JSON.stringify(e.rgShowcases) ||
			this.props.bDisableReordering != e.bDisableReordering ||
			this.props.nDraggingShowcase != e.nDraggingShowcase ||
			this.props.nLibraryDisplaySize != e.nLibraryDisplaySize ||
			this.m_strLastShowcaseData != JSON.stringify(e.rgShowcases) ||
			JSON.stringify(this.props.rgPositions) != JSON.stringify(e.rgPositions)
		);
	}
	get bounds() {
		return (
			this.m_refSortableContainer.current &&
			this.m_refSortableContainer.current.getBoundingClientRect()
		);
	}
	render() {
		const e = this.props.rgShowcases;
		const t = this.props.rgPositions;
		this.m_strLastShowcaseData = JSON.stringify(e);
		let r = [];

		e.forEach((i, n) => {
			r.push(
				d.createElement(va, {
					key: i.nShowcaseId,
					ref: n == 0 ? this.props.bindFirstShowcase : undefined,
					spacer:
						this.props.bReorderMode &&
						i.nShowcaseId == this.props.nDraggingShowcase,
					width:
						this.m_refSortableContainer.current &&
						this.m_refSortableContainer.current.clientWidth,
					transformY: t ? t[n] : undefined,
					showcase: i,
					collectionId: i.strCollectionId,
					scrollElement: this.props.scrollElement,
					coverSize: this.props.nLibraryDisplaySize,
					reorderMode: this.props.bReorderMode,
					onStartReordering:
						this.props.bDisableReordering || this.props.onStartReordering,
				}),
			);
		});

		return d.createElement(d.Fragment, null, r);
	}
}
const Ra = Ta;
function Ga(e) {
	let t = e.appid;
	let r = JV();
	let [n, a] = d.useState({
		x: 0,
		y: 0,
	});
	let s = d.useRef(undefined);
	let o = br_1();
	let l = () => o.App(t);
	T(t);
	let c = d.useCallback(
		(e) => {
			if (!s.current) {
				return;
			}
			let t = Dr.Fu(e.clientX, 0, s.current.clientWidth, 0, 100);
			let r = Dr.Fu(e.clientY, 0, s.current.clientHeight, 0, 100);
			a({
				x: t,
				y: r,
			});
		},
		[a, s],
	);
	if (t == Na.sc || y.jR.BIsAppBlocked(t)) {
		return null;
	}
	let m = Dr.Fu(n.x, 0, 100, 20, 60);
	let u = Dr.Fu(n.x, 0, 100, -36, -30);
	let A = Dr.Fu(n.x, 0, 100, 178, 190);
	let g = Dr.Fu(n.x, 0, 100, -41, -11);
	let h = Dr.Fu(n.x, 0, 100, 164, 148);
	let C = Dr.Fu(n.x, 0, 150, 0.5, 2);
	let _ = `translateX(-126px) translateY(-82px) translateZ(-100px) rotateX(0deg) rotateY(${m}deg) rotateZ(0deg)`;
	let f = `rotateX(-90deg) skew(${g}deg, 0deg) translate3d(${u}px, 80px, ${A}px)`;
	let S = Dr.Fu(n.x, 0, 100, 1.25, 0.8);
	let w = se.tw.GetAppOverviewByAppID(t);
	let B = ((e) => {
		let t = e.GetPerClientData("local");
		return t && e.BIsPerClientDataLocal(t) && t.display_status == 16;
	})(w);
	return d.createElement(
		"div",
		{
			className: Ra.PrePurchaseContainer,
			ref: s,
			onMouseMove: c,
		},
		d.createElement(oe.z, {
			className: Ra.HeroImage,
			eAssetType: 1,
			app: w,
		}),
		d.createElement("div", {
			className: Ra.GroundPlane,
		}),
		d.createElement(
			"div",
			{
				className: Ra.CubeContainer,
			},
			d.createElement(
				"div",
				{
					className: Ra.Cube,
					style: {
						transform: _,
					},
				},
				d.createElement(oe.z, {
					className: A_1(Ra.CubeFace, Ra.CubeFaceFront),
					eAssetType: 0,
					app: w,
					appid: t,
					style: {
						filter: `brightness(${S})`,
					},
					onClick: l,
				}),
				d.createElement("div", {
					className: A_1(Ra.CubeFace, Ra.CubeFaceBack),
				}),
				d.createElement(oe.z, {
					className: A_1(Ra.CubeFace, Ra.CubeFaceLeft),
					eAssetType: 0,
					app: w,
					appid: t,
					style: {
						filter: `blur(8px) brightness(${C})`,
					},
				}),
				d.createElement(
					"div",
					{
						className: A_1(Ra.CubeFace, Ra.CubeFaceBottom),
						style: {
							transform: f,
							height: h,
						},
					},
					d.createElement("div", {
						className: Ra.CubeFaceShadow,
					}),
				),
			),
			d.createElement("div", {
				className: Ra.Spacer,
			}),
			d.createElement(
				"div",
				{
					className: Ra.PrePurchaseDesc,
				},
				d.createElement(Oa, {
					app: w,
					onClickFunction: l,
				}),
				d.createElement(Pa, {
					app: w,
				}),
				d.createElement(
					"div",
					{
						className: Ra.PrePurchaseActionsContainer,
					},
					!B &&
						d.createElement(ka.aV, {
							className: Ra.PrePurchaseActions,
							overview: w,
							bShowStreamingSelector: true,
						}),
					d.createElement(
						Wr.$n,
						{
							className: Ra.PrePurchaseActions,
							onClick: r,
						},
						Localize("#Button_Dismiss"),
					),
				),
			),
		),
	);
}
function Oa(e) {
	let { app: t, onClickFunction: r } = e;
	let n = null;
	let i = t.GetPerClientData("local");
	if (i && t.BIsPerClientDataLocal(i)) {
		let e = d.createElement(
			"span",
			{
				className: Ra.GameName,
				onClick: r,
			},
			t.display_name,
		);
		switch (i.display_status) {
			case 10: {
				n = LocalizeReact("#PrePurchase_Preload_Title", e);
				break;
			}
			case 16: {
				n = LocalizeReact("#PrePurchase_PreloadComplete_Title", e);
				break;
			}
			case 22:
			case 7:
			case 23:
			case 9: {
				n = LocalizeReact("#PrePurchase_Install_Title", e);
				break;
			}
			case 11: {
				n = LocalizeReact("#PrePurchase_PlayNow_Title", e);
			}
		}
	}
	return d.createElement(
		"div",
		{
			className: Ra.Title,
		},
		n,
	);
}
function Pa(e) {
	let t;
	let { app: r } = e;
	let n = r.GetPerClientData("local");
	if (n && r.BIsPerClientDataLocal(n)) {
		switch (n.display_status) {
			case 10: {
				t = Localize("#PrePurchase_Preload_Desc");
				break;
			}
			case 16: {
				t = Localize("#PrePurchase_PreloadComplete_Desc");
				break;
			}
			case 22:
			case 7:
			case 23:
			case 9: {
				t = Localize("#PrePurchase_Install_Desc");
				break;
			}
			case 11: {
				t = Localize("#PrePurchase_PlayNow_Desc");
			}
		}
	}
	return d.createElement(
		"div",
		{
			className: Ra.Desc,
		},
		t,
	);
}
d.Component;
function La(e) {
	let { bInGamepadUI: t } = e;
	let [r, n] = d.useState();
	let i = i5();
	let a = !!i;
	return d.createElement(
		Ur.ix,
		{
			className: Fi.Container,
			scrollClassName: Fi.InnerContainer,
			innerRef: n,
			strRememberScrollKey: "library-home",
			scrollToTopButtonWrapper: cn.f,
		},
		d.createElement(
			"div",
			{
				className: Fi.WhatsNewContainer,
			},
			d.createElement(
				Oe.tH,
				null,
				!a &&
					d.createElement(Zi, {
						bInGamepadUI: t,
					}),
				a &&
					d.createElement(Ga, {
						appid: i,
					}),
			),
		),
		d.createElement(Xi, null),
		d.createElement(
			"div",
			{
				className: Fi.LibraryHome,
			},
			d.createElement(
				Oe.tH,
				null,
				d.createElement(Ea, {
					scrollElement: r,
				}),
			),
		),
	);
}
const xa = za;
let Wa = class extends d.Component {
	OnDrop(e) {
		e.forEach((e, t) => t.RemoveApps(e));
	}
	render() {
		let e;
		let t = true;
		const r = new Map();
		const n = new Set();
		const i = Ir._.GetDragData("apps");
		if (i && i.length != 0) {
			i.forEach((e) => {
				const t = se.tw.GetAppOverviewByAppID(e.appid);
				const i = e.strCollectionId && vr.md.GetCollection(e.strCollectionId);
				if (t && i && i.bAllowsDragAndDrop) {
					n.add(e.appid);
					const a = i.AsDragDropCollection();
					if (!r.has(a)) {
						r.set(a, []);
					}
					r.get(a).push(t);
				}
			});
			if (r.size == 0) {
				t = false;
			} else if (n.size == 1) {
				if (r.size == 1) {
					const [t, n] = r.entries().next().value;
					const i = n[0];
					e = LocalizeReact(
						"#GameAction_RemoveAppFromCollection",
						d.createElement(
							"div",
							{
								className: xa.AppName,
							},
							d.createElement(oe.z, {
								app: i,
								eAssetType: 4,
								className: xa.GameIcon,
							}),
							i.display_name,
						),
						d.createElement(
							"span",
							{
								className: xa.CollectionName,
							},
							t.displayName,
						),
					);
				} else {
					const t = r.values().next().value[0];
					e = LocalizeReact(
						"#GameAction_RemoveAppFromMultipleCollections",
						d.createElement(
							"div",
							{
								className: xa.AppName,
							},
							d.createElement(oe.z, {
								app: t,
								eAssetType: 4,
								className: xa.GameIcon,
							}),
							t.display_name,
						),
					);
				}
			} else {
				e =
					r.size == 1
						? LocalizeReact(
								"#GameAction_RemoveMultipleAppsFromCollection",
								d.createElement(
									"span",
									{
										className: xa.CollectionName,
									},
									r.keys().next().value.displayName,
								),
							)
						: LocalizeReact(
								"#GameAction_RemoveMultipleAppsFromMultipleCollections",
							);
			}
		} else {
			t = false;
		}
		return d.createElement(
			Rr.A,
			{
				className: xa.RemoveHoverTransitionGroup,
				appear: true,
				enter: true,
				exit: true,
			},
			t &&
				d.createElement(
					Ua.M,
					{
						key: "Transition",
						id: xa.RemoveBoxTransition,
						classNames: {
							enter: xa.RemoveBoxTransitionEnter,
							enterActive: xa.RemoveBoxTransitionEnterActive,
							exit: xa.RemoveBoxTransitionExit,
							exitActive: xa.RemoveBoxTransitionExitActive,
						},
						timeout: 250,
					},
					(t) =>
						d.createElement(
							xr._k,
							{
								containerRef: t,
								className: xa.Container,
								strTargetId: "remove-game-hover",
								strTargetedClassName: xa.DropTarget,
								fnOnDroppedApps: () => this.OnDrop(r),
							},
							d.createElement(
								"div",
								{
									className: xa.Message,
								},
								e,
							),
						),
				),
		);
	}
};
Cg([k.oI], Wa.prototype, "OnDrop", null);
Wa = Cg([ht.PA], Wa);
const Ha = {
	1: "LibraryDisplaySizeSmall",
	2: "LibraryDisplaySizeMedium",
	3: "LibraryDisplaySizeLarge",
};
const ja = () => {
	const e = R7();
	const t = useCallback(
		(t) => {
			if (t.keyCode == 220 && (t.ctrlKey || t.metaKey)) {
				r = e.ownerWindow;
				mK(d.createElement(In, null), r || document.defaultView, {
					bForcePopOut: true,
					strTitle: "Network Connections",
				});
				t.preventDefault();
				return;
			}
			var r;
		},
		[e.ownerWindow],
	);
	useEffect(() => {
		const r = e.ownerWindow;
		r.addEventListener("keydown", t);
		return () => r.removeEventListener("keydown", t);
	}, [e.ownerWindow, t]);
	return null;
};
let qa = class extends d.Component {
	m_elGamesListContainerRef = d.createRef();
	static contextType = Br.g;
	constructor(e) {
		super(e);
		const t = window.localStorage.getItem("GameListWidthPercentage");
		let r = t ? parseInt(t) : undefined;
		if (Number.isNaN(r)) {
			r = undefined;
		}
		if (r !== undefined) {
			r = OQ(r, 0, parseInt(Bi.LeftListMaxPercentage));
		}
		this.state = {
			loaded: false,
			bIsResizingGamesList: false,
			nListWidthPercentage: r,
		};
	}
	SetStateLoaded() {
		console.timeEnd("Library Init");
		this.setState({
			loaded: true,
		});
	}
	async componentDidMount() {
		console.time("Library Init");
		const e =
			s.n6.currentCollectionID && vr.md.GetCollection(s.n6.currentCollectionID);
		if (
			(Er.z.BRouteMatch(n.BV.Library.Collection()) && !e) ||
			(Er.z.BRouteMatch(n.BV.Library.App.Root()) &&
				!s.n6.currentGameListSelection.nAppId)
		) {
			Er.z.GetNavigator().Home();
		}
		(async (e) => {
			if (DO(de.TS.LAUNCHER_TYPE)) {
				return;
			}
			const t = await SteamClient.UI.GetUIMode();
			if (t == 1 || t == 4) {
				return;
			}
			let r = await e.GetObject(Sn);
			const n = new Date();
			const i = bn.filter(
				({ fnRender: e, incrementalID: t, dtExpiration: i }) =>
					e && t > r && i > n,
			);
			if (i.length) {
				const t = i.map((e) =>
					d.createElement(
						d.Fragment,
						{
							key: e.incrementalID,
						},
						e.fnRender(),
					),
				);
				mK(
					d.createElement(yn, {
						rgElements: t,
					}),
					window,
					{
						strTitle: Localize("#WhatsNew_Title"),
					},
				);
				r = i.reduce((e, t) => Math.max(e, t.incrementalID), r);
				e.StoreObject(Sn, r);
			}
		})(qw().GetCloudStorageForLibrary());
		this.SetStateLoaded();
	}
	m_winOwner = undefined;
	OnRootLoad(e) {
		if (e) {
			this.m_winOwner = e.ownerDocument.defaultView;
		}
	}
	OnGrabberMouseDown(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		this.setState({
			bIsResizingGamesList: true,
		});
		t.addEventListener("mousemove", this.HandleMouseMove);
		t.addEventListener("mouseup", this.UnregisterGameListDragEvents);
	}
	OnGrabberTouchStart(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		t.addEventListener("touchmove", this.HandleTouchMove);
		t.addEventListener("touchend", this.UnregisterGameListDragEvents);
	}
	HandleTouchMove(e) {
		if (e.touches.length >= 1) {
			this.InternalAdjustGamesListContainerOnDrag(e.touches[0].clientX);
		}
	}
	HandleMouseMove(e) {
		this.InternalAdjustGamesListContainerOnDrag(e.clientX);
	}
	InternalAdjustGamesListContainerOnDrag(e) {
		if (!this.m_elGamesListContainerRef.current) {
			return;
		}
		let t =
			e - this.m_elGamesListContainerRef.current.getBoundingClientRect().left;
		if (t % 2 != 0) {
			t++;
		}
		this.SetGameListWidth(t);
	}
	ComputeListWidthPercentage(e) {
		const t = this.m_winOwner.innerWidth;
		const r = OQ(
			t - parseInt(Bi.RightPanelMinWidth),
			parseInt(Bi.LeftListMinWidth),
			(t * parseInt(Bi.LeftListMaxPercentage)) / 100,
		);
		e = OQ(e, parseInt(Bi.LeftListMinWidth), r);
		return OQ((e * 100) / t, 0, parseInt(Bi.LeftListMaxPercentage));
	}
	SetGameListWidth(e) {
		if (this.m_winOwner.innerWidth == 0) {
			return;
		}
		const t = this.ComputeListWidthPercentage(e);
		window.localStorage.setItem("GameListWidthPercentage", t.toString());
		this.setState({
			nListWidthPercentage: t,
		});
	}
	UnregisterGameListDragEvents(e) {
		this.setState({
			bIsResizingGamesList: false,
		});
		e.view.removeEventListener("mousemove", this.HandleMouseMove);
		e.view.removeEventListener("touchmove", this.HandleTouchMove);
		e.view.removeEventListener("mouseup", this.UnregisterGameListDragEvents);
		e.view.removeEventListener("touchend", this.UnregisterGameListDragEvents);
	}
	render() {
		const { cm: e, bInGamepadUI: t } = this.props;
		if (!this.state.loaded) {
			return null;
		}
		let r = {};
		if (this.state.nListWidthPercentage) {
			r = {
				width: `${this.state.nListWidthPercentage}%`,
			};
		}
		const [i] = l.rV.GetClientSetting("library_display_size");
		const a = this.context;
		let s = t
			? YQ(a.libraryWidth, a.libraryHeight)
			: Mr.o.GetComputedDisplaySize(i);
		const o = A_1(
			Bi.Container,
			Ha[s],
			this.state.bIsResizingGamesList && Bi.IsResizingLeftList,
		);
		return d.createElement(
			wr.q,
			null,
			d.createElement(ja, null),
			d.createElement(
				"div",
				{
					ref: this.OnRootLoad,
					className: o,
				},
				d.createElement(
					Je.dO,
					null,
					d.createElement(
						Je.qh,
						{
							path: n.BV.Library.Root(),
						},
						d.createElement(
							Oe.tH,
							null,
							d.createElement(
								Oe.tH,
								null,
								d.createElement(
									"div",
									{
										className: Bi.LeftListSizableContainer,
										ref: this.m_elGamesListContainerRef,
										style: r,
									},
									d.createElement(Si, {
										bSmallMode: false,
									}),
									d.createElement(Oe.tH, null, d.createElement(Wa, null)),
								),
							),
							d.createElement(
								Oe.tH,
								null,
								d.createElement("div", {
									className: A_1(Bi.LibraryWindowDivider, Bi.Sizable),
									onMouseDown: this.OnGrabberMouseDown,
									onTouchStart: this.OnGrabberTouchStart,
								}),
							),
							d.createElement(
								Je.dO,
								null,
								d.createElement(
									n.Jh,
									{
										path: n.BV.Library.Home(),
									},
									d.createElement(
										Ka,
										null,
										d.createElement(La, {
											bInGamepadUI: t,
										}),
									),
								),
								d.createElement(
									n.Jh,
									{
										path: n.BV.Library.App.Root(),
									},
									d.createElement(Ka, null, d.createElement(Gr.xA, null)),
								),
								d.createElement(
									n.Jh,
									{
										path: n.BV.Library.Collection(),
									},
									d.createElement(Ka, null, d.createElement(un, null)),
								),
								d.createElement(
									n.Jh,
									{
										path: n.BV.Library.AllCollections(),
									},
									d.createElement(
										Ka,
										null,
										d.createElement(Nr.R0, {
											coverSize: i,
										}),
									),
								),
								d.createElement(
									Je.qh,
									null,
									d.createElement(
										"div",
										null,
										d.createElement("div", null, "Unknown Route"),
										d.createElement(
											N.N_,
											{
												to: n.BV.Downloads(),
											},
											"Downloads",
										),
									),
								),
							),
						),
					),
				),
			),
		);
	}
};
Cg([k.oI], qa.prototype, "OnRootLoad", null);
Cg([k.oI], qa.prototype, "OnGrabberMouseDown", null);
Cg([k.oI], qa.prototype, "OnGrabberTouchStart", null);
Cg([k.oI], qa.prototype, "HandleTouchMove", null);
Cg([k.oI], qa.prototype, "HandleMouseMove", null);
Cg([k.oI], qa.prototype, "SetGameListWidth", null);
Cg([k.oI], qa.prototype, "UnregisterGameListDragEvents", null);
qa = Cg([ht.PA], qa);
const Qa = y_2(qa);
const Za = PA((e) =>
	d.createElement(
		wr.q,
		null,
		d.createElement(ja, null),
		d.createElement(Si, {
			bSmallMode: true,
		}),
	),
);
function Ya() {
	const e = VT();
	const t = Qx();
	const [r] = VI("library_low_perf_mode");
	const i = {
		enter: Bi.OverlayAppDetailsTransitionEnter,
		enterActive: Bi.OverlayAppDetailsTransitionEnterActive,
		enterDone: Bi.OverlayAppDetailsTransitionEntered,
		exit: Bi.OverlayAppDetailsTransitionExit,
		exitActive: Bi.OverlayAppDetailsTransitionExitActive,
	};
	const a = !r;
	const s = useRef(null);
	return d.createElement(
		Rr.A,
		{
			className: Bi.AppDetailsOverlayTransitionGroup,
			appear: a,
			enter: a,
			exit: a,
		},
		e &&
			d.createElement(
				kr.A,
				{
					nodeRef: s,
					classNames: i,
					timeout: 200,
				},
				d.createElement(vi.z, {
					onClose: t,
					showAppIcon: true,
					appid: e.appid,
					initialEventID: e.eventid,
					clanSteamID: e.clanSteamID,
					additionalParams: e.additionalParams,
				}),
			),
	);
}
function Ka(e) {
	const { children: t } = e;
	const r = {
		enter: Bi.AppDetailsTransitionEnter,
		enterActive: Bi.AppDetailsTransitionEnterActive,
		exit: Bi.AppDetailsTransitionExit,
		exitActive: Bi.AppDetailsTransitionExitActive,
	};
	const i = W5(n.BV.Library.AllCollections());
	const a = {
		breakUltraNarrow: [
			parseInt(Sr.RightBreakUltraNarrow),
			"UltraNarrowRightPanel",
		],
		breakNarrow: [parseInt(Sr.RightBreakNarrow), "NarrowRightPanel"],
		breakWide: [parseInt(Sr.RightBreakWide), "WideRightPanel"],
		breakUltraWide: [parseInt(Sr.RightBreakUltraWide), "UltraWideRightPanel"],
		breakShort: [parseInt(Sr.BreakShort), "ShortRightPanel"],
		breakTall: [parseInt(Sr.BreakTall), "TallRightPanel"],
		strMedium: "MediumRightPanel",
		fnDimensionsChanged: (e, t) => {
			Mr.o.SetDimensions(e, t);
		},
	};
	const s = useRef(null);
	return d.createElement(
		Va.b,
		{
			className: Bi.MainPanel,
			...a,
		},
		d.createElement(
			Rr.A,
			{
				className: Bi.AppDetailsTransitionGroup,
				appear: true,
				enter: true,
				exit: true,
			},
			d.createElement(
				kr.A,
				{
					nodeRef: s,
					classNames: r,
					addEndListener: async (e, t) => {
						if (Ir._.BIsDragInProgress()) {
							await Ir._.WaitForDragToEnd();
							t();
						} else {
							setTimeout(t, 800);
						}
					},
					timeout: null,
				},
				d.createElement(
					"div",
					{
						ref: s,
						className: Bi.AppDetailsMain,
					},
					t,
					d.createElement(Ya, null),
					d.createElement(Xa, null),
				),
			),
		),
		d.createElement(Nr.lp, {
			className: Bi.NewCollectionTarget,
			strEligibleClassName: !i && Bi.Visible,
		}),
	);
}
function Xa(e) {
	const t = W5({
		path: n.BV.Library.App.Achievements.Root(),
		exact: false,
	});
	const [r] = VI("library_low_perf_mode");
	const { appid: a } = g_3();
	const s = n.BV.Library.App.Root(a ? parseInt(a) : undefined);
	const o = tn_1(s, {
		bNoRedundantNavigation: true,
	});
	const c = d.useCallback(
		(e) => {
			if (e.keyCode == 27) {
				o();
			}
		},
		[o],
	);
	const m = {
		enter: Bi.OverlayAppDetailsTransitionEnter,
		enterActive: Bi.OverlayAppDetailsTransitionEnterActive,
		enterDone: Bi.OverlayAppDetailsTransitionEntered,
		exit: Bi.OverlayAppDetailsTransitionExit,
		exitActive: Bi.OverlayAppDetailsTransitionExitActive,
	};
	const u = !r;
	const A = useRef(null);
	return d.createElement(
		Rr.A,
		{
			className: Bi.AppDetailsOverlayTransitionGroup,
			appear: u,
			enter: u,
			exit: u,
		},
		t &&
			d.createElement(
				kr.A,
				{
					nodeRef: A,
					classNames: m,
					timeout: 200,
				},
				d.createElement(
					"div",
					{
						ref: A,
						className: Bi.AchievementsOverlayContainer,
						onKeyDown: c,
						onClick: o,
					},
					d.createElement(
						"div",
						{
							className: Bi.AchievementsPageContainer,
							onClick: (e) => {
								e.preventDefault();
								e.stopPropagation();
							},
						},
						a &&
							d.createElement(Fr.wi, {
								bShowGameInfoInHeader: true,
								appid: parseInt(a),
							}),
						d.createElement(
							"div",
							{
								className: Bi.CloseButton,
								onClick: o,
							},
							d.createElement(C.sED, null),
						),
					),
				),
			),
	);
}
const gs = ps;
function Cs(e) {
	const { loading: t, pageSecurity: r, displayURL: n, reload: i } = no();
	const a = n;
	const s = t;
	let l = $2();
	let [c, m, u] = J6(l.BrowserWindow, a);
	let A = s
		? d.createElement(De.Spinner, null)
		: d.createElement(De.Globe, null);
	let g = Localize("#Browser_Loading");
	if (!s && a && a.startsWith("https://") && r?.bIsSecure) {
		if (r?.bHasCertError) {
			A = d.createElement(De.Caution, {
				className: gs.CertError,
			});
			g = Localize("#Browser_NotSecure");
		} else {
			A = d.createElement(De.Lock, {
				locked: true,
			});
			g = r?.certName;
		}
	}
	return d.createElement(
		"div",
		{
			className: gs.URLBar,
		},
		!s &&
			a &&
			d.createElement(
				"div",
				{
					className: A_1(gs.StatusIcon, gs.ReloadButton),
					onClick: () => i(),
				},
				d.createElement(De.Refresh, null),
			),
		d.createElement(
			"div",
			{
				className: gs.URLBarText,
				onClick: m,
			},
			d.createElement(hL, {
				data: c,
				onAnimationComplete: u,
			}),
			d.createElement(
				pe.he,
				{
					className: A_1(gs.StatusIcon, gs.LockIcon),
					toolTipContent: g,
				},
				A,
			),
			d.createElement(
				"div",
				{
					className: A_1(gs.URL, r?.bHasCertError && gs.CertError),
				},
				a,
			),
		),
	);
}
export function J6(e, t) {
	let [r, n] = d.useState(null);
	let i = d.useCallback(
		(i) => {
			e.navigator.clipboard.writeText(t);
			if (!r) {
				n({
					x: i.clientX,
					y: i.clientY,
				});
			}
		},
		[e, t, r, n],
	);
	let a = d.useCallback(() => {
		n(null);
	}, [n]);
	return [r, i, a];
}
export function hL(e) {
	let { data: t, onAnimationComplete: r } = e;
	return d.createElement(
		cs._D,
		{
			position: t,
			onAnimationEnd: r,
		},
		Localize("#Browser_URLCopied"),
	);
}
function bs(e) {
	const { match: t, bSmallMode: r } = e;
	const { tabbedBrowserStore: n } = no();
	const [i, a] = d.useState();
	const [s, c] = TO(i?.ownerDocument.defaultView);
	((e) => {
		const [t] = VI("start_page");
		const r = Jg();
		const n = W6();
		useEffect(() => {
			if (e && n.length <= 1) {
				r.setNavigatingToInitialRoute(true);
				if (!t) {
					r.Home(undefined, {
						bReplace: true,
					});
					r.setNavigatingToInitialRoute(false);
					de.TS.SILENT_STARTUP = false;
					return;
				}
				switch (t) {
					case "library":
					case "friends":
					case "servers": {
						r.Home(undefined, {
							bReplace: true,
						});
						break;
					}
					case "console": {
						r.Console({
							bReplace: true,
						});
						break;
					}
					default: {
						const e = {
							store: "StoreFrontPage",
							friendactivity: "SteamIDFriendsPage",
							community: "CommunityHome",
							news: "NewsHomePage",
						};
						if (t in e) {
							const n = u.B7.ResolveURL(e[t]);
							if (y.jR.BIsURLBlocked(n)) {
								r.Home(undefined, {
									bReplace: true,
								});
							} else {
								r.SteamWeb(n, {
									bReplace: true,
								});
							}
						} else {
							r.Home(undefined, {
								bReplace: true,
							});
						}
					}
				}
				r.setNavigatingToInitialRoute(false);
				de.TS.SILENT_STARTUP = false;
			}
		}, [e]);
	})(c);
	const A = Ju(i?.ownerDocument.defaultView);
	const p = !!t;
	const g = c && p && !A;
	D_2(s);
	const h = $2();
	const C = M_1(
		"SteamBrowser",
		i?.ownerDocument.defaultView,
		h.params.browserInfo,
		s,
		m.oy.NavigationManager,
		g,
	);
	const _ = LoginStore(i?.ownerDocument.defaultView, h.params.browserInfo, s);
	const f = w_2();
	return d.createElement(
		d.Fragment,
		null,
		d.createElement(
			"div",
			{
				ref: a,
				className: gs.BrowserWrapper,
				style:
					!p || r
						? {
								display: "none",
							}
						: undefined,
			},
			!r &&
				d.createElement(
					d.Fragment,
					null,
					s && d.createElement(Cs, null),
					s &&
						d.createElement(rs.m4, {
							className: gs.Browser,
							browser: s,
							visible: g,
							underlay: f,
						}),
					C,
					_,
				),
		),
		n &&
			d.createElement(ys, {
				tabbedBrowserStore: n,
			}),
	);
}
function ys(e) {
	const { tabbedBrowserStore: t } = e;
	const [r] = VI("web_browser_home");
	const n = d.useRef(undefined);
	const i = d.useCallback(() => {
		t.RemoveAllRequests();
	}, [t]);
	const a = q3(() => t.active_web_requestid);
	const [s, o] = d.useState(t.web_requests);
	const c = d.useCallback(() => {
		let e = t.web_requests;
		o([...e]);
		if (n.current) {
			n.current.SteamClient.Window.BringToFront();
		}
	}, [t, o]);
	hL_1(t.GetWebPageRequestsChangedCallbackList(), c);
	const m = d.useCallback(
		(e) => {
			t.RemoveWebPageRequest(e);
		},
		[t],
	);
	const u = d.useCallback(
		(e) => {
			t.active_web_requestid = e;
		},
		[t],
	);
	const p = d.useCallback(
		(e) => {
			t.AddWebPageRequest(e ?? r, true);
		},
		[t, r],
	);
	const g = d.useCallback(
		(e, r) => {
			t.AddWebPageRequest(e, r);
		},
		[t],
	);
	const h = d.useCallback(
		(e, r) => {
			t.ReorderWebPageRequest(e, r);
		},
		[t],
	);
	const C = d.useCallback(
		(e, r, n) => {
			t.UpdateWebPageRequest(e, r, n);
		},
		[t],
	);
	if (s.length == 0) {
		return null;
	} else {
		return d.createElement(ls.$, {
			strName: "TabbedPopupBrowser",
			strTitle: Localize("#WindowName_SteamBrowser"),
			appid: vt.w1,
			strHomeURL: r,
			onClose: i,
			onCloseTab: m,
			onSelectTab: u,
			onTabNavigate: C,
			onAddTab: p,
			onNewTab: g,
			onReorderTab: h,
			activeRequestID: a,
			rgPages: s,
			refPopup: n,
		});
	}
}
function Ss(e) {
	const t = $2();
	const r = Pr_1();
	const { focused: n } = c_1();
	return d.createElement(
		Me.fN,
		null,
		d.createElement(
			"div",
			{
				className: A_1(gs.TopBar, r && gs.OSX),
			},
			d.createElement(
				"div",
				{
					className: gs.TitleBar,
				},
				!r &&
					d.createElement(Xe, {
						className: gs.RootMenuBar,
						bOSX: r,
					}),
				d.createElement("div", {
					className: gs.DragArea,
				}),
				e.bShowTitleBarControls &&
					d.createElement(Cr, {
						className: gs.TitleBarControls,
					}),
				d.createElement(
					"div",
					{
						className: gs.WindowControls,
					},
					d.createElement(as.c, {
						popup: t.BrowserWindow,
						bOSX: r,
						bForceWindowFocused: n,
					}),
				),
			),
			e.bShowSuperNav &&
				d.createElement(
					"div",
					{
						className: gs.SuperNavBar,
					},
					d.createElement(dt, null),
				),
		),
	);
}
function ws(e) {
	const t = $2();
	(() => {
		const e = jB();
		const t = yq();
		const r = kV();
		const {
			ownerWindow: { document: i },
		} = R7();
		useEffect(() => {
			const n = (n) => {
				let i = false;
				if (n.button === 3 && e.canGo(-1)) {
					t();
					i = true;
				} else if (n.button === 4 && e.canGo(1)) {
					r();
					i = true;
				}
				if (i) {
					n.stopPropagation();
					n.preventDefault();
				}
			};
			i.addEventListener("auxclick", n);
			return () => i.removeEventListener("auxclick", n);
		}, [e, i, t, r]);
	})();
	const r = de.TS.IN_STEAMUI_SHARED_CONTEXT && t.IsMainDesktopWindow();
	return d.createElement(
		"div",
		{
			className: gs.OuterFrame,
		},
		r &&
			d.createElement(Ss, {
				bShowTitleBarControls: !e.bSmallMode,
				bShowSuperNav: !e.bSmallMode,
			}),
		d.createElement(
			cn.W,
			{
				className: gs.ContentFrame,
			},
			!e.bSmallMode &&
				d.createElement(Bs, {
					cm: e.cm,
					bShowDesktopUIContent: r,
				}),
			r &&
				d.createElement(vs, {
					bSmallMode: e.bSmallMode,
				}),
			!e.bSmallMode &&
				r &&
				d.createElement(
					Je.qh,
					{
						path: n.BV.Console(),
					},
					d.createElement(ss.C, null),
				),
			e.bSmallMode &&
				d.createElement(Za, {
					cm: e.cm,
				}),
		),
		r &&
			d.createElement(be, {
				bSmallMode: e.bSmallMode,
			}),
	);
}
(async () => {
	if (!de.TS.IN_STEAMUI_SHARED_CONTEXT) {
		let e = KC();
		await e.Init(window.cm);
	}
})();
const Bs = d.memo((e) => {
	const { cm: t, bShowDesktopUIContent: r } = e;
	const { location: i, bActive: a } = ot();
	const s = Qn_1();
	return d.createElement(
		Es,
		{
			visible: a || !r,
		},
		d.createElement(
			Je.dO,
			{
				location: i,
			},
			d.createElement(
				n.Jh,
				{
					path: n.BV.Downloads(),
				},
				d.createElement(Ka, null, d.createElement(fr.lw, null)),
			),
			d.createElement(
				Je.qh,
				{
					path: n.BV.Library.Root(),
				},
				d.createElement(Qa, {
					cm: t,
					bInGamepadUI: s,
				}),
			),
		),
	);
});
const vs = d.memo((e) =>
	d.createElement(
		n.Jh,
		{
			path: n.BV.Browser(),
		},
		(t) =>
			d.createElement(bs, {
				...t,
				bSmallMode: e.bSmallMode,
			}),
	),
);
function Is(e) {
	const { children: t, className: r, ...n } = e;
	const i = {
		breakNarrow: [parseInt(Sr.BreakNarrow), "NarrowWindow"],
		breakWide: [parseInt(Sr.BreakWide), "WideWindow"],
		breakUltraWide: [parseInt(Sr.BreakUltraWide), "UltraWideWindow"],
		breakShort: [parseInt(Sr.BreakShort), "ShortWindow"],
		breakTall: [parseInt(Sr.BreakTall), "TallWindow"],
		strMedium: "MediumWindow",
	};
	const [a] = VI("library_low_perf_mode");
	const s = a ? "LowPerfMode" : "HighPerfMode";
	return d.createElement(
		Va.b,
		{
			...n,
			className: A_1(r, s),
			...i,
		},
		t,
	);
}
function Es(e) {
	const { visible: t, children: r } = e;
	const i = t
		? {}
		: {
				display: "none",
			};
	const a = hf();
	const s = !!W5({
		path: n.BV.Library.Root(),
		exact: false,
	});
	return d.createElement(
		Is,
		{
			style: i,
			className: A_1(gs.LocalContentContainer, s && gs.Library),
		},
		a &&
			d.createElement("div", {
				className: gs.URLBarReplacement,
			}),
		r,
	);
}
const Ms = false;
const Ts = () => {
	const e = R7();
	const t = d.useCallback((e) => {
		if (e.button == 4) {
			s.n6.NavigateForward();
			e.preventDefault();
		}
	}, []);
	const r = d.useCallback((e) => {
		if (e.data == "go_forward") {
			s.n6.NavigateForward();
		}
	}, []);
	d.useEffect(() => {
		const n = e?.ownerWindow;
		if (n) {
			n.addEventListener("mouseup", t);
			n.addEventListener("message", r);
		}
		return () => {
			n.removeEventListener("mouseup", t);
			n.removeEventListener("message", r);
		};
	}, [e?.ownerWindow, t, r]);
	return null;
};
export function Ay(e) {
	const t = gK();
	const r = hf();
	const n = $2();
	const a = W6();
	const [s, o] = d.useState(false);
	const l = r;
	const m = de.TS.IN_STEAMUI_SHARED_CONTEXT && n.IsMainDesktopWindow();
	const u = br_1();
	const A = d.useCallback(
		(e, t, r) => {
			const n = parseInt(t);
			u.AppProperties(n, r);
		},
		[u],
	);
	d.useEffect(() => {
		(async () => {
			console.time("SteamApp Init");
			await qw().WaitForServicesInitialized();
			console.timeEnd("SteamApp Init");
			o(true);
		})();
	}, []);
	d.useEffect(() => {
		const e = SteamClient.Messaging.RegisterForMessages("AppProperties", A);
		return () => {
			e.unregister();
		};
	}, [A]);
	d.useEffect(() => n.InitDesktopHistory(a), [n, a]);
	if (t) {
		return d.createElement(
			Gs,
			{
				cm: e.cm,
				bSmallMode: e.bSmallMode,
				onContextMenu: (e) => {
					if (e.altKey) {
						aE(e);
					} else if (!e.shiftKey) {
						e.preventDefault();
						e.stopPropagation();
					}
				},
			},
			!e.bSmallMode && d.createElement(Ts, null),
			d.createElement(Oe.tH, null, d.createElement(_r.j, null)),
			d.createElement(
				Oe.tH,
				null,
				m && l && !Ms && d.createElement(Ja.k, null),
			),
			d.createElement(
				Ds,
				null,
				d.createElement(sl, null),
				s &&
					d.createElement(ws, {
						cm: e.cm,
						bSmallMode: e.bSmallMode,
					}),
				!s && d.createElement(Ns, null),
				false,
			),
		);
	} else {
		return null;
	}
}
export function sl(e) {
	const { focused: t } = c_1();
	return d.createElement("div", {
		className: A_1(gs.FocusBar, t && gs.Focused),
	});
}
function Ds(e) {
	const { children: t } = e;
	const { maximized: r } = c_1();
	const n = w_2();
	const i = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const a = QS((e) => {
		const t = e?.ownerDocument.defaultView;
		if (t) {
			t.addEventListener("drop", i);
		}
		return () => {
			if (t) {
				t.removeEventListener("drop", i);
			}
		};
	}, []);
	const s = !n;
	return d.createElement(
		"div",
		{
			className: A_1(
				gs.Wrapper,
				r && "Maximized",
				s && gs.ForceOpaqueBackground,
			),
			ref: a,
		},
		t,
	);
}
function Ns(e) {
	return d.createElement(
		"div",
		{
			className: gs.InitContainer,
		},
		d.createElement(a.j, {
			background: "transparent",
		}),
	);
}
function Fs(e) {
	const [t] = VI("show_steam_deck_info");
	return d.createElement(
		us.nH.Provider,
		{
			value: {
				bShowCompatInfo: t,
			},
		},
		e.children,
	);
}
function Gs(e) {
	const t = $2();
	return d.createElement(
		es.b5,
		{
			ownerWindow: t.BrowserWindow,
		},
		d.createElement(
			"div",
			{
				className: gs.FocusNavigationRoot,
				onContextMenu: e.onContextMenu,
			},
			d.createElement(
				ns.EO,
				{
					bCenterPopupsOnWindow: true,
					bOnlyPopups: e.bSmallMode,
				},
				d.createElement(
					st,
					null,
					d.createElement(ms.w, null, d.createElement(Fs, null, e.children)),
				),
			),
		),
	);
}
