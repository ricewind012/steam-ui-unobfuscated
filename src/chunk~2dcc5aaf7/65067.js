var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./69164.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require(/*webcrack:missing*/ "./46108.js");
var o = require(/*webcrack:missing*/ "./11010.js");
var l = require(/*webcrack:missing*/ "./41180.js");
var c = require("./75883.js");
var m = c;
var u = require(/*webcrack:missing*/ "./50376.js");
const d = true;
function A(e) {
	let { onActivate: t, icon: r, body: s, eUIMode: o, classNames: l } = e;
	let c = t;
	let u = m.PinnedTemplate;
	if (o == 7) {
		u = m.PinnedTemplateDesktop;
	} else if (o == 3) {
		u = m.PinnedTemplateWeb;
	}
	u = (0, a.A)(u, l);
	return n.createElement(
		i.Z,
		{
			className: u,
			onActivate: c,
		},
		n.createElement(
			"div",
			{
				className: m.Content,
			},
			n.createElement(
				"div",
				{
					className: m.PinnedBody,
				},
				n.createElement(
					"span",
					{
						className: m.Icon,
					},
					r,
				),
				s,
			),
		),
	);
}
export function OK(e) {
	const {
		count: t,
		icon: r,
		onActivate: i,
		strLocToken: a,
		bAlwaysShow: o,
		eUIMode: l,
		classNames: c,
		visible: m,
	} = e;
	if (!t && !o) {
		return null;
	}
	const u = (0, s.Yp)(a, t);
	return n.createElement(A, {
		icon: r,
		body: u,
		onActivate: i,
		eUIMode: l,
		classNames: c,
		visible: m,
	});
}
var g;
export function FG(e) {
	let {
		nUnread: t,
		location: r,
		eUIMode: s,
		bLoading: o,
		footer: l,
		bNewIndicator: c,
	} = e;
	const [u, d] = n.useState(o ? g.loadingActive : g.none);
	const [A, p] = n.useState(undefined);
	n.useEffect(() => {
		if (u != g.loadingActive || o) {
			if (u == g.loadingComplete && o) {
				d(g.loadingActive);
			}
		} else {
			d(g.loadingComplete);
		}
	}, [u, o]);
	n.useEffect(() => {
		let e =
			parseInt(m.loadinganimationiterationcount) *
			parseInt(m.loadinganimationduration) *
			1000;
		const t = window.setTimeout(() => d(g.none), e);
		return () => window.clearTimeout(t);
	}, []);
	n.useEffect(() => {
		if (t && t > 0 && A !== m.Unread && r != 2 && r != 1) {
			p(m.Unread);
		} else if (!t && A == m.Unread) {
			p(m.MarkedRead);
		}
	}, [t, r, A]);
	let h = e.onActivate;
	h ||= () => console.log("Missing activate function");
	if (u == g.loadingActive) {
		h = undefined;
	}
	let _ = m.StandardTemplate;
	if (r == 4) {
		_ = m.AllNotificationsTemplate;
	} else if (r == 2) {
		_ = m.DesktopToastTemplate;
	} else if (s == 7 || s == 3) {
		_ = m.StandardTemplateDesktop;
	}
	let f = null;
	if (u != g.none && r != 2 && r != 1) {
		let e = u == g.loadingComplete ? m.Hide : null;
		f = n.createElement(
			"div",
			{
				className: (0, a.A)(m.LoadingTemplate, e),
			},
			n.createElement("div", {
				className: (0, a.A)(m.StandardLogoDimensions, m.ShimmerLogo),
			}),
			n.createElement(
				"div",
				{
					className: m.Content,
				},
				n.createElement("div", {
					className: (0, a.A)(m.Header, m.ShimmerHeader),
				}),
				n.createElement("div", {
					className: (0, a.A)(m.Body, m.ShimmerBody),
				}),
			),
		);
	}
	return n.createElement(
		i.Z,
		{
			onActivate: h,
			className: m.StandardTemplateContainer,
			onOptionsButton: e.onOptionsButton,
			onOptionsActionDescription: e.onOptionsButtonDesc,
		},
		n.createElement(
			"div",
			{
				className: (0, a.A)(_, A),
			},
			n.createElement(
				"div",
				{
					className: m.StandardLogoDimensions,
				},
				e.logo,
			),
			e.personaStatus &&
				n.createElement("div", {
					className: (0, a.A)(m.AvatarStatus, e.personaStatus),
				}),
			n.createElement(
				"div",
				{
					className: m.Content,
				},
				e.children,
			),
			f,
			c &&
				n.createElement(C, {
					location: r,
				}),
		),
		l || null,
	);
}
function C(e) {
	const { location: t } = e;
	if (d && t == 3) {
		return n.createElement(
			"div",
			{
				className: m.NewIndicator,
			},
			n.createElement(u.jlt, null),
		);
	} else {
		return null;
	}
}
export function OJ(e) {
	let {
		icon: t,
		title: r,
		timestamp: i,
		location: a,
		fnRenderTimestamp: s,
	} = e;
	const o = !!i && (a == 3 || a == 4);
	let l;
	l = a == 4 ? w : (s ?? B);
	return n.createElement(
		"div",
		{
			className: m.Header,
		},
		n.createElement(VJ, {
			icon: t,
		}),
		!!r &&
			n.createElement(OO, {
				title: r,
			}),
		o &&
			l({
				timestamp: i,
			}),
	);
}
export function VJ(e) {
	return n.createElement(
		"div",
		{
			className: m.Icon,
		},
		e.icon,
	);
}
export function OO(e) {
	return n.createElement(
		"div",
		{
			className: m.Title,
		},
		e.title,
	);
}
export function NF(e) {
	let t = (0, a.A)(
		m.StandardNotificationDescription,
		e.multiline && m.Multiline,
	);
	return n.createElement(
		"div",
		{
			className: t,
		},
		e.children,
	);
}
export function C0(e) {
	let t = (0, a.A)(m.StandardNotificationSubText, e.multiline && m.Multiline);
	return n.createElement(
		"div",
		{
			className: t,
		},
		e.children,
	);
}
function w(e) {
	if (e.timestamp === undefined) {
		return null;
	}
	let t = new Date();
	let r = new Date(e.timestamp * 1000);
	let i = (0, o.KC)(e.timestamp);
	if (!(0, l.JD)(t, r)) {
		i = (0, o._l)(e.timestamp, false, false, false) + " " + i;
	}
	return n.createElement(
		"div",
		{
			className: m.Timestamp,
		},
		i,
	);
}
function B(e) {
	if (e.timestamp === undefined) {
		return null;
	}
	let t = new Date();
	let r = new Date(e.timestamp * 1000);
	let i = (0, l.JD)(t, r)
		? (0, o.KC)(e.timestamp)
		: (0, o._l)(e.timestamp, false, false, false);
	return n.createElement(
		"div",
		{
			className: m.Timestamp,
		},
		i,
	);
}
export function PT(e) {
	const { text: t } = e;
	return n.createElement(
		"div",
		{
			className: m.BottomBar,
		},
		t,
	);
}
export function ll(e) {
	let { playerName: t, nickName: r, parenthesizeNickNames: i, state: s } = e;
	let o = !!r;
	let l = o && !i;
	let c = l ? r : t;
	let u = s == "ingame" ? m.IngameTitle : m.OnlineTitle;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"span",
			{
				className: (0, a.A)(u),
			},
			c,
		),
		i &&
			o &&
			n.createElement(
				"span",
				{
					className: (0, a.A)(m.PlayerNickName, m.FullName),
				},
				"(",
				r,
				")",
			),
		l &&
			n.createElement(
				"span",
				{
					className: m.PlayerNickName,
				},
				" *",
			),
	);
}
(function (e) {
	e[(e.none = 0)] = "none";
	e[(e.loadingActive = 1)] = "loadingActive";
	e[(e.loadingComplete = 2)] = "loadingComplete";
})((g ||= {}));
