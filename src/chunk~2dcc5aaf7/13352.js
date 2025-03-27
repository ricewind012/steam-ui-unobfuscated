import n, { Cg } from "./34629.js";
import i, { PA } from "./41230.js";
import a, { useState } from "./63696.js";
import s, { _D } from "./16117.js";
import { sf } from "./44846.js";
import l from "./46162.js";
import c from "./92251.js";
import "./98995.js";
import m from "./52451.js";
import u from "./72476.js";
import d from "./8090.js";
import A from "./1521.js";
import h from "./61964.js";
function p(e) {
	return new A.OJ(new A.R8(), 0);
}
function G(e) {
	const { text, languageOverride } = e;
	const [n] = useState(
		new d.B(new Map([...Array.from(s.W4.entries())]), p, languageOverride),
	);
	return <>{n.ParseBBCode(text, {})}</>;
}
const C = h;
export const $k = PA((e) => {
	const t = e.photo ? _D(e.photo, sf(u.TS.LANGUAGE)) : null;
	const r = e.photo ? (typeof t == "string" ? t : t[1]) : null;
	const n = Boolean(e.title);
	const i = Boolean(e.company);
	return (
		<div className={C.SpeakerPopup} onMouseLeave={e.fnClose}>
			<div className={C.SpeakerInfoOuter}>
				{e.photo && <img src={r} />}
				<div className={C.SpeakerInfoInner}>
					<div>{e.name}</div>
					{(n || i) && (
						<div>
							{n && <span className={C.SpeakerTitle}>{e.title}</span>}
							{n && i && <span>{", "}</span>}
							{i && <span>{e.company}</span>}
						</div>
					)}
				</div>
			</div>
			{e.bio && (
				<div className={C.SpeakerBio}>
					{e.bio}
					{e.bioString && <G text={e.bioString} />}
				</div>
			)}
		</div>
	);
});
export class FI extends a.Component {
	static sm_embeddedElements = new l.MX("presenter-hover-source-elements");
	m_refAnchor = a.createRef();
	m_fnHidePopup;
	m_nScrollPosAtHoverStart;
	ClosePopup() {
		if (this.m_fnHidePopup) {
			this.m_fnHidePopup();
			this.m_fnHidePopup = null;
			window.removeEventListener("scroll", this.OnScroll);
		}
	}
	componentWillUnmount() {
		this.ClosePopup();
	}
	OnScroll() {
		if (Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50) {
			this.ClosePopup();
		}
	}
	OnHover(e) {
		const t = this.m_refAnchor.current;
		if (!t) {
			return;
		}
		const r = {
			direction: "right",
			bEnablePointerEvents: true,
			style: {
				maxWidth: 640,
				minHeight: t.clientHeight,
			},
			target: t,
		};
		const n = `presenter-hover-${Math.floor(Math.random() * 100000000)}`;
		this.m_fnHidePopup = () =>
			FI.sm_embeddedElements.HideElement(t.ownerDocument, n);
		window.addEventListener("scroll", this.OnScroll);
		this.m_nScrollPosAtHoverStart = window.scrollY;
		FI.sm_embeddedElements.ShowElementDelayed(
			t.ownerDocument,
			150,
			<c.g {...r}>
				<$k {...this.props} fnClose={this.OnLeave} />
			</c.g>,
			n,
		);
	}
	OnLeave(e) {
		this.ClosePopup();
	}
	render() {
		return (
			<div
				className={C.SpeakerHover}
				ref={this.m_refAnchor}
				onMouseEnter={this.OnHover}
				onFocus={this.OnHover}
				onMouseLeave={this.OnLeave}
				onBlur={this.OnLeave}
			>
				{this.props.children}
			</div>
		);
	}
}
Cg([m.oI], FI.prototype, "ClosePopup", null);
Cg([m.oI], FI.prototype, "OnScroll", null);
Cg([m.oI], FI.prototype, "OnHover", null);
Cg([m.oI], FI.prototype, "OnLeave", null);
export class S8 extends a.Component {
	render() {
		const e = this.props.photo ? _D(this.props.photo, sf(u.TS.LANGUAGE)) : null;
		const t =
			this.props.photo && !this.props.hidePhotoInCompactView
				? typeof e == "string"
					? e
					: e[1]
				: null;
		const r = Boolean(this.props.title);
		const n = Boolean(this.props.company);
		return (
			<div className={C.SpeakerOuter}>
				<FI {...this.props}>
					<div className={C.Speaker}>
						<div className={C.SpeakerInfoOuter}>
							{!!t && <img src={t} />}
							<div className={C.SpeakerInfoInner}>
								<div>{this.props.name}</div>
								{(r || n) && (
									<div>
										{r && (
											<span className={C.SpeakerTitle}>{this.props.title}</span>
										)}
										{r && n && <span>{", "}</span>}
										{n && <span>{this.props.company}</span>}
									</div>
								)}
							</div>
						</div>
					</div>
				</FI>
			</div>
		);
	}
}
