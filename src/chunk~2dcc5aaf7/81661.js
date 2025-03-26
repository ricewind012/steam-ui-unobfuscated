var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require("./55116.js");
var s = require(/*webcrack:missing*/ "./69164.js");
import { Localize } from "../../actual_src/utils/localization.js";
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require("./89748.js");
var u = require("./32773.js");
var d = u;
var A = require("./87913.js");
var p = require("./43152.js");
var g = require(/*webcrack:missing*/ "./42318.js");
var h = require(/*webcrack:missing*/ "./4690.js");
var C = require("./77347.js");
var _ = require("./94746.js");
var f = require("./14982.js");
var b = require(/*webcrack:missing*/ "./88696.js");
var y = require("./57421.js");
var S = require("./50350.js");
const w = (e) =>
	n.createElement(
		"div",
		{
			className: d.FriendsChatsOffline,
		},
		n.createElement(
			"div",
			{
				className: d.Title,
			},
			(0, Localize)("#FriendsList_SignedOut"),
		),
		n.createElement(
			"div",
			{
				className: d.Details,
			},
			(0, Localize)("#FriendsList_SignedOut_Detail"),
		),
	);
const B = (e) =>
	n.createElement(
		"div",
		{
			className: d.FriendsChatsOffline,
		},
		n.createElement(
			"div",
			{
				className: d.Title,
			},
			(0, Localize)("#FriendsList_OfflineMode"),
		),
		n.createElement(
			"div",
			{
				className: d.Details,
			},
			(0, Localize)("#FriendsList_OfflineMode_Detail"),
		),
	);
const v = (0, i.PA)(function (e) {
	const t = n.useRef(undefined);
	const r = A.LN.loaded;
	const i = A.LN.signedOut;
	const a = (0, m.qw)().BIsOfflineMode();
	const o = (0, C.N4)();
	const c = (0, C.nM)();
	if (e.bNoFallback && !r) {
		return null;
	} else {
		return n.createElement(
			s.Z,
			{
				noFocusRing: true,
				className: (0, l.A)(
					e.className,
					c && "ShowStaleWarning",
					"friendsui-container",
				),
				ref: t,
				scrollIntoViewType: h.Yo.NoTransform,
			},
			r && !i && !a && e.renderFunc && n.createElement(e.renderFunc, null),
			i && !e.bNoFallback && n.createElement(w, null),
			a && !e.bNoFallback && n.createElement(B, null),
			!i && !a && !o && !e.bNoFallback && n.createElement(_.I, null),
		);
	}
});
export const p5 = (0, i.PA)(function (e) {
	return n.createElement(
		g.tH,
		null,
		n.createElement(v, {
			className: d.FriendsList,
			renderFunc: () =>
				A.LN.RenderFriendsListComponent({
					bQuickAccess: true,
				}),
		}),
	);
});
function E(e) {
	const { visible: t } = e;
	const r = (0, p.u6)();
	const i = n.useCallback(() => t, [t]);
	const a = n.useRef(undefined);
	let o = {
		display: e.visible ? "block" : "none",
	};
	n.useEffect(() => {
		if (t && !a.current?.BFocusWithin()) {
			a.current?.TakeFocus();
		}
	}, [t]);
	const [c] = (0, y.Vg)();
	const [m, u] = (0, S.Cn)(c);
	const A = {
		"--gamepad-page-gutter-width": `${u}px`,
		...o,
	};
	return n.createElement(
		s.Z,
		{
			navRef: a,
			className: (0, l.A)(
				d.FriendsChatsContainer,
				r && "VirtualKeyboardVisible",
			),
			style: A,
			"flow-children": "row",
			fnCanTakeFocus: i,
			navEntryPreferPosition: h.iU.PREFERRED_CHILD,
		},
		n.createElement(g.tH, null, e.children),
	);
}
export const ZY = (0, i.PA)(function (e) {
	const t = n.useCallback(() => A.LN.RenderFriendsListAndChatsComponent(), []);
	const r = (0, c.DF)(e.visible, 300000);
	return n.createElement(
		E,
		{
			visible: e.visible,
		},
		n.createElement(F, {
			visible: e.visible,
		}),
		n.createElement(
			a.g,
			null,
			r &&
				n.createElement(v, {
					className: d.FriendsChats,
					renderFunc: t,
				}),
		),
	);
});
export const Mu = (0, i.PA)(function (e) {
	return n.createElement(v, {
		className: d.RemotePlayTogetherControls,
		renderFunc: () => A.LN.RenderRemotePlayTogetherControls(),
	});
});
export const u2 = (0, i.PA)((e) =>
	n.createElement(
		"div",
		{
			className: d.InvitesListWrapper,
		},
		n.createElement(v, {
			className: d.InvitesList,
			renderFunc: () => A.LN.RenderInvitesList(),
		}),
	),
);
export const RA = (0, i.PA)(function (e) {
	return n.createElement(v, {
		className: d.FriendsVoiceList,
		renderFunc: () => A.LN.RenderFriendsListVoiceControls(),
	});
});
export const Cy = (0, i.PA)(function (e) {
	return n.createElement(v, {
		className: d.VoiceChatStatusHeader,
		bNoFallback: true,
		renderFunc: () => A.LN.RenderFriendsVoiceChatHeader(e),
	});
});
export const Dx = (0, i.PA)(function (e) {
	let { className: t, ...r } = e;
	return n.createElement(v, {
		className: t,
		bNoFallback: true,
		renderFunc: () => A.LN.RenderFriendsUnreadChatMessagesHeader(r),
	});
});
function F(e) {
	const { visible: t } = e;
	const [r, i] = (function (e) {
		const t = 1;
		const [r, i] = (0, n.useState)(false);
		(0, c.Z3)(() => i(true), 30000, []);
		const [a, s] = (0, n.useState)(true);
		(0, n.useEffect)(() => {
			const e = new b.A();
			e.GetString(G).then((r) => {
				const n = parseInt(r);
				if (isNaN(n)) {
					e.StoreString(G, "1");
					s(false);
				} else if (n < t) {
					e.StoreString(G, (n + 1).toString());
					s(false);
				}
			});
		}, []);
		const o = (0, n.useCallback)(() => {
			s(true);
			new b.A().StoreString(G, t.toString());
		}, []);
		const l = (0, c.Sz)(e);
		(0, n.useEffect)(() => {
			if (l && !e) {
				s(true);
			}
		}, [l, e]);
		return [!a && !r, o];
	})(t);
	if (r && t) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(f.r9, {
				className: d.StatusChangeHint,
				hollowRadius: 15,
			}),
			n.createElement(
				"div",
				{
					className: d.StatusChangeHintMessage,
					onClick: i,
				},
				n.createElement(
					f.kg,
					null,
					(0, Localize)("#FriendsList_StatusChange_Hint"),
				),
			),
		);
	} else {
		return null;
	}
}
const G = "TimesSeenStatusChangeCallout";
