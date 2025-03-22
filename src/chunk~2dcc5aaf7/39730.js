var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./46108.js");
var a = require(/*webcrack:missing*/ "./88750.js");
var s = require("./68292.js");
var o = require("./48289.js");
var l = require("./36464.js");
var c = require("./91720.js");
var m = require("./11484.js");
var u = require("./35488.js");
var d = require(/*webcrack:missing*/ "./31084.js");
var A = require(/*webcrack:missing*/ "./90765.js");
var p = require(/*webcrack:missing*/ "./69164.js");
var g = require(/*webcrack:missing*/ "./98995.js");
var h = require(/*webcrack:missing*/ "./90242.js");
var C = require(/*webcrack:missing*/ "./11131.js");
export function t$(e) {
	return n.createElement(
		n.Fragment,
		null,
		e.options.map(({ label: e, key: t, ...r }) =>
			n.createElement(
				v,
				{
					key: t,
					...r,
				},
				e,
			),
		),
	);
}
export function zu(e) {
	const {
		children: t,
		onSendToChat: r,
		chatSendForbiddenMessage: o,
		summoningElement: l,
	} = e;
	const c = (0, s.PR)().ChatStore().GetRecentChats();
	const { ownerWindow: u } = (0, C.R7)();
	n.useEffect(() => {
		const e = (e) => {
			switch (e.key) {
				case "ArrowLeft":
				case "ArrowRight":
					e.stopPropagation();
					e.preventDefault();
					return true;
			}
			return false;
		};
		u.document.addEventListener("keydown", e, true);
		return () => u.document.removeEventListener("keydown", e, true);
	}, [u]);
	const d = typeof o == "object" ? o?.strMessage : o;
	return n.createElement(
		a.tz,
		{
			className: m.ShareSheet,
		},
		n.createElement(
			"div",
			{
				className: m.ContainerGamepad,
			},
			typeof o == "object" &&
				o.bHeader &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						"div",
						{
							className: m.Warning,
						},
						o.strMessage,
					),
					n.createElement(sL, null),
				),
			t,
			n.createElement(sL, null),
			n.createElement(
				"div",
				{
					className: m.ChatLabel,
				},
				(0, i.we)("#ExportClip_ShareToChat"),
			),
			n.createElement(
				p.Z,
				{
					className: m.ChatRow,
				},
				c?.length > 0 &&
					c.slice(0, 3).map((e) =>
						n.createElement(b, {
							key: e.unique_id,
							chat: e,
							onSendToChat: r,
							disabled: !!d,
							tooltip: d,
						}),
					),
				n.createElement(S, {
					summoningElement: l,
					onSendToChat: r,
					disabled: !!d,
					tooltip: d,
				}),
			),
		),
	);
}
function b(e) {
	const { chat: t, onSendToChat: r, disabled: i, tooltip: o } = e;
	const l = t instanceof s.a$;
	const c = n.createElement(
		a.kt,
		{
			className: m.Chat,
			onSelected: () => r(t),
			disabled: i,
		},
		n.createElement(y, {
			chat: t,
			disabled: i,
		}),
		n.createElement(
			"div",
			{
				className: (0, A.A)(m.Name, l && m.ChatGroupName),
			},
			t.name,
		),
	);
	if (o) {
		return n.createElement(
			g.he,
			{
				toolTipContent: o,
			},
			c,
		);
	} else {
		return c;
	}
}
function y(e) {
	const { chat: t, disabled: r } = e;
	if (t instanceof s.sn) {
		const e = o.O$.GetFriendState(t.accountid_partner);
		return n.createElement(
			"div",
			{
				className: (0, A.A)(r && m.Disabled),
			},
			n.createElement(l.fH, {
				friend: e,
				size: "Medium",
				statusPosition: "none",
			}),
		);
	}
	return n.createElement(
		"div",
		{
			className: (0, A.A)(r && m.Disabled),
		},
		n.createElement(s.I, {
			group: t,
			small: true,
		}),
	);
}
function S(e) {
	const { summoningElement: t, onSendToChat: r, disabled: s, tooltip: o } = e;
	const l = n.createElement(
		a.kt,
		{
			className: m.AllChats,
			onSelected: () =>
				(0, d.lX)(
					n.createElement(w, {
						onSendToChat: r,
					}),
					t,
					{
						bOverlapHorizontal: true,
					},
				),
			disabled: s,
		},
		n.createElement(u.Chat, {
			className: m.AllChatsIcon,
		}),
		n.createElement(
			"div",
			{
				className: m.Name,
			},
			(0, i.we)("#ExportClip_AllChats"),
		),
	);
	if (o) {
		return n.createElement(
			g.he,
			{
				toolTipContent: o,
			},
			l,
		);
	} else {
		return l;
	}
}
function w(e) {
	const [t, r] = n.useState();
	const o = (
		t
			? (0, s.PR)().ChatStore().GetFilteredChats(t)
			: (0, s.PR)().ChatStore().GetRecentChats()
	).slice(0, 30);
	return n.createElement(
		a.tz,
		{
			className: m.AllChatsMenu,
		},
		n.createElement(h.BA, {
			type: "text",
			onChange: (e) => r(e.currentTarget.value),
			placeholder: (0, i.we)("#ExportClip_AllChats_SearchPlaceholder"),
		}),
		!o.length &&
			n.createElement(
				"div",
				{
					className: m.NoResults,
				},
				(0, i.we)("#ExportClip_AllChats_NoResults"),
			),
		o.map((t) =>
			n.createElement(b, {
				key: t.unique_id,
				chat: t,
				...e,
			}),
		),
	);
}
export function sL() {
	return n.createElement("div", {
		className: m.ChatDivider,
	});
}
function v(e) {
	const { icon: t, children: r, disabled: i, ...s } = e;
	const o = n.createElement(
		a.kt,
		{
			className: m.ShareMenuButton,
			disabled: !!i,
			...s,
		},
		t,
		n.createElement(
			"div",
			{
				className: m.ShareMenuLabel,
			},
			r,
		),
	);
	if (typeof i == "string") {
		return n.createElement(
			g.Gq,
			{
				toolTipContent: i,
			},
			o,
		);
	} else {
		return o;
	}
}
export function H5(e, t, r, n) {
	T(t, r).SetFileToUpload(e, {
		unAssociatedAppID: n,
	});
}
export function GJ(e, t, r, n, a, s) {
	const o = T(t, r);
	const l = s ?? (0, i.we)("#ClipUpload_Filename");
	o.StartFileExportToUpload(e, {
		displayFilename: l,
		unAssociatedAppID: a?.GetAppID(),
		onComplete: (e, t) => {
			(0, c.sT)(a, 1, n, t, e);
		},
	});
}
export function H6(e, t, r) {
	T(t, r).SendChatMessage(e);
}
function T(e, t) {
	const r = e instanceof s.sn ? e : e.GetDefaultChatRoom();
	return (0, s.PR)().UIStore().ShowAndOrActivateChat(t, r, true).GetChatView();
}
export function kM(e) {
	if (e) {
		return e.replace(/[\/\.,\\:|]/g, "-");
	} else {
		return e;
	}
}
