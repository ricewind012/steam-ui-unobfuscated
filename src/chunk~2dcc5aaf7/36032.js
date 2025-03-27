import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./41230.js";
import a from "./63696.js";
import s from "./93610.js";
import o, { A as A_1 } from "./90765.js";
import c from "./62556.js";
import m from "./24336.js";
import { rO } from "./88724.js";
import A from "./17231.js";
import p, { t7 } from "./82594.js";
import "./95111.js";
const u = m;
let G = class extends a.Component {
	render() {
		const { community_data } = this.props;
		let t = community_data && community_data.favorite_badge;
		if (t) {
			return (
				<div
					className={A_1(u.miniProfileFeaturedContainer, this.props.className)}
				>
					<div className={u.favoriteBadgeIcon}>
						<img src={t.icon} className={u.badgeIcon} />
					</div>
					<div className={A_1(u.featuredLabels, u.favoriteBadgeDescription)}>
						<div className={u.featuredTitle}>{t.name}</div>
						<div className={u.featuredSubTitle}>
							{Localize("#Hover_BadgeXP", t.xp)}
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
};
G = Cg([i.PA], G);
let H = class extends a.Component {
	render() {
		const { community_data, className } = this.props;
		if (community_data) {
			return (
				<div className={A_1(u.miniProfileFeaturedContainer, className)}>
					<div className={community_data.level_class}>
						<span className={u.friendPlayerLevelNum}>
							{community_data.level}
						</span>
					</div>
					<div className={u.featuredLabels}>
						<div className={u.featuredTitle}>
							{`${Localize("#Hover_SteamLevel")} `}
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
};
H = Cg([i.PA], H);
let C = class extends a.Component {
	render() {
		let e = this.props.persona;
		let t = this.props.community_data;
		return (
			<div className={A_1(u.miniProfileGameContainer, this.props.className)}>
				{t?.in_game?.logo && (
					<img className={u.gameLogo} src={t.in_game.logo} />
				)}
				<div className={A_1(u.gameContent, u.persona, u.ingame, u.ellipsis)}>
					<div className={u.gameState}>
						{Localize(
							e.is_in_nonsteam_game
								? "#PersonaStateInNonSteamGame"
								: "#PersonaStateInGame",
						)}
					</div>
					{this.props.persona.GetCurrentGameName()}
					{this.props.persona.HasCurrentGameRichPresence() && (
						<div className={u.richPresence}>
							{this.props.persona.GetCurrentGameRichPresence()}
						</div>
					)}
					{this.props.in_game_section_additional}
				</div>
			</div>
		);
	}
};
function _(e) {
	const { appID } = e;
	const [r] = t7(appID, {
		include_assets_without_overrides: true,
	});
	const n = r?.GetAssetsWithoutOverrides()?.GetHeaderURL();
	if (n) {
		return <img className={u.gameLogo} src={n} />;
	} else {
		return null;
	}
}
C = Cg([i.PA], C);
let F = class extends a.Component {
	render() {
		let e;
		let t;
		let r = this.props.broadcast_description;
		if (r) {
			e = Localize("#PersonaStateWatchingBroadcast");
			t = r;
		}
		return (
			<div className={A_1(u.miniProfileGameContainer, this.props.className)}>
				{this.props.persona.m_broadcastAppId && (
					<_ appID={this.props.persona.m_broadcastAppId} />
				)}
				<div
					className={A_1(
						u.gameContent,
						u.persona,
						u.watchingbroadcast,
						u.ellipsis,
					)}
				>
					<div className={u.gameState}>{e}</div>
					{t && <div className={u.richPresence}>{t}</div>}
					<div className={u.watchingbroadcastThumbnail}>
						{this.props.broadcast_thumbnail}
					</div>
				</div>
			</div>
		);
	}
};
F = Cg([i.PA], F);
export let Vr = class extends a.Component {
	render() {
		const {
			className,
			persona,
			data_loader,
			community_data_override,
			nickname,
			is_friend,
			is_blocked,
			friend_relationship,
			broadcast_description,
			broadcast_thumbnail,
			mutual_friends,
			in_game_section_additional,
			bottom_section_additional,
			...I
		} = this.props;
		let r_community_data = data_loader.community_data;
		if (community_data_override) {
			r_community_data = {
				...r_community_data,
				...community_data_override,
			};
		}
		const M =
			Object.keys(
				(r_community_data && r_community_data.profile_background) || {},
			).length > 0;
		let T;
		let u_miniProfileContent = u.miniProfileContent;
		if (persona.is_ingame) {
			T = (
				<C
					{...this.props}
					community_data={r_community_data}
					className={M ? u.miniProfileBackdropBlur : undefined}
				/>
			);
		} else if (persona.is_watchingbroadcast) {
			T = (
				<F
					{...this.props}
					className={M ? u.miniProfileBackdropBlur : undefined}
				/>
			);
		} else {
			u_miniProfileContent += ` ${u.notInOrWatchingGame}`;
		}
		let k = true;
		let D = false;
		let N = false;
		if (!is_friend) {
			u_miniProfileContent += ` ${u.notFriends}`;
			k = false;
		}
		if (is_blocked) {
			u_miniProfileContent += ` ${u.communicationBlocked}`;
			N = true;
		}
		let F;
		let G = nickname !== undefined;
		let t_is_awayOrSnooze = persona.is_awayOrSnooze;
		F = G ? (
			<div>
				<div className={u.personaAndIcons}>
					<div className={A_1(u.personaName, u.nickName)}>
						<div className={u.personaNameLabel}>{this.props.nickname}</div>
						<div
							className={u.playerNicknameBracket}
							title={Localize("#isNickname")}
						>
							*
						</div>
					</div>
					<s.X persona={persona} />
				</div>
				<div className={A_1(u.personaName, u.hasNickname)}>
					{"( "}
					<div className={u.personaNameLabel}>{persona.m_strPlayerName}</div>
					{" )"}
				</div>
			</div>
		) : (
			<div className={u.personaAndIcons}>
				<div className={u.personaName}>
					<div className={u.personaNameLabel}>{persona.m_strPlayerName}</div>
				</div>
				<s.X persona={persona} />
			</div>
		);
		if (this.props.friend_relationship == 2) {
			D = true;
		}
		return (
			<>
				<div
					key={persona.GetAccountID()}
					className={A_1(this.props.className, u.miniProfile)}
					{...I}
				>
					<div className={u_miniProfileContent}>
						<Xh community_data={r_community_data} persona={persona} />
						<div className={u.miniProfileHeader}>
							<div
								className={A_1(
									u.miniProfilePlayer,
									persona.online_state,
									t_is_awayOrSnooze && u.isAway,
									rO(persona),
								)}
							>
								<S
									persona={this.props.persona}
									community_data={r_community_data}
								/>
								{t_is_awayOrSnooze && (
									<c.p
										persona={persona}
										animating
										className={u.SnoozeContainer}
										size="large"
									/>
								)}
								<div className={u.playerContent}>
									<div className={u.playerName}>
										<div className={u.persona}>
											{F}
											{t_is_awayOrSnooze && (
												<div className={u.awayStatusLabel}>
													{Localize("#PersonaStateAway")}
												</div>
											)}
											{!persona.is_online && (
												<div className={u.awayStatusLabel}>
													{this.props.persona.GetLocalizedOnlineStatus()}
												</div>
											)}
											{persona.online_state == "online" &&
												!t_is_awayOrSnooze && (
													<div className={u.awayStatusLabel}>
														{Localize("#PersonaStateOnline")}
													</div>
												)}
											{!k && (
												<div className={u.miniProfileNotFriends}>
													{D
														? Localize("#Friend_Menu_NotAFriendRequesting")
														: Localize("#Friend_Menu_NotAFriendLabel")}
												</div>
											)}
											{N && (
												<div className={u.miniProfileBlocked}>
													{Localize("#PersonaStateBlocked")}
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
						{T}
						<div
							className={A_1(
								u.miniProfileBottom,
								M && u.miniProfileBackdropBlur,
							)}
						>
							<G community_data={r_community_data} />
							<H community_data={r_community_data} />
						</div>
						{bottom_section_additional}
						<div className={u.mutualFriends}>{this.props.mutual_friends}</div>
					</div>
				</div>
			</>
		);
	}
};
Vr = Cg([i.PA], Vr);
export const Xh = ({ community_data, persona }) => {
	if (community_data && community_data.profile_background) {
		const { image, ...r } = community_data.profile_background;
		if (Object.keys(r).length) {
			return (
				<div
					className={u.miniProfileVideoBackgroundContainer}
					key={r["video/webm"] || r["video/mp4"] || r["video/mp4"] || "image"}
				>
					<video
						className={u.miniProfileVideoBackground}
						playsInline
						muted
						autoPlay
						loop
						poster={image}
					>
						{Object.keys(r).map((e) => (
							<source key={e} src={r[e]} type={e} />
						))}
					</video>
				</div>
			);
		}
		if (image) {
			return (
				<div className={u.miniProfileVideoBackgroundContainer}>
					<img className={u.miniProfileVideoBackground} src={image} />
				</div>
			);
		}
	}
	return (
		<div className={u.miniProfileBackground}>
			<img className={u.miniProfileBackgroundBlur} src={persona.avatar_url} />
		</div>
	);
};
const S = (e) => {
	const { persona, community_data, size, ...i } = e;
	const s = community_data && community_data.avatar_frame && (
		<img src={community_data.avatar_frame} className={u.Frame} />
	);
	const o = community_data && community_data.animated_avatar;
	const l = {
		size: size || "X-Large",
		statusPosition: "bottom",
		className: u.playerAvatar,
	};
	if (o) {
		return (
			<A.Ul {...i} strAvatarURL={o} {...l}>
				{s}
			</A.Ul>
		);
	} else {
		return (
			<A.i8 persona={persona} {...i} {...l}>
				{s}
			</A.i8>
		);
	}
};
