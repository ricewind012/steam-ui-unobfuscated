var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./64608.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require("./96593.js");
var l = require("./78057.js");
var c = require("./97893.js");
var m = require("./34792.js");
var u = require("./5640.js");
var d = require("./34428.js");
import {
	LocalizationManager,
	Localize,
} from "../../actual_src/utils/localization.js";
var p = require(/*webcrack:missing*/ "./90765.js");
var g = require("./35488.js");
var h = require("./91486.js");
var C = require(/*webcrack:missing*/ "./98995.js");
var _ = require("./47060.js");
var f = require("./92031.js");
var b = require(/*webcrack:missing*/ "./72476.js");
var y = require(/*webcrack:missing*/ "./93960.js");
var S = require("./25527.js");
var w = S;
const B = false;
const v = (e) => {
	const {
		appid: t,
		rt_sample_time: r,
		network_bytes_per_second: n,
		disc_bytes_per_second: a,
	} = e.sample;
	const s = (0, o.Co)(t);
	const l = new Date(r * 1000);
	return i.createElement(
		C.t1,
		{
			className: w.DiskGraphToolTip,
		},
		B,
		s &&
			i.createElement(
				"div",
				{
					className: w.GraphToolTipIconAndName,
				},
				i.createElement(h.z, {
					className: w.GraphToolTipIcon,
					app: s,
					eAssetType: 4,
				}),
				i.createElement(
					"div",
					{
						className: w.GraphToolTipName,
					},
					s.display_name,
				),
			),
		i.createElement(
			"div",
			null,
			l.toLocaleTimeString(LocalizationManager.GetPreferredLocales(), {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
			}),
		),
		i.createElement(
			"div",
			null,
			(0, Localize)("#Downloads_Network_Tooltip", ZC(n)),
		),
		i.createElement(
			"div",
			null,
			(0, Localize)("#Downloads_Disk_Tooltip", ZC(a)),
		),
	);
};
let I = class extends i.Component {
	m_rgTestHistory;
	constructor(e) {
		let t;
		super(e);
		this.m_rgTestHistory = t;
	}
	render() {
		const e = c.hj.DownloadHistory;
		let t = e.peakNetworkBytesPerSecond;
		let r = e.peakDiskBytesPerSecond;
		let n =
			(e.historyItems.length == 0
				? 120
				: Math.round(
						e.historyItems[e.historyItems.length - 1].rt_sample_time,
					)) - 120;
		let a = [];
		let s = "";
		let o = true;
		let l = -1;
		let m = 0;
		for (let c = 0; c < e.historyItems.length; c++) {
			const u = c;
			let d = 0;
			let A = 0;
			let g = false;
			const h = e.historyItems[u].rt_sample_time;
			if (h > n && h > m) {
				d = e.historyItems[u].network_bytes_per_second;
				A = e.historyItems[u].disc_bytes_per_second;
				g = e.historyItems[u].is_upload;
				const _ = Math.round(e.historyItems[u].rt_sample_time);
				const f = t ? (d * 100) / t : 0;
				const b = {
					height: f,
				};
				const y = r ? _ - n : c;
				const S = Math.round((r ? 100 - (A * 100) / r : 100) * 10) / 10 + 1;
				const B = t ? _ - n - 0.25 : c;
				if (B >= 0 && B != l && (f > 0 || S <= 100)) {
					a.push(
						i.createElement(
							"g",
							{
								className: w.GraphBarWrapper,
								key: c,
							},
							f > 0 &&
								i.createElement("rect", {
									x: B,
									y: 100 - f,
									className: (0, p.A)(
										w.GraphBar,
										g ? w.GraphBarUpload : w.GraphBarDownload,
									),
									style: b,
								}),
							S <= 100 &&
								i.createElement("line", {
									className: w.DiskPoint,
									x1: y,
									y1: S,
									x2: y,
									y2: S,
								}),
							i.createElement(C.zs, {
								toolTipContent: i.createElement(v, {
									sample: e.historyItems[u],
									idx: u,
								}),
								x: B,
								y: -20,
								className: w.GraphBarEmpty,
							}),
						),
					);
				}
				l = B;
				if (y > 0) {
					if (o) {
						s += "M0,101L" + y + ",101";
						o = false;
					}
					s += "L" + y + "," + S;
				}
				m = h;
			}
		}
		return i.createElement(
			"div",
			{
				className: w.DownloadGraphWrapper,
			},
			i.createElement(
				"div",
				{
					className: w.DownloadGraph,
				},
				i.createElement(
					"div",
					{
						className: w.DiskGraph,
					},
					i.createElement(
						"svg",
						{
							version: "1.1",
							id: "Layer_1",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 -20 120.5 120",
							preserveAspectRatio: "none",
						},
						a,
						i.createElement("path", {
							className: w.GraphLine,
							d: s,
						}),
					),
				),
				i.createElement("div", {
					className: w.Gradient,
				}),
			),
		);
	}
};
export function mr(e) {
	const t = (0, c.zM)();
	return i.createElement(
		"div",
		{
			className: w.DownloadGraphStatsWrapper,
		},
		i.createElement(
			"div",
			{
				className: w.DownloadGraphStats,
			},
			i.createElement(
				"div",
				{
					className: w.SingleStat,
				},
				i.createElement(
					M,
					{
						className: w.Network,
						text: (0, Localize)("#Downloads_Legend_Network"),
					},
					i.createElement(g.BarGraph, null),
				),
				i.createElement(
					"div",
					{
						className: (0, p.A)(w.Stat, w.CurrentNetworkUsage),
					},
					i.createElement(
						"div",
						{
							className: w.Figure,
						},
						ZC(t.update_network_bytes_per_second),
					),
				),
			),
			i.createElement(
				"div",
				{
					className: w.SingleStat,
				},
				i.createElement(
					M,
					{
						className: w.Network,
						text: (0, Localize)("#Downloads_Stats_PeakRate"),
					},
					i.createElement(g.BarGraph, null),
				),
				i.createElement(
					"div",
					{
						className: (0, p.A)(w.Stat, w.CurrentNetworkUsage),
					},
					i.createElement(
						"div",
						{
							className: w.Figure,
						},
						ZC(t.update_peak_network_bytes_per_second),
					),
				),
			),
			i.createElement(
				"div",
				{
					className: w.SingleStat,
				},
				i.createElement(M, {
					className: w.Disk,
					text: (0, Localize)("#Downloads_Legend_Disk"),
				}),
				i.createElement(
					"div",
					{
						className: (0, p.A)(w.Stat, w.DiskUsage),
					},
					i.createElement(
						"div",
						{
							className: w.Figure,
						},
						ZC(t.update_disc_bytes_per_second),
					),
				),
			),
		),
	);
}
function M(e) {
	const { className: t, text: r, children: n } = e;
	return i.createElement(
		"div",
		{
			className: w.LegendRow,
		},
		i.createElement(
			"div",
			{
				className: (0, p.A)(w.LegendBox, t),
			},
			n,
		),
		i.createElement(
			"div",
			{
				className: w.LegendText,
			},
			r,
		),
	);
}
export function ZC(e) {
	const [t] = m.rV.GetClientSetting("download_rate_bits_per_s");
	return (0, d.dm)(e * (t ? 8 : 1), {
		nDigitsAfterDecimal: 1,
		bUseBinary1K: false,
		bValueIsInBytes: !t,
		bValueIsRate: true,
	});
}
I = (0, n.Cg)([s.PA], I);
let R = class extends i.Component {
	m_hAppDetails = null;
	constructor(e) {
		super(e);
		this.state = {
			bLogoFailed: false,
		};
		this.RegisterForAppDetails();
	}
	componentDidUpdate(e) {
		if (e.appid != this.props.appid) {
			this.RegisterForAppDetails();
		}
	}
	componentWillUnmount() {
		this.UnregisterForAppDetails();
	}
	RegisterForAppDetails() {
		this.UnregisterForAppDetails();
		if (this.props.appid != f.sc) {
			this.m_hAppDetails = l.H.RegisterForAppData(this.props.appid);
		}
	}
	UnregisterForAppDetails() {
		if (this.m_hAppDetails) {
			this.m_hAppDetails.unregister();
			this.m_hAppDetails = null;
		}
	}
	OnLogoFailed() {
		this.setState({
			bLogoFailed: true,
		});
	}
	render() {
		const { appid: e, nameElement: t, ...r } = this.props;
		if (e != f.sc && l.H.GetAppDetails(e) && !u.jR.BIsAppBlocked(e)) {
			const n = o.tw.GetAppOverviewByAppID(e);
			let { rgHeroImages: a, bHasHeroImage: s } = l.H.GetHeroImages(n);
			let { rgLogoImages: c, logoPosition: m } = l.H.GetLogoImages(n);
			return i.createElement(
				"div",
				{
					className: (0, p.A)(w.HeroAndLogo, !s && w.NoHeroImage),
					...r,
				},
				i.createElement(
					"div",
					{
						className: w.HeroContainer,
					},
					s &&
						i.createElement(h.z, {
							className: w.HeaderImage,
							eAssetType: 1,
							appid: e,
							rgSources: a,
						}),
					!s &&
						i.createElement(h.z, {
							className: w.HeaderImage,
							eAssetType: 3,
							app: n,
							bShortDisplay: true,
						}),
					i.createElement("div", {
						className: w.HeroGradient,
					}),
				),
				s &&
					c.length > 0 &&
					!this.state.bLogoFailed &&
					i.createElement(h.z, {
						className: w.LogoShadow,
						eAssetType: 2,
						appid: e,
						rgSources: c,
						backgroundType: "transparent",
					}),
				s &&
					c.length > 0 &&
					!this.state.bLogoFailed &&
					i.createElement(h.z, {
						className: w.Logo,
						eAssetType: 2,
						appid: e,
						rgSources: c,
						backgroundType: "transparent",
						onError: this.OnLogoFailed,
					}),
				(this.state.bLogoFailed || !s || !(c.length > 0)) &&
					i.createElement(
						"div",
						{
							className: w.NameContainer,
						},
						t,
					),
			);
		}
		return i.createElement(
			"div",
			{
				className: (0, p.A)(w.HeroAndLogo, w.Empty),
			},
			i.createElement("div", {
				className: w.HeroGradient,
			}),
		);
	}
};
export function q(e) {
	const { className: t } = e;
	const r = (0, b.Qn)();
	const n = (0, u.oA)();
	if (r) {
		return null;
	} else {
		return i.createElement(
			C.he,
			{
				className: (0, p.A)(w.SettingsButton, t),
				toolTipContent: !n && (0, Localize)("#Downloads_OpenSettings_Tooltip"),
			},
			i.createElement(
				a.$n,
				{
					className: w.Button,
					onClick: _.eo,
					disabled: n,
				},
				i.createElement(g.Settings, null),
			),
		);
	}
}
export function b4(e) {
	const {
		className: t,
		appidTopOfQueue: r,
		appidOverride: n,
		nameElement: a,
		children: s,
		...o
	} = e;
	const l = (0, c.zM)();
	const m = n || l.update_appid || r;
	return i.createElement(
		"div",
		{
			className: (0, p.A)(w.GraphAndStats, t),
			...o,
		},
		i.createElement(R, {
			appid: m,
			nameElement: a,
		}),
		i.createElement(I, null),
		s,
	);
}
(0, n.Cg)([y.o], R.prototype, "OnLogoFailed", null);
R = (0, n.Cg)([s.PA], R);
