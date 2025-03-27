import {
	Localize,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import s, { PA } from "./41230.js";
import o from "./52451.js";
import c, { A as A_1 } from "./90765.js";
import m from "./61662.js";
import u from "./1965.js";
import d, { lX } from "./31084.js";
import A from "./88750.js";
import p from "./87935.js";
import g, { lY } from "./51095.js";
import C from "./91486.js";
import f from "./79120.js";
import y from "./13656.js";
import { rP } from "./72476.js";
import { t6 } from "./18057.js";
import B from "./96680.js";
import { br } from "./18869.js";
import { Co } from "./96593.js";
import E from "./78057.js";
import M from "./85965.js";
const _ =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAADXCAYAAACXvWFqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo3MTc0ODE5QTJDNzVERDExOEEyOUNEMDg2REUyODhBMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRjZFMzNCNkFDQTkxMUU0OUNFMTlDQjg0NkVGOTJBOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRjZFMzNCNUFDQTkxMUU0OUNFMTlDQjg0NkVGOTJBOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg3REEwQThDMzUzMUUzMTE5NjQ4QUJEOUUwNUU2NkUxIiBzdFJlZjpkb2N1bWVudElEPSJ1dWlkOjcxNzQ4MTlBMkM3NUREMTE4QTI5Q0QwODZERTI4OEEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8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";
const b = f;
export function Lx(e) {
	const { className, item, appidParent, size, bHideBanner, ...o } = e;
	const [l, setL] = i.useState(false);
	const [u, setU] = i.useState(false);
	const A = Co(appidParent);
	let g = [];
	if (item.strHeaderFilename) {
		g = [
			p.B7.BuildCachedStoreAssetURL(
				item.unAppID,
				item.strHeaderFilename,
				item.rtStoreAssetModifyTime,
			),
			p.B7.BuildStoreAssetURL(
				item.unAppID,
				item.strHeaderFilename,
				item.rtStoreAssetModifyTime,
			),
		];
	}
	const h = [...g, ...E.H.GetHeaderImages(A), M.A];
	return (
		<div
			className={A_1(
				className,
				b.DLCArt,
				size == "Large" && b.Fullsize,
				size == "Unlimited" && b.UnlimitedSize,
			)}
			{...o}
		>
			<C.z
				appid={item.unAppID}
				name={item.strName}
				eAssetType={3}
				className={b.Art}
				rgSources={h}
				onLoad={() => {
					setL(true);
				}}
				onIncrementalError={(e, t, r) => {
					setU(r == 1);
				}}
			/>
			{!bHideBanner && l && u && <img className={b.Banner} src={_} />}
			{l && <div className={b.Gloss} />}
		</div>
	);
}
export class Ne extends i.PureComponent {
	static contextType = B.mA;
	m_visibilityObserver = {
		visible: false,
	};
	constructor(e) {
		super(e);
		Gn(this);
	}
	BIsDLCInstalled(e) {
		return e.strState !== "notinstalled";
	}
	RenderHover() {
		if (this.props.item.bAvailableOnStore) {
			return (
				<D
					item={this.props.item}
					appidParent={this.props.appidParent}
					visibilityObserver={this.m_visibilityObserver}
					window={this.context?.BrowserWindow}
				/>
			);
		} else {
			return <N item={this.props.item} appidParent={this.props.appidParent} />;
		}
	}
	ShowContextMenu(e) {
		if (this.props.item.bAvailableOnStore) {
			lX(<K appid={this.props.item.unAppID} />, e);
		} else {
			e.preventDefault();
		}
	}
	render() {
		return (
			<m.z
				className={A_1(
					b.Item,
					this.BIsDLCInstalled(this.props.item) ? b.Installed : b.Notinstalled,
					this.props.item.bAvailableOnStore && b.AvailableOnStore,
				)}
				renderHover={this.RenderHover}
				onContextMenu={this.ShowContextMenu}
				visibilityObserver={
					this.props.item.bAvailableOnStore
						? this.m_visibilityObserver
						: undefined
				}
				hoverDelay={this.props.item.bAvailableOnStore ? 0 : undefined}
			>
				<Lx
					item={this.props.item}
					appidParent={this.props.appidParent}
					size={this.props.bFullSize ? "Large" : undefined}
				/>
				{this.props.bShowDate && (
					<div className={b.DateAdded}>
						{Localize(
							"#DLC_DateAdded",
							LocalizeRtime32ToShortDate(this.props.item.rtPurchaseDate),
						)}
					</div>
				)}
			</m.z>
		);
	}
}
function K(e) {
	const t = t6(e.appid, "dlccapsule");
	return (
		<A.tz>
			<A.kt onSelected={t}>{Localize("#AppDetails_ViewStoreDLC")}</A.kt>
		</A.tz>
	);
}
Cg([a.sH], Ne.prototype, "m_visibilityObserver", undefined);
Cg([o.oI], Ne.prototype, "RenderHover", null);
Cg([o.oI], Ne.prototype, "ShowContextMenu", null);
class D extends i.PureComponent {
	constructor(e) {
		super(e);
		(this.props.window ?? window).addEventListener("message", this.OnMessage);
		this.state = {
			style: {},
		};
	}
	componentWillUnmount() {
		(this.props.window ?? window).removeEventListener(
			"message",
			this.OnMessage,
		);
		this.props.visibilityObserver.visible = false;
	}
	OnMessage(e) {
		if (e.data.height) {
			this.setState(
				{
					style: {
						height: e.data.height,
					},
				},
				() => {
					this.props.visibilityObserver.visible = true;
				},
			);
		}
	}
	render() {
		return (
			<iframe
				style={this.state.style}
				className={A_1(b.StoreHover)}
				src={p.B7.ResolveURL("StoreAppHover", this.props.item.unAppID)}
			/>
		);
	}
}
Cg([o.oI], D.prototype, "OnMessage", null);
class N extends i.PureComponent {
	render() {
		return (
			<m.M
				className={A_1(b.Hover)}
				blurElement={
					<Lx item={this.props.item} appidParent={this.props.appidParent} />
				}
			>
				<div className={b.TopSection}>
					{this.props.bShowArt && (
						<Lx item={this.props.item} appidParent={this.props.appidParent} />
					)}
					<div>{this.props.item.strName}</div>
				</div>
				{this.props.item.rtPurchaseDate > 0 && (
					<div className={b.Purchased}>
						{Localize(
							"#DLC_DateAdded",
							LocalizeRtime32ToShortDate(this.props.item.rtPurchaseDate),
						)}
					</div>
				)}
			</m.M>
		);
	}
}
export const Kf = PA((e) => {
	const { details, showRemainder } = e;
	const n = br();
	const a = rP();
	if (details.vecDLC.length == 0) {
		return null;
	}
	let s = details.vecDLC.slice();
	s.sort((e, t) =>
		e.bAvailableOnStore && !t.bAvailableOnStore
			? -1
			: t.bAvailableOnStore && !e.bAvailableOnStore
				? 1
				: e.rtPurchaseDate == t.rtPurchaseDate
					? lY(e.strName, t.strName)
					: t.rtPurchaseDate - e.rtPurchaseDate,
	);
	details.strStoreHeaderImage;
	const o = a?.IN_GAMEPADUI ? 4 : 6;
	s = s.slice(0, o);
	let c = new Set();
	c.add(details.rtPurchased);
	s.forEach((e) => {
		if (e.bAvailableOnStore) {
			c.add(e.rtPurchaseDate);
		}
	});
	let m = s.filter((e) => e.bAvailableOnStore || !c.has(e.rtPurchaseDate));
	if (m.length == 0) {
		m = [s[0]];
	}
	let d = [];
	for (let e of m) {
		d.push(
			<Ne key={e.unAppID} item={e} appidParent={details.unAppID} bShowHover />,
		);
	}
	const A = details.vecDLC.length;
	if (showRemainder && d.length === o && A > d.length) {
		const e = A - (d.length - 1);
		d[d.length - 1] = (
			<div key="remainder" className={b.Remainder}>
				{Localize("#PlusNMore", e)}
			</div>
		);
	}
	return (
		<u.n
			className={b.DLCSection}
			label={Localize("#AppDetails_SectionTitle_DLC")}
			primaryAction={{
				label: Localize("#AppDetails_ManageDLC", A),
				action: () => n.AppProperties(details.unAppID, y.ho.Dlc),
			}}
			secondaryAction={{
				label: Localize("#AppDetails_ViewStoreDLC", A),
				action: (e) => {
					GetOwningWindowForEvent(e).location.href = p.B7.BuildSteamURL(
						"StoreDlcPage",
						details.unAppID,
					);
				},
			}}
			rightColumnSection
			availableOffline
		>
			<u.n.Body>{d && <div className={b.DLC}>{d}</div>}</u.n.Body>
		</u.n>
	);
});
