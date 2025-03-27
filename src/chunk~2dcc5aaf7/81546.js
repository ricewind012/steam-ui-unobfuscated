import { Localize } from "../../actual_src/utils/localization.js";
import n from "./20414.js";
import i from "./81994.js";
import a, { xv } from "./5822.js";
import s from "./48289.js";
import o from "./39054.js";
import l from "./46422.js";
import c from "./87935.js";
import m, { q3 } from "./90095.js";
import u from "./63696.js";
import d from "./8090.js";
import A from "./1521.js";
import p from "./16117.js";
import g from "./90242.js";
import h from "./69164.js";
import C from "./21105.js";
import _ from "./8573.js";
import { _o } from "./21920.js";
import b from "./64608.js";
import y from "./35488.js";
import S from "./23337.js";
import { A as A_1 } from "./90765.js";
import { SP } from "./51076.js";
import I from "./96892.js";
import E from "./43691.js";
const M = 25;
export function _j(e) {
	let { app, bVisible } = e;
	const n = xv();
	let i = q3(() => n.GetSelectedGuide(app.appid));
	let [s, setS] = u.useState(0);
	let LRef = u.useRef(undefined);
	let c = u.useCallback(() => {
		n.SetSelectedGuide(app.appid, null);
		setS(s + 1);
		return true;
	}, [n, app.appid, s, setS]);
	let d = u.useCallback(
		(e) => {
			LRef.current?.PushState();
			n.SetSelectedGuide(app.appid, e);
		},
		[n, app.appid],
	);
	u.useEffect(() => {
		if (LRef.current) {
			LRef.current?.PopState();
		}
	}, [s]);
	if (bVisible) {
		return (
			<h.Z retainFocus className={I.OverlayGuides} navRef={LRef}>
				{i && <Z appid={app.appid} publishedfileid={i} onClose={c} />}
				{!i && <R app={app} onActivateGuide={d} />}
			</h.Z>
		);
	} else {
		return null;
	}
}
function R(e) {
	let { app, onActivateGuide } = e;
	return (
		<h.Z className={I.OverlayGuidesHome}>
			<K_1 app={app} />
			<D
				type="Favorites"
				title={(0, Localize)("#AppOverlay_Guides_Favorites")}
				appid={app.appid}
				onActivateGuide={onActivateGuide}
				useGuidesQuery={o.zg}
				childComponentType={x}
			/>
			<D
				type="Popular"
				title={(0, Localize)("#AppOverlay_Guides_Popular")}
				appid={app.appid}
				onActivateGuide={onActivateGuide}
				useGuidesQuery={o.a}
				childComponentType={U}
			/>
		</h.Z>
	);
}
const K_1 = (e) => (
	<div className={I.GuidesHomeHeader}>
		<div className={I.AppName}>{e.app.display_name}</div>
		<div className={I.GuidesHomeHeaderDesc}>
			{(0, Localize)("#AppOverlay_Guides_Desc", e.app.display_name)}
		</div>
	</div>
);
function D(e) {
	const {
		type,
		title,
		className,
		childComponentType,
		appid,
		onActivateGuide,
		useGuidesQuery,
	} = e;
	const C_1 = childComponentType;
	let [m, d] = SP(`${type}_${appid}_page`, 1);
	let A = useGuidesQuery(appid, m);
	let A_data = A.data;
	let g = A.isSuccess && (A_data.totalpages > 1 || m > A_data.totalpages);
	const C = u.useCallback(
		(e) => {
			if (A.isSuccess) {
				let A_data_1 = A.data;
				let r = m + e;
				if (r >= 1 && r <= A_data_1.totalpages) {
					d(r);
				}
			}
		},
		[m, d, A],
	);
	return (
		<h.Z
			navKey={type}
			flow-children="column"
			className={A_1(I.GuideList, className)}
		>
			<h.Z className={I.Header}>
				<N>{title}</N>
				{A.isSuccess && (
					<h.Z
						className={A_1(!g && I.Hidden, I.PagingControls)}
						fnCanTakeFocus={() => g}
					>
						<b.$n
							className={I.PagingButton}
							onClick={() => C(-1)}
							disabled={m <= 1}
							focusable={m > 1}
						>
							{"<"}
						</b.$n>
						<div className={I.PageNumber}>
							{A_data.page}
							{" / "}
							{Math.max(A_data.totalpages, 1)}
						</div>
						<b.$n
							className={I.PagingButton}
							onClick={() => C(1)}
							disabled={m >= A_data.totalpages}
							focusable={m < A_data.totalpages}
						>
							{">"}
						</b.$n>
					</h.Z>
				)}
			</h.Z>
			{A.isLoading && (
				<h.Z focusable>
					<i.j showFooter />
				</h.Z>
			)}
			{!A.isSuccess && !A.isLoading && (
				<h.Z className={I.LoadingGuidesError} focusable>
					{(0, Localize)("#AppOverlay_Guides_Error")}
				</h.Z>
			)}
			{A.isSuccess && !A.isLoading && A_data.totalpages == 0 && (
				<h.Z className={I.NoGuides} focusable>
					{(0, Localize)("#AppOverlay_Guides_None")}
				</h.Z>
			)}
			{A.isSuccess &&
				A_data.publishedfiledetails.map((e) => (
					<C_1
						navKey={`${type}_${e.publishedfileid}`}
						key={e.publishedfileid}
						details={e}
						onActivateGuide={onActivateGuide}
					/>
				))}
		</h.Z>
	);
}
const N = (e) => <div className={I.ListTitle}>{e.children}</div>;
function F(e) {
	const { details, onActivateGuide, ...n } = e;
	if (details.result != 1) {
		return null;
	} else {
		return (
			<h.Z
				focusable
				className={I.GuideListItemBase}
				{...n}
				onActivate={() => onActivateGuide(details.publishedfileid)}
			>
				<div className={I.Container}>
					<div className={I.Media}>
						<L details={details} />
					</div>
					<div className={I.Content}>
						<Z_1 className={I.GuideContent}>
							<h.Z
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<G>
									{l.oy.TextFilterStore.FilterText(
										details.creator,
										details.title,
									)}
								</G>
								<Sn details={details} />
							</h.Z>
							<O steamid={details.creator} />
							<P>
								{l.oy.TextFilterStore.FilterText(
									details.creator,
									details.short_description,
								) + (details.short_description.length == 256 ? "..." : "")}
							</P>
						</Z_1>
					</div>
				</div>
			</h.Z>
		);
	}
}
const G = (e) => <div className={I.GuideTitle}>{e.children}</div>;
const O = (e) => {
	let t = q3(() => s.O$.GetFriendState(new _.b(e.steamid)).display_name);
	return (
		<div className={I.GuideAuthor}>
			{(0, Localize)("#AppOverlay_Guides_Author", t)}
		</div>
	);
};
const P = (e) => <div className={I.GuideDescription}>{e.children}</div>;
const L = (e) => (
	<S.o
		className={A_1(e.className, I.GuideImage)}
		srcs={[e.details.preview_url + _o(128, 128)]}
	/>
);
const Z_1 = (e) => (
	<div className={A_1(I.VerticalContent, e.className)}>{e.children}</div>
);
function x(e) {
	const { details, onActivateGuide, ...n } = e;
	return <F details={details} onActivateGuide={onActivateGuide} {...n} />;
}
function U(e) {
	const { details, onActivateGuide, ...n } = e;
	return <F details={details} onActivateGuide={onActivateGuide} {...n} />;
}
function W(e) {
	const { text, details } = e;
	const n = u.useMemo(
		() =>
			new Map([
				...Array.from(p.W4),
				...Array.from(p.N2),
				[
					"img",
					{
						Constructor: V,
						autocloses: false,
					},
				],
				[
					"previewimg",
					{
						Constructor: j,
						autocloses: false,
						skipFollowingNewline: true,
					},
				],
				[
					"previewicon",
					{
						Constructor: j,
						autocloses: false,
					},
				],
				[
					"screenshot",
					{
						Constructor: q,
						autocloses: false,
					},
				],
				[
					"publishedfile",
					{
						Constructor: Q,
						autocloses: false,
					},
				],
			]),
		[],
	);
	const i = u.useCallback((e) => new A.OJ(new A.R8(), 0), []);
	const ARef = u.useRef(undefined);
	ARef.current ||= new d.B(n, i, E.TS.LANGUAGE);
	return ARef.current.ParseBBCode(text, {
		details: details,
	});
}
function V(e) {
	const t = e.children?.toString();
	if (t) {
		return <img src={t} />;
	} else {
		return null;
	}
}
function H(e) {
	let t = "";
	let r = [I.SharedFilePreviewImage];
	e.forEach((e) => {
		switch (e) {
			case "sizeThumb": {
				r.push(I.SizeThumb);
				break;
			}
			case "sizeFull":
			case "full": {
				r.push(I.SizeFull);
				break;
			}
			case "sizeOriginal":
			case "original": {
				r.push(I.SizeOriginal);
				break;
			}
			case "floatLeft": {
				r.push(I.FloatLeft);
				break;
			}
			case "floatRight": {
				r.push(I.FloatRight);
				break;
			}
			case "inline": {
				break;
			}
			case "leftthumb": {
				r.push(I.SizeThumb);
				r.push(I.FloatLeft);
				t = "512x0.resizedimage";
				break;
			}
			case "rightthumb": {
				r.push(I.SizeThumb);
				r.push(I.FloatRight);
				t = "512x0.resizedimage";
			}
		}
	});
	return {
		cssClassNames: A_1(...r),
		extension: t,
	};
}
function j(e) {
	let t = e.context.details;
	let r = p.j$(e.args);
	let n = r?.split(";");
	if (!n || n.length < 2) {
		return null;
	}
	let [i] = n;
	let a = H(n[1].split(","));
	let s = ((e, t) => {
		for (let n of t.previews) {
			if (n.previewid == e) {
				return n.url;
			}
		}

		return "";
	})(i, t);
	let o = e.children?.toString();
	return <img className={a.cssClassNames} src={s + a.extension} title={o} />;
}
function q(e) {
	let t = p.j$(e.args);
	let r = t?.split(";");
	if (!r || r.length < 2) {
		return null;
	}
	let [n] = r;
	let i = H(r[1].split(","));
	let a = r[2]
		.replace(".steampowered.com", ".steamusercontent.com")
		.replace("http://", "https://");
	if (!a.startsWith("https://")) {
		a = `https://${a}`;
	}
	let s = e.children?.toString();
	let o = c.B7.BuildSteamURL("CommunityFilePage", n);
	return (
		<g.Ii href={o}>
			<img className={i.cssClassNames} src={a + i.extension} title={s} />
		</g.Ii>
	);
}
function Q(e) {
	let t = p.j$(e.args);
	let r = t?.split(";");
	let n = r?.length == 1 ? r[0] : null;
	let i = o.cH(n);
	if (!i.isSuccess || !i.data) {
		return null;
	}
	const i_data = i.data;
	const s = c.B7.BuildSteamURL("CommunityFilePage", n);
	return (
		<g.Ii href={s}>
			<L details={i_data} />
			<h.Z>{l.oy.TextFilterStore.FilterText(i_data.creator, i_data.title)}</h.Z>
			<h.Z>
				{l.oy.TextFilterStore.FilterText(
					i_data.creator,
					i_data.short_description,
				)}
			</h.Z>
		</g.Ii>
	);
}
function Z(e) {
	const { appid, publishedfileid, onClose } = e;
	let a = o.CD(appid, publishedfileid);
	let s = o.Gr(publishedfileid);
	let CRef = u.useRef(new Map());
	const m = u.useCallback((e, t) => {
		CRef.current.set(e, t);
	}, []);
	const d = u.useCallback(
		(e) => {
			let t = CRef.current.get(e);
			if (t) {
				t.TakeFocus();
			}
		},
		[CRef],
	);
	return (
		<h.Z
			className={I.GuideDetails}
			onCancelButton={onClose}
			retainFocus
			focusableIfNoChildren
		>
			{(a.isLoading || s.isLoading) && (
				<h.Z
					noFocusRing
					focusable
					style={{
						height: "100%",
					}}
				>
					<i.j showFooter>{(0, Localize)("#AppOverlay_Guides_Loading")}</i.j>
				</h.Z>
			)}
			{a.isSuccess && s.isSuccess && (
				<h.Z className={I.GuideDetailsContainer}>
					<C.iq
						name={`OverlayGuide_${a.data.publishedfileid}`}
						className={I.GuideSubSections}
						scrollPaddingTop={20}
						scrollPaddingBottom={20}
					>
						<h.Z
							className={I.GuideDetailsHeader}
							navRef={(e) => m("overview", e)}
							focusable
							noFocusRing
						>
							<L details={a.data} />
							<div>
								<h.Z className={I.GuideDetailsTitle}>
									{l.oy.TextFilterStore.FilterText(
										a.data.creator,
										a.data.title,
									)}
								</h.Z>
								<O steamid={a.data.creator} />
							</div>
							<div
								style={{
									marginLeft: "auto",
								}}
							>
								<Sn details={a.data} bShowTotalRatings />
							</div>
						</h.Z>
						<J details={a.data} />
						<h.Z className={I.GuideDetailsDesc}>
							<W
								text={l.oy.TextFilterStore.FilterText(
									a.data.creator,
									a.data.file_description,
								)}
								details={a.data}
							/>
						</h.Z>
						{s.data.map((e) => (
							<K
								navRef={(t) => m(e.sectionid, t)}
								key={e.sectionid}
								details={a.data}
								subSection={e}
							/>
						))}
					</C.iq>
					<Y details={a.data} rgSubSections={s.data} onSelectSubsection={d} />
				</h.Z>
			)}
		</h.Z>
	);
}
function Y(e) {
	let { details, rgSubSections, onSelectSubsection } = e;
	return (
		<C.MS className={I.TableOfContents}>
			<h.Z
				key="overview"
				className={I.TOCEntry}
				onActivate={() => onSelectSubsection("overview")}
				focusable
			>
				{(0, Localize)("#AppOverlay_Guides_TOC_Overview")}
			</h.Z>
			{rgSubSections.map((e) =>
				e.title.length > 0 ? (
					<h.Z
						key={e.sectionid}
						className={I.TOCEntry}
						onActivate={() => onSelectSubsection(e.sectionid)}
						focusable
					>
						<W
							text={l.oy.TextFilterStore.FilterText(details.creator, e.title)}
							details={details}
						/>
					</h.Z>
				) : null,
			)}
		</C.MS>
	);
}
function K(e) {
	let { details, subSection, navRef } = e;
	return (
		<h.Z className={I.SubSection}>
			<h.Z className={I.SubSectionTitle} navRef={navRef} focusable noFocusRing>
				<W
					text={l.oy.TextFilterStore.FilterText(
						details.creator,
						subSection.title,
					)}
					details={details}
				/>
			</h.Z>
			<h.Z className={I.SubSectionDesc}>
				<W
					text={l.oy.TextFilterStore.FilterText(
						details.creator,
						subSection.description_text,
					)}
					details={details}
				/>
			</h.Z>
		</h.Z>
	);
}
export function Sn(e) {
	let { details, bShowTotalRatings } = e;
	let n = details.vote_data.votes_up + details.vote_data.votes_down;
	let i = Math.ceil(details.vote_data.score * 5);
	let a = n >= M;
	let s = [];
	for (let e = 0; e < 5; ++e) {
		s.push(
			e + 1 <= i && a ? (
				<y.Star className={I.UGCRatingStar} />
			) : (
				<y.EmptyStar className={I.UGCRatingStar} />
			),
		);
	}
	return (
		<div className={I.UGCRating}>
			<div className={I.UGCRatingStars}>{...s}</div>
			<div className={I.UGCTotalRatings}>
				{bShowTotalRatings &&
					a &&
					(0, Localize)("#AppOverlay_Guides_TotalRatings", n)}
				{bShowTotalRatings &&
					!a &&
					(0, Localize)("#AppOverlay_Guides_TotalRatings_NotEnough")}
			</div>
		</div>
	);
}
function J(e) {
	let { details } = e;
	return (
		<h.Z className={I.UGCControls}>
			<$
				nAppID={details.consumer_appid}
				publishedfileid={details.publishedfileid}
			/>
			<Ee
				nAppID={details.consumer_appid}
				publishedfileid={details.publishedfileid}
			/>
		</h.Z>
	);
}
function $(e) {
	let { nAppID, publishedfileid } = e;
	let i = o.I$(publishedfileid);
	let a = i.isSuccess && i.data && i.data.get(publishedfileid)?.vote == n.bJ.Up;
	let s =
		i.isSuccess && i.data && i.data.get(publishedfileid)?.vote == n.bJ.Down;
	const l = u.useCallback(
		(e) => {
			if (i.isSuccess) {
				o.GK(publishedfileid, e);
			}
		},
		[i, publishedfileid],
	);
	return (
		<>
			<b.$n
				className={A_1(I.UGCButton, I.VotingButton)}
				onClick={() => l(n.bJ.Up)}
			>
				<y.ThumbsUp className={A_1(I.VoteIcon, a ? I.ThumbsUpColor : "")} />
			</b.$n>
			<b.$n
				className={A_1(I.UGCButton, I.VotingButton)}
				onClick={() => l(n.bJ.Down)}
			>
				<y.ThumbsDown className={A_1(I.VoteIcon, s ? I.ThumbsDownColor : "")} />
			</b.$n>
		</>
	);
}
function Ee(e) {
	let { nAppID, publishedfileid } = e;
	let n = o.wX(nAppID, publishedfileid);
	let i = n.isSuccess && n.data;
	const a = u.useCallback(() => {
		if (n.isSuccess) {
			o.Jm(nAppID, publishedfileid, !n.data);
		}
	}, [n, nAppID, publishedfileid]);
	return (
		<b.$n className={I.UGCButton} onClick={a}>
			{(0, Localize)(
				i
					? "#AppOverlay_Guides_Favorites_Remove"
					: "#AppOverlay_Guides_Favorites_Add",
			)}
		</b.$n>
	);
}
