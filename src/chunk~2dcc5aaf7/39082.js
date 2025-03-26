var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require("./333.js");
import { BlobToFile } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
var l = require("./88341.js");
class c {
	dataUrl = undefined;
	width = undefined;
	height = undefined;
	type = undefined;
	status = undefined;
	message = undefined;
	language;
	file;
	uploadTime;
	fileType = 0;
	constructor(e, t, r, n, s, o) {
		(0, i.Gn)(this);
		this.file = e;
		this.fileType = l.i6.GetExtensionTypeFromURL(e.name);
		this.language = t;
		this.uploadTime = Date.now();
		this.status = "pending";
		if (r) {
			const e = (0, a.vz)(this.fileType, r);
			let t = (0, l.AS)(s, o, e, false);
			if (t === undefined) {
				t = (0, l.AS)(s, o, e, true);
			}
			this.type = t || r[0];
		}
		this.height = o;
		this.width = s;
		this.dataUrl = n;
	}
	IsValidAssetType(e, t, r) {
		let n = 0;
		let i = 0;
		let s = false;
		let c = !e || e.length === 0 || e.includes(this.type);
		if (t) {
			n = t.width;
			i = t.height;
			s = true;
		} else if (this.type) {
			const e = a.Fj[this.type];
			if (e) {
				n = e.width;
				i = e.height;
				s = !e.bDisableEnforceDimensions;
			}
		}
		const m = this.width >= n && this.height >= i;
		const u = s ? this.width === n && this.height === i : m;
		const d = r && r != this.fileType;
		const A =
			!!e && !!(e.length > 0) && (0, a.vz)(this.fileType, e || []).length == 0;
		const g = Boolean(p(this.fileType));
		let h = "";
		let C = false;
		if (c) {
			if (A) {
				h = (0, Localize)("#ImageUpload_InvalidFileType");
			} else if (d) {
				h = (0, Localize)(
					"#ImageUpload_InvalidFormat",
					l.i6.GetExtensionStringForFileType(r),
				);
			} else if (u || g) {
				if (m) {
					if (!u && g) {
						h = (0, Localize)("#ImageUpload_InvalidDimensions", n, i);
						C = true;
					}
				} else {
					h = (0, Localize)("#ImageUpload_TooSmall", n, i);
				}
			} else {
				h = (0, Localize)("#ImageUpload_InvalidResolution", n, i);
			}
		} else {
			h = (0, Localize)("#ImageUpload_InvalidFormatSelected");
		}
		return {
			error: h,
			needsCrop: C,
			match: this.type,
		};
	}
}
(0, n.Cg)([i.sH], c.prototype, "dataUrl", undefined);
(0, n.Cg)([i.sH], c.prototype, "width", undefined);
(0, n.Cg)([i.sH], c.prototype, "height", undefined);
(0, n.Cg)([i.sH], c.prototype, "type", undefined);
(0, n.Cg)([i.sH], c.prototype, "status", undefined);
(0, n.Cg)([i.sH], c.prototype, "message", undefined);
export class _u extends c {
	video;
	constructor(e, t, r, n) {
		super(e, t, n, r.src, r.videoWidth, r.videoHeight);
		this.video = r;
	}
	BIsOriginalMinimumDimensions(e) {
		return (0, a.s4)(this.video.videoWidth, this.video.videoHeight, e);
	}
	GetResizeDimension() {}
}
export class DA extends c {
	constructor(e, t, r) {
		super(e, t, r, URL.createObjectURL(e), 0, 0);
	}
	BIsOriginalMinimumDimensions(e) {
		return (0, a.XY)(e);
	}
	GetResizeDimension() {}
}
function d(e) {
	const t = e.split(".").pop().toLocaleLowerCase();
	return t == "webm" || t == "mp4";
}
export class i9 extends c {
	bCropped = false;
	localizedImageGroupPrimaryImage;
	media;
	constructor(e, t, r, n, a) {
		super(
			e,
			t,
			n,
			r.src,
			d(e.name) ? r.videoWidth : r.width,
			d(e.name) ? r.videoHeight : r.height,
		);
		(0, i.Gn)(this);
		this.media = r;
		this.localizedImageGroupPrimaryImage = a;
	}
	ResetImage() {
		this.height = this.media.height;
		this.width = this.media.width;
		this.dataUrl = this.media.src;
	}
	async CropImage(e, t, r, n, i, a, o) {
		return new Promise((l, c) => {
			const m = p(o);
			if (!m) {
				c("Invalid format provided");
				return;
			}
			const u = document.createElement("canvas");
			u.width = i;
			u.height = a;
			u.getContext("2d").drawImage(this.media, e, t, r, n, 0, 0, i, a);
			u.toBlob((e) => {
				const t = u.toDataURL(m);
				if (o !== 3 && t.startsWith("data:image/png")) {
					c("Unable to encode into the requested file format");
				} else {
					this.file = BlobToFile(e, this.file.name);
					this.width = i;
					this.height = a;
					this.dataUrl = t;
					this.uploadTime = Date.now();
					this.bCropped = true;
					l();
				}
			});
		});
	}
	BIsOriginalMinimumDimensions(e) {
		return (0, a.s4)(this.media.width, this.media.height, e);
	}
	GetResizeDimension() {
		return (function (e) {
			if (e === "background") {
				return [
					{
						width: 960,
						height: 311,
					},
					{
						width: 480,
						height: 156,
					},
				];
			}
			if (e === "capsule") {
				return [
					{
						width: a.Fj[e].width / 2,
						height: a.Fj[e].height / 2,
					},
				];
			}
			if (e === "spotlight") {
				return [
					{
						width: a.Fj[e].width / 2,
						height: a.Fj[e].height / 2,
					},
				];
			}
			return;
		})(this.type);
	}
}
function p(e) {
	switch (e) {
		case 3:
			return "image/png";
		case 1:
			return "image/jpeg";
	}
}
(0, n.Cg)([i.sH], i9.prototype, "bCropped", undefined);
