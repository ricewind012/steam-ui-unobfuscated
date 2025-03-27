import { Localize } from "../../actual_src/utils/localization.js";
import { LocalizeTimeRemaining } from "../../actual_src/utils/localization/datetime.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./35488.js";
import s, { w } from "./49455.js";
import c from "./10606.js";
import m from "./43599.js";
import u, { gt } from "./48289.js";
import { q3 } from "./90095.js";
import A from "./39241.js";
import p, { hf } from "./72476.js";
import { pg } from "./13869.js";
import { $2 } from "./96680.js";
function C(e) {
	const { playerDetails: t } = e;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"div",
			{
				className: A.Details,
			},
			t.playerName,
		),
		n.createElement(
			"div",
			{
				className: A.Details,
			},
			t.score,
		),
		n.createElement(
			"div",
			{
				className: A.Details,
			},
			LocalizeTimeRemaining(Math.floor(t.timePlayed)),
		),
	);
}
function _(e) {
	const { dialog: t } = e;
	const r = q3(() => t.playerList);
	if (r.length == 0) {
		return null;
	} else {
		return n.createElement(
			"div",
			{
				className: A.PlayersList,
			},
			n.createElement(
				"div",
				{
					className: A.Header,
				},
				(0, Localize)("#GameInfoDialog_PlayerName"),
			),
			n.createElement(
				"div",
				{
					className: A.Header,
				},
				(0, Localize)("#GameInfoDialog_PlayerScore"),
			),
			n.createElement(
				"div",
				{
					className: A.Header,
				},
				(0, Localize)("#GameInfoDialog_PlayerTime"),
			),
			r.map((e, t) =>
				n.createElement(C, {
					key: t,
					playerDetails: e,
				}),
			),
		);
	}
}
function f(e) {
	const { dialog: t } = e;
	const r = q3(() => t.gameServerItem);
	const a = q3(() => t.password);
	const s = q3(() => t.bInitialPingAttempt);
	const l = n.useCallback(
		(e) => {
			t.SetPassword(e.target.value);
		},
		[t],
	);
	if (!r || !r.ip) {
		return null;
	}
	let c = r.map;
	let m = null;
	if (r.maxPlayers > 0) {
		m = `${r.players}/${r.maxPlayers}`;
	}
	let u = null;
	if (r.bSecure !== undefined && r.bHadSuccessfulResponse) {
		u = (0, Localize)(
			r.bSecure
				? "#GameInfoDialog_ValveAntiCheat_Secure"
				: "#GameInfoDialog_ValveAntiCheat_NotSecure",
		);
	}
	let p = null;
	if (r.ping >= 0) {
		p = r.ping;
	} else if (!s) {
		p = n.createElement(
			"span",
			{
				className: A.PingFailed,
			},
			(0, Localize)("#GameInfoDialog_Latency_Failed"),
			" ",
		);
	}
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			i.D0,
			{
				label: (0, Localize)("#GameInfoDialog_ServerName"),
			},
			r.name,
		),
		n.createElement(
			i.D0,
			{
				label: (0, Localize)("#GameInfoDialog_ServerIPText"),
				focusable: true,
			},
			n.createElement(i.pd, {
				bShowCopyAction: true,
				value: `${r.ip}:${r.port}`,
				readOnly: true,
			}),
		),
		r.bPassword &&
			n.createElement(
				i.D0,
				{
					label: (0, Localize)("#GameInfoDialog_Password"),
					focusable: true,
				},
				n.createElement(i.pd, {
					type: "password",
					onChange: l,
					value: a,
					maxLength: 255,
				}),
			),
		n.createElement(
			i.D0,
			{
				label: (0, Localize)("#GameInfoDialog_Map"),
			},
			c,
		),
		n.createElement(
			i.D0,
			{
				label: (0, Localize)("#GameInfoDialog_Players"),
			},
			m,
		),
		r.botPlayers > 0 &&
			n.createElement(
				i.D0,
				{
					label: (0, Localize)("#GameInfoDialog_BotPlayers"),
				},
				r.botPlayers,
			),
		n.createElement(
			i.D0,
			{
				label: (0, Localize)("#GameInfoDialog_ValveAntiCheat"),
			},
			u,
		),
		n.createElement(
			i.D0,
			{
				label: (0, Localize)("#GameInfoDialog_Latency"),
			},
			p,
		),
	);
}
function b(e) {
	const { dialog: t } = e;
	const r = gt(t.steamid);
	const a = q3(() => r?.GetCurrentGameStatus());
	const s = q3(
		() =>
			t.userGameInfo?.gameText ||
			r?.GetCurrentGameName() ||
			r?.GetCurrentGameName() ||
			t.gameServerItem.name,
	);
	return n.createElement(
		i.a3,
		{
			className: A.GameInfoDialogContents,
		},
		n.createElement(
			i.D0,
			{
				label: (0, Localize)("#GameInfoDialog_GameName"),
			},
			s,
		),
		r &&
			n.createElement(
				i.D0,
				{
					label: (0, Localize)("#GameInfoDialog_Status"),
				},
				a,
			),
		n.createElement(f, {
			dialog: t,
		}),
		n.createElement(_, {
			dialog: t,
		}),
	);
}
function y(e) {
	const { dialog: t } = e;
	const r = q3(() => t.autoRetry);
	const a = hf();
	const s = [
		{
			label: (0, Localize)("#GameInfoDialog_AutoRetry_None"),
			data: "None",
		},
		{
			label: (0, Localize)("#GameInfoDialog_AutoRetry_Alert"),
			data: "AutoRetryAlert",
		},
		{
			label: (0, Localize)("#GameInfoDialog_AutoRetry_AutoJoin"),
			data: "AutoRetryJoin",
		},
	];
	let l = null;
	switch (r) {
		case "AutoRetryAlert": {
			l = (0, Localize)("#GameInfoDialog_AutoRetry_Alert_Desc");
			break;
		}
		case "AutoRetryJoin": {
			l = (0, Localize)("#GameInfoDialog_AutoRetry_AutoJoin_Desc");
		}
	}
	return n.createElement(i.Vb, {
		label: (0, Localize)("#GameInfoDialog_AutoRetry"),
		contextMenuPositionOptions: {
			bMatchWidth: !a,
		},
		description: l,
		rgOptions: s,
		selectedOption: r,
		onChange: (e) => (t.autoRetry = e.data),
	});
}
function S(e) {
	const { dialog: t } = e;
	const [r, l] = n.useState();
	const [p, C] = q3(() => {
		if (!t.steamid) {
			return [true, ""];
		}
		const e = u.O$.GetFriendState(t.steamid);
		return [e?.persona?.is_in_joinable_game ?? true, e.display_name];
	});
	const _ = q3(() => !t.gameServerItem?.bPassword || t.password.length != 0);
	const f = p && _;
	const S = q3(() => t.userGameInfo);
	const w = q3(() => t.connectAttemptStatus);
	const B = q3(() => t.bPingInProgress);
	$2();
	let [v, I] = n.useState();
	const E = n.useCallback(() => t.Connect(), [t]);
	const M = n.useCallback(() => {
		m.Xw.CloseGameInfoDialog(t.id);
	}, [t]);
	const T = () => {
		window.clearInterval(v);
		t.Refresh();
		let e = window.setInterval(() => t.Refresh(), 10000);
		I(e);
	};
	n.useEffect(() => {
		t.SetWindow(r);
	}, [t, r]);
	n.useEffect(() => {
		let e = window.setInterval(() => t.Refresh(), 10000);
		I(e);
	}, [t]);
	n.useEffect(() => () => window.clearInterval(v), [v]);
	n.useEffect(() => {
		if (r) {
			const e = (e) => {
				console.log(`Showing connect fail dialog - ${e}`);
				t.ClearConnectAttemptStatus();
				pg(
					n.createElement(c.KG, {
						strDescription: (0, Localize)(e),
					}),
					r,
				);
			};
			switch (w) {
				case undefined:
				case 0:
				case -1:
				case -2: {
					break;
				}
				case 1: {
					e("#GameInfoDialog_JoinError_VACBanned");
					break;
				}
				case 2: {
					e("#GameInfoDialog_JoinError_ServerFull");
					break;
				}
				case 3: {
					e("#GameInfoDialog_JoinError_ModNotInstalled");
					break;
				}
				case 4: {
					e("#GameInfoDialog_JoinError_AppNotFound");
					break;
				}
				case 5: {
					e("#GameInfoDialog_JoinError_NotInitialized");
					break;
				}
				case -3: {
					e("#GameInfoDialog_JoinError_AppNotFound");
				}
			}
		}
	});
	let R = "";
	if (C) {
		R = (0, Localize)("#GameInfoDialog_GameInfo", C);
	} else if (t.gameServerItem?.ip) {
		R = (0, Localize)(
			"#GameInfoDialog_GameInfo",
			`${t.gameServerItem.ip}:${t.gameServerItem.port}`,
		);
	} else {
		w(false, "Weird gameserver dialog with no friendState and no server IP?");
	}
	let k = false;
	let D = (0, Localize)("#GameInfoDialog_Refresh");
	if (B) {
		k = true;
		D = n.createElement("span", null, n.createElement(a.Spinner, null), " ", D);
	}
	return n.createElement(
		c.hM,
		{
			strTitle: R,
			onDismiss: M,
			popupWidth: 600,
			popupHeight: 700,
			refPopup: l,
		},
		n.createElement(i.Y9, null, R),
		n.createElement(
			i.nB,
			{
				className: A.DialogBody,
			},
			n.createElement(
				i.a3,
				null,
				n.createElement(b, {
					dialog: t,
				}),
			),
			f &&
				!S?.bNonSteamServer &&
				n.createElement(y, {
					dialog: t,
				}),
		),
		n.createElement(
			i.wi,
			null,
			f &&
				n.createElement(i.VQ, {
					onOK: E,
					strOKText: (0, Localize)("#GameInfoDialog_JoinGame"),
					onCancel: M,
					strCancelText: (0, Localize)("#GameInfoDialog_Close"),
					onUpdate: T,
					strUpdateText: D,
					bUpdateDisabled: k,
				}),
			!f &&
				n.createElement(i.CB, {
					onOK: T,
					strOKText: D,
					bOKDisabled: k,
					onCancel: M,
					strCancelText: (0, Localize)("#GameInfoDialog_Close"),
				}),
		),
	);
}
export function Y(e) {
	const t = $2();
	const r = t?.params.browserInfo.m_unPID;
	const i = q3(() => m.Xw.GetGameInfoDialogs(r));
	if (hf()) {
		return n.createElement(
			n.Fragment,
			null,
			i.map((e) =>
				n.createElement(S, {
					key: e.id,
					dialog: e,
				}),
			),
		);
	} else {
		return null;
	}
}
