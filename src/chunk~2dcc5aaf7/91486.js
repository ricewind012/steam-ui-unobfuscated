var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./96593.js");
var o = require("./78057.js");
var l = require("./12767.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require(/*webcrack:missing*/ "./49455.js");
var d = require("./10606.js");
var _A = require("./13869.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
var h = require("./85965.js");
var C = require("./23861.js");
const _ = "/images/defaultappimage.png";
var f = require("./79614.js");
var b = f;
var y = require("./87935.js");
var S = require("./36934.js");
var w = require("./80818.js");
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
		(0, u.w)(
			e.rgSources || e.app || (e.eAssetType == 4 && e.appinfo),
			"Either rgSources or app must be specified, or you must be asking for an icon and provide appinfo",
		);
		(0, u.w)(e.app || e.appid, "Either appid or app must be specified");
	}
	RegisterForAppDetails() {
		this.UnregisterForAppDetails();
		if (
			!!this.props.app &&
			(this.props.eAssetType == 3 ||
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
		(0, u.w)(
			this.props.rgSources ||
				this.props.app ||
				(this.props.eAssetType == 4 && this.props.appinfo),
			"Either rgSources or app must be specified, or you must be asking for an icon and provide appinfo",
		);
		(0, u.w)(
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
			(0, y.$B)(this.m_refImage.current.src, y.Uq.Library.CustomImages)
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
		if ((0, y.$B)(t, y.Uq.Library.Assets)) {
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
			case 7:
				if (this.props.app) {
					(0, u.w)(
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
			case 0:
				if (this.props.app.app_type == 8192) {
					(0, u.w)(
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
			case 3:
				return [...o.H.GetHeaderImages(this.props.app), h.A];
			case 4:
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
			case 1:
				const { rgHeroImages: t, bHasHeroImage: r } = o.H.GetHeroImages(
					this.props.app,
				);
				return [...t, _];
			case 2:
				const { rgLogoImages: n, logoPosition: i } = o.H.GetLogoImages(
					this.props.app,
				);
				return n;
			default:
				(0, u.w)(false, "Need to pass manual source list for asset type");
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
			(0, _A.pg)(
				i.createElement(d.KG, {
					strTitle: Localize("#CustomArt_ErrorTitle"),
					strDescription: Localize("#CustomArt_BadFileType"),
				}),
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
					(0, _A.pg)(
						i.createElement(d.KG, {
							strTitle: Localize("#CustomArt_ErrorTitle"),
							strDescription: Localize("#CustomArt_UnknownError"),
						}),
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
			app: e,
			appid: t,
			appinfo: r,
			className: n,
			rgSources: a,
			name: s,
			eAssetType: o,
			onIncrementalError: m,
			suppressTransitions: u,
			neverShowTitle: d,
			bShortDisplay: A,
			backgroundType: p,
			imageClassName: g,
			allowCustomization: h,
			...C
		} = this.props;
		if (!a && (e || (r && o == 4))) {
			a = this.GetSourcesForAsset();
		}
		const _ =
			e?.optional_parent_app_id &&
			e.app_type == 8 &&
			o == 0 &&
			!this.is_custom_image &&
			this.state.bIsLoaded;
		const f = (0, c.A)(
			b.Container,
			p !== "transparent" && b.GreyBackground,
			{
				[b.PortraitImage]: o == 0,
				[b.LandscapeImage]: o == 3,
				[b.CustomImage]: this.is_custom_image,
				[b.Short]: this.props.bShortDisplay,
				[b.ShowDemoBanner]: _,
			},
			n,
		);
		const y = e?.display_name || s;
		const S = y?.length > 25;
		const B = h !== false && o != 4;
		return i.createElement(
			"div",
			{
				className: f,
			},
			B &&
				i.createElement("input", {
					type: "file",
					accept: ".jpg,.jpeg,.png",
					style: {
						display: "none",
					},
					name: "fileupload",
					ref: this.m_refFileInput,
					onClick: this.OnFileInputClick,
					onChange: this.OnFileInputChange,
				}),
			a?.length > 0 &&
				i.createElement(l.c, {
					...C,
					ref: this.m_refImage,
					className: (0, c.A)(
						b.Image,
						b.Visibility,
						this.state.bIsLoaded ? b.Visible : b.Hidden,
						this.props.suppressTransitions && b.NoTransitions,
						g,
					),
					rgSources: a,
					onIncrementalError: this.OnIncrementalError,
					onLoad: this.OnImageLoaded,
					onError: this.OnError,
					alt: e && e.display_name,
				}),
			y &&
				this.BDisplayTitle() &&
				i.createElement(
					"span",
					{
						className: (0, c.A)(b.Title, S && b.LongTitles),
					},
					y,
				),
			_ &&
				i.createElement(w.Gl, {
					className: b.DemoBanner,
					overview: e,
				}),
		);
	}
};
export function A(e, t) {
	const r = (0, s.Co)(e);
	const n = (0, S.Xe)(e);
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
(0, n.Cg)([m.oI], z.prototype, "OnIncrementalError", null);
(0, n.Cg)([m.oI], z.prototype, "OnImageLoaded", null);
(0, n.Cg)([m.oI], z.prototype, "OnError", null);
(0, n.Cg)([m.oI], z.prototype, "GetSourcesForAsset", null);
(0, n.Cg)([m.oI], z.prototype, "OnChangeArtwork", null);
(0, n.Cg)([m.oI], z.prototype, "OnFileInputChange", null);
z = (0, n.Cg)([a.PA], z);
