var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./50376.js");
var a = require("./35488.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./90095.js");
var l = require("./5808.js");
var c = require("./42805.js");
var m = require(/*webcrack:missing*/ "./34629.js");
var u = require("./29547.js");
var d = require("./47979.js");
var A = require(/*webcrack:missing*/ "./90765.js");
var p = require(/*webcrack:missing*/ "./52451.js");
let g = class extends n.Component {
	OnClick(e, t, r) {
		if (e.shiftKey) {
			d.b.SelectRange(r, this.props.fnSelectAppsInRange);
		} else if (e.ctrlKey || e.metaKey) {
			d.b.ToggleAppIsSelected(r);
		} else if (this.props.onContextMenu && t) {
			this.props.onContextMenu(e);
		} else if (this.props.onClick && !t) {
			d.b.ClearSelection();
			d.b.SetAnchor(r);
			this.props.onClick(e);
		}
	}
	render() {
		const {
			appid: e,
			strCollectionId: t,
			whenSelectedClassName: r,
			fnSelectAppsInRange: i,
			className: a,
			onClick: s,
			onContextMenu: o,
			children: l,
			...c
		} = this.props;
		const m = new u.q(e, t);
		const p = d.b.BIsSelectedApp(m);
		return n.createElement(
			"div",
			{
				className: (0, A.A)(p && r, a),
				...c,
				onClick: (e) => this.OnClick(e, false, m),
				onContextMenu: (e) => this.OnClick(e, true, m),
			},
			l,
		);
	}
};
(0, m.Cg)([p.oI], g.prototype, "OnClick", null);
g = (0, m.Cg)([s.PA], g);
var h = require("./91486.js");
var C = require("./97893.js");
var _ = require(/*webcrack:missing*/ "./31084.js");
var f = require("./48289.js");
import { Localize } from "../../actual_src/utils/localization.js";
var y = require("./32700.js");
var S = require(/*webcrack:missing*/ "./98995.js");
var w = require("./36464.js");
var B = require("./68608.js");
var v = require("./34792.js");
var I = require("./39147.js");
var E = require("./92030.js");
var M = E;
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var R = require("./96680.js");
export const Ay = (0, s.PA)(function (e) {
	const {
		item: t,
		isSelected: r,
		index: s,
		strCollectionId: o,
		bIsLastInCollection: m,
		fnSelectAppsInRange: u,
		bInGamepadUI: d,
		bInHover: p,
	} = e;
	const [h, C] = (0, n.useState)(false);
	const b = (0, R.$2)();
	const y = (e) => {
		const r = (0, l.AH)(b, t, "mostavailable");
		switch (r) {
			case "Play":
			case "Launch":
			case "Resume":
			case "Download":
			case "Update":
			case "PreLoad":
			case "Install":
			case "Stream":
				const n = (0, l.jy)(
					r,
					t,
					"mostavailable",
					601,
					GetOwningWindowForEvent(e),
				);
				if (n) {
					n();
				}
				return;
		}
	};
	t.BIsPerClientDataLocal(t.most_available_per_client_data);
	let I = {};
	let E = false;
	switch (t.display_status) {
		case 34:
		case 35:
		case 8:
			I.error = true;
			E = true;
	}
	let k = null;
	if (E) {
		k = n.createElement(a.CloudSync, {
			...I,
		});
	}
	const N = (0, A.A)(
		M.Container,
		p && M.HoverOverlay,
		(function (e) {
			if (e.is_invalid_os_type) {
				return M.Uninstalled;
			}
			switch (e.display_status) {
				case 6:
				case 18:
				case 19:
				case 20:
				case 39:
				case 7:
				case 22:
				case 23:
				case 24:
				case 38:
					return M.Updating;
				case 8:
					return M.Synchronizing;
				case 34:
					return M.CloudError;
				case 35:
					return M.CloudOutOfDate;
				case 4:
				case 36:
					return M.Running;
			}
			if (e.installed) {
				if (e.BIsSelectedClientLocal()) {
					return M.Installed;
				} else {
					return M.InstalledRemotely;
				}
			}
			return M.Uninstalled;
		})(t),
		r(o, t.appid) && M.Selected,
		h && M.HasContextMenuOpen,
		m && M.LastInCollection,
	);
	let G = f.O$.GetFriendsInGame(t.appid);
	let O = [];
	if (G.length > 0) {
		for (const e of G) {
			O.push(
				n.createElement(
					"div",
					{
						className: M.FriendStatusHoverRow,
						key: e.persona.GetAccountID(),
					},
					n.createElement(w.fH, {
						size: "X-Small",
						friend: e,
						statusPosition: "right",
					}),
					n.createElement(B.D, {
						className: M.LabelHolder,
						persona: e.persona,
						eFriendRelationship: 3,
						bIsSelf: false,
						bCompactView: true,
						strNickname: e.nickname,
						bParenthesizeNicknames:
							v.rV.communityPreferences.bParenthesizeNicknames,
						bHideGameName: true,
						bHideEnhancedRichPresenceLabel: false,
					}),
				),
			);
		}
	}
	let P = (0, A.A)(E && M.CloudError, M.GameListEntryContainer);
	return n.createElement(
		g,
		{
			appid: t.appid,
			strCollectionId: o,
			fnSelectAppsInRange: u,
			whenSelectedClassName: M.Selected,
			onDoubleClick: y,
			onClick: () => e.onClick(s),
			onContextMenu: (e) => {
				const r = (0, _.lX)(
					n.createElement(l.uU, {
						overview: t,
						client: "mostavailable",
						launchSource: 600,
						bInGamepadUI: d,
						includeMultiSelect: true,
						strCollectionId: o,
						ownerWindow: GetOwningWindowForEvent(e),
					}),
					e,
					(0, l.zq)(),
				);
				if (r) {
					C(true);
					r.SetOnHideCallback(() => C(false));
				}
			},
			onKeyDown: (e) => e.keyCode == 13 && y(e),
		},
		n.createElement(
			c.wf,
			{
				strCollectionId: o,
				className: N,
				strEligibleClassName: M.DropOption,
				strTargetedClassName: M.DropTarget,
			},
			n.createElement(
				c.Bj,
				{
					className: P,
					appid: t.appid,
					strCollectionId: o,
					includeMultiSelect: true,
				},
				k,
				t.is_invalid_os_type &&
					n.createElement(
						S.he,
						{
							toolTipContent: "#GameList_Entry_Invalid_OSType",
							className: M.InvalidOSType,
						},
						n.createElement(i.WOg, null),
					),
				!k &&
					!t.is_invalid_os_type &&
					O.length > 0 &&
					n.createElement(
						S.m9,
						{
							toolTipContent: n.createElement(
								"div",
								{
									className: M.FriendStatusHover,
								},
								O,
							),
							nDelayShowMS: 0,
							className: M.FriendIsPlaying,
						},
						n.createElement(i.GSe, null),
					),
				n.createElement(nK, {
					item: t,
				}),
				n.createElement(F, {
					item: t,
				}),
				false,
			),
		),
	);
});
export function nK(e) {
	let { item: t } = e;
	let r = (0, o.q3)(() => t.display_status);
	let [a] = (0, v.VI)("library_display_icon_in_game_list");
	if (!a) {
		return null;
	}
	let s = n.createElement(h.z, {
		app: t,
		eAssetType: 4,
		className: M.GameIcon,
	});
	if (
		(function (e) {
			switch (e) {
				case 2:
				case 3:
				case 5:
				case 18:
				case 19:
				case 20:
				case 22:
				case 23:
				case 24:
				case 6:
				case 7:
				case 8:
					return true;
			}
			return false;
		})(r)
	) {
		return n.createElement(
			"div",
			{
				className: M.AppIconDownloading,
			},
			s,
			n.createElement(i.a3E, {
				className: M.DownloadProgressSVG,
				percentComplete: t.status_percentage || 0,
			}),
		);
	} else {
		return s;
	}
}
function N(e) {
	const { strName: t } = e;
	const r = (0, C.zM)();
	const i = (0, C.MD)(r);
	const a = r.update_network_bytes_per_second;
	let s = (i || 0) + "%";
	if (a) {
		s = s + " (" + (0, I.ZC)(a) + ")";
	}
	return n.createElement(G, {
		appName: t,
		status: s,
	});
}
function F(e) {
	let t = (0, o.q3)(() => {
		let { item: t } = e;
		return {
			display_name: t.display_name,
			display_status: t.display_status,
			active_beta: t.active_beta,
			status_percentage: t.status_percentage,
			remote_item: !t.BIsPerClientDataLocal(t.most_available_per_client_data),
			update_available_but_disabled_by_app:
				t.most_available_per_client_data?.update_available_but_disabled_by_app,
		};
	});
	let r = t.display_name;
	if (t.active_beta) {
		r = r + " [" + t.active_beta + "]";
	}
	let i = n.createElement(n.Fragment, null, r);
	switch (t.display_status) {
		case 11:
			if (t.update_available_but_disabled_by_app) {
				i = n.createElement(G, {
					appName: r,
					status: Localize("#DisplayStatus_UpdateAvailableButDisabledByApp"),
				});
				break;
			}
			break;
		case 1:
		case 4:
		case 36:
		case 2:
		case 3:
		case 5:
		case 18:
		case 39:
		case 19:
		case 20:
		case 22:
		case 38:
		case 23:
		case 24:
		case 34:
		case 35:
			i = n.createElement(G, {
				appName: r,
				status: (0, y.Bb)(t.display_status, true),
			});
			break;
		case 6:
		case 7:
			i = n.createElement(N, {
				strName: r,
			});
			break;
		case 8: {
			let e = (t.status_percentage || 0) + "%";
			i = n.createElement(G, {
				appName: r,
				status: e,
			});
		}
	}
	return i;
}
function G(e) {
	const { appName: t, status: r } = e;
	return n.createElement(
		"div",
		{
			className: M.GameListEntryLabels,
		},
		n.createElement(
			"div",
			{
				className: M.GameListEntryName,
			},
			n.createElement(
				"span",
				null,
				t,
				n.createElement(
					"span",
					{
						className: M.DownloadDash,
					},
					"-",
				),
			),
		),
		n.createElement(
			"div",
			{
				className: M.DownloadProgress,
			},
			r,
		),
	);
}
