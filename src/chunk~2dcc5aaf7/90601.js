import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./83957.js";
import s, { Gn, h5 } from "./89193.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import c from "./72476.js";
const a = i;
class m {
	constructor() {
		Gn(this);
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
Cg([s.sH], m.prototype, "file", undefined);
Cg([s.sH], m.prototype, "dataURL", undefined);
Cg([s.sH], m.prototype, "imageWidth", undefined);
Cg([s.sH], m.prototype, "imageHeight", undefined);
Cg([s.sH], m.prototype, "eUploadState", undefined);
Cg([s.sH], m.prototype, "uploadProgress", undefined);
Cg([s.sH], m.prototype, "strErrorDescription", undefined);
export class i6 {
	m_Callbacks;
	m_fileUploadProps = new m();
	m_onComplete;
	constructor(e) {
		Gn(this);
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
		const { displayFilename, info, onComplete } = t;
		this.m_fileUploadProps.eUploadState = 7;
		this.m_fileUploadProps.uploadProgress = 0;
		this.m_onComplete = onComplete;
		this.m_fileUploadProps.fileInfo = info;
		this.SetFileToUpload(e);
		this.m_fileUploadProps.displayFileName = displayFilename;
	}
	async SetImageFileToUpload(e, t = {}) {
		const { processor = d, info } = t;
		if (!e) {
			this.SetFileToUpload(null);
			return;
		}
		this.m_fileUploadProps.fileInfo = info;
		const i = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
		if (e.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
			this.SetUploadFileError(
				4,
				Localize(
					"#Chat_Settings_Error_ChatFileTooLarge_dynamic",
					i,
					this.m_Callbacks.GetMaxFileSizeMB(),
				),
			);
			return;
		}
		let a = e.name.split(".").pop().toLowerCase();
		if (
			![
				"jpg",
				"jpeg",
				"png",
				"gif",
				"webm",
				"mpg",
				"mp4",
				"mpeg",
				"ogv",
			].includes(a)
		) {
			this.SetUploadFileError(
				5,
				Localize("#Chat_Settings_Error_ChatFileTypeNotSupported", i),
			);
			return;
		}
		const s = await processor(e);
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
				Localize(
					"#Chat_Settings_Error_ChatFileTooLarge_dynamic",
					r,
					this.m_Callbacks.GetMaxFileSizeMB(),
				),
			);
			return;
		}
		let n = e.name.split(".").pop().toLowerCase();
		if (["zip"].includes(n)) {
			this.SetFileToUpload(e);
		} else {
			this.SetUploadFileError(
				5,
				Localize("#Chat_Settings_Error_ChatFileTypeNotSupported", r),
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
			this.m_fileUploadProps.uploadFileName = `${window.performance.now()}_${
				this.m_fileUploadProps.file.name
			}`;
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
			const { eResult, file } = await this.m_fileUploadProps.exportFn((e) => {
				h5(() => {
					this.m_fileUploadProps.uploadProgress = e * 0.5;
				});
			});
			if (eResult != 1 || !file) {
				this.SetUploadFileError(
					3,
					Localize("#Chat_Settings_Error_ExportFailed"),
				);
				return new Response();
			}
			this.m_fileUploadProps.file = file;
			this.m_fileUploadProps.uploadFileName = `${window.performance.now()}_${
				file.name
			}`;
		}
		let t = this.m_fileUploadProps.file;
		if (!t) {
			AssertMsg(
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
				h5(() => {
					this.m_fileUploadProps.eUploadState = 3;
					this.LogFileUploadMessage(t);
					r = e?.message
						? e?.message
						: Localize("#Chat_Settings_Error_ServerError");
					this.m_fileUploadProps.strErrorDescription = Localize(
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
			let t = e || Localize("#ConnectionTrouble_FailedToConnect");
			h5(() => {
				this.m_fileUploadProps.eUploadState = 3;
				this.m_fileUploadProps.strErrorDescription = Localize(
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
					h5(() => {
						this.m_fileUploadProps.uploadProgress = n;
					});
				}
			},
			headers: {},
			transformRequest: [(e) => e],
		};

		for (let r of e.request_headers) {
			if (r.name != "Content-Length" && r.name != "Host") {
				n.headers[r.name] = r.value;
			}
		}

		try {
			await a.put(r, t, n);
			return this.CommitFileUpload(true, e.ugcid);
		} catch (t) {
			this.LogFileUploadMessage(t.response);
			h5(() => {
				this.m_fileUploadProps.strErrorDescription = Localize(
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
			h5(() => {
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
						: Localize("#Chat_Settings_Error_ServerError");
				} else {
					n = Localize("#ConnectionTrouble_FailedToConnect");
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
			let i = ((e) => {
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
Cg([s.XI], i6.prototype, "SetUploadFileError", null);
Cg([s.XI], i6.prototype, "StartFileExportToUpload", null);
Cg([s.XI], i6.prototype, "SetImageFileToUpload", null);
Cg([s.XI], i6.prototype, "SetOtherFileToUpload", null);
Cg([s.XI], i6.prototype, "SetFileToUpload", null);
Cg([s.XI], i6.prototype, "RetryFileUpload", null);
Cg([s.XI], i6.prototype, "BeginFileUpload", null);
Cg([s.XI], i6.prototype, "DoFileUpload", null);
Cg([s.XI], i6.prototype, "CommitFileUpload", null);
Cg([s.XI], i6.prototype, "ClearFileUploadError", null);
Cg([s.XI], i6.prototype, "Reset", null);
