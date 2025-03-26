var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require("./44234.js");
var _o = require("./89459.js");
var l = require("./3756.js");
var c = require("./96127.js");
var m = require("./8653.js");
var u = require("./95773.js");
var d = require("./52912.js");
var A = require(/*webcrack:missing*/ "./63696.js");
var p = require(/*webcrack:missing*/ "./41230.js");
var g = require(/*webcrack:missing*/ "./52451.js");
var h = require(/*webcrack:missing*/ "./50376.js");
var C = require("./64608.js");
import { Localize } from "../../actual_src/utils/localization.js";
var f = require(/*webcrack:missing*/ "./69164.js");
let b = class extends A.Component {
	render() {
		const { fileUploadManager: e } = this.props;
		let t = e.file_upload_props.eUploadState;
		if (t == 1) {
			return A.createElement(y, {
				fileUploadManager: e,
			});
		} else if (t == 3 || t == 5 || t == 4) {
			return A.createElement(w, {
				fileUploadManager: e,
			});
		} else if (t != 0) {
			return A.createElement(S, {
				fileUploadManager: e,
			});
		} else {
			return null;
		}
	}
};
function y(e) {
	const { fileUploadManager: t } = e;
	const [r, n] = (0, A.useState)(false);
	const i = (0, A.useRef)();
	(0, A.useEffect)(() => i.current?.focus(), []);
	const a = () => t.Reset();
	let s;
	let o = t.file;
	if (o) {
		if (o.type.indexOf("image") != -1) {
			s = A.createElement("img", {
				className: "chatFileUploadPreview",
				src: t.file_upload_data_url,
			});
		} else if (o.type.indexOf("video") != -1) {
			s = A.createElement(h.CeX, null);
		}
	} else if (t.file_upload_props.exportFn) {
		s = A.createElement(h.CeX, null);
	}
	const l = t.file_upload_props.displayFileName;
	const c = () => true;
	return A.createElement(
		f.Z,
		{
			className: "chatFileUploadPreviewContainer chatUploadContainer",
			autoFocus: true,
			retainFocus: true,
			preferredFocus: true,
			onMoveLeft: c,
			onMoveRight: c,
			onMoveUp: c,
			onMoveDown: c,
			onCancel: a,
		},
		s,
		l &&
			A.createElement(
				"div",
				{
					className: "chatFileUploadFileName",
				},
				"'",
				l,
				"'",
			),
		A.createElement(
			f.Z,
			{
				className: "chatFileUploadCancel",
				onActivate: a,
			},
			A.createElement(h.sED, null),
		),
		A.createElement(
			C.jn,
			{
				ref: i,
				autoFocus: true,
				className: "chatFileUploadBtn",
				onClick: async () => {
					await t.BeginFileUpload({
						bSpoiler: r,
					});
					t.Reset();
				},
			},
			(0, Localize)("#Chat_Upload"),
		),
		A.createElement(C.Yh, {
			className: "spoilerCheckBox",
			label: (0, Localize)("#ChatEntry_TagAsSpoiler"),
			checked: r,
			onChange: () => n((e) => !e),
		}),
	);
}
b = (0, n.Cg)([p.PA], b);
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
			width: e.uploadProgress + "%",
		};
		return A.createElement(
			"div",
			{
				className: "chatFileUploadProgressContainer chatUploadContainer",
			},
			A.createElement(
				"div",
				{
					className: "chatFileUploadProgressName",
				},
				r,
			),
			A.createElement(
				"div",
				{
					className:
						"chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer",
				},
				A.createElement("div", {
					className: "DialogProgressBar_Value",
					style: n,
				}),
			),
		);
	}
};
S = (0, n.Cg)([p.PA], S);
let w = class extends A.Component {
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
			e = A.createElement(
				C.jn,
				{
					onClick: this.OnRetryClick,
				},
				(0, Localize)("#Chat_Upload_ErrorAction_Retry"),
			);
		}
		const i = () => true;
		return A.createElement(
			f.Z,
			{
				className: "chatFileUploadProgressContainer chatUploadContainer",
				autoFocus: true,
				retainFocus: true,
				preferredFocus: true,
				onMoveLeft: i,
				onMoveRight: i,
				onMoveUp: i,
				onMoveDown: i,
				onCancel: this.ClearErrorState,
			},
			A.createElement(
				"div",
				{
					className: "chatFileUploadProgressName",
				},
				r,
			),
			A.createElement(
				"div",
				{
					className: "chatFileUploadErrorDescription",
				},
				n,
			),
			A.createElement(
				"div",
				{
					className: "chatFileUploadActions",
				},
				A.createElement(
					C.dR,
					{
						className: "DialogLayout_NoMinWidth",
					},
					e,
					A.createElement(
						C.$n,
						{
							autoFocus: true,
							onClick: this.ClearErrorState,
						},
						(0, Localize)("#Chat_Upload_ErrorAction_Close"),
					),
				),
			),
		);
	}
};
(0, n.Cg)([g.oI], w.prototype, "ClearErrorState", null);
(0, n.Cg)([g.oI], w.prototype, "OnRetryClick", null);
w = (0, n.Cg)([p.PA], w);
var B = require("./50551.js");
var v = require(/*webcrack:missing*/ "./28987.js");
var I = require(/*webcrack:missing*/ "./31084.js");
var E = require(/*webcrack:missing*/ "./90242.js");
var M = require("./56840.js");
var T = require("./94230.js");
var R = T;
var k = require(/*webcrack:missing*/ "./88750.js");
var D = require("./15688.js");
var N = require("./7372.js");
var F = require("./98592.js");
import {
	BIsParentOrSelf,
	GetFileFromPasteEvent,
	BlobToFile,
} from "../../actual_src/utils/domutils.js";
var O = require("./51095.js");
var P = require("./92009.js");
var L = require("./98829.js");
var z = require("./13869.js");
var x = require("./10042.js");
var U = require(/*webcrack:missing*/ "./72476.js");
var W = require("./91720.js");
var V = require(/*webcrack:missing*/ "./4690.js");
const H = A.lazy(() => require.e(7462).then(require.bind(require, 24709)));
function j(e) {
	return A.createElement(
		A.Suspense,
		{
			fallback: null,
		},
		A.createElement(H, {
			...e,
		}),
	);
}
export let o = class extends A.Component {
	static contextType = U.QO;
	m_navRef = (0, E.b$)();
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
			const { fnUploadClip: e } = (0, W.Sm)();
			e(this.props.chatView.clip_to_upload.clip_id, "", "", 3).then((e) => {
				if (e.eResult == 1 && e.strURL) {
					this.props.chatView.SendChatMessage(e.strURL);
				}
				this.props.chatView.SetClipToUpload(undefined);
			});
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
			this.m_nChatEntryInitialHeight = e.clientHeight - i - r + "px";
		}
		let a = e.scrollHeight - i - r;
		if (t) {
			e.style.height = this.m_nChatEntryInitialHeight;
			this.m_nChatEntryInitialHeight = undefined;
		} else {
			e.style.height = Math.min(120, a) + "px";
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
			if ((0, k.Y8)()) {
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
		} else if (e.keyCode != 13 || e.shiftKey || e.ctrlKey) {
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
		let t = e.currentTarget;
		if (t.files.length) {
			this.props.chatView.SetFileToUpload(t.files[0]);
			t.value = "";
		}
	}
	OnEmbedClick(e) {
		(0, I.lX)(
			A.createElement(X, {
				chatView: this.props.chatView,
				refFileInput: this.m_refFileInput.current,
				fnInsertText: this.InsertAtCursor.bind(this),
			}),
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
		let r = t.value;
		let n = r.substr(0, t.selectionStart) + e + r.substr(t.selectionEnd);
		let i = t.selectionStart + e.length;
		this.SetMessageInput(n, () => {
			t.selectionStart = t.selectionEnd = i;
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
		let i = e.selectionStart;
		let a = e.value;
		for (let e = i - 1; e >= 0; e--) {
			let o = e > 0 ? a[e - 1] : undefined;
			if ((a[e] == "@" || a[e] == "＠") && t) {
				if (!o || o == " " || o == "\n") {
					r = e;
					n = "Mention";
				}
				break;
			}
			if (a[e] == ":" && i - e > 2) {
				if (!o || o == " " || o == "\n" || o == ":") {
					r = e;
					n = "Emoticon";
				}
				break;
			}
			if (s.TS.EREALM != v.TU.k_ESteamRealmChina && a.startsWith("/store ")) {
				r = 6;
				n = "Store";
				break;
			}
			if (a[e] == "/" && e == 0) {
				r = e;
				n = "SlashCommand";
				break;
			}
			if (a[e] == " " || a[e] == "\n") {
				break;
			}
		}
		if (r === undefined || r === this.m_iMentionSearchCancelledOffset) {
			this.ClearMentionSearchState();
			return;
		}
		let o = a.substr(r + 1, i - r - 1);
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
			let s = e.length;
			e += i.substr(n);
			this.SetMessageInput(e, r);
			this.m_refTextInput.current.value = e;
			this.m_refTextInput.current.selectionStart =
				this.m_refTextInput.current.selectionEnd = s;
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
					r += "#" + t.accountid.toString(36);
				} else {
					r += "#0";
				}
			}
		}
		this.ReplaceSuggestedText("@", "@" + r);
		this.ClearMentionSearchState();
	}
	OnEmoticonSuggestionSelected(e, t) {
		if (!t) {
			this.m_iMentionSearchCancelledOffset = this.m_iMentionSearchStartOffset;
			this.ClearMentionSearchState();
			return;
		}
		this.ReplaceSuggestedText(":", ":" + t + ":");
		this.ClearMentionSearchState();
	}
	OnSlashCommandSuggestionSelected(e, t) {
		if (!t) {
			this.m_iMentionSearchCancelledOffset = this.m_iMentionSearchStartOffset;
			this.ClearMentionSearchState();
			return;
		}
		this.ReplaceSuggestedText("/", t, () => {
			if ((0, _o.K)(t).unExpectedArguments === 0) {
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
		let t = e.text_entry;
		if (t != this.state.messageInput) {
			this.setState({
				messageInput: t,
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
		const { chatView: e, disabled: t, ownerWindow: r } = this.props;
		let n;
		let i = e && e.chat;
		switch (this.state.activeSuggestSearchType) {
			case "Mention":
				n = A.createElement(Z, {
					chatView: e,
					strSearch: this.state.mentionSearch,
					onSuggestionSelected: this.OnMentionSuggestionSelected,
					ref: this.BindMentionDialog,
				});
				break;
			case "Emoticon":
				n = A.createElement(N.A, {
					emoticonStore: u.xm.ChatStore.EmoticonStore,
					emoticonHoverStore: M.s,
					strSearch: this.state.mentionSearch,
					nMinimumSearchLengthBeforeAutoSelection: 2,
					onSuggestionSelected: this.OnEmoticonSuggestionSelected,
					ref: this.BindMentionDialog,
				});
				break;
			case "SlashCommand":
				n = A.createElement(Y, {
					strSearch: this.state.mentionSearch,
					onSuggestionSelected: this.OnSlashCommandSuggestionSelected,
					ref: this.BindMentionDialog,
				});
				break;
			case "Store":
				n = A.createElement(K, {
					strSearch: this.state.mentionSearch,
					onSuggestionSelected: this.OnStoreSuggestionSelected,
					ref: this.BindMentionDialog,
				});
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
				if (!e.BVoiceActive()) {
					c.onOptionsButton = () => i.ToggleVoiceChat();
					let e = i.accountid_partner;
					let t = u.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(e);
					c.onOptionsActionDescription = (0, Localize)(
						t ? "#Voice_StartTalking" : "#Friend_Menu_StartVoiceChat",
					);
				}
			} else if (i instanceof l.d) {
				let t = e.GetParentGroupView();
				let n = t.GetGroup();
				if (n.voiceRoomList.length > 1) {
					const e = () => {
						(0, z.pg)(
							A.createElement(x._1, {
								groupView: t,
							}),
							r,
						);
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
		return A.createElement(
			f.Z,
			{
				className: "chatEntry" + (a ? " compactView" : "") + o,
				"flow-children": "row",
				...c,
				navEntryPreferPosition: V.iU.PREFERRED_CHILD,
				ref: this.m_refContainer,
			},
			A.createElement(b, {
				fileUploadManager: e.file_upload_manager,
			}),
			A.createElement(j, {
				clipToUpload: e.clip_to_upload,
				finishUpload: (t) => {
					e.SetClipToUpload(undefined);
					if (t) {
						e.SendChatMessage(t);
					}
				},
			}),
			A.createElement(
				"form",
				{
					className: `${R.chatEntryControls}`,
					onSubmit: this.OnSubmit,
					onBlur: this.OnBlur,
				},
				n,
				A.createElement(E.dO, {
					className: R.chatTextarea,
					value: this.state.messageInput,
					preferredFocus: true,
					onKeyboardFullyVisible: this.OnKeyboardFullyVisible,
					onPaste: this.OnPaste,
					onContextMenu: this.OnContextMenu,
					ref: this.m_refTextInput,
					onChange: this.OnTextAreaChange,
					navRef: this.m_navRef,
					onKeyDown: this.OnKeyDown,
					onKeyUp: this.OnKeyPress,
					onClick: this.OnClick,
					onFocus: this.OnFocus,
					disabled: t || u.xm.CMInterface.BDisconnected(),
					maxLength: 5000,
					spellCheck: !u.xm.SettingsStore.FriendsSettings.bDisableSpellcheck,
				}),
				A.createElement(
					E.fu,
					{
						className:
							R.chatSubmitButton +
							(this.state.submitEnabled ? "" : ` ${R.disabled}`),
						type: "submit",
						disabled: !this.state.submitEnabled,
						title: (0, Localize)("#ChatEntryButton_Submit"),
						onOKActionDescription: (0, Localize)("#ChatEntryButton_Submit"),
					},
					A.createElement(h.XTb, null),
				),
				A.createElement("input", {
					type: "file",
					accept: ".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv",
					style: {
						display: "none",
					},
					name: "fileupload",
					ref: this.m_refFileInput,
					onChange: this.OnFileInputChange,
				}),
			),
			A.createElement(
				"div",
				{
					className: `${R.chatEntryActionsContainer} compactableHeight`,
				},
				!this.context?.IN_GAMEPADUI &&
					A.createElement(
						"div",
						{
							className: R.chatEntryActionsGroup,
						},
						A.createElement(D.A, {
							disabled: t,
							OnEmoticonSelected: this.OnEmoticonSelected,
							onRoomEffectSelected: this.OnRoomEffectSelected,
							roomEffectSettings: u.xm.GetChatRoomEffectSettings(),
							onStickerSelected: this.OnStickerSelected,
							rtLastAckedNewEmoticons:
								d.ZM.UIDisplayPrefs.rtLastAckedNewEmoticons,
							SetUIDisplayPref: d.ZM.SetUIDisplayPref.bind(d.ZM),
							emoticonHoverStore: M.s,
							emoticonStore: u.xm.ChatStore.EmoticonStore,
							bShowChatAddons: true,
						}),
						A.createElement(
							E.fu,
							{
								className: `${R.chatSubmitButton} ${R.EmbedButton}${t ? ` ${R.disabled}` : ""}`,
								type: "button",
								onClick: this.OnEmbedClick,
								title: (0, Localize)("#ChatEntryButton_SendEmbed"),
								disabled: t,
								onOKActionDescription: (0, Localize)(
									"#ChatEntryButton_SendEmbed",
								),
							},
							A.createElement(h.pDR, null),
						),
					),
				!this.context?.IN_GAMEPADUI &&
					A.createElement(Q, {
						chat: i,
					}),
			),
			A.createElement("div", {
				className: "disconnectBlocker compactableHeight",
			}),
		);
	}
};
(0, n.Cg)([g.oI], o.prototype, "BindMentionDialog", null);
(0, n.Cg)([g.oI], o.prototype, "OnSubmit", null);
(0, n.Cg)([g.oI], o.prototype, "OnTextAreaChange", null);
(0, n.Cg)([g.oI], o.prototype, "SizeChatEntry", null);
(0, n.Cg)([g.oI], o.prototype, "OnFocus", null);
(0, n.Cg)([g.oI], o.prototype, "OnBlur", null);
(0, n.Cg)([g.oI], o.prototype, "OnKeyDown", null);
(0, n.Cg)([g.oI], o.prototype, "OnPaste", null);
(0, n.Cg)([g.oI], o.prototype, "OnFileInputChange", null);
(0, n.Cg)([g.oI], o.prototype, "OnEmbedClick", null);
(0, n.Cg)([g.oI], o.prototype, "OnEmoticonSelected", null);
(0, n.Cg)([g.oI], o.prototype, "OnKeyPress", null);
(0, n.Cg)([g.oI], o.prototype, "OnKeyboardFullyVisible", null);
(0, n.Cg)([g.oI], o.prototype, "OnClick", null);
(0, n.Cg)([g.oI], o.prototype, "OnContextMenu", null);
(0, n.Cg)([g.oI], o.prototype, "OnMentionSuggestionSelected", null);
(0, n.Cg)([g.oI], o.prototype, "OnEmoticonSuggestionSelected", null);
(0, n.Cg)([g.oI], o.prototype, "OnSlashCommandSuggestionSelected", null);
(0, n.Cg)([g.oI], o.prototype, "OnStoreSuggestionSelected", null);
(0, n.Cg)([g.oI], o.prototype, "FocusTextInput", null);
(0, n.Cg)([g.oI], o.prototype, "TextUpdated", null);
(0, n.Cg)([g.oI], o.prototype, "OnRoomEffectSelected", null);
(0, n.Cg)([g.oI], o.prototype, "OnStickerSelected", null);
o = (0, n.Cg)([p.PA], o);
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
		let n = r.voiceRoomList;
		if (n.length == 0) {
			r.CreateAndJoinTempVoiceRoom();
			return;
		}
		if (n.length == 1) {
			let e = n[0];
			u.xm.VoiceStore.InitiateRoomChat(r.GetGroupID(), e.GetRoomID());
			return;
		}
		let i = A.createElement(J, {
			group: r,
		});
		(0, I.lX)(i, e.currentTarget, {
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
		(0, P.T)((0, d.CO)(e), e.currentTarget.ownerDocument.defaultView, "voice");
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
		return A.createElement(
			"div",
			{
				className:
					"ChatMessageEntryVoice" +
					d +
					(e ? " Active" : " Inactive") +
					(i ? " Disabled" : ""),
			},
			A.createElement(
				"div",
				{
					className: "buttonsContainer",
				},
				A.createElement(
					E.fu,
					{
						disabled: i,
						className: t.join(" "),
						onClick: this.HandleStartVoice,
						onOKActionDescription: (0, Localize)(r),
						title: (0, Localize)(r),
					},
					A.createElement(
						"div",
						{
							className: "VoiceToggleIconCtn",
						},
						e ? A.createElement(h.OWN, null) : A.createElement(h.mrd, null),
					),
				),
				e &&
					A.createElement(
						"div",
						{
							className: "activeVoiceControls",
						},
						A.createElement(
							"div",
							{
								className: "activeVoiceFlexBox",
							},
							A.createElement(
								"div",
								{
									className: "activeVoiceButtons",
								},
								A.createElement(L.f7, null),
								A.createElement(L.Ql, null),
							),
						),
					),
			),
			(a || s) &&
				this.IsVoiceActiveForButton() &&
				A.createElement(
					"div",
					{
						className: "activeVoicePushToTalk" + d,
						title: (0, Localize)(
							s ? "#ActiveVoicePushToMute" : "#ActiveVoicePushToTalk",
							c,
						),
					},
					c,
				),
		);
	}
};
(0, n.Cg)([g.oI], Q.prototype, "HandleStartVoice", null);
(0, n.Cg)([g.oI], Q.prototype, "OnSettingsClick", null);
Q = (0, n.Cg)([p.PA], Q);
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
		return "" + (e.friend ? e.friend.accountid : e.meta_mention);
	}
	renderMatch(e) {
		let t;
		let r;
		let { friend: n, iMatchOffset: i, bNicknameMatch: a } = e;
		let s = this.props.strSearch.length;
		let o = null;
		if (n) {
			t = n.persona.m_strPlayerName;
			r = n.has_nickname && n.nickname;
			if (n.persona.avatar_url_medium) {
				o = n.persona.avatar_url_medium;
			}
		} else {
			t = "@" + e.meta_mention;
			r = null;
			i++;
		}
		if (a) {
			return A.createElement(
				"span",
				{
					className: "mentionSuggestion",
				},
				o &&
					A.createElement("img", {
						className: "mentionAvatar",
						src: n.persona.avatar_url_medium,
						draggable: false,
					}),
				t,
				A.createElement(
					"span",
					{
						className: "nickname",
					},
					"\xA0(",
					r.substr(0, i).replace(/ /g, "\xA0"),
					A.createElement(
						"span",
						{
							className: "mentionSearchMatch",
						},
						r.substr(i, s).replace(/ /g, "\xA0"),
					),
					r.substr(i + s).replace(/ /g, "\xA0"),
					")",
				),
			);
		} else {
			return A.createElement(
				"span",
				{
					className: "mentionSuggestion",
				},
				t.substr(0, i).replace(/ /g, "\xA0"),
				o &&
					A.createElement("img", {
						className: "mentionAvatar",
						src: n.persona.avatar_url_medium,
						draggable: false,
					}),
				A.createElement(
					"span",
					{
						className: "mentionSearchMatch",
					},
					t.substr(i, s).replace(/ /g, "\xA0"),
				),
				t.substr(i + s).replace(/ /g, "\xA0"),
				e.strNotSelectable &&
					A.createElement(
						"span",
						{
							className: "notSelectable",
						},
						" ",
						": " + e.strNotSelectable,
						" ",
					),
				r &&
					A.createElement(
						"span",
						{
							className: "nickname",
						},
						"\xA0(",
						r,
						")",
					),
			);
		}
	}
	renderNoMatchMessage() {
		return A.createElement(
			"div",
			{
				key: "nomatches",
				className: "suggestOption mentionSearchOption noMatches",
			},
			(0, Localize)("#ChatMentionSuggest_NoMatches"),
		);
	}
	renderTooManyMatchesMessage(e) {
		let t =
			e <= 1
				? "#ChatMentionSuggest_ManyMatches"
				: "#ChatMentionSuggest_ManyMatchesPlural";
		return A.createElement(
			"div",
			{
				key: "manymatches",
				className: "suggestOption mentionSearchOption manyMatches",
			},
			(0, Localize)(t, e),
		);
	}
	renderHeader() {
		return A.createElement(
			"div",
			{
				className: "mentionSearchText",
			},
			(0, Localize)(
				"#ChatMentionSuggest_MembersMatching",
				this.props.strSearch,
			),
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
		const t = "/" + e;
		return (0, _o.MC)().filter((e) => e.startsWith(t));
	}
	getSelection(e) {
		return e;
	}
	getKey(e) {
		return e;
	}
	renderMatch(e) {
		const t = (0, _o.K)(e);
		if (!t) {
			return null;
		}
		const r = (0, Localize)(t.strDescriptionToken);
		return A.createElement(
			"span",
			{
				className: "SlashCommandSuggestion",
			},
			A.createElement(
				"span",
				{
					className: "SlashCommandSuggestion_SlashCommand",
				},
				e,
			),
			": ",
			A.createElement(
				"span",
				{
					className: "SlashCommandSuggestion_SlashCommandDescription",
				},
				r,
			),
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
		return A.createElement(
			"span",
			{
				className: "SlashCommandSuggestion",
			},
			A.createElement(
				"span",
				{
					className: "SlashCommandSuggestion_SlashCommand",
				},
				e.name,
			),
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
	let n = (function () {
		let e =
			typeof SteamClient != "undefined" &&
			SteamClient.Screenshots !== undefined;
		const [t, r] = A.useState(null);
		A.useEffect(() => {
			if (!e) {
				return;
			}
			let t = false;
			SteamClient.Screenshots.GetLastScreenshotTaken().then((e) => {
				if (!t) {
					r(e);
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
	(0, W.i3)();
	if (e.refFileInput) {
		t.push(
			A.createElement(
				k.kt,
				{
					key: "upload",
					onSelected: () => {
						e.refFileInput.click();
					},
				},
				(0, Localize)("#ChatEntry_UploadImage"),
			),
		);
	}
	if (r) {
		let r = n == null || n === undefined;
		let i = null;
		if (!r && n) {
			i = () =>
				(async function (e, t) {
					let r = "https://steamloopback.host/" + t;
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
			A.createElement(
				k.kt,
				{
					key: "lastscreenshot",
					disabled: r,
					onSelected: i,
				},
				(0, Localize)("#ChatEntry_UploadLastScreenshot"),
			),
		);
	}
	t.push(
		A.createElement(
			k.kt,
			{
				key: "tradeoffer",
				onSelected: () => {
					u.xm.EconomyStore.GetTradeOfferURL().then((t) => {
						e.fnInsertText(t);
					});
				},
			},
			(0, Localize)("#ChatEntry_SendTradeURL"),
		),
	);
	return A.createElement(k.tz, null, t);
}
function J(e) {
	let t = e.group.GetGroupID();
	let r = e.group.voiceRoomList.map((e) =>
		A.createElement(
			k.kt,
			{
				key: e.GetRoomID(),
				onSelected: () => {
					u.xm.VoiceStore.InitiateRoomChat(t, e.GetRoomID());
				},
			},
			e.name,
		),
	);
	return A.createElement(k.tz, null, r);
}
