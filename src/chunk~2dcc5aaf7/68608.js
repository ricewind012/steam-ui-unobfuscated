import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { PA } from "./41230.js";
import o, { aP, S$, ID } from "./44846.js";
import { rO } from "./88724.js";
import c from "./62556.js";
import m from "./93610.js";
import u from "./50376.js";
import { A as A_1 } from "./90765.js";
import _A from "./66418.js";
import g from "./72476.js";
const p = _A;
function H(e) {
	return (
		<>
			<span className={p.partyBeaconJoin}>
				{(0, Localize)("#User_WantsToPlay")}
			</span>
			{"\xA0–\xA0"}
			{e.persona.GetCurrentGameName()}
		</>
	);
}
export let D = class extends i.Component {
	render() {
		const {
			className,
			onContextMenu,
			persona,
			eFriendRelationship,
			bIsSelf,
			bParenthesizeNicknames,
			strNickname,
			bCompactView,
			bHideGameName,
			bHideEnhancedRichPresenceLabel,
			bHideSnooze,
			bHideStatus,
			renderStatus,
			renderRichPresence,
			bHidePersona,
			bDNDSet,
			bHasPartyBeacon,
			bHasGamePrivacy,
			bNoMask,
			...R
		} = this.props;
		let k = null;
		let D = null;
		let N = null;
		let F = [
			className,
			p.personaNameAndStatusLabel,
			rO(persona),
			bCompactView && p.compactView,
			bNoMask && p.NoMask,
		];
		if (bHasPartyBeacon || persona.has_public_party_beacon) {
			D = <H persona={persona} />;
		} else if (aP(eFriendRelationship)) {
			D = (0, Localize)("#PersonaStateBlocked");
			F.push(p.blocked);
		} else if (persona.is_ingame) {
			D =
				!persona.is_in_nonsteam_game ||
				bIsSelf ||
				bIsSelf ||
				S$(eFriendRelationship)
					? persona.GetCurrentGameName()
					: (0, Localize)("#PersonaStateInNonSteamGame");
			if (bIsSelf || bHidePersona) {
				if (bIsSelf && persona.is_awayOrSnooze) {
					N = (0, Localize)("#PersonaStateAway");
				}
			} else {
				N = persona.GetCurrentGameRichPresence();
			}
		} else if (persona.m_broadcastAccountId) {
			D = (0, Localize)("#PersonaStateWatchingBroadcast");
		}
		D ||= persona.GetLocalizedOnlineStatus();
		if (renderStatus) {
			D = renderStatus();
		}
		let G = !bHidePersona && !bHideSnooze;
		if (bHideSnooze === false) {
			G = true;
		}
		if (persona.is_awayOrSnooze && G) {
			k = <c.p persona={persona} />;
		}
		let O = null;
		if (onContextMenu) {
			O = (
				<div className="ContextMenuButton" onClick={onContextMenu}>
					<u.GB9 />
				</div>
			);
		} else {
			F.push(p.noContextMenu);
		}
		if (bHidePersona) {
			F.push(p.hidePersona);
		}
		if (renderRichPresence) {
			N = renderRichPresence();
		}
		if (!!bHideGameName || !N) {
			F.push(p.twoLine);
		}
		const P = !persona.is_ingame && !bHideStatus;
		const L = !bHideEnhancedRichPresenceLabel && N;
		const z = D && (!bHideGameName || !L);
		const x = ID(g.TS.LAUNCHER_TYPE);
		let U = strNickname && !bParenthesizeNicknames;
		let W = U ? strNickname : persona.m_strPlayerName;
		let V = !bHidePersona && (z || P) && L;
		return (
			<div {...R} className={A_1(...F)} onContextMenu={onContextMenu}>
				<div className={A_1(p.statusAndName, V && p.threeLines)}>
					<div className={p.playerName}>
						{W || "\xA0"}
						{bParenthesizeNicknames && strNickname && (
							<span className={p.playerNickname}>({strNickname})</span>
						)}
					</div>
					{bDNDSet && (
						<div
							className={p.DNDContainer}
							title={(0, Localize)("#User_ToggleDoNotDisturb")}
						>
							<u.Aj0 />
						</div>
					)}
					{U && (
						<span
							className={p.playerNicknameBracket}
							title={(0, Localize)("#isNickname")}
						>
							{" *"}
						</span>
					)}
					<m.X persona={persona} />
					{k}
					{(persona.m_bPlayerNamePending || persona.m_bAvatarPending) && x && (
						<div
							className={p.PendingPersona}
							title={(0, Localize)("#SteamChina_PendingPersonaName")}
						>
							<u.zD7 />
						</div>
					)}
					{O}
				</div>
				{!bHidePersona && (
					<div className={p.richPresenceContainer}>
						{(z || P) && (
							<div
								className={A_1(
									p.gameName,
									V && p.threeLines,
									p.richPresenceLabel,
									"no-drag",
								)}
							>
								{bHasGamePrivacy && (
									<div
										className={p.gameIsPrivateIcon}
										title={(0, Localize)("#User_GameInfoHidden")}
									>
										<u.jZl />
									</div>
								)}
								{D}
							</div>
						)}
						{L && (
							<div className={A_1(p.richPresenceLabel, "no-drag")}>{N} </div>
						)}
					</div>
				)}
			</div>
		);
	}
};
D = Cg([a.PA], D);
export const A = PA((e) => {
	const {
		persona,
		bParenthesizeNicknames,
		strNickname,
		bIgnorePersonaStatus,
		bDisableColoring,
		className,
		...c
	} = e;
	let m =
		strNickname && !bParenthesizeNicknames
			? strNickname
			: persona.m_strPlayerName;
	return (
		<span
			{...c}
			className={A_1(
				className,
				bDisableColoring && p.DisableColoring,
				!bIgnorePersonaStatus && rO(persona),
			)}
		>
			<span className={p.playerName}>
				{m || "\xA0"}
				{bParenthesizeNicknames && strNickname && (
					<span className={p.playerNickname}>({strNickname})</span>
				)}
			</span>
		</span>
	);
});
