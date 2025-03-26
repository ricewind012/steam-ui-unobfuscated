var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./64608.js");
var a = require("./13869.js");
var s = require("./10606.js");
var o = require(/*webcrack:missing*/ "./26853.js");
var l = require("./44234.js");
var c = require("./3756.js");
var m = require("./95773.js");
var u = require("./52912.js");
var d = require("./15855.js");
var A = require(/*webcrack:missing*/ "./63696.js");
var p = require(/*webcrack:missing*/ "./50376.js");
var g = require(/*webcrack:missing*/ "./41230.js");
var h = require("./96127.js");
var C = require(/*webcrack:missing*/ "./52451.js");
var _ = require("./98829.js");
var f = require(/*webcrack:missing*/ "./52445.js");
var b = require(/*webcrack:missing*/ "./97329.js");
var y = require("./20475.js");
var S = require("./6670.js");
import { Localize } from "../../actual_src/utils/localization.js";
var B = require(/*webcrack:missing*/ "./90765.js");
var v = require(/*webcrack:missing*/ "./69164.js");
var I = require(/*webcrack:missing*/ "./90242.js");
var E = require("./55116.js");
const M = (e) =>
	l.TS.IN_CLIENT
		? A.createElement(S.N, {
				...e,
			})
		: A.createElement(f.Ay, {
				...e,
			});
let T = class extends A.Component {
	m_renderContext;
	GetFriendRenderContext() {
		let e = this.props.groupView.GetGroup();
		if (!this.m_renderContext || this.m_renderContext.group != e) {
			this.m_renderContext = {
				group: e,
				chatContext: "chatmemberlist",
			};
		}
		return this.m_renderContext;
	}
	GetMembersMatchingSearch(e) {
		let t = L(this.props.groupView.GetGroup().memberList.member_list, e);
		t.sort(h.$c.DefaultFriendSortComparator);
		return t;
	}
	OnMemberListToggleViewClick() {
		this.props.groupView.SetMemberListCollapsed(
			this.props.groupView.isMemberListExpanded,
		);
	}
	OnSearchInput(e) {
		this.props.groupView.UpdateMemberSearch(e.currentTarget.value);
	}
	OnSearchSubmit(e) {
		e.preventDefault();
		let t = this.props.groupView;
		let r = t.normalizedMemberSearch;
		if (r && r.length) {
			let t = this.GetMembersMatchingSearch(r);
			if (t.length) {
				t[0].OpenChatDialog((0, u.CO)(e));
			}
		}
		t.ClearMemberSearch();
	}
	OnSearchKeyDown(e) {
		if (e.keyCode == 27) {
			e.preventDefault();
			e.currentTarget.blur();
			this.props.groupView.ClearMemberSearch();
		}
	}
	OnClearSearch() {
		this.props.groupView.ClearMemberSearch();
	}
	OnSearchFocus() {
		this.props.groupView.UpdateMemberSearch(
			this.props.groupView.GetMemberSearch(),
		);
	}
	OnSearchBlur() {
		if (this.props.groupView.GetMemberSearch().length == 0) {
			this.props.groupView.ClearMemberSearch();
		}
	}
	render() {
		let e = this.props.groupView;
		let t = e.isMemberListExpanded;
		let r = e.GetMemberSearch();
		let n = "MemberListColumn";
		let i = (0, Localize)("#Tooltip_MemberCollapse");
		if (!t) {
			n += " MemberListViewCompact";
			i = (0, Localize)("#Tooltip_MemberExpand");
		}
		let a = "MemberListOptionsContainer";
		if (e.IsMemberSearchActive()) {
			a += " SearchActive";
		}
		return A.createElement(
			v.Z,
			{
				className: n,
			},
			A.createElement(
				"div",
				{
					className: a,
				},
				A.createElement(
					"div",
					{
						className:
							"MemberListOption ToggleMemberListView" +
							(r.length > 0 ? " SearchActive" : ""),
						onClick: this.OnMemberListToggleViewClick,
						title: i,
					},
					A.createElement(p.F2T, null),
				),
				A.createElement(
					"form",
					{
						className: "socialInputContainer",
						name: "friendSearchForm",
						onSubmit: this.OnSearchSubmit,
					},
					A.createElement(
						"div",
						{
							className: "inputContainer no-drag",
						},
						A.createElement("input", {
							className: "friendSearchInput",
							type: "text",
							name: "memberlistSearch",
							placeholder: (0, Localize)("#SearchByName"),
							value: r,
							onChange: this.OnSearchInput,
							onKeyDown: this.OnSearchKeyDown,
							onFocus: this.OnSearchFocus,
							onBlur: this.OnSearchBlur,
							autoComplete: "off",
						}),
						e.has_search_error
							? A.createElement(
									"div",
									{
										className: "friendSearchError",
										title: (0, Localize)("#SearchError"),
									},
									A.createElement(p.eTF, {
										color: "red",
									}),
								)
							: A.createElement(
									"div",
									{
										className: "friendSearchClear",
										onClick: this.OnClearSearch,
									},
									A.createElement(p.sED, null),
								),
					),
				),
			),
			A.createElement(
				v.Z,
				{
					style: {
						display: "flex",
						flex: 1,
						position: "relative",
					},
					"flow-children": "column",
				},
				e.GetGroup().BIsMemberListVirtualized()
					? A.createElement(N, {
							groupView: this.props.groupView,
							inactive: this.props.inactive,
							context: this.GetFriendRenderContext(),
						})
					: A.createElement(z, {
							groupView: this.props.groupView,
							inactive: this.props.inactive,
							context: this.GetFriendRenderContext(),
						}),
			),
			A.createElement("div", {
				className: "disconnectBlocker",
			}),
		);
	}
};
(0, n.Cg)([C.oI], T.prototype, "OnMemberListToggleViewClick", null);
(0, n.Cg)([C.oI], T.prototype, "OnSearchInput", null);
(0, n.Cg)([C.oI], T.prototype, "OnSearchSubmit", null);
(0, n.Cg)([C.oI], T.prototype, "OnSearchKeyDown", null);
(0, n.Cg)([C.oI], T.prototype, "OnClearSearch", null);
(0, n.Cg)([C.oI], T.prototype, "OnSearchFocus", null);
(0, n.Cg)([C.oI], T.prototype, "OnSearchBlur", null);
T = (0, n.Cg)([g.PA], T);
let R = class extends A.Component {
	m_renderContext;
	GetFriendRenderContext() {
		let e = this.props.groupView.GetGroup();
		if (!this.m_renderContext || this.m_renderContext.group != e) {
			this.m_renderContext = {
				group: e,
				chatContext: "chatmemberlistselection",
			};
		}
		return this.m_renderContext;
	}
	GetMembersMatchingSearch(e) {
		let t = L(this.props.groupView.GetGroup().memberList.member_list, e);
		t.sort(h.$c.DefaultFriendSortComparator);
		return t;
	}
	OnSearchInput(e) {
		this.props.groupView.UpdateMemberSearch(e.currentTarget.value);
	}
	OnSearchSubmit(e) {
		e.preventDefault();
		let t = this.props.groupView;
		let r = t.normalizedMemberSearch;
		if (r && r.length) {
			let t = this.GetMembersMatchingSearch(r);
			if (t.length) {
				t[0].OpenChatDialog((0, u.CO)(e));
			}
		}
		t.ClearMemberSearch();
	}
	OnSearchKeyDown(e) {
		if (e.keyCode == 27) {
			e.preventDefault();
			e.currentTarget.blur();
			this.props.groupView.ClearMemberSearch();
		}
	}
	OnClearSearch() {
		this.props.groupView.ClearMemberSearch();
	}
	OnSearchFocus() {
		this.props.groupView.UpdateMemberSearch(
			this.props.groupView.GetMemberSearch(),
		);
	}
	OnSearchBlur() {
		if (this.props.groupView.GetMemberSearch().length == 0) {
			this.props.groupView.ClearMemberSearch();
		}
	}
	render() {
		let e = this.props.groupView;
		let t = e.GetMemberSearch();
		let r = "MemberListOptionsContainer";
		if (e.IsMemberSearchActive()) {
			r += " SearchActive";
		}
		const n = (e) => ({
			onActivate: (t) => {
				e.OpenChatDialog((0, u.CO)(t));
				this.props.onAction();
			},
			onOKActionDescription: (0, Localize)("#Friend_Menu_SendMessage"),
		});
		return A.createElement(
			v.Z,
			{
				className: "GamepadMode MemberListColumn",
				"flow-children": "column",
			},
			A.createElement(
				E.g,
				null,
				A.createElement(
					"div",
					{
						className: r,
					},
					A.createElement(
						"form",
						{
							className: "socialInputContainer",
							name: "friendSearchForm",
							onSubmit: this.OnSearchSubmit,
						},
						A.createElement(
							v.Z,
							{
								className: "inputContainer no-drag",
								"flow-children": "row",
							},
							A.createElement(I.BA, {
								className: "friendSearchInput",
								type: "text",
								name: "memberlistSearch",
								placeholder: (0, Localize)("#SearchByName"),
								value: t,
								onChange: this.OnSearchInput,
								onKeyDown: this.OnSearchKeyDown,
								onFocus: this.OnSearchFocus,
								onBlur: this.OnSearchBlur,
								autoComplete: "off",
							}),
							e.has_search_error
								? A.createElement(
										"div",
										{
											className: "friendSearchError",
											title: (0, Localize)("#SearchError"),
										},
										A.createElement(p.eTF, {
											color: "red",
										}),
									)
								: A.createElement(
										v.Z,
										{
											className: "friendSearchClear",
											onActivate: this.OnClearSearch,
										},
										A.createElement(p.sED, null),
									),
						),
					),
				),
				A.createElement(
					v.Z,
					{
						style: {
							display: "flex",
							flex: 1,
							position: "relative",
							minHeight: "300px",
						},
						"flow-children": "column",
					},
					e.GetGroup().BIsMemberListVirtualized()
						? A.createElement(N, {
								groupView: this.props.groupView,
								inactive: this.props.inactive,
								context: this.GetFriendRenderContext(),
								fnGetPanelProps: n,
							})
						: A.createElement(z, {
								groupView: this.props.groupView,
								inactive: this.props.inactive,
								context: this.GetFriendRenderContext(),
								fnGetPanelProps: n,
							}),
				),
				A.createElement("div", {
					className: "disconnectBlocker",
				}),
			),
		);
	}
};
function k(e) {
	if (e) {
		return 36;
	} else {
		return 28;
	}
}
function D(e) {
	if (e) {
		return 44;
	} else {
		return 36;
	}
}
(0, n.Cg)([C.oI], R.prototype, "OnSearchInput", null);
(0, n.Cg)([C.oI], R.prototype, "OnSearchSubmit", null);
(0, n.Cg)([C.oI], R.prototype, "OnSearchKeyDown", null);
(0, n.Cg)([C.oI], R.prototype, "OnClearSearch", null);
(0, n.Cg)([C.oI], R.prototype, "OnSearchFocus", null);
(0, n.Cg)([C.oI], R.prototype, "OnSearchBlur", null);
R = (0, n.Cg)([g.PA], R);
let N = class extends A.Component {
	render() {
		const { groupView: e } = this.props;
		const t = e.IsMemberSearchActive() && e.search_results !== undefined;
		return A.createElement(M, null, ({ height: e, width: r }) =>
			t
				? A.createElement(G, {
						...this.props,
						width: r,
						height: e,
					})
				: A.createElement(F, {
						...this.props,
						width: r,
						height: e,
					}),
		);
	}
};
N = (0, n.Cg)([g.PA], N);
let F = class extends A.Component {
	static contextType = l.QO;
	render() {
		const {
			width: e,
			height: t,
			groupView: r,
			context: n,
			fnGetPanelProps: i,
		} = this.props;
		const a = r.GetGroup().memberCountTotal;
		let s = this.props.groupView.GetVirtualizedMemberListView();
		s.GetViewChangenumber();
		return A.createElement(
			b.Y1,
			{
				width: e,
				height: t,
				itemCount: a,
				itemSize: D(this.context?.IN_GAMEPADUI),
				overscanCount: 10,
				onItemsRendered: this.OnItemsRendered,
				itemKey: (e) => s.GetAccountIDAt(e) || e,
				style: {
					overflowX: "hidden",
				},
			},
			(e) =>
				A.createElement(O, {
					...e,
					virtualizer: s,
					groupView: r,
					context: n,
					fnGetPanelProps: i,
				}),
		);
	}
	OnItemsRendered(e) {
		this.props.groupView
			.GetVirtualizedMemberListView()
			.SetViewExtents(e.visibleStartIndex, e.visibleStopIndex);
	}
};
(0, n.Cg)([C.oI], F.prototype, "OnItemsRendered", null);
F = (0, n.Cg)([g.PA], F);
let G = class extends A.Component {
	static contextType = l.QO;
	render() {
		const {
			width: e,
			height: t,
			groupView: r,
			context: n,
			fnGetPanelProps: i,
		} = this.props;
		const a = r.search_results.length;
		return A.createElement(
			b.Y1,
			{
				width: e,
				height: t,
				itemCount: a,
				itemSize: D(this.context?.IN_GAMEPADUI),
				overscanCount: 10,
				itemKey: (e) => r.search_results[e].friend.accountid,
				style: {
					overflowX: "hidden",
				},
			},
			(e) =>
				A.createElement(P, {
					...e,
					player: r.search_results[e.index].friend,
					groupView: r,
					context: n,
					fnGetPanelProps: i,
				}),
		);
	}
};
G = (0, n.Cg)([g.PA], G);
class O extends A.Component {
	render() {
		const {
			index: e,
			style: t,
			virtualizer: r,
			groupView: n,
			context: i,
			fnGetPanelProps: a,
		} = this.props;
		const s = r.GetAccountIDAt(e);
		if (!s) {
			return null;
		}
		const o = r.GetMember(s);
		if (o) {
			return A.createElement(P, {
				player: o,
				groupView: n,
				style: t,
				context: i,
				fnGetPanelProps: a,
			});
		} else {
			return null;
		}
	}
}
const P = ({
	style: e,
	player: t,
	groupView: r,
	className: n,
	bHideGameName: i,
	context: a,
	fnGetPanelProps: s,
}) => {
	let o = (0, l.Qn)();
	let c = s ? s(t) : {};
	return A.createElement(
		v.Z,
		{
			style: {
				...e,
				height: `${D(o)}px`,
			},
			...c,
			className: n,
		},
		A.createElement(U, {
			friend: t,
			bHideGameName: i,
			groupView: r,
			context: a,
		}),
	);
};
function L(e, t) {
	return e.filter((e) => e.BMatchesSearchString(t, false));
}
let z = class extends A.Component {
	static contextType = l.QO;
	state = {
		collapsedBuckets: {},
	};
	m_disposeGetMemberList;
	constructor(e) {
		super(e);
		this.m_disposeGetMemberList =
			m.xm.GroupMemberStore.RegisterForGroupMemberList(
				this.OnMemberListChanged,
				e.groupView.GetGroup().GetGroupID(),
			);
	}
	OnMemberListChanged() {
		this.forceUpdate();
	}
	componentWillUnmount() {
		this.m_disposeGetMemberList.unregister();
	}
	SortedPlayerSortFunc(e, t) {
		return e.display_name.localeCompare(t.display_name);
	}
	BuildFilteredBuckets(e, t) {
		let r = [];
		for (let n of e) {
			let e = L(n.member_list, t);
			if (e.length > 0) {
				let t = new y.rV(n.id, this.SortedPlayerSortFunc, () => {});
				t.SetMembers(e);
				r.push(t);
			}
		}
		return r;
	}
	render() {
		const {
			inactive: e,
			groupView: t,
			context: r,
			fnGetPanelProps: n,
		} = this.props;
		const { collapsedBuckets: i } = this.state;
		if (e) {
			return null;
		}
		let a = m.xm.GroupMemberStore.GetGroupMemberList(t.GetGroup().GetGroupID());
		if (a.length == 0) {
			return null;
		}
		let s = t.normalizedMemberSearch;
		if (s.length > 0) {
			a = this.BuildFilteredBuckets(a, s);
		}
		const o = (e, i, s) => {
			const o = a[e];
			const l = o.id === y.fW ? "partybeacon" : "regular";
			return A.createElement(P, {
				style: s,
				className: `chatroomBucket_${l}`,
				bHideGameName: o.BIsGameGroup(),
				groupView: t,
				player: o.member_list[i],
				context: r,
				fnGetPanelProps: n,
			});
		};
		const l = (e, t) => {
			const r = a[e];
			const n = i[r.id];
			return A.createElement(x, {
				collapsible: a.length > 1,
				collapsed: n,
				memberCount: r.member_list.length,
				name: r.name,
				onCollapseChanged: () =>
					this.setState({
						collapsedBuckets: {
							...i,
							[r.id]: !n,
						},
					}),
				style: t,
			});
		};
		const c = this.context?.IN_GAMEPADUI;
		return A.createElement(
			"div",
			{
				className: (0, B.A)(
					!c && "CompactFriendsList",
					"chatRoomMembers",
					"groupMemberList",
				),
			},
			A.createElement(
				"div",
				{
					className: "friendGroup",
					style: {
						width: "100%",
						height: "100%",
					},
				},
				A.createElement(
					"div",
					{
						className: "ChatRoomMemberScrollList_List",
						style: {
							width: "100%",
							height: "100%",
							boxSizing: "border-box",
						},
					},
					A.createElement(M, null, ({ width: e, height: t }) =>
						A.createElement(
							W,
							{
								width: e,
								height: t,
								buckets: a.map((e) => (i[e.id] ? [] : e.member_list)),
								itemSize: D(c),
								estimatedItemSize: D(c),
								renderBucketHeader: l,
								bucketHeaderSize: k(c),
								itemKey: (e, t) => a[e].member_list[t].accountid,
							},
							o,
						),
					),
				),
			),
		);
	}
};
(0, n.Cg)([C.oI], z.prototype, "OnMemberListChanged", null);
z = (0, n.Cg)([g.PA], z);
class x extends A.PureComponent {
	render() {
		const {
			collapsed: e,
			collapsible: t,
			onCollapseChanged: r,
			style: n,
			memberCount: i,
			name: a,
		} = this.props;
		return A.createElement(
			"div",
			{
				className: (0, B.A)("groupName", e && "Collapsed"),
				onClick: () => t && r(),
				style: n,
			},
			A.createElement(
				"div",
				{
					className: "groupIcon",
				},
				A.createElement(p.YJl, null),
			),
			t &&
				A.createElement(
					"div",
					{
						className: "ExpandPlusMinus",
					},
					A.createElement(p.f5w, null),
				),
			A.createElement(
				"span",
				{
					className: "groupCountCollapsed",
				},
				i,
			),
			A.createElement(
				"div",
				{
					className: "groupLabelsContainer",
				},
				A.createElement(
					"span",
					{
						className: "groupNameLabel",
					},
					a,
				),
				A.createElement(
					"span",
					{
						className: "groupCount",
					},
					"(",
					i,
					")",
				),
			),
		);
	}
}
let U = class extends A.Component {
	OnFriendSelected(e, t) {
		this.props.friend.OpenChatDialog((0, u.CO)(t));
		this.props.groupView.ClearMemberSearch();
	}
	render() {
		const {
			friend: e,
			groupView: t,
			context: r,
			bHideGameName: n,
		} = this.props;
		let i = [];
		let a = "";
		let s = t.GetGroup();
		let o = t.isMemberListExpanded;
		let c = s.GetMemberRank(e.accountid);
		let m = e.efriendrelationship;
		switch (c) {
			default:
				break;
			case 30:
				a = "Moderator";
				break;
			case 40:
				a = "Officer";
				break;
			case 50:
				a = "Owner";
				if (!s.BIsClanChatRoom()) {
					i.push(
						A.createElement(
							"div",
							{
								key: "rankIcon",
								className:
									"rankIcon rankOwner" + (e.is_friend ? " isFriend" : ""),
							},
							A.createElement(p.OeC, null),
						),
					);
				}
		}
		if (s.BIsClanChatRoom()) {
			if (c >= 40) {
				i.push(
					A.createElement(
						"div",
						{
							key: "rankIcon",
							className: "rankIcon rankOwner",
						},
						A.createElement("img", {
							src:
								l.TS.COMMUNITY_CDN_URL +
								"public/images/skin_1/comment_modindicator_officer.png",
						}),
					),
				);
			} else if (c >= 30) {
				i.push(
					A.createElement(
						"div",
						{
							key: "rankIcon",
							className: "rankIcon rankOwner",
						},
						A.createElement("img", {
							src:
								l.TS.COMMUNITY_CDN_URL +
								"public/images/skin_1/comment_modindicator_moderator.png",
						}),
					),
				);
			}
		}
		switch (m) {
			case 3:
			case 6:
				i.push(
					A.createElement(
						"div",
						{
							key: "friendIcon",
							className: "chatMemberFriendIcon",
						},
						A.createElement(p.GSe, null),
					),
				);
				break;
			case 2:
				i.push(
					A.createElement(
						"div",
						{
							key: "friendIcon",
							className: "chatMemberFriendIcon",
						},
						A.createElement(p.GSe, {
							bPending: true,
						}),
					),
				);
		}
		if (s.GetMemberPartyBeacon(e.accountid)) {
			i.push(
				A.createElement(
					"div",
					{
						key: "playIcon",
						className: "chatMemberPartyBeaconIcon",
					},
					A.createElement(p.jGG, null),
				),
			);
		}
		let u = {
			friend: e,
			context: r,
			className: a,
			action: this.OnFriendSelected,
			bHideGameName: n,
			noActions: r.chatContext == "chatmemberlistselection",
		};
		if (o) {
			return A.createElement(_.bP, {
				...u,
				listStatusIndicatorLeft: i,
			});
		} else {
			return A.createElement(
				_.gv,
				{
					...u,
				},
				i,
			);
		}
	}
};
(0, n.Cg)([C.oI], U.prototype, "OnFriendSelected", null);
U = (0, n.Cg)([g.PA], U);
class W extends A.Component {
	m_memoizedIndices = {};
	m_ref = A.createRef();
	componentDidUpdate(e) {
		const { renderBucketFooter: t, renderBucketHeader: r } = this.props;
		const n = t || r;
		if (
			e.buckets.length != this.props.buckets.length &&
			this.m_ref?.current &&
			n
		) {
			this.m_ref.current.resetAfterIndex(0, true);
		}
	}
	render() {
		this.m_memoizedIndices = {};
		const {
			width: e,
			height: t,
			children: r,
			renderBucketFooter: n,
			renderBucketHeader: i,
			buckets: a,
		} = this.props;
		let s = a.reduce((e, t) => e + t.length, 0);
		if (i) {
			s += a.length;
		}
		if (n) {
			s += a.length;
		}
		return A.createElement(
			b._m,
			{
				width: e,
				height: t,
				itemCount: s,
				itemSize: this.CalculateItemHeight,
				itemKey: this.ItemKey,
				ref: this.m_ref,
				style: {
					overflowX: "hidden",
				},
			},
			(e) => {
				const { bucket: t, item: a } = this.RawToRelativeIndex(e.index);
				if (a === "header") {
					return i(t, e.style);
				} else if (a === "footer") {
					return n(t, e.style);
				} else {
					return r(t, a, e.style);
				}
			},
		);
	}
	ItemKey(e) {
		const { itemKey: t } = this.props;
		const { bucket: r, item: n } = this.RawToRelativeIndex(e);
		if (n === "header" || n === "footer") {
			return `${r}_${n}_${e}`;
		} else {
			return t(r, n);
		}
	}
	CalculateItemHeight(e) {
		const { bucket: t, item: r } = this.RawToRelativeIndex(e);
		const {
			bucketHeaderSize: n,
			bucketFooterSize: i,
			itemSize: a,
		} = this.props;
		if (r === "header") {
			if (typeof n == "function") {
				return n(t);
			} else if (typeof n == "number") {
				return n;
			} else {
				console.warn(
					"[VirtualizedBucketList]: Header found but no header size provided!",
				);
				return 0;
			}
		} else if (r === "footer") {
			if (typeof i == "function") {
				return i(t);
			} else if (typeof i == "number") {
				return i;
			} else {
				console.warn(
					"[VirtualizedBucketList]: Footer found but no footer size provided!",
				);
				return 0;
			}
		} else if (typeof a == "function") {
			return a(t, r);
		} else {
			return a;
		}
	}
	RawToRelativeIndex(e) {
		if (this.m_memoizedIndices[e]) {
			return this.m_memoizedIndices[e];
		}
		if (this.m_memoizedIndices[e - 1]) {
			const t = this.CalculateNextRelativeIndex(this.m_memoizedIndices[e - 1]);
			this.m_memoizedIndices[e] = t;
			return t;
		}
		this.m_memoizedIndices[e] = this.InternalRawToRelativeIndex(e);
		return this.m_memoizedIndices[e];
	}
	InternalRawToRelativeIndex(e) {
		const {
			buckets: t,
			renderBucketHeader: r,
			renderBucketFooter: n,
		} = this.props;
		let i = 0;
		let a = r ? -1 : 0;
		while (e > 0) {
			if (!(e > t[i].length + (n ? 1 : 0))) {
				a += e;
				break;
			}
			e -= t[i].length + (n ? 1 : 0) + (r ? 1 : 0);
			i++;
		}
		if (a === -1) {
			return {
				bucket: i,
				item: "header",
			};
		} else if (a === t[i].length) {
			return {
				bucket: i,
				item: "footer",
			};
		} else {
			return {
				bucket: i,
				item: a,
			};
		}
	}
	CalculateNextRelativeIndex(e) {
		const {
			buckets: t,
			renderBucketFooter: r,
			renderBucketHeader: n,
		} = this.props;
		const { bucket: i, item: a } = e;
		const s = !!n;
		const o = !!r;
		if (a === "header") {
			if (t[i].length) {
				return {
					bucket: i,
					item: 0,
				};
			} else if (o) {
				return {
					bucket: i,
					item: "footer",
				};
			} else {
				return {
					bucket: i + 1,
					item: "header",
				};
			}
		} else if (a === "footer") {
			return {
				bucket: i + 1,
				item: s ? "header" : 0,
			};
		} else if (a < t[i].length - 1) {
			return {
				bucket: i,
				item: a + 1,
			};
		} else if (o) {
			return {
				bucket: i,
				item: "footer",
			};
		} else {
			return {
				bucket: i + 1,
				item: s ? "header" : 0,
			};
		}
	}
}
(0, n.Cg)([C.oI], W.prototype, "ItemKey", null);
(0, n.Cg)([C.oI], W.prototype, "CalculateItemHeight", null);
var V = require("./47036.js");
var H = require("./87949.js");
var j = require("./53414.js");
var q = require("./65726.js");
var Q = require(/*webcrack:missing*/ "./90095.js");
var Z = require(/*webcrack:missing*/ "./23038.js");
var Y = require("./56654.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var X = require(/*webcrack:missing*/ "./49455.js");
var J = require(/*webcrack:missing*/ "./31958.js");
var $ = require("./1918.js");
var ee = require("./92564.js");
var te = require("./14182.js");
var re = require("./39590.js");
var ne = require("./88620.js");
var ie = require("./43229.js");
var ae = require("./5222.js");
var se = require(/*webcrack:missing*/ "./17385.js");
var oe = require("./58360.js");
var le = oe;
var ce = require("./64587.js");
var me = require(/*webcrack:missing*/ "./4690.js");
var ue = require(/*webcrack:missing*/ "./72476.js");
var de = require(/*webcrack:missing*/ "./11131.js");
const Ae = A.lazy(() => require.e(7653).then(require.bind(require, 53694)));
const pe = 10000;
const ge = 60000;
export let vY = class extends A.Component {
	static contextType = ue.QO;
	m_msWentInactive = 0;
	m_bShownTabIsGroupChat = true;
	m_keyEventListener = "keydown";
	m_refBroadcastContainer = A.createRef();
	m_elMainContent;
	constructor(e) {
		super(e);
		this.state = {
			dropToInviteFriend: undefined,
			bShowBothChats: false,
		};
		if (this.props.popup) {
			this.props.popup.addEventListener(
				this.m_keyEventListener,
				this.OnHTMLKeyEvent,
			);
		}
	}
	OnDragEnter(e, t) {
		(0, X.w)(
			(e && e.type == "friend") || t,
			"Invalid data type passed to ChatRoomGroupDialog.OnDragEnter",
		);
		if (e) {
			let t = e;
			if (
				t.friend &&
				t.sourceContext.group != this.props.groupView.GetGroup()
			) {
				this.setState({
					dropToInviteFriend: t.friend,
				});
			}
		}
		return true;
	}
	OnDragLeave() {
		if (this.state.dropToInviteFriend) {
			this.setState({
				dropToInviteFriend: undefined,
			});
		}
	}
	OnDragOver(e) {
		e.dataTransfer.dropEffect = "move";
	}
	OnDrop(e, t) {
		(0, X.w)(
			(e && e.type == "friend") || t.dataTransfer.files.length != 0,
			"Invalid data type passed to ChatRoomGroupDialog.OnDrop",
		);
		let r = this.props.groupView.GetChatView();
		if (e && e.type == "friend") {
			let r = e;
			if (r.friend) {
				if (this.state.dropToInviteFriend) {
					this.setState({
						dropToInviteFriend: undefined,
					});
				}
				u.ZM.DragDropManager.SetDropConsumed();
				let e = t.currentTarget.ownerDocument.defaultView;
				if (r.sourceContext.group != this.props.groupView.GetGroup()) {
					(0, ee.nn)(
						{
							invitee: r.friend,
							chatview: null,
							invitedto: this.props.groupView.GetGroup(),
						},
						(0, u.CO)(t),
						e,
					);
				}
			}
		} else if (t.dataTransfer.files.length != 0) {
			let e = t.dataTransfer.files[0];
			r.SetFileToUpload(e);
		}
	}
	componentDidUpdate(e) {
		if (e.isActive && !this.props.isActive) {
			this.OnBecameInactive();
		} else if (this.props.isActive) {
			this.OnBecameActive();
		}
	}
	m_iIntervalInactive;
	m_iIntervalVeryInactive;
	OnBecameInactive() {
		this.m_msWentInactive = performance.now();
		this.m_iIntervalInactive = SetBackgroundTimeout(
			this.forceUpdate.bind(this),
			10100,
		);
		this.m_iIntervalVeryInactive = SetBackgroundTimeout(
			this.forceUpdate.bind(this),
			60100,
		);
	}
	OnBecameActive() {
		this.m_msWentInactive = 0;
		this.ClearIntervals();
	}
	GetTitleBarDragDropProps() {
		let e = {
			rgAcceptedTypes: [],
			bAcceptsFiles: true,
		};
		e.fnDrop = this.OnDrop;
		return e;
	}
	GetChatBodyDragDropProps() {
		let e = {
			rgAcceptedTypes: ["friend"],
			bAcceptsFiles: true,
		};
		e.fnDragEnter = this.OnDragEnter;
		e.fnDragLeave = this.OnDragLeave;
		e.fnDragOver = this.OnDragOver;
		e.fnDrop = this.OnDrop;
		return e;
	}
	ClearIntervals() {
		if (this.m_iIntervalInactive) {
			ClearBackgroundTimeout(this.m_iIntervalInactive);
			this.m_iIntervalInactive = undefined;
		}
		if (this.m_iIntervalVeryInactive) {
			ClearBackgroundTimeout(this.m_iIntervalVeryInactive);
			this.m_iIntervalVeryInactive = undefined;
		}
	}
	OnHTMLKeyEvent(e) {
		if (
			l.TS.IN_CLIENT &&
			this.props.isActive &&
			e.altKey &&
			!e.ctrlKey &&
			!e.shiftKey
		) {
			const { groupView: t } = this.props;
			if (!t) {
				return;
			}
			if (e.keyCode === 38) {
				t.SelectPreviousChannel();
			}
			if (e.keyCode === 40) {
				t.SelectNextChannel();
			}
		}
	}
	componentDidMount() {
		(this.props.popup ? this.props.popup : window).addEventListener(
			"resize",
			this.OnLayoutChange,
		);
	}
	componentWillUnmount() {
		this.ClearIntervals();
		if (this.props.popup) {
			this.props.popup.removeEventListener(
				this.m_keyEventListener,
				this.OnHTMLKeyEvent,
			);
		}
		(this.props.popup ? this.props.popup : window).removeEventListener(
			"resize",
			this.OnLayoutChange,
		);
	}
	CalculateBroadcastSectionStyles(e) {
		if (this.props.groupView.m_bChatHidden) {
			return {
				width: "100%",
				height: "100%",
			};
		}
		const {
			nWatchPartyBroadcastHeightPercentage: t,
			nWatchPartyBroadcastWidthPercentage: r,
		} = u.ZM.UIDisplayPrefs;
		const n = {};
		if (e) {
			const e = t || 66;
			n.height = `${e}%`;
			if (this.m_elMainContent) {
				const { clientWidth: t, clientHeight: r } = this.m_elMainContent;
				const i = (9 / 16) * t + 50;
				const a = (0, J.OQ)(e, 1, (i / r) * 100);
				n.height = `${a}%`;
			}
		} else {
			n.width = r ? `${r}%` : "66%";
			n.overflowY = "auto";
		}
		return n;
	}
	ShouldShowVerticalBroadcastChat() {
		if (this.props.groupView.m_bShowVerticalBroadcastChat !== undefined) {
			return this.props.groupView.m_bShowVerticalBroadcastChat;
		} else {
			return (
				!!this.m_elMainContent &&
				this.m_elMainContent.clientHeight / this.m_elMainContent.clientWidth >
					5 / 7
			);
		}
	}
	OnLayoutChange() {
		this.forceUpdate();
	}
	OnGrabberMouseDown(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		t.addEventListener("mousemove", this.HandleMouseMove);
		t.addEventListener("mouseup", this.UnregisterDragEvents);
		this.setState({
			bDraggingChatGrabber: true,
		});
	}
	HandleMouseMove(e) {
		e.preventDefault();
		e.stopPropagation();
		let t = this.m_refBroadcastContainer.current.getBoundingClientRect();
		let r =
			this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
		const n = this.ShouldShowVerticalBroadcastChat();
		const i = n ? t.top : t.left;
		const a = n ? e.clientY : e.clientX;
		const s = n ? r.height : r.width;
		const o = (0, J.OQ)(((a - i) / s) * 100, 1, 100);
		const l = n
			? "nWatchPartyBroadcastHeightPercentage"
			: "nWatchPartyBroadcastWidthPercentage";
		u.ZM.SetUIDisplayPref(l, o);
	}
	UnregisterDragEvents(e) {
		e.view.removeEventListener("mousemove", this.HandleMouseMove);
		e.view.removeEventListener("mouseup", this.UnregisterDragEvents);
		this.setState({
			bDraggingChatGrabber: false,
		});
	}
	OnLocalStreamChange(e) {
		this.props.groupView.SetLocalBroadcastId(e);
	}
	HideChat() {
		this.props.groupView.SetChatHidden(true);
	}
	ShowChat() {
		this.props.groupView.SetChatHidden(false);
	}
	ToggleVerticalBroadcastChat() {
		this.props.groupView.SetVerticalBroadcastChat(
			!this.ShouldShowVerticalBroadcastChat(),
		);
		this.props.groupView.SetChatHidden(false);
	}
	SetMainContentRef(e) {
		this.m_elMainContent = e;
		this.OnLayoutChange();
	}
	ToggleShowBothChats() {
		if (this.state.bShowBothChats) {
			if (this.m_bShownTabIsGroupChat && this.state.bShowBothChats) {
				this.props.groupView.SetGlobalBroadcastChatShown(false);
			}
		} else {
			this.m_bShownTabIsGroupChat = !this.props.groupView.m_bShowGlobalChat;
			this.props.groupView.SetGlobalBroadcastChatShown(true);
		}
		this.setState({
			bShowBothChats: !this.state.bShowBothChats,
		});
	}
	ToggleVoiceChat() {
		let e = this.props.groupView;
		let t = e.GetGroup();
		let r = e.GetSelectedChatView().chat;
		if (m.xm.VoiceStore.IsVoiceActiveForGroup(t.GetGroupID())) {
			m.xm.VoiceStore.OnUserEndVoiceChat();
		} else if (r.BIsVoiceAllowed()) {
			(0, a.pg)(
				A.createElement(_1, {
					groupView: e,
				}),
				this.props.popup,
			);
		}
	}
	RenderInnerChatTabs() {
		const e = this.props.groupView;
		const t = e.GetGroup();
		return A.createElement(
			"div",
			{
				className: "ChatBodyControls",
			},
			A.createElement(
				"div",
				{
					className: "Close",
					onClick: this.HideChat,
					title: (0, Localize)("#Broadcast_View_HideChat"),
				},
				A.createElement(p.K7s, {
					showChat: false,
				}),
			),
			A.createElement(
				"div",
				{
					className: "InnerChatTabs",
				},
				A.createElement(
					"div",
					{
						className: (0, B.A)(
							"InnerChatTab",
							!e.m_bShowGlobalChat && "Active",
						),
						onClick: () => e.SetGlobalBroadcastChatShown(false),
					},
					A.createElement(q.RB, {
						group: t,
					}),
					A.createElement(j.I, {
						group: t,
						micro: true,
					}),
					A.createElement(
						"span",
						{
							className: "InnerChatTabLabel",
						},
						(0, Localize)("#Broadcast_Chat_GroupChatTab", t.name),
					),
				),
				(!this.state.bShowBothChats ||
					(this.state.bShowBothChats &&
						this.ShouldShowVerticalBroadcastChat())) &&
					A.createElement(
						"div",
						{
							className: (0, B.A)(
								"InnerChatTab",
								e.m_bShowGlobalChat && "Active",
							),
							onClick: () => e.SetGlobalBroadcastChatShown(true),
						},
						A.createElement(p.qzq, null),
						A.createElement(
							"span",
							{
								className: "InnerChatTabLabel",
							},
							(0, Localize)("#Broadcast_Chat_PublicChatTab"),
						),
					),
			),
			A.createElement(
				"div",
				{
					className: "showBothTabs",
					onClick: this.ToggleShowBothChats,
					title: (0, Localize)(
						this.state.bShowBothChats
							? "#Broadcast_View_ShowSingleChats"
							: "#Broadcast_View_ShowBothChats",
					),
				},
				A.createElement(p.QQ4, null),
			),
		);
	}
	render() {
		if (this.props.bSteamDeck) {
			return this.renderSteamDeck();
		}
		if (!this.props.groupView || !this.props.groupView.GetChatView()) {
			return null;
		}
		let e = this.props.groupView.GetGroup();
		let t = this.props.groupView;
		let r = t.GetSelectedChatView();
		let n = t.GetPopoverChatView();
		let i = r.chat;
		let a = this.state.bShowBothChats && t.isBroadcastShown;
		let s = t.m_bShowGlobalChat;
		let o = (s && a) || (!s && !a);
		let c = (a && t.isBroadcastShown) || (!a && s);
		let u = this.state.dropToInviteFriend
			? A.createElement(ee.J3, {
					chatView: r,
					friend: this.state.dropToInviteFriend,
				})
			: null;
		let g = false;
		let h = null;
		let C = this.ShouldShowVerticalBroadcastChat();
		let _ = t.m_bChatHidden;
		let f = 4;
		if (l.TS.STEAM_TV) {
			f = 2;
		}
		if (e.watching_broadcast_steamid && t.isBroadcastShown) {
			const r = this.CalculateBroadcastSectionStyles(C);
			const n = A.createElement(Ae, {
				ref: this.m_refBroadcastContainer,
				steamID: e.watching_broadcast_steamid.ConvertTo64BitString(),
				localSteamID: t.m_strLocalBroadcastId,
				watchLocation: f,
				bWebRTC: false,
				onRequestClose: t.HideBroadcast,
				onLocalStreamChange: this.OnLocalStreamChange,
				actions: [
					A.createElement("div", {
						key: "ChatPosToggle",
						onClick: this.ToggleVerticalBroadcastChat,
						title: `${C ? (0, Localize)("#Broadcast_View_Stack_H") : (0, Localize)("#Broadcast_View_Stack_V")}`,
						className:
							"BroadcastChatPositionToggle " + (C ? "right" : "bottom"),
					}),
				],
				style: r,
				onTheaterMode: t.ToggleTheaterModeBroadcastChat,
				bVerticalBroadcastChat: !C,
			});
			h = A.createElement(
				A.Fragment,
				null,
				n,
				!_ &&
					A.createElement("div", {
						className:
							"BroadcastChatDivider " + (C ? "vertical" : "horizontal"),
						onMouseDown: this.OnGrabberMouseDown,
					}),
				_ &&
					A.createElement(ee.Ko, {
						onClick: this.ShowChat,
						edge: C ? "bottom" : "right",
					}),
			);
			g = true;
		} else {
			g = false;
		}
		let b = false;
		let y = false;
		let S = {};
		if (!this.props.isActive) {
			S.display = "none";
			let e = this.m_msWentInactive
				? performance.now() - this.m_msWentInactive
				: ge;
			if (e >= pe) {
				b = true;
			}
			if (e >= ge && !h) {
				y = true;
			}
		}
		let B = "chatWindow MultiUserChat";
		let I = "ChatRoomGroupDialog_contents";
		if (n) {
			I += " InsetWindowOpen";
		}
		if (a) {
			I += " BothChatsDisplayed";
		}
		if (e.IsNamedGroupChat()) {
			B += " namedGroup";
		}
		let E = "chatBody";
		if (this.state.dropToInviteFriend) {
			E = "chatBody chatRoomActiveDrop";
		}
		if (m.xm.SettingsStore.FriendsSettings.bCompactFriendsList) {
			B += " compactView";
		}
		if (g) {
			B += " broadcastVisible";
		}
		let M = null;
		if (!this.props.bHideMemberList) {
			M = A.createElement(T, {
				groupView: this.props.groupView,
				inactive: b,
			});
		}
		const R =
			this.props.bHideMessageInput ||
			(t.isBroadcastShown && ((!a && t.m_bShowGlobalChat) || _))
				? null
				: A.createElement(de.gs.Consumer, null, (e) =>
						A.createElement(V.o, {
							key: i.unique_id,
							chatView: t.GetActiveChatView(),
							isActive: this.props.isActive,
							disabled: false,
							ownerWindow: e.ownerWindow,
						}),
					);
		let k;
		let D = A.createElement(
			d.D,
			{
				"flow-children": "column",
				style: S,
				className: "chatHistoryAndMembers",
				...this.GetChatBodyDragDropProps(),
			},
			A.createElement(Z.A, null, u),
			A.createElement(
				"div",
				{
					className: "displayColumn fullWidth",
				},
				A.createElement(
					v.Z,
					{
						"flow-children": "row",
						className: "displayRow minHeightZero",
						navEntryPreferPosition: me.iU.PREFERRED_CHILD,
					},
					A.createElement(
						"div",
						{
							className: "ChatRoomGroupDialog_history",
						},
						m.xm.UIStore.show_winter_sale_ui &&
							!m.xm.SettingsStore.FriendsSettings.bDisableRoomEffects &&
							A.createElement($.Y, {
								effectManager: i.RoomEffectManager(),
							}),
						A.createElement(re.D, {
							chatView: r,
							isActive: this.props.isActive,
						}),
						A.createElement(
							Z.A,
							null,
							A.createElement(ee.n$, {
								groupView: t,
							}),
						),
					),
					A.createElement("div", {
						className: "dropTargetBox",
					}),
					M,
				),
				R,
			),
		);
		if (e.watching_broadcast_steamid && t.isBroadcastShown) {
			const r = A.createElement(Y.I, {
				emoticonStore: m.xm.ChatStore.EmoticonStore,
				steamID: e.watching_broadcast_steamid.ConvertTo64BitString(),
				broadcastID: "0",
				watchLocation: f,
				hidden: !t.m_bShowGlobalChat,
				className: this.state.bDraggingChatGrabber ? "avoidEvents" : undefined,
			});
			k = A.createElement(A.Fragment, null, r);
		}
		let N = "chatStack " + (C ? "displayRow" : "displayColumn");
		if (c) {
			N += " GlobalChatVisible";
		}
		if (o) {
			N += " GroupChatVisible";
		}
		return A.createElement(
			d.D,
			{
				fnCanTakeFocus: () => this.props.isActive,
				"flow-children": "column",
				"data-activechat": this.props.isActive,
				style: S,
				className: B,
				...this.GetTitleBarDragDropProps(),
			},
			!y &&
				!this.props.bHideHeader &&
				!this.context?.IN_GAMEPADUI &&
				A.createElement(
					"div",
					{
						className: "chatHeader titleBarContainer",
					},
					A.createElement("div", {
						className: "chatHeaderGradient",
					}),
					A.createElement(j.z7, {
						groupView: t,
					}),
					A.createElement("div", {
						className: "disconnectBlocker",
					}),
				),
			!y &&
				A.createElement(
					ye,
					{
						className: I,
						readyToRender: e.readyToRender,
					},
					A.createElement(te.aq, {
						groupView: t,
						inactive: b,
					}),
					A.createElement(
						"div",
						{
							className: "ChatRoomGroup_MainAndChatEntry displayColumn",
							ref: this.SetMainContentRef,
						},
						A.createElement(
							"div",
							{
								className: "ChatRoomGroup_Main_ContentAndMembers displayRow",
							},
							A.createElement(
								"div",
								{
									className: `ChatRoomGroup_Main_Content ${C ? "Vertical" : "Horizontal"} ${_ ? "chatHidden" : ""}`,
								},
								h,
								(!t.m_bChatHidden || !t.isBroadcastShown) &&
									A.createElement(
										"div",
										{
											className: E,
										},
										t.isBroadcastShown && this.RenderInnerChatTabs(),
										A.createElement(
											"div",
											{
												className: N,
											},
											D,
											a &&
												A.createElement("div", {
													className: "BothChatsSeperator",
												}),
											a &&
												!this.ShouldShowVerticalBroadcastChat() &&
												A.createElement(
													"div",
													{
														className: "InnerChatTab",
														onClick: () => t.SetGlobalBroadcastChatShown(true),
													},
													A.createElement(p.qzq, null),
													A.createElement(
														"span",
														{
															className: "InnerChatTabLabel",
														},
														(0, Localize)("#Broadcast_Chat_PublicChatTab"),
													),
												),
											k,
										),
										!o && t.isBroadcastShown && R,
									),
							),
						),
					),
				),
		);
	}
	renderSteamDeck() {
		if (!this.props.groupView || !this.props.groupView.GetChatView()) {
			return null;
		}
		let e = this.props.groupView.GetGroup();
		let t = this.props.groupView;
		let r = t.GetSelectedChatView();
		let n = t.GetPopoverChatView();
		let i = r.chat;
		let a = this.state.bShowBothChats && t.isBroadcastShown;
		let s = t.m_bShowGlobalChat;
		let o = (s && a) || (!s && !a);
		let c = (a && t.isBroadcastShown) || (!a && s);
		let u = this.state.dropToInviteFriend
			? A.createElement(ee.J3, {
					chatView: r,
					friend: this.state.dropToInviteFriend,
				})
			: null;
		let g = false;
		let h = null;
		let C = this.ShouldShowVerticalBroadcastChat();
		let _ = t.m_bChatHidden;
		let f = 4;
		if (l.TS.STEAM_TV) {
			f = 2;
		}
		if (e.watching_broadcast_steamid && t.isBroadcastShown) {
			const r = this.CalculateBroadcastSectionStyles(C);
			const n = A.createElement(Ae, {
				ref: this.m_refBroadcastContainer,
				steamID: e.watching_broadcast_steamid.ConvertTo64BitString(),
				localSteamID: t.m_strLocalBroadcastId,
				watchLocation: f,
				bWebRTC: false,
				onRequestClose: t.HideBroadcast,
				onLocalStreamChange: this.OnLocalStreamChange,
				actions: [
					A.createElement("div", {
						key: "ChatPosToggle",
						onClick: this.ToggleVerticalBroadcastChat,
						title: `${C ? (0, Localize)("#Broadcast_View_Stack_H") : (0, Localize)("#Broadcast_View_Stack_V")}`,
						className:
							"BroadcastChatPositionToggle " + (C ? "right" : "bottom"),
					}),
				],
				style: r,
				onTheaterMode: t.ToggleTheaterModeBroadcastChat,
				bVerticalBroadcastChat: !C,
			});
			h = A.createElement(
				A.Fragment,
				null,
				n,
				!_ &&
					A.createElement("div", {
						className:
							"BroadcastChatDivider " + (C ? "vertical" : "horizontal"),
						onMouseDown: this.OnGrabberMouseDown,
					}),
				_ &&
					A.createElement(ee.Ko, {
						onClick: this.ShowChat,
						edge: C ? "bottom" : "right",
					}),
			);
			g = true;
		} else {
			g = false;
		}
		let b = false;
		let y = false;
		let S = {};
		if (!this.props.isActive) {
			S.display = "none";
			let e = this.m_msWentInactive
				? performance.now() - this.m_msWentInactive
				: ge;
			if (e >= pe) {
				b = true;
			}
			if (e >= ge && !h) {
				y = true;
			}
		}
		let B = "chatWindow MultiUserChat";
		if (!r.IsFriendChat()) {
			B += " GroupChat";
		}
		let I = "ChatRoomGroupDialog_contents";
		if (n) {
			I += " InsetWindowOpen";
		}
		if (a) {
			I += " BothChatsDisplayed";
		}
		if (e.IsNamedGroupChat()) {
			B += " namedGroup";
		}
		let E = "chatBody";
		if (this.state.dropToInviteFriend) {
			E = "chatBody chatRoomActiveDrop";
		}
		if (m.xm.SettingsStore.FriendsSettings.bCompactFriendsList) {
			B += " compactView";
		}
		if (g) {
			B += " broadcastVisible";
		}
		const M =
			this.props.bHideMessageInput ||
			(t.isBroadcastShown && ((!a && t.m_bShowGlobalChat) || _))
				? null
				: A.createElement(de.gs.Consumer, null, (e) =>
						A.createElement(V.o, {
							key: i.unique_id,
							chatView: t.GetActiveChatView(),
							isActive: this.props.isActive,
							disabled: false,
							ownerWindow: e.ownerWindow,
						}),
					);
		let T;
		let R = A.createElement(
			v.Z,
			{
				"flow-children": "column",
				style: S,
				className: "chatHistoryAndMembers",
			},
			A.createElement(Z.A, null, u),
			A.createElement(
				"div",
				{
					className: "displayColumn fullWidth",
				},
				A.createElement(
					v.Z,
					{
						"flow-children": "row",
						className: "displayRow minHeightZero",
						navEntryPreferPosition: me.iU.PREFERRED_CHILD,
					},
					A.createElement(
						"div",
						{
							className:
								"ChatRoomGroupDialog_history " +
								(i.GetVoiceAllowed() ? "voiceRoom" : ""),
						},
						m.xm.UIStore.show_winter_sale_ui &&
							!m.xm.SettingsStore.FriendsSettings.bDisableRoomEffects &&
							A.createElement($.Y, {
								effectManager: i.RoomEffectManager(),
							}),
						A.createElement(re.D, {
							chatView: r,
							isActive: this.props.isActive,
						}),
						A.createElement(
							Z.A,
							null,
							A.createElement(ee.n$, {
								groupView: t,
							}),
						),
					),
					A.createElement(be, {
						groupView: t,
					}),
				),
				M,
			),
		);
		if (e.watching_broadcast_steamid && t.isBroadcastShown) {
			const r = A.createElement(Y.I, {
				emoticonStore: m.xm.ChatStore.EmoticonStore,
				steamID: e.watching_broadcast_steamid.ConvertTo64BitString(),
				broadcastID: "0",
				watchLocation: f,
				hidden: !t.m_bShowGlobalChat,
				className: this.state.bDraggingChatGrabber ? "avoidEvents" : undefined,
			});
			T = A.createElement(A.Fragment, null, r);
		}
		let k = "chatStack " + (C ? "displayRow" : "displayColumn");
		if (c) {
			k += " GlobalChatVisible";
		}
		if (o) {
			k += " GroupChatVisible";
		}
		let D = {};
		if (m.xm.VoiceStore.IsVoiceActiveForGroup(e.GetGroupID())) {
			D.onSecondaryButton = () => this.ToggleVoiceChat();
			D.onSecondaryActionDescription = (0, Localize)(
				"#Chat_ChatRoomGroup_EndVoiceChat",
			);
		}
		return A.createElement(
			d.D,
			{
				fnCanTakeFocus: () => this.props.isActive,
				"flow-children": "row",
				"data-activechat": this.props.isActive,
				style: S,
				className: B,
				...this.GetTitleBarDragDropProps(),
				...D,
			},
			A.createElement(
				v.Z,
				{
					"flow-children": "column",
					className: "ChatRoomGroup_WindowContent",
				},
				!y &&
					A.createElement(
						"div",
						{
							className: "chatHeader titleBarContainer",
						},
						A.createElement("div", {
							className: "chatHeaderGradient",
						}),
						A.createElement(j.wu, {
							groupView: t,
						}),
						A.createElement("div", {
							className: "disconnectBlocker",
						}),
					),
				!y &&
					A.createElement(
						ye,
						{
							className: I,
							readyToRender: e.readyToRender,
						},
						false,
						A.createElement(
							"div",
							{
								className: "ChatRoomGroup_MainAndChatEntry displayColumn",
								ref: this.SetMainContentRef,
							},
							A.createElement(
								"div",
								{
									className: "ChatRoomGroup_Main_ContentAndMembers displayRow",
								},
								A.createElement(
									v.Z,
									{
										className: `ChatRoomGroup_Main_Content ${C ? "Vertical" : "Horizontal"} ${_ ? "chatHidden" : ""}`,
										"flow-children": "row",
									},
									h,
									(!t.m_bChatHidden || !t.isBroadcastShown) &&
										A.createElement(
											"div",
											{
												className: E,
											},
											this.context?.IN_GAMEPADUI && A.createElement(H.H, null),
											t.isBroadcastShown && this.RenderInnerChatTabs(),
											A.createElement(
												"div",
												{
													className: k,
												},
												R,
												a &&
													A.createElement("div", {
														className: "BothChatsSeperator",
													}),
												a &&
													!this.ShouldShowVerticalBroadcastChat() &&
													A.createElement(
														"div",
														{
															className: "InnerChatTab",
															onClick: () =>
																t.SetGlobalBroadcastChatShown(true),
														},
														A.createElement(p.qzq, null),
														A.createElement(
															"span",
															{
																className: "InnerChatTabLabel",
															},
															(0, Localize)("#Broadcast_Chat_PublicChatTab"),
														),
													),
												T,
											),
											!o && t.isBroadcastShown && M,
										),
								),
							),
						),
					),
			),
		);
	}
};
(0, n.Cg)([C.oI], vY.prototype, "OnDragEnter", null);
(0, n.Cg)([C.oI], vY.prototype, "OnDragLeave", null);
(0, n.Cg)([C.oI], vY.prototype, "OnDragOver", null);
(0, n.Cg)([C.oI], vY.prototype, "OnDrop", null);
(0, n.Cg)([C.oI], vY.prototype, "OnHTMLKeyEvent", null);
(0, n.Cg)([C.oI], vY.prototype, "ShouldShowVerticalBroadcastChat", null);
(0, n.Cg)([C.oI], vY.prototype, "OnLayoutChange", null);
(0, n.Cg)([C.oI], vY.prototype, "OnGrabberMouseDown", null);
(0, n.Cg)([C.oI], vY.prototype, "HandleMouseMove", null);
(0, n.Cg)([C.oI], vY.prototype, "UnregisterDragEvents", null);
(0, n.Cg)([C.oI], vY.prototype, "OnLocalStreamChange", null);
(0, n.Cg)([C.oI], vY.prototype, "HideChat", null);
(0, n.Cg)([C.oI], vY.prototype, "ShowChat", null);
(0, n.Cg)([C.oI], vY.prototype, "ToggleVerticalBroadcastChat", null);
(0, n.Cg)([C.oI], vY.prototype, "SetMainContentRef", null);
(0, n.Cg)([C.oI], vY.prototype, "ToggleShowBothChats", null);
(0, n.Cg)([C.oI], vY.prototype, "ToggleVoiceChat", null);
vY = (0, n.Cg)([g.PA], vY);
const Ce = (e) => {
	let { groupView: t, className: r, ...n } = e;
	A.useEffect(() => {
		t.SetMemberListCollapsed(false, false);
	});
	let a = A.createElement(R, {
		groupView: t,
		inactive: false,
		onAction: e.closeModal,
	});
	return A.createElement(
		s.eV,
		{
			className: le.GroupMemberListDialog,
			...n,
		},
		A.createElement(i.Y9, null, (0, Localize)("#Chat_MemberGroup_Online")),
		a,
		A.createElement(Se, {
			closeModal: e.closeModal,
		}),
	);
};
export const LC = (e) => {
	let t;
	let { groupView: r, ...n } = e;
	let a = r.GetGroup();
	a.IsNamedGroupChat();
	let o = r.GetGroup().textRoomList;
	let l = r.GetGroup().BCanAdminChannel();
	let [u, d] = A.useState(r.GetActiveChatView().chat.GetRoomID());
	let p = m.xm.ChatStore.GetActiveVoiceChat();
	if (p && p instanceof c.d) {
		let e = p;
		if (e.GetParentGroupID() == a.GetGroupID()) {
			t = A.createElement(
				v.Z,
				{
					className: le.VoiceChatQuickChatChannelOption,
				},
				(0, Localize)("#Chat_Scratch_Pad"),
				":",
				A.createElement(te.tc, {
					key: p.unique_id,
					chat: p,
					bRenameActive: false,
					bActiveChat: p == r.GetActiveChatView().chat,
					bDefaultRoom: p == r.GetGroup().GetDefaultChatRoom(),
					onFocus: () => d(e.GetRoomID()),
				}),
			);
		}
	}
	let g = o.map((e) =>
		A.createElement(te.tc, {
			key: e.unique_id,
			chat: e,
			bRenameActive: r.IsRoomRenameActive(e.GetRoomID()),
			bActiveChat: e == r.GetActiveChatView().chat,
			bDefaultRoom: e == r.GetGroup().GetDefaultChatRoom(),
			onFocus: () => d(e.GetRoomID()),
		}),
	);
	const h = () => {
		r.SelectChat(u);
		e.closeModal();
	};
	let C = {
		onOKButton: h,
	};
	if (l) {
		C.onOptionsButton = (t) => {
			(0, te.Nq)(GetOwningWindowForEvent(t), r, false);
			e.closeModal();
		};
		C.onOptionsActionDescription = (0, Localize)("#Chat_AddTextChat");
	}
	return A.createElement(
		s.eV,
		{
			className: (0, B.A)(le.ManageTextChannelsModal, "friendsui-container"),
			...n,
			onOK: h,
		},
		A.createElement(
			E.g,
			null,
			A.createElement(
				i.Y9,
				null,
				(0, Localize)("#GroupSettings_Channels_TextChannels"),
			),
			A.createElement(
				v.Z,
				{
					focusable: false,
					...C,
				},
				t,
				g,
			),
			A.createElement(Se, {
				closeModal: e.closeModal,
			}),
		),
	);
};
export const _1 = (e) => {
	let { groupView: t, ...r } = e;
	let n = t.GetGroup();
	let a = t.GetGroup().voiceRoomList;
	let o = (0, ue.Qn)();
	let [l, c] = A.useState(t.GetActiveChatView().chat);
	let u = a.filter((e) => e.voice_active_member_list.member_count != 0);
	let d = a.filter((e) => e.voice_active_member_list.member_count == 0);
	const g = m.xm.ChatStore.GetActiveVoiceChat() != null;
	const h = (0, Q.q3)(() => m.xm.ChatStore.VoiceChat.GetActiveVoiceChatID());
	const C = () => {
		if (h != l.GetRoomID()) {
			t.ClosePopoverChat();
			l.StartVoiceChat();
		}
		if (!o) {
			e.closeModal();
		}
	};
	let _ = u.map((r) => {
		const i = h == l.GetRoomID();
		const a = (t) => {
			e.closeModal();
			(0, ne.jv)(se.m, t.currentTarget.ownerDocument.defaultView, n, r, false);
		};
		let s;
		if (g && !i) {
			s = (0, Localize)("#VoiceChat_Switch");
		} else if (!i) {
			s = (0, Localize)("#VoiceChat_Join");
		}
		if (o) {
			return A.createElement(ce.A, {
				key: r.unique_id,
				context: se.m,
				chatRoom: r,
				fnOKButton: i ? undefined : C,
				fnSecondaryButton: i
					? () => m.xm.ChatStore.VoiceChat.OnUserEndVoiceChat()
					: undefined,
				fnOptionsButton: i ? a : undefined,
				fnOnFocus: () => c(r),
				fnCloseModal: e.closeModal,
				strOKActionDescription: s,
				strSecondaryActionDescription: i
					? (0, Localize)("#VoiceChat_Leave")
					: undefined,
				strOptionsActionDescription: i
					? (0, Localize)("#VoiceChat_InviteOthers")
					: undefined,
			});
		} else {
			return A.createElement(te.mr, {
				key: r.unique_id,
				chat: r,
				bRenameActive: t.IsRoomRenameActive(r.GetRoomID()),
				onSelect: C,
				onFocus: () => c(r),
			});
		}
	});
	let f = d.map((e) =>
		o
			? A.createElement(ce.A, {
					key: e.unique_id,
					context: se.m,
					chatRoom: e,
					fnOKButton: C,
					fnOnFocus: () => c(e),
					strOKActionDescription: (0, Localize)("#VoiceChat_Join"),
				})
			: A.createElement(te.mr, {
					key: e.unique_id,
					chat: e,
					bRenameActive: t.IsRoomRenameActive(e.GetRoomID()),
					onSelect: C,
					onFocus: () => c(e),
				}),
	);
	let b = null;
	if (!m.xm.VoiceStore.IsVoiceActiveForGroup(n.GetGroupID())) {
		const t = () => {
			n.CreateAndJoinTempVoiceRoom();
			if (!o) {
				e.closeModal();
			}
		};
		b = A.createElement(
			A.Fragment,
			null,
			a.length == 0 &&
				A.createElement(
					v.Z,
					null,
					(0, Localize)("#GroupSettings_Channels_NoVoiceChannels"),
				),
			A.createElement(
				v.Z,
				{
					className: le.AddVoiceChannelBtn,
					onActivate: t,
				},
				A.createElement(p.nGC, null),
				(0, Localize)("#Chat_AddVoiceChat"),
			),
		);
	}
	return A.createElement(
		s.eV,
		{
			className: (0, B.A)(le.ManageVoiceChannelsModal, "friendsui-container"),
			...r,
			onOK: C,
		},
		A.createElement(
			E.g,
			null,
			A.createElement(
				i.Y9,
				null,
				(0, Localize)("#GroupSettings_Channels_VoiceChannels"),
			),
			A.createElement(
				v.Z,
				{
					className: le.ManageVoiceChannels,
					focusable: false,
					onOKButton: C,
				},
				b,
				_.length != 0 &&
					A.createElement(
						"div",
						{
							className: le.ChannelStatusLabel,
						},
						(0, Localize)("#GroupSettings_Channels_ActiveVoiceChannels"),
					),
				_.length != 0 &&
					A.createElement(
						v.Z,
						{
							className: le.VoiceChannels,
						},
						_,
					),
				f.length != 0 &&
					A.createElement(
						"div",
						{
							className: le.ChannelStatusLabel,
						},
						(0, Localize)("#GroupSettings_Channels_InactiveVoiceChannels"),
					),
				f.length != 0 &&
					A.createElement(
						v.Z,
						{
							className: le.VoiceChannels,
						},
						f,
					),
			),
			A.createElement(Se, {
				closeModal: e.closeModal,
			}),
		),
	);
};
const be = (0, g.PA)((e) => {
	let { groupView: t } = e;
	const r = (0, de.R7)();
	let n = 0;
	let i = false;
	for (let e of t.GetGroup().voiceRoomList) {
		if (e.voice_active_member_list.member_count != 0) {
			n++;
		}
		if (e.BVoiceActive()) {
			i = true;
		}
	}
	let s = false;
	for (let e of t.GetGroup().textRoomList) {
		if (e.has_any_unread_messages) {
			s = true;
			break;
		}
	}
	return A.createElement(
		v.Z,
		{
			className: le.ChatRoomGroupControlsSteamDeck,
			"flow-children": "column",
		},
		A.createElement(
			v.Z,
			{
				focusable: true,
				onActivate: (e) => {
					(0, a.pg)(
						A.createElement(Ce, {
							groupView: t,
						}),
						GetOwningWindowForEvent(e),
					);
				},
				onOKActionDescription: (0, Localize)("#Chat_MemberGroup_Online"),
			},
			A.createElement(p.YJl, null),
		),
		A.createElement(
			v.Z,
			{
				focusable: true,
				onActivate: (e) => {
					(0, a.pg)(
						A.createElement(LC, {
							groupView: t,
						}),
						GetOwningWindowForEvent(e),
					);
				},
				onOKActionDescription: (0, Localize)(
					"#GroupSettings_Channels_TextChannels",
				),
			},
			A.createElement(p._h6, {
				className: "SVGIcon_Button SVGIcon_CommentThread",
			}),
			A.createElement(
				"div",
				{
					className: le.TextChannelCount,
				},
				t.GetGroup().textRoomList.length,
			),
			A.createElement(q.RB, {
				className: s && le.UnreadTextChannel,
			}),
		),
		A.createElement(
			v.Z,
			{
				focusable: true,
				className: i && le.currentUserInVoiceChannel,
				onActivate: () => {
					(0, a.pg)(
						A.createElement(_1, {
							groupView: t,
						}),
						r.ownerWindow,
					);
				},
				onOKActionDescription: (0, Localize)(
					"#GroupSettings_Channels_VoiceChannels",
				),
			},
			A.createElement(p.mrd, null),
			A.createElement(
				"div",
				{
					className: le.VoiceChannelCount,
				},
				A.createElement(
					"span",
					{
						className: n > 0 ? le.HasActiveVoiceRoom : le.NoActiveVoiceRoom,
					},
					n,
				),
				" / ",
				t.GetGroup().voiceRoomList.length,
			),
		),
		A.createElement(
			v.Z,
			{
				focusable: true,
				onActivate: (t) => {
					let r = GetOwningWindowForEvent(t);
					let n = (0, u._k)(r);
					(0, ne.E5)(n, r, e.groupView.GetGroup());
				},
				onOKActionDescription: (0, Localize)(
					"#Chat_Actions_InviteFriendtoGroupChat",
				),
			},
			A.createElement(p.MxO, null),
		),
		A.createElement(
			v.Z,
			{
				focusable: true,
				onActivate: (t) => {
					(0, ae.lV)(GetOwningWindowForEvent(t), e.groupView);
				},
				onOKActionDescription: (0, Localize)("#NotificationSettings_Title"),
			},
			A.createElement(p.IrQ, null),
		),
		A.createElement(
			v.Z,
			{
				focusable: true,
				onActivate: (t) => {
					(0, ie.hI)(GetOwningWindowForEvent(t), e.groupView);
				},
				onOKActionDescription: (0, Localize)("#GroupSettings"),
			},
			A.createElement(p.m59, null),
		),
	);
});
const ye = ({ className: e, readyToRender: t, children: r }) => {
	const n = A.createElement(o.t, {
		position: "center",
		string: (0, Localize)("#Chat_ChatRoomGroup_Requesting"),
	});
	return A.createElement(
		v.Z,
		{
			className: e,
		},
		A.createElement(
			A.Suspense,
			{
				fallback: n,
			},
			t ? r : n,
		),
	);
};
const Se = (e) =>
	A.createElement(
		i.wi,
		null,
		A.createElement(
			v.Z,
			{
				className: "_DialogColLayout",
				"flow-children": "row",
			},
			A.createElement(
				i.jn,
				{
					onClick: e.closeModal,
				},
				(0, Localize)("#Button_Close"),
			),
		),
	);
