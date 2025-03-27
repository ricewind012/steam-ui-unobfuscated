import {
	Localize,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import n, { bG } from "./18057.js";
import i from "./78057.js";
import a, { $L, ZG } from "./70239.js";
import s, { PA } from "./41230.js";
import o from "./63696.js";
import l from "./69164.js";
import c from "./50376.js";
import m from "./98995.js";
import { Qn } from "./72476.js";
import A from "./56726.js";
import p from "./1965.js";
import g from "./99360.js";
const h = g;
export const y = PA((e) => {
	const { details } = e;
	const t_unAppID = details.unAppID;
	const n = $L(t_unAppID);
	if (!i.H.BIsWorkshopVisible(details)) {
		return null;
	}
	const s = n.length > 0 && n[0];
	let l = s && (
		<_
			item={s}
			appid={t_unAppID}
			title={details.strDisplayName}
			previewUrl={s.preview_url ? s.preview_url : details.strStoreHeaderImage}
		/>
	);
	return (
		<p.n
			feature={2}
			className={h.WorkshopSection}
			label={(0, Localize)("#AppDetails_SectionTitle_Workshop")}
			highlight={l}
			rightColumnSection
		>
			<p.n.Body className={h.WorkshopContainer}>
				{!s && <B appid={t_unAppID} />}
				<F appid={t_unAppID} />
			</p.n.Body>
		</p.n>
	);
});
function _(e) {
	const {
		appid,
		title,
		previewUrl,
		item: { title: s, short_description: A, publishedfileid: g },
	} = e;
	const C = Qn();
	const _ = () => {
		let e = a.B6.GetTrendyWorkshopItems(appid);
		if (e.length != 0) {
			a.B6.HideWorkshopItem(appid, e[0].publishedfileid);
		}
	};
	const f = bG("CommunityFilePage", g);
	return (
		<l.Z
			onOKButton={f}
			onOKActionDescription={(0, Localize)("#AppDetails_ViewItemInWorkshop")}
			onSecondaryButton={_}
			onSecondaryActionDescription={(0, Localize)(
				"#AppDetails_WorkshopFeaturedHideItem",
			)}
		>
			<p.n.Highlight className={h.WorkshopHightlight}>
				<div className={h.WorkshopHeader}>
					<div className={h.FeaturedItem}>
						<img className={h.FeaturedItemImage} onClick={f} src={previewUrl} />
						<div className={h.FeaturedItemDetailsContainer}>
							<div className={h.FeaturedItemHeader}>
								{(0, Localize)("#AppDetails_WorkshopFeaturedHeader", title)}
							</div>
							<div className={h.FeaturedItemName} onClick={f}>
								{s}
							</div>
							<div className={h.FeaturedItemDesc}>{A}</div>
							{!C && (
								<div className={h.FeaturedLinks}>
									<div className={h.FeaturedItemLink} onClick={f}>
										{(0, Localize)("#AppDetails_WorkshopFeaturedMoreInfo")}
									</div>
								</div>
							)}
							<m.he
								toolTipContent={(0, Localize)(
									"#AppDetails_WorkshopFeaturedHideItem",
								)}
								className={h.FeaturedItemHideButton}
								onClick={_}
							>
								<c.sED />
							</m.he>
						</div>
					</div>
				</div>
			</p.n.Highlight>
		</l.Z>
	);
}
function F(e) {
	const { appid } = e;
	const r = bG("SteamWorkshopPage", appid);
	const i = bG("SteamWorkshopSubscriptions", appid);
	if (Qn()) {
		return (
			<l.Z
				flow-children="row"
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "8px",
				}}
			>
				<A.TD onClick={i}>
					{(0, Localize)("#AppDetails_ViewSubscribedItems")}
				</A.TD>
				<A.TD onClick={r}>{(0, Localize)("#AppDetails_WorkshopVisit")}</A.TD>
			</l.Z>
		);
	} else {
		return (
			<div className={h.ButtonContainer}>
				<A.Po className={h.SpacedButton} onClick={i}>
					{(0, Localize)("#AppDetails_ViewSubscribedItems")}
				</A.Po>
				<A.TD onClick={r}>{(0, Localize)("#AppDetails_WorkshopVisit")}</A.TD>
			</div>
		);
	}
}
function B(e) {
	const { appid } = e;
	const r = ZG(appid);
	const n =
		r === 0
			? (0, Localize)("#AppDetails_WorkshopSubCount_None")
			: LocalizePlural("#AppDetails_WorkshopSubCount", r);
	return <div className={h.SubscribedItemsMessage}>{n}</div>;
}
