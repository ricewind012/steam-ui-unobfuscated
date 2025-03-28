import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { useContext, useState, useEffect, useRef } from "./63696.js";
import i, { PA } from "./41230.js";
import a, { q3 } from "./90095.js";
import s, { TN } from "./95773.js";
import o from "./64608.js";
import l from "./35488.js";
import c, { pg } from "./13869.js";
import m, { A as A_1 } from "./90765.js";
import d from "./42085.js";
import A from "./27991.js";
import p from "./95377.js";
import g from "./50376.js";
import h, { CO, _k } from "./52912.js";
import C, { tp } from "./88724.js";
import _ from "./15855.js";
import f from "./72476.js";
import b, { EP } from "./59704.js";
import y from "./21105.js";
import { lX } from "./31084.js";
import w from "./88750.js";
import { vJ, uN } from "./52451.js";
import v from "./53225.js";
import { BSharedJSContextHasMethod } from "../../actual_src/steamclient/clientinterfacehelpers.js";
import E from "./68665.js";
import M from "./69164.js";
export function br() {
	return <N />;
}
function K_1(e) {
	const { hostPlayer, bAmHost, rgPlayers } = De();
	const a = hostPlayer != null;
	const l = TN();
	const c = useContext(f.QO);
	if (l) {
		return (
			<>
				{a && (
					<d.aU title={(0, Localize)("#RemotePlay_Players")}>
						{[hostPlayer, ...rgPlayers]
							.filter((e) => e.bSession)
							.map((e) => (
								<L
									player={e}
									key={`${e.playerID.steamid}_${e.playerID.guestid}`}
									quickaccess
								/>
							))}
						{bAmHost && (
							<d.kn>
								<o.D0 childrenLayout="below">
									<M.Z className={A.InviteFriendGuestButtons}>
										<o.$n
											className={A.InlineInviteButton}
											onClick={(e) => Je(c, GetOwningWindowForEvent(e))}
										>
											{(0, Localize)("#RemotePlay_InviteFriend")}
										</o.$n>
										<o.$n
											className={A.InlineInviteButton}
											onClick={() => ce(e.browserContext)}
										>
											{(0, Localize)("#RemotePlay_InviteGuest")}
										</o.$n>
									</M.Z>
								</o.D0>
							</d.kn>
						)}
					</d.aU>
				)}
				{a && (
					<d.aU>
						<_e />
						<Y />
					</d.aU>
				)}
			</>
		);
	} else {
		return <d.aU title={(0, Localize)("#RemotePlay_NoGameRunning")} />;
	}
}
export function rN(e) {
	return (
		<div className={A.QuickAccessContainer}>
			<div className={A.QuickAccessTitle}>
				{(0, Localize)("#RemotePlayTogether_QuickAccessTitle")}
			</div>
			<y.MS className={A.QuickAccessScrollPanel}>
				<K_1 browserContext={e.browserContext} />
			</y.MS>
		</div>
	);
}
const N = () => (
	<o.U9 classNameContent={A.ContentForm}>
		<F />
		<G />
		<He_1 showVolume />
	</o.U9>
);
const F = PA(() => {
	const e = s.xm.RemotePlayStore.bIsShowingPlaceholder;
	return (
		<o.Y9 className={A.DialogHeader}>
			{(0, Localize)("#Friend_Menu_RemotePlay")}
			<div
				className={A.StreamPausedNote}
				style={
					e || {
						visibility: "hidden",
					}
				}
			>
				{(0, Localize)("#RemotePlay_StreamPaused")}
			</div>
			<div className={A.HeaderActions}>
				<div className={A.HeaderActionsButtons}>
					<Z />
					<Q_1 />
				</div>
			</div>
		</o.Y9>
	);
});
const G = () => (
	<o.nB className={A.MediaBoxBody}>
		<O />
		<P />
	</o.nB>
);
const O = () => {
	const { hostPlayer } = De();
	return (
		<Ve_1 title={(0, Localize)("#RemotePlay_Host")}>
			<L player={hostPlayer} quickaccess={false} />
		</Ve_1>
	);
};
const P = PA(() => {
	const { bAmHost, rgPlayers } = De();
	return (
		<Ve_1 title={(0, Localize)("#RemotePlay_Players")}>
			{rgPlayers.map((e, t) =>
				e.bSession ? (
					<L
						player={e}
						key={`${e.playerID.steamid}_${e.playerID.guestid}`}
						quickaccess={false}
					/>
				) : null,
			)}
			{bAmHost && <Me_1 />}
			{bAmHost && <Ue_1 />}
		</Ve_1>
	);
});
const L = PA((e) => {
	const { player } = e;
	if (player.playerID.guestid && !player.friend.accountid) {
		if (player.bJoined) {
			return <V {...e} />;
		} else {
			return <H {...e} />;
		}
	} else {
		return <W {...e} />;
	}
});
function z(e) {
	if (e.friend?.accountid) {
		return e.friend.display_name;
	} else {
		return (0, Localize)("#RemotePlay_NumberedGuest", e.playerID.guestid);
	}
}
function x(e) {
	const { bAmHost } = De();
	const r = s.xm.RemotePlayStore.GetControllerSlotsForPlayer(e.playerID);
	const n =
		!e.bKeyboardEnabled &&
		!e.bMouseEnabled &&
		(!e.bControllerEnabled || r.length === 0);
	const i = e.rtJoined + 5;
	const a = bAmHost && n && e.bJoined && i < Date.now() / 1000;
	K(i * 1000);
	return a;
}
function U(e, t) {
	const r = x(e);
	if (e.bJoined) {
		if (t && r) {
			return (0, Localize)("#RemotePlay_PlayerNoInputWarning_Concise");
		} else {
			return undefined;
		}
	} else {
		return (0, Localize)("#RemotePlay_Player_Invited");
	}
}
const W = PA((e) => {
	const { player, quickaccess } = e;
	const { friend } = player;
	const { bAmHost } = De();
	const o = friend.persona.avatar_url_full;
	const l = friend.accountid === s.xm.FriendStore.self.accountid;
	const c = bAmHost && !l;
	const d = bAmHost && !l && player.flNetworkDuration !== undefined;
	const p = () =>
		player.playerID.guestid
			? s.xm.RemotePlayStore.CancelGuestInviteAndSession(
					player.playerID.steamid,
					player.playerID.guestid,
				)
			: s.xm.RemotePlayStore.CancelInviteAndSession(friend.accountid);
	const g = (e) => EP(e, friend.GetCommunityProfileURL());
	const h = quickaccess
		? (0, Localize)("#RemotePlay_CancelInvite")
		: (0, Localize)("#Button_Cancel");
	const C = player.bJoined ? (0, Localize)("#RemotePlay_Kick") : h;
	const _ = z(player);
	const f = U(player, quickaccess);
	const y = J(player);
	return (
		<Te
			quickaccess={quickaccess}
			icon={
				<Ge_1 src={o} onClick={quickaccess || g} className={A.PersonaAvatar} />
			}
			statusIcon={
				d && (
					<div
						title={(0, Localize)("#Tooltip_RemotePlay_ConnectionQuality")}
						style={{
							display: "flex",
						}}
					>
						<We
							className={A_1(A.PlayerBitRate, quickaccess && A.QuickAccess)}
							quality={Ve(player.flNetworkDuration)}
						/>
					</div>
				)
			}
			title={
				<div className={A.PersonaName}>
					<span onClick={quickaccess || g} className={A.PersonaNameName}>
						{_}
					</span>
					{player.bMobile && <Ue />}
				</div>
			}
			volumeControls={<Se_1 player={player} />}
			statusText={f}
			desktopButtons={c && <Ke_1 onClick={p}>{C}</Ke_1>}
			onSecondaryButton={c ? p : undefined}
			onSecondaryActionDescription={c ? C : undefined}
			playerControls={
				(!quickaccess || l || l || player.bJoined) && (
					<$ player={player} quickaccess={quickaccess} />
				)
			}
			contextMenu={
				<w.tz label={_}>
					<w.kt onSelected={g}>{(0, Localize)("#RemotePlay_ShowProfile")}</w.kt>
					{c && <w.kt onSelected={p}>{C}</w.kt>}
					{y.length > 0 && <w.K5 />}
					{y}
				</w.tz>
			}
		/>
	);
});
const V = PA((e) => {
	const { player, quickaccess } = e;
	const { bAmHost } = De();
	const a = tp(player.strAvatarHash, "full");
	const o = bAmHost;
	const l = bAmHost && player.flNetworkDuration !== undefined;
	const c = () =>
		s.xm.RemotePlayStore.CancelGuestInviteAndSession(
			player.playerID.steamid,
			player.playerID.guestid,
		);
	const m = z(player);
	const d = (
		<div className={A.GuestTitle}>
			{m}
			{player.bMobile && <Ue />}
		</div>
	);
	const p = U(player, quickaccess);
	const g = J(player);
	return (
		<Te
			quickaccess={quickaccess}
			icon={<Ge_1 src={a} />}
			statusIcon={
				l && (
					<div
						title={
							quickaccess ||
							(0, Localize)("#Tooltip_RemotePlay_ConnectionQuality")
						}
						style={{
							display: "flex",
						}}
					>
						<We
							className={A.PlayerBitRate}
							quality={Ve(player.flNetworkDuration)}
						/>
					</div>
				)
			}
			statusText={p}
			title={d}
			desktopButtons={
				o && <Ke_1 onClick={c}>{(0, Localize)("#RemotePlay_Kick")}</Ke_1>
			}
			onSecondaryButton={o ? c : undefined}
			onSecondaryActionDescription={(0, Localize)("#RemotePlay_Kick")}
			playerControls={
				(!quickaccess || player.bJoined) && (
					<$ player={player} quickaccess={quickaccess} />
				)
			}
			contextMenu={
				(o || g.length > 0) && (
					<w.tz label={m}>
						{o && (
							<w.kt onSelected={c}>{(0, Localize)("#RemotePlay_Kick")}</w.kt>
						)}
						{g.length > 0 && <w.K5 />}
						{g}
					</w.tz>
				)
			}
		/>
	);
});
const H = PA((e) => {
	const { player, quickaccess } = e;
	const [i, a] = Ne();
	const o = () => {
		s.xm.RemotePlayStore.CopyLink(player.playerID.guestid);
		a();
	};
	const c = () => {
		s.xm.RemotePlayStore.CancelGuestInviteAndSession(
			player.playerID.steamid,
			player.playerID.guestid,
		);
	};
	const m = z(player);
	return (
		<Te
			quickaccess={quickaccess}
			icon={quickaccess ? <l.User /> : <J_1 />}
			title={m}
			clipboardStatus={(0, Localize)(
				i ? "#RemotePlay_Guest_CopyHint_Copied" : "#RemotePlay_Guest_CopyHint",
			)}
			desktopButtons={
				<Ke_1
					onClick={(e) => {
						e.stopPropagation();
						c();
					}}
				>
					{(0, Localize)("#Button_Cancel")}
				</Ke_1>
			}
			className={A.InvitedGuestBox}
			onClick={o}
			onClickDescription={(0, Localize)("#RemotePlay_LinkCopy_Button")}
			contextMenu={
				<w.tz label={m}>
					<w.kt onSelected={o}>
						{(0, Localize)("#RemotePlay_LinkCopy_Button")}
					</w.kt>
					<w.kt onSelected={c}>
						{(0, Localize)("#RemotePlay_CancelInvite")}
					</w.kt>
				</w.tz>
			}
			connectURL={player.strConnectUrl}
		/>
	);
});
function J_1() {
	return (
		<Pe_1 label={(0, Localize)("#RemotePlay_CopyLink_ButtonText")}>
			<Le color="white" />
		</Pe_1>
	);
}
const Q_1 = (e) => {
	const { bAmHost } = De();
	if (bAmHost) {
		return null;
	} else {
		return (
			<Ke_1
				style="dark"
				onClick={() => s.xm.RemotePlayStore.StopRemotePlay()}
				className={A.HeaderButton}
			>
				{(0, Localize)("#RemotePlay_LeaveStream")}
			</Ke_1>
		);
	}
};
function Q(e) {
	switch (e) {
		case 3: {
			return (0, Localize)("#RemotePlay_ClientQualityName_Beautiful");
		}
		case 2: {
			return (0, Localize)("#RemotePlay_ClientQualityName_Balanced");
		}
		case 1: {
			return (0, Localize)("#RemotePlay_ClientQualityName_Fast");
		}
		default: {
			return (0, Localize)("#RemotePlay_ClientQualityName_Automatic");
		}
	}
}
const Z = PA(() => {
	const e = s.xm.RemotePlayStore.client_streaming_quality;
	const t = (0, Localize)("#RemotePlay_ClientQuality_WithValue", Q(e));
	const r = s.xm.RemotePlayStore.GetSessionForPlayer({
		steamid: s.xm.FriendStore.self.steamid64,
		guestid: 0,
	});
	const i = r && r.flNetworkDuration !== undefined;
	const { hostPlayer } = De();
	if (hostPlayer) {
		return (
			<div className={A.ClientQualityContainer}>
				{i && (
					<We className={A.HeaderBitrate} quality={Ve(r.flNetworkDuration)} />
				)}
				<Ke_1
					onClick={() => {
						let e = s.xm.RemotePlayStore.client_streaming_quality;
						e += 1;
						if (e == 0) {
							e = 1;
						}
						if (e > 3) {
							e = s.xm.RemotePlayStore.is_host ? -1 : 1;
						}
						s.xm.RemotePlayStore.SetClientStreamingQuality(e);
					}}
					style="dark"
					className={A.HeaderButton}
				>
					{t}
				</Ke_1>
			</div>
		);
	} else {
		return null;
	}
});
const Y = PA((e) => {
	const t = s.xm.RemotePlayStore.client_streaming_quality;
	const { bAmHost } = De();
	const i = [
		{
			data: 1,
			label: Q(1),
		},
		{
			data: 2,
			label: Q(2),
		},
		{
			data: 3,
			label: Q(3),
		},
	];
	if (bAmHost) {
		i.unshift({
			data: -1,
			label: Q(-1),
		});
	}
	const a = s.xm.RemotePlayStore.GetSessionForPlayer({
		steamid: s.xm.FriendStore.self.steamid64,
		guestid: 0,
	});
	const l = a && a.flNetworkDuration !== undefined;
	const c = s.xm.RemotePlayStore.host_streaming_quality_override;
	const m = !bAmHost && c != -1;
	const p =
		s.xm.RemotePlayStore.in_session &&
		s.xm.RemotePlayStore.BHasJoinedPlayer() &&
		!m;
	return (
		<d.kn>
			<o.D0
				label={(0, Localize)("#RemotePlay_ClientQuality")}
				icon={
					l && (
						<We className={A.HeaderBitrate} quality={Ve(a.flNetworkDuration)} />
					)
				}
				childrenLayout="inline"
				bottomSeparator={e.bottomSeparator}
				description={
					m
						? (0, Localize)("#RemotePlay_ClientQuality_HostOverride")
						: undefined
				}
			>
				<o.ZU
					rgOptions={i}
					selectedOption={m ? c : t}
					onChange={(e) => {
						s.xm.RemotePlayStore.SetClientStreamingQuality(e.data);
					}}
					disabled={!p}
				/>
			</o.D0>
		</d.kn>
	);
});
function K(e) {
	const [t, setT] = useState(0);
	const i = () => setT((e) => e + 1);
	useEffect(() => {
		const t = Date.now();
		if (t < e) {
			const r = window.setTimeout(i, e - t);
			return () => window.clearTimeout(r);
		}
		return () => {};
	}, [e]);
}
function X(e) {
	const { bAmHost } = De();
	const r = e.playerID.steamid === s.xm.FriendStore.self.steamid64;
	const i = bAmHost && !r;
	const a = e.playerID.steamid === s.xm.FriendStore.self.steamid64;
	const o = s.xm.RemotePlayStore.GetControllerSlotsForPlayer(e.playerID);
	return {
		fnToggleKeyboard: n.useCallback(() => {
			if (i) {
				s.xm.RemotePlayStore.SetPerUserKeyboardInputEnabled(
					e.playerID,
					!e.bKeyboardEnabled,
				);
			}
		}, [i, e]),
		fnToggleMouse: n.useCallback(() => {
			if (i) {
				s.xm.RemotePlayStore.SetPerUserMouseInputEnabled(
					e.playerID,
					!e.bMouseEnabled,
				);
			}
		}, [i, e]),
		fnTogglePlayersControllers: n.useCallback(() => {
			if (i) {
				o.forEach((e) => s.xm.RemotePlayStore.TriggerControllerRumble(e));
				s.xm.RemotePlayStore.SetPerUserControllerInputEnabled(
					e.playerID,
					!e.bControllerEnabled,
				);
			}
		}, [i, e.bControllerEnabled, e.playerID, o]),
		fnIdentifyController: n.useCallback(
			(e) => {
				if (a) {
					s.xm.RemotePlayStore.TriggerControllerRumble(e);
				}
			},
			[a],
		),
	};
}
function J(e) {
	const { fnToggleKeyboard, fnToggleMouse, fnTogglePlayersControllers } = X(e);
	const { bAmHost } = De();
	const o = e.friend?.accountid === s.xm.FriendStore.self.accountid;
	if (!bAmHost || o || o || !e.bJoined) {
		return [];
	}
	const l = [];
	if (fnToggleKeyboard != null) {
		l.push(
			<w.kt key="kb" onSelected={fnToggleKeyboard}>
				{e.bKeyboardEnabled
					? (0, Localize)("#Tooltip_RemotePlay_DisableKeyboard")
					: (0, Localize)("#Tooltip_RemotePlay_EnableKeyboard")}
			</w.kt>,
		);
	}
	if (fnToggleMouse != null) {
		l.push(
			<w.kt key="mouse" onSelected={fnToggleMouse}>
				{e.bMouseEnabled
					? (0, Localize)("#Tooltip_RemotePlay_DisableMouse")
					: (0, Localize)("#Tooltip_RemotePlay_EnableMouse")}
			</w.kt>,
		);
	}
	if (fnTogglePlayersControllers != null) {
		l.push(
			<w.kt key="controllers" onSelected={fnTogglePlayersControllers}>
				{e.bControllerEnabled
					? (0, Localize)("#Tooltip_RemotePlay_DisableControllers_Standalone")
					: (0, Localize)("#Tooltip_RemotePlay_EnableControllers_Standalone")}
			</w.kt>,
		);
	}
	return l;
}
const $ = PA((e) => {
	const { player, quickaccess } = e;
	const {
		fnToggleKeyboard,
		fnToggleMouse,
		fnTogglePlayersControllers,
		fnIdentifyController,
	} = X(player);
	const d = x(player);
	const p = s.xm.RemotePlayStore.GetControllerSlotsForPlayer(player.playerID);
	const g = fnTogglePlayersControllers ?? fnIdentifyController;
	return (
		<div
			className={A_1(
				quickaccess && A.QuickAccessPlayerControlsContainer,
				A.PlayerControlsContainer,
			)}
		>
			<div className={A.PlayerControls}>
				<Ae_1
					enabled={player.bKeyboardEnabled}
					onClick={fnToggleKeyboard}
					icon={quickaccess ? l.Keyboard : Oe}
					title={
						quickaccess || te(player.bKeyboardEnabled, fnToggleKeyboard != null)
					}
					lastUsedTime={player.nKeyboardUsedTime}
					quickaccess={quickaccess}
					className={A.Keyboard}
				/>
				<Ae_1
					enabled={player.bMouseEnabled}
					onClick={fnToggleMouse}
					icon={quickaccess ? l.Mouse : Ge}
					title={quickaccess || ee(player.bMouseEnabled, fnToggleMouse != null)}
					lastUsedTime={player.nMouseUsedTime}
					quickaccess={quickaccess}
					className={A.Mouse}
				/>
				{p.map((e, i) => (
					<Ie_1
						key={`${e}_${i}`}
						enabled={player.bControllerEnabled}
						onClick={() => g(e)}
						slot={e}
						title={
							quickaccess ||
							re(player.bControllerEnabled, fnTogglePlayersControllers != null)
						}
						interactable={g != null}
						lastUsedTime={player.nControllerUsedTime}
						quickaccess={quickaccess}
					/>
				))}
				{d && !quickaccess && (
					<div
						className={A.NoInputWarning}
						title={(0, Localize)("#RemotePlay_PlayerNoInputWarning")}
					>
						<Xe_1 className={A.WarningIcon} />
					</div>
				)}
			</div>
		</div>
	);
});
function ee(e, t) {
	if (t) {
		if (e) {
			return (0, Localize)("#Tooltip_RemotePlay_DisableMouse");
		} else {
			return (0, Localize)("#Tooltip_RemotePlay_EnableMouse");
		}
	} else if (e) {
		return (0, Localize)("#Tooltip_RemotePlay_MouseEnabled");
	} else {
		return (0, Localize)("#Tooltip_RemotePlay_MouseDisabled");
	}
}
function te(e, t) {
	if (t) {
		if (e) {
			return (0, Localize)("#Tooltip_RemotePlay_DisableKeyboard");
		} else {
			return (0, Localize)("#Tooltip_RemotePlay_EnableKeyboard");
		}
	} else if (e) {
		return (0, Localize)("#Tooltip_RemotePlay_KeyboardEnabled");
	} else {
		return (0, Localize)("#Tooltip_RemotePlay_KeyboardDisabled");
	}
}
function re(e, t) {
	if (t) {
		if (e) {
			return (0, Localize)("#Tooltip_RemotePlay_DisableControllers");
		} else {
			return (0, Localize)("#Tooltip_RemotePlay_EnableControllers");
		}
	} else if (e) {
		return (0, Localize)("#Tooltip_RemotePlay_ControllersEnabled");
	} else {
		return (0, Localize)("#Tooltip_RemotePlay_ControllersDisabled");
	}
}
function Ne_1(e) {
	const { controllerType, mobile, className } = e;
	if (mobile) {
		return <l.Mobile className={className} />;
	} else {
		return (
			<l.ControllerType controllerType={controllerType} className={className} />
		);
	}
}
function Ie_1(e) {
	const {
		slot,
		enabled,
		onClick,
		title,
		interactable,
		lastUsedTime,
		quickaccess,
	} = e;
	const d = slot < s.xm.RemotePlayStore.priority_controller_slot_count;
	const p = lastUsedTime + 1000;
	const g = p > Date.now();
	K(p);
	const h = Se(slot);
	const { bAmHost } = De();
	const f = !quickaccess && bAmHost;
	const b = vJ(() => s.xm.RemotePlayStore.GetControllerType(slot), [slot], 0);
	const y = (
		<div
			className={A_1(
				A.PlayerController,
				quickaccess && A.QuickAccessPlayerController,
				enabled && A.Enabled,
				!quickaccess && interactable && A.InteractableController,
				f && A.Grabbable,
			)}
			onClick={onClick}
			title={quickaccess || title}
		>
			<div
				className={A_1(A.PlayerControllerNumber, !d && A.Hidden)}
				style={{
					backgroundColor: je(slot),
				}}
			>
				{slot + 1}
			</div>
			<l.ControllerType
				className={A_1(A.PlayerControllerIcon, g && A.Wiggle)}
				controllerType={b}
			/>
		</div>
	);
	if (!bAmHost || quickaccess) {
		return y;
	} else {
		return <_.T {...h}>{y}</_.T>;
	}
}
function Ae_1(e) {
	const {
		enabled,
		onClick,
		icon,
		title,
		lastUsedTime,
		className,
		quickaccess,
	} = e;
	const c = lastUsedTime + 1000;
	const u = c > Date.now();
	K(c);
	const D = icon;
	const p = (
		<D
			className={A_1(
				A.PlayerControl,
				quickaccess && A.QuickAccess,
				enabled ? A.ControlEnabled : A.ControlDisabled,
				u && A.Wiggle,
			)}
		/>
	);
	const g = !quickaccess && onClick != null;
	return (
		<div
			onClick={g ? onClick : undefined}
			className={A_1(
				className,
				g && A.InteractableControl,
				quickaccess && A.QuickAccessControlIcon,
			)}
			title={quickaccess || title}
		>
			{p}
		</div>
	);
}
const Se_1 = PA((e) => {
	if (e.player.playerID.steamid === s.xm.FriendStore.self.steamid64) {
		return <Le_1 {...e} />;
	} else {
		return <Oe_1 {...e} />;
	}
});
const Oe_1 = PA((e) => {
	const { player } = e;
	const r = player?.friend?.accountid;
	if (
		!s.xm.VoiceStore.IsAnyVoiceActive() ||
		!r ||
		!r ||
		!s.xm.VoiceStore.IsVoiceActiveForFriend(r)
	) {
		return null;
	}
	let i = s.xm.VoiceStore.ConvertGainValueToSliderValue(
		s.xm.VoiceStore.GetPerUserGainLevel(r),
		p.F$.k_MaxPerUserGainMultiplier,
	);
	s.xm.VoiceStore.GetPerUserMuting(r);
	return (
		<Fe
			min={0}
			max={100}
			onChange={(e) =>
				s.xm.VoiceStore.SetPerUserGainLevel(
					r,
					s.xm.VoiceStore.ConvertSliderToGainValue(
						e,
						p.F$.k_MaxPerUserGainMultiplier,
					),
				)
			}
			value={i}
			icon={Pe}
			onIconClick={() =>
				s.xm.VoiceStore.SetPerUserMuting(
					r,
					!s.xm.VoiceStore.GetPerUserMuting(r),
				)
			}
		/>
	);
});
const Le_1 = PA((e) => {
	if (!s.xm.VoiceStore.IsAnyVoiceActive()) {
		return null;
	}
	return (
		<Fe
			min={0}
			max={100}
			onChange={(e) =>
				s.xm.VoiceStore.SetVoiceInputGain(
					s.xm.VoiceStore.ConvertSliderToGainValue(
						e,
						p.F$.k_MaxInputOutputGainValue,
					),
				)
			}
			value={s.xm.VoiceStore.ConvertGainValueToSliderValue(
				s.xm.VoiceStore.GetVoiceInputGain(),
				p.F$.k_MaxInputOutputGainValue,
			)}
			icon={({ className }) => (
				<g.tmR className={A_1(className, A.MicFillOverride)} />
			)}
			onIconClick={() => {
				if (s.xm.VoiceStore.IsMicMuted() && s.xm.VoiceStore.IsOutputMuted()) {
					s.xm.VoiceStore.ToggleOutputMuting();
				}
				s.xm.VoiceStore.ToggleMicMuting();
			}}
		/>
	);
});
async function ce(e) {
	try {
		return s.xm.RemotePlayStore.CreateGuestInviteAndSession(
			s.xm.FriendStore.self.persona.m_gameid,
			e,
		);
	} catch (e) {
		console.error(`RemotePlayStore.CreateGuestInviteAndCopyLink caught: ${e}`);
		throw e;
	}
}
function Me_1(e) {
	const t = useContext(f.QO);
	return (
		<Te
			quickaccess={false}
			icon={<De_1 />}
			title={(0, Localize)("#RemotePlay_InviteFriend_Verbose")}
			description={(0, Localize)("#RemotePlay_InviteFriend_ShortDescription")}
			className={A.AddGuestBox}
			onClick={(e) => Je(t, GetOwningWindowForEvent(e))}
		/>
	);
}
function Ue_1(e) {
	return (
		<Te
			quickaccess={false}
			icon={<Ae />}
			title={(0, Localize)("#RemotePlay_InviteGuest_Verbose")}
			description={(0, Localize)("#RemotePlay_LinkCopy_ShortDescription")}
			className={A.AddGuestBox}
			onClick={(e) => ce(CO(e))}
		/>
	);
}
function De_1() {
	return (
		<Pe_1 label={(0, Localize)("#RemotePlay_AddGuest_ButtonText")}>
			<svg width="19" height="19" viewBox="0 0 19 19">
				<path
					d="M15.9747 12.5368H12.5368V15.9976C12.5368 17.6707 11.1846 19.0229 9.51146 19.0229C7.83836 19.0229 6.48613 17.6707 6.48613 15.9976V12.5368H3.02533C1.35223 12.5368 0 11.1846 0 9.51146C0 7.83836 1.35223 6.48613 3.02533 6.48613H6.48613V3.02533C6.48613 1.35223 7.83836 0 9.51146 0C11.1846 0 12.5368 1.35223 12.5368 3.02533V6.48613H15.9976C17.6707 6.48613 19.0229 7.83836 19.0229 9.51146C19 11.1846 17.6478 12.5368 15.9747 12.5368Z"
					fill="#F9FDFF"
				/>
			</svg>
		</Pe_1>
	);
}
function Ae() {
	return (
		<Pe_1 label={(0, Localize)("#RemotePlay_AddGuest_ButtonText")}>
			<Le color="white" />
		</Pe_1>
	);
}
function Pe_1(e) {
	const { onClick, children, label } = e;
	const [a, s] = Ne();
	return (
		<div
			className={A.MediaButton}
			onClick={() => {
				s();
				if (onClick) {
					onClick();
				}
			}}
		>
			<div className={A_1(A.ButtonContent, a && A.RecentlyInteracted)}>
				{children}
				<div className={A.MediaButtonLabel}>{label}</div>
			</div>
		</div>
	);
}
function Ge_1(e) {
	const { className, ...r } = e;
	return <img className={A_1(A.MediaImage, className)} {...r} />;
}
const He_1 = PA((e) => (
	<o.wi className={A.Footer}>
		<Ve_1
			title={(0, Localize)("#RemotePlay_GameSettings")}
			className={A.NoMarginTop}
		>
			<Re className={A.GameSettingsBox}>
				<Ce />
				{e.showVolume && <Be />}
			</Re>
		</Ve_1>
	</o.wi>
));
const Ce = PA(() => {
	const { bAmHost, hostPlayer } = De();
	const r = [];
	for (
		let e = 0;
		e < s.xm.RemotePlayStore.priority_controller_slot_count;
		e++
	) {
		const i = qe(e, hostPlayer);
		r.push(<Fe_1 index={e} key={e} player={i} />);
	}
	return (
		<div className={A.ControllerDropSlotsContainer}>
			<div className={A.ControllerDropSlots}>
				{r}
				{bAmHost && (
					<div
						className={A.HowToHint}
						title={(0, Localize)("#Tooltip_RemotePlayControllerAssignments")}
					>
						?
					</div>
				)}
			</div>
			{bAmHost && <Ye_1 />}
		</div>
	);
});
const _e = PA(() => {
	const { bAmHost, hostPlayer } = De();
	const r = [];
	for (
		let e = 0;
		e < s.xm.RemotePlayStore.priority_controller_slot_count;
		e++
	) {
		const i = qe(e, hostPlayer);
		r.push(<Be_1 index={e} key={e} player={i} />);
	}
	const i = useContext(f.QO);
	return (
		<d.kn>
			<o.D0
				label={(0, Localize)("#RemotePlay_Controllers")}
				childrenLayout="below"
				focusable={bAmHost}
				onClick={
					bAmHost
						? (e) =>
								((e, t) => {
									const r = (
										<Ke configContext={e}>{(e) => <Ye closeModal={e} />}</Ke>
									);
									pg(r, t);
								})(i, GetOwningWindowForEvent(e))
						: undefined
				}
				onOKActionDescription={
					bAmHost ? (0, Localize)("#RemotePlay_ChangeControllerOrder") : null
				}
			>
				<div className={A.QuickAccessControllerOrderContainer}>
					{r.map((e, t) => (
						<n.Fragment key={t}>
							{t > 0 && <div className={A.Divider} />}
							{e}
						</n.Fragment>
					))}
				</div>
			</o.D0>
		</d.kn>
	);
});
const Fe_1 = PA(({ index, player }) => {
	const r = !!player;
	let i;
	if (r) {
		const e = player.friend.accountid
			? player.friend.display_name
			: (0, Localize)("#RemotePlay_NumberedGuest", player.playerID.guestid);
		i = (0, Localize)("#Tooltip_RemotePlayOtherController", e);
	}
	const { bDragHovered, dropTargetProps } = ((e, t) => {
		const [r, setR] = useState(false);
		const a = Se(e);
		return {
			bDragHovered: r,
			dropTargetProps: {
				...(t ? a : {}),
				rgAcceptedTypes: ["rptcontroller"],
				fnDrop: (t) => {
					setR(false);
					if (we(t) && t.controllerID !== e) {
						s.xm.RemotePlayStore.SwapControllerSlots(t.controllerID, e);
						h.ZM.DragDropManager.SetDropConsumed();
					}
				},
				fnDragEnter: (t) =>
					we(t)
						? (t.controllerID !== e && setR(true), true)
						: (console.error("Drag event received invalid data type."), false),
				fnDragLeave: () => {
					setR(false);
				},
			},
		};
	})(index, r);
	const { bAmHost } = De();
	const c = A_1(A.ControllerDropSlot, {
		[A.WithMargin]: index > 0,
		[A.DragHovered]: bDragHovered,
		[A.CanGrab]: bAmHost && r,
		[A.Interactable]: bAmHost && r,
	});
	const d = vJ(
		() => s.xm.RemotePlayStore.GetControllerType(index),
		[index, player],
		0,
	);
	const p = (
		<div
			className={c}
			title={i}
			onClick={() => {
				if (
					player &&
					(player.playerID.steamid === s.xm.FriendStore.self.steamid64 ||
						bAmHost)
				) {
					s.xm.RemotePlayStore.TriggerControllerRumble(index);
				}
			}}
		>
			<Ne_1
				controllerType={d}
				mobile={player?.bMobile}
				className={A_1(A.Controller, r && A.SlotFilled)}
			/>
			<div
				className={A.DropSlotNumber}
				style={{
					backgroundColor: je(index),
				}}
			>
				{index + 1}
			</div>
		</div>
	);
	if (bAmHost) {
		return <_.T {...dropTargetProps}>{p}</_.T>;
	} else {
		return p;
	}
});
const Be_1 = PA((e) => {
	const { index, player } = e;
	const i = !!player;
	const a = vJ(
		() => s.xm.RemotePlayStore.GetControllerType(index),
		[index, player],
		0,
	);
	return (
		<div className={A_1(A.QuickAccessControllerOrderSlot, i && A.SlotFilled)}>
			<div
				className={A.DropSlotNumber}
				style={{
					backgroundColor: je(index),
				}}
			>
				{index + 1}
			</div>
			{i && (
				<Ne_1
					controllerType={a}
					mobile={player?.bMobile}
					className={A_1(A.Controller, i && A.SlotFilled)}
				/>
			)}
			{!i && <l.ControllerStatus none />}
		</div>
	);
});
const Ye_1 = PA(() => {
	const { bDragHovered, dropTargetProps } = (() => {
		const [e, setE] = useState(false);
		return {
			bDragHovered: e,
			dropTargetProps: {
				rgAcceptedTypes: ["rptcontroller"],
				fnDrop: (e) => {
					setE(false);
					if (
						we(e) &&
						e.controllerID < s.xm.RemotePlayStore.priority_controller_slot_count
					) {
						s.xm.RemotePlayStore.RemoveControllerFromPrioritySlot(
							e.controllerID,
						);
						h.ZM.DragDropManager.SetDropConsumed();
					}
				},
				fnDragEnter: (e) =>
					we(e)
						? (e.controllerID <
								s.xm.RemotePlayStore.priority_controller_slot_count &&
								setE(true),
							true)
						: (console.error("Drag event received invalid data type."), false),
				fnDragLeave: () => {
					setE(false);
				},
			},
		};
	})();
	return (
		<_.T {...dropTargetProps}>
			<div
				className={A_1(
					A.ControllerClearDropSlot,
					bDragHovered && A.DragHovered,
				)}
			>
				<g.X className={A.ClearDropSlotIcon} />
			</div>
		</_.T>
	);
});
function Se(e) {
	useRef();
	return {
		rgAcceptedTypes: [],
		onDragStart: (t) => {
			h.ZM.DragDropManager.StartDrag({
				type: "rptcontroller",
				controllerID: e,
			});
			t.dataTransfer.setDragImage(t.currentTarget, 0, 0);
		},
		onDragEnd: () => {
			h.ZM.DragDropManager.EndDrag();
		},
		draggable: true,
	};
}
function we(e) {
	return e && e.type === "rptcontroller";
}
const Be = PA(() => (
	<Fe
		min={0}
		max={100}
		onChange={(e) => s.xm.RemotePlayStore.SetGameVolume(e)}
		value={s.xm.RemotePlayStore.game_volume}
		icon={Pe}
		title={(0, Localize)("#RemotePlay_GameMasterVolume")}
	/>
));
PA(() => {
	const e = s.xm.RemotePlayStore.game_volume;
	return (
		<d.kn>
			<o.d3
				min={0}
				max={100}
				onChange={(e) => s.xm.RemotePlayStore.SetGameVolume(e)}
				value={s.xm.RemotePlayStore.game_volume}
				icon={<l.AudioVolumeIcon flVolume={e / 100} />}
				label={(0, Localize)("#RemotePlay_GameMasterVolume")}
				layout="inline"
			/>
		</d.kn>
	);
});
const Ve_1 = (e) => {
	const { title, children, className } = e;
	return (
		<div className={A_1(A.Section, className)}>
			<Ie>{title}</Ie>
			{n.Children.map(children, (e, t) => (
				<div className={t > 0 ? A.SectionItemMargin : undefined}>{e}</div>
			))}
		</div>
	);
};
const Ie = (e) => <div className={A.SectionTitle} {...e} />;
const Ee = (e) => {
	const {
		title,
		description,
		statusText,
		statusIcon,
		clipboardStatus,
		contextMenu,
		onClick,
		onClickDescription,
		onSecondaryButton,
		onSecondaryActionDescription,
		icon,
		connectURL,
		playerControls,
	} = e;
	const b = (e) => {
		if (contextMenu) {
			lX(contextMenu, e);
		}
	};
	return (
		<d.kn>
			<o.D0
				label={
					<div
						className={A_1(
							A.QuickAccessMediaBoxTitleRow,
							clipboardStatus && A.Wrap,
						)}
					>
						<div className={A.QuickAccessMediaBoxTitle}>{title}</div>
						{statusIcon && <div>{statusIcon}</div>}
						{clipboardStatus && (
							<div className={A.QuickAccessClipboardStatus}>
								{clipboardStatus}
							</div>
						)}
					</div>
				}
				description={description}
				icon={<div className={A.QuickAccessIconContainer}>{icon}</div>}
				focusable
				onClick={b}
				onOKActionDescription={
					contextMenu ? (0, Localize)("#RemotePlay_Options") : null
				}
				onContextMenu={b}
				onMenuButton={b}
				childrenLayout="inline"
				verticalAlignment="top"
				onSecondaryButton={onSecondaryButton}
				onSecondaryActionDescription={onSecondaryActionDescription}
				onOptionsButton={onClick}
				onOptionsActionDescription={onClickDescription}
			>
				<div className={A.QuickAccessMediaBoxChildrenContainer}>
					{playerControls && (
						<div className={A.QuickAccessPlayerControlsContainer}>
							{playerControls}
						</div>
					)}
					{connectURL && (
						<div className={A.QuickAccessConnectURL}>{connectURL}</div>
					)}
					{statusText && (
						<div className={A.QuickAccessStatusText}>{statusText}</div>
					)}
				</div>
			</o.D0>
		</d.kn>
	);
};
const Me = (e) => {
	const {
		title,
		description,
		statusText,
		desktopButtons,
		icon,
		clipboardStatus,
		statusIcon,
		connectURL,
		className,
		onClick,
		contextMenu,
		volumeControls,
		playerControls,
	} = e;
	return (
		<Re
			className={A_1(A.MediaBox, className)}
			onClick={onClick}
			interactable={onClick != null}
			onContextMenu={(e) => {
				if (n.Children.count(contextMenu) > 0) {
					lX(contextMenu, e);
				}
			}}
		>
			<div className={A.Media}>{icon}</div>
			<div className={A.Content}>
				<div className={A.Top}>
					<div className={A.MediaBoxTitle}>
						<div className={A.TitleText}>{title}</div>
						{statusText && (
							<>
								<div className={A.TitleStatusDivider} />
								<div className={A.TitleStatus}>{statusText}</div>
							</>
						)}
						{clipboardStatus && (
							<>
								<div className={A.TitleStatusDivider} />
								<div className={A.TitleStatus}>{clipboardStatus}</div>
							</>
						)}
					</div>
					<div className={A.DesktopButtons}>
						{statusIcon}
						{desktopButtons}
					</div>
				</div>
				<div className={A.Bottom}>
					{description && (
						<div className={A.MediaBoxDescription}>{description}</div>
					)}
					{playerControls && (
						<div className={A.MediaBoxPlayerControls}>{playerControls}</div>
					)}
					{volumeControls && (
						<div className={A.MediaBoxVolumeControls}>{volumeControls}</div>
					)}
					{connectURL && (
						<div
							className={A.LinkContainer}
							onClick={(e) => e.stopPropagation()}
						>
							{connectURL}
						</div>
					)}
				</div>
			</div>
		</Re>
	);
};
const Te = (e) => {
	const { quickaccess, ...r } = e;
	if (quickaccess) {
		return <Ee {...r} />;
	} else {
		return <Me {...r} />;
	}
};
const Re = ({ className, interactable, ...r }) => (
	<div
		className={A_1(className, A.ContentBox, interactable && A.Interactable)}
		{...r}
	/>
);
function Ke_1(e) {
	const { children, className, onClick, style = "light" } = e;
	return (
		<div
			className={A_1(
				A.BoxButton,
				style === "light" ? A.Light : A.Dark,
				className,
			)}
			onClick={onClick}
		>
			{children}
		</div>
	);
}
function De() {
	const e = s.xm.RemotePlayStore;
	return q3(() => {
		let { host, is_host } = e;

		host ||= s.xm.FriendStore.self;
		const r = {
			playerID: {
				steamid: host?.steamid64 ?? "",
				guestid: 0,
			},
			friend: s.xm.FriendStore.GetPlayer(host?.accountid ?? 0),
			gameID: "0",
			bSession: true,
			bJoined: true,
			bMobile: false,
			bKeyboardEnabled: true,
			bMouseEnabled: true,
			bControllerEnabled: true,
			nKeyboardUsedTime: 0,
			nMouseUsedTime: 0,
			nControllerUsedTime: 0,
			bGuest: false,
		};
		const i = e.GetAllSessions().filter((e) => is_host || e.bJoined);
		return {
			bAmHost: is_host,
			hostPlayer: r,
			rgPlayers: i,
		};
	});
}
function Ne(e = 2000) {
	const [t, setT] = useState(false);
	const IRef = useRef(null);
	return [
		t,
		() => {
			setT(true);
			clearTimeout(IRef.current);
			IRef.current = window.setTimeout(() => setT(false), e);
		},
	];
}
function Fe(e) {
	const { icon, onIconClick, value, onChange, min, max, title } = e;
	const U_1 = icon;
	const d = !!onIconClick;
	return (
		<div className={A.SliderControlContainer} title={title}>
			<div className={A.SliderIconContainer} onClick={onIconClick}>
				<U_1 className={A_1(A.SliderIcon, d && value == 0 && A.Disabled)} />
			</div>
			<div className={A.SliderContainer}>
				<o.rP
					min={min}
					max={max}
					value={value}
					onChange={onChange}
					className={A.Slider}
				/>
			</div>
		</div>
	);
}
function Ge(e) {
	const { className, color } = e;
	return (
		<svg
			x="0px"
			y="0px"
			viewBox="0 0 720 720"
			className={className}
			style={{
				fill: "currentcolor",
				color: color,
			}}
		>
			<g>
				<path d="M443.5,118.5H375v179.6c53.16-2.78,102.48-20.26,144-48.41V194C519,152.3,485.2,118.5,443.5,118.5z" />
				<path d="M345,118.5h-68.5c-41.7,0-75.5,33.8-75.5,75.5v55.69c41.52,28.16,90.84,45.63,144,48.41V118.5z" />
				<path
					d={
						"M201,285.4v157.1c0,87.81,71.19,159,159,159h0c87.81,0,159-71.19,159-159V285.4\n\t\t\t\t\tc-47.69,28.1-102.19,43.1-159,43.1C303.19,328.5,248.69,313.5,201,285.4z"
					}
				/>
			</g>
		</svg>
	);
}
function Oe(e) {
	const { className, color } = e;
	return (
		<svg
			x="0px"
			y="0px"
			viewBox="0 0 720 720"
			className={className}
			style={{
				fill: "currentcolor",
				color: color,
			}}
		>
			<g>
				<path
					d={
						"M584.73,164.47H121.94c-55.71,0-100.87,45.16-100.87,100.87v146.51c0,55.71,45.16,100.87,100.87,100.87h462.79\n\t\t\t\tc55.71,0,100.87-45.16,100.87-100.87V265.34C685.6,209.63,640.44,164.47,584.73,164.47z M452.42,256.94\n\t\t\t\tc0-18.46,14.97-33.43,33.43-33.43h0c18.46,0,33.43,14.97,33.43,33.43v0c0,18.46-14.97,33.43-33.43,33.43h0\n\t\t\t\tC467.38,290.37,452.42,275.4,452.42,256.94L452.42,256.94z M442.1,305.16c18.46,0,33.43,14.97,33.43,33.43v0\n\t\t\t\tc0,18.46-14.97,33.43-33.43,33.43h0c-18.46,0-33.43-14.97-33.43-33.43v0C408.67,320.13,423.63,305.16,442.1,305.16L442.1,305.16z\n\t\t\t\tM364.92,256.94c0-18.46,14.97-33.43,33.43-33.43h0c18.46,0,33.43,14.97,33.43,33.43v0c0,18.46-14.97,33.43-33.43,33.43h0\n\t\t\t\tC379.88,290.37,364.92,275.4,364.92,256.94L364.92,256.94z M354.45,305.16c18.46,0,33.43,14.97,33.43,33.43v0\n\t\t\t\tc0,18.46-14.97,33.43-33.43,33.43h0c-18.46,0-33.43-14.97-33.43-33.43v0C321.02,320.13,335.99,305.16,354.45,305.16L354.45,305.16z\n\t\t\t\tM277.42,256.94c0-18.46,14.97-33.43,33.43-33.43h0c18.46,0,33.43,14.97,33.43,33.43v0c0,18.46-14.97,33.43-33.43,33.43h0\n\t\t\t\tC292.38,290.37,277.42,275.4,277.42,256.94L277.42,256.94z M266.81,305.16c18.46,0,33.43,14.97,33.43,33.43v0\n\t\t\t\tc0,18.46-14.97,33.43-33.43,33.43h0c-18.46,0-33.43-14.97-33.43-33.43v0C233.38,320.13,248.34,305.16,266.81,305.16L266.81,305.16z\n\t\t\t\tM189.92,256.94c0-18.46,14.97-33.43,33.43-33.43h0c18.46,0,33.43,14.97,33.43,33.43v0c0,18.46-14.97,33.43-33.43,33.43h0\n\t\t\t\tC204.88,290.37,189.92,275.4,189.92,256.94L189.92,256.94z M102.42,256.94c0-18.46,14.97-33.43,33.43-33.43h0\n\t\t\t\tc18.46,0,33.43,14.97,33.43,33.43v0c0,18.46-14.97,33.43-33.43,33.43h0C117.38,290.37,102.42,275.4,102.42,256.94L102.42,256.94z\n\t\t\t\tM166.76,420.25c0,18.46-14.97,33.43-33.43,33.43h0c-18.46,0-33.43-14.97-33.43-33.43v0c0-18.46,14.97-33.43,33.43-33.43h0\n\t\t\t\tC151.79,386.82,166.76,401.78,166.76,420.25L166.76,420.25z M212.59,338.59c0,18.46-14.97,33.43-33.43,33.43h0\n\t\t\t\tc-18.46,0-33.43-14.97-33.43-33.43v0c0-18.46,14.97-33.43,33.43-33.43h0C197.62,305.16,212.59,320.13,212.59,338.59L212.59,338.59z\n\t\t\t\tM498.64,420.25c0,18.46-14.97,33.43-33.43,33.43H250.09c-18.46,0-33.43-14.97-33.43-33.43v0c0-18.46,14.97-33.43,33.43-33.43\n\t\t\t\th215.12C483.67,386.82,498.64,401.78,498.64,420.25L498.64,420.25z M529.74,372.02c-18.46,0-33.43-14.97-33.43-33.43v0\n\t\t\t\tc0-18.46,14.97-33.43,33.43-33.43h0c18.46,0,33.43,14.97,33.43,33.43v0C563.17,357.06,548.21,372.02,529.74,372.02L529.74,372.02z\n\t\t\t\tM606.78,420.25c0,18.46-14.97,33.43-33.43,33.43h0c-18.46,0-33.43-14.97-33.43-33.43v0c0-18.46,14.97-33.43,33.43-33.43h0\n\t\t\t\tC591.81,386.82,606.78,401.78,606.78,420.25L606.78,420.25z M606.78,256.94c0,18.46-14.97,33.43-33.43,33.43h0\n\t\t\t\tc-18.46,0-33.43-14.97-33.43-33.43v0c0-18.46,14.97-33.43,33.43-33.43h0C591.81,223.51,606.78,238.48,606.78,256.94L606.78,256.94z"
					}
				/>
			</g>
		</svg>
	);
}
function Pe(e) {
	const { className, color } = e;
	return (
		<svg
			x="0px"
			y="0px"
			viewBox="0 0 720 720"
			className={className}
			style={{
				fill: "currentcolor",
				color: color,
			}}
		>
			<path
				d={
					"M189.54,272.79h-64.83c-21.35,0-38.66,17.31-38.66,38.66v97.09c0,21.35,17.31,38.66,38.66,38.66h64.83\n\t\t\t\tl137.79,77.33V195.46L189.54,272.79z"
				}
			/>
			<g>
				<path
					d={
						"M515.5,606.28c-5.35,0-10.69-2.14-14.63-6.36c-7.53-8.08-7.09-20.74,0.99-28.27\n\t\t\t\t\tc58.53-54.56,92.1-131.7,92.1-211.65s-33.57-157.09-92.1-211.65c-8.08-7.53-8.52-20.19-0.99-28.27\n\t\t\t\t\tc7.53-8.08,20.19-8.52,28.27-0.99c32.72,30.5,58.49,66.61,76.58,107.32c18.74,42.16,28.24,87.1,28.24,133.59\n\t\t\t\t\ts-9.5,91.43-28.24,133.59c-18.09,40.71-43.86,76.81-76.58,107.32C525.27,604.5,520.38,606.28,515.5,606.28z"
					}
				/>
				<path
					d={
						"M449.63,538.52c-5.42,0-10.82-2.19-14.76-6.5c-7.46-8.15-6.9-20.8,1.25-28.26\n\t\t\t\t\tc40.26-36.84,63.35-89.24,63.35-143.77c0-54.52-23.09-106.93-63.35-143.77c-8.15-7.46-8.71-20.11-1.25-28.26\n\t\t\t\t\tc7.46-8.15,20.11-8.71,28.26-1.25c23.8,21.78,42.56,47.69,55.76,77c13.66,30.35,20.59,62.75,20.59,96.28\n\t\t\t\t\tc0,33.53-6.93,65.92-20.59,96.28c-13.19,29.31-31.95,55.21-55.76,77C459.29,536.79,454.46,538.52,449.63,538.52z"
					}
				/>
				<path
					d={
						"M383.73,470.72c-5.58,0-11.13-2.32-15.08-6.85c-7.26-8.32-6.4-20.96,1.92-28.22\n\t\t\t\t\tC392.45,416.57,405,388.99,405,360c0-28.99-12.55-56.57-34.42-75.65c-8.32-7.26-9.18-19.9-1.92-28.22\n\t\t\t\t\tc7.26-8.32,19.9-9.19,28.22-1.92C427.46,280.89,445,319.45,445,360c0,40.55-17.54,79.11-48.13,105.79\n\t\t\t\t\tC393.08,469.1,388.4,470.72,383.73,470.72z"
					}
				/>
			</g>
		</svg>
	);
}
function Le(e) {
	const { className, color } = e;
	return (
		<svg
			width="19"
			height="19"
			viewBox="0 0 19 19"
			className={className}
			style={{
				fill: "currentcolor",
				color: color,
			}}
		>
			<path d="M14.8406 11.2028L17.5123 8.53059C19.4614 6.58196 19.4614 3.41057 17.5123 1.46194C15.5635 -0.487315 12.3923 -0.487315 10.4435 1.46194L6.58776 5.31766C4.63871 7.26629 4.63871 10.4377 6.58776 12.3863C6.87553 12.6743 7.1905 12.9184 7.52381 13.1212L9.58797 11.0569C9.19479 10.9628 8.82184 10.7645 8.51573 10.4586C7.62985 9.57268 7.62985 8.13108 8.51573 7.24542L12.3714 3.3897C13.2573 2.50383 14.6989 2.50383 15.5846 3.3897C16.4705 4.27557 16.4705 5.71696 15.5846 6.60283L14.4518 7.73579C14.9186 8.83438 15.0476 10.0426 14.8406 11.2028Z" />
			<path d="M4.13369 7.77151L1.46194 10.4435C-0.487315 12.3923 -0.487315 15.5635 1.46194 17.5123C3.41057 19.4614 6.58196 19.4614 8.5308 17.5123L12.3863 13.6566C14.3354 11.7078 14.3351 8.53658 12.3863 6.58795C12.0987 6.29997 11.7838 6.05584 11.4505 5.85303L9.38632 7.91739C9.77929 8.01163 10.1522 8.20959 10.4586 8.51571C11.3444 9.40158 11.3444 10.843 10.4586 11.7288L6.60262 15.5846C5.71675 16.4704 4.27536 16.4704 3.38949 15.5846C2.50361 14.6987 2.50361 13.2573 3.38949 12.3714L4.52244 11.2387C4.05547 10.1401 3.92645 8.93166 4.13369 7.77151Z" />
		</svg>
	);
}
export function Ov(e) {
	const { className, color } = e;
	return (
		<svg
			viewBox="0 0 24 14"
			className={className}
			style={{
				fill: "currentcolor",
				color: color,
			}}
		>
			<path d="M4.10365 8.93815C4.15279 8.97501 4.20193 9.00572 4.24494 9.04258C4.20193 9.00572 4.15279 8.96886 4.10365 8.93815Z" />
			<path d="M5.52267 10.5845L5.52837 10.5902C5.52267 10.5902 5.52267 10.5845 5.52267 10.5845Z" />
			<path d="M23.5218 9.9886L21.4209 2.00264C21.169 0.608173 19.492 -0.251853 17.6675 0.0737279C16.8443 0.221161 16.1379 0.589744 15.628 1.0689H9.95182C9.44194 0.583601 8.73549 0.221161 7.91233 0.0737279C6.09398 -0.251853 4.41079 0.608173 4.15893 2.00264L3.19447 5.6639C4.93295 6.19834 6.44414 7.26109 7.42703 8.74156L7.43317 8.74771C8.87678 9.27601 10.7381 9.59545 12.7653 9.59545C14.811 9.59545 16.6846 9.26987 18.1344 8.72928L19.2401 10.5783C19.9466 11.6902 20.6837 12.0711 21.7895 11.8684C22.8952 11.6779 23.6692 10.8302 23.5218 9.9886ZM9.56481 5.55947H8.63721V6.48707C8.63721 6.93551 8.27477 7.29795 7.82632 7.29795C7.37788 7.29795 7.01544 6.93551 7.01544 6.48707V5.55947H6.09398C5.64554 5.55947 5.2831 5.19703 5.2831 4.74859C5.2831 4.30014 5.64554 3.9377 6.09398 3.9377H7.02158V3.01625C7.02158 2.5678 7.38402 2.20536 7.83247 2.20536C8.28091 2.20536 8.64335 2.5678 8.64335 3.01625V3.94385H9.57095C10.0194 3.94385 10.3818 4.30629 10.3818 4.75473C10.3757 5.19703 10.0132 5.55947 9.56481 5.55947ZM15.8799 6.54235C15.327 6.54235 14.8724 6.09391 14.8785 5.54104C14.8785 4.98816 15.327 4.53358 15.8799 4.53358C16.4327 4.53358 16.8873 4.98202 16.8873 5.54104C16.8873 6.09391 16.4327 6.54235 15.8799 6.54235ZM17.7781 4.19571C17.2252 4.19571 16.7706 3.74727 16.7706 3.19439C16.7706 2.64152 17.219 2.18694 17.7781 2.18694C18.3309 2.18694 18.7855 2.63538 18.7855 3.19439C18.7855 3.74727 18.3309 4.19571 17.7781 4.19571ZM19.1725 6.88636C18.6197 6.85565 18.1958 6.37649 18.2265 5.82362C18.2572 5.27074 18.7364 4.84687 19.2892 4.87759C19.8421 4.9083 20.266 5.38746 20.2353 5.94034C20.2046 6.49321 19.7315 6.91708 19.1725 6.88636Z" />
			<path d="M1.81836 12.7038C1.77536 12.5933 1.70164 12.4827 1.6095 12.3905C1.51735 12.2984 1.41292 12.2308 1.2962 12.1817C1.2532 12.1633 1.20406 12.1633 1.16105 12.1571C1.08734 12.1387 1.01976 12.1141 0.946047 12.1141C0.866188 12.1141 0.792471 12.1387 0.712611 12.1571C0.66961 12.1694 0.626609 12.1633 0.589751 12.1817C0.516034 12.2124 0.448461 12.2677 0.380887 12.3168C0.350172 12.3414 0.307171 12.3537 0.276455 12.3844C0.18431 12.4765 0.116736 12.581 0.0675918 12.6977C-0.0675552 13.0356 1.83284e-05 13.441 0.276455 13.7174C0.368601 13.8096 0.473033 13.8772 0.589751 13.9263C0.638895 13.9447 0.694182 13.9447 0.743327 13.957C0.8109 13.9693 0.872331 13.9939 0.939904 13.9939C1.17948 13.9939 1.41906 13.9017 1.60335 13.7174C1.6955 13.6253 1.76307 13.5209 1.81222 13.4041C1.91051 13.1891 1.91051 12.9311 1.81836 12.7038Z" />
			<path d="M4.52137 12.4151C4.49065 12.2492 4.44151 12.0834 4.38622 11.9237C4.36165 11.8561 4.34322 11.7885 4.3125 11.7209C4.17121 11.3831 3.98692 11.0698 3.74734 10.7872C3.66749 10.6889 3.58763 10.6029 3.49548 10.5108C3.14533 10.1606 2.73374 9.88417 2.2853 9.69987C2.2423 9.68144 2.19315 9.66916 2.14401 9.65073C1.84914 9.54016 1.54199 9.46644 1.22255 9.43572C1.09969 9.42344 0.976832 9.41729 0.853971 9.41729C0.700395 9.41729 0.552962 9.47872 0.442387 9.5893C0.331812 9.69987 0.276524 9.84731 0.270381 10.0009C0.270381 10.1606 0.331812 10.3019 0.442387 10.4125C0.552962 10.523 0.700395 10.5845 0.853971 10.5845H0.860114C0.958402 10.5845 1.05055 10.6029 1.14884 10.6152C1.22255 10.6213 1.29013 10.6213 1.36384 10.6336C1.46828 10.652 1.56656 10.695 1.66485 10.7258C1.72014 10.7442 1.78157 10.7565 1.843 10.781C1.94129 10.8241 2.03344 10.8793 2.13172 10.9346C2.18087 10.9653 2.23616 10.9838 2.2853 11.0206C2.31602 11.0391 2.34059 11.0698 2.3713 11.0882C2.47573 11.1681 2.58631 11.2479 2.67846 11.3401C2.72146 11.3831 2.75831 11.4384 2.80132 11.4875C3.20676 11.9544 3.43405 12.538 3.43405 13.1584C3.43405 13.3181 3.50162 13.4656 3.60605 13.57C3.61834 13.5823 3.63677 13.5884 3.64906 13.6007C3.69206 13.6376 3.73506 13.6744 3.79035 13.6929C3.80263 13.699 3.81492 13.699 3.8272 13.699C3.88863 13.7236 3.95007 13.7359 4.01764 13.7359C4.07907 13.7359 4.13436 13.7174 4.1835 13.7051C4.20193 13.699 4.22036 13.699 4.23879 13.6929C4.30636 13.6621 4.37394 13.6191 4.42922 13.57C4.5398 13.4594 4.60123 13.3181 4.59509 13.1584C4.59509 12.8943 4.57051 12.6547 4.52137 12.4151Z" />
			<path d="M7.40247 12.3107C7.36561 12.0281 7.31032 11.7455 7.24275 11.4752C7.11374 10.9592 6.92331 10.4739 6.67759 10.0132C6.08786 8.91358 5.19706 8.0044 4.10974 7.39623C4.07903 7.3778 4.05446 7.35938 4.02374 7.34095C3.69202 7.1628 3.34191 7.01538 2.97948 6.89252C2.94262 6.88023 2.9119 6.86795 2.87504 6.85566C2.86276 6.84952 2.85661 6.84952 2.84433 6.84338C2.50646 6.73894 2.16245 6.66523 1.80615 6.61608C1.72629 6.6038 1.65258 6.58537 1.57272 6.57922C1.49286 6.57308 1.40686 6.57308 1.32085 6.56694C1.17956 6.5608 1.04442 6.54851 0.903126 6.54851C0.817124 6.54851 0.731121 6.56694 0.651261 6.59765C0.595974 6.62223 0.540687 6.65294 0.491542 6.69594C0.393254 6.7758 0.32568 6.88023 0.282679 7.00309C0.26425 7.06453 0.251964 7.12596 0.251964 7.19353C0.251964 7.28567 0.270393 7.36553 0.301108 7.44539C0.313394 7.46997 0.331823 7.49454 0.350252 7.51911C0.380968 7.56825 0.40554 7.6174 0.442398 7.65426C0.460827 7.67269 0.491542 7.68497 0.516114 7.7034C0.559116 7.73412 0.602117 7.77098 0.651261 7.79555C0.675834 7.80783 0.706549 7.80783 0.737264 7.81398C0.792552 7.82626 0.841696 7.84469 0.903126 7.84469C1.26557 7.84469 1.61572 7.88155 1.95973 7.94912C2.02116 7.96141 2.08259 7.97984 2.14402 7.99827C2.2546 8.02284 2.35903 8.04741 2.46346 8.07813C2.49417 8.08427 2.51875 8.09656 2.54332 8.10884C2.57403 8.12113 2.60475 8.13342 2.63546 8.1457C2.7399 8.18256 2.83819 8.21327 2.94262 8.25628C3.02248 8.29313 3.09619 8.32999 3.17605 8.36685C3.24977 8.40371 3.32963 8.43442 3.40335 8.47743C3.47706 8.52043 3.54464 8.56343 3.61835 8.60643C3.69207 8.64943 3.76578 8.69243 3.83336 8.74158C3.9255 8.80301 4.01151 8.87058 4.09751 8.93815C4.14665 8.97501 4.1958 9.00573 4.2388 9.04259C4.75482 9.46646 5.19097 9.99476 5.51041 10.5845L5.51655 10.5906C5.63327 10.7995 5.72542 11.0268 5.81142 11.2541C5.88514 11.4445 5.94657 11.6411 5.99571 11.8438C6.04485 12.0465 6.08171 12.2493 6.10628 12.4643C6.13086 12.6731 6.14929 12.882 6.14929 13.097C6.14929 13.2751 6.223 13.4349 6.33972 13.5516C6.45644 13.6683 6.61616 13.742 6.80045 13.742C6.88645 13.742 6.97245 13.7236 7.05231 13.6929C7.20589 13.6253 7.32875 13.5024 7.39632 13.3489C7.42704 13.269 7.44547 13.1891 7.44547 13.097C7.45161 12.8267 7.43318 12.5687 7.40247 12.3107Z" />
		</svg>
	);
}
function Xe_1(e) {
	const { className } = e;
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 23 24"
			fill="none"
			className={className}
		>
			<circle cx="11.3115" cy="12.247" r="11.3115" fill="#FFC82C" />
			<path
				d="M9.61534 5.7H13.0733L12.5223 14.649H10.1473L9.61534 5.7ZM11.3253 15.96C11.8067 15.96 12.193 16.1057 12.4843 16.397C12.7883 16.6883 12.9403 17.081 12.9403 17.575C12.9403 18.069 12.7883 18.468 12.4843 18.772C12.193 19.076 11.8067 19.228 11.3253 19.228C10.8567 19.228 10.4767 19.076 10.1853 18.772C9.89401 18.468 9.74834 18.069 9.74834 17.575C9.74834 17.081 9.88768 16.6883 10.1663 16.397C10.4577 16.1057 10.844 15.96 11.3253 15.96Z"
				fill="#1E2834"
			/>
		</svg>
	);
}
function Ue() {
	return <g.rfv className={A.IconMobile} />;
}
function We(e) {
	const { className, quality = 4 } = e;
	return (
		<svg
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			className={A_1(className, A[`BitRateQuality_${quality}`])}
		>
			<g>
				<rect x="0" y="49" width="13" height="15" fill="currentColor" />
				<rect
					x="18.5"
					y="36"
					width="10"
					height="26.5"
					fill={quality >= 2 ? "currentColor" : "transparent"}
					strokeWidth="3"
					stroke="currentColor"
				/>
				<rect
					x="35.5"
					y="22"
					width="10"
					height="40.5"
					fill={quality >= 3 ? "currentColor" : "transparent"}
					strokeWidth="3"
					stroke="currentColor"
				/>
				<rect
					x="52.5"
					y="1.5"
					width="10"
					height="61"
					fill={quality == 4 ? "currentColor" : "transparent"}
					strokeWidth="3"
					stroke="currentColor"
				/>
			</g>
		</svg>
	);
}
function Ve(e) {
	if (e > 200) {
		return 1;
	} else if (e > 66) {
		return 2;
	} else if (e > 33) {
		return 3;
	} else {
		return 4;
	}
}
const He = {
	0: "#0056D6",
	1: "#236C39",
	2: "#B72828",
	3: "#D0722D",
};
function je(e) {
	return He[e];
}
function qe(e, t) {
	const r = s.xm.RemotePlayStore.GetPlayerInControllerSlot(e);
	let n = r ? s.xm.RemotePlayStore.GetSessionForPlayer(r) : undefined;
	if (!n && r && t && r.steamid === t.playerID.steamid) {
		n = t;
	}
	return n;
}
function Qe() {
	const { hostPlayer, rgPlayers } = De();
	const r = new Map();
	const i = (() => {
		const [e, setE] = n.useState([]);
		n.useEffect(
			() =>
				BSharedJSContextHasMethod("Input.RegisterForControllerListChanges")
					? SteamClient.Input.RegisterForControllerListChanges(setE).unregister
					: () => {},
			[],
		);
		return e;
	})();
	for (const e of i) {
		const e_nXInputIndex = e.nXInputIndex;
		if (!r.has(e_nXInputIndex)) {
			r.set(e_nXInputIndex, {
				nSlot: e_nXInputIndex,
			});
		}
		r.get(e_nXInputIndex).details = e;
	}
	const a = [hostPlayer, ...rgPlayers];
	for (const e of a) {
		const t = s.xm.RemotePlayStore.GetControllerSlotsForPlayer(e.playerID);
		for (const n of t) {
			if (!r.has(n)) {
				r.set(n, {
					nSlot: n,
				});
			}
			r.get(n).player = e;
		}
	}
	const o = Array.from(r.values());
	const LRef = n.useRef([]);
	if (!o.some((e) => e.details == null || e.player == null)) {
		LRef.current = o;
	}
	return LRef.current;
}
function Ze(e) {
	return {
		nSlot: e.nSlot,
		details: e.details == null || {
			...e.details,
		},
		player: e.player == null || {
			...e.player,
		},
	};
}
const Ye = PA((e) => {
	const t = Qe();
	const [r, i] = uN(t, null, 400);
	let a = null;
	const o = [];
	for (
		let e = 0;
		e < s.xm.RemotePlayStore.priority_controller_slot_count;
		e++
	) {
		if (!r.find((t) => t.nSlot == e)) {
			if (a === null) {
				a = e;
			}
			o.push({
				label: (0, Localize)("#RemotePlay_ControllerSlot_Empty"),
				icon: <l.ControllerStatus none />,
				key: `empty-${e}`,
				index: e,
				displayedIndex: e + 1,
				indexColor: je(e),
				disabled: true,
			});
		}
	}
	for (const e of r) {
		const t = e.nSlot >= s.xm.RemotePlayStore.priority_controller_slot_count;
		const i = e.player?.bGuest
			? tp(e.player?.strAvatarHash, "full")
			: e.player?.friend?.persona.avatar_url_full;
		const l = e.details.eControllerType != 4;
		const c = !t && r.length > 1;
		const m = t && a !== null;
		let d;
		let p;
		if (c) {
			d = () => s.xm.RemotePlayStore.RemoveControllerFromPrioritySlot(e.nSlot);
			p = (0, Localize)("#RemotePlay_DeactivateController");
		} else if (m) {
			d = () => s.xm.RemotePlayStore.SwapControllerSlots(e.nSlot, a, false);
			p = (0, Localize)("#RemotePlay_ReactivateController");
		}
		o.push({
			label: (
				<>
					<div className={A.ReorderLabelName}>{z(e.player)}</div>
					{i && <Ge_1 src={i} className={A.ReorderLabelPersonaAvatar} />}
				</>
			),
			icon: (
				<Ne_1
					controllerType={e.details.eControllerType}
					mobile={e.player?.bMobile}
				/>
			),
			key: e.details.nControllerIndex.toString(),
			index: e.nSlot,
			displayedIndex: e.details.nXInputIndex + 1,
			indexColor: t || je(e.details.nXInputIndex),
			sectionName: t ? "inactive" : undefined,
			onOptionsButton: l
				? () => s.xm.RemotePlayStore.TriggerControllerRumble(e.nSlot)
				: undefined,
			onOptionsActionDescription: l
				? (0, Localize)("#RemotePlay_IdentifyController")
				: undefined,
			onSecondaryButton: d,
			onSecondaryActionDescription: p,
		});
	}
	o.sort((e, t) => e.index - t.index);
	return (
		<v.o
			title={(0, Localize)("#RemotePlay_ControllerOrder")}
			items={o}
			sections={[
				{
					name: "inactive",
					label: (0, Localize)("#RemotePlay_InactiveControllers"),
				},
			]}
			onMoveRelative={(e, t) => {
				const n = e + t;
				const a = s.xm.RemotePlayStore.SwapControllerSlots(e, n, false);
				if (a) {
					i(
						((e, t, r) => {
							const n = e.map(Ze);
							const i = n.find((e) => e.nSlot == t);
							const a = n.find((e) => e.nSlot == r);
							if (i && a) {
								const i_nSlot = i.nSlot;
								i.nSlot = a.nSlot;
								a.nSlot = i_nSlot;
							} else if (i) {
								i.nSlot = r;
							}
							if (i?.details) {
								i.details.nXInputIndex = i.nSlot;
							}
							if (a?.details) {
								a.details.nXInputIndex = a.nSlot;
							}
							return n;
						})(r, e, n),
					);
				}
				return a;
			}}
			closeModal={e.closeModal}
		/>
	);
});
function Ke(e) {
	return <f.ss {...e.configContext}>{e.children(e.closeModal)}</f.ss>;
}
function Xe(e) {
	const [t, setT] = n.useState([]);
	return (
		<c.x_ onEscKeypress={e.closeModal}>
			<o.U9
				onSubmit={() => {
					for (const r of t) {
						if (s.xm.FriendStore.self === r) {
							return;
						}
						s.xm.RemotePlayStore.CreateInviteAndSession(
							r.accountid,
							s.xm.FriendStore.self.persona.m_gameid,
							e.browserContext,
						);
					}
					if (e.closeModal) {
						e.closeModal();
					}
				}}
				className="friendsui-container"
			>
				<o.Y9>{(0, Localize)("#RemotePlay_InviteFriend_Verbose")}</o.Y9>
				<o.nB>
					<E.r
						label={(0, Localize)("#RemotePlay_FriendsToInvite")}
						eSort={2}
						rgPickedFriends={t}
						onChange={setT}
						autoFocus
					/>
				</o.nB>
				<o.wi>
					<o.CB onCancel={e.closeModal} />
				</o.wi>
			</o.U9>
		</c.x_>
	);
}
async function Je(e, t) {
	t = t ?? window;
	const r = _k(t);
	const i = "addfriend";
	if (!s.xm.RemotePlayStore.BDialogOpenInContext(r, i)) {
		const a = (
			<Ke configContext={e}>
				{(e) => <Xe closeModal={e} browserContext={r} />}
			</Ke>
		);
		const o = () => {
			s.xm.RemotePlayStore.DialogClosed(r, i);
		};
		const l = s.xm.IsGamepadUIActive() || 664;
		const m = s.xm.IsGamepadUIActive() || 580;
		const d = await pg(a, t, {
			fnOnClose: o,
			popupWidth: l,
			popupHeight: m,
			strTitle: (0, Localize)("#RemotePlay_InviteFriend_Verbose"),
			bHideMainWindowForPopouts: false,
			browserContext: r,
		});
		s.xm.RemotePlayStore.DialogOpened(r, () => d.Close(), i);
	}
}
