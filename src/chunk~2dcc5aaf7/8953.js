import {
	Localize,
	LocalizeReact,
	LocalizeDateHumanReadable,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./8090.js";
import a from "./1521.js";
import s, { useState, useEffect, useRef } from "./63696.js";
import o, { j$ } from "./16117.js";
import l from "./56840.js";
import c from "./44164.js";
import m, { L$, wm, ZF } from "./53807.js";
import u, { Pm } from "./69137.js";
import d from "./17372.js";
import h from "./69740.js";
import C from "./90601.js";
import { h as h_1, Q as Q_1 } from "./5047.js";
import _f from "./5859.js";
import b, { Gg, G6 } from "./82594.js";
import y from "./34091.js";
import S from "./64608.js";
import w from "./1624.js";
import B from "./43088.js";
import I from "./43397.js";
import { A as A_1 } from "./90765.js";
import T, { yK, Qn, Tc, Y2 } from "./72476.js";
import k from "./13352.js";
import D from "./40772.js";
import N from "./70057.js";
import G from "./26853.js";
import P from "./93850.js";
import L from "./44058.js";
import z from "./83957.js";
import U from "./42318.js";
import H from "./23337.js";
import j from "./12767.js";
import Q from "./90242.js";
import Z from "./50376.js";
import Y from "./29428.js";
import { q3 } from "./90095.js";
import J from "./9123.js";
import ne from "./6561.js";
import ie from "./10606.js";
import { pg } from "./13869.js";
import se, { a4 } from "./69412.js";
import oe, { Yw } from "./30133.js";
import le from "./69164.js";
import me from "./18522.js";
import ue from "./95783.js";
import de from "./86454.js";
import Ae from "./60833.js";
import ge from "./55116.js";
import we from "./4816.js";
import { HO } from "./89193.js";
import ve from "./12176.js";
import Ie from "./31222.js";
import Ee from "./82301.js";
import { w as w_1 } from "./49455.js";
import { H as H_1 } from "./16154.js";
import Re from "./79769.js";
import ke, { hL } from "./52451.js";
import { Oz, CC, ns } from "./89697.js";
import Ge, { vs } from "./30737.js";
import Oe from "./22435.js";
import ze from "./6472.js";
import { XU } from "./50712.js";
import ct from "./8573.js";
import mt from "./83610.js";
import ut from "./44184.js";
import At from "./52850.js";
import { m as m_1 } from "./39039.js";
import Ct from "./41230.js";
import { sf } from "./44846.js";
import ft from "./88341.js";
import bt from "./78771.js";
import yt from "./13484.js";
import St from "./95020.js";
import Bt from "./53272.js";
import Et from "./75888.js";
import Tt from "./98995.js";
import Rt from "./49433.js";
import Nt from "./80493.js";
import Ft from "./55448.js";
import { SW } from "./58839.js";
class A extends a.K0 {
	m_LinkFilter = d.O;
	m_parentNode = undefined;
	m_mapHostToComponent;
	m_globalStoreLink;
	constructor(e, t, r, n) {
		super(e);
		this.m_parentNode = t;
		this.m_mapHostToComponent = r;
		this.m_globalStoreLink = n;
	}
	AppendText(e, t = false) {
		let r = e;
		if (
			(t || this.m_parentNode?.tag == "*") &&
			(this.m_parentNode == null || this.m_parentNode.tag != "img")
		) {
			let e = this.m_LinkFilter.exec(r);
			while (e) {
				if (e.index > 0) {
					let r = e.input.substring(0, e.index);
					super.AppendText(r, t);
				}
				let [n] = e;
				let i = false;
				if (this.m_mapHostToComponent) {
					for (let e = 0; e < this.m_mapHostToComponent.length; ++e) {
						if (this.m_mapHostToComponent[e].urlRegExp.exec(n)) {
							i = true;
							super.AppendNode(
								this.m_mapHostToComponent[e].fnBBComponent(
									n,
									this.m_globalStoreLink,
								),
							);
							break;
						}
					}
				}
				if (!i) {
					super.AppendNode(Pm(n));
				}
				r = e.input.substring(e.index + n.length);
				e = this.m_LinkFilter.exec(r);
			}
		}
		if (r.length > 0) {
			super.AppendText(r, t);
		}
	}
}
class p extends a.K0 {
	m_EmoteRegex = new RegExp("[ː:]([a-zA-Z0-9_]+)[ː:]");
	AppendText(e, t = false) {
		let r = e;
		if (e.length >= 3) {
			let e = this.m_EmoteRegex.exec(r);
			while (e) {
				if (e.index > 0) {
					let r = e.input.substring(0, e.index);
					super.AppendText(r, t);
				}
				let [, n] = e;
				super.AppendNode(
					<c.nl emoticonHoverStore={l.s} emoticon={n}>
						{[]}
					</c.nl>,
				);
				r = e.input.substring(e.index + n.length + 2);
				e = this.m_EmoteRegex.exec(r);
			}
		}
		if (r.length > 0) {
			super.AppendText(r, t);
		}
	}
}
class g extends a.K0 {
	m_parentNode = undefined;
	constructor(e, t) {
		super(e);
		this.m_parentNode = t;
	}
	AppendText(e, t = false) {
		let r = e;
		if (this.m_parentNode && this.m_parentNode.tag == "img") {
			r = L$(r);
		}
		super.AppendText(r, t);
	}
}
const v = B;
function R(e) {
	let t = j$(e.args) || j$(e.args, "href");
	const r = j$(e.args, "style");
	const n = j$(e.args, "id");
	const i = ((e) => {
		if (e === "button") {
			return A_1(B.LinkButton, "LinkButton");
		} else {
			return A_1(B.Link, "Link");
		}
	})(r);
	e.context.event;
	if (t === undefined) {
		return e.children || "";
	}
	if (typeof t == "string" && t.length > 0) {
		const r = o._D(t, e.language, e.context.event?.rtime32_last_modified);
		t = typeof r == "string" ? r : r[1];
	}
	if (
		T.TS.WEB_UNIVERSE == "dev" &&
		yK() == "store" &&
		wm(t) == "store.steampowered.com"
	) {
		t = t.replace("https://store.steampowered.com/", T.TS.STORE_BASE_URL);
	}
	if (typeof t == "string" && t.length > 0 && t[0] == "#") {
		return (
			<a className={i} href={t}>
				{e.children}
			</a>
		);
	} else if (t == "steam://settings/account") {
		return (
			<I.uU className={i} href="steam://settings/account">
				{e.children}
			</I.uU>
		);
	} else {
		return (
			<u.d$ className={i} url={t} event={e.context.event} id={n}>
				{e.children}
			</u.d$>
		);
	}
}
const F = N;
const O = (e) => {
	const [t, setT] = useState(true);
	const [n, setN] = useState(null);
	useEffect(() => {
		if (e.appid == 0 || e.trailerBaseID == 0) {
			setN(Localize("#TrailerPlayer_ID_NotProvided"));
			return;
		}
		(async () => {
			await _f.A.Get().QueueAppRequest(e.appid, {
				include_trailers: true,
			});
			if (_f.A.Get().BHasApp(e.appid)) {
				if (
					!_f.A.Get()
						.GetApp(e.appid)
						.GetAllTrailers()
						.GetTrailerByID(e.trailerBaseID)
				) {
					console.error(
						`Trailer ${e.trailerBaseID} doesn't existed within appid ${e.appid}`,
					);
					setN(
						Localize("#TrailerPlayer_CouldNotLoad", e.appid, e.trailerBaseID),
					);
				}
				setT(false);
			} else {
				setN(Localize("#TrailerPlayer_CouldNotLoad", e.appid, e.trailerBaseID));
			}
		})();
	}, [e.appid, e.trailerBaseID]);
	if (n) {
		if (e.bIsPreviewMode) {
			return <div className={F.ErrorDiv}>{n}</div>;
		} else {
			return null;
		}
	}
	if (t) {
		return <G.t string={Localize("#Loading")} size="small" />;
	}
	const a = _f.A.Get()
		.GetApp(e.appid)
		.GetAllTrailers()
		.GetTrailerByID(e.trailerBaseID);
	const o = a.GetTrailerMax();
	const l = {
		sPoster: a.GetScreenshot(),
		rgVideoSources: [
			{
				sURL: o.strWebMURL,
				sFormat: "video/webm",
			},
			{
				sURL: o.strMP4URL,
				sFormat: "video/mp4",
			},
		],
	};
	return <D.L bControls bAutoPlay={false} bLoop={false} video={l} />;
};
const x = z;
const W = s.lazy(() => require.e(8396).then(require.bind(require, 72993)));
const V = (e) => {
	const TRef = useRef(null);
	const [r, setR] = useState(L.K.Get().GetVODForAppID(e.appid));
	const [i, setI] = useState(!Boolean(L.K.Get().GetVODForAppID(e.appid)));
	useEffect(() => () => TRef.current && TRef.current("VODPlayer: unmounting"));
	useEffect(() => {
		let i = r;
		if (r && r.appid != e.appid) {
			i = L.K.Get().GetVODForAppID(e.appid);
		}
		if (!i) {
			const r = async () => {
				if (TRef.current) {
					TRef.current();
				}
				const r = x.CancelToken.source();
				TRef.current = r.cancel;
				i = await L.K.Get().LoadVODForAppID(e.appid);
				if (!r.token.reason) {
					setR(i);
				}
				setI(false);
			};
			setI(true);
			r();
		}
		if (r != i) {
			setR(i);
		}
	}, [e.appid, r]);
	if (!r && e.bPreviewMode) {
		return (
			<div>
				{Localize(
					i ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
					e.appid,
				)}
			</div>
		);
	} else {
		return (
			<div className={P.BroadcastCtn}>
				<U.tH>
					<s.Suspense fallback={null}>
						<W nAppIDVOD={e.appid} watchLocation={9} bStartPaused />
					</s.Suspense>
				</U.tH>
			</div>
		);
	}
};
function K(e) {
	const { fileUploadManager } = e;
	const RRef = useRef();
	return (
		<div className={Y.Ctn}>
			<input
				type="file"
				accept=".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4"
				style={{
					display: "none",
				}}
				name="fileupload"
				ref={RRef}
				onChange={(e) => {
					if (e.currentTarget?.files?.length > 0) {
						fileUploadManager.SetImageFileToUpload(e.currentTarget.files[0]);
						e.currentTarget.value = "";
					}
				}}
			/>
			<Q.fu
				type="button"
				title={Localize("#Button_Upload")}
				onOKActionDescription={Localize("#Button_Upload")}
				onClick={() => RRef.current.click()}
			>
				<Z.xv8 />
			</Q.fu>
		</div>
	);
}
function $(e) {
	const { fileUploadManager } = e;
	const r = q3(() => fileUploadManager.file_upload_props.eUploadState);
	if (r == 1) {
		return <Ee_1 fileUploadManager={fileUploadManager} />;
	} else if (r == 3 || r == 5 || r == 5 || r == 4) {
		return <Re_1 fileUploadManager={fileUploadManager} />;
	} else if (r != 0) {
		return <Te_1 fileUploadManager={fileUploadManager} />;
	} else {
		return null;
	}
}
function Ee_1(e) {
	const { fileUploadManager } = e;
	const t_file = fileUploadManager.file;
	return (
		<div className={J.UploadPreviewContainer}>
			{Boolean(t_file.type.includes("image")) && (
				<img
					className={J.UploadPreview}
					src={fileUploadManager.file_upload_data_url}
				/>
			)}
			{Boolean(t_file.type.includes("video")) && <Z.CeX />}
			<div className={J.FileUploadFileName}>'{t_file.name}'</div>
			<div
				className={J.FileUploadCancel}
				onClick={() => fileUploadManager.Reset()}
			>
				<Z.sED />
			</div>
			<S.jn
				className={J.FileUploadBtn}
				onClick={async () => {
					await fileUploadManager.BeginFileUpload();
					fileUploadManager.Reset();
				}}
			>
				{Localize("#Button_Upload")}
			</S.jn>
		</div>
	);
}
function Te_1(e) {
	const { fileUploadManager } = e;
	const [r, n, i] = q3(() => [
		fileUploadManager.file_upload_props.file,
		fileUploadManager.file_upload_props.displayFileName,
		fileUploadManager.file_upload_props.uploadProgress,
	]);
	const a = r ? Localize("#Uploading_Item", n) : "";
	const o = {
		width: `${i}%`,
	};
	return (
		<div className={J.FileUploadProgressContainer}>
			<div className={J.FileUploadProgressName}>{a}</div>
			<div
				className={A_1(
					J.FileUploadProgressBarContainer,
					"DialogProgressBar_ProgressBarContainer",
				)}
			>
				<div className="DialogProgressBar_Value" style={o} />
			</div>
		</div>
	);
}
function Re_1(e) {
	const { fileUploadManager } = e;
	const [r, n, i] = q3(() => [
		fileUploadManager.file_upload_props.strErrorDescription,
		fileUploadManager.file_upload_props.displayFileName,
		fileUploadManager.file_upload_props.eUploadState,
	]);
	const a = n ? Localize("#Uploading_Item", n) : "";
	const o = r || Localize("#Chat_Upload_ErrorCloud");
	return (
		<div className={J.FileUploadProgressContainer}>
			<div className={J.FileUploadProgressName}>{a}</div>
			<div className={J.FileUploadErrorDescription}>{o}</div>
			<div className={J.FileUploadActions}>
				<S.dR className="DialogLayout_NoMinWidth">
					{Boolean(i == 3) && (
						<S.jn
							onClick={async () => {
								await fileUploadManager.RetryFileUpload();
								fileUploadManager.Reset();
							}}
						>
							{Localize("#Chat_Upload_ErrorAction_Retry")}
						</S.jn>
					)}
					<S.$n onClick={() => fileUploadManager.ClearFileUploadError()}>
						{Localize("#Chat_Upload_ErrorAction_Close")}
					</S.$n>
				</S.dR>
			</div>
		</div>
	);
}
const ce =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
function Pe_1(e) {
	const { padded, gap, children, bLazyRenderChildren } = e;
	const a = (
		<div
			style={{
				gap: gap ? `${gap}px` : "unset",
			}}
			className={A_1({
				[Ae.ScrollSnapCarousel]: true,
				ScrollSnapCarousel: true,
				SaleSectionCarousel: true,
				SaleSectionCarouselPadding: padded,
				[e.className]: true,
			})}
		>
			{children}
		</div>
	);
	if (bLazyRenderChildren) {
		return (
			<ue.K bHorizontal={false} placeholderWidth={1} placeholderHeight={1}>
				{a}
			</ue.K>
		);
	} else {
		return a;
	}
}
class he extends s.Component {
	render() {
		const { showArrows, arrowFill } = this.props;
		const r = this.props.visibleSlides;
		const n = this.props.totalSlides;
		const i = this.props.currentSlide;
		if (r >= n) {
			return null;
		}
		const a = (i * 100) / n;
		const o = (1 - Math.min(i + r, n) / n) * 100;
		const l = a + (r * 50) / n;
		const c = 100 - l;
		return (
			<div className={me.pipScrollerContainer}>
				{showArrows && (
					<oe._X
						className={A_1(me.pipScrollButton, me.left, me.carouselNavButton)}
					>
						<Z.uMb fill={arrowFill || "white"} />
					</oe._X>
				)}
				<div className={me.pipScroller}>
					<div className={me.scrollBackground} />
					<div
						className={me.scrollForeground}
						style={{
							left: `${a}%`,
							right: `${o}%`,
						}}
					/>
					<div
						className={me.scrollNavDiv}
						style={{
							left: "0%",
							width: `${l}%`,
						}}
					>
						<oe._X
							className={A_1(me.carouselNavButton, me.scrollNavButton)}
							style={{
								color: "red",
							}}
						>
							<div />
						</oe._X>
					</div>
					<div
						className={me.scrollNavDiv}
						style={{
							right: "0%",
							width: `${c}%`,
						}}
					>
						<oe.CC className={A_1(me.carouselNavButton, me.scrollNavButton)}>
							<div />
						</oe.CC>
					</div>
				</div>
				{showArrows && (
					<oe.CC
						className={A_1(me.pipScrollButton, me.right, me.carouselNavButton)}
					>
						<Z.uMb fill={arrowFill || "white"} />
					</oe.CC>
				)}
			</div>
		);
	}
}
const Ce = Yw(he, (e) => ({
	currentSlide: e.currentSlide,
	totalSlides: e.totalSlides,
	visibleSlides: e.visibleSlides,
}));
function _e(e) {
	const t = Qn();
	if ((!e.screenIsWide && !t) || e.bForceSimpleCarousel) {
		return <Pe_1 {...e}>{e.children}</Pe_1>;
	} else {
		return <Fe_1 {...e}>{e.children}</Fe_1>;
	}
}
function Fe_1(e) {
	const t = Qn();
	const r = () => s.Children.count(e.children);
	const n = r();
	const i = Math.min(r(), e.visibleElements);
	if (!n || !i) {
		return null;
	}
	const a = i < n;
	const o = e.hideArrows || !a;
	const l = !a || e.hidePips;
	let c = 4 / 3;
	let m = true;
	if (e.slideAspectRatio) {
		c = e.slideAspectRatio;
		m = false;
	}
	const u = `items_in_row_${e.visibleElements}`;
	return (
		<le.Z
			flow-children="row"
			className={A_1(me.carouselBody, e.className, u)}
			navKey={e.navKey}
		>
			<oe.gi
				visibleSlides={e.visibleElements}
				totalSlides={r()}
				naturalSlideWidth={c * 100}
				naturalSlideHeight={100}
				step={e.visibleElements}
				infinite={!e.disableEdgeWrap}
				isIntrinsicHeight={m}
				dragEnabled={false}
				touchEnabled={false}
				lockOnWindowScroll
				orientation="horizontal"
				disableKeyboard
			>
				<Ye_1
					bHideArrows={o}
					bAutoAdvance={e.bAutoAdvance && !t}
					onSlide={e.onSlide}
					arrowFill={e.arrowFill}
				>
					{s.Children.map(e.children, (t, r) => {
						const n = e.bLazyRenderChildren ? (
							<ue.K
								rootMargin="0px -5px 0px 100%"
								bHorizontal
								placeholderWidth={1}
								placeholderHeight={1}
							>
								{t}
							</ue.K>
						) : (
							t
						);
						return (
							<oe.q7 className={me.innerSlide} key={`slide_${r}`} index={r}>
								{n}
							</oe.q7>
						);
					})}
				</Ye_1>
				{!l &&
					(e.useTestScrollbar ? (
						<Ce showArrows={o} carouselStore={null} />
					) : (
						<div className={me.breadcrumbContainer}>
							{((t) =>
								s.Children.map(
									e.children,
									(e, r) =>
										r % t != 0 || (
											<oe.cL slide={r} className={me.pip}>
												<img src={ce} />
											</oe.cL>
										),
								))(i)}
						</div>
					))}
			</oe.gi>
		</le.Z>
	);
}
function be(e) {
	if (e) {
		window.clearTimeout(e.current);
		e.current = null;
	}
}
function Ye_1(e) {
	const { bHideArrows, bAutoAdvance, children, onSlide, arrowFill } = e;
	const o = s.useContext(oe.Yc);
	const LRef = s.useRef(o.state.currentSlide);
	const [c, setC] = s.useState(null);
	const [u, setU] = s.useState(!!bAutoAdvance);
	const ARef = s.useRef(null);
	const PRef = s.useRef(null);
	s.useEffect(() => {
		const e = () => {
			ARef.current = window.setTimeout(() => {
				if (ARef.current) {
					be(ARef);
					let e = 0;
					if (
						o.state.currentSlide + o.state.visibleSlides <
						o.state.totalSlides
					) {
						e = Math.min(
							o.state.currentSlide + o.state.visibleSlides,
							o.state.totalSlides - o.state.visibleSlides,
						);
					}
					o.setStoreState({
						currentSlide: e,
					});
				}
			}, 8000);
		};
		if (u) {
			e();
		}
		const t = () => {
			const l_current = LRef.current;
			const r = o.state.currentSlide;
			if (onSlide) {
				onSlide(r);
			}
			setC(r > l_current ? "Right" : r < l_current ? "Left" : null);
			be(PRef);
			PRef.current = window.setTimeout(() => {
				if (PRef.current) {
					setC(null);
					be(PRef);
				}
			}, 1000);
			LRef.current = r;
			if (ARef.current) {
				be(ARef);
				setU(false);
			} else if (u) {
				e();
			}
		};
		o.subscribe(t);
		return () => {
			o.unsubscribe(t);
			be(ARef);
			be(PRef);
		};
	}, [o, u]);
	const g = !!c && `CarouselSliding${c}`;
	return (
		<div className={A_1(me.sliderBody, "SliderBody", g)}>
			{!bHideArrows && (
				<oe._X
					className={A_1(
						me.carouselBtnCtn,
						me.left,
						me.carouselNavButton,
						"CarouselBtnLeft",
					)}
				>
					<Z.uMb fill={arrowFill || "white"} />
				</oe._X>
			)}
			<oe.Ap
				className={de.J.GetScrollableClassname()}
				classNameTray={me.slideTrayCustomize}
				classNameAnimation={me.DisableSliderMotion}
			>
				<ge.q>{children}</ge.q>
			</oe.Ap>
			{!bHideArrows && (
				<oe.CC
					className={A_1(
						me.carouselBtnCtn,
						me.right,
						me.carouselNavButton,
						"CarouselBtnRight",
					)}
				>
					<Z.uMb fill={arrowFill || "white"} />
				</oe.CC>
			)}
		</div>
	);
}
function Se(e) {
	const t = Qn();
	const r = a4(se.Wn);
	const n = String(j$(e.args, "autoadvance")).toLowerCase() === "true";
	return (
		<_e
			hideArrows={!r}
			hidePips={t}
			visibleElements={1}
			useTestScrollbar={false}
			bLazyRenderChildren
			screenIsWide={r}
			bAutoAdvance={n}
			className={v.ScreenshotCarousel}
		>
			{e.children}
		</_e>
	);
}
class De {
	m_mapInventoryByApp = new Map();
	m_mapPromises = new Map();
	m_listChangeCallback = new Map();
	m_SteamInterface = null;
	GetInventoryForApp(e) {
		return this.m_mapInventoryByApp.get(e);
	}
	GetItemDefsChangeForAppID(e) {
		if (!this.m_listChangeCallback.has(e)) {
			this.m_listChangeCallback.set(e, new Re.lu());
		}
		return this.m_listChangeCallback.get(e);
	}
	BHasLoadedDef(e) {
		return this.m_mapPromises.has(e);
	}
	SetTestAppCommunityItems(e, t) {
		this.m_mapInventoryByApp.set(e, t);
		this.GetItemDefsChangeForAppID(e).Dispatch(t);
		this.m_mapPromises.set(e, Promise.resolve(1));
	}
	async LoadCommunityInventory(e) {
		if (e) {
			if (!this.m_mapPromises.has(e)) {
				this.m_mapPromises.set(e, this.InternalLoadCommunityInventory(e));
			}
			return this.m_mapPromises.get(e);
		} else {
			return 2;
		}
	}
	async InternalLoadCommunityInventory(e) {
		const t = ve.w.Init(Ee.cU);
		t.Body().set_filter_appids([e]);
		let r = null;
		try {
			const n = await Ee.uy.GetCommunityInventory(
				this.m_SteamInterface.GetServiceTransport(),
				t,
			);
			if (n.GetEResult() == 1) {
				const t = new Array();
				n.Body()
					.items()
					.forEach((e) => t.push(e.toObject()));
				this.m_mapInventoryByApp.set(e, t);
				this.GetItemDefsChangeForAppID(e).Dispatch(t);
				return 1;
			}
			r = H_1(n);
		} catch (e) {
			r = H_1(e);
		}
		console.error(
			`CQuestCommunityInventoryStore.InternalLoadCommunityInventory failed: on appid ${e} error: ${r?.strErrorMsg}`,
			r,
		);
		return 2;
	}
	static s_Singleton;
	static Get() {
		if (!De.s_Singleton) {
			De.s_Singleton = new De();
			De.s_Singleton.Init();
			if (T.TS.WEB_UNIVERSE == "dev") {
				window.g_QuestCommunityInventoryStore = De.s_Singleton;
			}
		}
		return De.s_Singleton;
	}
	constructor() {}
	Init() {
		const e = Tc("read_inventory_token", "application_config");
		w_1(
			e,
			"CQuestCommunityInventoryStore: missing read_inventory:steam oauth permission",
		);
		this.m_SteamInterface = new Ie.D(T.TS.WEBAPI_BASE_URL, e);
	}
}
function Ne(e) {
	const [t, setT] = useState(De.Get().GetInventoryForApp(e));
	useEffect(() => {
		if (e && !De.Get().BHasLoadedDef(e)) {
			De.Get().LoadCommunityInventory(e);
		}
	}, [e]);
	hL(De.Get().GetItemDefsChangeForAppID(e), setT);
	return t;
}
Cg([ke.oI], De.prototype, "SetTestAppCommunityItems", null);
class Pe {
	m_mapAppToDefs = new Map();
	m_mapPromises = new Map();
	m_listChangeCallback = new Map();
	GetItemDefForAppID(e) {
		return this.m_mapAppToDefs.get(e);
	}
	GetItemDefsChangeForEventID(e) {
		if (!this.m_listChangeCallback.has(e)) {
			this.m_listChangeCallback.set(e, new Re.lu());
		}
		return this.m_listChangeCallback.get(e);
	}
	BHasLoadedDef(e) {
		return this.m_mapPromises.has(e);
	}
	SetTestItemDefs(e, t) {
		this.m_mapAppToDefs.set(e, t);
		this.GetItemDefsChangeForEventID(e).Dispatch(t);
		this.m_mapPromises.set(e, Promise.resolve(1));
	}
	async LoadAppCommunityItems(e, t) {
		if (e) {
			if (!this.m_mapPromises.has(e)) {
				this.m_mapPromises.set(e, this.InternalLoadAppCommunityItems(e, t));
			}
			return this.m_mapPromises.get(e);
		} else {
			return 2;
		}
	}
	async InternalLoadAppCommunityItems(e, t) {
		let r = null;
		try {
			const n =
				T.TS.COMMUNITY_BASE_URL +
				(t
					? "minigame/ajaxgetgameitemdefsforeditor"
					: "minigame/ajaxgetgameitemdefs");
			const i = {
				appid: e,
				origin: self.origin,
				l: T.TS.LANGUAGE,
				sessionid: t ? T.TS.SESSIONID : undefined,
			};
			const a = await x.get(n, {
				params: i,
				withCredentials: t,
			});
			if (
				a?.status == 200 &&
				a?.data?.success == 1 &&
				a?.data?.item_definitions
			) {
				this.m_mapAppToDefs.set(e, a.data.item_definitions);
				this.GetItemDefsChangeForEventID(e).Dispatch(a.data.item_definitions);
				return 1;
			}
			r = H_1(a);
		} catch (e) {
			r = H_1(e);
		}
		console.error(
			`CSaleMiniGameItemDefStore.InternalLoadAppCommunityItems failed: on appid ${e} edit? ${t} error: ${r?.strErrorMsg}`,
			r,
		);
		return 2;
	}
	static s_Singleton;
	static Get() {
		if (!Pe.s_Singleton) {
			Pe.s_Singleton = new Pe();
			Pe.s_Singleton.Init();
			if (T.TS.WEB_UNIVERSE == "dev") {
				window.g_SaleMiniGameItemDefStore = Pe.s_Singleton;
			}
		}
		return Pe.s_Singleton;
	}
	constructor() {}
	Init() {}
}
function Le(e, t, r) {
	const n = ((e, t) => {
		const [r, setR] = useState(Pe.Get().GetItemDefForAppID(e));
		useEffect(() => {
			if (e && !Pe.Get().BHasLoadedDef(e)) {
				Pe.Get().LoadAppCommunityItems(e, t);
			}
		}, [e, t]);
		hL(Pe.Get().GetItemDefsChangeForEventID(e), setR);
		return r;
	})(e, r);
	const [i, setI] = useState(null);
	useEffect(() => {
		if (e && n && i == null) {
			const i = n.find(
				(n) => (r || n.active) && n.appid == e && n.item_type == t,
			);
			if (i) {
				setI(i);
			}
		}
	}, [i, n, e, t, r]);
	return i;
}
function Xe_1(e) {
	const {
		appid,
		item_image_small,
		item_image_large,
		item_movie_mp4,
		item_movie_webm,
		item_title,
	} = e;
	if (item_movie_mp4?.length > 0 && item_movie_webm?.length > 0) {
		const n = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${appid}/${item_image_small}`;
		const o = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${appid}/${item_movie_webm}`;
		const l = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${appid}/${item_movie_mp4}`;
		return (
			<>
				<video
					muted
					controls={false}
					autoPlay
					loop
					poster={n}
					className={e.videoClassName}
				>
					<source src={o} type="video/webm" />
					{Boolean(!T.TS.IN_CLIENT) && <source src={l} type="video/mp4" />}
				</video>
			</>
		);
	}
	{
		const i = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${appid}/${
			item_image_small || item_image_large
		}`;
		return <img className={e.className} src={i} alt={item_title} />;
	}
}
function Ue(e) {
	const { appid, community_item_type, bForEdit } = e;
	const i = Le(appid, community_item_type, bForEdit);
	const a =
		i && !i.active ? (
			<div className={ze.WarningStylesBackground}>
				{Localize("#Sale_Section_RewardShelf_ItemInActiveWarning")}
			</div>
		) : undefined;
	if (i) {
		return (
			<>
				<Xe_1 {...i} />
				{a}
			</>
		);
	} else {
		return <G.t size="small" string={Localize("#Loading")} />;
	}
}
function We(e) {
	const t = Oz();
	const { bLoading } = t;
	const { className, bPreviewMode, rewardType } = e;
	return (
		<S.$n
			className={A_1("CSSClaimItemButton", className)}
			onClick={(e) => {
				if (t.bCanClaimNewItem) {
					pg(<He rewardType={rewardType} />, GetOwningWindowForEvent(e));
				} else if (
					T.TS.WEB_UNIVERSE == "dev" ||
					T.TS.WEB_UNIVERSE == "beta" ||
					T.TS.WEB_UNIVERSE == "beta" ||
					bPreviewMode
				) {
					pg(<He rewardType={rewardType} />, GetOwningWindowForEvent(e));
					console.log(
						"Show dialog for debugging, since already claimed: ",
						HO(t),
					);
				}
			}}
			disabled={bLoading}
		>
			{Boolean(bLoading) ? (
				<G.t string={Localize("#Loading")} size="small" />
			) : (
				<Ve claimState={t} />
			)}
		</S.$n>
	);
}
function Ve(e) {
	const { claimState, strButtonOverride, rewardType } = e;
	if (claimState.bAlreadyClaimedCurrentItem) {
		return (
			<div className={A_1(Oe.CheckMark, "CSSClaimedState")}>
				<Z.Jlk />
				<span>
					{" "}
					{strButtonOverride?.length > 0
						? strButtonOverride
						: Localize("#Sale_ClaimableReward_AlreadyClaimed")}
				</span>
			</div>
		);
	}
	let i = Localize("#Sale_ClaimableReward_generic");
	switch (claimState?.community_item_class || rewardType) {
		case 11: {
			i = Localize("#Sale_ClaimableReward_sticker");
			break;
		}
		case 8: {
			i = Localize("#Sale_ClaimableReward_profilemodifier");
			break;
		}
		case 15: {
			i = Localize("#Sale_ClaimableReward_animatedavatar");
		}
	}
	return <span className="CSSUnclaimedState">{i}</span>;
}
function He(e) {
	const { closeModal, rewardType } = e;
	const { fnClaimItem } = CC();
	const i = vs();
	const [a, setA] = s.useState(null);
	s.useEffect(() => {
		if (!i.bLoading) {
			i.fnSetLoading(true);
			fnClaimItem()
				.then((e) => {
					setA(e);
					console.log("claim response", HO(e));
					if (e.appid) {
						let t = Localize("#Sale_ClaimableReward_completed_generic");
						const n = a?.community_item_class || rewardType;
						switch (n) {
							case 11: {
								t = Localize("#Sale_ClaimableReward_completed_sticker");
								break;
							}
							case 8: {
								t = Localize("#Sale_ClaimableReward_completed_profilemodifier");
								break;
							}
							case 15: {
								t = Localize("#Sale_ClaimableReward_completed_animatedavatar");
							}
						}
						i.fnSetStrSuccess("   ");
						i.fnSetElSuccess(
							<div className={Oe.DialogCtn}>
								<span>{t}</span>
								<Je_1
									appid={e.appid}
									community_item_type={e.community_item_type}
									rewardType={n}
								/>
							</div>,
						);
					} else {
						i.fnSetStrError(Localize("#Sale_ClaimableReward_Busy"));
					}
				})
				.catch((e) => i.fnSetStrError(Localize("#Sale_ClaimableReward_Busy")));
		}
	}, [a?.community_item_class, i, fnClaimItem, rewardType]);
	let l = Localize("#Sale_ClaimableReward_generic");
	switch (a?.community_item_class || rewardType) {
		case 11: {
			l = Localize("#Sale_ClaimableReward_sticker");
			break;
		}
		case 8: {
			l = Localize("#Sale_ClaimableReward_profilemodifier");
			break;
		}
		case 15: {
			l = Localize("#Sale_ClaimableReward_animatedavatar");
		}
	}
	return <Ge.Hh state={i} strDialogTitle={l} closeModal={closeModal} />;
}
function Je_1(e) {
	const { appid, community_item_type, rewardType } = e;
	if (appid && community_item_type) {
		return (
			<>
				<Ue appid={appid} community_item_type={community_item_type} />
				{Boolean(rewardType == 8) && (
					<Qe_1 appid={appid} community_item_type={community_item_type} />
				)}
			</>
		);
	} else {
		return null;
	}
}
function Qe_1(e) {
	const { appid, community_item_type } = e;
	const n = Ne(appid);
	const [i, setI] = s.useState(false);
	if (!n) {
		return null;
	}
	const o = n.find((e) => e.item_type == community_item_type);
	if (o) {
		return (
			<div className={Oe.EquipCtn}>
				{Boolean(i) ? (
					<div>
						{Localize("#Sale_ClaimableReward_profilemodifier_apply_success")}
					</div>
				) : (
					<S.$n
						onClick={(e) => {
							ns(o).then((e) => {
								if (e == 1) {
									setI(true);
								}
							});
						}}
					>
						{Localize("#Sale_ClaimableReward_profilemodifier_apply")}
					</S.$n>
				)}
				<Q.Ii href={`${T.TS.COMMUNITY_BASE_URL}profiles/${T.iA.steamid}`}>
					{Localize("#Sale_ClaimableReward_profilemodifier_view")}
				</Q.Ii>
			</div>
		);
	} else {
		return (
			<div>
				<Q.Ii
					href={`${T.TS.COMMUNITY_BASE_URL}profiles/${T.iA.steamid}/edit/goldenprofile`}
				>
					{Localize("#Sale_ClaimableReward_profilemodifier_choose")}
				</Q.Ii>
				<Q.Ii href={`${T.TS.COMMUNITY_BASE_URL}profiles/${T.iA.steamid}`}>
					{Localize("#Sale_ClaimableReward_profilemodifier_view")}
				</Q.Ii>
			</div>
		);
	}
}
let Qe = null;
function Ze() {
	if (Qe == null) {
		Qe = new Map([
			[
				"url",
				{
					Constructor: R,
					autocloses: false,
				},
			],
			[
				"h1",
				{
					Constructor: o.Tu(o.Zb, B.Header1),
					autocloses: false,
					skipFollowingNewline: true,
				},
			],
			[
				"h2",
				{
					Constructor: o.Tu(o.Sz, B.Header2),
					autocloses: false,
					skipFollowingNewline: true,
				},
			],
			[
				"h3",
				{
					Constructor: o.Tu(o.ZS, B.Header3),
					autocloses: false,
					skipFollowingNewline: true,
				},
			],
			[
				"quote",
				{
					Constructor: o.Tu(o.Pk, B.BlockQuote),
					autocloses: false,
				},
			],
			[
				"list",
				{
					Constructor: o.Tu(o.B8, B.UnorderedList),
					autocloses: false,
					skipInternalNewline: true,
				},
			],
			[
				"olist",
				{
					Constructor: o.Tu(o._J, B.OrderedList),
					autocloses: false,
					skipInternalNewline: true,
				},
			],
			[
				"*",
				{
					Constructor: o.ck,
					autocloses: true,
					skipInternalNewline: true,
				},
			],
			[
				"img",
				{
					Constructor: Ye,
					autocloses: false,
				},
			],
			[
				"previewyoutube",
				{
					Constructor: y.gH,
					autocloses: false,
				},
			],
			[
				"looping_media",
				{
					Constructor: o.$A,
					autocloses: false,
				},
			],
			[
				"video",
				{
					Constructor: o.UT,
					autocloses: false,
				},
			],
			[
				"youtubeorvideo",
				{
					Constructor: y.Eo,
					autocloses: false,
				},
			],
			[
				"trailer",
				{
					Constructor: Xe,
					autocloses: true,
				},
			],
			[
				"vod",
				{
					Constructor: Je,
					autocloses: false,
				},
			],
			[
				"speaker",
				{
					Constructor: $e,
					autocloses: false,
					skipInternalNewline: true,
					allowWrapTextForCopying: true,
				},
			],
			[
				"giveawayeligible",
				{
					Constructor: tt,
					autocloses: false,
				},
			],
			[
				"claimitem",
				{
					Constructor: rt,
					autocloses: true,
				},
			],
			[
				"packagepurchaseable",
				{
					Constructor: nt,
					autocloses: false,
				},
			],
			[
				"actiondialog",
				{
					Constructor: at,
					autocloses: false,
				},
			],
			[
				"uploadfilebutton",
				{
					Constructor: ot,
					autocloses: true,
				},
			],
			[
				"docimg",
				{
					Constructor: Ke,
					autocloses: false,
				},
			],
			[
				"carousel",
				{
					Constructor: Se,
					autocloses: false,
				},
			],
			[
				"meetsteamsessiongroup",
				{
					Constructor: w.ac,
					autocloses: false,
				},
			],
		]);
	}
	return Qe;
}
function Ye(e) {
	const { showErrorInfo, event } = e.context;
	let n = j$(e.args, "src") || e.children?.toString();
	if (!n && ((n = j$(e.args)), !n == null)) {
		return null;
	}
	const i = o._D(n, e.language, event?.rtime32_last_modified);
	if (typeof i == "string") {
		let e;
		n = i;
		e = (!event || !event.BHasTag("auto_rssfeed")) && !ZF(n);
		if (!showErrorInfo) {
			n = L$(n);
		}
		if (showErrorInfo) {
			return <H.i src={n} crossOrigin={e ? "anonymous" : undefined} />;
		} else {
			return <ne.o src={n} crossOrigin={e ? "anonymous" : undefined} />;
		}
	}
	return <j.c rgSources={i} />;
}
function Ke(e) {
	const t = j$(e.args);
	if (t == null || t == null || t == null || t.length == 0) {
		return "";
	}
	const r = e && e.children && e.children.toString();
	const n = new Array();
	n.push(
		`${T.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${T.TS.LANGUAGE}/${t}`,
	);
	if (T.TS.LANGUAGE != "english") {
		n.push(
			`${T.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`,
		);
	}
	return <j.c rgSources={n} alt={r} />;
}
function Xe(e) {
	const t = et(
		e.args,
		"appid",
		e.context.event.appid ? e.context.event.appid : 0,
	);
	const r = et(e.args, "trailerid", 0);
	return (
		<O appid={t} trailerBaseID={r} bIsPreviewMode={e.context.showErrorInfo} />
	);
}
function Je(e) {
	const t = et(e.args, "appid", 0);
	return <V appid={t} bPreviewMode={e.context.showErrorInfo} />;
}
function $e(e) {
	const t = j$(e.args, "name");
	const r = j$(e.args, "title");
	const n = j$(e.args, "company");
	const i = j$(e.args, "photo");
	if (e.context.bShowShortSpeakerInfo) {
		return <k.S8 name={t} title={r} company={n} photo={i} bio={e.children} />;
	} else {
		return <k.$k name={t} title={r} company={n} photo={i} bio={e.children} />;
	}
}
function et(e, t, r) {
	const n = j$(e, t);
	if (n === undefined || n == null) {
		return r;
	} else {
		return Number.parseInt(n);
	}
}
function tt(e) {
	const t = j$(e.args, "name");
	const r = (j$(e.args, "visible") || "false").toLowerCase() === "true";
	const n = h_1(t);
	if (!t) {
		if (e.context.showErrorInfo) {
			return <div>Failed to provide giveaway name</div>;
		} else {
			return null;
		}
	}
	if (n && n.registered && ((n.eligible && r) || (!n.eligible && !r))) {
		return e.children;
	} else {
		return null;
	}
}
function rt(e) {
	const t = e.context.showErrorInfo;
	if (!T.iA.logged_in) {
		return (
			<S.$n onClick={we.vg} className="CSSClaimItemLoginButton">
				{Localize("#Sale_ClaimableReward_Login")}
			</S.$n>
		);
	}
	const r = j$(e.args, "type");
	let n;
	if (r) {
		switch (r) {
			case "profilemodifier": {
				n = 8;
				break;
			}
			case "sticker": {
				n = 11;
			}
		}
	}
	return <We bPreviewMode={t} rewardType={n} />;
}
function nt(e) {
	const t = Number.parseInt(j$(e.args, "id")) || 0;
	const r = (j$(e.args, "visible") || "false").toLowerCase() === "true";
	const n = e.context.showErrorInfo;
	const [i, a] = Gg(t, {});
	if (!t || a == 1) {
		if (!t && n) {
			return <div>Error: PackageID Not Set</div>;
		} else {
			return null;
		}
	}
	let l = false;
	l = _f.A.Get().BHasStoreItem(t, 1)
		? Boolean(i.GetBestPurchaseOption())
		: !_f.A.Get().BIsPackageUnavailableDueToCountryRestriction(t);
	if ((!l && !r) || (l && r)) {
		return e.children;
	} else {
		return null;
	}
}
function it(e) {
	if (e === "GameAwardDrop2022") {
		const t = h_1(e);
		const r = Q_1();
		if (t) {
			if (t.registered) {
				return {
					bInitialState: false,
					bSuccessState: t.eligible,
					bFailedState: !t.eligible,
					fnAction:
						t.eligible ||
						(async () => {
							await r.fnCreateRegistration(e);
						}),
				};
			} else {
				return {
					bInitialState: true,
					fnAction: async () => {
						await r.fnCreateRegistration(e);
					},
				};
			}
		} else {
			return {
				bInitialState: true,
			};
		}
	}
	return {
		bInitialState: true,
	};
}
function at(e) {
	const t = j$(e.args, "action");
	const r = j$(e.args, "initialToken");
	const n = j$(e.args, "successToken");
	const i = j$(e.args, "failToken");
	const a = it(t);
	if (!t || !r || !r || !n || !r || !n || !i) {
		if (e.context.showErrorInfo) {
			return <div>Failed to provide all tokens. Dialog will not appear</div>;
		} else {
			return null;
		}
	}
	if (T.iA.logged_in || t == "test" || t == "test" || t == "nologinrequired") {
		return (
			<S.$n
				className="CSSActionDialogButton"
				onClick={(a) => {
					pg(
						<St_1
							strAction={t}
							strInitialToken={r}
							strSuccessToken={n}
							strFailToken={i}
						>
							{e.children}
						</St_1>,
						GetOwningWindowForEvent(a),
					);
				}}
			>
				{Boolean(a.bInitialState) && Localize(r)}
				{Boolean(a.bSuccessState) && Localize(n)}
				{Boolean(a.bFailedState) && Localize(i)}
			</S.$n>
		);
	} else {
		return (
			<S.$n className="CSSActionDialogButton" onClick={we.vg}>
				{Localize("#Login_SignIn")}
			</S.$n>
		);
	}
}
function St_1(e) {
	const {
		strAction,
		children,
		closeModal,
		strInitialToken,
		strSuccessToken,
		strFailToken,
	} = e;
	const l = it(strAction);
	const [c, setC] = s.useState(Boolean(l.fnAction));
	s.useEffect(() => {
		if (l.fnAction) {
			setC(true);
			l.fnAction().finally(() => setC(false));
		}
	}, [l]);
	return (
		<ie.eV
			bDisableBackgroundDismiss
			closeModal={closeModal}
			onCancel={closeModal}
			className="CSSActionDialogDialog"
		>
			<S.Y9>
				{Boolean(l.bInitialState) && Localize(strInitialToken)}
				{Boolean(l.bSuccessState) && Localize(strSuccessToken)}
				{Boolean(l.bFailedState) && Localize(strFailToken)}
			</S.Y9>
			<S.nB>
				<S.a3>
					{c ? (
						<G.t
							size="medium"
							position="center"
							string={Localize("#Loading")}
						/>
					) : (
						children
					)}
				</S.a3>
			</S.nB>
		</ie.eV>
	);
}
function ot(e) {
	const { showErrorInfo, event } = e.context;
	const n = event.clanSteamID.GetAccountID();
	const [i] = s.useState(
		new C.i6(
			((e) => {
				const t = {
					PopulateBeginFileUploadFormData: (t) => {
						t.append("clan_account_id", `${e}`);
					},
					PopulateCommitFileUploadFormData: (t) => {
						t.append("clan_account_id", `${e}`);
					},
					GetBeginFileUploadURL: () =>
						`${T.TS.STORE_BASE_URL}saleaction/ajaxbeginfileupload`,
					GetCommitFileUploadURL: () =>
						`${T.TS.STORE_BASE_URL}saleaction/ajaxcommitfileupload`,
					LogFileUploadMessage: (e) => {
						console.log("UploadFileButton: ", e);
					},
					GetMaxFileSizeMB: () => 100,
				};
				return t;
			})(n),
		),
	);
	if (
		n == h.GU ||
		n == h.bv ||
		(T.TS.EUNIVERSE == 2 && n == h.mW) ||
		(T.TS.EUNIVERSE == 1 && n == h.Kd)
	) {
		return (
			<div>
				<K fileUploadManager={i} />
				<$ fileUploadManager={i} />
			</div>
		);
	} else if (showErrorInfo) {
		return <div>{Localize("#CloudUpload_NotSupport")}</div>;
	} else {
		return null;
	}
}
const dt = ut;
const gt = (e) => /^\d+$/.test(e);
function Ht_1(e) {
	const { sharedFileID } = e;
	const r = m_1("SharedFileSnippet");
	const [n, setN] = useState(false);
	const [a, setA] = useState(() => ({
		sharedfileid: sharedFileID,
		title: Localize("#Loading"),
		description: "",
		type: "",
		previewurl: "",
		appid: 0,
		url: `${T.TS.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${sharedFileID}`,
	}));
	useEffect(() => {
		(async () => {
			try {
				const e = await At.R.LoadSharedFileDynamicData([t], r);
				if (!r.token.reason && e.length > 0) {
					const [t] = e;
					if (gt(t.url)) {
						t.url = `${T.TS.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${t.url}`;
					}
					setA(t);
					console.log(e[0]);
					setN(true);
				}
			} catch (e) {
				const t = H_1(e);
				console.error(`SharedFileSnippet: ${t.strErrorMsg}`, t);
			}
		})();
	}, [r, sharedFileID]);
	let l = a.personnaname !== undefined && a.personnaname.length > 0;
	return (
		<a
			href={a.url}
			className={dt.DynamicLinkBox}
			data-modal-content-sizetofit={!!a.bSizeToFit}
			data-appid={a.appid}
			data-publishedfileid={sharedFileID}
		>
			<img className={dt.DynamicLink_Preview} src={a.previewurl} />
			<div className={dt.DynamicLink_Content}>
				<div className={dt.DynamicLink_Name}>{a.title}</div>
				<div>
					<span className={dt.DynamicLink_Type}>{a.type}</span>
				</div>
				{l && (
					<div className={dt.DynamicLink_Author}>
						{LocalizeReact(
							"#EventEditor_Author",
							<span className={dt.DynamicLink_AuthorName}>
								{a.personnaname}
							</span>,
						)}
					</div>
				)}
				<div className={dt.DynamicLink_Description}>{a.description}</div>
			</div>
		</a>
	);
}
let Wt_1 = class extends s.Component {
	state = {
		bLoading: this.props.announcementGID
			? !yt.O3.BHasClanAnnouncementGID(this.props.announcementGID)
			: !yt.O3.BHasClanAnnouncementGID(this.props.eventGID),
		bFailedLoad: false,
	};
	m_cancelSignal = x.CancelToken.source();
	componentDidMount() {
		this.HandleLoadEventInfo();
	}
	async HandleLoadEventInfo() {
		const { appid, strVanity, announcementGID, eventGID, strGroupVanity } =
			this.props;
		let a = this.props.clanSteamID;
		try {
			if (this.state.bLoading) {
				if (strVanity !== undefined) {
					a = (await bt.ac.LoadOGGClanInfoForIdentifier(strVanity)).clanSteamID;
				} else if (strGroupVanity !== undefined) {
					a = (await bt.ac.LoadOGGClanInfoForGroupVanity(strGroupVanity))
						.clanSteamID;
				}
				const s = yt.O3.LoadPartnerEventGeneric(
					a,
					appid,
					eventGID,
					announcementGID,
					0,
				);
				let o = await s;
				await Promise.all([
					_f.A.Get().QueueAppRequest(o.appid, {
						include_assets: true,
						include_basic_info: true,
						include_release: true,
					}),
				]);
				this.setState({
					bFailedLoad: false,
					bLoading: false,
				});
			}
		} catch (e) {
			this.HandleError(e);
		}
	}
	HandleError(e) {
		let t = H_1(e);
		const { eventGID, announcementGID, strGroupVanity, strVanity } = this.props;
		console.error(
			`EventSnippet hit error on announceGID ${announcementGID} eventGID ${eventGID} strVanity ${strVanity} strGroupVanity ${strGroupVanity} error: ${t.strErrorMsg}`,
		);
		this.setState({
			bFailedLoad: true,
		});
	}
	componentWillUnmount() {
		this.m_cancelSignal.cancel("component unmounted");
	}
	render() {
		const {
			appid,
			announcementGID,
			eventGID,
			strURL,
			fnFilterImageURLsForKnownFailures,
			fnImageFailureCallback,
		} = this.props;
		if (this.state.bFailedLoad) {
			return Pm(strURL);
		}
		if (this.state.bLoading) {
			return <G.t />;
		}
		let o =
			announcementGID !== undefined
				? yt.O3.GetClanEventFromAnnouncementGID(announcementGID)
				: yt.O3.GetClanEventModel(eventGID);
		if (o == null) {
			return Pm(strURL);
		}
		let l = sf(T.TS.LANGUAGE);
		let c = o.GetImageForSizeAsArrayWithFallback(
			"capsule",
			l,
			ft.wI.capsule_main,
		);
		if (fnFilterImageURLsForKnownFailures) {
			c = fnFilterImageURLsForKnownFailures(c);
		}
		let m = o.GetNameWithFallback(l);
		let d = o.GetSubTitleWithSummaryFallback(l);
		let A = _f.A.Get().GetApp(appid)?.GetName();
		let p = LocalizeDateHumanReadable(o.GetStartTimeAndDateUnixSeconds());
		return (
			<St.tj
				eventModel={o}
				route={St.PH.k_eView}
				className={dt.DynamicLinkBox}
				data-modal-content-sizetofit
				data-appid={appid}
			>
				<j.c
					className={dt.DynamicLink_Preview}
					rgSources={c}
					onIncrementalError={(e, t, r) =>
						fnImageFailureCallback && fnImageFailureCallback(t)
					}
				/>
				<div className={dt.DynamicLink_Content}>
					<div className={dt.DynamicLink_Author}>
						{Localize(
							o.type == 28
								? "#EventDisplay_Share_Announcement"
								: "#EventDisplay_Share_Event",
							A,
						)}
						<span className={dt.DynamicLink_Date}>{p}</span>
					</div>
					<div className={dt.DynamicLink_Name}>
						<div className={dt.DynamicLink_Type}>{m}</div>
					</div>
					<div className={dt.DynamicLink_Description}>{d}</div>
				</div>
			</St.tj>
		);
	}
};
Wt_1 = Cg([Ct.PA], Wt_1);
const vt = Bt;
let It = class extends s.Component {
	state = {
		bSummaryMode: true,
		bLoadedMetaData: false,
	};
	async componentDidMount() {
		let e = `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${this.props.modelID}`;
		try {
			let t = await x.get(e);
			this.setState({
				bLoadedMetaData: true,
				data: t.data,
			});
		} catch (e) {
			this.setState({
				bError: true,
			});
			console.error(`SketchFabEmbed failed to load: ${H_1(e).strErrorMsg}`);
		}
	}
	OnSketchFabClick() {
		if (this.state.bLoadedMetaData) {
			this.setState({
				bSummaryMode: false,
			});
		}
	}
	render() {
		const { modelID } = this.props;
		if (this.state.bError) {
			return (
				<div className={vt.dynamiclink_box} onClick={this.OnSketchFabClick}>
					<span>{modelID}</span>
					<span>{Localize("#EventDisplay_SketchFab_Error_Network")}</span>
				</div>
			);
		} else if (this.state.bSummaryMode) {
			return (
				<div className={vt.dynamiclink_box} onClick={this.OnSketchFabClick}>
					{Boolean(this.state.bLoadedMetaData) ? (
						<>
							<img
								className={vt.dynamiclink_preview}
								src={this.state.data.thumbnail_url}
							/>
							<img className={vt.sketchfab_play_overlay_image} />
							<div className={vt.dynamiclink_content}>
								<div className={vt.dynamiclink_name}>
									<span className={vt.dynamiclink_type}>
										{Localize("#EventDisplay_Sketchfab")}
									</span>
									<div>
										{this.state.data.title}
										{"\xA0"}
									</div>
								</div>
								<div className={vt.dynamiclink_author}>
									{this.state.data.author_name}
								</div>
							</div>
						</>
					) : (
						<G.t size="medium" />
					)}
				</div>
			);
		} else {
			return (
				<div className={vt.sketchfabmodelembedded}>
					<iframe
						className={vt.sketchfabmodelembedded}
						src={`https://sketchfab.com/models/${this.props.modelID}/embed?autostart=1`}
						frameBorder={0}
						allowFullScreen
					/>
				</div>
			);
		}
	}
};
Cg([ke.oI], It.prototype, "OnSketchFabClick", null);
It = Cg([Ct.PA], It);
class Mt {
	m_mapDefIDtoDefinition = new Map();
	m_mapDefIDToPromise = new Map();
	m_defChangeCallback = new Map();
	m_mapCategoryAndClassToItems = new Map();
	m_mapCategoryAndClassToPromise = new Map();
	m_defCategoryAndClassToChangeCallback = new Map();
	m_SteamInterface = null;
	GetItem(e) {
		return this.m_mapDefIDtoDefinition.get(e);
	}
	GetItemChangeCallback(e) {
		if (!this.m_defChangeCallback.has(e)) {
			this.m_defChangeCallback.set(e, new Re.lu());
		}
		return this.m_defChangeCallback.get(e);
	}
	GetKeyCategoryAndClass(e, t) {
		return `${e}_${t}`;
	}
	GetItemsByCategoryAndClass(e, t) {
		const r = this.GetKeyCategoryAndClass(e, t);
		return this.m_mapCategoryAndClassToItems.get(r);
	}
	GetItemsByCategoryAndClassCallback(e, t) {
		const r = this.GetKeyCategoryAndClass(e, t);
		if (!this.m_defCategoryAndClassToChangeCallback.has(r)) {
			this.m_defCategoryAndClassToChangeCallback.set(r, new Re.lu());
		}
		return this.m_defCategoryAndClassToChangeCallback.get(r);
	}
	async LoadRewardDefinition(e) {
		if (!this.m_mapDefIDToPromise.has(e)) {
			this.m_mapDefIDToPromise.set(e, this.InternalLoadRewardDefinition(e));
		}
		return this.m_mapDefIDToPromise.get(e);
	}
	async InternalLoadRewardDefinition(e) {
		if (this.m_mapDefIDtoDefinition.has(e)) {
			return this.m_mapDefIDtoDefinition.get(e);
		}
		const t = ve.w.Init(Et.GB);
		t.Body().set_definitionids([e]);
		let r = null;
		try {
			const n = await Et.a9.QueryRewardItems(
				this.m_SteamInterface.GetServiceTransport(),
				t,
			);
			if (n.GetEResult() == 1 && n.Body().definitions()?.length > 0) {
				w_1(
					n.Body().definitions()?.length == 1,
					`Requested definition ID ${e} and receive # ${
						n.Body().definitions()?.length
					}, expecting exactly one.`,
				);
				const t = n.Body().definitions()[0].toObject();
				this.m_mapDefIDtoDefinition.set(e, t);
				this.GetItemChangeCallback(e).Dispatch(t);
				return t;
			}
			r = H_1(n);
		} catch (e) {
			r = H_1(e);
		}
		console.error(
			`CLoyaltyRewardDefinitionStore.LoadRewardDefinition failed: ${r?.strErrorMsg}`,
			r,
		);
		return null;
	}
	async LoadRewardDefinitionByCategoryAndClass(e, t) {
		const r = this.GetKeyCategoryAndClass(e, t);
		if (!this.m_mapCategoryAndClassToPromise.has(r)) {
			this.m_mapCategoryAndClassToPromise.set(
				r,
				this.InternalLoadRewardDefinitionByCategoryAndClass(e, t),
			);
		}
		return this.m_mapCategoryAndClassToPromise.get(r);
	}
	async InternalLoadRewardDefinitionByCategoryAndClass(e, t) {
		const r = this.GetKeyCategoryAndClass(e, t);
		if (this.m_mapCategoryAndClassToItems.has(r)) {
			return this.m_mapCategoryAndClassToItems.get(r);
		}
		const n = ve.w.Init(Et.GB);
		n.Body().set_community_item_classes([t]);
		n.Body().set_filter_match_any_category_tags([e]);
		let i = null;
		try {
			const a = await Et.a9.QueryRewardItems(
				this.m_SteamInterface.GetServiceTransport(),
				n,
			);
			if (a.GetEResult() == 1 && a.Body().definitions()?.length > 0) {
				const n = a
					.Body()
					.definitions()
					.map((e) => e.toObject());
				n.forEach((e) => {
					if (!this.m_mapDefIDtoDefinition.has(e.defid)) {
						this.m_mapDefIDtoDefinition.set(e.defid, e);
						this.GetItemChangeCallback(e.defid).Dispatch(e);
					}
				});
				this.m_mapCategoryAndClassToItems.set(r, n);
				this.GetItemsByCategoryAndClassCallback(e, t).Dispatch(n);
				if (T.TS.WEB_UNIVERSE == "dev" || T.TS.WEB_UNIVERSE == "beta") {
					console.log(
						`CLoyaltyRewardDefinitionStore.LoadRewardDefinitionByCategoryAndClass loaded ${n.length}`,
					);
				}
				return n;
			}
			i = H_1(a);
		} catch (e) {
			i = H_1(e);
		}
		console.error(
			`CLoyaltyRewardDefinitionStore.LoadRewardDefinitionByCategoryAndClass failed: ${i?.strErrorMsg}`,
			i,
		);
		return null;
	}
	static s_Singleton;
	static Get() {
		if (!Mt.s_Singleton) {
			Mt.s_Singleton = new Mt();
			Mt.s_Singleton.Init();
			if (T.TS.WEB_UNIVERSE == "dev") {
				window.g_LoyaltyRewardDefinitionStore = Mt.s_Singleton;
			}
		}
		return Mt.s_Singleton;
	}
	constructor() {}
	Init() {
		this.m_SteamInterface = new Ie.D(T.TS.WEBAPI_BASE_URL);
	}
}
const kt = Rt;
function Dt(e) {
	const { defid, url } = e;
	const n = ((e) => {
		const [t, setT] = useState(Mt.Get().GetItem(e));
		useEffect(() => {
			if (!t) {
				Mt.Get().LoadRewardDefinition(e);
			}
		}, [e, t]);
		hL(Mt.Get().GetItemChangeCallback(e), setT);
		return t;
	})(defid);
	if (!n || !n.community_item_data) {
		return null;
	}
	const n_appid = n.appid;
	const a = n.community_item_data.item_image_large;
	const o = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${n_appid}/${a}`;
	if (T.TS.WEB_UNIVERSE == "dev") {
		console.log("reward itemdef", HO(n));
	}
	return (
		<div className={kt.Ctn}>
			<Tt.he toolTipContent={n.community_item_data.item_description}>
				<img src={o} alt={n.community_item_data.item_title} />
			</Tt.he>
		</div>
	);
}
function Ot(e) {
	const { inputType, id } = e;
	const [n] = G6(id, SW(inputType), {});
	let i =
		inputType == "bundle" ? "bundle" : inputType == "sub" ? "sub" : "game";
	return (
		<div className={A_1(Ft.AppSummaryWidgetCtn, "AppSummaryWidgetCtn")}>
			<Nt.pb
				id={id}
				type={i}
				bShowDemoButton={n?.GetAppType() == 1}
				bAllowTwoLinesForHeader
			/>
		</div>
	);
}
const Pt =
	/(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|store\.steamchina\.com)\/(app|bundle|sub)\/(\d+)/i;
const Lt =
	/(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
const zt =
	/(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i;
const xt =
	/(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i;
const Ut = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i;
const Wt = /sketchfab.com\/(?:models\/(?:[^\/\s]+-)?)([a-z0-9]{32})/i;
const Vt = /twitter\.com\/(\w+)(\/?)$/i;
const Ht = /twitter\.com\/hashtag\/(\w+)(\/?)$/i;
const jt = /twitch\.tv\/(\w+)(\/?)$/i;
const qt =
	/(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
const Qt =
	/(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
let Zt = null;
function Yt(e, t) {
	if (Y2()) {
		return null;
	}
	const r = XU(e);
	if (r?.strVideoID !== undefined) {
		return (
			<mt.A
				videoID={r.strVideoID}
				nStartSeconds={r.nStartSeconds}
				classNameAlign=""
				classNameSize={dt.sizeFull}
				bShowVideoImmediately={false}
			/>
		);
	} else {
		return Pm(e, t?.event);
	}
}
function Kt(e, t) {
	if (Y2()) {
		return null;
	}
	const r = new RegExp(Ut).exec(e);
	if (r && r.length > 1) {
		const [, e] = r;
		if (e?.length > 0) {
			let r = `https://medal.tv/clip/${e}/?autoplay=0&donate=0${
				t && t.event ? `&steamappid=${t.event.appid}` : ""
			}`;
			return (
				<iframe
					className={B.MedalTVWidget}
					src={r}
					frameBorder={0}
					allow="autoplay"
				/>
			);
		}
	}
	return Pm(e, t?.event);
}
function Xt(e, t) {
	let r = new RegExp(Wt).exec(e);
	if (r && r.length > 1) {
		let [, e] = r;
		if (e && e.length > 1) {
			return <It modelID={e} />;
		}
	}
	return Pm(e, t?.event);
}
function Jt(e, t) {
	const r = e.split("?");
	let n;
	if (r.length == 2) {
		const e = new URLSearchParams(r[1]);
		if (e.has("id")) {
			n = e.get("id");
		}
	}
	if (n !== undefined) {
		return <Ht_1 sharedFileID={n} />;
	} else {
		return Pm(e, t?.event);
	}
}
function $t(e) {
	let t = wm(e).toLocaleLowerCase();
	let r = wm(T.TS.STORE_BASE_URL);
	let n = wm(T.TS.COMMUNITY_BASE_URL);
	const i =
		T.TS.WEB_UNIVERSE === "dev" ||
		wm(T.TS.STORE_BASE_URL).endsWith(".steam.dev");
	return (
		t == r ||
		t == n ||
		(i &&
			(t.includes("steampowered.com") ||
				t.includes("steamcommunity.com") ||
				t.includes("steamcommunity.com") ||
				t.includes("steamchina.com")))
	);
}
function er(e, t) {
	if ($t(e)) {
		let t = new RegExp(Pt).exec(e);
		if (t && t.length > 2) {
			let [, e] = t;
			let r = Number(t[2]);
			if (r > 0) {
				return <Ot id={r} inputType={e} />;
			}
		}
	}
	return Pm(e, t?.event);
}
function tr(e, t) {
	if ($t(e)) {
		const t = new RegExp(Qt).exec(e);
		if (t && t.length > 1) {
			const r = Number(t[1]);
			if (r > 0) {
				return (
					<div className={A_1(B.LoyaltyRewardCtn)}>
						<Dt defid={r} url={e} />
					</div>
				);
			}
		}
	}
	return Pm(e, t?.event);
}
function rr(e, t) {
	if ($t(e)) {
		let t = new RegExp(Lt).exec(e);
		if (t && t.length > 2) {
			let r;
			let n;
			let i;
			let a;
			if (t[1] == "gid") {
				n = new ct.b(t[2]);
			} else if (t[1] == "groups") {
				a = t[2];
			} else if (isNaN(+t[2])) {
				i = t[2];
			} else {
				r = Number(t[2]);
			}
			let [, , , o] = t;
			if (
				((r !== undefined && r > 0) ||
					i !== undefined ||
					a !== undefined ||
					n !== undefined) &&
				o != null &&
				o.length > 0
			) {
				return (
					<Wt_1
						appid={r}
						clanSteamID={n}
						strVanity={i}
						strGroupVanity={a}
						announcementGID={o}
						strURL={e}
					/>
				);
			}
		}
	}
	return Pm(e, t?.event);
}
function nr(e, t) {
	return mr(xt, e, t);
}
function ir(e, t) {
	return mr(zt, e, t);
}
function ar(e, t) {
	if (Y2()) {
		return null;
	} else {
		return cr(e, <Z.KKS />, "@", t);
	}
}
function sr(e, t) {
	if (Y2()) {
		return null;
	} else {
		return cr(e, <Z.KKS />, "#", t);
	}
}
function or(e, t) {
	if (Y2()) {
		return null;
	} else {
		return cr(e, <Z.qcc />, undefined, t);
	}
}
function lr(e, t) {
	return cr(e, <Z.Qte />, undefined, t);
}
function cr(e, t, r, n) {
	let i;
	const a = e.endsWith("/") ? e.length - 1 : e.length;
	const o = e.lastIndexOf("/", a - 1);
	if (o != -1 && o + 1 < e.length) {
		i = e.substring(o + 1, a);
	}
	if (r && i) {
		i = r + i;
	}
	const l = Pm(e, n?.event, i ?? e);
	return (
		<div className={B.SocialLink}>
			<div className={B.SocialIcon}>{t}</div>
			{l}
		</div>
	);
}
function mr(e, t, r) {
	if ($t(t)) {
		let r = new RegExp(e).exec(t);
		if (r && r.length > 2) {
			let e;
			let n;
			let i;
			let a;
			if (r[1] == "gid") {
				n = new ct.b(r[2]);
			} else if (r[1] == "group") {
				n = ct.b.InitFromClanID(Number.parseInt(r[2]));
			} else if (r[1] == "groups") {
				a = r[2];
			} else if (isNaN(+r[2])) {
				i = r[2];
			} else {
				e = Number(r[2]);
			}
			const [, , , o] = r;
			if (
				((e !== undefined && e > 0) ||
					i !== undefined ||
					a !== undefined ||
					n !== undefined) &&
				o != null &&
				o.length > 0
			) {
				return (
					<Wt_1
						appid={e}
						clanSteamID={n}
						strVanity={i}
						strGroupVanity={a}
						eventGID={o}
						strURL={t}
					/>
				);
			}
		}
	}
	return Pm(t, r?.event);
}
export class f extends s.Component {
	m_parser;
	constructor(e) {
		super(e);
		this.m_parser = new i.B(
			f.sm_BBCodeDictionary,
			this.ElementAccumulator,
			e.languageOverride,
		);
	}
	ElementAccumulator(e) {
		return new g(
			new p(
				new A(
					new a.OJ(new a.R8(), 0),
					e,
					(Zt == null &&
						(Zt = Y2()
							? [
									{
										urlRegExp: new RegExp(Pt),
										fnBBComponent: er,
									},
									{
										urlRegExp: new RegExp(zt),
										fnBBComponent: ir,
									},
									{
										urlRegExp: new RegExp(xt),
										fnBBComponent: nr,
									},
									{
										urlRegExp: new RegExp(Lt),
										fnBBComponent: rr,
									},
									{
										urlRegExp: new RegExp(qt),
										fnBBComponent: lr,
									},
								]
							: [
									{
										urlRegExp: new RegExp(/youtu.be|youtube.com/i),
										fnBBComponent: Yt,
									},
									{
										urlRegExp: new RegExp(
											/community.+sharedfiles\/filedetails\/\?id=\d+/i,
										),
										fnBBComponent: Jt,
									},
									{
										urlRegExp: new RegExp(Pt),
										fnBBComponent: er,
									},
									{
										urlRegExp: new RegExp(zt),
										fnBBComponent: ir,
									},
									{
										urlRegExp: new RegExp(xt),
										fnBBComponent: nr,
									},
									{
										urlRegExp: new RegExp(Lt),
										fnBBComponent: rr,
									},
									{
										urlRegExp: new RegExp(Ut),
										fnBBComponent: Kt,
									},
									{
										urlRegExp: new RegExp(Wt),
										fnBBComponent: Xt,
									},
									{
										urlRegExp: new RegExp(Vt),
										fnBBComponent: ar,
									},
									{
										urlRegExp: new RegExp(Ht),
										fnBBComponent: sr,
									},
									{
										urlRegExp: new RegExp(jt),
										fnBBComponent: or,
									},
									{
										urlRegExp: new RegExp(qt),
										fnBBComponent: lr,
									},
									{
										urlRegExp: new RegExp(Qt),
										fnBBComponent: tr,
									},
								]),
					Zt),
					{
						partnerEventStore: this.props.partnerEventStore,
						event: this.props.event,
					},
				),
			),
			e,
		);
	}
	static sm_BBCodeDictionary = new Map([
		...Array.from(o.W4.entries()),
		...Array.from(Ze().entries()),
	]);
	static AddDictionary(e) {
		f.sm_BBCodeDictionary = new Map([
			...Array.from(f.sm_BBCodeDictionary.entries()),
			...Array.from(e.entries()),
		]);
	}
	render() {
		this.m_parser.UpdateOverrideLanguage(this.props.languageOverride);
		return this.m_parser.ParseBBCode(this.props.text, {
			showErrorInfo: this.props.showErrorInfo,
			event: this.props.event,
			bShowShortSpeakerInfo: this.props.bShowShortSpeakerInfo,
		});
	}
}
Cg([ke.oI], f.prototype, "ElementAccumulator", null);
