var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./35488.js");
var s = require(/*webcrack:missing*/ "./49455.js");
import { Localize } from "../../actual_src/utils/localization.js";
import { LocalizeTimeRemaining } from "../../actual_src/utils/localization/datetime.js";
var c = require("./10606.js");
var m = require("./43599.js");
var u = require("./48289.js");
var d = require(/*webcrack:missing*/ "./90095.js");
var A = require("./39241.js");
var p = require(/*webcrack:missing*/ "./72476.js");
var g = require("./13869.js");
var h = require("./96680.js");
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
	const r = (0, d.q3)(() => t.playerList);
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
	const r = (0, d.q3)(() => t.gameServerItem);
	const a = (0, d.q3)(() => t.password);
	const s = (0, d.q3)(() => t.bInitialPingAttempt);
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
		m = r.players + "/" + r.maxPlayers;
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
				value: r.ip + ":" + r.port,
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
	const r = (0, u.gt)(t.steamid);
	const a = (0, d.q3)(() => r?.GetCurrentGameStatus());
	const s = (0, d.q3)(
		() =>
			t.userGameInfo?.gameText ||
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
	const r = (0, d.q3)(() => t.autoRetry);
	const a = (0, p.hf)();
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
		case "AutoRetryAlert":
			l = (0, Localize)("#GameInfoDialog_AutoRetry_Alert_Desc");
			break;
		case "AutoRetryJoin":
			l = (0, Localize)("#GameInfoDialog_AutoRetry_AutoJoin_Desc");
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
	const [p, C] = (0, d.q3)(() => {
		if (!t.steamid) {
			return [true, ""];
		}
		const e = u.O$.GetFriendState(t.steamid);
		return [e?.persona?.is_in_joinable_game ?? true, e.display_name];
	});
	const _ = (0, d.q3)(
		() => !t.gameServerItem?.bPassword || t.password.length != 0,
	);
	const f = p && _;
	const S = (0, d.q3)(() => t.userGameInfo);
	const w = (0, d.q3)(() => t.connectAttemptStatus);
	const B = (0, d.q3)(() => t.bPingInProgress);
	(0, h.$2)();
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
				(0, g.pg)(
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
				case -2:
					break;
				case 1:
					e("#GameInfoDialog_JoinError_VACBanned");
					break;
				case 2:
					e("#GameInfoDialog_JoinError_ServerFull");
					break;
				case 3:
					e("#GameInfoDialog_JoinError_ModNotInstalled");
					break;
				case 4:
					e("#GameInfoDialog_JoinError_AppNotFound");
					break;
				case 5:
					e("#GameInfoDialog_JoinError_NotInitialized");
					break;
				case -3:
					e("#GameInfoDialog_JoinError_AppNotFound");
			}
		}
	});
	let R = "";
	if (C) {
		R = (0, Localize)("#GameInfoDialog_GameInfo", C);
	} else if (t.gameServerItem?.ip) {
		R = (0, Localize)(
			"#GameInfoDialog_GameInfo",
			t.gameServerItem.ip + ":" + t.gameServerItem.port,
		);
	} else {
		(0, s.w)(
			false,
			"Weird gameserver dialog with no friendState and no server IP?",
		);
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
	const t = (0, h.$2)();
	const r = t?.params.browserInfo.m_unPID;
	const i = (0, d.q3)(() => m.Xw.GetGameInfoDialogs(r));
	if ((0, p.hf)()) {
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
