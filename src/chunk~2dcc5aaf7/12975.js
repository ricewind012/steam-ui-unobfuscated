var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require(/*webcrack:missing*/ "./90765.js");
var o = require("./3963.js");
var l = require("./64608.js");
var c = require(/*webcrack:missing*/ "./54644.js");
var m = require("./15688.js");
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require(/*webcrack:missing*/ "./89193.js");
var A = require("./55523.js");
var p = A;
var g = require(/*webcrack:missing*/ "./88750.js");
var h = require(/*webcrack:missing*/ "./69164.js");
var C = require(/*webcrack:missing*/ "./72476.js");
export class K extends i.Component {
	static contextType = C.QO;
	m_bHasText = false;
	m_TextAreaRef = i.createRef();
	m_elPostControlsRef = i.createRef();
	m_iTimeOutVoiceSettingsScroll;
	constructor(e) {
		super(e);
		(0, d.Gn)(this);
		this.state = {
			strText: "",
			bHaveFocus: false,
		};
	}
	OnPostClicked() {
		this.SetInputValue("");
		return this.props.OnPostClicked(this.state.strText);
	}
	OnChange(e) {
		this.m_bHasText = e.currentTarget.value != "";
		this.SetInputValue(e.currentTarget.value);
	}
	SetInputValue(e, t) {
		this.setState(
			{
				strText: e,
			},
			t,
		);
	}
	InsertEmoticon(e, t) {
		if (!t) {
			this.m_TextAreaRef.current.focus();
		}
		this.InsertAtCursor(`:${e}:`);
	}
	OnFocus() {
		this.setState({
			bHaveFocus: true,
		});
		let e = this.m_elPostControlsRef.current;
		this.m_iTimeOutVoiceSettingsScroll = window.setTimeout(() => {
			if (e) {
				const t = e.ownerDocument.defaultView;
				if (e.getBoundingClientRect().top > t.innerHeight) {
					e.scrollIntoView({
						behavior: "smooth",
						block: "end",
						inline: "end",
					});
				}
			}
			window.clearTimeout(this.m_iTimeOutVoiceSettingsScroll);
		}, 200);
	}
	OnBlur(e) {
		if (
			!e.relatedTarget ||
			!c.id(this.m_elPostControlsRef.current, e.relatedTarget)
		) {
			this.setState({
				bHaveFocus: false,
			});
		}
	}
	InsertAtCursor(e) {
		let t = this.m_TextAreaRef.current.textarea;
		let r = t.value;
		let n = r.substr(0, t.selectionStart) + e + r.substr(t.selectionEnd);
		let i = t.selectionStart + e.length;
		this.SetInputValue(n, () => {
			t.selectionStart = t.selectionEnd = i;
		});
	}
	render() {
		const { bHaveFocus: e, strText: t } = this.state;
		const { className: r, OnPostClicked: n, placeholder: a, ...c } = this.props;
		let d = (!this.context?.IN_GAMEPADUI && e) || !!t;
		return i.createElement(
			h.Z,
			{
				className: (0, s.A)(p.PostTextEntry, r),
				...c,
				onBlur: this.OnBlur,
			},
			i.createElement(l.Cl, {
				ref: this.m_TextAreaRef,
				className: p.PostTextEntryArea,
				nMinHeight: d ? 40 : 20,
				value: t,
				onChange: this.OnChange,
				placeholder: this.props.placeholder,
				onFocus: this.OnFocus,
				onBlur: this.OnBlur,
				onContextMenu: g.aE,
			}),
			i.createElement(
				h.Z,
				{
					"flow-children": "row",
					className: (0, s.A)(p.Controls, d && p.Active),
					ref: this.m_elPostControlsRef,
				},
				!this.context?.IN_GAMEPADUI &&
					i.createElement(m.A, {
						className: p.EmoticonButton,
						disabled: !d,
						OnEmoticonSelected: this.InsertEmoticon,
						emoticonHoverStore: o.Nb.EmoticonHoverStore,
						emoticonStore: o.Nb.EmoticonStore,
					}),
				i.createElement(
					h.Z,
					{
						focusable: d,
						onActivate: this.OnPostClicked,
						className: (0, s.A)(p.PostButton, this.m_bHasText && p.Enabled),
					},
					i.createElement(
						"p",
						{
							className: p.Label,
						},
						(0, u.we)("#AppActivity_PostStatusUpdate"),
					),
				),
			),
		);
	}
}
(0, n.Cg)([d.sH], K.prototype, "m_bHasText", undefined);
(0, n.Cg)([a.oI], K.prototype, "OnPostClicked", null);
(0, n.Cg)([a.oI], K.prototype, "OnChange", null);
(0, n.Cg)([a.oI], K.prototype, "SetInputValue", null);
(0, n.Cg)([a.oI], K.prototype, "InsertEmoticon", null);
(0, n.Cg)([a.oI], K.prototype, "OnFocus", null);
(0, n.Cg)([a.oI], K.prototype, "OnBlur", null);
