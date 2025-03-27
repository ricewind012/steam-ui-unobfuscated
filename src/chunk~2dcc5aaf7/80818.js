import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { fm, h5 } from "./89193.js";
import s, { PA } from "./41230.js";
import o from "./64608.js";
import "./28346.js";
import l from "./52451.js";
import c, { A as A_1 } from "./90765.js";
import m from "./72476.js";
import u, { lX } from "./31084.js";
import d from "./88750.js";
import A from "./78057.js";
import p from "./58254.js";
import g from "./12767.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import C from "./65016.js";
import _ from "./79769.js";
import f from "./4527.js";
import y from "./3235.js";
import w, { i_ as i_1 } from "./43397.js";
import { l as l_1 } from "./47742.js";
import v from "./83665.js";
import x from "./96000.js";
import U from "./34792.js";
import W from "./88244.js";
import H from "./98995.js";
import j from "./10606.js";
import { pg } from "./13869.js";
import Z from "./69164.js";
import Y from "./46621.js";
import { L as L_1 } from "./736.js";
import J, { $B } from "./87935.js";
import $ from "./2326.js";
import { br } from "./18869.js";
import te from "./71769.js";
var b = f;
var S = y;
const I = {
	exit: b.FullscreenExitStart,
	exitActive: b.FullscreenExitActive,
	exitDone: b.FullscreenExitDone,
	enter: b.FullscreenEnterStart,
	enterDone: b.FullscreenEnterDone,
	enterActive: b.FullscreenEnterActive,
};
const E = i_1(S["duration-app-launch"]);
const M = {
	pinnedPosition: "BottomLeft",
	nWidthPct: 50,
	nHeightPct: 50,
};
const TContext = i.createContext({
	bFullscreen: false,
});
class R extends i.Component {
	m_refTopCapsule = i.createRef();
	constructor(e) {
		super(e);
		this.state = {
			logoPosition: undefined,
		};
	}
	componentDidUpdate(e) {
		if (e.appid != this.props.appid || e.editMode != this.props.editMode) {
			this.setState({
				logoPosition: undefined,
			});
		}
	}
	get background_src() {
		return (
			this.m_refTopCapsule.current &&
			this.m_refTopCapsule.current.background_src
		);
	}
	get logo_src() {
		return (
			this.m_refTopCapsule.current && this.m_refTopCapsule.current.logo_src
		);
	}
	GetLogoPosition() {
		return (
			this.state.logoPosition ||
			this.props.logoPosition ||
			this.props.logoPosition ||
			M
		);
	}
	SetPinnedPosition(e) {
		this.setState(
			{
				logoPosition: {
					...this.GetLogoPosition(),
					pinnedPosition: e,
				},
			},
			this.PostPositionChangeCallback,
		);
	}
	SetDimensions(e, t) {
		this.setState(
			{
				logoPosition: {
					...this.GetLogoPosition(),
					nWidthPct: e,
					nHeightPct: t,
				},
			},
			this.PostPositionChangeCallback,
		);
	}
	OnPositionChanged(e) {
		this.SetDimensions(e.nWidthPct, e.nHeightPct);
	}
	PostPositionChangeCallback() {
		if (this.props.fnOnPositionChanged) {
			this.props.fnOnPositionChanged(this.GetLogoPosition());
		}
	}
	render() {
		if (!this.props.editMode) {
			return i.createElement(
				TContext.Provider,
				{
					value: {
						bFullscreen: this.props.bFullscreen,
					},
				},
				i.createElement(k, {
					ref: this.m_refTopCapsule,
					...this.props,
				}),
			);
		}
		const { children, logoPosition, editMode, ...n } = this.props;
		const a = this.GetLogoPosition();
		return i.createElement(
			TContext.Provider,
			{
				value: {
					bFullscreen: this.props.bFullscreen,
				},
			},
			i.createElement(
				k,
				{
					ref: this.m_refTopCapsule,
					...n,
					editMode: true,
					logoPosition: a,
					fnOnPositionChanged: this.OnPositionChanged,
				},
				i.createElement("div", {
					className: `${b.PinBox} ${b.BottomLeft}`,
					onClick: () => {
						return this.SetPinnedPosition("BottomLeft");
					},
					title: "Pin to Bottom Left",
				}),
				i.createElement("div", {
					className: `${b.PinBox} ${b.UpperCenter}`,
					onClick: () => {
						return this.SetPinnedPosition("UpperCenter");
					},
					title: "Pin to Top Center",
				}),
				i.createElement("div", {
					className: `${b.PinBox} ${b.CenterCenter}`,
					onClick: () => {
						return this.SetPinnedPosition("CenterCenter");
					},
					title: "Pin to Center",
				}),
				i.createElement("div", {
					className: `${b.PinBox} ${b.BottomCenter}`,
					onClick: () => {
						return this.SetPinnedPosition("BottomCenter");
					},
					title: "Pin to Bottom Center",
				}),
				children,
			),
		);
	}
}
Cg([l.oI], R.prototype, "SetDimensions", null);
Cg([l.oI], R.prototype, "OnPositionChanged", null);
Cg([l.oI], R.prototype, "PostPositionChangeCallback", null);
let k = class extends i.Component {
	m_refBackgroundImage = i.createRef();
	m_refLogoImage = i.createRef();
	constructor(e) {
		super(e);
		AssertMsg(
			!e.editMode || e.rgLogoImages.length <= 1,
			"Can't use multiple logo images in edit mode",
		);
		this.state = {
			bFallbackHeader: e.rgHeaderImages.length == 1,
			bHasHeaderImage: e.rgHeaderImages.length > 0,
			bHasLogoImage: e.rgLogoImages.length > 0,
			bLogoLoaded: false,
		};
	}
	componentDidUpdate(e) {
		if (
			JSON.stringify(e.rgHeaderImages) !=
				JSON.stringify(this.props.rgHeaderImages) ||
			JSON.stringify(e.rgLogoImages) !=
				JSON.stringify(this.props.rgLogoImages) ||
			JSON.stringify(e.rgLogoImages) !=
				JSON.stringify(this.props.rgLogoImages) ||
			JSON.stringify(e.rgBlurImages) != JSON.stringify(this.props.rgBlurImages)
		) {
			this.setState({
				bFallbackHeader: this.props.rgHeaderImages.length == 1,
				bHasHeaderImage: this.props.rgHeaderImages.length > 0,
				bHasLogoImage: this.props.rgLogoImages.length > 0,
				bLogoLoaded: false,
			});
		}
	}
	OnHeaderError() {
		this.setState({
			bHasHeaderImage: false,
		});
		if (this.props.fnOnLoaded) {
			this.props.fnOnLoaded();
		}
	}
	OnIncrementalLogoError(e, t, r) {
		if (this.props.fnReportLogoCacheMiss) {
			this.props.fnReportLogoCacheMiss(this.props.appid, t);
		}
		if (this.props.fnOnLoaded) {
			this.props.fnOnLoaded();
		}
	}
	OnLogoError() {
		this.setState(
			{
				bHasLogoImage: false,
			},
			() => {
				if (this.props.fnOnLogoLoaded) {
					this.props.fnOnLogoLoaded();
				}
			},
		);
	}
	OnLogoLoad() {
		this.setState(
			{
				bLogoLoaded: true,
			},
			() => {
				if (this.props.fnOnLogoLoaded) {
					this.props.fnOnLogoLoaded();
				}
			},
		);
	}
	OnLoaded() {
		if (this.props.fnOnLoaded) {
			this.props.fnOnLoaded();
		}
	}
	get background_src() {
		return (
			this.state.bHasHeaderImage &&
			this.m_refBackgroundImage.current &&
			this.m_refBackgroundImage.current.src
		);
	}
	get logo_src() {
		return (
			this.state.bLogoLoaded &&
			this.m_refLogoImage.current &&
			this.m_refLogoImage.current.src
		);
	}
	render() {
		const {
			rgLogoImages,
			editMode,
			logoPosition,
			className,
			classNameNoLogo,
			fnOnPositionChanged,
			height,
		} = this.props;
		const { bFallbackHeader, bHasLogoImage } = this.state;
		const u = A_1(
			b.TopCapsule,
			className,
			!this.state.bHasHeaderImage && b.NoArt,
			(!this.props.hasHeroImage || bFallbackHeader) && b.FallbackArt,
			!bHasLogoImage && classNameNoLogo,
		);
		const d = {
			"--header-height": height == null || height + "px",
		};
		return i.createElement(
			v.M,
			{
				timeout: E,
				appear: true,
				in: this.props.bFullscreen,
				classNames: I,
			},
			(n) => {
				return i.createElement(
					"div",
					{
						ref: n,
						className: u,
						style: d,
					},
					i.createElement(D, {
						ref: this.m_refBackgroundImage,
						bLowPerfMode: this.props.bLowPerfMode,
						appid: this.props.appid,
						rgHeaderImages: this.props.rgHeaderImages,
						rgBlurImages: this.props.rgBlurImages,
						onReportHeroImageMiss: this.props.fnReportHeroImageMiss,
						onError: this.OnHeaderError,
						onLoad: this.OnLoaded,
					}),
					bHasLogoImage &&
						i.createElement(
							N,
							{
								key: rgLogoImages[0],
								strLogoImageURL: rgLogoImages[0],
								editMode: editMode,
								logoPosition: logoPosition || M,
								fnOnPositionChanged: editMode && fnOnPositionChanged,
								fullscreen: this.props.bFullscreen,
							},
							i.createElement(g.c, {
								ref: this.m_refLogoImage,
								className: A_1(b.TitleLogo, this.state.bLogoLoaded && b.Loaded),
								rgSources: rgLogoImages,
								onLoad: this.OnLogoLoad,
								onIncrementalError: this.OnIncrementalLogoError,
								onError: this.OnLogoError,
							}),
						),
					this.props.children,
					i.createElement("div", {
						className: b.TopGradient,
					}),
				);
			},
		);
	}
};
Cg([l.oI], k.prototype, "OnHeaderError", null);
Cg([l.oI], k.prototype, "OnIncrementalLogoError", null);
Cg([l.oI], k.prototype, "OnLogoError", null);
Cg([l.oI], k.prototype, "OnLogoLoad", null);
Cg([l.oI], k.prototype, "OnLoaded", null);
k = Cg([s.PA], k);
class D extends i.Component {
	m_refBackgroundImage = i.createRef();
	m_refCanvasBlurImage;
	constructor(e) {
		super(e);
		this.state = {
			bBackgroundLoaded: false,
			nBlurImageIndex: 0,
			bUseCanvasBlur: !this.HasBlurImages(),
		};
	}
	componentDidMount() {
		if (!this.HasHeaderImages() && this.props.onLoad) {
			this.props.onLoad();
		}
	}
	componentDidUpdate(e) {
		if (
			e.appid != this.props.appid ||
			JSON.stringify(e.rgHeaderImages) !=
				JSON.stringify(this.props.rgHeaderImages) ||
			JSON.stringify(e.rgHeaderImages) !=
				JSON.stringify(this.props.rgHeaderImages) ||
			JSON.stringify(e.rgBlurImages) !=
				JSON.stringify(this.props.rgBlurImages) ||
			JSON.stringify(e.rgHeaderImages) !=
				JSON.stringify(this.props.rgHeaderImages) ||
			JSON.stringify(e.rgBlurImages) !=
				JSON.stringify(this.props.rgBlurImages) ||
			this.props.bLowPerfMode != e.bLowPerfMode
		) {
			this.setState({
				bBackgroundLoaded: false,
				nBlurImageIndex: 0,
				bUseCanvasBlur: !this.HasBlurImages(),
			});
			if (!this.HasHeaderImages() && this.props.onLoad) {
				this.props.onLoad();
			}
		}
	}
	get src() {
		return (
			this.m_refBackgroundImage.current && this.m_refBackgroundImage.current.src
		);
	}
	OnIncrementalError(e, t, r) {
		if (this.props.onReportHeroImageMiss) {
			this.props.onReportHeroImageMiss(this.props.appid, t);
		}
		if (this.HasBlurImages()) {
			this.setState({
				nBlurImageIndex: this.state.nBlurImageIndex + 1,
			});
		}
	}
	OnHeaderLoad() {
		if (this.props.onLoad) {
			this.props.onLoad();
		}
		this.m_refCanvasBlurImage =
			this.m_refBackgroundImage.current.imgRef.current;
		if (
			!this.HasBlurImages() ||
			!this.props.rgBlurImages[this.state.nBlurImageIndex]
		) {
			this.setState({
				bUseCanvasBlur: true,
			});
		}
		this.setState({
			bBackgroundLoaded: true,
		});
	}
	OnBlurImageFailed() {
		this.setState({
			bUseCanvasBlur: true,
		});
	}
	HasHeaderImages() {
		let e = this.props.rgHeaderImages;
		return e && e.length > 0;
	}
	HasBlurImages() {
		let e = this.props.rgBlurImages;
		return e && e.length > 0;
	}
	render() {
		let e = null;
		e = i.createElement(
			i.Fragment,
			null,
			!this.state.bUseCanvasBlur &&
				this.state.bBackgroundLoaded &&
				this.props.rgBlurImages[this.state.nBlurImageIndex] &&
				i.createElement("img", {
					src: this.props.rgBlurImages[this.state.nBlurImageIndex],
					className: A_1(b.ImgSrc, b.ImgBlur, b.ImgBlurBackdrop),
					onError: this.OnBlurImageFailed,
				}),
			this.state.bUseCanvasBlur &&
				this.state.bBackgroundLoaded &&
				!this.props.bLowPerfMode &&
				i.createElement(C.m, {
					className: A_1(b.ImgSrc, b.ImgBlur, b.ImgBlurBackdrop),
					elementRef: this.m_refCanvasBlurImage,
					updateRate: 0,
					width: 192,
					height: 62,
					reductionFactor: 10,
					blurAmount: 3,
				}),
		);
		return i.createElement(TContext.Consumer, null, (t) => {
			return i.createElement(
				v.M,
				{
					timeout: E,
					appear: true,
					in: t.bFullscreen,
					classNames: I,
				},
				(t) => {
					return i.createElement(
						"div",
						{
							ref: t,
							className: A_1(b.HeaderBackgroundImage, b.Glassy),
						},
						!this.state.bUseCanvasBlur &&
							this.state.bBackgroundLoaded &&
							this.props.rgBlurImages[this.state.nBlurImageIndex] &&
							i.createElement("img", {
								src: this.props.rgBlurImages[this.state.nBlurImageIndex],
								className: A_1(b.ImgSrc, b.ImgBlur),
								onError: this.OnBlurImageFailed,
							}),
						this.state.bUseCanvasBlur &&
							this.state.bBackgroundLoaded &&
							!this.props.bLowPerfMode &&
							i.createElement(C.m, {
								className: A_1(b.ImgSrc, b.ImgBlur),
								elementRef: this.m_refCanvasBlurImage,
								updateRate: 0,
								width: 192,
								height: 62,
								reductionFactor: 10,
								blurAmount: 3,
							}),
						i.createElement(
							"div",
							{
								className: b.ImgContainer,
							},
							this.HasHeaderImages() &&
								i.createElement(g.c, {
									ref: this.m_refBackgroundImage,
									rgSources: this.props.rgHeaderImages,
									className: b.ImgSrc,
									onLoad: this.OnHeaderLoad,
									onIncrementalError: this.OnIncrementalError,
									onError: this.props.onError,
								}),
						),
						e,
					);
				},
			);
		});
	}
}
function N(e) {
	const {
		logoPosition,
		strLogoImageURL,
		children,
		fnOnPositionChanged,
		fullscreen,
	} = e;
	const { nBottomPct, nTopPct, nLeftPct, nRightPct } = F(
		logoPosition.pinnedPosition,
		logoPosition.nWidthPct,
		logoPosition.nHeightPct,
	);
	i.useContext(TContext);
	const d = {
		left: `${nLeftPct}%`,
		top: `${nTopPct}%`,
		width: `${logoPosition.nWidthPct}%`,
		height: `${logoPosition.nHeightPct}%`,
	};
	const A = A_1(b.BoxSizer, b[logoPosition.pinnedPosition]);
	return i.createElement(
		"div",
		{
			className: b.BoxSizerContainer,
		},
		i.createElement(
			"div",
			{
				className: b.BoxSizerValidRegion,
			},
			!e.editMode &&
				i.createElement(
					"div",
					{
						className: A,
						style: d,
					},
					i.createElement(
						v.M,
						{
							timeout: E,
							appear: true,
							in: fullscreen,
							classNames: I,
						},
						(e) => {
							return i.createElement(
								"div",
								{
									ref: e,
									className: b.TitleImageContainer,
								},
								children,
							);
						},
					),
				),
			e.editMode &&
				i.createElement(
					O,
					{
						id: strLogoImageURL,
						pinType: logoPosition.pinnedPosition,
						index: 0,
						widthPct: logoPosition.nWidthPct,
						heightPct: logoPosition.nHeightPct,
						fnOnPositionChanged: fnOnPositionChanged,
					},
					children,
				),
		),
	);
}
function F(e, t, r) {
	let n;
	let i;
	let a;
	let s;
	switch (e) {
		case "BottomLeft": {
			n = 0;
			i = 100 - r;
			a = 0;
			s = 100 - t;
			break;
		}
		case "UpperLeft": {
			n = 100 - r;
			i = 0;
			a = 0;
			s = 100 - t;
			break;
		}
		case "CenterCenter": {
			n = (100 - r) / 2;
			i = (100 - r) / 2;
			a = (100 - t) / 2;
			s = (100 - t) / 2;
			break;
		}
		case "UpperCenter": {
			n = 100 - r;
			i = 0;
			a = (100 - t) / 2;
			s = (100 - t) / 2;
			break;
		}
		case "BottomCenter": {
			n = 0;
			i = 100 - r;
			a = (100 - t) / 2;
			s = (100 - t) / 2;
		}
	}
	return {
		nBottomPct: n,
		nTopPct: i,
		nLeftPct: a,
		nRightPct: s,
	};
}
var G;
Cg([l.oI], D.prototype, "OnIncrementalError", null);
Cg([l.oI], D.prototype, "OnHeaderLoad", null);
Cg([l.oI], D.prototype, "OnBlurImageFailed", null);
(function (e) {
	e.topleft = "Topleft";
	e.top = "Top";
	e.topright = "TopRight";
	e.left = "Left";
	e.middle = "Middle";
	e.right = "Right";
	e.bottomleft = "BottomLeft";
	e.bottom = "Bottom";
	e.bottomright = "BottomRight";
})((G ||= {}));
class O extends i.Component {
	m_rectLinkRegion;
	m_elLinkRegionBox;
	m_nLocalOffsetXPct;
	m_nLocalOffsetYPct;
	m_fnMouseUp = null;
	m_fnMouseMove = null;
	m_listeners = new _.Ji();
	m_pinType;
	constructor(e) {
		super(e);
		this.state = {};
	}
	componentWillUnmount() {
		this.m_listeners.Unregister();
	}
	componentDidUpdate() {
		if (this.props.pinType != this.state.pinType) {
			this.m_pinType = this.props.pinType;
			this.setState({
				pinType: this.props.pinType,
			});
			this.UpdateBoxPosition();
		}
	}
	static getDerivedStateFromProps(e, t) {
		const { pinType, widthPct, heightPct, id } = e;
		if (t && t.id == id) {
			return null;
		}
		const { nBottomPct, nTopPct, nLeftPct, nRightPct } = F(
			pinType,
			widthPct,
			heightPct,
		);
		return {
			id: id,
			curBottomPosPct: nBottomPct,
			curTopPosPct: nTopPct,
			curLeftPosPct: nLeftPct,
			curRightPosPct: nRightPct,
			curWidthPct: widthPct,
			curHeightPct: heightPct,
			EdgeDown: null,
			pinType: pinType,
		};
	}
	LinkRegionBoxRef(e) {
		this.m_elLinkRegionBox = e;
	}
	OnMouseDown(e, t) {
		this.m_fnMouseUp = (e) => {
			this.OnMouseUp(e, t);
		};
		this.m_fnMouseMove = (e) => {
			this.OnMouseMove(e, t);
		};
		this.setState({
			EdgeDown: t,
		});
		this.m_rectLinkRegion =
			this.m_elLinkRegionBox.parentElement.getBoundingClientRect();
		this.m_nLocalOffsetXPct =
			((e.clientX - this.m_rectLinkRegion.left) /
				(this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
				100 -
			this.state.curLeftPosPct;
		this.m_nLocalOffsetYPct =
			((e.clientY - this.m_rectLinkRegion.top) /
				(this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
				100 -
			this.state.curTopPosPct;
		this.m_listeners.AddEventListener(
			this.m_elLinkRegionBox.ownerDocument.defaultView,
			"mousemove",
			this.m_fnMouseMove,
		);
		this.m_listeners.AddEventListener(
			this.m_elLinkRegionBox.ownerDocument.defaultView,
			"mouseup",
			this.m_fnMouseUp,
		);
		e.preventDefault();
		e.stopPropagation();
	}
	UpdateBoxPosition() {
		const { nBottomPct, nTopPct, nLeftPct, nRightPct } = F(
			this.m_pinType,
			this.state.curWidthPct,
			this.state.curHeightPct,
		);
		this.setState({
			curBottomPosPct: nBottomPct,
			curTopPosPct: nTopPct,
			curLeftPosPct: nLeftPct,
			curRightPosPct: nRightPct,
		});
	}
	OnMouseMove(e, t) {
		if (this.state.EdgeDown !== undefined) {
			if (e.shiftKey) {
				this.m_fnMouseUp();
			}
			switch (t) {
				case G.left: {
					this.setState({
						curLeftPosPct: this.CalcLeftEdge(e.clientX),
					});
					this.CheckLeftEdge();
					break;
				}
				case G.right: {
					this.setState({
						curRightPosPct: this.CalcRightEdge(e.clientX),
					});
					this.CheckRightEdge();
					break;
				}
				case G.top: {
					this.setState({
						curTopPosPct: this.CalcTopEdge(e.clientY),
					});
					this.CheckTopEdge();
					break;
				}
				case G.bottom: {
					this.setState({
						curBottomPosPct: this.CalcBottomEdge(e.clientY),
					});
					this.CheckBottomEdge();
					break;
				}
				case G.topleft: {
					this.setState({
						curTopPosPct: this.CalcTopEdge(e.clientY),
					});
					this.setState({
						curLeftPosPct: this.CalcLeftEdge(e.clientX),
					});
					this.CheckTopEdge();
					this.CheckLeftEdge();
					break;
				}
				case G.topright: {
					this.setState({
						curTopPosPct: this.CalcTopEdge(e.clientY),
					});
					this.setState({
						curRightPosPct: this.CalcRightEdge(e.clientX),
					});
					this.CheckTopEdge();
					this.CheckRightEdge();
					break;
				}
				case G.bottomleft: {
					this.setState({
						curBottomPosPct: this.CalcBottomEdge(e.clientY),
					});
					this.setState({
						curLeftPosPct: this.CalcLeftEdge(e.clientX),
					});
					this.CheckBottomEdge();
					this.CheckLeftEdge();
					break;
				}
				case G.bottomright: {
					this.setState({
						curBottomPosPct: this.CalcBottomEdge(e.clientY),
					});
					this.setState({
						curRightPosPct: this.CalcRightEdge(e.clientX),
					});
					this.CheckBottomEdge();
					this.CheckRightEdge();
					break;
				}
				case G.middle: {
					this.setState({
						curRightPosPct: this.CalcRightEdge(e.clientX),
						curBottomPosPct: this.CalcBottomEdge(e.clientY),
					});
					if (this.state.pinType != "CenterCenter") {
						this.setState({
							curTopPosPct: this.CalcTopEdge(e.clientY),
						});
					}
					if (
						this.state.pinType != "CenterCenter" &&
						this.state.pinType != "BottomCenter" &&
						this.state.pinType != "UpperCenter"
					) {
						this.setState({
							curLeftPosPct: this.CalcLeftEdge(e.clientX),
						});
					}
					this.CheckTopEdge();
					this.CheckBottomEdge();
					this.CheckLeftEdge();
					this.CheckRightEdge();
				}
			}
			if (this.state.curTopPosPct > 98) {
				this.setState({
					curTopPosPct: 98,
				});
			} else if (this.state.curBottomPosPct > 98) {
				this.setState({
					curBottomPosPct: 98,
				});
			}
			if (this.state.curLeftPosPct > 99) {
				this.setState({
					curLeftPosPct: 99,
				});
			} else if (this.state.curRightPosPct > 99) {
				this.setState({
					curRightPosPct: 99,
				});
			}
			if (this.state.curRightPosPct < 0) {
				this.setState({
					curRightPosPct: 0,
				});
			} else if (this.state.curLeftPosPct < 0) {
				this.setState({
					curLeftPosPct: 0,
				});
			}
			if (this.state.curBottomPosPct < 0) {
				this.setState({
					curBottomPosPct: 0,
				});
			} else if (this.state.curTopPosPct < 0) {
				this.setState({
					curTopPosPct: 0,
				});
			}
			e.preventDefault();
			e.stopPropagation();
		}
	}
	CheckBottomEdge() {
		if (this.state.curBottomPosPct > 98 - this.state.curTopPosPct) {
			this.setState({
				curBottomPosPct: 98 - this.state.curTopPosPct,
			});
		}
	}
	CheckRightEdge() {
		if (this.state.curRightPosPct > 99 - this.state.curLeftPosPct) {
			this.setState({
				curRightPosPct: 99 - this.state.curLeftPosPct,
			});
		}
	}
	CheckTopEdge() {
		if (this.state.curTopPosPct > 98 - this.state.curBottomPosPct) {
			this.setState({
				curTopPosPct: 98 - this.state.curBottomPosPct,
			});
		}
	}
	CheckLeftEdge() {
		if (this.state.curLeftPosPct > 99 - this.state.curRightPosPct) {
			this.setState({
				curLeftPosPct: 99 - this.state.curRightPosPct,
			});
		}
	}
	CalcLeftEdge(e) {
		let t =
			((e - this.m_rectLinkRegion.left) /
				(this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
				100 -
			this.m_nLocalOffsetXPct;
		if (
			this.props.pinType == "UpperLeft" ||
			this.props.pinType == "BottomLeft"
		) {
			return 0;
		}
		if (
			this.props.pinType == "CenterCenter" ||
			this.props.pinType == "BottomCenter" ||
			this.props.pinType == "BottomCenter" ||
			this.props.pinType == "UpperCenter"
		) {
			let e = Math.min(Math.max(t, 0), 45);
			this.setState({
				curRightPosPct: e,
			});
			return e;
		}
		return t;
	}
	CalcRightEdge(e) {
		let t =
			100 -
			(((e - this.m_rectLinkRegion.left) /
				(this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
				100 +
				(this.state.curWidthPct - this.m_nLocalOffsetXPct));
		if (
			this.props.pinType == "CenterCenter" ||
			this.props.pinType == "BottomCenter" ||
			this.props.pinType == "BottomCenter" ||
			this.props.pinType == "UpperCenter"
		) {
			let e = Math.min(Math.max(t, 0), 45);
			this.setState({
				curLeftPosPct: e,
			});
			return e;
		}
		return t;
	}
	CalcTopEdge(e) {
		let t =
			((e - this.m_rectLinkRegion.top) /
				(this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
				100 -
			this.m_nLocalOffsetYPct;
		if (
			this.props.pinType == "UpperCenter" ||
			this.props.pinType == "UpperLeft"
		) {
			return 0;
		}
		if (this.props.pinType == "CenterCenter") {
			let e = Math.min(Math.max(t, 0), 45);
			this.setState({
				curBottomPosPct: e,
			});
			return e;
		}
		return t;
	}
	CalcBottomEdge(e) {
		let t =
			100 -
			(((e - this.m_rectLinkRegion.top) /
				(this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
				100 +
				(this.state.curHeightPct - this.m_nLocalOffsetYPct));
		if (
			this.props.pinType == "BottomLeft" ||
			this.props.pinType == "BottomCenter"
		) {
			return 0;
		}
		if (this.props.pinType == "CenterCenter") {
			let e = Math.min(Math.max(t, 0), 45);
			this.setState({
				curTopPosPct: e,
			});
			return e;
		}
		return t;
	}
	OnMouseUp(e, t) {
		this.setState(
			{
				curWidthPct: 100 - this.state.curRightPosPct - this.state.curLeftPosPct,
				curHeightPct:
					100 - this.state.curBottomPosPct - this.state.curTopPosPct,
			},
			this.OnResizeComplete,
		);
		this.setState({
			EdgeDown: undefined,
		});
		this.m_listeners.Unregister();
	}
	OnResizeComplete() {
		if (this.props.fnOnPositionChanged) {
			this.props.fnOnPositionChanged({
				pinnedPosition: this.state.pinType,
				nWidthPct: this.state.curWidthPct,
				nHeightPct: this.state.curHeightPct,
			});
		}
	}
	render() {
		let e = {
			left: this.state.curLeftPosPct + "%",
			top: this.state.curTopPosPct + "%",
			right: this.state.curRightPosPct + "%",
			bottom: this.state.curBottomPosPct + "%",
		};
		let t = A_1(
			b.BoxSizerDragBox,
			this.state.EdgeDown && A_1(b.EdgeDown, b[this.state.EdgeDown]),
			b[this.props.pinType],
		);
		return i.createElement(
			"div",
			{
				className: t,
				style: e,
				ref: this.LinkRegionBoxRef,
				draggable: false,
			},
			i.createElement(
				"div",
				{
					className: b.BoxSizerGridBox,
				},
				i.createElement("div", {
					className: `${b.BoxSizerEdge} ${b.TopLeft}`,
					onMouseDown: (e) => {
						this.OnMouseDown(e, G.topleft);
					},
					draggable: false,
				}),
				i.createElement("div", {
					className: `${b.BoxSizerEdge} ${b.Top}`,
					onMouseDown: (e) => {
						this.OnMouseDown(e, G.top);
					},
				}),
				i.createElement("div", {
					className: `${b.BoxSizerEdge} ${b.TopRight}`,
					onMouseDown: (e) => {
						this.OnMouseDown(e, G.topright);
					},
					draggable: false,
				}),
				i.createElement("div", {
					className: `${b.BoxSizerEdge} ${b.Left}`,
					onMouseDown: (e) => {
						this.OnMouseDown(e, G.left);
					},
					draggable: false,
				}),
				i.createElement(
					"div",
					{
						className: `${b.BoxSizerEdge} ${b.Middle}`,
						onMouseDown: (e) => {
							this.OnMouseDown(e, G.middle);
						},
						draggable: false,
					},
					i.createElement(
						"div",
						{
							className: b.TitleImageContainer,
						},
						this.props.children,
					),
				),
				i.createElement("div", {
					className: `${b.BoxSizerEdge} ${b.Right}`,
					onMouseDown: (e) => {
						this.OnMouseDown(e, G.right);
					},
					draggable: false,
				}),
				i.createElement("div", {
					className: `${b.BoxSizerEdge} ${b.BottomLeft}`,
					onMouseDown: (e) => {
						this.OnMouseDown(e, G.bottomleft);
					},
					draggable: false,
				}),
				i.createElement("div", {
					className: `${b.BoxSizerEdge} ${b.Bottom}`,
					onMouseDown: (e) => {
						this.OnMouseDown(e, G.bottom);
					},
					draggable: false,
				}),
				i.createElement("div", {
					className: `${b.BoxSizerEdge} ${b.BottomRight}`,
					onMouseDown: (e) => {
						this.OnMouseDown(e, G.bottomright);
					},
					draggable: false,
				}),
			),
		);
	}
}
Cg([l.oI], O.prototype, "LinkRegionBoxRef", null);
Cg([l.oI], O.prototype, "OnMouseDown", null);
Cg([l.oI], O.prototype, "UpdateBoxPosition", null);
Cg([l.oI], O.prototype, "OnMouseMove", null);
Cg([l.oI], O.prototype, "CheckBottomEdge", null);
Cg([l.oI], O.prototype, "CheckRightEdge", null);
Cg([l.oI], O.prototype, "CheckTopEdge", null);
Cg([l.oI], O.prototype, "CheckLeftEdge", null);
Cg([l.oI], O.prototype, "CalcLeftEdge", null);
Cg([l.oI], O.prototype, "CalcRightEdge", null);
Cg([l.oI], O.prototype, "CalcTopEdge", null);
Cg([l.oI], O.prototype, "CalcBottomEdge", null);
Cg([l.oI], O.prototype, "OnMouseUp", null);
Cg([l.oI], O.prototype, "OnResizeComplete", null);
const P = (e) => {
	const { title, className } = e;
	let n = 26;
	if (title.length > 8) {
		n = Math.max(n - (title.length - 5) / 2, 5.8);
	}
	const [a, s] = l_1();
	return i.createElement(
		"svg",
		{
			className: A_1(b.SVGTitle, className),
			viewBox: "0 0 300 14",
		},
		i.createElement(
			"defs",
			null,
			i.createElement(
				"linearGradient",
				{
					id: a,
					x1: "0",
					x2: "0",
					y1: "0",
					y2: "100%",
					gradientUnits: "userSpaceOnUse",
				},
				i.createElement("stop", {
					stopColor: "#fff",
					offset: "0%",
				}),
				i.createElement("stop", {
					stopColor: "#fff",
					offset: "20%",
				}),
				i.createElement("stop", {
					stopColor: "#fff",
					offset: "40%",
				}),
				i.createElement("stop", {
					stopColor: "#eee",
					offset: "60%",
				}),
				i.createElement("stop", {
					stopColor: "#ddd",
					offset: "80%",
				}),
				i.createElement("stop", {
					stopColor: "#ccc",
					offset: "100%",
				}),
			),
		),
		i.createElement(
			"text",
			{
				x: "-1",
				y: 14,
				fontSize: n,
				textAnchor: "bottom",
				fontWeight: "200",
				fill: s,
			},
			title,
		),
	);
};
function L(e) {
	const { title, children } = e;
	const n = i.useContext(TContext);
	const a = i.useRef(null);
	return i.createElement(
		p.A,
		{
			nodeRef: a,
			timeout: E,
			appear: true,
			in: n.bFullscreen,
			classNames: I,
		},
		i.createElement(
			"div",
			{
				ref: a,
				className: A_1(b.TitleSection, title ? b.NoLogo : ""),
			},
			i.createElement(
				"div",
				{
					className: b.TextNameSpace,
				},
				!!title &&
					i.createElement(P, {
						title: title,
					}),
			),
			i.createElement(
				"div",
				{
					className: b.Features,
				},
				children,
			),
		),
	);
}
var z;
var K = Y;
const re = PA(function (e) {
	let { collection, app } = e;
	const n = br();
	return i.createElement(
		d.tz,
		null,
		i.createElement(
			d.kt,
			{
				onSelected: () => {
					return n.Collection(collection.id);
				},
			},
			(0, Localize)("#GameDetails_CollectionContext_GoTo"),
		),
		i.createElement(
			d.kt,
			{
				onSelected: () => {
					return collection.AsDragDropCollection().RemoveApps([app]);
				},
			},
			(0, Localize)("#GameDetails_CollectionContext_Remove"),
		),
	);
});
let ne = class extends i.Component {
	render() {
		return i.createElement(
			d.tz,
			null,
			i.createElement(
				d.kt,
				{
					onSelected: () => {
						return x.md.SetAppsAsHidden([this.props.app.appid], false);
					},
				},
				(0, Localize)("#GameAction_RemoveFromHidden"),
			),
		);
	}
};
ne = Cg([s.PA], ne);
export let xZ = class extends i.Component {
	static {
		z = this;
	}
	static contextType = m.QO;
	m_refFileInputHero = i.createRef();
	m_refFileInputLogo = i.createRef();
	m_refTopCapsule = i.createRef();
	m_disposer;
	constructor(e) {
		super(e);
		this.state = {
			bEditMode: false,
			bLogoFailedToLoad: false,
			bCustomLogoLoaded: false,
			customLogoPosition: undefined,
			...z.getDerivedStateFromProps(e),
		};
	}
	componentDidMount() {
		if (this.props.overview.BHasCustomImages()) {
			this.FetchCustomLogoPosition();
		}
	}
	componentDidUpdate(e) {
		if (e.overview.appid != this.props.overview.appid) {
			this.setState(
				{
					bEditMode: false,
					bLogoFailedToLoad: false,
					customLogoPosition: undefined,
				},
				() => {
					if (this.props.overview.BHasCustomImages()) {
						this.FetchCustomLogoPosition();
					}
				},
			);
		}
	}
	componentWillUnmount() {
		if (this.m_disposer) {
			this.m_disposer();
		}
	}
	static getDerivedStateFromProps(e) {
		return z.GetAllImageInfo(e.overview);
	}
	static GetAllImageInfo(e) {
		let { rgHeroImages, bHasHeroImage } = A.H.GetHeroImages(e);
		let { rgLogoImages, logoPosition } = A.H.GetLogoImages(e);
		return {
			rgHeroImages: rgHeroImages,
			bHasHeroImage: bHasHeroImage,
			rgLogoImages: rgLogoImages,
			logoPosition: logoPosition,
			rgHeaderBlurImages: A.H.GetHeroBlurImages(e),
		};
	}
	async FetchCustomLogoPosition() {
		if (this.m_disposer) {
			this.m_disposer();
		}
		const e = this.props.overview;
		this.m_disposer = fm(() => {
			let t = A.H.GetCustomLogoPosition(e);
			h5(() => {
				if (t) {
					this.setState({
						customLogoPosition: t,
					});
				} else {
					this.setState({
						customLogoPosition: undefined,
					});
				}
			});
		});
	}
	GetAppsCollectionList(e) {
		let t = [];
		if (x.md.BIsHidden(e.appid)) {
			t.push(
				i.createElement(
					H.he,
					{
						nDelayShowMS: 10,
						toolTipContent: (0, Localize)("#GameList_Category_Hidden_Tooltip"),
						className: A_1(K.InCollection, K.InHidden),
						key: e.appid,
						onClick: (t) => {
							return this.ShowHiddenContextMenu(t, e);
						},
						onContextMenu: (t) => {
							this.ShowHiddenContextMenu(t, e);
							t.preventDefault();
							t.stopPropagation();
						},
					},
					(0, Localize)("#GameList_Category_Hidden"),
				),
			);
			return t;
		}
		if (x.md.userCollections) {
			for (const r of x.md.userCollections) {
				if (!x.md.BIsSystemCollectionId(r.id)) {
					if (r.apps.has(e.appid)) {
						t.push(
							i.createElement(le, {
								key: r.id,
								app: e,
								collection: r,
							}),
						);
					}
				}
			}
		}
		return t;
	}
	ShowHiddenContextMenu(e, t) {
		lX(
			i.createElement(ne, {
				app: t,
			}),
			e.currentTarget,
			{
				bOverlapHorizontal: true,
				bOverlapVertical: false,
			},
		);
	}
	ShowContextMenu(e) {
		const t =
			!this.state.bLogoFailedToLoad && this.state.rgLogoImages.length > 0;
		if (!this.context?.IN_GAMEPADUI) {
			lX(
				i.createElement(
					d.tz,
					null,
					i.createElement(
						d.kt,
						{
							onSelected: this.OnChangeHero,
						},
						(0, Localize)(
							this.is_hero_custom_image
								? "#CustomArt_ClearCustomBackground"
								: "#CustomArt_SetCustomBackground",
						),
					),
					i.createElement(
						d.kt,
						{
							onSelected: this.OnChangeLogo,
						},
						(0, Localize)(
							this.is_logo_custom_image
								? "#CustomArt_ClearCustomLogo"
								: "#CustomArt_SetCustomLogo",
						),
					),
					t &&
						!this.state.bEditMode &&
						i.createElement(
							d.kt,
							{
								onSelected: this.OnToggleEditMode,
							},
							(0, Localize)("#CustomArt_EditLogoPosition"),
						),
					t &&
						this.state.customLogoPosition &&
						this.state.logoPosition &&
						i.createElement(
							d.kt,
							{
								onSelected: this.OnResetLogoPosition,
							},
							(0, Localize)("#CustomArt_ResetLogoPosition"),
						),
				),
				e,
			);
		}
	}
	get is_hero_custom_image() {
		return (
			this.m_refTopCapsule.current &&
			$B(this.m_refTopCapsule.current.background_src, J.Uq.Library.CustomImages)
		);
	}
	get is_logo_custom_image() {
		return (
			this.m_refTopCapsule.current &&
			$B(this.m_refTopCapsule.current.logo_src, J.Uq.Library.CustomImages)
		);
	}
	OnChangeArtwork(e, t, r) {
		if (e) {
			SteamClient.Apps.ClearCustomArtworkForApp(this.props.overview.appid, r);
		} else {
			t.current.click();
		}
	}
	OnChangeHero(e) {
		this.OnChangeArtwork(this.is_hero_custom_image, this.m_refFileInputHero, 1);
	}
	OnChangeLogo(e) {
		this.OnChangeArtwork(this.is_logo_custom_image, this.m_refFileInputLogo, 2);
	}
	OnToggleEditMode(e) {
		if (this.state.bEditMode) {
			console.log("Saving", this.state.customLogoPosition);
			A.H.SaveCustomLogoPosition(
				this.props.overview,
				this.state.customLogoPosition,
			);
		}
		this.setState({
			bEditMode: !this.state.bEditMode,
		});
	}
	OnResetLogoPosition(e) {
		A.H.ClearCustomLogoPosition(this.props.overview);
		this.setState({
			bEditMode: false,
			customLogoPosition: undefined,
		});
	}
	OnFileInputClick(e) {
		e.stopPropagation();
	}
	OnLogoLoaded() {
		if (
			this.m_refTopCapsule.current &&
			!this.m_refTopCapsule.current.logo_src
		) {
			this.setState({
				bLogoFailedToLoad: true,
			});
		} else {
			this.setState({
				bLogoFailedToLoad: false,
				bCustomLogoLoaded: this.is_logo_custom_image,
			});
		}
	}
	OnFileInputChange(e, t) {
		const r = GetOwningWindowForEvent(e);
		const e_target = e.target;
		const a = e_target.files[0];
		const s = a.type.match(/image\/(.+)/);
		let o = s && s[1];
		if (o == "jpeg") {
			o = "jpg";
		}
		if (o != "jpg" && o != "png") {
			pg(
				i.createElement(j.KG, {
					strTitle: (0, Localize)("#CustomArt_ErrorTitle"),
					strDescription: (0, Localize)("#CustomArt_BadFileType"),
				}),
				r,
				{
					strTitle: (0, Localize)("#CustomArt_ErrorTitle"),
				},
			);
			return;
		}
		let l = new FileReader();
		l.onload = () => {
			let e = l.result.toString();
			e = e.slice(e.indexOf("base64,") + 7);
			SteamClient.Apps.SetCustomArtworkForApp(
				this.props.overview.appid,
				e,
				o,
				t,
			)
				.then(() => {
					e_target.value = null;
				})
				.catch((e) => {
					console.log("Set artwork failed", e);
					pg(
						i.createElement(j.KG, {
							strTitle: (0, Localize)("#CustomArt_ErrorTitle"),
							strDescription: (0, Localize)("#CustomArt_UnknownError"),
						}),
						r,
						{
							strTitle: (0, Localize)("#CustomArt_ErrorTitle"),
						},
					);
					e_target.value = null;
				});
		};
		l.readAsDataURL(a);
	}
	OnHeroFileInputChange(e) {
		this.OnFileInputChange(e, 1);
	}
	OnLogoFileInputChange(e) {
		this.OnFileInputChange(e, 2);
	}
	OnLogoPositionChange(e) {
		this.setState({
			customLogoPosition: e,
		});
	}
	render() {
		const { overview, fullscreen = false } = this.props;
		const {
			rgHeroImages,
			bHasHeroImage,
			rgLogoImages,
			logoPosition,
			rgHeaderBlurImages,
			customLogoPosition,
		} = this.state;
		const m = !this.state.bLogoFailedToLoad && rgLogoImages.length > 0;
		const [u] = U.rV.GetClientSetting("library_low_perf_mode");
		z.GetAllImageInfo(this.props.overview);
		const d = this.context?.IN_GAMEPADUI || W.o.rightPanelWidth / 3;
		return i.createElement(
			"div",
			{
				className: A_1(this.props.className, K.Container),
				onContextMenu: this.ShowContextMenu,
			},
			i.createElement("input", {
				type: "file",
				accept: ".jpg,.jpeg,.png",
				style: {
					display: "none",
				},
				name: "fileuploadhero",
				ref: this.m_refFileInputHero,
				onClick: this.OnFileInputClick,
				onChange: this.OnHeroFileInputChange,
			}),
			i.createElement("input", {
				type: "file",
				accept: ".jpg,.jpeg,.png",
				style: {
					display: "none",
				},
				name: "fileuploadlogo",
				ref: this.m_refFileInputLogo,
				onClick: this.OnFileInputClick,
				onChange: this.OnLogoFileInputChange,
			}),
			i.createElement(
				R,
				{
					bFullscreen: fullscreen,
					height: d,
					editMode: this.state.bEditMode,
					ref: this.m_refTopCapsule,
					bLowPerfMode: u,
					fnOnLoaded: this.props.fnOnLoaded,
					fnOnLogoLoaded: this.OnLogoLoaded,
					fnReportLogoCacheMiss: ae,
					fnReportHeroImageMiss: se,
					appid: this.props.overview.appid,
					hasHeroImage: bHasHeroImage,
					rgHeaderImages: rgHeroImages,
					rgBlurImages: rgHeaderBlurImages,
					rgLogoImages: rgLogoImages,
					classNameNoLogo: !m && K.NoLogoImage,
					logoPosition: customLogoPosition || logoPosition,
					fnOnPositionChanged: this.OnLogoPositionChange,
				},
				i.createElement(ce, {
					overview: overview,
					haslogo: m,
					editMode: this.state.bEditMode,
					onExitEditMode: () => {
						this.OnToggleEditMode(undefined);
					},
					gamepadUI: this.context?.IN_GAMEPADUI,
				}),
				!this.state.bEditMode &&
					!this.context?.IN_GAMEPADUI &&
					!fullscreen &&
					i.createElement(
						Z.Z,
						{
							"flow-children": "row",
							className: K.HeaderFeatures,
						},
						this.GetAppsCollectionList(overview),
					),
				!this.state.bEditMode &&
					this.context?.IN_GAMEPADUI &&
					!fullscreen &&
					i.createElement(
						"div",
						{
							className: K.HeaderFriendsInGameBadge,
						},
						i.createElement($.n8, {
							appid: overview.appid,
						}),
					),
				!this.state.bEditMode &&
					!fullscreen &&
					i.createElement(Gl, {
						overview: overview,
					}),
			),
		);
	}
};
function ae(e, t) {
	if (e && L_1("Apps") && $B(t, J.Uq.Library.Assets)) {
		SteamClient.Apps.ReportLibraryAssetCacheMiss(e, 2);
	}
}
function se(e, t) {
	if (e && L_1("Apps") && $B(t, J.Uq.Library.Assets)) {
		SteamClient.Apps.ReportLibraryAssetCacheMiss(e, 1);
	}
}
export function Gl(e) {
	const { overview, className } = e;
	if (overview.optional_parent_app_id) {
		if (overview.app_type != 8) {
			return null;
		} else {
			return i.createElement(
				"div",
				{
					className: K.DemoBannerWrapper,
				},
				i.createElement(
					"div",
					{
						className: A_1(K.DemoBanner, className),
					},
					i.createElement(
						"div",
						{
							className: K.Text,
						},
						(0, Localize)("#Demo_Banner"),
					),
				),
			);
		}
	} else {
		return null;
	}
}
function le(e) {
	const { app, collection } = e;
	const n = br();
	const a = i.useCallback(
		(e) => {
			lX(
				i.createElement(re, {
					collection: collection,
					app: app,
				}),
				e.currentTarget,
				{
					bOverlapHorizontal: true,
					bOverlapVertical: false,
				},
			);
			e.preventDefault();
			e.stopPropagation();
		},
		[app, collection],
	);
	return i.createElement(
		H.he,
		{
			bNavStop: true,
			direction: "left",
			nDelayShowMS: 10,
			toolTipContent: (0, Localize)("#GameList_View_ThisCollection"),
			onClick: () => {
				return n.Collection(collection.id);
			},
			onContextMenu: a,
			className: K.InCollection,
		},
		collection.displayName,
	);
}
Cg([l.oI], xZ.prototype, "FetchCustomLogoPosition", null);
Cg([l.oI], xZ.prototype, "ShowHiddenContextMenu", null);
Cg([l.oI], xZ.prototype, "ShowContextMenu", null);
Cg([l.oI], xZ.prototype, "OnChangeHero", null);
Cg([l.oI], xZ.prototype, "OnChangeLogo", null);
Cg([l.oI], xZ.prototype, "OnToggleEditMode", null);
Cg([l.oI], xZ.prototype, "OnResetLogoPosition", null);
Cg([l.oI], xZ.prototype, "OnLogoLoaded", null);
Cg([l.oI], xZ.prototype, "OnFileInputChange", null);
Cg([l.oI], xZ.prototype, "OnHeroFileInputChange", null);
Cg([l.oI], xZ.prototype, "OnLogoFileInputChange", null);
Cg([l.oI], xZ.prototype, "OnLogoPositionChange", null);
xZ = z = Cg([s.PA], xZ);
class ce extends i.Component {
	render() {
		const { haslogo, overview, editMode, gamepadUI } = this.props;
		return i.createElement(
			L,
			{
				title: haslogo || overview.display_name,
			},
			i.createElement(
				"div",
				{
					className: K.Column,
				},
				!editMode &&
					i.createElement(te.jt, {
						overview: overview,
					}),
				!editMode && false,
			),
			editMode &&
				i.createElement(
					i.Fragment,
					null,
					i.createElement(
						o.jn,
						{
							className: K.ExitEditModeButton,
							onClick: this.props.onExitEditMode,
						},
						(0, Localize)("#CustomArt_DoneEditingLogo"),
					),
				),
		);
	}
}
