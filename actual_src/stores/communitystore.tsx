// Webpack module ID: 3963

import { w } from "../../src/library/12176.js";
import { ZP, BE, aw, jt, s4 } from "../../src/chunk~2dcc5aaf7/10812.js";
import { lm } from "../../src/chunk~2dcc5aaf7/91705.js";
import { Children, type ReactNode } from "react";
import { nl as Nl } from "../../src/chunk~2dcc5aaf7/44164.js";
import { makeAutoObservable, observable } from "mobx";
import { B } from "../../src/chunk~2dcc5aaf7/8090.js";
import { OJ, R8 } from "../../src/chunk~2dcc5aaf7/1521.js";
import { yN, J2, z2, n, dC, PT, s0 } from "../../src/chunk~2dcc5aaf7/16117.js";
import { b } from "../../src/library/8573.js";
import { r as CEmoticonStore } from "../../src/chunk~2dcc5aaf7/77644.js";
import { p } from "../../src/chunk~2dcc5aaf7/31760.js";
import { h as CEmoticonHoverStore } from "../../src/chunk~2dcc5aaf7/56840.js";
import { bind } from "../utils/bind.js";
import { TS as Config } from "./43691.js";

function Emoticon(props: { children: ReactNode }) {
	let emoticon = "";
	if (typeof props.children == "string") {
		emoticon = props.children;
	} else {
		Children.forEach(props.children, (child) => {
			if (typeof child == "string") {
				emoticon += child;
			}
			if (typeof child == "object" && child.props) {
				let strBBCodeText = child.props["bbcode-text"];
				if (strBBCodeText) {
					emoticon += strBBCodeText;
				}
			}
		});
	}
	if (emoticon) {
		return (
			<Nl emoticon={emoticon} emoticonHoverStore={Nb.EmoticonHoverStore} />
		);
	} else {
		return null;
	}
}

class CCommentThread {
	@observable m_threadInfo = undefined;
	@observable m_rgComments = [];
	m_eThreadType;
	m_steamIDActor;
	m_gidfeature;
	m_gidfeature2;
	m_bUpdating = false;
	m_msLastUpdated = Date.now();

	constructor(eThreadType: number, steamIDActor, gidfeature, gidfeature2) {
		makeAutoObservable(this);
		this.m_eThreadType = eThreadType;
		this.m_steamIDActor = steamIDActor;
		this.m_gidfeature = gidfeature;
		this.m_gidfeature2 = gidfeature2;
		this.FetchPastComments(5);
	}

	GetSecondsSinceLoaded() {
		return (Date.now() - this.m_msLastUpdated) / 1000;
	}

	get id() {
		let id = `${lm(this.m_eThreadType)}/${this.m_steamIDActor.GetAccountID()}`;
		if (this.m_gidfeature && this.m_gidfeature != "-1") {
			id += `/${this.m_gidfeature}`;
			if (this.m_gidfeature2 && this.m_gidfeature2 != "-1") {
				id += `/${this.m_gidfeature2}`;
			}
		}
		return id;
	}

	RefreshIfNeeded() {
		if (!this.m_bUpdating && this.GetSecondsSinceLoaded() > 300) {
			this.FetchRecentComments();
		}
	}

	GetUpVoters() {
		let vecUpvoters = new Array();
		if (this.m_threadInfo.upvoters) {
			this.m_threadInfo.upvoters.forEach((accountid) => {
				let steamid = b.InitFromAccountID(accountid);
				if (
					steamid.ConvertTo64BitString() !=
					Nb.CMInterface.steamid.ConvertTo64BitString()
				) {
					vecUpvoters.push(steamid);
				}
			});
		}
		return vecUpvoters;
	}

	async FetchPastComments(nCount: number) {
		if (this.m_bUpdating) {
			return;
		}
		this.m_bUpdating = true;
		let msg = w.Init(ZP);
		msg.Body().set_steamid(this.m_steamIDActor.ConvertTo64BitString());
		msg.Body().set_comment_thread_type(this.m_eThreadType);
		msg.Body().set_gidfeature(this.m_gidfeature);
		if (this.m_gidfeature2) {
			msg.Body().set_gidfeature2(this.m_gidfeature2);
		}
		msg.Body().set_start(this.m_rgComments.length);
		msg.Body().set_count(nCount);
		msg.Body().set_upvoters(3);
		msg.Body().set_oldest_first(false);
		let pCommentThreadMsg = await BE.GetCommentThread(
			Nb.CMInterface.GetServiceTransport(),
			msg,
		);
		if (pCommentThreadMsg.GetEResult() == 1) {
			this.m_threadInfo = pCommentThreadMsg.Body().toObject();
			this.m_rgComments = pCommentThreadMsg
				.Body()
				.comments()
				.reverse()
				.map((e) => e.toObject())
				.concat(this.m_rgComments);
		} else {
			console.warn(
				`CommentThread ${
					this.id
				} Failed to fetch past comments: ${pCommentThreadMsg.GetErrorMessage()}`,
			);
		}
		this.m_msLastUpdated = Date.now();
		this.m_bUpdating = false;
	}

	async FetchRecentComments() {
		if (this.m_bUpdating) {
			return;
		}
		this.m_bUpdating = true;
		let e = w.Init(ZP);
		e.Body().set_steamid(this.m_steamIDActor.ConvertTo64BitString());
		e.Body().set_comment_thread_type(this.m_eThreadType);
		e.Body().set_gidfeature(this.m_gidfeature);
		if (this.m_gidfeature2) {
			e.Body().set_gidfeature2(this.m_gidfeature2);
		}
		e.Body().set_start(this.m_threadInfo ? this.m_threadInfo.total_count : 0);
		e.Body().set_count(50);
		e.Body().set_upvoters(3);
		e.Body().set_oldest_first(true);
		let t = await BE.GetCommentThread(Nb.CMInterface.GetServiceTransport(), e);
		if (t.GetEResult() == 1) {
			this.m_rgComments = this.m_rgComments.concat(
				t
					.Body()
					.comments()
					.map((e) => e.toObject()),
			);
			this.m_threadInfo = t.Body().toObject();
			this.m_msLastUpdated = Date.now();
			this.m_bUpdating = false;
		} else {
			console.warn(
				`CommentThread ${
					this.id
				} Failed to update comments: ${t.GetErrorMessage()}`,
			);
		}
	}

	async PostCommentToThread(strText: string) {
		if (strText == "") {
			return;
		}
		let t = w.Init(aw);
		t.Body().set_steamid(this.m_steamIDActor.ConvertTo64BitString());
		t.Body().set_comment_thread_type(this.m_eThreadType);
		t.Body().set_gidfeature(this.m_gidfeature);
		if (this.m_gidfeature2) {
			t.Body().set_gidfeature2(this.m_gidfeature2);
		}
		t.Body().set_text(strText);
		let r = await BE.PostCommentToThread(
			Nb.CMInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() == 1) {
			this.FetchRecentComments();
			this.m_threadInfo.total_count++;
		} else {
			console.warn(
				`CommentThread ${
					this.id
				} Failed to post comment: ${r.GetErrorMessage()}`,
			);
		}
	}

	@bind async RateCommentOrThread(bUpvotedByUser: boolean, t) {
		let r = w.Init(jt);
		r.Body().set_steamid(this.m_steamIDActor.ConvertTo64BitString());
		r.Body().set_commentthreadtype(lm(this.m_eThreadType));
		r.Body().set_gidfeature(this.m_gidfeature);
		if (this.m_gidfeature2) {
			r.Body().set_gidfeature2(this.m_gidfeature2);
		}
		r.Body().set_rate_up(bUpvotedByUser);
		if (t) {
			r.Body().set_gidcomment(t.gidcomment);
		}
		let n = await BE.RateCommentThread(Nb.CMInterface.GetServiceTransport(), r);
		if (n.GetEResult() == 1) {
			if (t) {
				t.upvoted_by_user = bUpvotedByUser;
				if (t.upvotes) {
					t.upvotes += bUpvotedByUser ? 1 : -1;
				} else {
					t.upvotes = bUpvotedByUser ? 1 : -1;
				}
			} else {
				this.m_threadInfo.user_upvoted = n.Body().has_upvoted();
				this.m_threadInfo.upvotes = n.Body().upvotes();
			}
		} else if (n.GetEResult() != 1) {
			console.warn(
				`CommentThread ${
					this.id
				} Failed to rate comment or thread: ${n.GetErrorMessage()}`,
			);
		}
	}

	async DeleteComment(e) {
		let t = w.Init(s4);
		t.Body().set_steamid(this.m_steamIDActor.ConvertTo64BitString());
		t.Body().set_comment_thread_type(this.m_eThreadType);
		t.Body().set_gidfeature(this.m_gidfeature);
		t.Body().set_gidfeature2(this.m_gidfeature2);
		t.Body().set_gidcomment(e.gidcomment);
		let r = await BE.DeleteCommentFromThread(
			Nb.CMInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() == 1) {
			let t = this.m_rgComments.indexOf(e);
			if (t > -1) {
				this.m_rgComments.splice(t, 1);
			}
			this.m_threadInfo.total_count--;
			this.FetchRecentComments();
		} else {
			console.warn(
				`CommentThread ${this.id} Failed to delete: ${r.GetErrorMessage()}`,
			);
		}
	}

	BLocalUserOwnsThread() {
		return (
			this.m_steamIDActor.ConvertTo64BitString() ==
			Nb.CMInterface.steamid.ConvertTo64BitString()
		);
	}
}

class CCommentThreadStore {
	m_mapThreads = new Map();

	static Key(e, steamid, r, n) {
		return `${lm(e)}|${steamid.ConvertTo64BitString()}|${r}|${n}`;
	}

	FindOrLoadThread(e, steamid, r, n) {
		let strKey = CCommentThreadStore.Key(e, steamid, r, n);
		let a = this.m_mapThreads.get(strKey);
		if (!a) {
			a = new CCommentThread(e, steamid, r, n);
			this.m_mapThreads.set(strKey, a);
		}
		return a;
	}

	FindOrLoadThreadByPublishedFileID(e, t) {
		return this.FindOrLoadThread(5, e, t);
	}
}

class CCommunityStore {
	m_CMInterface;
	m_CommentThreadStore = new CCommentThreadStore();
	m_EmoticonStore = new CEmoticonStore();
	m_EmoticonHoverStore = new CEmoticonHoverStore();
	m_UserStatusPostBBCodeParser;

	async Init(cm) {
		this.m_CMInterface = cm;
		this.m_EmoticonStore.Init(cm);
	}

	get CMInterface() {
		return this.m_CMInterface;
	}

	get ThreadStore() {
		return this.m_CommentThreadStore;
	}

	get EmoticonStore() {
		return this.m_EmoticonStore;
	}

	get EmoticonHoverStore() {
		return this.m_EmoticonHoverStore;
	}

	get UserStatusBBCodeParser() {
		this.m_UserStatusPostBBCodeParser ||= new B(
			CCommunityStore.s_mapStatusPostBBCodeDictionary,
			() => new OJ(new R8()),
			Config.LANGUAGE,
		);
		return this.m_UserStatusPostBBCodeParser;
	}

	FormatAndParseUserStatusBBCode(strUserStatus, t = {}) {
		let bbcode = strUserStatus.replace(
			p.GetEmoticonReplaceRegex(),
			"[emoticon]$1[/emoticon]",
		);
		bbcode = bbcode.replace(
			/(^|[^='"])(https?:[\/\\\]+[^\S\[]*[^\s\[\).?])/gi,
			"[url=$2]$2[/url]",
		);
		return this.UserStatusBBCodeParser.ParseBBCode(bbcode, t);
	}

	static s_mapStatusPostBBCodeDictionary = new Map([
		[
			"b",
			{
				Constructor: yN,
				autocloses: false,
			},
		],
		[
			"i",
			{
				Constructor: J2,
				autocloses: false,
			},
		],
		[
			"u",
			{
				Constructor: z2,
				autocloses: false,
			},
		],
		[
			"strike",
			{
				Constructor: n,
				autocloses: false,
			},
		],
		[
			"spoiler",
			{
				Constructor: dC,
				autocloses: false,
			},
		],
		[
			"noparse",
			{
				Constructor: PT,
				autocloses: false,
			},
		],
		[
			"url",
			{
				Constructor: s0,
				autocloses: false,
			},
		],
		[
			"emoticon",
			{
				Constructor: Emoticon,
				autocloses: false,
			},
		],
	]);
}

export const Nb = new CCommunityStore();
window.communityStore = Nb;
