var n = require("./18057.js");
var i = require("./78057.js");
var a = require("./70239.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require(/*webcrack:missing*/ "./50376.js");
var m = require(/*webcrack:missing*/ "./98995.js");
import {
	Localize,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
var d = require(/*webcrack:missing*/ "./72476.js");
var A = require("./56726.js");
var p = require("./1965.js");
var g = require("./99360.js");
var h = g;
export const y = (0, s.PA)(function (e) {
	const { details: t } = e;
	const r = t.unAppID;
	const n = (0, a.$L)(r);
	if (!i.H.BIsWorkshopVisible(t)) {
		return null;
	}
	const s = n.length > 0 && n[0];
	let l =
		s &&
		o.createElement(_, {
			item: s,
			appid: r,
			title: t.strDisplayName,
			previewUrl: s.preview_url ? s.preview_url : t.strStoreHeaderImage,
		});
	return o.createElement(
		p.n,
		{
			feature: 2,
			className: h.WorkshopSection,
			label: (0, Localize)("#AppDetails_SectionTitle_Workshop"),
			highlight: l,
			rightColumnSection: true,
		},
		o.createElement(
			p.n.Body,
			{
				className: h.WorkshopContainer,
			},
			!s &&
				o.createElement(b, {
					appid: r,
				}),
			o.createElement(f, {
				appid: r,
			}),
		),
	);
});
function _(e) {
	const {
		appid: t,
		title: r,
		previewUrl: i,
		item: { title: s, short_description: A, publishedfileid: g },
	} = e;
	const C = (0, d.Qn)();
	const _ = () => {
		let e = a.B6.GetTrendyWorkshopItems(t);
		if (e.length != 0) {
			a.B6.HideWorkshopItem(t, e[0].publishedfileid);
		}
	};
	const f = (0, n.bG)("CommunityFilePage", g);
	return o.createElement(
		l.Z,
		{
			onOKButton: f,
			onOKActionDescription: (0, Localize)("#AppDetails_ViewItemInWorkshop"),
			onSecondaryButton: _,
			onSecondaryActionDescription: (0, Localize)(
				"#AppDetails_WorkshopFeaturedHideItem",
			),
		},
		o.createElement(
			p.n.Highlight,
			{
				className: h.WorkshopHightlight,
			},
			o.createElement(
				"div",
				{
					className: h.WorkshopHeader,
				},
				o.createElement(
					"div",
					{
						className: h.FeaturedItem,
					},
					o.createElement("img", {
						className: h.FeaturedItemImage,
						onClick: f,
						src: i,
					}),
					o.createElement(
						"div",
						{
							className: h.FeaturedItemDetailsContainer,
						},
						o.createElement(
							"div",
							{
								className: h.FeaturedItemHeader,
							},
							(0, Localize)("#AppDetails_WorkshopFeaturedHeader", r),
						),
						o.createElement(
							"div",
							{
								className: h.FeaturedItemName,
								onClick: f,
							},
							s,
						),
						o.createElement(
							"div",
							{
								className: h.FeaturedItemDesc,
							},
							A,
						),
						!C &&
							o.createElement(
								"div",
								{
									className: h.FeaturedLinks,
								},
								o.createElement(
									"div",
									{
										className: h.FeaturedItemLink,
										onClick: f,
									},
									(0, Localize)("#AppDetails_WorkshopFeaturedMoreInfo"),
								),
							),
						o.createElement(
							m.he,
							{
								toolTipContent: (0, Localize)(
									"#AppDetails_WorkshopFeaturedHideItem",
								),
								className: h.FeaturedItemHideButton,
								onClick: _,
							},
							o.createElement(c.sED, null),
						),
					),
				),
			),
		),
	);
}
function f(e) {
	const { appid: t } = e;
	const r = (0, n.bG)("SteamWorkshopPage", t);
	const i = (0, n.bG)("SteamWorkshopSubscriptions", t);
	if ((0, d.Qn)()) {
		return o.createElement(
			l.Z,
			{
				"flow-children": "row",
				style: {
					display: "flex",
					flexDirection: "row",
					gap: "8px",
				},
			},
			o.createElement(
				A.TD,
				{
					onClick: i,
				},
				(0, Localize)("#AppDetails_ViewSubscribedItems"),
			),
			o.createElement(
				A.TD,
				{
					onClick: r,
				},
				(0, Localize)("#AppDetails_WorkshopVisit"),
			),
		);
	} else {
		return o.createElement(
			"div",
			{
				className: h.ButtonContainer,
			},
			o.createElement(
				A.Po,
				{
					className: h.SpacedButton,
					onClick: i,
				},
				(0, Localize)("#AppDetails_ViewSubscribedItems"),
			),
			o.createElement(
				A.TD,
				{
					onClick: r,
				},
				(0, Localize)("#AppDetails_WorkshopVisit"),
			),
		);
	}
}
function b(e) {
	const { appid: t } = e;
	const r = (0, a.ZG)(t);
	const n =
		r === 0
			? (0, Localize)("#AppDetails_WorkshopSubCount_None")
			: LocalizePlural("#AppDetails_WorkshopSubCount", r);
	return o.createElement(
		"div",
		{
			className: h.SubscribedItemsMessage,
		},
		n,
	);
}
