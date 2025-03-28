import { Localize } from "../../actual_src/utils/localization.js";
import {
	BIsParentOrSelf,
	GetFileFromPasteEvent,
	BlobToFile,
} from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./83957.js";
import s from "./44234.js";
import { K as K_1, MC } from "./89459.js";
import l from "./3756.js";
import c from "./96127.js";
import m from "./8653.js";
import u from "./95773.js";
import d, { CO } from "./52912.js";
import A, { useState, useRef, useEffect } from "./63696.js";
import p from "./41230.js";
import g from "./52451.js";
import h from "./50376.js";
import C from "./64608.js";
import f from "./69164.js";
import B from "./50551.js";
import { ESteamRealm } from "../../actual_src/clienttypes/realm.js";
import { lX } from "./31084.js";
import E, { b$ } from "./90242.js";
import M from "./56840.js";
import T from "./94230.js";
import k, { Y8 } from "./88750.js";
import D from "./15688.js";
import N from "./7372.js";
import F from "./98592.js";
import O from "./51095.js";
import { T as T_1 } from "./92009.js";
import L from "./98829.js";
import { pg } from "./13869.js";
import x from "./10042.js";
import U from "./72476.js";
import { Sm, i3 } from "./91720.js";
import V from "./4690.js";
const a = i;
let B_1 = class extends A.Component {
	render() {
		const { fileUploadManager } = this.props;
		let t = fileUploadManager.file_upload_props.eUploadState;
		if (t == 1) {
			return <Y_1 fileUploadManager={fileUploadManager} />;
		} else if (t == 3 || t == 5 || t == 5 || t == 4) {
			return <W_1 fileUploadManager={fileUploadManager} />;
		} else if (t != 0) {
			return <S fileUploadManager={fileUploadManager} />;
		} else {
			return null;
		}
	}
};
function Y_1(e) {
	const { fileUploadManager } = e;
	const [r, setR] = useState(false);
	const IRef = useRef();
	useEffect(() => IRef.current?.focus(), []);
	const a = () => fileUploadManager.Reset();
	let s;
	let t_file = fileUploadManager.file;
	if (t_file) {
		if (t_file.type.includes("image")) {
			s = (
				<img
					className="chatFileUploadPreview"
					src={fileUploadManager.file_upload_data_url}
				/>
			);
		} else if (t_file.type.includes("video")) {
			s = <h.CeX />;
		}
	} else if (fileUploadManager.file_upload_props.exportFn) {
		s = <h.CeX />;
	}
	const l = fileUploadManager.file_upload_props.displayFileName;
	const c = () => true;
	return (
		<f.Z
			className="chatFileUploadPreviewContainer chatUploadContainer"
			autoFocus
			retainFocus
			preferredFocus
			onMoveLeft={c}
			onMoveRight={c}
			onMoveUp={c}
			onMoveDown={c}
			onCancel={a}
		>
			{s}
			{l && <div className="chatFileUploadFileName">'{l}'</div>}
			<f.Z className="chatFileUploadCancel" onActivate={a}>
				<h.sED />
			</f.Z>
			<C.jn
				ref={IRef}
				autoFocus
				className="chatFileUploadBtn"
				onClick={async () => {
					await fileUploadManager.BeginFileUpload({
						bSpoiler: r,
					});
					fileUploadManager.Reset();
				}}
			>
				{(0, Localize)("#Chat_Upload")}
			</C.jn>
			<C.Yh
				className="spoilerCheckBox"
				label={(0, Localize)("#ChatEntry_TagAsSpoiler")}
				checked={r}
				onChange={() => setR((e) => !e)}
			/>
		</f.Z>
	);
}
B_1 = Cg([p.PA], B_1);
let S = class extends A.Component {
	render() {
		let e = this.props.fileUploadManager.file_upload_props;
		const t = e.displayFileName ?? "...";
		let r;
		r =
			e.eUploadState == 7
				? (0, Localize)("#Chat_Exporting", t)
				: e.file
					? (0, Localize)("#Chat_Uploading", t)
					: "";
		let n = {
			width: `${e.uploadProgress}%`,
		};
		return (
			<div className="chatFileUploadProgressContainer chatUploadContainer">
				<div className="chatFileUploadProgressName">{r}</div>
				<div className="chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer">
					<div className="DialogProgressBar_Value" style={n} />
				</div>
			</div>
		);
	}
};
S = Cg([p.PA], S);
let W_1 = class extends A.Component {
	ClearErrorState() {
		this.props.fileUploadManager.ClearFileUploadError();
	}
	async OnRetryClick() {
		await this.props.fileUploadManager.RetryFileUpload();
		this.props.fileUploadManager.Reset();
	}
	render() {
		let e;
		let t = this.props.fileUploadManager.file_upload_props;
		let r = t.displayFileName
			? (0, Localize)("#Chat_Uploading", t.displayFileName)
			: "";
		let n =
			t.strErrorDescription || (0, Localize)("#Chat_Settings_Error_Unknown");
		if (t.eUploadState == 3) {
			e = (
				<C.jn onClick={this.OnRetryClick}>
					{(0, Localize)("#Chat_Upload_ErrorAction_Retry")}
				</C.jn>
			);
		}
		const i = () => true;
		return (
			<f.Z
				className="chatFileUploadProgressContainer chatUploadContainer"
				autoFocus
				retainFocus
				preferredFocus
				onMoveLeft={i}
				onMoveRight={i}
				onMoveUp={i}
				onMoveDown={i}
				onCancel={this.ClearErrorState}
			>
				<div className="chatFileUploadProgressName">{r}</div>
				<div className="chatFileUploadErrorDescription">{n}</div>
				<div className="chatFileUploadActions">
					<C.dR className="DialogLayout_NoMinWidth">
						{e}
						<C.$n autoFocus onClick={this.ClearErrorState}>
							{(0, Localize)("#Chat_Upload_ErrorAction_Close")}
						</C.$n>
					</C.dR>
				</div>
			</f.Z>
		);
	}
};
Cg([g.oI], W_1.prototype, "ClearErrorState", null);
Cg([g.oI], W_1.prototype, "OnRetryClick", null);
W_1 = Cg([p.PA], W_1);
const R = T;
const H = A.lazy(() => require.e(7462).then(require.bind(require, 24709)));
function J_1(e) {
	return (
		<A.Suspense fallback={null}>
			<H {...e} />
		</A.Suspense>
	);
}
export let o = class extends A.Component {
	static contextType = U.QO;
	m_navRef = b$();
	m_refTextInput = A.createRef();
	m_refFileInput = A.createRef();
	m_refContainer = A.createRef();
	m_MentionDialog;
	m_textFocusCallback = null;
	m_textUpdatedCallback = null;
	m_nChatEntryInitialHeight = undefined;
	m_iSizeChatEntryInterval = undefined;
	m_iMentionSearchStartOffset;
	m_iMentionSearchCancelledOffset;
	state = {
		messageInput: "",
		submitEnabled: false,
		mentionSearch: undefined,
		activeSuggestSearchType: undefined,
	};
	BindMentionDialog(e) {
		this.m_MentionDialog = e;
	}
	SetMessageInput(e, t) {
		this.setState(
			{
				messageInput: e,
				submitEnabled: e.trim().length > 0,
			},
			t,
		);
		this.props.chatView.text_entry = e;
		if (e && e.length) {
			this.props.chatView.chat.OnTyping();
		}
	}
	OnSubmit(e) {
		if (e) {
			e.preventDefault();
		}
		if (this.props.chatView && this.props.chatView.file_upload_manager.file) {
			this.props.chatView.UploadFile();
		}
		if (this.props.chatView && this.props.chatView.clip_to_upload) {
			const { fnUploadClip } = Sm();
			fnUploadClip(this.props.chatView.clip_to_upload.clip_id, "", "", 3).then(
				(e) => {
					if (e.eResult == 1 && e.strURL) {
						this.props.chatView.SendChatMessage(e.strURL);
					}
					this.props.chatView.SetClipToUpload(undefined);
				},
			);
		}
		if (this.state.messageInput.trim().length && this.props.chatView) {
			this.props.chatView.SendChatMessage(this.state.messageInput);
			this.m_iMentionSearchCancelledOffset = undefined;
			this.ClearMentionSearchState();
			this.setState({
				submitEnabled: false,
			});
			this.SetMessageInput("");
			this.props.chatView.is_scrolled_to_bottom = true;
			this.FocusTextInput();
		}
		this.SizeChatEntry(this.m_refTextInput.current, true);
	}
	OnTextAreaChange(e) {
		e.persist();
		this.m_iSizeChatEntryInterval ||= window.setTimeout(() => {
			this.m_iSizeChatEntryInterval = 0;
			this.SizeChatEntry(e.currentTarget);
		}, 1000);
		this.SetMessageInput(e.target.value);
	}
	SizeChatEntry(e, t) {
		if (!e) {
			return;
		}
		let r = u.xm.SettingsStore.FriendsSettings.bCompactFriendsList ? 12 : 0;
		e.style.height = "inherit";
		let n = window.getComputedStyle(e);
		let i =
			parseInt(n.getPropertyValue("border-top-width"), 10) +
			parseInt(n.getPropertyValue("padding-top"), 10) +
			parseInt(n.getPropertyValue("padding-bottom"), 10) +
			parseInt(n.getPropertyValue("border-bottom-width"), 10);
		if (this.m_nChatEntryInitialHeight == null) {
			this.m_nChatEntryInitialHeight = `${e.clientHeight - i - r}px`;
		}
		let a = e.scrollHeight - i - r;
		if (t) {
			e.style.height = this.m_nChatEntryInitialHeight;
			this.m_nChatEntryInitialHeight = undefined;
		} else {
			e.style.height = `${Math.min(120, a)}px`;
		}
	}
	OnFocus(e) {
		this.UpdateMentionSearchState();
	}
	OnBlur(e) {
		if (
			!e.relatedTarget ||
			!BIsParentOrSelf(this.m_refContainer.current, e.relatedTarget)
		) {
			if (Y8()) {
				return;
			}
			this.m_iMentionSearchCancelledOffset = undefined;
			this.ClearMentionSearchState();
		}
	}
	OnKeyDown(e) {
		if (
			this.state.activeSuggestSearchType &&
			this.m_MentionDialog &&
			!e.shiftKey &&
			!e.ctrlKey &&
			this.m_MentionDialog.BHandleKeyPress(e.keyCode)
		) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}
		if (e.keyCode == 8 || e.keyCode == 46) {
			this.m_iMentionSearchCancelledOffset = undefined;
		} else if (e.keyCode != 13 || e.shiftKey || e.shiftKey || e.ctrlKey) {
			if (e.keyCode == 13 && e.ctrlKey) {
				e.preventDefault();
				e.stopPropagation();
				this.InsertAtCursor("\n");
			}
		} else {
			e.preventDefault();
			e.stopPropagation();
			this.OnSubmit();
		}
	}
	OnPaste(e) {
		let t = GetFileFromPasteEvent(e);
		if (t) {
			this.props.chatView.SetFileToUpload(t);
			e.preventDefault();
			e.stopPropagation();
		}
	}
	OnFileInputChange(e) {
		let e_currentTarget = e.currentTarget;
		if (e_currentTarget.files.length) {
			this.props.chatView.SetFileToUpload(e_currentTarget.files[0]);
			e_currentTarget.value = "";
		}
	}
	OnEmbedClick(e) {
		lX(
			<X
				chatView={this.props.chatView}
				refFileInput={this.m_refFileInput.current}
				fnInsertText={this.InsertAtCursor.bind(this)}
			/>,
			e.currentTarget,
			{
				bOverlapHorizontal: true,
				bPreferPopLeft: true,
				bPreferPopTop: true,
			},
		);
	}
	OnEmoticonSelected(e, t = false) {
		if (!t) {
			this.FocusTextInput();
		}
		this.InsertAtCursor(`:${e}:`);
	}
	InsertAtCursor(e) {
		let t = this.m_refTextInput.current;
		let t_value = t.value;
		let n =
			t_value.substr(0, t.selectionStart) + e + t_value.substr(t.selectionEnd);
		let i = t.selectionStart + e.length;
		this.SetMessageInput(n, () => {
			t.selectionStart = i;
			t.selectionEnd = i;
		});
	}
	OnKeyPress(e) {
		this.UpdateMentionSearchState();
	}
	OnKeyboardFullyVisible() {
		this.props.chatView.OnScrollBottomRequest();
	}
	OnClick(e) {
		this.UpdateMentionSearchState();
	}
	OnContextMenu(e) {
		if (!s.TS.IN_CLIENT) {
			e.stopPropagation();
		}
	}
	ClearMentionSearchState() {
		this.m_iMentionSearchStartOffset = undefined;
		if (this.state.activeSuggestSearchType) {
			this.setState({
				activeSuggestSearchType: undefined,
				mentionSearch: undefined,
			});
		}
	}
	FindMatchOpener(e, t, r) {
		for (let n = r - 1; n >= 0; n--) {
			if (t[n] == e) {
				return n;
			}
			if (t[n] == " ") {
				break;
			}
		}
	}
	UpdateMentionSearchState() {
		let e = this.m_refTextInput.current;
		if (!e) {
			return;
		}
		let t = (this.props.chatView && this.props.chatView.chat) instanceof l.d;
		if (e.selectionStart != e.selectionEnd || !e.selectionStart) {
			this.ClearMentionSearchState();
			return;
		}
		let r;
		let n;

		let { selectionStart, value } = e;

		for (let e = selectionStart - 1; e >= 0; e--) {
			let o = e > 0 ? value[e - 1] : undefined;
			if ((value[e] == "@" || value[e] == "＠") && t) {
				if (!o || o == " " || o == " " || o == "\n") {
					r = e;
					n = "Mention";
				}
				break;
			}
			if (value[e] == ":" && selectionStart - e > 2) {
				if (
					!o ||
					o == " " ||
					o == " " ||
					o == "\n" ||
					o == " " ||
					o == "\n" ||
					o == ":"
				) {
					r = e;
					n = "Emoticon";
				}
				break;
			}
			if (
				s.TS.EREALM != ESteamRealm.k_ESteamRealmChina &&
				value.startsWith("/store ")
			) {
				r = 6;
				n = "Store";
				break;
			}
			if (value[e] == "/" && e == 0) {
				r = e;
				n = "SlashCommand";
				break;
			}
			if (value[e] == " " || value[e] == "\n") {
				break;
			}
		}
		if (r === undefined || r === this.m_iMentionSearchCancelledOffset) {
			this.ClearMentionSearchState();
			return;
		}
		let o = value.substr(r + 1, selectionStart - r - 1);
		this.m_iMentionSearchStartOffset = r;
		this.setState({
			activeSuggestSearchType: n,
			mentionSearch: o,
		});
	}
	ReplaceSuggestedText(e, t, r) {
		let n = this.m_refTextInput.current.selectionStart;
		let i = this.m_refTextInput.current.value;
		let a = this.FindMatchOpener(e, i, n);
		if (a === undefined && e == "@") {
			a = this.FindMatchOpener("＠", i, n);
		}
		if (a !== undefined) {
			let e = i.substr(0, a);
			e += t;
			if (n >= i.length || i[n] != " ") {
				e += " ";
			}
			let e_length = e.length;
			e += i.substr(n);
			this.SetMessageInput(e, r);
			this.m_refTextInput.current.value = e;
			this.m_refTextInput.current.selectionStart = e_length;
			this.m_refTextInput.current.selectionEnd = e_length;
			this.FocusTextInput();
		}
	}
	OnMentionSuggestionSelected(e, t) {
		let r;
		if (t instanceof c.$c) {
			r = t.persona.m_strPlayerName;
		} else if (t) {
			r = t;
		}
		if (!r) {
			this.m_iMentionSearchCancelledOffset = this.m_iMentionSearchStartOffset;
			this.ClearMentionSearchState();
			return;
		}
		{
			let e = r;
			if (e.lastIndexOf("#") !== -1) {
				e = e.substr(0, e.lastIndexOf("#"));
			}
			if (this.props.chatView.BIsMemberNameAmbiguous(e)) {
				if (t instanceof c.$c) {
					r += `#${t.accountid.toString(36)}`;
				} else {
					r += "#0";
				}
			}
		}
		this.ReplaceSuggestedText("@", `@${r}`);
		this.ClearMentionSearchState();
	}
	OnEmoticonSuggestionSelected(e, t) {
		if (!t) {
			this.m_iMentionSearchCancelledOffset = this.m_iMentionSearchStartOffset;
			this.ClearMentionSearchState();
			return;
		}
		this.ReplaceSuggestedText(":", `:${t}:`);
		this.ClearMentionSearchState();
	}
	OnSlashCommandSuggestionSelected(e, t) {
		if (!t) {
			this.m_iMentionSearchCancelledOffset = this.m_iMentionSearchStartOffset;
			this.ClearMentionSearchState();
			return;
		}
		this.ReplaceSuggestedText("/", t, () => {
			if (K_1(t).unExpectedArguments === 0) {
				this.OnSubmit();
			}
		});
		this.ClearMentionSearchState();
	}
	OnStoreSuggestionSelected(e, t) {
		if (!t) {
			this.m_iMentionSearchCancelledOffset = this.m_iMentionSearchStartOffset;
			this.ClearMentionSearchState();
			return;
		}
		this.SetMessageInput(t, () => {
			this.OnSubmit();
		});
		this.ClearMentionSearchState();
	}
	FocusTextInput() {
		if (this.context?.IN_GAMEPADUI) {
			setTimeout(() => {
				this.m_navRef.current?.TakeFocus();
			}, 0);
		} else {
			this.m_refTextInput.current?.focus();
		}
	}
	TextUpdated(e) {
		this.SetMessageInput(e);
	}
	InitForChatView(e) {
		if (this.m_textFocusCallback) {
			this.m_textFocusCallback.Unregister();
			this.m_textFocusCallback = null;
		}
		if (this.m_textUpdatedCallback) {
			this.m_textUpdatedCallback.Unregister();
			this.m_textUpdatedCallback = null;
		}
		let e_text_entry = e.text_entry;
		if (e_text_entry != this.state.messageInput) {
			this.setState({
				messageInput: e_text_entry,
			});
		}
		this.m_textFocusCallback = e.RegisterForTextEntryFocus(this.FocusTextInput);
		this.m_textUpdatedCallback = e.RegisterForTextUpdated(this.TextUpdated);
	}
	componentDidMount() {
		this.InitForChatView(this.props.chatView);
		this.FocusTextInput();
	}
	componentDidUpdate(e) {
		if (this.props.chatView !== e.chatView) {
			this.InitForChatView(this.props.chatView);
		}
		if (this.props.isActive && !e.isActive) {
			setTimeout(() => this.FocusTextInput(), 0);
		}
	}
	componentWillUnmount() {
		if (this.m_textFocusCallback) {
			this.m_textFocusCallback.Unregister();
			this.m_textFocusCallback = null;
		}
		if (this.m_textUpdatedCallback) {
			this.m_textUpdatedCallback.Unregister();
			this.m_textUpdatedCallback = null;
		}
	}
	OnRoomEffectSelected(e) {
		if (this.props.chatView) {
			this.props.chatView.SendChatMessage(`/roomeffect ${e}`);
		}
		this.FocusTextInput();
	}
	OnStickerSelected(e) {
		if (this.props.chatView) {
			this.props.chatView
				.SendChatMessage(`/sticker ${e}`)
				.then(() =>
					u.xm.ChatStore.EmoticonStore.TrackStickerUsage(e, Date.now() / 1000),
				);
		}
		this.FocusTextInput();
	}
	render() {
		const { chatView, disabled, ownerWindow } = this.props;
		let n;
		let i = chatView && chatView.chat;
		switch (this.state.activeSuggestSearchType) {
			case "Mention": {
				n = (
					<Z
						chatView={chatView}
						strSearch={this.state.mentionSearch}
						onSuggestionSelected={this.OnMentionSuggestionSelected}
						ref={this.BindMentionDialog}
					/>
				);
				break;
			}
			case "Emoticon": {
				n = (
					<N.A
						emoticonStore={u.xm.ChatStore.EmoticonStore}
						emoticonHoverStore={M.s}
						strSearch={this.state.mentionSearch}
						nMinimumSearchLengthBeforeAutoSelection={2}
						onSuggestionSelected={this.OnEmoticonSuggestionSelected}
						ref={this.BindMentionDialog}
					/>
				);
				break;
			}
			case "SlashCommand": {
				n = (
					<Y
						strSearch={this.state.mentionSearch}
						onSuggestionSelected={this.OnSlashCommandSuggestionSelected}
						ref={this.BindMentionDialog}
					/>
				);
				break;
			}
			case "Store": {
				n = (
					<K
						strSearch={this.state.mentionSearch}
						onSuggestionSelected={this.OnStoreSuggestionSelected}
						ref={this.BindMentionDialog}
					/>
				);
			}
		}
		let a = u.xm.SettingsStore.FriendsSettings.bCompactFriendsList;
		let s = u.xm.SettingsStore.FriendsSettings.nChatFontSize;
		let o = "";
		if (s == B.ki.k_EChatFontSizeSmall) {
			o = " smallChatFont";
		} else if (s == B.ki.k_EChatFontSizeLarge) {
			o = " largeChatFont";
		}
		let c = {};
		if (this.state.submitEnabled) {
			c.onSecondaryButton = () => this.SetMessageInput("");
			c.onSecondaryActionDescription = (0, Localize)("#ChatEntryButton_Clear");
		}
		if (i.BIsVoiceAllowed()) {
			if (i instanceof m.s) {
				if (!chatView.BVoiceActive()) {
					c.onOptionsButton = () => i.ToggleVoiceChat();
					let i_accountid_partner = i.accountid_partner;
					let t =
						u.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(
							i_accountid_partner,
						);
					c.onOptionsActionDescription = (0, Localize)(
						t ? "#Voice_StartTalking" : "#Friend_Menu_StartVoiceChat",
					);
				}
			} else if (i instanceof l.d) {
				let t = chatView.GetParentGroupView();
				let n = t.GetGroup();
				if (n.voiceRoomList.length > 1) {
					const e = () => {
						pg(<x._1 groupView={t} />, ownerWindow);
					};
					c.onOptionsButton = e;
					c.onOptionsActionDescription = (0, Localize)(
						"#Chat_ChatRoomGroup_ViewVoiceChats",
					);
				} else if (
					n.voiceRoomList.length != 1 ||
					u.xm.VoiceStore.IsVoiceActiveForGroup(n.GetGroupID())
				) {
					if (
						n.voiceRoomList.length == 0 &&
						!u.xm.VoiceStore.IsVoiceChatActive()
					) {
						c.onOptionsButton = () => {
							n.CreateAndJoinTempVoiceRoom();
						};
						c.onOptionsActionDescription = (0, Localize)(
							"#Chat_ChatRoomGroup_StartVoiceChat",
						);
					}
				} else {
					const e = () => {
						n.voiceRoomList[0]?.StartVoiceChat();
					};
					c.onOptionsButton = e;
					c.onOptionsActionDescription = (0, Localize)(
						"#Chat_ChatRoomGroup_JoinVoiceChat",
					);
				}
			}
		}
		return (
			<f.Z
				className={`chatEntry${a ? " compactView" : ""}${o}`}
				flow-children="row"
				{...c}
				navEntryPreferPosition={V.iU.PREFERRED_CHILD}
				ref={this.m_refContainer}
			>
				<B_1 fileUploadManager={chatView.file_upload_manager} />
				<J_1
					clipToUpload={chatView.clip_to_upload}
					finishUpload={(t) => {
						chatView.SetClipToUpload(undefined);
						if (t) {
							chatView.SendChatMessage(t);
						}
					}}
				/>
				<form
					className={`${R.chatEntryControls}`}
					onSubmit={this.OnSubmit}
					onBlur={this.OnBlur}
				>
					{n}
					<E.dO
						className={R.chatTextarea}
						value={this.state.messageInput}
						preferredFocus
						onKeyboardFullyVisible={this.OnKeyboardFullyVisible}
						onPaste={this.OnPaste}
						onContextMenu={this.OnContextMenu}
						ref={this.m_refTextInput}
						onChange={this.OnTextAreaChange}
						navRef={this.m_navRef}
						onKeyDown={this.OnKeyDown}
						onKeyUp={this.OnKeyPress}
						onClick={this.OnClick}
						onFocus={this.OnFocus}
						disabled={disabled || u.xm.CMInterface.BDisconnected()}
						maxLength={5000}
						spellCheck={!u.xm.SettingsStore.FriendsSettings.bDisableSpellcheck}
					/>
					<E.fu
						className={
							R.chatSubmitButton +
							(this.state.submitEnabled ? "" : ` ${R.disabled}`)
						}
						type="submit"
						disabled={!this.state.submitEnabled}
						title={(0, Localize)("#ChatEntryButton_Submit")}
						onOKActionDescription={(0, Localize)("#ChatEntryButton_Submit")}
					>
						<h.XTb />
					</E.fu>
					<input
						type="file"
						accept=".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv"
						style={{
							display: "none",
						}}
						name="fileupload"
						ref={this.m_refFileInput}
						onChange={this.OnFileInputChange}
					/>
				</form>
				<div className={`${R.chatEntryActionsContainer} compactableHeight`}>
					{!this.context?.IN_GAMEPADUI && (
						<div className={R.chatEntryActionsGroup}>
							<D.A
								disabled={disabled}
								OnEmoticonSelected={this.OnEmoticonSelected}
								onRoomEffectSelected={this.OnRoomEffectSelected}
								roomEffectSettings={u.xm.GetChatRoomEffectSettings()}
								onStickerSelected={this.OnStickerSelected}
								rtLastAckedNewEmoticons={
									d.ZM.UIDisplayPrefs.rtLastAckedNewEmoticons
								}
								SetUIDisplayPref={d.ZM.SetUIDisplayPref.bind(d.ZM)}
								emoticonHoverStore={M.s}
								emoticonStore={u.xm.ChatStore.EmoticonStore}
								bShowChatAddons
							/>
							<E.fu
								className={`${R.chatSubmitButton} ${R.EmbedButton}${
									disabled ? ` ${R.disabled}` : ""
								}`}
								type="button"
								onClick={this.OnEmbedClick}
								title={(0, Localize)("#ChatEntryButton_SendEmbed")}
								disabled={disabled}
								onOKActionDescription={(0, Localize)(
									"#ChatEntryButton_SendEmbed",
								)}
							>
								<h.pDR />
							</E.fu>
						</div>
					)}
					{!this.context?.IN_GAMEPADUI && <Q chat={i} />}
				</div>
				<div className="disconnectBlocker compactableHeight" />
			</f.Z>
		);
	}
};
Cg([g.oI], o.prototype, "BindMentionDialog", null);
Cg([g.oI], o.prototype, "OnSubmit", null);
Cg([g.oI], o.prototype, "OnTextAreaChange", null);
Cg([g.oI], o.prototype, "SizeChatEntry", null);
Cg([g.oI], o.prototype, "OnFocus", null);
Cg([g.oI], o.prototype, "OnBlur", null);
Cg([g.oI], o.prototype, "OnKeyDown", null);
Cg([g.oI], o.prototype, "OnPaste", null);
Cg([g.oI], o.prototype, "OnFileInputChange", null);
Cg([g.oI], o.prototype, "OnEmbedClick", null);
Cg([g.oI], o.prototype, "OnEmoticonSelected", null);
Cg([g.oI], o.prototype, "OnKeyPress", null);
Cg([g.oI], o.prototype, "OnKeyboardFullyVisible", null);
Cg([g.oI], o.prototype, "OnClick", null);
Cg([g.oI], o.prototype, "OnContextMenu", null);
Cg([g.oI], o.prototype, "OnMentionSuggestionSelected", null);
Cg([g.oI], o.prototype, "OnEmoticonSuggestionSelected", null);
Cg([g.oI], o.prototype, "OnSlashCommandSuggestionSelected", null);
Cg([g.oI], o.prototype, "OnStoreSuggestionSelected", null);
Cg([g.oI], o.prototype, "FocusTextInput", null);
Cg([g.oI], o.prototype, "TextUpdated", null);
Cg([g.oI], o.prototype, "OnRoomEffectSelected", null);
Cg([g.oI], o.prototype, "OnStickerSelected", null);
o = Cg([p.PA], o);
let Q = class extends A.Component {
	HandleStartVoice(e) {
		let t = this.props.chat;
		if (t instanceof m.s) {
			t.ToggleVoiceChat();
			return;
		}
		if (this.IsVoiceActiveForButton()) {
			u.xm.VoiceStore.OnUserEndVoiceChat();
			return;
		}
		if (!(t instanceof l.d)) {
			return;
		}
		let r = t.GetGroup();
		if (!r) {
			return;
		}
		let r_voiceRoomList = r.voiceRoomList;
		if (r_voiceRoomList.length == 0) {
			r.CreateAndJoinTempVoiceRoom();
			return;
		}
		if (r_voiceRoomList.length == 1) {
			let [e] = r_voiceRoomList;
			u.xm.VoiceStore.InitiateRoomChat(r.GetGroupID(), e.GetRoomID());
			return;
		}
		let i = <J group={r} />;
		lX(i, e.currentTarget, {
			bOverlapHorizontal: true,
			bPreferPopLeft: true,
			bPreferPopTop: true,
		});
	}
	IsVoiceActiveForButton() {
		let e = this.props.chat;
		let t = false;
		if (e instanceof m.s) {
			t = e.BVoiceActive();
		} else if (e instanceof l.d) {
			let r = e.GetGroup();
			t = u.xm.VoiceStore.IsVoiceActiveForGroup(r.GetGroupID());
		}
		return t;
	}
	OnSettingsClick(e) {
		T_1(CO(e), e.currentTarget.ownerDocument.defaultView, "voice");
	}
	render() {
		let e = this.IsVoiceActiveForButton();
		let t = ["VoiceToggle"];
		let r = "";
		let n = this.props.chat;
		if (e) {
			t.push("Active");
			if (u.xm.VoiceStore.BNoMicAvailableForSession()) {
				t.push("NoMicrophone");
			}
			if (u.xm.VoiceStore.IsMicMuted()) {
				t.push("MicMuted");
			}
		} else {
			t.push(" Inactive");
		}
		let i = !n.BIsVoiceAllowed();
		if (i) {
			t.push(" Disabled");
			r = n.GetVoiceNotAllowedReason();
		} else if (n instanceof m.s) {
			r = e
				? "#Tooltip_VoiceControlButton_1v1_active"
				: "#Tooltip_VoiceControlButton_1v1_inactive";
		} else if (n instanceof l.d) {
			if (this.IsVoiceActiveForButton()) {
				r = "#Tooltip_VoiceControlButton_group_leave";
			} else {
				let e = n.GetGroup();
				if (e && e.voiceRoomList.length == 0) {
					r = "#Tooltip_VoiceControlButton_group_create";
				} else if (e && e.voiceRoomList.length == 1) {
					r = "#Tooltip_VoiceControlButton_group_joinsingle";
				} else if (e) {
					r = "#Tooltip_VoiceControlButton_group_joinmultiple";
				}
			}
		}
		let a = u.xm.VoiceStore.GetPushToTalkEnabled();
		let s = u.xm.VoiceStore.GetPushToMuteEnabled();
		let o = u.xm.VoiceStore.GetPushToTalkVoiceStateEnabled();
		let c = u.xm.VoiceStore.GetPushToTalkHotKeyDisplayString();
		let d = "";
		if (a || s) {
			d += " pushToTalkEnabled";
		}
		if (o) {
			d += " pushToTalkKeyDown";
		}
		return (
			<div
				className={`ChatMessageEntryVoice${d}${e ? " Active" : " Inactive"}${
					i ? " Disabled" : ""
				}`}
			>
				<div className="buttonsContainer">
					<E.fu
						disabled={i}
						className={t.join(" ")}
						onClick={this.HandleStartVoice}
						onOKActionDescription={(0, Localize)(r)}
						title={(0, Localize)(r)}
					>
						<div className="VoiceToggleIconCtn">
							{e ? <h.OWN /> : <h.mrd />}
						</div>
					</E.fu>
					{e && (
						<div className="activeVoiceControls">
							<div className="activeVoiceFlexBox">
								<div className="activeVoiceButtons">
									<L.f7 />
									<L.Ql />
								</div>
							</div>
						</div>
					)}
				</div>
				{(a || s) && this.IsVoiceActiveForButton() && (
					<div
						className={`activeVoicePushToTalk${d}`}
						title={(0, Localize)(
							s ? "#ActiveVoicePushToMute" : "#ActiveVoicePushToTalk",
							c,
						)}
					>
						{c}
					</div>
				)}
			</div>
		);
	}
};
Cg([g.oI], Q.prototype, "HandleStartVoice", null);
Cg([g.oI], Q.prototype, "OnSettingsClick", null);
Q = Cg([p.PA], Q);
class Z extends F.A {
	static contextType = U.QO;
	static nMaxMatches = 12;
	async performSearch(e) {
		return this.props.chatView.SearchMembersForMention(e, Number.MAX_VALUE);
	}
	ChooseSuggestion(e) {
		if (!e || !e.strNotSelectable) {
			super.ChooseSuggestion(e);
		}
	}
	getSelection(e) {
		if (e.friend) {
			return e.friend;
		} else {
			return e.meta_mention;
		}
	}
	getKey(e) {
		return `${e.friend ? e.friend.accountid : e.meta_mention}`;
	}
	renderMatch(e) {
		let t;
		let r;
		let { friend, iMatchOffset, bNicknameMatch } = e;
		let s = this.props.strSearch.length;
		let o = null;
		if (friend) {
			t = friend.persona.m_strPlayerName;
			r = friend.has_nickname && friend.nickname;
			if (friend.persona.avatar_url_medium) {
				o = friend.persona.avatar_url_medium;
			}
		} else {
			t = `@${e.meta_mention}`;
			r = null;
			iMatchOffset++;
		}
		if (bNicknameMatch) {
			return (
				<span className="mentionSuggestion">
					{o && (
						<img
							className="mentionAvatar"
							src={friend.persona.avatar_url_medium}
							draggable={false}
						/>
					)}
					{t}
					<span className="nickname">
						{"\xA0("}
						{r.substr(0, iMatchOffset).replace(/ /g, "\xA0")}
						<span className="mentionSearchMatch">
							{r.substr(iMatchOffset, s).replace(/ /g, "\xA0")}
						</span>
						{r.substr(iMatchOffset + s).replace(/ /g, "\xA0")})
					</span>
				</span>
			);
		} else {
			return (
				<span className="mentionSuggestion">
					{t.substr(0, iMatchOffset).replace(/ /g, "\xA0")}
					{o && (
						<img
							className="mentionAvatar"
							src={friend.persona.avatar_url_medium}
							draggable={false}
						/>
					)}
					<span className="mentionSearchMatch">
						{t.substr(iMatchOffset, s).replace(/ /g, "\xA0")}
					</span>
					{t.substr(iMatchOffset + s).replace(/ /g, "\xA0")}
					{e.strNotSelectable && (
						<span className="notSelectable"> {`: ${e.strNotSelectable}`} </span>
					)}
					{r && (
						<span className="nickname">
							{"\xA0("}
							{r})
						</span>
					)}
				</span>
			);
		}
	}
	renderNoMatchMessage() {
		return (
			<div
				key="nomatches"
				className="suggestOption mentionSearchOption noMatches"
			>
				{(0, Localize)("#ChatMentionSuggest_NoMatches")}
			</div>
		);
	}
	renderTooManyMatchesMessage(e) {
		let t =
			e <= 1
				? "#ChatMentionSuggest_ManyMatches"
				: "#ChatMentionSuggest_ManyMatchesPlural";
		return (
			<div
				key="manymatches"
				className="suggestOption mentionSearchOption manyMatches"
			>
				{(0, Localize)(t, e)}
			</div>
		);
	}
	renderHeader() {
		return (
			<div className="mentionSearchText">
				{(0, Localize)(
					"#ChatMentionSuggest_MembersMatching",
					this.props.strSearch,
				)}
			</div>
		);
	}
	getMaxMatches() {
		if (this.context?.IN_GAMEPADUI) {
			return 6;
		} else {
			return Z.nMaxMatches;
		}
	}
}
class Y extends F.A {
	performSearch(e) {
		const t = `/${e}`;
		return MC().filter((e) => e.startsWith(t));
	}
	getSelection(e) {
		return e;
	}
	getKey(e) {
		return e;
	}
	renderMatch(e) {
		const t = K_1(e);
		if (!t) {
			return null;
		}
		const r = (0, Localize)(t.strDescriptionToken);
		return (
			<span className="SlashCommandSuggestion">
				<span className="SlashCommandSuggestion_SlashCommand">{e}</span>
				{": "}
				<span className="SlashCommandSuggestion_SlashCommandDescription">
					{r}
				</span>
			</span>
		);
	}
	renderNoMatchMessage() {
		return null;
	}
	renderTooManyMatchesMessage(e) {
		return null;
	}
	renderHeader() {
		return null;
	}
	getMaxMatches() {
		return Number.MAX_VALUE;
	}
}
class K extends F.A {
	m_mapSuggestions;
	async performSearch(e) {
		this.m_mapSuggestions ||= new Map();
		let t = e.trim();
		if (!this.m_mapSuggestions.has(t)) {
			this.m_mapSuggestions.set(t, this.loadSearchFromStore(t));
		}
		return this.m_mapSuggestions.get(t);
	}
	async loadSearchFromStore(e) {
		const t = {
			term: e,
			f: "json",
			cc: s.TS.COUNTRY,
			l: s.TS.LANGUAGE,
			origin: self.origin,
		};
		return (
			(
				await a.get(`${s.TS.STORE_BASE_URL}search/suggest`, {
					params: t,
				})
			).data.filter((e) => e.type === "game" || e.type === "software") || []
		);
	}
	getSelection(e) {
		return `${s.TS.STORE_BASE_URL}app/${e.id}`;
	}
	getKey(e) {
		return String(e.id);
	}
	renderMatch(e) {
		return (
			<span className="SlashCommandSuggestion">
				<span className="SlashCommandSuggestion_SlashCommand">{e.name}</span>
			</span>
		);
	}
	renderNoMatchMessage() {
		return null;
	}
	renderTooManyMatchesMessage(e) {
		return null;
	}
	renderHeader() {
		return null;
	}
	getMaxMatches() {
		return Number.MAX_VALUE;
	}
}
function X(e) {
	let t = [];
	let r =
		typeof SteamClient != "undefined" && SteamClient.Screenshots !== undefined;
	let n = (() => {
		let e =
			typeof SteamClient != "undefined" &&
			SteamClient.Screenshots !== undefined;
		const [t, setT] = A.useState(null);
		A.useEffect(() => {
			if (!e) {
				return;
			}
			let t = false;
			SteamClient.Screenshots.GetLastScreenshotTaken().then((e) => {
				if (!t) {
					setT(e);
				}
			});
			return () => {
				t = true;
			};
		}, [e]);
		if (e) {
			return t;
		} else {
			return null;
		}
	})();
	i3();
	if (e.refFileInput) {
		t.push(
			<k.kt
				key="upload"
				onSelected={() => {
					e.refFileInput.click();
				}}
			>
				{(0, Localize)("#ChatEntry_UploadImage")}
			</k.kt>,
		);
	}
	if (r) {
		let r = n == null || n === undefined;
		let i = null;
		if (!r && n) {
			i = () =>
				(async (e, t) => {
					let r = `https://steamloopback.host/${t}`;
					let n = await a({
						url: r,
						method: "GET",
						responseType: "blob",
					});
					let i = O.tC(r, "/");
					let s = BlobToFile(n.data, i);
					e.SetFileToUpload(s);
				})(e.chatView, n.strUrl);
		}
		t.push(
			<k.kt key="lastscreenshot" disabled={r} onSelected={i}>
				{(0, Localize)("#ChatEntry_UploadLastScreenshot")}
			</k.kt>,
		);
	}
	t.push(
		<k.kt
			key="tradeoffer"
			onSelected={() => {
				u.xm.EconomyStore.GetTradeOfferURL().then((t) => {
					e.fnInsertText(t);
				});
			}}
		>
			{(0, Localize)("#ChatEntry_SendTradeURL")}
		</k.kt>,
	);
	return <k.tz>{t}</k.tz>;
}
function J(e) {
	let t = e.group.GetGroupID();
	let r = e.group.voiceRoomList.map((e) => (
		<k.kt
			key={e.GetRoomID()}
			onSelected={() => {
				u.xm.VoiceStore.InitiateRoomChat(t, e.GetRoomID());
			}}
		>
			{e.name}
		</k.kt>
	));
	return <k.tz>{r}</k.tz>;
}
