var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./93610.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./46108.js");
var c = require("./62556.js");
var m = require("./24336.js");
var u = m;
var d = require("./88724.js");
var A = require("./17231.js");
var p = require("./82594.js");
require("./95111.js");
let g = class extends a.Component {
	render() {
		const { community_data: e } = this.props;
		let t = e && e.favorite_badge;
		if (t) {
			return a.createElement(
				"div",
				{
					className: (0, o.A)(
						u.miniProfileFeaturedContainer,
						this.props.className,
					),
				},
				a.createElement(
					"div",
					{
						className: u.favoriteBadgeIcon,
					},
					a.createElement("img", {
						src: t.icon,
						className: u.badgeIcon,
					}),
				),
				a.createElement(
					"div",
					{
						className: (0, o.A)(u.featuredLabels, u.favoriteBadgeDescription),
					},
					a.createElement(
						"div",
						{
							className: u.featuredTitle,
						},
						t.name,
					),
					a.createElement(
						"div",
						{
							className: u.featuredSubTitle,
						},
						(0, l.we)("#Hover_BadgeXP", t.xp),
					),
				),
			);
		} else {
			return null;
		}
	}
};
g = (0, n.Cg)([i.PA], g);
let h = class extends a.Component {
	render() {
		const { community_data: e, className: t } = this.props;
		if (e) {
			return a.createElement(
				"div",
				{
					className: (0, o.A)(u.miniProfileFeaturedContainer, t),
				},
				a.createElement(
					"div",
					{
						className: e.level_class,
					},
					a.createElement(
						"span",
						{
							className: u.friendPlayerLevelNum,
						},
						e.level,
					),
				),
				a.createElement(
					"div",
					{
						className: u.featuredLabels,
					},
					a.createElement(
						"div",
						{
							className: u.featuredTitle,
						},
						(0, l.we)("#Hover_SteamLevel") + " ",
					),
				),
			);
		} else {
			return null;
		}
	}
};
h = (0, n.Cg)([i.PA], h);
let C = class extends a.Component {
	render() {
		let e = this.props.persona;
		let t = this.props.community_data;
		return a.createElement(
			"div",
			{
				className: (0, o.A)(u.miniProfileGameContainer, this.props.className),
			},
			t?.in_game?.logo &&
				a.createElement("img", {
					className: u.gameLogo,
					src: t.in_game.logo,
				}),
			a.createElement(
				"div",
				{
					className: (0, o.A)(u.gameContent, u.persona, u.ingame, u.ellipsis),
				},
				a.createElement(
					"div",
					{
						className: u.gameState,
					},
					(0, l.we)(
						e.is_in_nonsteam_game
							? "#PersonaStateInNonSteamGame"
							: "#PersonaStateInGame",
					),
				),
				this.props.persona.GetCurrentGameName(),
				this.props.persona.HasCurrentGameRichPresence() &&
					a.createElement(
						"div",
						{
							className: u.richPresence,
						},
						this.props.persona.GetCurrentGameRichPresence(),
					),
				this.props.in_game_section_additional,
			),
		);
	}
};
function _(e) {
	const { appID: t } = e;
	const [r] = (0, p.t7)(t, {
		include_assets_without_overrides: true,
	});
	const n = r?.GetAssetsWithoutOverrides()?.GetHeaderURL();
	if (n) {
		return a.createElement("img", {
			className: u.gameLogo,
			src: n,
		});
	} else {
		return null;
	}
}
C = (0, n.Cg)([i.PA], C);
let f = class extends a.Component {
	render() {
		let e;
		let t;
		let r = this.props.broadcast_description;
		if (r) {
			e = (0, l.we)("#PersonaStateWatchingBroadcast");
			t = r;
		}
		return a.createElement(
			"div",
			{
				className: (0, o.A)(u.miniProfileGameContainer, this.props.className),
			},
			this.props.persona.m_broadcastAppId &&
				a.createElement(_, {
					appID: this.props.persona.m_broadcastAppId,
				}),
			a.createElement(
				"div",
				{
					className: (0, o.A)(
						u.gameContent,
						u.persona,
						u.watchingbroadcast,
						u.ellipsis,
					),
				},
				a.createElement(
					"div",
					{
						className: u.gameState,
					},
					e,
				),
				t &&
					a.createElement(
						"div",
						{
							className: u.richPresence,
						},
						t,
					),
				a.createElement(
					"div",
					{
						className: u.watchingbroadcastThumbnail,
					},
					this.props.broadcast_thumbnail,
				),
			),
		);
	}
};
f = (0, n.Cg)([i.PA], f);
export let Vr = class extends a.Component {
	render() {
		const {
			className: e,
			persona: t,
			data_loader: r,
			community_data_override: n,
			nickname: i,
			is_friend: m,
			is_blocked: A,
			friend_relationship: p,
			broadcast_description: _,
			broadcast_thumbnail: b,
			mutual_friends: w,
			in_game_section_additional: B,
			bottom_section_additional: v,
			...I
		} = this.props;
		let E = r.community_data;
		if (n) {
			E = {
				...E,
				...n,
			};
		}
		const M = Object.keys((E && E.profile_background) || {}).length > 0;
		let T;
		let R = u.miniProfileContent;
		if (t.is_ingame) {
			T = a.createElement(C, {
				...this.props,
				community_data: E,
				className: M ? u.miniProfileBackdropBlur : undefined,
			});
		} else if (t.is_watchingbroadcast) {
			T = a.createElement(f, {
				...this.props,
				className: M ? u.miniProfileBackdropBlur : undefined,
			});
		} else {
			R += " " + u.notInOrWatchingGame;
		}
		let k = true;
		let D = false;
		let N = false;
		if (!m) {
			R += " " + u.notFriends;
			k = false;
		}
		if (A) {
			R += " " + u.communicationBlocked;
			N = true;
		}
		let F;
		let G = i !== undefined;
		let O = t.is_awayOrSnooze;
		F = G
			? a.createElement(
					"div",
					null,
					a.createElement(
						"div",
						{
							className: u.personaAndIcons,
						},
						a.createElement(
							"div",
							{
								className: (0, o.A)(u.personaName, u.nickName),
							},
							a.createElement(
								"div",
								{
									className: u.personaNameLabel,
								},
								this.props.nickname,
							),
							a.createElement(
								"div",
								{
									className: u.playerNicknameBracket,
									title: (0, l.we)("#isNickname"),
								},
								"*",
							),
						),
						a.createElement(s.X, {
							persona: t,
						}),
					),
					a.createElement(
						"div",
						{
							className: (0, o.A)(u.personaName, u.hasNickname),
						},
						"( ",
						a.createElement(
							"div",
							{
								className: u.personaNameLabel,
							},
							t.m_strPlayerName,
						),
						" )",
					),
				)
			: a.createElement(
					"div",
					{
						className: u.personaAndIcons,
					},
					a.createElement(
						"div",
						{
							className: u.personaName,
						},
						a.createElement(
							"div",
							{
								className: u.personaNameLabel,
							},
							t.m_strPlayerName,
						),
					),
					a.createElement(s.X, {
						persona: t,
					}),
				);
		if (this.props.friend_relationship == 2) {
			D = true;
		}
		return a.createElement(
			a.Fragment,
			null,
			a.createElement(
				"div",
				{
					key: t.GetAccountID(),
					className: (0, o.A)(this.props.className, u.miniProfile),
					...I,
				},
				a.createElement(
					"div",
					{
						className: R,
					},
					a.createElement(xh, {
						community_data: E,
						persona: t,
					}),
					a.createElement(
						"div",
						{
							className: u.miniProfileHeader,
						},
						a.createElement(
							"div",
							{
								className: (0, o.A)(
									u.miniProfilePlayer,
									t.online_state,
									O && u.isAway,
									(0, d.rO)(t),
								),
							},
							a.createElement(S, {
								persona: this.props.persona,
								community_data: E,
							}),
							O &&
								a.createElement(c.p, {
									persona: t,
									animating: true,
									className: u.SnoozeContainer,
									size: "large",
								}),
							a.createElement(
								"div",
								{
									className: u.playerContent,
								},
								a.createElement(
									"div",
									{
										className: u.playerName,
									},
									a.createElement(
										"div",
										{
											className: u.persona,
										},
										F,
										O &&
											a.createElement(
												"div",
												{
													className: u.awayStatusLabel,
												},
												(0, l.we)("#PersonaStateAway"),
											),
										!t.is_online &&
											a.createElement(
												"div",
												{
													className: u.awayStatusLabel,
												},
												this.props.persona.GetLocalizedOnlineStatus(),
											),
										t.online_state == "online" &&
											!O &&
											a.createElement(
												"div",
												{
													className: u.awayStatusLabel,
												},
												(0, l.we)("#PersonaStateOnline"),
											),
										!k &&
											a.createElement(
												"div",
												{
													className: u.miniProfileNotFriends,
												},
												D
													? (0, l.we)("#Friend_Menu_NotAFriendRequesting")
													: (0, l.we)("#Friend_Menu_NotAFriendLabel"),
											),
										N &&
											a.createElement(
												"div",
												{
													className: u.miniProfileBlocked,
												},
												(0, l.we)("#PersonaStateBlocked"),
											),
									),
								),
							),
						),
					),
					T,
					a.createElement(
						"div",
						{
							className: (0, o.A)(
								u.miniProfileBottom,
								M && u.miniProfileBackdropBlur,
							),
						},
						a.createElement(g, {
							community_data: E,
						}),
						a.createElement(h, {
							community_data: E,
						}),
					),
					v,
					a.createElement(
						"div",
						{
							className: u.mutualFriends,
						},
						this.props.mutual_friends,
					),
				),
			),
		);
	}
};
Vr = (0, n.Cg)([i.PA], Vr);
export const xh = ({ community_data: e, persona: t }) => {
	if (e && e.profile_background) {
		const { image: t, ...r } = e.profile_background;
		if (Object.keys(r).length) {
			return a.createElement(
				"div",
				{
					className: u.miniProfileVideoBackgroundContainer,
					key: r["video/webm"] || r["video/mp4"] || "image",
				},
				a.createElement(
					"video",
					{
						className: u.miniProfileVideoBackground,
						playsInline: true,
						muted: true,
						autoPlay: true,
						loop: true,
						poster: t,
					},
					Object.keys(r).map((e) =>
						a.createElement("source", {
							key: e,
							src: r[e],
							type: e,
						}),
					),
				),
			);
		}
		if (t) {
			return a.createElement(
				"div",
				{
					className: u.miniProfileVideoBackgroundContainer,
				},
				a.createElement("img", {
					className: u.miniProfileVideoBackground,
					src: t,
				}),
			);
		}
	}
	return a.createElement(
		"div",
		{
			className: u.miniProfileBackground,
		},
		a.createElement("img", {
			className: u.miniProfileBackgroundBlur,
			src: t.avatar_url,
		}),
	);
};
const S = (e) => {
	const { persona: t, community_data: r, size: n, ...i } = e;
	const s =
		r &&
		r.avatar_frame &&
		a.createElement("img", {
			src: r.avatar_frame,
			className: u.Frame,
		});
	const o = r && r.animated_avatar;
	const l = {
		size: n || "X-Large",
		statusPosition: "bottom",
		className: u.playerAvatar,
	};
	if (o) {
		return a.createElement(
			A.Ul,
			{
				...i,
				strAvatarURL: o,
				...l,
			},
			s,
		);
	} else {
		return a.createElement(
			A.i8,
			{
				persona: t,
				...i,
				...l,
			},
			s,
		);
	}
};
