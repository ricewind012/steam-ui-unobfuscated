import { Localize } from "../../actual_src/utils/localization.js";
import i, { Cg } from "./34629.js";
import a from "./63696.js";
import s from "./52451.js";
import o from "./41230.js";
import l from "./79769.js";
import m from "./64608.js";
import u from "./50376.js";
import d from "./21501.js";
import { OQ } from "./31958.js";
let n;
const A = d;
((e) => {
	e.topleft = "topleft";
	e.top = "top";
	e.topright = "topright";
	e.left = "left";
	e.middle = "middle";
	e.right = "right";
	e.bottomleft = "bottomleft";
	e.bottom = "bottom";
	e.bottomright = "bottomright";
})((n ||= {}));
export let I = class extends a.Component {
	m_rectLinkRegion;
	m_elLinkRegionBox;
	m_nLocalOffsetXPct;
	m_nLocalOffsetYPct;
	m_fnMouseUp = null;
	m_fnMouseMove = null;
	m_listeners = new l.Ji();
	m_strDescription = "";
	m_aspectRatio = 1;
	componentWillUnmount() {
		this.m_listeners.Unregister();
	}
	constructor(e) {
		super(e);
		this.state = {
			curLeftPosPct: this.props.xPosPct,
			curTopPosPct: this.props.yPosPct,
			curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
			curBottomPosPct: 100 - (this.props.yPosPct + this.props.heightPct),
			curWidthPct: this.props.widthPct,
			curHeightPct: this.props.heightPct,
			EdgeDown: null,
			text_link_url: this.props.link_url,
			text_link_description: this.props.link_description,
			bEditingLink: false,
			valid_link: this.validateUrl(this.props.link_url),
		};
		this.m_strDescription = this.props.link_description;
		this.m_aspectRatio =
			this.props.heightPct > 0 && this.props.widthPct > 0
				? this.props.widthPct / this.props.heightPct
				: 1;
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
	OnMouseMove(e, t) {
		if (this.state.EdgeDown !== undefined) {
			if (e.shiftKey) {
				this.m_fnMouseUp();
			}
			switch (t) {
				case n.left: {
					this.UpdateState({
						curLeftPosPct: this.CalcLeftEdge(e.clientX),
					});
					break;
				}
				case n.right: {
					this.UpdateState({
						curRightPosPct: this.CalcRightEdge(e.clientX),
					});
					break;
				}
				case n.top: {
					this.UpdateState({
						curTopPosPct: this.CalcTopEdge(e.clientY),
					});
					break;
				}
				case n.bottom: {
					this.UpdateState({
						curBottomPosPct: this.CalcBottomEdge(e.clientY),
					});
					break;
				}
				case n.topleft: {
					this.UpdateState({
						curTopPosPct: this.CalcBottomEdge(e.clientY),
						curLeftPosPct: this.CalcLeftEdge(e.clientX),
					});
					break;
				}
				case n.topright: {
					this.UpdateState({
						curTopPosPct: this.CalcTopEdge(e.clientY),
						curRightPosPct: this.CalcRightEdge(e.clientX),
					});
					break;
				}
				case n.bottomleft: {
					this.UpdateState({
						curLeftPosPct: this.CalcLeftEdge(e.clientX),
						curBottomPosPct: this.CalcBottomEdge(e.clientY),
					});
					break;
				}
				case n.bottomright: {
					this.UpdateState({
						curRightPosPct: this.CalcRightEdge(e.clientX),
						curBottomPosPct: this.CalcBottomEdge(e.clientY),
					});
					break;
				}
				case n.middle: {
					const t = OQ(
						this.CalcLeftEdge(e.clientX),
						0,
						100 - this.state.curWidthPct,
					);
					const r = 100 - (t + this.state.curWidthPct);
					const n = OQ(
						this.CalcTopEdge(e.clientY),
						0,
						100 - this.state.curHeightPct,
					);
					const i = {
						curLeftPosPct: t,
						curRightPosPct: r,
						curTopPosPct: n,
						curBottomPosPct: 100 - (n + this.state.curHeightPct),
					};
					this.setState(i);
					break;
				}
			}
			e.preventDefault();
			e.stopPropagation();
		}
	}
	IsValidPct(e) {
		return e >= 0 && e <= 100;
	}
	UpdateState(e) {
		let t =
			e.curTopPosPct !== undefined ? e.curTopPosPct : this.state.curTopPosPct;
		let r =
			e.curBottomPosPct !== undefined
				? e.curBottomPosPct
				: this.state.curBottomPosPct;
		let n =
			e.curLeftPosPct !== undefined
				? e.curLeftPosPct
				: this.state.curLeftPosPct;
		let i =
			e.curRightPosPct !== undefined
				? e.curRightPosPct
				: this.state.curRightPosPct;
		let a = OQ(
			100 - i - n,
			this.props.widthMinPct || 0,
			this.props.widthMaxPct || 100,
		);
		let s = OQ(
			100 - r - t,
			this.props.heightMinPct || 0,
			this.props.heightMaxPct || 100,
		);
		if (this.props.bLockAspectRatio) {
			if (e.curLeftPosPct !== undefined || e.curRightPosPct !== undefined) {
				s = a / this.m_aspectRatio;
			} else {
				a = s * this.m_aspectRatio;
			}
		}
		if (e.curLeftPosPct !== undefined) {
			n = 100 - i - a;
		} else {
			i = 100 - (n + a);
		}
		if (e.curTopPosPct !== undefined) {
			t = 100 - r - s;
		} else {
			r = 100 - (t + s);
		}
		const o = 100 - i - n;
		const l = 100 - r - t;
		if (
			this.IsValidPct(n) &&
			this.IsValidPct(i) &&
			this.IsValidPct(t) &&
			this.IsValidPct(r) &&
			this.IsValidPct(o) &&
			this.IsValidPct(l)
		) {
			this.setState({
				curLeftPosPct: n,
				curRightPosPct: i,
				curTopPosPct: t,
				curBottomPosPct: r,
			});
		}
	}
	GetXPercent(e) {
		return (
			((e - this.m_rectLinkRegion.left) /
				(this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
				100 -
			this.m_nLocalOffsetXPct
		);
	}
	GetYPercent(e) {
		return (
			((e - this.m_rectLinkRegion.top) /
				(this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
				100 -
			this.m_nLocalOffsetYPct
		);
	}
	CalcLeftEdge(e) {
		return OQ(this.GetXPercent(e), 0, 100);
	}
	CalcRightEdge(e) {
		return OQ(100 - (this.GetXPercent(e) + this.state.curWidthPct), 0, 100);
	}
	CalcTopEdge(e) {
		return OQ(this.GetYPercent(e), 0, 100);
	}
	CalcBottomEdge(e) {
		return OQ(100 - (this.GetYPercent(e) + this.state.curHeightPct), 0, 100);
	}
	OnMouseUp(e, t) {
		this.setState({
			curWidthPct: 100 - this.state.curRightPosPct - this.state.curLeftPosPct,
		});
		this.setState({
			curHeightPct: 100 - this.state.curBottomPosPct - this.state.curTopPosPct,
		});
		this.setState({
			EdgeDown: undefined,
		});
		this.props.updateFn(this.props.index, {
			xPosPct: this.state.curLeftPosPct,
			yPosPct: this.state.curTopPosPct,
			widthPct: this.state.curWidthPct,
			heightPct: this.state.curHeightPct,
			link_url: this.state.text_link_url,
			link_description: this.state.text_link_description,
		});
		this.m_listeners.Unregister();
	}
	async HandleDelete() {
		if (this.props.deleteFn) {
			this.props.deleteFn(this.props.index);
		}
	}
	OnSetLinkURLChange(e) {
		this.setState({
			text_link_url: e.target.value,
			valid_link: this.validateUrl(e.target.value),
		});
	}
	OnSetLinkDescriptionChange(e) {
		this.setState({
			text_link_description: e.target.value,
		});
	}
	validateUrl(e) {
		return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
			e,
		);
	}
	OnSaveLink() {
		this.m_strDescription = this.state.text_link_description;
		this.setState({
			bEditingLink: !this.state.bEditingLink,
		});
		this.props.updateFn(this.props.index, {
			xPosPct: this.state.curLeftPosPct,
			yPosPct: this.state.curTopPosPct,
			widthPct: this.state.curWidthPct,
			heightPct: this.state.curHeightPct,
			link_url: this.state.text_link_url,
			link_description: this.state.text_link_description,
		});
	}
	OnEditLink() {
		this.setState({
			bEditingLink: !this.state.bEditingLink,
		});
	}
	render() {
		let e = {
			left: `${this.state.curLeftPosPct}%`,
			top: `${this.state.curTopPosPct}%`,
			right: `${this.state.curRightPosPct}%`,
			bottom: `${this.state.curBottomPosPct}%`,
		};
		let A_LinkRegionDragBox = A.LinkRegionDragBox;
		if (this.state.EdgeDown !== null) {
			A_LinkRegionDragBox += ` ${A.EdgeDown} ${A[this.state.EdgeDown]}`;
		}
		return (
			<div
				className={A_LinkRegionDragBox}
				style={e}
				ref={this.LinkRegionBoxRef}
				draggable={false}
			>
				<div className={A.LinkRegionGridBox}>
					<div
						className={`${A.LinkRegionEdge} ${A.TopLeft}`}
						onMouseDown={(e) => {
							this.OnMouseDown(e, n.topleft);
						}}
						draggable={false}
					/>
					<div
						className={`${A.LinkRegionEdge} ${A.Top}`}
						onMouseDown={(e) => {
							this.OnMouseDown(e, n.top);
						}}
					/>
					<div
						className={`${A.LinkRegionEdge} ${A.TopRight}`}
						onMouseDown={(e) => {
							this.OnMouseDown(e, n.topright);
						}}
						draggable={false}
					/>
					<div
						className={`${A.LinkRegionEdge} ${A.Left}`}
						onMouseDown={(e) => {
							this.OnMouseDown(e, n.left);
						}}
						draggable={false}
					/>
					<div
						className={`${A.LinkRegionEdge} ${A.Middle}`}
						onMouseDown={(e) => {
							this.OnMouseDown(e, n.middle);
						}}
						draggable={false}
					>
						{this.props.deleteFn && (
							<div className={A.LinkRegionDelete} onClick={this.HandleDelete}>
								<u.sED />
							</div>
						)}
						{!this.props.bDisableLink && (
							<div className={A.LinkRegionSettings} onClick={this.OnEditLink}>
								<u.xv8 />
							</div>
						)}
						<div className={A.LinkText}> {this.m_strDescription} </div>
					</div>
					<div
						className={`${A.LinkRegionEdge} ${A.Right}`}
						onMouseDown={(e) => {
							this.OnMouseDown(e, n.right);
						}}
						draggable={false}
					/>
					<div
						className={`${A.LinkRegionEdge} ${A.BottomLeft}`}
						onMouseDown={(e) => {
							this.OnMouseDown(e, n.bottomleft);
						}}
						draggable={false}
					/>
					<div
						className={`${A.LinkRegionEdge} ${A.Bottom}`}
						onMouseDown={(e) => {
							this.OnMouseDown(e, n.bottom);
						}}
						draggable={false}
					/>
					<div
						className={`${A.LinkRegionEdge} ${A.BottomRight}`}
						onMouseDown={(e) => {
							this.OnMouseDown(e, n.bottomright);
						}}
						draggable={false}
					/>
				</div>
				{this.state.bEditingLink && (
					<div className={A.LinkRegionInfo}>
						<m.pd
							className={A.LinkRegionInput}
							type="text"
							name="link_url"
							value={this.state.text_link_url}
							label={(0, Localize)("#SteamTV_LinkURL")}
							placeholder="https://www.example.com"
							onChange={this.OnSetLinkURLChange}
							mustBeURL
						/>
						<m.pd
							className={A.LinkRegionInput}
							type="text"
							name="link_description"
							value={this.state.text_link_description}
							label={(0, Localize)("#SteamTV_LinkDescription")}
							placeholder={(0, Localize)(
								"#SteamTV_LinkDescription_Placeholder",
							)}
							onChange={this.OnSetLinkDescriptionChange}
						/>
						<div className={A.LinkRegionButtonContainer}>
							<m.$n disabled={!this.state.valid_link} onClick={this.OnSaveLink}>
								{" "}
								{(0, Localize)("#Button_OK")}{" "}
							</m.$n>
							<m.$n onClick={this.OnEditLink}>
								{" "}
								{(0, Localize)("#Button_Cancel")}
							</m.$n>
						</div>
					</div>
				)}
			</div>
		);
	}
};
Cg([s.oI], I.prototype, "LinkRegionBoxRef", null);
Cg([s.oI], I.prototype, "OnMouseDown", null);
Cg([s.oI], I.prototype, "OnMouseMove", null);
Cg([s.oI], I.prototype, "OnMouseUp", null);
Cg([s.oI], I.prototype, "HandleDelete", null);
Cg([s.oI], I.prototype, "OnSetLinkURLChange", null);
Cg([s.oI], I.prototype, "OnSetLinkDescriptionChange", null);
Cg([s.oI], I.prototype, "OnSaveLink", null);
Cg([s.oI], I.prototype, "OnEditLink", null);
I = Cg([o.PA], I);
