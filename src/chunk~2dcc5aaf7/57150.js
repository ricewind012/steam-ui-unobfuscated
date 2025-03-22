var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./49519.js");
var o = require("./84056.js");
var l = require(/*webcrack:missing*/ "./44846.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require("./1965.js");
var u = require("./56726.js");
var d = require("./34792.js");
var A = require("./21597.js");
var p = require("./16364.js");
var g = p;
var h = require(/*webcrack:missing*/ "./72476.js");
var C = require(/*webcrack:missing*/ "./69164.js");
var _ = require("./94729.js");
var f = require("./18057.js");
var b = require(/*webcrack:missing*/ "./54644.js");
var y = require("./3499.js");
var S = require("./18869.js");
var w = require("./4069.js");
var B = require("./74827.js");
var v = require("./61294.js");
function I(e) {
	(0, b.uX)(e).location.href = "steam://settings/ingame";
}
export const E = (0, i.PA)(function (e) {
	const t = (0, s.W6)();
	const r = (0, h.Qn)();
	const [i] = (0, d.VI)("screenshot_key");
	const a = (0, S.br)();
	const p = () =>
		a.Media.Grid({
			state: {
				filter: {
					listSource: {
						type: "app",
						gameid: e.overview.gameid,
					},
				},
			},
		});
	const { cTotal: b } = (0, y.MZ)({
		listSource: {
			type: "app",
			gameid: e.overview.gameid,
		},
		mediaType: "all",
		uploadStatus: "all",
	});
	const { rgMedia: B } = (0, y.MZ)(
		{
			listSource: {
				type: "app",
				gameid: e.overview.gameid,
			},
			mediaType: "all",
			uploadStatus: "all",
		},
		4,
	);
	let E = "#AppDetails_SectionTitle_Screenshots";
	if (!(0, h.Y2)() && (0, w.BGameRecordingFeatureEnabled)()) {
		E = r
			? "#AppDetails_SectionTitle_Media_BPM"
			: "#AppDetails_SectionTitle_Media";
	}
	if (B.length == 0) {
		const e = {
			type: o.N.k_EControllerBindingType_ControllerAction,
			controller_action: {
				action: 2,
			},
		};
		return n.createElement(
			m.n,
			{
				feature: 3,
				className: g.ScreenshotsSection,
				label: (0, c.we)(E),
				rightColumnSection: true,
				availableOffline: true,
			},
			n.createElement(
				m.n.Body,
				null,
				r &&
					n.createElement(
						n.Fragment,
						null,
						n.createElement(
							"div",
							{
								className: g.NoRecent,
							},
							(0, c.PP)(
								"#AppDetails_HowToScreenshotGamepad",
								n.createElement(v.Gn, {
									binding: e,
									onActivate: () => {},
								}),
							),
							" ",
						),
						n.createElement(
							u.TD,
							{
								onClick: () => t.push(f.BV.Media.Grid()),
							},
							(0, c.we)("#AppDetails_GoToMedia"),
						),
					),
				!r &&
					n.createElement(
						n.Fragment,
						null,
						n.createElement(
							"div",
							{
								className: g.NoneTaken,
							},
							(0, c.we)("#AppDetails_NoScreenshots", i.display_name),
							" ",
						),
						n.createElement(
							"div",
							{
								className: g.InstructionText,
							},
							(0, c.we)("#AppDetails_HowToScreenshot", i.display_name),
							" ",
						),
						n.createElement(
							u.TD,
							{
								onClick: I,
							},
							(0, c.we)("#AppDetails_ChangeMyScreenshotKey"),
						),
					),
			),
		);
	}
	{
		let t = "#AppDetails_ManageMyScreenshots";
		if (!(0, h.Y2)() && (0, w.BGameRecordingFeatureEnabled)()) {
			t = r ? "#AppDetails_ManageMyMedia_BPM" : "#AppDetails_ManageMyMedia";
		}
		const i = B.map((t) => {
			switch (t.type) {
				case "screenshot":
					return n.createElement(A.R, {
						className: g.Thumbnail,
						key: t.id,
						sizeAxis: "width",
						screenshot: t,
					});
				case "clip":
					return n.createElement(_.$d, {
						key: t.id,
						clip: t.summary,
						nonFixedSize: true,
					});
				default:
					return n.createElement(M, {
						key: t.id,
						appID: e.overview.appid,
						gameID: e.overview.gameid,
						mediaID: t.id,
					});
			}
		});
		return n.createElement(
			m.n,
			{
				feature: 3,
				className: g.ScreenshotsSection,
				label: (0, c.we)(E),
				rightColumnSection: true,
				availableOffline: true,
			},
			n.createElement(
				m.n.Body,
				null,
				n.createElement(
					C.Z,
					{
						"flow-children": "grid",
						className: g.Screenshots,
					},
					i.slice(0, 4),
				),
				!(0, l.ID)(h.TS.LAUNCHER_TYPE) &&
					n.createElement(
						u.TD,
						{
							onClick: p,
						},
						(0, c.Yp)(t, b),
					),
			),
		);
	}
});
function M(e) {
	const { appID: t, gameID: r, mediaID: i } = e;
	const s = (0, a.q3)(() => B.Ri.GetPostGameSummary(t)?.GetSessionEvents());
	const o = s?.find((e) => e.m_recordingHighlights)?.m_recordingHighlights;
	if (o) {
		return n.createElement(_.$B, {
			key: i,
			gameID: r,
			nonFixedSize: true,
			highlights: o,
		});
	} else {
		return n.createElement(_.Li, {
			key: i,
			gameID: r,
			nonFixedSize: true,
			highlights: [
				{
					game_id: r,
					timeline_id: "",
					duration_ms: "0",
					timeline_offset_ms: "0",
				},
			],
		});
	}
}
