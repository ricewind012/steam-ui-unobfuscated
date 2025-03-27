import n, { Cg } from "./34629.js";
import i from "./12176.js";
import a from "./10812.js";
import { lm } from "./91705.js";
import o from "./63696.js";
import l from "./44164.js";
import m, { Gn } from "./89193.js";
import u from "./8090.js";
import d from "./1521.js";
import A from "./16117.js";
import p from "./8573.js";
import g from "./77644.js";
import h from "./31760.js";
import C from "./56840.js";
import _ from "./52451.js";
import f from "./43691.js";
function c(e) {
	let t = "";
	if (typeof e.children == "string") {
		t = e.children;
	} else {
		o.Children.forEach(e.children, (e) => {
			if (typeof e == "string") {
				t += e;
			}
			if (typeof e == "object" && e.props) {
				let r = e.props["bbcode-text"];
				if (r) {
					t += r;
				}
			}
		});
	}
	if (t) {
		return <l.nl emoticon={t} emoticonHoverStore={Nb.EmoticonHoverStore} />;
	} else {
		return null;
	}
}
class b {
	m_threadInfo = undefined;
	m_rgComments = [];
	m_eThreadType;
	m_steamIDActor;
	m_gidfeature;
	m_gidfeature2;
	m_bUpdating = false;
	m_msLastUpdated = Date.now();
	constructor(e, t, r, n) {
		Gn(this);
		this.m_eThreadType = e;
		this.m_steamIDActor = t;
		this.m_gidfeature = r;
		this.m_gidfeature2 = n;
		this.FetchPastComments(5);
	}
	GetSecondsSinceLoaded() {
		return (Date.now() - this.m_msLastUpdated) / 1000;
	}
	get id() {
		let e = `${lm(this.m_eThreadType)}/${this.m_steamIDActor.GetAccountID()}`;
		if (this.m_gidfeature && this.m_gidfeature != "-1") {
			e += `/${this.m_gidfeature}`;
			if (this.m_gidfeature2 && this.m_gidfeature2 != "-1") {
				e += `/${this.m_gidfeature2}`;
			}
		}
		return e;
	}
	RefreshIfNeeded() {
		if (!this.m_bUpdating && this.GetSecondsSinceLoaded() > 300) {
			this.FetchRecentComments();
		}
	}
	GetUpVoters() {
		let e = new Array();
		if (this.m_threadInfo.upvoters) {
			this.m_threadInfo.upvoters.forEach((t) => {
				let r = p.b.InitFromAccountID(t);
				if (
					r.ConvertTo64BitString() !=
					Nb.CMInterface.steamid.ConvertTo64BitString()
				) {
					e.push(r);
				}
			});
		}
		return e;
	}
	async FetchPastComments(e) {
		if (this.m_bUpdating) {
			return;
		}
		this.m_bUpdating = true;
		let t = i.w.Init(a.ZP);
		t.Body().set_steamid(this.m_steamIDActor.ConvertTo64BitString());
		t.Body().set_comment_thread_type(this.m_eThreadType);
		t.Body().set_gidfeature(this.m_gidfeature);
		if (this.m_gidfeature2) {
			t.Body().set_gidfeature2(this.m_gidfeature2);
		}
		t.Body().set_start(this.m_rgComments.length);
		t.Body().set_count(e);
		t.Body().set_upvoters(3);
		t.Body().set_oldest_first(false);
		let r = await a.BE.GetCommentThread(
			Nb.CMInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() == 1) {
			this.m_threadInfo = r.Body().toObject();
			this.m_rgComments = r
				.Body()
				.comments()
				.reverse()
				.map((e) => e.toObject())
				.concat(this.m_rgComments);
		} else {
			console.warn(
				`CommentThread ${
					this.id
				} Failed to fetch past comments: ${r.GetErrorMessage()}`,
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
		let e = i.w.Init(a.ZP);
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
		let t = await a.BE.GetCommentThread(
			Nb.CMInterface.GetServiceTransport(),
			e,
		);
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
	async PostCommentToThread(e) {
		if (e == "") {
			return;
		}
		let t = i.w.Init(a.aw);
		t.Body().set_steamid(this.m_steamIDActor.ConvertTo64BitString());
		t.Body().set_comment_thread_type(this.m_eThreadType);
		t.Body().set_gidfeature(this.m_gidfeature);
		if (this.m_gidfeature2) {
			t.Body().set_gidfeature2(this.m_gidfeature2);
		}
		t.Body().set_text(e);
		let r = await a.BE.PostCommentToThread(
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
	async RateCommentOrThread(e, t) {
		let r = i.w.Init(a.jt);
		r.Body().set_steamid(this.m_steamIDActor.ConvertTo64BitString());
		r.Body().set_commentthreadtype(lm(this.m_eThreadType));
		r.Body().set_gidfeature(this.m_gidfeature);
		if (this.m_gidfeature2) {
			r.Body().set_gidfeature2(this.m_gidfeature2);
		}
		r.Body().set_rate_up(e);
		if (t) {
			r.Body().set_gidcomment(t.gidcomment);
		}
		let n = await a.BE.RateCommentThread(
			Nb.CMInterface.GetServiceTransport(),
			r,
		);
		if (n.GetEResult() == 1) {
			if (t) {
				t.upvoted_by_user = e;
				if (t.upvotes) {
					t.upvotes += e ? 1 : -1;
				} else {
					t.upvotes = e ? 1 : -1;
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
		let t = i.w.Init(a.s4);
		t.Body().set_steamid(this.m_steamIDActor.ConvertTo64BitString());
		t.Body().set_comment_thread_type(this.m_eThreadType);
		t.Body().set_gidfeature(this.m_gidfeature);
		t.Body().set_gidfeature2(this.m_gidfeature2);
		t.Body().set_gidcomment(e.gidcomment);
		let r = await a.BE.DeleteCommentFromThread(
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
Cg([m.sH], b.prototype, "m_threadInfo", undefined);
Cg([m.sH], b.prototype, "m_rgComments", undefined);
Cg([_.oI], b.prototype, "RateCommentOrThread", null);
class y {
	m_mapThreads = new Map();
	static Key(e, t, r, n) {
		return `${lm(e)}|${t.ConvertTo64BitString()}|${r}|${n}`;
	}
	FindOrLoadThread(e, t, r, n) {
		let i = y.Key(e, t, r, n);
		let a = this.m_mapThreads.get(i);
		if (!a) {
			a = new b(e, t, r, n);
			this.m_mapThreads.set(i, a);
		}
		return a;
	}
	FindOrLoadThreadByPublishedFileID(e, t) {
		return this.FindOrLoadThread(5, e, t);
	}
}
class S {
	m_CMInterface;
	m_CommentThreadStore = new y();
	m_EmoticonStore = new g.r();
	m_EmoticonHoverStore = new C.h();
	m_UserStatusPostBBCodeParser;
	async Init(e) {
		this.m_CMInterface = e;
		this.m_EmoticonStore.Init(e);
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
		this.m_UserStatusPostBBCodeParser ||= new u.B(
			S.s_mapStatusPostBBCodeDictionary,
			() => new d.OJ(new d.R8()),
			f.TS.LANGUAGE,
		);
		return this.m_UserStatusPostBBCodeParser;
	}
	FormatAndParseUserStatusBBCode(e, t = {}) {
		let r = e.replace(h.p.GetEmoticonReplaceRegex(), "[emoticon]$1[/emoticon]");
		r = r.replace(
			/(^|[^='"])(https?:[\/\\\]+[^\S\[]*[^\s\[\).?])/gi,
			"[url=$2]$2[/url]",
		);
		return this.UserStatusBBCodeParser.ParseBBCode(r, t);
	}
	static s_mapStatusPostBBCodeDictionary = new Map([
		[
			"b",
			{
				Constructor: A.yN,
				autocloses: false,
			},
		],
		[
			"i",
			{
				Constructor: A.J2,
				autocloses: false,
			},
		],
		[
			"u",
			{
				Constructor: A.z2,
				autocloses: false,
			},
		],
		[
			"strike",
			{
				Constructor: A.n,
				autocloses: false,
			},
		],
		[
			"spoiler",
			{
				Constructor: A.dC,
				autocloses: false,
			},
		],
		[
			"noparse",
			{
				Constructor: A.PT,
				autocloses: false,
			},
		],
		[
			"url",
			{
				Constructor: A.s0,
				autocloses: false,
			},
		],
		[
			"emoticon",
			{
				Constructor: c,
				autocloses: false,
			},
		],
	]);
}
export const Nb = new S();
window.communityStore = Nb;
