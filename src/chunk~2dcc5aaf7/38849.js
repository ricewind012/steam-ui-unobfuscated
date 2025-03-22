var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./50979.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./53833.js");
var o = require(/*webcrack:missing*/ "./79769.js");
var l = require(/*webcrack:missing*/ "./72476.js");
var c = require("./3756.js");
var m = require("./90601.js");
var u = require("./8653.js");
var d = require("./95773.js");
var A = require("./5128.js");
export class JB extends A.Q {
	m_tabset;
	m_chat;
	m_rgOnChatFrameChangedCallbacks = [];
	m_rgOnChatRequestScrollBottomCallbacks = [];
	m_bScrolledToBottom = true;
	m_scrollTop = -1;
	m_scrollHeight = -1;
	m_clientHeight = 1;
	m_strTextEntry;
	m_textEntryFocusCallbacks = new o.lu();
	m_textEntryChangeCallbacks = new o.lu();
	m_fileUploadManager;
	m_clipToUpload = undefined;
	constructor(e, t) {
		super();
		(0, a.Gn)(this);
		this.m_tabset = e;
		this.m_chat = t;
		if (this.m_tabset) {
			this.m_chat.AddChatView(this);
		}
		this.m_strTextEntry = "";
		this.m_fileUploadManager = new m.i6(t);
	}
	GetTabName() {
		return this.m_chat.name;
	}
	GetUniqueID() {
		return this.m_chat.unique_id;
	}
	OnTabFocus() {
		this.OnFocus();
	}
	InternalOnTabActivate() {
		this.OnActivate();
	}
	OnTabDeactivate() {
		this.OnDeactivate();
	}
	OnTabClosed() {
		this.OnViewClosed();
	}
	IsChatRoom() {
		return this.m_chat instanceof c.d;
	}
	IsFriendChat() {
		return this.m_chat instanceof u.s;
	}
	IsVoiceActive() {
		return this.m_chat.BVoiceActive();
	}
	GetUnreadMessageCount() {
		return this.m_chat.unread_message_count;
	}
	IsTabForChat(e) {
		return this.m_chat == e;
	}
	GetChatView() {
		return this;
	}
	OnViewClosed() {
		this.m_chat.RemoveChatView(this);
	}
	get chat() {
		return this.m_chat;
	}
	BIsInBrowserContext(e) {
		let t = this.m_tabset.GetBrowserContext();
		return e.m_nBrowserID == t.m_nBrowserID && e.m_unPID == t.m_unPID;
	}
	GetVisibilityState() {
		if (!this.m_tabset || (!this.m_tabset.is_popup_active && !l.TS.IN_MOBILE)) {
			return 0;
		}
		let e;
		if (this.m_tabset.activeTab) {
			e = this.m_tabset.activeTab.GetChatView();
		}
		if (e != this || (!this.m_tabset.is_popup_visible && !l.TS.IN_MOBILE)) {
			return 1;
		} else if (this.m_tabset.is_popup_focused || l.TS.IN_MOBILE) {
			if (this.m_bScrolledToBottom && !d.xm.IdleTracker.BIsUserIdle(60)) {
				return 4;
			} else {
				return 3;
			}
		} else {
			return 2;
		}
	}
	get lastScrollHeight() {
		return this.m_scrollHeight;
	}
	set lastScrollHeight(e) {
		this.m_scrollHeight = e;
	}
	get lastScrollTop() {
		return this.m_scrollTop;
	}
	set lastScrollTop(e) {
		this.m_scrollTop = e;
	}
	get lastClientHeight() {
		return this.m_clientHeight;
	}
	set lastClientHeight(e) {
		this.m_clientHeight = e;
	}
	get is_scrolled_to_bottom() {
		return this.m_bScrolledToBottom;
	}
	set is_scrolled_to_bottom(e) {
		if (!this.m_bScrolledToBottom && e) {
			this.m_chat.OnActivate();
		}
		this.m_bScrolledToBottom = e;
	}
	get text_entry() {
		return this.m_strTextEntry;
	}
	set text_entry(e) {
		this.m_strTextEntry = e;
	}
	get file_upload_manager() {
		return this.m_fileUploadManager;
	}
	get clip_to_upload() {
		return this.m_clipToUpload;
	}
	CheckActivationAndNotifyChat() {
		if (this.m_bScrolledToBottom) {
			this.m_chat.OnActivate();
		}
	}
	OnActivate() {
		this.CheckActivationAndNotifyChat();
		this.FocusTextInput();
		this.m_chat.m_msTimeActivated = Date.now();
	}
	OnDeactivate() {
		this.m_chat.OnDeactivate();
	}
	OnFocus() {
		this.CheckActivationAndNotifyChat();
	}
	FocusTextInput() {
		this.m_textEntryFocusCallbacks.Dispatch();
	}
	AddOnChatFrameChangedCallback(e) {
		this.m_rgOnChatFrameChangedCallbacks.push(e);
	}
	RemoveOnChatFrameChangedCallback(e) {
		s.x9(this.m_rgOnChatFrameChangedCallbacks, e);
	}
	AddOnChatRequestScrollBottomCallback(e) {
		this.m_rgOnChatRequestScrollBottomCallbacks.push(e);
	}
	RemoveOnChatRequestScrollBottomCallback(e) {
		s.x9(this.m_rgOnChatRequestScrollBottomCallbacks, e);
	}
	OnChatFrameChanged() {
		for (let e of this.m_rgOnChatFrameChangedCallbacks) {
			e();
		}
	}
	OnScrollBottomRequest() {
		for (let e of this.m_rgOnChatRequestScrollBottomCallbacks) {
			e();
		}
	}
	SetFileToUpload(e, t = {}) {
		this.m_fileUploadManager.SetImageFileToUpload(e, {
			processor: t.processor,
			info: {
				unAssociatedAppID: t.unAssociatedAppID,
			},
		});
	}
	StartFileExportToUpload(e, t = {}) {
		this.m_fileUploadManager.StartFileExportToUpload(e, {
			displayFilename: t.displayFilename,
			info: {
				unAssociatedAppID: t.unAssociatedAppID,
			},
			onComplete: t.onComplete,
		});
	}
	async UploadFile(e) {
		await this.m_fileUploadManager.BeginFileUpload({
			bSpoiler: e,
		});
		this.m_fileUploadManager.Reset();
	}
	SetClipToUpload(e) {
		this.m_clipToUpload = e;
	}
	RegisterForTextEntryFocus(e) {
		return this.m_textEntryFocusCallbacks.Register(e);
	}
	RegisterForTextUpdated(e) {
		return this.m_textEntryChangeCallbacks.Register(e);
	}
	BVoiceActive() {
		return this.m_chat.BVoiceActive();
	}
	ConvertMessageToBBCode(e) {
		return (0, i.js)(e);
	}
	async SendChatMessage(e) {
		return this.m_chat.SendChatMessage(this.ConvertMessageToBBCode(e));
	}
	AddPendingText(e) {
		this.m_strTextEntry += e;
		this.m_textEntryChangeCallbacks.Dispatch(this.m_strTextEntry);
	}
}
(0, n.Cg)([a.sH], JB.prototype, "m_bScrolledToBottom", undefined);
(0, n.Cg)([a.sH], JB.prototype, "m_clipToUpload", undefined);
export class CF extends JB {
	m_parentGroupView;
	constructor(e, t, r) {
		super(e, t);
		this.m_parentGroupView = r;
	}
	async SearchMembers(e, t) {
		return this.m_parentGroupView.SearchMembers(e, t);
	}
	async SearchMembersForMention(e, t) {
		const r = await this.SearchMembers(e, t);
		this.m_parentGroupView.GetGroup().AddMetaMentionsToResults(e, r);
		return r;
	}
	BIsMemberNameAmbiguous(e) {
		return this.m_parentGroupView.BIsMemberNameAmbiguous(e);
	}
	ConvertMessageToBBCode(e) {
		let t = (0, i.js)(e);
		return this.m_parentGroupView.ProcessMentions(t);
	}
	get virtualizer() {
		if (this.m_parentGroupView.GetGroup().BIsMemberListVirtualized()) {
			return this.m_parentGroupView.GetVirtualizedMemberListView();
		} else {
			return null;
		}
	}
	GetParentGroupView() {
		return this.m_parentGroupView;
	}
}
