import {
	Localize,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";
import {
	IsHTMLElement,
	GetOwningWindowForEvent,
} from "../../actual_src/utils/domutils.js";
import { LocalizeRTimeToHourAndMinutes } from "../../actual_src/utils/localization/datetime.js";
import n from "./63696.js";
import i from "./44846.js";
import a from "./64608.js";
import s from "./50376.js";
import o from "./25517.js";
import l, { Xe } from "./36934.js";
import c, { lX } from "./31084.js";
import m from "./88750.js";
import u from "./8573.js";
import d from "./48289.js";
import A, { Cc } from "./36464.js";
import g from "./10606.js";
import h from "./68608.js";
import C, { e_ as e } from "./34792.js";
import _, { mK } from "./13869.js";
import f, { bK } from "./60142.js";
import y, { Qn } from "./72476.js";
import S from "./69164.js";
import w from "./61657.js";
import v, { R7 } from "./11131.js";
function I(e) {
	const {
		children: t,
		closeModal: r,
		appid: l,
		file_details: u,
		title: d,
		artworkURL: A,
		window: h,
		nMaxScreenPercentage: C,
		screenshot: _,
		onImageError: B,
		onImageLoad: v,
		additionalFields: I,
		bHideShareButton: E,
	} = e;
	const T = Qn();
	const k = () => r && r();
	const D = n.useRef(undefined);
	let N = {};
	N = T
		? {
				maxWidth: "100%",
				width: "auto",
				maxHeight: "600px",
				objectFit: "contain",
			}
		: {
				maxWidth: h.screen.width * (C || 0.8),
				maxHeight: h.screen.height * (C || 0.8),
			};
	let F = u
		? (0, Localize)("#ArtworkModal_ScrollForMore")
		: (0, Localize)("#ArtworkModal_ScrollForDetails");
	let G = !!t;
	let O = {
		onMenuButton: () => bK(_, h),
	};
	O.onMenuActionDescription = (0, Localize)("#Generic_Share");
	return (
		<g.x_ onEscKeypress={k} className={o.ArtworkModal}>
			<S.Z className={o.ModalBox} {...O}>
				<div ref={D} className={o.ArtworkModalContainer}>
					<S.Z
						focusable
						disableNavSounds
						noFocusRing
						onGamepadDirection={(e) => {
							if (D.current) {
								switch (e.detail.button) {
									case w.pR.DIR_UP: {
										D.current.scrollBy({
											top: -100,
											behavior: "smooth",
										});
										return true;
									}
									case w.pR.DIR_DOWN: {
										D.current.scrollBy({
											top: 100,
											behavior: "smooth",
										});
										return true;
									}
								}
							}
							return false;
						}}
						className={o.ArtworkContainer}
					>
						<img
							className={o.ArtworkImage}
							style={N}
							src={A}
							onLoad={v}
							onError={B}
							onContextMenu={(e) => {
								const t = IsHTMLElement(e.target)
									? e.target.ownerDocument.defaultView
									: h;
								lX(
									<m.tz>
										{_ && (
											<m.kt
												onSelected={() =>
													((e) => {
														SteamClient.Apps.BrowseScreenshotForApp(
															e.strGameID,
															e.hHandle,
														);
													})(_)
												}
											>
												{(0, Localize)("#ContextMenu_BrowseScreenshot")}
											</m.kt>
										)}
										{!_ && (
											<m.kt onSelected={() => R(A, t)}>
												{(0, Localize)("#ContextMenu_SaveScreenshot")}
											</m.kt>
										)}
									</m.tz>,
									e,
								);
							}}
						/>
						{u && <M details={u} appid={l} title={d} additionalFields={I} />}
					</S.Z>
					<div className={o.ArtworkModalDetails}>
						<div className={o.Header}>
							{!T && _ && !E && !i.ID(y.TS.LAUNCHER_TYPE) && (
								<f.wD
									className={o.ShareButton}
									onClick={(e) => _ && bK(_, GetOwningWindowForEvent(e))}
								/>
							)}
							<a.jn className={o.ModalArtCloseButton} onClick={k}>
								{(0, Localize)("#Generic_Close")}
							</a.jn>
							{G && (
								<div className={o.ScrollForMore}>
									<s.i3G angle={180} />
									{F}
									<s.i3G angle={180} />
								</div>
							)}
						</div>
						<div className={o.ChildrenContainer}>{t}</div>
					</div>
				</div>
			</S.Z>
		</g.x_>
	);
}
function E(e) {
	const { creator: t } = e;
	const r = R7();
	return (
		<div className={o.CreatedBy}>
			<div className={o.Label}>{(0, Localize)("#ArtworkModal_CreatedBy")}</div>
			<A.fH
				className={o.Avatar}
				friend={t}
				size="Small"
				statusPosition="right"
			/>
			<h.A
				className={o.ActorName}
				persona={t.persona}
				strNickname={t.nickname}
				bParenthesizeNicknames={
					C.rV.communityPreferences.bParenthesizeNicknames
				}
				onContextMenu={(e) => {
					Cc(e, t, r);
				}}
			/>
		</div>
	);
}
function M(e) {
	const {
		appid: t,
		title: r,
		additionalFields: i,
		details: { creator: a, time_created: s, file_description: c },
	} = e;
	const [m] = e("b24HourClock");
	const { strIconURL: A } = ((e) => {
		const t = Xe(e);
		if (t) {
			return {
				strAppName: t.name,
				strIconURL: t.icon_url,
			};
		} else {
			return {};
		}
	})(t);
	const g = d.O$.GetFriendState(new u.b(a));
	const h = `${LocalizeRtime32ToShortDate(s)} @ ${LocalizeRTimeToHourAndMinutes(
		s,
		{
			bForce24HourClock: m,
		},
	)}`;
	const _ = c.length > 0;
	return (
		<div className={o.FileDetails}>
			{_ && <div className={o.Caption}>❝{r}❞</div>}
			{i && <div className={o.AdditionalFields}>{i}</div>}
			<div className={o.Fields}>
				<E creator={g} />
				<div className={o.IconAndDate}>
					<img className={o.AppIcon} src={A} />
					<div className={o.Timestamp}>{h}</div>
				</div>
			</div>
		</div>
	);
}
export async function N(e) {
	const {
		strURL: t,
		strTitle: r,
		windowOverride: i,
		nMaxScreenPercentage: a,
		children: s,
		appid: o,
		file_details: l,
		screenshot: c,
		additionalFields: m,
		bHideShareButton: u,
	} = e;
	let d;
	let A;
	let p = new Promise((e, t) => {
		d = e;
		A = t;
	});
	let g = i || window;
	try {
		await mK(
			<I
				artworkURL={t}
				title={r}
				window={g}
				nMaxScreenPercentage={a}
				onImageLoad={d}
				onImageError={A}
				appid={o}
				file_details={l}
				screenshot={c}
				additionalFields={m}
				bHideShareButton={u}
			>
				{s}
			</I>,
			g,
			{
				strTitle: r,
				promiseRenderComplete: p,
			},
		);
	} catch (e) {
		console.error("ERROR DISPLAYING ARTWORK");
	}
}
function R(e, t) {
	(t || window).SteamClient.Browser.StartDownload(e);
}
