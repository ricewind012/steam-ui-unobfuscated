var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./51095.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require("./87071.js");
var l = o;
var c = require(/*webcrack:missing*/ "./72476.js");
var m = require(/*webcrack:missing*/ "./31958.js");
function u(e, t, r) {
	return c.TS.COMMUNITY_CDN_ASSET_URL + e + "/roomeffects/" + t + "/" + r;
}
class d extends i.Component {
	m_strSaleId;
	constructor(e) {
		super(e);
		this.m_strSaleId = this.props.sale;
	}
	getAsset(e) {
		return u(this.m_strSaleId, this.props.effect.name, e);
	}
}
function A(e, t) {
	(function (e) {
		const t = (0, i.useRef)({
			bSet: false,
		});
		if (!t.current.bSet) {
			t.current = {
				bSet: true,
				value: e(),
			};
		}
		t.current.value;
	})(() => setTimeout(e, t));
}
const p = ({ msDelay: e, children: t }) =>
	(function (e) {
		const [t, r] = (0, i.useState)(false);
		A(() => r(true), e);
		return t;
	})(e)
		? i.createElement(i.Fragment, null, t)
		: null;
class g extends i.Component {
	m_refContainer = i.createRef();
	m_rgFireworks = [];
	m_nCurrentDelay = 0;
	constructor(e) {
		super(e);
		this.state = {
			bReady: false,
		};
	}
	CreateFireworks(e) {
		this.m_nCurrentDelay = 0;
		this.AddCluster(e);
		this.m_nCurrentDelay += 200;
		this.RenderLong(e);
		this.m_nCurrentDelay += 200;
		this.AddCluster(e);
		this.m_nCurrentDelay += 600;
		this.AddCluster(e);
		this.m_nCurrentDelay += 200;
		this.RenderLong(e);
		this.m_nCurrentDelay += 200;
		this.RenderLong(e);
		this.m_nCurrentDelay += 200;
		this.RenderLong(e);
		this.AddCluster(e);
		this.RenderLong(e);
		this.m_nCurrentDelay += 200;
		this.AddCluster(e);
	}
	TestRender(e) {
		(0, m.Tg)(0, 70);
		(0, m.Tg)(0, 70);
		for (let t = 0; t < 1; t++) {
			this.m_rgFireworks.push({
				x: "20%",
				y: "20%",
				nHueRotation: 0,
				nDelay: this.m_nCurrentDelay,
				flScale: e,
				burst: h,
			});
			this.m_nCurrentDelay += 500;
		}
		this.m_rgFireworks.push({
			x: "0%",
			y: "0%",
			nHueRotation: 0,
			nDelay: this.m_nCurrentDelay,
			flScale: e,
			burst: C,
		});
		this.m_rgFireworks.push({
			x: "30%",
			y: "30%",
			nHueRotation: 0,
			nDelay: this.m_nCurrentDelay,
			flScale: e,
			burst: _,
		});
	}
	CalcHueRotation() {
		if (this.props.sale == "lny2020") {
			return 360 + (0, m.Tg)(-30, 10);
		} else {
			return (0, m.Tg)(0, 360);
		}
	}
	AddCluster(e) {
		let t = (0, m.Tg)(-5, 50);
		let r = (0, m.Tg)(-10, 50);
		let n = this.CalcHueRotation();
		this.m_rgFireworks.push({
			x: `${t}%`,
			y: `${r}%`,
			nHueRotation: n,
			nDelay: this.m_nCurrentDelay,
			flScale: e,
			burst: C,
		});
		let i = Math.random() * Math.PI * 2;
		const a = Math.floor(e * 64);
		const s = Math.floor(e * 60);
		const o = Math.floor(e * 10);
		let l = 0;
		for (let c = 0; c < 3; c++) {
			let m = `calc( ${t}% + ${a + Math.cos(i + l) * s}px )`;
			let u = `calc( ${r}% + ${a + (Math.sin(i + l) * s + o)}px )`;
			if (c < 2) {
				this.m_nCurrentDelay += 200;
			}
			n = this.CalcHueRotation();
			this.m_rgFireworks.push({
				x: m,
				y: u,
				nHueRotation: n,
				nDelay: this.m_nCurrentDelay,
				flScale: e,
				burst: _,
			});
			l += 2.09;
		}
	}
	RenderLong(e) {
		const t = (0, m.Tg)(20, 60);
		const r = (0, m.Tg)(-5, 50);
		const n = this.CalcHueRotation();
		this.m_rgFireworks.push({
			x: `${t}%`,
			y: `${r}%`,
			nHueRotation: n,
			nDelay: this.m_nCurrentDelay,
			flScale: e,
			burst: h,
		});
	}
	componentDidMount() {
		if (!this.m_refContainer.current || this.m_rgFireworks.length > 0) {
			return;
		}
		let e = this.m_refContainer.current;
		let t = e.offsetWidth;
		let r = e.offsetHeight;
		let n = (0, m.Fu)(t, 400, 1080, 0.5, 2);
		n = (0, m.OQ)(n, 0.5, 2);
		console.log(t, r, n);
		this.CreateFireworks(n);
		this.setState({
			bReady: true,
		});
	}
	render() {
		let e = [];
		if (this.state.bReady) {
			this.m_rgFireworks.forEach((t, r) => {
				let n = `${r}`;
				let a = {
					top: t.y,
					left: t.x,
					filter: `hue-rotate(${t.nHueRotation}deg)`,
				};
				e.push(
					i.createElement(t.burst, {
						key: n,
						style: a,
						msDelay: t.nDelay,
						scale: t.flScale,
						sale: this.props.sale,
					}),
				);
			});
		}
		return i.createElement(
			"div",
			{
				ref: this.m_refContainer,
				className: l.FireworkContainer,
			},
			e,
		);
	}
}
function h(e) {
	const t = u(e.sale, "fireworks", "long_sheet.png");
	let r = e.style;
	r.backgroundImage = `url(${t})`;
	r.width = 256;
	r.height = 256;
	r.animation = `${l.fireworkLongX} 0.2s steps(9) 10, ${l.fireworkLongY} 2.0s steps(10) forwards`;
	r.transformOrigin = "0 0";
	r.transform = `scale( ${e.scale} )`;
	return i.createElement(
		p,
		{
			msDelay: e.msDelay,
		},
		i.createElement("div", {
			style: e.style,
			className: l.FireworkPNG,
		}),
	);
}
function C(e) {
	const t = u(e.sale, "fireworks", "big_sheet.png");
	let r = e.style;
	r.backgroundImage = `url(${t})`;
	r.width = 256;
	r.height = 256;
	r.animation = `${l.fireworkBigX} 0.2s steps(9) 4, ${l.fireworkBigY} 0.8s steps(4) forwards`;
	r.transformOrigin = "0 0";
	r.transform = `scale( ${e.scale} )`;
	return i.createElement(
		p,
		{
			msDelay: e.msDelay,
		},
		i.createElement("div", {
			style: e.style,
			className: l.FireworkPNG,
		}),
	);
}
function _(e) {
	const t = u(e.sale, "fireworks", "small_sheet.png");
	let r = e.style;
	r.backgroundImage = `url(${t})`;
	r.width = 256;
	r.height = 256;
	r.animation = `${l.fireworkSmallX} 0.15s steps(10) 6, ${l.fireworkSmallY} 0.9s steps(6) forwards`;
	r.transformOrigin = "0 0";
	r.transform = `scale( ${e.scale / 2} )`;
	return i.createElement(
		p,
		{
			msDelay: e.msDelay,
		},
		i.createElement("div", {
			style: e.style,
			className: l.FireworkPNG,
		}),
	);
}
var f = require("./67060.js");
class b extends d {
	m_x;
	m_y;
	m_nRotate;
	m_splatRots;
	m_nPathAnimation;
	m_nKeyID;
	static sm_nUnique = 0;
	constructor(e) {
		super(e);
		this.m_x = m.Tg(0, 70) + "%";
		this.m_y = m.Tg(0, 70) + "%";
		this.m_nRotate = Math.floor(Math.random() * 90) - 45;
		this.m_splatRots = [
			Math.random() * 360,
			Math.random() * 360,
			Math.random() * 360,
		];
		this.m_nPathAnimation = m.Tg(1, 6);
		this.m_nKeyID = b.sm_nUnique++;
		this.m_strSaleId = "winter2019";
	}
	fragment(e, ...t) {
		let r = t.map((e) => l[e]);
		r.push(l.snowball_fragment);
		return i.createElement("img", {
			src: this.getAsset(e),
			className: r.join(" "),
		});
	}
	Snowball(e, t, ...r) {
		let n = e < 0 ? l.SnowballImageCW : l.SnowballImageCCW;
		if (e > -5 && e < 5) {
			n = "";
		}
		let a = r.map((e) => l[e]);
		a.push(l.snowball_fragment);
		return i.createElement(
			"div",
			{
				style: {
					display: "inline-block",
				},
				className: a.join(" "),
			},
			i.createElement("img", {
				style: {
					transform: "rotation( 360deg )",
				},
				className: `${l.SnowballImage} ${n}`,
				src: this.getAsset(t),
			}),
		);
	}
	residue() {
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				"div",
				{
					style: {
						transform: `rotate(${this.m_splatRots[0]}deg)`,
					},
				},
				this.fragment("splat1.png", "snowball-residue"),
			),
			i.createElement(
				"div",
				{
					style: {
						transform: `rotate(${this.m_splatRots[1]}deg)`,
					},
				},
				this.fragment("splat2.png", "snowball-residue"),
			),
			i.createElement(
				"div",
				{
					style: {
						transform: `rotate(${this.m_splatRots[2]}deg)`,
					},
				},
				this.fragment("splat3.png", "snowball-residue"),
			),
		);
	}
	render() {
		let e = `snowball-path-${this.m_nPathAnimation}`;
		let t = {
			animationName: l[e],
		};
		return i.createElement(
			i.Fragment,
			{
				key: `${this.m_nKeyID}`,
			},
			i.createElement(
				"div",
				{
					className: l["snowball-path"],
					style: t,
				},
				i.createElement(
					"div",
					{
						className: l["snowball-container"],
						style: {
							left: this.m_x,
							top: this.m_y,
							transform: `rotate( ${this.m_nRotate}deg )`,
						},
					},
					this.Snowball(this.m_nRotate, "snowball.png", "snowball"),
					this.fragment("slide-out-tl.png", "slide-out-tl"),
					this.fragment("slide-out-tr.png", "slide-out-tr"),
					this.fragment("slide-out-bottom.png", "slide-out-bottom"),
					this.residue(),
					this.fragment("snowball_1.png", "snowball-chunk", "snowball-chunk-1"),
					this.fragment("snowball_2.png", "snowball-chunk", "snowball-chunk-2"),
					this.fragment("snowball_3.png", "snowball-chunk", "snowball-chunk-3"),
					this.fragment("snowball_4.png", "snowball-chunk", "snowball-chunk-4"),
				),
			),
		);
	}
}
import { ShuffleArray } from "../../actual_src/utils/arrayutils.js";
function S(e) {
	const t = e.data;
	const r = u(e.sale, e.effect.name, `${t.strImage}.png`);
	let n = null;
	if (t.SOverlay) {
		const r = t.SOverlay
			? u(e.sale, e.effect.name, `${t.SOverlay.strImage}.png`)
			: null;
		const a = {
			animationDuration: `${t.SOverlay.nDuration}s`,
		};
		n = i.createElement("img", {
			src: r,
			className: l[t.SOverlay.strClass],
			style: a,
		});
	}
	let a = {
		animationDuration: `${t.nDuration}s`,
		animationName: l[t.strAnimation],
		marginLeft: `${t.nOffset}%`,
	};
	return i.createElement(
		"div",
		{
			style: a,
			className: l.balloons,
		},
		i.createElement("img", {
			src: r,
			style: {
				maxWidth: "100%",
				position: "absolute",
			},
		}),
		n,
	);
}
class w extends d {
	m_rgBalloons = [];
	m_rgImages;
	m_nNextImage = 0;
	constructor(e) {
		super(e);
		if (e.sale === "lny2020") {
			this.m_rgImages = ["orange", "peach", "yellow"];
		} else {
			this.m_rgImages = [
				"balloon_blue",
				"balloon_cyan",
				"balloon_green",
				"balloon_purple",
				"balloon_red",
				"balloon_yellow",
			];
		}
		ShuffleArray(this.m_rgImages);
		this.GenerateBalloons();
	}
	GetNextImage() {
		let e = this.m_rgImages[this.m_nNextImage % this.m_rgImages.length];
		this.m_nNextImage++;
		return e;
	}
	GenerateDuration() {
		return (
			parseFloat(l.balloonsDurationS) +
			parseFloat(l.balloonsDurationJitterS) * Math.random()
		);
	}
	GenerateBalloons() {
		let e = ["balloon_small_1", "balloon_small_2", "balloon_small_3"];
		let t = ["balloon_big_1", "balloon_big_2"];
		this.m_rgBalloons = [];
		for (let t of e) {
			let e = m.Tg(-10, 10);
			this.m_rgBalloons.push(this.GenerateSingleBalloon(t, e));
		}
		let r = [70, 20];
		ShuffleArray(r);
		let n = r[1] == 20;
		for (let e of t) {
			let t = m.Tg(-10, 10) + r.pop();
			this.m_rgBalloons.push(this.GenerateSingleBalloon(e, t));
		}
		let i = ["balloon_move_left", "balloon_move_right"][m.Tg(0, 1)];
		if (n) {
			i = "balloon_move_left";
		}
		let a = m.Tg(-10, 10);
		this.m_rgBalloons.push(this.GenerateSingleBalloon(i, a));
	}
	GenerateSingleBalloon(e, t) {
		const r = this.GetNextImage();
		let n = {
			strAnimation: e,
			strImage: r,
			nDuration: this.GenerateDuration(),
			nOffset: t,
		};
		if (this.props.sale == "lny2020") {
			n.SOverlay = {
				strImage: r + "-glow",
				strClass: "lantern_glow",
				nDuration: 1 + Math.random() * 4,
			};
		}
		return n;
	}
	render() {
		return i.createElement(
			i.Fragment,
			null,
			this.m_rgBalloons.map((e, t) =>
				i.createElement(S, {
					key: `${t}`,
					data: e,
					effect: this.props.effect,
					sale: this.m_strSaleId,
				}),
			),
		);
	}
}
var _B = require(/*webcrack:missing*/ "./90765.js");
class v {
	m_seed;
	constructor(e) {
		this.m_seed = e;
	}
	next() {
		const e = Math.sin(this.m_seed++) * 1000;
		return e - Math.floor(e);
	}
}
function I(e) {
	const t = new v(e);
	let r = t.next() * 0.8 + 0.5;
	const n = (t.next() + e) * 10 + 10 + "px";
	const a = {
		opacity: r,
		width: n,
		height: n,
		margin: t.next() * 30 + 15 + "px",
		filter: `hue-rotate(${t.next() * 90 - 30}deg) saturate(100%)`,
	};
	const s = 1 + Math.floor(t.next() * 5);
	const o = `${c.TS.COMMUNITY_CDN_ASSET_URL}winter2019/roomeffects/96px/flake_${s}.png`;
	return i.createElement("img", {
		style: a,
		src: o,
	});
}
const E = parseInt(l.balloonsDurationMaxMs);
const M = parseInt(l.snowballDurationMs);
function T(e, t) {
	return () => {
		const r =
			c.TS.COMMUNITY_CDN_ASSET_URL + t + "/roomeffects/96px/" + e + ".png";
		return i.createElement("img", {
			style: {
				width: "100%",
			},
			src: r,
		});
	};
}
function R(e, t, r, n) {
	return {
		timeout: r,
		renderButton: T(e, t),
		renderEffectIcon: T(e, t),
		buttonToken: "#ChatEntryButton_Send" + a.Xw(e),
		locToken: "#ChatRoom_RoomEffect" + a.Xw(e),
		render: n,
	};
}
function k(e, t, r) {
	return R(e, "winter2019", t, r);
}
export const B = {
	lny2020_lanterns: R("lny2020_lanterns", "lny2020", E, (e) =>
		i.createElement(w, {
			effect: e,
			sale: "lny2020",
		}),
	),
	lny2020_firework: R("lny2020_firework", "lny2020", 7000, () =>
		i.createElement(g, {
			sale: "lny2020",
		}),
	),
	lny2020_confetti: R("lny2020_confetti", "lny2020", f.nT, () =>
		i.createElement(f.NW, {
			eType: f.O4.LNY2020,
		}),
	),
	snowball: k("snowball", M, (e) =>
		i.createElement(b, {
			effect: e,
			sale: "winter2019",
		}),
	),
	balloons: k("balloons", E, (e) =>
		i.createElement(w, {
			effect: e,
			sale: "winter2019",
		}),
	),
	confetti: k("confetti", f.nT, () =>
		i.createElement(f.NW, {
			eType: f.O4.Default,
		}),
	),
	goldfetti: k("goldfetti", f.nT, () =>
		i.createElement(f.NW, {
			eType: f.O4.Gold,
		}),
	),
	firework: k("firework", 7000, () =>
		i.createElement(g, {
			sale: "winter2019",
		}),
	),
	snow: k("snow", 10000, function (e) {
		const t = [];
		const r = new v(e.timestamp);
		for (let n = 0; n < 150; n++) {
			const a = r.next();
			const s = {
				left: r.next() * 100 + "%",
				animationDuration: (1 - a) * 3 + 4 + "s",
				animationDelay: `${a + r.next() * 4}s`,
			};
			t.push(
				i.createElement(
					"div",
					{
						key: e.timestamp + "_" + n,
						style: s,
						className: (0, _B.A)(l.Snowflake, l["Snowflake-" + (n % 20)]),
					},
					I(a),
					I(a + 1),
				),
			);
		}
		return i.createElement(i.Fragment, null, " ", t, " ");
	}),
};
export let Y = class extends i.Component {
	render() {
		return i.createElement(
			"div",
			{
				className: l["animation-container"],
			},
			this.props.effectManager.m_rgRunningEffects.map((e) =>
				i.createElement(
					i.Fragment,
					{
						key: e.timestamp,
					},
					e.render(),
				),
			),
		);
	}
};
Y = (0, n.Cg)([s.PA], Y);
