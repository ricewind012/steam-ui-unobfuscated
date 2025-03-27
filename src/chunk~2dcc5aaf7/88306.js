import { Localize } from "../../actual_src/utils/localization.js";
import n, { q3 } from "./90095.js";
import i from "./63696.js";
import a, { A as A_1 } from "./90765.js";
import s from "./76565.js";
import l from "./82775.js";
import { JS } from "./98670.js";
import u from "./72476.js";
import d from "./24418.js";
import { NT } from "./53807.js";
import g from "./98995.js";
import { t7 } from "./82594.js";
import C from "./50376.js";
const o = s;
const A = d;
export function lS(e) {
	const { appid } = e;
	return (
		<div className={A.AppSocialLinksCtn}>
			<F appid={appid} />
		</div>
	);
}
function F(e) {
	const { appid } = e;
	const [r] = t7(appid, {
		include_basic_info: true,
		include_links: true,
	});
	if (!r) {
		return null;
	}
	const n = r.GetLinks();
	if (n && n.length != 0 && u.TS.IMG_URL) {
		return (
			<>
				<div className={A_1(o.EventEditorTextTitle, "EventEditorTextTitle")}>
					{Localize("#EventDisplay_SocialTitle")}
				</div>
				<div className={A.AppSocialLinks}>
					{n.map((e) =>
						e.url ? (
							<B key={`app_social_link_${appid}_${e.link_type}`} social={e} />
						) : (
							<Y
								key={`app_social_text_${appid}_${e.link_type}_${e.text}`}
								social={e}
							/>
						),
					)}
				</div>
			</>
		);
	} else {
		return null;
	}
}
function B(e) {
	const { social } = e;
	return (
		<a
			href={NT(social.url)}
			target={u.TS.IN_CLIENT || "_blank"}
			rel="noopener noreferrer"
		>
			<g.he toolTipContent={social.url}>
				<S social={social} />
			</g.he>
		</a>
	);
}
function Y(e) {
	const { social } = e;
	return (
		<div className={A.AppSocialLinkWithText}>
			<g.he toolTipContent={social.text}>
				<S social={social} />
			</g.he>
			<div className={A.AppSocialText}>{social.text}</div>
		</div>
	);
}
function S(e) {
	const { social } = e;
	return <W linkType={social.link_type} className={A.AppSocialLinkIcon} />;
}
function W(e) {
	const { linkType, ...r } = e;
	switch (linkType) {
		case 1: {
			return <C.agV {...r} />;
		}
		case 2: {
			return <C.ZnA {...r} />;
		}
		case 3: {
			return <C.oy {...r} />;
		}
		case 4: {
			return <C.ofN {...r} />;
		}
		case 5: {
			return <C.Bki {...r} />;
		}
		case 6:
		case 18: {
			return <C.$vK {...r} />;
		}
		case 7: {
			return <C.OSJ {...r} />;
		}
		case 8: {
			return <C.nm_ {...r} />;
		}
		case 9: {
			return <C.tIO {...r} />;
		}
		case 10: {
			return <C.Vt2 {...r} />;
		}
		case 11: {
			return <C.Vgk {...r} />;
		}
		case 12: {
			return <C.VSd {...r} />;
		}
		case 13: {
			return <C.ccb {...r} />;
		}
		case 14: {
			return <C.rNt {...r} />;
		}
		case 15: {
			return <C.g$j {...r} />;
		}
		case 16: {
			return <C.BQz {...r} />;
		}
		case 17: {
			return <C.jdP {...r} />;
		}
		case 19: {
			return <C.bKN {...r} />;
		}
		case 20: {
			return <C.sDU {...r} />;
		}
		case 21: {
			return <C.MbF {...r} />;
		}
		case 22: {
			return <C.emH {...r} />;
		}
		case 23:
		case 0: {
			return "invalid social media type";
		}
	}
}
export function OT(e) {
	const { event, dateRangeLayout = "horizontal" } = e;
	const [a, s, o] = q3(() => [
		event.GetStartTimeAndDateUnixSeconds(),
		event.GetEndTimeAndDateUnixSeconds(),
		event.type,
	]);
	const c = {};
	if (dateRangeLayout == "vertical") {
		c.ShortDateRange = A.VerticalLocalDateAndTime;
	}
	return (
		<div className={A.EventDetailTimeInfo}>
			<l.u1
				startDateAndTime={a}
				endDateAndTime={s}
				bHideEndTime={!JS(o)}
				stylesmodule={c}
			/>
		</div>
	);
}
