import {
	LocalizeTimeSince,
	ETimeSinceSuffix,
} from "../../actual_src/utils/localization/datetime.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { Nr } from "./42318.js";
import s from "./64608.js";
import o from "./10606.js";
import c, { A as A_1 } from "./90765.js";
import m, { useTable } from "./50169.js";
import u, { m as m_1, j } from "./56332.js";
import d from "./35488.js";
import A from "./48289.js";
import p, { q3 } from "./90095.js";
import g from "./26853.js";
import h from "./96593.js";
import C from "./36464.js";
import { lY } from "./51095.js";
import f from "./8573.js";
import b, { bG } from "./18057.js";
import y from "./83599.js";
import S from "./76319.js";
import w, { aS } from "./83718.js";
import { $2 } from "./96680.js";
import v from "./69913.js";
import I from "./45059.js";
import { Z } from "./9758.js";
const E = I;
const _T = new y.wd("PlayersDialog").Debug;
const R = {
	sortBy: [
		{
			id: "lasttime",
			desc: true,
		},
	],
};
function K(e) {
	const { column, SlamColumnProperties, onResizerMouseDown, columnWidths } = e;
	const { key, ...o } = column.getHeaderProps();
	const l = column.getSortByToggleProps();
	l.title = undefined;
	o.className = A_1(o.className, E.PlayersListHeaderCell);
	SlamColumnProperties(o, E.CurrentSortCol, column, columnWidths);
	o.title = column.HeaderText || column.Header;
	return (
		<div key={key} {...o}>
			<div className={E.PlayersListHeaderColumn} {...l}>
				{column.render("Header")}
				{column.isSorted && (
					<d.Carat
						className={E.SortCaret}
						direction={column.isSortedDesc ? "down" : "up"}
					/>
				)}
			</div>
			{column.canResize && (
				<div
					key={`${key}-resizer`}
					className={E.ColumnResizer}
					onMouseDown={(e) => onResizerMouseDown(e, column.id)}
				/>
			)}
		</div>
	);
}
function D(e) {
	const { player } = e;
	const r = A.O$.GetFriendState(player.accountid);
	const i = bG(
		"SteamIDPage",
		f.b.InitFromAccountID(player.accountid).ConvertTo64BitString(),
	);
	return (
		<span
			className={E.AvatarAndName}
			onClick={() => {
				i();
			}}
		>
			<C.fH friend={r} size="Small" />
			<span className={E.Name}>{r.display_name}</span>
		</span>
	);
}
function N(e) {
	const { player } = e;
	const r = () => {
		SteamClient.Friends.AddFriend(
			f.b.InitFromAccountID(player.accountid).ConvertTo64BitString(),
		);
	};
	let i;
	let a = "";
	let o = false;
	switch (player.friendRelationship) {
		case 3:
		case 6: {
			a = "#PlayersDialog_Status_Friends";
			i = E.Friends;
			break;
		}
		case 4: {
			a = "#PlayersDialog_Status_Invited";
			i = E.Invited;
			break;
		}
		case 5: {
			a = "#PlayersDialog_Status_Blocked";
			i = E.Blocked;
			break;
		}
		default: {
			o = true;
			a = "#PlayersDialog_AddFriend";
		}
	}
	if (o) {
		return (
			<s.$n className={A_1(E.AddFriendButton, i)} disabled={!o} onClick={r}>
				{Localize(a)}
			</s.$n>
		);
	} else {
		return <div className={A_1(E.StatusText, i)}>{Localize(a)}</div>;
	}
}
function _F(e) {
	const { rgPlayers } = e;
	const r = n.useMemo(
		() => [
			{
				Header: Localize("#PlayersDialog_Profile"),
				accessor: "displayName",
				id: "name",
				align: "right",
				width: 250,
				minWidth: 100,
				className: E.NameColumn,
				Cell: (e) => <D player={e.row.original} />,
				sortType: (e, t) => lY(e.original.displayName, t.original.displayName),
			},
			{
				Header: Localize("#PlayersDialog_Game"),
				accessor: (e) => h.tw.GetAppOverviewByAppID(e.appid)?.display_name,
				id: "game",
				width: 200,
				minWidth: 100,
				className: E.GameColumn,
				sortType: (e, t, r, n) =>
					lY(
						h.tw.GetAppOverviewByAppID(e.original.appid)?.display_name,
						h.tw.GetAppOverviewByAppID(t.original.appid)?.display_name,
					) ||
					lY(e.original.displayName, t.original.displayName) * (n ? -1 : 1),
			},
			{
				Header: Localize("#PlayersDialog_LastPlayed"),
				accessor: "rtTimePlayed",
				Cell: (e) =>
					e.row.original.rtTimePlayed === undefined
						? Localize("#PlayersDialog_Now")
						: LocalizeTimeSince(
								Date.now() / 1000 - e.row.original.rtTimePlayed,
								{
									eSuffix: ETimeSinceSuffix.Ago,
									bForceSingleUnits: true,
								},
							),
				id: "lasttime",
				width: 150,
				minWidth: 100,
				className: E.LastPlayedColumn,
				sortType: (e, t, r, n) =>
					(e.original.rtTimePlayed ?? Number.MAX_SAFE_INTEGER) -
						(t.original.rtTimePlayed ?? Number.MAX_SAFE_INTEGER) ||
					lY(e.original.displayName, t.original.displayName) * (n ? -1 : 1),
			},
			{
				Header: <div />,
				HeaderText: "",
				accessor: "accountid",
				id: "addfriend",
				disableSortBy: true,
				Cell: (e) => <N player={e.row.original} />,
				width: 200,
				minWidth: 100,
			},
		],
		[],
	);
	const i = n.useMemo(
		() => ({
			columns: r,
			data: rgPlayers,
			disableSortRemove: true,
			disableMultiSort: true,
			initialState: R,
		}),
		[r, rgPlayers],
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		allColumns,
		visibleColumns,
	} = useTable(i, m.useResizeColumns, m.useFlexLayout, m.useSortBy);

	const FRef = n.useRef(null);
	const { columnWidths, OnMouseDown } = m_1(r, visibleColumns, FRef);
	if (rows) {
		return (
			<div className={E.PlayersList}>
				<div className={E.PlayersListHeaderCtr}>
					{headerGroups.map((e) => {
						const { key, ...r } = e.getHeaderGroupProps([
							{
								className: E.PlayersListHeaderRow,
							},
						]);
						return (
							<span key={key} ref={FRef} {...r}>
								{e.headers.map((e, t) => (
									<K
										key={t}
										SlamColumnProperties={u.j}
										column={e}
										onResizerMouseDown={OnMouseDown}
										columnWidths={columnWidths}
									/>
								))}
							</span>
						);
					})}
				</div>
				<div {...getTableProps()} className={E.PlayersListBody}>
					{rows.length == 0 && (
						<div className={E.Empty}>{Localize("#PlayersDialog_Empty")}</div>
					)}
					<div {...getTableBodyProps()}>
						{rows.map((e, t) => {
							prepareRow(e);
							const { key, ...i } = e.getRowProps();
							return (
								<div key={key} {...i}>
									{e.cells.map((e) => {
										const { key: key_1, ...r } = e.getCellProps();
										const e_column = e.column;
										j(r, E.CurrentSortCol, e_column, columnWidths);
										return (
											<span key={key_1} {...r}>
												{e.render("Cell")}
											</span>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
function G(e) {
	const { rgUsers } = e;
	const [r, setR] = n.useState(false);
	n.useEffect(() => {
		const e = window.setTimeout(() => setR(true), 10000);
		return () => {
			window.clearTimeout(e);
		};
	}, []);
	const a = q3(() =>
		rgUsers
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
		rgUsers,
		a?.map((e) => e.displayName),
	);
	const s = !r && a.length !== rgUsers.length;
	if (s) {
		_T(
			"Waiting for",
			rgUsers.filter((e) => !a.find((t) => t.accountid == e.accountid)),
		);
	}
	return (
		<S.p name="PlayerDialog">
			<div className={A_1(E.PlayersListWrapper, s && E.Loading)}>
				{s && <g.t position="center" />}
				{!s && <_F rgPlayers={a} />}
			</div>
		</S.p>
	);
}
function O(e) {
	const { strName, players, onClose } = e;
	return (
		<>
			<s.Y9>{strName}</s.Y9>
			<s.a3 className={E.DescriptionText}>
				{Localize("#PlayersDialog_Description")}
			</s.a3>
			<s.nB>
				<G rgUsers={players} />
			</s.nB>
			<s.wi>
				<s.$n onClick={onClose}>{Localize("#Button_Close")}</s.$n>
			</s.wi>
		</>
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
	const t = $2().DesktopOverlay;
	const r = v.w9.Players;
	const i = q3(() => t.BWindowVisible(r));
	const a = Localize("#PlayersDialog_Title");
	const s = aS(700, 480, 450, 400);
	const [o, setO] = n.useState();
	n.useEffect(() => {
		if (i) {
			P().then((e) => {
				setO(e);
			});
		}
	}, [i]);
	const m = n.useCallback(() => {
		t?.SetWindowVisibility(r, v.tc.Closed);
	}, [t, r]);
	if (i && o) {
		return (
			<w.rG strName={a} updateParamsBeforeShow={s} onClose={m}>
				<div className={E.OverlayPlayersDialog}>
					<O strName={a} players={o} onClose={m} />
				</div>
			</w.rG>
		);
	} else {
		return null;
	}
}
export const F = Nr(() => {
	const [e, setE] = n.useState();
	const r = n.useCallback(() => {
		P().then((e) => {
			setE(e);
		});
	}, []);
	let [i, a, s] = Z(7, "friends/players", r);
	n.useEffect(() => {
		SteamClient.Friends.GetCoplayData().then((e) => {
			e.currentUsers?.map((e) => A.O$.GetFriendState(e.accountid));
			e.recentUsers?.map((e) => A.O$.GetFriendState(e.accountid));
		});
	}, []);
	const m = Localize("#PlayersDialog_Title");
	if (i && e) {
		return (
			<o.hM
				strTitle={m}
				onDismiss={s}
				popupWidth={700}
				popupHeight={480}
				minWidth={700}
				minHeight={480}
				resizable
				refPopup={a}
				className={A_1(E.PlayersDialog, E.Desktop)}
				titleBarClassName={E.TitleBar}
				saveDimensionsKey="Window_PlayersDialog"
			>
				<O strName={m} players={e} onClose={s} />
			</o.hM>
		);
	} else {
		return null;
	}
});
