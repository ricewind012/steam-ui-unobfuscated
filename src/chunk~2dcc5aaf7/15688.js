import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./41230.js";
import s from "./52451.js";
import o from "./90242.js";
import l from "./69164.js";
import { lX } from "./31084.js";
import m from "./44164.js";
import { A as A_1 } from "./90765.js";
import _A from "./94230.js";
import g from "./46217.js";
import h from "./98995.js";
const p = _A;
const C = 1576780700;

export let A = class extends i.Component {
	OnEmoticonClick(e) {
		const {
			emoticonStore,
			strFlairGroupID,
			SetUIDisplayPref,
			contextOptions,
			bShowChatAddons,
		} = this.props;
		let o = null;
		o = bShowChatAddons ? (
			<m.Q4
				emoticonStore={this.props.emoticonStore}
				emoticonHoverStore={this.props.emoticonHoverStore}
				strFlairGroupID={this.props.strFlairGroupID}
				onEmoticonSelected={(e) => this.props.OnEmoticonSelected(e, false)}
				roomEffectSettings={this.props.roomEffectSettings}
				onRoomEffectSelected={this.props.onRoomEffectSelected}
				onStickerSelected={this.props.onStickerSelected}
			/>
		) : strFlairGroupID &&
		  emoticonStore.flair_list &&
		  emoticonStore.GetFlairListByGroupID(strFlairGroupID)?.length > 0 ? (
			<m.CE
				emoticonStore={this.props.emoticonStore}
				emoticonHoverStore={this.props.emoticonHoverStore}
				strFlairGroupID={this.props.strFlairGroupID}
				OnSelected={this.props.OnEmoticonSelected}
			/>
		) : (
			<m.iY
				emoticonStore={this.props.emoticonStore}
				emoticonHoverStore={this.props.emoticonHoverStore}
				strFlairGroupID={this.props.strFlairGroupID}
				OnSelected={this.props.OnEmoticonSelected}
			/>
		);
		lX(
			o,
			e,
			contextOptions || {
				bOverlapHorizontal: true,
				bPreferPopLeft: true,
				bPreferPopTop: true,
			},
		);
		if (this.BHaveUnseenEmoticons() && SetUIDisplayPref) {
			let e = this.GetNewestIndicatorTime();
			if (!e || e < C) {
				e = C;
			}
			SetUIDisplayPref("rtLastAckedNewEmoticons", e);
		}
	}
	GetNewestIndicatorTime() {
		let e = this.props.emoticonStore;
		let Number_MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
		let r = e.GetTimeReceivedNewestEmoticon();
		if (r) {
			Number_MIN_SAFE_INTEGER = r;
		}
		let n = e.GetTimeReceivedForStickerOrEffect();
		Number_MIN_SAFE_INTEGER = Math.max(n, Number_MIN_SAFE_INTEGER);
		if (Number_MIN_SAFE_INTEGER > Number.MIN_SAFE_INTEGER) {
			return Number_MIN_SAFE_INTEGER;
		} else {
			return undefined;
		}
	}
	BHaveUnseenEmoticons() {
		const { rtLastAckedNewEmoticons } = this.props;
		let t = this.GetNewestIndicatorTime();
		return (
			!rtLastAckedNewEmoticons ||
			rtLastAckedNewEmoticons < C ||
			(t && (!rtLastAckedNewEmoticons || rtLastAckedNewEmoticons < t))
		);
	}
	render() {
		const { disabled, className, ttip, useImg } = this.props;
		let a = [className];
		let s = false;
		if (disabled) {
			a.push("disabled");
		} else if (this.BHaveUnseenEmoticons()) {
			s = true;
		}
		if (ttip) {
			a.push("ttip");
		}
		if (useImg) {
			return (
				<l.Z
					onClick={this.OnEmoticonClick}
					onOKActionDescription={(0, Localize)("#ChatEntryButton_Emoticon")}
					focusable
				>
					<h.he toolTipContent={ttip}>
						<img
							src={this.props.useImg}
							className={A_1(...a)}
							title={
								this.props.title || (0, Localize)("#ChatEntryButton_Emoticon")
							}
						/>
					</h.he>
				</l.Z>
			);
		} else {
			a.push(p.chatSubmitButton, p.EmoticonPickerButton);
			return (
				<o.fu
					className={A_1(...a)}
					onOKActionDescription={(0, Localize)("#ChatEntryButton_Emoticon")}
					type="button"
					onClick={this.OnEmoticonClick}
					title={this.props.title || (0, Localize)("#ChatEntryButton_Emoticon")}
					disabled={disabled}
				>
					<h.he toolTipContent={ttip}>
						{this.props.buttonIcon || <g.nl />}
						{s && <m.iD />}
					</h.he>
				</o.fu>
			);
		}
	}
};

Cg([s.oI], A.prototype, "OnEmoticonClick", null);
A = Cg([a.PA], A);
