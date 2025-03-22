var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./49455.js");
var l = require(/*webcrack:missing*/ "./46108.js");
var c = require(/*webcrack:missing*/ "./72476.js");
class m {
	constructor() {
		(0, s.Gn)(this);
	}
	exportFn = undefined;
	file = undefined;
	dataURL = undefined;
	uploadFileName;
	displayFileName;
	sha1;
	hmac;
	timestamp = 0;
	imageWidth = 0;
	imageHeight = 0;
	fileInfo;
	uploadInfo;
	eUploadState = 0;
	uploadProgress = 0;
	strErrorDescription = undefined;
}
(0, n.Cg)([s.sH], m.prototype, "file", undefined);
(0, n.Cg)([s.sH], m.prototype, "dataURL", undefined);
(0, n.Cg)([s.sH], m.prototype, "imageWidth", undefined);
(0, n.Cg)([s.sH], m.prototype, "imageHeight", undefined);
(0, n.Cg)([s.sH], m.prototype, "eUploadState", undefined);
(0, n.Cg)([s.sH], m.prototype, "uploadProgress", undefined);
(0, n.Cg)([s.sH], m.prototype, "strErrorDescription", undefined);
export class i6 {
	m_Callbacks;
	m_fileUploadProps = new m();
	m_onComplete;
	constructor(e) {
		(0, s.Gn)(this);
		this.m_Callbacks = e;
	}
	get file_upload_props() {
		return this.m_fileUploadProps;
	}
	get file_upload_data_url() {
		return this.m_fileUploadProps.dataURL;
	}
	get file() {
		return this.m_fileUploadProps.file;
	}
	LogFileUploadMessage(e) {
		if (this.m_Callbacks.LogFileUploadMessage) {
			this.m_Callbacks.LogFileUploadMessage(e);
		}
	}
	SetUploadFileError(e, t) {
		this.m_fileUploadProps.eUploadState = e;
		this.m_fileUploadProps.strErrorDescription = t;
		this.m_fileUploadProps.displayFileName = null;
	}
	async StartFileExportToUpload(e, t = {}) {
		const { displayFilename: r, info: n, onComplete: i } = t;
		this.m_fileUploadProps.eUploadState = 7;
		this.m_fileUploadProps.uploadProgress = 0;
		this.m_onComplete = i;
		this.m_fileUploadProps.fileInfo = n;
		this.SetFileToUpload(e);
		this.m_fileUploadProps.displayFileName = r;
	}
	async SetImageFileToUpload(e, t = {}) {
		const { processor: r = d, info: n } = t;
		if (!e) {
			this.SetFileToUpload(null);
			return;
		}
		this.m_fileUploadProps.fileInfo = n;
		const i = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
		if (e.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
			this.SetUploadFileError(
				4,
				(0, l.we)(
					"#Chat_Settings_Error_ChatFileTooLarge_dynamic",
					i,
					this.m_Callbacks.GetMaxFileSizeMB(),
				),
			);
			return;
		}
		let a = e.name.split(".").pop().toLowerCase();
		if (
			[
				"jpg",
				"jpeg",
				"png",
				"gif",
				"webm",
				"mpg",
				"mp4",
				"mpeg",
				"ogv",
			].indexOf(a) == -1
		) {
			this.SetUploadFileError(
				5,
				(0, l.we)("#Chat_Settings_Error_ChatFileTypeNotSupported", i),
			);
			return;
		}
		const s = await r(e);
		this.SetFileToUpload(s.file);
		this.m_fileUploadProps.imageHeight = s.height;
		this.m_fileUploadProps.imageWidth = s.width;
	}
	async SetOtherFileToUpload(e, t = {}) {
		if (!e) {
			this.SetFileToUpload(null);
			return;
		}
		this.m_fileUploadProps.fileInfo = t.info;
		const r = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
		if (e.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
			this.SetUploadFileError(
				4,
				(0, l.we)(
					"#Chat_Settings_Error_ChatFileTooLarge_dynamic",
					r,
					this.m_Callbacks.GetMaxFileSizeMB(),
				),
			);
			return;
		}
		let n = e.name.split(".").pop().toLowerCase();
		if (["zip"].indexOf(n) != -1) {
			this.SetFileToUpload(e);
		} else {
			this.SetUploadFileError(
				5,
				(0, l.we)("#Chat_Settings_Error_ChatFileTypeNotSupported", r),
			);
		}
	}
	SetFileToUpload(e) {
		this.m_fileUploadProps.file = null;
		this.m_fileUploadProps.dataURL = null;
		this.m_fileUploadProps.hmac = null;
		this.m_fileUploadProps.sha1 = null;
		this.m_fileUploadProps.imageWidth = 0;
		this.m_fileUploadProps.imageHeight = 0;
		this.m_fileUploadProps.displayFileName = null;
		if (!e) {
			this.m_fileUploadProps.eUploadState = 0;
			return;
		}
		let t = "";
		if (typeof e == "function") {
			this.m_fileUploadProps.file = null;
			this.m_fileUploadProps.exportFn = e;
		} else {
			this.m_fileUploadProps.file = e;
			this.m_fileUploadProps.exportFn = null;
			try {
				t = URL.createObjectURL(e);
			} catch (e) {
				console.error(`Failed to created object URL from file: ${e}`);
			}
			this.m_fileUploadProps.displayFileName = this.m_fileUploadProps.file.name;
			this.m_fileUploadProps.uploadFileName =
				window.performance.now() + "_" + this.m_fileUploadProps.file.name;
		}
		this.m_fileUploadProps.eUploadState = 1;
		let r = "";
		while (r.length < 40) {
			r += Math.floor(Math.random() * 16).toString(16);
		}
		this.m_fileUploadProps.dataURL = t;
		this.m_fileUploadProps.sha1 = r;
		this.m_fileUploadProps.hmac = "";
		this.m_fileUploadProps.timestamp = 0;
	}
	async RetryFileUpload() {
		return this.BeginFileUpload();
	}
	async BeginFileUpload(e) {
		this.m_fileUploadProps.uploadProgress = 0;
		if (this.m_fileUploadProps.exportFn) {
			this.m_fileUploadProps.eUploadState = 7;
			const { eResult: e, file: t } = await this.m_fileUploadProps.exportFn(
				(e) => {
					(0, s.h5)(() => {
						this.m_fileUploadProps.uploadProgress = e * 0.5;
					});
				},
			);
			if (e != 1 || !t) {
				this.SetUploadFileError(
					3,
					(0, l.we)("#Chat_Settings_Error_ExportFailed"),
				);
				return new Response();
			}
			this.m_fileUploadProps.file = t;
			this.m_fileUploadProps.uploadFileName =
				window.performance.now() + "_" + t.name;
		}
		let t = this.m_fileUploadProps.file;
		if (!t) {
			(0, o.w)(
				false,
				"Must SetImageFileToUpload before calling BeginFileUpload",
			);
			throw new Error("Invalid State");
		}
		this.m_fileUploadProps.eUploadState = 2;
		this.m_fileUploadProps.uploadInfo = e;
		let r = new FormData();
		r.append("sessionid", c.TS.SESSIONID);
		r.append("l", c.TS.LANGUAGE);
		r.append("file_size", t.size.toString());
		r.append("file_name", this.m_fileUploadProps.uploadFileName);
		r.append("file_sha", this.m_fileUploadProps.sha1);
		r.append("file_image_width", this.m_fileUploadProps.imageWidth.toString());
		r.append(
			"file_image_height",
			this.m_fileUploadProps.imageHeight.toString(),
		);
		r.append("file_type", t.type);
		if (this.m_Callbacks.PopulateBeginFileUploadFormData) {
			this.m_Callbacks.PopulateBeginFileUploadFormData(
				r,
				this.file_upload_props.uploadInfo,
				this.file_upload_props.fileInfo,
			);
		}
		try {
			let e;
			let t = await fetch(
				`${this.m_Callbacks.GetBeginFileUploadURL()}?l=${c.TS.LANGUAGE}`,
				{
					method: "POST",
					body: r,
					credentials: "include",
				},
			);
			try {
				e = await t.json();
			} catch (e) {}
			if (!t.ok) {
				let r = null;
				(0, s.h5)(() => {
					this.m_fileUploadProps.eUploadState = 3;
					this.LogFileUploadMessage(t);
					r = e?.message
						? e?.message
						: (0, l.we)("#Chat_Settings_Error_ServerError");
					this.m_fileUploadProps.strErrorDescription = (0, l.we)(
						"#Chat_Upload_ErrorStart",
						r,
					);
				});
				throw r;
			}
			if (!e || !e.result) {
				throw new Error();
			}
			this.m_fileUploadProps.timestamp = e.timestamp;
			this.m_fileUploadProps.hmac = e.hmac;
			return this.DoFileUpload(e.result);
		} catch (e) {
			let t = e || (0, l.we)("#ConnectionTrouble_FailedToConnect");
			(0, s.h5)(() => {
				this.m_fileUploadProps.eUploadState = 3;
				this.m_fileUploadProps.strErrorDescription = (0, l.we)(
					"#Chat_Upload_ErrorStart",
					t,
				);
			});
			throw t;
		}
	}
	async DoFileUpload(e) {
		let t = this.m_fileUploadProps.file;
		let r = e.use_https ? "https://" : "http://";
		r += e.url_host + e.url_path;
		let n = {
			onUploadProgress: (e) => {
				const t = !!this.m_fileUploadProps.exportFn;
				const r = t ? 50 : 100;
				const n = (t ? 50 : 0) + (e.loaded / e.total) * r;
				if (n > this.m_fileUploadProps.uploadProgress) {
					(0, s.h5)(() => {
						this.m_fileUploadProps.uploadProgress = n;
					});
				}
			},
			headers: {},
			transformRequest: [(e) => e],
		};
		for (let t = 0; t < e.request_headers.length; ++t) {
			let r = e.request_headers[t];
			if (r.name != "Content-Length" && r.name != "Host") {
				n.headers[r.name] = r.value;
			}
		}
		try {
			await a.put(r, t, n);
			return this.CommitFileUpload(true, e.ugcid);
		} catch (t) {
			this.LogFileUploadMessage(t.response);
			(0, s.h5)(() => {
				this.m_fileUploadProps.strErrorDescription = (0, l.we)(
					"#Chat_Upload_ErrorCloud",
				);
				this.m_fileUploadProps.eUploadState = 3;
				this.m_fileUploadProps.uploadProgress = 0;
			});
			this.CommitFileUpload(false, e.ugcid);
			throw this.m_fileUploadProps.strErrorDescription;
		}
	}
	async CommitFileUpload(e, t) {
		let r = this.m_fileUploadProps.file;
		let n = this.m_fileUploadProps.sha1;
		let i = new FormData();
		i.append("sessionid", c.TS.SESSIONID);
		i.append("l", c.TS.LANGUAGE);
		i.append("file_name", this.m_fileUploadProps.uploadFileName);
		i.append("file_sha", n);
		i.append("success", e ? "1" : "0");
		i.append("ugcid", t);
		i.append("file_type", r.type);
		i.append("file_image_width", this.m_fileUploadProps.imageWidth.toString());
		i.append(
			"file_image_height",
			this.m_fileUploadProps.imageHeight.toString(),
		);
		i.append("timestamp", this.m_fileUploadProps.timestamp.toString());
		i.append("hmac", this.m_fileUploadProps.hmac);
		this.m_Callbacks.PopulateCommitFileUploadFormData(
			i,
			this.file_upload_props.uploadInfo,
			this.file_upload_props.fileInfo,
		);
		try {
			let t = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
				method: "POST",
				body: i,
				credentials: "include",
			});
			if (e) {
				this.m_fileUploadProps.uploadProgress = 0;
				this.m_fileUploadProps.eUploadState = 6;
				if (this.m_onComplete) {
					this.m_onComplete(1, r.size);
				}
			} else {
				this.m_fileUploadProps.eUploadState = 3;
				if (this.m_onComplete) {
					this.m_onComplete(2, r.size);
				}
			}
			return t;
		} catch (t) {
			if (!e) {
				return null;
			}
			let n = null;
			(0, s.h5)(() => {
				this.LogFileUploadMessage(t);
				this.m_fileUploadProps.uploadProgress = 0;
				this.m_fileUploadProps.eUploadState = 3;
				if (t.response) {
					let e = t.response.data;
					t.response.status;
					if (e) {
						e.success;
					}
					n = e.message
						? e.message
						: (0, l.we)("#Chat_Settings_Error_ServerError");
				} else {
					n = (0, l.we)("#ConnectionTrouble_FailedToConnect");
				}
				this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${n}`;
				if (this.m_onComplete) {
					this.m_onComplete(2, r.size);
				}
			});
			throw n;
		}
	}
	ClearFileUploadError() {
		if (
			this.m_fileUploadProps.eUploadState == 3 ||
			this.m_fileUploadProps.eUploadState == 4 ||
			this.m_fileUploadProps.eUploadState == 5
		) {
			this.Reset();
		}
	}
	Reset() {
		this.SetFileToUpload(null);
	}
}
function d(e) {
	return new Promise((t) => {
		let r = new FileReader();
		r.onload = () => {
			let n = e;
			let i = (function (e) {
				let t = new DataView(e);
				let r = 0;
				let n = 0;
				let i = [];
				let a = 0;
				if (t.getUint16(r) == 65496) {
					r += 2;
					let s = t.getUint16(r);
					for (r += 2; r < t.byteLength && r < 131072; ) {
						if (s == 65505) {
							i[a] = {
								recess: n,
								offset: r - 2,
							};
							n = r + t.getUint16(r);
							a++;
						} else if (s == 65498) {
							break;
						}
						r += t.getUint16(r);
						s = t.getUint16(r);
						r += 2;
					}
					let o = e.byteLength - n;
					i.forEach((e) => {
						o += e.offset - e.recess;
					});
					if (o === e.byteLength) {
						return e;
					}
					const l = new Uint8Array(o);
					if (i.length > 0) {
						let t = 0;
						i.forEach((r) => {
							let n = r.offset - r.recess;
							l.set(new Uint8Array(e.slice(r.recess, r.offset)), t);
							t += n;
						});
						l.set(new Uint8Array(e.slice(n)), t);
					}
					return l.buffer;
				}
				return e;
			})(r.result);
			let a = new Blob([i], {
				type: e.type,
			});
			if (a) {
				let t = a;
				t.lastModifiedDate = new Date(e.lastModified);
				t.name = e.name;
				n = t;
			}
			if (e.type.indexOf("image") == 0) {
				let r = new Image();
				r.src = URL.createObjectURL(e);
				r.onload = (e) => {
					t({
						file: n,
						width: r.width,
						height: r.height,
					});
				};
			} else {
				t({
					file: n,
					width: 0,
					height: 0,
				});
			}
		};
		r.readAsArrayBuffer(e);
	});
}
(0, n.Cg)([s.XI], i6.prototype, "SetUploadFileError", null);
(0, n.Cg)([s.XI], i6.prototype, "StartFileExportToUpload", null);
(0, n.Cg)([s.XI], i6.prototype, "SetImageFileToUpload", null);
(0, n.Cg)([s.XI], i6.prototype, "SetOtherFileToUpload", null);
(0, n.Cg)([s.XI], i6.prototype, "SetFileToUpload", null);
(0, n.Cg)([s.XI], i6.prototype, "RetryFileUpload", null);
(0, n.Cg)([s.XI], i6.prototype, "BeginFileUpload", null);
(0, n.Cg)([s.XI], i6.prototype, "DoFileUpload", null);
(0, n.Cg)([s.XI], i6.prototype, "CommitFileUpload", null);
(0, n.Cg)([s.XI], i6.prototype, "ClearFileUploadError", null);
(0, n.Cg)([s.XI], i6.prototype, "Reset", null);
