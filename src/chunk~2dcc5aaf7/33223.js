var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./28987.js");
var a = require(/*webcrack:missing*/ "./83957.js");
var s = a;
var o = require(/*webcrack:missing*/ "./89193.js");
var l = require("./16154.js");
var c = require(/*webcrack:missing*/ "./93960.js");
var m = require(/*webcrack:missing*/ "./79769.js");
var u = require(/*webcrack:missing*/ "./54644.js");
var d = require(/*webcrack:missing*/ "./46108.js");
var A = require(/*webcrack:missing*/ "./72476.js");
var p = require("./88341.js");
var g = require("./39082.js");
var h = require("./71472.js");
export class V {
	m_filesToUpload = o.sH.array();
	m_filesCompleted = [];
	m_clanSteamID;
	m_allCancelTokens = new Array();
	m_lastError = undefined;
	m_fnSetImageURL = null;
	constructor(e) {
		(0, o.Gn)(this);
		this.m_clanSteamID = e;
	}
	GetClanSteamID() {
		return this.m_clanSteamID;
	}
	SetImageAllUrlFunction(e) {
		this.m_fnSetImageURL = e;
	}
	async AddImage(e, t = 0, r, n) {
		const i = (0, h.j)(e.name, t);
		return this.AddImageForLanguage(e, i, r, n);
	}
	async AddImageForLanguage(e, t, r, n) {
		let i = false;
		await new Promise((a) => {
			const s = new FileReader();
			s.onload = () => {
				const o = e.name.split(".").pop().toLowerCase();
				let l = null;
				if (!A.iA.is_support || (o != "webm" && o != "mp4")) {
					l = new Image();
					l.onload = () => {
						const s = new g.i9(e, t, l, r, n);
						this.m_filesToUpload = [...this.m_filesToUpload, s];
						i = true;
						a();
					};
				} else {
					l = document.createElement("video");
					l.onloadeddata = () => {
						const s = new g.i9(e, t, l, r, n);
						this.m_filesToUpload = [...this.m_filesToUpload, s];
						i = true;
						a();
					};
				}
				l.onerror = (e) => {
					console.error(
						"CClanImageUploader failed to load the image, details",
						e,
					);
					i = false;
					a();
				};
				l.src = s.result.toString();
			};
			s.readAsDataURL(e);
		});
		return i;
	}
	async AddExistingClanImage(e, t = 0, r, n) {
		let i = p.i6.GetHashAndExt(e);
		let a = p.i6.GenerateEditableArtworkURLFromHashAndExtension(
			this.m_clanSteamID,
			i,
		);
		let o = await s({
			url: a,
			method: "GET",
			responseType: "blob",
		});
		let l = (0, u.pE)(o.data, e.file_name);
		return await this.AddImage(l, t, r, n);
	}
	DeleteUploadImageByIndex(e) {
		this.m_filesToUpload.splice(e, 1);
		this.m_filesToUpload = [...this.m_filesToUpload];
	}
	DeleteUploadImage(e) {
		let t = this.m_filesToUpload.findIndex(
			(t) => e.file == t.file && e.uploadTime == t.uploadTime,
		);
		if (t >= 0) {
			this.DeleteUploadImageByIndex(t);
		}
	}
	ClearImages() {
		this.m_filesToUpload = o.sH.array();
	}
	GetFilesUploaded() {
		return this.m_filesCompleted;
	}
	GetLastErrorFile() {
		return this.m_lastError;
	}
	GetCompletedFiles() {
		return this.m_filesCompleted.length;
	}
	GetTotalFiles() {
		return this.m_filesToUpload.length;
	}
	GetFilesToUpload() {
		return this.m_filesToUpload.map((e) => e.file);
	}
	GetUploadImages() {
		return this.m_filesToUpload;
	}
	BHasError() {
		return this.m_lastError != null;
	}
	BAllDone() {
		return (
			this.m_filesCompleted.length > 0 &&
			this.m_filesCompleted.length == this.m_filesToUpload.length
		);
	}
	BIsFileCompleted(e) {
		return this.m_filesCompleted.indexOf(e) != -1;
	}
	async UploadAllImages(e, t, r, n, i) {
		const a = {};
		for (let e of this.m_filesToUpload) {
			if (!this.BIsFileCompleted(e.file)) {
				const t = e.IsValidAssetType(r, n, i);
				if (t.error || t.needsCrop) {
					if (t.error) {
						this.m_lastError = {
							file: e.file,
							message: t.error,
							status: 401,
						};
					}
				} else {
					e.status = "uploading";
					a[`${e.uploadTime}/${e.file.name}`] = this.UploadFile({
						uploadFile: e.file,
						filename: e.file.name,
						artworkType: t.match,
						resizeRequests: e.GetResizeDimension(),
						primaryLocalizeImage: e.localizedImageGroupPrimaryImage,
						lang: e.language,
						width: e.width,
						height: e.height,
					});
				}
			}
		}
		const s = await (0, m.RR)(a);
		Object.keys(s).forEach((r) => {
			const n = s[r];
			const i = this.m_filesToUpload.find(
				(e) => `${e.uploadTime}/${e.file.name}` === r,
			);
			if (i) {
				if (n.success !== 1) {
					i.status = "failed";
					i.message = n.message;
				} else {
					i.status = "success";
					if (this.m_fnSetImageURL) {
						if (n.origimagehash) {
							const r = (0, h.P)(n.language, t, e);
							p.pU.AddLocalizeImageUploaded(n.origimagehash, r);
						} else {
							const r = p.pU.GetClanImageByImageHash(
								this.m_clanSteamID,
								n.image_hash,
							);
							if (r) {
								const n = (0, h.P)(i.language, t, e);
								this.m_fnSetImageURL(i.type, r, n);
							}
						}
					}
				}
			}
		});
		return s;
	}
	CancelAllUploads() {
		for (let e of this.m_allCancelTokens) {
			e.cancel((0, d.we)("#ImageUpload_CancelRequest"));
		}
		this.m_allCancelTokens = new Array();
	}
	RetryAllFailedUploads() {
		this.CancelAllUploads();
		this.UploadAllImages([i.TU.k_ESteamRealmGlobal], 0);
	}
	async handleUploadRefresh(e) {
		await p.pU.LoadClanImages(this.m_clanSteamID, true, e);
	}
	async UploadFile(e) {
		const {
			uploadFile: t,
			filename: r,
			artworkType: n,
			resizeRequests: i,
			primaryLocalizeImage: a,
			lang: o,
			width: c,
			height: m,
		} = e;
		let u = null;
		const d = new FormData();
		d.append("clanimage", t, r);
		d.append("sessionid", A.TS.SESSIONID);
		if (n) {
			d.append("arttype", n);
		}
		if (i && i.length > 0) {
			d.append("resize", i.map((e) => e.width + "x" + e.height).join(","));
		}
		let p = "/uploadimage/";
		if (a) {
			p = "/ajaxuploadlocalizedimage/";
			d.append("origimagehash", a.image_hash);
			d.append("thumbhash", a.thumbnail_hash);
			d.append("extension", "" + a.file_type);
			d.append("language", "" + o);
		}
		const g = r.split(".").pop().toLocaleLowerCase();
		if (g == "webm" || g == "mp4") {
			d.append("video_width", "" + c);
			d.append("video_height", "" + m);
		}
		const h = s.CancelToken.source();
		this.m_allCancelTokens.push(h);
		let C =
			A.TS.COMMUNITY_BASE_URL +
			"/gid/" +
			this.m_clanSteamID.ConvertTo64BitString() +
			p;
		let _ = {
			cancelToken: h.token,
			withCredentials: true,
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};
		try {
			u = await s.post(C, d, _);
			this.m_filesCompleted.push(t);
		} catch (e) {
			this.m_lastError = {
				file: t,
				status: e.response ? e.response.status : 500,
				message: (0, l.H)(e).strErrorMsg,
			};
			u = e.response;
		}
		if (!a) {
			await this.handleUploadRefresh(h);
		}
		return u.data;
	}
	static async SendResizeRequest(e, t, r, n, i) {
		let a =
			A.TS.COMMUNITY_BASE_URL +
			"/gid/" +
			t.ConvertTo64BitString() +
			"/resizeimage/";
		let o = new FormData();
		o.append("imagehash", r);
		o.append("extension", n);
		o.append("resize", i.map((e) => e.width + "x" + e.height).join(","));
		o.append("sessionid", A.TS.SESSIONID);
		return (
			await s.post(a, o, {
				cancelToken: e.token,
			})
		).data.count;
	}
}
(0, n.Cg)([o.sH], V.prototype, "m_filesToUpload", undefined);
(0, n.Cg)([o.sH], V.prototype, "m_filesCompleted", undefined);
(0, n.Cg)([o.sH], V.prototype, "m_lastError", undefined);
(0, n.Cg)([c.o], V.prototype, "AddImage", null);
(0, n.Cg)([c.o], V.prototype, "AddExistingClanImage", null);
(0, n.Cg)([c.o], V.prototype, "DeleteUploadImageByIndex", null);
(0, n.Cg)([c.o], V.prototype, "DeleteUploadImage", null);
(0, n.Cg)([c.o], V.prototype, "ClearImages", null);
