var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
import { Localize } from "../../actual_src/utils/localization.js";
var o = require(/*webcrack:missing*/ "./44846.js");
var l = require("./88724.js");
var c = require("./62556.js");
var m = require("./93610.js");
var u = require(/*webcrack:missing*/ "./50376.js");
var d = require(/*webcrack:missing*/ "./90765.js");
var _A = require("./66418.js");
var p = _A;
var g = require(/*webcrack:missing*/ "./72476.js");
function h(e) {
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			"span",
			{
				className: p.partyBeaconJoin,
			},
			(0, Localize)("#User_WantsToPlay"),
		),
		"\xA0–\xA0",
		e.persona.GetCurrentGameName(),
	);
}
export let D = class extends i.Component {
	render() {
		const {
			className: e,
			onContextMenu: t,
			persona: r,
			eFriendRelationship: n,
			bIsSelf: a,
			bParenthesizeNicknames: A,
			strNickname: C,
			bCompactView: _,
			bHideGameName: f,
			bHideEnhancedRichPresenceLabel: b,
			bHideSnooze: y,
			bHideStatus: S,
			renderStatus: w,
			renderRichPresence: B,
			bHidePersona: v,
			bDNDSet: I,
			bHasPartyBeacon: E,
			bHasGamePrivacy: M,
			bNoMask: T,
			...R
		} = this.props;
		let k = null;
		let D = null;
		let N = null;
		let F = [
			e,
			p.personaNameAndStatusLabel,
			(0, l.rO)(r),
			_ && p.compactView,
			T && p.NoMask,
		];
		if (E || r.has_public_party_beacon) {
			D = i.createElement(h, {
				persona: r,
			});
		} else if ((0, o.aP)(n)) {
			D = (0, Localize)("#PersonaStateBlocked");
			F.push(p.blocked);
		} else if (r.is_ingame) {
			D =
				!r.is_in_nonsteam_game || a || (0, o.S$)(n)
					? r.GetCurrentGameName()
					: (0, Localize)("#PersonaStateInNonSteamGame");
			if (a || v) {
				if (a && r.is_awayOrSnooze) {
					N = (0, Localize)("#PersonaStateAway");
				}
			} else {
				N = r.GetCurrentGameRichPresence();
			}
		} else if (r.m_broadcastAccountId) {
			D = (0, Localize)("#PersonaStateWatchingBroadcast");
		}
		D ||= r.GetLocalizedOnlineStatus();
		if (w) {
			D = w();
		}
		let G = !v && !y;
		if (y === false) {
			G = true;
		}
		if (r.is_awayOrSnooze && G) {
			k = i.createElement(c.p, {
				persona: r,
			});
		}
		let O = null;
		if (t) {
			O = i.createElement(
				"div",
				{
					className: "ContextMenuButton",
					onClick: t,
				},
				i.createElement(u.GB9, null),
			);
		} else {
			F.push(p.noContextMenu);
		}
		if (v) {
			F.push(p.hidePersona);
		}
		if (B) {
			N = B();
		}
		if (!!f || !N) {
			F.push(p.twoLine);
		}
		const P = !r.is_ingame && !S;
		const L = !b && N;
		const z = D && (!f || !L);
		const x = (0, o.ID)(g.TS.LAUNCHER_TYPE);
		let U = C && !A;
		let W = U ? C : r.m_strPlayerName;
		let V = !v && (z || P) && L;
		return i.createElement(
			"div",
			{
				...R,
				className: (0, d.A)(...F),
				onContextMenu: t,
			},
			i.createElement(
				"div",
				{
					className: (0, d.A)(p.statusAndName, V && p.threeLines),
				},
				i.createElement(
					"div",
					{
						className: p.playerName,
					},
					W || "\xA0",
					A &&
						C &&
						i.createElement(
							"span",
							{
								className: p.playerNickname,
							},
							"(",
							C,
							")",
						),
				),
				I &&
					i.createElement(
						"div",
						{
							className: p.DNDContainer,
							title: (0, Localize)("#User_ToggleDoNotDisturb"),
						},
						i.createElement(u.Aj0, null),
					),
				U &&
					i.createElement(
						"span",
						{
							className: p.playerNicknameBracket,
							title: (0, Localize)("#isNickname"),
						},
						" *",
					),
				i.createElement(m.X, {
					persona: r,
				}),
				k,
				(r.m_bPlayerNamePending || r.m_bAvatarPending) &&
					x &&
					i.createElement(
						"div",
						{
							className: p.PendingPersona,
							title: (0, Localize)("#SteamChina_PendingPersonaName"),
						},
						i.createElement(u.zD7, null),
					),
				O,
			),
			!v &&
				i.createElement(
					"div",
					{
						className: p.richPresenceContainer,
					},
					(z || P) &&
						i.createElement(
							"div",
							{
								className: (0, d.A)(
									p.gameName,
									V && p.threeLines,
									p.richPresenceLabel,
									"no-drag",
								),
							},
							M &&
								i.createElement(
									"div",
									{
										className: p.gameIsPrivateIcon,
										title: (0, Localize)("#User_GameInfoHidden"),
									},
									i.createElement(u.jZl, null),
								),
							D,
						),
					L &&
						i.createElement(
							"div",
							{
								className: (0, d.A)(p.richPresenceLabel, "no-drag"),
							},
							N,
							" ",
						),
				),
		);
	}
};
D = (0, n.Cg)([a.PA], D);
export const A = (0, a.PA)((e) => {
	const {
		persona: t,
		bParenthesizeNicknames: r,
		strNickname: n,
		bIgnorePersonaStatus: a,
		bDisableColoring: s,
		className: o,
		...c
	} = e;
	let m = n && !r ? n : t.m_strPlayerName;
	return i.createElement(
		"span",
		{
			...c,
			className: (0, d.A)(o, s && p.DisableColoring, !a && (0, l.rO)(t)),
		},
		i.createElement(
			"span",
			{
				className: p.playerName,
			},
			m || "\xA0",
			r &&
				n &&
				i.createElement(
					"span",
					{
						className: p.playerNickname,
					},
					"(",
					n,
					")",
				),
		),
	);
});
