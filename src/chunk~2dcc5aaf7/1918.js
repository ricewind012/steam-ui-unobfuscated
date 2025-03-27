import { ShuffleArray } from "../../actual_src/utils/arrayutils.js";
import n, { Cg } from "./34629.js";
import i, { useRef, useState } from "./63696.js";
import a from "./51095.js";
import s from "./41230.js";
import o from "./87071.js";
import c from "./72476.js";
import m, { Tg, Fu, OQ } from "./31958.js";
import f from "./67060.js";
import { A as A_1 } from "./90765.js";
const l = o;
function u(e, t, r) {
	return `${c.TS.COMMUNITY_CDN_ASSET_URL + e}/roomeffects/${t}/${r}`;
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
	((e) => {
		const TRef = useRef({
			bSet: false,
		});
		if (!TRef.current.bSet) {
			TRef.current = {
				bSet: true,
				value: e(),
			};
		}
		TRef.current.value;
	})(() => setTimeout(e, t));
}
const P = ({ msDelay, children }) =>
	((e) => {
		const [t, setT] = useState(false);
		A(() => setT(true), e);
		return t;
	})(msDelay) ? (
		<>{children}</>
	) : null;
class G extends i.Component {
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
		Tg(0, 70);
		Tg(0, 70);
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
			return 360 + Tg(-30, 10);
		} else {
			return Tg(0, 360);
		}
	}
	AddCluster(e) {
		let t = Tg(-5, 50);
		let r = Tg(-10, 50);
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
		const t = Tg(20, 60);
		const r = Tg(-5, 50);
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

		let { offsetWidth, offsetHeight } = e;

		let n = Fu(offsetWidth, 400, 1080, 0.5, 2);
		n = OQ(n, 0.5, 2);
		console.log(offsetWidth, offsetHeight, n);
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
					<t.burst
						key={n}
						style={a}
						msDelay={t.nDelay}
						scale={t.flScale}
						sale={this.props.sale}
					/>,
				);
			});
		}
		return (
			<div ref={this.m_refContainer} className={l.FireworkContainer}>
				{e}
			</div>
		);
	}
}
function h(e) {
	const t = u(e.sale, "fireworks", "long_sheet.png");
	let e_style = e.style;
	e_style.backgroundImage = `url(${t})`;
	e_style.width = 256;
	e_style.height = 256;
	e_style.animation = `${l.fireworkLongX} 0.2s steps(9) 10, ${l.fireworkLongY} 2.0s steps(10) forwards`;
	e_style.transformOrigin = "0 0";
	e_style.transform = `scale( ${e.scale} )`;
	return (
		<P msDelay={e.msDelay}>
			<div style={e.style} className={l.FireworkPNG} />
		</P>
	);
}
function C(e) {
	const t = u(e.sale, "fireworks", "big_sheet.png");
	let e_style = e.style;
	e_style.backgroundImage = `url(${t})`;
	e_style.width = 256;
	e_style.height = 256;
	e_style.animation = `${l.fireworkBigX} 0.2s steps(9) 4, ${l.fireworkBigY} 0.8s steps(4) forwards`;
	e_style.transformOrigin = "0 0";
	e_style.transform = `scale( ${e.scale} )`;
	return (
		<P msDelay={e.msDelay}>
			<div style={e.style} className={l.FireworkPNG} />
		</P>
	);
}
function _(e) {
	const t = u(e.sale, "fireworks", "small_sheet.png");
	let e_style = e.style;
	e_style.backgroundImage = `url(${t})`;
	e_style.width = 256;
	e_style.height = 256;
	e_style.animation = `${l.fireworkSmallX} 0.15s steps(10) 6, ${l.fireworkSmallY} 0.9s steps(6) forwards`;
	e_style.transformOrigin = "0 0";
	e_style.transform = `scale( ${e.scale / 2} )`;
	return (
		<P msDelay={e.msDelay}>
			<div style={e.style} className={l.FireworkPNG} />
		</P>
	);
}
class B_1 extends d {
	m_x;
	m_y;
	m_nRotate;
	m_splatRots;
	m_nPathAnimation;
	m_nKeyID;
	static sm_nUnique = 0;
	constructor(e) {
		super(e);
		this.m_x = `${m.Tg(0, 70)}%`;
		this.m_y = `${m.Tg(0, 70)}%`;
		this.m_nRotate = Math.floor(Math.random() * 90) - 45;
		this.m_splatRots = [
			Math.random() * 360,
			Math.random() * 360,
			Math.random() * 360,
		];
		this.m_nPathAnimation = m.Tg(1, 6);
		this.m_nKeyID = B_1.sm_nUnique++;
		this.m_strSaleId = "winter2019";
	}
	fragment(e, ...t) {
		let r = t.map((e) => l[e]);
		r.push(l.snowball_fragment);
		return <img src={this.getAsset(e)} className={r.join(" ")} />;
	}
	Snowball(e, t, ...r) {
		let n = e < 0 ? l.SnowballImageCW : l.SnowballImageCCW;
		if (e > -5 && e < 5) {
			n = "";
		}
		let a = r.map((e) => l[e]);
		a.push(l.snowball_fragment);
		return (
			<div
				style={{
					display: "inline-block",
				}}
				className={a.join(" ")}
			>
				<img
					style={{
						transform: "rotation( 360deg )",
					}}
					className={`${l.SnowballImage} ${n}`}
					src={this.getAsset(t)}
				/>
			</div>
		);
	}
	residue() {
		return (
			<>
				<div
					style={{
						transform: `rotate(${this.m_splatRots[0]}deg)`,
					}}
				>
					{this.fragment("splat1.png", "snowball-residue")}
				</div>
				<div
					style={{
						transform: `rotate(${this.m_splatRots[1]}deg)`,
					}}
				>
					{this.fragment("splat2.png", "snowball-residue")}
				</div>
				<div
					style={{
						transform: `rotate(${this.m_splatRots[2]}deg)`,
					}}
				>
					{this.fragment("splat3.png", "snowball-residue")}
				</div>
			</>
		);
	}
	render() {
		let e = `snowball-path-${this.m_nPathAnimation}`;
		let t = {
			animationName: l[e],
		};
		return (
			<i.Fragment key={`${this.m_nKeyID}`}>
				<div className={l["snowball-path"]} style={t}>
					<div
						className={l["snowball-container"]}
						style={{
							left: this.m_x,
							top: this.m_y,
							transform: `rotate( ${this.m_nRotate}deg )`,
						}}
					>
						{this.Snowball(this.m_nRotate, "snowball.png", "snowball")}
						{this.fragment("slide-out-tl.png", "slide-out-tl")}
						{this.fragment("slide-out-tr.png", "slide-out-tr")}
						{this.fragment("slide-out-bottom.png", "slide-out-bottom")}
						{this.residue()}
						{this.fragment(
							"snowball_1.png",
							"snowball-chunk",
							"snowball-chunk-1",
						)}
						{this.fragment(
							"snowball_2.png",
							"snowball-chunk",
							"snowball-chunk-2",
						)}
						{this.fragment(
							"snowball_3.png",
							"snowball-chunk",
							"snowball-chunk-3",
						)}
						{this.fragment(
							"snowball_4.png",
							"snowball-chunk",
							"snowball-chunk-4",
						)}
					</div>
				</div>
			</i.Fragment>
		);
	}
}
function S(e) {
	const e_data = e.data;
	const r = u(e.sale, e.effect.name, `${e_data.strImage}.png`);
	let n = null;
	if (e_data.SOverlay) {
		const r = e_data.SOverlay
			? u(e.sale, e.effect.name, `${e_data.SOverlay.strImage}.png`)
			: null;
		const a = {
			animationDuration: `${e_data.SOverlay.nDuration}s`,
		};
		n = <img src={r} className={l[e_data.SOverlay.strClass]} style={a} />;
	}
	let a = {
		animationDuration: `${e_data.nDuration}s`,
		animationName: l[e_data.strAnimation],
		marginLeft: `${e_data.nOffset}%`,
	};
	return (
		<div style={a} className={l.balloons}>
			<img
				src={r}
				style={{
					maxWidth: "100%",
					position: "absolute",
				}}
			/>
			{n}
		</div>
	);
}
class W extends d {
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
				strImage: `${r}-glow`,
				strClass: "lantern_glow",
				nDuration: 1 + Math.random() * 4,
			};
		}
		return n;
	}
	render() {
		return (
			<>
				{this.m_rgBalloons.map((e, t) => (
					<S
						key={`${t}`}
						data={e}
						effect={this.props.effect}
						sale={this.m_strSaleId}
					/>
				))}
			</>
		);
	}
}
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
	const n = `${(t.next() + e) * 10 + 10}px`;
	const a = {
		opacity: r,
		width: n,
		height: n,
		margin: `${t.next() * 30 + 15}px`,
		filter: `hue-rotate(${t.next() * 90 - 30}deg) saturate(100%)`,
	};
	const s = 1 + Math.floor(t.next() * 5);
	const o = `${c.TS.COMMUNITY_CDN_ASSET_URL}winter2019/roomeffects/96px/flake_${s}.png`;
	return <img style={a} src={o} />;
}
const E = parseInt(l.balloonsDurationMaxMs);
const M = parseInt(l.snowballDurationMs);
function T(e, t) {
	return () => {
		const r = `${c.TS.COMMUNITY_CDN_ASSET_URL + t}/roomeffects/96px/${e}.png`;
		return (
			<img
				style={{
					width: "100%",
				}}
				src={r}
			/>
		);
	};
}
function R(e, t, r, n) {
	return {
		timeout: r,
		renderButton: T(e, t),
		renderEffectIcon: T(e, t),
		buttonToken: `#ChatEntryButton_Send${a.Xw(e)}`,
		locToken: `#ChatRoom_RoomEffect${a.Xw(e)}`,
		render: n,
	};
}
function k(e, t, r) {
	return R(e, "winter2019", t, r);
}
export const B = {
	lny2020_lanterns: R("lny2020_lanterns", "lny2020", E, (e) => (
		<W effect={e} sale="lny2020" />
	)),
	lny2020_firework: R("lny2020_firework", "lny2020", 7000, () => (
		<G sale="lny2020" />
	)),
	lny2020_confetti: R("lny2020_confetti", "lny2020", f.nT, () => (
		<f.NW eType={f.O4.LNY2020} />
	)),
	snowball: k("snowball", M, (e) => <B_1 effect={e} sale="winter2019" />),
	balloons: k("balloons", E, (e) => <W effect={e} sale="winter2019" />),
	confetti: k("confetti", f.nT, () => <f.NW eType={f.O4.Default} />),
	goldfetti: k("goldfetti", f.nT, () => <f.NW eType={f.O4.Gold} />),
	firework: k("firework", 7000, () => <G sale="winter2019" />),
	snow: k("snow", 10000, (e) => {
		const t = [];
		const r = new v(e.timestamp);
		for (let n = 0; n < 150; n++) {
			const a = r.next();
			const s = {
				left: `${r.next() * 100}%`,
				animationDuration: `${(1 - a) * 3 + 4}s`,
				animationDelay: `${a + r.next() * 4}s`,
			};
			t.push(
				<div
					key={`${e.timestamp}_${n}`}
					style={s}
					className={A_1(l.Snowflake, l[`Snowflake-${n % 20}`])}
				>
					{I(a)}
					{I(a + 1)}
				</div>,
			);
		}
		return <> {t} </>;
	}),
};
export let Y = class extends i.Component {
	render() {
		return (
			<div className={l["animation-container"]}>
				{this.props.effectManager.m_rgRunningEffects.map((e) => (
					<i.Fragment key={e.timestamp}>{e.render()}</i.Fragment>
				))}
			</div>
		);
	}
};
Y = Cg([s.PA], Y);
