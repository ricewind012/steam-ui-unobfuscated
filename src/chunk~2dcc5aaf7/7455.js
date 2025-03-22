var n = require(/*webcrack:missing*/ "./12176.js");
var i = require(/*webcrack:missing*/ "./58663.js");
var a = require(/*webcrack:missing*/ "./48307.js");
var s = require("./12251.js");
const o = i.Message;
class l extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.file_prefix) {
			a.Sg(l.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				file_prefix: {
					n: 1,
					br: a.qM.readString,
					bw: a.gp.writeString,
				},
				mime_type: {
					n: 2,
					br: a.qM.readString,
					bw: a.gp.writeString,
				},
				data: {
					n: 3,
					br: a.qM.readBytes,
					bw: a.gp.writeBytes,
				},
			},
		};
		return l.sm_m;
	}
	static MBF() {
		l.sm_mbf ||= a.w0(l.M());
		return l.sm_mbf;
	}
	toObject(e = false) {
		return l.toObject(e, this);
	}
	static toObject(e, t) {
		return a.BT(l.M(), e, t);
	}
	static fromObject(e) {
		return a.Uq(l.M(), e);
	}
	static deserializeBinary(e) {
		let t = new i.BinaryReader(e);
		let r = new l();
		return l.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return a.zj(l.MBF(), e, t);
	}
	serializeBinary() {
		var e = new i.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		a.i0(l.M(), e, t);
	}
	serializeBase64String() {
		var e = new i.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameNotes_UploadImage_Request";
	}
}
class c extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.filename) {
			a.Sg(c.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				filename: {
					n: 1,
					br: a.qM.readString,
					bw: a.gp.writeString,
				},
			},
		};
		return c.sm_m;
	}
	static MBF() {
		c.sm_mbf ||= a.w0(c.M());
		return c.sm_mbf;
	}
	toObject(e = false) {
		return c.toObject(e, this);
	}
	static toObject(e, t) {
		return a.BT(c.M(), e, t);
	}
	static fromObject(e) {
		return a.Uq(c.M(), e);
	}
	static deserializeBinary(e) {
		let t = new i.BinaryReader(e);
		let r = new c();
		return c.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return a.zj(c.MBF(), e, t);
	}
	serializeBinary() {
		var e = new i.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		a.i0(c.M(), e, t);
	}
	serializeBase64String() {
		var e = new i.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameNotes_UploadImage_Response";
	}
}
var m;
(function (e) {
	e.UploadImageHandler = {
		name: "GameNotes.UploadImage#1",
		request: l,
		response: c,
	};
	e.UploadImage = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameNotes.UploadImage#1", (0, n.I8)(l, e), c, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgUploadImage = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameNotes.UploadImage#1", (0, n.I8)(l, e), c, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
})((m ||= {}));
var u = require(/*webcrack:missing*/ "./53833.js");
var d = require("./23472.js");
var A = require(/*webcrack:missing*/ "./83599.js");
const p = new A.wd("GameNotesCloudStore").Debug;
function g(e) {
	return e.replace(/[!-/:-@ [\\\]^`]/g, "_");
}
class h {
	m_mapNotesByGame = new Map();
	m_mapNotesByShortcut = new Map();
	FilenameForNotes(e) {
		if ("appid" in e) {
			return `notes_${Number(e.appid)}`;
		} else {
			return `notes_shortcut_${g(e.shortcut)}`;
		}
	}
	DirectoryForNoteImages(e) {
		if ("appid" in e) {
			return `notes_${Number(e.appid)}_images/`;
		} else {
			return `notes_shortcut_${g(e.shortcut)}_images/`;
		}
	}
	ParseNotesFileName(e) {
		const t = e.match(/^notes_shortcut_([^/]+)$/);
		if (t) {
			return {
				shortcut: t[1],
			};
		}
		const r = e.match(/^notes_(\d+)$/);
		if (r && parseInt(r[1]) < 2147483647) {
			return {
				appid: parseInt(r[1]),
			};
		} else {
			return undefined;
		}
	}
	MapAndKeyNoteType(e) {
		if ("appid" in e) {
			return [this.m_mapNotesByGame, e.appid];
		} else {
			return [this.m_mapNotesByShortcut, e.shortcut];
		}
	}
	async GetGameNotesList(e, t) {
		return (await this.InternalLoadNotes(e)).notes.slice();
	}
	NewNote(e, t) {
		let r = {};
		if ("appid" in e) {
			r.appid = e.appid;
		} else {
			r.shortcut_name = e.shortcut;
		}
		return {
			id: Date.now().toString(36),
			...r,
			ordinal: 0,
			time_created: Math.floor(Date.now() / 1000),
			time_modified: Math.floor(Date.now() / 1000),
			title: t,
			content: "",
			not_persisted: true,
		};
	}
	async SaveGameNote(e, t, r) {
		const n = (0, d.NL)(e);
		const i = await this.InternalLoadNotes(n);
		const a = i.notes.findIndex((t) => t.id === e.id);
		if (a != -1) {
			i.notes[a] = {
				...i.notes[a],
				...e,
				title: t,
				content: r,
				time_modified: Math.floor(Date.now() / 1000),
			};
		} else {
			i.notes.push({
				...e,
				title: t,
				content: r,
				time_modified: Math.floor(Date.now() / 1000),
			});
		}
		i.dirty = true;
		await this.InternalSaveNotes(n);
		return e.id;
	}
	async InternalSaveNotes(e) {
		const [t, r] = this.MapAndKeyNoteType(e);
		const n = t.get(r);
		if (n.dirty) {
			const t = {
				notes: n.notes,
			};
			const r = JSON.stringify(t, (e, t) =>
				e === "not_persisted" ? undefined : t,
			);
			p(t, ` => ${r}`);
			const i = await this.WriteNotesFile(this.FilenameForNotes(e), r);
			if (i != 1) {
				throw `Error saving notes: ${i}`;
			}
		}
		return 1;
	}
	async DeleteGameNote(e, t) {
		const r = await this.InternalLoadNotes(e);
		if (u.Wp(r.notes, (e) => e.id === t)) {
			r.dirty = true;
		}
		await this.InternalSaveNotes(e);
		return t;
	}
}
const C = new A.wd("GameNotesCloudStore").Debug;
export class L extends h {
	static sm_Instance;
	static Get() {
		L.sm_Instance ||= new L();
		return L.sm_Instance;
	}
	m_lastSyncToClient = undefined;
	async SyncFromServer() {
		if (
			this.m_lastSyncToClient === undefined ||
			performance.now() - this.m_lastSyncToClient > 900000
		) {
			C("Syncing to client");
			let e = await SteamClient.GameNotes.SyncToClient();
			C(`Sync to client complete: ${e}`);
			this.m_lastSyncToClient = performance.now();
		}
	}
	async InternalLoadNotes(e) {
		const [t, r] = this.MapAndKeyNoteType(e);
		if (!t.has(r)) {
			await this.SyncFromServer();
			C(`Reading ${this.FilenameForNotes(e)}`);
			const n = await SteamClient.GameNotes.GetNotes(
				this.FilenameForNotes(e),
				this.DirectoryForNoteImages(e),
			);
			let i;
			C("Got", n);
			if (n.result == 1) {
				i = JSON.parse(n.notes);
			} else {
				if (n.result != 9) {
					throw `Error loading notes: ${n.result}`;
				}
				i = {
					notes: [],
				};
				if ("shortcut" in e) {
					i.shortcut_name = e.shortcut;
				}
			}
			if (n.images) {
				const t = this.DirectoryForNoteImages(e).replace(
					/[.*+?^${}()|[\]\\]/g,
					"\\$&",
				);
				const r = new RegExp(
					`(?:src="/gamenotes/|cloudimg src=")(${t}[a-f0-9]+.[a-z]+)"`,
					"gi",
				);
				let a = new Set(n.images);
				for (const e of i.notes) {
					let t;
					while ((t = r.exec(e.content)) !== null) {
						C(`Found image ${t[1]}`);
						a.delete(t[1]);
					}
				}
				for (const e of a.keys()) {
					C(`Deleting image ${e}`);
					if (!true) {
						C("Delete failed");
					}
				}
			}
			t.set(r, {
				dirty: false,
				notes: i.notes,
			});
		}
		return t.get(r);
	}
	async WriteNotesFile(e, t) {
		const r = await SteamClient.GameNotes.SaveNotes(e, t);
		if (r == 1) {
			this.m_bHaveLocalChanges = true;
			this.QueueNotesSync();
		}
		return r;
	}
	async GetGamesWithNotes() {
		throw new Error("Method not implemented.");
	}
	async BInternalPerformSync() {
		C("Syncing to server");
		let e = await SteamClient.GameNotes.SyncToServer();
		C(`Sync to server complete: ${e}`);
		return e == 1;
	}
	async UploadImage(e, t) {
		const r = n.w.Init(l);
		r.Body().set_file_prefix(e);
		r.Body().set_mime_type(t.type);
		r.Body().set_data(new Uint8Array(await t.arrayBuffer()));
		const i = await m.SendMsgUploadImage(r);
		if (i.GetEResult() === 1) {
			return i.Body().filename();
		} else {
			return "";
		}
	}
	async ResolveImageURL(e) {
		return "/gamenotes/" + e;
	}
	m_bSyncing = false;
	m_bSyncRequested = false;
	m_bHaveLocalChanges = false;
	QueueNotesSync() {
		if (this.m_bSyncing) {
			this.m_bSyncRequested = true;
		} else {
			this.InternalSyncNotes();
		}
	}
	async InternalSyncNotes() {
		do {
			this.m_bSyncing = true;
			this.m_bSyncRequested = false;
			if (this.m_bHaveLocalChanges) {
				this.m_bHaveLocalChanges = false;
				if (!(await this.BInternalPerformSync())) {
					this.m_bHaveLocalChanges = true;
				}
			}
			await this.SyncFromServer();
			this.m_bSyncing = false;
		} while (this.m_bSyncRequested);
	}
}
