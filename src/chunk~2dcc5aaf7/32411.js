var n = require("./18057.js");
var i = require("./18869.js");
var a = require("./81994.js");
var s = require("./61175.js");
var o = require("./60021.js");
var l = require("./34792.js");
var c = require("./89748.js");
var m = require("./46422.js");
var u = require("./87935.js");
var d = require(/*webcrack:missing*/ "./63696.js");
var A = require(/*webcrack:missing*/ "./90095.js");
var p = require(/*webcrack:missing*/ "./90765.js");
var g = require("./97893.js");
var h = require("./48130.js");
var C = require(/*webcrack:missing*/ "./50376.js");
var _ = require(/*webcrack:missing*/ "./31084.js");
var f = require(/*webcrack:missing*/ "./88750.js");
import {
	Localize,
	LocalizeInlineReactWithFallback,
	LocalizePlural,
	LocalizeReact,
	LocalizationManager,
	LocalizeDateHumanReadable,
	LocalizeCalendarTime,
} from "../../actual_src/utils/localization.js";
var y = require("./5640.js");
var S = require("./19696.js");
var w = require(/*webcrack:missing*/ "./11131.js");
var B = require(/*webcrack:missing*/ "./88607.js");
var v = require("./50341.js");
var I = require("./89411.js");
var E = require("./63367.js");
var M = require(/*webcrack:missing*/ "./88696.js");
import { LocalizeTimeRemaining } from "../../actual_src/utils/localization/datetime.js";
var R = require("./34428.js");
var k = require(/*webcrack:missing*/ "./52451.js");
var D = require("./52698.js");
var N = require(/*webcrack:missing*/ "./39941.js");
var F = require(/*webcrack:missing*/ "./8573.js");
var G = require("./69740.js");
var O = require("./39437.js");
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
		const i = (0, I.wN)();
		const a = t.GetProgressPercent() ?? 0;
		const s = (0, R.dm)(t.GetCurrentBytes(), {
			nDigitsAfterDecimal: 1,
		});
		const o = (0, R.dm)(
			parseInt(t.m_updateState?.progress?.stage_size_bytes) ?? 0,
			{
				nDigitsAfterDecimal: 1,
			},
		);
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
		(0, k.eV)(() => r && t(), 10000, [r]);
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
const z = function () {
	const [e, t] = (0, d.useState)(0);
	(0, d.useEffect)(
		() =>
			E.Dt.RegisterForRunSteamURL(7, "checkforupdates", () => t((e) => e + 1))
				.unregister,
		[],
	);
	const [r, n] = (function () {
		const [e, t] = (0, d.useState)(false);
		(0, d.useEffect)(() => {
			const e = new M.A();
			e.GetString(J)
				.then((e) => {
					if (e === "1") {
						t(true);
					}
				})
				.finally(() => e.RemoveObject(J));
		}, []);
		return [e, (0, d.useCallback)(() => t(false), [])];
	})();
	(0, d.useEffect)(() => {
		if (r) {
			t((e) => e + 1);
		}
	}, [r]);
	const [i, a] = (function () {
		const [e, t] = (0, d.useState)(false);
		const r = (0, A.q3)(() => l.rV.settings.bIsInDesktopUIBeta);
		(0, d.useEffect)(() => {
			if (r) {
				const e = new D.g();
				e.GetString(re).then((r) => {
					if (r !== "1" && r !== "2") {
						e.StoreString(re, "1").then(() => t(true));
					}
				});
			}
		}, [r]);
		return [e, (0, d.useCallback)(() => t(false), [])];
	})();
	const [s, o] = (function () {
		const [e, t] = (0, d.useState)(false);
		const r = (0, v.cM)();
		const n = (0, A.q3)(() => l.rV.settings.bIsInDesktopUIBeta);
		(0, d.useEffect)(() => {
			if (!r && !n) {
				const e = new D.g();
				e.GetString(re).then((r) => {
					if (r === "1") {
						e.StoreString(re, "2").then(() => t(true));
					}
				});
			}
		}, [n, r]);
		return [e, (0, d.useCallback)(() => t(false), [])];
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
	const i = (0, I.Tt)();
	const [a, s] = (0, d.useState)();
	(0, d.useEffect)(() => {
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
	const c = (function (e, t) {
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
	const i = (0, v.cM)();
	const a = i ? undefined : G.DU;
	const s = i ? G.Ro : undefined;
	const o = s ? F.b.InitFromClanID(s) : undefined;
	const [c, m] = (0, l.VI)("small_mode");
	const u = d.useCallback(() => {
		m(false);
		if (t) {
			t();
		}
	}, [t, m]);
	const A = (0, n.tf)(n.BV.Library.Home(), a, undefined, o, {
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
	const [r] = (0, l.VI)("small_mode");
	return d.createElement(
		"div",
		{
			className: (0, p.A)(O.Alert, t === "error" && O.Error, r && O.SmallMode),
		},
		e.children,
	);
}
function Q(e) {
	const { children: t, disabled: r, onClick: n } = e;
	return d.createElement(
		"div",
		{
			className: (0, p.A)(O.AlertButton, r && O.Disabled),
			onClick: r ? undefined : n,
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
	const n = (0, d.useRef)(undefined);
	const [i, a] = (0, d.useState)(0);
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
	const i = (0, n.bG)("SteamClientBetaBugReports");
	const a = (0, n.bG)("SteamClientBetaPatchNotes");
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
	const i = (0, n.bG)("HelpFAQ", "276C-85A0-C531-AFA3");
	const a = (0, n.bG)("SteamClientPatchNotes");
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
var se = require("./96593.js");
var oe = require("./91486.js");
var le = require("./83184.js");
var ce = require("./60988.js");
var me = ce;
var ue = require(/*webcrack:missing*/ "./46382.js");
var de = require(/*webcrack:missing*/ "./72476.js");
var Ae = require("./28934.js");
var pe = require(/*webcrack:missing*/ "./98995.js");
const ge = (e) => {
	const { showUnlockDialog: t } = e;
	const r = (0, w.R7)();
	const i = (0, n.Qt)("steam://open/addnonsteamgame");
	const a = d.useCallback(() => {
		(0, le.U)(r.ownerWindow);
	}, [r]);
	const s = (0, n.Qt)();
	const o = d.useCallback(() => s(u.B7.ResolveURL("StoreFrontPage")), [s]);
	const l = (0, y.l9)(1);
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
				className: (0, p.A)(c && me.ContextMenuItemDisabled),
				onSelected: c ? () => t(l, 1, o) : o,
			},
			Localize("#BottomBar_BrowseStore"),
		),
	);
};
const he = () => {
	const e = (0, Ae.wT)();
	if ((0, de.Y2)()) {
		return null;
	} else {
		return d.createElement(
			"div",
			{
				className: me.AddGameButton,
				onClick: (t) => {
					(0, _.lX)(
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
	const e = (0, y.l9)(4);
	const t = e != 0;
	const r = (0, Ae.wT)();
	const i = (0, n.Qt)("steam://open/friends");
	return d.createElement(
		"div",
		{
			className: (0, p.A)(me.FriendsButton, t && me.Disabled),
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
	const e = (0, g.zM)();
	const t = (0, ue.zv)();
	const r = (0, A.q3)(() => (0, c.qw)().BIsOfflineMode());
	const a = (0, A.q3)(() => t?.BIsConnected());
	const s = (0, i.tn)(n.BV.Downloads());
	const o = e.update_appid != 0;
	const l = e.paused;
	const m = (0, A.q3)(() => g.hj.QueuedTransfers);
	const u = (0, A.q3)(() => g.hj.CompletedTransfers);
	const p = m.length;
	const h = u.length;
	const _ = p + h;
	const f = (0, g.MD)(e);
	const y = (0, se.Co)(e.update_appid);
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
	const [i] = (0, l.VI)("library_low_perf_mode");
	const a = (0, g.B7)();
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
						className: (0, p.A)(me.Status, me.Percentage),
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
	const t = (0, w.R7)();
	if (e.bSmallMode) {
		return d.createElement(
			"div",
			{
				className: me.BottomBarContainer,
			},
			(0, I.Yk)() && d.createElement(z, null),
		);
	} else {
		return d.createElement(
			"div",
			{
				className: me.BottomBarContainer,
			},
			(0, I.Yk)() && d.createElement(z, null),
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
var ye = require("./3475.js");
var Se = require("./68292.js");
var we = require(/*webcrack:missing*/ "./37905.js");
var Be = require("./38542.js");
var ve = require("./48289.js");
var Ie = require("./33512.js");
var Ee = require("./13661.js");
var Me = require("./75001.js");
var Te = require("./63259.js");
var Re = require(/*webcrack:missing*/ "./89193.js");
var ke = require("./45967.js");
var De = require("./35488.js");
var Ne = require("./21459.js");
var Fe = Ne;
var Ge = require("./10294.js");
var Oe = require(/*webcrack:missing*/ "./42318.js");
var Pe = require("./4069.js");
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
	const r = (0, A.q3)(() => (0, c.qw)().BIsOfflineMode());
	const n = (0, A.q3)(() => Ie.b.secureComputer);
	const i = (0, we.r)();
	const a = (0, Ge.fK)();
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
				(0, Te.ht)(e);
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
	const r = (0, ke.gb)();
	const n = (0, ke.FJ)();
	const i = (0, Be.Ux)();
	const a = (0, Be.ey)();
	const [s] = (0, l.VI)("small_mode");
	let o = (0, de.Y2)();
	let c = "#Menu_Screenshots_New";
	let m = true;
	if (!!o || !(0, Pe.BGameRecordingFeatureEnabled)()) {
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
	const t = (0, ve.Bh)("m_ePersonaState") == e.personaState;
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
	const e = (0, Me.bI)();
	const [t, r] = d.useState(0);
	(0, d.useEffect)(() => {
		if (e) {
			return (0, Re.fm)(() => {
				if ((0, c.qw)().GetServicesInitialized()) {
					r((0, Se.bg)().GetOnlineFriendCount());
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
				(0, le.U)(e);
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
	if ((0, de.Y2)()) {
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
	let n = (0, de.Y2)();
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
			visible: (0, Ee.Pb)(),
		},
		{
			name: "#Menu_SystemInfo",
			dialog: "SystemInfo",
		},
		{
			name: "#Menu_SRSI_Diagnostics",
			dialog: "RuntimeInfo",
			visible: (0, de.CI)(),
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
const Xe = d.memo(function (e) {
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
			className: (0, p.A)(Fe.RootMenuBar, t),
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
var Je = require(/*webcrack:missing*/ "./49519.js");
var $e = require("./81220.js");
var et = $e;
var tt = require("./93966.js");
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
		(0, Je.W5)({
			path: a,
		}),
	);
	const m = (0, i.tn)(a);
	return d.createElement(
		Me.W1,
		{
			title: t,
			className: (0, p.A)(et.SuperNavMenu, c && et.Selected),
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
	const { activeTab: s, activateTab: l } = (0, o.no)();
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
	let e = (0, de.Y2)();
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
const at = (0, d.createContext)({
	location: undefined,
	bActive: true,
});
function st(e) {
	const { children: t } = e;
	const r = (0, d.useRef)(undefined);
	const i = (0, Je.zy)();
	const a = (0, Je.W5)([n.BV.Library.Root(), n.BV.Downloads()]);
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
	const e = (0, d.useContext)(at);
	const t = (0, de.hf)();
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
	const a = (0, i.tn)(r, {
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
	(0, de.Y2)()
		? null
		: d.createElement(nt, {
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
	const r = (0, ve.L4)();
	let n = (0, de.Y2)();
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
	const t = (0, m.Sn)();
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
	const e = (0, n.jB)();
	const t = (0, tt.yq)();
	const r = (0, Je.zy)();
	const i = e.entries[Math.max(e.index - 1, 0)];
	const a = (0, y.yp)(i.pathname, i) || r.key === e.entries[0].key;
	return d.createElement(gt, {
		direction: "left",
		onClick: t,
		disabled: a,
	});
}
function pt() {
	const e = (0, n.jB)();
	const t = (0, tt.kV)();
	const r = (0, Je.zy)();
	const i = e.entries[Math.min(e.index + 1, e.length - 1)];
	const a =
		(0, y.yp)(i.pathname, i) || r.key === e.entries[e.entries.length - 1].key;
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
			onClick: r ? undefined : n,
			viewBox: "0 0 16 16",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				transform: i,
			},
			className: (0, p.A)(et.Arrow, r ? et.Disabled : et.Enabled),
		},
		d.createElement("path", {
			fill: "currentColor",
			opacity: "1",
			d: "M9.75467 6.5L5.56047 2.43952C5.56047 2.43952 5.68487 1.26955 6.27511 0.70555C6.86535 0.141549 8 -3.49691e-07 8 -3.49691e-07C8 -3.49691e-07 16.0009 7.08692 16 8C15.9991 8.91308 8 16 8 16C8 16 6.87982 15.8258 6.27511 15.2535C5.6704 14.6812 5.56047 13.5605 5.56047 13.5605L9.75462 9.5L0.677395 9.5C0.677395 9.5 3.49692e-07 9 3.49691e-07 8C3.4969e-07 7 0.677395 6.5 0.677395 6.5L9.75467 6.5Z",
		}),
	);
}
var ht = require(/*webcrack:missing*/ "./41230.js");
var Ct = require("./15521.js");
var _t = require("./88724.js");
var ft = require("./17231.js");
var bt = require("./54946.js");
var yt = require(/*webcrack:missing*/ "./3715.js");
var St = require(/*webcrack:missing*/ "./61416.js");
var wt = require(/*webcrack:missing*/ "./26667.js");
var Bt = require(/*webcrack:missing*/ "./12176.js");
var vt = require(/*webcrack:missing*/ "./44846.js");
const It = "SteamAnnouncements";
function Et() {
	const e = (0, yt.jE)();
	const t = (0, ue.zv)();
	const [r, n] = d.useState(false);
	const i = (0, St.I)({
		queryKey: [It],
		queryFn: async () => {
			const e = Bt.w.Init(bt.gz);
			e.Body().set_language((0, vt.sf)(de.TS.LANGUAGE));
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
	const t = (function () {
		const e = (0, yt.jE)();
		const t = (0, ue.KV)();
		const r = Et();
		return (0, wt.n)({
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
var Tt = require("./51517.js");
var Rt = require("./29629.js");
var kt = Rt;
function Dt() {
	return (0, Tt.M)({
		className: kt.ParentalLock,
		onOK: () => {
			SteamClient.Parental.LockParentalLock();
		},
		strTitle: Localize("#FamilyView_Dialog_Title"),
		strDescription: Localize("#FamilyView_LockDialog_Description"),
	});
}
function Nt() {
	return (0, Tt.M)({
		className: kt.ParentalLock,
		onOK: () => {
			Ge.Ih.KioskModeLock();
		},
		strTitle: Localize("#KioskMode_Dialog_Title"),
		strDescription: Localize("#KioskMode_LockDialog_Description"),
	});
}
var Ft = require("./60917.js");
var Gt = require("./11521.js");
var Ot = require("./11374.js");
var Pt = require("./23953.js");
var Lt = Pt;
var zt = require("./23783.js");
var xt = require("./91745.js");
var Ut = require("./655.js");
var Wt = require(/*webcrack:missing*/ "./47742.js");
var Vt = require("./99235.js");
var Ht = require("./13869.js");
var jt = require("./10606.js");
var qt = require("./91325.js");
function Qt(e) {
	const [t] = (0, A.q3)(() => [(0, c.qw)().GetCurrentUser().strAccountName]);
	const r = (0, A.q3)(() => Ie.b.secureComputer);
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
const Zt = (0, ht.PA)((e) => {
	const { bShowEmptyBalance: t } = e;
	const r = (0, c.qw)().GetCurrentUser().strAccountBalance;
	const n = (0, c.qw)().GetCurrentUser().strAccountBalancePending;
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
const Yt = (0, ht.PA)(function () {
	const e = (0, ve.wI)();
	const t = (0, ve.L4)();
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
				popupClass: (0, p.A)(Lt.AccountMenuPopup, (0, _t.rO)(e)),
				onShow: () => n(true),
				onHide: () => n(false),
			},
			d.createElement(
				"div",
				{
					className: (0, p.A)(Lt.AccountMenu, (0, _t.rO)(e)),
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
	const [t, r] = (0, Wt.l)();
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
	const [t, r] = (0, Wt.l)();
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
	let t = (0, w.R7)().ownerWindow;
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
	(0, k.l6)(t, "focus", o);
	return r === true;
}
function $t(e) {
	let [t, r] = Mt();
	const i = (0, n.Qt)("steam://url/SteamAnnouncements");
	const a = Jt(60);
	if ((0, de.Y2)()) {
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
				className: (0, p.A)(
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
				className: (0, p.A)(Lt.Icon, a && Lt.FirstFocus),
			}),
			d.createElement(Xt, null),
		),
	);
}
function er(e) {
	const t = new F.b(ve.O$.currentUserSteamID);
	const r = (0, n.bG)("AllNotifications", t.ConvertTo64BitString());
	return d.createElement(
		"div",
		{
			className: (0, p.A)(Lt.NotificationHeader),
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
	const n = (0, Ft.ZT)();
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
	const c = (0, Ut.V8)();
	let m = n.map((e) => {
		if (e.notifications[0].eSource == Ft.a9.k_Client) {
			return null;
		}
		const t = e.notifications[0].data;
		(0, Ut.kE)(c, t.type, t.rgunread?.length);
		return d.createElement(tr, {
			key: e.notifications[0].notificationID,
			location: 3,
			group: e,
			onDismiss: undefined,
		});
	});
	const u = o ? undefined : Lt.MenuScrollbarHidden;
	return d.createElement(
		"div",
		{
			onClick: () => t?.current?.Hide(),
		},
		d.createElement(er, null),
		d.createElement(
			"div",
			{
				className: (0, p.A)(Lt.NotificationsMenuScrollable, u),
				ref: s,
			},
			d.createElement(Gt.r, {
				displayedCounts: o ? undefined : c,
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
	const l = (0, Ft.Xm)();
	const c = (0, Ft.zF)();
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
				popupClass: (0, p.A)(Lt.dialog, Lt.NotificationsMenu),
				className: (0, p.A)(Lt.NotificationButtonContainer),
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
					className: (0, p.A)(
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
	const t = (0, ke.gb)();
	const r = (0, ke.FJ)();
	const n = (0, Be.Ux)();
	const i = (0, Be.ey)();
	const a = (0, A.q3)(() => l.rV.settings?.bIsValveEmail);
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
				(0, _.lX)(
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
	if ((0, de.Y2)()) {
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
					className: (0, p.A)(Lt.Button, Lt.VRToggle, r && Lt.Running),
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
	if ((0, de.Y2)()) {
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
					className: (0, p.A)(Lt.Button, Lt.GamepadUIToggle),
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
	const {
		bShouldShowIcon: t,
		onShowControls: r,
		playbackState: n,
	} = (0, zt.tx)();
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
					className: (0, p.A)(
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
	const { fnRestartTimer: r } = (0, k.L$)(1000, () => r());
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
	const t = (0, y.Wp)();
	const r = (0, y.dF)();
	const n = (0, y.oA)();
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
	const t = (0, y.Wf)();
	const r = (0, y.oA)();
	const i = (0, y.Wp)();
	const a = (0, Ae.wT)();
	const [s, o] = Dt();
	const l = (0, n.bG)("FamilyManagement");
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
				className: (0, p.A)(Lt.Button, Lt.ParentalToggleButton, r && Lt.Locked),
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
	const [e, t, r] = (0, qt.I)();
	if (e) {
		return d.createElement(
			"div",
			{
				className: (0, p.A)(Lt.Button, Lt.LowDiskWarning),
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
	const t = (0, Ge.VA)();
	const r = (0, Ge.fK)();
	const n = (0, Ae.wT)();
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
				className: (0, p.A)(
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
		case 2:
			t = "Beta";
			break;
		case 3:
			t = "Internal";
			break;
		case 4:
			t = "Dev";
	}
	let r = "RELEASE build";
	if ((0, de.Y2)()) {
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
	const t = (0, A.q3)(() => (0, c.qw)().BHasActiveSupportAlerts());
	const r = (0, A.q3)(() => (0, c.qw)().BHasAckOnlyActiveSupportAlerts());
	const n = d.useCallback(() => (0, c.qw)().ShowSupportAlertsModal(), []);
	if (t) {
		return d.createElement(
			"div",
			{
				className: (0, p.A)(
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
	const t = (function () {
		const [e, t] = d.useState();
		d.useEffect(() => {
			SteamClient.UI.GetOSEndOfLifeInfo().then((e) => t(e));
		}, []);
		return e;
	})();
	const r = (0, n.jb)(t?.strFAQLink);
	const i = (0, A.q3)(() => (0, c.qw)().BHasActiveSupportAlerts());
	const [a] = (0, l.VI)("os_version_unsupported");
	if (i || !t || !t.bOSWillBeUnsupported) {
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
			className: (0, p.A)(Lt.Button, Lt.OSEndOfLifeAlertsButton),
			onClick: r,
		},
		s,
	);
}
function hr(e) {
	const t = (0, w.R7)();
	(0, Vt.q)();
	Jt(60);
	d.useCallback(() => {
		const e = Localize("#WebUITransport_ErrorButton_ModalMessage_Public");
		(0, Ht.pg)(
			d.createElement(jt.Ee, {
				strTitle: Localize("#WebUITransport_ErrorButton_ModalTitle"),
				strDescription: e,
			}),
			t.ownerWindow ?? window,
		);
	}, [t.ownerWindow]);
	return null;
}
const Cr = d.memo(function (e) {
	const { className: t, ...r } = e;
	return d.createElement(
		"div",
		{
			className: (0, p.A)(Lt.TitleBarControls, t),
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
var _r = require("./32661.js");
var fr = require("./47060.js");
var br = require(/*webcrack:missing*/ "./34629.js");
var yr = require("./60712.js");
var Sr = yr;
var wr = require("./36141.js");
var Br = require("./74491.js");
var vr = require("./96000.js");
var Ir = require("./52958.js");
var Er = require("./49171.js");
var Mr = require("./88244.js");
var Tr = require("./30496.js");
var Rr = require(/*webcrack:missing*/ "./23038.js");
var kr = require(/*webcrack:missing*/ "./58254.js");
var Dr = require(/*webcrack:missing*/ "./31958.js");
var Nr = require("./14663.js");
var Fr = require("./10709.js");
var Gr = require("./40478.js");
var Or = require("./14629.js");
var Pr = require("./48866.js");
var Lr = require("./33000.js");
var zr = require("./31706.js");
var xr = require("./42805.js");
var Ur = require("./79421.js");
var Wr = require("./64608.js");
var Vr = require(/*webcrack:missing*/ "./90242.js");
import {
	GetOwningWindowForEvent,
	GetOwningWindowForElement,
} from "../../actual_src/utils/domutils.js";
var jr = require("./32598.js");
var qr = require("./6356.js");
var Qr = require("./15983.js");
var Zr = Qr;
let Yr = class extends d.Component {
	static GetClassnameForParent() {
		return Zr.CollapseIconParent;
	}
	render() {
		return d.createElement(
			"div",
			{
				className: (0, p.A)(
					Zr.Container,
					this.props.isCollapsed && Zr.Collapsed,
				),
				onClick: this.props.onClick,
			},
			d.createElement(C.f5w, null),
		);
	}
};
Yr = (0, br.Cg)([ht.PA], Yr);
const Kr = Yr;
var Xr = require("./47979.js");
var Jr = require("./97211.js");
var $r = Jr;
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
const tn = (0, ht.PA)(function (e) {
	const {
		strId: t,
		strName: r,
		nTotalCount: n,
		nFilteredCount: a,
		isSelected: o,
		bInHover: l,
	} = e;
	const [c, m] = (0, d.useState)(false);
	const u = (0, i.br)();
	const A = () => s.n6.toggleCollapsed(t);
	const g = s.n6.IsCollapsed(t);
	const h = (0, p.A)(
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
		f = " (" + n + ")";
	} else if (a != 0) {
		f = " (" + a + "/" + n + ")";
		y = d.createElement(en, {
			nTotalCount: n,
			nFilteredCount: a,
			filter: s.n6.currentAppFilter,
		});
	} else {
		f = " (" + a + "/" + n + ")";
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
				const n = (0, _.lX)(
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
var rn = require("./98748.js");
var nn = rn;
var an = require("./34348.js");
var sn = an;
var on = require("./46217.js");
var ln = require(/*webcrack:missing*/ "./69164.js");
var cn = require("./45426.js");
var mn = require("./36934.js");
function un() {
	const { collectionid: e } = (0, Je.g)();
	const t = decodeURIComponent(e);
	(0, d.useEffect)(() => {
		s.n6.SetGameListSelection(t, null);
		(function (e) {
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
	const o = (0, se.Co)(n);
	const l = (0, mn.Xe)(n);
	let c =
		o?.display_name ||
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
			className: (0, p.A)(sn.FilterTag, t),
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
		return (0, jr.wf)(
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
							className: (0, p.A)(sn.FilterTag, sn.RemovedAppTag),
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
		(0, Ht.pg)(
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
			a = " (" + l.length + ")";
		} else {
			a = " (" + l.length + "/" + i + ")";
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
				strRememberScrollKey: "collection-" + t.id,
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
												className: (0, p.A)(nn.EditButton, nn.Pencil),
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
									className: (0, p.A)(
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
(0, br.Cg)([k.oI], An.prototype, "BindContainerRef", null);
(0, br.Cg)([k.oI], An.prototype, "GetCollectionFilterTags", null);
(0, br.Cg)([k.oI], An.prototype, "GetManualChangeTags", null);
(0, br.Cg)([k.oI], An.prototype, "FreezeCollection", null);
An = (0, br.Cg)([ht.PA], An);
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
(0, br.Cg)([k.oI], pn.prototype, "FreezeCollection", null);
const gn = (0, ht.PA)((e) => {
	const { collection: t } = e;
	const r = (0, de.Qn)();
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
		(0, Re.Gn)(this);
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
			(0, zr.sp)(e, t, false, this.props.fnClose, () => this.ResetName(r));
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
					className: (0, p.A)(nn.EditButton, nn.Close),
					onMouseDown: () => this.ResetName(this.props.collection.displayName),
				},
				d.createElement(on.bm, null),
			),
		);
	}
};
(0, br.Cg)([Re.sH], hn.prototype, "m_strCollectionName", undefined);
(0, br.Cg)([k.oI], hn.prototype, "SaveRenamedCollection", null);
(0, br.Cg)([k.oI], hn.prototype, "OnTextChanged", null);
(0, br.Cg)([k.oI], hn.prototype, "OnBlur", null);
(0, br.Cg)([k.oI], hn.prototype, "ResetName", null);
(0, br.Cg)([k.oI], hn.prototype, "OnKeyPressed", null);
hn = (0, br.Cg)([ht.PA], hn);
var Cn = require("./4405.js");
var _n = Cn;
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
var wn = require(/*webcrack:missing*/ "./59351.js");
var Bn = require("./66127.js");
var vn = require("./50797.js");
const In = (0, ht.PA)(() => {
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
		return e.toFixed(0) + "ms";
	}
}
function Tn(e) {
	if (e) {
		return "[" + e + "]";
	} else {
		return "[???]";
	}
}
function Rn(e) {
	if (e == null) {
		return "";
	} else {
		return En(e, 0) + " KB/s";
	}
}
function kn(e) {
	if (e == null) {
		return "";
	} else {
		return En(e, 1) + " pkts/s";
	}
}
function Dn(e) {
	if (e == null) {
		return "";
	} else {
		return En(e, 0) + "KB";
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
		return "0" + e;
	} else {
		return "" + e;
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
const Pn = (0, ht.PA)((e) => {
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
								: "NAT traversal failed.  (" + t + ")";
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
		case Bn.WD.k_ESteamNetTransport_SDRP2P:
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
		case Bn.WD.k_ESteamNetTransport_SDRHostedServer:
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
	let _ = [];
	const f = function (e) {
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
	const i = (n * 100).toFixed(1) + "%";
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
					width: n * 90 + 1 + "px",
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
					? Mn(o) + "+"
					: o + "-" + Mn(n[t + 1][0]);
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
	const o = (e) => (e == null ? undefined : Mn(e));
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
	const A = En(a) + " samples";
	const p = En(m) + " samples";
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
const Hn = (0, ht.PA)((e) => {
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
	const l = (e) => "(" + ((e * 100) / (n + i)).toFixed(2) + "%)";
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
	const g = (e) => (e == null ? undefined : e + "%");
	const h = Un([
		[50, g(t.quality_ntile_50th())],
		[25, g(t.quality_ntile_25th())],
		[5, g(t.quality_ntile_5th())],
		[2, g(t.quality_ntile_2nd())],
	]);
	const C = En(A) + " measurement intervals";
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
const qn = (0, ht.PA)((e) => {
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
const Qn = (0, ht.PA)((e) => {
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
const Zn = (0, ht.PA)((e) => {
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
		m = c.toFixed(r ? 0 : 1) + "%";
	}
	return d.createElement(
		d.Fragment,
		null,
		d.createElement(
			"tr",
			{
				key: n + ".1",
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
				(function (e) {
					const t = e.remote_steamid;
					if (e.is_gameserver);
					else if (t) {
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
				(function (e) {
					const t = e.remote_steamid;
					if (e.is_gameserver) {
						if (e.sdrpopid_remote) {
							return "Gameserver in " + Tn(e.sdrpopid_remote);
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
				key: n + ".2",
			},
			d.createElement(
				"td",
				null,
				(function (e) {
					let t = "";
					switch (e.transport) {
						case Bn.WD.k_ESteamNetTransport_LoopbackBuffers:
						case Bn.WD.k_ESteamNetTransport_LocalHost:
							t = "Local host";
							break;
						case Bn.WD.k_ESteamNetTransport_UDP:
							t = e.address ? "UDP: " + e.address : "UDP";
							break;
						case Bn.WD.k_ESteamNetTransport_UDPProbablyLocal:
							t = e.address ? "LAN UDP: " + e.address : "LAN UDP";
							break;
						case Bn.WD.k_ESteamNetTransport_TURN:
							t = e.address ? "TURN Relay: " + e.address : "TURN Relay";
							break;
						case Bn.WD.k_ESteamNetTransport_SDRP2P:
							t = e.sdrpopid_local
								? e.sdrpopid_local != e.sdrpopid_remote && e.sdrpopid_remote
									? "SDR Relay via " +
										Tn(e.sdrpopid_local) +
										"-" +
										Tn(e.sdrpopid_remote)
									: "SDR Relay via " + Tn(e.sdrpopid_local)
								: "SDR Relay";
							break;
						case Bn.WD.k_ESteamNetTransport_SDRHostedServer:
							t =
								e.sdrpopid_local && e.sdrpopid_local != e.sdrpopid_remote
									? "SDR Relay via " + Tn(e.sdrpopid_local)
									: "SDR Relay";
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
				(function (e) {
					e = Math.floor(e);
					let t = Math.floor(e / 60);
					e -= t * 60;
					let r = Math.floor(t / 60);
					t -= r * 60;
					return r + ":" + Fn(t) + ":" + Fn(e);
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
var Yn = require(/*webcrack:missing*/ "./68120.js");
var Kn = require("./32998.js");
var Xn = require("./29547.js");
var Jn = require("./15489.js");
var $n = require("./19151.js");
var ei = $n;
let ti = class extends d.Component {
	constructor(e) {
		super(e);
		(0, Re.Gn)(this);
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
			(0, Re.mJ)(
				this.GetAllStateThatShouldTriggerGameListAutoScroll,
				(e) => {
					let t = -1;
					if (
						(0, Je.B6)(this.props.location.pathname, [
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
			(0, Re.fm)(() => {
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
			case 38:
				if (e.shiftKey) {
					this.MoveRangeSelectUpOneRow();
				} else {
					this.SelectPrevRow();
				}
				e.preventDefault();
				return;
			case 40:
				if (e.shiftKey) {
					this.MoveRangeSelectDownOneRow();
				} else {
					this.SelectNextRow();
				}
				e.preventDefault();
				return;
			case 37:
				this.SetRowIsCollapsed(true);
				e.preventDefault();
				return;
			case 39:
				this.SetRowIsCollapsed(false);
				e.preventDefault();
				return;
			case 36:
				this.SelectFirstRow();
				e.preventDefault();
				return;
			case 35:
				this.SelectLastRow();
				e.preventDefault();
				return;
			case 34:
				this.PageDown();
				e.preventDefault();
				return;
			case 33:
				this.PageUp();
				e.preventDefault();
				return;
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
				case 40:
					this.SelectIndex(this.m_nDelayedIndex);
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
					e =
						u.B7.ResolveURL("StoreGameSearchPage") +
						"?term=" +
						encodeURIComponent(s.n6.currentAppFilter.searchText);
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
									"steam://openurl/" + e),
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
(0, br.Cg)([Re.sH], ti.prototype, "m_nDelayedIndex", undefined);
(0, br.Cg)([k.oI], ti.prototype, "ScrollToTop", null);
(0, br.Cg)([k.oI], ti.prototype, "OnScroll", null);
(0, br.Cg)([k.oI], ti.prototype, "EnsureVisible", null);
(0, br.Cg)([k.oI], ti.prototype, "OnKeyDown", null);
(0, br.Cg)([k.oI], ti.prototype, "OnKeyUp", null);
(0, br.Cg)([k.oI], ti.prototype, "OnKeyUpDelayed", null);
(0, br.Cg)(
	[
		(0, Re.EW)({
			keepAlive: true,
		}),
	],
	ti.prototype,
	"visibleRows",
	null,
);
(0, br.Cg)([k.oI], ti.prototype, "GetAppsInBetween", null);
(0, br.Cg)([k.oI], ti.prototype, "EqualsCurrentCursor", null);
(0, br.Cg)([k.oI], ti.prototype, "RowRenderer", null);
(0, br.Cg)([k.oI], ti.prototype, "RowHeightMeasure", null);
ti = (0, br.Cg)([ht.PA], ti);
const ri = (0, d.forwardRef)(function (e, t) {
	const r = (0, Je.zy)();
	const n = (0, i.br)();
	return d.createElement(ti, {
		...e,
		location: r,
		ref: t,
		navigator: n,
	});
});
var ni = require(/*webcrack:missing*/ "./24892.js");
var ii = ni;
var ai = require("./92426.js");
var si = ai;
var oi = require("./12774.js");
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
	return "ToolsShown_" + (0, c.qw)().GetCurrentUser().strSteamID;
}
const ui = (0, ht.PA)(function (e) {
	const { gamelistref: t, bScrolledTop: r } = e;
	const n = d.useRef(undefined);
	const i = d.useRef(undefined);
	const a = d.useCallback(() => {
		if (s.n6.currentAppFilter.BIsSelected(0, 4)) {
			if (
				!(function () {
					const e = mi();
					return window.localStorage.getItem(e) == "true";
				})()
			) {
				(0, Ht.pg)(
					d.createElement(ci, null),
					GetOwningWindowForElement(n.current),
				);
				(function () {
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
			strClassName: (0, p.A)(ii.contextMenu, si.DropDown),
		};
		i.current = (0, _.lX)(
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
	const f = !(0, de.td)();
	const y = (0, de.CI)();
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
					(function () {
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
									`Automatically un-selecting '${vr.md.GetCollectionForAppType(r).displayName}' from game list.`,
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
					className: (0, p.A)(si.ScrollToTop, h && si.Visible),
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
					className: (0, p.A)(si.Filters, m && si.Disabled),
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
							className: (0, p.A)(
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
						className: (0, p.A)(
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
						className: (0, p.A)(
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
	const [t] = (0, l.VI)("ready_to_play_includes_streaming");
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
		"FilterOption_" + (0, Or.$P)(e, t),
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
		className: (0, p.A)(si.Row, si.Checkbox),
		label: a,
		checked: s.n6.currentAppFilter.BIsSelected(0, t),
		onChange: (e) => s.n6.SelectCollectionsAppFilterOption(0, t, e),
	});
}
let gi = class extends d.Component {
	render() {
		let e = false;
		switch (s.n6.selectedGameListView) {
			case 10:
				e = true;
			case 1:
				const t = s.n6.bIsGameListSortedByRecent || e;
				const r = se.tw.sharedLibraryAccountIds.length > 0;
				return d.createElement(
					d.Fragment,
					null,
					li.map((e) =>
						d.createElement(pi, {
							key: "checkbox-eAppType-" + e,
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
							className: (0, p.A)(si.Row, si.Checkbox, t && si.Disabled),
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
								className: (0, p.A)(si.Row, si.Checkbox, t && si.Disabled),
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
			case 11:
				return d.createElement(
					"div",
					{
						key: "view-collections",
						className: (0, p.A)(si.Row, si.ViewName),
						onClick: () => {
							s.n6.SelectGameListView(1);
							this.props.fnHide();
						},
					},
					Localize("#GameList_View_ExitSearch"),
				);
		}
	}
};
gi = (0, br.Cg)([ht.PA], gi);
var hi = require("./94884.js");
var Ci = hi;
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
				className: (0, p.A)(Ci.Bar, Ci.CollectionButton),
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
var bi = require("./31512.js");
var yi = bi;
const Si = (e) => {
	const t = (function () {
		const e = (0, Je.zy)();
		const t = (0, k.Sz)(e);
		const r = (0, d.useRef)(undefined);
		const n = e?.pathname;
		const i = t?.pathname;
		(0, d.useEffect)(() => {
			if (n && i && n !== i) {
				r.current?.focus();
			}
		}, [r, n, i]);
		return r;
	})();
	const r = (0, d.useRef)(undefined);
	const n = (0, d.useRef)(undefined);
	const [i, a] = (0, d.useState)(true);
	const o = (0, d.useCallback)(() => n.current?.FocusOnSearch(), [n]);
	const l = (0, d.useCallback)(() => n.current?.BIsFocused(), [n]);
	const c = (0, A.q3)(() => s.n6.selectedGameListView);
	const m = (0, de.Qn)();
	const u = (0, w.R7)();
	const p = (0, d.useCallback)(
		function (e) {
			if (e.keyCode == 70 && (e.ctrlKey || e.metaKey)) {
				o();
				e.preventDefault();
				return;
			}
		},
		[o],
	);
	const g = function (e) {
		const t = e.dataTransfer.types.indexOf("text/appids") >= 0;
		e.dataTransfer.dropEffect = t ? "move" : "none";
		e.preventDefault();
		e.stopPropagation();
	};
	const h = function (e) {
		const t = e.dataTransfer.types.indexOf("text/appids") >= 0;
		e.dataTransfer.dropEffect = t ? "move" : "none";
		e.preventDefault();
		e.stopPropagation();
	};
	(0, d.useEffect)(() => {
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
var wi = require("./80100.js");
var Bi = wi;
var vi = require("./81668.js");
var Ii = require("./26271.js");
var Ei = require("./57016.js");
var Mi = require("./88341.js");
var Ti = require("./12767.js");
var Ri = require(/*webcrack:missing*/ "./26853.js");
var ki = require("./98670.js");
var Di = require("./5808.js");
var Ni = require("./11123.js");
var Fi = Ni;
var Gi = require("./70334.js");
var Oi = Gi;
var Pi = require("./38837.js");
var Li = require("./6162.js");
var zi = Li;
function xi(e) {
	const {
		event: t,
		spotlightURLOverride: r,
		fnHandleOpenEvent: n,
		fnImageFailureCallback: i,
		fnFilterImageURLsForKnownFailures: a,
		langOverride: s,
	} = e;
	const o = (0, Pi.c)();
	const l = d.useCallback(
		(e) => {
			e.preventDefault();
			if (n) {
				n(t);
			}
		},
		[t, n],
	);
	const c = s || (0, vt.sf)(de.TS.LANGUAGE);
	const [m, u, g, h] = (0, A.q3)(() => [
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
					className: (0, p.A)(
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
const Ui = (0, ht.PA)(function (e) {
	const { majorUpdates: t } = e;
	const [r, n] = (0, d.useState)(0);
	const [a, s] = (0, d.useState)(false);
	const o = (0, i.br)();
	const l = () => Ei.dm.RemoveEvent(t[r].GID);
	const c = (e) => {
		(0, _.lX)(
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
			key: "eventTab" + t,
			className: (0, p.A)(Oi.TopBarTab, r == t ? Oi.Selected : ""),
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
						key: "majorUpdateTransition" + t[r].GID,
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
var Wi = require("./3639.js");
var Vi = Wi;
var Hi = require("./4584.js");
const ji = require(/*webcrack:missing*/ "./18339.js");
const qi = (0, ht.PA)(function (e) {
	const { event: t, bInGamepadUI: r } = e;
	const n = (0, se.Co)(t.appid);
	const a = (0, i.br)();
	const s = () => Ei.dm.RemoveEvent(t.GID);
	const o = () => Ei.dm.LowerAppPriorityForApp(t.appid);
	const l = () => Ei.dm.RaiseAppPriorityForApp(t.appid);
	const c = (e) => {
		let i = Ei.dm.GetUserAppPrioritySetting(t.appid);
		(0, _.lX)(
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
			(0, _.lX)(
				d.createElement(Di.uU, {
					overview: n,
					client: "mostavailable",
					launchSource: 103,
					bInGamepadUI: r,
					ownerWindow: GetOwningWindowForEvent(e),
				}),
				e,
				(0, Di.zq)(),
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
	let g = (0, vt.sf)(de.TS.LANGUAGE);
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
	let v = (0, ki.JS)(t.type);
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
				className: (0, p.A)(
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
								"data-tooltip-text": E.format("Z") + ", " + I,
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
							className: (0, p.A)(Vi.WhatsNewHeaderText, Vi.DialogLabelSoft),
						},
						Localize("#WhatsNewFeatureExplainer"),
					),
					d.createElement(
						Wr.JU,
						{
							className: (0, p.A)(Vi.WhatsNewHeaderText, Vi.DialogLabelSoft),
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
							className: (0, p.A)(
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
													className: (0, p.A)(
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
							className: (0, p.A)(
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
													className: (0, p.A)(
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
(0, br.Cg)([k.oI], Qi.prototype, "onContextMenu", null);
(0, br.Cg)([k.oI], Qi.prototype, "onSubmit", null);
(0, br.Cg)([k.oI], Qi.prototype, "OnShowOnlyProductUpdatesToggle", null);
Qi = (0, br.Cg)([ht.PA], Qi);
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
		(0, Ht.HT)(d.createElement(Qi, null), t, Localize("#WhatsNewSettings"), {
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
						key: "UpdatedPriority" + m + (u ? "lower" : "higher"),
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
				className: (0, p.A)(e, Fi.UpdatesContainer),
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
(0, br.Cg)([k.oI], Zi.prototype, "OnChildrenVisible", null);
(0, br.Cg)([k.oI], Zi.prototype, "RaiseAppPriorityForUndo", null);
(0, br.Cg)([k.oI], Zi.prototype, "LowerAppPriorityForUndo", null);
(0, br.Cg)([k.oI], Zi.prototype, "OpenWhatsNewSettings", null);
Zi = (0, br.Cg)([ht.PA], Zi);
var Yi = require("./56337.js");
var Ki = Yi;
const Xi = (0, ht.PA)(function () {
	const e = (0, n.bG)("StoreFrontPage");
	const t = (0, n.bG)("StoreFreeToPlay");
	const r = (0, n.bG)("StoreSpecials");
	const i = (0, n.bG)("StoreExploreNew");
	if (
		vr.md.GetCollection(vr.A8.Recent).visibleApps.length > 0 ||
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
	const s = (0, vt.ID)(de.TS.LAUNCHER_TYPE);
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
	const e = (0, n.bG)("RegisterKeyNoParams");
	const t = (0, n.bG)("RedeemWalletVoucher");
	return d.createElement(
		"div",
		{
			className: (0, p.A)(Ki.ButtonContainer, Ki.BottomSection),
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
var $i = require(/*webcrack:missing*/ "./10711.js");
var ea = require("./23393.js");
var ta = require("./39287.js");
var ra = ta;
var na = require("./70623.js");
var ia = na;
const aa = (e) => {
	const t = (0, c.QR)();
	if (e.strCollectionId != "partner-ea-access") {
		return null;
	}
	const r = d.createElement(oa, null);
	const n = Localize("#EAAccessCollection_LinkToLandingPage");
	const i =
		(!Ir._.GetDragData("apps") || !(Ir._.GetDragData("apps").length > 0)) && !t;
	const a = (0, p.A)(
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
	const [t] = (0, l.VI)("library_low_perf_mode");
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
				className: (0, p.A)(ra.LibraryItemBoxShine, ra.Landscape),
			}),
	);
};
var la = require("./59298.js");
var ca = require("./68483.js");
var ma = ca;
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
		const l = (0, p.A)(
			ma.RecentGameMediaContainer,
			t && ma.Featured,
			r && ma.Short,
		);
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
ua = (0, br.Cg)([ht.PA], ua);
const da = (0, ht.PA)(
	d.forwardRef(function (e, t) {
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
		const c = (function (e, t, r) {
			const [n] = l.rV.GetClientSetting("library_display_size");
			let i = e ? (0, Tr.YQ)(t, r) : Mr.o.GetComputedDisplaySize(n);
			let { childWidth: a, childHeight: s, bShort: o } = (0, Tr.aH)(i, e);
			if (a > 175) {
				a = 175;
				s = 262.5;
			}
			return {
				nItemWidth: a,
				nItemHeight: s,
				bShortLayout: o,
			};
		})((0, de.IW)(r), n?.libraryWidth, n?.libraryHeight);
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
							className: (0, p.A)(ma.RecentGames, A && ma.Short),
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
var Aa = require("./92749.js");
var pa = require("./7868.js");
var ga = pa;
const ha = (0, ht.PA)(function (e) {
	const {
		appid: t,
		bFeatured: r,
		bShortLayout: n,
		nWidth: i,
		nHeight: a,
		...s
	} = e;
	const o = (0, de.Qn)();
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
const Ca = (0, ht.PA)(
	d.forwardRef(function (e, t) {
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
		const o = (function (e, t, r) {
			const [n] = l.rV.GetClientSetting("library_display_size");
			let i = e ? (0, Tr.YQ)(t, r) : Mr.o.GetComputedDisplaySize(n);
			let { childWidth: a, childHeight: s, bShort: o } = (0, Tr.aH)(i, e);
			if (a > 175) {
				a = 175;
				s = 262.5;
			}
			return {
				nItemWidth: a,
				nItemHeight: s,
				bShortLayout: o,
			};
		})((0, de.IW)(r), n?.libraryWidth, n?.libraryHeight);
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
		const C = (0, de.IW)(r)
			? (460 / 215) * 1 * o.nItemWidth
			: o.nItemWidth * 2.108;
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
							className: (0, p.A)(ga.PlayNextSuggestions, c && ga.Short),
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
var _a = require("./16139.js");
var fa = require("./7558.js");
var ba = require("./88431.js");
var ya = ba;
const Sa = (0, ht.PA)(function (e) {
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
				className: (0, p.A)(!i && ya.Draggable, e),
				...n,
				onMouseDown: i ? undefined : this.OnMouseDown,
			},
			this.props.children,
		);
	}
}
(0, br.Cg)([k.oI], wa.prototype, "OnMouseDown", null);
(0, br.Cg)([k.oI], wa.prototype, "OnGlobalMouseMove", null);
(0, br.Cg)([k.oI], wa.prototype, "OnGlobalMouseUp", null);
const Ba = (0, ht.PA)(function (e) {
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
	const S = (0, d.useRef)(undefined);
	const w = (0, i.br)();
	const B = !t.strCollectionId;
	const v = y == null;
	let I;
	let E = r == a;
	let M = (!o || r < n) && !u;
	let T = !B && "(" + r + (E ? ")" : "/" + a + ")");
	let R = u;
	if (h) {
		E = true;
		M = false;
		R = false;
		T = !B && "(" + a + ")";
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
				className: (0, p.A)(
					ya.ShowcaseHeader,
					B && ya.EmptyShowcase,
					h && ya.Reordering,
				),
				onContextMenu:
					B || h
						? undefined
						: (e) => {
								if (t.strCollectionId == "all-collections") {
									(0, _.lX)(
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
									(0, _.lX)(
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
									(0, _.lX)(
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
							},
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
				onStartReordering: v || h ? undefined : y,
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
							className: (0, p.A)(ya.PageLeft, !A && ya.Disabled),
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
							className: (0, p.A)(ya.PageRight, !g && ya.Disabled),
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
						className: (0, p.A)(ya.Collapser, M && ya.Visible),
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
const va = d.forwardRef(function (e, t) {
	const r = (0, de.rP)();
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
		(0, Re.Gn)(this);
		this.m_fnSort = (0, $i.A)((e, t) => e.visibleApps.slice().sort(t));
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
		let n = (0, de.IW)(this.props.configContext)
			? (0, Tr.YQ)(e, t)
			: Mr.o.GetComputedDisplaySize(r);
		let i = (0, Tr.aH)(
			n,
			(0, de.IW)(this.props.configContext),
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
									key: "collection_list_" + r.id,
								},
								d.createElement(Nr.F9, {
									key: r.id,
									collection: r,
									eCoverSize: (0, Tr.jF)(
										u.childWidth,
										(0, de.IW)(this.props.configContext),
									),
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
				if (t.id == "partner-ea-access" && !(0, vt.ID)(de.TS.LAUNCHER_TYPE)) {
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
				let r = this.m_fnSort(t, (0, ea.g)(this.props.showcase.eSortBy)).filter(
					i.Matches,
				);
				for (let n = 0; n <= r.length; n++) {
					const i = r[n];
					if (i) {
						e.push(
							d.createElement(
								Oe.tH,
								{
									key: "app_list_" + i.appid,
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
				transform: "translateY(" + this.props.transformY + "px)",
			};
		}
		m = m && !this.props.reorderMode;
		const _ = (0, p.A)(
			ya.Showcase,
			!this.props.showcase.strCollectionId && ya.EmptyShowcase,
			this.props.onStartReordering == null && ya.ReorderingDisabled,
			this.props.spacer && ya.Spacer,
			m && ya.Hidden,
		);
		const f =
			this.props.reorderMode || h
				? null
				: d.createElement(
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
									: this.props.showcase.bExpanded
										? undefined
										: 1,
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
				className: (0, p.A)(
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
(0, br.Cg)([Re.sH], Ia.prototype, "m_bLeftArrowEnabled", undefined);
(0, br.Cg)([Re.sH], Ia.prototype, "m_bRightArrowEnabled", undefined);
(0, br.Cg)([k.oI], Ia.prototype, "OnToggleCollapsed", null);
(0, br.Cg)([k.oI], Ia.prototype, "OnUpdateArrows", null);
(0, br.Cg)([k.oI], Ia.prototype, "ScrollLeft", null);
(0, br.Cg)([k.oI], Ia.prototype, "ScrollRight", null);
(0, br.Cg)([k.oI], Ia.prototype, "OnStartReordering", null);
(0, br.Cg)([k.oI], Ia.prototype, "OnGridItemsDisplayedChanged", null);
Ia = (0, br.Cg)([ht.PA], Ia);
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
			(0, Re.fm)(() => {
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
			this.m_resizeObserver = (0, k.Fd)(
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
		const i = n == 0 ? undefined : this.state.rgOrder[n - 1];
		const a =
			n == this.state.rgShowcases.length - 1
				? undefined
				: this.state.rgOrder[n + 1];
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
		const n = (0, Dr.OQ)(e - this.state.nDragOffset, t.top, t.bottom - r);
		const i = this.props.scrollElement.getBoundingClientRect();
		if (e + r > i.bottom) {
			this.props.scrollElement.scrollTo(
				0,
				this.props.scrollElement.scrollTop + (e + r - i.bottom),
			);
		} else if (e < 0) {
			const t = this.m_refOuter.current.getBoundingClientRect();
			const n = (0, Dr.OQ)(e, t.top, t.bottom - r);
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
			const a = (0, Dr.OQ)(t - i.top, 0, i.height);
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
				key: "drag" + t.nShowcaseId,
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
				className: (0, p.A)(
					ya.LibraryShowCases,
					this.state.bReorderMode && ya.Reordering,
				),
			},
			e.length < _a.N.maxShowcases &&
				d.createElement(
					"div",
					{
						className: (0, p.A)(
							ya.AddShowcaseRow,
							this.state.bButtonHovered && !t && ya.ButtonHovered,
						),
					},
					d.createElement("div", {
						className: (0, p.A)(ya.Rule, ya.RuleLeft),
					}),
					d.createElement(
						"div",
						{
							className: (0, p.A)(ya.AddShowcase, t && ya.Disabled),
							onMouseEnter: () =>
								this.setState({
									bButtonHovered: true,
								}),
							onMouseLeave: () =>
								this.setState({
									bButtonHovered: false,
								}),
							onClick: t ? undefined : this.AddShowcase,
						},
						d.createElement(C.f5w, null),
						Localize("#Showcase_AddNewShowcase"),
					),
					d.createElement("div", {
						className: (0, p.A)(ya.Rule, ya.RuleRight),
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
						className: (0, p.A)(ya.DoneReordering),
						onClick: this.OnDoneReordering,
					},
					Localize("#Showcase_DoneReordering"),
				),
			),
			d.createElement(
				"div",
				{
					ref: this.m_refSortableContainer,
					className: (0, p.A)(
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
(0, br.Cg)([k.oI], Ea.prototype, "AddShowcase", null);
(0, br.Cg)([k.oI], Ea.prototype, "OnReorder", null);
(0, br.Cg)([k.oI], Ea.prototype, "OnStartReordering", null);
(0, br.Cg)([k.oI], Ea.prototype, "ScrollIntoView", null);
(0, br.Cg)([k.oI], Ea.prototype, "OnDoneReordering", null);
(0, br.Cg)([k.oI], Ea.prototype, "BindFirstShowcase", null);
(0, br.Cg)([k.oI], Ea.prototype, "OnGlobalMouseUp", null);
(0, br.Cg)([k.oI], Ea.prototype, "OnGlobalMouseMove", null);
(0, br.Cg)([k.oI], Ea.prototype, "OnScrollParentScroll", null);
(0, br.Cg)([k.oI], Ea.prototype, "OnResize", null);
class Ma extends d.Component {
	m_refSortableContainer = d.createRef();
	m_strLastShowcaseData = undefined;
	shouldComponentUpdate(e) {
		return (
			this.props.bReorderMode != e.bReorderMode ||
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
		for (let n = 0; n < e.length; n++) {
			const i = e[n];
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
					onStartReordering: this.props.bDisableReordering
						? undefined
						: this.props.onStartReordering,
				}),
			);
		}
		return d.createElement(d.Fragment, null, r);
	}
}
var Ta = require("./85166.js");
var Ra = Ta;
var ka = require("./20797.js");
var Da = require("./78057.js");
var Na = require("./92031.js");
var Fa = require("./45387.js");
function Ga(e) {
	let t = e.appid;
	let r = (0, Fa.JV)();
	let [n, a] = d.useState({
		x: 0,
		y: 0,
	});
	let s = d.useRef(undefined);
	let o = (0, i.br)();
	let l = () => o.App(t);
	(0, Da.T)(t);
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
	let _ =
		"translateX(-126px) translateY(-82px) translateZ(-100px) rotateX(0deg) rotateY(" +
		m +
		"deg) rotateZ(0deg)";
	let f =
		"rotateX(-90deg) skew(" +
		g +
		"deg, 0deg) translate3d(" +
		u +
		"px, 80px, " +
		A +
		"px)";
	let S = Dr.Fu(n.x, 0, 100, 1.25, 0.8);
	let w = se.tw.GetAppOverviewByAppID(t);
	let B = (function (e) {
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
					className: (0, p.A)(Ra.CubeFace, Ra.CubeFaceFront),
					eAssetType: 0,
					app: w,
					appid: t,
					style: {
						filter: "brightness(" + S + ")",
					},
					onClick: l,
				}),
				d.createElement("div", {
					className: (0, p.A)(Ra.CubeFace, Ra.CubeFaceBack),
				}),
				d.createElement(oe.z, {
					className: (0, p.A)(Ra.CubeFace, Ra.CubeFaceLeft),
					eAssetType: 0,
					app: w,
					appid: t,
					style: {
						filter: "blur(8px) brightness(" + C + ")",
					},
				}),
				d.createElement(
					"div",
					{
						className: (0, p.A)(Ra.CubeFace, Ra.CubeFaceBottom),
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
			case 10:
				n = LocalizeReact("#PrePurchase_Preload_Title", e);
				break;
			case 16:
				n = LocalizeReact("#PrePurchase_PreloadComplete_Title", e);
				break;
			case 22:
			case 7:
			case 23:
			case 9:
				n = LocalizeReact("#PrePurchase_Install_Title", e);
				break;
			case 11:
				n = LocalizeReact("#PrePurchase_PlayNow_Title", e);
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
			case 10:
				t = Localize("#PrePurchase_Preload_Desc");
				break;
			case 16:
				t = Localize("#PrePurchase_PreloadComplete_Desc");
				break;
			case 22:
			case 7:
			case 23:
			case 9:
				t = Localize("#PrePurchase_Install_Desc");
				break;
			case 11:
				t = Localize("#PrePurchase_PlayNow_Desc");
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
	let i = (0, Fa.i5)();
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
var za = require("./17391.js");
var xa = za;
var Ua = require("./83665.js");
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
(0, br.Cg)([k.oI], Wa.prototype, "OnDrop", null);
Wa = (0, br.Cg)([ht.PA], Wa);
var Va = require("./223.js");
const Ha = {
	1: "LibraryDisplaySizeSmall",
	2: "LibraryDisplaySizeMedium",
	3: "LibraryDisplaySizeLarge",
};
const ja = () => {
	const e = (0, w.R7)();
	const t = (0, d.useCallback)(
		function (t) {
			if (t.keyCode == 220 && (t.ctrlKey || t.metaKey)) {
				r = e.ownerWindow;
				(0, Ht.mK)(d.createElement(In, null), r || document.defaultView, {
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
	(0, d.useEffect)(() => {
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
			r = (0, Dr.OQ)(r, 0, parseInt(Bi.LeftListMaxPercentage));
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
		(async function (e) {
			if ((0, vt.DO)(de.TS.LAUNCHER_TYPE)) {
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
				(0, Ht.mK)(
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
		})((0, c.qw)().GetCloudStorageForLibrary());
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
		const r = (0, Dr.OQ)(
			t - parseInt(Bi.RightPanelMinWidth),
			parseInt(Bi.LeftListMinWidth),
			(t * parseInt(Bi.LeftListMaxPercentage)) / 100,
		);
		e = (0, Dr.OQ)(e, parseInt(Bi.LeftListMinWidth), r);
		return (0, Dr.OQ)((e * 100) / t, 0, parseInt(Bi.LeftListMaxPercentage));
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
				width: this.state.nListWidthPercentage + "%",
			};
		}
		const [i] = l.rV.GetClientSetting("library_display_size");
		const a = this.context;
		let s = t
			? (0, Tr.YQ)(a.libraryWidth, a.libraryHeight)
			: Mr.o.GetComputedDisplaySize(i);
		const o = (0, p.A)(
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
									className: (0, p.A)(Bi.LibraryWindowDivider, Bi.Sizable),
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
(0, br.Cg)([k.oI], qa.prototype, "OnRootLoad", null);
(0, br.Cg)([k.oI], qa.prototype, "OnGrabberMouseDown", null);
(0, br.Cg)([k.oI], qa.prototype, "OnGrabberTouchStart", null);
(0, br.Cg)([k.oI], qa.prototype, "HandleTouchMove", null);
(0, br.Cg)([k.oI], qa.prototype, "HandleMouseMove", null);
(0, br.Cg)([k.oI], qa.prototype, "SetGameListWidth", null);
(0, br.Cg)([k.oI], qa.prototype, "UnregisterGameListDragEvents", null);
qa = (0, br.Cg)([ht.PA], qa);
const Qa = (0, Je.y)(qa);
const Za = (0, ht.PA)((e) =>
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
	const e = (0, n.VT)();
	const t = (0, n.Qx)();
	const [r] = (0, l.VI)("library_low_perf_mode");
	const i = {
		enter: Bi.OverlayAppDetailsTransitionEnter,
		enterActive: Bi.OverlayAppDetailsTransitionEnterActive,
		enterDone: Bi.OverlayAppDetailsTransitionEntered,
		exit: Bi.OverlayAppDetailsTransitionExit,
		exitActive: Bi.OverlayAppDetailsTransitionExitActive,
	};
	const a = !r;
	const s = (0, d.useRef)(null);
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
	const i = (0, Je.W5)(n.BV.Library.AllCollections());
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
	const s = (0, d.useRef)(null);
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
	const t = (0, Je.W5)({
		path: n.BV.Library.App.Achievements.Root(),
		exact: false,
	});
	const [r] = (0, l.VI)("library_low_perf_mode");
	const { appid: a } = (0, Je.g)();
	const s = n.BV.Library.App.Root(a ? parseInt(a) : undefined);
	const o = (0, i.tn)(s, {
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
	const A = (0, d.useRef)(null);
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
require("./79293.js");
var Ja = require("./48197.js");
var $a = require("./96680.js");
var es = require(/*webcrack:missing*/ "./3524.js");
var ts = require("./24590.js");
var rs = require("./73375.js");
var ns = require(/*webcrack:missing*/ "./91435.js");
var is = require(/*webcrack:missing*/ "./3673.js");
var as = require(/*webcrack:missing*/ "./27773.js");
var ss = require("./72345.js");
var os = require("./85175.js");
var ls = require("./84108.js");
var cs = require("./34461.js");
var ms = require("./23600.js");
var us = require("./56655.js");
require("./16647.js");
var ds = require("./1756.js");
var As = require("./57337.js");
var ps = require("./3392.js");
var gs = ps;
var hs = require("./10501.js");
function Cs(e) {
	const { loading: t, pageSecurity: r, displayURL: n, reload: i } = (0, o.no)();
	const a = n;
	const s = t;
	let l = (0, $a.$2)();
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
					className: (0, p.A)(gs.StatusIcon, gs.ReloadButton),
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
					className: (0, p.A)(gs.StatusIcon, gs.LockIcon),
					toolTipContent: g,
				},
				A,
			),
			d.createElement(
				"div",
				{
					className: (0, p.A)(gs.URL, r?.bHasCertError && gs.CertError),
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
	const { tabbedBrowserStore: n } = (0, o.no)();
	const [i, a] = d.useState();
	const [s, c] = (0, o.TO)(i?.ownerDocument.defaultView);
	(function (e) {
		const [t] = (0, l.VI)("start_page");
		const r = (0, os.Jg)();
		const n = (0, Je.W6)();
		(0, d.useEffect)(() => {
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
					case "servers":
						r.Home(undefined, {
							bReplace: true,
						});
						break;
					case "console":
						r.Console({
							bReplace: true,
						});
						break;
					default:
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
				r.setNavigatingToInitialRoute(false);
				de.TS.SILENT_STARTUP = false;
			}
		}, [e]);
	})(c);
	const A = (0, is.Ju)(i?.ownerDocument.defaultView);
	const p = !!t;
	const g = c && p && !A;
	(0, ts.D)(s);
	const h = (0, $a.$2)();
	const C = (0, ds.M)(
		"SteamBrowser",
		i?.ownerDocument.defaultView,
		h.params.browserInfo,
		s,
		m.oy.NavigationManager,
		g,
	);
	const _ = (0, As.b)(i?.ownerDocument.defaultView, h.params.browserInfo, s);
	const f = (0, hs.w)();
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
	const [r] = (0, l.VI)("web_browser_home");
	const n = d.useRef(undefined);
	const i = d.useCallback(() => {
		t.RemoveAllRequests();
	}, [t]);
	const a = (0, A.q3)(() => t.active_web_requestid);
	const [s, o] = d.useState(t.web_requests);
	const c = d.useCallback(() => {
		let e = t.web_requests;
		o([...e]);
		if (n.current) {
			n.current.SteamClient.Window.BringToFront();
		}
	}, [t, o]);
	(0, k.hL)(t.GetWebPageRequestsChangedCallbackList(), c);
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
	const t = (0, $a.$2)();
	const r = (0, de.Pr)();
	const { focused: n } = (0, ms.c)();
	return d.createElement(
		Me.fN,
		null,
		d.createElement(
			"div",
			{
				className: (0, p.A)(gs.TopBar, r && gs.OSX),
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
	const t = (0, $a.$2)();
	(function () {
		const e = (0, n.jB)();
		const t = (0, tt.yq)();
		const r = (0, tt.kV)();
		const {
			ownerWindow: { document: i },
		} = (0, w.R7)();
		(0, d.useEffect)(() => {
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
(async function () {
	if (!de.TS.IN_STEAMUI_SHARED_CONTEXT) {
		let e = (0, c.KC)();
		await e.Init(window.cm);
	}
})();
const Bs = d.memo(function (e) {
	const { cm: t, bShowDesktopUIContent: r } = e;
	const { location: i, bActive: a } = ot();
	const s = (0, de.Qn)();
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
const vs = d.memo(function (e) {
	return d.createElement(
		n.Jh,
		{
			path: n.BV.Browser(),
		},
		(t) =>
			d.createElement(bs, {
				...t,
				bSmallMode: e.bSmallMode,
			}),
	);
});
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
	const [a] = (0, l.VI)("library_low_perf_mode");
	const s = a ? "LowPerfMode" : "HighPerfMode";
	return d.createElement(
		Va.b,
		{
			...n,
			className: (0, p.A)(r, s),
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
	const a = (0, de.hf)();
	const s = !!(0, Je.W5)({
		path: n.BV.Library.Root(),
		exact: false,
	});
	return d.createElement(
		Is,
		{
			style: i,
			className: (0, p.A)(gs.LocalContentContainer, s && gs.Library),
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
	const e = (0, w.R7)();
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
	const t = (0, c.gK)();
	const r = (0, de.hf)();
	const n = (0, $a.$2)();
	const a = (0, Je.W6)();
	const [s, o] = d.useState(false);
	const l = r;
	const m = de.TS.IN_STEAMUI_SHARED_CONTEXT && n.IsMainDesktopWindow();
	const u = (0, i.br)();
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
			await (0, c.qw)().WaitForServicesInitialized();
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
						(0, f.aE)(e);
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
	const { focused: t } = (0, ms.c)();
	return d.createElement("div", {
		className: (0, p.A)(gs.FocusBar, t && gs.Focused),
	});
}
function Ds(e) {
	const { children: t } = e;
	const { maximized: r } = (0, ms.c)();
	const n = (0, hs.w)();
	const i = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const a = (0, k.QS)((e) => {
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
			className: (0, p.A)(
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
	const [t] = (0, l.VI)("show_steam_deck_info");
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
	const t = (0, $a.$2)();
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
