var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
var a = require(/*webcrack:missing*/ "./50376.js");
var s = require("./35488.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require("./96680.js");
var c = require(/*webcrack:missing*/ "./63439.js");
var m = require(/*webcrack:missing*/ "./11131.js");
var u = require("./34792.js");
var d = require(/*webcrack:missing*/ "./46108.js");
var A = require("./18057.js");
var p = require(/*webcrack:missing*/ "./52451.js");
var g = require("./32313.js");
var h = g;
function C(e) {
	const { broadcastStatus: t, bDesktopBanner: r, onResize: i } = e;
	const [l] = (0, u.VI)("broadcast_show_upload_stats");
	const c = (0, A.Qt)("steam://settings/broadcast");
	const m = n.useCallback(
		(e) => {
			i(
				Math.ceil(e.borderBoxSize[0].inlineSize),
				Math.ceil(e.borderBoxSize[0].blockSize),
			);
		},
		[i],
	);
	const g = (0, p.wY)(m);
	if (t) {
		return n.createElement(
			"div",
			{
				className: h.BroadcastStatusDetails,
				ref: g,
				onClick: r ? c : undefined,
			},
			n.createElement(
				"div",
				{
					className: h.BroadcastStatusLine,
				},
				n.createElement(a.EQ9, {
					className: (0, o.A)(
						h.Icon,
						h.Microphone,
						t.bMicrophoneActive && h.Active,
					),
					off: !t.bMicrophoneEnabled,
				}),
				n.createElement(a.jlt, {
					className: (0, o.A)(h.Icon, h.Live, t.bIsBroadcasting && h.Active),
				}),
				n.createElement(
					"div",
					{
						className: h.LiveText,
					},
					(0, d.we)("#BroadcastStatus_Live"),
				),
				t.nRequests > 0 &&
					n.createElement(
						n.Fragment,
						null,
						n.createElement(
							"div",
							{
								className: (0, o.A)(h.Icon, h.Requests),
							},
							n.createElement(a.MxO, null),
						),
						t.nRequests,
					),
				n.createElement(s.FamilySharing, {
					className: h.Icon,
				}),
				n.createElement("div", null, t.nViewers),
			),
			l &&
				n.createElement(
					"div",
					{
						className: (0, o.A)(h.BroadcastStatusLine, h.Stats),
					},
					n.createElement(
						"div",
						{
							className: h.Stat,
						},
						(0, d.we)("#BroadcastStatus_UploadRate", t.nUploadKbps),
					),
					n.createElement(
						"div",
						{
							className: h.Stat,
						},
						(0, d.we)("#BroadcastStatus_FrameRate", t.nCurrentFPS),
					),
				),
		);
	} else {
		return null;
	}
}
export function e(e) {
	const { bDesktopBanner: t } = e;
	const r = (0, l.$2)();
	const [a] = (0, u.VI)("broadcast_permissions");
	const [s] = (0, u.VI)("broadcast_show_live_reminder");
	const [d, A] = n.useState();
	const p = n.useCallback((e) => {
		A(e);
	}, []);
	const g =
		(d?.bIsBroadcasting || d?.nRequests > 0 || (s && a == 3)) &&
		t == d?.bIsRecordingDesktop;
	n.useEffect(() => {
		const e = SteamClient.Broadcast.RegisterForBroadcastStatus(p);
		return () => e.unregister();
	}, [p]);
	const _ = m.Wf.Composited | m.Wf.Hidden | (0, m.yq)(m.Dr.Notification);
	const {
		popupObj: f,
		popup: b,
		element: y,
	} = (0, c.OJ)("broadcaststatus", {
		title: "broadcaststatus",
		dimensions: {
			width: 1,
			height: 1,
		},
		body_class: (0, o.A)(h.BroadcastStatusBody, t && h.Desktop),
		eCreationFlags: t ? _ & ~m.Wf.Composited : _,
		target_browser: r.params.browserInfo,
		bNoInitialShow: true,
	});
	const S = r.BrowserWindow.screen.availWidth;
	const w = n.useCallback(
		(e, r) => {
			if (t) {
				b.SteamClient.Window.MoveTo(Math.ceil(S / 2 - e / 2), 0);
			} else {
				b.SteamClient.Window.MoveTo(Math.ceil(S - e), 0);
			}
		},
		[b, S, t],
	);
	const B = n.useCallback(
		(e, t) => {
			b.SteamClient.Window.ResizeTo(e, t, true);
			w(e, t);
		},
		[b, w],
	);
	n.useEffect(() => {
		if (g) {
			if (b) {
				b.SteamClient.Window.ShowWindow();
			} else {
				f.Show();
			}
		} else {
			b?.SteamClient.Window.HideWindow();
		}
	}, [b, f, g]);
	if (y) {
		return i.createPortal(
			n.createElement(C, {
				broadcastStatus: d,
				bDesktopBanner: t,
				onResize: B,
			}),
			y,
		);
	} else {
		return null;
	}
}
