import * as o from /*webcrack:missing*/ "./63696.js";
import * as n from /*webcrack:missing*/ "./72993.js";
import * as s from /*webcrack:missing*/ "./43397.js";
export default o.forwardRef(function (
	{
		steamID: e,
		localSteamID: t,
		watchLocation: a,
		bWebRTC: r,
		style: i,
		onRequestClose: l,
		actions: c,
		onTheaterMode: m,
		onLocalStreamChange: h,
		bVerticalBroadcastChat: d,
	},
	p,
) {
	const g = t || e;
	return o.createElement(
		"div",
		{
			ref: p,
			style: {
				display: "flex",
				flexDirection: "column",
				...i,
			},
		},
		o.createElement(
			"div",
			{
				className: "BroadcastSection",
			},
			o.createElement(n.default, {
				key: g,
				steamIDBroadcast: g,
				watchLocation: a,
				bWebRTC: r,
				onRequestClose: l,
				actions: c,
				onTheaterMode: m,
				onOpenLinkInNewWindow: s.EP,
			}),
			o.createElement("div", {
				className: "videoContainerSizer",
			}),
		),
		o.createElement(
			"div",
			{
				className: "BroadcastDetailsSection",
			},
			o.createElement(n.BroadcastDetails, {
				steamID: g,
				onLocalStreamChange: h,
				bVerticalBroadcastChat: d,
			}),
		),
	);
});
