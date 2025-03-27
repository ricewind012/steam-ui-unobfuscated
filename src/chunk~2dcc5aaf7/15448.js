import {
	LocalizeRtime32ToShortDate,
	Localize,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { useState } from "./63696.js";
import a from "./41230.js";
import s, { q3 } from "./90095.js";
import o, { Gn } from "./89193.js";
import l from "./28346.js";
import c from "./78057.js";
import m from "./87935.js";
import u from "./50376.js";
import d from "./91486.js";
import A, { A as A_1 } from "./90765.js";
import g, { Fd } from "./52451.js";
import { lX } from "./31084.js";
import C from "./88750.js";
import _ from "./76052.js";
import { Np } from "./32700.js";
import y from "./69164.js";
import { er, Wm, Kt } from "./56655.js";
import w from "./10606.js";
import B from "./7552.js";
import { Qt } from "./18057.js";
import "./72476.js";
import D from "./70989.js";
const f = _;
let I = class extends i.Component {
	constructor(e) {
		super(e);
		Gn(this);
	}
	m_bDelayedLoad = true;
	m_refPortrait = i.createRef();
	state = {
		bCoverExpanded: false,
	};
	m_elCoverArt = i.createRef();
	componentDidMount() {
		this.m_bDelayedLoad = this.props.delayLoad;
		if (this.props.delayLoad) {
			const e = 800;
			window.setTimeout(() => {
				this.m_bDelayedLoad = false;
			}, e);
		}
	}
	OnImageLoad() {
		this.props.onImageLoad();
	}
	OnCoverClicked(e) {
		this.props.onCollapseStarted();
		this.setState({
			bCoverExpanded: true,
		});
	}
	OnCoverLeft() {
		if (this.state.bCoverExpanded) {
			this.setState({
				bCoverExpanded: false,
			});
			this.m_elCoverArt.current.addEventListener(
				"transitionend",
				this.CoverExpandCleanUp,
			);
		}
	}
	CoverExpandCleanUp() {
		this.props.onCollapseComplete();
		this.m_elCoverArt.current.removeEventListener(
			"transitionend",
			this.CoverExpandCleanUp,
		);
	}
	OnPortraitContextMenu(e) {
		lX(
			<C.tz>
				<C.kt onSelected={this.m_refPortrait.current.OnChangeArtwork}>
					{Np(
						this.m_refPortrait.current.is_custom_image
							? "ClearCustomArtwork"
							: "SetCustomArtwork",
					)}
				</C.kt>
			</C.tz>,
			e,
		);
	}
	render() {
		if (this.m_bDelayedLoad) {
			return null;
		}
		let e = "";
		if (this.props.overview.GetCanonicalReleaseDate()) {
			e = LocalizeRtime32ToShortDate(
				this.props.overview.GetCanonicalReleaseDate(),
			);
		}
		let t;
		let r = this.props.overview.BIsModOrShortcut();
		let n = !r && c.H.GetAssociations(this.props.overview.appid);
		let a = !r && c.H.GetDescriptions(this.props.overview.appid);
		let s = a && a.strSnippet;
		t = this.props.concise ? (
			<div className={f.ConciseContainer}>
				{!r && s && (
					<div className={A_1()}>
						<div className={f.GameDescription}>{s}</div>
					</div>
				)}
			</div>
		) : (
			<div className={f.InnerContainer}>
				<div
					ref={this.m_elCoverArt}
					className={A_1(f.Portrait, this.state.bCoverExpanded && f.Expanded)}
					onContextMenu={this.OnPortraitContextMenu}
					onMouseLeave={this.OnCoverLeft}
					onClick={this.OnCoverLeft}
				>
					<d.z
						ref={this.m_refPortrait}
						app={this.props.overview}
						eAssetType={0}
						className={f.BoxArt}
						alt={this.props.overview.display_name}
						onLoad={this.OnImageLoad}
					/>
					<div className={f.ZoomInButton} onClick={this.OnCoverClicked}>
						<u.eSy />
					</div>
				</div>
				{!r && s && (
					<div className={A_1(f.Description, f.SectionContainer)}>
						<div className={f.GameDescription}>{s}</div>
					</div>
				)}
				{!r && (
					<div className={A_1(f.Stats, f.SectionContainer)}>
						<K
							className={f.Developers}
							data={n}
							association="developer"
							label="#AppDetails_Developer"
						/>
						<K
							className={f.Publishers}
							data={n}
							association="publisher"
							label="#AppDetails_Publisher"
						/>
						<K
							className={f.Franchises}
							data={n}
							association="franchise"
							label="#AppDetails_Franchise"
						/>
						<R label={(0, Localize)("#AppDetails_ReleaseDate")} strDate={e} />
					</div>
				)}
				{!r && (
					<div className={A_1(f.FeaturesList, f.SectionContainer)}>
						<l.n$
							overview={this.props.overview}
							feature={7}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={8}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={9}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={11}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={6}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={10}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={5}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={23}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={1}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={2}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={16}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={18}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={20}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={3}
							minimode={false}
							suppresstooltip
						/>
						<l.n$
							overview={this.props.overview}
							feature={22}
							minimode={false}
							suppresstooltip
						/>
					</div>
				)}
			</div>
		);
		return (
			<div className={A_1(f.Container, r && f.ShortcutContainer)}>
				{r && (
					<div className={f.Shortcut}>
						{(0, Localize)(
							"#AppDetails_Shortcut_Explanation",
							this.props.overview.display_name,
						)}
					</div>
				)}
				{t}
				<E overview={this.props.overview} details={this.props.details} />
			</div>
		);
	}
};
function E(e) {
	const t = er();
	return (
		<>
			{t && <M {...e} />}
			<T {...e} />
		</>
	);
}
function M(e) {
	const { eCategory, rgResults, strSteamDeckBlogURL } = q3(() => ({
		eCategory: e.overview.steam_deck_compat_category,
		rgResults: e.details.vecDeckCompatTestResults ?? [],
		strSteamDeckBlogURL: e.details.strSteamDeckBlogURL ?? "",
	}));
	const A_1 = Wm(eCategory);
	const [o, setO] = useState(false);
	const c = () => {
		setO(false);
	};
	const m = Qt(strSteamDeckBlogURL);
	const u = i.useCallback(() => {
		c();
		m();
	}, [m]);
	let d = {
		onOKButton: null,
		onOKActionDescription: null,
		onCancelButton: c,
		onCancelActionDescription: (0, Localize)("#Button_Close"),
	};
	if (e.overview.BIsModOrShortcut()) {
		return null;
	}
	let A = (0, Localize)("#DeckVerified_CompatibilitySection_Title");
	return (
		<div>
			<y.Z className={f.DeckVerifiedInfo} focusClassName={f.Focused}>
				<div className={f.Title}>{A}</div>
				<div className={f.CompatLabel}>
					<A_1 />
					{Kt(eCategory)}
				</div>
				<y.Z onActivate={() => setO(true)} className={f.Details}>
					{(0, Localize)("#DeckVerified_CompatibilitySection_Details")}
				</y.Z>
				{strSteamDeckBlogURL && (
					<B.Tz onOpenBlogPost={u} containerClass={f.Details} />
				)}
			</y.Z>
			<w.mt
				active={o}
				onDismiss={c}
				modalClassName="DeckVerifiedModalDialogClient"
			>
				<y.Z onGamepadDirection={(e) => true}>
					<B.g1
						results={{
							appid: e.overview.appid,
							resolved_category: eCategory,
							resolved_items: rgResults.map(
								({ test_result, test_loc_token }) => ({
									display_type: test_result,
									loc_token: test_loc_token,
								}),
							),
							steam_deck_blog_url: strSteamDeckBlogURL,
						}}
						buttonProps={d}
						onOpenBlogPost={u}
						autoFocus
					/>
				</y.Z>
			</w.mt>
		</div>
	);
}
function T(e) {
	const { nPriority, strName } = q3(() => ({
		nPriority: e.details.nCompatToolPriority,
		strName: e.details.strCompatToolDisplayName,
	}));
	if (!strName) {
		return null;
	}
	let n;
	switch (nPriority) {
		case 250:
		case 75: {
			n = "#Steam_Settings_Compat_Launch_Tool_Forced";
			break;
		}
		default: {
			n = "#Steam_Settings_Compat_Launch_Tool_Whitelisted";
		}
	}
	return (
		<div className={f.CompatToolContainer}>
			{LocalizeInlineReactWithFallback(
				"#Steam_Settings_Compat_Launch_SteamPlay",
				<b />,
			)}{" "}
			{(0, Localize)(n, strName)}
		</div>
	);
}
function R(e) {
	if (e.strDate) {
		return (
			<div className={f.Release}>
				<div className={f.Label}>{e.label}</div>
				<div className={f.Date}>{e.strDate}</div>
			</div>
		);
	} else {
		return null;
	}
}
Cg([o.sH], I.prototype, "m_bDelayedLoad", undefined);
Cg([g.oI], I.prototype, "OnImageLoad", null);
Cg([g.oI], I.prototype, "OnCoverClicked", null);
Cg([g.oI], I.prototype, "OnCoverLeft", null);
Cg([g.oI], I.prototype, "CoverExpandCleanUp", null);
Cg([g.oI], I.prototype, "OnPortraitContextMenu", null);
I = Cg([a.PA], I);
let K = class extends i.Component {
	GetURL(e, t, r) {
		if (t && t.length != 0) {
			return `steam://openurl/${t}`;
		} else {
			return `steam://openurl/${m.B7.ResolveURL(
				"StoreGameSearchPage",
			)}?${r}=${encodeURIComponent(e)}`;
		}
	}
	render() {
		if (!this.props.data) {
			return null;
		}
		let e;
		let t;
		switch (this.props.association) {
			case "developer": {
				e = this.props.data.rgDevelopers;
				t = "developer";
				break;
			}
			case "publisher": {
				e = this.props.data.rgPublishers;
				t = "publisher";
				break;
			}
			case "franchise": {
				e = this.props.data.rgFranchises;
				t = "franchise";
			}
		}
		if (e.length == 0) {
			return null;
		}
		let r = [];

		for (const a of e) {
			let s = this.GetURL(a.strName, a.strURL, t);
			r.push(
				<a key={a.strName} className={f.Name} href={s}>
					{a.strName}
				</a>,
			);
		}

		return (
			<div className={A_1(this.props.className, f.AssociationList)}>
				<div className={f.Label}>{(0, Localize)(this.props.label)}</div>
				<div className={f.Association}>{r}</div>
			</div>
		);
	}
};
K = Cg([a.PA], K);
const N = D;
export let b = class extends i.Component {
	m_contentRef = i.createRef();
	m_resizeObserver;
	m_mutationObserver;
	constructor(e) {
		super(e);
		this.state = {
			gameInfoHeight: 0,
			bBoxArtExpanded: false,
		};
	}
	componentDidMount() {
		if (this.m_contentRef.current) {
			this.m_resizeObserver = Fd(this.m_contentRef.current, this.OnResize);
			this.m_mutationObserver = new MutationObserver(this.OnResize);
			this.m_mutationObserver.observe(this.m_contentRef.current, {
				subtree: true,
				childList: true,
			});
		}
	}
	componentWillUnmount() {
		this.m_resizeObserver.disconnect();
		this.m_mutationObserver.disconnect();
	}
	OnResize() {
		this.setBoxHeight();
	}
	OnImageLoad() {
		this.setBoxHeight();
	}
	onCollapseStarted() {
		this.setState({
			bBoxArtExpanded: true,
		});
	}
	onCollapseComplete() {
		this.setState({
			bBoxArtExpanded: false,
		});
	}
	setBoxHeight() {
		if (
			this.m_contentRef.current &&
			this.state.gameInfoHeight !=
				this.m_contentRef.current.children[0].scrollHeight
		) {
			this.setState({
				gameInfoHeight: this.m_contentRef.current.children[0].scrollHeight,
			});
		}
	}
	render() {
		let e = this.props.expand ? N.AppDetailsExpanded : N.AppDetailsCollapsed;
		let t;
		t =
			this.props.collapsible !== false
				? this.props.expand
					? `${this.state.gameInfoHeight}px`
					: "0px"
				: "";
		return (
			<div
				ref={this.m_contentRef}
				className={A_1(
					N.AppGameInfoContainer,
					e,
					this.props.suppressTransition ? N.SuppressTransition : "",
					N.Glassy,
					this.state.bBoxArtExpanded && N.BoxArtExpanded,
				)}
				style={{
					height: t,
				}}
			>
				<I
					{...this.props}
					onImageLoad={this.OnImageLoad}
					delayLoad={!this.props.expand}
					onCollapseStarted={this.onCollapseStarted}
					onCollapseComplete={this.onCollapseComplete}
				/>
				<div className={N.GameInfoShadow} />
			</div>
		);
	}
};
Cg([g.oI], b.prototype, "OnResize", null);
Cg([g.oI], b.prototype, "OnImageLoad", null);
Cg([g.oI], b.prototype, "onCollapseStarted", null);
Cg([g.oI], b.prototype, "onCollapseComplete", null);
b = Cg([a.PA], b);
