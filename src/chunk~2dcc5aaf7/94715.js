var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./44846.js");
var a = require("./64608.js");
var s = require(/*webcrack:missing*/ "./50376.js");
var o = require("./25517.js");
var l = require("./36934.js");
var c = require(/*webcrack:missing*/ "./31084.js");
var m = require(/*webcrack:missing*/ "./88750.js");
var u = require(/*webcrack:missing*/ "./8573.js");
var d = require("./48289.js");
var A = require("./36464.js");
import {
	Localize,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";
var g = require("./10606.js");
var h = require("./68608.js");
var C = require("./34792.js");
var _ = require("./13869.js");
var f = require("./60142.js");
import {
	IsHTMLElement,
	GetOwningWindowForEvent,
} from "../../actual_src/utils/domutils.js";
var y = require(/*webcrack:missing*/ "./72476.js");
var S = require(/*webcrack:missing*/ "./69164.js");
var w = require(/*webcrack:missing*/ "./61657.js");
import { LocalizeRTimeToHourAndMinutes } from "../../actual_src/utils/localization/datetime.js";
var v = require(/*webcrack:missing*/ "./11131.js");
function I(e) {
	const {
		children: t,
		closeModal: r,
		appid: l,
		file_details: u,
		title: d,
		artworkURL: A,
		window: h,
		nMaxScreenPercentage: C,
		screenshot: _,
		onImageError: B,
		onImageLoad: v,
		additionalFields: I,
		bHideShareButton: E,
	} = e;
	const T = (0, y.Qn)();
	const k = () => r && r();
	const D = n.useRef(undefined);
	let N = {};
	N = T
		? {
				maxWidth: "100%",
				width: "auto",
				maxHeight: "600px",
				objectFit: "contain",
			}
		: {
				maxWidth: h.screen.width * (C || 0.8),
				maxHeight: h.screen.height * (C || 0.8),
			};
	let F = u
		? (0, Localize)("#ArtworkModal_ScrollForMore")
		: (0, Localize)("#ArtworkModal_ScrollForDetails");
	let G = !!t;
	let O = {
		onMenuButton: () => (0, f.bK)(_, h),
	};
	O.onMenuActionDescription = (0, Localize)("#Generic_Share");
	return n.createElement(
		g.x_,
		{
			onEscKeypress: k,
			className: o.ArtworkModal,
		},
		n.createElement(
			S.Z,
			{
				className: o.ModalBox,
				...O,
			},
			n.createElement(
				"div",
				{
					ref: D,
					className: o.ArtworkModalContainer,
				},
				n.createElement(
					S.Z,
					{
						focusable: true,
						disableNavSounds: true,
						noFocusRing: true,
						onGamepadDirection: (e) => {
							if (D.current) {
								switch (e.detail.button) {
									case w.pR.DIR_UP:
										D.current.scrollBy({
											top: -100,
											behavior: "smooth",
										});
										return true;
									case w.pR.DIR_DOWN:
										D.current.scrollBy({
											top: 100,
											behavior: "smooth",
										});
										return true;
								}
							}
							return false;
						},
						className: o.ArtworkContainer,
					},
					n.createElement("img", {
						className: o.ArtworkImage,
						style: N,
						src: A,
						onLoad: v,
						onError: B,
						onContextMenu: (e) => {
							const t = IsHTMLElement(e.target)
								? e.target.ownerDocument.defaultView
								: h;
							(0, c.lX)(
								n.createElement(
									m.tz,
									null,
									_ &&
										n.createElement(
											m.kt,
											{
												onSelected: () =>
													(function (e) {
														SteamClient.Apps.BrowseScreenshotForApp(
															e.strGameID,
															e.hHandle,
														);
													})(_),
											},
											(0, Localize)("#ContextMenu_BrowseScreenshot"),
										),
									!_ &&
										n.createElement(
											m.kt,
											{
												onSelected: () => R(A, t),
											},
											(0, Localize)("#ContextMenu_SaveScreenshot"),
										),
								),
								e,
							);
						},
					}),
					u &&
						n.createElement(M, {
							details: u,
							appid: l,
							title: d,
							additionalFields: I,
						}),
				),
				n.createElement(
					"div",
					{
						className: o.ArtworkModalDetails,
					},
					n.createElement(
						"div",
						{
							className: o.Header,
						},
						!T &&
							_ &&
							!E &&
							!i.ID(y.TS.LAUNCHER_TYPE) &&
							n.createElement(f.wD, {
								className: o.ShareButton,
								onClick: (e) => _ && (0, f.bK)(_, GetOwningWindowForEvent(e)),
							}),
						n.createElement(
							a.jn,
							{
								className: o.ModalArtCloseButton,
								onClick: k,
							},
							(0, Localize)("#Generic_Close"),
						),
						G &&
							n.createElement(
								"div",
								{
									className: o.ScrollForMore,
								},
								n.createElement(s.i3G, {
									angle: 180,
								}),
								F,
								n.createElement(s.i3G, {
									angle: 180,
								}),
							),
					),
					n.createElement(
						"div",
						{
							className: o.ChildrenContainer,
						},
						t,
					),
				),
			),
		),
	);
}
function E(e) {
	const { creator: t } = e;
	const r = (0, v.R7)();
	return n.createElement(
		"div",
		{
			className: o.CreatedBy,
		},
		n.createElement(
			"div",
			{
				className: o.Label,
			},
			(0, Localize)("#ArtworkModal_CreatedBy"),
		),
		n.createElement(A.fH, {
			className: o.Avatar,
			friend: t,
			size: "Small",
			statusPosition: "right",
		}),
		n.createElement(h.A, {
			className: o.ActorName,
			persona: t.persona,
			strNickname: t.nickname,
			bParenthesizeNicknames: C.rV.communityPreferences.bParenthesizeNicknames,
			onContextMenu: (e) => {
				(0, A.Cc)(e, t, r);
			},
		}),
	);
}
function M(e) {
	const {
		appid: t,
		title: r,
		additionalFields: i,
		details: { creator: a, time_created: s, file_description: c },
	} = e;
	const [m] = (0, C.e_)("b24HourClock");
	const { strIconURL: A } = (function (e) {
		const t = (0, l.Xe)(e);
		if (t) {
			return {
				strAppName: t.name,
				strIconURL: t.icon_url,
			};
		} else {
			return {};
		}
	})(t);
	const g = d.O$.GetFriendState(new u.b(a));
	const h =
		LocalizeRtime32ToShortDate(s) +
		" @ " +
		LocalizeRTimeToHourAndMinutes(s, {
			bForce24HourClock: m,
		});
	const _ = c.length > 0;
	return n.createElement(
		"div",
		{
			className: o.FileDetails,
		},
		_ &&
			n.createElement(
				"div",
				{
					className: o.Caption,
				},
				"❝",
				r,
				"❞",
			),
		i &&
			n.createElement(
				"div",
				{
					className: o.AdditionalFields,
				},
				i,
			),
		n.createElement(
			"div",
			{
				className: o.Fields,
			},
			n.createElement(E, {
				creator: g,
			}),
			n.createElement(
				"div",
				{
					className: o.IconAndDate,
				},
				n.createElement("img", {
					className: o.AppIcon,
					src: A,
				}),
				n.createElement(
					"div",
					{
						className: o.Timestamp,
					},
					h,
				),
			),
		),
	);
}
export async function N(e) {
	const {
		strURL: t,
		strTitle: r,
		windowOverride: i,
		nMaxScreenPercentage: a,
		children: s,
		appid: o,
		file_details: l,
		screenshot: c,
		additionalFields: m,
		bHideShareButton: u,
	} = e;
	let d;
	let A;
	let p = new Promise((e, t) => {
		d = e;
		A = t;
	});
	let g = i || window;
	try {
		await (0, _.mK)(
			n.createElement(
				I,
				{
					artworkURL: t,
					title: r,
					window: g,
					nMaxScreenPercentage: a,
					onImageLoad: d,
					onImageError: A,
					appid: o,
					file_details: l,
					screenshot: c,
					additionalFields: m,
					bHideShareButton: u,
				},
				s,
			),
			g,
			{
				strTitle: r,
				promiseRenderComplete: p,
			},
		);
	} catch (e) {
		console.error("ERROR DISPLAYING ARTWORK");
	}
}
function R(e, t) {
	(t || window).SteamClient.Browser.StartDownload(e);
}
