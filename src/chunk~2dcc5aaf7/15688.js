var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require(/*webcrack:missing*/ "./90242.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require(/*webcrack:missing*/ "./31084.js");
var m = require("./44164.js");
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require(/*webcrack:missing*/ "./90765.js");
var _A = require("./94230.js");
var p = _A;
var g = require("./46217.js");
var h = require(/*webcrack:missing*/ "./98995.js");
const C = 1576780700;
let _ = class extends i.Component {
	OnEmoticonClick(e) {
		const {
			emoticonStore: t,
			strFlairGroupID: r,
			SetUIDisplayPref: n,
			contextOptions: a,
			bShowChatAddons: s,
		} = this.props;
		let o = null;
		o = s
			? i.createElement(m.Q4, {
					emoticonStore: this.props.emoticonStore,
					emoticonHoverStore: this.props.emoticonHoverStore,
					strFlairGroupID: this.props.strFlairGroupID,
					onEmoticonSelected: (e) => this.props.OnEmoticonSelected(e, false),
					roomEffectSettings: this.props.roomEffectSettings,
					onRoomEffectSelected: this.props.onRoomEffectSelected,
					onStickerSelected: this.props.onStickerSelected,
				})
			: r && t.flair_list && t.GetFlairListByGroupID(r)?.length > 0
				? i.createElement(m.CE, {
						emoticonStore: this.props.emoticonStore,
						emoticonHoverStore: this.props.emoticonHoverStore,
						strFlairGroupID: this.props.strFlairGroupID,
						OnSelected: this.props.OnEmoticonSelected,
					})
				: i.createElement(m.iY, {
						emoticonStore: this.props.emoticonStore,
						emoticonHoverStore: this.props.emoticonHoverStore,
						strFlairGroupID: this.props.strFlairGroupID,
						OnSelected: this.props.OnEmoticonSelected,
					});
		(0, c.lX)(
			o,
			e,
			a || {
				bOverlapHorizontal: true,
				bPreferPopLeft: true,
				bPreferPopTop: true,
			},
		);
		if (this.BHaveUnseenEmoticons() && n) {
			let e = this.GetNewestIndicatorTime();
			if (!e || e < C) {
				e = C;
			}
			n("rtLastAckedNewEmoticons", e);
		}
	}
	GetNewestIndicatorTime() {
		let e = this.props.emoticonStore;
		let t = Number.MIN_SAFE_INTEGER;
		let r = e.GetTimeReceivedNewestEmoticon();
		if (r) {
			t = r;
		}
		let n = e.GetTimeReceivedForStickerOrEffect();
		t = Math.max(n, t);
		if (t > Number.MIN_SAFE_INTEGER) {
			return t;
		} else {
			return undefined;
		}
	}
	BHaveUnseenEmoticons() {
		const { rtLastAckedNewEmoticons: e } = this.props;
		let t = this.GetNewestIndicatorTime();
		return !e || e < C || (t && (!e || e < t));
	}
	render() {
		const { disabled: e, className: t, ttip: r, useImg: n } = this.props;
		let a = [t];
		let s = false;
		if (e) {
			a.push("disabled");
		} else if (this.BHaveUnseenEmoticons()) {
			s = true;
		}
		if (r) {
			a.push("ttip");
		}
		if (n) {
			return i.createElement(
				l.Z,
				{
					onClick: this.OnEmoticonClick,
					onOKActionDescription: (0, u.we)("#ChatEntryButton_Emoticon"),
					focusable: true,
				},
				i.createElement(
					h.he,
					{
						toolTipContent: r,
					},
					i.createElement("img", {
						src: this.props.useImg,
						className: (0, d.A)(...a),
						title: this.props.title || (0, u.we)("#ChatEntryButton_Emoticon"),
					}),
				),
			);
		} else {
			a.push(p.chatSubmitButton, p.EmoticonPickerButton);
			return i.createElement(
				o.fu,
				{
					className: (0, d.A)(...a),
					onOKActionDescription: (0, u.we)("#ChatEntryButton_Emoticon"),
					type: "button",
					onClick: this.OnEmoticonClick,
					title: this.props.title || (0, u.we)("#ChatEntryButton_Emoticon"),
					disabled: e,
				},
				i.createElement(
					h.he,
					{
						toolTipContent: r,
					},
					this.props.buttonIcon || i.createElement(g.nl, null),
					s && i.createElement(m.iD, null),
				),
			);
		}
	}
};
(0, n.Cg)([s.oI], _.prototype, "OnEmoticonClick", null);
_ = (0, n.Cg)([a.PA], _);
export const A = _;
