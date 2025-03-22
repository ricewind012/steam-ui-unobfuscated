var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./42318.js");
var a = require(/*webcrack:missing*/ "./11010.js");
var s = require("./64608.js");
var o = require("./10606.js");
var l = require(/*webcrack:missing*/ "./46108.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./50169.js");
var u = require("./56332.js");
var d = require("./35488.js");
var A = require("./48289.js");
var p = require(/*webcrack:missing*/ "./90095.js");
var g = require(/*webcrack:missing*/ "./26853.js");
var h = require("./96593.js");
var C = require("./36464.js");
var _ = require("./51095.js");
var f = require(/*webcrack:missing*/ "./8573.js");
var b = require("./18057.js");
var y = require(/*webcrack:missing*/ "./83599.js");
var S = require("./76319.js");
var w = require("./83718.js");
var B = require("./96680.js");
var v = require("./69913.js");
var I = require("./45059.js");
var E = I;
var M = require("./9758.js");
const _T = new y.wd("PlayersDialog").Debug;
const R = {
	sortBy: [
		{
			id: "lasttime",
			desc: true,
		},
	],
};
function k(e) {
	const {
		column: t,
		SlamColumnProperties: r,
		onResizerMouseDown: i,
		columnWidths: a,
	} = e;
	const { key: s, ...o } = t.getHeaderProps();
	const l = t.getSortByToggleProps();
	l.title = undefined;
	o.className = (0, c.A)(o.className, E.PlayersListHeaderCell);
	r(o, E.CurrentSortCol, t, a);
	o.title = t.HeaderText || t.Header;
	return n.createElement(
		"div",
		{
			key: s,
			...o,
		},
		n.createElement(
			"div",
			{
				className: E.PlayersListHeaderColumn,
				...l,
			},
			t.render("Header"),
			t.isSorted &&
				n.createElement(d.Carat, {
					className: E.SortCaret,
					direction: t.isSortedDesc ? "down" : "up",
				}),
		),
		t.canResize &&
			n.createElement("div", {
				key: s + "-resizer",
				className: E.ColumnResizer,
				onMouseDown: (e) => i(e, t.id),
			}),
	);
}
function D(e) {
	const { player: t } = e;
	const r = A.O$.GetFriendState(t.accountid);
	const i = (0, b.bG)(
		"SteamIDPage",
		f.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
	);
	return n.createElement(
		"span",
		{
			className: E.AvatarAndName,
			onClick: () => {
				i();
			},
		},
		n.createElement(C.fH, {
			friend: r,
			size: "Small",
		}),
		n.createElement(
			"span",
			{
				className: E.Name,
			},
			r.display_name,
		),
	);
}
function N(e) {
	const { player: t } = e;
	const r = () => {
		SteamClient.Friends.AddFriend(
			f.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
		);
	};
	let i;
	let a = "";
	let o = false;
	switch (t.friendRelationship) {
		case 3:
		case 6:
			a = "#PlayersDialog_Status_Friends";
			i = E.Friends;
			break;
		case 4:
			a = "#PlayersDialog_Status_Invited";
			i = E.Invited;
			break;
		case 5:
			a = "#PlayersDialog_Status_Blocked";
			i = E.Blocked;
			break;
		default:
			o = true;
			a = "#PlayersDialog_AddFriend";
	}
	if (o) {
		return n.createElement(
			s.$n,
			{
				className: (0, c.A)(E.AddFriendButton, i),
				disabled: !o,
				onClick: r,
			},
			(0, l.we)(a),
		);
	} else {
		return n.createElement(
			"div",
			{
				className: (0, c.A)(E.StatusText, i),
			},
			(0, l.we)(a),
		);
	}
}
function _F(e) {
	const { rgPlayers: t } = e;
	const r = n.useMemo(
		() => [
			{
				Header: (0, l.we)("#PlayersDialog_Profile"),
				accessor: "displayName",
				id: "name",
				align: "right",
				width: 250,
				minWidth: 100,
				className: E.NameColumn,
				Cell: (e) =>
					n.createElement(D, {
						player: e.row.original,
					}),
				sortType: (e, t) =>
					(0, _.lY)(e.original.displayName, t.original.displayName),
			},
			{
				Header: (0, l.we)("#PlayersDialog_Game"),
				accessor: (e) => h.tw.GetAppOverviewByAppID(e.appid)?.display_name,
				id: "game",
				width: 200,
				minWidth: 100,
				className: E.GameColumn,
				sortType: (e, t, r, n) =>
					(0, _.lY)(
						h.tw.GetAppOverviewByAppID(e.original.appid)?.display_name,
						h.tw.GetAppOverviewByAppID(t.original.appid)?.display_name,
					) ||
					(0, _.lY)(e.original.displayName, t.original.displayName) *
						(n ? -1 : 1),
			},
			{
				Header: (0, l.we)("#PlayersDialog_LastPlayed"),
				accessor: "rtTimePlayed",
				Cell: (e) =>
					e.row.original.rtTimePlayed === undefined
						? (0, l.we)("#PlayersDialog_Now")
						: (0, a.Hq)(Date.now() / 1000 - e.row.original.rtTimePlayed, {
								eSuffix: a.a8.Ago,
								bForceSingleUnits: true,
							}),
				id: "lasttime",
				width: 150,
				minWidth: 100,
				className: E.LastPlayedColumn,
				sortType: (e, t, r, n) =>
					(e.original.rtTimePlayed ?? Number.MAX_SAFE_INTEGER) -
						(t.original.rtTimePlayed ?? Number.MAX_SAFE_INTEGER) ||
					(0, _.lY)(e.original.displayName, t.original.displayName) *
						(n ? -1 : 1),
			},
			{
				Header: n.createElement("div", null),
				HeaderText: "",
				accessor: "accountid",
				id: "addfriend",
				disableSortBy: true,
				Cell: (e) =>
					n.createElement(N, {
						player: e.row.original,
					}),
				width: 200,
				minWidth: 100,
			},
		],
		[],
	);
	const i = n.useMemo(
		() => ({
			columns: r,
			data: t,
			disableSortRemove: true,
			disableMultiSort: true,
			initialState: R,
		}),
		[r, t],
	);
	const s = (0, m.useTable)(
		i,
		m.useResizeColumns,
		m.useFlexLayout,
		m.useSortBy,
	);
	const {
		getTableProps: o,
		getTableBodyProps: c,
		headerGroups: d,
		rows: A,
		prepareRow: p,
		allColumns: g,
		visibleColumns: C,
	} = s;
	const f = n.useRef(null);
	const { columnWidths: b, OnMouseDown: y } = (0, u.m)(r, C, f);
	if (A) {
		return n.createElement(
			"div",
			{
				className: E.PlayersList,
			},
			n.createElement(
				"div",
				{
					className: E.PlayersListHeaderCtr,
				},
				d.map((e) => {
					const { key: t, ...r } = e.getHeaderGroupProps([
						{
							className: E.PlayersListHeaderRow,
						},
					]);
					return n.createElement(
						"span",
						{
							key: t,
							ref: f,
							...r,
						},
						e.headers.map((e, t) =>
							n.createElement(k, {
								key: t,
								SlamColumnProperties: u.j,
								column: e,
								onResizerMouseDown: y,
								columnWidths: b,
							}),
						),
					);
				}),
			),
			n.createElement(
				"div",
				{
					...o(),
					className: E.PlayersListBody,
				},
				A.length == 0 &&
					n.createElement(
						"div",
						{
							className: E.Empty,
						},
						(0, l.we)("#PlayersDialog_Empty"),
					),
				n.createElement(
					"div",
					{
						...c(),
					},
					A.map((e, t) => {
						p(e);
						const { key: r, ...i } = e.getRowProps();
						return n.createElement(
							"div",
							{
								key: r,
								...i,
							},
							e.cells.map((e) => {
								const { key: t, ...r } = e.getCellProps();
								const i = e.column;
								(0, u.j)(r, E.CurrentSortCol, i, b);
								return n.createElement(
									"span",
									{
										key: t,
										...r,
									},
									e.render("Cell"),
								);
							}),
						);
					}),
				),
			),
		);
	} else {
		return null;
	}
}
function G(e) {
	const { rgUsers: t } = e;
	const [r, i] = n.useState(false);
	n.useEffect(() => {
		const e = window.setTimeout(() => i(true), 10000);
		return () => {
			window.clearTimeout(e);
		};
	}, []);
	const a = (0, p.q3)(() =>
		t
			.map((e) => {
				const t = A.O$.GetFriendState(e.accountid);
				return {
					...e,
					displayName: t.display_name,
					friendRelationship: t.efriendrelationship,
				};
			})
			.filter((e) => !!e.displayName),
	);
	_T(
		t,
		a?.map((e) => e.displayName),
	);
	const s = !r && a.length !== t.length;
	if (s) {
		_T(
			"Waiting for",
			t.filter((e) => !a.find((t) => t.accountid == e.accountid)),
		);
	}
	return n.createElement(
		S.p,
		{
			name: "PlayerDialog",
		},
		n.createElement(
			"div",
			{
				className: (0, c.A)(E.PlayersListWrapper, s && E.Loading),
			},
			s &&
				n.createElement(g.t, {
					position: "center",
				}),
			!s &&
				n.createElement(_F, {
					rgPlayers: a,
				}),
		),
	);
}
function O(e) {
	const { strName: t, players: r, onClose: i } = e;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(s.Y9, null, t),
		n.createElement(
			s.a3,
			{
				className: E.DescriptionText,
			},
			(0, l.we)("#PlayersDialog_Description"),
		),
		n.createElement(
			s.nB,
			null,
			n.createElement(G, {
				rgUsers: r,
			}),
		),
		n.createElement(
			s.wi,
			null,
			n.createElement(
				s.$n,
				{
					onClick: i,
				},
				(0, l.we)("#Button_Close"),
			),
		),
	);
}
async function P() {
	const e = await SteamClient.Friends.GetCoplayData();
	return e.currentUsers
		.concat(
			e.recentUsers.filter(
				(t) => !e.currentUsers?.find((e) => e.accountid == t.accountid),
			),
		)
		.filter(
			(e) =>
				h.tw.GetAppOverviewByAppID(e.appid) &&
				h.tw.GetAppOverviewByAppID(e.appid).display_status != 32,
		);
}
export function T(e) {
	const t = (0, B.$2)().DesktopOverlay;
	const r = v.w9.Players;
	const i = (0, p.q3)(() => t.BWindowVisible(r));
	const a = (0, l.we)("#PlayersDialog_Title");
	const s = (0, w.aS)(700, 480, 450, 400);
	const [o, c] = n.useState();
	n.useEffect(() => {
		if (i) {
			P().then((e) => {
				c(e);
			});
		}
	}, [i]);
	const m = n.useCallback(() => {
		t?.SetWindowVisibility(r, v.tc.Closed);
	}, [t, r]);
	if (i && o) {
		return n.createElement(
			w.rG,
			{
				strName: a,
				updateParamsBeforeShow: s,
				onClose: m,
			},
			n.createElement(
				"div",
				{
					className: E.OverlayPlayersDialog,
				},
				n.createElement(O, {
					strName: a,
					players: o,
					onClose: m,
				}),
			),
		);
	} else {
		return null;
	}
}
export const F = (0, i.Nr)(function () {
	const [e, t] = n.useState();
	const r = n.useCallback(() => {
		P().then((e) => {
			t(e);
		});
	}, []);
	let [i, a, s] = (0, M.Z)(7, "friends/players", r);
	n.useEffect(() => {
		SteamClient.Friends.GetCoplayData().then((e) => {
			e.currentUsers?.map((e) => A.O$.GetFriendState(e.accountid));
			e.recentUsers?.map((e) => A.O$.GetFriendState(e.accountid));
		});
	}, []);
	const m = (0, l.we)("#PlayersDialog_Title");
	if (i && e) {
		return n.createElement(
			o.hM,
			{
				strTitle: m,
				onDismiss: s,
				popupWidth: 700,
				popupHeight: 480,
				minWidth: 700,
				minHeight: 480,
				resizable: true,
				refPopup: a,
				className: (0, c.A)(E.PlayersDialog, E.Desktop),
				titleBarClassName: E.TitleBar,
				saveDimensionsKey: "Window_PlayersDialog",
			},
			n.createElement(O, {
				strName: m,
				players: e,
				onClose: s,
			}),
		);
	} else {
		return null;
	}
});
