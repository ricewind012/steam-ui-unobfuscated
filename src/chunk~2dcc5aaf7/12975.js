import { BIsParentOrSelf } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./52451.js";
import { A as A_1 } from "./90765.js";
import o from "./3963.js";
import l from "./64608.js";
import m from "./15688.js";
import d, { Gn } from "./89193.js";
import A from "./55523.js";
import g from "./88750.js";
import h from "./69164.js";
import C from "./72476.js";
const p = A;
export class K extends i.Component {
	static contextType = C.QO;
	m_bHasText = false;
	m_TextAreaRef = i.createRef();
	m_elPostControlsRef = i.createRef();
	m_iTimeOutVoiceSettingsScroll;
	constructor(e) {
		super(e);
		Gn(this);
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
			!BIsParentOrSelf(this.m_elPostControlsRef.current, e.relatedTarget)
		) {
			this.setState({
				bHaveFocus: false,
			});
		}
	}
	InsertAtCursor(e) {
		let t = this.m_TextAreaRef.current.textarea;
		let t_value = t.value;
		let n =
			t_value.substr(0, t.selectionStart) + e + t_value.substr(t.selectionEnd);
		let i = t.selectionStart + e.length;
		this.SetInputValue(n, () => {
			t.selectionStart = i;
			t.selectionEnd = i;
		});
	}
	render() {
		const { bHaveFocus, strText } = this.state;
		const { className, OnPostClicked, placeholder, ...c } = this.props;
		let d = (!this.context?.IN_GAMEPADUI && bHaveFocus) || !!strText;
		return (
			<h.Z
				className={A_1(p.PostTextEntry, className)}
				{...c}
				onBlur={this.OnBlur}
			>
				<l.Cl
					ref={this.m_TextAreaRef}
					className={p.PostTextEntryArea}
					nMinHeight={d ? 40 : 20}
					value={strText}
					onChange={this.OnChange}
					placeholder={this.props.placeholder}
					onFocus={this.OnFocus}
					onBlur={this.OnBlur}
					onContextMenu={g.aE}
				/>
				<h.Z
					flow-children="row"
					className={A_1(p.Controls, d && p.Active)}
					ref={this.m_elPostControlsRef}
				>
					{!this.context?.IN_GAMEPADUI && (
						<m.A
							className={p.EmoticonButton}
							disabled={!d}
							OnEmoticonSelected={this.InsertEmoticon}
							emoticonHoverStore={o.Nb.EmoticonHoverStore}
							emoticonStore={o.Nb.EmoticonStore}
						/>
					)}
					<h.Z
						focusable={d}
						onActivate={this.OnPostClicked}
						className={A_1(p.PostButton, this.m_bHasText && p.Enabled)}
					>
						<p className={p.Label}>
							{Localize("#AppActivity_PostStatusUpdate")}
						</p>
					</h.Z>
				</h.Z>
			</h.Z>
		);
	}
}
Cg([d.sH], K.prototype, "m_bHasText", undefined);
Cg([a.oI], K.prototype, "OnPostClicked", null);
Cg([a.oI], K.prototype, "OnChange", null);
Cg([a.oI], K.prototype, "SetInputValue", null);
Cg([a.oI], K.prototype, "InsertEmoticon", null);
Cg([a.oI], K.prototype, "OnFocus", null);
Cg([a.oI], K.prototype, "OnBlur", null);
