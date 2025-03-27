import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./41230.js";
import s, { Co } from "./96593.js";
import o from "./78057.js";
import l from "./12767.js";
import c, { A as A_1 } from "./90765.js";
import m from "./52451.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import d from "./10606.js";
import { pg } from "./13869.js";
import h from "./85965.js";
import C from "./23861.js";
import f from "./79614.js";
import y, { $B } from "./87935.js";
import S, { Xe } from "./36934.js";
import w from "./80818.js";
const _ = "/images/defaultappimage.png";
const b = f;
export let z = class extends i.Component {
	static defaultProps = {
		allowCustomization: true,
	};
	m_refImage = i.createRef();
	m_refFileInput = i.createRef();
	m_hAppDetails = null;
	constructor(e) {
		super(e);
		this.state = {
			bIsLoaded: false,
		};
		AssertMsg(
			e.rgSources || e.app || (e.eAssetType == 4 && e.appinfo),
			"Either rgSources or app must be specified, or you must be asking for an icon and provide appinfo",
		);
		AssertMsg(e.app || e.appid, "Either appid or app must be specified");
	}
	RegisterForAppDetails() {
		this.UnregisterForAppDetails();
		if (
			!!this.props.app &&
			(this.props.eAssetType == 3 ||
				this.props.eAssetType == 1 ||
				this.props.eAssetType == 1 ||
				this.props.eAssetType == 2)
		) {
			this.m_hAppDetails = o.H.RegisterForAppData(this.props.app.appid);
		}
	}
	UnregisterForAppDetails() {
		if (this.m_hAppDetails) {
			this.m_hAppDetails.unregister();
			this.m_hAppDetails = null;
		}
	}
	componentDidMount() {
		this.RegisterForAppDetails();
	}
	componentDidUpdate(e) {
		AssertMsg(
			this.props.rgSources ||
				this.props.app ||
				(this.props.eAssetType == 4 && this.props.appinfo),
			"Either rgSources or app must be specified, or you must be asking for an icon and provide appinfo",
		);
		AssertMsg(
			this.props.app || this.props.appid,
			"Either appid or app must be specified",
		);
		if (
			e.app?.appid != this.props.app?.appid ||
			e.eAssetType != this.props.eAssetType
		) {
			this.RegisterForAppDetails();
		}
	}
	componentWillUnmount() {
		this.UnregisterForAppDetails();
	}
	get src() {
		return this.m_refImage.current.src;
	}
	get is_custom_image() {
		return (
			this.m_refImage.current &&
			$B(this.m_refImage.current.src, y.Uq.Library.CustomImages)
		);
	}
	get is_default_image() {
		return (
			this.m_refImage.current &&
			this.m_refImage.current.src &&
			(this.m_refImage.current.src.startsWith("/images/default") ||
				this.m_refImage.current.src.startsWith("data:image"))
		);
	}
	BDisplayTitle() {
		return (
			!this.props.neverShowTitle &&
			(this.props.eAssetType == 0 || this.props.eAssetType == 3) &&
			this.is_default_image
		);
	}
	OnIncrementalError(e, t, r) {
		const n = this.props.appid ? this.props.appid : this.props.app.appid;
		if ($B(t, y.Uq.Library.Assets)) {
			console.log("Reporting cache miss for", n, this.props.eAssetType, t);
			SteamClient.Apps.ReportLibraryAssetCacheMiss(n, this.props.eAssetType);
		}
		if (this.props.onIncrementalError) {
			this.props.onIncrementalError(e, t, r);
		}
	}
	OnImageLoaded(e) {
		if (this.props.onLoad) {
			this.props.onLoad(e);
		}
		this.setState(() => ({
			bIsLoaded: true,
		}));
	}
	OnError(e) {
		if (this.props.onError) {
			this.props.onError(e);
		}
		this.setState(() => ({
			bIsLoaded: true,
		}));
	}
	GetSourcesForAsset() {
		switch (this.props.eAssetType) {
			case 7: {
				if (this.props.app) {
					AssertMsg(
						this.props.app.BIsMusicAlbum(),
						`Cannot get soundtrack album cover for appid ${this.props.app.appid}: non-album app type ${this.props.app.app_type}`,
					);
					let e = [];
					if (this.props.app.album_cover_hash) {
						e.push(s.tw.GetCachedAlbumCoverURL(this.props.app));
						e.push(s.tw.GetAlbumCoverURLForApp(this.props.app));
					}
					e.push("/images/defaultalbumcover.jpg");
					return e;
				}
				return [];
			}
			case 0: {
				if (this.props.app.app_type == 8192) {
					AssertMsg(
						!this.props.app.BIsModOrShortcut(),
						"It doesn't make sense to have a shortcut/mod for a soundtrack. Unsure where to look for album cover art in this case.",
					);
					let e = [];
					if (this.props.app.album_cover_hash) {
						e.push(s.tw.GetCachedAlbumCoverURL(this.props.app));
						e.push(s.tw.GetAlbumCoverURLForApp(this.props.app));
					}
					e.push(_);
					return e;
				}
				if (this.props.app.BIsModOrShortcut()) {
					if (this.props.app.BSupportsVR()) {
						return [
							...s.tw.GetCustomVerticalCapsuleURLs(this.props.app),
							s.tw.GetIconURLForApp(this.props.app),
							_,
						];
					} else {
						return [...s.tw.GetCustomVerticalCapsuleURLs(this.props.app), _];
					}
				} else {
					return [
						...s.tw.GetCustomVerticalCapsuleURLs(this.props.app),
						...s.tw.GetCachedVerticalCapsuleURL(this.props.app),
						s.tw.GetVerticalCapsuleURLForApp(this.props.app),
						s.tw.GetPregeneratedVerticalCapsuleForApp(this.props.app),
						_,
					];
				}
			}
			case 3: {
				return [...o.H.GetHeaderImages(this.props.app), h.A];
			}
			case 4: {
				let e = [];
				if (this.props.app?.icon_hash) {
					e.push(
						y.B7.BuildCachedLibraryAssetURL(
							this.props.app.appid,
							`${this.props.app.icon_hash}.jpg`,
							this.props.app.local_cache_version ?? 0,
						),
					);
					e.push(
						y.B7.BuildLegacyCachedLibraryAssetURL(
							this.props.app.appid,
							"icon.jpg",
							this.props.app.local_cache_version,
						),
					);
				}
				if (this.props.app?.album_cover_hash) {
					e.push(s.tw.GetCachedAlbumCoverURL(this.props.app));
				} else if (this.props.appinfo?.icon_url) {
					e.push(this.props.appinfo.icon_url);
				}
				if (this.props.app) {
					const t = s.tw.GetIconURLForApp(this.props.app);
					if (t) {
						e.push(t);
					}
				}
				return [...e, C.A];
			}
			case 1: {
				const { rgHeroImages, bHasHeroImage } = o.H.GetHeroImages(
					this.props.app,
				);
				return [...rgHeroImages, _];
			}
			case 2: {
				const { rgLogoImages, logoPosition } = o.H.GetLogoImages(
					this.props.app,
				);
				return rgLogoImages;
			}
			default: {
				AssertMsg(false, "Need to pass manual source list for asset type");
			}
		}
		return [];
	}
	OnChangeArtwork(e) {
		if (this.props.allowCustomization !== false) {
			if (this.is_custom_image) {
				SteamClient.Apps.ClearCustomArtworkForApp(
					this.props.app.appid,
					this.props.eAssetType,
				).then(() => {
					this.setState({
						bIsLoaded: false,
					});
				});
			} else {
				this.m_refFileInput.current.click();
			}
		}
	}
	OnFileInputClick(e) {
		e.stopPropagation();
	}
	OnFileInputChange(e) {
		let t = GetOwningWindowForEvent(e);
		const r = this.m_refFileInput.current.files[0];
		const n = r.type.match(/image\/(.+)/);
		let a = n && n[1];
		if (a == "jpeg") {
			a = "jpg";
		}
		if (a != "jpg" && a != "png") {
			pg(
				<d.KG
					strTitle={Localize("#CustomArt_ErrorTitle")}
					strDescription={Localize("#CustomArt_BadFileType")}
				/>,
				t,
				{
					strTitle: Localize("#CustomArt_ErrorTitle"),
				},
			);
			return;
		}
		let s = new FileReader();
		s.onload = () => {
			let e = s.result.toString();
			e = e.slice(e.indexOf("base64,") + 7);
			SteamClient.Apps.SetCustomArtworkForApp(
				this.props.app.appid,
				e,
				a,
				this.props.eAssetType,
			)
				.then(() => {
					this.setState({
						bIsLoaded: false,
					});
					this.m_refFileInput.current.value = null;
				})
				.catch((e) => {
					console.log("Set artwork failed", e);
					pg(
						<d.KG
							strTitle={Localize("#CustomArt_ErrorTitle")}
							strDescription={Localize("#CustomArt_UnknownError")}
						/>,
						t,
						{
							strTitle: Localize("#CustomArt_ErrorTitle"),
						},
					);
					this.m_refFileInput.current.value = null;
				});
		};
		s.readAsDataURL(r);
	}
	render() {
		let {
			app,
			appid,
			appinfo,
			className,
			rgSources,
			name,
			eAssetType,
			onIncrementalError,
			suppressTransitions,
			neverShowTitle,
			bShortDisplay,
			backgroundType,
			imageClassName,
			allowCustomization,
			...C
		} = this.props;
		if (!rgSources && (app || (appinfo && eAssetType == 4))) {
			rgSources = this.GetSourcesForAsset();
		}
		const _ =
			app?.optional_parent_app_id &&
			app.app_type == 8 &&
			eAssetType == 0 &&
			!this.is_custom_image &&
			this.state.bIsLoaded;
		const f = A_1(
			b.Container,
			backgroundType !== "transparent" && b.GreyBackground,
			{
				[b.PortraitImage]: eAssetType == 0,
				[b.LandscapeImage]: eAssetType == 3,
				[b.CustomImage]: this.is_custom_image,
				[b.Short]: this.props.bShortDisplay,
				[b.ShowDemoBanner]: _,
			},
			className,
		);
		const y = app?.display_name || name;
		const S = y?.length > 25;
		const B = allowCustomization !== false && eAssetType != 4;
		return (
			<div className={f}>
				{B && (
					<input
						type="file"
						accept=".jpg,.jpeg,.png"
						style={{
							display: "none",
						}}
						name="fileupload"
						ref={this.m_refFileInput}
						onClick={this.OnFileInputClick}
						onChange={this.OnFileInputChange}
					/>
				)}
				{rgSources?.length > 0 && (
					<l.c
						{...C}
						ref={this.m_refImage}
						className={A_1(
							b.Image,
							b.Visibility,
							this.state.bIsLoaded ? b.Visible : b.Hidden,
							this.props.suppressTransitions && b.NoTransitions,
							imageClassName,
						)}
						rgSources={rgSources}
						onIncrementalError={this.OnIncrementalError}
						onLoad={this.OnImageLoaded}
						onError={this.OnError}
						alt={app && app.display_name}
					/>
				)}
				{y && this.BDisplayTitle() && (
					<span className={A_1(b.Title, S && b.LongTitles)}>{y}</span>
				)}
				{_ && <w.Gl className={b.DemoBanner} overview={app} />}
			</div>
		);
	}
};
export function A(e, t) {
	const r = Co(e);
	const n = Xe(e);
	if (r) {
		return {
			app: r,
			name: r.display_name,
			eAssetType: 0,
		};
	} else if (n?.is_valid) {
		return {
			appid: e,
			name: n.name,
			eAssetType: 0,
			rgSources: [y.B7.BuildLibraryAssetURL(e, "library_600x900.jpg", 0), _],
		};
	} else {
		return {
			appid: 1,
			name: t || Localize("#LibraryAssetImage_UnknownName"),
			eAssetType: 0,
			rgSources: [_],
		};
	}
}
Cg([m.oI], z.prototype, "OnIncrementalError", null);
Cg([m.oI], z.prototype, "OnImageLoaded", null);
Cg([m.oI], z.prototype, "OnError", null);
Cg([m.oI], z.prototype, "GetSourcesForAsset", null);
Cg([m.oI], z.prototype, "OnChangeArtwork", null);
Cg([m.oI], z.prototype, "OnFileInputChange", null);
z = Cg([a.PA], z);
