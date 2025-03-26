var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./13128.js");
import { Localize } from "../../actual_src/utils/localization.js";
var s = require("./83247.js");
var o = require(/*webcrack:missing*/ "./50376.js");
var l = require(/*webcrack:missing*/ "./24295.js");
var c = require(/*webcrack:missing*/ "./3715.js");
var _m = require(/*webcrack:missing*/ "./61416.js");
var u = require("./64608.js");
var d = require("./63032.js");
var A = require(/*webcrack:missing*/ "./69164.js");
var p = require(/*webcrack:missing*/ "./72476.js");
var g = require("./18057.js");
var h = require(/*webcrack:missing*/ "./90765.js");
var C = require("./60291.js");
export function O() {
	const e = "timeline_intro";
	const [t] = (0, n.useState)(() => new d.O());
	const r = (0, l.LH)();
	const i = (0, c.jE)();
	const a = (0, _m.I)({
		queryKey: [e, r],
		queryFn: async () => {
			const r = {
				rtSeen: 0,
				rtLinkDismissed: 0,
			};
			try {
				const n = await t.GetObject(e);
				return n || r;
			} catch (e) {
				return r;
			}
		},
	});
	const s = (0, n.useCallback)(
		(n) => {
			const a = i.setQueryData([e, r], n);
			if (a) {
				return t.StoreObject(e, a);
			} else {
				return t.RemoveObject(e);
			}
		},
		[t, r, i],
	);
	const o = (0, n.useCallback)(
		() =>
			s((e) => ({
				...e,
				rtSeen: Date.now() / 1000,
			})),
		[s],
	);
	const u = (0, n.useCallback)(
		() =>
			s((e) => ({
				...e,
				rtLinkDismissed: Date.now() / 1000,
			})),
		[s],
	);
	const A = (0, n.useCallback)(
		() => t.RemoveObject(e).then(() => a.refetch()),
		[t, a],
	);
	return {
		introStateQuery: a,
		markIntroSeen: o,
		markLinkDismissed: u,
		reset: A,
	};
}
export function m(e) {
	const { onRequestClose: t } = e;
	const r = (0, g.Qt)();
	const l = (0, p.Qn)();
	return n.createElement(
		A.Z,
		{
			className: i.SinglePageIntro,
			autoFocus: true,
			preferredFocus: true,
			retainFocus: true,
			onCancel: t,
		},
		n.createElement(
			"div",
			{
				className: i.CloseContainer,
				onClick: t,
			},
			n.createElement(b, null),
		),
		n.createElement(
			"div",
			{
				className: i.SinglePageHeading,
			},
			Localize("#RecordingIntro_Short_FeatureName"),
		),
		n.createElement(
			"div",
			{
				className: i.Tagline,
			},
			Localize("#RecordingIntro_Short_Tagline"),
		),
		n.createElement(
			"div",
			{
				className: i.Bullets,
			},
			n.createElement(y, {
				icon: s.NC,
				titleToken: "#RecordingIntro_Short_Record",
				slugToken: "#RecordingIntro_Short_Record_Slug",
			}),
			n.createElement(y, {
				icon: s.eJ,
				titleToken: "#RecordingIntro_Short_Replay",
				slugToken: "#RecordingIntro_Short_Replay_Slug",
			}),
			n.createElement(y, {
				icon: s.Wd,
				titleToken: "#RecordingIntro_Short_Clip",
				slugToken: "#RecordingIntro_Short_Clip_Slug",
			}),
			n.createElement(y, {
				icon: C.nr,
				titleToken: "#RecordingIntro_Short_Share",
				slugToken: "#RecordingIntro_Short_Share_Slug",
			}),
		),
		n.createElement(
			A.Z,
			{
				"flow-children": "row",
				className: i.Actions,
			},
			!l &&
				n.createElement(
					"div",
					{
						className: i.BottomBulletContainer,
					},
					n.createElement(y, {
						muted: true,
						icon: o.wB_,
						titleToken: "#RecordingIntro_Short_Plus",
						slugToken: "#RecordingIntro_Short_Plus_Slug",
					}),
				),
			n.createElement(
				"div",
				{
					className: i.Action,
				},
				n.createElement(
					u.jn,
					{
						autoFocus: true,
						onClick: t,
					},
					Localize("#Generic_GotItCalm"),
				),
			),
			n.createElement(
				"div",
				{
					className: i.Action,
				},
				n.createElement(
					u.$n,
					{
						onClick: () =>
							r(`${p.TS.STORE_BASE_URL}fwlink?id=gamerecordingintro`),
					},
					Localize("#RecordingIntro_Action_LearnMore"),
				),
			),
		),
	);
}
function b() {
	return n.createElement(o.sED, {
		className: i.CloseButton,
	});
}
function y(e) {
	const { icon: t, titleToken: r, slugToken: s, muted: o } = e;
	return n.createElement(
		"div",
		{
			className: (0, h.A)(i.Bullet, o && i.Muted),
		},
		n.createElement(
			"div",
			{
				className: i.IconCircle,
			},
			n.createElement(t, {
				className: i.Icon,
			}),
		),
		n.createElement(
			"div",
			{
				className: i.Content,
			},
			n.createElement(
				"div",
				{
					className: i.Title,
				},
				Localize(r),
			),
			n.createElement(
				"div",
				{
					className: i.Slug,
				},
				Localize(s),
			),
		),
	);
}
