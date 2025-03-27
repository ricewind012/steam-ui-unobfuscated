import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { useState } from "./63696.js";
import i from "./50376.js";
import a from "./35488.js";
import s, { PA } from "./41230.js";
import o, { q3 } from "./90095.js";
import l, { AH, jy, zq } from "./5808.js";
import c from "./42805.js";
import m, { Cg } from "./34629.js";
import u from "./29547.js";
import d from "./47979.js";
import A, { A as A_1 } from "./90765.js";
import p from "./52451.js";
import h from "./91486.js";
import C, { zM, MD } from "./97893.js";
import { lX } from "./31084.js";
import f from "./48289.js";
import y, { Bb } from "./32700.js";
import S from "./98995.js";
import w from "./36464.js";
import B from "./68608.js";
import v, { VI } from "./34792.js";
import I, { ZC } from "./39147.js";
import E from "./92030.js";
import { $2 } from "./96680.js";
let G_1 = class extends n.Component {
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
			appid,
			strCollectionId,
			whenSelectedClassName,
			fnSelectAppsInRange,
			className,
			onClick,
			onContextMenu,
			children,
			...c
		} = this.props;
		const m = new u.q(appid, strCollectionId);
		const p = d.b.BIsSelectedApp(m);
		return (
			<div
				className={A_1(p && whenSelectedClassName, className)}
				{...c}
				onClick={(e) => this.OnClick(e, false, m)}
				onContextMenu={(e) => this.OnClick(e, true, m)}
			>
				{children}
			</div>
		);
	}
};
Cg([p.oI], G_1.prototype, "OnClick", null);
G_1 = Cg([s.PA], G_1);
const M = E;
export const Ay = PA((e) => {
	const {
		item,
		isSelected,
		index,
		strCollectionId,
		bIsLastInCollection,
		fnSelectAppsInRange,
		bInGamepadUI,
		bInHover,
	} = e;
	const [h, setH] = useState(false);
	const b = $2();
	const y = (e) => {
		const r = AH(b, item, "mostavailable");
		switch (r) {
			case "Play":
			case "Launch":
			case "Resume":
			case "Download":
			case "Update":
			case "PreLoad":
			case "Install":
			case "Stream": {
				const n = jy(r, item, "mostavailable", 601, GetOwningWindowForEvent(e));
				if (n) {
					n();
				}
				return;
			}
		}
	};
	item.BIsPerClientDataLocal(item.most_available_per_client_data);
	let I = {};
	let E = false;
	switch (item.display_status) {
		case 34:
		case 35:
		case 8: {
			I.error = true;
			E = true;
		}
	}
	let k = null;
	if (E) {
		k = <a.CloudSync {...I} />;
	}
	const N = A_1(
		M.Container,
		bInHover && M.HoverOverlay,
		((e) => {
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
				case 38: {
					return M.Updating;
				}
				case 8: {
					return M.Synchronizing;
				}
				case 34: {
					return M.CloudError;
				}
				case 35: {
					return M.CloudOutOfDate;
				}
				case 4:
				case 36: {
					return M.Running;
				}
			}
			if (e.installed) {
				if (e.BIsSelectedClientLocal()) {
					return M.Installed;
				} else {
					return M.InstalledRemotely;
				}
			}
			return M.Uninstalled;
		})(item),
		isSelected(strCollectionId, item.appid) && M.Selected,
		h && M.HasContextMenuOpen,
		bIsLastInCollection && M.LastInCollection,
	);
	let G = f.O$.GetFriendsInGame(item.appid);
	let O = [];
	if (G.length > 0) {
		for (const e of G) {
			O.push(
				<div className={M.FriendStatusHoverRow} key={e.persona.GetAccountID()}>
					<w.fH size="X-Small" friend={e} statusPosition="right" />
					<B.D
						className={M.LabelHolder}
						persona={e.persona}
						eFriendRelationship={3}
						bIsSelf={false}
						bCompactView
						strNickname={e.nickname}
						bParenthesizeNicknames={
							v.rV.communityPreferences.bParenthesizeNicknames
						}
						bHideGameName
						bHideEnhancedRichPresenceLabel={false}
					/>
				</div>,
			);
		}
	}
	let P = A_1(E && M.CloudError, M.GameListEntryContainer);
	return (
		<G_1
			appid={item.appid}
			strCollectionId={strCollectionId}
			fnSelectAppsInRange={fnSelectAppsInRange}
			whenSelectedClassName={M.Selected}
			onDoubleClick={y}
			onClick={() => e.onClick(index)}
			onContextMenu={(e) => {
				const r = lX(
					<l.uU
						overview={item}
						client="mostavailable"
						launchSource={600}
						bInGamepadUI={bInGamepadUI}
						includeMultiSelect
						strCollectionId={strCollectionId}
						ownerWindow={GetOwningWindowForEvent(e)}
					/>,
					e,
					zq(),
				);
				if (r) {
					setH(true);
					r.SetOnHideCallback(() => setH(false));
				}
			}}
			onKeyDown={(e) => e.keyCode == 13 && y(e)}
		>
			<c.wf
				strCollectionId={strCollectionId}
				className={N}
				strEligibleClassName={M.DropOption}
				strTargetedClassName={M.DropTarget}
			>
				<c.Bj
					className={P}
					appid={item.appid}
					strCollectionId={strCollectionId}
					includeMultiSelect
				>
					{k}
					{item.is_invalid_os_type && (
						<S.he
							toolTipContent="#GameList_Entry_Invalid_OSType"
							className={M.InvalidOSType}
						>
							<i.WOg />
						</S.he>
					)}
					{!k && !item.is_invalid_os_type && O.length > 0 && (
						<S.m9
							toolTipContent={<div className={M.FriendStatusHover}>{O}</div>}
							nDelayShowMS={0}
							className={M.FriendIsPlaying}
						>
							<i.GSe />
						</S.m9>
					)}
					<NK item={item} />
					<F item={item} />
				</c.Bj>
			</c.wf>
		</G_1>
	);
});
export function NK(e) {
	let { item } = e;
	let r = q3(() => item.display_status);
	let [a] = VI("library_display_icon_in_game_list");
	if (!a) {
		return null;
	}
	let s = <h.z app={item} eAssetType={4} className={M.GameIcon} />;
	if (
		((e) => {
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
				case 8: {
					return true;
				}
			}
			return false;
		})(r)
	) {
		return (
			<div className={M.AppIconDownloading}>
				{s}
				<i.a3E
					className={M.DownloadProgressSVG}
					percentComplete={item.status_percentage || 0}
				/>
			</div>
		);
	} else {
		return s;
	}
}
function N(e) {
	const { strName } = e;
	const r = zM();
	const i = MD(r);
	const r_update_network_bytes_per_second = r.update_network_bytes_per_second;
	let s = `${i || 0}%`;
	if (r_update_network_bytes_per_second) {
		s = `${s} (${ZC(r_update_network_bytes_per_second)})`;
	}
	return <G appName={strName} status={s} />;
}
function F(e) {
	let t = q3(() => {
		let { item } = e;
		return {
			display_name: item.display_name,
			display_status: item.display_status,
			active_beta: item.active_beta,
			status_percentage: item.status_percentage,
			remote_item: !item.BIsPerClientDataLocal(
				item.most_available_per_client_data,
			),
			update_available_but_disabled_by_app:
				item.most_available_per_client_data
					?.update_available_but_disabled_by_app,
		};
	});
	let t_display_name = t.display_name;
	if (t.active_beta) {
		t_display_name = `${t_display_name} [${t.active_beta}]`;
	}
	let i = <>{t_display_name}</>;
	switch (t.display_status) {
		case 11: {
			if (t.update_available_but_disabled_by_app) {
				i = (
					<G
						appName={t_display_name}
						status={Localize("#DisplayStatus_UpdateAvailableButDisabledByApp")}
					/>
				);
				break;
			}
			break;
		}
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
		case 35: {
			i = <G appName={t_display_name} status={Bb(t.display_status, true)} />;
			break;
		}
		case 6:
		case 7: {
			i = <N strName={t_display_name} />;
			break;
		}
		case 8: {
			let e = `${t.status_percentage || 0}%`;
			i = <G appName={t_display_name} status={e} />;
		}
	}
	return i;
}
function G(e) {
	const { appName, status } = e;
	return (
		<div className={M.GameListEntryLabels}>
			<div className={M.GameListEntryName}>
				<span>
					{appName}
					<span className={M.DownloadDash}>-</span>
				</span>
			</div>
			<div className={M.DownloadProgress}>{status}</div>
		</div>
	);
}
