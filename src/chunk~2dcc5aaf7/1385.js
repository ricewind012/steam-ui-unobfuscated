import {
	Localize,
	LocalizeReact,
	LocalizePlural,
	LocalizeInlineReactPlural,
	LocalizeInlineReactWithFallback,
	LocalizationManager,
} from "../../actual_src/utils/localization.js";

import n, { useState, useEffect, useCallback } from "./63696.js";
import i, { bG } from "./18057.js";
import a from "./64608.js";
import s from "./10606.js";
import o, { A as A_1 } from "./90765.js";
import c, { dm } from "./34428.js";
import m from "./98995.js";
import u, { Y2, Qn } from "./72476.js";
import d, { M as M_1 } from "./19840.js";
import A from "./69164.js";
import p from "./50376.js";
import g, { AI } from "./60291.js";
import h from "./90242.js";
import C, { W6 } from "./49519.js";
import _, { wY } from "./52451.js";
import f, { u6 } from "./43152.js";
import b from "./71729.js";
import { FD, Ab, tS, b4, TW, PM, jh, bj } from "./3499.js";
import S, { Kh, s$ } from "./78721.js";
import { H9, jE } from "./26094.js";
import B from "./4690.js";
import v, { n as n_1 } from "./26667.js";
import I, { pg } from "./13869.js";
import E from "./35488.js";
import M, { l } from "./47742.js";
import T from "../awards/utils.js";
import { lX } from "./31084.js";
import k from "./88750.js";
export function iN(e) {
	const { handle, onClick, bGrowScreenshotToFit } = e;
	const a = FD(handle);
	const [s, setS] = useState(false);
	useEffect(() => setS(false), [handle]);
	const a_data = a.data;
	const u = W6();
	const d = n.useCallback(() => u.goBack(), [u]);
	if (a.isLoading) {
		return <g.O0 className={b.FocusedScreenshotSkeleton} />;
	}
	if (a.isError || s || s || !a_data) {
		return (
			<TR className={b.FocusedScreenshotError}>
				<A.Z className={b.Message} onCancel={d}>
					{Localize("#ScreenshotUploader_FailedToLoadScreenshot")}
				</A.Z>
			</TR>
		);
	}
	const { strUrl } = a_data;
	return (
		<g.Kz direction="column" space="md" grow>
			<A.Z
				className={A_1(
					b.FocusedScreenshotContainer,
					bGrowScreenshotToFit && b.GrowScreenshot,
				)}
				onCancel={d}
				noFocusRing
			>
				<div
					className={b.FocusedScreenshotImageContainer}
					onClick={onClick}
					onContextMenu={(e) => {
						lX(<N screenshot={a_data} />, e);
						return true;
					}}
				>
					{strUrl && (
						<img
							onError={() => setS(true)}
							src={strUrl}
							className={b.FocusedScreenshot}
						/>
					)}
				</div>
				<O handle={handle} screenshot={a_data} key={handle} />
			</A.Z>
		</g.Kz>
	);
}
function N(e) {
	const { screenshot } = e;
	const r = !!screenshot.local;
	return (
		<k.tz>
			<k.kt onSelected={() => H9(screenshot)} tone="destructive">
				{Localize("#ExportClip_CopyClipboard")}
			</k.kt>
			{r && (
				<k.kt
					onSelected={() =>
						SteamClient.Screenshots.ShowScreenshotsOnDisk(screenshot.strGameID)
					}
				>
					{Localize("#ScreenshotUploader_ShowOnDisk")}
				</k.kt>
			)}
		</k.tz>
	);
}
export function Pj(e) {
	const { handle, controlsVisible, fnOnContentWidth } = e;
	const a = FD(handle);
	const [s, setS] = useState(false);
	useEffect(() => setS(false), [handle]);
	const a_data = a.data;
	const m = n.useCallback(
		(e) => {
			const e_target = e.target;
			fnOnContentWidth(e_target.clientWidth);
		},
		[fnOnContentWidth],
	);
	const u = wY(m);
	if (a.isLoading) {
		return <g.O0 className={b.FocusedScreenshotSkeleton} />;
	}
	if (a.isError || s || s || !a_data) {
		return (
			<TR className={b.FocusedScreenshotError}>
				<A.Z className={b.Message}>
					{Localize("#ScreenshotUploader_FailedToLoadScreenshot")}
				</A.Z>
			</TR>
		);
	}
	const { strUrl } = a_data;
	return (
		<g.Kz direction="column" space="md" grow>
			<A.Z className={b.FocusedScreenshotContainer}>
				<div className={b.FocusedScreenshotImageContainer}>
					<img
						ref={u}
						onError={() => setS(true)}
						src={strUrl}
						className={b.FocusedScreenshot}
					/>
				</div>
				<G
					handle={handle}
					screenshot={a_data}
					key={handle}
					controlsVisible={controlsVisible}
				/>
			</A.Z>
		</g.Kz>
	);
}
function G(e) {
	const { controlsVisible } = e;
	const r = u6();
	if (Y2()) {
		return <W {...e} />;
	}
	const i = e.screenshot.bUploaded ? <P {...e} /> : <U {...e} />;
	return (
		<A.Z
			className={A_1(
				b.FloatingItemControls,
				controlsVisible && b.Visible,
				r && b.KeyboardOpen,
			)}
		>
			{i}
		</A.Z>
	);
}
function O(e) {
	if (Y2()) {
		return <W {...e} />;
	} else if (e.screenshot.bUploaded) {
		return <P {...e} />;
	} else {
		return <U {...e} />;
	}
}
function P(e) {
	const { screenshot } = e;
	const { rtCreated } = screenshot;
	const a = screenshot.remote || {};

	const { hcontent_file, file_size } = a;

	const c = bG("CommunitySingleScreenshot", hcontent_file);
	const m = jE();
	const d = W6();
	const { mutateAsync } = Ab();
	const {
		short_description,
		favorited = 0,
		num_comments_public = 0,
		vote_data = {},
		reactions = [],
		visibility,
		spoiler_tag,
	} = a;
	const I = LocalizeReact(
		"#UGC_Visibility_Field",
		<span className={b.Link} onClick={c}>
			{AI(visibility)}
		</span>,
	);
	const E = LocalizeReact(
		"#UGC_Spoilers_Field",
		<span className={b.Link} onClick={c}>
			{Localize(
				spoiler_tag ? "#UGC_Spoilers_Field_Yes" : "#UGC_Spoilers_Field_None",
			)}
		</span>,
	);
	const M = Qn();
	return (
		<Y>
			<K grow justifyContent="spaceBetween" alignSelf="stretch">
				<$ timeCreated={rtCreated} size={file_size} />
				<Ee>
					<g._X className={b.UploadedIcon} />
					{I}
					{" | "}
					{E}
				</Ee>
			</K>
			<K grow justifyContent="spaceBetween" alignSelf="stretch">
				<div className={b.UGCMetadata}>
					{short_description && (
						<div className={b.Caption}>"{short_description}"</div>
					)}
					<div className={b.UGCCounts} onClick={c}>
						<L type="likes" value={vote_data?.votes_up || 0} />
						<L type="comments" value={num_comments_public} />
						<L type="favorites" value={favorited} />
						{reactions.map((e) => (
							<X_1 {...e} key={e.reactionid} />
						))}
					</div>
				</div>
				<K>
					<V
						onDelete={() =>
							mutateAsync({
								screenshots: [screenshot],
								location: "all",
							}).finally(() => d.goBack())
						}
						count={{
							total: 1,
							local: 1,
							uploaded: 1,
						}}
					/>
					<g.$n onClick={c}>
						{Localize("#ScreenshotUploader_Action_ViewOnProfile")}
					</g.$n>
					<g.$n autoFocus={M} onClick={(e) => m(screenshot, e.currentTarget)}>
						{Localize("#Generic_Share")}
					</g.$n>
				</K>
			</K>
		</Y>
	);
}
function L(e) {
	const { type, value } = e;
	const I_1 = {
		likes: E.ThumbsUp,
		comments: E.Comment,
		favorites: z,
	}[t];
	return (
		<div className={b.UGCCount}>
			<I_1 className={b.UGCCountIcon} />
			<span>{value || 0}</span>
		</div>
	);
}
function z(e) {
	const [t, r] = l();
	return (
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={e.className}
		>
			<g clipPath={r}>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M22.5253 12.7729V12.7715L22.5256 12.7715C22.3357 12.7588 22.1614 12.6393 22.084 12.4523L18.0001 2.45807L13.9318 12.4115C13.87 12.6083 13.6914 12.7574 13.4734 12.7729L2.71118 13.5688L10.9519 20.5396C11.0967 20.6619 11.1684 20.8588 11.1206 21.0557L9.51216 27.6172L9.58315 27.6881L20.1361 17.141L23.6091 20.614L18.3308 25.8948L27.4486 31.5438L24.8851 21.0825C24.8288 20.8912 24.8851 20.6761 25.0468 20.5397L33.2875 13.5689L22.5253 12.7729Z"
					fill="#0056D6"
				/>
				<path
					d="M20.1358 18.555L9.58335 29.1017L5.15585 24.68L3.09668 26.7392L9.58335 33.2317L22.195 20.6142L20.1358 18.555Z"
					fill="#1A9FFF"
				/>
			</g>
			<defs>
				<clipPath id={t}>
					<rect width="36" height="36" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
function X_1(e) {
	const { count, reactionid } = e;
	return (
		<div className={b.UGCReaction}>
			<img
				src={T.GetReactionImageURL(reactionid, false)}
				className={b.ReactionImage}
			/>
			{count > 1 && <span>{count}</span>}
		</div>
	);
}
function U(e) {
	const { screenshot } = e;
	const t_rtCreated = screenshot.rtCreated;
	const i = tS(screenshot);
	const { mutateAsync } = Ab();
	const s = W6();
	const o = jE();
	const c = Qn();
	return (
		<Y>
			<$ timeCreated={t_rtCreated} size={i.data?.strSizeOnDisk} />
			<K grow alignSelf="stretch" justifyContent="flexEnd" preferredFocus>
				<X>
					<V
						onDelete={() =>
							mutateAsync({
								screenshots: [screenshot],
								location: "local",
							}).finally(() => s.goBack())
						}
						count={{
							total: 1,
							local: 1,
							uploaded: 0,
						}}
					/>
					<g.$n autoFocus={c} onClick={(e) => o(screenshot, e.currentTarget)}>
						{Localize("#Generic_Share")}
					</g.$n>
				</X>
			</K>
		</Y>
	);
}
function W(e) {
	const { screenshot } = e;
	const r = W6();
	const { mutateAsync } = Ab();
	return (
		<Y>
			<K grow alignSelf="stretch" justifyContent="flexEnd">
				<X>
					<V
						disabled={false}
						onDelete={() =>
							mutateAsync({
								screenshots: [screenshot],
								location: "local",
							}).finally(() => r.goBack())
						}
						count={{
							total: 1,
							local: 1,
							uploaded: 0,
						}}
					/>
				</X>
			</K>
		</Y>
	);
}
function V(e) {
	const { onDelete, disabled, count } = e;
	const [a, setA] = useState(false);
	return (
		<>
			<g.K0
				disabled={disabled}
				icon="trashcan"
				onClick={() => setA(true)}
				title={Localize("#Generic_Delete")}
			/>
			<H
				active={a}
				onConfirm={onDelete}
				onRequestClose={() => setA(false)}
				count={count}
			/>
		</>
	);
}
function H(e) {
	const {
		active,
		count: { total: r, local: i, uploaded: a },
	} = e;
	if (r === 1) {
		return (
			<s.EN active={active}>
				<J_1 {...e} />
			</s.EN>
		);
	} else {
		return (
			<s.EN active={active}>
				{i === r && a === 0 && <Q_1 {...e} />}
				{a === r && i === 0 && <Q {...e} />}
				{a !== 0 && i !== 0 && <Z {...e} />}
			</s.EN>
		);
	}
}
function J_1(e) {
	const {
		onConfirm,
		onRequestClose,
		count: { total: i, local: a },
	} = e;
	return (
		<s.o0
			strTitle={LocalizePlural("#ScreenshotUploader_ConfirmDelete_Title", i)}
			strOKButtonText={Localize("#Generic_Delete")}
			onOK={() => {
				onConfirm();
				onRequestClose();
			}}
			onCancel={onRequestClose}
		>
			<g.EY color="secondary">
				{Localize("#ScreenshotUploader_DeleteAllData")}
			</g.EY>
		</s.o0>
	);
}
function Q_1(e) {
	const {
		onConfirm,
		onRequestClose,
		count: { total: i, local: a },
	} = e;
	return (
		<s.o0
			strTitle={LocalizePlural("#ScreenshotUploader_ConfirmDelete_Title", i)}
			strOKButtonText={Localize("#Generic_Delete")}
			onOK={() => {
				onConfirm();
				onRequestClose();
			}}
			onCancel={onRequestClose}
		>
			<g.EY color="secondary">
				{LocalizePlural("#ScreenshotUploader_DeleteLocalOnlyData", a)}
			</g.EY>
		</s.o0>
	);
}
function Q(e) {
	const {
		onRequestClose,
		count: { total: r, local: a },
	} = e;
	const o = bG("CommunityScreenshots");
	return (
		<s.o0
			strTitle={LocalizePlural("#ScreenshotUploader_ConfirmDelete_Title", r)}
			onOK={onRequestClose}
			onCancel={onRequestClose}
			bAlertDialog
		>
			<g.EY color="warning">
				{LocalizePlural("#ScreenshotUploader_RemoteOnly_Message", a)}
			</g.EY>
			<br />
			<br />
			<g.EY color="warning">
				{LocalizeInlineReactPlural(
					"#ScreenshotUploader_RemoteOnly_Description",
					a,
					<g.EY link color="warning" onClick={o} />,
				)}
			</g.EY>
		</s.o0>
	);
}
function Z(e) {
	const {
		onConfirm,
		onRequestClose,
		count: { total: a, local: o },
	} = e;
	const c = bG("CommunityScreenshots");
	return (
		<s.o0
			strTitle={LocalizePlural("#ScreenshotUploader_ConfirmDelete_Title", a)}
			strOKButtonText={Localize("#Generic_Delete")}
			onOK={() => {
				onConfirm();
				onRequestClose();
			}}
			onCancel={onRequestClose}
		>
			<g.EY>{LocalizePlural("#ScreenshotUploader_DeleteLocalData", o, a)}</g.EY>
			<br />
			<br />
			<g.EY color="secondary">
				{LocalizeInlineReactWithFallback(
					"#ScreenshotUploader_DeleteRemoteDataNote",
					<g.EY link color="secondary" onClick={c} />,
				)}
			</g.EY>
		</s.o0>
	);
}
function Y(e) {
	return (
		<A.Z
			className={b.ScreenshotForm}
			flow-children="grid"
			autoFocus
			retainFocus
			navEntryPreferPosition={B.iU.PREFERRED_CHILD}
		>
			{e.children}
		</A.Z>
	);
}
function K(e) {
	const { children, alignSelf, justifyContent, grow, preferredFocus } = e;
	const l = A_1(
		b.ScreenshotFormRow,
		alignSelf === "stretch" && b.Stretch,
		justifyContent === "flexEnd" && b.JustifyEnd,
		justifyContent === "spaceBetween" && b.JustifyBetween,
		grow && b.Grow,
	);
	return (
		<A.Z className={l} flow-children="row" preferredFocus={preferredFocus}>
			{children}
		</A.Z>
	);
}
function X(e) {
	return <div className={b.ScreenshotFormActions}>{e.children}</div>;
}
function J(e) {
	const { details } = e;
	const r = details ? (
		Localize(
			"#ScreenshotUploader_CloudStorageImpact",
			details.strSizeOnDisk,
			details.strCloudAvailable,
			details.strCloudTotal,
		)
	) : (
		<span>{"\xA0"}</span>
	);
	return <div className={b.CloudStorageImpact}>{r}</div>;
}
function $(e) {
	const { timeCreated, size } = e;
	const { strDay, strTime } = nN(timeCreated);
	const s = Localize("#ScreenshotUploader_DateTaken", strDay, strTime);
	const o = !!size;
	const m =
		typeof size != "string" || /[0-9]+$/g.test(size)
			? dm(parseInt(size), {
					nDigitsAfterDecimal: 0,
				})
			: size;
	return (
		<Ee>
			<div>
				{s}
				{o && ` - ${m}`}
			</div>
		</Ee>
	);
}
function Ee(e) {
	return <div className={b.Metadata} {...e} />;
}
export function nN(e) {
	const t = new Date(e * 1000);
	const r = t?.toLocaleString(LocalizationManager.GetPreferredLocales(), {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	const n = t?.toLocaleString(LocalizationManager.GetPreferredLocales(), {
		hour: "numeric",
		minute: "numeric",
	});
	return {
		strDay: r,
		strTime: n,
	};
}
function Re(e) {
	const { value, onChange, onBlur, disabled } = e;
	return (
		<h.dO
			className={b.CaptionField}
			placeholder={Localize("#ScreenshotUploader_CaptionField_Placeholder")}
			value={value || ""}
			onChange={onChange ? (e) => onChange(e.target.value) : undefined}
			onBlur={onBlur}
			maxLength={140}
			disabled={disabled}
			onMoveUp={() => true}
		/>
	);
}
function Ne(e) {
	const { value, onChange, disabled } = e;
	return (
		<m.he
			className={b.VisibilityField}
			toolTipContent={ie(value)}
			direction="top"
		>
			<div className={b.Label}>
				{Localize("#ScreenshotUploader_VisibilityFieldLabel")}
			</div>
			<g.G3
				options={[0, 1, 2, 3]}
				value={value}
				onChange={onChange}
				renderLabel={g.AI}
				className={b.Dropdown}
				disabled={disabled}
			/>
		</m.he>
	);
}
function ie(e) {
	const t = {
		0: "#ScreenshotUploader_Visibility_Public_Explanation",
		1: "#ScreenshotUploader_Visibility_FriendsOnly_Explanation",
		2: "#ScreenshotUploader_Visibility_Private_Explanation",
		3: "#ScreenshotUploader_Visibility_Unlisted_Explanation",
	}[e];
	return Localize(t);
}
function Ae(e) {
	const { value, onChange, disabled } = e;
	return (
		<div className={b.SpoilerField}>
			<div className={A_1(b.Label, b.Wide)}>
				{Localize("#ScreenshotUploader_SpoilerFieldLabel")}
			</div>
			<m.he
				toolTipContent={Localize("#ScreenshotUploader_SpoilerFieldLabel")}
				className={A_1(b.Label, b.Narrow)}
			>
				{value ? <Ce_1 className={b.Eye} /> : <Me className={b.Eye} />}
			</m.he>
			<a.J0 value={value} onChange={onChange} disabled={disabled} />
		</div>
	);
}
function Se(e) {
	const { count, progress, label } = e;
	const [a, setA] = useState(0);
	useEffect(() => {
		setA(0);
		const e = window.setInterval(
			() =>
				setA((e) => {
					const t = (5 - Math.ceil(e / 25)) / 4;
					return Math.min(95, e + t);
				}),
			100,
		);
		return () => window.clearInterval(e);
	}, [progress]);
	const o = Math.min(100, (progress / count) * 100 + a / count);
	return (
		<div className={b.UploadProgressIndicatorContainer}>
			{label && <div className={b.Label}>{label}</div>}
			<Oe progress={o} />
		</div>
	);
}
function Oe(e) {
	const { progress } = e;
	return (
		<div className={b.ProgressContainer}>
			<div className={b.ProgressTrack} />
			<div
				className={b.Progress}
				style={{
					width: `${progress}%`,
				}}
			/>
		</div>
	);
}
export function TR(e) {
	const { className, children, onClick } = e;
	return (
		<div onClick={onClick} className={A_1(className, b.ErrorScreenshot)}>
			<p.eTF className={b.Caution} color="#FFFFFF" />
			{children}
		</div>
	);
}
function Ce_1(e) {
	const t = e.color || "#FFFFFF";
	return (
		<svg viewBox="0 0 21.839 15.428" {...e}>
			<path
				fill={t}
				d="M21.632 7.103c-.184-.231-4.824-5.65-10.681-5.65-1.217 0-2.366.23-3.446.6l7.581 5.766c.161-.461.252-.946.252-1.453 0-.807-.229-1.545-.597-2.191 2.228 1.015 4.042 2.652 4.916 3.529a20.28 20.28 0 0 1-2.228 1.914l1.539 1.176c1.585-1.246 2.573-2.399 2.665-2.491a.974.974 0 0 0-.001-1.2zM20.392 13.745L2.59.184c-.414-.3-.987-.23-1.286.185-.299.415-.23.991.183 1.291l2.688 2.052C1.832 5.234.34 6.987.224 7.102a.913.913 0 0 0 0 1.199c.184.231 4.824 5.65 10.704 5.65 1.837 0 3.537-.53 5.03-1.245l3.308 2.537a.993.993 0 0 0 .552.185.891.891 0 0 0 .735-.369c.321-.438.229-1.015-.161-1.314zm-9.464-1.661c-3.951 0-7.419-3.067-8.729-4.382a18.178 18.178 0 0 1 3.538-2.79l.896.669a4.77 4.77 0 0 0-.069.807 4.37 4.37 0 0 0 4.364 4.382c.689 0 1.332-.161 1.906-.461l1.424 1.084a8.52 8.52 0 0 1-3.33.691z"
			/>
		</svg>
	);
}
function Me(e) {
	const t = e.color || "#FFFFFF";
	return (
		<svg viewBox="0 0 21.839 15.428" {...e}>
			<path
				fill={t}
				d="m21.632,7.13629c-0.184,-0.247 -4.801,-5.827 -10.704,-5.827c-5.881,0 -10.497,5.603 -10.704,5.827a0.928,0.928 0 0 0 0,1.21c0.184,0.247 4.8,5.827 10.704,5.827c5.88,0 10.498,-5.603 10.704,-5.827a0.988,0.988 0 0 0 0,-1.21zm-10.704,5.087c-3.882,0 -7.281,-3.137 -8.568,-4.482c0.804,-0.829 2.389,-2.331 4.41,-3.384a4.202,4.202 0 0 0 -0.391,1.793c0,2.442 2.045,4.437 4.548,4.437c2.504,0 4.548,-1.995 4.548,-4.437c0,-0.628 -0.138,-1.233 -0.391,-1.793c2.021,1.031 3.606,2.532 4.41,3.384c-1.285,1.344 -4.684,4.482 -8.566,4.482z"
			/>
		</svg>
	);
}
export function tL(e) {
	const { handle, width, left } = e;
	const a = FD(handle);
	const [s, setS] = useState(false);
	useEffect(() => setS(false), [handle]);
	const a_data = a.data;
	if (a.isLoading) {
		return <g.O0 className={b.FocusedScreenshotSkeleton} />;
	}
	if (a.isError || s) {
		return (
			<TR className={b.FocusedScreenshotError}>
				<A.Z className={b.Message}>
					{Localize("#ScreenshotUploader_FailedToLoadScreenshot")}
				</A.Z>
			</TR>
		);
	}
	const { strUrl } = a_data;
	return (
		<div className={A_1(b.ScreenshotPreview)}>
			{strUrl && (
				<img
					onError={() => setS(true)}
					src={strUrl}
					className={A_1(b.FocusedScreenshot, left && b.Left)}
					style={
						left && {
							transform: `transform: translateX( -100% ) translateX( ${width}px )`,
						}
					}
				/>
			)}
		</div>
	);
}
function de() {
	const { mutateAsync } = b4();
	const { mutateAsync: mutateAsync_1 } = TW();
	const { mutateAsync: mutateAsync_2 } = PM();
	const { mutateAsync: mutateAsync_3 } = jh();
	return n_1({
		mutationFn: async (i) => {
			const {
				screenshot,
				fields: { strCaption: s, bSpoilers: o, ePrivacy: l },
			} = i;
			await mutateAsync({
				screenshot: screenshot,
				strCaption: s,
			});
			await mutateAsync_1({
				screenshot: screenshot,
				bSpoilers: o,
			});
			await mutateAsync_2({
				screenshot: screenshot,
				eVisibility: Kh(l),
			});
			const c = await mutateAsync_3({
				screenshot: screenshot,
				eVisibility: Kh(l),
			});
			if (!c) {
				throw 2;
			}
			return c;
		},
	});
}
export function MS(e, t) {
	pg(<Pe screenshot={e} />, t);
}
function Pe(e) {
	const { closeModal, screenshot } = e;
	const [i, s] = M_1("screenshot_defaultprivacy", 2);
	const [o, setO] = useState({
		strCaption: "",
		bSpoilers: false,
		ePrivacy: i,
	});
	const m = tS(screenshot);
	const { mutate, isPending, isError } = de();
	const h = useCallback(
		(e, t) => {
			setO((r) => ({
				...r,
				[e]: t,
			}));
			if (e === "ePrivacy") {
				s(t);
			}
		},
		[s],
	);
	const C = isPending;
	return (
		<Ce onRequestClose={closeModal}>
			<Re
				disabled={C}
				value={o.strCaption}
				onChange={(e) => h("strCaption", e)}
			/>
			<A.Z flow-children="row" className={b.ShareDialogRow}>
				<Ne
					disabled={C}
					value={Kh(o.ePrivacy)}
					onChange={(e) => h("ePrivacy", s$(e))}
				/>
				<Ae
					disabled={C}
					value={o.bSpoilers}
					onChange={(e) => h("bSpoilers", e)}
				/>
			</A.Z>
			<J details={m.data} />
			{isError && (
				<div className={b.Error}>
					{Localize("#MediaManager_UploadScreenshot_Failure")}
				</div>
			)}
			<A.Z flow-children="row" className={b.Buttons}>
				<a.$n className={b.Button} disabled={C} onClick={closeModal}>
					{Localize("#Button_Cancel")}
				</a.$n>
				<a.jn
					className={b.Button}
					disabled={C}
					onClick={() =>
						mutate(
							{
								screenshot: screenshot,
								fields: o,
							},
							{
								onSuccess: closeModal,
							},
						)
					}
				>
					{Localize("#Button_Upload")}
				</a.jn>
			</A.Z>
		</Ce>
	);
}
export function OF(e, t) {
	pg(<He screenshots={e} />, t);
}
function He(e) {
	const { closeModal, screenshots } = e;
	const [i, s] = M_1("screenshot_defaultprivacy", 2);
	const o = screenshots.filter((e) => !e.bUploaded);
	const c = bj(o);
	const { mutateAsync } = de();
	const [u, setU] = useState();
	const g = !!u;
	const h = !!u && u.iCur >= u.cTotal;
	if (o.length === 0) {
		return (
			<Ce onRequestClose={closeModal}>
				<Fe>{Localize("#ShareSheet_ShareOnSteam_AllUploaded")}</Fe>
				<A.Z flow-children="row" className={b.Buttons}>
					<a.$n className={b.Button} onClick={closeModal}>
						{Localize("#Button_Close")}
					</a.$n>
				</A.Z>
			</Ce>
		);
	}
	const C = screenshots.length - o.length;
	return (
		<Ce onRequestClose={closeModal}>
			<Ne disabled={g} value={Kh(i)} onChange={(e) => s(s$(e))} />
			<J details={c.data} />
			{C > 0 && (
				<Fe>{LocalizePlural("#ShareSheet_ShareOnSteam_PartialUploaded", C)}</Fe>
			)}
			{u && <_e {...u} />}
			<A.Z flow-children="row" className={b.Buttons}>
				<a.$n className={b.Button} disabled={g && !h} onClick={closeModal}>
					{Localize(h ? "#Button_Close" : "#Button_Cancel")}
				</a.$n>
				<a.jn
					className={b.Button}
					disabled={g}
					onClick={async () => {
						setU({
							cTotal: o.length,
							iCur: 0,
							cFailed: 0,
						});
						let e = false;
						for (const t of o) {
							let r = false;
							try {
								await mutateAsync({
									screenshot: t,
									fields: {
										ePrivacy: i,
										bSpoilers: false,
										strCaption: "",
									},
								});
							} catch (t) {
								console.error("Failed to upload screenshot: ", t);
								r = true;
								e = true;
							}
							setU((e) => ({
								...e,
								iCur: e.iCur + 1,
								cFailed: e.cFailed + (r ? 1 : 0),
							}));
						}
						if (!e) {
							closeModal();
						}
					}}
				>
					{Localize("#Button_Upload")}
				</a.jn>
			</A.Z>
		</Ce>
	);
}
function Ce(e) {
	const { onRequestClose, children } = e;
	return (
		<s.eV closeModal={onRequestClose}>
			<div className={b.ScreenshotShareDialog}>
				<a.Y9>{Localize("#MediaManager_ShareOnSteam")}</a.Y9>
				{children}
			</div>
		</s.eV>
	);
}
function _e(e) {
	const { cTotal, iCur, cFailed } = e;
	const a = iCur >= cTotal;
	return (
		<>
			{!a && (
				<Se
					count={cTotal}
					progress={iCur}
					label={Localize(
						"#ShareSheet_ShareOnSteam_UploadProgress",
						iCur + 1,
						cTotal,
					)}
				/>
			)}
			{cFailed > 0 && (
				<Fe error>
					{LocalizePlural(
						"#ShareSheet_ShareOnSteam_UploadProgress_Failures",
						cFailed,
					)}
				</Fe>
			)}
		</>
	);
}
function Fe(e) {
	const { children, error } = e;
	return (
		<div className={A_1(b.ShareOnSteamDialogText, error && b.Error)}>
			{children}
		</div>
	);
}
