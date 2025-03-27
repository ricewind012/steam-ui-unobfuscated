import { LocalizePlural } from "../../actual_src/utils/localization.js";
import {
	LocalizeRTimeToHourAndMinutes,
	LocalizeRtime32ToShorterDate,
} from "../../actual_src/utils/localization/datetime.js";
import { IsDateSameDay } from "../../actual_src/utils/time.js";
import n from "./63696.js";
import i from "./69164.js";
import a, { A as A_1 } from "./90765.js";
import c from "./75883.js";
import u from "./50376.js";
const m = c;
const d = true;
function A(e) {
	let { onActivate, icon, body, eUIMode, classNames } = e;
	let c = onActivate;
	let m_PinnedTemplate = m.PinnedTemplate;
	if (eUIMode == 7) {
		m_PinnedTemplate = m.PinnedTemplateDesktop;
	} else if (eUIMode == 3) {
		m_PinnedTemplate = m.PinnedTemplateWeb;
	}
	m_PinnedTemplate = A_1(m_PinnedTemplate, classNames);
	return (
		<i.Z className={m_PinnedTemplate} onActivate={c}>
			<div className={m.Content}>
				<div className={m.PinnedBody}>
					<span className={m.Icon}>{icon}</span>
					{body}
				</div>
			</div>
		</i.Z>
	);
}
export function OK(e) {
	const {
		count,
		icon,
		onActivate,
		strLocToken,
		bAlwaysShow,
		eUIMode,
		classNames,
		visible,
	} = e;
	if (!count && !bAlwaysShow) {
		return null;
	}
	const u = LocalizePlural(strLocToken, count);
	return (
		<A
			icon={icon}
			body={u}
			onActivate={onActivate}
			eUIMode={eUIMode}
			classNames={classNames}
			visible={visible}
		/>
	);
}
let g;
export function FG(e) {
	let { nUnread, location, eUIMode, bLoading, footer, bNewIndicator } = e;
	const [u, setU] = n.useState(bLoading ? g.loadingActive : g.none);
	const [A, setA] = n.useState(undefined);
	n.useEffect(() => {
		if (u != g.loadingActive || bLoading) {
			if (u == g.loadingComplete && bLoading) {
				setU(g.loadingActive);
			}
		} else {
			setU(g.loadingComplete);
		}
	}, [u, bLoading]);
	n.useEffect(() => {
		let e =
			parseInt(m.loadinganimationiterationcount) *
			parseInt(m.loadinganimationduration) *
			1000;
		const t = window.setTimeout(() => setU(g.none), e);
		return () => window.clearTimeout(t);
	}, []);
	n.useEffect(() => {
		if (
			nUnread &&
			nUnread > 0 &&
			A !== m.Unread &&
			location != 2 &&
			location != 1
		) {
			setA(m.Unread);
		} else if (!nUnread && A == m.Unread) {
			setA(m.MarkedRead);
		}
	}, [nUnread, location, A]);
	let e_onActivate = e.onActivate;
	e_onActivate ||= () => console.log("Missing activate function");
	if (u == g.loadingActive) {
		e_onActivate = undefined;
	}
	let m_StandardTemplate = m.StandardTemplate;
	if (location == 4) {
		m_StandardTemplate = m.AllNotificationsTemplate;
	} else if (location == 2) {
		m_StandardTemplate = m.DesktopToastTemplate;
	} else if (eUIMode == 7 || eUIMode == 3) {
		m_StandardTemplate = m.StandardTemplateDesktop;
	}
	let f = null;
	if (u != g.none && location != 2 && location != 1) {
		let e = u == g.loadingComplete ? m.Hide : null;
		f = (
			<div className={A_1(m.LoadingTemplate, e)}>
				<div className={A_1(m.StandardLogoDimensions, m.ShimmerLogo)} />
				<div className={m.Content}>
					<div className={A_1(m.Header, m.ShimmerHeader)} />
					<div className={A_1(m.Body, m.ShimmerBody)} />
				</div>
			</div>
		);
	}
	return (
		<i.Z
			onActivate={e_onActivate}
			className={m.StandardTemplateContainer}
			onOptionsButton={e.onOptionsButton}
			onOptionsActionDescription={e.onOptionsButtonDesc}
		>
			<div className={A_1(m_StandardTemplate, A)}>
				<div className={m.StandardLogoDimensions}>{e.logo}</div>
				{e.personaStatus && (
					<div className={A_1(m.AvatarStatus, e.personaStatus)} />
				)}
				<div className={m.Content}>{e.children}</div>
				{f}
				{bNewIndicator && <C location={location} />}
			</div>
			{footer || null}
		</i.Z>
	);
}
function C(e) {
	const { location } = e;
	if (d && location == 3) {
		return (
			<div className={m.NewIndicator}>
				<u.jlt />
			</div>
		);
	} else {
		return null;
	}
}
export function OJ(e) {
	let { icon, title, timestamp, location, fnRenderTimestamp } = e;
	const o = !!timestamp && (location == 3 || location == 4);
	let l;
	l = location == 4 ? w : (fnRenderTimestamp ?? B);
	return (
		<div className={m.Header}>
			<VJ icon={icon} />
			{!!title && <OO title={title} />}
			{o &&
				l({
					timestamp: timestamp,
				})}
		</div>
	);
}
export function VJ(e) {
	return <div className={m.Icon}>{e.icon}</div>;
}
export function OO(e) {
	return <div className={m.Title}>{e.title}</div>;
}
export function NF(e) {
	let t = A_1(m.StandardNotificationDescription, e.multiline && m.Multiline);
	return <div className={t}>{e.children}</div>;
}
export function C0(e) {
	let t = A_1(m.StandardNotificationSubText, e.multiline && m.Multiline);
	return <div className={t}>{e.children}</div>;
}
function w(e) {
	if (e.timestamp === undefined) {
		return null;
	}
	let t = new Date();
	let r = new Date(e.timestamp * 1000);
	let i = LocalizeRTimeToHourAndMinutes(e.timestamp);
	if (!IsDateSameDay(t, r)) {
		i = `${LocalizeRtime32ToShorterDate(
			e.timestamp,
			false,
			false,
			false,
		)} ${i}`;
	}
	return <div className={m.Timestamp}>{i}</div>;
}
function B(e) {
	if (e.timestamp === undefined) {
		return null;
	}
	let t = new Date();
	let r = new Date(e.timestamp * 1000);
	let i = IsDateSameDay(t, r)
		? LocalizeRTimeToHourAndMinutes(e.timestamp)
		: LocalizeRtime32ToShorterDate(e.timestamp, false, false, false);
	return <div className={m.Timestamp}>{i}</div>;
}
export function PT(e) {
	const { text } = e;
	return <div className={m.BottomBar}>{text}</div>;
}
export function ll(e) {
	let { playerName, nickName, parenthesizeNickNames, state } = e;
	let o = !!nickName;
	let l = o && !parenthesizeNickNames;
	let c = l ? nickName : playerName;
	let u = state == "ingame" ? m.IngameTitle : m.OnlineTitle;
	return (
		<>
			<span className={A_1(u)}>{c}</span>
			{parenthesizeNickNames && o && (
				<span className={A_1(m.PlayerNickName, m.FullName)}>({nickName})</span>
			)}
			{l && <span className={m.PlayerNickName}>{" *"}</span>}
		</>
	);
}
((e) => {
	e[(e.none = 0)] = "none";
	e[(e.loadingActive = 1)] = "loadingActive";
	e[(e.loadingComplete = 2)] = "loadingComplete";
})((g ||= {}));
