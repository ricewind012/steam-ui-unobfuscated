import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./90242.js";
import a from "./69164.js";
import s from "./56655.js";
import o, { Cg } from "./34629.js";
import l from "./83957.js";
import m, { H } from "./16154.js";
import u from "./79769.js";
import d, { hL } from "./52451.js";
import A, { Tc, Qn } from "./72476.js";
import g from "./64608.js";
import h from "./10606.js";
import C from "./50376.js";
import f from "./81489.js";
import y from "./21105.js";
import S from "./13743.js";
import w from "./43014.js";
import E from "./26853.js";
import { A as A_1 } from "./90765.js";
import { EK } from "./51095.js";
import { pg } from "./13869.js";
const c = l;
class p {
	m_mapAppResults = new Map();
	m_mapAppCallbackList = new Map();
	m_mapAppResultsPromises = new Map();
	GetCompatabilityResultForApp(e) {
		return this.m_mapAppResults.get(e);
	}
	BHasCompatabilityResultForApp(e) {
		return this.m_mapAppResults.has(e);
	}
	GetCallbackForAppList(e) {
		if (!this.m_mapAppCallbackList.has(e)) {
			this.m_mapAppCallbackList.set(e, new u.lu());
		}
		return this.m_mapAppCallbackList.get(e);
	}
	AddCompatabilityResult(e) {
		this.m_mapAppResults.set(e.appid, e);
		this.GetCallbackForAppList(e.appid).Dispatch(e);
	}
	async LoadAppCompabitilityResult(e) {
		return (
			!!this.m_mapAppResults.has(e) ||
			(this.m_mapAppResultsPromises.has(e) ||
				this.m_mapAppResultsPromises.set(
					e,
					this.InternalLoadAppCompatability(e),
				),
			this.m_mapAppResultsPromises.get(e))
		);
	}
	async InternalLoadAppCompatability(e) {
		let t = null;
		try {
			const r = {
				nAppID: e,
				l: A.TS.LANGUAGE,
				cc: A.TS.COUNTRY,
			};
			let n = `${A.TS.STORE_BASE_URL}saleaction/ajaxgetdeckappcompatibilityreport`;
			const i = await c.get(n, {
				params: r,
				withCredentials: true,
			});
			if (i?.status == 200 && i.data?.success == 1 && i.data?.results) {
				this.AddCompatabilityResult(i.data.results);
				return true;
			}
			t = H(i);
		} catch (e) {
			t = H(e);
		}
		console.error(
			`CDeckVerifiedDetailsStore.InternalLoadAppCompatability failed: ${t?.strErrorMsg}`,
			t,
		);
		return false;
	}
	static s_Singleton;
	static Get() {
		if (!p.s_Singleton) {
			p.s_Singleton = new p();
			if (A.TS.WEB_UNIVERSE == "dev" || A.TS.WEB_UNIVERSE == "beta") {
				window.g_DeckVerifiedDetailStores = p.s_Singleton;
			}
		}
		return p.s_Singleton;
	}
	constructor() {
		if (document.getElementById("application_config")) {
			let e = Tc("deckcompatibility", "application_config");
			if (p.ValidateCompatabilityResult(e)) {
				this.AddCompatabilityResult(e);
				if (A.TS.WEB_UNIVERSE == "dev") {
					console.log(
						"CDeckCompatibilityDetailsStore compatability loaded: ",
						e,
					);
				}
			}
		}
	}
	static ValidateCompatabilityResult(e) {
		const t = e;
		return (
			t &&
			typeof t.appid == "number" &&
			typeof t.resolved_category == "number" &&
			typeof t.resolved_items == "object"
		);
	}
}
Cg([d.oI], p.prototype, "LoadAppCompabitilityResult", null);
const b = f;
export function G1(e) {
	const { results, appName, buttonProps, autoFocus, onOpenBlogPost } = e;
	const [l, setL] = n.useState(false);
	const m = n.useCallback(() => l, [l]);
	const URef = n.useRef();
	const d = Qn();
	n.useEffect(() => {
		setL(URef?.current?.scrollHeight > URef?.current?.clientHeight);
	}, []);
	if (!results) {
		return null;
	}
	const p = () => {
		if (onOpenBlogPost) {
			onOpenBlogPost();
		} else {
			window.location.href = results.steam_deck_blog_url;
		}
	};
	let g = buttonProps ?? {};
	let h = null;
	if (results.steam_deck_blog_url) {
		g.onOptionsActionDescription = (0, Localize)(
			"#SteamDeckVerified_ViewDeveloperPost",
		);
		g.onOptionsButton = p;
		h = <V blogURL={results.steam_deck_blog_url} />;
	}
	const C =
		results.resolved_items?.findIndex((e) => e.display_type == 1) !== -1;
	if (results.resolved_items?.length) {
		return (
			<a.Z
				className={
					d
						? b.CompatibilityDetailsContainer
						: b.CompatibilityDetailsContainerDesktop
				}
				{...g}
			>
				<div>
					<div className={b.DialogHeader}>
						<div className={b.DialogTitle}>
							{(0, Localize)(
								"#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
							)}
						</div>
						<div className={b.AppTitleCategory}>
							<Ez category={results.resolved_category} />
						</div>
					</div>
					<UN category={results.resolved_category} appName={appName} />
				</div>
				{h}
				<div className={b.CompatibilityDetailsSeparator} />
				<y.Qg
					ref={URef}
					className={
						m()
							? b.CompatibilityDetailsInterior_Scroll
							: b.CompatibilityDetailsInterior_NoScroll
					}
				>
					<a.Z
						autoFocus={autoFocus}
						focusableIfNoChildren={autoFocus || m()}
						noFocusRing
					>
						{results.resolved_items
							.filter((e) => e.display_type !== 1)
							.map((e) => (
								<div
									key={e.loc_token + e.display_type}
									className={b.CompatibilityDetailsRow}
								>
									<I displaytype={e.display_type} />
									<span>{(0, Localize)(e.loc_token)}</span>
								</div>
							))}
						{C && (
							<div className={b.CompatibilityNotes}>
								{results.resolved_items
									.filter((e) => e.display_type == 1)
									.map((e) => (
										<div
											key={e.loc_token + e.display_type}
											className={b.CompatibilityDetailsNoteRow}
										>
											<span>{(0, Localize)(e.loc_token)}</span>
										</div>
									))}
							</div>
						)}
					</a.Z>
				</y.Qg>
			</a.Z>
		);
	} else {
		return (
			<a.Z
				autoFocus={autoFocus}
				focusableIfNoChildren={autoFocus}
				noFocusRing
				className={b.CompatibilityDetailsContainer}
				{...g}
			>
				<div>
					<div className={b.DialogHeader}>
						<div className={b.DialogTitle}>
							{(0, Localize)(
								"#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
							)}
						</div>
						<div className={b.AppTitleCategory}>
							<Ez category={results.resolved_category} />
						</div>
					</div>
					<UN category={results.resolved_category} appName={appName} />
					{h}
				</div>
			</a.Z>
		);
	}
}
function V(e) {
	const { blogURL } = e;
	const r = Qn();
	if (blogURL) {
		if (r) {
			return (
				<div className={b.CompatibilityDetailRatingSummary}>
					{(0, Localize)("#SteamDeckVerified_DescriptionHeader_DeveloperBlog")}
					<div className={b.DeveloperBlogYButton}>
						<S.$m button={w.g4.Y} type={S.wt.Knockout} />
					</div>
				</div>
			);
		} else {
			return (
				<div className={b.CompatibilityDetailRatingSummary}>
					{(0, Localize)(
						"#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop",
					)}
					<a href={blogURL} className={b.DeveloperBlockLinkDesktop}>
						{(0, Localize)("#SteamDeckVerified_ViewDeveloperPost")}
					</a>
				</div>
			);
		}
	} else {
		return null;
	}
}
function I(e) {
	const { displaytype } = e;
	switch (displaytype) {
		case 4: {
			return <C.o5Q className={b.CompatibilityDetailsResultIcon} />;
		}
		case 3: {
			return <C.aVR className={b.CompatibilityDetailsResultIcon} />;
		}
		case 2: {
			return <C.jIP className={b.CompatibilityDetailsResultIcon} />;
		}
		case 0: {
			return <C.WX$ className={b.CompatibilityDetailsResultIcon} />;
		}
		case 1: {
			if (A.TS.WEB_UNIVERSE == "dev") {
				console.error(
					"deck verified banner shouldn't try to display the information display type for appid",
				);
			}
			return null;
		}
	}
}
export function Q8(e) {
	const { storeItem } = e;
	if (storeItem.GetStoreItemType() !== 0) {
		return null;
	}
	const r = storeItem.GetPlatforms()?.steam_deck_compat_category || 0;
	return (
		<div className={A_1(b.LearnMoreCtn, "LearnMoreCtn")}>
			<s.$o category={r} />
			<i.Ii
				onClick={(e) => {
					let r;
					let i;
					e.preventDefault();
					e.stopPropagation();
					r = GetOwningWindowForEvent(e);
					i = storeItem.GetAppID();
					pg(<F nAppID={i} />, r);
				}}
			>
				<span className={b.LearnMorePC}>
					{(0, Localize)(
						"#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
					)}
				</span>
			</i.Ii>
		</div>
	);
}
export function Tz(e) {
	const { url, containerClass, bIncludeIcon, onOpenBlogPost } = e;
	return (
		<i.Ii
			className={containerClass}
			onClick={() => {
				if (onOpenBlogPost) {
					onOpenBlogPost();
				} else {
					window.location.href = url;
				}
			}}
		>
			{bIncludeIcon && <div className={b.DeveloperComments_Icon} />}
			<div
				className={
					bIncludeIcon
						? b.DeveloperComments_LinkIcon
						: b.DeveloperComments_LinkNoIcon
				}
			>
				{(0, Localize)(
					"#SteamDeckVerified_Store_CompatSection_DeveloperComments",
				)}
			</div>
		</i.Ii>
	);
}
function F(e) {
	const { nAppID, closeModal } = e;
	const i = ((e) => {
		const [t, setT] = n.useState(p.Get().GetCompatabilityResultForApp(e));
		hL(p.Get().GetCallbackForAppList(e), setT);
		n.useEffect(() => {
			if (!p.Get().BHasCompatabilityResultForApp(e)) {
				p.Get()
					.LoadAppCompabitilityResult(e)
					.then(() => setT(p.Get().GetCompatabilityResultForApp(e)));
			}
		}, [e]);
		return t;
	})(nAppID);
	return (
		<h.eV
			modalClassName="DeckVerifiedModalDialog"
			closeModal={closeModal}
			onCancel={closeModal}
		>
			<g.nB>
				<a.Z focusable={false} flow-children="column">
					{Boolean(i) ? (
						<G1 results={i} />
					) : (
						<E.t
							size="medium"
							position="center"
							string={(0, Localize)("#Loading")}
						/>
					)}
				</a.Z>
			</g.nB>
		</h.eV>
	);
}
export function Ez(e) {
	const { category } = e;
	switch (category) {
		case 3: {
			return <C.o5Q className={b.CategoryIcon} />;
		}
		case 2: {
			return <C.aVR className={b.CategoryIcon} />;
		}
		case 1: {
			return <C.jIP className={b.CategoryIcon} />;
		}
		case 0: {
			return <C.WX$ className={b.CategoryIcon} />;
		}
	}
}
export function UN(e) {
	const { category, appName, descriptionToken } = e;
	if (category == 0) {
		return (
			<div className={b.CompatibilityDetailRatingSummary}>
				{appName
					? LocalizeReact(
							"#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName",
							<b>{EK(appName)}</b>,
						)
					: (0, Localize)("#SteamDeckVerified_DescriptionHeader_Unknown")}
			</div>
		);
	}
	let a = "";
	let s = null;
	switch (category) {
		case 3: {
			a = "#SteamDeckVerified_DescriptionHeader_Verified";
			s = b.Verified;
			break;
		}
		case 2: {
			a = "#SteamDeckVerified_DescriptionHeader_Playable";
			s = b.Playable;
			break;
		}
		case 1: {
			a = "#SteamDeckVerified_DescriptionHeader_Unsupported";
			s = b.Unsupported;
		}
	}
	const o = <span className={s}>{(0, Localize)(P(category))}</span>;
	const l = (
		<span className={b.CompatibilityDetailRatingSummary}>
			{(0, Localize)(descriptionToken || a)}
		</span>
	);
	const c = appName
		? LocalizeReact(
				"#SteamDeckVerified_DescriptionHeader_WithAppName",
				<b>{EK(appName)}</b>,
				o,
				l,
			)
		: LocalizeReact("#SteamDeckVerified_DescriptionHeader", o, l);
	return <div className={b.CompatibilityDetailRatingSummary}>{c}</div>;
}
function P(e) {
	switch (e) {
		case 3: {
			return "#SteamDeckVerified_Category_Verified";
		}
		case 2: {
			return "#SteamDeckVerified_Category_Playable";
		}
		case 1: {
			return "#SteamDeckVerified_Category_Unsupported";
		}
		default: {
			return "#SteamDeckVerified_Category_Unknown";
		}
	}
}
